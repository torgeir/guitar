(ns guitar.sets)


(defn toggle-in [el a-set]
  ((if (a-set el)
     disj
     conj) a-set el))