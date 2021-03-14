// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.reify');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17474 = arguments.length;
var i__4737__auto___17475 = (0);
while(true){
if((i__4737__auto___17475 < len__4736__auto___17474)){
args__4742__auto__.push((arguments[i__4737__auto___17475]));

var G__17476 = (i__4737__auto___17475 + (1));
i__4737__auto___17475 = G__17476;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,args){
var classes__GT_methods = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,args);
var classes__GT_methods__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17470){
var vec__17471 = p__17470;
var seq__17472 = cljs.core.seq(vec__17471);
var first__17473 = cljs.core.first(seq__17472);
var seq__17472__$1 = cljs.core.next(seq__17472);
var class$ = first__17473;
var methods$ = seq__17472__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),methods$))], null);
}),classes__GT_methods));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reify_STAR_,null,(1),null)),(new cljs.core.List(null,classes__GT_methods__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq17466){
var G__17467 = cljs.core.first(seq17466);
var seq17466__$1 = cljs.core.next(seq17466);
var G__17468 = cljs.core.first(seq17466__$1);
var seq17466__$2 = cljs.core.next(seq17466__$1);
var G__17469 = cljs.core.first(seq17466__$2);
var seq17466__$3 = cljs.core.next(seq17466__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17467,G__17468,G__17469,seq17466__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,classes__GT_methods){
var vec__17478 = cljs.core.first(classes__GT_methods);
var interface$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17478,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17478,(1),null);
return sci.impl.types.__GT_Reified(interface$,methods$);
});
