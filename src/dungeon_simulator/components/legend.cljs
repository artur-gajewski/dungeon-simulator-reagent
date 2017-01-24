(ns dungeon-simulator.components.legend
  (:require [reagent.format :refer [format]]))

(defn render [description event monster]
  [:div {:class "room-description"}
   [:p (str description
            (when-not (= (-> event :type) "None") (str " " (-> event :description))))]
   (when-not (= (-> monster :type) "None")
     [:p
      (str
       (format "There is %s located %s feet from you. In combat, it will attack with the best weapon available,
                 taking weapon's range into consideration."
               (-> monster :type)
               (-> monster :distance)))])])
