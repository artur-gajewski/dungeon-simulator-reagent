// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__17249_17252 = el;
var G__17250_17253 = type;
var G__17251_17254 = ((function (G__17249_17252,G__17250_17253,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__17249_17252,G__17250_17253,out))
;
goog.events.listen(G__17249_17252,G__17250_17253,G__17251_17254);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__14458__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto__,navigation){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto__,navigation){
return (function (state_17297){
var state_val_17298 = (state_17297[(1)]);
if((state_val_17298 === (1))){
var state_17297__$1 = state_17297;
var statearr_17299_17313 = state_17297__$1;
(statearr_17299_17313[(2)] = null);

(statearr_17299_17313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17298 === (2))){
var state_17297__$1 = state_17297;
var statearr_17300_17314 = state_17297__$1;
(statearr_17300_17314[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_17298 === (3))){
var inst_17295 = (state_17297[(2)]);
var state_17297__$1 = state_17297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17297__$1,inst_17295);
} else {
if((state_val_17298 === (4))){
var state_17297__$1 = state_17297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17297__$1,(7),navigation);
} else {
if((state_val_17298 === (5))){
var state_17297__$1 = state_17297;
var statearr_17302_17315 = state_17297__$1;
(statearr_17302_17315[(2)] = null);

(statearr_17302_17315[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17298 === (6))){
var inst_17293 = (state_17297[(2)]);
var state_17297__$1 = state_17297;
var statearr_17303_17316 = state_17297__$1;
(statearr_17303_17316[(2)] = inst_17293);

(statearr_17303_17316[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17298 === (7))){
var inst_17287 = (state_17297[(2)]);
var inst_17288 = inst_17287.token;
var inst_17289 = (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(inst_17288) : nav_handler.call(null,inst_17288));
var state_17297__$1 = (function (){var statearr_17304 = state_17297;
(statearr_17304[(7)] = inst_17289);

return statearr_17304;
})();
var statearr_17305_17317 = state_17297__$1;
(statearr_17305_17317[(2)] = null);

(statearr_17305_17317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__14458__auto__,navigation))
;
return ((function (switch__14334__auto__,c__14458__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____0 = (function (){
var statearr_17309 = [null,null,null,null,null,null,null,null];
(statearr_17309[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__);

(statearr_17309[(1)] = (1));

return statearr_17309;
});
var accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____1 = (function (state_17297){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_17297);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e17310){if((e17310 instanceof Object)){
var ex__14338__auto__ = e17310;
var statearr_17311_17318 = state_17297;
(statearr_17311_17318[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17297);

return cljs.core.cst$kw$recur;
} else {
throw e17310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__17319 = state_17297;
state_17297 = G__17319;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__ = function(state_17297){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____1.call(this,state_17297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__14335__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto__,navigation))
})();
var state__14460__auto__ = (function (){var statearr_17312 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_17312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto__);

return statearr_17312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto__,navigation))
);

return c__14458__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4655__auto__ = e.href;
if(cljs.core.truth_(temp__4655__auto__)){
var href = temp__4655__auto__;
return href;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__17320 = parent;
e = G__17320;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6409__auto__ = title;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = document.title;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
var G__17324 = document;
var G__17325 = "click";
var G__17326 = ((function (G__17324,G__17325){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6409__auto__ = meta_key;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = alt_key;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not(any_key);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6397__auto____$1){
var and__6397__auto____$2 = (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
if(cljs.core.truth_(and__6397__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__17324,G__17325))
;
return goog.events.listen(G__17324,G__17325,G__17326);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__17327){
var map__17330 = p__17327;
var map__17330__$1 = ((((!((map__17330 == null)))?((((map__17330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17330):map__17330);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17330__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17330__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17332_SHARP_){
return cljs.core.name(p1__17332_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__17333_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__17333_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args17334 = [];
var len__7484__auto___17337 = arguments.length;
var i__7485__auto___17338 = (0);
while(true){
if((i__7485__auto___17338 < len__7484__auto___17337)){
args17334.push((arguments[i__7485__auto___17338]));

var G__17339 = (i__7485__auto___17338 + (1));
i__7485__auto___17338 = G__17339;
continue;
} else {
}
break;
}

var G__17336 = args17334.length;
switch (G__17336) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17334.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__17342 = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__17342) : accountant.core.nav_handler.call(null,G__17342));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});
