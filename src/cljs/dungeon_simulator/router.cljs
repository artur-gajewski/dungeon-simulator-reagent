(ns dungeon-simulator.router
  (:require [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [dungeon-simulator.action :as action]
            [dungeon-simulator.pages.home :refer [home]]
            [dungeon-simulator.pages.room :refer [room]]))

(defn create-routes []
  (secretary/defroute "/" []
                      (session/put! :current-page #'home))

  (secretary/defroute "/room" []
                      (action/create-new-tile)
                      (session/put! :current-page #'room)))