(ns dungeon-simulator.data.tiles)

(def tiles [{:roll-from 1
             :roll-to 10
             :type "STRA"
             :description "You arrive at a straight tunnel."}

            {:roll-from 11
             :roll-to 20
             :type "WICO"
             :description "You find a widening corridor in front of you."}

            {:roll-from 21
             :roll-to 30
             :type "LETU"
             :description "There is a turn to the left ahead of you. You can't see behind it."}

            {:roll-from 31
             :roll-to 40
             :type "RITU"
             :description "Tunnel turns right, but you can't see what's beyond the corner."}

            {:roll-from 41
             :roll-to 50
             :type "NACO"
             :description "A narrowing corridor is in front of you."}

            {:roll-from 51
             :roll-to 60
             :type "CIRO"
             :description "You arrive at a circular room."}

            {:roll-from 61
             :roll-to 70
             :type "UPST"
             :description "You find stairs leading upwards."}

            {:roll-from 71
             :roll-to 80
             :type "DOST"
             :description "There are stairs leading downwards."}

            {:roll-from 81
             :roll-to 90
             :type "HURO"
             :description "You find yourself in a huge cavernous room."}

            {:roll-from 91
             :roll-to 100
             :type "LARO"
             :description "You arrive at a large room."}])
