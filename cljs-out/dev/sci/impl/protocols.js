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
var len__4736__auto___17904 = arguments.length;
var i__4737__auto___17905 = (0);
while(true){
if((i__4737__auto___17905 < len__4736__auto___17904)){
args__4742__auto__.push((arguments[i__4737__auto___17905]));

var G__17906 = (i__4737__auto___17905 + (1));
i__4737__auto___17905 = G__17906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__17894 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(1),null);
var vec__17897 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$ns,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_ns_STAR_,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17900){
var vec__17901 = p__17900;
var seq__17902 = cljs.core.seq(vec__17901);
var first__17903 = cljs.core.first(seq__17902);
var seq__17902__$1 = cljs.core.next(seq__17902);
var method_name = first__17903;
var ___$2 = seq__17902__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmulti,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__17882__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17883__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$methods__17884__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_reified_DASH_methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17882__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$methods__17884__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__17882__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17883__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(cljs.core.cst$kw$extend_DASH_via_DASH_metadata.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__17885__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17886__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$meta__17887__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17885__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$method__17888__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$meta__17887__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__17888__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__17888__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__17885__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17886__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17885__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_update,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq17889){
var G__17890 = cljs.core.first(seq17889);
var seq17889__$1 = cljs.core.next(seq17889);
var G__17891 = cljs.core.first(seq17889__$1);
var seq17889__$2 = cljs.core.next(seq17889__$1);
var G__17892 = cljs.core.first(seq17889__$2);
var seq17889__$3 = cljs.core.next(seq17889__$2);
var G__17893 = cljs.core.first(seq17889__$3);
var seq17889__$4 = cljs.core.next(seq17889__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17890,G__17891,G__17892,G__17893,seq17889__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17919 = arguments.length;
var i__4737__auto___17920 = (0);
while(true){
if((i__4737__auto___17920 < len__4736__auto___17919)){
args__4742__auto__.push((arguments[i__4737__auto___17920]));

var G__17921 = (i__4737__auto___17920 + (1));
i__4737__auto___17920 = G__17921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__17907_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__17907_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__17914 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__17914.cljs$core$IFn$_invoke$arity$2 ? fexpr__17914.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__17914.call(null,ctx,protocol_name));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__17908_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__17908_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17915){
var vec__17916 = p__17915;
var seq__17917 = cljs.core.seq(vec__17916);
var first__17918 = cljs.core.first(seq__17917);
var seq__17917__$1 = cljs.core.next(seq__17917);
var type = first__17918;
var meths = seq__17917__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq17909){
var G__17910 = cljs.core.first(seq17909);
var seq17909__$1 = cljs.core.next(seq17909);
var G__17911 = cljs.core.first(seq17909__$1);
var seq17909__$2 = cljs.core.next(seq17909__$1);
var G__17912 = cljs.core.first(seq17909__$2);
var seq17909__$3 = cljs.core.next(seq17909__$2);
var G__17913 = cljs.core.first(seq17909__$3);
var seq17909__$4 = cljs.core.next(seq17909__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17910,G__17911,G__17912,G__17913,seq17909__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18007 = arguments.length;
var i__4737__auto___18008 = (0);
while(true){
if((i__4737__auto___18008 < len__4736__auto___18007)){
args__4742__auto__.push((arguments[i__4737__auto___18008]));

var G__18009 = (i__4737__auto___18008 + (1));
i__4737__auto___18008 = G__18009;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__17925 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__17927 = null;
var count__17928 = (0);
var i__17929 = (0);
while(true){
if((i__17929 < count__17928)){
var vec__17969 = chunk__17927.cljs$core$IIndexed$_nth$arity$2(null,i__17929);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(1),null);
var proto_ns_18010 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_18011 = sci.impl.vars.getName(proto_ns_18010);
var seq__17972_18012 = cljs.core.seq(mmap);
var chunk__17973_18013 = null;
var count__17974_18014 = (0);
var i__17975_18015 = (0);
while(true){
if((i__17975_18015 < count__17974_18014)){
var vec__17982_18016 = chunk__17973_18013.cljs$core$IIndexed$_nth$arity$2(null,i__17975_18015);
var fn_name_18017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982_18016,(0),null);
var f_18018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982_18016,(1),null);
var fn_sym_18019 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_18017));
var env_18020 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_18021 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_18020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_18011,fn_sym_18019], null));
var multi_method_18022 = cljs.core.deref(multi_method_var_18021);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_18022,atype,f_18018);


var G__18023 = seq__17972_18012;
var G__18024 = chunk__17973_18013;
var G__18025 = count__17974_18014;
var G__18026 = (i__17975_18015 + (1));
seq__17972_18012 = G__18023;
chunk__17973_18013 = G__18024;
count__17974_18014 = G__18025;
i__17975_18015 = G__18026;
continue;
} else {
var temp__5720__auto___18027 = cljs.core.seq(seq__17972_18012);
if(temp__5720__auto___18027){
var seq__17972_18028__$1 = temp__5720__auto___18027;
if(cljs.core.chunked_seq_QMARK_(seq__17972_18028__$1)){
var c__4556__auto___18029 = cljs.core.chunk_first(seq__17972_18028__$1);
var G__18030 = cljs.core.chunk_rest(seq__17972_18028__$1);
var G__18031 = c__4556__auto___18029;
var G__18032 = cljs.core.count(c__4556__auto___18029);
var G__18033 = (0);
seq__17972_18012 = G__18030;
chunk__17973_18013 = G__18031;
count__17974_18014 = G__18032;
i__17975_18015 = G__18033;
continue;
} else {
var vec__17985_18034 = cljs.core.first(seq__17972_18028__$1);
var fn_name_18035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985_18034,(0),null);
var f_18036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985_18034,(1),null);
var fn_sym_18037 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_18035));
var env_18038 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_18039 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_18038,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_18011,fn_sym_18037], null));
var multi_method_18040 = cljs.core.deref(multi_method_var_18039);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_18040,atype,f_18036);


