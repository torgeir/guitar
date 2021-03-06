(ns guitar.guitar
  (:require
   [rum.core :as rum]
   [clojure.string :refer [trim]]))


(rum/defc scale-note
  "A visible note on a fret."
  [{:keys [note color highlight]}]
  [:div.scale-note
   {:data-note (trim note)
    :class     (when color
                 (str " scale-note--color"
                      " scale-note--color-" color
                      (when highlight
                        " scale-note--color-highlight")))}
   note])


(rum/defc guitar-fret
  "A clickable guitar nut or fret."
  [on-click string-index fret notes]
  [:div
   {:class    (if (zero? fret) "guitar-nut" "guitar-fret")
    :on-click #(when (seq notes)
                 (on-click (assoc (first notes)
                                  :fret fret
                                  :string string-index)))}
   (->> notes
     (map scale-note)
     (map-indexed #(rum/with-key %2 %1)))])


(rum/defc guitar-string
  "A guitar string, with clickable frets."
  [on-fret-click string-index notes]
  [:div.guitar-string
   (->> notes
     (map-indexed (partial guitar-fret on-fret-click string-index))
     (map-indexed #(rum/with-key %2 %1)))])


(rum/defc guitar
  "A guitar, with clickable frets for each of the strings-notes"
  [props on-fret-click strings-notes]
  [:div.guitar-container
   [:div.guitar
    props
    (->> strings-notes
      (map-indexed (partial guitar-string on-fret-click))
      (map-indexed #(rum/with-key %2 %1)))]])

