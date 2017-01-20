(ns dungeon-simulator.components.legend)

(defn render [description monster]
  [:div {:class "room-description"}
   [:p description]
   (when-not (= (-> monster :type) "None")
     [:p
      (str "There's " (-> monster :type) " " (-> monster :distance) " feet from you.")])])
