// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.components.legend');
goog.require('cljs.core');
goog.require('reagent.format');
dungeon_simulator.components.legend.render = (function dungeon_simulator$components$legend$render(description,monster){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"room-description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(monster),"None"))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str(reagent.format.format.cljs$core$IFn$_invoke$arity$variadic("There is %s %s feet from you. If you commence combat, %s will attack with the best weapon available\n                 concidering it's distance from you.",cljs.core.array_seq([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(monster),cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(monster),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(monster)], 0)))].join('')], null))], null);
});
