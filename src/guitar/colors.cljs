(ns guitar.colors)


(defn rand-color [& existing-colors]
  (->> (range 0 8)
    (remove (set existing-colors))
    (rand-nth)))

