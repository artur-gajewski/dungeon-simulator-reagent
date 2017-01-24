(ns dungeon-simulator.data.items)

(def items [{:roll-from 1
             :roll-to 2
             :type "None"}
            
            {:roll-from 3
             :roll-to 4
             :type "Dagger"
             :description "a normal dagger (1d4)"}
            
            {:roll-from 5
             :roll-to 6
             :type "Club"
             :description "a normal club (1d6)"}
            
            {:roll-from 7
             :roll-to 8
             :type "Mace"
             :description "a normal light mace (1d6)"}
            
            {:roll-from 9
             :roll-to 10
             :type "Shortspear"
             :description "a normal shortspear (1d6)"}
            
            {:roll-from 11
             :roll-to 12
             :type "Quarterstaff"
             :description "a normal quarterstaff (1d6)"}
            
            {:roll-from 13
             :roll-to 14
             :type "Spear"
             :description "a normal spear (1d8)"}
            
            {:roll-from 15
             :roll-to 16
             :type "Crossbow"
             :description "a normal crossbow (1d8)"}
            
            {:roll-from 17
             :roll-to 18
             :type "Sling"
             :description "a normal sling (1d4)"}
            
            {:roll-from 19
             :roll-to 20
             :type "Crossbow Bolts"
             :description "a bundle of 10 crossbow bolts"}
            
            {:roll-from 21
             :roll-to 22
             :type "Sling Bullets"
             :description "a pouch of 10 sling bullets"}
            
            {:roll-from 23
             :roll-to 24
             :type "Battleaxe"
             :description "a normal battleaxe (1d8)"}
            
            {:roll-from 25
             :roll-to 26
             :type "Flail"
             :description "a normal flail (1d8)"}
            
            {:roll-from 27
             :roll-to 28
             :type "Longsword"
             :description "a normal longsword (1d8)"}
            
            {:roll-from 29
             :roll-to 30
             :type "Scimitar"
             :description "a normal scimitar (1d6)"}
            
            {:roll-from 31
             :roll-to 32
             :type "Warhammer"
             :description "a normal warhammer (1d8)"}
            
            {:roll-from 33
             :roll-to 34
             :type "Greataxe"
             :description "a normal Greataxe (1d12)"}
            
            {:roll-from 35
             :roll-to 36
             :type "Heavy Flail"
             :description "a normal heavy flail (1d10)"}
            
            {:roll-from 37
             :roll-to 38
             :type "Halberd"
             :description "a normal halberd (1d10)"}
            
            {:roll-from 39
             :roll-to 40
             :type "Longbow"
             :description "a normal longbow (1d8)"}
            
            {:roll-from 41
             :roll-to 42
             :type "Common Arrows"
             :description "a bundle of 20 arrows"}
            
            {:roll-from 43
             :roll-to 44
             :type "Leather Armor"
             :description "a normal leather armor (+2 AC)"}
            
            {:roll-from 45
             :roll-to 46
             :type "Armored Kilt"
             :description "a normal armored kilt (+1 AC)"}
            
            {:roll-from 47
             :roll-to 48
             :type "Studded Leather"
             :description "a normal studded leather armor (+3 AC)"}
            
            {:roll-from 49
             :roll-to 50
             :type "Hide Armor"
             :description "a normal hide armor (+4 AC)"}
            
            {:roll-from 51
             :roll-to 52
             :type "Chainmail"
             :description "a normal chainmail (+6 AC)"}
            
            {:roll-from 53
             :roll-to 54
             :type "Splint Mail"
             :description "a normal splint mail (+7 AC)"}
            
            {:roll-from 55
             :roll-to 56
             :type "Buckler"
             :description "a normal buckler (+1 AC)"}
            
            {:roll-from 57
             :roll-to 58
             :type "Light Wooden Shield"
             :description "a normal light wooden shield (+1 AC)"}
            
            {:roll-from 59
             :roll-to 60
             :type "Heavy Wooden Shield"
             :description "a normal heavy wooden shield (+2 AC)"}
            
            {:roll-from 61
             :roll-to 62
             :type "Light Healing Potion"
             :description "a light healing potion (cures 1d8 HP)"}
            
            {:roll-from 63
             :roll-to 64
             :type "Moderate Healing Potion"
             :description "a moderate healing potion (cures 2d8 HP)"}
            
            {:roll-from 65
             :roll-to 66
             :type "Invisibility Potion"
             :description "an invisibility potion"}
            
            {:roll-from 67
             :roll-to 68
             :type "Hide From Animals Potion"
             :description "a hide from animals potion"}
            
            {:roll-from 69
             :roll-to 70
             :type "Obsidian Gemstone"
             :description "an obsidian gemstone"}
            
            {:roll-from 71
             :roll-to 72
             :type "Citrine Gemstone"
             :description "a citrine gemstone"}
            
            {:roll-from 73
             :roll-to 74
             :type "Carved Bone Statuette"
             :description "a carved bone statuette"}
            
            {:roll-from 75
             :roll-to 76
             :type "Ten gold pieces"
             :description "a pouch with 10 gold pieces"}
            
            {:roll-from 77
             :roll-to 78
             :type "Magic Missile Wand"
             :description "a wand of magic missiles"}
            
            {:roll-from 79
             :roll-to 80
             :type "Cloak of Protection"
             :description "a cloak of protection (+1 AC)"}

            {:roll-from 81
             :roll-to 82
             :type "Ring of Protection"
             :description "a ring of protection (+1 AC)"}
            
            {:roll-from 83
             :roll-to 84
             :type "Ring of Jumping"
             :description "a ring of jumping"}
            
            {:roll-from 85
             :roll-to 86
             :type "Bedroll"
             :description "a bedroll"}
            
            {:roll-from 87
             :roll-to 88
             :type "Small Tent"
             :description "a small tent"}
            
            {:roll-from 89
             :roll-to 90
             :type "Blanket"
             :description "a blanket"}
            
            {:roll-from 91
             :roll-to 92
             :type "Hemp Rope"
             :description "a hemp rope (50ft)"}
            
            {:roll-from 93
             :roll-to 94
             :type "Silk Rope"
             :description "a silk rope (50ft)"}
            
            {:roll-from 95
             :roll-to 96
             :type "Hooded Lantern And Oil"
             :description "a hooded lantern and some oil"}
            
            {:roll-from 97
             :roll-to 98
             :type "Trail Ration"
             :description "a trail ration"}
            
            {:roll-from 99
             :roll-to 100
             :type "Mead"
             :description "a bottle of mead"}])
