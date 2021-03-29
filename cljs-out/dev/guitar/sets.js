// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.sets');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.sets.toggle_in = (function guitar$sets$toggle_in(el,a_set){
var fexpr__38654 = (cljs.core.truth_((a_set.cljs$core$IFn$_invoke$arity$1 ? a_set.cljs$core$IFn$_invoke$arity$1(el) : a_set.call(null,el)))?cljs.core.disj:cljs.core.conj);
return (fexpr__38654.cljs$core$IFn$_invoke$arity$2 ? fexpr__38654.cljs$core$IFn$_invoke$arity$2(a_set,el) : fexpr__38654.call(null,a_set,el));
});
guitar.sets.indexed_map = (function guitar$sets$indexed_map(set){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.first),cljs.core.second),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,set)))));
});
