// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.analyzer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.destructure');
goog.require('sci.impl.doseq_macro');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.for_macro');
goog.require('sci.impl.interop');
goog.require('sci.impl.records');
goog.require('sci.impl.resolve');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$sym$try,"null",cljs.core.cst$sym$finally,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$if,"null",cljs.core.cst$sym$new,"null",cljs.core.cst$sym$recur,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$var,"null",cljs.core.cst$sym$quote,"null",cljs.core.cst$sym$catch,"null",cljs.core.cst$sym$throw,"null",cljs.core.cst$sym$def,"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,"analysis"], null));
});

sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$for,null], null), null),op)){
var G__27325 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl_SLASH_macroexpanding,true);
var G__27326 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27325,G__27326) : sci.impl.analyzer.analyze.call(null,G__27325,G__27326));
} else {
var f = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__27327 = f__$1;
var G__27327__$1 = (((G__27327 == null))?null:cljs.core.meta(G__27327));
if((G__27327__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(G__27327__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27328_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__27328_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__27328_SHARP_));
}),children);
});
sci.impl.analyzer.maybe_destructured = (function sci$impl$analyzer$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$body,body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__27329 = cljs.core.next(params__$1);
var G__27330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__27331 = lets;
params__$1 = G__27329;
new_params = G__27330;
lets = G__27331;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__27332 = cljs.core.next(params__$1);
var G__27333 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__27334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__27332;
new_params = G__27333;
lets = G__27334;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,new_params,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__27337,fn_name,p__27338,macro_QMARK_){
var map__27339 = p__27337;
var map__27339__$1 = (((((!((map__27339 == null))))?(((((map__27339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27339):map__27339);
var ctx = map__27339__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27339__$1,cljs.core.cst$kw$fn_DASH_expr);
var vec__27340 = p__27338;
var seq__27341 = cljs.core.seq(vec__27340);
var first__27342 = cljs.core.first(seq__27341);
var seq__27341__$1 = cljs.core.next(seq__27341);
var binding_vector = first__27342;
var body_exprs = seq__27341__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cst$sym$_AMPERSAND_env], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27335_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__27335_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__27336_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__27336_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__27344 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__27344__$1 = (((((!((map__27344 == null))))?(((((map__27344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27344):map__27344);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27344__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27344__$1,cljs.core.cst$kw$body);
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,cljs.core.cst$kw$bindings,cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sci$impl_SLASH_body,body__$1,cljs.core.cst$kw$sci$impl_SLASH_params,params,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name,var_arg_name,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name], null);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?sci.impl.utils.mark_eval((sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m))):m);
return m__$1;
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__27346,macro_QMARK_){
var vec__27347 = p__27346;
var seq__27348 = cljs.core.seq(vec__27347);
var first__27349 = cljs.core.first(seq__27348);
var seq__27348__$1 = cljs.core.next(seq__27348);
var _fn = first__27349;
var first__27349__$1 = cljs.core.first(seq__27348__$1);
var seq__27348__$2 = cljs.core.next(seq__27348__$1);
var name_QMARK_ = first__27349__$1;
var body = seq__27348__$2;
var fn_expr = vec__27347;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$fn_DASH_expr,fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27350,body__$2){
var map__27351 = p__27350;
var map__27351__$1 = (((((!((map__27351 == null))))?(((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27351):map__27351);
var acc = map__27351__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.cst$kw$max_DASH_fixed);
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.cst$kw$min_DASH_varargs);
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,fn_name,body__$2,macro_QMARK_);
var body__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,cljs.core.cst$kw$sci$impl_SLASH_arglist,arglist);
var var_arg_name = cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name.cljs$core$IFn$_invoke$arity$1(body__$4);
var fixed_arity = cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(body__$4);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_arg_name;
if(cljs.core.truth_(and__4115__auto__)){
return min_varargs;
} else {
return and__4115__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4115__auto__ = min_varargs;
if(cljs.core.truth_(and__4115__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4115__auto__;
}
})():false))){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$min_DASH_varargs,new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_fixed,(function (){var x__4214__auto__ = cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(body__$4);
var y__4215__auto__ = max_fixed;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], 0)),cljs.core.cst$kw$bodies,cljs.core.conj,body__$4),cljs.core.cst$kw$arglists,cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bodies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$arglists,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$min_DASH_var_DASH_args,null,cljs.core.cst$kw$max_DASH_fixed,(-1)], null),bodies);
var arities = cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,cljs.core.cst$kw$line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies,arities,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name,cljs.core.cst$kw$sci$impl_SLASH_arglists,arglists,cljs.core.cst$kw$sci$impl_SLASH_fn,true,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta,fn_meta__$1], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$fn], null));
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__27353 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27356,p__27357){
var vec__27358 = p__27356;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27358,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27358,(1),null);
var vec__27361 = p__27357;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,cljs.core.cst$kw$bindings,cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return cljs.core.with_meta((function (ctx__$2){
return sci.impl.evaluator.eval_let(ctx__$2,new_let_bindings,body);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,sci.impl.utils.evaluate], null));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__27364){
var vec__27365 = p__27364;
var seq__27366 = cljs.core.seq(vec__27365);
var first__27367 = cljs.core.first(seq__27366);
var seq__27366__$1 = cljs.core.next(seq__27366);
var _let = first__27367;
var first__27367__$1 = cljs.core.first(seq__27366__$1);
var seq__27366__$2 = cljs.core.next(seq__27366__$1);
var let_bindings = first__27367__$1;
var exprs = seq__27366__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__27368 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27368,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27368,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27368,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27368,(3),null);
var G__27371_27373 = ctx;
var G__27372_27374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__27371_27373,G__27372_27374) : sci.impl.analyzer.expand_declare.call(null,G__27371_27373,G__27372_27374));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?cljs.core.cst$kw$sci$impl_SLASH_var$unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,cljs.core.cst$kw$doc,docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$def,(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__27375){
var vec__27376 = p__27375;
var seq__27377 = cljs.core.seq(vec__27376);
var first__27378 = cljs.core.first(seq__27377);
var seq__27377__$1 = cljs.core.next(seq__27377);
var op = first__27378;
var first__27378__$1 = cljs.core.first(seq__27377__$1);
var seq__27377__$2 = cljs.core.next(seq__27377__$1);
var fn_name = first__27378__$1;
var body = seq__27377__$2;
var expr = vec__27376;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__27379_27387 = ctx;
var G__27380_27388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__27379_27387,G__27380_27388) : sci.impl.analyzer.expand_declare.call(null,G__27379_27387,G__27380_27388));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__27381 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5720__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var ds = temp__5720__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5720__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map__$1 = (function (){var G__27384 = ctx;
var G__27385 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27384,G__27385) : sci.impl.analyzer.analyze.call(null,G__27384,G__27385));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(cljs.core.cst$sym$fn,body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(cljs.core.cst$kw$sci$impl_SLASH_arglists.cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arglists,arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__27386 = meta_map__$2;
var G__27386__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386,cljs.core.cst$kw$doc,docstring):G__27386);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386__$1,cljs.core.cst$kw$macro,true);
} else {
return G__27386__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name__$1,cljs.core.cst$kw$sci$impl_SLASH_var,true], 0));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$def,(new cljs.core.List(null,fn_name__$1,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__27389 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,cljs.core.cst$sym$let,(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_lazy_DASH_seq,(new cljs.core.List(null,(function (){var G__27392 = ctx;
var G__27393 = (new cljs.core.List(null,cljs.core.cst$sym$fn,(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$do,body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27392,G__27393) : sci.impl.analyzer.analyze.call(null,G__27392,G__27393));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__27394){
var vec__27395 = p__27394;
var seq__27396 = cljs.core.seq(vec__27395);
var first__27397 = cljs.core.first(seq__27396);
var seq__27396__$1 = cljs.core.next(seq__27396);
var _if = first__27397;
var exprs = seq__27396__$1;
var expr = vec__27395;
var G__27398 = cljs.core.count(exprs);
switch (G__27398) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
case (3):
var vec__27399 = sci.impl.analyzer.analyze_children(ctx,exprs);
var cond = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27399,(0),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27399,(1),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27399,(2),null);
return cljs.core.with_meta((function (ctx__$1){
return sci.impl.evaluator.eval_if(ctx__$1,cond,then,else$);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,sci.impl.utils.evaluate], null));

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__27403 = ctx;
var G__27404 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27403,G__27404) : sci.impl.analyzer.analyze.call(null,G__27403,G__27404));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,(function (){var G__27405 = ctx;
var G__27406 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27405,G__27406) : sci.impl.analyzer.analyze.call(null,G__27405,G__27406));
})()], null):null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v__$1){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__27410 = cases__$1;
var seq__27411 = cljs.core.seq(vec__27410);
var first__27412 = cljs.core.first(seq__27411);
var seq__27411__$1 = cljs.core.next(seq__27411);
var k = first__27412;
var first__27412__$1 = cljs.core.first(seq__27411__$1);
var seq__27411__$2 = cljs.core.next(seq__27411__$1);
var v__$1 = first__27412__$1;
var cases__$2 = seq__27411__$2;
if(cljs.core.list_QMARK_(k)){
var G__27413 = cases__$2;
var G__27414 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__27410,seq__27411,first__27412,seq__27411__$1,k,first__27412__$1,seq__27411__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__27410,seq__27411,first__27412,seq__27411__$1,k,first__27412__$1,seq__27411__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__27413;
ret_map = G__27414;
continue;
} else {
var G__27415 = cases__$2;
var G__27416 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__27415;
ret_map = G__27416;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$case,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$case_DASH_map,case_map,cljs.core.cst$kw$case_DASH_val,v,cljs.core.cst$kw$case_DASH_default,default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(ret);
});
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__27417){
var vec__27418 = p__27417;
var seq__27419 = cljs.core.seq(vec__27418);
var first__27420 = cljs.core.first(seq__27419);
var seq__27419__$1 = cljs.core.next(seq__27419);
var _try = first__27420;
var body = seq__27419__$1;
var vec__27421 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$catch,cljs.core.first(expr))))){
var G__27433 = exprs__$1;
var G__27434 = body_exprs;
var G__27435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__27436 = finally_expr;
exprs = G__27433;
body_exprs = G__27434;
catch_exprs = G__27435;
finally_expr = G__27436;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$finally,cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__27437 = exprs__$1;
var G__27438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__27439 = catch_exprs;
var G__27440 = finally_expr;
exprs = G__27437;
body_exprs = G__27438;
catch_exprs = G__27439;
finally_expr = G__27440;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(2),null);
var body__$1 = (function (){var G__27424 = ctx;
var G__27425 = cljs.core.cons(cljs.core.cst$sym$do,body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27424,G__27425) : sci.impl.analyzer.analyze.call(null,G__27424,G__27425));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__27426 = c;
var seq__27427 = cljs.core.seq(vec__27426);
var first__27428 = cljs.core.first(seq__27427);
var seq__27427__$1 = cljs.core.next(seq__27427);
var _ = first__27428;
var first__27428__$1 = cljs.core.first(seq__27427__$1);
var seq__27427__$2 = cljs.core.next(seq__27427__$1);
var ex = first__27428__$1;
var first__27428__$2 = cljs.core.first(seq__27427__$2);
var seq__27427__$3 = cljs.core.next(seq__27427__$2);
var binding = first__27428__$2;
var body__$2 = seq__27427__$3;
var temp__5718__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,clazz,cljs.core.cst$kw$binding,binding,cljs.core.cst$kw$body,(function (){var G__27429 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,binding], null),null);
var G__27430 = cljs.core.cons(cljs.core.cst$sym$do,body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27429,G__27430) : sci.impl.analyzer.analyze.call(null,G__27429,G__27430));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__27431 = ctx;
var G__27432 = cljs.core.cons(cljs.core.cst$sym$do,cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27431,G__27432) : sci.impl.analyzer.analyze.call(null,G__27431,G__27432));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_try,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,body__$1,cljs.core.cst$kw$catches,catches__$1,cljs.core.cst$kw$finally,finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$try], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__27441){
var vec__27442 = p__27441;
var seq__27443 = cljs.core.seq(vec__27442);
var first__27444 = cljs.core.first(seq__27443);
var seq__27443__$1 = cljs.core.next(seq__27443);
var _declare = first__27444;
var names = seq__27443__$1;
var expr = vec__27442;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5718__auto__ = acc.get(name);
if(cljs.core.truth_(temp__5718__auto__)){
var x = temp__5718__auto__;
var temp__5718__auto____$1 = (function (){var G__27445 = x;
var G__27445__$1 = (((G__27445 == null))?null:cljs.core.meta(G__27445));
if((G__27445__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__27445__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var prev_ns = temp__5718__auto____$1;
var current_ns_name = sci.impl.vars.current_ns_name();
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci.impl.vars.getName(prev_ns),current_ns_name)))){
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns_name)].join(''),expr);
} else {
return acc;
}
} else {
return acc;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__27446 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),cljs.core.cst$kw$name,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__27446.sci$impl$vars$IVar$unbind$arity$1(null);

