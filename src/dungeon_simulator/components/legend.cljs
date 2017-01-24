(ns dungeon-simulator.components.legend
  (:require [reagent.format :refer [format]]))

(defn render [description monster]
  [:div {:class "room-description"}
   [:p description]
   (when-not (= (-> monster :type) "None")
     [:p
      (str
       (format "There is %s %s feet from you. In combat, %s will attack with the best weapon available,
                 taking weapon range into consideration."
               (-> monster :type)
               (-> monster :distance)
               (-> monster :type)))])])
