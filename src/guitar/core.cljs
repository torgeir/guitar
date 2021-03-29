(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.modes.explore :as explore]
   [guitar.modes.guess :as guess]
   [guitar.notes :refer [notes string-notes]]
   [guitar.setup :refer [scale-length tuning]]
   [guitar.buttons :refer [button]]
   [rum.core :as rum]
   [cognitect.transit :as t]))


(def state-writer (t/writer :json))


(def state-reader (t/reader :json))


(defn state-str [state]
  (->> state
    (t/write state-writer)
    (js/encodeURIComponent)))


(defn read-state-str [state-str]
  (->> state-str
    (js/decodeURIComponent)
    (t/read state-reader)))


(defn nil-if-empty [s]
  (if (empty? s) nil s))


(defn location-hash
  ([] (->> js/location .-hash (drop 1) (apply str) (nil-if-empty)))
  ([hash] (set! (.-hash js/location) hash)))


(def default-state
  {:tuning  tuning
   :theme   :dark
   :mode    :explore
   :guess   guess/state
   :explore explore/state})


(defonce state
  (atom
    (if-let [hash (location-hash)]
      (read-state-str hash)
      default-state)))


(add-watch state :mode (fn [_ _ _ state]
                         (js/setTimeout
                           #(location-hash (state-str state)))))


(defn cycle-theme [v]
  (condp = v
    :light :dark
    :dark  :light
    :dark))


(def notes-of-string
  "Finds notes of a string, starting from the provided note."
  (partial string-notes notes (inc scale-length)))


(defn state-link [[s text]]
  [:p {:key text}
   [:a.explore-example
    {:href "#" :on-click #(reset! state (assoc default-state :explore s))}
    text]])


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
      [:button.button.button--huge
       {:on-click #(swap! state assoc :mode :explore)} "Explore scales"]
      [:button.button.button--huge
       {:on-click #(swap! state assoc :mode :guess)} "Guess notes"]]
     ((condp = mode
        :guess   guess/guess-fretboard-notes
        :explore explore/visualize-scales)
      (:tuning (rum/react state))
      strings-notes
      mode-state)
     [:.buttons
      (button {:value    (when (= (:tuning @state) tuning) "6-string")
               :on-click #(swap! state assoc :tuning tuning)} "6-string")
      (button {:value    (when (= (:tuning @state) (vec (concat "b" tuning))) "7-string")
               :on-click #(swap! state assoc :tuning (vec (concat "b" tuning)))} "7-string")
      (button {:value    (when (= (:tuning @state) (vec (concat "g" "b" tuning))) "8-string")
               :on-click #(swap! state assoc :tuning (vec (concat "g" "b" tuning)))} "8-string")]
     [:h3 "Examples"]
     (map (comp state-link (juxt :state :text)) explore/example-states)
     (comment [:button
               {:on-click #(swap! state update :theme cycle-theme)}
               (str (name theme) " theme")])]))


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