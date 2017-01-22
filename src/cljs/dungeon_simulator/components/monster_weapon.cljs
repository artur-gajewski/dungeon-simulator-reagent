(ns dungeon-simulator.components.monster-weapon
  (:require [reagent.format :refer [format]]
            [dungeon-simulator.tools :as tools]))

(defn render [title weapon]
  [:tr
   [:td [:span {:class "npc-head-small"} title ": "]
    [:span {:class "weapon-description"}
     (-> weapon :description) ": "]

     (format "%s to hit, reach %s %s. Hit: %s%s"
             (tools/format-to-hit-number (-> weapon :to-hit))
             (-> weapon :reach :value)
             (-> weapon :reach :unit)
             (-> weapon :hit :static)
             (-> (tools/format-roll-text (-> weapon :hit :roll-amount)
                                         (-> weapon :hit :roll-sides)
                                         (-> weapon :hit :roll-modifier))))]])
