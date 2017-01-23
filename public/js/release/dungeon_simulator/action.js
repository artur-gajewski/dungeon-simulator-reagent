// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.action');
goog.require('cljs.core');
goog.require('dungeon_simulator.data.traps');
goog.require('dungeon_simulator.data.monsters');
goog.require('dungeon_simulator.state');
goog.require('dungeon_simulator.tools');
goog.require('dungeon_simulator.data.tiles');
dungeon_simulator.action.create_new_tile = (function dungeon_simulator$action$create_new_tile(){
var tile = dungeon_simulator.tools.roll_from_data(dungeon_simulator.tools.roll((1),(100),(0)),dungeon_simulator.data.tiles.tiles);
var monster = dungeon_simulator.tools.roll_from_data(dungeon_simulator.tools.roll((1),(100),(0)),dungeon_simulator.data.monsters.monsters);
var trap = dungeon_simulator.tools.roll_from_data(dungeon_simulator.tools.roll((1),(100),(0)),dungeon_simulator.data.traps.traps);
var monster_distance = (cljs.core.rand_int((5)) + (5));
var monster_is_aware = cljs.core.rand_int((2));
var G__13074_13076 = dungeon_simulator.state.progress;
var G__13075_13077 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dungeon_simulator.state.progress) : cljs.core.deref.call(null,dungeon_simulator.state.progress)) + (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13074_13076,G__13075_13077) : cljs.core.reset_BANG_.call(null,G__13074_13076,G__13075_13077));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dungeon_simulator.state.tile,tile) : cljs.core.reset_BANG_.call(null,dungeon_simulator.state.tile,tile));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dungeon_simulator.state.monster,monster) : cljs.core.reset_BANG_.call(null,dungeon_simulator.state.monster,monster));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dungeon_simulator.state.trap,trap) : cljs.core.reset_BANG_.call(null,dungeon_simulator.state.trap,trap));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dungeon_simulator.state.monster,cljs.core.assoc,cljs.core.cst$kw$distance,monster_distance);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(monster_is_aware,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dungeon_simulator.state.monster,cljs.core.assoc,cljs.core.cst$kw$is_DASH_aware,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(monster_is_aware,(1))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dungeon_simulator.state.monster,cljs.core.assoc,cljs.core.cst$kw$is_DASH_aware,true);
} else {
return null;
}
}
});
