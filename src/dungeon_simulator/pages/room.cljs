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
    (str @state/title)]
   [legend/render
    (-> @state/room :description)
    (-> @state/monster)]
   (when-not (empty? @state/monster)
     [:div
      [monster-description/render @state/monster]
      [monster-weapons/render @state/monster state/monster-rolls]])
   (when-not (empty? @state/trap)
     [trap-description/render (-> @state/trap)])
   [:div {:class "options"}
    (if-not (-> @state/room :end)
      (if (empty? @state/monster)
        [:a {:class "continue-link" :href "/room"} "» I'm ready to continue!"]
        [:a {:class "survive-link" :href "/room"} "» I survived and I'm ready to continue!"]))]])
