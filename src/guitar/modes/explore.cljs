(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.guitar :refer [guitar]]
   [rum.core :as rum]))


(def state
  {:root "c"
   :scale :major
   :start-fret 8
   :highlight #{1}})


(defn hl-notes [note notes-to-highlight scale-notes default]
  (let [hl-colors (remove (partial = default)
                          (range 5))]
    ((->> notes-to-highlight
          (map dec)
          (map (partial nth (cycle scale-notes)))
          (map vector hl-colors)
          (map reverse)
          (map vec)
          (into {}))
     note
     default)))


(defn toggle-in [el a-set]
  ((if (a-set el) disj conj) a-set el))


(rum/defc toggle-highlighted-notes [scale-notes on-click]
  (map-indexed
   (fn [index note]
     [:button
      {:on-click #(on-click (inc index))}
      note])
   scale-notes))


(rum/defc visualize-scale < rum/reactive [strings-notes state]
  (let [{:keys [root scale start-fret highlight]} (rum/react state)
        in-scale? (set (scale-notes root scale))]
    (rum/fragment
     [:div (guitar
            {:class "guitar--faded"}
            #(swap! state assoc :start-fret (:fret %))
            ((scale-pattern scale)
             strings-notes
             in-scale?
             start-fret
             #(assoc % :hl (hl-notes (:note %) highlight (seq in-scale?) 4))))]
     [:select
      {:on-change #(swap! state assoc :root (->> % .-currentTarget .-value))}
      (->> notes (map #(vector :option {:key %} %)))]
     [:select
      {:value (name scale)
       :on-change #(swap! state assoc :scale (->> % .-currentTarget .-value (keyword)))}
      (->> scales (keys) (map name) (map #(vector :option {:key %} %)))]
     [:div
      (toggle-highlighted-notes
       in-scale?
       #(swap! state update :highlight (partial toggle-in %)))])))


