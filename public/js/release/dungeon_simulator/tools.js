// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.tools');
goog.require('cljs.core');
goog.require('reagent.format');
dungeon_simulator.tools.roll = (function dungeon_simulator$tools$roll(amount,sides,modifier){
var roll_result = (cljs.core.rand_int(sides) + (1));
var total = (amount * roll_result);
var modified = (total + modifier);
return modified;
});
dungeon_simulator.tools.roll_from_data = (function dungeon_simulator$tools$roll_from_data(roll_value,data){
var min_found = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13064_SHARP_){
return (roll_value >= cljs.core.cst$kw$roll_DASH_from.cljs$core$IFn$_invoke$arity$1(p1__13064_SHARP_));
}),data);
var max_found = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (min_found){
return (function (p1__13065_SHARP_){
return (roll_value <= cljs.core.cst$kw$roll_DASH_to.cljs$core$IFn$_invoke$arity$1(p1__13065_SHARP_));
});})(min_found))
,min_found);
var found_monster = cljs.core.first(max_found);
return found_monster;
});
dungeon_simulator.tools.format_to_hit_number = (function dungeon_simulator$tools$format_to_hit_number(number){
var formatted = (((number < (0)))?number:(((number > (0)))?[cljs.core.str("+"),cljs.core.str(number)].join(''):(0)
));
return formatted;
});
dungeon_simulator.tools.format_roll_text = (function dungeon_simulator$tools$format_roll_text(roll_amount,roll_sides,roll_modifier){
var modifier = (((roll_modifier < (0)))?[cljs.core.str(" "),cljs.core.str(roll_modifier)].join(''):(((roll_modifier > (0)))?[cljs.core.str(" +"),cljs.core.str(roll_modifier)].join(''):""
));
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic(" (%sd%s%s)",cljs.core.array_seq([roll_amount,roll_sides,modifier], 0));
});
dungeon_simulator.tools.roll_initiative_text = (function dungeon_simulator$tools$roll_initiative_text(character){
var initiative_modifier = cljs.core.cst$kw$initiative_DASH_modifier.cljs$core$IFn$_invoke$arity$1(character);
var initiative_result = dungeon_simulator.tools.roll((1),(20),initiative_modifier);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic("%s%s",cljs.core.array_seq([initiative_result,dungeon_simulator.tools.format_roll_text((1),(20),initiative_modifier)], 0));
});
