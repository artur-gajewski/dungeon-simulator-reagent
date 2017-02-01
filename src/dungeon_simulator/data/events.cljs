(ns dungeon-simulator.data.tiles)

(def tiles [{:roll-from 1
             :roll-to 10
             :type "STRA"
             :subtype "dungeon"
             :description "You arrive at a straight tunnel."
             :traps-possible true}

            {:roll-from 11
             :roll-to 20
             :type "WICO"
             :subtype "dungeon"
             :description "You find a widening corridor in front of you."
             :traps-possible true}

            {:roll-from 21
             :roll-to 30
             :type "LETU"
             :subtype "dungeon"
             :description "The dungon turns left."
             :traps-possible false}

            {:roll-from 31
             :roll-to 40
             :type "RITU"
             :subtype "dungeon"
             :description "Tunnel turns right, but you can't see what's beyond the corner."
             :traps-possible false}

            {:roll-from 41
             :roll-to 50
             :type "NACO"
             :subtype "dungeon"
             :description "A narrowing corridor is in front of you."
             :traps-possible true}

            {:roll-from 51
             :roll-to 60
             :type "CIRO"
             :subtype "dungeon"
             :description "You arrive at a circular room."
             :traps-possible false}

            {:roll-from 61
             :roll-to 70
             :type "UPST"
             :subtype "dungeon"
             :description "You find stairs leading upwards to a dungeon exit to wilderness."
             :traps-possible true}

            {:roll-from 71
             :roll-to 80
             :type "DOST"
             :subtype "dungeon"
             :description "There are stairs leading downwards."
             :traps-possible true}

            {:roll-from 81
             :roll-to 90
             :type "HURO"
             :subtype "dungeon"
             :description "You find yourself in a huge cavernous room."
             :traps-possible false}

            {:roll-from 91
             :roll-to 100
             :type "LARO"
             :subtype "dungeon"
             :description "You arrive at a large room."
             :traps-possible false}
            
            {:roll-from 1
             :roll-to 10
             :type "STPA"
             :subtype "wilderness"
             :description "You follow a straight path through the forest."
             :traps-possible true}
            
            {:roll-from 11
             :roll-to 20
             :type "FOCL"
             :subtype "wilderness"
             :description "You find a small forest clearing."
             :traps-possible true}

            {:roll-from 21
             :roll-to 30
             :type "PALE"
             :subtype "wilderness"
             :description "The path turns left in a thick forest."
             :traps-possible false}

            {:roll-from 31
             :roll-to 40
             :type "PARI"
             :subtype "wilderness"
             :description "You follow the path that steers right."
             :traps-possible false}

            {:roll-from 41
             :roll-to 50
             :type "SMHU"
             :subtype "wilderness"
             :description "You find a small hut in the forest."
             :traps-possible true}

            {:roll-from 51
             :roll-to 60
             :type "HUCA"
             :subtype "wilderness"
             :description "There's a hunters cabin here."
             :traps-possible false}

            {:roll-from 61
             :roll-to 70
             :type "STHI"
             :subtype "wilderness"
             :description "You climb a steep hill with almost no forestation."
             :traps-possible true}

            {:roll-from 71
             :roll-to 80
             :type "CAVE"
             :subtype "wilderness"
             :description "You find a small cave."
             :traps-possible true}

            {:roll-from 81
             :roll-to 90
             :type "TOGA"
             :subtype "wilderness"
             :description "A small gate comes to your view when the forest suddenly ends, leading to a small town."
             :traps-possible false}

            {:roll-from 91
             :roll-to 100
             :type "DUEN"
             :subtype "wilderness"
             :description "You stumble into a dungeon entrance."
             :traps-possible false}
            
            {:roll-from 1
             :roll-to 10
             :type "GUGA"
             :subtype "town"
             :description "A guard hut and town gates are here."
             :traps-possible true}
            
            {:roll-from 11
             :roll-to 20
             :type "SMAL"
             :subtype "town"
             :description "A small alley is in front of you."
             :traps-possible true}

            {:roll-from 21
             :roll-to 30
             :type "MAPL"
             :subtype "town"
             :description "You stumble upon the town marketplace."
             :traps-possible false}

            {:roll-from 31
             :roll-to 40
             :type "SHPA"
             :subtype "town"
             :description "You find yourself in the shady part of the town."
             :traps-possible false}

            {:roll-from 41
             :roll-to 50
             :type "GRYA"
             :subtype "town"
             :description "The town graveyard is in front of you."
             :traps-possible true}

            {:roll-from 51
             :roll-to 60
             :type "MAHO"
             :subtype "town"
             :description "Mayor's hourse stands tall in your way."
             :traps-possible false}

            {:roll-from 61
             :roll-to 70
             :type "PRIS"
             :subtype "town"
             :description "You find the town prison here."
             :traps-possible true}

            {:roll-from 71
             :roll-to 80
             :type "GRHO"
             :subtype "town"
             :description "A small group of houses is here."
             :traps-possible true}

            {:roll-from 81
             :roll-to 90
             :type "TOGA"
             :subtype "town"
             :description "There's a tavern here."
             :traps-possible false}

            {:roll-from 91
             :roll-to 100
             :type "TOMI"
             :subtype "town"
             :description "The town mines are here, with mining tunnels leading in to the ground."
             :traps-possible false}])
