(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.modes.explore :as explore]
   [guitar.modes.guess :as guess]
   [guitar.notes :refer [notes string-notes]]
   [guitar.setup :refer [scale-length tuning]]
   [rum.core :as rum]))


(def notes-of-string
  "Finds notes of a string, starting from the provided note."
  (partial string-notes notes (inc scale-length)))


(defonce state
  (atom
   {:tuning tuning
    ;; :mode   :explore
    :mode   :guess
    :guess  guess/state
    :explore explore/state}))


(rum/defc app < rum/reactive
  "Main component. Dispatches to other components based on the :mode of the state."
  [state]
  (let [mode (:mode (rum/react state))
        mode-state (rum/cursor state mode)
        strings-notes (->> @state
                           :tuning
                           (map notes-of-string)
                           (map (partial map #(conj {} [:note %])))
                           (reverse))]
    [:div
     [:button {:on-click #(swap! state assoc :mode :guess)} "Guess"]
     [:button {:on-click #(swap! state assoc :mode :explore)} "Explore scales"]
     ((condp = mode
        :guess guess/guess-fretboard-notes
        :explore explore/visualize-scale)
      strings-notes
      mode-state)]))


(defn mount
  "Mounts the application to the dom."
  []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload
  "Hook run after figwheel has reloaded."
  []
  (mount))