(ns dungeon-simulator.data.tiles)

(def tiles [{:roll-from 1
             :roll-to 10
             :type "STRA"
             :description "You arrive at a straight tunnel."
             :traps-possible true}

            {:roll-from 11
             :roll-to 20
             :type "WICO"
             :description "You find a widening corridor in front of you."
             :traps-possible true}

            {:roll-from 21
             :roll-to 30
             :type "LETU"
             :description "The dungon turns left."
             :traps-possible false}

            {:roll-from 31
             :roll-to 40
             :type "RITU"
             :description "Tunnel turns right, but you can't see what's beyond the corner."
             :traps-possible false}

            {:roll-from 41
             :roll-to 50
             :type "NACO"
             :description "A narrowing corridor is in front of you."
             :traps-possible true}

            {:roll-from 51
             :roll-to 60
             :type "CIRO"
             :description "You arrive at a circular room."
             :traps-possible false}

            {:roll-from 61
             :roll-to 70
             :type "UPST"
             :description "You find stairs leading upwards."
             :traps-possible true}

            {:roll-from 71
             :roll-to 80
             :type "DOST"
             :description "There are stairs leading downwards."
             :traps-possible true}

            {:roll-from 81
             :roll-to 90
             :type "HURO"
             :description "You find yourself in a huge cavernous room."
             :traps-possible false}

            {:roll-from 91
             :roll-to 100
             :type "LARO"
             :description "You arrive at a large room."
             :traps-possible false}])
