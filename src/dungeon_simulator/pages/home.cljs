(ns dungeon-simulator.pages.home
  (:require [dungeon-simulator.components.progress :as title]))

(defn home []
  [:div
   [:h2 "Dungeon Simulator"]
   [:div
    [:p "Welcome to Dungeon Simulator! This game is for you, if you like to play dungeon crawlers
         or for those who would like to test out your own scenarios without the need for a dungeon master or as a solo 
         adventure by yourself."]
    [:p "You use your character sheet and roll dice as with regular game. This simulator will not keep up with the state
         of your character sheet, inventory or results of your skill checks. It merely acts as a replacement for a
         living dungeon master to give you structure for the adventure."]
    [:p "Once you start a game, it is a running dungeon adventure and as such, it has no 'Save' option. If you return
         to Dungeon Simulator at some point, a new adventure will commence from the scratch."]
    [:p "You won't need a monster catalog, all NPC statistics will be provided upon the confrontation with them."]
    [:p "Enjoy the game and may the dice be in your favor!"]]
   [:div {:class "options"}
    [:a {:href "/room"} "» Start new adenture"]]])
