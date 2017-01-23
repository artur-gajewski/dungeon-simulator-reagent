// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async14506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14506 = (function (fn_handler,f,meta14507){
this.fn_handler = fn_handler;
this.f = f;
this.meta14507 = meta14507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14508,meta14507__$1){
var self__ = this;
var _14508__$1 = this;
return (new cljs.core.async.t_cljs$core$async14506(self__.fn_handler,self__.f,meta14507__$1));
});

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14508){
var self__ = this;
var _14508__$1 = this;
return self__.meta14507;
});

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta14507], null);
});

cljs.core.async.t_cljs$core$async14506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14506";

cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14506");
});

cljs.core.async.__GT_t_cljs$core$async14506 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async14506(fn_handler__$1,f__$1,meta14507){
return (new cljs.core.async.t_cljs$core$async14506(fn_handler__$1,f__$1,meta14507));
});

}

return (new cljs.core.async.t_cljs$core$async14506(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14511 = [];
var len__7484__auto___14514 = arguments.length;
var i__7485__auto___14515 = (0);
while(true){
if((i__7485__auto___14515 < len__7484__auto___14514)){
args14511.push((arguments[i__7485__auto___14515]));

var G__14516 = (i__7485__auto___14515 + (1));
i__7485__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var G__14513 = args14511.length;
switch (G__14513) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14511.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14518 = [];
var len__7484__auto___14521 = arguments.length;
var i__7485__auto___14522 = (0);
while(true){
if((i__7485__auto___14522 < len__7484__auto___14521)){
args14518.push((arguments[i__7485__auto___14522]));

var G__14523 = (i__7485__auto___14522 + (1));
i__7485__auto___14522 = G__14523;
continue;
} else {
}
break;
}

var G__14520 = args14518.length;
switch (G__14520) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14518.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_14525 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14525) : fn1.call(null,val_14525));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14525,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14525) : fn1.call(null,val_14525));
});})(val_14525,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14526 = [];
var len__7484__auto___14529 = arguments.length;
var i__7485__auto___14530 = (0);
while(true){
if((i__7485__auto___14530 < len__7484__auto___14529)){
args14526.push((arguments[i__7485__auto___14530]));

var G__14531 = (i__7485__auto___14530 + (1));
i__7485__auto___14530 = G__14531;
continue;
} else {
}
break;
}

var G__14528 = args14526.length;
switch (G__14528) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14526.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7324__auto___14533 = n;
var x_14534 = (0);
while(true){
if((x_14534 < n__7324__auto___14533)){
(a[x_14534] = (0));

var G__14535 = (x_14534 + (1));
x_14534 = G__14535;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14536 = (i + (1));
i = G__14536;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14540 = (function (alt_flag,flag,meta14541){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14541 = meta14541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14542,meta14541__$1){
var self__ = this;
var _14542__$1 = this;
return (new cljs.core.async.t_cljs$core$async14540(self__.alt_flag,self__.flag,meta14541__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14542){
var self__ = this;
var _14542__$1 = this;
return self__.meta14541;
});})(flag))
;

cljs.core.async.t_cljs$core$async14540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14540.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14541], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14540";

cljs.core.async.t_cljs$core$async14540.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14540");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14540 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14540(alt_flag__$1,flag__$1,meta14541){
return (new cljs.core.async.t_cljs$core$async14540(alt_flag__$1,flag__$1,meta14541));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14540(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14546 = (function (alt_handler,flag,cb,meta14547){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14547 = meta14547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14548,meta14547__$1){
var self__ = this;
var _14548__$1 = this;
return (new cljs.core.async.t_cljs$core$async14546(self__.alt_handler,self__.flag,self__.cb,meta14547__$1));
});

cljs.core.async.t_cljs$core$async14546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14548){
var self__ = this;
var _14548__$1 = this;
return self__.meta14547;
});

cljs.core.async.t_cljs$core$async14546.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14547], null);
});

cljs.core.async.t_cljs$core$async14546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14546";

cljs.core.async.t_cljs$core$async14546.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14546");
});

cljs.core.async.__GT_t_cljs$core$async14546 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14546(alt_handler__$1,flag__$1,cb__$1,meta14547){
return (new cljs.core.async.t_cljs$core$async14546(alt_handler__$1,flag__$1,cb__$1,meta14547));
});

}

