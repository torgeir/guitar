(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.neck :as neck]
   [guitar.notes :as notes]
   [rum.core :as rum]
   [guitar.unicode :refer [nbsp]]))


(def notes-of-string (partial notes/string-notes (cycle notes/notes) neck/scale-length))


(defn rand-note []
  {:string (inc (rand-int (count neck/tuning)))
   :note   (rand-nth notes/notes)})


(defonce state
  (atom
   {:tuning neck/tuning
    :mode   :guess
    :guess  {:show-notes false
             :locate     (rand-note)}}))


(rum/defc guitar-nut [note] [:div.guitar-nut note])
(rum/defc guitar-fret [note] [:div.guitar-fret note])
(rum/defc guitar-string [visible notes]
  [:div.guitar-string
   (conj (->> notes
              (drop 1)
              (map (if visible identity (constantly nbsp)))
              (map-indexed #(rum/with-key (guitar-fret %2) %1)))
         (rum/with-key (guitar-nut (if visible (first notes) nbsp)) "nut"))])


(rum/defc guitar < rum/reactive [strings state]
  [:div
   [:div.guitar
    {:on-click #(swap! state update :show-notes not)}
    (map-indexed #(rum/with-key (guitar-string (:show-notes (rum/react state)) %2) %1) strings)]
   [:h3.guess.center-text
    {:on-click #(reset! state {:show-notes false :locate (rand-note)})}
    (str "Locate " (notes/prefixed-note (get-in @state [:locate :note]))
         " on the "  (notes/suffixed-number (get-in @state [:locate :string]))
         " string.")]])


(rum/defc app < rum/reactive [state]
  (let [mode (:mode @state)
        cursor (rum/cursor state mode)
        strings (->> @state :tuning (map notes-of-string) (reverse))]
    (condp = mode
      :guess (guitar strings cursor)
      nil)))


(defn mount []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload []
  (mount))