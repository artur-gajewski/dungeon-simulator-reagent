(ns dungeon-simulator.data)

(def tiles [{:type "STRA"
             :description "You arrive at a straight tunnel."}
            {:type "WICO"
             :description "You find a widening corridor in front of you."}
            {:type "LETU"
             :description "There is a turn to the left ahead of you. You can't see behind it."}
            {:type "RITU"
             :description "Tunnel turns right, but you can't see what's beyond the corner."}
            {:type "NACO"
             :description "A narrowing corridor is in front of you."}
            {:type "CIRO"
             :description "You arrive at a circular room."}
            {:type "UPST"
             :description "You find stairs leading upwards."}
            {:type "DOST"
             :description "There are stairs leading downwards."}
            {:type "HURO"
             :description "You find yourself in a huge cavernous room."}
            {:type "LARO"
             :description "You arrive at a large room."}])

(def monsters [{:type "None"}
               {:type "None"}
               {:type "None"}
               {:type "None"}
               {:type "None"}
               {:type "None"}
               {:type "None"}

               {:type "Goblin"
                :distance 5
                :hp 6}
               
               {:type "Hobgoblin"
                :distance 5
                :hp 7}
               
               {:type "Kobold"
                :distance 5
                :hp 4}

               {:type "Skeleton"
                :distance 5
                :hp 5}
               
               {:type "Orc"
                :distance 5
                :hp 7}

               {:type "Zombie"
                :distance 5
                :hp 8}])

(def traps [{:type "None"
             :description "You find no traps here."}
            {:type "None"
             :description "The place seems safe."}
            {:type "None"
             :description "Luckily, there are no traps in this room. You get a chance to have a little break and heal
                           1d4 hit points."}
            {:type "None"
             :description "This section is clear."}
            {:type "None"
             :description "You find no traps here."}
            {:type "None"
             :description "The place seems safe."}
            {:type "None"
             :description "Luckily, there are no traps in this room. You get a chance to have a little break and heal
                           1d4 hit points."}
            {:type "None"
             :description "This section is clear."}
            {:type "AITW"
             :description "There are holes on the wall which indicate shooting arrows at anyone who passes by the
                           location of the holes."
             :sc "PERCEPTION"
             :dc 15
             :hp "1d4"}
            {:type "CORO"
             :description "There is a trip wire set up across the place, which is stretched between two support beams. The beams
                           are in bad shape and there are loose rocks lodged above them."
             :sc "PERCEPTION"
             :dc 13
             :hp "2d4"}
            {:type "FANE"
             :description "A trip wire is couple inches off the ground, set up to a netting below the cobwebs."
             :sc "PERCEPTION"
             :dc 11
             :hp "1d4"}
            {:type "FIBS"
             :description "A small pressure plate is in the ground. When stepped on, a nozzle on the wall launches a torrent of flame."
             :sc "PERCEPTION"
             :dc 14
             :hp "1d6"}
            {:type "WFTD"
             :description "The floor has a wooden trap door which opens once stepped on it. Underneath the trap, there
                           is a drop of four feet and in the bottom of the pit there are metallic spikes."
             :sc "PERCEPTION"
             :dc 10
             :hp "1d4"}])
