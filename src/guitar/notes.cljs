(ns guitar.notes)

(def scales
  {:major "2212221"
   :melodic-minor "2122221"
   :minor "2122122"
   :minor-pentatonic "32232"
   :major-pentatonic "22323"
   ;; :blues "321132"
   :harmonic-minor "2122131"
   :diminished-whole-half "21212121"
   :diminished-half-whole "12121212"})


(def notes ["c" "c#" "d" "d#" "e" "f" "f#" "g" "g#" "a" "a#" "b"])


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

