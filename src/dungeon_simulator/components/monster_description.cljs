(ns dungeon-simulator.components.monster-description
  (:require [reagent.format :refer [format]]
            [dungeon-simulator.tools :as tools]
            [dungeon-simulator.components.monster-weapons :as monster-weapon]))

(defn weapon [title weapon]
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
      [:td [:span {:class "npc-head"} "Initiative"] " " (tools/roll-initiative-text monster)]]

     [:tr
      [:td [:span {:class "npc-head"} "Challenge"] " " (-> monster :xp) " XP"]]]]])
