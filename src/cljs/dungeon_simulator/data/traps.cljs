(ns dungeon-simulator.data.traps)

(def traps [{:roll-from 0
             :roll-to 10
             :type "None"
             :description "You find no traps here."}

            {:roll-from 11
             :roll-to 10
             :type "None"
             :description "The place seems safe."}

            {:roll-from 21
             :roll-to 10
             :type "None"
             :description "Luckily, there are no traps in this room. You get a chance to have a little break and heal
                           1d4 hit points."}

            {:roll-from 31
             :roll-to 10
             :type "None"
             :description "This section is clear."}

            {:roll-from 41
             :roll-to 10
             :type "None"
             :description "You find no traps here."}

            {:roll-from 51
             :roll-to 10
             :type "None"
             :description "The place seems safe."}

            {:roll-from 61
             :roll-to 10
             :type "None"
             :description "Luckily, there are no traps in this room. You get a chance to have a little break and heal
                           1d4 hit points."}

            {:roll-from 71
             :roll-to 10
             :type "None"
             :description "This section is clear."}

            {:roll-from 81
             :roll-to 10
             :type "AITW"
             :description "There are holes on the wall which indicate shooting arrows at anyone who passes by the
                           location of the holes."
             :sc "PERCEPTION"
             :dc 15
             :hp "1d4"}

            {:roll-from 91
             :roll-to 10
             :type "CORO"
             :description "There is a trip wire set up across the place, which is stretched between two support beams. The beams
                           are in bad shape and there are loose rocks lodged above them."
             :sc "PERCEPTION"
             :dc 13
             :hp "2d4"}

            {:roll-from 0
             :roll-to 10
             :type "FANE"
             :description "A trip wire is couple inches off the ground, set up to a netting below the cobwebs."
             :sc "PERCEPTION"
             :dc 11
             :hp "1d4"}

            {:roll-from 0
             :roll-to 10
             :type "FIBS"
             :description "A small pressure plate is in the ground. When stepped on, a nozzle on the wall launches a torrent of flame."
             :sc "PERCEPTION"
             :dc 14
             :hp "1d6"}

            {:roll-from 0
             :roll-to 10
             :type "WFTD"
             :description "The floor has a wooden trap door which opens once stepped on it. Underneath the trap, there
                           is a drop of four feet and in the bottom of the pit there are metallic spikes."
             :sc "PERCEPTION"
             :dc 10
             :hp "1d4"}])