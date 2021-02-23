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
             #(assoc % :hl (hl-notes (:note %) highlight in-scale 0))))]
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
      (->> in-scale (count) (inc) (range 1))
      highlight
      #(swap! state update :highlight (partial toggle-in %))))))
