(ns dungeon-simulator.data)

(def tiles [{:type "S"
             :description "You arrive at a straight tunnel."}
            {:type "L"
             :description "There is a turn to the left ahead of you and you don't see behind it."}
            {:type "R"
             :description "There is a turn to the right ahead of you and you don't see behind it."}
            {:type "LR"
             :description "You arrive at a large room."}])

(def monsters [{:type "None"}
               {:type "None"}
               {:type "None"}
               {:type "None"}

               {:type "Goblin"
                :distance 5
                :is-suprised false
                :hp 8}

               {:type "Skeleton"
                :distance 5
                :is-suprised false
                :hp 5}

               {:type "Zombie"
                :distance 5
                :is-suprised false
                :hp 7}])

(def traps [{:type "None"
             :description "Luckily, there is no trap in this room. You get a chance to have a little break and heal
                           1d4 hit points."}
            {:type "None"
             :description "Luckily, there is no trap in this room. You get a chance to have a little break and heal
                           1d4 hit points."}
            {:type "None"
             :description "Luckily, there is no trap in this room. You get a chance to have a little break and heal
                           1d4 hit points."}
            {:type "AITW"
             :description "There are holes on the wall which indicate shooting arrows at anyone who passes the
                           location of the holes."
             :sc "PERCEPTION"
             :dc 15
             :hp "1d4"}
            {:type "WFTD"
             :description "The floor has a wooden trap door which opens once stepped on it. Underneath the trap, there
                           is a drop of four feet and in the bottom of the pit there are metallic spikes at the bottom."
             :sc "PERCEPTION"
             :dc 10
             :hp "1d4"}])