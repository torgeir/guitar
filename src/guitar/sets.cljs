(ns guitar.sets)


(defn toggle-in [el a-set]
  ((if (a-set el)
     disj
     conj) a-set el))


(defn indexed-map [set]
  (->> set
    (map-indexed vector)
    (map (juxt (comp inc first) second))
    (map reverse)
    (map vec)
    (into {})))

