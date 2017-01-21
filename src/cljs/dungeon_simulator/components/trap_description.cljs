(ns dungeon-simulator.components.trap-description)

(defn render [trap]
  [:div {:class "trap-description"}
   [:p
    (-> trap :description)]

   (when-not (= (-> trap :type) "None")
    [:p
     (str "In order to survive this trap, you need to make a "
          (-> trap :sc)
          " CHECK for DC "
          (-> trap :dc)
          ". If you fail, you will receive "
          (-> trap :hp)
          " hit points damage.")])])
