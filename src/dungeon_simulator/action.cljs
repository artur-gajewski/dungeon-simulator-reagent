(ns dungeon-simulator.action
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [dungeon-simulator.state :as state]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]))

(defn get-module [module-name]
  (go (let [{:keys [status] :as response} (<! (http/get (str "http://dungeonsimulator.com/modules/" module-name ".json")))
            body (-> response js->clj :body)]
        (when (= 200 status)
          (let [data body]
            (reset! state/module body))))))

(defn create-new-tile []
  (let [progress @state/progress
        data @state/module
        room (nth (-> data :rooms) progress)
        monster (-> room :monster)
        trap (-> room :trap)
        monster-distance (cond
                           (= (-> monster :distance) -1) (+ (rand-int 26) 5)
                           :else (-> monster :distance))
        monster-is-aware (rand-int 2)
        monster-rolls {:melee-attack nil
                       :melee-hp nil
                       :range-attack nil
                       :range-hp nil}]

    (reset! state/progress (inc @state/progress))
    (reset! state/room room)
    (reset! state/title (-> room :title))
    (reset! state/monster monster)
    (reset! state/trap trap)
    (reset! state/monster-rolls monster-rolls)

    (when-not (empty? monster)
      (swap! state/monster assoc :distance monster-distance)
      (cond
        (= monster-is-aware 0) (swap! state/monster assoc :is-aware false)
        (= monster-is-aware 1) (swap! state/monster assoc :is-aware true)))

    (.scroll js/window 0 0)))
