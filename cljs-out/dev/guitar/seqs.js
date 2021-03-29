// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.seqs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.seqs.shift_n = (function guitar$seqs$shift_n(at,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_at(at,coll)));
});
guitar.seqs.index_of = (function guitar$seqs$index_of(coll,el){
return cljs.core.ffirst(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__22900_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,cljs.core.second(p1__22900_SHARP_));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
});
guitar.seqs.insert_at = (function guitar$seqs$insert_at(coll,at,n){
var vec__22901 = cljs.core.split_at(at,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22901,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22901,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
});
guitar.seqs.zip = (function guitar$seqs$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22905 = arguments.length;
var i__4737__auto___22906 = (0);
while(true){
if((i__4737__auto___22906 < len__4736__auto___22905)){
args__4742__auto__.push((arguments[i__4737__auto___22906]));

var G__22907 = (i__4737__auto___22906 + (1));
i__4737__auto___22906 = G__22907;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.seqs.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.seqs.zip.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
if((cljs.core.count(rest) === (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,rest);
}
}));

(guitar.seqs.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.seqs.zip.cljs$lang$applyTo = (function (seq22904){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22904));
}));

