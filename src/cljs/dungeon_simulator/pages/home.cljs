(ns dungeon-simulator.pages.home
  (:require [dungeon-simulator.components.title :as title]))

(defn home []
  [:div
   [title/render "Dungeon Simulator"]

   [:div
    [:p "This website is a dungeon simulator for world's oldest role playing game. It enables you to play a dungeon
         crawl type of game with your friends without the need for a dungeon master or as a solo adventure by yourself."]

    [:p "You use your character sheet and roll dice as with regular game. This simulator will not keep up with the state
         of your character sheet, inventory or results of your skill checks. It merely acts as a replacement for a
         living dungeon master to give you structure for the adventure."]

    [:p "Once you start a game, it is a running dungeon adventure and as such, it has no 'Save' option. If you return
         to Dungeon Simulator at some point, a new adventure will commence from the scratch."]

    [:p "You will not need monster catalog, all NPC statistics will be provided upon confrontation with them."]

    [:p "Enjoy the game and may the dice be in your favor!"]]

   [:div
    [:a {:href "/room"} "» Start new game"]]])
