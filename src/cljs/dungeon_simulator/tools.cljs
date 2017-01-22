(ns dungeon-simulator.tools
  (:require [reagent.format :refer [format]]))

(defn roll [amount sides modifier]
  (let [roll-result (+ (rand-int sides) 1)
        total (* amount roll-result)
        modified (+ total modifier)]
        modified))

(defn roll-from-data [roll-value data]
  (let [min-found (filter #(>= roll-value (:roll-from %)) data)
        max-found (filter #(<= roll-value (:roll-to %)) min-found)
        found-monster (first max-found)]
    found-monster))

(defn format-to-hit-number [number]
  (let [formatted (cond
                   (< number 0) number
                   (> number 0) (str "+" number)
                   :else 0)]
    formatted))

(defn format-roll-text [roll-amount roll-sides roll-modifier]
  (let [modifier (cond
                  (< roll-modifier 0) (str " " roll-modifier)
                  (> roll-modifier 0) (str " +" roll-modifier)
                  :else "")]
    (format " (%sd%s%s)"
            roll-amount
            roll-sides
            modifier)))
