(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes modes ordinal-suffixed-number]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.buttons :refer [buttons buttons-multi]]
   [guitar.guitar :refer [guitar]]
   [guitar.math :refer [diff]]
   [guitar.sets :refer [toggle-in]]
   [rum.core :as rum]))


(def state
  {:root "c"
   :mode :ionian
   :scale :major
   :start-fret 8
   :highlight #{1}})


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


(defn colored-guitar [state notes in-scale start-fret scale-highlight]
  (guitar {:class "guitar--faded"}
          #(swap! state assoc :start-fret (:fret %))
          (notes (set in-scale)
                 start-fret
                 #(assoc % :hl (hl-notes (:note %) scale-highlight in-scale 0)))))


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

(defn remove-overshooting-hl [in-scale highlights]
  (remove #(>= (dec %) (count in-scale))
          highlights))

(defn data [strings-notes scale-state]
  (let [{:keys [root scale start-fret highlight mode]}
        scale-state
        in-scale (scale-notes root scale mode)]
    {:scale           scale
     :root            root
     :mode            mode
     :start-fret      start-fret
     :in-scale        in-scale
     :notes           (partial (scale-pattern scale) strings-notes)
     :scale-highlight (set (remove-overshooting-hl in-scale highlight))
     :scale-modes     (take (count in-scale) modes)}))


(def zip (partial map vector))


(defn combine-scales [as bs]
  (->> bs
    (zip as)
    (map (partial remove nil?))
    (map #(if (empty? %) nil %))))


(defn btns [scale-modes mode root strings-notes scale start-fret in-scale scale-highlight]
  (rum/fragment
    [:div]
    (rum/with-key (mode-buttons state scale-modes mode) "modes")
    (rum/with-key (note-buttons state root #(find-closest-fret-index
                                              (last strings-notes)
                                              (set (scale-notes % scale mode))
                                              start-fret
                                              %))
      "notes")
    (rum/with-key (scale-buttons state scales scale) "scales")
    (rum/with-key (highlight-buttons state in-scale scale-highlight) "highlights")))

(rum/defc visualize-scale < rum/reactive [strings-notes state]
  (let [{:keys [in-scale start-fret notes scale-highlight scale-modes scale root mode]} (data strings-notes (rum/react state))]
    (rum/fragment
      [:div] ;; bug?
      (rum/with-key (colored-guitar state notes in-scale start-fret scale-highlight) "guitar")
      (btns scale-modes mode root strings-notes scale start-fret in-scale scale-highlight))))
