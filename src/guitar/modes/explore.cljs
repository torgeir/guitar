(ns guitar.modes.explore
  (:require
   [guitar.notes :refer [scales scale-notes notes]]
   [guitar.patterns :refer [scale-pattern]]
   [guitar.guitar :refer [guitar]]
   [cljsjs.react-select]
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


(rum/defc button [props value]
  [:button.button
   {:class (when (= (:value props) value) "button--selected")
    :on-click #((:on-click props) value)}
   value])


(rum/defc buttons [props values]
  [:div.buttons
   (map
    #(rum/with-key (button props %) %)
    values)])


(rum/defc buttons-multi [values highlighted on-click]
  [:div.buttons
   (map-indexed
    (fn [index value]
      [:button.button
       {:key (str value index)
        :class (when (highlighted (inc index)) "button--selected")
        :on-click #(on-click (inc index))}
       value])
    values)])


(rum/defc visualize-scale < rum/reactive [strings-notes state]
  (let [{:keys [root scale start-fret highlight]} (rum/react state)
        in-scale (scale-notes root scale)]
    (rum/fragment
     [:div (guitar
            {:class "guitar--faded"}
            #(swap! state assoc :start-fret (:fret %))
            ((scale-pattern scale)
             strings-notes
             (set in-scale)
             start-fret
             #(assoc % :hl (hl-notes (:note %) highlight in-scale 4))))]
     (rum/with-key
       (buttons {:value root
                 :on-click #(swap! state assoc :root %)}
                notes)
       "notes")
     (rum/with-key
       (buttons {:value (name scale)
                 :on-click #(swap! state assoc :scale
                                   (->> % keyword))}
                (->> scales (keys) (map name)))
       "scales")
     (buttons-multi
      (range 1 8)
      highlight
      #(swap! state update :highlight (partial toggle-in %))))))