return G__27446;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__27447){
var vec__27448 = p__27447;
var seq__27449 = cljs.core.seq(vec__27448);
var first__27450 = cljs.core.first(seq__27449);
var seq__27449__$1 = cljs.core.next(seq__27449);
var _dot = first__27450;
var first__27450__$1 = cljs.core.first(seq__27449__$1);
var seq__27449__$2 = cljs.core.next(seq__27449__$1);
var instance_expr = first__27450__$1;
var first__27450__$2 = cljs.core.first(seq__27449__$2);
var seq__27449__$3 = cljs.core.next(seq__27449__$2);
var method_expr = first__27450__$2;
var args = seq__27449__$3;
var _expr = vec__27448;
var vec__27451 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__27452 = cljs.core.seq(vec__27451);
var first__27453 = cljs.core.first(seq__27452);
var seq__27452__$1 = cljs.core.next(seq__27452);
var method_expr__$1 = first__27453;
var args__$1 = seq__27452__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5718__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto__)){
var t = temp__5718__auto__;
var clazz = (function (){var or__4126__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag_DASH_class,clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$_DOT_,null,(1),null)),(new cljs.core.List(null,instance_expr__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_expr__$2,null,(1),null)),(new cljs.core.List(null,args__$2,null,(1),null))], 0)))));
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__27454){
var vec__27455 = p__27454;
var seq__27456 = cljs.core.seq(vec__27455);
var first__27457 = cljs.core.first(seq__27456);
var seq__27456__$1 = cljs.core.next(seq__27456);
var method_name = first__27457;
var first__27457__$1 = cljs.core.first(seq__27456__$1);
var seq__27456__$2 = cljs.core.next(seq__27456__$1);
var obj = first__27457__$1;
var args = seq__27456__$2;
var expr = vec__27455;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,cljs.core.cst$sym$_DOT_,(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__27458){
var vec__27459 = p__27458;
var seq__27460 = cljs.core.seq(vec__27459);
var first__27461 = cljs.core.first(seq__27460);
var seq__27460__$1 = cljs.core.next(seq__27460);
var _new = first__27461;
var first__27461__$1 = cljs.core.first(seq__27460__$1);
var seq__27460__$2 = cljs.core.next(seq__27460__$1);
var class_sym = first__27461__$1;
var args = seq__27460__$2;
var _expr = vec__27459;
var temp__5718__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5718__auto__)){
var map__27462 = temp__5718__auto__;
var map__27462__$1 = (((((!((map__27462 == null))))?(((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27462):map__27462);
var _opts = map__27462__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27462__$1,cljs.core.cst$kw$constructor);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$new,(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
var temp__5718__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5718__auto____$1)){
var record = temp__5718__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$impl$record_SLASH_constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record)),args__$1));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__27464){
var vec__27465 = p__27464;
var seq__27466 = cljs.core.seq(vec__27465);
var first__27467 = cljs.core.first(seq__27466);
var seq__27466__$1 = cljs.core.next(seq__27466);
var constructor_sym = first__27467;
var args = seq__27466__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__27468){
var vec__27469 = p__27468;
var seq__27470 = cljs.core.seq(vec__27469);
var first__27471 = cljs.core.first(seq__27470);
var seq__27470__$1 = cljs.core.next(seq__27470);
var _ns = first__27471;
var first__27471__$1 = cljs.core.first(seq__27470__$1);
var seq__27470__$2 = cljs.core.next(seq__27470__$1);
var ns_name = first__27471__$1;
var exprs = seq__27470__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__27472 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27472,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27472,(1),null);
var vec__27475 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,cljs.core.cst$kw$doc,docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__27482 = cljs.core.first(exprs__$3);
var seq__27483 = cljs.core.seq(vec__27482);
var first__27484 = cljs.core.first(seq__27483);
var seq__27483__$1 = cljs.core.next(seq__27483);
var k = first__27484;
var args = seq__27483__$1;
var expr = vec__27482;
var G__27485 = k;
var G__27485__$1 = (((G__27485 instanceof cljs.core.Keyword))?G__27485.fqn:null);
switch (G__27485__$1) {
case "require":
case "use":
var G__27487 = cljs.core.next(exprs__$3);
var G__27488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args),cljs.core.meta(expr))));
exprs__$3 = G__27487;
ret = G__27488;
continue;

