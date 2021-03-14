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
var len__4736__auto___17250 = arguments.length;
var i__4737__auto___17251 = (0);
while(true){
if((i__4737__auto___17251 < len__4736__auto___17250)){
args__4742__auto__.push((arguments[i__4737__auto___17251]));

var G__17252 = (i__4737__auto___17251 + (1));
i__4737__auto___17251 = G__17252;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__17240 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17240,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17240,(1),null);
var vec__17243 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17243,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17243,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$ns,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_ns_STAR_,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17246){
var vec__17247 = p__17246;
var seq__17248 = cljs.core.seq(vec__17247);
var first__17249 = cljs.core.first(seq__17248);
var seq__17248__$1 = cljs.core.next(seq__17248);
var method_name = first__17249;
var ___$2 = seq__17248__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmulti,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__17228__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17229__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$methods__17230__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_reified_DASH_methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17228__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$methods__17230__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__17228__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17229__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(cljs.core.cst$kw$extend_DASH_via_DASH_metadata.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__17231__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17232__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$meta__17233__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17231__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$method__17234__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$meta__17233__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__17234__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__17234__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__17231__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17232__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__17231__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_update,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq17235){
var G__17236 = cljs.core.first(seq17235);
var seq17235__$1 = cljs.core.next(seq17235);
var G__17237 = cljs.core.first(seq17235__$1);
var seq17235__$2 = cljs.core.next(seq17235__$1);
var G__17238 = cljs.core.first(seq17235__$2);
var seq17235__$3 = cljs.core.next(seq17235__$2);
var G__17239 = cljs.core.first(seq17235__$3);
var seq17235__$4 = cljs.core.next(seq17235__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17236,G__17237,G__17238,G__17239,seq17235__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17265 = arguments.length;
var i__4737__auto___17266 = (0);
while(true){
if((i__4737__auto___17266 < len__4736__auto___17265)){
args__4742__auto__.push((arguments[i__4737__auto___17266]));

var G__17267 = (i__4737__auto___17266 + (1));
i__4737__auto___17266 = G__17267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__17253_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__17253_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__17260 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__17260.cljs$core$IFn$_invoke$arity$2 ? fexpr__17260.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__17260.call(null,ctx,protocol_name));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__17254_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__17254_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17261){
var vec__17262 = p__17261;
var seq__17263 = cljs.core.seq(vec__17262);
var first__17264 = cljs.core.first(seq__17263);
var seq__17263__$1 = cljs.core.next(seq__17263);
var type = first__17264;
var meths = seq__17263__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq17255){
var G__17256 = cljs.core.first(seq17255);
var seq17255__$1 = cljs.core.next(seq17255);
var G__17257 = cljs.core.first(seq17255__$1);
var seq17255__$2 = cljs.core.next(seq17255__$1);
var G__17258 = cljs.core.first(seq17255__$2);
var seq17255__$3 = cljs.core.next(seq17255__$2);
var G__17259 = cljs.core.first(seq17255__$3);
var seq17255__$4 = cljs.core.next(seq17255__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17256,G__17257,G__17258,G__17259,seq17255__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17353 = arguments.length;
var i__4737__auto___17354 = (0);
while(true){
if((i__4737__auto___17354 < len__4736__auto___17353)){
args__4742__auto__.push((arguments[i__4737__auto___17354]));

var G__17355 = (i__4737__auto___17354 + (1));
i__4737__auto___17354 = G__17355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__17271 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__17273 = null;
var count__17274 = (0);
var i__17275 = (0);
while(true){
if((i__17275 < count__17274)){
var vec__17315 = chunk__17273.cljs$core$IIndexed$_nth$arity$2(null,i__17275);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17315,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17315,(1),null);
var proto_ns_17356 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_17357 = sci.impl.vars.getName(proto_ns_17356);
var seq__17318_17358 = cljs.core.seq(mmap);
var chunk__17319_17359 = null;
var count__17320_17360 = (0);
var i__17321_17361 = (0);
while(true){
if((i__17321_17361 < count__17320_17360)){
var vec__17328_17362 = chunk__17319_17359.cljs$core$IIndexed$_nth$arity$2(null,i__17321_17361);
var fn_name_17363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17328_17362,(0),null);
var f_17364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17328_17362,(1),null);
var fn_sym_17365 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_17363));
var env_17366 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_17367 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17366,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_17357,fn_sym_17365], null));
var multi_method_17368 = cljs.core.deref(multi_method_var_17367);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_17368,atype,f_17364);


var G__17369 = seq__17318_17358;
var G__17370 = chunk__17319_17359;
var G__17371 = count__17320_17360;
var G__17372 = (i__17321_17361 + (1));
seq__17318_17358 = G__17369;
chunk__17319_17359 = G__17370;
count__17320_17360 = G__17371;
i__17321_17361 = G__17372;
continue;
} else {
var temp__5720__auto___17373 = cljs.core.seq(seq__17318_17358);
if(temp__5720__auto___17373){
var seq__17318_17374__$1 = temp__5720__auto___17373;
if(cljs.core.chunked_seq_QMARK_(seq__17318_17374__$1)){
var c__4556__auto___17375 = cljs.core.chunk_first(seq__17318_17374__$1);
var G__17376 = cljs.core.chunk_rest(seq__17318_17374__$1);
var G__17377 = c__4556__auto___17375;
var G__17378 = cljs.core.count(c__4556__auto___17375);
var G__17379 = (0);
seq__17318_17358 = G__17376;
chunk__17319_17359 = G__17377;
count__17320_17360 = G__17378;
i__17321_17361 = G__17379;
continue;
} else {
var vec__17331_17380 = cljs.core.first(seq__17318_17374__$1);
var fn_name_17381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17331_17380,(0),null);
var f_17382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17331_17380,(1),null);
var fn_sym_17383 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_17381));
var env_17384 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_17385 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17384,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_17357,fn_sym_17383], null));
var multi_method_17386 = cljs.core.deref(multi_method_var_17385);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_17386,atype,f_17382);


