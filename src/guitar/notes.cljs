(ns guitar.notes)


(def scales
  "Supported scales represented as semitone increments."
  [[:major "2212221"]
   [:minor "2122122"]
   [:harmonic-minor "2122131"]
   [:harmonic-major "2212131"]
   [:melodic-minor "2122221"]
   [:minor-pentatonic "32232"]
   [:major-pentatonic "22323"]
   [:diminished-whole-half "21212121"]
   [:diminished-half-whole "12121212"]
   ;; TODO this is funky with both 2 and 3 nps, leave it for now
   ;; :blues "321132"
   ])


(defn scale-steps [scale]
  (->> scales
    (flatten)
    (drop-while (partial not= scale))
    (drop 1)
    (first)
    (seq)
    (map js/parseInt)))


(def notes
  "Named notes of the western c major scale."
  ["c" "c#" "d" "d#" "e" "f" "f#" "g" "g#" "a" "a#" "b"])


(def modes
  [:ionian :dorian :phrygian :lydian :mixolydian :aeolian :locrian])


(def mode-names
  {:harmonic-minor {:ionian     "Harmonic minor"
                    :dorian     "Locrian #6"
                    :phrygian   "Major #5"
                    :lydian     "Dorian #4"
                    :mixolydian "Phrygian major"
                    :aeolian    "Lydian #2"
                    :locrian    "Altered dominant bb7"}
   :harmonic-major {:ionian     "Harmonic major"
                    :dorian     "Dorian b5"
                    :phrygian   "Phrygian b4"
                    :lydian     "Lydian b3"
                    :mixolydian "Mixolydian b2"
                    :aeolian    "Lydian augmented #2"
                    :locrian    "Locrian bb7"}
   :melodic-minor  {:ionian     "Melodic minor"
                    :dorian     "Dorian b2"
                    :phrygian   "Lydian augmented"
                    :lydian     "Lydian dominant"
                    :mixolydian "Aeolian dominant"
                    :aeolian    "Half diminished"
                    :locrian    "Altered"}})


(defn shift-n [at coll]
  (->> coll
    (split-at at)
    (reverse)
    (apply concat)))


(defn index-of [coll el]
  (->> coll
    (map-indexed vector)
    (drop-while #(not= el (second %)))
    (ffirst)))


(defn scale-notes
  "Finds the notes for the type of scale, starting from the root."
  ([root scale] (scale-notes root scale :ionian))
  ([root scale mode]
   (->> scales
     (into {})
     (scale)
     (shift-n (index-of modes mode))
     (seq)
     (map js/parseInt)
     (concat [(.indexOf notes root)])
     (reductions +)
     (drop-last)
     (map (partial nth (cycle notes))))))


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
