// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.zprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.finish');
goog.require('zprint.zfns');
goog.require('zprint.comment');
goog.require('zprint.ansi');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"."));
});
/**
 * Make a version of conj! that takes multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29900 = arguments.length;
var i__4737__auto___29901 = (0);
while(true){
if((i__4737__auto___29901 < len__4736__auto___29900)){
args__4742__auto__.push((arguments[i__4737__auto___29901]));

var G__29902 = (i__4737__auto___29901 + (1));
i__4737__auto___29901 = G__29902;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (to,rest){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,rest);
}));

(zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq29898){
var G__29899 = cljs.core.first(seq29898);
var seq29898__$1 = cljs.core.next(seq29898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29899,seq29898__$1);
}));

/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"\n");
if(cljs.core.truth_(temp__5718__auto__)){
var next_lf = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),next_lf),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__29904 = arguments.length;
switch (G__29904) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll);
}));

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,coll1,coll2);
}));

(zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4);

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__29906,dbg_output,ind,style_vec){
var map__29907 = p__29906;
var map__29907__$1 = (((((!((map__29907 == null))))?(((((map__29907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29907):map__29907);
var options = map__29907__$1;
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$dbg_DASH_print_QMARK_);
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$dbg_DASH_indent);
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,cljs.core.cst$kw$in_DASH_hang_QMARK_);
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_], 0));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------- no style-vec"], 0));
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(p__29909,f){
var map__29910 = p__29909;
var map__29910__$1 = (((((!((map__29910 == null))))?(((((map__29910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29910):map__29910);
var options = map__29910__$1;
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$fn_DASH_map);
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29910__$1,cljs.core.cst$kw$color_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = color_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(typeof f === 'string'));
} else {
return and__4115__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var fn_map__$1 = cljs.core.cst$kw$fn_DASH_map.cljs$core$IFn$_invoke$arity$1(options);
var or__4126__auto__ = (fn_map__$1.cljs$core$IFn$_invoke$arity$1 ? fn_map__$1.cljs$core$IFn$_invoke$arity$1(f_str) : fn_map__$1.call(null,f_str));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.re_find(/clojure/,f_str);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4126__auto____$2 = cljs.core.re_find(/clojure/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var G__29913 = cljs.core.name(f);
return (fn_map__$1.cljs$core$IFn$_invoke$arity$1 ? fn_map__$1.cljs$core$IFn$_invoke$arity$1(G__29913) : fn_map__$1.call(null,G__29913));
}
}catch (e29912){var e = e29912;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(p__29914,f){
var map__29915 = p__29914;
var map__29915__$1 = (((((!((map__29915 == null))))?(((((map__29915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29915):map__29915);
var options = map__29915__$1;
var user_fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29915__$1,cljs.core.cst$kw$user_DASH_fn_DASH_map);
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29915__$1,cljs.core.cst$kw$color_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = color_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(typeof f === 'string'));
} else {
return and__4115__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,f_str);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4126__auto____$1 = (!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))))));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,cljs.core.name(f));
}
}catch (e29917){var e = e29917;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__29918,fn_style,p_count,indent_diff,p__29919,p__29920){
var map__29921 = p__29918;
var map__29921__$1 = (((((!((map__29921 == null))))?(((((map__29921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29921):map__29921);
var options = map__29921__$1;
var map__29922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,cljs.core.cst$kw$tuning);
var map__29922__$1 = (((((!((map__29922 == null))))?(((((map__29922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29922):map__29922);
var hang_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29922__$1,cljs.core.cst$kw$hang_DASH_flow);
var hang_type_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29922__$1,cljs.core.cst$kw$hang_DASH_type_DASH_flow);
var hang_flow_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29922__$1,cljs.core.cst$kw$hang_DASH_flow_DASH_limit);
var general_hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29922__$1,cljs.core.cst$kw$general_DASH_hang_DASH_adjust);
var hang_if_equal_flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29922__$1,cljs.core.cst$kw$hang_DASH_if_DASH_equal_DASH_flow_QMARK_);
var map__29923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,caller);
var map__29923__$1 = (((((!((map__29923 == null))))?(((((map__29923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29923):map__29923);
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29923__$1,cljs.core.cst$kw$hang_DASH_expand);
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29923__$1,cljs.core.cst$kw$hang_DASH_diff);
var hang_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29923__$1,cljs.core.cst$kw$hang_DASH_size);
var hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29923__$1,cljs.core.cst$kw$hang_DASH_adjust);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,cljs.core.cst$kw$width);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,cljs.core.cst$kw$rightcnt);
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,cljs.core.cst$kw$dbg_QMARK_);
var vec__29924 = p__29919;
var p_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(0),null);
var p_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(1),null);
var p_length_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(2),null);
var p_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(3),null);
var vec__29927 = p__29920;
var b_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(0),null);
var b_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(2),null);
var b_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(3),null);
var p_last_maxwidth = cljs.core.last(p_length_seq);
var hang_diff__$1 = (function (){var or__4126__auto__ = hang_diff;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__4126__auto__ = hang_expand;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__4126__auto__ = hang_adjust;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = p_what;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$dbg_QMARK_,true):options);
var result = ((cljs.core.not(b_lines))?true:(function (){var and__4115__auto__ = p_lines;
if(cljs.core.truth_(and__4115__auto__)){
if((p_last_maxwidth <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))))){
if((p_maxwidth <= width)){
var or__4126__auto__ = (p_lines === (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((b_lines > (0))){
if((p_count > (0))){
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_lines,b_lines))?hang_if_equal_flow_QMARK_:false))){
return true;
} else {
if((((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1))){
if((cljs.core.truth_(hang_size)?(p_lines < hang_size):true)){
var factor = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style,cljs.core.cst$kw$hang))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})());
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth], 0));
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(cljs.core.cst$kw$in_DASH_hang_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$do_DASH_in_DASH_hang_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$in_DASH_hang_QMARK_,(function (){var or__4126__auto__ = cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return true if it contains any nils or empty
 *   collections.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
return cljs.core.some((function (p1__29933_SHARP_){
if(cljs.core.coll_QMARK_(p1__29933_SHARP_)){
return cljs.core.empty_QMARK_(p1__29933_SHARP_);
} else {
return (p1__29933_SHARP_ == null);
}
}),coll);
});
/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil_pre_noseq = (function zprint$zprint$concat_no_nil_pre_noseq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29935 = arguments.length;
var i__4737__auto___29936 = (0);
while(true){
if((i__4737__auto___29936 < len__4736__auto___29935)){
args__4742__auto__.push((arguments[i__4737__auto___29936]));

var G__29937 = (i__4737__auto___29936 + (1));
i__4737__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_(result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$applyTo = (function (seq29934){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29934));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 *   When complete, check the last element-- if it is a :right, and if it
 *   the previous element is a :newline or :indent, then ensure that the
 *   number of spaces in that previous element matches the number to the
 *   right of the :right.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29945 = arguments.length;
var i__4737__auto___29946 = (0);
while(true){
if((i__4737__auto___29946 < len__4736__auto___29945)){
args__4742__auto__.push((arguments[i__4737__auto___29946]));

var G__29947 = (i__4737__auto___29946 + (1));
i__4737__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$noseq,o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
var result__$1 = cljs.core.persistent_BANG_(result);
if((cljs.core.count(result__$1) < (2))){
return result__$1;
} else {
var vec__29939 = cljs.core.peek(result__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29939,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29939,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29939,(2),null);
var right_ind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29939,(3),null);
var last_element = vec__29939;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$right)){
var previous_index = (cljs.core.count(result__$1) - (2));
var vec__29942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result__$1,previous_index);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(1),null);
var previous_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_what,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_what,cljs.core.cst$kw$indent)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zprint.count_right_blanks.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.count_right_blanks.cljs$core$IFn$_invoke$arity$1(s) : zprint.zprint.count_right_blanks.call(null,s)),right_ind)){
return result__$1;
} else {
var new_previous = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zprint.trimr_blanks.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.trimr_blanks.cljs$core$IFn$_invoke$arity$1(s) : zprint.zprint.trimr_blanks.call(null,s))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(right_ind))].join(''),color,previous_what], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,previous_index,new_previous);
}
} else {
return result__$1;
}
} else {
return result__$1;
}
}
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq29938){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29938));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 */
zprint.zprint.concat_no_nil_pre_right = (function zprint$zprint$concat_no_nil_pre_right(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29949 = arguments.length;
var i__4737__auto___29950 = (0);
while(true){
if((i__4737__auto___29950 < len__4736__auto___29949)){
args__4742__auto__.push((arguments[i__4737__auto___29950]));

var G__29951 = (i__4737__auto___29950 + (1));
i__4737__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$noseq,o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_(result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_right.cljs$lang$applyTo = (function (seq29948){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29948));
}));

/**
 * Remove a single thing from a sequence.
 */
zprint.zprint.remove_one = (function zprint$zprint$remove_one(s,index){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,s),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),s));
});
/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_(coll)){
return coll;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__29952 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/^:/);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29952,(1),null);
if(cljs.core.truth_(right)){
var fexpr__29955 = cljs.core.cst$kw$fn_DASH_map.cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__29955.cljs$core$IFn$_invoke$arity$1 ? fexpr__29955.cljs$core$IFn$_invoke$arity$1(right) : fexpr__29955.call(null,right));
} else {
return null;
}
});
/**
 * Given the options map, return the max length.  This might be
 *   a constant number, but it might be based on the depth as well.
 *   Returns nil of there is no max-length set.
 */
zprint.zprint.get_max_length = (function zprint$zprint$get_max_length(p__29956){
var map__29957 = p__29956;
var map__29957__$1 = (((((!((map__29957 == null))))?(((((map__29957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29957):map__29957);
var options = map__29957__$1;
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29957__$1,cljs.core.cst$kw$max_DASH_length);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29957__$1,cljs.core.cst$kw$depth);
if(cljs.core.truth_(max_length)){
if(cljs.core.vector_QMARK_(max_length)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(max_length,(function (){var x__4217__auto__ = (depth - (1));
var y__4218__auto__ = (cljs.core.count(max_length) - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return max_length;
}
} else {
return null;
}
});
/**
 * Given an options map, return another options map with no
 *   :max-length key.  This is to that you can call a routine that
 *   normally deals with :max-length and get it to do the normal
 *   thing.
 */
zprint.zprint.no_max_length = (function zprint$zprint$no_max_length(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$max_DASH_length,(10000));
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__29959,s,tag,eol_QMARK_){
var vec__29960 = p__29959;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(3),null);
var in$ = vec__29960;
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$comment_DASH_inline)));
var count_s = ((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?(0):cljs.core.count(s));
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (count_s === (0));
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__29963,p__29964){
var vec__29965 = p__29963;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(3),null);
var in$ = vec__29965;
var vec__29968 = p__29964;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29968,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29968,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29968,(2),null);
var element = vec__29968;
var vec__29971 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$newline))))?zprint.zprint.split_lf_2(s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29971,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29971,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll(count_comment_QMARK_,in$,l,tag,(!((r == null))));
var in$__$2 = ((cljs.core.empty_QMARK_(r))?in$__$1:zprint.zprint.accumulate_ll(count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = cljs.core.cst$kw$count_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line-lengths-iter: style-vec:",style_vec], 0))], 0));
} else {
}

var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(next_vec)) && (cljs.core.empty_QMARK_(current_string)))){
if((((line_length === (0))) && (cljs.core.not(previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(out,line_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_(current_string);
var vec__29980 = ((advance_QMARK_)?cljs.core.first(next_vec):null);
var next_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$comment_DASH_inline)));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__29983 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__4126__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$indent)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2(s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(1),null);
var force_newline_QMARK_ = (function (){var and__4115__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.empty_QMARK_(l)));
} else {
return and__4115__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count(l__$1));
var G__29986 = ((advance_QMARK_)?cljs.core.next(next_vec):next_vec);
var G__29987 = r__$1;
var G__29988 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__29989 = comment_QMARK_;
var G__29990 = (cljs.core.truth_(r__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_line_length):out);
next_vec = G__29986;
current_string = G__29987;
line_length = G__29988;
previous_comment_QMARK_ = G__29989;
out = G__29990;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first((function (){var count_comment_QMARK_ = cljs.core.cst$kw$count_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options));
var vec__29991 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(3),null);
var result = vec__29991;
if(cljs.core.truth_((function (){var and__4115__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(just_comment_QMARK_);
} else {
return and__4115__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll(count_comment_QMARK_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(2),null),"",null,true);
}
})());
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line-lengths: style-vec:",style_vec,"ind:",ind,"length-vec:",length_vec], 0))], 0));
} else {
}

return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29994_SHARP_,p2__29995_SHARP_){
var or__4126__auto__ = p1__29994_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__29995_SHARP_;
}
}),false,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29996_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.first(p1__29996_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__29997 = cljs.core.first(s_vec);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29997,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29997,(1),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29997,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$element)){
return what;
} else {
var G__30000 = cljs.core.next(s_vec);
s_vec = G__30000;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Look at a style vec ready to be given to concat-no-nil, and see if
 *   the first thing in there is a newline of some sort.
 */
zprint.zprint.first_nl_QMARK_ = (function zprint$zprint$first_nl_QMARK_(style_vec){
var vec__30001 = cljs.core.first(style_vec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30001,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$indent)));
});
/**
 * Given an indent ind and a style-vec coll, place a newline (actually an
 *   indent) at the front of coll.  If the first thing in coll is a newline,
 *   then don't add any spaces after the newline that we prepend.
 */
zprint.zprint.prepend_nl = (function zprint$zprint$prepend_nl(options,ind,coll){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(((zprint.zprint.first_nl_QMARK_(coll))?(0):ind)))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(1)], null)], null),coll], 0));
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__4115__auto__ = style_vec;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core.empty_QMARK_(style_vec)))) && (cljs.core.not(zprint.zprint.contains_nil_QMARK_(style_vec))));
} else {
return and__4115__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter(options,ind,style_vec);
var count_lengths = cljs.core.count(lengths);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [count_lengths,(((count_lengths === (0)))?(0):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,lengths)),lengths], null);
var dbg_ge = cljs.core.cst$kw$dbg_DASH_ge.cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__4115__auto__ = dbg_ge;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.zprint.find_what(style_vec),dbg_ge);
} else {
return and__4115__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__30004,p__30005){
var map__30006 = p__30004;
var map__30006__$1 = (((((!((map__30006 == null))))?(((((map__30006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30006):map__30006);
var options = map__30006__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30006__$1,cljs.core.cst$kw$width);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30006__$1,cljs.core.cst$kw$rightcnt);
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30006__$1,cljs.core.cst$kw$dbg_QMARK_);
var vec__30007 = p__30005;
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(1),null);
var style_lines_return = vec__30007;
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",(zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt)),"line-count:",line_count,"max-width:",max_width,"width:",width], 0));
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit(options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$rightcnt,(cljs.core.cst$kw$rightcnt.cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$rightcnt);
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not(rightmost_QMARK_)){
return zprint.zprint.not_rightmost(options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost(zprint.zprint.not_rightmost(options));
} else {
return zprint.zprint.not_rightmost(options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[cljs.core.cst$kw$bracket,cljs.core.cst$kw$quote,cljs.core.cst$kw$paren,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$unquote,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$paren,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$brace,cljs.core.cst$kw$brace,cljs.core.cst$kw$bracket,cljs.core.cst$kw$uneval,cljs.core.cst$kw$deref]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__30011,key_or_str){
var map__30012 = p__30011;
var map__30012__$1 = (((((!((map__30012 == null))))?(((((map__30012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30012):map__30012);
var options = map__30012__$1;
var color_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30012__$1,cljs.core.cst$kw$color_DASH_map);
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30012__$1,cljs.core.cst$kw$color_QMARK_);
if(cljs.core.truth_(color_QMARK_)){
var G__30014 = (((key_or_str instanceof cljs.core.Keyword))?key_or_str:(zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1(key_or_str) : zprint.zprint.str__GT_key.call(null,key_or_str)));
return (color_map.cljs$core$IFn$_invoke$arity$1 ? color_map.cljs$core$IFn$_invoke$arity$1(G__30014) : color_map.call(null,G__30014));
} else {
return cljs.core.cst$kw$none;
}
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hindent:",hindent,"findent:",findent,"zloc:",(function (){var G__30015 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30015) : zprint.zfns.zstring.call(null,G__30015));
})()], 0));
} else {
}

var hanging = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent))?(function (){var G__30016 = zprint.zprint.in_hang(options);
var G__30017 = hindent;
var G__30018 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__30016,G__30017,G__30018) : fzfn.call(null,G__30016,G__30017,G__30018));
})():null);
var value__16471__auto__ = (cljs.core.truth_((function (){var and__4115__auto__ = hanging;
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.fzfit(options,zprint.zprint.style_lines(options,hindent,hanging));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hang,hanging], null):(function (){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow"], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,zprint.zprint.prepend_nl(options,findent,(fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc)))], null);
})()
);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(style_vec),(1))){
var vec__30019 = style_vec;
var vec__30022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30019,(0),null);
var string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * This routine tries to figure out if existing hang should be used without
 *   even bothering to do a flow and compare them with good-enough?.
 */
zprint.zprint.use_hang_QMARK_ = (function zprint$zprint$use_hang_QMARK_(caller,p__30025,ind,hang_count,hanging_line_count){
var map__30026 = p__30025;
var map__30026__$1 = (((((!((map__30026 == null))))?(((((map__30026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30026):map__30026);
var options = map__30026__$1;
var map__30027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30026__$1,caller);
var map__30027__$1 = (((((!((map__30027 == null))))?(((((map__30027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30027):map__30027);
var hang_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30027__$1,cljs.core.cst$kw$hang_DASH_accept);
var ha_depth_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30027__$1,cljs.core.cst$kw$ha_DASH_depth_DASH_factor);
var ha_width_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30027__$1,cljs.core.cst$kw$ha_DASH_width_DASH_factor);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30026__$1,cljs.core.cst$kw$depth);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30026__$1,cljs.core.cst$kw$width);
if(cljs.core.truth_((function (){var and__4115__auto__ = hanging_line_count;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = hang_accept;
if(cljs.core.truth_(and__4115__auto____$1)){
return (hang_count > (0));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var hang_accept__$1 = ((hang_accept + (depth * ha_depth_factor)) + ((ind / width) * ha_width_factor));
return (((hanging_line_count - (1)) / hang_count) <= hang_accept__$1);
} else {
return null;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  Returns 
 *   [:hang <style-vec>] or [:flow <style-vec>] so that the upstream folks
 *   know whether this was a hang or flow and can do the right thing
 *   based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__30030,ind,commas_QMARK_,justify_width,rightmost_pair_QMARK_,p__30031){
var map__30032 = p__30030;
var map__30032__$1 = (((((!((map__30032 == null))))?(((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30032):map__30032);
var options = map__30032__$1;
var map__30033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,caller);
var map__30033__$1 = (((((!((map__30033 == null))))?(((((map__30033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30033):map__30033);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$hang_QMARK_);
var flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$flow_QMARK_);
var indent_arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$indent_DASH_arg);
var key_depth_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$key_DASH_depth_DASH_color);
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$indent);
var key_value_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$key_DASH_value_DASH_color);
var dbg_cnt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$dbg_DASH_cnt_QMARK_);
var dbg_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$dbg_DASH_local_QMARK_);
var key_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$key_DASH_color);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$dbg_QMARK_);
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$dbg_DASH_indent);
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$in_DASH_hang_QMARK_);
var do_in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$do_DASH_in_DASH_hang_QMARK_);
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30032__$1,cljs.core.cst$kw$map_DASH_depth);
var vec__30034 = p__30031;
var lloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30034,(0),null);
var rloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30034,(1),null);
var xloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30034,(2),null);
var pair = vec__30034;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = dbg_indent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = dbg_indent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})())].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc)),"tag:",(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.ztag.call(null,lloc)),"caller:",caller,"count:",cljs.core.count(pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_], 0))], 0));
} else {
}