var G__17387 = cljs.core.next(seq__17318_17374__$1);
var G__17388 = null;
var G__17389 = (0);
var G__17390 = (0);
seq__17318_17358 = G__17387;
chunk__17319_17359 = G__17388;
count__17320_17360 = G__17389;
i__17321_17361 = G__17390;
continue;
}
} else {
}
}
break;
}


var G__17391 = seq__17271;
var G__17392 = chunk__17273;
var G__17393 = count__17274;
var G__17394 = (i__17275 + (1));
seq__17271 = G__17391;
chunk__17273 = G__17392;
count__17274 = G__17393;
i__17275 = G__17394;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__17271);
if(temp__5720__auto__){
var seq__17271__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17271__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17271__$1);
var G__17395 = cljs.core.chunk_rest(seq__17271__$1);
var G__17396 = c__4556__auto__;
var G__17397 = cljs.core.count(c__4556__auto__);
var G__17398 = (0);
seq__17271 = G__17395;
chunk__17273 = G__17396;
count__17274 = G__17397;
i__17275 = G__17398;
continue;
} else {
var vec__17334 = cljs.core.first(seq__17271__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17334,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17334,(1),null);
var proto_ns_17399 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_17400 = sci.impl.vars.getName(proto_ns_17399);
var seq__17337_17401 = cljs.core.seq(mmap);
var chunk__17338_17402 = null;
var count__17339_17403 = (0);
var i__17340_17404 = (0);
while(true){
if((i__17340_17404 < count__17339_17403)){
var vec__17347_17405 = chunk__17338_17402.cljs$core$IIndexed$_nth$arity$2(null,i__17340_17404);
var fn_name_17406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347_17405,(0),null);
var f_17407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17347_17405,(1),null);
var fn_sym_17408 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_17406));
var env_17409 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_17410 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17409,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_17400,fn_sym_17408], null));
var multi_method_17411 = cljs.core.deref(multi_method_var_17410);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_17411,atype,f_17407);


