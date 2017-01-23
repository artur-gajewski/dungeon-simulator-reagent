(ns dungeon-simulator.prod
  (:require [dungeon-simulator.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
