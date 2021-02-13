(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.guitar :refer [guitar]]
   [rum.core :as rum]))


(def state
  {:root "c"
   :scale :major
   :start-fret 8})


(rum/defc visualize-scale < rum/reactive [strings-notes state]
  (let [{:keys [root scale start-fret]} (rum/react state)
        in-scale? (set (scale-notes root scale))]
    (rum/fragment
     [:div (guitar {:class "guitar--faded"}
                   #(swap! state assoc :start-fret (:fret %))
                   ((scale-pattern scale) strings-notes in-scale? start-fret #(assoc % :hl 1)))]
     [:select
      {:on-change #(swap! state assoc :root (->> % .-currentTarget .-value))}
      (->> notes (map #(vector :option {:key %} %)))]
     [:select
      {:value (name scale)
       :on-change #(swap! state assoc :scale (->> % .-currentTarget .-value (keyword)))}
      (->> scales (keys) (map name) (map #(vector :option {:key %} %)))])))


