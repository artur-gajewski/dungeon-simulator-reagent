(ns dungeon-simulator.components.trap-description
  (:require [reagent.format :refer [format]]))

(defn render [trap]
  [:div {:class "trap-description"}
   [:p
    (-> trap :description)]

   (when-not (= (-> trap :type) "None")
    [:p
     (format "In order to survive this trap, you need to make a %s CHECK for DC %s. If you fail, you will
              receive %s hit points damage."
             (-> trap :sc)
             (-> trap :dc)
             (-> trap :hp))])])
