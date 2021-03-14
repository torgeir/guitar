// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
goog.require('clojure.zip');
rewrite_clj.zip.seqz.seq_QMARK_ = (function rewrite_clj$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$vector,null,cljs.core.cst$kw$list,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null,cljs.core.cst$kw$forms,null], null), null),rewrite_clj.zip.base.tag(zloc));
});
rewrite_clj.zip.seqz.list_QMARK_ = (function rewrite_clj$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),cljs.core.cst$kw$list);
});
rewrite_clj.zip.seqz.vector_QMARK_ = (function rewrite_clj$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),cljs.core.cst$kw$vector);
});
rewrite_clj.zip.seqz.set_QMARK_ = (function rewrite_clj$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),cljs.core.cst$kw$set);
});
rewrite_clj.zip.seqz.map_QMARK_ = (function rewrite_clj$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(zloc),cljs.core.cst$kw$map);
});
rewrite_clj.zip.seqz.map_seq = (function rewrite_clj$zip$seqz$map_seq(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5718__auto__ = rewrite_clj.zip.move.down(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var n0 = temp__5718__auto__;
var G__24036 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n0) : f.call(null,n0));
var G__24036__$1 = (((G__24036 == null))?null:cljs.core.iterate((function (loc){
var temp__5718__auto____$1 = rewrite_clj.zip.move.right(loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var n = temp__5718__auto____$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n));
} else {
return null;
}
}),G__24036));
var G__24036__$2 = (((G__24036__$1 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__24036__$1));
var G__24036__$3 = (((G__24036__$2 == null))?null:cljs.core.last(G__24036__$2));
if((G__24036__$3 == null)){
return null;
} else {
return rewrite_clj.zip.move.up(G__24036__$3);
}
} else {
return zloc;
}
});
/**
 * Apply function to all value nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_vals = (function rewrite_clj$zip$seqz$map_vals(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4115__auto__ = loc;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.zip.node(loc);
} else {
return and__4115__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = rewrite_clj.zip.move.right(loc);
if(cljs.core.truth_(temp__5718__auto__)){
var v0 = temp__5718__auto__;
var temp__5718__auto____$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var v = temp__5718__auto____$1;
var G__24037 = rewrite_clj.zip.move.right(v);
var G__24038 = rewrite_clj.zip.move.up(v);
loc = G__24037;
parent = G__24038;
continue;
} else {
var G__24039 = rewrite_clj.zip.move.right(v0);
var G__24040 = parent;
loc = G__24039;
parent = G__24040;
continue;
}
} else {
return parent;
}
}
break;
}
});
/**
 * Apply function to all key nodes of the given map node.
 */
rewrite_clj.zip.seqz.map_keys = (function rewrite_clj$zip$seqz$map_keys(f,zloc){
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_clj.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4115__auto__ = loc;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.zip.node(loc);
} else {
return and__4115__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__24041 = rewrite_clj.zip.move.right(rewrite_clj.zip.move.right(v));
var G__24042 = rewrite_clj.zip.move.up(v);
loc = G__24041;
parent = G__24042;
continue;
} else {
var G__24043 = rewrite_clj.zip.move.right(rewrite_clj.zip.move.right(loc));
var G__24044 = parent;
loc = G__24043;
parent = G__24044;
continue;
}
}
break;
}
});
/**
 * Apply function to all value nodes in the given seq node. Iterates over
 * value nodes of maps but over each element of a seq.
 */
rewrite_clj.zip.seqz.map = (function rewrite_clj$zip$seqz$map(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
return rewrite_clj.zip.seqz.map_vals(f,zloc);
} else {
return rewrite_clj.zip.seqz.map_seq(f,zloc);
}
});
/**
 * If a map is given, get element with the given key; if a seq is given, get nth element.
 */
rewrite_clj.zip.seqz.get = (function rewrite_clj$zip$seqz$get(zloc,k){
if(((rewrite_clj.zip.seqz.map_QMARK_(zloc)) || (((rewrite_clj.zip.seqz.seq_QMARK_(zloc)) && (cljs.core.integer_QMARK_(k)))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
var G__24045 = zloc;
var G__24045__$1 = (((G__24045 == null))?null:rewrite_clj.zip.move.down(G__24045));
var G__24045__$2 = (((G__24045__$1 == null))?null:rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2(G__24045__$1,k));
if((G__24045__$2 == null)){
return null;
} else {
return rewrite_clj.zip.move.right(G__24045__$2);
}
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__24046 = rewrite_clj.zip.move.down(zloc);
var G__24046__$1 = (((G__24046 == null))?null:cljs.core.iterate(rewrite_clj.zip.move.right,G__24046));
if((G__24046__$1 == null)){
return null;
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__24046__$1);
}
})(),k);
}
});
/**
 * Set map/seq element to the given value.
 */
rewrite_clj.zip.seqz.assoc = (function rewrite_clj$zip$seqz$assoc(zloc,k,v){
var temp__5718__auto__ = rewrite_clj.zip.seqz.get(zloc,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vloc = temp__5718__auto__;
return rewrite_clj.zip.move.up(rewrite_clj.zip.editz.replace(vloc,v));
} else {
if(rewrite_clj.zip.seqz.map_QMARK_(zloc)){
return rewrite_clj.zip.insert.append_child(rewrite_clj.zip.insert.append_child(zloc,k),v);
} else {
throw (new Error(["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
}
});
