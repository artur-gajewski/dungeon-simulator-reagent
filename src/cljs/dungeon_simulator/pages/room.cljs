(ns dungeon-simulator.pages.room
  (:require [dungeon-simulator.state :as state]
            [dungeon-simulator.components.progress :as progress]
            [dungeon-simulator.components.legend :as legend]
            [dungeon-simulator.components.monster-description :as monster-description]))

(defn room []
  [:div

   [progress/render
    (str "Room #" @state/progress)]

   [legend/render
    (-> @state/tile :description)
    (-> @state/monster)]

   (when-not (= (-> @state/monster :type) "None")
    [monster-description/render @state/monster])

   [:div
    (if (= (:type @state/monster) "None")
      [:a {:class "continue-link" :href "/room"} "» I'm ready to continue!"]
      [:a {:class "survive-link" :href "/room"} "» I survived and I am ready to continue!"])]])
