(ns guitar.notes)


(def scales
  "Supported scales represented as semitone increments."
  {:major "2212221"
   :melodic-minor "2122221"
   :minor "2122122"
   :minor-pentatonic "32232"
   :major-pentatonic "22323"
   :harmonic-minor "2122131"
   :diminished-whole-half "21212121"
   :diminished-half-whole "12121212"
   ;; TODO this is funky with both 2 and 3 nps, leave it for now
   ;; :blues "321132"
   })


(def notes
  "Named notes of the western c major scale."
  ["c" "c#" "d" "d#" "e" "f" "f#" "g" "g#" "a" "a#" "b"])


(defn scale-notes
  "Finds the notes for the type of scale, starting from the root."
  [root scale]
  (->> scales
       (scale)
       (seq)
       (map js/parseInt)
       (concat [(.indexOf notes root)])
       (reductions +)
       (drop-last)
       (map (partial nth (cycle notes)))))


(defn string-notes
  "Finds scale-length number of notes from a given start-note, representing the
  notes on a guitar string."
  [notes scale-length start-note]
  (->> notes
       (cycle)
       (drop-while (partial not= start-note))
       (take scale-length)))


(def note-vowel?
  "Set of notes that are pronounced as vowels."
  #{"e" "f" "f#" "a" "a#"})


(defn prefixed-note
  "Prefixes a note with a or an, depending on wether the note is considered a
  vowel."
  [note]
  (str (if (note-vowel? note) "an" "a")
       " "
       (.toUpperCase note)))


(defn ordinal-suffixed-number
  "Suffixes a number with its ordinal."
  [n]
  (str n (condp = (->> n (str) (last) (int))
           1 "st"
           2 "nd"
           3 "rd"
           "th")))