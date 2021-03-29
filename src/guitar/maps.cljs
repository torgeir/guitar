(ns guitar.maps)


(defn map-keys [f m]
  (into {} (for [[k v] m] [(f k) v])))


(defn update-maps [init state f]
  (reduce
    (fn [acc k] (update acc k f))
    init
    state))

