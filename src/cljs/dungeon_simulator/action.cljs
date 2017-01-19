(ns dungeon-simulator.action
  (:require [dungeon-simulator.state :as state]
            [dungeon-simulator.data.tiles :as tiles]
            [dungeon-simulator.data.traps :as traps]
            [dungeon-simulator.data.monsters :as monsters]))

(defn create-new-tile []
  (reset! state/progress (inc @state/progress))
  (reset! state/tile (rand-nth tiles/tiles))
  (reset! state/monster (rand-nth monsters/monsters))
  (reset! state/trap (rand-nth traps/traps))

  (let [distance (+ (rand-int 5) 5)
        monster-is-aware (rand-int 2)
        action-type (rand-int 4)]

    (swap! state/monster assoc :distance distance)

    (cond
      (= monster-is-aware 0) (swap! state/monster assoc :is-aware false)
      (= monster-is-aware 1) (swap! state/monster assoc :is-aware true))

    (cond
      (= action-type 0) (reset! state/action-type "nothing")
      (= action-type 1) (reset! state/action-type "monster")
      (= action-type 2) (reset! state/action-type "item")
      (= action-type 3) (reset! state/action-type "trap"))))
