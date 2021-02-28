(ns guitar.guitar
  (:require [rum.core :as rum]))


(rum/defc scale-note
  "A visible note on a fret."
  [{:keys [note hl]}]
  (when note
    [:div.scale-note
     {:title note
      :class (when hl
               (str "scale-note--hl scale-note--hl-" hl))}
     note]))


(rum/defc guitar-fret
  "A clickable guitar nut or fret."
  [on-click string-index fret note]
  [:div
   {:class (if (zero? fret) "guitar-nut" "guitar-fret")
    :on-click #(when note
                 (on-click (assoc note
                                  :fret fret
                                  :string string-index)))}
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

