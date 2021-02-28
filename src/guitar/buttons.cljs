(ns guitar.buttons
  (:require
   [rum.core :as rum]))


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


(rum/defc buttons-multi [values selected on-click format]
  [:div.buttons
   (map-indexed
    (fn [index value]
      [:button.button
       {:key (str value index)
        :class (when (selected (inc index)) "button--selected")
        :on-click #(on-click (inc index))}
       (format value)])
    values)])

