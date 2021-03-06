(ns guitar.buttons
  (:require
   [rum.core :as rum]))


(defn title-case [[fst & rst]]
  (if fst
    (apply str (.toUpperCase fst) rst)
    ""))


(rum/defc button
  ([props value] (button props value value))
  ([props value label]
   [:button.button
    {:class    (str
                 (or (:class props) " ")
                 " "
                 (when
                     (= (:value props) value)
                   "button--selected"))
     :on-click #((:on-click props) value)}
    (title-case label)]))


(rum/defc toggle-button [props on-value off-value]
  [:div.buttons
   (button
     (assoc props
            :value (when (true? (:value props)) on-value)
            :on-click #((:on-click props) true))
     on-value)
   (button
     (assoc props
            :value (when (false? (:value props)) off-value)
            :on-click #((:on-click props) false))
     off-value)])


(rum/defc buttons
  ([props values] (buttons props values values))
  ([props values labels]
   [:div.buttons
    (map
      #(rum/with-key
         (button props % (or (get labels %) %))
         %)
      values)]))


(rum/defc buttons-multi [values selected on-click format]
  [:div.buttons
   (map-indexed
     (fn [index value]
       [:button.button
        {:key      (str value index)
         :class    (when (selected (inc index)) "button--selected")
         :on-click #(on-click (inc index))}
        (format value)])
     values)])

