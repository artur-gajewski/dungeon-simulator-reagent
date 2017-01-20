(ns dungeon-simulator.data.monsters)

(def monsters [{:roll-from 1
                :roll-to 49
                :type "None"}

               {:roll-from 50
                :roll-to 53
                :type "Rat"
                :xp 80
                :distance -1
                :initiative-modifier +1
                :ac 10
                :hp {:static 4
                     :roll-amount 1
                     :roll-sides 6}
                :skills {:strength 3
                         :dexterity 14
                         :constitution 8
                         :intelligence 3
                         :wisdom 8
                         :charisma 1}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "rat"
                             :description "Rat sounds"}]
                :weapons {:melee [{:description "Bite"
                                   :to-hit +2
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 1
                                         :roll-amount 1
                                         :roll-sides 3
                                         :roll-modifier -1}}]}}

               {:roll-from 54
                :roll-to 57
                :type "Giant Spider"
                :xp 200
                :distance -1
                :initiative-modifier +2
                :ac 12
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :skills {:strength 10
                         :dexterity 15
                         :constitution 11
                         :intelligence 1
                         :wisdom 8
                         :charisma 1}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}
                         {:type "Tremorsense"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "spider"
                             :description "Spider chitter"}]
                :weapons {:melee [{:description "Bite"
                                   :to-hit +2
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 4
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +2}}]
                          :range [{:description "Web"
                                   :to-hit +2
                                   :reach {:value 20
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 2
                                         :roll-modifier +1}}]}}

               {:roll-from 58
                :roll-to 61
                :type "Bat"
                :xp 30
                :distance -1
                :initiative-modifier +1
                :ac 13
                :hp {:static 1
                     :roll-amount 1
                     :roll-sides 2}
                :skills {:strength 2
                         :dexterity 16
                         :constitution 4
                         :intelligence 1
                         :wisdom 4
                         :charisma 1}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Low-light Vision"
                          :value "30"
                          :unit "feet"}
                         {:type "Blindsense"
                          :value "15"
                          :unit "feet"}]
                :languages [{:type "Bat"
                             :description "Bat screams"}]
                :weapons {:melee [{:description "Bite"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 1
                                         :roll-amount 1
                                         :roll-sides 2
                                         :roll-modifier -1}}]}}

               {:roll-from 62
                :roll-to 65
                :type "Snake"
                :xp 100
                :distance -1
                :initiative-modifier +1
                :ac 13
                :hp {:static 9
                     :roll-amount 2
                     :roll-sides 8}
                :skills {:strength 7
                         :dexterity 12
                         :constitution 13
                         :intelligence 2
                         :wisdom 10
                         :charisma 3}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Low-light Vision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "snake"
                             :description "Snake hiss"}]
                :weapons {:melee [{:description "bite"
                                   :to-hit +1
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 3
                                         :roll-amount 1
                                         :roll-sides 4}}]}}

               {:roll-from 66
                :roll-to 69
                :type "Ghost"
                :xp 375
                :distance -1
                :initiative-modifier +1
                :ac 16
                :hp {:static 17
                     :roll-amount 4
                     :roll-sides 8}
                :skills {:strength 0
                         :dexterity 13
                         :constitution 0
                         :intelligence 12
                         :wisdom 12
                         :charisma 18}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}]
                :weapons {:melee [{:description "Ghost Touch"
                                   :to-hit +8
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 6
                                         :roll-amount 1
                                         :roll-sides 10
                                         :roll-modifier +1}}]
                          :range [{:description "Ghost Howl"
                                   :to-hit +20
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 2
                                         :roll-modifier +1}}]}}

               {:roll-from 70
                :roll-to 73
                :type "Imp"
                :xp 150
                :distance -1
                :initiative-modifier +1
                :ac 15
                :hp {:static 5
                     :roll-amount 1
                     :roll-sides 10}
                :skills {:strength 9
                         :dexterity 16
                         :constitution 11
                         :intelligence 14
                         :wisdom 10
                         :charisma 12}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "infernal"
                             :description "Infernal demon language"}]
                :weapons {:melee [{:description "Tailsting"
                                   :to-hit +4
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 4
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +2}}]
                          :range [{:description "Spark"
                                   :to-hit +1
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 4}}]}}

               {:roll-from 74
                :roll-to 77
                :type "Goblin"
                :xp 60
                :distance -1
                :initiative-modifier +1
                :ac 14
                :hp {:static 5
                     :roll-amount 1
                     :roll-sides 8}
                :skills {:strength 10
                         :dexterity 14
                         :constitution 10
                         :intelligence 10
                         :wisdom 7
                         :charisma 6}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "goblin"
                             :description "Goblin language"}]
                :weapons {:melee [{:description "Short Sword"
                                   :to-hit +2
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 4
                                         :roll-modifier 0}}]
                          :range [{:description "Short Bow"
                                   :to-hit +2
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 4
                                         :roll-modifier 0}}]}}

               {:roll-from 78
                :roll-to 81
                :type "Hobgoblin"
                :xp 205
                :distance -1
                :initiative-modifier +1
                :ac 15
                :hp {:static 9
                     :roll-amount 2
                     :roll-sides 8}
                :skills {:strength 14
                         :dexterity 13
                         :constitution 14
                         :intelligence 11
                         :wisdom 8
                         :charisma 7}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "goblin"
                             :description "Goblin language"}]
                :weapons {:melee [{:description "Longsword"
                                   :to-hit +2
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 5
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +1}}]
                          :range [{:description "longbow"
                                   :to-hit +2
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 5
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +1}}]}}

               {:roll-from 82
                :roll-to 85
                :type "Kobold"
                :xp 90
                :distance -1
                :initiative-modifier +1
                :ac 14
                :hp {:static 4
                     :roll-amount 1
                     :roll-sides 8}
                :skills {:strength 7
                         :dexterity 14
                         :constitution 9
                         :intelligence 8
                         :wisdom 8
                         :charisma 8}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "draconic"
                             :description "Draconic language, aka. Dragonspeak"}]
                :weapons {:melee [{:description "Spear"
                                   :to-hit +1
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 3
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier -1}}]
                          :range [{:description "Sling"
                                   :to-hit +1
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 1
                                         :roll-amount 1
                                         :roll-sides 3
                                         :roll-modifier -1}}]}}

               {:roll-from 86
                :roll-to 89
                :type "Skeleton"
                :xp 77
                :distance -1
                :initiative-modifier +1
                :ac 15
                :hp {:static 3
                     :roll-amount 1
                     :roll-sides 6}
                :skills {:strength 12
                         :dexterity 10
                         :constitution 0
                         :intelligence 0
                         :wisdom 9
                         :charisma 7}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "skeletal"
                             :description "Doot Doot"}]
                :weapons {:melee [{:description "Claw"
                                   :to-hit 0
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 2
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier -1}}]}}

               {:roll-from 90
                :roll-to 93
                :type "Orc"
                :xp 155
                :distance -1
                :initiative-modifier +1
                :ac 12
                :hp {:static 4
                     :roll-amount 1
                     :roll-sides 8}
                :skills {:strength 16
                         :dexterity 12
                         :constitution 14
                         :intelligence 7
                         :wisdom 8
                         :charisma 6}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "orcish"
                             :description "Orcish language"}]
                :weapons {:melee [{:description "Battleaxe"
                                   :to-hit +3
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 5
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +3}}]}}
               
               {:roll-from 94
                :roll-to 97
                :type "Ghoul"
                :xp 200
                :distance -1
                :initiative-modifier +1
                :ac 13
                :hp {:static 11
                     :roll-amount 2
                     :roll-sides 10}
                :skills {:strength 14
                         :dexterity 14
                         :constitution 0
                         :intelligence 13
                         :wisdom 11
                         :charisma 8}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}]
                :weapons {:melee [{:description "Bite"
                                   :to-hit +3
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 5
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +1}}]}}

               {:roll-from 98
                :roll-to 100
                :type "Zombie"
                :xp 95
                :distance -1
                :initiative-modifier +1
                :ac 11
                :hp {:static 7
                     :roll-amount 1
                     :roll-sides 12}
                :skills {:strength 16
                         :dexterity 9
                         :constitution 0
                         :intelligence 0
                         :wisdom 8
                         :charisma 6}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "zombie"
                             :description "Zombie groans"}]
                :weapons {:melee [{:description "Slam"
                                   :to-hit +3
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 5
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +2}}]}}])
