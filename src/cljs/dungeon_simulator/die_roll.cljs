(ns dungeon-simulator.die-roll)

(defn roll [amount sides modifier]
  (let [roll-result (+ (rand-int sides) 1)
        total (* amount roll-result)
        modified (+ total modifier)]
        modified))