// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13071 = arguments.length;
var i__4737__auto___13072 = (0);
while(true){
if((i__4737__auto___13072 < len__4736__auto___13071)){
args__4742__auto__.push((arguments[i__4737__auto___13072]));

var G__13073 = (i__4737__auto___13072 + (1));
i__4737__auto___13072 = G__13073;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq13068){
var G__13069 = cljs.core.first(seq13068);
var seq13068__$1 = cljs.core.next(seq13068);
var G__13070 = cljs.core.first(seq13068__$1);
var seq13068__$2 = cljs.core.next(seq13068__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13069,G__13070,seq13068__$2);
}));