var local_hang_QMARK_ = (function (){var or__4126__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__4126__auto__ = indent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return indent_arg;
}
})();
var local_options = ((cljs.core.not(local_hang_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$one_DASH_line_QMARK_,true):options);
var loptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,null,options);
var roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,cljs.core.cst$kw$rightmost,options);
var local_roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,cljs.core.cst$kw$rightmost,local_options);
var value_color_map = (function (){var and__4115__auto__ = key_value_color;
if(cljs.core.truth_(and__4115__auto__)){
var G__30045 = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zsexpr.call(null,lloc));
return (key_value_color.cljs$core$IFn$_invoke$arity$1 ? key_value_color.cljs$core$IFn$_invoke$arity$1(G__30045) : key_value_color.call(null,G__30045));
} else {
return and__4115__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_roptions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_DASH_map,value_color_map], null)], 0)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([roptions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_DASH_map,value_color_map], null)], 0)):roptions);
var modifier_set = cljs.core.cst$kw$modifiers.cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)));
var modifier_QMARK_ = (function (){var or__4126__auto__ = (function (){var and__4115__auto__ = modifier_set;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (function (){var G__30051 = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc));
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__30051) : modifier_set.call(null,G__30051));
})();
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.core.count(pair) > (2));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2(options,rloc) : zprint.zprint.middle_element_QMARK_.call(null,options,rloc));
}
})();
var local_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?(function (){var G__30052 = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zsexpr.call(null,lloc));
return (key_color.cljs$core$IFn$_invoke$arity$1 ? key_color.cljs$core$IFn$_invoke$arity$1(G__30052) : key_color.call(null,G__30052));
})():local_color);
var arg_1 = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(loptions,ind,lloc) : zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc));
var arg_1_newline_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1)))?(zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.znewline_QMARK_.call(null,lloc)):false);
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color(local_color__$1,arg_1):arg_1);
var vec__30039 = zprint.zprint.style_lines(options,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(0),null);
var arg_1_max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(1),null);
var arg_1_lines = vec__30039;
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width], 0)):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__4115__auto__)){
return (arg_1_line_count > (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg_1_newline_QMARK_;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(1)], null)], null),(function (){var G__30053 = zprint.zprint.in_hang(loptions);
var G__30054 = (ind + arg_1_max_width);
var G__30055 = rloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30053,G__30054,G__30055) : zprint.zprint.fzprint_STAR_.call(null,G__30053,G__30054,G__30055));
})()], 0)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__30042 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines(options,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(1),null);
var arg_1_lines__$1 = vec__30042;
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1], 0)):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = ((cljs.core.not(flow_QMARK_)) && (zprint.zprint.fzfit_one_line(loptions,arg_1_lines__$1)));
var arg_1_fit_QMARK_ = (function (){var or__4126__auto__ = arg_1_fit_oneline_QMARK_;
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(cljs.core.not(one_line_QMARK_)){
return zprint.zprint.fzfit(loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__4126__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: arg-1:",arg_1__$2], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = arg_1__$2;
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(in_hang_QMARK_);
}
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(arg_1_newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,arg_1__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hang,(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$1,ind,lloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$1,ind,lloc__$1))], null);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(2));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(3));
} else {
return and__4115__auto__;
}
}
})())){
var hanging_width = (cljs.core.truth_(justify_width)?justify_width:arg_1_width);
var hanging_spaces = (cljs.core.truth_(justify_width)?((justify_width - arg_1_width) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__4115__auto__ = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = zprint.zprint.keyword_fn_QMARK_(options,(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)));
if(cljs.core.truth_(and__4115__auto____$1)){
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zvector_QMARK_.call(null,rloc__$1));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var vec__30056 = zprint.zprint.fzprint_hang_unless_fail(loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,cljs.core.cst$kw$hang))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(2)], null)], null)], 0)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$3,style_vec], 0))], null);
} else {
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before hang.  hanging tried?",((arg_1_fit_oneline_QMARK_) || (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent)))))], 0)):null);
var hanging = ((((arg_1_fit_oneline_QMARK_) || (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent))))))?(function (){var G__30059 = (((flow_indent < hanging_indent))?zprint.zprint.in_hang(local_roptions__$1):local_roptions__$1);
var G__30060 = hanging_indent;
var G__30061 = rloc__$1;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30059,G__30060,G__30061) : zprint.zprint.fzprint_STAR_.call(null,G__30059,G__30060,G__30061));
})():null);
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zcount.call(null,rloc__$1));
var ___$3 = zprint.zprint.log_lines(options,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines(options,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line(local_roptions__$1,hanging_lines);
var hanging_lines__$1 = ((fit_QMARK_)?hanging_lines:(cljs.core.truth_(((cljs.core.not(one_line_QMARK_))?hang_QMARK_:false))?hanging_lines:null));
var hanging_line_count = cljs.core.first(hanging_lines__$1);
var ___$4 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: fit?",fit_QMARK_,"hanging-lines:",hanging_lines__$1], 0)):null);
var ___$5 = zprint.zprint.log_lines(options,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((cljs.core.not(hanging_lines__$1)) || (((((((cljs.core.not(hanging_lines__$1)) && (cljs.core.not(one_line_QMARK_)))) || (cljs.core.not((function (){var or__4126__auto__ = fit_QMARK_;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not(hanging_lines__$1)))))));
var flow_it_QMARK___$1 = (cljs.core.truth_(zprint.zprint.use_hang_QMARK_(caller,options,ind,hang_count,hanging_line_count))?false:flow_it_QMARK_);
var ___$6 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK___$1], 0)):null);
var flow = ((flow_it_QMARK___$1)?(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$1,flow_indent,rloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$1,flow_indent,rloc__$1)):null);
var ___$7 = zprint.zprint.log_lines(options,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines(options,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: local-hang:",local_hang_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: one-line?:",one_line_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-indent:",hanging_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-lines:",hanging_lines__$1], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow?:",flow_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-it?:",flow_it_QMARK___$1], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: fit?:",fit_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-indent:",flow_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),hanging], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: (+ indent ind):",(indent__$1 + ind)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),flow], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before good-enough"], 0));
} else {
}

if(fit_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hang,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(3)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_(caller,roptions__$1,cljs.core.cst$kw$none_DASH_two_DASH_up,hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hang,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(4)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_(justify_width)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,zprint.zprint.prepend_nl(options,(indent__$1 + ind),flow)], 0))], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,(function (){var G__30062 = options;
var G__30063 = (indent__$1 + ind);
var G__30064 = (cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext(pair):cljs.core.next(pair));
var G__30065 = cljs.core.cst$kw$force_DASH_nl;
var G__30066 = cljs.core.cst$kw$newline_DASH_first;
return (zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 ? zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(G__30062,G__30063,G__30064,G__30065,G__30066) : zprint.zprint.fzprint_flow_seq.call(null,G__30062,G__30063,G__30064,G__30065,G__30066));
})()], 0))], null);

}
}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 *   For instance, they all need to be one-line.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__30072,ind,coll){
var map__30073 = p__30072;
var map__30073__$1 = (((((!((map__30073 == null))))?(((((map__30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30073):map__30073);
var options = map__30073__$1;
var map__30074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30073__$1,caller);
var map__30074__$1 = (((((!((map__30074 == null))))?(((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30074):map__30074);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30074__$1,cljs.core.cst$kw$justify_QMARK_);
var firsts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30067_SHARP_){
if((cljs.core.count(p1__30067_SHARP_) > (1))){
var G__30077 = options;
var G__30078 = ind;
var G__30079 = cljs.core.first(p1__30067_SHARP_);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30077,G__30078,G__30079) : zprint.zprint.fzprint_STAR_.call(null,G__30077,G__30078,G__30079));
} else {
return null;
}
}),coll));
var style_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.style_lines,options,ind),firsts);
var each_one_line_QMARK_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30068_SHARP_,p2__30069_SHARP_){
if(cljs.core.truth_(p1__30068_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p2__30069_SHARP_),(1));
} else {
return null;
}
}),true,style_seq);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30070_SHARP_,p2__30071_SHARP_){
var x__4214__auto__ = p1__30070_SHARP_;
var y__4215__auto__ = cljs.core.second(p2__30071_SHARP_);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}),(0),style_seq):null);
if(cljs.core.truth_(justify_width)){
return (justify_width - ind);
} else {
return null;
}
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__30081 = arguments.length;
switch (G__30081) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (size__$1,element){
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0)))?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zstring.call(null,element))));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.reduced(null);
}
}),size,coll);
}));

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size,coll,(0));
}));

(zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__30083,ind,commas_QMARK_,coll){
var map__30084 = p__30083;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30084):map__30084);
var options = map__30084__$1;
var map__30085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,caller);
var map__30085__$1 = (((((!((map__30085 == null))))?(((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30085):map__30085);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,cljs.core.cst$kw$justify_QMARK_);
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,cljs.core.cst$kw$force_DASH_nl_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,cljs.core.cst$kw$width);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,cljs.core.cst$kw$rightcnt);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,cljs.core.cst$kw$parallel_QMARK_);
var caller_map = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var len = cljs.core.count(coll);
var justify_width = (cljs.core.truth_((function (){var and__4115__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(one_line_QMARK_);
} else {
return and__4115__auto__;
}
})())?zprint.zprint.fzprint_justify_width(caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?(options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)):null);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$dbg_DASH_print_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",cljs.core.cst$kw$one_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_], 0));
} else {
}

if(cljs.core.not((function (){var and__4115__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (len > (1));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,(function (){var G__30090 = cljs.core.cst$kw$justify_DASH_hang;
return (caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(G__30090) : caller_options.call(null,G__30090));
})()])], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tuning,(function (){var G__30091 = cljs.core.cst$kw$justify_DASH_tuning;
return (caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(G__30091) : caller_options.call(null,G__30091));
})()], null)], 0)):options);
while(true){
var beginning_coll = cljs.core.butlast(coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"beginning-remaining:",beginning_remaining], 0)):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3(options,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.fzprint_two_up,caller,justify_options,ind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([commas_QMARK_,justify_width__$1,null], 0)),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_(beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__4115__auto__ = beginning__$1;
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((beginning_remaining - rightcnt),end_coll);
} else {
return and__4115__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining], 0)):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5720__auto__ = zprint.zprint.fzprint_two_up(caller,justify_options,ind,commas_QMARK_,justify_width__$1,cljs.core.cst$kw$rightmost_DASH_pair,cljs.core.first(end_coll));
if(cljs.core.truth_(temp__5720__auto__)){
var end_result = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1)))?end:zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning__$1,end], 0))
);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count(end),"(count beginnging):",cljs.core.count(beginning__$1),"justify-width:",justify_width__$1,"result:",result], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = result;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(justify_width__$1);
}
})())){
return result;
} else {
var G__30092 = null;
var G__30093 = options;
justify_width__$1 = G__30092;
justify_options = G__30093;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare(x,y);
} else {
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__4115__auto__ = (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x));
if(cljs.core.truth_(and__4115__auto__)){
return (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.compare((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)),(key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)));
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)))){
return (-1);
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys(x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__30096,access,out){
var map__30097 = p__30096;
var map__30097__$1 = (((((!((map__30097 == null))))?(((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30097):map__30097);
var options = map__30097__$1;
var map__30098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30097__$1,caller);
var map__30098__$1 = (((((!((map__30098 == null))))?(((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30098):map__30098);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$sort_QMARK_);
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_);
var key_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$key_DASH_order);
var key_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$key_DASH_value);
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30097__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__30094_SHARP_,p2__30095_SHARP_){
var G__30102 = (function (){var G__30104 = (access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p1__30094_SHARP_) : access.call(null,p1__30094_SHARP_));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__30104) : zprint.zfns.zsexpr.call(null,G__30104));
})();
var G__30103 = (function (){var G__30105 = (access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p2__30095_SHARP_) : access.call(null,p2__30095_SHARP_));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__30105) : zprint.zfns.zsexpr.call(null,G__30105));
})();
var fexpr__30101 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.compare_ordered_keys,(function (){var or__4126__auto__ = key_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)));
return (fexpr__30101.cljs$core$IFn$_invoke$arity$2 ? fexpr__30101.cljs$core$IFn$_invoke$arity$2(G__30102,G__30103) : fexpr__30101.call(null,G__30102,G__30103));
}),out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this, as will a newline if one appears.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__4126__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zuneval_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znewline_QMARK_.call(null,zloc));
}
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__30106,zloc){
var map__30107 = p__30106;
var map__30107__$1 = (((((!((map__30107 == null))))?(((((map__30107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30107):map__30107);
var options = map__30107__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30107__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_code_QMARK_,"condp")){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
var this_key = cljs.core.first(ks);
var next_key = cljs.core.next(ks);
if(next_key){
var removed_map = (function (){var G__30109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,this_key);
var G__30110 = cljs.core.next(ks);
return (zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2(G__30109,G__30110) : zprint.zprint.remove_key_seq.call(null,G__30109,G__30110));
})();
if(cljs.core.empty_QMARK_(removed_map)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,cljs.core.cst$kw$zprint_DASH_not_DASH_found),cljs.core.cst$kw$zprint_DASH_not_DASH_found)){
return m;
} else {
return zprint.zprint.remove_key_seq(m,ks);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,cljs.core.cst$kw$zprint_DASH_not_DASH_found),cljs.core.cst$kw$zprint_DASH_not_DASH_found)){
return m;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,cljs.core.cst$kw$zprint_DASH_not_DASH_found),cljs.core.cst$kw$zprint_DASH_not_DASH_found)){
return m;
} else {
return cljs.core.assoc_in(m,ks,cljs.core.cst$kw$zprint_DASH_ignored);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,cljs.core.cst$kw$zprint_DASH_not_DASH_found),cljs.core.cst$kw$zprint_DASH_not_DASH_found)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ks,cljs.core.cst$kw$zprint_DASH_ignored);
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__30111,zloc){
var map__30112 = p__30111;
var map__30112__$1 = (((((!((map__30112 == null))))?(((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30112):map__30112);
var options = map__30112__$1;
var map__30113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,caller);
var map__30113__$1 = (((((!((map__30113 == null))))?(((((map__30113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30113):map__30113);
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30113__$1,cljs.core.cst$kw$key_DASH_ignore);
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30113__$1,cljs.core.cst$kw$key_DASH_ignore_DASH_silent);
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) or (zseqnws-w-nl) where one assumes that
 *   these are pairs.  Thus, a seq of zlocs.  Output is a sequence of
 *   seqs, where the seqs are usually pairs, but might be single things.
 *   Doesn't pair up comments or #_(...) unevaled sexpressions.  The
 *   ones before the first part of a pair come as a single element in
 *   what would usually be a pair, and the ones between the first and
 *   second parts of a pair come inside the pair.  There may be an
 *   arbitrary number of elements between the first and second elements
 *   of the pair (one per line).  If there are any comments or unevaled
 *   sexpressions, don't sort the keys, as we might lose track of where
 *   the comments or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(options,coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
var max_length = zprint.zprint.get_max_length(options);
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-2-nc: index:",index,"no-sort?:",no_sort_QMARK_,"first remaining:",(function (){var G__30128 = cljs.core.first(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30128) : zprint.zfns.zstring.call(null,G__30128));
})(),"second remaining:",(function (){var G__30129 = cljs.core.second(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30129) : zprint.zfns.zstring.call(null,G__30129));
})()], 0))], 0));
} else {
}

if(cljs.core.not(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_(out)], null);
} else {
var vec__30130 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_(cljs.core.first(remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),true], null):(cljs.core.truth_((function (){var or__4126__auto__ = zprint.zprint.pair_element_QMARK_(cljs.core.second(remaining));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,cljs.core.second(remaining));
}
})())?(function (){var vec__30133 = cljs.core.split_with(((function (remaining,no_sort_QMARK_,index,out,max_length){
return (function (p1__30116_SHARP_){
var or__4126__auto__ = zprint.zprint.pair_element_QMARK_(p1__30116_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,p1__30116_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,max_length))
,cljs.core.next(remaining));
var comment_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30133,(0),null);
var rest_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30133,(1),null);
if(cljs.core.truth_(cljs.core.first(rest_seq))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(rest_seq),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),comment_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rest_seq)], null)], 0))),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),true], null);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(cljs.core.next(remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining),cljs.core.second(remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(0),null);
var pair_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-2-nc: pair-vec: first:",(function (){var G__30136 = cljs.core.first(pair_vec);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30136) : zprint.zfns.zstring.call(null,G__30136));
})(),"first tag:",(function (){var G__30137 = cljs.core.first(pair_vec);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__30137) : zprint.zfns.ztag.call(null,G__30137));
})(),"count:",cljs.core.count(pair_vec),"last:",(function (){var G__30138 = cljs.core.last(pair_vec);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30138) : zprint.zfns.zstring.call(null,G__30138));
})()], 0))], 0));
} else {
}

var G__30139 = ((((index + (1)) < max_length))?new_remaining:(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),max_length))?new_remaining:false))?(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null)):null
));
var G__30140 = (function (){var or__4126__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new_no_sort_QMARK_;
}
})();
var G__30141 = (index + (1));
var G__30142 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,pair_vec);
remaining = G__30139;
no_sort_QMARK_ = G__30140;
index = G__30141;
out = G__30142;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__30145 = cljs.core.first(coll);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30145) : zprint.zfns.zsymbol_QMARK_.call(null,G__30145));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__30146 = cljs.core.first(coll);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30146) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__30146));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse(coll);
var vec__30147 = cljs.core.split_with((function (p1__30143_SHARP_){
return cljs.core.not((function (){var or__4126__auto__ = (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30143_SHARP_) : zprint.zfns.zcoll_QMARK_.call(null,p1__30143_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30143_SHARP_) : zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__30143_SHARP_));
}
})());
}),rev_seq);
var split_non_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30147,(1),null);
var split_non_coll__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.reverse(split_non_coll));
var remainder = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(coll) - cljs.core.count(split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_(remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing(s) in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things (these days called a zseq)
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-sym:",modifier_set], 0))], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,coll)], 0));
} else {
}

var part_sym = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__30150_SHARP_){
var or__4126__auto__ = (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30150_SHARP_) : zprint.zfns.zsymbol_QMARK_.call(null,p1__30150_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30150_SHARP_) : zprint.zfns.znil_QMARK_.call(null,p1__30150_SHARP_));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30150_SHARP_) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__30150_SHARP_));
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.cleave_end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part_sym], 0));
var remaining = split_non_coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return cljs.core.persistent_BANG_(out);
} else {
var vec__30191 = (cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (function (){var G__30205 = cljs.core.ffirst(remaining);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30205) : zprint.zfns.zsymbol_QMARK_.call(null,G__30205));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__30207 = cljs.core.ffirst(remaining);
return (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30207) : zprint.zfns.znil_QMARK_.call(null,G__30207));
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__30208 = cljs.core.ffirst(remaining);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30208) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__30208));
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
if((!(cljs.core.empty_QMARK_(cljs.core.second(remaining))))){
var or__4126__auto__ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30226 = cljs.core.first(cljs.core.second(remaining));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__30226) : zprint.zfns.ztag.call(null,G__30226));
})(),cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30227 = cljs.core.first(cljs.core.second(remaining));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__30227) : zprint.zfns.ztag.call(null,G__30227));
})(),cljs.core.cst$kw$newline)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__30228 = cljs.core.last(cljs.core.second(remaining));
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30228) : zprint.zfns.zcoll_QMARK_.call(null,G__30228));
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):(cljs.core.truth_((function (){var and__4115__auto__ = modifier_set;
if(cljs.core.truth_(and__4115__auto__)){
var G__30229 = (function (){var G__30230 = cljs.core.ffirst(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30230) : zprint.zfns.zstring.call(null,G__30230));
})();
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__30229) : modifier_set.call(null,G__30229));
} else {
return and__4115__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next(cljs.core.next(cljs.core.first(remaining))))?cljs.core.cons(cljs.core.next(cljs.core.next(cljs.core.first(remaining))),cljs.core.next(remaining)):cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),(new cljs.core.List(null,cljs.core.second(cljs.core.first(remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(cljs.core.next(cljs.core.first(remaining)),cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(remaining))], null)
);
var next_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30191,(0),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30191,(1),null);
var G__30231 = next_remaining;
var G__30232 = new_out;
remaining = G__30231;
out = G__30232;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with the indent appropriate for the r-str if
 *   it is preceded by a newline.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__30234 = arguments.length;
switch (G__30234) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map(options,(function (){var or__4126__auto__ = r_type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return r_str;
}
})()),(function (){var or__4126__auto__ = r_type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$right;
}
})(),ind], null)], null);
}));

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,ind,zloc,r_str,null);
}));

(zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5);

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__30236,ind,zloc){
var map__30237 = p__30236;
var map__30237__$1 = (((((!((map__30237 == null))))?(((((map__30237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30237):map__30237);
var options = map__30237__$1;
var map__30238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30237__$1,cljs.core.cst$kw$binding);
var map__30238__$1 = (((((!((map__30238 == null))))?(((((map__30238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30238):map__30238);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30238__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec: ind:",ind,"zloc:",(function (){var G__30241 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30241) : zprint.zfns.zstring.call(null,G__30241));
})()], 0));
} else {
}

var options__$1 = zprint.zprint.rightmost(options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$1,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc,r_str);
var value__16471__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)),(0)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0)):zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__30242 = cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(options__$1);
var G__30243 = (ind + (1));
var G__30244 = zprint.zprint.fzprint_map_two_up(cljs.core.cst$kw$binding,options__$1,(ind + (1)),false,cljs.core.second(zprint.zprint.partition_all_2_nc(options__$1,(function (){var G__30245 = cljs.core.cst$kw$vector;
var G__30246 = options__$1;
var G__30247 = zloc;
return (zprint.zprint.fzprint_get_zloc_seq.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_get_zloc_seq.cljs$core$IFn$_invoke$arity$3(G__30245,G__30246,G__30247) : zprint.zprint.fzprint_get_zloc_seq.call(null,G__30245,G__30246,G__30247));
})())));
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__30242,G__30243,G__30244) : zprint.zprint.interpose_nl_hf.call(null,G__30242,G__30243,G__30244));
})(),r_str_vec], 0)));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input. Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__30248,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__30249 = p__30248;
var map__30249__$1 = (((((!((map__30249 == null))))?(((((map__30249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30249):map__30249);
var options = map__30249__$1;
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30249__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var force_eol_blanks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30249__$1,cljs.core.cst$kw$force_DASH_eol_DASH_blanks_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller], 0));
} else {
}

var hanging = (cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent))?(function (){var and__4115__auto__ = (function (){var G__30258 = cljs.core.cst$kw$hang_QMARK_;
var fexpr__30257 = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller));
return (fexpr__30257.cljs$core$IFn$_invoke$arity$1 ? fexpr__30257.cljs$core$IFn$_invoke$arity$1(G__30258) : fexpr__30257.call(null,G__30258));
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var G__30259 = cljs.core.first(zloc);
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30259) : zprint.zfns.znewline_QMARK_.call(null,G__30259));
})());
} else {
return and__4115__auto__;
}
})():false))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(5)], null)], null),(function (){var G__30260 = zprint.zprint.in_hang(options);
var G__30261 = hindent;
var G__30262 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__30260,G__30261,G__30262) : fzfn.call(null,G__30260,G__30261,G__30262));
})()], 0)):null);
var hanging__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.second(hanging),(2)),cljs.core.cst$kw$comment_DASH_inline))?hanging:null);
var hang_count = (function (){var or__4126__auto__ = zloc_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
}
})();
var hr_lines = zprint.zprint.style_lines(options,(hindent - (1)),hanging__$1);
if(cljs.core.truth_((function (){var or__4126__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = (function (){var result = (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc));
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((cljs.core.truth_(force_eol_blanks_QMARK_)?null:zprint.zprint.first_nl_QMARK_(result)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(42)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(findent))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(4)], null)], null)),result], 0));
})();
var _ = zprint.zprint.log_lines(options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging__$1,"flow:",flow], 0))], 0)):null);
var hr_good_QMARK_ = (cljs.core.truth_(hanging__$1)?zprint.zprint.good_enough_QMARK_(caller,options,cljs.core.cst$kw$none_DASH_hang,hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs. Takes a zloc-seq
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(p__30263,ind,zloc_seq){
var map__30264 = p__30263;
var map__30264__$1 = (((((!((map__30264 == null))))?(((((map__30264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30264):map__30264);
var options = map__30264__$1;
var map__30265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30264__$1,cljs.core.cst$kw$pair);
var map__30265__$1 = (((((!((map__30265 == null))))?(((((map__30265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30265):map__30265);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30265__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30265__$1,cljs.core.cst$kw$respect_DASH_nl_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-pairs:",(function (){var G__30268 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30268) : zprint.zfns.zstring.call(null,G__30268));
})()], 0))], 0));
} else {
}

var value__16471__auto__ = (function (){var G__30269 = cljs.core.cst$kw$pair.cljs$core$IFn$_invoke$arity$1(options);
var G__30270 = ind;
var G__30271 = zprint.zprint.fzprint_map_two_up(cljs.core.cst$kw$pair,options,ind,false,(function (){var vec__30272 = zprint.zprint.partition_all_2_nc(options,zloc_seq);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30272,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30272,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-pairs: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,cljs.core.first),part),"respect-nl?",respect_nl_QMARK_], 0))], 0));
} else {
}

return part;
})());
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__30269,G__30270,G__30271) : zprint.zprint.interpose_nl_hf.call(null,G__30269,G__30270,G__30271));
})();
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. Takes a zloc-seq.
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__30276,ind,zloc_seq){
var map__30277 = p__30276;
var map__30277__$1 = (((((!((map__30277 == null))))?(((((map__30277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30277):map__30277);
var options = map__30277__$1;
var map__30278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30277__$1,cljs.core.cst$kw$extend);
var map__30278__$1 = (((((!((map__30278 == null))))?(((((map__30278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30278):map__30278);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",(function (){var G__30281 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30281) : zprint.zfns.zstring.call(null,G__30281));
})()], 0));
} else {
}

var value__16471__auto__ = (function (){var G__30282 = cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(options);
var G__30283 = ind;
var G__30284 = zprint.zprint.fzprint_map_two_up(cljs.core.cst$kw$extend,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$fn_DASH_style,cljs.core.cst$kw$fn),ind,false,(function (){var part = zprint.zprint.partition_all_sym(options,cljs.core.cst$kw$modifiers.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(options)),zloc_seq);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30275_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,p1__30275_SHARP_);
}),part)], 0));
} else {
}

return part;
})());
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__30282,G__30283,G__30284) : zprint.zprint.interpose_nl_hf.call(null,G__30282,G__30283,G__30284));
})();
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30287 = arguments.length;
var i__4737__auto___30288 = (0);
while(true){
if((i__4737__auto___30288 < len__4736__auto___30287)){
args__4742__auto__.push((arguments[i__4737__auto___30288]));

var G__30289 = (i__4737__auto___30288 + (1));
i__4737__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__30290 = cljs.core.next(cols);
var G__30291 = (function (){var col = cljs.core.first(cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__30292 = cljs.core.next(col);
var G__30293 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out__$1,cljs.core.first(col));
col = G__30292;
out__$1 = G__30293;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__30290;
out = G__30291;
continue;
} else {
return out;
}
break;
}
}));

(zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq30285){
var G__30286 = cljs.core.first(seq30285);
var seq30285__$1 = cljs.core.next(seq30285);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30286,seq30285__$1);
}));

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc_seq){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$dbg_DASH_print_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:"], 0));
} else {
}

var seq_right = zloc_seq;
var len = cljs.core.count(seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count(seq_right) > (1));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$one_DASH_line_QMARK_,true);
var zloc_seq__$1 = seq_right;
var new_ind = cljs.core.long$(ind);
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(zloc_seq__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count(out)], 0));
} else {
}

return cljs.core.persistent_BANG_(out);
} else {
var next_zloc = cljs.core.first(zloc_seq__$1);
var vec__30300 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((index === (0)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(6)], null)], null):null),options__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost(options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(7)], null)], null),zprint.zprint.not_rightmost(options__$1)], null)
));
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30300,(0),null);
var next_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30300,(1),null);
var next_out = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(next_options,new_ind,next_zloc) : zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc));
var _ = zprint.zprint.log_lines(options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__30303 = zprint.zprint.style_lines(options__$1,new_ind,next_out);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(1),null);
var next_lines = vec__30303;
if((!(zprint.zprint.fzfit_one_line(next_options,next_lines)))){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!"], 0));
} else {
}

return null;
} else {
var G__30306 = cljs.core.next(zloc_seq__$1);
var G__30307 = (cljs.core.long$(max_width) + (1));
var G__30308 = (index + (1));
var G__30309 = zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep,next_out], 0));
zloc_seq__$1 = G__30306;
new_ind = G__30307;
index = G__30308;
out = G__30309;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc).  Return
 *   a seq of the fzprint* of each element.  No spacing between any
 *   of these elements. Note that this is not a style-vec, but a seq
 *   of style-vecs of each of the elements.  These would need to be
 *   concatenated together to become a style-vec.  ind is either a
 *   constant or a seq of indents, one for each element in zloc-seq.
 *   Note that right gets evaluated immediately, while left yields a
 *   lazy sequence which get evaluated later.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(options,ind,zloc_seq){
var max_length = zprint.zprint.get_max_length(options);
var len = cljs.core.count(zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,zloc_seq),(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null))):zloc_seq);
var len__$1 = cljs.core.count(zloc_seq__$1);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len__$1,"max-length:",max_length,"ind:",ind], 0));
} else {
}

if(cljs.core.empty_QMARK_(zloc_seq__$1)){
return null;
} else {
if((max_length === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?#",zprint.zprint.zcolor_map(options,cljs.core.cst$kw$keyword),cljs.core.cst$kw$element], null)], null)], null);
} else {
var left = zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4(options,(function (p1__30310_SHARP_,p2__30311_SHARP_){
var G__30312 = zprint.zprint.not_rightmost(options);
var G__30313 = p1__30310_SHARP_;
var G__30314 = p2__30311_SHARP_;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30312,G__30313,G__30314) : zprint.zprint.fzprint_STAR_.call(null,G__30312,G__30313,G__30314));
}),((cljs.core.coll_QMARK_(ind))?ind:cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ind)),cljs.core.butlast(zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30315 = options;
var G__30316 = ((cljs.core.coll_QMARK_(ind))?cljs.core.last(ind):ind);
var G__30317 = cljs.core.last(zloc_seq__$1);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30315,G__30316,G__30317) : zprint.zprint.fzprint_STAR_.call(null,G__30315,G__30316,G__30317));
})()], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$1,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left,right], 0));

}

}
}
});
/**
 * Takes zloc-seq, a seq of a zloc, created by (zmap identity zloc),
 *   and returns a style-vec of the result.  Either it fits on one
 *   line, or it is rendered on multiple lines.  You can force multiple
 *   lines with force-nl?. If the seq is empty, returns :noseq, which
 *   is what you give concat-no-nil if you want this to just disappear.
 *   If you want it to do less than everything in the original zloc,
 *   modify the result of (zmap identity zloc) to just contain what
 *   you want to print. ind is either a single indent, or a seq of
 *   indents, one for each element in zloc-seq.  Don't concatenate an
 *   indent/newline on to the beginning of the output from this routine.
 *   Let this routine do it for you, as it needs to know one is there
 *   in order to properly deal with any newlines in the actual stream.
 *   Else you will get two where you only should have one.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__30319 = arguments.length;
switch (G__30319) {
case 5:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc_seq,force_nl_QMARK_,nl_first_QMARK_){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-flow-seq: count zloc-seq:",cljs.core.count(zloc_seq),"nl-first?",nl_first_QMARK_,"zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

var coll_print = zprint.zprint.fzprint_seq(options,ind,zloc_seq);
var one_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(8)], null)], null),coll_print));
var _ = zprint.zprint.log_lines(options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines(options,ind,one_line);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-flow-seq: coll-print:",coll_print], 0))], 0));
} else {
}

var value__16471__auto__ = ((((cljs.core.not(force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line(options,one_line_lines))))?one_line:(((!(cljs.core.empty_QMARK_(coll_print))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,(function (){var G__30320 = options;
var G__30321 = ind;
var G__30322 = coll_print;
var G__30323 = cljs.core.not(nl_first_QMARK_);
return (zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4(G__30320,G__30321,G__30322,G__30323) : zprint.zprint.precede_w_nl.call(null,G__30320,G__30321,G__30322,G__30323));
})()):cljs.core.cst$kw$noseq));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,ind,zloc_seq,null,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc_seq,force_nl_QMARK_){
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,ind,zloc_seq,force_nl_QMARK_,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 5);

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__30325,hindent,findent,zloc){
var map__30326 = p__30325;
var map__30326__$1 = (((((!((map__30326 == null))))?(((((map__30326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30326):map__30326);
var options = map__30326__$1;
var map__30327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30326__$1,caller);
var map__30327__$1 = (((((!((map__30327 == null))))?(((((map__30327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30327):map__30327);
var hang_avoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,cljs.core.cst$kw$hang_DASH_avoid);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30326__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30326__$1,cljs.core.cst$kw$width);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang-one:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))," hindent:",hindent,"findent:",findent], 0))], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$dbg_DASH_hang.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(cljs.core.cst$kw$pdepth.cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,(function (){var G__30330 = (cljs.core.truth_((zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc)))?(zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc)):zloc);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30330) : zprint.zfns.zstring.call(null,G__30330));
})()], 0));
} else {
}

var local_options = ((((cljs.core.not(one_line_QMARK_)) && (cljs.core.not(cljs.core.cst$kw$hang_QMARK_.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$one_DASH_line_QMARK_,true):options);
var hindent__$1 = (function (){var or__4126__auto__ = hindent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return findent;
}
})();
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var hanging = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent__$1,findent)) && (((cljs.core.not(hang_avoid)) || ((hang_count < ((width - hindent__$1) * hang_avoid)))))))?(function (){var G__30331 = zprint.zprint.in_hang(local_options);
var G__30332 = hindent__$1;
var G__30333 = zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30331,G__30332,G__30333) : zprint.zprint.fzprint_STAR_.call(null,G__30331,G__30332,G__30333));
})():null);
var hanging__$1 = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(9)], null)], null),hanging], 0));
var _ = zprint.zprint.log_lines(options,"fzprint-hang-one: hanging:",(hindent__$1 - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines(options,(hindent__$1 - (1)),hanging__$1);

if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.prepend_nl(options,findent,(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc)));
var ___$1 = zprint.zprint.log_lines(options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines], 0)):null);
var ___$3 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hanging__$1], 0)),"flow:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flow], 0))], 0)):null);
var hr_good_QMARK_ = (function (){var and__4115__auto__ = cljs.core.cst$kw$hang_QMARK_.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.good_enough_QMARK_(caller,options,cljs.core.cst$kw$none_DASH_hang_DASH_one,hang_count,(hindent__$1 - findent),hr_lines,fd_lines);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant? or the
 *   supplied constant-pair-fn).  So that (... :a (stuff) :b (bother))
 *   returns 4, since both :a and :b are zconstant? true. This is made
 *   more difficult by having to skip comments along the way as part
 *   of the pair check, but keep track of the ones we skip so the count
 *   is right in the end.  We don't expect any spaces in this but
 *   newlines must be handled, because this seq should have been
 *   produced by zmap or its equivalent.  Returns two things:
 *   [paired-item-count actual-paired-items], where paired-item-count
 *   is the number of things from the end of the seq you have to trim
 *   off to get the constant pairs included, and the actual-paired-items
 *   is the count of the items to be checked against the constant-pair-min
 *   (which is exclusive of comments and newlines).
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(constant_pair_fn,zloc_seq){
var zloc_seq_rev = cljs.core.reverse(zloc_seq);
var element_count = (0);
var paired_element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
var actual_pair_size = (0);
while(true){
var element = cljs.core.first(zloc_seq_rev);
if(cljs.core.empty_QMARK_(zloc_seq_rev)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var comment_or_newline_QMARK_ = (zprint.zprint.zcomment_or_newline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.zcomment_or_newline_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zprint.zcomment_or_newline_QMARK_.call(null,element));
if(cljs.core.truth_(((cljs.core.not(comment_or_newline_QMARK_))?(function (){var and__4115__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(constant_pair_fn)){
return cljs.core.not((cljs.core.truth_((zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zsexpr_QMARK_.call(null,element)))?(function (){var G__30335 = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zsexpr.call(null,element));
return (constant_pair_fn.cljs$core$IFn$_invoke$arity$1 ? constant_pair_fn.cljs$core$IFn$_invoke$arity$1(G__30335) : constant_pair_fn.call(null,G__30335));
})():null));
} else {
return cljs.core.not((zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zconstant_QMARK_.call(null,element)));
}
} else {
return and__4115__auto__;
}
})():false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var G__30336 = cljs.core.next(zloc_seq_rev);
var G__30337 = (element_count + (1));
var G__30338 = (cljs.core.truth_(comment_or_newline_QMARK_)?paired_element_count:(paired_element_count + (1)));
var G__30339 = (cljs.core.truth_(comment_or_newline_QMARK_)?constant_required_QMARK_:cljs.core.not(constant_required_QMARK_));
var G__30340 = (cljs.core.truth_((function (){var and__4115__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(comment_or_newline_QMARK_);
} else {
return and__4115__auto__;
}
})())?(0):(pair_size + (1)));
var G__30341 = (cljs.core.truth_((function (){var and__4115__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(comment_or_newline_QMARK_);
} else {
return and__4115__auto__;
}
})())?(0):(cljs.core.truth_(comment_or_newline_QMARK_)?actual_pair_size:(actual_pair_size + (1))));
zloc_seq_rev = G__30336;
element_count = G__30337;
paired_element_count = G__30338;
constant_required_QMARK_ = G__30339;
pair_size = G__30340;
actual_pair_size = G__30341;
continue;
}
}
break;
}
});
/**
 * Argument is a zloc-seq.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not an
 *   empty seq.  This will largely ignore newlines and comments.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__30342,zloc_seq){
var map__30343 = p__30342;
var map__30343__$1 = (((((!((map__30343 == null))))?(((((map__30343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30343):map__30343);
var options = map__30343__$1;
var map__30344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30343__$1,caller);
var map__30344__$1 = (((((!((map__30344 == null))))?(((((map__30344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30344):map__30344);
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30344__$1,cljs.core.cst$kw$constant_DASH_pair_QMARK_);
var constant_pair_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30344__$1,cljs.core.cst$kw$constant_DASH_pair_DASH_fn);
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30344__$1,cljs.core.cst$kw$constant_DASH_pair_DASH_min);
if(cljs.core.truth_(constant_pair_QMARK_)){
var vec__30347 = zprint.zprint.count_constant_pairs(constant_pair_fn,zloc_seq);
var paired_item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30347,(0),null);
var actual_paired_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30347,(1),null);
var non_paired_item_count = (cljs.core.count(zloc_seq) - paired_item_count);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count,"paired-item-count:",paired_item_count,"actual-paired-items:",actual_paired_items], 0)):null);
var pair_seq = (((actual_paired_items >= constant_pair_min))?cljs.core.drop.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,zloc_seq):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count(zloc_seq)], null);
}
});
/**
 * If this zloc is a comment or a newline, return true.
 */
zprint.zprint.zcomment_or_newline_QMARK_ = (function zprint$zprint$zcomment_or_newline_QMARK_(zloc){
var or__4126__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znewline_QMARK_.call(null,zloc));
}
});
/**
 * Given a style-vec, ensure it starts with a newline.  If it doesn't,
 *   then put one in.  We could take the whole newline, but the indent is
 *   really the only unique thing.
 */
zprint.zprint.ensure_start_w_nl = (function zprint$zprint$ensure_start_w_nl(ind,style_vec){
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(style_vec),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,cljs.core.cst$kw$indent)))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(6)], null)], null),style_vec], 0));
}
});
/**
 * Given a style-vec, ensure it ends with a newline.  If it doesn't,
 *   then put one in.
 */
zprint.zprint.ensure_end_w_nl = (function zprint$zprint$ensure_end_w_nl(ind,style_vec){
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(style_vec),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,cljs.core.cst$kw$indent)))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(7)], null)], null)], 0));
}
});
/**
 * zloc-seq is a seq of zlocs of a collection.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc-seq if it exists.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__30351 = arguments.length;
switch (G__30351) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__30352,hindent,findent,zloc_seq,fn_style,zloc_count){
var map__30353 = p__30352;
var map__30353__$1 = (((((!((map__30353 == null))))?(((((map__30353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30353):map__30353);
var options = map__30353__$1;
var map__30354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,caller);
var map__30354__$1 = (((((!((map__30354 == null))))?(((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30354):map__30354);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$hang_QMARK_);
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$constant_DASH_pair_QMARK_);
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$constant_DASH_pair_DASH_min);
var hang_avoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$hang_DASH_avoid);
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$hang_DASH_expand);
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$hang_DASH_diff);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,cljs.core.cst$kw$respect_DASH_nl_QMARK_);
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,cljs.core.cst$kw$dbg_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,cljs.core.cst$kw$width);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_DASH_hang.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(cljs.core.cst$kw$pdepth.cljs$core$IFn$_invoke$arity$1(options)),"hr:",(function (){var G__30357 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30357) : zprint.zfns.zstring.call(null,G__30357));
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang-remaining first:",(function (){var G__30358 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30358) : zprint.zfns.zstring.call(null,G__30358));
})(),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_,"(count zloc-seq):",cljs.core.count(zloc_seq)], 0))], 0));
} else {
}

var seq_right = zloc_seq;
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(zloc_count,seq_right):seq_right);
var vec__30359 = zprint.zprint.constant_pair(caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(0),null);
var non_paired_item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(1),null);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count(pair_seq)], 0)):null);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: first hang?",hang_QMARK_,"hang-avoid",hang_avoid,"findent:",findent,"hindent:",hindent,"(count seq-right):",cljs.core.count(seq_right__$1),"thing:",(cljs.core.truth_(hang_avoid)?((width - hindent) * hang_avoid):null)], 0)):null);
var hang_QMARK___$1 = (function (){var and__4115__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent)) && (((cljs.core.not(hang_avoid)) || ((cljs.core.count(seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__4115__auto__;
}
})();
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: second hang?",hang_QMARK___$1], 0)):null);
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not(pair_seq))?zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.in_hang(options),hindent,seq_right__$1,cljs.core.cst$kw$force_DASH_nl,null):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var value__16471__auto__ = zprint.zprint.ensure_end_w_nl(hindent,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.not_rightmost(zprint.zprint.in_hang(options)),hindent,cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1),cljs.core.cst$kw$force_DASH_nl,null));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
})(),(function (){var value__16471__auto__ = zprint.zprint.fzprint_pairs(zprint.zprint.in_hang(options),hindent,pair_seq);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__16471__auto__], 0))], 0));
} else {
}

return value__16471__auto__;
})()], 0)):zprint.zprint.fzprint_pairs(zprint.zprint.in_hang(options),hindent,pair_seq))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines(options,hindent,hang_result)], null);
})();
var vec__30362 = zprint.zprint.zat(options,hanging);
var hanging__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30362,(0),null);
var vec__30365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30362,(1),null);
var hanging_line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30365,(0),null);
var hanging_lines = vec__30365;
var hang_count = cljs.core.count(seq_right__$1);
var flow_QMARK_ = cljs.core.not(zprint.zprint.use_hang_QMARK_(caller,options,hindent,hang_count,hanging_line_count));
var flow = ((flow_QMARK_)?(function (){var flow_result = ((cljs.core.not(pair_seq))?zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,findent,seq_right__$1,cljs.core.cst$kw$force_DASH_nl,cljs.core.cst$kw$nl_DASH_first):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.ensure_end_w_nl(findent,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.not_rightmost(options),findent,cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1),cljs.core.cst$kw$force_DASH_nl,cljs.core.cst$kw$nl_DASH_first)),zprint.zprint.fzprint_pairs(options,findent,pair_seq)], 0)):zprint.zprint.fzprint_pairs(options,findent,pair_seq)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines(options,findent,flow_result)], null);
})():null);
var vec__30368 = (cljs.core.truth_(flow)?zprint.zprint.zat(options,flow):null);
var flow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30368,(0),null);
var flow_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30368,(1),null);
var ___$3 = zprint.zprint.log_lines(options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$4 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count], 0)):null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines], 0));
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hang-count = 0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq))], 0));
} else {
}
} else {
}

zprint.zprint.log_lines(options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_((function (){var and__4115__auto__ = hanging_lines;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(flow_lines);
} else {
return and__4115__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_(hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(10)], null)], null),hanging__$1], 0));
}
} else {
if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_(caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,((((cljs.core.not(pair_seq)) && ((cljs.core.first(flow_lines) > (1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(flow_lines) - (1)),cljs.core.second(flow_lines),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flow_lines,(2))], null):flow_lines)))){
if(zprint.zprint.first_nl_QMARK_(hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(10)], null)], null),hanging__$1], 0));
}
} else {
return zprint.zprint.ensure_start_w_nl(findent,flow__$1);
}
} else {
return null;
}
}
}));

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,options,hindent,findent,zloc,fn_style,null);
}));

(zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7);

/**
 * Get the zloc seq, with or without newlines, as indicated by the options.
 */
