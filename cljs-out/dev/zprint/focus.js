// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.focus');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.ansi');
/**
 * What is this element in a str-style-vec?
 */
zprint.focus.type_ssv = (function zprint$focus$type_ssv(ssv_element){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(ssv_element,(2),cljs.core.cst$kw$whitespace);
});
/**
 * Skip any whitespace in this ssv starting at n. Whitespace is :whitespace
 *   and :indent
 */
zprint.focus.skip_whitespace_ssv = (function zprint$focus$skip_whitespace_ssv(ssv,n){
var index = n;
while(true){
if((index >= cljs.core.count(ssv))){
return (index - (1));
} else {
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index)),cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index)),cljs.core.cst$kw$indent)))))){
return index;
} else {
var G__29846 = (index + (1));
index = G__29846;
continue;
}
}
break;
}
});
/**
 * Given a str-style-vec, move into a collection at element n.
 */
zprint.focus.down_ssv = (function zprint$focus$down_ssv(ssv,n){
var non_ws_n = zprint.focus.skip_whitespace_ssv(ssv,n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,non_ws_n)),cljs.core.cst$kw$left)){
return (non_ws_n + (1));
} else {
return null;
}
});
/**
 * Given a str-style-vec, move to the next element beyond this
 *   one.  This will skip over entire collections, if there are any.
 *   It will also ignore :whitespace elements.
 */
zprint.focus.next_ssv = (function zprint$focus$next_ssv(ssv,n){
var index = n;
var skip_to_right_QMARK_ = null;
var next_nonws_QMARK_ = null;
while(true){
if((index >= cljs.core.count(ssv))){
return null;
} else {
var index_type = zprint.focus.type_ssv(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ssv,index));
var new_next_nonws_QMARK_ = ((((cljs.core.not(skip_to_right_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$right)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$left)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$whitespace)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$indent)));
if(cljs.core.truth_(next_nonws_QMARK_)){
return index;
} else {
var G__29847 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$left))?skip_to_right_QMARK_:false))?(zprint.focus.next_ssv.cljs$core$IFn$_invoke$arity$2 ? zprint.focus.next_ssv.cljs$core$IFn$_invoke$arity$2(ssv,index) : zprint.focus.next_ssv.call(null,ssv,index)):(index + (1)));
var G__29848 = (function (){var and__4115__auto__ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$left);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return skip_to_right_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index_type,cljs.core.cst$kw$right);
} else {
return and__4115__auto__;
}
})();
var G__29849 = new_next_nonws_QMARK_;
index = G__29847;
skip_to_right_QMARK_ = G__29848;
next_nonws_QMARK_ = G__29849;
continue;
}
}
break;
}
});
/**
 * Given a str-style-vec, move right nr elements.
 */
zprint.focus.right_ssv = (function zprint$focus$right_ssv(nr,ssv,n){
var index = n;
var moves = nr;
while(true){
if(cljs.core.truth_(index)){
if((moves === (0))){
if(cljs.core.truth_(index)){
return zprint.focus.skip_whitespace_ssv(ssv,index);
} else {
return null;
}
} else {
var G__29850 = zprint.focus.next_ssv(ssv,index);
var G__29851 = (moves - (1));
index = G__29850;
moves = G__29851;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Given a non-whitespace path from a zipper, find that same
 *   collection or element in a str-style-vec.
 */
zprint.focus.path_ssv = (function zprint$focus$path_ssv(nwpath,ssv){
var idx = (0);
var nwp = nwpath;
while(true){
if(cljs.core.truth_(idx)){
if(cljs.core.empty_QMARK_(nwp)){
return idx;
} else {
var G__29852 = zprint.focus.right_ssv(cljs.core.first(nwp),ssv,zprint.focus.down_ssv(ssv,idx));
var G__29853 = cljs.core.next(nwp);
idx = G__29852;
nwp = G__29853;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Use a non-whitespace path from a zipper, and find that
 *   same collection or element in a str-style-vec, and return
 *   a vector of the start and end of that collection or element.
 *   Depends on next-ssv returning one past the end of its input.
 */
zprint.focus.range_ssv = (function zprint$focus$range_ssv(ssv,nwpath){
var start = zprint.focus.path_ssv(nwpath,ssv);
var start__$1 = zprint.focus.skip_whitespace_ssv(ssv,start);
var ssv_next = zprint.focus.next_ssv(ssv,start__$1);
var end = (cljs.core.truth_((function (){var and__4115__auto__ = ssv_next;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start__$1,(0));
} else {
return and__4115__auto__;
}
})())?(function (){var fexpr__29854 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1));
return (fexpr__29854.cljs$core$IFn$_invoke$arity$1 ? fexpr__29854.cljs$core$IFn$_invoke$arity$1(ssv_next) : fexpr__29854.call(null,ssv_next));
})():(cljs.core.count(ssv) - (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end], null);
});
