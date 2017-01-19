(ns dungeon-simulator.data.monsters)

(def monsters [{:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "None"}

               {:roll-from 0
                :roll-to 10
                :type "Goblin"
                :distance 5
                :hp 6}

               {:roll-from 11
                :roll-to 20
                :type "Hobgoblin"
                :distance 5
                :hp 7}

               {:roll-from 21
                :roll-to 30
                :type "Kobold"
                :distance 5
                :hp 4}

               {:roll-from 31
                :roll-to 40
                :type "Skeleton"
                :distance 5
                :hp 5}

               {:roll-from 41
                :roll-to 50
                :type "Orc"
                :distance 5
                :hp 7}

               {:roll-from 51
                :roll-to 100
                :type "Zombie"
                :distance 5
                :hp 8}])
