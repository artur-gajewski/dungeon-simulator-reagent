(ns dungeon-simulator.components.legend
  (:require [reagent.format :refer [format]]))

(defn render [description monster]
  [:div {:class "room-description"}
   [:p description]
   (when-not (= (-> monster :type) "None")
     [:p
      (str
       (format "There is %s %s feet from you. If you commence combat, %s will attack with the best weapon available
                 concidering it's distance from you."
               (-> monster :type)
               (-> monster :distance)
               (-> monster :type)))])])
