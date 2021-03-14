// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.setup');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
guitar.setup.scale_length = (24);
guitar.setup.tuning = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","d","g","b","e"], null);
guitar.setup.tuning_distances = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15085){
var vec__15086 = p__15085;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15086,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15086,(1),null);
return cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,b),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,a),cljs.core.cycle(guitar.notes.notes))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),guitar.setup.tuning));