var G__18041 = cljs.core.next(seq__17972_18028__$1);
var G__18042 = null;
var G__18043 = (0);
var G__18044 = (0);
seq__17972_18012 = G__18041;
chunk__17973_18013 = G__18042;
count__17974_18014 = G__18043;
i__17975_18015 = G__18044;
continue;
}
} else {
}
}
break;
}


var G__18045 = seq__17925;
var G__18046 = chunk__17927;
var G__18047 = count__17928;
var G__18048 = (i__17929 + (1));
seq__17925 = G__18045;
chunk__17927 = G__18046;
count__17928 = G__18047;
i__17929 = G__18048;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17925);
if(temp__5720__auto__){
var seq__17925__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17925__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17925__$1);
var G__18049 = cljs.core.chunk_rest(seq__17925__$1);
var G__18050 = c__4556__auto__;
var G__18051 = cljs.core.count(c__4556__auto__);
var G__18052 = (0);
seq__17925 = G__18049;
chunk__17927 = G__18050;
count__17928 = G__18051;
i__17929 = G__18052;
continue;
} else {
var vec__17988 = cljs.core.first(seq__17925__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17988,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17988,(1),null);
var proto_ns_18053 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_18054 = sci.impl.vars.getName(proto_ns_18053);
var seq__17991_18055 = cljs.core.seq(mmap);
var chunk__17992_18056 = null;
var count__17993_18057 = (0);
var i__17994_18058 = (0);
while(true){
if((i__17994_18058 < count__17993_18057)){
var vec__18001_18059 = chunk__17992_18056.cljs$core$IIndexed$_nth$arity$2(null,i__17994_18058);
var fn_name_18060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18001_18059,(0),null);
var f_18061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18001_18059,(1),null);
var fn_sym_18062 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_18060));
var env_18063 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_18064 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_18063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_18054,fn_sym_18062], null));
var multi_method_18065 = cljs.core.deref(multi_method_var_18064);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_18065,atype,f_18061);


