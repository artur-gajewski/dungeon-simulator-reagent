(ns dungeon-simulator.components.monster-description
  (:require [dungeon-simulator.tools :as tools]))

(defn render [monster]
  [:div {:class "monster-description"}
   [:p
    [:table
     [:tr
      [:td {:class "npc-head-title"} (-> monster :type)]]
     [:tr
      [:td [:span {:class "npc-head"} "Armor Class"] " " (-> monster :ac)]]
     [:tr
      [:td [:span {:class "npc-head"} "Hit Points"]
       " "
       (tools/roll (-> monster :hp :roll-amount) (-> monster :hp :roll-sides) 0)
       " ("
       (-> monster :hp :roll-amount) "d" (-> monster :hp :roll-sides)
       ")"]]
     [:tr
      [:td [:span {:class "npc-head"} "Challenge"] " " (-> monster :xp) " XP"]]]]])