break;
case "import":
var G__27489 = cljs.core.next(exprs__$3);
var G__27490 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,args),cljs.core.meta(expr))));
exprs__$3 = G__27489;
ret = G__27490;
continue;

break;
case "refer-clojure":
var G__27491 = cljs.core.next(exprs__$3);
var G__27492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$refer,cljs.core.cst$sym$clojure$core,args),cljs.core.meta(expr))));
exprs__$3 = G__27491;
ret = G__27492;
continue;

break;
case "gen-class":
var G__27493 = cljs.core.next(exprs__$3);
var G__27494 = ret;
exprs__$3 = G__27493;
ret = G__27494;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27485__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__27495){
var vec__27496 = p__27495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl_SLASH_prevent_DASH_deref,true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__27499){
var vec__27500 = p__27499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,top_level_QMARK_){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_(special_sym)?sci.impl.resolve.check_permission_BANG_(ctx,special_sym,f,null):null);
var f__$1 = (function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$sci$impl$analyzer_SLASH_static_DASH_access.cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})())){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$_DOT_,cljs.core.first(f__$1),cljs.core.second(f__$1),cljs.core.rest(expr)));
} else {
if(cljs.core.truth_(((cljs.core.not(eval_QMARK_))?(function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
})():false))){
var G__27503 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27503)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27503)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27503)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn_STAR_,G__27503)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,G__27503)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defmacro,G__27503)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defn,G__27503)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27503)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.cst$sym$do,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$loop,G__27503)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$doseq,G__27503)){
var G__27504 = ctx;
var G__27505 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27504,G__27505) : sci.impl.analyzer.analyze.call(null,G__27504,G__27505));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_constructor,G__27503)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27503)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$declare,G__27503)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27503)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_dot_STAR_,G__27503)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,G__27503)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$for,G__27503)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_macroexpanding.cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,G__27503)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,G__27503)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27503)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27503)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$var,G__27503)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27503)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27503)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_macroexpanding.cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4115__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,cljs.core.first(v))));
} else {
return and__4115__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v))
));
return expanded;
} else {
var temp__5718__auto__ = cljs.core.cst$kw$sci$impl_SLASH_inlined.cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5718__auto__)){
var f__$2 = temp__5718__auto__;
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta);
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
}
}
}catch (e27506){if((e27506 instanceof Error)){
var e = e27506;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.cons(f__$1,cljs.core.rest(expr)),cljs.core.meta(expr))));
} else {
throw e27506;

}
}
}
}
} else {
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(sci.impl.analyzer.analyze_children(ctx,expr));
return ret;
}
});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__27508 = arguments.length;
switch (G__27508) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
var ret = ((sci.impl.utils.constant_QMARK_(expr))?expr:(((expr instanceof cljs.core.Symbol))?(function (){var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return sci.impl.utils.merge_meta(v,m);

}
}
})():((cljs.core.record_QMARK_(expr))?expr:((cljs.core.map_QMARK_(expr))?(function (){var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)));
var analyzed_map = ((constant_map_QMARK_)?expr:cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs)));
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m):null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$eval));
if(cljs.core.truth_(analyzed_meta__$1)){
return cljs.core.with_meta(analyzed_map,analyzed_meta__$1);
} else {
return analyzed_map;
}
})():((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?(function (){var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_coll = ((constant_coll_QMARK_)?expr:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),sci.impl.analyzer.analyze_children(ctx,expr)));
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m):null);
var analyzed_meta__$1 = ((((constant_coll_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$eval));
if(cljs.core.truth_(analyzed_meta__$1)){
return cljs.core.with_meta(analyzed_coll,analyzed_meta__$1);
} else {
return analyzed_coll;
}
})():((cljs.core.seq_QMARK_(expr))?((cljs.core.seq(expr))?sci.impl.utils.merge_meta(sci.impl.analyzer.analyze_call(ctx,expr,top_level_QMARK_),m):expr):expr
))))));
return ret;
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);