zprint.zprint.fzprint_get_zloc_seq = (function zprint$zprint$fzprint_get_zloc_seq(caller,options,zloc){
var caller_options = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var zloc_seq = (cljs.core.truth_(cljs.core.cst$kw$respect_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1(caller_options))?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(cljs.core.cst$kw$respect_DASH_bl_QMARK_.cljs$core$IFn$_invoke$arity$1(caller_options))?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-get-zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

return zloc_seq;
});
/**
 * Given an zloc, is it a newline or a comment?
 */
zprint.zprint.newline_or_comment_QMARK_ = (function zprint$zprint$newline_or_comment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
var zloc_tag = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_tag,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_tag,cljs.core.cst$kw$comment)));
} else {
return null;
}
});
/**
 * Given a seq of style-vecs, look at the last one, and if it is a
 *   :newline, then remove it.  But the last one might be a single
 *   one, in which case we will remove the whole thing, and it might be
 *   the last one in a sequence, in which case we will remove just that
 *   one.  If there is nothing left, return [[["" :none :none]]].
 */
zprint.zprint.remove_last_newline = (function zprint$zprint$remove_last_newline(ssv){
var last_style_vec = cljs.core.last(ssv);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(last_style_vec),(2)),cljs.core.cst$kw$newline)))){
return ssv;
} else {
var last_len = cljs.core.count(last_style_vec);
var total_len = cljs.core.count(ssv);
var remove_one = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(ssv),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_len,(1)))?cljs.core.PersistentVector.EMPTY:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.butlast(last_style_vec)],null))));
if(cljs.core.empty_QMARK_(remove_one)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$none,cljs.core.cst$kw$none], null)], null)], null);
} else {
return remove_one;
}
}
});
/**
 * Given a single style-vec, look at the last element, and if it is a
 *   :newline, remove it.  If there is nothing left, return :noseq
 */
zprint.zprint.remove_one_newline = (function zprint$zprint$remove_one_newline(style_vec){
var last_style_vec = cljs.core.last(style_vec);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(last_style_vec,(2)),cljs.core.cst$kw$newline)))){
return style_vec;
} else {
var remaining = cljs.core.butlast(style_vec);
if(cljs.core.empty_QMARK_(remaining)){
return cljs.core.cst$kw$noseq;
} else {
return remaining;
}
}
});
/**
 * Given [[[";stuff" :none :comment]]] or 
 *   [[[";bother" :none :comment-inline 1]]] add ["
 * " :none :newline]
 *   to the inside of it.
 */
zprint.zprint.add_newline_to_comment = (function zprint$zprint$add_newline_to_comment(indent,fzprint_STAR__return){
var the_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fzprint_STAR__return),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_type,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_type,cljs.core.cst$kw$comment_DASH_inline)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fzprint_STAR__return,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(indent))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$newline,(1)], null)], null));
} else {
return fzprint_STAR__return;
}
});
/**
 * Given a zloc-seq, gather newlines and comments up to the next
 *   zloc into a seq.  Returns [seq next-zloc next-count].
 */
zprint.zprint.gather_up_to_next_zloc = (function zprint$zprint$gather_up_to_next_zloc(zloc_seq){
var nloc_seq = zloc_seq;
var out = cljs.core.PersistentVector.EMPTY;
var next_count = (0);
while(true){
if(cljs.core.not(zprint.zprint.newline_or_comment_QMARK_(cljs.core.first(nloc_seq)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.first(nloc_seq),next_count], null);
} else {
var G__30372 = cljs.core.next(nloc_seq);
var G__30373 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(nloc_seq));
var G__30374 = (next_count + (1));
nloc_seq = G__30372;
out = G__30373;
next_count = G__30374;
continue;
}
break;
}
});
/**
 * Using the information returned from fzprint-up-to-first-zloc or
 *   fzprint-up-to-next-zloc, find the next zloc and return 
 *   [pre-next-style-vec next-zloc next-count zloc-seq]
 */
zprint.zprint.fzprint_up_to_next_zloc = (function zprint$zprint$fzprint_up_to_next_zloc(caller,options,ind,p__30375){
var vec__30376 = p__30375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(1),null);
var current_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(3),null);
var next_data = vec__30376;
var starting_count = (current_count + (1));
var nloc_seq = cljs.core.nthnext(zloc_seq,starting_count);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-up-to-next-zloc: starting-count:",starting_count,"zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options),cljs.core.cst$kw$zipper)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noseq,cljs.core.first(nloc_seq),starting_count,zloc_seq], null);
} else {
var vec__30379 = zprint.zprint.gather_up_to_next_zloc(nloc_seq);
var pre_next_zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30379,(0),null);
var next_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30379,(1),null);
var next_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30379,(2),null);
var next_count__$1 = (starting_count + next_count);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-up-to-next-zloc: next-count:",next_count__$1,"pre-next-zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,pre_next_zloc_seq)], 0))], 0));
} else {
}

if(cljs.core.empty_QMARK_(pre_next_zloc_seq)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noseq,next_zloc,next_count__$1,zloc_seq], null);
} else {
var coll_print = zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,ind,pre_next_zloc_seq);
var coll_print__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll_print);
var coll_print__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0)))?zprint.zprint.remove_last_newline(coll_print__$1):coll_print__$1);
var coll_out = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,coll_print__$2);
var coll_out__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0)))?(function (){var first_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll_out),(2));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_type,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_type,cljs.core.cst$kw$comment_DASH_inline)));
})():false))?zprint.zprint.ensure_start_w_nl(ind,coll_out):coll_out);
var coll_out__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0)))?coll_out__$1:zprint.zprint.ensure_end_w_nl(ind,coll_out__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_out__$2,next_zloc,next_count__$1,zloc_seq], null);
}
}
});
/**
 * Returns [pre-first-style-vec first-zloc first-count zloc-seq], where
 *   pre-first-style-vec will be :noseq if there isn't anything, and first-count
 *   is what you give to nthnext to get to the first-zloc in zloc-seq.
 */
zprint.zprint.fzprint_up_to_first_zloc = (function zprint$zprint$fzprint_up_to_first_zloc(caller,options,ind,zloc){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options),cljs.core.cst$kw$zipper)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noseq,cljs.core.first(zloc),(0),zloc], null);
} else {
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq(caller,options,zloc);
return zprint.zprint.fzprint_up_to_next_zloc(caller,options,ind,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(-1),zloc_seq], null));
}
});
/**
 * Using return from fzprint-up-to-first-zloc or fzprint-up-to-next-zloc,
 *   [pre-next-style-vec next-zloc next-count zloc-seq], return a zloc-seq
 *   pointer to just beyond the specific zloc which was found by the
 *   fzprint-up-to-first or fzprint-up-to-next call.  You don't give this
 *   a number, you give it the data structure from the thing that you found.
 */
zprint.zprint.get_zloc_seq_right = (function zprint$zprint$get_zloc_seq_right(p__30382){
var vec__30383 = p__30382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(1),null);
var next_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383,(3),null);
var input_data = vec__30383;
if((next_count >= cljs.core.count(zloc_seq))){
throw (new Error(["get-zloc-seq-right input data inconsistent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_data)].join('')));
} else {
var zloc_seq__$1 = cljs.core.nthnext(zloc_seq,(next_count + (1)));
return zloc_seq__$1;
}
});
/**
 * Is this a newline or equivalent?  Comments and newlines are both
 *   newlines for the purposed of this routine.
 */
zprint.zprint.at_newline_QMARK_ = (function zprint$zprint$at_newline_QMARK_(zloc){
var this_tag = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_tag,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_tag,cljs.core.cst$kw$newline)));
});
/**
 * Given a zloc that is down inside of a collection, presumably
 *   a list, return a vector containing the number of printing elements
 *   we had to traverse to get to it as well as the newline.
 */
zprint.zprint.next_newline = (function zprint$zprint$next_newline(zloc){
var nloc = zloc;
var index = (0);
while(true){
var next_right = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
if(cljs.core.truth_(next_right)){
if(zprint.zprint.at_newline_QMARK_(nloc)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
} else {
var G__30386 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__30387 = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(index + (1)):index);
nloc = G__30386;
index = G__30387;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
}
break;
}
});
/**
 * Return the next actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.next_actual = (function zprint$zprint$next_actual(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not(nloc)){
return nloc;
} else {
var next_nloc = zprint.zutil.zrightnws(nloc);
var next_tag = (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(next_nloc) : zprint.zutil.tag.call(null,next_nloc));
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_tag,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_tag,cljs.core.cst$kw$comment)))))){
return next_nloc;
} else {
var G__30388 = next_nloc;
nloc = G__30388;
continue;
}
}
break;
}
});
/**
 * Return the first actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.first_actual = (function zprint$zprint$first_actual(zloc){
if(zprint.zprint.at_newline_QMARK_(zloc)){
return zprint.zprint.next_actual(zloc);
} else {
return zloc;
}
});
/**
 * Should we hang this zloc, or flow it.  We assume that we are at
 *   the start of the collection (though this could be generalized to
 *   deal with other starting locations easily enough).  Return true
 *   if we should hang it based just on the information in the zloc
 *   itself.  The criteria are: If there is a newline after the second
 *   thing in the zloc, and the amount of space prior to the third thing
 *   is the same as the amount of space prior to the second thing, then
 *   the incoming zloc was hung and we should do the same. Of course, it
 *   would also only be hung if the second thing was on the same line as
 *   the first thing.
 */
zprint.zprint.hang_zloc_QMARK_ = (function zprint$zprint$hang_zloc_QMARK_(zloc){
var zloc__$1 = zprint.zprint.first_actual(zloc);
var vec__30389 = zprint.zprint.next_newline(zloc__$1);
var count_prior_to_newline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(0),null);
var newline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(1),null);
if((count_prior_to_newline < (2))){
return false;
} else {
var second_element = zprint.zutil.zrightnws(((zprint.zutil.whitespace_QMARK_(zloc__$1))?zprint.zutil.zrightnws(zloc__$1):zloc__$1));
var second_indent = zprint.comment.length_before(second_element);
var third_element = zprint.zprint.next_actual(second_element);
var third_indent = zprint.comment.length_before(third_element);
var and__4115__auto__ = second_element;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = third_element;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(second_indent,third_indent);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}
});
/**
 * Take a style-vec that was once output from indent-zmap, and fix
 *   up all of the :indent elements in it by adding (- actual-ind ind)
 *   to them.  If we find a multiple thing in here, call indent-shift
 *   recursively with the ind and cur-ind that is approprite.  All of
 *   the actual indents are correct already -- all we are doing is
 *   setting up their base.  There is no attempt to determine if we
 *   are exceeding any configured width.
 */
zprint.zprint.indent_shift = (function zprint$zprint$indent_shift(caller,options,ind,actual_ind,svec){
var shift_ind = actual_ind;
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: ind:",ind,"actual-ind:",actual_ind,"shift-ind:",shift_ind,"svec:",svec], 0))], 0));
} else {
}

var cur_seq = svec;
var cur_ind = actual_ind;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
return out;
} else {
var this_seq = cljs.core.first(cur_seq);
var new_seq = ((cljs.core.vector_QMARK_(cljs.core.first(this_seq)))?(zprint.zprint.indent_shift.cljs$core$IFn$_invoke$arity$5 ? zprint.zprint.indent_shift.cljs$core$IFn$_invoke$arity$5(caller,options,ind,cur_ind,this_seq) : zprint.zprint.indent_shift.call(null,caller,options,ind,cur_ind,this_seq)):(function (){var vec__30401 = this_seq;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(2),null);
var next_seq = cljs.core.first(cljs.core.next(cur_seq));
var this_shift = (cljs.core.truth_((function (){var and__4115__auto__ = next_seq;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core.vector_QMARK_(cljs.core.first(next_seq))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(next_seq,(2)),cljs.core.cst$kw$indent)));
} else {
return and__4115__auto__;
}
})())?(0):shift_ind);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$indent)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(this_shift))].join(''),color,type,(42)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,type,shift_ind], null);
} else {
return this_seq;

}
}
})());
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: cur-ind:",cur_ind,"this-seq:",this_seq,"new-seq:",new_seq], 0))], 0)):null);
var vec__30398 = zprint.zprint.style_lines(options,cur_ind,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seq], null));
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(2),null);
var last_width = cljs.core.last(lines);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: last-width:",last_width,"new-seq:",new_seq], 0))], 0));
} else {
}

var G__30404 = cljs.core.next(cur_seq);
var G__30405 = last_width;
var G__30406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_seq);
cur_seq = G__30404;
cur_ind = G__30405;
out = G__30406;
continue;
}
break;
}
});
/**
 * Implement :indent-only?.  This routine is the central one through
 *   which all :indent-only? processing flows, and replaces all of the
 *   detailed logic in fzprint-list*, fzprint-vec*, and fzprint-map*.
 *   This is called directly by fzprint-vec*, which handles both vectors
 *   and sets, and through fzprint-indent by fzprint-list* and
 *   fzprint-map*.  Thus, all of the data structures get their
 *   :indent-only? processing handled by ident-zmap.  coll-print is
 *   the output from fzprint-seq, which is a style-vec in the making
 *   without spacing, but with extra [] around the elements.  Everything
 *   is based off of ind, and we know nothing to the left of that.
 *   ind must be the left end of everything, not the right of l-str!
 *   The actual-ind is to the right of l-str.  When we get a newline,
 *   replace any spaces after it with our own, and that would be to
 *   bring it to ind + indent.  
 */
zprint.zprint.indent_zmap = (function zprint$zprint$indent_zmap(var_args){
var G__30408 = arguments.length;
switch (G__30408) {
case 7:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__30409,ind,actual_ind,coll_print,indent,first_indent_only_QMARK_){
var map__30410 = p__30409;
var map__30410__$1 = (((((!((map__30410 == null))))?(((((map__30410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30410):map__30410);
var options = map__30410__$1;
var map__30411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30410__$1,caller);
var map__30411__$1 = (((((!((map__30411 == null))))?(((((map__30411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30411):map__30411);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30411__$1,cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30410__$1,cljs.core.cst$kw$width);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30410__$1,cljs.core.cst$kw$rightcnt);
var coll_print__$1 = (zprint.zprint.merge_fzprint_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.merge_fzprint_seq.cljs$core$IFn$_invoke$arity$1(coll_print) : zprint.zprint.merge_fzprint_seq.call(null,coll_print));
var last_index = (cljs.core.count(coll_print__$1) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var actual_indent = (ind + indent);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-zmap: ind:",ind,"actual-ind:",actual_ind,"first-indent-only?",first_indent_only_QMARK_,"indent:",indent,"actual-indent:",actual_indent,"coll-print:",coll_print__$1], 0))], 0));
} else {
}

var cur_seq = coll_print__$1;
var cur_ind = actual_ind;
var index = (0);
var beginning_QMARK_ = true;
var l_str_indent_QMARK_ = true;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
return out;
} else {
var this_seq = cljs.core.first(cur_seq);
if(cljs.core.truth_(this_seq)){
var multi_QMARK_ = (cljs.core.count(this_seq) > (1));
var _ = zprint.zprint.log_lines(options,"indent-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-zmap loop: cur-ind:",cur_ind,"multi?",multi_QMARK_,"(count this-seq):",cljs.core.count(this_seq),"this-seq:",this_seq,"out:",out], 0))], 0)):null);
var this_seq__$1 = ((multi_QMARK_)?zprint.zprint.indent_shift(caller,options,actual_ind,cur_ind,this_seq):this_seq);
var vec__30417 = zprint.zprint.style_lines(options,cur_ind,this_seq__$1);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30417,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30417,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30417,(2),null);
var last_width = cljs.core.last(lines);
var thetype = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(this_seq__$1),(2));
var len = (last_width - cur_ind);
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"linecnt:",linecnt,"last-width:",last_width,"len:",len,"type:",thetype], 0)):null);
var len__$1 = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = len;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,cljs.core.cst$kw$newline);
var comma_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,cljs.core.cst$kw$comma);
var isempty_QMARK_ = cljs.core.empty_QMARK_(cljs.core.first(cljs.core.first(this_seq__$1)));
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,cljs.core.cst$kw$comment_DASH_inline)));
var l_str_indent_QMARK___$1 = ((l_str_indent_QMARK_) && (((comment_QMARK_) || (newline_QMARK_))));
var actual_indent__$1 = (cljs.core.truth_((((index > (0)))?first_indent_only_QMARK_:false))?ind:(ind + indent));
var width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = ((cur_ind + len__$1) <= width__$1);
var new_ind = ((newline_QMARK_)?actual_indent__$1:((cur_ind + (1)) + len__$1)
);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["------ this-seq:",this_seq__$1,"lines:",lines,"linecnt:",linecnt,"multi?",multi_QMARK_,"thetype:",thetype,"newline?:",newline_QMARK_,"comment?:",comment_QMARK_,"comma?:",comma_QMARK_,"l-str-indent?:",l_str_indent_QMARK___$1,"first-indent-only?",first_indent_only_QMARK_,"actual-indent:",actual_indent__$1,"index:",index,"beginning?:",beginning_QMARK_,"max-width:",max_width,"last-width:",last_width,"len:",len__$1,"cur-ind:",cur_ind,"isempty?:",isempty_QMARK_,"new-ind:",new_ind,"width:",width__$1,"fit?",fit_QMARK_], 0))], 0));
} else {
}

var G__30421 = cljs.core.next(cur_seq);
var G__30422 = new_ind;
var G__30423 = (index + (1));
var G__30424 = ((((isempty_QMARK_) && (beginning_QMARK_))) || (newline_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,cljs.core.cst$kw$indent)));
var G__30425 = l_str_indent_QMARK___$1;
var G__30426 = ((isempty_QMARK_)?out:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_seq = cljs.core.first(cljs.core.next(cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(next_seq)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(next_seq),(2)),cljs.core.cst$kw$newline):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return "";
} else {
return zprint.comment.blanks(((l_str_indent_QMARK___$1)?actual_ind:actual_indent__$1));
}
})())].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(12)], null)], null):(((index === (0)))?this_seq__$1:((((beginning_QMARK_) || (comma_QMARK_)))?this_seq__$1:zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(12)], null)], null),this_seq__$1], 0)))
))));
cur_seq = G__30421;
cur_ind = G__30422;
index = G__30423;
beginning_QMARK_ = G__30424;
l_str_indent_QMARK_ = G__30425;
out = G__30426;
continue;
} else {
return null;
}
}
break;
}
}));

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,ind,actual_ind,coll_print,indent){
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7(caller,options,ind,actual_ind,coll_print,indent,null);
}));

