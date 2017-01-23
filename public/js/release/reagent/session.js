// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13086 = arguments.length;
var i__7485__auto___13087 = (0);
while(true){
if((i__7485__auto___13087 < len__7484__auto___13086)){
args__7491__auto__.push((arguments[i__7485__auto___13087]));

var G__13088 = (i__7485__auto___13087 + (1));
i__7485__auto___13087 = G__13088;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13082){
var vec__13083 = p__13082;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13083,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13080){
var G__13081 = cljs.core.first(seq13080);
var seq13080__$1 = cljs.core.next(seq13080);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13081,seq13080__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13097 = arguments.length;
var i__7485__auto___13098 = (0);
while(true){
if((i__7485__auto___13098 < len__7484__auto___13097)){
args__7491__auto__.push((arguments[i__7485__auto___13098]));

var G__13099 = (i__7485__auto___13098 + (1));
i__7485__auto___13098 = G__13099;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13091){
var vec__13092 = p__13091;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(0),null);
var or__6409__auto__ = (function (){var G__13096 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13096) : cljs.core.deref.call(null,G__13096));
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13089){
var G__13090 = cljs.core.first(seq13089);
var seq13089__$1 = cljs.core.next(seq13089);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13090,seq13089__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13102 = arguments.length;
var i__7485__auto___13103 = (0);
while(true){
if((i__7485__auto___13103 < len__7484__auto___13102)){
args__7491__auto__.push((arguments[i__7485__auto___13103]));

var G__13104 = (i__7485__auto___13103 + (1));
i__7485__auto___13103 = G__13104;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13100){
var G__13101 = cljs.core.first(seq13100);
var seq13100__$1 = cljs.core.next(seq13100);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13101,seq13100__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__13107 = reagent.session.state;
var G__13108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13107,G__13108) : cljs.core.reset_BANG_.call(null,G__13107,G__13108));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13115 = arguments.length;
var i__7485__auto___13116 = (0);
while(true){
if((i__7485__auto___13116 < len__7484__auto___13115)){
args__7491__auto__.push((arguments[i__7485__auto___13116]));

var G__13117 = (i__7485__auto___13116 + (1));
i__7485__auto___13116 = G__13117;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13111){
var vec__13112 = p__13111;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13109){
var G__13110 = cljs.core.first(seq13109);
var seq13109__$1 = cljs.core.next(seq13109);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13110,seq13109__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13124 = arguments.length;
var i__7485__auto___13125 = (0);
while(true){
if((i__7485__auto___13125 < len__7484__auto___13124)){
args__7491__auto__.push((arguments[i__7485__auto___13125]));

var G__13126 = (i__7485__auto___13125 + (1));
i__7485__auto___13125 = G__13126;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13120){
var vec__13121 = p__13120;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13118){
var G__13119 = cljs.core.first(seq13118);
var seq13118__$1 = cljs.core.next(seq13118);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13119,seq13118__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13131 = arguments.length;
var i__7485__auto___13132 = (0);
while(true){
if((i__7485__auto___13132 < len__7484__auto___13131)){
args__7491__auto__.push((arguments[i__7485__auto___13132]));

var G__13133 = (i__7485__auto___13132 + (1));
i__7485__auto___13132 = G__13133;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13127_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__13127_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq13128){
var G__13129 = cljs.core.first(seq13128);
var seq13128__$1 = cljs.core.next(seq13128);
var G__13130 = cljs.core.first(seq13128__$1);
var seq13128__$2 = cljs.core.next(seq13128__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13129,G__13130,seq13128__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13138 = arguments.length;
var i__7485__auto___13139 = (0);
while(true){
if((i__7485__auto___13139 < len__7484__auto___13138)){
args__7491__auto__.push((arguments[i__7485__auto___13139]));

var G__13140 = (i__7485__auto___13139 + (1));
i__7485__auto___13139 = G__13140;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13134_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__13134_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13135){
var G__13136 = cljs.core.first(seq13135);
var seq13135__$1 = cljs.core.next(seq13135);
var G__13137 = cljs.core.first(seq13135__$1);
var seq13135__$2 = cljs.core.next(seq13135__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13136,G__13137,seq13135__$2);
});

