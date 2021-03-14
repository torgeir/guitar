(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes modes ordinal-suffixed-number]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.buttons :refer [buttons buttons-multi]]
   [guitar.guitar :refer [guitar]]
   [guitar.math :refer [diff]]
   [guitar.sets :refer [toggle-in]]
   [rum.core :as rum]))


(def default-state
  {:root       "c"
   :mode       :ionian
   :scale      :major
   :start-fret 8
   :color      0
   :highlight  #{1}})

(defonce state
  {:scales [:scale-0]
   :scale-0 default-state})


(defn indexed-map [set]
  (->> set
       (map-indexed vector)
       (map (juxt (comp inc first) second))
       (map reverse)
       (map vec)
       (into {})))


(defn hl-notes [note notes-to-highlight scale-notes default]
  (let [keys (map (partial nth scale-notes) (map dec notes-to-highlight))
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
   {:value (name mode)
    :on-click #(swap! state assoc :mode (keyword %))}
   (map name modes)))


(defn scale-buttons [state scales scale]
  (buttons {:value (name scale)
            :on-click #(swap! state assoc :scale (->> % keyword))}
           (map (comp name first) scales)))


(defn note-buttons [state root find-start-fret]
  (buttons {:value root
            :on-click #(swap! state assoc
                              :root %
                              :start-fret (find-start-fret %))}
           notes))


(defn highlight-buttons [state in-scale scale-highlight]
  (buttons-multi (->> in-scale (count) (inc) (range 1))
                 scale-highlight
                 #(swap! state update :highlight (partial toggle-in %))
                 ordinal-suffixed-number))


(def zip (partial map vector))


(defn combine-scales [as bs]
  (->> bs
       (zip as)
       (map (partial remove nil?))
       (map #(if (empty? %) nil %))))


(rum/defc visualize-scale < rum/reactive [strings-notes state]
  (let [{:keys [root scale start-fret highlight mode]} (rum/react state)
        in-scale (scale-notes root scale mode)
        scale-pattern-notes (partial (scale-pattern scale) strings-notes)
        scale-highlight (set (remove #(>= (dec %) (count in-scale)) highlight))
        scale-modes (take (count in-scale) modes)
        notes (scale-pattern-notes
               (set in-scale)
               start-fret
               #(assoc % :hl (hl-notes (:note %) scale-highlight in-scale 0)))]
    (rum/fragment
     [:div] ; bug?
     (rum/with-key
       (guitar {:class "guitar--faded"}
               #(swap! state assoc :start-fret (:fret %))
               notes) "guitar")
     (rum/with-key
       (mode-buttons state scale-modes mode) "modes")
     (rum/with-key
       (note-buttons state root #(find-closest-fret-index
                                  (last strings-notes)
                                  (set (scale-notes % scale mode))
                                  start-fret
                                  %))
       "notes")
     (rum/with-key
       (scale-buttons state scales scale) "scales")
     (rum/with-key
       (highlight-buttons state in-scale scale-highlight) "highlights"))))


(defn scale-key [n]
  (keyword (str "scale-" n)))

(rum/defc visualize-scales < rum/reactive [strings-notes state]
  (rum/fragment
    [:div]
    [:div.buttons
    (buttons {:on-click #(do
                           (swap! state dissoc (last (:scales @state)))
                           (swap! state update :scales drop-last))}
             "-")

    (buttons {:on-click #(let [num-scales (count (:scales @state))
                               key (scale-key num-scales)]
                           (swap! state assoc
                                  :scales (conj (:scales @state) key)
                                  key (or ((scale-key (dec num-scales)) @state)
                                          default-state)))}
             "+")]

  (->> (:scales (rum/react state))
       (map (partial rum/cursor state))
       (map #(visualize-scale strings-notes %1))
       (map-indexed #(rum/with-key %2 %1)))))
