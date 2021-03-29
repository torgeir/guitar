// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.setup');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
guitar.setup.scale_length = (24);
guitar.setup.tuning = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","d","g","b","e"], null);
guitar.setup.tuning_distances = (function guitar$setup$tuning_distances(tuning){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24168){
var vec__24169 = p__24168;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24169,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24169,(1),null);
return cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,b),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,a),cljs.core.cycle(guitar.notes.notes))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),tuning));
});