(zprint.zprint.indent_zmap.cljs$lang$maxFixedArity = 7);

zprint.zprint.hang_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hang,null,cljs.core.cst$kw$none_DASH_body,null,cljs.core.cst$kw$none,null], null), null);
zprint.zprint.flow_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.cst$kw$gt3_DASH_force_DASH_nl,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg1_DASH_body,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$force_DASH_nl,null,cljs.core.cst$kw$flow,null,cljs.core.cst$kw$noarg1,null,cljs.core.cst$kw$noarg1_DASH_body,null,cljs.core.cst$kw$gt2_DASH_force_DASH_nl,null,cljs.core.cst$kw$force_DASH_nl_DASH_body,null,cljs.core.cst$kw$arg2_DASH_fn,null,cljs.core.cst$kw$binding,null,cljs.core.cst$kw$arg1_DASH_force_DASH_nl,null,cljs.core.cst$kw$hang,null,cljs.core.cst$kw$flow_DASH_body,null,cljs.core.cst$kw$arg1,null], null), null);
/**
 * Given a vector of vectors, decide if we should merge these individually
 *   into the top level vector.
 */
zprint.zprint.newline_seq_QMARK_ = (function zprint$zprint$newline_seq_QMARK_(newline_vec){
var starts_with_nl_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30427_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.first(p1__30427_SHARP_),"\n");
}),newline_vec);
var true_seq = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(starts_with_nl_vec);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(true_seq),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(true_seq),true)));
});
/**
 * Given the output from fzprint-seq, which is a seq of the
 *   output of fzprint*, apply a function to each of them that has
 *   more than one element (since less has no meaning) and when the
 *   function returns true, merge the vector in as individual elements.
 */
zprint.zprint.merge_fzprint_seq = (function zprint$zprint$merge_fzprint_seq(fzprint_seq_vec){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30429_SHARP_,p2__30428_SHARP_){
if(zprint.zprint.newline_seq_QMARK_(p2__30428_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__30429_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p2__30428_SHARP_)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30429_SHARP_,p2__30428_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,fzprint_seq_vec));
});
/**
 * This function assumes that :indent-only? was set for the caller
 *   in the options (since anything else doesn't make sense).  It takes
 *   a zloc and the ind, which is where we are on the line this point,
 *   and will process the zloc to include any newlines.  Of course we
 *   have to have all of the white space in the zloc too, since we
 *   need to ask some questions about what we are starting with at
 *   some point.  We don't add newlines and we let the newlines that
 *   are in there do their thing.  We might add newlines if we move
 *   beyond the right margin, but for now, we don't (and it isn't
 *   entirely clear how or if that would work).  This routine has to
 *   make decisions about the indent, that is whether to hang or flow
 *   the expression. It does that based on what was done in the input
 *   if the configuration allows.
 */
zprint.zprint.fzprint_indent = (function zprint$zprint$fzprint_indent(var_args){
var G__30431 = arguments.length;
switch (G__30431) {
case 9:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 8:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,first_indent_only_QMARK_){
var flow_indent = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var flow_indent__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,cljs.core.cst$kw$map))?cljs.core.count(l_str):flow_indent);
var l_str_len = cljs.core.count(l_str);
var flow_indent__$2 = (((((flow_indent__$1 > l_str_len)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,cljs.core.cst$kw$list))))?(cljs.core.truth_(arg_1_indent)?flow_indent__$1:l_str_len):flow_indent__$1);
var actual_ind = (ind + l_str_len);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: caller:",caller,"l-str-len:",l_str_len,"ind:",ind,"fn-style:",fn_style,"arg-1-indent:",arg_1_indent,"flow-indent:",flow_indent__$2,"actual-ind:",actual_ind,"comma?",cljs.core.cst$kw$comma_QMARK_.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)))], 0))], 0)):null);
var zloc_seq = (cljs.core.truth_(cljs.core.cst$kw$comma_QMARK_.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options))))?(zprint.zfns.zmap_w_nl_comma.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl_comma.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl_comma.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)));
var coll_print = zprint.zprint.fzprint_seq(options,ind,zloc_seq);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: coll-print:",coll_print], 0))], 0)):null);
var indent_only_style = cljs.core.cst$kw$indent_DASH_only_DASH_style.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var already_hung_QMARK_ = (cljs.core.truth_((function (){var and__4115__auto__ = indent_only_style;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indent_only_style,cljs.core.cst$kw$input_DASH_hang);
} else {
return and__4115__auto__;
}
})())?zprint.zprint.hang_zloc_QMARK_((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc))):null);
var raw_indent = (cljs.core.truth_((function (){var and__4115__auto__ = arg_1_indent;
if(cljs.core.truth_(and__4115__auto__)){
return already_hung_QMARK_;
} else {
return and__4115__auto__;
}
})())?(arg_1_indent - ind):flow_indent__$2);
var indent = raw_indent;
var coll_print_contains_nil_QMARK_ = zprint.zprint.contains_nil_QMARK_(coll_print);
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"ind:",ind,"fn-style:",fn_style,"indent-only-style:",indent_only_style,"already-hung?:",already_hung_QMARK_,"arg-1-indent:",arg_1_indent,"l-str-len:",cljs.core.count(l_str),"actual-ind:",actual_ind,"raw-indent:",raw_indent,"coll-print-contains-nil?:",coll_print_contains_nil_QMARK_,"indent:",indent], 0))], 0)):null);
var coll_print__$1 = (cljs.core.truth_(coll_print_contains_nil_QMARK_)?null:coll_print);
var output = zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7(caller,options,ind,actual_ind,coll_print__$1,indent,first_indent_only_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: output:",output], 0))], 0));
} else {
}

return output;
}));

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent){
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9(caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,null);
}));

(zprint.zprint.fzprint_indent.cljs$lang$maxFixedArity = 9);

/**
 * Find the location, counting from zero, and counting every element 
 *   in the seq, of the first zthing?.  Return its index if it is found, 
 *   nil if not.
 */
zprint.zprint.zfind_seq = (function zprint$zprint$zfind_seq(zthing_QMARK_,zloc_seq){
var nloc = zloc_seq;
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((function (){var G__30433 = cljs.core.first(nloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30433) : zthing_QMARK_.call(null,G__30433));
})())){
return i;
} else {
var G__30434 = cljs.core.next(nloc);
var G__30435 = (i + (1));
nloc = G__30434;
i = G__30435;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$arg2_DASH_pair,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg1_DASH_body,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$pair_DASH_fn,null,cljs.core.cst$kw$noarg1_DASH_body,null,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,null,cljs.core.cst$kw$arg2_DASH_fn,null,cljs.core.cst$kw$binding,null,cljs.core.cst$kw$flow_DASH_body,null,cljs.core.cst$kw$arg1_DASH__GT_,null,cljs.core.cst$kw$none_DASH_body,null], null), null);
zprint.zprint.body_map = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$arg1_DASH_pair,cljs.core.cst$kw$none_DASH_body,cljs.core.cst$kw$none,cljs.core.cst$kw$flow_DASH_body,cljs.core.cst$kw$flow,cljs.core.cst$kw$noarg1_DASH_body,cljs.core.cst$kw$noarg1,cljs.core.cst$kw$force_DASH_nl_DASH_body,cljs.core.cst$kw$force_DASH_nl], null);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$noarg1,null,cljs.core.cst$kw$arg1_DASH__GT_,null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$arg1,cljs.core.cst$kw$none,cljs.core.cst$kw$arg1_DASH_pair,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$arg1_DASH_extend,cljs.core.cst$kw$extend,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2_DASH_pair,cljs.core.cst$kw$arg1_DASH_pair], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_((zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1(fn_type) : zprint.zprint.noarg1_set.call(null,fn_type)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$no_DASH_arg1_QMARK_,true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$pair,cljs.core.cst$kw$arg1_DASH_pair,cljs.core.cst$kw$pair,cljs.core.cst$kw$arg2_DASH_pair,cljs.core.cst$kw$pair,cljs.core.cst$kw$extend,cljs.core.cst$kw$extend,cljs.core.cst$kw$binding,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_extend,cljs.core.cst$kw$extend,cljs.core.cst$kw$arg2_DASH_extend,cljs.core.cst$kw$extend,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$pair], null);
/**
 * Given an options map, get the respect-nl?, respect-bl? and indent-only?
 *   options from the caller's options, and if the caller doesn't define these,
 *   use the values from the backup section of the options map. Return
 *   [respect-nl? respect-bl? indent-only?]
 */
zprint.zprint.get_respect_indent = (function zprint$zprint$get_respect_indent(options,caller,backup){
var caller_options = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$undef);
var respect_bl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$undef);
var indent_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,cljs.core.cst$kw$indent_DASH_only_QMARK_,cljs.core.cst$kw$undef);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(respect_nl_QMARK_,cljs.core.cst$kw$undef))?respect_nl_QMARK_:cljs.core.cst$kw$respect_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options)))),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(respect_bl_QMARK_,cljs.core.cst$kw$undef))?respect_bl_QMARK_:cljs.core.cst$kw$respect_DASH_bl_QMARK_.cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options)))),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indent_only_QMARK_,cljs.core.cst$kw$undef))?indent_only_QMARK_:cljs.core.cst$kw$indent_DASH_only_QMARK_.cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options))))], null);
});
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__30436,len,fn_style){
var map__30437 = p__30436;
var map__30437__$1 = (((((!((map__30437 == null))))?(((((map__30437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30437):map__30437);
var options = map__30437__$1;
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,cljs.core.cst$kw$fn_DASH_force_DASH_nl);
var fn_gt2_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,cljs.core.cst$kw$fn_DASH_gt2_DASH_force_DASH_nl);
var fn_gt3_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,cljs.core.cst$kw$fn_DASH_gt3_DASH_force_DASH_nl);
return cljs.core.not((function (){var or__4126__auto__ = (fn_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_force_nl.call(null,fn_style));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (((len > (3)))?(fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt2_force_nl.call(null,fn_style)):false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (((len > (4)))?(fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt3_force_nl.call(null,fn_style)):false);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var temp__5718__auto__ = (zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1(fn_style) : zprint.zprint.fn_style__GT_caller.call(null,fn_style));
if(cljs.core.truth_(temp__5718__auto__)){
var future_caller = temp__5718__auto__;
var caller_map = (future_caller.cljs$core$IFn$_invoke$arity$1 ? future_caller.cljs$core$IFn$_invoke$arity$1(options) : future_caller.call(null,options));
var or__4126__auto____$3 = cljs.core.cst$kw$flow_QMARK_.cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return cljs.core.cst$kw$force_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * If the (caller options) has a value for :return-altered-zipper, then
 *   examine the value.  It should be [<depth> <symbol> <fn>]. 
 *   If the <depth> is nil, any depth will do. If the
 *   <symbol> is nil, any symbol will do.  If the <depth> and <symbol>
 *   match, then the <fn> is called as (fn caller options zloc), and must
 *   return a new zloc.
 */
zprint.zprint.modify_zloc = (function zprint$zprint$modify_zloc(caller,options,zloc){
var vec__30439 = cljs.core.cst$kw$return_DASH_altered_DASH_zipper.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30439,(0),null);
var trigger_symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30439,(1),null);
var modify_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30439,(2),null);
var return_altered_zipper_value = vec__30439;
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"modify-zloc caller:",caller,"ztype",cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options),"return-altered-zipper-value:",return_altered_zipper_value], 0));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options),cljs.core.cst$kw$zipper)) || ((return_altered_zipper_value == null)))){
return zloc;
} else {
var call_fn_QMARK_ = (((((depth == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(options),depth))))?((((cljs.core.not(trigger_symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trigger_symbol,(function (){var G__30449 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__30449) : zprint.zfns.zsexpr.call(null,G__30449));
})()))))?modify_fn:false):false);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"modify-zloc: zloc",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"call-fn?",call_fn_QMARK_], 0));
} else {
}

if(cljs.core.truth_(call_fn_QMARK_)){
var return$ = (modify_fn.cljs$core$IFn$_invoke$arity$3 ? modify_fn.cljs$core$IFn$_invoke$arity$3(caller,options,zloc) : modify_fn.call(null,caller,options,zloc));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"modify-zloc return:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(return$) : zprint.zfns.zstring.call(null,return$))], 0));
} else {
}

