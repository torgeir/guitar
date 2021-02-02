(ns guitar.notes)


(def notes ["c" "c#" "d" "d#" "e" "f" "f#" "g" "g#" "a" "a#" "b"])


(defn string-notes [notes scale-length start-note]
  (->> notes
    (cycle)
    (drop-while (partial not= start-note))
    (take scale-length)))


(def note-vowel? #{"e" "f" "f#" "a" "a#"})


(defn prefixed-note [note]
  (str (if (note-vowel? note) "an" "a")
       " "
       (.toUpperCase note)))


(defn ordinal-suffixed-number [n]
  (str n (condp = (->> n (str) (last) (int))
           1 "st"
           2 "nd"
           3 "rd"
           "th")))
