// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.multimethods');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15542 = arguments.length;
var i__4737__auto___15543 = (0);
while(true){
if((i__4737__auto___15543 < len__4736__auto___15542)){
args__4742__auto__.push((arguments[i__4737__auto___15543]));

var G__15544 = (i__4737__auto___15543 + (1));
i__4737__auto___15543 = G__15544;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__15532 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532,(1),null);
var vec__15535 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$ns,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_ns_STAR_,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15538){
var vec__15539 = p__15538;
var seq__15540 = cljs.core.seq(vec__15539);
var first__15541 = cljs.core.first(seq__15540);
var seq__15540__$1 = cljs.core.next(seq__15540);
var method_name = first__15541;
var ___$2 = seq__15540__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmulti,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__15520__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__15521__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$methods__15522__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_reified_DASH_methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__15520__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$methods__15522__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__15520__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__15521__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(cljs.core.cst$kw$extend_DASH_via_DASH_metadata.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__15523__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__15524__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$meta__15525__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__15523__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$method__15526__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$meta__15525__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__15526__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__15526__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__15523__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__15524__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__15523__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_update,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq15527){
var G__15528 = cljs.core.first(seq15527);
var seq15527__$1 = cljs.core.next(seq15527);
var G__15529 = cljs.core.first(seq15527__$1);
var seq15527__$2 = cljs.core.next(seq15527__$1);
var G__15530 = cljs.core.first(seq15527__$2);
var seq15527__$3 = cljs.core.next(seq15527__$2);
var G__15531 = cljs.core.first(seq15527__$3);
var seq15527__$4 = cljs.core.next(seq15527__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15528,G__15529,G__15530,G__15531,seq15527__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15557 = arguments.length;
var i__4737__auto___15558 = (0);
while(true){
if((i__4737__auto___15558 < len__4736__auto___15557)){
args__4742__auto__.push((arguments[i__4737__auto___15558]));

var G__15559 = (i__4737__auto___15558 + (1));
i__4737__auto___15558 = G__15559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__15545_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__15545_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__15552 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__15552.cljs$core$IFn$_invoke$arity$2 ? fexpr__15552.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__15552.call(null,ctx,protocol_name));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__15546_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__15546_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15553){
var vec__15554 = p__15553;
var seq__15555 = cljs.core.seq(vec__15554);
var first__15556 = cljs.core.first(seq__15555);
var seq__15555__$1 = cljs.core.next(seq__15555);
var type = first__15556;
var meths = seq__15555__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq15547){
var G__15548 = cljs.core.first(seq15547);
var seq15547__$1 = cljs.core.next(seq15547);
var G__15549 = cljs.core.first(seq15547__$1);
var seq15547__$2 = cljs.core.next(seq15547__$1);
var G__15550 = cljs.core.first(seq15547__$2);
var seq15547__$3 = cljs.core.next(seq15547__$2);
var G__15551 = cljs.core.first(seq15547__$3);
var seq15547__$4 = cljs.core.next(seq15547__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15548,G__15549,G__15550,G__15551,seq15547__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15645 = arguments.length;
var i__4737__auto___15646 = (0);
while(true){
if((i__4737__auto___15646 < len__4736__auto___15645)){
args__4742__auto__.push((arguments[i__4737__auto___15646]));

var G__15647 = (i__4737__auto___15646 + (1));
i__4737__auto___15646 = G__15647;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__15563 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__15565 = null;
var count__15566 = (0);
var i__15567 = (0);
while(true){
if((i__15567 < count__15566)){
var vec__15607 = chunk__15565.cljs$core$IIndexed$_nth$arity$2(null,i__15567);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15607,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15607,(1),null);
var proto_ns_15648 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_15649 = sci.impl.vars.getName(proto_ns_15648);
var seq__15610_15650 = cljs.core.seq(mmap);
var chunk__15611_15651 = null;
var count__15612_15652 = (0);
var i__15613_15653 = (0);
while(true){
if((i__15613_15653 < count__15612_15652)){
var vec__15620_15654 = chunk__15611_15651.cljs$core$IIndexed$_nth$arity$2(null,i__15613_15653);
var fn_name_15655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15620_15654,(0),null);
var f_15656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15620_15654,(1),null);
var fn_sym_15657 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_15655));
var env_15658 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_15659 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_15658,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_15649,fn_sym_15657], null));
var multi_method_15660 = cljs.core.deref(multi_method_var_15659);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_15660,atype,f_15656);


var G__15661 = seq__15610_15650;
var G__15662 = chunk__15611_15651;
var G__15663 = count__15612_15652;
var G__15664 = (i__15613_15653 + (1));
seq__15610_15650 = G__15661;
chunk__15611_15651 = G__15662;
count__15612_15652 = G__15663;
i__15613_15653 = G__15664;
continue;
} else {
var temp__5720__auto___15665 = cljs.core.seq(seq__15610_15650);
if(temp__5720__auto___15665){
var seq__15610_15666__$1 = temp__5720__auto___15665;
if(cljs.core.chunked_seq_QMARK_(seq__15610_15666__$1)){
var c__4556__auto___15667 = cljs.core.chunk_first(seq__15610_15666__$1);
var G__15668 = cljs.core.chunk_rest(seq__15610_15666__$1);
var G__15669 = c__4556__auto___15667;
var G__15670 = cljs.core.count(c__4556__auto___15667);
var G__15671 = (0);
seq__15610_15650 = G__15668;
chunk__15611_15651 = G__15669;
count__15612_15652 = G__15670;
i__15613_15653 = G__15671;
continue;
} else {
var vec__15623_15672 = cljs.core.first(seq__15610_15666__$1);
var fn_name_15673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15623_15672,(0),null);
var f_15674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15623_15672,(1),null);
var fn_sym_15675 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_15673));
var env_15676 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_15677 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_15676,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_15649,fn_sym_15675], null));
var multi_method_15678 = cljs.core.deref(multi_method_var_15677);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_15678,atype,f_15674);


