(ns dungeon-simulator.components.legend)

(defn render [description monster]
  [:div {:class "room-description"}
   [:p description]
   (when-not (= (-> monster :type) "None")
     [:p
      (str
        "There is " (-> monster :type) " " (-> monster :distance) " feet from you. If you commence combat, "
        (-> monster :type) " will attack with the best weapon available concidering it's distance from you.")])])
