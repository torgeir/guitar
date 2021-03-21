// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$error_SLASH_realized_DASH_beyond_DASH_max,cljs.core.cst$kw$sci_SLASH_error);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$error_SLASH_parse,cljs.core.cst$kw$sci_SLASH_error);
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || (cljs.core.boolean_QMARK_(x)));
});
sci.impl.utils.eval_QMARK_ = (function sci$impl$utils$eval_QMARK_(x){
var G__14873 = x;
var G__14873__$1 = (((G__14873 == null))?null:cljs.core.meta(G__14873));
if((G__14873__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(G__14873__$1);
}
});
sci.impl.utils.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
sci.impl.utils.mark_eval_call = (function sci$impl$utils$mark_eval_call(var_args){
var G__14875 = arguments.length;
switch (G__14875) {
case 1:
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$call),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns)),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file));
}));
}));

(sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (expr,extra_key,extra_val){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$call),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns)),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)),extra_key,extra_val);
}));
}));

(sci.impl.utils.mark_eval_call.cljs$lang$maxFixedArity = 3);

sci.impl.utils.mark_eval = (function sci$impl$utils$mark_eval(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$eval);
}));
});
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__14878 = arguments.length;
switch (G__14878) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__14879 = cljs.core.meta(iobj);
var map__14879__$1 = (((((!((map__14879 == null))))?(((((map__14879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14879):map__14879);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14879__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14879__$1,cljs.core.cst$kw$column);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14879__$1,cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$sci_SLASH_error,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$file,file], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.macro_QMARK_ = (function sci$impl$utils$macro_QMARK_(f){
var temp__5720__auto__ = cljs.core.meta(f);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var or__4126__auto__ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
}
} else {
return null;
}
});
sci.impl.utils.needs_ctx = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("needs-ctx");
sci.impl.utils.evaluate = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("eval");
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(ctx,e,node){
var m = cljs.core.meta(node);
var f = ((cljs.core.seqable_QMARK_(node))?cljs.core.first(node):null);
var fm = (function (){var or__4126__auto__ = cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__14882 = f;
if((G__14882 == null)){
return null;
} else {
return cljs.core.meta(G__14882);
}
}
})();
var op = (cljs.core.truth_(fm)?m.get(cljs.core.cst$kw$sci$impl_SLASH_op):null);
var special_QMARK_ = (function (){var or__4126__auto__ = (((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__14887 = cljs.core.cst$kw$fn;
var G__14888 = op;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14887,G__14888) : sci.impl.utils.kw_identical_QMARK_.call(null,G__14887,G__14888));
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (sci.impl.utils.needs_ctx === op);
}
}
})();
if(cljs.core.not(special_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl_SLASH_callstack,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx)], null),(function (vt){
if(cljs.core.truth_(vt)){
cljs.core._vreset_BANG_(vt,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(vt),node));

return vt;
} else {
return cljs.core.volatile_BANG_((new cljs.core.List(null,node,null,(1),null)));
}
}));
} else {
}

if(cljs.core.not(sci.impl.utils._STAR_in_try_STAR_)){
var d = cljs.core.ex_data(e);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$sci_SLASH_error)){
throw e;
} else {
var ex_msg_14891 = e.message;
var map__14889_14892 = cljs.core.meta(node);
var map__14889_14893__$1 = (((((!((map__14889_14892 == null))))?(((((map__14889_14892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14889_14892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14889_14892):map__14889_14892);
var line_14894 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14889_14893__$1,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(ctx));
var column_14895 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14889_14893__$1,cljs.core.cst$kw$column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(ctx));
var file_14896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14889_14893__$1,cljs.core.cst$kw$file);
var ex_msg_14897__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = ex_msg_14891;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(fm);
} else {
return and__4115__auto__;
}
})())?clojure.string.replace(ex_msg_14891,/(sci\.impl\.)?fns\/fun\/[a-zA-Z0-9-]+--\d+/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(fm))):ex_msg_14891);
if(cljs.core.truth_((function (){var and__4115__auto__ = line_14894;
if(cljs.core.truth_(and__4115__auto__)){
return column_14895;
} else {
return and__4115__auto__;
}
})())){
var m_14898__$1 = ex_msg_14897__$1;
var new_exception_14899 = (function (){var d__$1 = cljs.core.ex_data(e);
var base = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$sci_SLASH_error,cljs.core.cst$kw$line,line_14894,cljs.core.cst$kw$column,column_14895,cljs.core.cst$kw$message,m_14898__$1,cljs.core.cst$kw$sci$impl_SLASH_callstack,(new cljs.core.Delay((function (){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl_SLASH_callstack,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return cljs.core.deref(v);
} else {
return null;
}
}),null)),cljs.core.cst$kw$file,file_14896,cljs.core.cst$kw$locals,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx)], null);
var phase = cljs.core.cst$kw$phase.cljs$core$IFn$_invoke$arity$1(ctx);
var base__$1 = (cljs.core.truth_(phase)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,cljs.core.cst$kw$phase,phase):base);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(m_14898__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base__$1,d__$1], 0)),e);
})();
throw new_exception_14899;
} else {
throw e;
}
}

