(ns dungeon-simulator.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce module (reagent/atom nil))

(defonce progress (reagent/atom 0))

(defonce title (reagent/atom {}))

(defonce room (reagent/atom {}))

(defonce monster (reagent/atom {}))

(defonce trap (reagent/atom {}))

(defonce monster-rolls (reagent/atom {:melee-attack nil
                                      :melee-hp nil
                                      :range-attack nil
                                      :range-hp nil}))
