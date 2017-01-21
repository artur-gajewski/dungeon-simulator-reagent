(ns dungeon-simulator.components.monster-description
  (:require [dungeon-simulator.tools :as tools]
            [dungeon-simulator.components.monster-weapon :as monster-weapon]))

(defn render [monster]
  [:div {:class "monster-description"}
   [:table
    [:tbody
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
       [:td [:span {:class "npc-head"} "Challenge"] " " (-> monster :xp) " XP"]]

      [:tr
       [:td [:span {:class "npc-head-weapons"} "Weapons"]]]

      (when-not (empty? (-> monster :weapons :melee first))
        (monster-weapon/render "Melee" (-> monster :weapons :melee first)))
      (when-not (empty? (-> monster :weapons :melee first))
        (monster-weapon/render "Range" (-> monster :weapons :range first)))]]])
