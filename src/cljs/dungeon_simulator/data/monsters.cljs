(ns dungeon-simulator.data.monsters)

(def monsters [{:roll-from 1
                :roll-to 49
                :type "None"}

               {:roll-from 50
                :roll-to 53
                :type "Rat"
                :distance 5
                :hp 2}

               {:roll-from 54
                :roll-to 57
                :type "Giant Spider"
                :distance 5
                :hp 5}

               {:roll-from 58
                :roll-to 61
                :type "Bat"
                :distance 5
                :hp 3}

               {:roll-from 62
                :roll-to 65
                :type "Snake"
                :distance 5
                :hp 4}

               {:roll-from 66
                :roll-to 69
                :type "Ghost"
                :distance 5
                :hp 7}

               {:roll-from 70
                :roll-to 73
                :type "Minor Demon"
                :distance 5
                :hp 10}

               {:roll-from 74
                :roll-to 77
                :type "Goblin"
                :distance 5
                :hp 6}

               {:roll-from 78
                :roll-to 81
                :type "Hobgoblin"
                :distance 5
                :hp 7}

               {:roll-from 82
                :roll-to 85
                :type "Kobold"
                :distance 5
                :hp 4}

               {:roll-from 86
                :roll-to 89
                :type "Skeleton"
                :distance 5
                :hp 5}

               {:roll-from 90
                :roll-to 93
                :type "Orc"
                :distance 5
                :hp 7}
               
               {:roll-from 94
                :roll-to 97
                :type "Ghoul"
                :distance 5
                :hp 10}

               {:roll-from 98
                :roll-to 100
                :type "Zombie"
                :distance 5
                :hp 8}])
