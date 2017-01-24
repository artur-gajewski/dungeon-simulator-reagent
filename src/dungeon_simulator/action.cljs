(ns dungeon-simulator.action
  (:require [dungeon-simulator.state :as state]
            [dungeon-simulator.data.tiles :as tiles]
            [dungeon-simulator.data.traps :as traps]
            [dungeon-simulator.data.monsters :as monsters]
            [dungeon-simulator.tools :as tools]))

(defn create-new-tile []
  (let [tile (tools/roll-from-data (tools/roll 1 100 0) tiles/tiles)
        monster (tools/roll-from-data (tools/roll 1 100 0) monsters/monsters)
        trap (tools/roll-from-data (tools/roll 1 100 0) traps/traps)
        monster-distance (+ (rand-int 5) 5)
        monster-is-aware (rand-int 2)
        monster-rolls {:melee-attack nil
                       :melee-hp nil
                       :range-attack nil
                       :range-hp nil}]

    (reset! state/progress (inc @state/progress))
    (reset! state/tile tile)
    (reset! state/monster monster)
    (reset! state/trap trap)
    (reset! state/monster-rolls monster-rolls)

    (swap! state/monster assoc :distance monster-distance)

    (cond
      (= monster-is-aware 0) (swap! state/monster assoc :is-aware false)
      (= monster-is-aware 1) (swap! state/monster assoc :is-aware true))))
