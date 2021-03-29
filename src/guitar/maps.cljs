(ns guitar.maps)


(defn map-keys [f m]
  (into {} (for [[k v] m] [(f k) v])))

