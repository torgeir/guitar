(ns guitar.seqs)


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