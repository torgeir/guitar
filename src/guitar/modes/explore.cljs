(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes index-of notes modes ordinal-suffixed-number]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.buttons :refer [button buttons buttons-multi]]
   [guitar.guitar :refer [guitar]]
   [guitar.math :refer [diff]]
   [guitar.sets :refer [toggle-in]]
   [hashp.core]
   [rum.core :as rum]))


(defn scale-key []
  (keyword (str (random-uuid))))


(def default-state
  {:root       "c"
   :mode       :ionian
   :scale      :major
   :start-fret 8
   :color      0
   :highlight  #{1}})


(def state
  (as-> (scale-key) key
    {:scales      [key]
     key          default-state
     :joined-neck true}))


(defn update-scales [state f]
  (reduce
    (fn [acc k] (update acc k f))
    state
    (:scales state)))


(defn indexed-map [set]
  (->> set
    (map-indexed vector)
    (map (juxt (comp inc first) second))
    (map reverse)
    (map vec)
    (into {})))


(defn hl-notes [note notes-to-highlight scale-notes default]
  (let [keys        (map (partial nth scale-notes) (map dec notes-to-highlight))
        note-colors (select-keys (indexed-map scale-notes) (set keys))]
    (note-colors note default)))


(defn find-closest-fret-index [last-strings-notes scale-notes fret note]
  (->> last-strings-notes
    (map :note)
    (map-indexed vector)
    (filter #(scale-notes (second %)))
    (map (fn [[index note]] [(diff fret index) note index]))
    (sort-by first)
    (filter #(= note (second %)))
    (map last)
    (first)))


(defn mode-buttons [state modes mode]
  (buttons
    {:value    (name mode)
     :on-click #(swap! state assoc :mode (keyword %))}
    (map name modes)))


(defn scale-buttons [state scales scale]
  (buttons
    {:value    (name scale)
     :on-click #(swap! state assoc :scale (->> % keyword))}
    (map (comp name first) scales)))


(defn note-buttons [state root find-start-fret]
  (buttons
    {:value    root
     :on-click #(swap! state assoc
                       :root %
                       :start-fret (find-start-fret %))}
    notes))


(defn fret-button [state op fret text]
  (button
    {:value    fret
     :class    "button--square"
     :on-click #(swap! state update :start-fret op %)}
    text))


(defn highlight-buttons [state in-scale scale-highlight]
  (buttons-multi
    (->> in-scale (count) (inc) (range 1))
    scale-highlight
    #(swap! state update :highlight (partial toggle-in %))
    ordinal-suffixed-number))


(defn zip [& rest]
  (if (zero? (count rest))
    []
    (apply map vector rest)))


(defn distinct-non-highlighted [notes]
  (if (->> notes (map keys) (flatten) (set) :hl)
    (remove #(not (:hl %)) notes)
    (distinct notes)))


(defn combine-scales [& args]
  (->> args
    (apply zip)
    (map (partial remove nil?))
    (map #(if (empty? %) nil %))
    (map distinct-non-highlighted)))


(defn remove-overshooting-highlights [in-scale highlight]
  (remove #(>= (dec %) (count in-scale)) highlight))


(defn notes-of-scale [[start-fret color notes in-scale highlight]]
  (notes
    in-scale
    start-fret
    #(assoc % :hl
            (hl-notes (:note %) (set highlight) (vec in-scale) color))))


(defn active-scales [state]
  (map #(% state) (:scales state)))


(defn combined-in-scale [current-scales]
  (->> current-scales
    (map (juxt :root :scale :mode))
    (map (partial apply scale-notes))
    (map set)))


(defn combined-highlights [current-scales in-scales]
  (->> current-scales
    (map :highlight)
    (zip in-scales)
    (map
      (fn [[in-scale highlight]]
        (remove-overshooting-highlights in-scale highlight)))))


(defn combined-scale-data [current-scales in-scales tuning strings-notes highlights]
  (zip (map :start-fret current-scales)
       (map :color current-scales)
       (map #(partial (scale-pattern tuning (:scale %)) strings-notes)
            current-scales)
       in-scales
       highlights))


(defn combined-notes [scale-data]
  (map
    (partial apply combine-scales)
    (apply zip (map notes-of-scale scale-data))))


(defn insert-at [coll at n]
  (let [[l r] (split-at at coll)]
    (vec (concat l [n] r))))


(defn add-scale
  ([state new-key]
   (swap! state assoc
          :scales (conj (:scale @state) new-key)
          new-key default-state))
  ([state new-key before-key]
   (swap! state assoc
          :scales (insert-at
                    (:scales @state)
                    (index-of (:scales @state) before-key)
                    new-key)
          new-key (before-key @state))))


(rum/defc visualize-scale < rum/reactive [key on-sub-click on-add-click strings-notes state tuning joined-neck]
  (let [{:keys [root scale start-fret highlight mode color]}
        (rum/react state)
        in-scale        (scale-notes root scale mode)
        scale-highlight (set (remove-overshooting-highlights in-scale highlight))
        scale-modes     (take (count in-scale) modes)]
    (rum/fragment
      [:div]
      (when-not joined-neck
        (guitar {:class "guitar--faded"}
                #(swap! state assoc :start-fret (:fret %))
                (combined-notes
                  (list [start-fret
                         color
                         (partial (scale-pattern tuning scale) strings-notes)
                         (set in-scale)
                         scale-highlight]))))
      [:div.column
       [:div.column-col (fret-button state dec start-fret "❮")]
       [:div
        [:div.buttons (button {:class    "button--square"
                               :on-click #(on-sub-click key)} "-")]
        (rum/with-key (mode-buttons state scale-modes mode) "modes")
        (rum/with-key
          (note-buttons state root #(find-closest-fret-index
                                      (last strings-notes)
                                      (set (scale-notes % scale mode))
                                      start-fret
                                      %))
          "notes")
        (rum/with-key (scale-buttons state scales scale) "scales")
        (rum/with-key (highlight-buttons state in-scale scale-highlight) "highlights")
        [:div.buttons (button {:on-click #(swap! state assoc :color (rand-int 8))} "Colorize")]
        [:div.buttons (button {:class    "button--square"
                               :on-click #(on-add-click key)} "+")]]
       [:div.column-col
        (rum/with-key (fret-button state inc start-fret "❯") "fret")]])))


(rum/defc visualize-scales < rum/reactive [tuning strings-notes state]
  (let [{:keys [joined-neck]} @state]
    (rum/fragment
      [:div]
      (when joined-neck
        (let [current-scales (active-scales @state)
              in-scales      (combined-in-scale current-scales)
              highlights     (combined-highlights current-scales in-scales)
              scale-data     (combined-scale-data current-scales in-scales tuning strings-notes highlights)
              notes          (combined-notes scale-data)]
          (guitar {:class "guitar--faded"}
                  (fn [note]
                    (reset! state (update-scales @state #(assoc % :start-fret (:fret note)))))
                  notes)))
      (->> (:scales (rum/react state))
        (map (juxt identity (partial rum/cursor state)))
        (map (fn [[key cursor]]
               (visualize-scale
                 key
                 (fn [_]
                   (swap! state dissoc key)
                   (swap! state update :scales (fn [s] (vec (filter #(not= key %) s)))))
                 (fn [before-key]
                   (add-scale state (scale-key) before-key) "+")
                 strings-notes
                 cursor
                 tuning
                 joined-neck)))
        (map-indexed #(rum/with-key %2 %1)))
      (when (empty? (:scales (rum/react state)))
        [:.buttons
         (button {:on-click #(add-scale state (scale-key))} "+")])
      [:.buttons
       (button {:on-click #(swap! state assoc :joined-neck true)} "Single neck")
       (button {:on-click #(swap! state assoc :joined-neck false)} "Exploded neck")])))