(ns guitar.modes.guess
  (:require
   [guitar.guitar :refer [guitar]]
   [guitar.notes :refer [notes ordinal-suffixed-number prefixed-note string-notes]]
   [guitar.setup :refer [tuning scale-length]]
   [guitar.unicode :refer [nbsp]]
   [rum.core :as rum]))


(defn rand-note
  "Returns a map with a random note on a random string."
  []
  (let [string (rand-int (count tuning))
        notes-of-string (string-notes notes (inc scale-length) (nth (reverse tuning) string))
        note (rand-nth notes)
        frets (keep-indexed #(when (= note %2) %1) notes-of-string)]
    {:string string :note note :frets (set frets)}))


(def state
  {:show-notes false
   :locate     (rand-note)
   :attempt nil})


(defn conceal-note [note]
  (assoc note :note nbsp))


(rum/defc locate-note-text
  "Text displayed suggesting what note to locate."
  [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number (inc string))
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
                           (fn [fret note]
                             (cond
                               (and ((:frets locate) (:fret attempt))
                                    (= (:note note) (:note locate))
                                    (= string (:string attempt) (:string locate))) (assoc note :hl 5)
                               (and (= string (:string locate))
                                    (= (:note note) (:note locate))) (assoc note :hl 1)
                               (and (= fret (:fret attempt))
                                    (= string (:string attempt))) (assoc note :hl 0)
                               :else note))
                           string-notes)))))
     [:h3.center-text
      (locate-note-text (:locate @state))
      (if attempt
        "Click the fretboard to try again."
        "Make a guess and click the fretboard to reveal the notes.")]]))

