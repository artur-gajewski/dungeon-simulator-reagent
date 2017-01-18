(ns dungeon-simulator.pages.room
  (:require [dungeon-simulator.state :as state]
            [dungeon-simulator.components.title :as title]))

(defn room []
  [:div
   [title/render (str "Room #" @state/progress)]

   [:div
    [:p (:description @state/tile)]
    [:p @state/action-type]]

   (if (= (:type @state/monster) "None")
     (when (= (:type @state/tile) "S")
       [:div
        [:p
          (:description @state/trap)]
         (when-not (= (:type @state/trap) "None")
           [:p
            "Make a " (:sc @state/trap) " check for DC " (:dc @state/trap) ". If you fail, make a DEXTERITY SAVE throw.
             Failing to succeed on DEXTERITY SAVE will cause you loss of " (:hp @state/trap) " hit points."])])

   [:div
    [:p
     "You confront " (:type @state/monster) " " (:distance @state/monster) " feet from you."]

    [:p
     (if (< (:distance @state/monster) 6)
       (str "Because the " (:type @state/monster) " is so close to you, you are surprised. "
            (:type @state/monster) " wins initiative.")
       (if (= (:is-aware @state/monster) false)
         (str "The " (:type @state/monster) " hasn't noticed you yet. If you wish, you can make a STEALTH check if you
               wish to sneak next to it and make a surprise attack. If you fail, throw initiative and commence combat
               with the monster.")
         (str (:type @state/monster) " noticed you and attacks. Throw initiative and commence combat with the monster.")))]])

   [:div
    (if (= (:type @state/monster) "None")
      [:a {:href "/room"} "» I'm ready to continue!"]
      [:a {:href "/room"} "» I survived and I am ready to continue!"])]])
