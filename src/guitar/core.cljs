(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.setup :refer [scale-length tuning]]
   [guitar.notes :refer [string-notes notes prefixed-note ordinal-suffixed-number]]
   [rum.core :as rum]
   [guitar.unicode :refer [nbsp]]))


(def notes-of-string (partial string-notes notes (inc scale-length)))


(defn rand-note []
  {:string (inc (rand-int (count tuning)))
   :note   (rand-nth notes)})


(defonce state
  (atom
   {:tuning tuning
    :mode   :guess
    :guess  {:show-notes false
             :locate     (rand-note)}}))


(rum/defc guitar-nut [note] [:div.guitar-nut note])
(rum/defc guitar-fret [note] [:div.guitar-fret note])
(rum/defc guitar-string [visible notes]
  [:div.guitar-string
   (guitar-nut (if visible (first notes) nbsp))
   (->> (rest notes)
     (map (if visible identity (constantly nbsp)))
     (map guitar-fret)
     (map-indexed #(rum/with-key %2 %1)))])


(rum/defc locate-note-text [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number string)
           " string.")])


(rum/defc guess-fretboard-notes < rum/reactive [strings state]
  (let [notes-shown (:show-notes (rum/react state))
        reset-state #(reset! state {:show-notes false :locate (rand-note)})]
    [:div
     [:div.guitar
      {:on-click #(if notes-shown
                    (reset-state)
                    (swap! state update :show-notes not))}
      (->> strings
        (map (partial guitar-string notes-shown))
        (map-indexed #(rum/with-key %2 %1)))]
     [:h3.center-text
      (locate-note-text (:locate @state))
      (if notes-shown
        "Click the fretboard to try again."
        "Make a guess and click the fretboard to reveal the notes.")]]))


(rum/defc app < rum/reactive [state]
  (let [mode (:mode @state)
        mode-state (rum/cursor state mode)
        strings (->> @state :tuning (map notes-of-string) (reverse))]
    (condp = mode
      :guess (guess-fretboard-notes strings mode-state)
      nil)))


(defn mount []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload []
  (mount))