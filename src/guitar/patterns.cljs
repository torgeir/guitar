(ns guitar.patterns
  (:require
   [guitar.setup :refer [scale-length tuning-distances]]))


(def zip (partial map vector))


(defn tuning-shifts [tuning]
  (zip
    (map
      (fn [string]
        (* string (inc scale-length)))
      (range (count tuning)))
    (tuning-distances tuning)))


(defn find-string-offset [tuning n]
  (->> (reverse (tuning-shifts tuning))
    (drop-while #(<= n (first %)))
    (first)
    (last)))


(defn notes-per-string
  "Locates clusters of notes-per-string from strings-notes that are in the
  scale, starting fret-posision. These clusters represent well known finger
  patterns when playing guitar scales."
  [notes-per-string tuning strings-notes in-scale? fret-position format]
  (->> (loop [acc            []
              skip           fret-position
              nps            notes-per-string
              [note & notes] (->> strings-notes (reverse) (apply concat))]
         (if (empty? note)
           acc
           (cond
             (and (pos? skip) (in-scale? (:note note))) (recur (conj acc note) (dec skip) nps notes)
             (pos? skip)                                (recur (conj acc nil) (dec skip) nps notes)
             (and (zero? nps) (in-scale? (:note note))) (recur (conj acc note)
                                                               (- scale-length
                                                                  (find-string-offset tuning (count acc)))
                                                               notes-per-string notes)
             (in-scale? (:note note))                   (recur (conj acc (format note)) skip (dec nps) notes)
             :else                                      (recur (conj acc nil) skip nps notes))))
    (partition (inc scale-length))
    (reverse)))


(defn scale-pattern
  "Represents the type of scale pattern often used for this kind of scale, e.g.
  two note per string or three note per string."
  [tuning scale]
  (or ({:major-pentatonic (partial notes-per-string 2 tuning)
        :minor-pentatonic (partial notes-per-string 2 tuning)} scale)
      (partial notes-per-string 3 tuning)))