var G__15679 = cljs.core.next(seq__15610_15666__$1);
var G__15680 = null;
var G__15681 = (0);
var G__15682 = (0);
seq__15610_15650 = G__15679;
chunk__15611_15651 = G__15680;
count__15612_15652 = G__15681;
i__15613_15653 = G__15682;
continue;
}
} else {
}
}
break;
}


var G__15683 = seq__15563;
var G__15684 = chunk__15565;
var G__15685 = count__15566;
var G__15686 = (i__15567 + (1));
seq__15563 = G__15683;
chunk__15565 = G__15684;
count__15566 = G__15685;
i__15567 = G__15686;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__15563);
if(temp__5720__auto__){
var seq__15563__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15563__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15563__$1);
var G__15687 = cljs.core.chunk_rest(seq__15563__$1);
var G__15688 = c__4556__auto__;
var G__15689 = cljs.core.count(c__4556__auto__);
var G__15690 = (0);
seq__15563 = G__15687;
chunk__15565 = G__15688;
count__15566 = G__15689;
i__15567 = G__15690;
continue;
} else {
var vec__15626 = cljs.core.first(seq__15563__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(1),null);
var proto_ns_15691 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_15692 = sci.impl.vars.getName(proto_ns_15691);
var seq__15629_15693 = cljs.core.seq(mmap);
var chunk__15630_15694 = null;
var count__15631_15695 = (0);
var i__15632_15696 = (0);
while(true){
if((i__15632_15696 < count__15631_15695)){
var vec__15639_15697 = chunk__15630_15694.cljs$core$IIndexed$_nth$arity$2(null,i__15632_15696);
var fn_name_15698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15639_15697,(0),null);
var f_15699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15639_15697,(1),null);
var fn_sym_15700 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_15698));
var env_15701 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_15702 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_15701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_15692,fn_sym_15700], null));
var multi_method_15703 = cljs.core.deref(multi_method_var_15702);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_15703,atype,f_15699);


