// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.components.trap_description');
goog.require('cljs.core');
goog.require('reagent.format');
dungeon_simulator.components.trap_description.render = (function dungeon_simulator$components$trap_description$render(trap){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"trap-description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(trap)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(trap),"None"))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,reagent.format.format.cljs$core$IFn$_invoke$arity$variadic("In order to survive this trap, you need to make a %s CHECK for DC %s. If you fail, you will\n              receive %s hit points damage.",cljs.core.array_seq([cljs.core.cst$kw$sc.cljs$core$IFn$_invoke$arity$1(trap),cljs.core.cst$kw$dc.cljs$core$IFn$_invoke$arity$1(trap),cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(trap)], 0))], null))], null);
});