throw e;
} else {
throw e;
}
});
sci.impl.utils.iobj_QMARK_ = (function sci$impl$utils$iobj_QMARK_(obj){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.meta(obj);
} else {
return false;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14906 = arguments.length;
var i__4737__auto___14907 = (0);
while(true){
if((i__4737__auto___14907 < len__4736__auto___14906)){
args__4742__auto__.push((arguments[i__4737__auto___14907]));

var G__14908 = (i__4737__auto___14907 + (1));
i__4737__auto___14907 = G__14908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_(sci.impl.utils.iobj_QMARK_(obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq14903){
var G__14904 = cljs.core.first(seq14903);
var seq14903__$1 = cljs.core.next(seq14903);
var G__14905 = cljs.core.first(seq14903__$1);
var seq14903__$2 = cljs.core.next(seq14903__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14904,G__14905,seq14903__$2);
}));

/**
 * Only adds metadata to obj if d is not nil and if meta on obj isn't already nil.
 */
sci.impl.utils.merge_meta = (function sci$impl$utils$merge_meta(obj,d){
if(cljs.core.truth_((function (){var and__4115__auto__ = d;
if(cljs.core.truth_(and__4115__auto__)){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5718__auto__ = cljs.core.meta(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;

return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d], 0)));
} else {
return obj;
}
} else {
return obj;
}
});
sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__14910 = cljs.core.namespace(sym);
switch (G__14910) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop");
sci.impl.utils.allowed_recur = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur");
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))){
return form;
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
return (new cljs.core.MapEntry((function (){var G__14912 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__14912) : inner.call(null,G__14912));
})(),(function (){var G__14913 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__14913) : inner.call(null,G__14913));
})(),null));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.prewalk,f),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref(env);
var ns_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym], null));
var or__4126__auto__ = cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var or__4126__auto____$1 = ns_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.impl.vars.__GT_SciNamespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym,cljs.core.cst$kw$obj], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.namespace_object(env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal(sci.impl.vars.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_1_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_do_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_fn = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_string_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.lookup = cljs.core.volatile_BANG_(null);
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq(coll);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fst = cljs.core.first(s);
var f = cljs.core.complement(pred);
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14914_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__14914_SHARP_) : f.call(null,p1__14914_SHARP_));
}),cljs.core.next(s)));
return cljs.core.cons(run,(function (){var G__14915 = pred;
var G__14916 = (new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s);
}),null,null));
return (sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2(G__14915,G__14916) : sci.impl.utils.split_when.call(null,G__14915,G__14916));
})());
} else {
return null;
}
}),null,null));
});
sci.impl.utils.ana_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 28, [cljs.core.cst$sym$try,"null",cljs.core.cst$sym$import,"null",cljs.core.cst$sym$doseq,"null",cljs.core.cst$sym$lazy_DASH_seq,"null",cljs.core.cst$sym$let,"null",cljs.core.cst$sym$fn,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$in_DASH_ns,"null",cljs.core.cst$sym$defn,"null",cljs.core.cst$sym$if,"null",cljs.core.cst$sym$new,"null",cljs.core.cst$sym$ns,"null",cljs.core.cst$sym$declare,"null",cljs.core.cst$sym$or,"null",cljs.core.cst$sym$fn_STAR_,"null",cljs.core.cst$sym$loop,"null",cljs.core.cst$sym$for,"null",cljs.core.cst$sym$expand_DASH_constructor,"null",cljs.core.cst$sym$defmacro,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$var,"null",cljs.core.cst$sym$case,"null",cljs.core.cst$sym$comment,"null",cljs.core.cst$sym$resolve,"null",cljs.core.cst$sym$and,"null",cljs.core.cst$sym$def,"null",cljs.core.cst$sym$expand_DASH_dot_STAR_,"null"], null), null);
