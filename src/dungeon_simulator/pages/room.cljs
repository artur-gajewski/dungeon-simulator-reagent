(ns dungeon-simulator.pages.room
  (:require [dungeon-simulator.state :as state]
            [dungeon-simulator.components.progress :as progress]
            [dungeon-simulator.components.legend :as legend]
            [dungeon-simulator.components.monster-description :as monster-description]
            [dungeon-simulator.components.monster-weapons :as monster-weapons]
            [dungeon-simulator.components.trap-description :as trap-description]))

(defn room []
  [:div
   [progress/render
    (str "Room #" @state/progress)]
   [legend/render
    (-> @state/tile :description)
    (-> @state/event)
    (-> @state/monster)]
   (when-not (= (-> @state/monster :type) "None")
     [:div
      [monster-description/render @state/monster]
      [monster-weapons/render @state/monster state/monster-rolls]])
   (when (= (-> @state/monster :type) "None")
     [trap-description/render (-> @state/trap)])
   [:div {:class "options"}
    (if (= (:type @state/monster) "None")
      [:a {:class "continue-link" :href "/room"} "» I'm ready to continue!"]
      [:a {:class "survive-link" :href "/room"} "» I survived and I'm ready to continue!"])]])
