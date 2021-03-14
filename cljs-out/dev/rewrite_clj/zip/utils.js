// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__16065,k,f){
var vec__16066 = p__16065;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16066,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16066,(1),null);
var loc = vec__16066;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,k);
if(cljs.core.seq(v)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path(loc,cljs.core.cst$kw$r,cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path(loc,cljs.core.cst$kw$l,cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev(zloc__$1);
if(cljs.core.not((function (){var and__4115__auto__ = ploc;
if(cljs.core.truth_(and__4115__auto__)){
return (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(ploc) : p_QMARK_.call(null,ploc));
} else {
return and__4115__auto__;
}
})())){
return zloc__$1;
} else {
var G__16069 = clojure.zip.remove(zloc__$1);
zloc__$1 = G__16069;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5718__auto__ = clojure.zip.right(zloc__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var rloc = temp__5718__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc) : p_QMARK_.call(null,rloc)))){
var G__16070 = rewrite_clj.zip.utils.remove_right(zloc__$1);
zloc__$1 = G__16070;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5718__auto__ = clojure.zip.left(zloc__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : p_QMARK_.call(null,lloc)))){
var G__16071 = rewrite_clj.zip.utils.remove_left(zloc__$1);
zloc__$1 = G__16071;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__16072){
var vec__16073 = p__16072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073,(0),null);
var map__16076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073,(1),null);
var map__16076__$1 = (((((!((map__16076 == null))))?(((((map__16076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16076):map__16076);
var path = map__16076__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$l);
var loc = vec__16073;
if(cljs.core.seq(l)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l], null),cljs.core.pop),cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__16078){
var vec__16079 = p__16078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079,(0),null);
var map__16082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079,(1),null);
var map__16082__$1 = (((((!((map__16082 == null))))?(((((map__16082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16082):map__16082);
var path = map__16082__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16082__$1,cljs.core.cst$kw$r);
var loc = vec__16079;
if(cljs.core.seq(r)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null),cljs.core.next),cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__16084 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(0),null);
var map__16087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(1),null);
var map__16087__$1 = (((((!((map__16087 == null))))?(((((map__16087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16087):map__16087);
var path = map__16087__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16087__$1,cljs.core.cst$kw$r);
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count(l) > (0))){
return clojure.zip.up(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc)));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__4115__auto__ = ppath;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__4115__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});
