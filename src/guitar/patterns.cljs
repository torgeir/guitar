(ns guitar.patterns
  (:require
   [guitar.setup :refer [scale-length]]))


(defn notes-per-string
  "Locates clusters of notes-per-string from strings-notes that are in the
  scale, starting fret-posision. These clusters represent well known finger
  patterns when playing guitar scales."
  [notes-per-string strings-notes in-scale? fret-position format-scale-note]
  (->> (loop [acc []
              skip fret-position
              nps notes-per-string
              [note & notes] (->> strings-notes (reverse) (apply concat))]
         (if (empty? note)
           acc
           (cond
             (pos? skip)                    (recur (conj acc (if (in-scale? (:note note)) note nil)) (dec skip) nps notes)
             (and (zero? nps)
                  (in-scale? (:note note))) (recur (conj acc (if (in-scale? (:note note)) note nil))
                                                        ;; TODO support other tunings
                                                   (- scale-length
                                                      (if ((set (range (count acc)
                                                                       (+ (count acc) scale-length))) 100)
                                                        4 5)) ; on note 100 (4 x (inc scale-length)) the offset is 4, not 5
                                                   notes-per-string
                                                   notes)
             (in-scale? (:note note))       (recur (conj acc (format-scale-note note)) skip (dec nps) notes)
             :else                          (recur (conj acc nil) skip nps notes))))
       (partition (inc scale-length))
       (reverse)))


(defn scale-pattern
  "Represents the type of scale pattern often used for this kind of scale, e.g.
  two note per string or three note per string."
  [scale]
  (or ({:major-pentatonic (partial notes-per-string 2)
        :minor-pentatonic (partial notes-per-string 2)} scale)
      (partial notes-per-string 3)))

