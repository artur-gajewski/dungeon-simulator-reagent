(ns dungeon-simulator.components.monster-weapons
  (:require [reagent.format :refer [format]]
            [dungeon-simulator.tools :as tools]
            [reagent.core :as reagent]))

(defn render-weapon-info [weapon]
  (format "%s to hit, reach %s %s. Hit: %s%s"
          (tools/format-to-hit-number (-> weapon :to-hit))
          (-> weapon :reach :value)
          (-> weapon :reach :unit)
          (-> weapon :hit :static)
          (-> (tools/format-roll-text (-> weapon :hit :roll-amount)
                                      (-> weapon :hit :roll-sides)
                                      (-> weapon :hit :roll-modifier)))))

(defn render [monster monster-rolls]
  (let [melee-weapon (-> monster :weapons :melee first)
        range-weapon (-> monster :weapons :range first)]
    [:div {:class "monster-weapons"}
     [:div
      [:span {:class "npc-head-weapons"} "Weapons"]]
     [:div {:class "weapon-section"}

       (when-not (empty? melee-weapon)
         [:div
          [:div
           [:span {:class "npc-head-small"}
            (-> melee-weapon :description) ": "]
           [:span {:class "weapon-description"}
            (render-weapon-info melee-weapon)]]
          [:div
           [:button {:class "roll-button space-above" :on-click #(swap! monster-rolls assoc :melee-attack (tools/roll 1 20 (-> melee-weapon :to-hit)))} "Roll for attack"]
           [:span {:class "roll-result"} (-> @monster-rolls :melee-attack)]]
          [:div {:class "space-above space-below"}
           [:button {:class "roll-button" :on-click #(swap! monster-rolls assoc :melee-hp (tools/roll (-> melee-weapon :hit :roll-amount)
                                                                                 (-> melee-weapon :hit :roll-sides)
                                                                                 (-> melee-weapon :hit :roll-modifier)))} "Roll for damage"]
           [:span (-> @monster-rolls :melee-hp)]]])

       (when-not (empty? range-weapon)
         [:div
          [:div
           [:span {:class "npc-head-small"}
            (-> range-weapon :description) ": "]
           [:span {:class "weapon-description"}
            (render-weapon-info range-weapon)]]
          [:div
           [:button {:class "roll-button space-above" :on-click #(swap! monster-rolls assoc :range-attack (tools/roll 1 20 (-> range-weapon :to-hit)))} "Roll for attack"]
           [:span {:class "roll-result"} (-> @monster-rolls :range-attack)]]
          [:div {:class "space-above space-below"}
           [:button {:class "roll-button" :on-click #(swap! monster-rolls assoc :range-hp (tools/roll (-> range-weapon :hit :roll-amount)
                                                                                 (-> range-weapon :hit :roll-sides)
                                                                                 (-> range-weapon :hit :roll-modifier)))} "Roll for damage"]
           [:span (-> @monster-rolls :range-hp)]]])]]))
