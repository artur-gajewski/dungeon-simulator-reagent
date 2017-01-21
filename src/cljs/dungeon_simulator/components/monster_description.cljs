(ns dungeon-simulator.components.monster-description
  (:require [dungeon-simulator.tools :as tools]))

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
         [:tr
          [:td [:span {:class "npc-head-small"} "Melee: "]
           [:span {:class "weapon-description"}
            (-> monster :weapons :melee first :description) ": "]
            (-> monster :weapons :melee first :to-hit) " to hit, reach "
            (-> monster :weapons :melee first :reach :value)
            " "
            (-> monster :weapons :melee first :reach :unit)
            ". "
            "Hit: "
            (-> monster :weapons :melee first :hit :static)
            " ("
            (-> monster :weapons :melee first :hit :roll-amount)
            "d"
            (-> monster :weapons :melee first :hit :roll-sides)
            " "
            (-> monster :weapons :melee first :hit :roll-modifier)
            ")."]])

        (when-not (empty? (-> monster :weapons :range first))
         [:tr
          [:td [:span {:class "npc-head-small"} "Range: "]
           [:span {:class "weapon-description"}
           (-> monster :weapons :range first :description) ": "]
           (-> monster :weapons :range first :to-hit) " to hit, reach "
           (-> monster :weapons :range first :reach :value)
           " "
           (-> monster :weapons :range first :reach :unit)
           ". "
           "Hit: "
           (-> monster :weapons :range first :hit :static)
           " ("
           (-> monster :weapons :range first :hit :roll-amount)
           "d"
           (-> monster :weapons :range first :hit :roll-sides)
           " "
           (-> monster :weapons :range first :hit :roll-modifier)
           ")."]])]]])
