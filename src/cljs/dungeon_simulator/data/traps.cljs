(ns dungeon-simulator.data.traps)

(def traps [{:roll-from 0
             :roll-to 19
             :type "None"
             :description "You find no traps here."}

            {:roll-from 20
             :roll-to 39
             :type "None"
             :description "The place seems safe."}

            {:roll-from 40
             :roll-to 59
             :type "None"
             :description "Luckily, there are no traps in this room. You get a chance to have a little break and heal
                           1d4 hit points."}

            {:roll-from 60
             :roll-to 79
             :type "None"
             :description "This section is clear."}

            {:roll-from 80
             :roll-to 84
             :type "AITW"
             :description "There are holes on the wall which indicate shooting arrows at anyone who passes by the
                           location of the holes."
             :sc "PERCEPTION"
             :dc 15
             :hp "1d4"}
             
            {:roll-from 85
             :roll-to 89
             :type "FANE"
             :description "A trip wire is couple inches off the ground, set up to a netting below the cobwebs."
             :sc "PERCEPTION"
             :dc 11
             :hp "1d4"}
            
            {:roll-from 90
             :roll-to 97
             :type "WFTD"
             :description "The floor has a wooden trap door which opens once stepped on it. Underneath the trap, there
                           is a drop of four feet and in the bottom of the pit there are metallic spikes."
             :sc "PERCEPTION"
             :dc 10
             :hp "1d4-1"}])

            {:roll-from 98
             :roll-to 98
             :type "FIBS"
             :description "A small pressure plate is in the ground. When stepped on, a nozzle on the wall launches a torrent of flame."
             :sc "PERCEPTION"
             :dc 14
             :hp "1d6"}
            
            {:roll-from 99
             :roll-to 99
             :type "CORO"
             :description "There is a trip wire set up across the place, which is stretched between two support beams. The beams
                           are in bad shape and there are loose rocks lodged above them."
             :sc "PERCEPTION"
             :dc 13
             :hp "2d4"}
