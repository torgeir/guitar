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


(defn location-hash
  ([] (->> js/location .-hash (drop 1) (apply str)))
  ([hash] (set! (.-hash js/location) hash)))


(defonce state
  (atom
    {:tuning  tuning
     :theme   :dark
     :mode    (condp = (location-hash)
                "guess"   :guess
                "explore" :explore
                :explore)
     :guess   guess/state
     :explore explore/state}))


(add-watch
  state
  :mode
  (fn [_ _ _ {:keys [mode]}]
    (location-hash (name mode))))


(defn cycle-theme [v]
  (condp = v
    :light :dark
    :dark  :light
    :dark))


(rum/defc app < rum/reactive
  "Main component. Dispatches to other components based on the :mode of the state."
  [state]
  (let [mode          (:mode (rum/react state))
        theme         (:theme (rum/react state))
        mode-state    (rum/cursor state mode)
        strings-notes (->> @state
                        :tuning
                        (map notes-of-string)
                        (map (partial map #(conj {} [:note %])))
                        (reverse))]
    [:div
     {:class (str "theme--" (name theme))}
     [:div.buttons
      [:button.button.button--huge {:on-click #(swap! state assoc :mode :explore)} "Explore scales"]
      [:button.button.button--huge {:on-click #(swap! state assoc :mode :guess)} "Guess notes"]]
     ((condp = mode
        :guess   guess/guess-fretboard-notes
        :explore explore/visualize-scale)
      strings-notes
      mode-state)
     (comment [:button
               {:on-click #(swap! state update :theme cycle-theme)}
               (str (name theme) " theme")])]))


(def key-events
  {37 :left
   39 :right})


(defn on-key [e]
  (condp = (->> e (.-keyCode) (key-events))
    ;; TODO prevent multiple needed presses for notes that are >1 fret away
    :left  (swap! state update-in [:explore :start-fret] dec)
    :right (swap! state update-in [:explore :start-fret] inc)
    nil))


(defn mount
  "Mounts the application to the dom."
  []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)
    (.addEventListener js/window "keydown" on-key)))


(mount)


(defn ^:before-load before-reload
  "Hook run before figwheel has reloaded."
  []
  (.removeEventListener js/window "keydown" on-key))


(defn ^:after-load on-reload
  "Hook run after figwheel has reloaded."
  []
  (mount))