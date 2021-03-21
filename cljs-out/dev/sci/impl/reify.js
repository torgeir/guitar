// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.reify');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15766 = arguments.length;
var i__4737__auto___15767 = (0);
while(true){
if((i__4737__auto___15767 < len__4736__auto___15766)){
args__4742__auto__.push((arguments[i__4737__auto___15767]));

var G__15768 = (i__4737__auto___15767 + (1));
i__4737__auto___15767 = G__15768;
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
var classes__GT_methods__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15762){
var vec__15763 = p__15762;
var seq__15764 = cljs.core.seq(vec__15763);
var first__15765 = cljs.core.first(seq__15764);
var seq__15764__$1 = cljs.core.next(seq__15764);
var class$ = first__15765;
var methods$ = seq__15764__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),methods$))], null);
}),classes__GT_methods));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reify_STAR_,null,(1),null)),(new cljs.core.List(null,classes__GT_methods__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq15758){
var G__15759 = cljs.core.first(seq15758);
var seq15758__$1 = cljs.core.next(seq15758);
var G__15760 = cljs.core.first(seq15758__$1);
var seq15758__$2 = cljs.core.next(seq15758__$1);
var G__15761 = cljs.core.first(seq15758__$2);
var seq15758__$3 = cljs.core.next(seq15758__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15759,G__15760,G__15761,seq15758__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,classes__GT_methods){
var vec__15770 = cljs.core.first(classes__GT_methods);
var interface$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15770,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15770,(1),null);
return sci.impl.types.__GT_Reified(interface$,methods$);
});