return return$;
} else {
return zloc;
}
}
});
/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list or :vector-fn.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__30451,ind,zloc){
var map__30452 = p__30451;
var map__30452__$1 = (((((!((map__30452 == null))))?(((((map__30452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30452):map__30452);
var options = map__30452__$1;
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$fn_DASH_map);
var user_fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$user_DASH_fn_DASH_map);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var fn_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$fn_DASH_style);
var no_arg1_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$no_DASH_arg1_QMARK_);
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,cljs.core.cst$kw$fn_DASH_force_DASH_nl);
var max_length = zprint.zprint.get_max_length(options);
var zloc__$1 = zprint.zprint.modify_zloc(caller,options,zloc);
var len = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zcount.call(null,zloc__$1));
var zloc__$2 = (((len > max_length))?(function (){var G__30466 = max_length;
var G__30467 = zloc__$1;
var G__30468 = cljs.core.cst$sym$$$$;
return (zprint.zfns.ztake_append.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.ztake_append.cljs$core$IFn$_invoke$arity$3(G__30466,G__30467,G__30468) : zprint.zfns.ztake_append.call(null,G__30466,G__30467,G__30468));
})():zloc__$1);
var len__$1 = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc__$2) : zprint.zfns.zcount.call(null,zloc__$2));
var l_str_len = cljs.core.count(l_str);
var indent = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)));
var vec__30454 = zprint.zprint.fzprint_up_to_first_zloc(caller,options,(ind + l_str_len),zloc__$2);
var pre_arg_1_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(0),null);
var arg_1_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(1),null);
var arg_1_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(3),null);
var first_data = vec__30454;
var arg_1_coll_QMARK_ = cljs.core.not((function (){var or__4126__auto__ = (zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zkeyword_QMARK_.call(null,arg_1_zloc));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zsymbol_QMARK_.call(null,arg_1_zloc));
}
})());
var arg_1_indent_alt_QMARK_ = ((arg_1_coll_QMARK_)?fn_style:false);
var fn_str = (((!(arg_1_coll_QMARK_)))?(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zstring.call(null,arg_1_zloc)):null);
var fn_style__$1 = (function (){var or__4126__auto__ = fn_style;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(fn_str) : fn_map.call(null,fn_str));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (user_fn_map.cljs$core$IFn$_invoke$arity$1 ? user_fn_map.cljs$core$IFn$_invoke$arity$1(fn_str) : user_fn_map.call(null,fn_str));
}
}
})();
var fn_style__$2 = (cljs.core.truth_(((cljs.core.not(fn_style__$1))?fn_str:false))?(function (){var G__30469 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(fn_str,/\//));
return (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(G__30469) : fn_map.call(null,G__30469));
})():fn_style__$1);
var fn_style__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$2,cljs.core.cst$kw$none))?null:fn_style__$2);
var fn_style__$4 = (cljs.core.truth_((function (){var and__4115__auto__ = fn_str;
if(cljs.core.truth_(and__4115__auto__)){
return (fn_style__$3 == null);
} else {
return and__4115__auto__;
}
})())?cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$3);
var options__$1 = ((cljs.core.vector_QMARK_(fn_style__$4))?cljs.core.first(zprint.config.config_and_validate("fn-style:",null,options,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(fn_style__$4),(2)))?cljs.core.second(fn_style__$4):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zipper,cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.second(fn_style__$4):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fn_style__$4,(2)))))):options);
var vec__30457 = ((cljs.core.vector_QMARK_(fn_style__$4))?zprint.zprint.fzprint_up_to_first_zloc(caller,options__$1,(ind + l_str_len),zloc__$2):first_data);
var pre_arg_1_style_vec__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30457,(0),null);
var arg_1_zloc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30457,(1),null);
var arg_1_count__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30457,(2),null);
var zloc_seq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30457,(3),null);
var first_data__$1 = vec__30457;
var fn_style__$5 = ((cljs.core.vector_QMARK_(fn_style__$4))?cljs.core.first(fn_style__$4):fn_style__$4);
var vec__30460 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$1,(ind + indent),first_data__$1);
var pre_arg_2_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(0),null);
var arg_2_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(1),null);
var arg_2_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(3),null);
var second_data = vec__30460;
var len__$2 = (zprint.zfns.zcount_zloc_seq_nc_nws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount_zloc_seq_nc_nws.cljs$core$IFn$_invoke$arity$1(zloc_seq__$1) : zprint.zfns.zcount_zloc_seq_nc_nws.call(null,zloc_seq__$1));
var vec__30463 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,cljs.core.cst$kw$replace_DASH_w_DASH_string))?(function (){var and__4115__auto__ = cljs.core.cst$kw$replacement_DASH_string.cljs$core$IFn$_invoke$arity$1((options__$1.cljs$core$IFn$_invoke$arity$1 ? options__$1.cljs$core$IFn$_invoke$arity$1(caller) : options__$1.call(null,caller)));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$2,(2));
} else {
return and__4115__auto__;
}
})():false))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(options__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [caller], null),cljs.core.dissoc,cljs.core.cst$kw$replacement_DASH_string),cljs.core.cst$kw$rightcnt,(cljs.core.cst$kw$rightcnt.cljs$core$IFn$_invoke$arity$1(options__$1) - (1))),arg_2_zloc,cljs.core.cst$kw$replacement_DASH_string.cljs$core$IFn$_invoke$arity$1((options__$1.cljs$core$IFn$_invoke$arity$1 ? options__$1.cljs$core$IFn$_invoke$arity$1(caller) : options__$1.call(null,caller))),cljs.core.count(cljs.core.cst$kw$replacement_DASH_string.cljs$core$IFn$_invoke$arity$1((options__$1.cljs$core$IFn$_invoke$arity$1 ? options__$1.cljs$core$IFn$_invoke$arity$1(caller) : options__$1.call(null,caller)))),"",(1),zprint.zprint.remove_one(zloc_seq__$1,arg_1_count__$1)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,arg_1_zloc__$1,l_str,l_str_len,r_str,len__$2,zloc_seq__$1], null));
var options__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(0),null);
var arg_1_zloc__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(1),null);
var l_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(2),null);
var l_str_len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(3),null);
var r_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(4),null);
var len__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(5),null);
var zloc_seq__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(6),null);
var indent__$1 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1((options__$2.cljs$core$IFn$_invoke$arity$1 ? options__$2.cljs$core$IFn$_invoke$arity$1(caller) : options__$2.call(null,caller)));
var indent_arg = cljs.core.cst$kw$indent_DASH_arg.cljs$core$IFn$_invoke$arity$1((options__$2.cljs$core$IFn$_invoke$arity$1 ? options__$2.cljs$core$IFn$_invoke$arity$1(caller) : options__$2.call(null,caller)));
var indent_only_QMARK_ = cljs.core.cst$kw$indent_DASH_only_QMARK_.cljs$core$IFn$_invoke$arity$1((options__$2.cljs$core$IFn$_invoke$arity$1 ? options__$2.cljs$core$IFn$_invoke$arity$1(caller) : options__$2.call(null,caller)));
var indent__$2 = (cljs.core.truth_((zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1(fn_style__$5) : zprint.zprint.body_set.call(null,fn_style__$5)))?indent__$1:(function (){var or__4126__auto__ = indent_arg;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return indent__$1;
}
})());
var indent__$3 = (indent__$2 + (l_str_len__$1 - (1)));
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_(options__$2,len__$3,fn_style__$5);
var one_line_ok_QMARK___$1 = (cljs.core.truth_(indent_only_QMARK_)?null:one_line_ok_QMARK_);
var one_line_ok_QMARK___$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,cljs.core.cst$kw$noseq))?null:one_line_ok_QMARK___$1);
var fn_style__$6 = (function (){var or__4126__auto__ = (zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1(fn_style__$5) : zprint.zprint.body_map.call(null,fn_style__$5));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return fn_style__$5;
}
})();
var fn_style__$7 = (cljs.core.truth_((function (){var fexpr__30470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$replace_DASH_w_DASH_string,null,cljs.core.cst$kw$flow,null,cljs.core.cst$kw$binding,null,cljs.core.cst$kw$hang,null,cljs.core.cst$kw$flow_DASH_body,null], null), null);
return (fexpr__30470.cljs$core$IFn$_invoke$arity$1 ? fexpr__30470.cljs$core$IFn$_invoke$arity$1(fn_style__$6) : fexpr__30470.call(null,fn_style__$6));
})())?fn_style__$6:(((len__$3 < (3)))?null:fn_style__$6));
var fn_style__$8 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__4126__auto__ = (zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1(fn_style__$7) : zprint.zprint.noarg1_map.call(null,fn_style__$7));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return fn_style__$7;
}
})():fn_style__$7);
var options__$3 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$2,cljs.core.cst$kw$no_DASH_arg1_QMARK_):options__$2);
var indent_adj = (l_str_len__$1 - (1));
var default_indent = (cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc__$2) : zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc__$2)))?indent__$3:l_str_len__$1);
var arg_1_indent = (((!(arg_1_coll_QMARK_)))?((ind + (l_str_len__$1 + (1))) + cljs.core.count(fn_str)):null);
var arg_1_indent__$1 = (function (){var or__4126__auto__ = arg_1_indent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(arg_1_indent_alt_QMARK_)){
return (indent__$3 + ind);
} else {
return null;
}
}
})();
var arg_1_indent__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_2_style_vec,cljs.core.cst$kw$noseq))?arg_1_indent__$1:(cljs.core.truth_(arg_1_indent__$1)?(indent__$3 + ind):null));
var options__$4 = (((!(arg_1_coll_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$3,cljs.core.cst$kw$in_DASH_code_QMARK_,fn_str):options__$3);
var options__$5 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$pdepth,(cljs.core.long$((function (){var or__4126__auto__ = cljs.core.cst$kw$pdepth.cljs$core$IFn$_invoke$arity$1(options__$4);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (1)));
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_DASH_hang.cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(cljs.core.cst$kw$pdepth.cljs$core$IFn$_invoke$arity$1(options__$5)),"fzs",fn_str], 0)):null);
var new_ind = (indent__$3 + ind);
var one_line_ind = (l_str_len__$1 + ind);
var options__$6 = (cljs.core.truth_(fn_style__$8)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$5,cljs.core.cst$kw$fn_DASH_style):options__$5);
var loptions = zprint.zprint.not_rightmost(options__$6);
var roptions = options__$6;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map(options__$6,l_str__$1),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$6,(ind + (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (l_str_len__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()),zloc__$2,r_str__$1);
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$6))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc__$2) : zprint.zfns.zstring.call(null,zloc__$2)),"fn-str",fn_str,"fn-style:",fn_style__$8,"len:",len__$3,"ind:",ind,"indent:",indent__$3,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK___$2,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent__$2,"arg-1-zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(arg_1_zloc__$2) : zprint.zfns.zstring.call(null,arg_1_zloc__$2)),"pre-arg-1-style-vec:",pre_arg_1_style_vec__$1,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str__$1),"'"].join(''),"l-str-len:",l_str_len__$1,"r-str-vec:",r_str_vec,"indent-adj:",indent_adj,"one-line?:",one_line_QMARK_,"indent-only?:",indent_only_QMARK_,"rightcnt:",cljs.core.cst$kw$rightcnt.cljs$core$IFn$_invoke$arity$1(options__$6),"replacement-string:",cljs.core.cst$kw$replacement_DASH_string.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$6) : caller.call(null,options__$6))),":ztype:",cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options__$6)], 0))], 0)):null);
var one_line = (((((len__$3 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,cljs.core.cst$kw$noseq))))?cljs.core.cst$kw$empty:(cljs.core.truth_(one_line_ok_QMARK___$2)?zprint.zprint.fzprint_one_line(options__$6,one_line_ind,zloc_seq__$2):null));
if(cljs.core.truth_(one_line)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(one_line,cljs.core.cst$kw$empty)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
}
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$6))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$6),"fzprint-list*:",fn_str," one-line did not work!!!"], 0));
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$6))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$6),"fzprint-list*: fn-style:",fn_style__$8], 0)):null))){
return null;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,cljs.core.cst$kw$noseq)))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core.truth_(indent_only_QMARK_)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(caller,l_str__$1,r_str__$1,options__$6,ind,zloc__$2,fn_style__$8,arg_1_indent__$2),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(1))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(roptions,one_line_ind,zloc_seq__$2),r_str_vec], 0));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$binding))?(((len__$3 > (1)))?(zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc)):false):false))){
var vec__30471 = zprint.zprint.fzprint_hang_unless_fail(loptions,(function (){var or__4126__auto__ = arg_1_indent__$2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (indent__$3 + ind);
}
})(),(indent__$3 + ind),zprint.zprint.fzprint_binding_vec,arg_2_zloc);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30471,(0),null);
var binding_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30471,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,cljs.core.cst$kw$hang))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(14)], null)], null),binding_style_vec], 0)):binding_style_vec);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30474 = loptions;
var G__30475 = (ind + (1));
var G__30476 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30474,G__30475,G__30476) : zprint.zprint.fzprint_STAR_.call(null,G__30474,G__30475,G__30476));
})(),pre_arg_2_style_vec,binding_style_vec__$1,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options__$6,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data),cljs.core.cst$kw$force_DASH_nl,cljs.core.cst$kw$newline_DASH_first),r_str_vec], 0))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$pair_DASH_fn)){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
var zloc_count = cljs.core.count(zloc_seq__$2);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30477 = loptions;
var G__30478 = (ind + (1));
var G__30479 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30477,G__30478,G__30479) : zprint.zprint.fzprint_STAR_.call(null,G__30477,G__30478,G__30479));
})(),zprint.zprint.fzprint_hang(cljs.core.assoc_in(options__$6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pair,cljs.core.cst$kw$respect_DASH_nl_QMARK_], null),cljs.core.cst$kw$respect_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$6) : caller.call(null,options__$6)))),cljs.core.cst$kw$pair_DASH_fn,arg_1_indent__$2,(indent__$3 + ind),zprint.zprint.fzprint_pairs,zloc_count,zloc_seq_right_first),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$extend)){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30480 = loptions;
var G__30481 = (ind + (1));
var G__30482 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30480,G__30481,G__30482) : zprint.zprint.fzprint_STAR_.call(null,G__30480,G__30481,G__30482));
})(),zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$6,(indent__$3 + ind),zloc_seq_right_first)),r_str_vec], 0));
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$fn)) && (cljs.core.not((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zlist_QMARK_.call(null,arg_2_zloc)))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_fn)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_pair)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_extend)))){
var vec__30483 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$6,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30483,(0),null);
var arg_3_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30483,(1),null);
var arg_3_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30483,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30483,(3),null);
var third_data = vec__30483;
var zloc_seq_right_third = zprint.zprint.get_zloc_seq_right(third_data);
var second_element = zprint.zprint.fzprint_hang_one(caller,((cljs.core.not(arg_3_zloc))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc);
var vec__30486 = zprint.zprint.style_lines(loptions,arg_1_indent__$2,second_element);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30486,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30486,(1),null);
var first_three = (cljs.core.truth_(second_element)?(function (){var first_two_wo_pre_arg_1 = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30489 = loptions;
var G__30490 = (indent__$3 + ind);
var G__30491 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30489,G__30490,G__30491) : zprint.zprint.fzprint_STAR_.call(null,G__30489,G__30490,G__30491));
})(),pre_arg_2_style_vec,second_element,pre_arg_3_style_vec], 0));
var local_options = ((cljs.core.not(zloc_seq_right_third))?options__$6:loptions);
var first_two_one_line_QMARK_ = zprint.zprint.fzfit_one_line(local_options,zprint.zprint.style_lines(local_options,(ind + indent__$3),first_two_wo_pre_arg_1));
var first_two = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_1_style_vec__$1,first_two_wo_pre_arg_1], 0));
if(first_two_one_line_QMARK_){
} else {
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$6))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: :arg2-* first two didn't fit:",first_two], 0))], 0));
} else {
}
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_two,(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_pair);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_fn);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_extend);
if(or__4126__auto____$3){
return or__4126__auto____$3;
} else {
var and__4115__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_3_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_3_zloc));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_count,(1));
} else {
return and__4115__auto__;
}
}
}
}
}
})())?zprint.zprint.fzprint_hang_one(caller,((cljs.core.not(zloc_seq_right_third))?options__$6:loptions),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_3_style_vec,cljs.core.cst$kw$noseq)) && (first_two_one_line_QMARK_)))?max_width:(indent__$3 + ind)),(indent__$3 + ind),arg_3_zloc):zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),(function (){var G__30492 = ((cljs.core.not(zloc_seq_right_third))?options__$6:loptions);
var G__30493 = (indent__$3 + ind);
var G__30494 = arg_3_zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30492,G__30493,G__30494) : zprint.zprint.fzprint_STAR_.call(null,G__30492,G__30493,G__30494));
})()))], 0));
})():null);
if(cljs.core.truth_(first_three)){
if(cljs.core.not(zloc_seq_right_third)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_pair))?zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_pairs(options__$6,(indent__$3 + ind),zloc_seq_right_third)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_extend))?zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$6,(indent__$3 + ind),zloc_seq_right_third)):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg2_DASH_fn))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$6,cljs.core.cst$kw$fn_DASH_style,cljs.core.cst$kw$fn):options__$6),(indent__$3 + ind),(indent__$3 + ind),zloc_seq_right_third,fn_style__$8)
)),r_str_vec], 0));
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH_mixin)) && ((len__$3 > (3))))){
var vec__30495 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$6,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(0),null);
var arg_3_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(1),null);
var arg_3_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495,(3),null);
var third_data = vec__30495;
var vec__30498 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$6,(ind + indent__$3),third_data);
var pre_arg_4_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(0),null);
var arg_4_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(1),null);
var arg_4_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(3),null);
var fourth_data = vec__30498;
var arg_vec_index = (function (){var or__4126__auto__ = zprint.zprint.zfind_seq((function (p1__30450_SHARP_){
var or__4126__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30450_SHARP_) : zprint.zfns.zvector_QMARK_.call(null,p1__30450_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__30450_SHARP_) : zprint.zfns.zlist_QMARK_.call(null,p1__30450_SHARP_)))){
var G__30502 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(p1__30450_SHARP_) : zprint.zfns.zfirst.call(null,p1__30450_SHARP_));
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30502) : zprint.zfns.zvector_QMARK_.call(null,G__30502));
} else {
return null;
}
}
}),zloc_seq__$2);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(arg_3_zloc) : zprint.zfns.zsexpr.call(null,arg_3_zloc)) === 'string';
var mixin_start = ((doc_string_QMARK_)?arg_4_count:arg_3_count);
var mixin_length = ((arg_vec_index - mixin_start) - (1));
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$3 + ind),(indent__$3 + ind),arg_3_zloc):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$3 + ind),(indent__$3 + ind),((doc_string_QMARK_)?arg_4_zloc:arg_3_zloc));
var vec__30503 = zprint.zprint.style_lines(loptions,(indent__$3 + ind),mixin_sentinal);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30503,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30503,(1),null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((doc_string_QMARK_)?pre_arg_4_style_vec:pre_arg_3_style_vec),mixin_sentinal,zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,loptions,(max_width + (1)),(((indent__$3 + indent__$3) + ind) - (1)),zprint.zprint.get_zloc_seq_right((cljs.core.truth_(doc_string)?fourth_data:third_data)),fn_style__$8,mixin_length)], 0));
})():null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30506 = loptions;
var G__30507 = (ind + (1));
var G__30508 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30506,G__30507,G__30508) : zprint.zprint.fzprint_STAR_.call(null,G__30506,G__30507,G__30508));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_3_style_vec,doc_string,zprint.zprint.remove_one_newline(mixins)], 0)):((doc_string_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_3_style_vec,doc_string], 0)):((mixins_QMARK_)?zprint.zprint.remove_one_newline(mixins):cljs.core.cst$kw$noseq
))),zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$6,fn_style__$8),(indent__$3 + ind),(indent__$3 + ind),cljs.core.nthnext(zloc_seq__$2,((mixins_QMARK_)?arg_vec_index:((doc_string_QMARK_)?arg_4_count:arg_3_count))),fn_style__$8),r_str_vec], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH_pair)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH_force_DASH_nl)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH__GT_)))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30509 = loptions;
var G__30510 = (ind + (1));
var G__30511 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30509,G__30510,G__30511) : zprint.zprint.fzprint_STAR_.call(null,G__30509,G__30510,G__30511));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH_pair))?zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_pairs(options__$6,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data))):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$6,fn_style__$8),(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data),fn_style__$8)),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$arg1_DASH_extend)){
var zloc_seq_right_second = zprint.zprint.get_zloc_seq_right(second_data);
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc)))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30512 = loptions;
var G__30513 = (indent__$3 + ind);
var G__30514 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30512,G__30513,G__30514) : zprint.zprint.fzprint_STAR_.call(null,G__30512,G__30513,G__30514));
})(),pre_arg_2_style_vec,zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),(function (){var G__30515 = loptions;
var G__30516 = (indent__$3 + ind);
var G__30517 = arg_2_zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30515,G__30516,G__30517) : zprint.zprint.fzprint_STAR_.call(null,G__30515,G__30516,G__30517));
})()),zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$6,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__30518 = loptions;
var G__30519 = (ind + (1));
var G__30520 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30518,G__30519,G__30520) : zprint.zprint.fzprint_STAR_.call(null,G__30518,G__30519,G__30520));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),zprint.zprint.prepend_nl(options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$6,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec], 0));

}
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(((!((len__$3 === (0)))))?(function (){var G__30521 = loptions;
var G__30522 = (l_str_len__$1 + ind);
var G__30523 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30521,G__30522,G__30523) : zprint.zprint.fzprint_STAR_.call(null,G__30521,G__30522,G__30523));
})():cljs.core.cst$kw$noseq),(((!((len__$3 === (0)))))?(function (){var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
if(zloc_seq_right_first){
if(cljs.core.truth_(arg_1_indent__$2)){
var result = zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$6,fn_style__$8),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,cljs.core.cst$kw$flow))?(indent__$3 + ind):arg_1_indent__$2),(indent__$3 + ind),zloc_seq_right_first,fn_style__$8);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$6))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: r-str-vec:",r_str_vec,"result:",result], 0))], 0));
} else {
}

return result;
} else {
var local_indent = ((default_indent + ind) + indent_adj);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.noarg1(options__$6,fn_style__$8),local_indent,zloc_seq_right_first,cljs.core.cst$kw$force_DASH_nl,cljs.core.cst$kw$newline_DASH_first)], 0));
}
} else {
return cljs.core.cst$kw$noseq;
}
})():cljs.core.cst$kw$noseq),r_str_vec], 0));

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
});
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list"], 0))], 0));
} else {
}

return zprint.zprint.fzprint_list_STAR_(cljs.core.cst$kw$list,"(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-anon-fn"], 0))], 0));
} else {
}

return zprint.zprint.fzprint_list_STAR_(cljs.core.cst$kw$list,"#(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zcoll_QMARK_,zloc) : zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30524_SHARP_,p2__30525_SHARP_){
var or__4126__auto__ = p1__30524_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p2__30525_SHARP_;
}
}),null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__30526,ind,coll_print){
var map__30527 = p__30526;
var map__30527__$1 = (((((!((map__30527 == null))))?(((((map__30527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30527):map__30527);
var options = map__30527__$1;
var map__30528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30527__$1,caller);
var map__30528__$1 = (((((!((map__30528 == null))))?(((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30528):map__30528);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30528__$1,cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_);
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30528__$1,cljs.core.cst$kw$respect_DASH_nl_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30527__$1,cljs.core.cst$kw$width);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30527__$1,cljs.core.cst$kw$rightcnt);
var last_index = (cljs.core.count(coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var cur_seq = coll_print;
var cur_ind = ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrap-zmap: out:",out], 0))], 0));
} else {
}

return out;
} else {
var next_seq = cljs.core.first(cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count(cljs.core.first(cur_seq)) > (1));
var this_seq = cljs.core.first(cur_seq);
var _ = zprint.zprint.log_lines(options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrap-zmap: ind:",ind,"this-seq:",this_seq], 0))], 0)):null);
var vec__30534 = zprint.zprint.style_lines(options,ind,this_seq);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(2),null);
var last_width = cljs.core.last(lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = len;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),cljs.core.cst$kw$newline);
var comment_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),cljs.core.cst$kw$comment));
var comment_inline_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),cljs.core.cst$kw$comment_DASH_inline));
var width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (((!(newline_QMARK_)))?(((((index === (0))) || (cljs.core.not(comment_QMARK_))))?(function (){var or__4126__auto__ = (index === (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(((multi_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(linecnt,(1)):true)){
return ((cur_ind + len__$1) <= width__$1);
} else {
return false;
}
}
})():false):false);
var new_ind = (cljs.core.truth_((function (){var or__4126__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return comment_inline_QMARK_;
}
})())?(width__$1 + (1)):((((multi_QMARK_) && ((linecnt > (1))) && (cljs.core.not(wrap_after_multi_QMARK_))))?width__$1:((fit_QMARK_)?((cur_ind + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__30537 = cljs.core.next(cur_seq);
var G__30538 = new_ind;
var G__30539 = (index + (1));
var G__30540 = newline_QMARK_;
var G__30541 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(15)], null)], null),this_seq], 0)):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((function (){var this_seq_next = cljs.core.first(cljs.core.next(cur_seq));
var newline_QMARK___$1 = (cljs.core.truth_(this_seq_next)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq_next),(2)),cljs.core.cst$kw$newline):null);
if(cljs.core.truth_(newline_QMARK___$1)){
return (0);
} else {
return (new_ind - (1));
}
})()))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(21)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(16)], null)], null),this_seq], 0)):zprint.zprint.prepend_nl(options,ind,this_seq)))));
cur_seq = G__30537;
cur_ind = G__30538;
index = G__30539;
previous_newline_QMARK_ = G__30540;
out = G__30541;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30542_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__30542_SHARP_),(2)),cljs.core.cst$kw$newline);
}),coll);
});
/**
 * Validate an options map that was returned from some internal configuration
 *   expression or configuration.  Either returns the options map or throws
 *   an error.
 */
zprint.zprint.internal_validate = (function zprint$zprint$internal_validate(options,error_str){
var errors = zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1(options);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_(errors__$1)))){
throw (new Error(errors__$1));
} else {
return options;
}
});
zprint.zprint.lazy_sexpr_seq = (function zprint$zprint$lazy_sexpr_seq(nws_seq){
if(cljs.core.seq(nws_seq)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30543 = cljs.core.first(nws_seq);
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__30543) : zprint.zfns.zsexpr.call(null,G__30543));
})()], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var G__30544 = cljs.core.rest(nws_seq);
return (zprint.zprint.lazy_sexpr_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.lazy_sexpr_seq.cljs$core$IFn$_invoke$arity$1(G__30544) : zprint.zprint.lazy_sexpr_seq.call(null,G__30544));
}),null,null)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * If there are any comments at the top level of the zloc-seq, return true,
 *   else nil.
 */