var G__15704 = seq__15629_15693;
var G__15705 = chunk__15630_15694;
var G__15706 = count__15631_15695;
var G__15707 = (i__15632_15696 + (1));
seq__15629_15693 = G__15704;
chunk__15630_15694 = G__15705;
count__15631_15695 = G__15706;
i__15632_15696 = G__15707;
continue;
} else {
var temp__5720__auto___15708__$1 = cljs.core.seq(seq__15629_15693);
if(temp__5720__auto___15708__$1){
var seq__15629_15709__$1 = temp__5720__auto___15708__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15629_15709__$1)){
var c__4556__auto___15710 = cljs.core.chunk_first(seq__15629_15709__$1);
var G__15711 = cljs.core.chunk_rest(seq__15629_15709__$1);
var G__15712 = c__4556__auto___15710;
var G__15713 = cljs.core.count(c__4556__auto___15710);
var G__15714 = (0);
seq__15629_15693 = G__15711;
chunk__15630_15694 = G__15712;
count__15631_15695 = G__15713;
i__15632_15696 = G__15714;
continue;
} else {
var vec__15642_15715 = cljs.core.first(seq__15629_15709__$1);
var fn_name_15716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15642_15715,(0),null);
var f_15717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15642_15715,(1),null);
var fn_sym_15718 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_15716));
var env_15719 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_15720 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_15719,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_15692,fn_sym_15718], null));
var multi_method_15721 = cljs.core.deref(multi_method_var_15720);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_15721,atype,f_15717);


var G__15722 = cljs.core.next(seq__15629_15709__$1);
var G__15723 = null;
var G__15724 = (0);
var G__15725 = (0);
seq__15629_15693 = G__15722;
chunk__15630_15694 = G__15723;
count__15631_15695 = G__15724;
i__15632_15696 = G__15725;
continue;
}
} else {
}
}
break;
}


var G__15726 = cljs.core.next(seq__15563__$1);
var G__15727 = null;
var G__15728 = (0);
var G__15729 = (0);
seq__15563 = G__15726;
chunk__15565 = G__15727;
count__15566 = G__15728;
i__15567 = G__15729;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq15560){
var G__15561 = cljs.core.first(seq15560);
var seq15560__$1 = cljs.core.next(seq15560);
var G__15562 = cljs.core.first(seq15560__$1);
var seq15560__$2 = cljs.core.next(seq15560__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15561,G__15562,seq15560__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15742 = arguments.length;
var i__4737__auto___15743 = (0);
while(true){
if((i__4737__auto___15743 < len__4736__auto___15742)){
args__4742__auto__.push((arguments[i__4737__auto___15743]));

var G__15744 = (i__4737__auto___15743 + (1));
i__4737__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__15730_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__15730_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15737){
var vec__15738 = p__15737;
var seq__15739 = cljs.core.seq(vec__15738);
var first__15740 = cljs.core.first(seq__15739);
var seq__15739__$1 = cljs.core.next(seq__15739);
var proto = first__15740;
var meths = seq__15739__$1;
var protocol_var = (function (){var fexpr__15741 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__15741.cljs$core$IFn$_invoke$arity$2 ? fexpr__15741.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__15741.call(null,ctx,proto));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__15731_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__15731_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq15732){
var G__15733 = cljs.core.first(seq15732);
var seq15732__$1 = cljs.core.next(seq15732);
var G__15734 = cljs.core.first(seq15732__$1);
var seq15732__$2 = cljs.core.next(seq15732__$1);
var G__15735 = cljs.core.first(seq15732__$2);
var seq15732__$3 = cljs.core.next(seq15732__$2);
var G__15736 = cljs.core.first(seq15732__$3);
var seq15732__$4 = cljs.core.next(seq15732__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15733,G__15734,G__15735,G__15736,seq15732__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.sci$impl$types$IReified$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj):false)):cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj))){
var temp__5718__auto__ = sci.impl.types.getInterface(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var obj_type = temp__5718__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,obj_type);
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.some((function (p1__15745_SHARP_){
return cljs.core.get_method(p1__15745_SHARP_,sci.impl.types.type_impl(obj));
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var m = cljs.core.meta(clazz);
return cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(m);
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,(function (){var G__15747 = x;
var G__15747__$1 = (((G__15747 == null))?null:cljs.core.meta(G__15747));
if((G__15747__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_type.cljs$core$IFn$_invoke$arity$1(G__15747__$1);
}
})());
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__15748_SHARP_){
return cljs.core.get_method(p1__15748_SHARP_,atype);
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
});
