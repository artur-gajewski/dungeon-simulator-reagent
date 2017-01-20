(ns dungeon-simulator.data.monsters)

(def monsters [{:roll-from 1
                :roll-to 49
                :type "None"}

               {:roll-from 50
                :roll-to 53
                :type "Rat"
                :xp 80
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 54
                :roll-to 57
                :type "Giant Spider"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 58
                :roll-to 61
                :type "Bat"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 62
                :roll-to 65
                :type "Snake"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 66
                :roll-to 69
                :type "Ghost"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 70
                :roll-to 73
                :type "Minor Demon"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 74
                :roll-to 77
                :type "Goblin"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 78
                :roll-to 81
                :type "Hobgoblin"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 82
                :roll-to 85
                :type "Kobold"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 86
                :roll-to 89
                :type "Skeleton"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 90
                :roll-to 93
                :type "Orc"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}
               
               {:roll-from 94
                :roll-to 97
                :type "Ghoul"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}

               {:roll-from 98
                :roll-to 100
                :type "Zombie"
                :xp 0
                :distance -1
                :initiative +1
                :ac 0
                :hp {:static 8
                     :roll-amount 2
                     :roll-sides 8}
                :stats {:strength 0
                        :dexterity 0
                        :constitution 0
                        :intelligence 0
                        :wisdom 0
                        :charisma 0}
                :senses [{:type "Passive Perception"
                          :value "10"
                          :unit ""}
                         {:type "Darkvision"
                          :value "60"
                          :unit "feet"}]
                :languages [{:type "common"
                             :description "Common"}
                            {:type "frogfolk"
                             :description "Frogfolk, understands some Finnish"}]
                :weapons {:melee [{:description "Greatclub"
                                   :to-hit +6
                                   :reach {:value 5
                                           :unit "feet"}
                                   :hit {:static 8
                                         :roll-amount 1
                                         :roll-sides 8
                                         :roll-modifier +4}}]
                          :range [{:description "Spear"
                                   :to-hit +4
                                   :reach {:value 30
                                           :unit "feet"}
                                   :hit {:static 10
                                         :roll-amount 1
                                         :roll-sides 6
                                         :roll-modifier +4}}]}}])