var G__17412 = seq__17337_17401;
var G__17413 = chunk__17338_17402;
var G__17414 = count__17339_17403;
var G__17415 = (i__17340_17404 + (1));
seq__17337_17401 = G__17412;
chunk__17338_17402 = G__17413;
count__17339_17403 = G__17414;
i__17340_17404 = G__17415;
continue;
} else {
var temp__5720__auto___17416__$1 = cljs.core.seq(seq__17337_17401);
if(temp__5720__auto___17416__$1){
var seq__17337_17417__$1 = temp__5720__auto___17416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17337_17417__$1)){
var c__4556__auto___17418 = cljs.core.chunk_first(seq__17337_17417__$1);
var G__17419 = cljs.core.chunk_rest(seq__17337_17417__$1);
var G__17420 = c__4556__auto___17418;
var G__17421 = cljs.core.count(c__4556__auto___17418);
var G__17422 = (0);
seq__17337_17401 = G__17419;
chunk__17338_17402 = G__17420;
count__17339_17403 = G__17421;
i__17340_17404 = G__17422;
continue;
} else {
var vec__17350_17423 = cljs.core.first(seq__17337_17417__$1);
var fn_name_17424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17423,(0),null);
var f_17425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17423,(1),null);
var fn_sym_17426 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_17424));
var env_17427 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_17428 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_17427,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_17400,fn_sym_17426], null));
var multi_method_17429 = cljs.core.deref(multi_method_var_17428);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_17429,atype,f_17425);


var G__17430 = cljs.core.next(seq__17337_17417__$1);
var G__17431 = null;
var G__17432 = (0);
var G__17433 = (0);
seq__17337_17401 = G__17430;
chunk__17338_17402 = G__17431;
count__17339_17403 = G__17432;
i__17340_17404 = G__17433;
continue;
}
} else {
}
}
break;
}


var G__17434 = cljs.core.next(seq__17271__$1);
var G__17435 = null;
var G__17436 = (0);
var G__17437 = (0);
seq__17271 = G__17434;
chunk__17273 = G__17435;
count__17274 = G__17436;
i__17275 = G__17437;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq17268){
var G__17269 = cljs.core.first(seq17268);
var seq17268__$1 = cljs.core.next(seq17268);
var G__17270 = cljs.core.first(seq17268__$1);
var seq17268__$2 = cljs.core.next(seq17268__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17269,G__17270,seq17268__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17450 = arguments.length;
var i__4737__auto___17451 = (0);
while(true){
if((i__4737__auto___17451 < len__4736__auto___17450)){
args__4742__auto__.push((arguments[i__4737__auto___17451]));

var G__17452 = (i__4737__auto___17451 + (1));
i__4737__auto___17451 = G__17452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__17438_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__17438_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17445){
var vec__17446 = p__17445;
var seq__17447 = cljs.core.seq(vec__17446);
var first__17448 = cljs.core.first(seq__17447);
var seq__17447__$1 = cljs.core.next(seq__17447);
var proto = first__17448;
var meths = seq__17447__$1;
var protocol_var = (function (){var fexpr__17449 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__17449.cljs$core$IFn$_invoke$arity$2 ? fexpr__17449.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__17449.call(null,ctx,proto));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__17439_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__17439_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq17440){
var G__17441 = cljs.core.first(seq17440);
var seq17440__$1 = cljs.core.next(seq17440);
var G__17442 = cljs.core.first(seq17440__$1);
var seq17440__$2 = cljs.core.next(seq17440__$1);
var G__17443 = cljs.core.first(seq17440__$2);
var seq17440__$3 = cljs.core.next(seq17440__$2);
var G__17444 = cljs.core.first(seq17440__$3);
var seq17440__$4 = cljs.core.next(seq17440__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17441,G__17442,G__17443,G__17444,seq17440__$4);
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
return cljs.core.boolean$(cljs.core.some((function (p1__17453_SHARP_){
return cljs.core.get_method(p1__17453_SHARP_,sci.impl.types.type_impl(obj));
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var m = cljs.core.meta(clazz);
return cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(m);
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,(function (){var G__17455 = x;
var G__17455__$1 = (((G__17455 == null))?null:cljs.core.meta(G__17455));
if((G__17455__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_type.cljs$core$IFn$_invoke$arity$1(G__17455__$1);
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
return cljs.core.boolean$(cljs.core.some((function (p1__17456_SHARP_){
return cljs.core.get_method(p1__17456_SHARP_,atype);
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
});
