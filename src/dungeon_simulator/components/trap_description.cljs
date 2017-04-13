(ns dungeon-simulator.components.trap-description
  (:require [reagent.format :refer [format]]
            [dungeon-simulator.tools :as tools]))

(defn render [trap]
  [:div {:class "trap-description"}
   [:p
    (-> trap :description)]
   (when-not (= (-> trap :type) "None")
     [:p
      (format "In order to survive this trap, you need to make a %s for DC %s. If you fail, you will
              receive %s (%s) hit points damage."
              (-> trap :sc)
              (-> trap :dc)
              (tools/roll (-> trap :hp :roll-amount)
                          (-> trap :hp :roll-sides)
                          0)
              (-> trap :hp :text))])])
