(ns guitar.setup
  (:require
   [guitar.notes :refer [notes]]))


(def scale-length 24)


(def tuning ["e" "a" "d" "g" "b" "e"])


(defn tuning-distances [tuning]
  (->> tuning
    (partition 2 1)
    (map (fn [[a b]]
           (->> (cycle notes)
             (drop-while (partial not= a))
             (take-while (partial not= b))
             (count))))))