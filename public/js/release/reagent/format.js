// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.format');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha384');
goog.require('goog.string');
goog.require('goog.crypt.Sha1');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormatSymbols');
goog.require('goog.crypt.Sha2');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.crypt.Sha512');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('goog.crypt.Sha256');
reagent.format.add_slashes = (function reagent$format$add_slashes(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",c)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",c))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),cljs.core.array_seq([[cljs.core.str(s)].join('')], 0)));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count(text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(l," "))),cljs.core.str(text),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12414 = arguments.length;
var i__7485__auto___12415 = (0);
while(true){
if((i__7485__auto___12415 < len__7484__auto___12414)){
args__7491__auto__.push((arguments[i__7485__auto___12415]));

var G__12416 = (i__7485__auto___12415 + (1));
i__7485__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

reagent.format.format.cljs$lang$applyTo = (function (seq12412){
var G__12413 = cljs.core.first(seq12412);
var seq12412__$1 = cljs.core.next(seq12412);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic(G__12413,seq12412__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12419 = arguments.length;
var i__7485__auto___12420 = (0);
while(true){
if((i__7485__auto___12420 < len__7484__auto___12419)){
args__7491__auto__.push((arguments[i__7485__auto___12420]));

var G__12421 = (i__7485__auto___12420 + (1));
i__7485__auto___12420 = G__12421;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.format.format,fmt,args)], 0));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

reagent.format.printf.cljs$lang$applyTo = (function (seq12417){
var G__12418 = cljs.core.first(seq12417);
var seq12417__$1 = cljs.core.next(seq12417);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic(G__12418,seq12417__$1);
});

/**
 * formats currency using the current locale
 * to change locale set goog.i18n.NumberFormatSymbols eg:
 * (set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_it_IT)
 * see here for supported locales
 * https://github.com/google/closure-library/blob/master/closure/goog/i18n/compactnumberformatsymbols.js
 *   
 */
reagent.format.currency_format = (function reagent$format$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
reagent.format.date_format = (function reagent$format$date_format(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12429 = arguments.length;
var i__7485__auto___12430 = (0);
while(true){
if((i__7485__auto___12430 < len__7484__auto___12429)){
args__7491__auto__.push((arguments[i__7485__auto___12430]));

var G__12431 = (i__7485__auto___12430 + (1));
i__7485__auto___12430 = G__12431;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__12425){
var vec__12426 = p__12425;
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12426,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

reagent.format.date_format.cljs$lang$applyTo = (function (seq12422){
var G__12423 = cljs.core.first(seq12422);
var seq12422__$1 = cljs.core.next(seq12422);
var G__12424 = cljs.core.first(seq12422__$1);
var seq12422__$2 = cljs.core.next(seq12422__$1);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic(G__12423,G__12424,seq12422__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str(s)].join('');
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (s__$1){
return (function (p1__12432_SHARP_,p2__12433_SHARP_){
return [cljs.core.str((p1__12432_SHARP_ + (1))),cljs.core.str(". "),cljs.core.str(p2__12433_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12442 = arguments.length;
var i__7485__auto___12443 = (0);
while(true){
if((i__7485__auto___12443 < len__7484__auto___12442)){
args__7491__auto__.push((arguments[i__7485__auto___12443]));

var G__12444 = (i__7485__auto___12443 + (1));
i__7485__auto___12443 = G__12444;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__12436){
var vec__12437 = p__12436;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var ending1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
var ending2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(2),null);
var opts = vec__12437;
var n = cljs.core.count(items);
var plural = (function (){var G__12440 = cljs.core.count(opts);
switch (G__12440) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(opts))].join('')));

}
})();
var singular = (function (){var G__12441 = cljs.core.count(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$list,G__12441)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__12441)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__12441)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__12441)){
return ending1;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(opts))].join('')));

}
}
}
}
})();
return [cljs.core.str(n),cljs.core.str(" "),cljs.core.str(word),cljs.core.str(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

reagent.format.pluralize.cljs$lang$applyTo = (function (seq12434){
var G__12435 = cljs.core.first(seq12434);
var seq12434__$1 = cljs.core.next(seq12434);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__12435,seq12434__$1);
});

reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12448 = arguments.length;
var i__7485__auto___12449 = (0);
while(true){
if((i__7485__auto___12449 < len__7484__auto___12448)){
args__7491__auto__.push((arguments[i__7485__auto___12449]));

var G__12450 = (i__7485__auto___12449 + (1));
i__7485__auto___12449 = G__12450;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not(tags)){
return s;
} else {
var s__$1 = [cljs.core.str(s)].join('');
var tags__$1 = [cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",tags)),cljs.core.str(")")].join('');
var opening = cljs.core.re_pattern([cljs.core.str("(?i)<"),cljs.core.str(tags__$1),cljs.core.str("(/?>|(\\s+[^>]*>))")].join(''));
var closing = cljs.core.re_pattern([cljs.core.str("(?i)</"),cljs.core.str(tags__$1),cljs.core.str(">")].join(''));
return clojure.string.replace(clojure.string.replace(s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

reagent.format.remove_tags.cljs$lang$applyTo = (function (seq12446){
var G__12447 = cljs.core.first(seq12446);
var seq12446__$1 = cljs.core.next(seq12446);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic(G__12447,seq12446__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});