zprint.zprint.comment_in_zloc_seq_QMARK_ = (function zprint$zprint$comment_in_zloc_seq_QMARK_(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30546_SHARP_,p2__30545_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(p2__30545_SHARP_) : zprint.zfns.ztag.call(null,p2__30545_SHARP_)),cljs.core.cst$kw$comment)){
return cljs.core.reduced(true);
} else {
return null;
}
}),false,zloc_seq);
});
/**
 * Print basic stuff like a vector or a set or an array.  Several options 
 *   for how to print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__30547,ind,zloc){
var map__30548 = p__30547;
var map__30548__$1 = (((((!((map__30548 == null))))?(((((map__30548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30548):map__30548);
var options = map__30548__$1;
var map__30549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30548__$1,caller);
var map__30549__$1 = (((((!((map__30549 == null))))?(((((map__30549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30549):map__30549);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$sort_QMARK_);
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_);
var wrap_coll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$wrap_DASH_coll_QMARK_);
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$indent);
var option_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$option_DASH_fn);
var wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$wrap_QMARK_);
var binding_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$binding_QMARK_);
var option_fn_first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$option_DASH_fn_DASH_first);
var fn_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30549__$1,cljs.core.cst$kw$fn_DASH_format);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30548__$1,cljs.core.cst$kw$rightcnt);
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30548__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-vec* ind:",ind,"indent:",indent,"caller:",caller], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__4115__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec(options,ind,zloc);
} else {
var vec__30552 = zprint.zprint.get_respect_indent(options,caller,cljs.core.cst$kw$vector);
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30552,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30552,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30552,(2),null);
var l_str_len = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(ind + (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (l_str_len - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()),zloc,r_str);
var len = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var new_options = (cljs.core.truth_(option_fn_first)?(function (){var first_sexpr = (function (){var G__30557 = (zprint.zfns.zfirst_no_comment.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst_no_comment.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst_no_comment.call(null,zloc));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__30557) : zprint.zfns.zsexpr.call(null,G__30557));
})();
return zprint.zprint.internal_validate((option_fn_first.cljs$core$IFn$_invoke$arity$2 ? option_fn_first.cljs$core$IFn$_invoke$arity$2(options,first_sexpr) : option_fn_first.call(null,options,first_sexpr)),[":vector :option-fn-first called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''));
})():null);
var _ = (cljs.core.truth_(option_fn_first)?(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec* option-fn-first new options",new_options], 0))], 0)):null):null);
var options__$1 = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new_options], 0));
var new_options__$1 = (cljs.core.truth_(option_fn)?(function (){var nws_seq = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zwhitespaceorcomment_QMARK_,(zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zseqnws.call(null,zloc)));
var nws_count = cljs.core.count(nws_seq);
var sexpr_seq = zprint.zprint.lazy_sexpr_seq(nws_seq);
return zprint.zprint.internal_validate((option_fn.cljs$core$IFn$_invoke$arity$3 ? option_fn.cljs$core$IFn$_invoke$arity$3(options__$1,nws_count,sexpr_seq) : option_fn.call(null,options__$1,nws_count,sexpr_seq)),[":vector :option-fn called with sexpr count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nws_count)].join(''));
})():null);
var ___$1 = (cljs.core.truth_(option_fn)?(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec* option-fn new options",new_options__$1], 0))], 0)):null):null);
var map__30555 = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options__$1,new_options__$1], 0));
var map__30555__$1 = (((((!((map__30555 == null))))?(((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30555):map__30555);
var options__$2 = map__30555__$1;
var map__30556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,caller);
var map__30556__$1 = (((((!((map__30556 == null))))?(((((map__30556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30556):map__30556);
var indent_only_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$indent_DASH_only_QMARK_);
var sort_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$sort_QMARK_);
var sort_in_code_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_);
var wrap_coll_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$wrap_DASH_coll_QMARK_);
var indent__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$indent);
var respect_nl_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$respect_DASH_nl_QMARK_);
var respect_bl_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$respect_DASH_bl_QMARK_);
var wrap_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$wrap_QMARK_);
var binding_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$binding_QMARK_);
var fn_format__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30556__$1,cljs.core.cst$kw$fn_DASH_format);
if(cljs.core.truth_(fn_format__$1)){
return zprint.zprint.fzprint_list_STAR_(cljs.core.cst$kw$vector_DASH_fn,"[","]",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$2,cljs.core.cst$kw$fn_DASH_style,fn_format__$1),ind,zloc);
} else {
var indent__$2 = (function (){var or__4126__auto__ = indent__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count(l_str);
}
})();
var new_ind = (cljs.core.truth_(indent_only_QMARK___$1)?ind:(indent__$2 + ind));
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"new-ind:",new_ind], 0))], 0)):null);
var zloc_seq = (cljs.core.truth_((function (){var or__4126__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return indent_only_QMARK___$1;
}
})())?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(respect_bl_QMARK___$1)?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (cljs.core.truth_(in_code_QMARK_)?sort_in_code_QMARK___$1:true);
if(cljs.core.truth_(and__4115__auto____$1)){
return ((cljs.core.not(zprint.zprint.comment_in_zloc_seq_QMARK_(zloc_seq))) && (cljs.core.not(respect_nl_QMARK___$1)) && (cljs.core.not(respect_bl_QMARK___$1)) && (cljs.core.not(indent_only_QMARK___$1)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?zprint.zprint.order_out(caller,options__$2,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = (((len === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(17)], null)], null)], null):zprint.zprint.fzprint_seq(options__$2,new_ind,zloc_seq__$1));
var ___$3 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: coll-print:",coll_print], 0))], 0)):null);
var coll_print__$1 = ((cljs.core.not(zprint.zprint.contains_nil_QMARK_(coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(18)], null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.cst$kw$respect_DASH_bl_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return indent_only_QMARK___$1;
}
}
})())?coll_print__$1:zprint.zprint.remove_nl(coll_print__$1)))):null);
var ___$4 = zprint.zprint.log_lines(options__$2,"fzprint-vec*:",new_ind,one_line);
var ___$5 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: new-ind:",new_ind,"one-line:",one_line], 0))], 0)):null);
var one_line_lines = zprint.zprint.style_lines(options__$2,new_ind,one_line);
if((len === (0))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core.truth_(one_line_lines)){
if(zprint.zprint.fzfit_one_line(options__$2,one_line_lines)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
} else {
if(cljs.core.truth_(indent_only_QMARK___$1)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6(caller,options__$2,ind,(ind + l_str_len),coll_print__$1,indent__$2),r_str_vec], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.not(wrap_coll_QMARK___$1))?zprint.zprint.any_zcoll_QMARK_(options__$2,new_ind,zloc):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(wrap_QMARK___$1);
}
})())){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,(function (){var G__30560 = options__$2;
var G__30561 = new_ind;
var G__30562 = coll_print__$1;
var G__30563 = cljs.core.cst$kw$no_DASH_nl_DASH_first;
return (zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4(G__30560,G__30561,G__30562,G__30563) : zprint.zprint.precede_w_nl.call(null,G__30560,G__30561,G__30562,G__30563));
})()),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$2))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: wrap coll-print:",coll_print__$1], 0))], 0));
} else {
}

return zprint.zprint.wrap_zmap(caller,options__$2,new_ind,coll_print__$1);
})()
,r_str_vec], 0));
}
}
}
} else {
return null;
}
}
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$vector,"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$array,"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$set,"#{","}",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 *   If sep-nil is nil, then when pred? is false we don't interpose
 *   anything!
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.persistent_BANG_(out);
} else {
var G__30566 = cljs.core.next(coll__$1);
var G__30567 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep_true,cljs.core.first(coll__$1)], 0)):(((((cljs.core.count(out) === (0))) || ((sep_nil == null))))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(coll__$1)):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep_nil,cljs.core.first(coll__$1)], 0))));
var G__30568 = (function (){var G__30565 = cljs.core.first(coll__$1);
return (pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pred_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30565) : pred_QMARK_.call(null,G__30565));
})();
coll__$1 = G__30566;
out = G__30567;
interpose_QMARK_ = G__30568;
continue;
}
break;
}
});
/**
 * Move through a sequence of style vecs and ensure that at least
 *   one newline (actually an indent) appears before each element.  If
 *   a newline in the style-vecs is where we wanted one, well and good.
 *   Comments are now not recognized as different, increasing our
 *   appreciation of diversity.  If not-first? is truthy, then don't
 *   put a newline before the first element.
 */
zprint.zprint.precede_w_nl = (function zprint$zprint$precede_w_nl(options,ind,coll,not_first_QMARK_){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: (count coll)",cljs.core.count(coll),"not-first?",not_first_QMARK_], 0))], 0));
} else {
}

var coll__$1 = coll;
var ind_seq = ((cljs.core.coll_QMARK_(ind))?ind:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ind],null)));
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var added_nl_QMARK_ = not_first_QMARK_;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
var result = cljs.core.persistent_BANG_(out);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: exit:",result], 0))], 0)):null);
var previous_element_index = (cljs.core.count(result) - (2));
var previous_type = (((!((previous_element_index < (0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,previous_element_index)),(2)):null);
return result;
} else {
var vec__30581 = cljs.core.first(coll__$1);
var vec__30584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(2),null);
var element = vec__30581;
var indent = cljs.core.first(ind_seq);
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$newline);
var last_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(element),(2));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: element:",element,"added-nl?:",added_nl_QMARK_], 0))], 0));
} else {
}

var G__30593 = cljs.core.next(coll__$1);
var G__30594 = (function (){var temp__5718__auto__ = cljs.core.next(ind_seq);
if(temp__5718__auto__){
var next_ind = temp__5718__auto__;
return next_ind;
} else {
return ind_seq;
}
})();
var G__30595 = ((newline_QMARK_)?(function (){var next_coll = cljs.core.next(coll__$1);
if(cljs.core.empty_QMARK_(next_coll)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element);
} else {
var vec__30587 = cljs.core.first(next_coll);
var vec__30590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30587,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(1),null);
var next_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_what,cljs.core.cst$kw$newline)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",color,what], null)], null));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element);
}
}
})():(cljs.core.truth_(added_nl_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(indent))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(28)], null)], null),element], 0))));
var G__30596 = newline_QMARK_;
coll__$1 = G__30593;
ind_seq = G__30594;
out = G__30595;
added_nl_QMARK_ = G__30596;
continue;
}
break;
}
});
/**
 * Analyze a style-vec which contains only newlines, the count of newlines
 *   in the style vec.  We assume that each :newline style-vec contains one
 *   newline (i.e., it was generated by fzprint-newlines).
 */
zprint.zprint.count_newline_types = (function zprint$zprint$count_newline_types(newline_style_vec){
var count_of_types = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30597_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__30597_SHARP_,(2));
}),newline_style_vec)));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count_of_types,(1))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(newline_style_vec),(2)),cljs.core.cst$kw$newline)))){
throw (new Error(["count-newline-types: more than one type or wrong type! count:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count_of_types)," style-vec:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newline_style_vec)].join('')));
} else {
}

return cljs.core.count(newline_style_vec);
});
/**
 * Count the number of blanks at the right end of a string.
 */
zprint.zprint.count_right_blanks = (function zprint$zprint$count_right_blanks(s){
var i = cljs.core.count(s);
while(true){
if((i < (0))){
return cljs.core.count(s);
} else {
if(clojure.string.ends_with_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i)," ")){
var G__30598 = (i - (1));
i = G__30598;
continue;
} else {
return (cljs.core.count(s) - i);
}
}
break;
}
});
/**
 * Trim only blanks off the right end of a string.
 */
zprint.zprint.trimr_blanks = (function zprint$zprint$trimr_blanks(s){
var i = cljs.core.count(s);
while(true){
if((i < (0))){
return "";
} else {
if(clojure.string.ends_with_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i)," ")){
var G__30599 = (i - (1));
i = G__30599;
continue;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i);
}
}
break;
}
});
/**
 * Given a count n, and style vec that ends with a newline and an associated
 *   indent of some number of spaces, return a sequence of n of those style vecs
 *   but remove spaces from all but the last of them.
 */
zprint.zprint.repeat_style_vec_nl = (function zprint$zprint$repeat_style_vec_nl(n,style_vec){
var no_space_n = (function (){var x__4214__auto__ = (n - (1));
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
if((no_space_n === (0))){
return style_vec;
} else {
var vec__30600 = cljs.core.last(style_vec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
var no_space_style_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(style_vec),no_space_element));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(no_space_n,no_space_style_vec),style_vec));
}
});
/**
 * Given an element, trim the blanks out of the string.
 */
zprint.zprint.trimr_blanks_element = (function zprint$zprint$trimr_blanks_element(p__30603){
var vec__30604 = p__30603;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
});
/**
 * Given a style-vec, trim the blanks out of each element.
 */
zprint.zprint.trimr_blanks_style_vec = (function zprint$zprint$trimr_blanks_style_vec(style_vec){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.zprint.trimr_blanks_element,style_vec);
});
/**
 * Given a count n, and single element from a style-vec which
 *   contains a newline and an indent of some number of spaces, return
 *   a sequence of n of those style vecs but remove spaces from all
 *   but the last of them.
 */
zprint.zprint.repeat_element_nl = (function zprint$zprint$repeat_element_nl(n,element){
var no_space_n = (function (){var x__4214__auto__ = (n - (1));
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
if((no_space_n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null);
} else {
var vec__30607 = element;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(no_space_n,no_space_element),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)));
return result;
}
});
/**
 * Given a coll of [hangflow style-vec] pairs, return the 
 *   [hangflow style-vec] pair where the style-vec is not a 
 *   :comment, :comment-inline, :newline or :indent.
 */
zprint.zprint.next_non_comment_nl = (function zprint$zprint$next_non_comment_nl(coll){
var coll__$1 = coll;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return null;
} else {
var vec__30610 = cljs.core.first(coll__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(1),null);
var vec__30613 = cljs.core.first(style_vec);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30613,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30613,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30613,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$comment_DASH_inline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$newline)))){
var G__30616 = cljs.core.next(coll__$1);
coll__$1 = G__30616;
continue;
} else {
return cljs.core.first(coll__$1);
}
}
break;
}
});
/**
 * Do very specialized interpose, but different seps depending on pred-fn
 *   return and nl-separator? and nl-separator-all?. This assumes that 
 *   sep-* does one line, and sep-*-nl does two lines.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_comma,sep_comma_nl,sep,sep_nl,p__30617,comma_QMARK_,coll){
var map__30618 = p__30617;
var map__30618__$1 = (((((!((map__30618 == null))))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30618):map__30618);
var suboptions = map__30618__$1;
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
var nl_separator_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30618__$1,cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_);
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var previous_needs_comma_QMARK_ = null;
var add_nl_QMARK_ = null;
var first_QMARK_ = true;
var newline_count = (0);
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_((((newline_count === (0)))?out:zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.repeat_element_nl(newline_count,cljs.core.first(sep))], 0)))));
} else {
var vec__30629 = cljs.core.first(coll__$1);
var hangflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30629,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30629,(1),null);
var vec__30632 = cljs.core.first(style_vec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30632,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30632,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30632,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$newline)){
var G__30638 = cljs.core.next(coll__$1);
var G__30639 = out;
var G__30640 = previous_needs_comma_QMARK_;
var G__30641 = add_nl_QMARK_;
var G__30642 = first_QMARK_;
var G__30643 = (newline_count + zprint.zprint.count_newline_types(style_vec));
coll__$1 = G__30638;
out = G__30639;
previous_needs_comma_QMARK_ = G__30640;
add_nl_QMARK_ = G__30641;
first_QMARK_ = G__30642;
newline_count = G__30643;
continue;
} else {
var vec__30635 = (cljs.core.truth_(previous_needs_comma_QMARK_)?(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma,(1)], null)):(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep,(1)], null)));
var interpose_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30635,(0),null);
var interpose_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30635,(1),null);
var interpose_count__$1 = (cljs.core.truth_(first_QMARK_)?(1):interpose_count);
var addtl_nl_needed = (function (){var x__4214__auto__ = (newline_count - interpose_count__$1);
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var G__30644 = cljs.core.next(coll__$1);
var G__30645 = (cljs.core.truth_(first_QMARK_)?(((addtl_nl_needed === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,style_vec):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.repeat_element_nl(addtl_nl_needed,cljs.core.first(sep)),style_vec], 0))):(((addtl_nl_needed === (0)))?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interpose_style_vec,style_vec], 0)):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.trimr_blanks_style_vec(interpose_style_vec),zprint.zprint.repeat_element_nl(addtl_nl_needed,cljs.core.first(sep)),style_vec], 0))));
var G__30646 = (function (){var and__4115__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$comment)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(what,cljs.core.cst$kw$comment_DASH_inline)){
return zprint.zprint.next_non_comment_nl(cljs.core.next(coll__$1));
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var G__30647 = (function (){var or__4126__auto__ = (function (){var and__4115__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hangflow,cljs.core.cst$kw$flow);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return nl_separator_all_QMARK_;
}
})();
var G__30648 = null;
var G__30649 = (0);
coll__$1 = G__30644;
out = G__30645;
previous_needs_comma_QMARK_ = G__30646;
add_nl_QMARK_ = G__30647;
first_QMARK_ = G__30648;
newline_count = G__30649;
continue;

}
}
break;
}
});
/**
 * Put a single or double line between pairs returned from
 *   fzprint-map-two-up.  The second argument is the map resulting
 *   from (:map options) or (:pair options) or whatever.  It should
 *   have :nl-separator? and :nl-separator-all? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf(null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(29)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(30)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(31)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__30650,ind,zloc,ns){
var map__30651 = p__30650;
var map__30651__$1 = (((((!((map__30651 == null))))?(((((map__30651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30651):map__30651);
var options = map__30651__$1;
var map__30652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,caller);
var map__30652__$1 = (((((!((map__30652 == null))))?(((((map__30652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30652):map__30652);
var map_options = map__30652__$1;
var comma_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$comma_QMARK_);
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$key_DASH_ignore);
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$key_DASH_ignore_DASH_silent);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$nl_DASH_separator_QMARK_);
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$force_DASH_nl_QMARK_);
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$lift_DASH_ns_QMARK_);
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$lift_DASH_ns_DASH_in_DASH_code_QMARK_);
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30652__$1,cljs.core.cst$kw$indent);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var ztype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,cljs.core.cst$kw$ztype);
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,cljs.core.cst$kw$map_DASH_depth);
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
var vec__30655 = zprint.zprint.get_respect_indent(options,caller,cljs.core.cst$kw$map);
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30655,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30655,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30655,(2),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map* caller:",caller], 0))], 0));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$map_DASH_depth,(map_depth + (1)));
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$1,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc,r_str);
if(((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) === (0))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(caller,l_str,r_str,options__$1,ind,zloc,null,null),r_str_vec], 0));
}
} else {
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$map_DASH_depth,(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztype,cljs.core.cst$kw$sexpr))?(function (){var or__4126__auto__ = key_ignore;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return key_ignore_silent;
}
})():false))?zprint.zprint.map_ignore(caller,options__$1,zloc):zloc);
var vec__30658 = zprint.zprint.partition_all_2_nc(zprint.zprint.no_max_length(options__$1),(cljs.core.truth_(respect_nl_QMARK_)?(zprint.zfns.zseqnws_w_nl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws_w_nl.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws_w_nl.call(null,zloc__$1)):(cljs.core.truth_(respect_bl_QMARK_)?(zprint.zfns.zseqnws_w_bl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws_w_bl.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws_w_bl.call(null,zloc__$1)):(zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws.call(null,zloc__$1))
)));
var no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30658,(0),null);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30658,(1),null);
var no_sort_QMARK___$1 = (function (){var or__4126__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = respect_nl_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return respect_bl_QMARK_;
}
}
})();
var vec__30661 = (function (){var G__30664 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map_options,cljs.core.cst$kw$in_DASH_code_QMARK_,in_code_QMARK_);
var G__30665 = pair_seq;
var G__30666 = ns;
return (zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$3(G__30664,G__30665,G__30666) : zprint.zfns.zlift_ns.call(null,G__30664,G__30665,G__30666));
})();
var ns__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30661,(0),null);
var lift_pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30661,(1),null);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map* zlift-ns ns:",ns__$1], 0))], 0)):null);
var l_str__$1 = (cljs.core.truth_(ns__$1)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__4126__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK___$1)?pair_seq__$1:zprint.zprint.order_out(caller,options__$1,cljs.core.first,pair_seq__$1));
var max_length = zprint.zprint.get_max_length(options__$1);
var pair_count = cljs.core.count(pair_seq__$2);
var pair_seq__$3 = (((pair_count > max_length))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,pair_seq__$2),(new cljs.core.List(null,(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null)),null,(1),null))):pair_seq__$2);
var indent__$1 = cljs.core.count(l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map(options__$1,l_str__$1),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc__$1,r_str);
if(cljs.core.empty_QMARK_(pair_seq__$3)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zstring.call(null,zloc__$1)),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",cljs.core.cst$kw$rightcnt.cljs$core$IFn$_invoke$arity$1(options__$1)], 0))], 0)):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up(caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,cljs.core.cst$kw$one_DASH_line_QMARK_,true)),(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow(pair_print_one_line);
var pair_print_one_line__$2 = ((zprint.zprint.fzfit_one_line(options__$1,zprint.zprint.style_lines(options__$1,(indent__$1 + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,zprint.zprint.interpose_either(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,cljs.core.cst$kw$comma),cljs.core.cst$kw$whitespace,(19)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(23)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(20)], null)], null),cljs.core.constantly(comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines(options__$1,(indent__$1 + ind),one_line);
var one_line__$1 = ((zprint.zprint.fzfit_one_line(options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line__$1,r_str_vec], 0));
} else {
if(cljs.core.not(one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up(caller,options__$1,(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.interpose_either_nl_hf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,cljs.core.cst$kw$comma),cljs.core.cst$kw$whitespace,(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(32)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,cljs.core.cst$kw$comma),cljs.core.cst$kw$whitespace,(22)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(33)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(34)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(35)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(36)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(37)], null)], null),cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(options__$1),comma_QMARK_,pair_print),r_str_vec], 0));
} else {
return null;
}
}
}
}
});
/**
 * Format a real map.
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__30667 = (cljs.core.truth_((zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znamespacedmap_QMARK_.call(null,zloc)))?(function (){var zloc_seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map: zloc-seq",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30670 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30670) : zprint.zfns.zstring.call(null,G__30670));
})(),cljs.core.second(zloc_seq)], null);
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(0),null);
var lifted_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map: ns:",ns,"indent:",cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(options)),"map-options:",cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(options)], 0))], 0));
} else {
}

if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_(cljs.core.cst$kw$map,"{","}",zprint.zprint.rightmost(options),ind,lifted_map,ns);
} else {
return zprint.zprint.fzprint_map_STAR_(cljs.core.cst$kw$map,"{","}",zprint.zprint.rightmost(options),ind,zloc,null);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find(/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__30672 = arguments.length;
switch (G__30672) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$object,"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2(zloc,zloc_value) : zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value)));
}));

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$object,"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zobj_to_vec.call(null,zloc)));
}));

(zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4);

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(obj));
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__30674,ind,zloc){
var map__30675 = p__30674;
var map__30675__$1 = (((((!((map__30675 == null))))?(((((map__30675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30675):map__30675);
var options = map__30675__$1;
var map__30676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30675__$1,cljs.core.cst$kw$atom);
var map__30676__$1 = (((((!((map__30676 == null))))?(((((map__30676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30676):map__30676);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30676__$1,cljs.core.cst$kw$object_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4115__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = ["Atom@",zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-atom: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null),zprint.zprint.fzprint_hang_one(cljs.core.cst$kw$unknown,zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc))),r_str_vec], 0));
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_((zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc)))?cljs.core.cst$kw$future:(cljs.core.truth_((zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc)))?cljs.core.cst$kw$promise:(cljs.core.truth_((zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc)))?cljs.core.cst$kw$delay:(cljs.core.truth_((zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc)))?cljs.core.cst$kw$agent:(function(){throw (new Error("Not a future, promise, or delay:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))))})()
))));
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$object_QMARK_.cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(zloc_type) : options.call(null,zloc_type)));
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4115__auto__;
}
})())){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,cljs.core.cst$kw$agent)) || (cljs.core.realized_QMARK_(zloc)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var type_str = (function (){var G__30679 = zloc_type;
var G__30679__$1 = (((G__30679 instanceof cljs.core.Keyword))?G__30679.fqn:null);
switch (G__30679__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30679__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,cljs.core.cst$kw$agent))?true:cljs.core.realized_QMARK_(zloc));
var value = ((zloc_realized_QMARK_)?(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)):(function (){var G__30680 = zloc_type;
var G__30680__$1 = (((G__30680 instanceof cljs.core.Keyword))?G__30680.fqn:null);
switch (G__30680__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30680__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$string_DASH_str_QMARK_,true));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options__$1,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null),zprint.zprint.fzprint_hang_one(cljs.core.cst$kw$unknown,zprint.zprint.rightmost(options__$1),arg_1_indent,(indent + ind),value),r_str_vec], 0));
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__30683,ind,zloc){
var map__30684 = p__30683;
var map__30684__$1 = (((((!((map__30684 == null))))?(((((map__30684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30684):map__30684);
var options = map__30684__$1;
var map__30685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30684__$1,cljs.core.cst$kw$fn_DASH_obj);
var map__30685__$1 = (((((!((map__30685 == null))))?(((((map__30685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30685):map__30685);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30685__$1,cljs.core.cst$kw$object_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4115__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$fn),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,ind,zloc,r_str,cljs.core.cst$kw$fn);
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str(zloc);
var arg_1_indent = ((((ind + indent) + (1)) + ((arg_1_left).length)) + ((arg_1_right).length));
var class_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0));
var name_js = cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name);
var color = (cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.re_find(/^clojure/,name_js);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.re_find(/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map(options,cljs.core.cst$kw$fn):cljs.core.cst$kw$none);
var name_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(name_split))].join('');
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$fn),cljs.core.cst$kw$element], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null),zprint.zprint.fzprint_hang_one(cljs.core.cst$kw$unknown,zprint.zprint.rightmost(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$string_DASH_str_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string_DASH_color,color], 0))),arg_1_indent,(indent + ind),arg_2),r_str_vec], 0));
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-ns: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null),zprint.zprint.fzprint_hang_one(cljs.core.cst$kw$unknown,zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),cljs.core.ns_name(zloc)),r_str_vec], 0));
});
/**
 * Given an options map, decrement the :depth value and return the result.
 */
