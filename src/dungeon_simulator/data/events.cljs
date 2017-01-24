(ns dungeon-simulator.data.events)

(def events [{:roll-from 1
              :roll-to 10
              :type "None"}
             
              {:roll-from 60
              :roll-to 62
              :type "CRTU"
              :description "There is a crumbled tunnel leading away from here, but it's completely
               inaccessible."}
             
              {:roll-from 63
              :roll-to 66
              :type "TBCH"
              :description "You can see a table and a set of chairs here."}
             
              {:roll-from 67
              :roll-to 69
              :type "TWTR"
              :description "Two lit torches are visible on the walls. Something has been here not long ago."}
             
              {:roll-from 70
              :roll-to 74
              :type "MOLD"
              :description "The area is almost completely covered with mold."}
             
              {:roll-from 75
              :roll-to 79
              :type "SPWB"
              :description "Intricate spiderwebs cover the area."}
             
              {:roll-from 80
              :roll-to 84
              :type "LCDR"
              :description "You can see a door with a lock in the area."}
             
              {:roll-from 85
              :roll-to 89
              :type "LIBR"
              :description "You feel a light breeze."}
             
              {:roll-from 90
              :roll-to 98
              :type "VRDK"
              :description "It's very dark and something is in your vicinity."}

             {:roll-from 99
              :roll-to 100
              :type "TRCH"
              :description "You find a treasure chest!"}])
