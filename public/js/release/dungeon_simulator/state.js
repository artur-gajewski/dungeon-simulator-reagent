// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof dungeon_simulator.state.progress !== 'undefined'){
} else {
dungeon_simulator.state.progress = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if(typeof dungeon_simulator.state.tile !== 'undefined'){
} else {
dungeon_simulator.state.tile = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof dungeon_simulator.state.action_type !== 'undefined'){
} else {
dungeon_simulator.state.action_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("start");
}
if(typeof dungeon_simulator.state.monster !== 'undefined'){
} else {
dungeon_simulator.state.monster = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof dungeon_simulator.state.trap !== 'undefined'){
} else {
dungeon_simulator.state.trap = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