return (new cljs.core.async.t_cljs$core$async14546(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14549_SHARP_){
var G__14553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14549_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14553) : fret.call(null,G__14553));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14550_SHARP_){
var G__14554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14550_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14554) : fret.call(null,G__14554));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14555 = (i + (1));
i = G__14555;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6409__auto__ = ret;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14561 = arguments.length;
var i__7485__auto___14562 = (0);
while(true){
if((i__7485__auto___14562 < len__7484__auto___14561)){
args__7491__auto__.push((arguments[i__7485__auto___14562]));

var G__14563 = (i__7485__auto___14562 + (1));
i__7485__auto___14562 = G__14563;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14558){
var map__14559 = p__14558;
var map__14559__$1 = ((((!((map__14559 == null)))?((((map__14559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14559):map__14559);
var opts = map__14559__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14556){
var G__14557 = cljs.core.first(seq14556);
var seq14556__$1 = cljs.core.next(seq14556);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14557,seq14556__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14564 = [];
var len__7484__auto___14614 = arguments.length;
var i__7485__auto___14615 = (0);
while(true){
if((i__7485__auto___14615 < len__7484__auto___14614)){
args14564.push((arguments[i__7485__auto___14615]));

var G__14616 = (i__7485__auto___14615 + (1));
i__7485__auto___14615 = G__14616;
continue;
} else {
}
break;
}

var G__14566 = args14564.length;
switch (G__14566) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14564.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14458__auto___14618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___14618){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___14618){
return (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (7))){
var inst_14586 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14592_14619 = state_14590__$1;
(statearr_14592_14619[(2)] = inst_14586);

(statearr_14592_14619[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (1))){
var state_14590__$1 = state_14590;
var statearr_14593_14620 = state_14590__$1;
(statearr_14593_14620[(2)] = null);

(statearr_14593_14620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (4))){
var inst_14569 = (state_14590[(7)]);
var inst_14569__$1 = (state_14590[(2)]);
var inst_14570 = (inst_14569__$1 == null);
var state_14590__$1 = (function (){var statearr_14594 = state_14590;
(statearr_14594[(7)] = inst_14569__$1);

return statearr_14594;
})();
if(cljs.core.truth_(inst_14570)){
var statearr_14595_14621 = state_14590__$1;
(statearr_14595_14621[(1)] = (5));

} else {
var statearr_14596_14622 = state_14590__$1;
(statearr_14596_14622[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (13))){
var state_14590__$1 = state_14590;
var statearr_14597_14623 = state_14590__$1;
(statearr_14597_14623[(2)] = null);

(statearr_14597_14623[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (6))){
var inst_14569 = (state_14590[(7)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14590__$1,(11),to,inst_14569);
} else {
if((state_val_14591 === (3))){
var inst_14588 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14590__$1,inst_14588);
} else {
if((state_val_14591 === (12))){
var state_14590__$1 = state_14590;
var statearr_14598_14624 = state_14590__$1;
(statearr_14598_14624[(2)] = null);

(statearr_14598_14624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (2))){
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14590__$1,(4),from);
} else {
if((state_val_14591 === (11))){
var inst_14579 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14579)){
var statearr_14599_14625 = state_14590__$1;
(statearr_14599_14625[(1)] = (12));

} else {
var statearr_14600_14626 = state_14590__$1;
(statearr_14600_14626[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (9))){
var state_14590__$1 = state_14590;
var statearr_14601_14627 = state_14590__$1;
(statearr_14601_14627[(2)] = null);

(statearr_14601_14627[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (5))){
var state_14590__$1 = state_14590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14602_14628 = state_14590__$1;
(statearr_14602_14628[(1)] = (8));

} else {
var statearr_14603_14629 = state_14590__$1;
(statearr_14603_14629[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (14))){
var inst_14584 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14604_14630 = state_14590__$1;
(statearr_14604_14630[(2)] = inst_14584);

(statearr_14604_14630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (10))){
var inst_14576 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14605_14631 = state_14590__$1;
(statearr_14605_14631[(2)] = inst_14576);

(statearr_14605_14631[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14591 === (8))){
var inst_14573 = cljs.core.async.close_BANG_(to);
var state_14590__$1 = state_14590;
var statearr_14606_14632 = state_14590__$1;
(statearr_14606_14632[(2)] = inst_14573);

(statearr_14606_14632[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__14458__auto___14618))
;
return ((function (switch__14334__auto__,c__14458__auto___14618){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_14610 = [null,null,null,null,null,null,null,null];
(statearr_14610[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_14610[(1)] = (1));

return statearr_14610;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_14590){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14590);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e14611){if((e14611 instanceof Object)){
var ex__14338__auto__ = e14611;
var statearr_14612_14633 = state_14590;
(statearr_14612_14633[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14590);

return cljs.core.cst$kw$recur;
} else {
throw e14611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__14634 = state_14590;
state_14590 = G__14634;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___14618))
})();
var state__14460__auto__ = (function (){var statearr_14613 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_14613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___14618);

return statearr_14613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___14618))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14822){
var vec__14823 = p__14822;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(1),null);
var job = vec__14823;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14458__auto___15009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results){
return (function (state_14830){
var state_val_14831 = (state_14830[(1)]);
if((state_val_14831 === (1))){
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14830__$1,(2),res,v);
} else {
if((state_val_14831 === (2))){
var inst_14827 = (state_14830[(2)]);
var inst_14828 = cljs.core.async.close_BANG_(res);
var state_14830__$1 = (function (){var statearr_14832 = state_14830;
(statearr_14832[(7)] = inst_14827);

return statearr_14832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14830__$1,inst_14828);
} else {
return null;
}
}
});})(c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results))
;
return ((function (switch__14334__auto__,c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_14836 = [null,null,null,null,null,null,null,null];
(statearr_14836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__);

(statearr_14836[(1)] = (1));

return statearr_14836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1 = (function (state_14830){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14830);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e14837){if((e14837 instanceof Object)){
var ex__14338__auto__ = e14837;
var statearr_14838_15010 = state_14830;
(statearr_14838_15010[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14830);

return cljs.core.cst$kw$recur;
} else {
throw e14837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15011 = state_14830;
state_14830 = G__15011;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = function(state_14830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1.call(this,state_14830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results))
})();
var state__14460__auto__ = (function (){var statearr_14839 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_14839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15009);

return statearr_14839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___15009,res,vec__14823,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14840){
var vec__14841 = p__14840;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(1),null);
var job = vec__14841;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7324__auto___15012 = n;
var __15013 = (0);
while(true){
if((__15013 < n__7324__auto___15012)){
var G__14844_15014 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14844_15014) {
case "compute":
var c__14458__auto___15016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15013,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (__15013,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function (state_14857){
var state_val_14858 = (state_14857[(1)]);
if((state_val_14858 === (1))){
var state_14857__$1 = state_14857;
var statearr_14859_15017 = state_14857__$1;
(statearr_14859_15017[(2)] = null);

(statearr_14859_15017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14858 === (2))){
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14857__$1,(4),jobs);
} else {
if((state_val_14858 === (3))){
var inst_14855 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14857__$1,inst_14855);
} else {
if((state_val_14858 === (4))){
var inst_14847 = (state_14857[(2)]);
var inst_14848 = process(inst_14847);
var state_14857__$1 = state_14857;
if(cljs.core.truth_(inst_14848)){
var statearr_14860_15018 = state_14857__$1;
(statearr_14860_15018[(1)] = (5));

} else {
var statearr_14861_15019 = state_14857__$1;
(statearr_14861_15019[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14858 === (5))){
var state_14857__$1 = state_14857;
var statearr_14862_15020 = state_14857__$1;
(statearr_14862_15020[(2)] = null);

(statearr_14862_15020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14858 === (6))){
var state_14857__$1 = state_14857;
var statearr_14863_15021 = state_14857__$1;
(statearr_14863_15021[(2)] = null);

(statearr_14863_15021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14858 === (7))){
var inst_14853 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
var statearr_14864_15022 = state_14857__$1;
(statearr_14864_15022[(2)] = inst_14853);

(statearr_14864_15022[(1)] = (3));


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
});})(__15013,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
;
return ((function (__15013,switch__14334__auto__,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_14868 = [null,null,null,null,null,null,null];
(statearr_14868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__);

(statearr_14868[(1)] = (1));

return statearr_14868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1 = (function (state_14857){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14857);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e14869){if((e14869 instanceof Object)){
var ex__14338__auto__ = e14869;
var statearr_14870_15023 = state_14857;
(statearr_14870_15023[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14857);

return cljs.core.cst$kw$recur;
} else {
throw e14869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15024 = state_14857;
state_14857 = G__15024;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = function(state_14857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1.call(this,state_14857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__;
})()
;})(__15013,switch__14334__auto__,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
})();
var state__14460__auto__ = (function (){var statearr_14871 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_14871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15016);

return statearr_14871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(__15013,c__14458__auto___15016,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
);


break;
case "async":
var c__14458__auto___15025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15013,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (__15013,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function (state_14884){
var state_val_14885 = (state_14884[(1)]);
if((state_val_14885 === (1))){
var state_14884__$1 = state_14884;
var statearr_14886_15026 = state_14884__$1;
(statearr_14886_15026[(2)] = null);

(statearr_14886_15026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14885 === (2))){
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14884__$1,(4),jobs);
} else {
if((state_val_14885 === (3))){
var inst_14882 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14884__$1,inst_14882);
} else {
if((state_val_14885 === (4))){
var inst_14874 = (state_14884[(2)]);
var inst_14875 = async(inst_14874);
var state_14884__$1 = state_14884;
if(cljs.core.truth_(inst_14875)){
var statearr_14887_15027 = state_14884__$1;
(statearr_14887_15027[(1)] = (5));

} else {
var statearr_14888_15028 = state_14884__$1;
(statearr_14888_15028[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14885 === (5))){
var state_14884__$1 = state_14884;
var statearr_14889_15029 = state_14884__$1;
(statearr_14889_15029[(2)] = null);

(statearr_14889_15029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14885 === (6))){
var state_14884__$1 = state_14884;
var statearr_14890_15030 = state_14884__$1;
(statearr_14890_15030[(2)] = null);

(statearr_14890_15030[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14885 === (7))){
var inst_14880 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14891_15031 = state_14884__$1;
(statearr_14891_15031[(2)] = inst_14880);

(statearr_14891_15031[(1)] = (3));


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
});})(__15013,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
;
return ((function (__15013,switch__14334__auto__,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_14895 = [null,null,null,null,null,null,null];
(statearr_14895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__);

(statearr_14895[(1)] = (1));

return statearr_14895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1 = (function (state_14884){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14884);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e14896){if((e14896 instanceof Object)){
var ex__14338__auto__ = e14896;
var statearr_14897_15032 = state_14884;
(statearr_14897_15032[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14884);

return cljs.core.cst$kw$recur;
} else {
throw e14896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15033 = state_14884;
state_14884 = G__15033;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = function(state_14884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1.call(this,state_14884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__;
})()
;})(__15013,switch__14334__auto__,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
})();
var state__14460__auto__ = (function (){var statearr_14898 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_14898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15025);

return statearr_14898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(__15013,c__14458__auto___15025,G__14844_15014,n__7324__auto___15012,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15034 = (__15013 + (1));
__15013 = G__15034;
continue;
} else {
}
break;
}

var c__14458__auto___15035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___15035,jobs,results,process,async){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___15035,jobs,results,process,async){
return (function (state_14920){
var state_val_14921 = (state_14920[(1)]);
if((state_val_14921 === (1))){
var state_14920__$1 = state_14920;
var statearr_14922_15036 = state_14920__$1;
(statearr_14922_15036[(2)] = null);

(statearr_14922_15036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14921 === (2))){
var state_14920__$1 = state_14920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14920__$1,(4),from);
} else {
if((state_val_14921 === (3))){
var inst_14918 = (state_14920[(2)]);
var state_14920__$1 = state_14920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14920__$1,inst_14918);
} else {
if((state_val_14921 === (4))){
var inst_14901 = (state_14920[(7)]);
var inst_14901__$1 = (state_14920[(2)]);
var inst_14902 = (inst_14901__$1 == null);
var state_14920__$1 = (function (){var statearr_14923 = state_14920;
(statearr_14923[(7)] = inst_14901__$1);

return statearr_14923;
})();
if(cljs.core.truth_(inst_14902)){
var statearr_14924_15037 = state_14920__$1;
(statearr_14924_15037[(1)] = (5));

} else {
var statearr_14925_15038 = state_14920__$1;
(statearr_14925_15038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14921 === (5))){
var inst_14904 = cljs.core.async.close_BANG_(jobs);
var state_14920__$1 = state_14920;
var statearr_14926_15039 = state_14920__$1;
(statearr_14926_15039[(2)] = inst_14904);

(statearr_14926_15039[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14921 === (6))){
var inst_14906 = (state_14920[(8)]);
var inst_14901 = (state_14920[(7)]);
var inst_14906__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14908 = [inst_14901,inst_14906__$1];
var inst_14909 = (new cljs.core.PersistentVector(null,2,(5),inst_14907,inst_14908,null));
var state_14920__$1 = (function (){var statearr_14927 = state_14920;
(statearr_14927[(8)] = inst_14906__$1);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14920__$1,(8),jobs,inst_14909);
} else {
if((state_val_14921 === (7))){
var inst_14916 = (state_14920[(2)]);
var state_14920__$1 = state_14920;
var statearr_14928_15040 = state_14920__$1;
(statearr_14928_15040[(2)] = inst_14916);

(statearr_14928_15040[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14921 === (8))){
var inst_14906 = (state_14920[(8)]);
var inst_14911 = (state_14920[(2)]);
var state_14920__$1 = (function (){var statearr_14929 = state_14920;
(statearr_14929[(9)] = inst_14911);

return statearr_14929;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14920__$1,(9),results,inst_14906);
} else {
if((state_val_14921 === (9))){
var inst_14913 = (state_14920[(2)]);
var state_14920__$1 = (function (){var statearr_14930 = state_14920;
(statearr_14930[(10)] = inst_14913);

return statearr_14930;
})();
var statearr_14931_15041 = state_14920__$1;
(statearr_14931_15041[(2)] = null);

(statearr_14931_15041[(1)] = (2));


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
}
}
});})(c__14458__auto___15035,jobs,results,process,async))
;
return ((function (switch__14334__auto__,c__14458__auto___15035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_14935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__);

(statearr_14935[(1)] = (1));

return statearr_14935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1 = (function (state_14920){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14920);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e14936){if((e14936 instanceof Object)){
var ex__14338__auto__ = e14936;
var statearr_14937_15042 = state_14920;
(statearr_14937_15042[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14920);

return cljs.core.cst$kw$recur;
} else {
throw e14936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15043 = state_14920;
state_14920 = G__15043;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = function(state_14920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1.call(this,state_14920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___15035,jobs,results,process,async))
})();
var state__14460__auto__ = (function (){var statearr_14938 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_14938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15035);

return statearr_14938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___15035,jobs,results,process,async))
);


var c__14458__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto__,jobs,results,process,async){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto__,jobs,results,process,async){
return (function (state_14976){
var state_val_14977 = (state_14976[(1)]);
if((state_val_14977 === (7))){
var inst_14972 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14978_15044 = state_14976__$1;
(statearr_14978_15044[(2)] = inst_14972);

(statearr_14978_15044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (20))){
var state_14976__$1 = state_14976;
var statearr_14979_15045 = state_14976__$1;
(statearr_14979_15045[(2)] = null);

(statearr_14979_15045[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (1))){
var state_14976__$1 = state_14976;
var statearr_14980_15046 = state_14976__$1;
(statearr_14980_15046[(2)] = null);

(statearr_14980_15046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (4))){
var inst_14941 = (state_14976[(7)]);
var inst_14941__$1 = (state_14976[(2)]);
var inst_14942 = (inst_14941__$1 == null);
var state_14976__$1 = (function (){var statearr_14981 = state_14976;
(statearr_14981[(7)] = inst_14941__$1);

return statearr_14981;
})();
if(cljs.core.truth_(inst_14942)){
var statearr_14982_15047 = state_14976__$1;
(statearr_14982_15047[(1)] = (5));

} else {
var statearr_14983_15048 = state_14976__$1;
(statearr_14983_15048[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (15))){
var inst_14954 = (state_14976[(8)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14976__$1,(18),to,inst_14954);
} else {
if((state_val_14977 === (21))){
var inst_14967 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14984_15049 = state_14976__$1;
(statearr_14984_15049[(2)] = inst_14967);

(statearr_14984_15049[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (13))){
var inst_14969 = (state_14976[(2)]);
var state_14976__$1 = (function (){var statearr_14985 = state_14976;
(statearr_14985[(9)] = inst_14969);

return statearr_14985;
})();
var statearr_14986_15050 = state_14976__$1;
(statearr_14986_15050[(2)] = null);

(statearr_14986_15050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (6))){
var inst_14941 = (state_14976[(7)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14976__$1,(11),inst_14941);
} else {
if((state_val_14977 === (17))){
var inst_14962 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
if(cljs.core.truth_(inst_14962)){
var statearr_14987_15051 = state_14976__$1;
(statearr_14987_15051[(1)] = (19));

} else {
var statearr_14988_15052 = state_14976__$1;
(statearr_14988_15052[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (3))){
var inst_14974 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14976__$1,inst_14974);
} else {
if((state_val_14977 === (12))){
var inst_14951 = (state_14976[(10)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14976__$1,(14),inst_14951);
} else {
if((state_val_14977 === (2))){
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14976__$1,(4),results);
} else {
if((state_val_14977 === (19))){
var state_14976__$1 = state_14976;
var statearr_14989_15053 = state_14976__$1;
(statearr_14989_15053[(2)] = null);

(statearr_14989_15053[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (11))){
var inst_14951 = (state_14976[(2)]);
var state_14976__$1 = (function (){var statearr_14990 = state_14976;
(statearr_14990[(10)] = inst_14951);

return statearr_14990;
})();
var statearr_14991_15054 = state_14976__$1;
(statearr_14991_15054[(2)] = null);

(statearr_14991_15054[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (9))){
var state_14976__$1 = state_14976;
var statearr_14992_15055 = state_14976__$1;
(statearr_14992_15055[(2)] = null);

(statearr_14992_15055[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (5))){
var state_14976__$1 = state_14976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14993_15056 = state_14976__$1;
(statearr_14993_15056[(1)] = (8));

} else {
var statearr_14994_15057 = state_14976__$1;
(statearr_14994_15057[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (14))){
var inst_14954 = (state_14976[(8)]);
var inst_14956 = (state_14976[(11)]);
var inst_14954__$1 = (state_14976[(2)]);
var inst_14955 = (inst_14954__$1 == null);
var inst_14956__$1 = cljs.core.not(inst_14955);
var state_14976__$1 = (function (){var statearr_14995 = state_14976;
(statearr_14995[(8)] = inst_14954__$1);

(statearr_14995[(11)] = inst_14956__$1);

return statearr_14995;
})();
if(inst_14956__$1){
var statearr_14996_15058 = state_14976__$1;
(statearr_14996_15058[(1)] = (15));

} else {
var statearr_14997_15059 = state_14976__$1;
(statearr_14997_15059[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (16))){
var inst_14956 = (state_14976[(11)]);
var state_14976__$1 = state_14976;
var statearr_14998_15060 = state_14976__$1;
(statearr_14998_15060[(2)] = inst_14956);

(statearr_14998_15060[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (10))){
var inst_14948 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14999_15061 = state_14976__$1;
(statearr_14999_15061[(2)] = inst_14948);

(statearr_14999_15061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (18))){
var inst_14959 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_15000_15062 = state_14976__$1;
(statearr_15000_15062[(2)] = inst_14959);

(statearr_15000_15062[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (8))){
var inst_14945 = cljs.core.async.close_BANG_(to);
var state_14976__$1 = state_14976;
var statearr_15001_15063 = state_14976__$1;
(statearr_15001_15063[(2)] = inst_14945);

(statearr_15001_15063[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto__,jobs,results,process,async))
;
return ((function (switch__14334__auto__,c__14458__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_15005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__);

(statearr_15005[(1)] = (1));

return statearr_15005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1 = (function (state_14976){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_14976);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e15006){if((e15006 instanceof Object)){
var ex__14338__auto__ = e15006;
var statearr_15007_15064 = state_14976;
(statearr_15007_15064[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14976);

return cljs.core.cst$kw$recur;
} else {
throw e15006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15065 = state_14976;
state_14976 = G__15065;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__ = function(state_14976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1.call(this,state_14976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto__,jobs,results,process,async))
})();
var state__14460__auto__ = (function (){var statearr_15008 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_15008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto__);

return statearr_15008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto__,jobs,results,process,async))
);

return c__14458__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15066 = [];
var len__7484__auto___15069 = arguments.length;
var i__7485__auto___15070 = (0);
while(true){
if((i__7485__auto___15070 < len__7484__auto___15069)){
args15066.push((arguments[i__7485__auto___15070]));

var G__15071 = (i__7485__auto___15070 + (1));
i__7485__auto___15070 = G__15071;
continue;
} else {
}
break;
}

var G__15068 = args15066.length;
switch (G__15068) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15066.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15073 = [];
var len__7484__auto___15076 = arguments.length;
var i__7485__auto___15077 = (0);
while(true){
if((i__7485__auto___15077 < len__7484__auto___15076)){
args15073.push((arguments[i__7485__auto___15077]));

var G__15078 = (i__7485__auto___15077 + (1));
i__7485__auto___15077 = G__15078;
continue;
} else {
}
break;
}

var G__15075 = args15073.length;
switch (G__15075) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15073.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15080 = [];
var len__7484__auto___15133 = arguments.length;
var i__7485__auto___15134 = (0);
while(true){
if((i__7485__auto___15134 < len__7484__auto___15133)){
args15080.push((arguments[i__7485__auto___15134]));

var G__15135 = (i__7485__auto___15134 + (1));
i__7485__auto___15134 = G__15135;
continue;
} else {
}
break;
}

var G__15082 = args15080.length;
switch (G__15082) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15080.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14458__auto___15137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___15137,tc,fc){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___15137,tc,fc){
return (function (state_15108){
var state_val_15109 = (state_15108[(1)]);
if((state_val_15109 === (7))){
var inst_15104 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15110_15138 = state_15108__$1;
(statearr_15110_15138[(2)] = inst_15104);

(statearr_15110_15138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (1))){
var state_15108__$1 = state_15108;
var statearr_15111_15139 = state_15108__$1;
(statearr_15111_15139[(2)] = null);

(statearr_15111_15139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (4))){
var inst_15085 = (state_15108[(7)]);
var inst_15085__$1 = (state_15108[(2)]);
var inst_15086 = (inst_15085__$1 == null);
var state_15108__$1 = (function (){var statearr_15112 = state_15108;
(statearr_15112[(7)] = inst_15085__$1);

return statearr_15112;
})();
if(cljs.core.truth_(inst_15086)){
var statearr_15113_15140 = state_15108__$1;
(statearr_15113_15140[(1)] = (5));

} else {
var statearr_15114_15141 = state_15108__$1;
(statearr_15114_15141[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (13))){
var state_15108__$1 = state_15108;
var statearr_15115_15142 = state_15108__$1;
(statearr_15115_15142[(2)] = null);

(statearr_15115_15142[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (6))){
var inst_15085 = (state_15108[(7)]);
var inst_15091 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15085) : p.call(null,inst_15085));
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15091)){
var statearr_15116_15143 = state_15108__$1;
(statearr_15116_15143[(1)] = (9));

} else {
var statearr_15117_15144 = state_15108__$1;
(statearr_15117_15144[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (3))){
var inst_15106 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15108__$1,inst_15106);
} else {
if((state_val_15109 === (12))){
var state_15108__$1 = state_15108;
var statearr_15118_15145 = state_15108__$1;
(statearr_15118_15145[(2)] = null);

(statearr_15118_15145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (2))){
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15108__$1,(4),ch);
} else {
if((state_val_15109 === (11))){
var inst_15085 = (state_15108[(7)]);
var inst_15095 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15108__$1,(8),inst_15095,inst_15085);
} else {
if((state_val_15109 === (9))){
var state_15108__$1 = state_15108;
var statearr_15119_15146 = state_15108__$1;
(statearr_15119_15146[(2)] = tc);

(statearr_15119_15146[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (5))){
var inst_15088 = cljs.core.async.close_BANG_(tc);
var inst_15089 = cljs.core.async.close_BANG_(fc);
var state_15108__$1 = (function (){var statearr_15120 = state_15108;
(statearr_15120[(8)] = inst_15088);

return statearr_15120;
})();
var statearr_15121_15147 = state_15108__$1;
(statearr_15121_15147[(2)] = inst_15089);

(statearr_15121_15147[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (14))){
var inst_15102 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15122_15148 = state_15108__$1;
(statearr_15122_15148[(2)] = inst_15102);

(statearr_15122_15148[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (10))){
var state_15108__$1 = state_15108;
var statearr_15123_15149 = state_15108__$1;
(statearr_15123_15149[(2)] = fc);

(statearr_15123_15149[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15109 === (8))){
var inst_15097 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15097)){
var statearr_15124_15150 = state_15108__$1;
(statearr_15124_15150[(1)] = (12));

} else {
var statearr_15125_15151 = state_15108__$1;
(statearr_15125_15151[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__14458__auto___15137,tc,fc))
;
return ((function (switch__14334__auto__,c__14458__auto___15137,tc,fc){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_15129 = [null,null,null,null,null,null,null,null,null];
(statearr_15129[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_15129[(1)] = (1));

return statearr_15129;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_15108){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_15108);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e15130){if((e15130 instanceof Object)){
var ex__14338__auto__ = e15130;
var statearr_15131_15152 = state_15108;
(statearr_15131_15152[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15108);

return cljs.core.cst$kw$recur;
} else {
throw e15130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15153 = state_15108;
state_15108 = G__15153;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_15108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_15108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___15137,tc,fc))
})();
var state__14460__auto__ = (function (){var statearr_15132 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_15132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15137);

return statearr_15132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___15137,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14458__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto__){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto__){
return (function (state_15200){
var state_val_15201 = (state_15200[(1)]);
if((state_val_15201 === (1))){
var inst_15186 = init;
var state_15200__$1 = (function (){var statearr_15202 = state_15200;
(statearr_15202[(7)] = inst_15186);

return statearr_15202;
})();
var statearr_15203_15218 = state_15200__$1;
(statearr_15203_15218[(2)] = null);

(statearr_15203_15218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15201 === (2))){
var state_15200__$1 = state_15200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15200__$1,(4),ch);
} else {
if((state_val_15201 === (3))){
var inst_15198 = (state_15200[(2)]);
var state_15200__$1 = state_15200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15200__$1,inst_15198);
} else {
if((state_val_15201 === (4))){
var inst_15189 = (state_15200[(8)]);
var inst_15189__$1 = (state_15200[(2)]);
var inst_15190 = (inst_15189__$1 == null);
var state_15200__$1 = (function (){var statearr_15204 = state_15200;
(statearr_15204[(8)] = inst_15189__$1);

return statearr_15204;
})();
if(cljs.core.truth_(inst_15190)){
var statearr_15205_15219 = state_15200__$1;
(statearr_15205_15219[(1)] = (5));

} else {
var statearr_15206_15220 = state_15200__$1;
(statearr_15206_15220[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15201 === (5))){
var inst_15186 = (state_15200[(7)]);
var state_15200__$1 = state_15200;
var statearr_15207_15221 = state_15200__$1;
(statearr_15207_15221[(2)] = inst_15186);

(statearr_15207_15221[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15201 === (6))){
var inst_15189 = (state_15200[(8)]);
var inst_15186 = (state_15200[(7)]);
var inst_15193 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15186,inst_15189) : f.call(null,inst_15186,inst_15189));
var inst_15186__$1 = inst_15193;
var state_15200__$1 = (function (){var statearr_15208 = state_15200;
(statearr_15208[(7)] = inst_15186__$1);

return statearr_15208;
})();
var statearr_15209_15222 = state_15200__$1;
(statearr_15209_15222[(2)] = null);

(statearr_15209_15222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15201 === (7))){
var inst_15196 = (state_15200[(2)]);
var state_15200__$1 = state_15200;
var statearr_15210_15223 = state_15200__$1;
(statearr_15210_15223[(2)] = inst_15196);

(statearr_15210_15223[(1)] = (3));


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
});})(c__14458__auto__))
;
return ((function (switch__14334__auto__,c__14458__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14335__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null,null,null];
(statearr_15214[(0)] = cljs$core$async$reduce_$_state_machine__14335__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var cljs$core$async$reduce_$_state_machine__14335__auto____1 = (function (state_15200){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_15200);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object)){
var ex__14338__auto__ = e15215;
var statearr_15216_15224 = state_15200;
(statearr_15216_15224[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15200);

return cljs.core.cst$kw$recur;
} else {
throw e15215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15225 = state_15200;
state_15200 = G__15225;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14335__auto__ = function(state_15200){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14335__auto____1.call(this,state_15200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14335__auto____0;
cljs$core$async$reduce_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14335__auto____1;
return cljs$core$async$reduce_$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto__))
})();
var state__14460__auto__ = (function (){var statearr_15217 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto__);

return statearr_15217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto__))
);

return c__14458__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15226 = [];
var len__7484__auto___15278 = arguments.length;
var i__7485__auto___15279 = (0);
while(true){
if((i__7485__auto___15279 < len__7484__auto___15278)){
args15226.push((arguments[i__7485__auto___15279]));

var G__15280 = (i__7485__auto___15279 + (1));
i__7485__auto___15279 = G__15280;
continue;
} else {
}
break;
}

var G__15228 = args15226.length;
switch (G__15228) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15226.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14458__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto__){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto__){
return (function (state_15253){
var state_val_15254 = (state_15253[(1)]);
if((state_val_15254 === (7))){
var inst_15235 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15255_15282 = state_15253__$1;
(statearr_15255_15282[(2)] = inst_15235);

(statearr_15255_15282[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (1))){
var inst_15229 = cljs.core.seq(coll);
var inst_15230 = inst_15229;
var state_15253__$1 = (function (){var statearr_15256 = state_15253;
(statearr_15256[(7)] = inst_15230);

return statearr_15256;
})();
var statearr_15257_15283 = state_15253__$1;
(statearr_15257_15283[(2)] = null);

(statearr_15257_15283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (4))){
var inst_15230 = (state_15253[(7)]);
var inst_15233 = cljs.core.first(inst_15230);
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15253__$1,(7),ch,inst_15233);
} else {
if((state_val_15254 === (13))){
var inst_15247 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15258_15284 = state_15253__$1;
(statearr_15258_15284[(2)] = inst_15247);

(statearr_15258_15284[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (6))){
var inst_15238 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
if(cljs.core.truth_(inst_15238)){
var statearr_15259_15285 = state_15253__$1;
(statearr_15259_15285[(1)] = (8));

} else {
var statearr_15260_15286 = state_15253__$1;
(statearr_15260_15286[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (3))){
var inst_15251 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15253__$1,inst_15251);
} else {
if((state_val_15254 === (12))){
var state_15253__$1 = state_15253;
var statearr_15261_15287 = state_15253__$1;
(statearr_15261_15287[(2)] = null);

(statearr_15261_15287[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (2))){
var inst_15230 = (state_15253[(7)]);
var state_15253__$1 = state_15253;
if(cljs.core.truth_(inst_15230)){
var statearr_15262_15288 = state_15253__$1;
(statearr_15262_15288[(1)] = (4));

} else {
var statearr_15263_15289 = state_15253__$1;
(statearr_15263_15289[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (11))){
var inst_15244 = cljs.core.async.close_BANG_(ch);
var state_15253__$1 = state_15253;
var statearr_15264_15290 = state_15253__$1;
(statearr_15264_15290[(2)] = inst_15244);

(statearr_15264_15290[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (9))){
var state_15253__$1 = state_15253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15265_15291 = state_15253__$1;
(statearr_15265_15291[(1)] = (11));

} else {
var statearr_15266_15292 = state_15253__$1;
(statearr_15266_15292[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (5))){
var inst_15230 = (state_15253[(7)]);
var state_15253__$1 = state_15253;
var statearr_15267_15293 = state_15253__$1;
(statearr_15267_15293[(2)] = inst_15230);

(statearr_15267_15293[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (10))){
var inst_15249 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15268_15294 = state_15253__$1;
(statearr_15268_15294[(2)] = inst_15249);

(statearr_15268_15294[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15254 === (8))){
var inst_15230 = (state_15253[(7)]);
var inst_15240 = cljs.core.next(inst_15230);
var inst_15230__$1 = inst_15240;
var state_15253__$1 = (function (){var statearr_15269 = state_15253;
(statearr_15269[(7)] = inst_15230__$1);

return statearr_15269;
})();
var statearr_15270_15295 = state_15253__$1;
(statearr_15270_15295[(2)] = null);

(statearr_15270_15295[(1)] = (2));


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
}
}
}
}
}
}
});})(c__14458__auto__))
;
return ((function (switch__14334__auto__,c__14458__auto__){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_15274 = [null,null,null,null,null,null,null,null];
(statearr_15274[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_15274[(1)] = (1));

return statearr_15274;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_15253){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_15253);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e15275){if((e15275 instanceof Object)){
var ex__14338__auto__ = e15275;
var statearr_15276_15296 = state_15253;
(statearr_15276_15296[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15253);

return cljs.core.cst$kw$recur;
} else {
throw e15275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15297 = state_15253;
state_15253 = G__15297;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_15253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_15253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto__))
})();
var state__14460__auto__ = (function (){var statearr_15277 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_15277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto__);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto__))
);

return c__14458__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto__.call(null,_));
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15526 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15526) : cljs.core.atom.call(null,G__15526));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15527 = (function (mult,ch,cs,meta15528){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15528 = meta15528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15529,meta15528__$1){
var self__ = this;
var _15529__$1 = this;
return (new cljs.core.async.t_cljs$core$async15527(self__.mult,self__.ch,self__.cs,meta15528__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15529){
var self__ = this;
var _15529__$1 = this;
return self__.meta15528;
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15530_15754 = self__.cs;
var G__15531_15755 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15530_15754,G__15531_15755) : cljs.core.reset_BANG_.call(null,G__15530_15754,G__15531_15755));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15528], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15527";

cljs.core.async.t_cljs$core$async15527.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15527");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15527 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15527(mult__$1,ch__$1,cs__$1,meta15528){
return (new cljs.core.async.t_cljs$core$async15527(mult__$1,ch__$1,cs__$1,meta15528));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15527(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14458__auto___15756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___15756,cs,m,dchan,dctr,done){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___15756,cs,m,dchan,dctr,done){
return (function (state_15666){
var state_val_15667 = (state_15666[(1)]);
if((state_val_15667 === (7))){
var inst_15662 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15668_15757 = state_15666__$1;
(statearr_15668_15757[(2)] = inst_15662);

(statearr_15668_15757[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (20))){
var inst_15565 = (state_15666[(7)]);
var inst_15577 = cljs.core.first(inst_15565);
var inst_15578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15577,(0),null);
var inst_15579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15577,(1),null);
var state_15666__$1 = (function (){var statearr_15669 = state_15666;
(statearr_15669[(8)] = inst_15578);

return statearr_15669;
})();
if(cljs.core.truth_(inst_15579)){
var statearr_15670_15758 = state_15666__$1;
(statearr_15670_15758[(1)] = (22));

} else {
var statearr_15671_15759 = state_15666__$1;
(statearr_15671_15759[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (27))){
var inst_15614 = (state_15666[(9)]);
var inst_15607 = (state_15666[(10)]);
var inst_15534 = (state_15666[(11)]);
var inst_15609 = (state_15666[(12)]);
var inst_15614__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15607,inst_15609);
var inst_15615 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15614__$1,inst_15534,done);
var state_15666__$1 = (function (){var statearr_15672 = state_15666;
(statearr_15672[(9)] = inst_15614__$1);

return statearr_15672;
})();
if(cljs.core.truth_(inst_15615)){
var statearr_15673_15760 = state_15666__$1;
(statearr_15673_15760[(1)] = (30));

} else {
var statearr_15674_15761 = state_15666__$1;
(statearr_15674_15761[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (1))){
var state_15666__$1 = state_15666;
var statearr_15675_15762 = state_15666__$1;
(statearr_15675_15762[(2)] = null);

(statearr_15675_15762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (24))){
var inst_15565 = (state_15666[(7)]);
var inst_15584 = (state_15666[(2)]);
var inst_15585 = cljs.core.next(inst_15565);
var inst_15543 = inst_15585;
var inst_15544 = null;
var inst_15545 = (0);
var inst_15546 = (0);
var state_15666__$1 = (function (){var statearr_15676 = state_15666;
(statearr_15676[(13)] = inst_15545);

(statearr_15676[(14)] = inst_15546);

(statearr_15676[(15)] = inst_15584);

(statearr_15676[(16)] = inst_15543);

(statearr_15676[(17)] = inst_15544);

return statearr_15676;
})();
var statearr_15677_15763 = state_15666__$1;
(statearr_15677_15763[(2)] = null);

(statearr_15677_15763[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (39))){
var state_15666__$1 = state_15666;
var statearr_15681_15764 = state_15666__$1;
(statearr_15681_15764[(2)] = null);

(statearr_15681_15764[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (4))){
var inst_15534 = (state_15666[(11)]);
var inst_15534__$1 = (state_15666[(2)]);
var inst_15535 = (inst_15534__$1 == null);
var state_15666__$1 = (function (){var statearr_15682 = state_15666;
(statearr_15682[(11)] = inst_15534__$1);

return statearr_15682;
})();
if(cljs.core.truth_(inst_15535)){
var statearr_15683_15765 = state_15666__$1;
(statearr_15683_15765[(1)] = (5));

} else {
var statearr_15684_15766 = state_15666__$1;
(statearr_15684_15766[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (15))){
var inst_15545 = (state_15666[(13)]);
var inst_15546 = (state_15666[(14)]);
var inst_15543 = (state_15666[(16)]);
var inst_15544 = (state_15666[(17)]);
var inst_15561 = (state_15666[(2)]);
var inst_15562 = (inst_15546 + (1));
var tmp15678 = inst_15545;
var tmp15679 = inst_15543;
var tmp15680 = inst_15544;
var inst_15543__$1 = tmp15679;
var inst_15544__$1 = tmp15680;
var inst_15545__$1 = tmp15678;
var inst_15546__$1 = inst_15562;
var state_15666__$1 = (function (){var statearr_15685 = state_15666;
(statearr_15685[(13)] = inst_15545__$1);

(statearr_15685[(14)] = inst_15546__$1);

(statearr_15685[(18)] = inst_15561);

(statearr_15685[(16)] = inst_15543__$1);

(statearr_15685[(17)] = inst_15544__$1);

return statearr_15685;
})();
var statearr_15686_15767 = state_15666__$1;
(statearr_15686_15767[(2)] = null);

(statearr_15686_15767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (21))){
var inst_15588 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15690_15768 = state_15666__$1;
(statearr_15690_15768[(2)] = inst_15588);

(statearr_15690_15768[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (31))){
var inst_15614 = (state_15666[(9)]);
var inst_15618 = done(null);
var inst_15619 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15614);
var state_15666__$1 = (function (){var statearr_15691 = state_15666;
(statearr_15691[(19)] = inst_15618);

return statearr_15691;
})();
var statearr_15692_15769 = state_15666__$1;
(statearr_15692_15769[(2)] = inst_15619);

(statearr_15692_15769[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (32))){
var inst_15607 = (state_15666[(10)]);
var inst_15606 = (state_15666[(20)]);
var inst_15609 = (state_15666[(12)]);
var inst_15608 = (state_15666[(21)]);
var inst_15621 = (state_15666[(2)]);
var inst_15622 = (inst_15609 + (1));
var tmp15687 = inst_15607;
var tmp15688 = inst_15606;
var tmp15689 = inst_15608;
var inst_15606__$1 = tmp15688;
var inst_15607__$1 = tmp15687;
var inst_15608__$1 = tmp15689;
var inst_15609__$1 = inst_15622;
var state_15666__$1 = (function (){var statearr_15693 = state_15666;
(statearr_15693[(22)] = inst_15621);

(statearr_15693[(10)] = inst_15607__$1);

(statearr_15693[(20)] = inst_15606__$1);

(statearr_15693[(12)] = inst_15609__$1);

(statearr_15693[(21)] = inst_15608__$1);

return statearr_15693;
})();
var statearr_15694_15770 = state_15666__$1;
(statearr_15694_15770[(2)] = null);

(statearr_15694_15770[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (40))){
var inst_15634 = (state_15666[(23)]);
var inst_15638 = done(null);
var inst_15639 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15634);
var state_15666__$1 = (function (){var statearr_15695 = state_15666;
(statearr_15695[(24)] = inst_15638);

return statearr_15695;
})();
var statearr_15696_15771 = state_15666__$1;
(statearr_15696_15771[(2)] = inst_15639);

(statearr_15696_15771[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (33))){
var inst_15625 = (state_15666[(25)]);
var inst_15627 = cljs.core.chunked_seq_QMARK_(inst_15625);
var state_15666__$1 = state_15666;
if(inst_15627){
var statearr_15697_15772 = state_15666__$1;
(statearr_15697_15772[(1)] = (36));

} else {
var statearr_15698_15773 = state_15666__$1;
(statearr_15698_15773[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (13))){
var inst_15555 = (state_15666[(26)]);
var inst_15558 = cljs.core.async.close_BANG_(inst_15555);
var state_15666__$1 = state_15666;
var statearr_15699_15774 = state_15666__$1;
(statearr_15699_15774[(2)] = inst_15558);

(statearr_15699_15774[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (22))){
var inst_15578 = (state_15666[(8)]);
var inst_15581 = cljs.core.async.close_BANG_(inst_15578);
var state_15666__$1 = state_15666;
var statearr_15700_15775 = state_15666__$1;
(statearr_15700_15775[(2)] = inst_15581);

(statearr_15700_15775[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (36))){
var inst_15625 = (state_15666[(25)]);
var inst_15629 = cljs.core.chunk_first(inst_15625);
var inst_15630 = cljs.core.chunk_rest(inst_15625);
var inst_15631 = cljs.core.count(inst_15629);
var inst_15606 = inst_15630;
var inst_15607 = inst_15629;
var inst_15608 = inst_15631;
var inst_15609 = (0);
var state_15666__$1 = (function (){var statearr_15701 = state_15666;
(statearr_15701[(10)] = inst_15607);

(statearr_15701[(20)] = inst_15606);

(statearr_15701[(12)] = inst_15609);

(statearr_15701[(21)] = inst_15608);

return statearr_15701;
})();
var statearr_15702_15776 = state_15666__$1;
(statearr_15702_15776[(2)] = null);

(statearr_15702_15776[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (41))){
var inst_15625 = (state_15666[(25)]);
var inst_15641 = (state_15666[(2)]);
var inst_15642 = cljs.core.next(inst_15625);
var inst_15606 = inst_15642;
var inst_15607 = null;
var inst_15608 = (0);
var inst_15609 = (0);
var state_15666__$1 = (function (){var statearr_15703 = state_15666;
(statearr_15703[(10)] = inst_15607);

(statearr_15703[(20)] = inst_15606);

(statearr_15703[(12)] = inst_15609);

(statearr_15703[(27)] = inst_15641);

(statearr_15703[(21)] = inst_15608);

return statearr_15703;
})();
var statearr_15704_15777 = state_15666__$1;
(statearr_15704_15777[(2)] = null);

(statearr_15704_15777[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (43))){
var state_15666__$1 = state_15666;
var statearr_15705_15778 = state_15666__$1;
(statearr_15705_15778[(2)] = null);

(statearr_15705_15778[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (29))){
var inst_15650 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15706_15779 = state_15666__$1;
(statearr_15706_15779[(2)] = inst_15650);

(statearr_15706_15779[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (44))){
var inst_15659 = (state_15666[(2)]);
var state_15666__$1 = (function (){var statearr_15707 = state_15666;
(statearr_15707[(28)] = inst_15659);

return statearr_15707;
})();
var statearr_15708_15780 = state_15666__$1;
(statearr_15708_15780[(2)] = null);

(statearr_15708_15780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (6))){
var inst_15598 = (state_15666[(29)]);
var inst_15597 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15598__$1 = cljs.core.keys(inst_15597);
var inst_15599 = cljs.core.count(inst_15598__$1);
var inst_15600 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15599) : cljs.core.reset_BANG_.call(null,dctr,inst_15599));
var inst_15605 = cljs.core.seq(inst_15598__$1);
var inst_15606 = inst_15605;
var inst_15607 = null;
var inst_15608 = (0);
var inst_15609 = (0);
var state_15666__$1 = (function (){var statearr_15709 = state_15666;
(statearr_15709[(30)] = inst_15600);

(statearr_15709[(29)] = inst_15598__$1);

(statearr_15709[(10)] = inst_15607);

(statearr_15709[(20)] = inst_15606);

(statearr_15709[(12)] = inst_15609);

(statearr_15709[(21)] = inst_15608);

return statearr_15709;
})();
var statearr_15710_15781 = state_15666__$1;
(statearr_15710_15781[(2)] = null);

(statearr_15710_15781[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (28))){
var inst_15625 = (state_15666[(25)]);
var inst_15606 = (state_15666[(20)]);
var inst_15625__$1 = cljs.core.seq(inst_15606);
var state_15666__$1 = (function (){var statearr_15711 = state_15666;
(statearr_15711[(25)] = inst_15625__$1);

return statearr_15711;
})();
if(inst_15625__$1){
var statearr_15712_15782 = state_15666__$1;
(statearr_15712_15782[(1)] = (33));

} else {
var statearr_15713_15783 = state_15666__$1;
(statearr_15713_15783[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (25))){
var inst_15609 = (state_15666[(12)]);
var inst_15608 = (state_15666[(21)]);
var inst_15611 = (inst_15609 < inst_15608);
var inst_15612 = inst_15611;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15612)){
var statearr_15714_15784 = state_15666__$1;
(statearr_15714_15784[(1)] = (27));

} else {
var statearr_15715_15785 = state_15666__$1;
(statearr_15715_15785[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (34))){
var state_15666__$1 = state_15666;
var statearr_15716_15786 = state_15666__$1;
(statearr_15716_15786[(2)] = null);

(statearr_15716_15786[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (17))){
var state_15666__$1 = state_15666;
var statearr_15717_15787 = state_15666__$1;
(statearr_15717_15787[(2)] = null);

(statearr_15717_15787[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (3))){
var inst_15664 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15666__$1,inst_15664);
} else {
if((state_val_15667 === (12))){
var inst_15593 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15718_15788 = state_15666__$1;
(statearr_15718_15788[(2)] = inst_15593);

(statearr_15718_15788[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (2))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(4),ch);
} else {
if((state_val_15667 === (23))){
var state_15666__$1 = state_15666;
var statearr_15719_15789 = state_15666__$1;
(statearr_15719_15789[(2)] = null);

(statearr_15719_15789[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (35))){
var inst_15648 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15720_15790 = state_15666__$1;
(statearr_15720_15790[(2)] = inst_15648);

(statearr_15720_15790[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (19))){
var inst_15565 = (state_15666[(7)]);
var inst_15569 = cljs.core.chunk_first(inst_15565);
var inst_15570 = cljs.core.chunk_rest(inst_15565);
var inst_15571 = cljs.core.count(inst_15569);
var inst_15543 = inst_15570;
var inst_15544 = inst_15569;
var inst_15545 = inst_15571;
var inst_15546 = (0);
var state_15666__$1 = (function (){var statearr_15721 = state_15666;
(statearr_15721[(13)] = inst_15545);

(statearr_15721[(14)] = inst_15546);

(statearr_15721[(16)] = inst_15543);

(statearr_15721[(17)] = inst_15544);

return statearr_15721;
})();
var statearr_15722_15791 = state_15666__$1;
(statearr_15722_15791[(2)] = null);

(statearr_15722_15791[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (11))){
var inst_15565 = (state_15666[(7)]);
var inst_15543 = (state_15666[(16)]);
var inst_15565__$1 = cljs.core.seq(inst_15543);
var state_15666__$1 = (function (){var statearr_15723 = state_15666;
(statearr_15723[(7)] = inst_15565__$1);

return statearr_15723;
})();
if(inst_15565__$1){
var statearr_15724_15792 = state_15666__$1;
(statearr_15724_15792[(1)] = (16));

} else {
var statearr_15725_15793 = state_15666__$1;
(statearr_15725_15793[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (9))){
var inst_15595 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15726_15794 = state_15666__$1;
(statearr_15726_15794[(2)] = inst_15595);

(statearr_15726_15794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (5))){
var inst_15541 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15542 = cljs.core.seq(inst_15541);
var inst_15543 = inst_15542;
var inst_15544 = null;
var inst_15545 = (0);
var inst_15546 = (0);
var state_15666__$1 = (function (){var statearr_15727 = state_15666;
(statearr_15727[(13)] = inst_15545);

(statearr_15727[(14)] = inst_15546);

(statearr_15727[(16)] = inst_15543);

(statearr_15727[(17)] = inst_15544);

return statearr_15727;
})();
var statearr_15728_15795 = state_15666__$1;
(statearr_15728_15795[(2)] = null);

(statearr_15728_15795[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (14))){
var state_15666__$1 = state_15666;
var statearr_15729_15796 = state_15666__$1;
(statearr_15729_15796[(2)] = null);

(statearr_15729_15796[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (45))){
var inst_15656 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15730_15797 = state_15666__$1;
(statearr_15730_15797[(2)] = inst_15656);

(statearr_15730_15797[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (26))){
var inst_15598 = (state_15666[(29)]);
var inst_15652 = (state_15666[(2)]);
var inst_15653 = cljs.core.seq(inst_15598);
var state_15666__$1 = (function (){var statearr_15731 = state_15666;
(statearr_15731[(31)] = inst_15652);

return statearr_15731;
})();
if(inst_15653){
var statearr_15732_15798 = state_15666__$1;
(statearr_15732_15798[(1)] = (42));

} else {
var statearr_15733_15799 = state_15666__$1;
(statearr_15733_15799[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (16))){
var inst_15565 = (state_15666[(7)]);
var inst_15567 = cljs.core.chunked_seq_QMARK_(inst_15565);
var state_15666__$1 = state_15666;
if(inst_15567){
var statearr_15734_15800 = state_15666__$1;
(statearr_15734_15800[(1)] = (19));

} else {
var statearr_15735_15801 = state_15666__$1;
(statearr_15735_15801[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (38))){
var inst_15645 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15736_15802 = state_15666__$1;
(statearr_15736_15802[(2)] = inst_15645);

(statearr_15736_15802[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (30))){
var state_15666__$1 = state_15666;
var statearr_15737_15803 = state_15666__$1;
(statearr_15737_15803[(2)] = null);

(statearr_15737_15803[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (10))){
var inst_15546 = (state_15666[(14)]);
var inst_15544 = (state_15666[(17)]);
var inst_15554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15544,inst_15546);
var inst_15555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15554,(0),null);
var inst_15556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15554,(1),null);
var state_15666__$1 = (function (){var statearr_15738 = state_15666;
(statearr_15738[(26)] = inst_15555);

return statearr_15738;
})();
if(cljs.core.truth_(inst_15556)){
var statearr_15739_15804 = state_15666__$1;
(statearr_15739_15804[(1)] = (13));

} else {
var statearr_15740_15805 = state_15666__$1;
(statearr_15740_15805[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (18))){
var inst_15591 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15741_15806 = state_15666__$1;
(statearr_15741_15806[(2)] = inst_15591);

(statearr_15741_15806[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (42))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(45),dchan);
} else {
if((state_val_15667 === (37))){
var inst_15625 = (state_15666[(25)]);
var inst_15534 = (state_15666[(11)]);
var inst_15634 = (state_15666[(23)]);
var inst_15634__$1 = cljs.core.first(inst_15625);
var inst_15635 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15634__$1,inst_15534,done);
var state_15666__$1 = (function (){var statearr_15742 = state_15666;
(statearr_15742[(23)] = inst_15634__$1);

return statearr_15742;
})();
if(cljs.core.truth_(inst_15635)){
var statearr_15743_15807 = state_15666__$1;
(statearr_15743_15807[(1)] = (39));

} else {
var statearr_15744_15808 = state_15666__$1;
(statearr_15744_15808[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15667 === (8))){
var inst_15545 = (state_15666[(13)]);
var inst_15546 = (state_15666[(14)]);
var inst_15548 = (inst_15546 < inst_15545);
var inst_15549 = inst_15548;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15549)){
var statearr_15745_15809 = state_15666__$1;
(statearr_15745_15809[(1)] = (10));

} else {
var statearr_15746_15810 = state_15666__$1;
(statearr_15746_15810[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___15756,cs,m,dchan,dctr,done))
;
return ((function (switch__14334__auto__,c__14458__auto___15756,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14335__auto__ = null;
var cljs$core$async$mult_$_state_machine__14335__auto____0 = (function (){
var statearr_15750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15750[(0)] = cljs$core$async$mult_$_state_machine__14335__auto__);

(statearr_15750[(1)] = (1));

return statearr_15750;
});
var cljs$core$async$mult_$_state_machine__14335__auto____1 = (function (state_15666){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_15666);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e15751){if((e15751 instanceof Object)){
var ex__14338__auto__ = e15751;
var statearr_15752_15811 = state_15666;
(statearr_15752_15811[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15666);

return cljs.core.cst$kw$recur;
} else {
throw e15751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__15812 = state_15666;
state_15666 = G__15812;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14335__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14335__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14335__auto____0;
cljs$core$async$mult_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14335__auto____1;
return cljs$core$async$mult_$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___15756,cs,m,dchan,dctr,done))
})();
var state__14460__auto__ = (function (){var statearr_15753 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_15753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___15756);

return statearr_15753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___15756,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15813 = [];
var len__7484__auto___15816 = arguments.length;
var i__7485__auto___15817 = (0);
while(true){
if((i__7485__auto___15817 < len__7484__auto___15816)){
args15813.push((arguments[i__7485__auto___15817]));

var G__15818 = (i__7485__auto___15817 + (1));
i__7485__auto___15817 = G__15818;
continue;
} else {
}
break;
}

var G__15815 = args15813.length;
switch (G__15815) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15813.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto__.call(null,m,state_map));
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto__.call(null,m,mode));
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15830 = arguments.length;
var i__7485__auto___15831 = (0);
while(true){
if((i__7485__auto___15831 < len__7484__auto___15830)){
args__7491__auto__.push((arguments[i__7485__auto___15831]));

var G__15832 = (i__7485__auto___15831 + (1));
i__7485__auto___15831 = G__15832;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15824){
var map__15825 = p__15824;
var map__15825__$1 = ((((!((map__15825 == null)))?((((map__15825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15825):map__15825);
var opts = map__15825__$1;
var statearr_15827_15833 = state;
(statearr_15827_15833[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15825,map__15825__$1,opts){
return (function (val){
var statearr_15828_15834 = state;
(statearr_15828_15834[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15825,map__15825__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15829_15835 = state;
(statearr_15829_15835[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15820){
var G__15821 = cljs.core.first(seq15820);
var seq15820__$1 = cljs.core.next(seq15820);
var G__15822 = cljs.core.first(seq15820__$1);
var seq15820__$2 = cljs.core.next(seq15820__$1);
var G__15823 = cljs.core.first(seq15820__$2);
var seq15820__$3 = cljs.core.next(seq15820__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15821,G__15822,G__15823,seq15820__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16005 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16005) : cljs.core.atom.call(null,G__16005));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16006 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16006) : cljs.core.atom.call(null,G__16006));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16007 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16008){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16008 = meta16008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16009,meta16008__$1){
var self__ = this;
var _16009__$1 = this;
return (new cljs.core.async.t_cljs$core$async16007(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16009){
var self__ = this;
var _16009__$1 = this;
return self__.meta16008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16010_16174 = self__.cs;
var G__16011_16175 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16010_16174,G__16011_16175) : cljs.core.reset_BANG_.call(null,G__16010_16174,G__16011_16175));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16008], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16007";

cljs.core.async.t_cljs$core$async16007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16008){
return (new cljs.core.async.t_cljs$core$async16007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16007(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14458__auto___16176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16111){
var state_val_16112 = (state_16111[(1)]);
if((state_val_16112 === (7))){
var inst_16027 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16113_16177 = state_16111__$1;
(statearr_16113_16177[(2)] = inst_16027);

(statearr_16113_16177[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (20))){
var inst_16039 = (state_16111[(7)]);
var state_16111__$1 = state_16111;
var statearr_16114_16178 = state_16111__$1;
(statearr_16114_16178[(2)] = inst_16039);

(statearr_16114_16178[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (27))){
var state_16111__$1 = state_16111;
var statearr_16115_16179 = state_16111__$1;
(statearr_16115_16179[(2)] = null);

(statearr_16115_16179[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (1))){
var inst_16015 = (state_16111[(8)]);
var inst_16015__$1 = calc_state();
var inst_16017 = (inst_16015__$1 == null);
var inst_16018 = cljs.core.not(inst_16017);
var state_16111__$1 = (function (){var statearr_16116 = state_16111;
(statearr_16116[(8)] = inst_16015__$1);

return statearr_16116;
})();
if(inst_16018){
var statearr_16117_16180 = state_16111__$1;
(statearr_16117_16180[(1)] = (2));

} else {
var statearr_16118_16181 = state_16111__$1;
(statearr_16118_16181[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (24))){
var inst_16062 = (state_16111[(9)]);
var inst_16071 = (state_16111[(10)]);
var inst_16085 = (state_16111[(11)]);
var inst_16085__$1 = (inst_16062.cljs$core$IFn$_invoke$arity$1 ? inst_16062.cljs$core$IFn$_invoke$arity$1(inst_16071) : inst_16062.call(null,inst_16071));
var state_16111__$1 = (function (){var statearr_16119 = state_16111;
(statearr_16119[(11)] = inst_16085__$1);

return statearr_16119;
})();
if(cljs.core.truth_(inst_16085__$1)){
var statearr_16120_16182 = state_16111__$1;
(statearr_16120_16182[(1)] = (29));

} else {
var statearr_16121_16183 = state_16111__$1;
(statearr_16121_16183[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (4))){
var inst_16030 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16030)){
var statearr_16122_16184 = state_16111__$1;
(statearr_16122_16184[(1)] = (8));

} else {
var statearr_16123_16185 = state_16111__$1;
(statearr_16123_16185[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (15))){
var inst_16056 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16056)){
var statearr_16124_16186 = state_16111__$1;
(statearr_16124_16186[(1)] = (19));

} else {
var statearr_16125_16187 = state_16111__$1;
(statearr_16125_16187[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (21))){
var inst_16061 = (state_16111[(12)]);
var inst_16061__$1 = (state_16111[(2)]);
var inst_16062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16061__$1,cljs.core.cst$kw$solos);
var inst_16063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16061__$1,cljs.core.cst$kw$mutes);
var inst_16064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16061__$1,cljs.core.cst$kw$reads);
var state_16111__$1 = (function (){var statearr_16126 = state_16111;
(statearr_16126[(9)] = inst_16062);

(statearr_16126[(12)] = inst_16061__$1);

(statearr_16126[(13)] = inst_16063);

return statearr_16126;
})();
return cljs.core.async.ioc_alts_BANG_(state_16111__$1,(22),inst_16064);
} else {
if((state_val_16112 === (31))){
var inst_16093 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16093)){
var statearr_16127_16188 = state_16111__$1;
(statearr_16127_16188[(1)] = (32));

} else {
var statearr_16128_16189 = state_16111__$1;
(statearr_16128_16189[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (32))){
var inst_16070 = (state_16111[(14)]);
var state_16111__$1 = state_16111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16111__$1,(35),out,inst_16070);
} else {
if((state_val_16112 === (33))){
var inst_16061 = (state_16111[(12)]);
var inst_16039 = inst_16061;
var state_16111__$1 = (function (){var statearr_16129 = state_16111;
(statearr_16129[(7)] = inst_16039);

return statearr_16129;
})();
var statearr_16130_16190 = state_16111__$1;
(statearr_16130_16190[(2)] = null);

(statearr_16130_16190[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (13))){
var inst_16039 = (state_16111[(7)]);
var inst_16046 = inst_16039.cljs$lang$protocol_mask$partition0$;
var inst_16047 = (inst_16046 & (64));
var inst_16048 = inst_16039.cljs$core$ISeq$;
var inst_16049 = (inst_16047) || (inst_16048);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16049)){
var statearr_16131_16191 = state_16111__$1;
(statearr_16131_16191[(1)] = (16));

} else {
var statearr_16132_16192 = state_16111__$1;
(statearr_16132_16192[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (22))){
var inst_16071 = (state_16111[(10)]);
var inst_16070 = (state_16111[(14)]);
var inst_16069 = (state_16111[(2)]);
var inst_16070__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16069,(0),null);
var inst_16071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16069,(1),null);
var inst_16072 = (inst_16070__$1 == null);
var inst_16073 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16071__$1,change);
var inst_16074 = (inst_16072) || (inst_16073);
var state_16111__$1 = (function (){var statearr_16133 = state_16111;
(statearr_16133[(10)] = inst_16071__$1);

(statearr_16133[(14)] = inst_16070__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16074)){
var statearr_16134_16193 = state_16111__$1;
(statearr_16134_16193[(1)] = (23));

} else {
var statearr_16135_16194 = state_16111__$1;
(statearr_16135_16194[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (36))){
var inst_16061 = (state_16111[(12)]);
var inst_16039 = inst_16061;
var state_16111__$1 = (function (){var statearr_16136 = state_16111;
(statearr_16136[(7)] = inst_16039);

return statearr_16136;
})();
var statearr_16137_16195 = state_16111__$1;
(statearr_16137_16195[(2)] = null);

(statearr_16137_16195[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (29))){
var inst_16085 = (state_16111[(11)]);
var state_16111__$1 = state_16111;
var statearr_16138_16196 = state_16111__$1;
(statearr_16138_16196[(2)] = inst_16085);

(statearr_16138_16196[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (6))){
var state_16111__$1 = state_16111;
var statearr_16139_16197 = state_16111__$1;
(statearr_16139_16197[(2)] = false);

(statearr_16139_16197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (28))){
var inst_16081 = (state_16111[(2)]);
var inst_16082 = calc_state();
var inst_16039 = inst_16082;
var state_16111__$1 = (function (){var statearr_16140 = state_16111;
(statearr_16140[(7)] = inst_16039);

(statearr_16140[(15)] = inst_16081);

return statearr_16140;
})();
var statearr_16141_16198 = state_16111__$1;
(statearr_16141_16198[(2)] = null);

(statearr_16141_16198[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (25))){
var inst_16107 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16142_16199 = state_16111__$1;
(statearr_16142_16199[(2)] = inst_16107);

(statearr_16142_16199[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (34))){
var inst_16105 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16143_16200 = state_16111__$1;
(statearr_16143_16200[(2)] = inst_16105);

(statearr_16143_16200[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (17))){
var state_16111__$1 = state_16111;
var statearr_16144_16201 = state_16111__$1;
(statearr_16144_16201[(2)] = false);

(statearr_16144_16201[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (3))){
var state_16111__$1 = state_16111;
var statearr_16145_16202 = state_16111__$1;
(statearr_16145_16202[(2)] = false);

(statearr_16145_16202[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (12))){
var inst_16109 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16111__$1,inst_16109);
} else {
if((state_val_16112 === (2))){
var inst_16015 = (state_16111[(8)]);
var inst_16020 = inst_16015.cljs$lang$protocol_mask$partition0$;
var inst_16021 = (inst_16020 & (64));
var inst_16022 = inst_16015.cljs$core$ISeq$;
var inst_16023 = (inst_16021) || (inst_16022);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16023)){
var statearr_16146_16203 = state_16111__$1;
(statearr_16146_16203[(1)] = (5));

} else {
var statearr_16147_16204 = state_16111__$1;
(statearr_16147_16204[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (23))){
var inst_16070 = (state_16111[(14)]);
var inst_16076 = (inst_16070 == null);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16076)){
var statearr_16148_16205 = state_16111__$1;
(statearr_16148_16205[(1)] = (26));

} else {
var statearr_16149_16206 = state_16111__$1;
(statearr_16149_16206[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (35))){
var inst_16096 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16096)){
var statearr_16150_16207 = state_16111__$1;
(statearr_16150_16207[(1)] = (36));

} else {
var statearr_16151_16208 = state_16111__$1;
(statearr_16151_16208[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (19))){
var inst_16039 = (state_16111[(7)]);
var inst_16058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16039);
var state_16111__$1 = state_16111;
var statearr_16152_16209 = state_16111__$1;
(statearr_16152_16209[(2)] = inst_16058);

(statearr_16152_16209[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (11))){
var inst_16039 = (state_16111[(7)]);
var inst_16043 = (inst_16039 == null);
var inst_16044 = cljs.core.not(inst_16043);
var state_16111__$1 = state_16111;
if(inst_16044){
var statearr_16153_16210 = state_16111__$1;
(statearr_16153_16210[(1)] = (13));

} else {
var statearr_16154_16211 = state_16111__$1;
(statearr_16154_16211[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (9))){
var inst_16015 = (state_16111[(8)]);
var state_16111__$1 = state_16111;
var statearr_16155_16212 = state_16111__$1;
(statearr_16155_16212[(2)] = inst_16015);

(statearr_16155_16212[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (5))){
var state_16111__$1 = state_16111;
var statearr_16156_16213 = state_16111__$1;
(statearr_16156_16213[(2)] = true);

(statearr_16156_16213[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (14))){
var state_16111__$1 = state_16111;
var statearr_16157_16214 = state_16111__$1;
(statearr_16157_16214[(2)] = false);

(statearr_16157_16214[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (26))){
var inst_16071 = (state_16111[(10)]);
var inst_16078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16071);
var state_16111__$1 = state_16111;
var statearr_16158_16215 = state_16111__$1;
(statearr_16158_16215[(2)] = inst_16078);

(statearr_16158_16215[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (16))){
var state_16111__$1 = state_16111;
var statearr_16159_16216 = state_16111__$1;
(statearr_16159_16216[(2)] = true);

(statearr_16159_16216[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (38))){
var inst_16101 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16160_16217 = state_16111__$1;
(statearr_16160_16217[(2)] = inst_16101);

(statearr_16160_16217[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (30))){
var inst_16062 = (state_16111[(9)]);
var inst_16071 = (state_16111[(10)]);
var inst_16063 = (state_16111[(13)]);
var inst_16088 = cljs.core.empty_QMARK_(inst_16062);
var inst_16089 = (inst_16063.cljs$core$IFn$_invoke$arity$1 ? inst_16063.cljs$core$IFn$_invoke$arity$1(inst_16071) : inst_16063.call(null,inst_16071));
var inst_16090 = cljs.core.not(inst_16089);
var inst_16091 = (inst_16088) && (inst_16090);
var state_16111__$1 = state_16111;
var statearr_16161_16218 = state_16111__$1;
(statearr_16161_16218[(2)] = inst_16091);

(statearr_16161_16218[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (10))){
var inst_16015 = (state_16111[(8)]);
var inst_16035 = (state_16111[(2)]);
var inst_16036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16035,cljs.core.cst$kw$solos);
var inst_16037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16035,cljs.core.cst$kw$mutes);
var inst_16038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16035,cljs.core.cst$kw$reads);
var inst_16039 = inst_16015;
var state_16111__$1 = (function (){var statearr_16162 = state_16111;
(statearr_16162[(7)] = inst_16039);

(statearr_16162[(16)] = inst_16038);

(statearr_16162[(17)] = inst_16036);

(statearr_16162[(18)] = inst_16037);

return statearr_16162;
})();
var statearr_16163_16219 = state_16111__$1;
(statearr_16163_16219[(2)] = null);

(statearr_16163_16219[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (18))){
var inst_16053 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16164_16220 = state_16111__$1;
(statearr_16164_16220[(2)] = inst_16053);

(statearr_16164_16220[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (37))){
var state_16111__$1 = state_16111;
var statearr_16165_16221 = state_16111__$1;
(statearr_16165_16221[(2)] = null);

(statearr_16165_16221[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16112 === (8))){
var inst_16015 = (state_16111[(8)]);
var inst_16032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16015);
var state_16111__$1 = state_16111;
var statearr_16166_16222 = state_16111__$1;
(statearr_16166_16222[(2)] = inst_16032);

(statearr_16166_16222[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14334__auto__,c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14335__auto__ = null;
var cljs$core$async$mix_$_state_machine__14335__auto____0 = (function (){
var statearr_16170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16170[(0)] = cljs$core$async$mix_$_state_machine__14335__auto__);

(statearr_16170[(1)] = (1));

return statearr_16170;
});
var cljs$core$async$mix_$_state_machine__14335__auto____1 = (function (state_16111){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16111);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16171){if((e16171 instanceof Object)){
var ex__14338__auto__ = e16171;
var statearr_16172_16223 = state_16111;
(statearr_16172_16223[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16111);

return cljs.core.cst$kw$recur;
} else {
throw e16171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16224 = state_16111;
state_16111 = G__16224;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14335__auto__ = function(state_16111){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14335__auto____1.call(this,state_16111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14335__auto____0;
cljs$core$async$mix_$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14335__auto____1;
return cljs$core$async$mix_$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14460__auto__ = (function (){var statearr_16173 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16176);

return statearr_16173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16176,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto__.call(null,p,v,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16225 = [];
var len__7484__auto___16228 = arguments.length;
var i__7485__auto___16229 = (0);
while(true){
if((i__7485__auto___16229 < len__7484__auto___16228)){
args16225.push((arguments[i__7485__auto___16229]));

var G__16230 = (i__7485__auto___16229 + (1));
i__7485__auto___16229 = G__16230;
continue;
} else {
}
break;
}

var G__16227 = args16225.length;
switch (G__16227) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16225.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto__.call(null,p));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto__.call(null,p,v));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16233 = [];
var len__7484__auto___16361 = arguments.length;
var i__7485__auto___16362 = (0);
while(true){
if((i__7485__auto___16362 < len__7484__auto___16361)){
args16233.push((arguments[i__7485__auto___16362]));

var G__16363 = (i__7485__auto___16362 + (1));
i__7485__auto___16362 = G__16363;
continue;
} else {
}
break;
}

var G__16235 = args16233.length;
switch (G__16235) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16233.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16236 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16236) : cljs.core.atom.call(null,G__16236));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6409__auto__,mults){
return (function (p1__16232_SHARP_){
if(cljs.core.truth_((p1__16232_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16232_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16232_SHARP_.call(null,topic)))){
return p1__16232_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16232_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16237 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16238){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16238 = meta16238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16239,meta16238__$1){
var self__ = this;
var _16239__$1 = this;
return (new cljs.core.async.t_cljs$core$async16237(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16238__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16239){
var self__ = this;
var _16239__$1 = this;
return self__.meta16238;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16240 = self__.mults;
var G__16241 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16240,G__16241) : cljs.core.reset_BANG_.call(null,G__16240,G__16241));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16238], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16237";

cljs.core.async.t_cljs$core$async16237.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16237");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16237 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16238){
return (new cljs.core.async.t_cljs$core$async16237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16238));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16237(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14458__auto___16365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16365,mults,ensure_mult,p){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16365,mults,ensure_mult,p){
return (function (state_16313){
var state_val_16314 = (state_16313[(1)]);
if((state_val_16314 === (7))){
var inst_16309 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16315_16366 = state_16313__$1;
(statearr_16315_16366[(2)] = inst_16309);

(statearr_16315_16366[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (20))){
var state_16313__$1 = state_16313;
var statearr_16316_16367 = state_16313__$1;
(statearr_16316_16367[(2)] = null);

(statearr_16316_16367[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (1))){
var state_16313__$1 = state_16313;
var statearr_16317_16368 = state_16313__$1;
(statearr_16317_16368[(2)] = null);

(statearr_16317_16368[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (24))){
var inst_16292 = (state_16313[(7)]);
var inst_16301 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16292);
var state_16313__$1 = state_16313;
var statearr_16318_16369 = state_16313__$1;
(statearr_16318_16369[(2)] = inst_16301);

(statearr_16318_16369[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (4))){
var inst_16244 = (state_16313[(8)]);
var inst_16244__$1 = (state_16313[(2)]);
var inst_16245 = (inst_16244__$1 == null);
var state_16313__$1 = (function (){var statearr_16319 = state_16313;
(statearr_16319[(8)] = inst_16244__$1);

return statearr_16319;
})();
if(cljs.core.truth_(inst_16245)){
var statearr_16320_16370 = state_16313__$1;
(statearr_16320_16370[(1)] = (5));

} else {
var statearr_16321_16371 = state_16313__$1;
(statearr_16321_16371[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (15))){
var inst_16286 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16322_16372 = state_16313__$1;
(statearr_16322_16372[(2)] = inst_16286);

(statearr_16322_16372[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (21))){
var inst_16306 = (state_16313[(2)]);
var state_16313__$1 = (function (){var statearr_16323 = state_16313;
(statearr_16323[(9)] = inst_16306);

return statearr_16323;
})();
var statearr_16324_16373 = state_16313__$1;
(statearr_16324_16373[(2)] = null);

(statearr_16324_16373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (13))){
var inst_16268 = (state_16313[(10)]);
var inst_16270 = cljs.core.chunked_seq_QMARK_(inst_16268);
var state_16313__$1 = state_16313;
if(inst_16270){
var statearr_16325_16374 = state_16313__$1;
(statearr_16325_16374[(1)] = (16));

} else {
var statearr_16326_16375 = state_16313__$1;
(statearr_16326_16375[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (22))){
var inst_16298 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
if(cljs.core.truth_(inst_16298)){
var statearr_16327_16376 = state_16313__$1;
(statearr_16327_16376[(1)] = (23));

} else {
var statearr_16328_16377 = state_16313__$1;
(statearr_16328_16377[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (6))){
var inst_16294 = (state_16313[(11)]);
var inst_16244 = (state_16313[(8)]);
var inst_16292 = (state_16313[(7)]);
var inst_16292__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16244) : topic_fn.call(null,inst_16244));
var inst_16293 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16294__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16293,inst_16292__$1);
var state_16313__$1 = (function (){var statearr_16329 = state_16313;
(statearr_16329[(11)] = inst_16294__$1);

(statearr_16329[(7)] = inst_16292__$1);

return statearr_16329;
})();
if(cljs.core.truth_(inst_16294__$1)){
var statearr_16330_16378 = state_16313__$1;
(statearr_16330_16378[(1)] = (19));

} else {
var statearr_16331_16379 = state_16313__$1;
(statearr_16331_16379[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (25))){
var inst_16303 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16332_16380 = state_16313__$1;
(statearr_16332_16380[(2)] = inst_16303);

(statearr_16332_16380[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (17))){
var inst_16268 = (state_16313[(10)]);
var inst_16277 = cljs.core.first(inst_16268);
var inst_16278 = cljs.core.async.muxch_STAR_(inst_16277);
var inst_16279 = cljs.core.async.close_BANG_(inst_16278);
var inst_16280 = cljs.core.next(inst_16268);
var inst_16254 = inst_16280;
var inst_16255 = null;
var inst_16256 = (0);
var inst_16257 = (0);
var state_16313__$1 = (function (){var statearr_16333 = state_16313;
(statearr_16333[(12)] = inst_16279);

(statearr_16333[(13)] = inst_16257);

(statearr_16333[(14)] = inst_16254);

(statearr_16333[(15)] = inst_16255);

(statearr_16333[(16)] = inst_16256);

return statearr_16333;
})();
var statearr_16334_16381 = state_16313__$1;
(statearr_16334_16381[(2)] = null);

(statearr_16334_16381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (3))){
var inst_16311 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16313__$1,inst_16311);
} else {
if((state_val_16314 === (12))){
var inst_16288 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16335_16382 = state_16313__$1;
(statearr_16335_16382[(2)] = inst_16288);

(statearr_16335_16382[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (2))){
var state_16313__$1 = state_16313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16313__$1,(4),ch);
} else {
if((state_val_16314 === (23))){
var state_16313__$1 = state_16313;
var statearr_16336_16383 = state_16313__$1;
(statearr_16336_16383[(2)] = null);

(statearr_16336_16383[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (19))){
var inst_16294 = (state_16313[(11)]);
var inst_16244 = (state_16313[(8)]);
var inst_16296 = cljs.core.async.muxch_STAR_(inst_16294);
var state_16313__$1 = state_16313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16313__$1,(22),inst_16296,inst_16244);
} else {
if((state_val_16314 === (11))){
var inst_16254 = (state_16313[(14)]);
var inst_16268 = (state_16313[(10)]);
var inst_16268__$1 = cljs.core.seq(inst_16254);
var state_16313__$1 = (function (){var statearr_16337 = state_16313;
(statearr_16337[(10)] = inst_16268__$1);

return statearr_16337;
})();
if(inst_16268__$1){
var statearr_16338_16384 = state_16313__$1;
(statearr_16338_16384[(1)] = (13));

} else {
var statearr_16339_16385 = state_16313__$1;
(statearr_16339_16385[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (9))){
var inst_16290 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16340_16386 = state_16313__$1;
(statearr_16340_16386[(2)] = inst_16290);

(statearr_16340_16386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (5))){
var inst_16251 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16252 = cljs.core.vals(inst_16251);
var inst_16253 = cljs.core.seq(inst_16252);
var inst_16254 = inst_16253;
var inst_16255 = null;
var inst_16256 = (0);
var inst_16257 = (0);
var state_16313__$1 = (function (){var statearr_16341 = state_16313;
(statearr_16341[(13)] = inst_16257);

(statearr_16341[(14)] = inst_16254);

(statearr_16341[(15)] = inst_16255);

(statearr_16341[(16)] = inst_16256);

return statearr_16341;
})();
var statearr_16342_16387 = state_16313__$1;
(statearr_16342_16387[(2)] = null);

(statearr_16342_16387[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (14))){
var state_16313__$1 = state_16313;
var statearr_16346_16388 = state_16313__$1;
(statearr_16346_16388[(2)] = null);

(statearr_16346_16388[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (16))){
var inst_16268 = (state_16313[(10)]);
var inst_16272 = cljs.core.chunk_first(inst_16268);
var inst_16273 = cljs.core.chunk_rest(inst_16268);
var inst_16274 = cljs.core.count(inst_16272);
var inst_16254 = inst_16273;
var inst_16255 = inst_16272;
var inst_16256 = inst_16274;
var inst_16257 = (0);
var state_16313__$1 = (function (){var statearr_16347 = state_16313;
(statearr_16347[(13)] = inst_16257);

(statearr_16347[(14)] = inst_16254);

(statearr_16347[(15)] = inst_16255);

(statearr_16347[(16)] = inst_16256);

return statearr_16347;
})();
var statearr_16348_16389 = state_16313__$1;
(statearr_16348_16389[(2)] = null);

(statearr_16348_16389[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (10))){
var inst_16257 = (state_16313[(13)]);
var inst_16254 = (state_16313[(14)]);
var inst_16255 = (state_16313[(15)]);
var inst_16256 = (state_16313[(16)]);
var inst_16262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16255,inst_16257);
var inst_16263 = cljs.core.async.muxch_STAR_(inst_16262);
var inst_16264 = cljs.core.async.close_BANG_(inst_16263);
var inst_16265 = (inst_16257 + (1));
var tmp16343 = inst_16254;
var tmp16344 = inst_16255;
var tmp16345 = inst_16256;
var inst_16254__$1 = tmp16343;
var inst_16255__$1 = tmp16344;
var inst_16256__$1 = tmp16345;
var inst_16257__$1 = inst_16265;
var state_16313__$1 = (function (){var statearr_16349 = state_16313;
(statearr_16349[(13)] = inst_16257__$1);

(statearr_16349[(14)] = inst_16254__$1);

(statearr_16349[(17)] = inst_16264);

(statearr_16349[(15)] = inst_16255__$1);

(statearr_16349[(16)] = inst_16256__$1);

return statearr_16349;
})();
var statearr_16350_16390 = state_16313__$1;
(statearr_16350_16390[(2)] = null);

(statearr_16350_16390[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (18))){
var inst_16283 = (state_16313[(2)]);
var state_16313__$1 = state_16313;
var statearr_16351_16391 = state_16313__$1;
(statearr_16351_16391[(2)] = inst_16283);

(statearr_16351_16391[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16314 === (8))){
var inst_16257 = (state_16313[(13)]);
var inst_16256 = (state_16313[(16)]);
var inst_16259 = (inst_16257 < inst_16256);
var inst_16260 = inst_16259;
var state_16313__$1 = state_16313;
if(cljs.core.truth_(inst_16260)){
var statearr_16352_16392 = state_16313__$1;
(statearr_16352_16392[(1)] = (10));

} else {
var statearr_16353_16393 = state_16313__$1;
(statearr_16353_16393[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___16365,mults,ensure_mult,p))
;
return ((function (switch__14334__auto__,c__14458__auto___16365,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_16357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16357[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_16357[(1)] = (1));

return statearr_16357;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_16313){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16313);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16358){if((e16358 instanceof Object)){
var ex__14338__auto__ = e16358;
var statearr_16359_16394 = state_16313;
(statearr_16359_16394[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16313);

return cljs.core.cst$kw$recur;
} else {
throw e16358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16395 = state_16313;
state_16313 = G__16395;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_16313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_16313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16365,mults,ensure_mult,p))
})();
var state__14460__auto__ = (function (){var statearr_16360 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16365);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16365,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16396 = [];
var len__7484__auto___16399 = arguments.length;
var i__7485__auto___16400 = (0);
while(true){
if((i__7485__auto___16400 < len__7484__auto___16399)){
args16396.push((arguments[i__7485__auto___16400]));

var G__16401 = (i__7485__auto___16400 + (1));
i__7485__auto___16400 = G__16401;
continue;
} else {
}
break;
}

var G__16398 = args16396.length;
switch (G__16398) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16396.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16403 = [];
var len__7484__auto___16406 = arguments.length;
var i__7485__auto___16407 = (0);
while(true){
if((i__7485__auto___16407 < len__7484__auto___16406)){
args16403.push((arguments[i__7485__auto___16407]));

var G__16408 = (i__7485__auto___16407 + (1));
i__7485__auto___16407 = G__16408;
continue;
} else {
}
break;
}

var G__16405 = args16403.length;
switch (G__16405) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16403.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16410 = [];
var len__7484__auto___16481 = arguments.length;
var i__7485__auto___16482 = (0);
while(true){
if((i__7485__auto___16482 < len__7484__auto___16481)){
args16410.push((arguments[i__7485__auto___16482]));

var G__16483 = (i__7485__auto___16482 + (1));
i__7485__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var G__16412 = args16410.length;
switch (G__16412) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16410.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14458__auto___16485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16451){
var state_val_16452 = (state_16451[(1)]);
if((state_val_16452 === (7))){
var state_16451__$1 = state_16451;
var statearr_16453_16486 = state_16451__$1;
(statearr_16453_16486[(2)] = null);

(statearr_16453_16486[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (1))){
var state_16451__$1 = state_16451;
var statearr_16454_16487 = state_16451__$1;
(statearr_16454_16487[(2)] = null);

(statearr_16454_16487[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (4))){
var inst_16415 = (state_16451[(7)]);
var inst_16417 = (inst_16415 < cnt);
var state_16451__$1 = state_16451;
if(cljs.core.truth_(inst_16417)){
var statearr_16455_16488 = state_16451__$1;
(statearr_16455_16488[(1)] = (6));

} else {
var statearr_16456_16489 = state_16451__$1;
(statearr_16456_16489[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (15))){
var inst_16447 = (state_16451[(2)]);
var state_16451__$1 = state_16451;
var statearr_16457_16490 = state_16451__$1;
(statearr_16457_16490[(2)] = inst_16447);

(statearr_16457_16490[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (13))){
var inst_16440 = cljs.core.async.close_BANG_(out);
var state_16451__$1 = state_16451;
var statearr_16458_16491 = state_16451__$1;
(statearr_16458_16491[(2)] = inst_16440);

(statearr_16458_16491[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (6))){
var state_16451__$1 = state_16451;
var statearr_16459_16492 = state_16451__$1;
(statearr_16459_16492[(2)] = null);

(statearr_16459_16492[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (3))){
var inst_16449 = (state_16451[(2)]);
var state_16451__$1 = state_16451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16451__$1,inst_16449);
} else {
if((state_val_16452 === (12))){
var inst_16437 = (state_16451[(8)]);
var inst_16437__$1 = (state_16451[(2)]);
var inst_16438 = cljs.core.some(cljs.core.nil_QMARK_,inst_16437__$1);
var state_16451__$1 = (function (){var statearr_16460 = state_16451;
(statearr_16460[(8)] = inst_16437__$1);

return statearr_16460;
})();
if(cljs.core.truth_(inst_16438)){
var statearr_16461_16493 = state_16451__$1;
(statearr_16461_16493[(1)] = (13));

} else {
var statearr_16462_16494 = state_16451__$1;
(statearr_16462_16494[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (2))){
var inst_16414 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16415 = (0);
var state_16451__$1 = (function (){var statearr_16463 = state_16451;
(statearr_16463[(7)] = inst_16415);

(statearr_16463[(9)] = inst_16414);

return statearr_16463;
})();
var statearr_16464_16495 = state_16451__$1;
(statearr_16464_16495[(2)] = null);

(statearr_16464_16495[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (11))){
var inst_16415 = (state_16451[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16451,(10),Object,null,(9));
var inst_16424 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16415) : chs__$1.call(null,inst_16415));
var inst_16425 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16415) : done.call(null,inst_16415));
var inst_16426 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16424,inst_16425);
var state_16451__$1 = state_16451;
var statearr_16465_16496 = state_16451__$1;
(statearr_16465_16496[(2)] = inst_16426);


cljs.core.async.impl.ioc_helpers.process_exception(state_16451__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (9))){
var inst_16415 = (state_16451[(7)]);
var inst_16428 = (state_16451[(2)]);
var inst_16429 = (inst_16415 + (1));
var inst_16415__$1 = inst_16429;
var state_16451__$1 = (function (){var statearr_16466 = state_16451;
(statearr_16466[(7)] = inst_16415__$1);

(statearr_16466[(10)] = inst_16428);

return statearr_16466;
})();
var statearr_16467_16497 = state_16451__$1;
(statearr_16467_16497[(2)] = null);

(statearr_16467_16497[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (5))){
var inst_16435 = (state_16451[(2)]);
var state_16451__$1 = (function (){var statearr_16468 = state_16451;
(statearr_16468[(11)] = inst_16435);

return statearr_16468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16451__$1,(12),dchan);
} else {
if((state_val_16452 === (14))){
var inst_16437 = (state_16451[(8)]);
var inst_16442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16437);
var state_16451__$1 = state_16451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16451__$1,(16),out,inst_16442);
} else {
if((state_val_16452 === (16))){
var inst_16444 = (state_16451[(2)]);
var state_16451__$1 = (function (){var statearr_16469 = state_16451;
(statearr_16469[(12)] = inst_16444);

return statearr_16469;
})();
var statearr_16470_16498 = state_16451__$1;
(statearr_16470_16498[(2)] = null);

(statearr_16470_16498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (10))){
var inst_16419 = (state_16451[(2)]);
var inst_16420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16451__$1 = (function (){var statearr_16471 = state_16451;
(statearr_16471[(13)] = inst_16419);

return statearr_16471;
})();
var statearr_16472_16499 = state_16451__$1;
(statearr_16472_16499[(2)] = inst_16420);


cljs.core.async.impl.ioc_helpers.process_exception(state_16451__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16452 === (8))){
var inst_16433 = (state_16451[(2)]);
var state_16451__$1 = state_16451;
var statearr_16473_16500 = state_16451__$1;
(statearr_16473_16500[(2)] = inst_16433);

(statearr_16473_16500[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14334__auto__,c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_16477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16477[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_16477[(1)] = (1));

return statearr_16477;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_16451){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16451);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16478){if((e16478 instanceof Object)){
var ex__14338__auto__ = e16478;
var statearr_16479_16501 = state_16451;
(statearr_16479_16501[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16451);

return cljs.core.cst$kw$recur;
} else {
throw e16478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16502 = state_16451;
state_16451 = G__16502;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_16451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_16451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14460__auto__ = (function (){var statearr_16480 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16485);

return statearr_16480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16485,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16504 = [];
var len__7484__auto___16562 = arguments.length;
var i__7485__auto___16563 = (0);
while(true){
if((i__7485__auto___16563 < len__7484__auto___16562)){
args16504.push((arguments[i__7485__auto___16563]));

var G__16564 = (i__7485__auto___16563 + (1));
i__7485__auto___16563 = G__16564;
continue;
} else {
}
break;
}

var G__16506 = args16504.length;
switch (G__16506) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16504.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___16566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16566,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16566,out){
return (function (state_16538){
var state_val_16539 = (state_16538[(1)]);
if((state_val_16539 === (7))){
var inst_16517 = (state_16538[(7)]);
var inst_16518 = (state_16538[(8)]);
var inst_16517__$1 = (state_16538[(2)]);
var inst_16518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16517__$1,(0),null);
var inst_16519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16517__$1,(1),null);
var inst_16520 = (inst_16518__$1 == null);
var state_16538__$1 = (function (){var statearr_16540 = state_16538;
(statearr_16540[(9)] = inst_16519);

(statearr_16540[(7)] = inst_16517__$1);

(statearr_16540[(8)] = inst_16518__$1);

return statearr_16540;
})();
if(cljs.core.truth_(inst_16520)){
var statearr_16541_16567 = state_16538__$1;
(statearr_16541_16567[(1)] = (8));

} else {
var statearr_16542_16568 = state_16538__$1;
(statearr_16542_16568[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (1))){
var inst_16507 = cljs.core.vec(chs);
var inst_16508 = inst_16507;
var state_16538__$1 = (function (){var statearr_16543 = state_16538;
(statearr_16543[(10)] = inst_16508);

return statearr_16543;
})();
var statearr_16544_16569 = state_16538__$1;
(statearr_16544_16569[(2)] = null);

(statearr_16544_16569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (4))){
var inst_16508 = (state_16538[(10)]);
var state_16538__$1 = state_16538;
return cljs.core.async.ioc_alts_BANG_(state_16538__$1,(7),inst_16508);
} else {
if((state_val_16539 === (6))){
var inst_16534 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16545_16570 = state_16538__$1;
(statearr_16545_16570[(2)] = inst_16534);

(statearr_16545_16570[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (3))){
var inst_16536 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16538__$1,inst_16536);
} else {
if((state_val_16539 === (2))){
var inst_16508 = (state_16538[(10)]);
var inst_16510 = cljs.core.count(inst_16508);
var inst_16511 = (inst_16510 > (0));
var state_16538__$1 = state_16538;
if(cljs.core.truth_(inst_16511)){
var statearr_16547_16571 = state_16538__$1;
(statearr_16547_16571[(1)] = (4));

} else {
var statearr_16548_16572 = state_16538__$1;
(statearr_16548_16572[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (11))){
var inst_16508 = (state_16538[(10)]);
var inst_16527 = (state_16538[(2)]);
var tmp16546 = inst_16508;
var inst_16508__$1 = tmp16546;
var state_16538__$1 = (function (){var statearr_16549 = state_16538;
(statearr_16549[(11)] = inst_16527);

(statearr_16549[(10)] = inst_16508__$1);

return statearr_16549;
})();
var statearr_16550_16573 = state_16538__$1;
(statearr_16550_16573[(2)] = null);

(statearr_16550_16573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (9))){
var inst_16518 = (state_16538[(8)]);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16538__$1,(11),out,inst_16518);
} else {
if((state_val_16539 === (5))){
var inst_16532 = cljs.core.async.close_BANG_(out);
var state_16538__$1 = state_16538;
var statearr_16551_16574 = state_16538__$1;
(statearr_16551_16574[(2)] = inst_16532);

(statearr_16551_16574[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (10))){
var inst_16530 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16552_16575 = state_16538__$1;
(statearr_16552_16575[(2)] = inst_16530);

(statearr_16552_16575[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16539 === (8))){
var inst_16519 = (state_16538[(9)]);
var inst_16517 = (state_16538[(7)]);
var inst_16518 = (state_16538[(8)]);
var inst_16508 = (state_16538[(10)]);
var inst_16522 = (function (){var cs = inst_16508;
var vec__16513 = inst_16517;
var v = inst_16518;
var c = inst_16519;
return ((function (cs,vec__16513,v,c,inst_16519,inst_16517,inst_16518,inst_16508,state_val_16539,c__14458__auto___16566,out){
return (function (p1__16503_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16503_SHARP_);
});
;})(cs,vec__16513,v,c,inst_16519,inst_16517,inst_16518,inst_16508,state_val_16539,c__14458__auto___16566,out))
})();
var inst_16523 = cljs.core.filterv(inst_16522,inst_16508);
var inst_16508__$1 = inst_16523;
var state_16538__$1 = (function (){var statearr_16553 = state_16538;
(statearr_16553[(10)] = inst_16508__$1);

return statearr_16553;
})();
var statearr_16554_16576 = state_16538__$1;
(statearr_16554_16576[(2)] = null);

(statearr_16554_16576[(1)] = (2));


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
}
}
}
}
});})(c__14458__auto___16566,out))
;
return ((function (switch__14334__auto__,c__14458__auto___16566,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_16558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16558[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_16558[(1)] = (1));

return statearr_16558;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_16538){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16538);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16559){if((e16559 instanceof Object)){
var ex__14338__auto__ = e16559;
var statearr_16560_16577 = state_16538;
(statearr_16560_16577[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16538);

return cljs.core.cst$kw$recur;
} else {
throw e16559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16578 = state_16538;
state_16538 = G__16578;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_16538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_16538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16566,out))
})();
var state__14460__auto__ = (function (){var statearr_16561 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16566);

return statearr_16561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16566,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16579 = [];
var len__7484__auto___16628 = arguments.length;
var i__7485__auto___16629 = (0);
while(true){
if((i__7485__auto___16629 < len__7484__auto___16628)){
args16579.push((arguments[i__7485__auto___16629]));

var G__16630 = (i__7485__auto___16629 + (1));
i__7485__auto___16629 = G__16630;
continue;
} else {
}
break;
}

var G__16581 = args16579.length;
switch (G__16581) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16579.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___16632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16632,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16632,out){
return (function (state_16605){
var state_val_16606 = (state_16605[(1)]);
if((state_val_16606 === (7))){
var inst_16587 = (state_16605[(7)]);
var inst_16587__$1 = (state_16605[(2)]);
var inst_16588 = (inst_16587__$1 == null);
var inst_16589 = cljs.core.not(inst_16588);
var state_16605__$1 = (function (){var statearr_16607 = state_16605;
(statearr_16607[(7)] = inst_16587__$1);

return statearr_16607;
})();
if(inst_16589){
var statearr_16608_16633 = state_16605__$1;
(statearr_16608_16633[(1)] = (8));

} else {
var statearr_16609_16634 = state_16605__$1;
(statearr_16609_16634[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (1))){
var inst_16582 = (0);
var state_16605__$1 = (function (){var statearr_16610 = state_16605;
(statearr_16610[(8)] = inst_16582);

return statearr_16610;
})();
var statearr_16611_16635 = state_16605__$1;
(statearr_16611_16635[(2)] = null);

(statearr_16611_16635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (4))){
var state_16605__$1 = state_16605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16605__$1,(7),ch);
} else {
if((state_val_16606 === (6))){
var inst_16600 = (state_16605[(2)]);
var state_16605__$1 = state_16605;
var statearr_16612_16636 = state_16605__$1;
(statearr_16612_16636[(2)] = inst_16600);

(statearr_16612_16636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (3))){
var inst_16602 = (state_16605[(2)]);
var inst_16603 = cljs.core.async.close_BANG_(out);
var state_16605__$1 = (function (){var statearr_16613 = state_16605;
(statearr_16613[(9)] = inst_16602);

return statearr_16613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16605__$1,inst_16603);
} else {
if((state_val_16606 === (2))){
var inst_16582 = (state_16605[(8)]);
var inst_16584 = (inst_16582 < n);
var state_16605__$1 = state_16605;
if(cljs.core.truth_(inst_16584)){
var statearr_16614_16637 = state_16605__$1;
(statearr_16614_16637[(1)] = (4));

} else {
var statearr_16615_16638 = state_16605__$1;
(statearr_16615_16638[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (11))){
var inst_16582 = (state_16605[(8)]);
var inst_16592 = (state_16605[(2)]);
var inst_16593 = (inst_16582 + (1));
var inst_16582__$1 = inst_16593;
var state_16605__$1 = (function (){var statearr_16616 = state_16605;
(statearr_16616[(8)] = inst_16582__$1);

(statearr_16616[(10)] = inst_16592);

return statearr_16616;
})();
var statearr_16617_16639 = state_16605__$1;
(statearr_16617_16639[(2)] = null);

(statearr_16617_16639[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (9))){
var state_16605__$1 = state_16605;
var statearr_16618_16640 = state_16605__$1;
(statearr_16618_16640[(2)] = null);

(statearr_16618_16640[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (5))){
var state_16605__$1 = state_16605;
var statearr_16619_16641 = state_16605__$1;
(statearr_16619_16641[(2)] = null);

(statearr_16619_16641[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (10))){
var inst_16597 = (state_16605[(2)]);
var state_16605__$1 = state_16605;
var statearr_16620_16642 = state_16605__$1;
(statearr_16620_16642[(2)] = inst_16597);

(statearr_16620_16642[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16606 === (8))){
var inst_16587 = (state_16605[(7)]);
var state_16605__$1 = state_16605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16605__$1,(11),out,inst_16587);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___16632,out))
;
return ((function (switch__14334__auto__,c__14458__auto___16632,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_16605){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16605);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16625){if((e16625 instanceof Object)){
var ex__14338__auto__ = e16625;
var statearr_16626_16643 = state_16605;
(statearr_16626_16643[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16605);

return cljs.core.cst$kw$recur;
} else {
throw e16625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16644 = state_16605;
state_16605 = G__16644;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_16605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_16605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16632,out))
})();
var state__14460__auto__ = (function (){var statearr_16627 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16632);

return statearr_16627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16632,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16654 = (function (map_LT_,f,ch,meta16655){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16655 = meta16655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16656,meta16655__$1){
var self__ = this;
var _16656__$1 = this;
return (new cljs.core.async.t_cljs$core$async16654(self__.map_LT_,self__.f,self__.ch,meta16655__$1));
});

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16656){
var self__ = this;
var _16656__$1 = this;
return self__.meta16655;
});

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16657 = (function (map_LT_,f,ch,meta16655,_,fn1,meta16658){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16655 = meta16655;
this._ = _;
this.fn1 = fn1;
this.meta16658 = meta16658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16659,meta16658__$1){
var self__ = this;
var _16659__$1 = this;
return (new cljs.core.async.t_cljs$core$async16657(self__.map_LT_,self__.f,self__.ch,self__.meta16655,self__._,self__.fn1,meta16658__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16659){
var self__ = this;
var _16659__$1 = this;
return self__.meta16658;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16645_SHARP_){
var G__16660 = (((p1__16645_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16645_SHARP_) : self__.f.call(null,p1__16645_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16660) : f1.call(null,G__16660));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16657.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16655,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16654], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16658], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16657";

cljs.core.async.t_cljs$core$async16657.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16657");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16657 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16657(map_LT___$1,f__$1,ch__$1,meta16655__$1,___$2,fn1__$1,meta16658){
return (new cljs.core.async.t_cljs$core$async16657(map_LT___$1,f__$1,ch__$1,meta16655__$1,___$2,fn1__$1,meta16658));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16657(self__.map_LT_,self__.f,self__.ch,self__.meta16655,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16661 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16661) : self__.f.call(null,G__16661));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16655], null);
});

cljs.core.async.t_cljs$core$async16654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16654";

cljs.core.async.t_cljs$core$async16654.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16654");
});

cljs.core.async.__GT_t_cljs$core$async16654 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16654(map_LT___$1,f__$1,ch__$1,meta16655){
return (new cljs.core.async.t_cljs$core$async16654(map_LT___$1,f__$1,ch__$1,meta16655));
});

}

return (new cljs.core.async.t_cljs$core$async16654(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16665 = (function (map_GT_,f,ch,meta16666){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16666 = meta16666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16667,meta16666__$1){
var self__ = this;
var _16667__$1 = this;
return (new cljs.core.async.t_cljs$core$async16665(self__.map_GT_,self__.f,self__.ch,meta16666__$1));
});

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16667){
var self__ = this;
var _16667__$1 = this;
return self__.meta16666;
});

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16666], null);
});

cljs.core.async.t_cljs$core$async16665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16665";

cljs.core.async.t_cljs$core$async16665.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16665");
});

cljs.core.async.__GT_t_cljs$core$async16665 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16665(map_GT___$1,f__$1,ch__$1,meta16666){
return (new cljs.core.async.t_cljs$core$async16665(map_GT___$1,f__$1,ch__$1,meta16666));
});

}

return (new cljs.core.async.t_cljs$core$async16665(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16671 = (function (filter_GT_,p,ch,meta16672){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16672 = meta16672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16673,meta16672__$1){
var self__ = this;
var _16673__$1 = this;
return (new cljs.core.async.t_cljs$core$async16671(self__.filter_GT_,self__.p,self__.ch,meta16672__$1));
});

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16673){
var self__ = this;
var _16673__$1 = this;
return self__.meta16672;
});

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16672], null);
});

cljs.core.async.t_cljs$core$async16671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16671";

cljs.core.async.t_cljs$core$async16671.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16671");
});

cljs.core.async.__GT_t_cljs$core$async16671 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16671(filter_GT___$1,p__$1,ch__$1,meta16672){
return (new cljs.core.async.t_cljs$core$async16671(filter_GT___$1,p__$1,ch__$1,meta16672));
});

}

return (new cljs.core.async.t_cljs$core$async16671(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16674 = [];
var len__7484__auto___16718 = arguments.length;
var i__7485__auto___16719 = (0);
while(true){
if((i__7485__auto___16719 < len__7484__auto___16718)){
args16674.push((arguments[i__7485__auto___16719]));

var G__16720 = (i__7485__auto___16719 + (1));
i__7485__auto___16719 = G__16720;
continue;
} else {
}
break;
}

var G__16676 = args16674.length;
switch (G__16676) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16674.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___16722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___16722,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___16722,out){
return (function (state_16697){
var state_val_16698 = (state_16697[(1)]);
if((state_val_16698 === (7))){
var inst_16693 = (state_16697[(2)]);
var state_16697__$1 = state_16697;
var statearr_16699_16723 = state_16697__$1;
(statearr_16699_16723[(2)] = inst_16693);

(statearr_16699_16723[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (1))){
var state_16697__$1 = state_16697;
var statearr_16700_16724 = state_16697__$1;
(statearr_16700_16724[(2)] = null);

(statearr_16700_16724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (4))){
var inst_16679 = (state_16697[(7)]);
var inst_16679__$1 = (state_16697[(2)]);
var inst_16680 = (inst_16679__$1 == null);
var state_16697__$1 = (function (){var statearr_16701 = state_16697;
(statearr_16701[(7)] = inst_16679__$1);

return statearr_16701;
})();
if(cljs.core.truth_(inst_16680)){
var statearr_16702_16725 = state_16697__$1;
(statearr_16702_16725[(1)] = (5));

} else {
var statearr_16703_16726 = state_16697__$1;
(statearr_16703_16726[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (6))){
var inst_16679 = (state_16697[(7)]);
var inst_16684 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16679) : p.call(null,inst_16679));
var state_16697__$1 = state_16697;
if(cljs.core.truth_(inst_16684)){
var statearr_16704_16727 = state_16697__$1;
(statearr_16704_16727[(1)] = (8));

} else {
var statearr_16705_16728 = state_16697__$1;
(statearr_16705_16728[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (3))){
var inst_16695 = (state_16697[(2)]);
var state_16697__$1 = state_16697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16697__$1,inst_16695);
} else {
if((state_val_16698 === (2))){
var state_16697__$1 = state_16697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16697__$1,(4),ch);
} else {
if((state_val_16698 === (11))){
var inst_16687 = (state_16697[(2)]);
var state_16697__$1 = state_16697;
var statearr_16706_16729 = state_16697__$1;
(statearr_16706_16729[(2)] = inst_16687);

(statearr_16706_16729[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (9))){
var state_16697__$1 = state_16697;
var statearr_16707_16730 = state_16697__$1;
(statearr_16707_16730[(2)] = null);

(statearr_16707_16730[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (5))){
var inst_16682 = cljs.core.async.close_BANG_(out);
var state_16697__$1 = state_16697;
var statearr_16708_16731 = state_16697__$1;
(statearr_16708_16731[(2)] = inst_16682);

(statearr_16708_16731[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (10))){
var inst_16690 = (state_16697[(2)]);
var state_16697__$1 = (function (){var statearr_16709 = state_16697;
(statearr_16709[(8)] = inst_16690);

return statearr_16709;
})();
var statearr_16710_16732 = state_16697__$1;
(statearr_16710_16732[(2)] = null);

(statearr_16710_16732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16698 === (8))){
var inst_16679 = (state_16697[(7)]);
var state_16697__$1 = state_16697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16697__$1,(11),out,inst_16679);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto___16722,out))
;
return ((function (switch__14334__auto__,c__14458__auto___16722,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_16714 = [null,null,null,null,null,null,null,null,null];
(statearr_16714[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_16714[(1)] = (1));

return statearr_16714;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_16697){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16697);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16715){if((e16715 instanceof Object)){
var ex__14338__auto__ = e16715;
var statearr_16716_16733 = state_16697;
(statearr_16716_16733[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16697);

return cljs.core.cst$kw$recur;
} else {
throw e16715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16734 = state_16697;
state_16697 = G__16734;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_16697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_16697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___16722,out))
})();
var state__14460__auto__ = (function (){var statearr_16717 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___16722);

return statearr_16717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___16722,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16735 = [];
var len__7484__auto___16738 = arguments.length;
var i__7485__auto___16739 = (0);
while(true){
if((i__7485__auto___16739 < len__7484__auto___16738)){
args16735.push((arguments[i__7485__auto___16739]));

var G__16740 = (i__7485__auto___16739 + (1));
i__7485__auto___16739 = G__16740;
continue;
} else {
}
break;
}

var G__16737 = args16735.length;
switch (G__16737) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16735.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14458__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto__){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto__){
return (function (state_16907){
var state_val_16908 = (state_16907[(1)]);
if((state_val_16908 === (7))){
var inst_16903 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
var statearr_16909_16950 = state_16907__$1;
(statearr_16909_16950[(2)] = inst_16903);

(statearr_16909_16950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (20))){
var inst_16873 = (state_16907[(7)]);
var inst_16884 = (state_16907[(2)]);
var inst_16885 = cljs.core.next(inst_16873);
var inst_16859 = inst_16885;
var inst_16860 = null;
var inst_16861 = (0);
var inst_16862 = (0);
var state_16907__$1 = (function (){var statearr_16910 = state_16907;
(statearr_16910[(8)] = inst_16862);

(statearr_16910[(9)] = inst_16860);

(statearr_16910[(10)] = inst_16859);

(statearr_16910[(11)] = inst_16884);

(statearr_16910[(12)] = inst_16861);

return statearr_16910;
})();
var statearr_16911_16951 = state_16907__$1;
(statearr_16911_16951[(2)] = null);

(statearr_16911_16951[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (1))){
var state_16907__$1 = state_16907;
var statearr_16912_16952 = state_16907__$1;
(statearr_16912_16952[(2)] = null);

(statearr_16912_16952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (4))){
var inst_16848 = (state_16907[(13)]);
var inst_16848__$1 = (state_16907[(2)]);
var inst_16849 = (inst_16848__$1 == null);
var state_16907__$1 = (function (){var statearr_16913 = state_16907;
(statearr_16913[(13)] = inst_16848__$1);

return statearr_16913;
})();
if(cljs.core.truth_(inst_16849)){
var statearr_16914_16953 = state_16907__$1;
(statearr_16914_16953[(1)] = (5));

} else {
var statearr_16915_16954 = state_16907__$1;
(statearr_16915_16954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (15))){
var state_16907__$1 = state_16907;
var statearr_16919_16955 = state_16907__$1;
(statearr_16919_16955[(2)] = null);

(statearr_16919_16955[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (21))){
var state_16907__$1 = state_16907;
var statearr_16920_16956 = state_16907__$1;
(statearr_16920_16956[(2)] = null);

(statearr_16920_16956[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (13))){
var inst_16862 = (state_16907[(8)]);
var inst_16860 = (state_16907[(9)]);
var inst_16859 = (state_16907[(10)]);
var inst_16861 = (state_16907[(12)]);
var inst_16869 = (state_16907[(2)]);
var inst_16870 = (inst_16862 + (1));
var tmp16916 = inst_16860;
var tmp16917 = inst_16859;
var tmp16918 = inst_16861;
var inst_16859__$1 = tmp16917;
var inst_16860__$1 = tmp16916;
var inst_16861__$1 = tmp16918;
var inst_16862__$1 = inst_16870;
var state_16907__$1 = (function (){var statearr_16921 = state_16907;
(statearr_16921[(8)] = inst_16862__$1);

(statearr_16921[(9)] = inst_16860__$1);

(statearr_16921[(10)] = inst_16859__$1);

(statearr_16921[(12)] = inst_16861__$1);

(statearr_16921[(14)] = inst_16869);

return statearr_16921;
})();
var statearr_16922_16957 = state_16907__$1;
(statearr_16922_16957[(2)] = null);

(statearr_16922_16957[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (22))){
var state_16907__$1 = state_16907;
var statearr_16923_16958 = state_16907__$1;
(statearr_16923_16958[(2)] = null);

(statearr_16923_16958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (6))){
var inst_16848 = (state_16907[(13)]);
var inst_16857 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16848) : f.call(null,inst_16848));
var inst_16858 = cljs.core.seq(inst_16857);
var inst_16859 = inst_16858;
var inst_16860 = null;
var inst_16861 = (0);
var inst_16862 = (0);
var state_16907__$1 = (function (){var statearr_16924 = state_16907;
(statearr_16924[(8)] = inst_16862);

(statearr_16924[(9)] = inst_16860);

(statearr_16924[(10)] = inst_16859);

(statearr_16924[(12)] = inst_16861);

return statearr_16924;
})();
var statearr_16925_16959 = state_16907__$1;
(statearr_16925_16959[(2)] = null);

(statearr_16925_16959[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (17))){
var inst_16873 = (state_16907[(7)]);
var inst_16877 = cljs.core.chunk_first(inst_16873);
var inst_16878 = cljs.core.chunk_rest(inst_16873);
var inst_16879 = cljs.core.count(inst_16877);
var inst_16859 = inst_16878;
var inst_16860 = inst_16877;
var inst_16861 = inst_16879;
var inst_16862 = (0);
var state_16907__$1 = (function (){var statearr_16926 = state_16907;
(statearr_16926[(8)] = inst_16862);

(statearr_16926[(9)] = inst_16860);

(statearr_16926[(10)] = inst_16859);

(statearr_16926[(12)] = inst_16861);

return statearr_16926;
})();
var statearr_16927_16960 = state_16907__$1;
(statearr_16927_16960[(2)] = null);

(statearr_16927_16960[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (3))){
var inst_16905 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16907__$1,inst_16905);
} else {
if((state_val_16908 === (12))){
var inst_16893 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
var statearr_16928_16961 = state_16907__$1;
(statearr_16928_16961[(2)] = inst_16893);

(statearr_16928_16961[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (2))){
var state_16907__$1 = state_16907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16907__$1,(4),in$);
} else {
if((state_val_16908 === (23))){
var inst_16901 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
var statearr_16929_16962 = state_16907__$1;
(statearr_16929_16962[(2)] = inst_16901);

(statearr_16929_16962[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (19))){
var inst_16888 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
var statearr_16930_16963 = state_16907__$1;
(statearr_16930_16963[(2)] = inst_16888);

(statearr_16930_16963[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (11))){
var inst_16859 = (state_16907[(10)]);
var inst_16873 = (state_16907[(7)]);
var inst_16873__$1 = cljs.core.seq(inst_16859);
var state_16907__$1 = (function (){var statearr_16931 = state_16907;
(statearr_16931[(7)] = inst_16873__$1);

return statearr_16931;
})();
if(inst_16873__$1){
var statearr_16932_16964 = state_16907__$1;
(statearr_16932_16964[(1)] = (14));

} else {
var statearr_16933_16965 = state_16907__$1;
(statearr_16933_16965[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (9))){
var inst_16895 = (state_16907[(2)]);
var inst_16896 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16907__$1 = (function (){var statearr_16934 = state_16907;
(statearr_16934[(15)] = inst_16895);

return statearr_16934;
})();
if(cljs.core.truth_(inst_16896)){
var statearr_16935_16966 = state_16907__$1;
(statearr_16935_16966[(1)] = (21));

} else {
var statearr_16936_16967 = state_16907__$1;
(statearr_16936_16967[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (5))){
var inst_16851 = cljs.core.async.close_BANG_(out);
var state_16907__$1 = state_16907;
var statearr_16937_16968 = state_16907__$1;
(statearr_16937_16968[(2)] = inst_16851);

(statearr_16937_16968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (14))){
var inst_16873 = (state_16907[(7)]);
var inst_16875 = cljs.core.chunked_seq_QMARK_(inst_16873);
var state_16907__$1 = state_16907;
if(inst_16875){
var statearr_16938_16969 = state_16907__$1;
(statearr_16938_16969[(1)] = (17));

} else {
var statearr_16939_16970 = state_16907__$1;
(statearr_16939_16970[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (16))){
var inst_16891 = (state_16907[(2)]);
var state_16907__$1 = state_16907;
var statearr_16940_16971 = state_16907__$1;
(statearr_16940_16971[(2)] = inst_16891);

(statearr_16940_16971[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16908 === (10))){
var inst_16862 = (state_16907[(8)]);
var inst_16860 = (state_16907[(9)]);
var inst_16867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16860,inst_16862);
var state_16907__$1 = state_16907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16907__$1,(13),out,inst_16867);
} else {
if((state_val_16908 === (18))){
var inst_16873 = (state_16907[(7)]);
var inst_16882 = cljs.core.first(inst_16873);
var state_16907__$1 = state_16907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16907__$1,(20),out,inst_16882);
} else {
if((state_val_16908 === (8))){
var inst_16862 = (state_16907[(8)]);
var inst_16861 = (state_16907[(12)]);
var inst_16864 = (inst_16862 < inst_16861);
var inst_16865 = inst_16864;
var state_16907__$1 = state_16907;
if(cljs.core.truth_(inst_16865)){
var statearr_16941_16972 = state_16907__$1;
(statearr_16941_16972[(1)] = (10));

} else {
var statearr_16942_16973 = state_16907__$1;
(statearr_16942_16973[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14458__auto__))
;
return ((function (switch__14334__auto__,c__14458__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____0 = (function (){
var statearr_16946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__);

(statearr_16946[(1)] = (1));

return statearr_16946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____1 = (function (state_16907){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_16907);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e16947){if((e16947 instanceof Object)){
var ex__14338__auto__ = e16947;
var statearr_16948_16974 = state_16907;
(statearr_16948_16974[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16907);

return cljs.core.cst$kw$recur;
} else {
throw e16947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__16975 = state_16907;
state_16907 = G__16975;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__ = function(state_16907){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____1.call(this,state_16907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto__))
})();
var state__14460__auto__ = (function (){var statearr_16949 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_16949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto__);

return statearr_16949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto__))
);

return c__14458__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16976 = [];
var len__7484__auto___16979 = arguments.length;
var i__7485__auto___16980 = (0);
while(true){
if((i__7485__auto___16980 < len__7484__auto___16979)){
args16976.push((arguments[i__7485__auto___16980]));

var G__16981 = (i__7485__auto___16980 + (1));
i__7485__auto___16980 = G__16981;
continue;
} else {
}
break;
}

var G__16978 = args16976.length;
switch (G__16978) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16976.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16983 = [];
var len__7484__auto___16986 = arguments.length;
var i__7485__auto___16987 = (0);
while(true){
if((i__7485__auto___16987 < len__7484__auto___16986)){
args16983.push((arguments[i__7485__auto___16987]));

var G__16988 = (i__7485__auto___16987 + (1));
i__7485__auto___16987 = G__16988;
continue;
} else {
}
break;
}

var G__16985 = args16983.length;
switch (G__16985) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16983.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16990 = [];
var len__7484__auto___17041 = arguments.length;
var i__7485__auto___17042 = (0);
while(true){
if((i__7485__auto___17042 < len__7484__auto___17041)){
args16990.push((arguments[i__7485__auto___17042]));

var G__17043 = (i__7485__auto___17042 + (1));
i__7485__auto___17042 = G__17043;
continue;
} else {
}
break;
}

var G__16992 = args16990.length;
switch (G__16992) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16990.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___17045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___17045,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___17045,out){
return (function (state_17016){
var state_val_17017 = (state_17016[(1)]);
if((state_val_17017 === (7))){
var inst_17011 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17018_17046 = state_17016__$1;
(statearr_17018_17046[(2)] = inst_17011);

(statearr_17018_17046[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (1))){
var inst_16993 = null;
var state_17016__$1 = (function (){var statearr_17019 = state_17016;
(statearr_17019[(7)] = inst_16993);

return statearr_17019;
})();
var statearr_17020_17047 = state_17016__$1;
(statearr_17020_17047[(2)] = null);

(statearr_17020_17047[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (4))){
var inst_16996 = (state_17016[(8)]);
var inst_16996__$1 = (state_17016[(2)]);
var inst_16997 = (inst_16996__$1 == null);
var inst_16998 = cljs.core.not(inst_16997);
var state_17016__$1 = (function (){var statearr_17021 = state_17016;
(statearr_17021[(8)] = inst_16996__$1);

return statearr_17021;
})();
if(inst_16998){
var statearr_17022_17048 = state_17016__$1;
(statearr_17022_17048[(1)] = (5));

} else {
var statearr_17023_17049 = state_17016__$1;
(statearr_17023_17049[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (6))){
var state_17016__$1 = state_17016;
var statearr_17024_17050 = state_17016__$1;
(statearr_17024_17050[(2)] = null);

(statearr_17024_17050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (3))){
var inst_17013 = (state_17016[(2)]);
var inst_17014 = cljs.core.async.close_BANG_(out);
var state_17016__$1 = (function (){var statearr_17025 = state_17016;
(statearr_17025[(9)] = inst_17013);

return statearr_17025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17016__$1,inst_17014);
} else {
if((state_val_17017 === (2))){
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17016__$1,(4),ch);
} else {
if((state_val_17017 === (11))){
var inst_16996 = (state_17016[(8)]);
var inst_17005 = (state_17016[(2)]);
var inst_16993 = inst_16996;
var state_17016__$1 = (function (){var statearr_17026 = state_17016;
(statearr_17026[(7)] = inst_16993);

(statearr_17026[(10)] = inst_17005);

return statearr_17026;
})();
var statearr_17027_17051 = state_17016__$1;
(statearr_17027_17051[(2)] = null);

(statearr_17027_17051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (9))){
var inst_16996 = (state_17016[(8)]);
var state_17016__$1 = state_17016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17016__$1,(11),out,inst_16996);
} else {
if((state_val_17017 === (5))){
var inst_16996 = (state_17016[(8)]);
var inst_16993 = (state_17016[(7)]);
var inst_17000 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16996,inst_16993);
var state_17016__$1 = state_17016;
if(inst_17000){
var statearr_17029_17052 = state_17016__$1;
(statearr_17029_17052[(1)] = (8));

} else {
var statearr_17030_17053 = state_17016__$1;
(statearr_17030_17053[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (10))){
var inst_17008 = (state_17016[(2)]);
var state_17016__$1 = state_17016;
var statearr_17031_17054 = state_17016__$1;
(statearr_17031_17054[(2)] = inst_17008);

(statearr_17031_17054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17017 === (8))){
var inst_16993 = (state_17016[(7)]);
var tmp17028 = inst_16993;
var inst_16993__$1 = tmp17028;
var state_17016__$1 = (function (){var statearr_17032 = state_17016;
(statearr_17032[(7)] = inst_16993__$1);

return statearr_17032;
})();
var statearr_17033_17055 = state_17016__$1;
(statearr_17033_17055[(2)] = null);

(statearr_17033_17055[(1)] = (2));


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
}
}
}
}
});})(c__14458__auto___17045,out))
;
return ((function (switch__14334__auto__,c__14458__auto___17045,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_17037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17037[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_17037[(1)] = (1));

return statearr_17037;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_17016){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_17016);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e17038){if((e17038 instanceof Object)){
var ex__14338__auto__ = e17038;
var statearr_17039_17056 = state_17016;
(statearr_17039_17056[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17016);

return cljs.core.cst$kw$recur;
} else {
throw e17038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__17057 = state_17016;
state_17016 = G__17057;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_17016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_17016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___17045,out))
})();
var state__14460__auto__ = (function (){var statearr_17040 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_17040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___17045);

return statearr_17040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___17045,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17058 = [];
var len__7484__auto___17128 = arguments.length;
var i__7485__auto___17129 = (0);
while(true){
if((i__7485__auto___17129 < len__7484__auto___17128)){
args17058.push((arguments[i__7485__auto___17129]));

var G__17130 = (i__7485__auto___17129 + (1));
i__7485__auto___17129 = G__17130;
continue;
} else {
}
break;
}

var G__17060 = args17058.length;
switch (G__17060) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17058.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___17132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___17132,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___17132,out){
return (function (state_17098){
var state_val_17099 = (state_17098[(1)]);
if((state_val_17099 === (7))){
var inst_17094 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17100_17133 = state_17098__$1;
(statearr_17100_17133[(2)] = inst_17094);

(statearr_17100_17133[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (1))){
var inst_17061 = (new Array(n));
var inst_17062 = inst_17061;
var inst_17063 = (0);
var state_17098__$1 = (function (){var statearr_17101 = state_17098;
(statearr_17101[(7)] = inst_17062);

(statearr_17101[(8)] = inst_17063);

return statearr_17101;
})();
var statearr_17102_17134 = state_17098__$1;
(statearr_17102_17134[(2)] = null);

(statearr_17102_17134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (4))){
var inst_17066 = (state_17098[(9)]);
var inst_17066__$1 = (state_17098[(2)]);
var inst_17067 = (inst_17066__$1 == null);
var inst_17068 = cljs.core.not(inst_17067);
var state_17098__$1 = (function (){var statearr_17103 = state_17098;
(statearr_17103[(9)] = inst_17066__$1);

return statearr_17103;
})();
if(inst_17068){
var statearr_17104_17135 = state_17098__$1;
(statearr_17104_17135[(1)] = (5));

} else {
var statearr_17105_17136 = state_17098__$1;
(statearr_17105_17136[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (15))){
var inst_17088 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17106_17137 = state_17098__$1;
(statearr_17106_17137[(2)] = inst_17088);

(statearr_17106_17137[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (13))){
var state_17098__$1 = state_17098;
var statearr_17107_17138 = state_17098__$1;
(statearr_17107_17138[(2)] = null);

(statearr_17107_17138[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (6))){
var inst_17063 = (state_17098[(8)]);
var inst_17084 = (inst_17063 > (0));
var state_17098__$1 = state_17098;
if(cljs.core.truth_(inst_17084)){
var statearr_17108_17139 = state_17098__$1;
(statearr_17108_17139[(1)] = (12));

} else {
var statearr_17109_17140 = state_17098__$1;
(statearr_17109_17140[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (3))){
var inst_17096 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17098__$1,inst_17096);
} else {
if((state_val_17099 === (12))){
var inst_17062 = (state_17098[(7)]);
var inst_17086 = cljs.core.vec(inst_17062);
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17098__$1,(15),out,inst_17086);
} else {
if((state_val_17099 === (2))){
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17098__$1,(4),ch);
} else {
if((state_val_17099 === (11))){
var inst_17078 = (state_17098[(2)]);
var inst_17079 = (new Array(n));
var inst_17062 = inst_17079;
var inst_17063 = (0);
var state_17098__$1 = (function (){var statearr_17110 = state_17098;
(statearr_17110[(7)] = inst_17062);

(statearr_17110[(8)] = inst_17063);

(statearr_17110[(10)] = inst_17078);

return statearr_17110;
})();
var statearr_17111_17141 = state_17098__$1;
(statearr_17111_17141[(2)] = null);

(statearr_17111_17141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (9))){
var inst_17062 = (state_17098[(7)]);
var inst_17076 = cljs.core.vec(inst_17062);
var state_17098__$1 = state_17098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17098__$1,(11),out,inst_17076);
} else {
if((state_val_17099 === (5))){
var inst_17062 = (state_17098[(7)]);
var inst_17063 = (state_17098[(8)]);
var inst_17066 = (state_17098[(9)]);
var inst_17071 = (state_17098[(11)]);
var inst_17070 = (inst_17062[inst_17063] = inst_17066);
var inst_17071__$1 = (inst_17063 + (1));
var inst_17072 = (inst_17071__$1 < n);
var state_17098__$1 = (function (){var statearr_17112 = state_17098;
(statearr_17112[(11)] = inst_17071__$1);

(statearr_17112[(12)] = inst_17070);

return statearr_17112;
})();
if(cljs.core.truth_(inst_17072)){
var statearr_17113_17142 = state_17098__$1;
(statearr_17113_17142[(1)] = (8));

} else {
var statearr_17114_17143 = state_17098__$1;
(statearr_17114_17143[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (14))){
var inst_17091 = (state_17098[(2)]);
var inst_17092 = cljs.core.async.close_BANG_(out);
var state_17098__$1 = (function (){var statearr_17116 = state_17098;
(statearr_17116[(13)] = inst_17091);

return statearr_17116;
})();
var statearr_17117_17144 = state_17098__$1;
(statearr_17117_17144[(2)] = inst_17092);

(statearr_17117_17144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (10))){
var inst_17082 = (state_17098[(2)]);
var state_17098__$1 = state_17098;
var statearr_17118_17145 = state_17098__$1;
(statearr_17118_17145[(2)] = inst_17082);

(statearr_17118_17145[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17099 === (8))){
var inst_17062 = (state_17098[(7)]);
var inst_17071 = (state_17098[(11)]);
var tmp17115 = inst_17062;
var inst_17062__$1 = tmp17115;
var inst_17063 = inst_17071;
var state_17098__$1 = (function (){var statearr_17119 = state_17098;
(statearr_17119[(7)] = inst_17062__$1);

(statearr_17119[(8)] = inst_17063);

return statearr_17119;
})();
var statearr_17120_17146 = state_17098__$1;
(statearr_17120_17146[(2)] = null);

(statearr_17120_17146[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__14458__auto___17132,out))
;
return ((function (switch__14334__auto__,c__14458__auto___17132,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_17124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17124[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_17124[(1)] = (1));

return statearr_17124;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_17098){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_17098);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e17125){if((e17125 instanceof Object)){
var ex__14338__auto__ = e17125;
var statearr_17126_17147 = state_17098;
(statearr_17126_17147[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17098);

return cljs.core.cst$kw$recur;
} else {
throw e17125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__17148 = state_17098;
state_17098 = G__17148;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_17098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_17098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___17132,out))
})();
var state__14460__auto__ = (function (){var statearr_17127 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_17127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___17132);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___17132,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17149 = [];
var len__7484__auto___17223 = arguments.length;
var i__7485__auto___17224 = (0);
while(true){
if((i__7485__auto___17224 < len__7484__auto___17223)){
args17149.push((arguments[i__7485__auto___17224]));

var G__17225 = (i__7485__auto___17224 + (1));
i__7485__auto___17224 = G__17225;
continue;
} else {
}
break;
}

var G__17151 = args17149.length;
switch (G__17151) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17149.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14458__auto___17227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14458__auto___17227,out){
return (function (){
var f__14459__auto__ = (function (){var switch__14334__auto__ = ((function (c__14458__auto___17227,out){
return (function (state_17193){
var state_val_17194 = (state_17193[(1)]);
if((state_val_17194 === (7))){
var inst_17189 = (state_17193[(2)]);
var state_17193__$1 = state_17193;
var statearr_17195_17228 = state_17193__$1;
(statearr_17195_17228[(2)] = inst_17189);

(statearr_17195_17228[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (1))){
var inst_17152 = [];
var inst_17153 = inst_17152;
var inst_17154 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17193__$1 = (function (){var statearr_17196 = state_17193;
(statearr_17196[(7)] = inst_17153);

(statearr_17196[(8)] = inst_17154);

return statearr_17196;
})();
var statearr_17197_17229 = state_17193__$1;
(statearr_17197_17229[(2)] = null);

(statearr_17197_17229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (4))){
var inst_17157 = (state_17193[(9)]);
var inst_17157__$1 = (state_17193[(2)]);
var inst_17158 = (inst_17157__$1 == null);
var inst_17159 = cljs.core.not(inst_17158);
var state_17193__$1 = (function (){var statearr_17198 = state_17193;
(statearr_17198[(9)] = inst_17157__$1);

return statearr_17198;
})();
if(inst_17159){
var statearr_17199_17230 = state_17193__$1;
(statearr_17199_17230[(1)] = (5));

} else {
var statearr_17200_17231 = state_17193__$1;
(statearr_17200_17231[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (15))){
var inst_17183 = (state_17193[(2)]);
var state_17193__$1 = state_17193;
var statearr_17201_17232 = state_17193__$1;
(statearr_17201_17232[(2)] = inst_17183);

(statearr_17201_17232[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (13))){
var state_17193__$1 = state_17193;
var statearr_17202_17233 = state_17193__$1;
(statearr_17202_17233[(2)] = null);

(statearr_17202_17233[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (6))){
var inst_17153 = (state_17193[(7)]);
var inst_17178 = inst_17153.length;
var inst_17179 = (inst_17178 > (0));
var state_17193__$1 = state_17193;
if(cljs.core.truth_(inst_17179)){
var statearr_17203_17234 = state_17193__$1;
(statearr_17203_17234[(1)] = (12));

} else {
var statearr_17204_17235 = state_17193__$1;
(statearr_17204_17235[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (3))){
var inst_17191 = (state_17193[(2)]);
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17193__$1,inst_17191);
} else {
if((state_val_17194 === (12))){
var inst_17153 = (state_17193[(7)]);
var inst_17181 = cljs.core.vec(inst_17153);
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17193__$1,(15),out,inst_17181);
} else {
if((state_val_17194 === (2))){
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17193__$1,(4),ch);
} else {
if((state_val_17194 === (11))){
var inst_17157 = (state_17193[(9)]);
var inst_17161 = (state_17193[(10)]);
var inst_17171 = (state_17193[(2)]);
var inst_17172 = [];
var inst_17173 = inst_17172.push(inst_17157);
var inst_17153 = inst_17172;
var inst_17154 = inst_17161;
var state_17193__$1 = (function (){var statearr_17205 = state_17193;
(statearr_17205[(7)] = inst_17153);

(statearr_17205[(11)] = inst_17173);

(statearr_17205[(12)] = inst_17171);

(statearr_17205[(8)] = inst_17154);

return statearr_17205;
})();
var statearr_17206_17236 = state_17193__$1;
(statearr_17206_17236[(2)] = null);

(statearr_17206_17236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (9))){
var inst_17153 = (state_17193[(7)]);
var inst_17169 = cljs.core.vec(inst_17153);
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17193__$1,(11),out,inst_17169);
} else {
if((state_val_17194 === (5))){
var inst_17157 = (state_17193[(9)]);
var inst_17154 = (state_17193[(8)]);
var inst_17161 = (state_17193[(10)]);
var inst_17161__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17157) : f.call(null,inst_17157));
var inst_17162 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17161__$1,inst_17154);
var inst_17163 = cljs.core.keyword_identical_QMARK_(inst_17154,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17164 = (inst_17162) || (inst_17163);
var state_17193__$1 = (function (){var statearr_17207 = state_17193;
(statearr_17207[(10)] = inst_17161__$1);

return statearr_17207;
})();
if(cljs.core.truth_(inst_17164)){
var statearr_17208_17237 = state_17193__$1;
(statearr_17208_17237[(1)] = (8));

} else {
var statearr_17209_17238 = state_17193__$1;
(statearr_17209_17238[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (14))){
var inst_17186 = (state_17193[(2)]);
var inst_17187 = cljs.core.async.close_BANG_(out);
var state_17193__$1 = (function (){var statearr_17211 = state_17193;
(statearr_17211[(13)] = inst_17186);

return statearr_17211;
})();
var statearr_17212_17239 = state_17193__$1;
(statearr_17212_17239[(2)] = inst_17187);

(statearr_17212_17239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (10))){
var inst_17176 = (state_17193[(2)]);
var state_17193__$1 = state_17193;
var statearr_17213_17240 = state_17193__$1;
(statearr_17213_17240[(2)] = inst_17176);

(statearr_17213_17240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (8))){
var inst_17153 = (state_17193[(7)]);
var inst_17157 = (state_17193[(9)]);
var inst_17161 = (state_17193[(10)]);
var inst_17166 = inst_17153.push(inst_17157);
var tmp17210 = inst_17153;
var inst_17153__$1 = tmp17210;
var inst_17154 = inst_17161;
var state_17193__$1 = (function (){var statearr_17214 = state_17193;
(statearr_17214[(7)] = inst_17153__$1);

(statearr_17214[(14)] = inst_17166);

(statearr_17214[(8)] = inst_17154);

return statearr_17214;
})();
var statearr_17215_17241 = state_17193__$1;
(statearr_17215_17241[(2)] = null);

(statearr_17215_17241[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__14458__auto___17227,out))
;
return ((function (switch__14334__auto__,c__14458__auto___17227,out){
return (function() {
var cljs$core$async$state_machine__14335__auto__ = null;
var cljs$core$async$state_machine__14335__auto____0 = (function (){
var statearr_17219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17219[(0)] = cljs$core$async$state_machine__14335__auto__);

(statearr_17219[(1)] = (1));

return statearr_17219;
});
var cljs$core$async$state_machine__14335__auto____1 = (function (state_17193){
while(true){
var ret_value__14336__auto__ = (function (){try{while(true){
var result__14337__auto__ = switch__14334__auto__(state_17193);
if(cljs.core.keyword_identical_QMARK_(result__14337__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14337__auto__;
}
break;
}
}catch (e17220){if((e17220 instanceof Object)){
var ex__14338__auto__ = e17220;
var statearr_17221_17242 = state_17193;
(statearr_17221_17242[(5)] = ex__14338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17193);

return cljs.core.cst$kw$recur;
} else {
throw e17220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14336__auto__,cljs.core.cst$kw$recur)){
var G__17243 = state_17193;
state_17193 = G__17243;
continue;
} else {
return ret_value__14336__auto__;
}
break;
}
});
cljs$core$async$state_machine__14335__auto__ = function(state_17193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14335__auto____1.call(this,state_17193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14335__auto____0;
cljs$core$async$state_machine__14335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14335__auto____1;
return cljs$core$async$state_machine__14335__auto__;
})()
;})(switch__14334__auto__,c__14458__auto___17227,out))
})();
var state__14460__auto__ = (function (){var statearr_17222 = (f__14459__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14459__auto__.cljs$core$IFn$_invoke$arity$0() : f__14459__auto__.call(null));
(statearr_17222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14458__auto___17227);

return statearr_17222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14460__auto__);
});})(c__14458__auto___17227,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

