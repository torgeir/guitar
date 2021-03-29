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


(defn insert-at [coll at n]
  (let [[l r] (split-at at coll)]
    (vec (concat l [n] r))))


(defn zip [& rest]
  (if (zero? (count rest))
    []
    (apply map vector rest)))

