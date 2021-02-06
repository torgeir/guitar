(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.setup :refer [scale-length tuning]]
   [guitar.notes :refer [scales scale-notes string-notes notes prefixed-note ordinal-suffixed-number]]
   [rum.core :as rum]
   [guitar.unicode :refer [nbsp]]))


(def notes-of-string (partial string-notes notes (inc scale-length)))


(defn rand-note []
  {:string (inc (rand-int (count tuning)))
   :note   (rand-nth notes)})


(defonce state
  (atom
   {:tuning tuning
    :mode   :explore
    :guess  {:show-notes false
             :locate     (rand-note)}
    :explore {:root "c"
              :scale :major}}))


(rum/defc guitar-nut [note] [:div.guitar-nut note])
(rum/defc guitar-fret [note] [:div.guitar-fret note])
(rum/defc guitar-string [show? notes]
  [:div.guitar-string
   (guitar-nut (let [note (first notes)]
                 (if (show? note) note nbsp)))
   (->> (rest notes)
        (map #(if (show? %) % nbsp))
        (map guitar-fret)
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc locate-note-text [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number string)
           " string.")])


(rum/defc guitar [props string-notes show-notes?]
  [:div.guitar
   props
   (->> string-notes
        (map (partial guitar-string show-notes?))
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc guess-fretboard-notes < rum/reactive [string-notes state]
  (let [notes-shown (:show-notes (rum/react state))
        reset-state #(reset! state {:show-notes false :locate (rand-note)})]
    [:div
     (guitar
      {:on-click #(if notes-shown
                    (reset-state)
                    (swap! state update :show-notes not))}
      string-notes
      (constantly notes-shown))
     [:h3.center-text
      (locate-note-text (:locate @state))
      (if notes-shown
        "Click the fretboard to try again."
        "Make a guess and click the fretboard to reveal the notes.")]]))


(rum/defc scale-visualizer < rum/reactive [string-notes state]
  (let [{:keys [root scale]} (rum/react state)]
    (rum/fragment
     [:div (guitar {} string-notes (set (scale-notes root scale)))]
     [:select
      {:on-change #(swap! state assoc :root (->> % .-currentTarget .-value))}
      (->> notes (map #(vector :option {:key %} %)))]
     [:select
      {:on-change #(swap! state assoc :scale (->> % .-currentTarget .-value (keyword)))}
      (->> scales (keys) (map name) (map #(vector :option {:key %} %)))])))


(rum/defc app < rum/reactive [state]
  (let [mode (:mode (rum/react state))
        mode-state (rum/cursor state mode)
        strings-notes (->> @state :tuning (map notes-of-string) (reverse))]
    [:div
     [:button {:on-click #(swap! state assoc :mode :guess)} "Guess"]
     [:button {:on-click #(swap! state assoc :mode :explore)} "Explore scales"]
     ((condp = mode
        :guess guess-fretboard-notes
        :explore scale-visualizer)
      strings-notes mode-state)]))


(defn mount []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload []
  (mount))