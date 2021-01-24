(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))


(def nbsp "\u00a0")


(def notes ["c" "c#" "d" "d#" "e" "f" "f#" "g" "g#" "a" "a#" "b"])


(def note-vowel? #{"e" "f" "f#" "a" "a#"})


(defn prefixed-note [note]
  (str (if (note-vowel? note) "an" "a")
       " "
       (.toUpperCase note)))

(defn suffixed-number [n]
  (str n (condp = (->> n (str) (last) (int))
           1 "st"
           2 "nd"
           3 "rd"
           "th")))

(def tuning ["e" "a" "d" "g" "b" "e"])


(defn rand-note []
  {:string (inc (rand-int (count tuning)))
   :note   (rand-nth notes)})


(defonce state
  (atom
    {:tuning tuning
     :mode   :guess
     :guess  {:show-notes false
              :locate     (rand-note)}}))


(def scale-length 24)


(defn string-notes [notes start-note]
  (let [from (drop-while (partial not= start-note) notes)]
    (reduce #(conj %1 (nth from %2))
            []
            (range (inc scale-length)))))


(defn get-app-element []
  (gdom/getElement "app"))


(rum/defc guitar-nut [note]
  [:div.guitar-nut note])


(rum/defc guitar-fret [note]
  [:div.guitar-fret note])


(rum/defc guitar-string [visible notes]
  [:div.guitar-string
   (conj (->> notes
           (drop 1)
           (map (if visible identity (constantly nbsp)))
           (map-indexed #(rum/with-key (guitar-fret %2) (str "key-" %1))))
         (rum/with-key (guitar-nut (if visible (first notes) nbsp)) "key-nut"))])


(rum/defc guitar < rum/reactive []
  (let [strings (->> @state :tuning (map (partial string-notes (cycle notes))) (reverse))
        guess   (rum/cursor state :guess)]
    [:div
     [:div.guitar
      {:on-click #(swap! guess update :show-notes not)}
      (map-indexed #(rum/with-key (guitar-string (:show-notes (rum/react guess)) %2) %1) strings)]
     [:h3.guess.center-text
      {:on-click #(reset! guess {:show-notes false
                                 :locate     (rand-note)} )}
      (str "Locate " (prefixed-note (get-in @guess [:locate :note]))
           " on the "  (suffixed-number (get-in @guess [:locate :string]))
           " string.")]]))


(defn mount [el]
  (rum/mount (guitar) el))


(defn mount-app []
  (when-let [el (get-app-element)]
    (mount el)))


(mount-app)


;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )