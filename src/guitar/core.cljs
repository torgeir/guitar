(ns ^:figwheel-hooks guitar.core
  (:require
   [goog.dom :as gdom]
   [guitar.notes :refer [scales scale-notes string-notes notes prefixed-note ordinal-suffixed-number]]
   [guitar.setup :refer [scale-length tuning]]
   [guitar.unicode :refer [nbsp]]
   [rum.core :as rum]))


(defn debug [v]
  (println v)
  v)



(def notes-of-string (partial string-notes notes (inc scale-length)))


(defn rand-note []
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


(rum/defc scale-note [{:keys [note hl]}]
  (when note
    [:div.scale-note
     (when hl {:class "scale-note--hl"
               :title note})
     note]))


(rum/defc guitar-fret [on-click index note]
  [:div
   {:class (if (zero? index) "guitar-nut" "guitar-fret")
    :on-mouse-over #(on-click index)}
   (scale-note note)])


(rum/defc guitar-string [on-fret-click notes]
  [:div.guitar-string
   (->> notes
        (map-indexed (partial guitar-fret on-fret-click))
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc locate-note-text [{:keys [note string]}]
  [:p (str "Locate " (prefixed-note note)
           " on the " (ordinal-suffixed-number string)
           " string.")])


(rum/defc guitar [props on-fret-click string-notes]
  [:div.guitar
   props
   (->> string-notes
        (map (partial guitar-string on-fret-click))
        (map-indexed #(rum/with-key %2 %1)))])


(rum/defc guess-fretboard-notes < rum/reactive [string-notes state]
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


(defn notes-per-string [notes-per-string strings-notes in-scale? fret-position format-scale-note]
  (->> (loop [acc []
              skip fret-position
              nps notes-per-string
              [note & notes] (->> strings-notes (reverse) (apply concat))]
         (if (empty? note)
           acc
           (cond
             (pos? skip)                    (recur (conj acc note) (dec skip) nps notes)
             (and (zero? nps)
                  (in-scale? (:note note))) (recur (conj acc note)
                                                        ;; TODO support other tunings
                                                        (- scale-length
                                                           (if ((set (range (count acc)
                                                                            (+ (count acc) scale-length))) 100)
                                                             4 5)) ; on note 100 (4 x (inc scale-length)) the offset is 4, not 5
                                                        notes-per-string
                                                        notes)
             (in-scale? (:note note))       (recur (conj acc (format-scale-note note)) skip (dec nps) notes)
             :else                          (recur (conj acc note) skip nps notes))))
       (partition (inc scale-length))
       (reverse)))


(defn scale-pattern [scale]
  (or ({:major-pentatonic (partial notes-per-string 2)
        :minor-pentatonic (partial notes-per-string 2)} scale)
      (partial notes-per-string 3)))


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


(rum/defc app < rum/reactive [state]
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


(defn mount []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app state) el)))


(mount)


(defn ^:after-load on-reload []
  (mount))