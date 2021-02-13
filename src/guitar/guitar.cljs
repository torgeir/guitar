(ns guitar.guitar
  (:require [rum.core :as rum]))


(rum/defc scale-note
  "A visible note on a fret."
  [{:keys [note hl]}]
  (when note
    [:div.scale-note
     (when hl {:class (str "scale-note--hl scale-note--hl-" hl)
               :title note})
     note]))


(rum/defc guitar-fret
  "A clickable guitar nut or fret."
  [on-click string-index index note]
  [:div
   {:class (if (zero? index) "guitar-nut" "guitar-fret")
    :on-click #(on-click {:string string-index :fret index :note note})}
   (scale-note note)])


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
  [:div.guitar
   props
   (->> strings-notes
        (map-indexed (partial guitar-string on-fret-click))
        (map-indexed #(rum/with-key %2 %1)))])

