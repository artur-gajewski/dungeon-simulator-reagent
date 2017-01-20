(ns dungeon-simulator.tools)

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