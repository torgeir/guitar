(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.notes :refer [scales scale-notes string-notes notes prefixed-note ordinal-suffixed-number]]
   [guitar.setup :refer [scale-length tuning]]
   [guitar.patterns :refer [scale-pattern notes-per-string]]
   [guitar.unicode :refer [nbsp]]
   [rum.core :as rum]))


(defn debug [v]
  (println v)
  v)



(def notes-of-string
  "Finds notes of a string, starting from the provided note."
  (partial string-notes notes (inc scale-length)))


(defn rand-note
  "Returns a map with a random note on a random string."
  []
  {:string (inc (rand-int (count tuning)))
   :note   (rand-nth notes)})


(defonce state
  (atom
   {:tuning tuning
    :mode   :explore
    :guess  {:show-notes false
             :locate     (rand-note)}
    :explore {:root "c"
              :scale :major
              :start-fret 8}}))


(rum/defc scale-note
  "A visible note on a fret."
  [{:keys [note hl]}]
  (when note
    [:div.scale-note
     (when hl {:class "scale-note--hl"
               :title note})
     note]))


(rum/defc guitar-fret
  "A clickable guitar nut or fret."
  [on-click index note]
  [:div
   {:class (if (zero? index) "guitar-nut" "guitar-fret")
    :on-click #(on-click index)}
   (scale-note note)])


(rum/defc guitar-string
  "A guitar string, with clickable frets."
  [on-fret-click notes]
  [:div.guitar-string
   (->> notes
        (map-indexed (partial guitar-fret on-fret-click))
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc locate-note-text
  "Text displayed suggesting what note to locate."
  [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number string)
           " string.")])


(rum/defc guitar
  "A guitar, with clickable frets for each of the strings-notes"
  [props on-fret-click strings-notes]
  [:div.guitar
   props
   (->> strings-notes
        (map (partial guitar-string on-fret-click))
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc guess-fretboard-notes < rum/reactive
  "A mode to guess where a note is located on a given string."
  [string-notes state]
  (let [notes-shown (:show-notes (rum/react state))
        reset-state #(reset! state {:show-notes false :locate (rand-note)})]
    [:div
     (guitar
      {:on-click #(if notes-shown
                    (reset-state)
                    (swap! state update :show-notes not))}
      identity
      (map (partial map #(if notes-shown % {:note nbsp})) string-notes))
     [:h3.center-text
      (locate-note-text (:locate @state))
      (if notes-shown
        "Click the fretboard to try again."
        "Make a guess and click the fretboard to reveal the notes.")]]))


(rum/defc scale-visualizer < rum/reactive [strings-notes state]
  (let [{:keys [root scale start-fret]} (rum/react state)
        in-scale? (set (scale-notes root scale))]
    (rum/fragment
     [:div (guitar {:class "guitar--faded"}
                   #(swap! state assoc :start-fret %)
                   ((scale-pattern scale) strings-notes in-scale? start-fret #(assoc % :hl "#f5a")))]
     [:select
      {:on-change #(swap! state assoc :root (->> % .-currentTarget .-value))}
      (->> notes (map #(vector :option {:key %} %)))]
     [:select
      {:value (name scale)
       :on-change #(swap! state assoc :scale (->> % .-currentTarget .-value (keyword)))}
      (->> scales (keys) (map name) (map #(vector :option {:key %} %)))])))


(defn to-note [note] {:note note})


(rum/defc app < rum/reactive
  "Main component. Dispatches to other components based on the :mode of the state."
  [state]
  (let [mode (:mode (rum/react state))
        mode-state (rum/cursor state mode)
        strings-notes (->> @state
                           :tuning
                           (map notes-of-string)
                           (map (partial map to-note))
                           (reverse))]
    [:div
     [:button {:on-click #(swap! state assoc :mode :guess)} "Guess"]
     [:button {:on-click #(swap! state assoc :mode :explore)} "Explore scales"]
     ((condp = mode
        :guess guess-fretboard-notes
        :explore scale-visualizer)
      strings-notes
      mode-state)]))


(defn mount
  "Mounts the application to the dom."
  []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload []
  (mount))