zprint.zprint.dec_depth = (function zprint$zprint$dec_depth(options){
if(cljs.core.truth_(options)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$depth,((function (){var or__4126__auto__ = cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() - (1)));
} else {
return null;
}
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__30688,ind,zloc){
var map__30689 = p__30688;
var map__30689__$1 = (((((!((map__30689 == null))))?(((((map__30689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30689):map__30689);
var options = map__30689__$1;
var map__30690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30689__$1,cljs.core.cst$kw$record);
var map__30690__$1 = (((((!((map__30690 == null))))?(((((map__30690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30690):map__30690);
var record_type_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30690__$1,cljs.core.cst$kw$record_DASH_type_QMARK_);
var to_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30690__$1,cljs.core.cst$kw$to_DASH_string_QMARK_);
if(cljs.core.truth_(to_string_QMARK_)){
var G__30693 = options;
var G__30694 = ind;
var G__30695 = zloc.toString();
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30693,G__30694,G__30695) : zprint.zprint.fzprint_STAR_.call(null,G__30693,G__30694,G__30695));
} else {
if(cljs.core.not(record_type_QMARK_)){
var G__30696 = options;
var G__30697 = ind;
var G__30698 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__30696,G__30697,G__30698) : zprint.zprint.fzprint_STAR_.call(null,G__30696,G__30697,G__30698));
} else {
var l_str = "#";
var r_str = "";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0)),"/",".");
var arg_1__$1 = (function (){var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(arg_1,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",tokens)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1__$1));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map(options,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null),zprint.zprint.fzprint_hang_one(cljs.core.cst$kw$record,zprint.zprint.dec_depth(options),arg_1_indent,(indent + ind),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec], 0));
}
}
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-meta: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(cljs.core.truth_(cljs.core.cst$kw$indent_DASH_only_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$list.cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9(cljs.core.cst$kw$vector,l_str,"",options,ind,zloc,null,null,cljs.core.cst$kw$first_DASH_indent_DASH_only_QMARK_):zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(((l_str).length) + ind),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) - (1)),ind)),zprint.zprint.fzprint_get_zloc_seq(cljs.core.cst$kw$list,options,zloc))),r_str_vec], 0));
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = (function (){var G__30702 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30702) : zprint.zfns.zstring.call(null,G__30702));
})();
var alt_at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(zstr),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30704 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__30704) : zprint.zfns.ztag.call(null,G__30704));
})(),cljs.core.cst$kw$deref)) || (alt_at_QMARK_));
var vec__30699 = zprint.zprint.get_respect_indent(options,cljs.core.cst$kw$reader_DASH_cond,cljs.core.cst$kw$map);
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699,(2),null);
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_(((reader_cond_QMARK_)?(function (){var G__30706 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30706) : zprint.zfns.zcoll_QMARK_.call(null,G__30706));
})():false))?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30708 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__30708) : zprint.zfns.zstring.call(null,G__30708));
})())].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_DASH_bug_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?null:null);
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),cljs.core.cst$kw$left], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var floc = ((((at_QMARK_) && ((!(alt_at_QMARK_)))))?(function (){var G__30709 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(G__30709) : zprint.zfns.zfirst.call(null,G__30709));
})():(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc)));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-reader-macro: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"floc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(floc) : zprint.zfns.zstring.call(null,floc)),"l-str:",l_str], 0))], 0));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var l_str_io = ((reader_cond_QMARK_)?[l_str,"("].join(''):l_str);
var r_str_io = ((reader_cond_QMARK_)?")":"");
var l_str_vec_io = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str_io,zprint.zprint.zcolor_map(options,l_str_io),cljs.core.cst$kw$left], null)], null);
var r_str_vec_io = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str_io);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec_io,((reader_cond_QMARK_)?zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(cljs.core.cst$kw$map,l_str_io,r_str_io,zprint.zprint.rightmost(options),ind,floc,null,null):zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(cljs.core.cst$kw$map,l_str_io,r_str_io,zprint.zprint.rightmost(options),ind,((namespaced_QMARK_)?(zprint.zfns.znextnws_w_nl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znextnws_w_nl.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znextnws_w_nl.call(null,zloc)):zloc),null,null)),r_str_vec_io], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$none,cljs.core.cst$kw$element], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_(cljs.core.cst$kw$reader_DASH_cond,"(",")",zprint.zprint.rightmost(options),(indent + ind),floc,null):zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,(indent + ind),(function (){var zloc_seq = (cljs.core.truth_(respect_nl_QMARK_)?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(respect_bl_QMARK_)?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
if(namespaced_QMARK_){
return cljs.core.next(zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec], 0));
}
});
/**
 * Given an element which contains newlines, split it up into individual
 *   newline elements.
 */
zprint.zprint.fzprint_newline = (function zprint$zprint$fzprint_newline(options,ind,zloc){
var zstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var vec__30710 = zprint.finish.newline_vec(zstr);
var newline_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30710,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30710,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-newline: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"newline-count:",newline_count,"ind:",ind], 0))], 0));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(newline_count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$newline,(2)], null)));
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$quote,"'",cljs.core.cst$kw$syntax_DASH_quote,"`",cljs.core.cst$kw$unquote,"~",cljs.core.cst$kw$unquote_DASH_splicing,"~@",cljs.core.cst$kw$deref,"@",cljs.core.cst$kw$var,"#'",cljs.core.cst$kw$uneval,"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,cljs.core.cst$kw$uneval)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$color_DASH_map,cljs.core.cst$kw$color_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uneval.cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,cljs.core.cst$kw$syntax_DASH_quote)){
return cljs.core.assoc_in(cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color_DASH_map,cljs.core.cst$kw$paren], null),cljs.core.cst$kw$syntax_DASH_quote_DASH_paren.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$color_DASH_map.cljs$core$IFn$_invoke$arity$1(options))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color_DASH_map,cljs.core.cst$kw$hash_DASH_paren], null),cljs.core.cst$kw$syntax_DASH_quote_DASH_paren.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$color_DASH_map.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * Sometime we need to give a caller to a routine, and there isn't
 *   a specific caller in the configuration.  So, we will use the configuration
 *   from some other caller and make up a new one just for this situation.
 *   The key-seq is the series of keys to both look up and create.  The
 *   caller is the new caller, and the existing-caller is the one from which
 *   we we will extract the information. This returns a new options map with
 *   the new-caller in it.
 */
zprint.zprint.make_caller = (function zprint$zprint$make_caller(options,new_caller,existing_caller,key_seq){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_caller], null),key_seq),(function (p1__30713_SHARP_){

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_caller], null),key_seq));
}));
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__30714,indent,zloc){
var map__30715 = p__30714;
var map__30715__$1 = (((((!((map__30715 == null))))?(((((map__30715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30715):map__30715);
var options = map__30715__$1;
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$max_DASH_depth);
var shift_seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$shift_DASH_seq);
var max_hang_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$max_DASH_hang_DASH_count);
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
var max_hang_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$max_DASH_hang_DASH_depth);
var next_inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$next_DASH_inner);
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$in_DASH_hang_QMARK_);
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$rightcnt);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$width);
var hex_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$hex_QMARK_);
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$dbg_DASH_print_QMARK_);
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$dbg_QMARK_);
var string_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$string_DASH_color);
var trim_comments_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$trim_DASH_comments_QMARK_);
var max_hang_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$max_DASH_hang_DASH_span);
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$one_DASH_line_QMARK_);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$depth);
var string_str_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30715__$1,cljs.core.cst$kw$string_DASH_str_QMARK_);
var avail = (width - indent);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$depth,(depth + (1)));
var options__$2 = (cljs.core.truth_(next_inner)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.first(zprint.config.config_and_validate("next-inner:",null,options__$1,next_inner)),cljs.core.cst$kw$next_DASH_inner):options__$1);
var options__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dbg_print_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$2,cljs.core.cst$kw$dbg_DASH_indent,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$2,cljs.core.cst$kw$dbg_DASH_indent,"")),(cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
))].join('')):options__$2);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint* **** rightcnt:",rightcnt,"depth:",depth,"in-hang?:",in_hang_QMARK_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0)):null);
var dbg_data = cljs.core.deref(zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__4115__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dbg_data,cljs.core.second((zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfind_path.call(null,zloc))));
} else {
return and__4115__auto__;
}
})();
var options__$4 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$3,cljs.core.cst$kw$dbg,cljs.core.cst$kw$on):options__$3);
var ___$1 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint dbg-data:",dbg_data], 0)):null);
if(cljs.core.truth_((function (){var and__4115__auto__ = (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc));
if(cljs.core.truth_(and__4115__auto__)){
return (((depth >= max_depth)) || ((zprint.zprint.get_max_length(options__$4) === (0))));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_depth_DASH_string.cljs$core$IFn$_invoke$arity$1(options__$4),zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$keyword),cljs.core.cst$kw$element], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(one_line_QMARK_)) && (cljs.core.not(in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not(one_line_QMARK_)) && (((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) > max_hang_count)) && ((depth > max_hang_depth)))))));
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zrecord_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_record(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zlist_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_list(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zvector_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_vec(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmap_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znamespacedmap_QMARK_.call(null,zloc));
}
})())){
return zprint.zprint.fzprint_map(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zset_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_set(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zanonfn_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_anon_fn(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfn_obj_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_fn_obj(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zarray_QMARK_.call(null,zloc)))){
if(cljs.core.truth_(cljs.core.cst$kw$object_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$array.cljs$core$IFn$_invoke$arity$1(options__$4)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options__$4,indent,zloc);
} else {
return zprint.zprint.fzprint_array(options__$4,indent,(zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zexpandarray.call(null,zloc)));
}
} else {
if(cljs.core.truth_((zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zatom_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_atom(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmeta_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_meta(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var G__30717 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__30717) : zprint.zprint.prefix_tags.call(null,G__30717));
})())){
return zprint.zprint.fzprint_vec_STAR_(cljs.core.cst$kw$prefix_DASH_tags,(function (){var G__30718 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__30718) : zprint.zprint.prefix_tags.call(null,G__30718));
})(),"",zprint.zprint.make_caller(zprint.zprint.make_caller(zprint.zprint.make_caller(zprint.zprint.prefix_options(options__$4,(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc))),cljs.core.cst$kw$prefix_DASH_tags,cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indent_DASH_only_QMARK_], null)),cljs.core.cst$kw$prefix_DASH_tags,cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$respect_DASH_nl_QMARK_], null)),cljs.core.cst$kw$prefix_DASH_tags,cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$respect_DASH_bl_QMARK_], null)),indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zns_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_ns(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return (zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc));
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zreader_macro_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_reader_macro(options__$4,indent,zloc);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),cljs.core.cst$kw$newline)) && ((depth > (0))))){
return zprint.zprint.fzprint_newline(options__$4,indent,zloc);
} else {
var zstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var overflow_in_hang_QMARK_ = (function (){var and__4115__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.core.count(zstr) + indent) + (function (){var or__4126__auto__ = rightcnt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null),zstr));
} else {
return and__4115__auto__;
}
})())){
return zprint.zprint.fzprint_newline(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc)))){
var zcomment = (((((depth === (0))) && (cljs.core.not(trim_comments_QMARK_))))?zstr:clojure.string.trimr(zstr));
var inline_comment_vec = (cljs.core.truth_(cljs.core.cst$kw$inline_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options__$4)))?zprint.comment.inlinecomment_QMARK_(zloc):null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint* trim-comments?:",trim_comments_QMARK_,"inline-comment-vec:",inline_comment_vec], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$count_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options__$4));
if(cljs.core.truth_(and__4115__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow comment ========"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_comment_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$comment),cljs.core.cst$kw$comment_DASH_inline,cljs.core.first(inline_comment_vec),cljs.core.second(inline_comment_vec)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$comment),cljs.core.cst$kw$comment], null)], null);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),cljs.core.cst$kw$comma)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$comma),cljs.core.cst$kw$comma], null)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),cljs.core.cst$kw$whitespace)) && (clojure.string.includes_QMARK_(zstr,",")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$comma),cljs.core.cst$kw$comma], null)], null);
} else {
if(cljs.core.truth_((zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,cljs.core.cst$kw$none,cljs.core.cst$kw$whitespace,(24)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow <<<<<<<<<<"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_((zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zkeyword_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$keyword),cljs.core.cst$kw$element], null)], null);
} else {
var zloc_sexpr = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc));
if(typeof zloc_sexpr === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))):(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$string)),cljs.core.cst$kw$element], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_(options__$4,(zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$fn),cljs.core.cst$kw$element], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_(options__$4,(zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$user_DASH_fn),cljs.core.cst$kw$element], null)], null);
} else {
if(typeof (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?(zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3(zloc,hex_QMARK_,shift_seq) : zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq)):zstr),zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$number),cljs.core.cst$kw$element], null)], null);
} else {
if(((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$symbol),cljs.core.cst$kw$element], null)], null);
} else {
if(((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$nil),cljs.core.cst$kw$element], null)], null);
} else {
if((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) === true){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$true),cljs.core.cst$kw$element], null)], null);
} else {
if((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) === false){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$false),cljs.core.cst$kw$element], null)], null);
} else {
if(cljs.core.char_QMARK_((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$char),cljs.core.cst$kw$element], null)], null);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var c__4162__auto__ = cljs.core.type(/regex/);
var x__4163__auto__ = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc));
return (x__4163__auto__ instanceof c__4162__auto__);
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.re_find(/^#\".*\"$/,zstr);
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$regex),cljs.core.cst$kw$element], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,cljs.core.cst$kw$none),cljs.core.cst$kw$element], null)], null);

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
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint: indent:",indent,"(:indent options)",cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(options)], 0));
} else {
}

var zloc__$1 = ((cljs.core.not(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ztype.cljs$core$IFn$_invoke$arity$1(options),cljs.core.cst$kw$zipper))?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(options)):false)))?zloc:zprint.zutil.add_spec_to_docstring(zloc,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$depth,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$map_DASH_depth,(0)], 0)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count(cljs.core.re_seq(/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,zprint.zprint.line_widths(s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__30720 = arguments.length;
switch (G__30720) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
if(clojure.string.includes_QMARK_(s,"\t")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var char_seq = cljs.core.seq(s);
var cur_len = cljs.core.long$((0));
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(char_seq)){
return cljs.core.persistent_BANG_(out);
} else {
var this_char = cljs.core.first(char_seq);
var tab_expansion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\t"))?(tab_size - cljs.core.mod(cur_len,tab_size)):null);
var G__30722 = cljs.core.rest(char_seq);
var G__30723 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\n"))?(0):(cur_len + cljs.core.long$((function (){var or__4126__auto__ = tab_expansion;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})())));
var G__30724 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zprint.zprint.conj_it_BANG_,out,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tab_expansion," ")):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,this_char));
char_seq = G__30722;
cur_len = G__30723;
out = G__30724;
continue;
}
break;
}
})());
} else {
return s;
}
}));

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((8),s);
}));

(zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2);

/**
 * Given a string, find the line ending that is predominent in the beginning
 *   of the string, and split the string into separate lines.  Returns 
 *   [line-ending-string vector-of-lines]
 */
zprint.zprint.determine_ending_split_lines = (function zprint$zprint$determine_ending_split_lines(s){
if(clojure.string.includes_QMARK_(s,"\r")){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\r\n|\r|\n/,(-1));
var first_lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(function (){var x__4217__auto__ = cljs.core.count(s);
var y__4218__auto__ = (2000);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),/\r/);
var nl_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30726_SHARP_,p2__30725_SHARP_){
if(clojure.string.starts_with_QMARK_(p2__30725_SHARP_,"\n")){
return (p1__30726_SHARP_ + (1));
} else {
return p1__30726_SHARP_;
}
}),(0),first_lines);
var line_ending = (((nl_count >= (cljs.core.count(first_lines) / (2))))?"\r\n":"\r");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_ending,lines], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\n/,(-1))], null);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30728,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30732 = k30728;
var G__30732__$1 = (((G__30732 instanceof cljs.core.Keyword))?G__30732.fqn:null);
switch (G__30732__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30728,else__4383__auto__);

}
}));

(zprint.zprint.r.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30733){
var vec__30734 = p__30733;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#zprint.zprint.r{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$left,self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$right,self__.right],null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30727){
var self__ = this;
var G__30727__$1 = this;
return (new cljs.core.RecordIter((0),G__30727__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$right], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__30737 = (function (coll__4377__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__30737(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30729,other30730){
var self__ = this;
var this30729__$1 = this;
return (((!((other30730 == null)))) && ((this30729__$1.constructor === other30730.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30729__$1.left,other30730.left)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30729__$1.right,other30730.right)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30729__$1.__extmap,other30730.__extmap)));
}));

(zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,null,cljs.core.cst$kw$left,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30727){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30738 = cljs.core.keyword_identical_QMARK_;
var expr__30739 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__30741 = cljs.core.cst$kw$left;
var G__30742 = expr__30739;
return (pred__30738.cljs$core$IFn$_invoke$arity$2 ? pred__30738.cljs$core$IFn$_invoke$arity$2(G__30741,G__30742) : pred__30738.call(null,G__30741,G__30742));
})())){
return (new zprint.zprint.r(G__30727,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30743 = cljs.core.cst$kw$right;
var G__30744 = expr__30739;
return (pred__30738.cljs$core$IFn$_invoke$arity$2 ? pred__30738.cljs$core$IFn$_invoke$arity$2(G__30743,G__30744) : pred__30738.call(null,G__30743,G__30744));
})())){
return (new zprint.zprint.r(self__.left,G__30727,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30727),null));
}
}
}));

(zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$left,self__.left,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$right,self__.right,null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30727){
var self__ = this;
var this__4379__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__30727,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$left,cljs.core.cst$sym$right], null);
}));

(zprint.zprint.r.cljs$lang$type = true);

(zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
}));

(zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"zprint.zprint/r");
}));

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__30731){
var extmap__4419__auto__ = (function (){var G__30745 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30731,cljs.core.cst$kw$left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right], 0));
if(cljs.core.record_QMARK_(G__30731)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30745);
} else {
return G__30745;
}
})();
return (new zprint.zprint.r(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(G__30731),cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(G__30731),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});
