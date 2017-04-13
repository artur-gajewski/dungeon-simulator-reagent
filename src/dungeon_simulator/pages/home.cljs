(ns dungeon-simulator.pages.home
  (:require [dungeon-simulator.components.progress :as title]
            [dungeon-simulator.state :as state]))

(defn home []
  [:div
   [:h2 "Dungeon Simulator"]
   [:div
    [:p "Welcome to Dungeon Simulator! So you want to be a dungeon hero, eh? Let me tell you, it won't be easy!"]
    [:p "Grab your role playing game's character sheet and roll dice as with any regular RPG. This simulator will not
         keep up with the state of your character sheet, inventory or results of your skill checks. What it will do,
         is enable you to test out your newly created RPG character or play dungeon crawl type of solo adventure."]
    [:p "Rooms, NPCs, situations and events all have dynamic data. For example, you might confront same type of
         monsters multiple times, but each time they will have different initiative, distance, awareness, hit points
         and many other things alike. You might want to attack or you might want to try and stay away from fighting if
         your hit points are low. Or you might want risk it and fight just to obtain that healing potion behind the
         monster. It all depends on the situation you are in and what you want to do."]
    [:p "Once you click below link, you start a running dungeon adventure and as such, it has no 'Save' option.
         If you return to Dungeon Simulator at some point, a new adventure will begin from the scratch."]
    [:p "You won't need monster catalogs, all NPC statistics will be provided upon the confrontation with them."]
    [:p "Stay alive, enjoy the dungeon experience and may the dice be in your favor!"]]
   [:div {:class "options"}
    [:h3 "Select adventure"]
    [:div
     [:a {:href "/load/the_goblin_hideout"} "- The Goblin Hideout"]]
    [:div
     [:a {:href "/load/the_goblin_hideout"} "- Demo"]]
    (when-not (empty? @state/module)
      [:div
       [:h4 (-> @state/module :title)]
       [:p (-> @state/module :description)]
       [:p
        [:a {:class "continue-link" :href "/room"} "» I'm ready to start this adventure!"]]])]])
