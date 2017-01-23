(ns dungeon-simulator.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce progress (reagent/atom 0))

(defonce tile (reagent/atom {}))

(defonce action-type (reagent/atom "start"))

(defonce monster (reagent/atom {}))

(defonce trap (reagent/atom {}))
