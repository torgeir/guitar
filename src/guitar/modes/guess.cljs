(ns guitar.modes.guess
  (:require
   [guitar.guitar :refer [guitar]]
   [guitar.notes :refer [notes ordinal-suffixed-number prefixed-note]]
   [guitar.setup :refer [tuning]]
   [guitar.unicode :refer [nbsp]]
   [rum.core :as rum]))


(defn rand-note
  "Returns a map with a random note on a random string."
  []
  {:string (inc (rand-int (count tuning)))
   :note   (rand-nth notes)})


(def state
  {:show-notes false
   :locate     (rand-note)
   :attempt nil})


(defn conceal-note [note]
  (assoc note :note nbsp))


(defn highlight-correct [locate string _ note]
  (if (and (= (inc string) (:string locate))
           (= (:note note) (:note locate)))
    (assoc note :hl 1)
    note))


(defn highlight-attempt [attempt string fret note]
  (if (and (= string (:string attempt))
           (= fret (:fret attempt)))
    (assoc note :hl 0)
    note))


(rum/defc locate-note-text
  "Text displayed suggesting what note to locate."
  [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number string)
           " string.")])


(rum/defc guess-fretboard-notes < rum/reactive
  "A mode to guess where a note is located on a given string."
  [strings-notes state]
  (let [reset-state #(reset! state {:locate (rand-note) :attempt nil})
        attempt (:attempt (rum/react state))
        locate (:locate (rum/react state))]
    [:div
     (guitar
      {}
      #(if attempt
         (reset-state)
         (swap! state assoc :attempt %))
      (->> strings-notes
           (map (partial map (if-not attempt conceal-note identity)))
           (map-indexed (fn [string string-notes]
                          (map-indexed
                           #(->> %2
                                 (highlight-attempt attempt string %1)
                                 (highlight-correct locate string %1))
                           string-notes)))))
     [:h3.center-text
      (locate-note-text (:locate @state))
      (if attempt
        "Click the fretboard to try again."
        "Make a guess and click the fretboard to reveal the notes.")]]))

