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
var G__27508 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl_SLASH_macroexpanding,true);
var G__27509 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27508,G__27509) : sci.impl.analyzer.analyze.call(null,G__27508,G__27509));
} else {
var f = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__27510 = f__$1;
var G__27510__$1 = (((G__27510 == null))?null:cljs.core.meta(G__27510));
if((G__27510__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(G__27510__$1);
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27511_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__27511_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__27511_SHARP_));
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
var G__27512 = cljs.core.next(params__$1);
var G__27513 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__27514 = lets;
params__$1 = G__27512;
new_params = G__27513;
lets = G__27514;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__27515 = cljs.core.next(params__$1);
var G__27516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__27517 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__27515;
new_params = G__27516;
lets = G__27517;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,new_params,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__27520,fn_name,p__27521,macro_QMARK_){
var map__27522 = p__27520;
var map__27522__$1 = (((((!((map__27522 == null))))?(((((map__27522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27522):map__27522);
var ctx = map__27522__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27522__$1,cljs.core.cst$kw$fn_DASH_expr);
var vec__27523 = p__27521;
var seq__27524 = cljs.core.seq(vec__27523);
var first__27525 = cljs.core.first(seq__27524);
var seq__27524__$1 = cljs.core.next(seq__27524);
var binding_vector = first__27525;
var body_exprs = seq__27524__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cst$sym$_AMPERSAND_env], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27518_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__27518_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__27519_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__27519_SHARP_);
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
var map__27527 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__27527__$1 = (((((!((map__27527 == null))))?(((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27527):map__27527);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27527__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27527__$1,cljs.core.cst$kw$body);
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,cljs.core.cst$kw$bindings,cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sci$impl_SLASH_body,body__$1,cljs.core.cst$kw$sci$impl_SLASH_params,params,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name,var_arg_name,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name], null);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?sci.impl.utils.mark_eval((sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m))):m);
return m__$1;
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__27529,macro_QMARK_){
var vec__27530 = p__27529;
var seq__27531 = cljs.core.seq(vec__27530);
var first__27532 = cljs.core.first(seq__27531);
var seq__27531__$1 = cljs.core.next(seq__27531);
var _fn = first__27532;
var first__27532__$1 = cljs.core.first(seq__27531__$1);
var seq__27531__$2 = cljs.core.next(seq__27531__$1);
var name_QMARK_ = first__27532__$1;
var body = seq__27531__$2;
var fn_expr = vec__27530;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$fn_DASH_expr,fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27533,body__$2){
var map__27534 = p__27533;
var map__27534__$1 = (((((!((map__27534 == null))))?(((((map__27534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27534):map__27534);
var acc = map__27534__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27534__$1,cljs.core.cst$kw$max_DASH_fixed);
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27534__$1,cljs.core.cst$kw$min_DASH_varargs);
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
var vec__27536 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27539,p__27540){
var vec__27541 = p__27539;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541,(1),null);
var vec__27544 = p__27540;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27544,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27544,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,cljs.core.cst$kw$bindings,cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return cljs.core.with_meta((function (ctx__$2){
return sci.impl.evaluator.eval_let(ctx__$2,new_let_bindings,body);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,sci.impl.utils.evaluate], null));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__27547){
var vec__27548 = p__27547;
var seq__27549 = cljs.core.seq(vec__27548);
var first__27550 = cljs.core.first(seq__27549);
var seq__27549__$1 = cljs.core.next(seq__27549);
var _let = first__27550;
var first__27550__$1 = cljs.core.first(seq__27549__$1);
var seq__27549__$2 = cljs.core.next(seq__27549__$1);
var let_bindings = first__27550__$1;
var exprs = seq__27549__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__27551 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(3),null);
var G__27554_27556 = ctx;
var G__27555_27557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__27554_27556,G__27555_27557) : sci.impl.analyzer.expand_declare.call(null,G__27554_27556,G__27555_27557));

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
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__27558){
var vec__27559 = p__27558;
var seq__27560 = cljs.core.seq(vec__27559);
var first__27561 = cljs.core.first(seq__27560);
var seq__27560__$1 = cljs.core.next(seq__27560);
var op = first__27561;
var first__27561__$1 = cljs.core.first(seq__27560__$1);
var seq__27560__$2 = cljs.core.next(seq__27560__$1);
var fn_name = first__27561__$1;
var body = seq__27560__$2;
var expr = vec__27559;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__27562_27570 = ctx;
var G__27563_27571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__27562_27570,G__27563_27571) : sci.impl.analyzer.expand_declare.call(null,G__27562_27570,G__27563_27571));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__27564 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(1),null);
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
var meta_map__$1 = (function (){var G__27567 = ctx;
var G__27568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27567,G__27568) : sci.impl.analyzer.analyze.call(null,G__27567,G__27568));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(cljs.core.cst$sym$fn,body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(cljs.core.cst$kw$sci$impl_SLASH_arglists.cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arglists,arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__27569 = meta_map__$2;
var G__27569__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27569,cljs.core.cst$kw$doc,docstring):G__27569);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27569__$1,cljs.core.cst$kw$macro,true);
} else {
return G__27569__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name__$1,cljs.core.cst$kw$sci$impl_SLASH_var,true], 0));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$def,(new cljs.core.List(null,fn_name__$1,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__27572 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27572,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27572,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,cljs.core.cst$sym$let,(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_lazy_DASH_seq,(new cljs.core.List(null,(function (){var G__27575 = ctx;
var G__27576 = (new cljs.core.List(null,cljs.core.cst$sym$fn,(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$do,body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27575,G__27576) : sci.impl.analyzer.analyze.call(null,G__27575,G__27576));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__27577){
var vec__27578 = p__27577;
var seq__27579 = cljs.core.seq(vec__27578);
var first__27580 = cljs.core.first(seq__27579);
var seq__27579__$1 = cljs.core.next(seq__27579);
var _if = first__27580;
var exprs = seq__27579__$1;
var expr = vec__27578;
var G__27581 = cljs.core.count(exprs);
switch (G__27581) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
case (3):
var vec__27582 = sci.impl.analyzer.analyze_children(ctx,exprs);
var cond = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(0),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(1),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(2),null);
return cljs.core.with_meta((function (ctx__$1){
return sci.impl.evaluator.eval_if(ctx__$1,cond,then,else$);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,sci.impl.utils.evaluate], null));

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__27586 = ctx;
var G__27587 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27586,G__27587) : sci.impl.analyzer.analyze.call(null,G__27586,G__27587));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,(function (){var G__27588 = ctx;
var G__27589 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27588,G__27589) : sci.impl.analyzer.analyze.call(null,G__27588,G__27589));
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
var vec__27593 = cases__$1;
var seq__27594 = cljs.core.seq(vec__27593);
var first__27595 = cljs.core.first(seq__27594);
var seq__27594__$1 = cljs.core.next(seq__27594);
var k = first__27595;
var first__27595__$1 = cljs.core.first(seq__27594__$1);
var seq__27594__$2 = cljs.core.next(seq__27594__$1);
var v__$1 = first__27595__$1;
var cases__$2 = seq__27594__$2;
if(cljs.core.list_QMARK_(k)){
var G__27596 = cases__$2;
var G__27597 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__27593,seq__27594,first__27595,seq__27594__$1,k,first__27595__$1,seq__27594__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__27593,seq__27594,first__27595,seq__27594__$1,k,first__27595__$1,seq__27594__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__27596;
ret_map = G__27597;
continue;
} else {
var G__27598 = cases__$2;
var G__27599 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__27598;
ret_map = G__27599;
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
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__27600){
var vec__27601 = p__27600;
var seq__27602 = cljs.core.seq(vec__27601);
var first__27603 = cljs.core.first(seq__27602);
var seq__27602__$1 = cljs.core.next(seq__27602);
var _try = first__27603;
var body = seq__27602__$1;
var vec__27604 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$catch,cljs.core.first(expr))))){
var G__27616 = exprs__$1;
var G__27617 = body_exprs;
var G__27618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__27619 = finally_expr;
exprs = G__27616;
body_exprs = G__27617;
catch_exprs = G__27618;
finally_expr = G__27619;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$finally,cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__27620 = exprs__$1;
var G__27621 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__27622 = catch_exprs;
var G__27623 = finally_expr;
exprs = G__27620;
body_exprs = G__27621;
catch_exprs = G__27622;
finally_expr = G__27623;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27604,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27604,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27604,(2),null);
var body__$1 = (function (){var G__27607 = ctx;
var G__27608 = cljs.core.cons(cljs.core.cst$sym$do,body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27607,G__27608) : sci.impl.analyzer.analyze.call(null,G__27607,G__27608));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__27609 = c;
var seq__27610 = cljs.core.seq(vec__27609);
var first__27611 = cljs.core.first(seq__27610);
var seq__27610__$1 = cljs.core.next(seq__27610);
var _ = first__27611;
var first__27611__$1 = cljs.core.first(seq__27610__$1);
var seq__27610__$2 = cljs.core.next(seq__27610__$1);
var ex = first__27611__$1;
var first__27611__$2 = cljs.core.first(seq__27610__$2);
var seq__27610__$3 = cljs.core.next(seq__27610__$2);
var binding = first__27611__$2;
var body__$2 = seq__27610__$3;
var temp__5718__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,clazz,cljs.core.cst$kw$binding,binding,cljs.core.cst$kw$body,(function (){var G__27612 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,binding], null),null);
var G__27613 = cljs.core.cons(cljs.core.cst$sym$do,body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27612,G__27613) : sci.impl.analyzer.analyze.call(null,G__27612,G__27613));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__27614 = ctx;
var G__27615 = cljs.core.cons(cljs.core.cst$sym$do,cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27614,G__27615) : sci.impl.analyzer.analyze.call(null,G__27614,G__27615));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_try,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,body__$1,cljs.core.cst$kw$catches,catches__$1,cljs.core.cst$kw$finally,finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$try], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__27624){
var vec__27625 = p__27624;
var seq__27626 = cljs.core.seq(vec__27625);
var first__27627 = cljs.core.first(seq__27626);
var seq__27626__$1 = cljs.core.next(seq__27626);
var _declare = first__27627;
var names = seq__27626__$1;
var expr = vec__27625;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5718__auto__ = acc.get(name);
if(cljs.core.truth_(temp__5718__auto__)){
var x = temp__5718__auto__;
var temp__5718__auto____$1 = (function (){var G__27628 = x;
var G__27628__$1 = (((G__27628 == null))?null:cljs.core.meta(G__27628));
if((G__27628__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__27628__$1);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__27629 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),cljs.core.cst$kw$name,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__27629.sci$impl$vars$IVar$unbind$arity$1(null);

return G__27629;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__27630){
var vec__27631 = p__27630;
var seq__27632 = cljs.core.seq(vec__27631);
var first__27633 = cljs.core.first(seq__27632);
var seq__27632__$1 = cljs.core.next(seq__27632);
var _dot = first__27633;
var first__27633__$1 = cljs.core.first(seq__27632__$1);
var seq__27632__$2 = cljs.core.next(seq__27632__$1);
var instance_expr = first__27633__$1;
var first__27633__$2 = cljs.core.first(seq__27632__$2);
var seq__27632__$3 = cljs.core.next(seq__27632__$2);
var method_expr = first__27633__$2;
var args = seq__27632__$3;
var _expr = vec__27631;
var vec__27634 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__27635 = cljs.core.seq(vec__27634);
var first__27636 = cljs.core.first(seq__27635);
var seq__27635__$1 = cljs.core.next(seq__27635);
var method_expr__$1 = first__27636;
var args__$1 = seq__27635__$1;
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__27637){
var vec__27638 = p__27637;
var seq__27639 = cljs.core.seq(vec__27638);
var first__27640 = cljs.core.first(seq__27639);
var seq__27639__$1 = cljs.core.next(seq__27639);
var method_name = first__27640;
var first__27640__$1 = cljs.core.first(seq__27639__$1);
var seq__27639__$2 = cljs.core.next(seq__27639__$1);
var obj = first__27640__$1;
var args = seq__27639__$2;
var expr = vec__27638;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,cljs.core.cst$sym$_DOT_,(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__27641){
var vec__27642 = p__27641;
var seq__27643 = cljs.core.seq(vec__27642);
var first__27644 = cljs.core.first(seq__27643);
var seq__27643__$1 = cljs.core.next(seq__27643);
var _new = first__27644;
var first__27644__$1 = cljs.core.first(seq__27643__$1);
var seq__27643__$2 = cljs.core.next(seq__27643__$1);
var class_sym = first__27644__$1;
var args = seq__27643__$2;
var _expr = vec__27642;
var temp__5718__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5718__auto__)){
var map__27645 = temp__5718__auto__;
var map__27645__$1 = (((((!((map__27645 == null))))?(((((map__27645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27645):map__27645);
var _opts = map__27645__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27645__$1,cljs.core.cst$kw$constructor);
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
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__27647){
var vec__27648 = p__27647;
var seq__27649 = cljs.core.seq(vec__27648);
var first__27650 = cljs.core.first(seq__27649);
var seq__27649__$1 = cljs.core.next(seq__27649);
var constructor_sym = first__27650;
var args = seq__27649__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__27651){
var vec__27652 = p__27651;
var seq__27653 = cljs.core.seq(vec__27652);
var first__27654 = cljs.core.first(seq__27653);
var seq__27653__$1 = cljs.core.next(seq__27653);
var _ns = first__27654;
var first__27654__$1 = cljs.core.first(seq__27653__$1);
var seq__27653__$2 = cljs.core.next(seq__27653__$1);
var ns_name = first__27654__$1;
var exprs = seq__27653__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__27655 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27655,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27655,(1),null);
var vec__27658 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27658,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27658,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,cljs.core.cst$kw$doc,docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__27665 = cljs.core.first(exprs__$3);
var seq__27666 = cljs.core.seq(vec__27665);
var first__27667 = cljs.core.first(seq__27666);
var seq__27666__$1 = cljs.core.next(seq__27666);
var k = first__27667;
var args = seq__27666__$1;
var expr = vec__27665;
var G__27668 = k;
var G__27668__$1 = (((G__27668 instanceof cljs.core.Keyword))?G__27668.fqn:null);
switch (G__27668__$1) {
case "require":
case "use":
var G__27670 = cljs.core.next(exprs__$3);
var G__27671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args),cljs.core.meta(expr))));
exprs__$3 = G__27670;
ret = G__27671;
continue;

break;
case "import":
var G__27672 = cljs.core.next(exprs__$3);
var G__27673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,args),cljs.core.meta(expr))));
exprs__$3 = G__27672;
ret = G__27673;
continue;

break;
case "refer-clojure":
var G__27674 = cljs.core.next(exprs__$3);
var G__27675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$refer,cljs.core.cst$sym$clojure$core,args),cljs.core.meta(expr))));
exprs__$3 = G__27674;
ret = G__27675;
continue;

break;
case "gen-class":
var G__27676 = cljs.core.next(exprs__$3);
var G__27677 = ret;
exprs__$3 = G__27676;
ret = G__27677;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27668__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__27678){
var vec__27679 = p__27678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl_SLASH_prevent_DASH_deref,true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__27682){
var vec__27683 = p__27682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(2),null);
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
var G__27686 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27686)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27686)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27686)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn_STAR_,G__27686)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,G__27686)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defmacro,G__27686)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defn,G__27686)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27686)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.cst$sym$do,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$loop,G__27686)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$doseq,G__27686)){
var G__27687 = ctx;
var G__27688 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27687,G__27688) : sci.impl.analyzer.analyze.call(null,G__27687,G__27688));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_constructor,G__27686)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27686)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$declare,G__27686)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27686)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_dot_STAR_,G__27686)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,G__27686)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$for,G__27686)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_macroexpanding.cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,G__27686)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,G__27686)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27686)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27686)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$var,G__27686)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27686)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27686)){
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
}catch (e27689){if((e27689 instanceof Error)){
var e = e27689;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.cons(f__$1,cljs.core.rest(expr)),cljs.core.meta(expr))));
} else {
throw e27689;

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
var G__27691 = arguments.length;
switch (G__27691) {
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

