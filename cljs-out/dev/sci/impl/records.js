// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.records');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17189 = arguments.length;
var i__4737__auto___17190 = (0);
while(true){
if((i__4737__auto___17190 < len__4736__auto___17189)){
args__4742__auto__.push((arguments[i__4737__auto___17190]));

var G__17191 = (i__4737__auto___17190 + (1));
i__4737__auto___17190 = G__17191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,record_name,fields,protocol_impls){
var factory_fn_str = ["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join('');
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(factory_fn_str);
var map_factory_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["map",factory_fn_str].join(''));
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var protocol_impls__$1 = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,protocol_impls);
var protocol_impls__$2 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__17180){
var vec__17181 = p__17180;
var seq__17182 = cljs.core.seq(vec__17181);
var first__17183 = cljs.core.first(seq__17182);
var seq__17182__$1 = cljs.core.next(seq__17182);
var protocol_name = first__17183;
var impls = seq__17182__$1;
var impls__$1 = cljs.core.group_by(cljs.core.first,impls);
var protocol = (function (){var fexpr__17184 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__17184.cljs$core$IFn$_invoke$arity$2 ? fexpr__17184.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__17184.call(null,ctx,protocol_name));
})();
var protocol__$1 = ((sci.impl.vars.var_QMARK_(protocol))?cljs.core.deref(protocol):protocol);
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(protocol__$1);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__17171_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__17171_SHARP_);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17185){
var vec__17186 = p__17185;
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(1),null);
var bodies__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (impl){
var args = cljs.core.first(impl);
var this$ = cljs.core.first(args);
var bindings = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field),(new cljs.core.List(null,this$,null,(1),null)),(2),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(impl)], 0)))),null,(1),null)))));
}),bodies__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),bodies__$2], 0))));
}),impls__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls__$1], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17172__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vary_DASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_zipmap,null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17172__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assoc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_record,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$m__17173__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vary_DASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$m__17173__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assoc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_record,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__17172__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vary_DASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_zipmap,null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__17172__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assoc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_record,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$sci$impl_SLASH_record,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$sci$impl$record_SLASH_constructor,null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$2], 0))));
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq17174){
var G__17175 = cljs.core.first(seq17174);
var seq17174__$1 = cljs.core.next(seq17174);
var G__17176 = cljs.core.first(seq17174__$1);
var seq17174__$2 = cljs.core.next(seq17174__$1);
var G__17177 = cljs.core.first(seq17174__$2);
var seq17174__$3 = cljs.core.next(seq17174__$2);
var G__17178 = cljs.core.first(seq17174__$3);
var seq17174__$4 = cljs.core.next(seq17174__$3);
var G__17179 = cljs.core.first(seq17174__$4);
var seq17174__$5 = cljs.core.next(seq17174__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17175,G__17176,G__17177,G__17178,G__17179,seq17174__$5);
}));

sci.impl.records.sci_record_QMARK_ = (function sci$impl$records$sci_record_QMARK_(x){
var or__4126__auto__ = ((cljs.core.map_QMARK_(x))?(function (){var G__17193 = x;
var G__17193__$1 = (((G__17193 == null))?null:cljs.core.meta(G__17193));
if((G__17193__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(G__17193__$1);
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.record_QMARK_(x);
}
});
/**
 * A record class is represented by a symbol with metadata (currently). This is only an implementation detail.
 * A protocol is represented by a map with :ns, :methods and optionally :class. This is also an implementation detail.
 */
sci.impl.records.resolve_record_or_protocol_class = (function sci$impl$records$resolve_record_or_protocol_class(var_args){
var G__17195 = arguments.length;
switch (G__17195) {
case 2:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(0),last_dot)):sci.impl.vars.current_ns_name());
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,namespace,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name));
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),"_","-"));
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,namespace,class$], null));
if(cljs.core.truth_(temp__5720__auto__)){
var sci_var = temp__5720__auto__;
if(sci.impl.vars.var_QMARK_(sci_var)){
return cljs.core.deref(sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$lang$maxFixedArity = 3);

sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(ctx,class_sym){
var temp__5720__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var x = temp__5720__auto__;
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
} else {
return null;
}
});
