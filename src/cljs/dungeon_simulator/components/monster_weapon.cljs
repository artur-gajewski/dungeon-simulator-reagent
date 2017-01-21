(ns dungeon-simulator.components.monster-weapon
  (:require [dungeon-simulator.tools :as tools]))

(defn render [title weapon]
  [:tr
   [:td [:span {:class "npc-head-small"} title ": "]
    [:span {:class "weapon-description"}
     (-> weapon :description) ": "]
     (-> weapon :to-hit) " to hit, reach "
     (-> weapon :reach :value)
     " "
     (-> weapon :reach :unit)
     ". "
     "Hit: "
     (-> weapon :hit :static)
     " ("
     (-> weapon :hit :roll-amount)
     "d"
     (-> weapon :hit :roll-sides)
     (-> weapon :hit :roll-modifier)
     ")"]])
