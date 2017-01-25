(ns dungeon-simulator.components.legend
  (:require [reagent.format :refer [format]]))

(defn render [description event monster]
  [:div {:class "room-description"}
   [:p (str description
            (when-not (= (-> event :type) "None") (str " " (-> event :description))))]
   (when-not (= (-> monster :type) "None")
     (let [monster-type (-> monster :type)
           monster-distance (-> monster :distance)
           monster-wisdom (-> monster :skills :wisdom)]
       [:p
        (let [proximity-text (cond
                               (<= monster-distance 5)
                               "You get surprised by %s which is %s feet from you and it gets to attack first. Roll for
                                your damage with monster's melee weapon and continue battle with your turn."
                               (and (> monster-distance 5) (< monster-distance 20))
                               "You notice %s located %s feet from you. You draw your weapon and prepare for battle.
                                Roll initiative!"
                               (>= monster-distance 20)
                               "You see %s located %s feet from you but it seems it hasn't noticed you yet. If you
                                want to sneak through to the next area or make a surprise attack, make a DEXTERITY check
                                against DC %s. Upon success, make a surprise attack by rolling directly for monster's
                                damage or continue to the next area. If you fail on the check, roll initiative!")]
          (str
           (format proximity-text
                   monster-type
                   monster-distance
                   monster-wisdom)))]))])