var G__18066 = seq__17991_18055;
var G__18067 = chunk__17992_18056;
var G__18068 = count__17993_18057;
var G__18069 = (i__17994_18058 + (1));
seq__17991_18055 = G__18066;
chunk__17992_18056 = G__18067;
count__17993_18057 = G__18068;
i__17994_18058 = G__18069;
continue;
} else {
var temp__5720__auto___18070__$1 = cljs.core.seq(seq__17991_18055);
if(temp__5720__auto___18070__$1){
var seq__17991_18071__$1 = temp__5720__auto___18070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17991_18071__$1)){
var c__4556__auto___18072 = cljs.core.chunk_first(seq__17991_18071__$1);
var G__18073 = cljs.core.chunk_rest(seq__17991_18071__$1);
var G__18074 = c__4556__auto___18072;
var G__18075 = cljs.core.count(c__4556__auto___18072);
var G__18076 = (0);
seq__17991_18055 = G__18073;
chunk__17992_18056 = G__18074;
count__17993_18057 = G__18075;
i__17994_18058 = G__18076;
continue;
} else {
var vec__18004_18077 = cljs.core.first(seq__17991_18071__$1);
var fn_name_18078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004_18077,(0),null);
var f_18079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004_18077,(1),null);
var fn_sym_18080 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_18078));
var env_18081 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_18082 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_18081,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_18054,fn_sym_18080], null));
var multi_method_18083 = cljs.core.deref(multi_method_var_18082);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_18083,atype,f_18079);


var G__18084 = cljs.core.next(seq__17991_18071__$1);
var G__18085 = null;
var G__18086 = (0);
var G__18087 = (0);
seq__17991_18055 = G__18084;
chunk__17992_18056 = G__18085;
count__17993_18057 = G__18086;
i__17994_18058 = G__18087;
continue;
}
} else {
}
}
break;
}


var G__18088 = cljs.core.next(seq__17925__$1);
var G__18089 = null;
var G__18090 = (0);
var G__18091 = (0);
seq__17925 = G__18088;
chunk__17927 = G__18089;
count__17928 = G__18090;
i__17929 = G__18091;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq17922){
var G__17923 = cljs.core.first(seq17922);
var seq17922__$1 = cljs.core.next(seq17922);
var G__17924 = cljs.core.first(seq17922__$1);
var seq17922__$2 = cljs.core.next(seq17922__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17923,G__17924,seq17922__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18104 = arguments.length;
var i__4737__auto___18105 = (0);
while(true){
if((i__4737__auto___18105 < len__4736__auto___18104)){
args__4742__auto__.push((arguments[i__4737__auto___18105]));

var G__18106 = (i__4737__auto___18105 + (1));
i__4737__auto___18105 = G__18106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__18092_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__18092_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18099){
var vec__18100 = p__18099;
var seq__18101 = cljs.core.seq(vec__18100);
var first__18102 = cljs.core.first(seq__18101);
var seq__18101__$1 = cljs.core.next(seq__18101);
var proto = first__18102;
var meths = seq__18101__$1;
var protocol_var = (function (){var fexpr__18103 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__18103.cljs$core$IFn$_invoke$arity$2 ? fexpr__18103.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__18103.call(null,ctx,proto));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__18093_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__18093_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq18094){
var G__18095 = cljs.core.first(seq18094);
var seq18094__$1 = cljs.core.next(seq18094);
var G__18096 = cljs.core.first(seq18094__$1);
var seq18094__$2 = cljs.core.next(seq18094__$1);
var G__18097 = cljs.core.first(seq18094__$2);
var seq18094__$3 = cljs.core.next(seq18094__$2);
var G__18098 = cljs.core.first(seq18094__$3);
var seq18094__$4 = cljs.core.next(seq18094__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18095,G__18096,G__18097,G__18098,seq18094__$4);
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
return cljs.core.boolean$(cljs.core.some((function (p1__18107_SHARP_){
return cljs.core.get_method(p1__18107_SHARP_,sci.impl.types.type_impl(obj));
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var m = cljs.core.meta(clazz);
return cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(m);
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,(function (){var G__18109 = x;
var G__18109__$1 = (((G__18109 == null))?null:cljs.core.meta(G__18109));
if((G__18109__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_type.cljs$core$IFn$_invoke$arity$1(G__18109__$1);
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
return cljs.core.boolean$(cljs.core.some((function (p1__18110_SHARP_){
return cljs.core.get_method(p1__18110_SHARP_,atype);
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
});
