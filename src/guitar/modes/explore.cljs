(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.guitar :refer [guitar]]
   [cljsjs.react-select]
   [oops.core :refer [oset!]]
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
  ((if (a-set el)
     disj
    conj) a-set el))


(rum/defc toggle-highlighted-notes [scale-notes on-click]
  (map-indexed
   (fn [index note]
     [:button
      {:key (str note index)
       :on-click #(on-click (inc index))}
      note])
   scale-notes))


(defn to-option [value]
  {:value value
   :label value})


(defn to-options [values]
  (map to-option values))


(defn from-value [option]
  (get (js->clj option) "value"))


(rum/defc select [{:keys [is-multi on-change value]} values]
  (println value)
  (rum/adapt-class
   js/Select
   {:on-change on-change
    :is-multi (or is-multi false)
    :value (clj->js (to-options value))
    :options (clj->js (to-options values))}))


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
     (select {:value [root]
              :on-change #(swap! state assoc :root (from-value %))}
             notes)
     (select {:value [(name scale)]
              :on-change #(swap! state assoc :scale
                                 (->> % from-value keyword))}
             (->> scales (keys) (map name)))
     (select {:is-multi true
              :on-change #(swap! state assoc :highlight
                                 (map (comp clj->js from-value) (clj->js %)))
              :value highlight}
             (map inc (range 7))))))


