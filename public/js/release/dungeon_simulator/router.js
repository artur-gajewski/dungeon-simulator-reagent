// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dungeon_simulator.router');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('dungeon_simulator.action');
goog.require('dungeon_simulator.pages.home');
goog.require('dungeon_simulator.pages.room');
dungeon_simulator.router.create_routes = (function dungeon_simulator$router$create_routes(){
var action__17358__auto___17582 = (function (params__17359__auto__){
if(cljs.core.map_QMARK_(params__17359__auto__)){
var map__17572 = params__17359__auto__;
var map__17572__$1 = ((((!((map__17572 == null)))?((((map__17572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17572):map__17572);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dungeon_simulator.pages.home.home;},cljs.core.cst$sym$dungeon_DASH_simulator$pages$home_SLASH_home,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dungeon_DASH_simulator$pages$home,cljs.core.cst$sym$home,"/Users/arturgajewski/code/own/dungeon-simulator-new/dungeon-simulator/src/dungeon_simulator/pages/home.cljs",11,1,4,4,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dungeon_simulator.pages.home.home)?dungeon_simulator.pages.home.home.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17359__auto__)){
var vec__17574 = params__17359__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dungeon_simulator.pages.home.home;},cljs.core.cst$sym$dungeon_DASH_simulator$pages$home_SLASH_home,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dungeon_DASH_simulator$pages$home,cljs.core.cst$sym$home,"/Users/arturgajewski/code/own/dungeon-simulator-new/dungeon-simulator/src/dungeon_simulator/pages/home.cljs",11,1,4,4,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dungeon_simulator.pages.home.home)?dungeon_simulator.pages.home.home.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17358__auto___17582);


var action__17358__auto__ = (function (params__17359__auto__){
if(cljs.core.map_QMARK_(params__17359__auto__)){
var map__17577 = params__17359__auto__;
var map__17577__$1 = ((((!((map__17577 == null)))?((((map__17577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17577):map__17577);
dungeon_simulator.action.create_new_tile();

return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dungeon_simulator.pages.room.room;},cljs.core.cst$sym$dungeon_DASH_simulator$pages$room_SLASH_room,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dungeon_DASH_simulator$pages$room,cljs.core.cst$sym$room,"src/dungeon_simulator/pages/room.cljs",11,1,8,8,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dungeon_simulator.pages.room.room)?dungeon_simulator.pages.room.room.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__17359__auto__)){
var vec__17579 = params__17359__auto__;
dungeon_simulator.action.create_new_tile();

return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dungeon_simulator.pages.room.room;},cljs.core.cst$sym$dungeon_DASH_simulator$pages$room_SLASH_room,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dungeon_DASH_simulator$pages$room,cljs.core.cst$sym$room,"src/dungeon_simulator/pages/room.cljs",11,1,8,8,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dungeon_simulator.pages.room.room)?dungeon_simulator.pages.room.room.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/room",action__17358__auto__);

return ((function (action__17358__auto__){
return (function() { 
var G__17583__delegate = function (args__17357__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/room",args__17357__auto__);
};
var G__17583 = function (var_args){
var args__17357__auto__ = null;
if (arguments.length > 0) {
var G__17584__i = 0, G__17584__a = new Array(arguments.length -  0);
while (G__17584__i < G__17584__a.length) {G__17584__a[G__17584__i] = arguments[G__17584__i + 0]; ++G__17584__i;}
  args__17357__auto__ = new cljs.core.IndexedSeq(G__17584__a,0);
} 
return G__17583__delegate.call(this,args__17357__auto__);};
G__17583.cljs$lang$maxFixedArity = 0;
G__17583.cljs$lang$applyTo = (function (arglist__17585){
var args__17357__auto__ = cljs.core.seq(arglist__17585);
return G__17583__delegate(args__17357__auto__);
});
G__17583.cljs$core$IFn$_invoke$arity$variadic = G__17583__delegate;
return G__17583;
})()
;
;})(action__17358__auto__))
});
