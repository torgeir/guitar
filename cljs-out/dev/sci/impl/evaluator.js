// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.evaluator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.faster');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.records');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [cljs.core.cst$sym$try,"null",cljs.core.cst$sym$lazy_DASH_seq,"null",cljs.core.cst$sym$fn,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$in_DASH_ns,"null",cljs.core.cst$sym$defn,"null",cljs.core.cst$sym$or,"null",cljs.core.cst$sym$require,"null",cljs.core.cst$sym$syntax_DASH_quote,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$quote,"null",cljs.core.cst$sym$case,"null",cljs.core.cst$sym$and,"null",cljs.core.cst$sym$def,"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__26554 = xs;
args__$2 = G__26554;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__26555 = xs;
args__$2 = G__26555;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,let_val));
var bindings = ctx__$1.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,let_name,v);
var ctx__$2 = cljs.core._assoc(ctx__$1,cljs.core.cst$kw$bindings,bindings__$1);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__26556 = ctx__$2;
var G__26557 = rest_let_bindings;
ctx__$1 = G__26556;
let_bindings__$1 = G__26557;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__26558 = nexprs;
exprs__$1 = G__26558;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.eval_if = (function sci$impl$evaluator$eval_if(ctx,cond,then,else$){
if(cljs.core.truth_((sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.evaluator.eval.call(null,ctx,cond)))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.evaluator.eval.call(null,ctx,then));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.evaluator.eval.call(null,ctx,else$));
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__26559){
var vec__26560 = p__26559;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26560,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26560,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26560,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26560,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.evaluator.eval.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
var cnn = sci.impl.vars.getName(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((function (){var G__26563 = cljs.core.cst$kw$sci$impl_SLASH_var$unbound;
var G__26564 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26563,G__26564) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26563,G__26564));
})())?(function (){var G__26565 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26565,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__26565;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,var_name], null));
});
var ret__4785__auto___26566 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,ctx,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$file,null,(1),null)),(new cljs.core.List(null,"/home/runner/work/guitar/guitar/resources/public/cljs-out/dev/sci/impl/evaluator.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$line,null,(1),null)),(new cljs.core.List(null,128,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$column,null,(1),null)),(new cljs.core.List(null,10,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_line,null,(1),null)),(new cljs.core.List(null,130,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_column,null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$tag,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$java$util$Map,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__26567){
var vec__26568 = p__26567;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26568,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__26571){
var map__26572 = p__26571;
var map__26572__$1 = (((((!((map__26572 == null))))?(((((map__26572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26572):map__26572);
var _parsed_libspec = map__26572__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$as);
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$refer);
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$rename);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$exclude);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$only);
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26572__$1,cljs.core.cst$kw$use);
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aliases,as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__26576 = cljs.core.cst$kw$all;
var G__26577 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26576,G__26577) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26576,G__26577));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use;
}
})())?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5718__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26578 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(1),null);
return v;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,current_ns], null),the_current_ns__$2);
var temp__5720__auto___26583 = (function (){var G__26581 = the_loaded_ns;
var G__26581__$1 = (((G__26581 == null))?null:cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__26581));
var G__26581__$2 = (((G__26581__$1 == null))?null:cljs.core.meta(G__26581__$1));
if((G__26581__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_required_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__26581__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___26583)){
var on_loaded_26584 = temp__5720__auto___26583;
var G__26582_26585 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_26584.cljs$core$IFn$_invoke$arity$1 ? on_loaded_26584.cljs$core$IFn$_invoke$arity$1(G__26582_26585) : on_loaded_26584.call(null,G__26582_26585));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__26586 = opts;
var map__26586__$1 = (((((!((map__26586 == null))))?(((((map__26586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26586):map__26586);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26586__$1,cljs.core.cst$kw$reload);
var env_STAR_ = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$namespaces);
var uberscript = cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uberscript;
}
})();
var temp__5718__auto__ = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5718__auto__)){
var the_loaded_ns = temp__5718__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
var temp__5718__auto____$1 = cljs.core.cst$kw$load_DASH_fn.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5718__auto____$1)){
var load_fn = temp__5718__auto____$1;
var temp__5718__auto____$2 = (function (){var G__26588 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,lib,cljs.core.cst$kw$reload,reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__26588) : load_fn.call(null,G__26588));
})();
if(cljs.core.truth_(temp__5718__auto____$2)){
var map__26589 = temp__5718__auto____$2;
var map__26589__$1 = (((((!((map__26589 == null))))?(((((map__26589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26589):map__26589);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26589__$1,cljs.core.cst$kw$file);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26589__$1,cljs.core.cst$kw$source);
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__26593_26595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY);
var G__26594_26596 = source;
var fexpr__26592_26597 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__26592_26597.cljs$core$IFn$_invoke$arity$2 ? fexpr__26592_26597.cljs$core$IFn$_invoke$arity$2(G__26593_26595,G__26594_26596) : fexpr__26592_26597.call(null,G__26593_26595,G__26594_26596));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e26591){if((e26591 instanceof Error)){
var e_26598 = e26591;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,cljs.core.cst$kw$namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_26598;
} else {
throw e26591;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$namespaces);
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.evaluator.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5720__auto__)){
var the_loaded_ns = temp__5720__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
});
sci.impl.evaluator.load_lib = (function sci$impl$evaluator$load_lib(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26603 = arguments.length;
var i__4737__auto___26604 = (0);
while(true){
if((i__4737__auto___26604 < len__4736__auto___26603)){
args__4742__auto__.push((arguments[i__4737__auto___26604]));

var G__26605 = (i__4737__auto___26604 + (1));
i__4737__auto___26604 = G__26605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = prefix;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.evaluator.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.evaluator.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq26599){
var G__26600 = cljs.core.first(seq26599);
var seq26599__$1 = cljs.core.next(seq26599);
var G__26601 = cljs.core.first(seq26599__$1);
var seq26599__$2 = cljs.core.next(seq26599__$1);
var G__26602 = cljs.core.first(seq26599__$2);
var seq26599__$3 = cljs.core.next(seq26599__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26600,G__26601,G__26602,seq26599__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.evaluator.prependss = (function sci$impl$evaluator$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.evaluator.libspec_QMARK_ = (function sci$impl$evaluator$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.evaluator.load_libs = (function sci$impl$evaluator$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_26638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$as,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$verbose,null,cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null,cljs.core.cst$kw$refer,null], null), null);
var unsupported_26639 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_26638,flags));
if(unsupported_26639){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_26639)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__26606 = cljs.core.seq(args_STAR___$1);
var chunk__26607 = null;
var count__26608 = (0);
var i__26609 = (0);
while(true){
if((i__26609 < count__26608)){
var arg = chunk__26607.cljs$core$IIndexed$_nth$arity$2(null,i__26609);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26624_26640 = arg;
var seq__26625_26641 = cljs.core.seq(vec__26624_26640);
var first__26626_26642 = cljs.core.first(seq__26625_26641);
var seq__26625_26643__$1 = cljs.core.next(seq__26625_26641);
var prefix_26644 = first__26626_26642;
var args_STAR__26645__$2 = seq__26625_26643__$1;
if((prefix_26644 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26627_26646 = cljs.core.seq(args_STAR__26645__$2);
var chunk__26628_26647 = null;
var count__26629_26648 = (0);
var i__26630_26649 = (0);
while(true){
if((i__26630_26649 < count__26629_26648)){
var arg_26650__$1 = chunk__26628_26647.cljs$core$IIndexed$_nth$arity$2(null,i__26630_26649);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26644,sci.impl.evaluator.prependss(arg_26650__$1,opts));


var G__26651 = seq__26627_26646;
var G__26652 = chunk__26628_26647;
var G__26653 = count__26629_26648;
var G__26654 = (i__26630_26649 + (1));
seq__26627_26646 = G__26651;
chunk__26628_26647 = G__26652;
count__26629_26648 = G__26653;
i__26630_26649 = G__26654;
continue;
} else {
var temp__5720__auto___26655 = cljs.core.seq(seq__26627_26646);
if(temp__5720__auto___26655){
var seq__26627_26656__$1 = temp__5720__auto___26655;
if(cljs.core.chunked_seq_QMARK_(seq__26627_26656__$1)){
var c__4556__auto___26657 = cljs.core.chunk_first(seq__26627_26656__$1);
var G__26658 = cljs.core.chunk_rest(seq__26627_26656__$1);
var G__26659 = c__4556__auto___26657;
var G__26660 = cljs.core.count(c__4556__auto___26657);
var G__26661 = (0);
seq__26627_26646 = G__26658;
chunk__26628_26647 = G__26659;
count__26629_26648 = G__26660;
i__26630_26649 = G__26661;
continue;
} else {
var arg_26662__$1 = cljs.core.first(seq__26627_26656__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26644,sci.impl.evaluator.prependss(arg_26662__$1,opts));


var G__26663 = cljs.core.next(seq__26627_26656__$1);
var G__26664 = null;
var G__26665 = (0);
var G__26666 = (0);
seq__26627_26646 = G__26663;
chunk__26628_26647 = G__26664;
count__26629_26648 = G__26665;
i__26630_26649 = G__26666;
continue;
}
} else {
}
}
break;
}
}


var G__26667 = seq__26606;
var G__26668 = chunk__26607;
var G__26669 = count__26608;
var G__26670 = (i__26609 + (1));
seq__26606 = G__26667;
chunk__26607 = G__26668;
count__26608 = G__26669;
i__26609 = G__26670;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26606);
if(temp__5720__auto__){
var seq__26606__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26606__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26606__$1);
var G__26671 = cljs.core.chunk_rest(seq__26606__$1);
var G__26672 = c__4556__auto__;
var G__26673 = cljs.core.count(c__4556__auto__);
var G__26674 = (0);
seq__26606 = G__26671;
chunk__26607 = G__26672;
count__26608 = G__26673;
i__26609 = G__26674;
continue;
} else {
var arg = cljs.core.first(seq__26606__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26631_26675 = arg;
var seq__26632_26676 = cljs.core.seq(vec__26631_26675);
var first__26633_26677 = cljs.core.first(seq__26632_26676);
var seq__26632_26678__$1 = cljs.core.next(seq__26632_26676);
var prefix_26679 = first__26633_26677;
var args_STAR__26680__$2 = seq__26632_26678__$1;
if((prefix_26679 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26634_26681 = cljs.core.seq(args_STAR__26680__$2);
var chunk__26635_26682 = null;
var count__26636_26683 = (0);
var i__26637_26684 = (0);
while(true){
if((i__26637_26684 < count__26636_26683)){
var arg_26685__$1 = chunk__26635_26682.cljs$core$IIndexed$_nth$arity$2(null,i__26637_26684);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26679,sci.impl.evaluator.prependss(arg_26685__$1,opts));


var G__26686 = seq__26634_26681;
var G__26687 = chunk__26635_26682;
var G__26688 = count__26636_26683;
var G__26689 = (i__26637_26684 + (1));
seq__26634_26681 = G__26686;
chunk__26635_26682 = G__26687;
count__26636_26683 = G__26688;
i__26637_26684 = G__26689;
continue;
} else {
var temp__5720__auto___26690__$1 = cljs.core.seq(seq__26634_26681);
if(temp__5720__auto___26690__$1){
var seq__26634_26691__$1 = temp__5720__auto___26690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26634_26691__$1)){
var c__4556__auto___26692 = cljs.core.chunk_first(seq__26634_26691__$1);
var G__26693 = cljs.core.chunk_rest(seq__26634_26691__$1);
var G__26694 = c__4556__auto___26692;
var G__26695 = cljs.core.count(c__4556__auto___26692);
var G__26696 = (0);
seq__26634_26681 = G__26693;
chunk__26635_26682 = G__26694;
count__26636_26683 = G__26695;
i__26637_26684 = G__26696;
continue;
} else {
var arg_26697__$1 = cljs.core.first(seq__26634_26691__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26679,sci.impl.evaluator.prependss(arg_26697__$1,opts));


var G__26698 = cljs.core.next(seq__26634_26691__$1);
var G__26699 = null;
var G__26700 = (0);
var G__26701 = (0);
seq__26634_26681 = G__26698;
chunk__26635_26682 = G__26699;
count__26636_26683 = G__26700;
i__26637_26684 = G__26701;
continue;
}
} else {
}
}
break;
}
}


var G__26702 = cljs.core.next(seq__26606__$1);
var G__26703 = null;
var G__26704 = (0);
var G__26705 = (0);
seq__26606 = G__26702;
chunk__26607 = G__26703;
count__26608 = G__26704;
i__26609 = G__26705;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.evaluator.eval_require = (function sci$impl$evaluator$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26708 = arguments.length;
var i__4737__auto___26709 = (0);
while(true){
if((i__4737__auto___26709 < len__4736__auto___26708)){
args__4742__auto__.push((arguments[i__4737__auto___26709]));

var G__26710 = (i__4737__auto___26709 + (1));
i__4737__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,cljs.core.cst$kw$require,args);
}));

(sci.impl.evaluator.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq26706){
var G__26707 = cljs.core.first(seq26706);
var seq26706__$1 = cljs.core.next(seq26706);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26707,seq26706__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26713 = arguments.length;
var i__4737__auto___26714 = (0);
while(true){
if((i__4737__auto___26714 < len__4736__auto___26713)){
args__4742__auto__.push((arguments[i__4737__auto___26714]));

var G__26715 = (i__4737__auto___26714 + (1));
i__4737__auto___26714 = G__26715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,cljs.core.cst$kw$use,args);
}));

(sci.impl.evaluator.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq26711){
var G__26712 = cljs.core.first(seq26711);
var seq26711__$1 = cljs.core.next(seq26711);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26712,seq26711__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__26716){
var vec__26717 = p__26716;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26717,(0),null);
var map__26720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26717,(1),null);
var map__26720__$1 = (((((!((map__26720 == null))))?(((((map__26720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26720):map__26720);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26720__$1,cljs.core.cst$kw$case_DASH_map);
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26720__$1,cljs.core.cst$kw$case_DASH_val);
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26720__$1,cljs.core.cst$kw$case_DASH_default);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5718__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26722 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26722,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26722,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__26725 = ctx;
var G__26726 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26725,G__26726) : sci.impl.evaluator.eval.call(null,G__26725,G__26726));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__26727 = cljs.core.cst$kw$sci$impl_SLASH_try.cljs$core$IFn$_invoke$arity$1(expr);
var map__26727__$1 = (((((!((map__26727 == null))))?(((((map__26727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26727):map__26727);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$body);
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$catches);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$finally);
try{var _STAR_in_try_STAR__orig_val__26735 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__26736 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__26736);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__26735);
}}catch (e26729){if((e26729 instanceof Error)){
var e = e26729;
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl$evaluator_SLASH_try_DASH_result,(function (){var G__26730 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__26731 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26730,G__26731) : sci.impl.evaluator.eval.call(null,G__26730,G__26731));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26732 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e26729;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__26737){
var vec__26738 = p__26737;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26741_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26741_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26741_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__26743){
var vec__26744 = p__26743;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26742_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26742_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26742_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__26749,p__26750){
var map__26751 = p__26749;
var map__26751__$1 = (((((!((map__26751 == null))))?(((((map__26751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26751):map__26751);
var ctx = map__26751__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26751__$1,cljs.core.cst$kw$class_DASH__GT_opts);
var vec__26752 = p__26750;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(3),null);
var _expr = vec__26752;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = cljs.core.cst$kw$tag_DASH_class.cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.cst$kw$allow);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5720__auto__ = cljs.core.cst$kw$public_DASH_class.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26748_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26748_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26748_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__26756){
var vec__26757 = p__26756;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26757,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26757,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26767 = arguments.length;
var i__4737__auto___26768 = (0);
while(true){
if((i__4737__auto___26768 < len__4736__auto___26767)){
args__4742__auto__.push((arguments[i__4737__auto___26768]));

var G__26769 = (i__4737__auto___26768 + (1));
i__4737__auto___26768 = G__26769;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.evaluator.eval.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__26763 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26763,(1),null);
var G__26766_26770 = k;
var G__26766_26771__$1 = (((G__26766_26770 instanceof cljs.core.Keyword))?G__26766_26770.fqn:null);
switch (G__26766_26771__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26766_26770,G__26766_26771__$1,vec__26763,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$refer,ns_sym__$1,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__26766_26770,G__26766_26771__$1,vec__26763,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26766_26770,G__26766_26771__$1,vec__26763,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__26766_26770,G__26766_26771__$1,vec__26763,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26766_26771__$1)].join('')));

}

var G__26773 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__26773;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq26760){
var G__26761 = cljs.core.first(seq26760);
var seq26760__$1 = cljs.core.next(seq26760);
var G__26762 = cljs.core.first(seq26760__$1);
var seq26760__$2 = cljs.core.next(seq26760__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26761,G__26762,seq26760__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__26775 = arguments.length;
switch (G__26775) {
case 2:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__26776 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26776.cljs$core$IFn$_invoke$arity$3 ? fexpr__26776.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26776.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__26777 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26777.cljs$core$IFn$_invoke$arity$3 ? fexpr__26777.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26777.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26785 = arguments.length;
var i__4737__auto___26786 = (0);
while(true){
if((i__4737__auto___26786 < len__4736__auto___26785)){
args__4742__auto__.push((arguments[i__4737__auto___26786]));

var G__26787 = (i__4737__auto___26786 + (1));
i__4737__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26779_SHARP_){
if(((cljs.core.seq_QMARK_(p1__26779_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__26779_SHARP_))))){
return cljs.core.second(p1__26779_SHARP_);
} else {
return p1__26779_SHARP_;
}
}),import_symbols_or_lists);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__26782 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5718__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$imports,class$], null),fq_class_name);

return clazz;
} else {
var temp__5718__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5718__auto____$1)){
var rec = temp__5718__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq26780){
var G__26781 = cljs.core.first(seq26780);
var seq26780__$1 = cljs.core.next(seq26780);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26781,seq26780__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__26788){
var vec__26789 = p__26788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$obj,obj__$1,cljs.core.cst$kw$v,v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__26795 = exprs;
var vec__26796 = G__26795;
var seq__26797 = cljs.core.seq(vec__26796);
var first__26798 = cljs.core.first(seq__26797);
var seq__26797__$1 = cljs.core.next(seq__26797);
var expr = first__26798;
var exprs__$1 = seq__26797__$1;
var G__26795__$1 = G__26795;
while(true){
var vec__26799 = G__26795__$1;
var seq__26800 = cljs.core.seq(vec__26799);
var first__26801 = cljs.core.first(seq__26800);
var seq__26800__$1 = cljs.core.next(seq__26800);
var expr__$1 = first__26801;
var exprs__$2 = seq__26800__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5718__auto__ = cljs.core.seq(exprs__$2);
if(temp__5718__auto__){
var exprs__$3 = temp__5718__auto__;
var G__26802 = exprs__$3;
G__26795__$1 = G__26802;
continue;
} else {
return ret;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do_STAR_);
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,expr){
var temp__5720__auto__ = cljs.core.next(expr);
if(temp__5720__auto__){
var exprs = temp__5720__auto__;
return sci.impl.evaluator.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,f,args){
var G__26997 = cljs.core.count(args);
switch (G__26997) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg26807 = (function (){var G__26998 = ctx;
var G__26999 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26998,G__26999) : sci.impl.evaluator.eval.call(null,G__26998,G__26999));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg26807) : f.call(null,arg26807));

break;
case (2):
var arg26808 = (function (){var G__27000 = ctx;
var G__27001 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27000,G__27001) : sci.impl.evaluator.eval.call(null,G__27000,G__27001));
})();
var args__$1 = cljs.core.rest(args);
var arg26809 = (function (){var G__27002 = ctx;
var G__27003 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27002,G__27003) : sci.impl.evaluator.eval.call(null,G__27002,G__27003));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg26808,arg26809) : f.call(null,arg26808,arg26809));

break;
case (3):
var arg26810 = (function (){var G__27004 = ctx;
var G__27005 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27004,G__27005) : sci.impl.evaluator.eval.call(null,G__27004,G__27005));
})();
var args__$1 = cljs.core.rest(args);
var arg26811 = (function (){var G__27006 = ctx;
var G__27007 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27006,G__27007) : sci.impl.evaluator.eval.call(null,G__27006,G__27007));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26812 = (function (){var G__27008 = ctx;
var G__27009 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27008,G__27009) : sci.impl.evaluator.eval.call(null,G__27008,G__27009));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg26810,arg26811,arg26812) : f.call(null,arg26810,arg26811,arg26812));

break;
case (4):
var arg26813 = (function (){var G__27010 = ctx;
var G__27011 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27010,G__27011) : sci.impl.evaluator.eval.call(null,G__27010,G__27011));
})();
var args__$1 = cljs.core.rest(args);
var arg26814 = (function (){var G__27012 = ctx;
var G__27013 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27012,G__27013) : sci.impl.evaluator.eval.call(null,G__27012,G__27013));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26815 = (function (){var G__27014 = ctx;
var G__27015 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27014,G__27015) : sci.impl.evaluator.eval.call(null,G__27014,G__27015));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26816 = (function (){var G__27016 = ctx;
var G__27017 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27016,G__27017) : sci.impl.evaluator.eval.call(null,G__27016,G__27017));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg26813,arg26814,arg26815,arg26816) : f.call(null,arg26813,arg26814,arg26815,arg26816));

break;
case (5):
var arg26817 = (function (){var G__27018 = ctx;
var G__27019 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27018,G__27019) : sci.impl.evaluator.eval.call(null,G__27018,G__27019));
})();
var args__$1 = cljs.core.rest(args);
var arg26818 = (function (){var G__27020 = ctx;
var G__27021 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27020,G__27021) : sci.impl.evaluator.eval.call(null,G__27020,G__27021));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26819 = (function (){var G__27022 = ctx;
var G__27023 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27022,G__27023) : sci.impl.evaluator.eval.call(null,G__27022,G__27023));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26820 = (function (){var G__27024 = ctx;
var G__27025 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27024,G__27025) : sci.impl.evaluator.eval.call(null,G__27024,G__27025));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26821 = (function (){var G__27026 = ctx;
var G__27027 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27026,G__27027) : sci.impl.evaluator.eval.call(null,G__27026,G__27027));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg26817,arg26818,arg26819,arg26820,arg26821) : f.call(null,arg26817,arg26818,arg26819,arg26820,arg26821));

break;
case (6):
var arg26822 = (function (){var G__27028 = ctx;
var G__27029 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27028,G__27029) : sci.impl.evaluator.eval.call(null,G__27028,G__27029));
})();
var args__$1 = cljs.core.rest(args);
var arg26823 = (function (){var G__27030 = ctx;
var G__27031 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27030,G__27031) : sci.impl.evaluator.eval.call(null,G__27030,G__27031));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26824 = (function (){var G__27032 = ctx;
var G__27033 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27032,G__27033) : sci.impl.evaluator.eval.call(null,G__27032,G__27033));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26825 = (function (){var G__27034 = ctx;
var G__27035 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27034,G__27035) : sci.impl.evaluator.eval.call(null,G__27034,G__27035));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26826 = (function (){var G__27036 = ctx;
var G__27037 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27036,G__27037) : sci.impl.evaluator.eval.call(null,G__27036,G__27037));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26827 = (function (){var G__27038 = ctx;
var G__27039 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27038,G__27039) : sci.impl.evaluator.eval.call(null,G__27038,G__27039));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg26822,arg26823,arg26824,arg26825,arg26826,arg26827) : f.call(null,arg26822,arg26823,arg26824,arg26825,arg26826,arg26827));

break;
case (7):
var arg26828 = (function (){var G__27040 = ctx;
var G__27041 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27040,G__27041) : sci.impl.evaluator.eval.call(null,G__27040,G__27041));
})();
var args__$1 = cljs.core.rest(args);
var arg26829 = (function (){var G__27042 = ctx;
var G__27043 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27042,G__27043) : sci.impl.evaluator.eval.call(null,G__27042,G__27043));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26830 = (function (){var G__27044 = ctx;
var G__27045 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27044,G__27045) : sci.impl.evaluator.eval.call(null,G__27044,G__27045));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26831 = (function (){var G__27046 = ctx;
var G__27047 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27046,G__27047) : sci.impl.evaluator.eval.call(null,G__27046,G__27047));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26832 = (function (){var G__27048 = ctx;
var G__27049 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27048,G__27049) : sci.impl.evaluator.eval.call(null,G__27048,G__27049));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26833 = (function (){var G__27050 = ctx;
var G__27051 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27050,G__27051) : sci.impl.evaluator.eval.call(null,G__27050,G__27051));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26834 = (function (){var G__27052 = ctx;
var G__27053 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27052,G__27053) : sci.impl.evaluator.eval.call(null,G__27052,G__27053));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg26828,arg26829,arg26830,arg26831,arg26832,arg26833,arg26834) : f.call(null,arg26828,arg26829,arg26830,arg26831,arg26832,arg26833,arg26834));

break;
case (8):
var arg26835 = (function (){var G__27054 = ctx;
var G__27055 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27054,G__27055) : sci.impl.evaluator.eval.call(null,G__27054,G__27055));
})();
var args__$1 = cljs.core.rest(args);
var arg26836 = (function (){var G__27056 = ctx;
var G__27057 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27056,G__27057) : sci.impl.evaluator.eval.call(null,G__27056,G__27057));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26837 = (function (){var G__27058 = ctx;
var G__27059 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27058,G__27059) : sci.impl.evaluator.eval.call(null,G__27058,G__27059));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26838 = (function (){var G__27060 = ctx;
var G__27061 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27060,G__27061) : sci.impl.evaluator.eval.call(null,G__27060,G__27061));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26839 = (function (){var G__27062 = ctx;
var G__27063 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27062,G__27063) : sci.impl.evaluator.eval.call(null,G__27062,G__27063));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26840 = (function (){var G__27064 = ctx;
var G__27065 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27064,G__27065) : sci.impl.evaluator.eval.call(null,G__27064,G__27065));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26841 = (function (){var G__27066 = ctx;
var G__27067 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27066,G__27067) : sci.impl.evaluator.eval.call(null,G__27066,G__27067));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26842 = (function (){var G__27068 = ctx;
var G__27069 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27068,G__27069) : sci.impl.evaluator.eval.call(null,G__27068,G__27069));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg26835,arg26836,arg26837,arg26838,arg26839,arg26840,arg26841,arg26842) : f.call(null,arg26835,arg26836,arg26837,arg26838,arg26839,arg26840,arg26841,arg26842));

break;
case (9):
var arg26843 = (function (){var G__27070 = ctx;
var G__27071 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27070,G__27071) : sci.impl.evaluator.eval.call(null,G__27070,G__27071));
})();
var args__$1 = cljs.core.rest(args);
var arg26844 = (function (){var G__27072 = ctx;
var G__27073 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27072,G__27073) : sci.impl.evaluator.eval.call(null,G__27072,G__27073));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26845 = (function (){var G__27074 = ctx;
var G__27075 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27074,G__27075) : sci.impl.evaluator.eval.call(null,G__27074,G__27075));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26846 = (function (){var G__27076 = ctx;
var G__27077 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27076,G__27077) : sci.impl.evaluator.eval.call(null,G__27076,G__27077));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26847 = (function (){var G__27078 = ctx;
var G__27079 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27078,G__27079) : sci.impl.evaluator.eval.call(null,G__27078,G__27079));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26848 = (function (){var G__27080 = ctx;
var G__27081 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27080,G__27081) : sci.impl.evaluator.eval.call(null,G__27080,G__27081));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26849 = (function (){var G__27082 = ctx;
var G__27083 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27082,G__27083) : sci.impl.evaluator.eval.call(null,G__27082,G__27083));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26850 = (function (){var G__27084 = ctx;
var G__27085 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27084,G__27085) : sci.impl.evaluator.eval.call(null,G__27084,G__27085));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26851 = (function (){var G__27086 = ctx;
var G__27087 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27086,G__27087) : sci.impl.evaluator.eval.call(null,G__27086,G__27087));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg26843,arg26844,arg26845,arg26846,arg26847,arg26848,arg26849,arg26850,arg26851) : f.call(null,arg26843,arg26844,arg26845,arg26846,arg26847,arg26848,arg26849,arg26850,arg26851));

break;
case (10):
var arg26852 = (function (){var G__27088 = ctx;
var G__27089 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27088,G__27089) : sci.impl.evaluator.eval.call(null,G__27088,G__27089));
})();
var args__$1 = cljs.core.rest(args);
var arg26853 = (function (){var G__27090 = ctx;
var G__27091 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27090,G__27091) : sci.impl.evaluator.eval.call(null,G__27090,G__27091));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26854 = (function (){var G__27092 = ctx;
var G__27093 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27092,G__27093) : sci.impl.evaluator.eval.call(null,G__27092,G__27093));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26855 = (function (){var G__27094 = ctx;
var G__27095 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27094,G__27095) : sci.impl.evaluator.eval.call(null,G__27094,G__27095));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26856 = (function (){var G__27096 = ctx;
var G__27097 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27096,G__27097) : sci.impl.evaluator.eval.call(null,G__27096,G__27097));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26857 = (function (){var G__27098 = ctx;
var G__27099 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27098,G__27099) : sci.impl.evaluator.eval.call(null,G__27098,G__27099));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26858 = (function (){var G__27100 = ctx;
var G__27101 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27100,G__27101) : sci.impl.evaluator.eval.call(null,G__27100,G__27101));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26859 = (function (){var G__27102 = ctx;
var G__27103 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27102,G__27103) : sci.impl.evaluator.eval.call(null,G__27102,G__27103));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26860 = (function (){var G__27104 = ctx;
var G__27105 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27104,G__27105) : sci.impl.evaluator.eval.call(null,G__27104,G__27105));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26861 = (function (){var G__27106 = ctx;
var G__27107 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27106,G__27107) : sci.impl.evaluator.eval.call(null,G__27106,G__27107));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg26852,arg26853,arg26854,arg26855,arg26856,arg26857,arg26858,arg26859,arg26860,arg26861) : f.call(null,arg26852,arg26853,arg26854,arg26855,arg26856,arg26857,arg26858,arg26859,arg26860,arg26861));

break;
case (11):
var arg26862 = (function (){var G__27108 = ctx;
var G__27109 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27108,G__27109) : sci.impl.evaluator.eval.call(null,G__27108,G__27109));
})();
var args__$1 = cljs.core.rest(args);
var arg26863 = (function (){var G__27110 = ctx;
var G__27111 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27110,G__27111) : sci.impl.evaluator.eval.call(null,G__27110,G__27111));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26864 = (function (){var G__27112 = ctx;
var G__27113 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27112,G__27113) : sci.impl.evaluator.eval.call(null,G__27112,G__27113));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26865 = (function (){var G__27114 = ctx;
var G__27115 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27114,G__27115) : sci.impl.evaluator.eval.call(null,G__27114,G__27115));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26866 = (function (){var G__27116 = ctx;
var G__27117 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27116,G__27117) : sci.impl.evaluator.eval.call(null,G__27116,G__27117));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26867 = (function (){var G__27118 = ctx;
var G__27119 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27118,G__27119) : sci.impl.evaluator.eval.call(null,G__27118,G__27119));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26868 = (function (){var G__27120 = ctx;
var G__27121 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27120,G__27121) : sci.impl.evaluator.eval.call(null,G__27120,G__27121));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26869 = (function (){var G__27122 = ctx;
var G__27123 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27122,G__27123) : sci.impl.evaluator.eval.call(null,G__27122,G__27123));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26870 = (function (){var G__27124 = ctx;
var G__27125 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27124,G__27125) : sci.impl.evaluator.eval.call(null,G__27124,G__27125));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26871 = (function (){var G__27126 = ctx;
var G__27127 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27126,G__27127) : sci.impl.evaluator.eval.call(null,G__27126,G__27127));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26872 = (function (){var G__27128 = ctx;
var G__27129 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27128,G__27129) : sci.impl.evaluator.eval.call(null,G__27128,G__27129));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg26862,arg26863,arg26864,arg26865,arg26866,arg26867,arg26868,arg26869,arg26870,arg26871,arg26872) : f.call(null,arg26862,arg26863,arg26864,arg26865,arg26866,arg26867,arg26868,arg26869,arg26870,arg26871,arg26872));

break;
case (12):
var arg26873 = (function (){var G__27130 = ctx;
var G__27131 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27130,G__27131) : sci.impl.evaluator.eval.call(null,G__27130,G__27131));
})();
var args__$1 = cljs.core.rest(args);
var arg26874 = (function (){var G__27132 = ctx;
var G__27133 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27132,G__27133) : sci.impl.evaluator.eval.call(null,G__27132,G__27133));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26875 = (function (){var G__27134 = ctx;
var G__27135 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27134,G__27135) : sci.impl.evaluator.eval.call(null,G__27134,G__27135));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26876 = (function (){var G__27136 = ctx;
var G__27137 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27136,G__27137) : sci.impl.evaluator.eval.call(null,G__27136,G__27137));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26877 = (function (){var G__27138 = ctx;
var G__27139 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27138,G__27139) : sci.impl.evaluator.eval.call(null,G__27138,G__27139));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26878 = (function (){var G__27140 = ctx;
var G__27141 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27140,G__27141) : sci.impl.evaluator.eval.call(null,G__27140,G__27141));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26879 = (function (){var G__27142 = ctx;
var G__27143 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27142,G__27143) : sci.impl.evaluator.eval.call(null,G__27142,G__27143));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26880 = (function (){var G__27144 = ctx;
var G__27145 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27144,G__27145) : sci.impl.evaluator.eval.call(null,G__27144,G__27145));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26881 = (function (){var G__27146 = ctx;
var G__27147 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27146,G__27147) : sci.impl.evaluator.eval.call(null,G__27146,G__27147));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26882 = (function (){var G__27148 = ctx;
var G__27149 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27148,G__27149) : sci.impl.evaluator.eval.call(null,G__27148,G__27149));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26883 = (function (){var G__27150 = ctx;
var G__27151 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27150,G__27151) : sci.impl.evaluator.eval.call(null,G__27150,G__27151));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26884 = (function (){var G__27152 = ctx;
var G__27153 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27152,G__27153) : sci.impl.evaluator.eval.call(null,G__27152,G__27153));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg26873,arg26874,arg26875,arg26876,arg26877,arg26878,arg26879,arg26880,arg26881,arg26882,arg26883,arg26884) : f.call(null,arg26873,arg26874,arg26875,arg26876,arg26877,arg26878,arg26879,arg26880,arg26881,arg26882,arg26883,arg26884));

break;
case (13):
var arg26885 = (function (){var G__27154 = ctx;
var G__27155 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27154,G__27155) : sci.impl.evaluator.eval.call(null,G__27154,G__27155));
})();
var args__$1 = cljs.core.rest(args);
var arg26886 = (function (){var G__27156 = ctx;
var G__27157 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27156,G__27157) : sci.impl.evaluator.eval.call(null,G__27156,G__27157));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26887 = (function (){var G__27158 = ctx;
var G__27159 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27158,G__27159) : sci.impl.evaluator.eval.call(null,G__27158,G__27159));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26888 = (function (){var G__27160 = ctx;
var G__27161 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27160,G__27161) : sci.impl.evaluator.eval.call(null,G__27160,G__27161));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26889 = (function (){var G__27162 = ctx;
var G__27163 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27162,G__27163) : sci.impl.evaluator.eval.call(null,G__27162,G__27163));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26890 = (function (){var G__27164 = ctx;
var G__27165 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27164,G__27165) : sci.impl.evaluator.eval.call(null,G__27164,G__27165));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26891 = (function (){var G__27166 = ctx;
var G__27167 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27166,G__27167) : sci.impl.evaluator.eval.call(null,G__27166,G__27167));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26892 = (function (){var G__27168 = ctx;
var G__27169 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27168,G__27169) : sci.impl.evaluator.eval.call(null,G__27168,G__27169));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26893 = (function (){var G__27170 = ctx;
var G__27171 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27170,G__27171) : sci.impl.evaluator.eval.call(null,G__27170,G__27171));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26894 = (function (){var G__27172 = ctx;
var G__27173 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27172,G__27173) : sci.impl.evaluator.eval.call(null,G__27172,G__27173));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26895 = (function (){var G__27174 = ctx;
var G__27175 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27174,G__27175) : sci.impl.evaluator.eval.call(null,G__27174,G__27175));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26896 = (function (){var G__27176 = ctx;
var G__27177 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27176,G__27177) : sci.impl.evaluator.eval.call(null,G__27176,G__27177));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26897 = (function (){var G__27178 = ctx;
var G__27179 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27178,G__27179) : sci.impl.evaluator.eval.call(null,G__27178,G__27179));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg26885,arg26886,arg26887,arg26888,arg26889,arg26890,arg26891,arg26892,arg26893,arg26894,arg26895,arg26896,arg26897) : f.call(null,arg26885,arg26886,arg26887,arg26888,arg26889,arg26890,arg26891,arg26892,arg26893,arg26894,arg26895,arg26896,arg26897));

break;
case (14):
var arg26898 = (function (){var G__27180 = ctx;
var G__27181 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27180,G__27181) : sci.impl.evaluator.eval.call(null,G__27180,G__27181));
})();
var args__$1 = cljs.core.rest(args);
var arg26899 = (function (){var G__27182 = ctx;
var G__27183 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27182,G__27183) : sci.impl.evaluator.eval.call(null,G__27182,G__27183));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26900 = (function (){var G__27184 = ctx;
var G__27185 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27184,G__27185) : sci.impl.evaluator.eval.call(null,G__27184,G__27185));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26901 = (function (){var G__27186 = ctx;
var G__27187 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27186,G__27187) : sci.impl.evaluator.eval.call(null,G__27186,G__27187));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26902 = (function (){var G__27188 = ctx;
var G__27189 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27188,G__27189) : sci.impl.evaluator.eval.call(null,G__27188,G__27189));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26903 = (function (){var G__27190 = ctx;
var G__27191 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27190,G__27191) : sci.impl.evaluator.eval.call(null,G__27190,G__27191));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26904 = (function (){var G__27192 = ctx;
var G__27193 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27192,G__27193) : sci.impl.evaluator.eval.call(null,G__27192,G__27193));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26905 = (function (){var G__27194 = ctx;
var G__27195 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27194,G__27195) : sci.impl.evaluator.eval.call(null,G__27194,G__27195));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26906 = (function (){var G__27196 = ctx;
var G__27197 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27196,G__27197) : sci.impl.evaluator.eval.call(null,G__27196,G__27197));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26907 = (function (){var G__27198 = ctx;
var G__27199 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27198,G__27199) : sci.impl.evaluator.eval.call(null,G__27198,G__27199));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26908 = (function (){var G__27200 = ctx;
var G__27201 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27200,G__27201) : sci.impl.evaluator.eval.call(null,G__27200,G__27201));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26909 = (function (){var G__27202 = ctx;
var G__27203 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27202,G__27203) : sci.impl.evaluator.eval.call(null,G__27202,G__27203));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26910 = (function (){var G__27204 = ctx;
var G__27205 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27204,G__27205) : sci.impl.evaluator.eval.call(null,G__27204,G__27205));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26911 = (function (){var G__27206 = ctx;
var G__27207 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27206,G__27207) : sci.impl.evaluator.eval.call(null,G__27206,G__27207));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg26898,arg26899,arg26900,arg26901,arg26902,arg26903,arg26904,arg26905,arg26906,arg26907,arg26908,arg26909,arg26910,arg26911) : f.call(null,arg26898,arg26899,arg26900,arg26901,arg26902,arg26903,arg26904,arg26905,arg26906,arg26907,arg26908,arg26909,arg26910,arg26911));

break;
case (15):
var arg26912 = (function (){var G__27208 = ctx;
var G__27209 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27208,G__27209) : sci.impl.evaluator.eval.call(null,G__27208,G__27209));
})();
var args__$1 = cljs.core.rest(args);
var arg26913 = (function (){var G__27210 = ctx;
var G__27211 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27210,G__27211) : sci.impl.evaluator.eval.call(null,G__27210,G__27211));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26914 = (function (){var G__27212 = ctx;
var G__27213 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27212,G__27213) : sci.impl.evaluator.eval.call(null,G__27212,G__27213));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26915 = (function (){var G__27214 = ctx;
var G__27215 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27214,G__27215) : sci.impl.evaluator.eval.call(null,G__27214,G__27215));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26916 = (function (){var G__27216 = ctx;
var G__27217 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27216,G__27217) : sci.impl.evaluator.eval.call(null,G__27216,G__27217));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26917 = (function (){var G__27218 = ctx;
var G__27219 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27218,G__27219) : sci.impl.evaluator.eval.call(null,G__27218,G__27219));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26918 = (function (){var G__27220 = ctx;
var G__27221 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27220,G__27221) : sci.impl.evaluator.eval.call(null,G__27220,G__27221));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26919 = (function (){var G__27222 = ctx;
var G__27223 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27222,G__27223) : sci.impl.evaluator.eval.call(null,G__27222,G__27223));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26920 = (function (){var G__27224 = ctx;
var G__27225 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27224,G__27225) : sci.impl.evaluator.eval.call(null,G__27224,G__27225));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26921 = (function (){var G__27226 = ctx;
var G__27227 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27226,G__27227) : sci.impl.evaluator.eval.call(null,G__27226,G__27227));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26922 = (function (){var G__27228 = ctx;
var G__27229 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27228,G__27229) : sci.impl.evaluator.eval.call(null,G__27228,G__27229));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26923 = (function (){var G__27230 = ctx;
var G__27231 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27230,G__27231) : sci.impl.evaluator.eval.call(null,G__27230,G__27231));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26924 = (function (){var G__27232 = ctx;
var G__27233 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27232,G__27233) : sci.impl.evaluator.eval.call(null,G__27232,G__27233));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26925 = (function (){var G__27234 = ctx;
var G__27235 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27234,G__27235) : sci.impl.evaluator.eval.call(null,G__27234,G__27235));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26926 = (function (){var G__27236 = ctx;
var G__27237 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27236,G__27237) : sci.impl.evaluator.eval.call(null,G__27236,G__27237));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg26912,arg26913,arg26914,arg26915,arg26916,arg26917,arg26918,arg26919,arg26920,arg26921,arg26922,arg26923,arg26924,arg26925,arg26926) : f.call(null,arg26912,arg26913,arg26914,arg26915,arg26916,arg26917,arg26918,arg26919,arg26920,arg26921,arg26922,arg26923,arg26924,arg26925,arg26926));

break;
case (16):
var arg26927 = (function (){var G__27238 = ctx;
var G__27239 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27238,G__27239) : sci.impl.evaluator.eval.call(null,G__27238,G__27239));
})();
var args__$1 = cljs.core.rest(args);
var arg26928 = (function (){var G__27240 = ctx;
var G__27241 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27240,G__27241) : sci.impl.evaluator.eval.call(null,G__27240,G__27241));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26929 = (function (){var G__27242 = ctx;
var G__27243 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27242,G__27243) : sci.impl.evaluator.eval.call(null,G__27242,G__27243));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26930 = (function (){var G__27244 = ctx;
var G__27245 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27244,G__27245) : sci.impl.evaluator.eval.call(null,G__27244,G__27245));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26931 = (function (){var G__27246 = ctx;
var G__27247 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27246,G__27247) : sci.impl.evaluator.eval.call(null,G__27246,G__27247));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26932 = (function (){var G__27248 = ctx;
var G__27249 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27248,G__27249) : sci.impl.evaluator.eval.call(null,G__27248,G__27249));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26933 = (function (){var G__27250 = ctx;
var G__27251 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27250,G__27251) : sci.impl.evaluator.eval.call(null,G__27250,G__27251));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26934 = (function (){var G__27252 = ctx;
var G__27253 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27252,G__27253) : sci.impl.evaluator.eval.call(null,G__27252,G__27253));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26935 = (function (){var G__27254 = ctx;
var G__27255 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27254,G__27255) : sci.impl.evaluator.eval.call(null,G__27254,G__27255));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26936 = (function (){var G__27256 = ctx;
var G__27257 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27256,G__27257) : sci.impl.evaluator.eval.call(null,G__27256,G__27257));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26937 = (function (){var G__27258 = ctx;
var G__27259 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27258,G__27259) : sci.impl.evaluator.eval.call(null,G__27258,G__27259));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26938 = (function (){var G__27260 = ctx;
var G__27261 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27260,G__27261) : sci.impl.evaluator.eval.call(null,G__27260,G__27261));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26939 = (function (){var G__27262 = ctx;
var G__27263 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27262,G__27263) : sci.impl.evaluator.eval.call(null,G__27262,G__27263));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26940 = (function (){var G__27264 = ctx;
var G__27265 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27264,G__27265) : sci.impl.evaluator.eval.call(null,G__27264,G__27265));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26941 = (function (){var G__27266 = ctx;
var G__27267 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27266,G__27267) : sci.impl.evaluator.eval.call(null,G__27266,G__27267));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26942 = (function (){var G__27268 = ctx;
var G__27269 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27268,G__27269) : sci.impl.evaluator.eval.call(null,G__27268,G__27269));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg26927,arg26928,arg26929,arg26930,arg26931,arg26932,arg26933,arg26934,arg26935,arg26936,arg26937,arg26938,arg26939,arg26940,arg26941,arg26942) : f.call(null,arg26927,arg26928,arg26929,arg26930,arg26931,arg26932,arg26933,arg26934,arg26935,arg26936,arg26937,arg26938,arg26939,arg26940,arg26941,arg26942));

break;
case (17):
var arg26943 = (function (){var G__27270 = ctx;
var G__27271 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27270,G__27271) : sci.impl.evaluator.eval.call(null,G__27270,G__27271));
})();
var args__$1 = cljs.core.rest(args);
var arg26944 = (function (){var G__27272 = ctx;
var G__27273 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27272,G__27273) : sci.impl.evaluator.eval.call(null,G__27272,G__27273));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26945 = (function (){var G__27274 = ctx;
var G__27275 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27274,G__27275) : sci.impl.evaluator.eval.call(null,G__27274,G__27275));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26946 = (function (){var G__27276 = ctx;
var G__27277 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27276,G__27277) : sci.impl.evaluator.eval.call(null,G__27276,G__27277));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26947 = (function (){var G__27278 = ctx;
var G__27279 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27278,G__27279) : sci.impl.evaluator.eval.call(null,G__27278,G__27279));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26948 = (function (){var G__27280 = ctx;
var G__27281 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27280,G__27281) : sci.impl.evaluator.eval.call(null,G__27280,G__27281));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26949 = (function (){var G__27282 = ctx;
var G__27283 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27282,G__27283) : sci.impl.evaluator.eval.call(null,G__27282,G__27283));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26950 = (function (){var G__27284 = ctx;
var G__27285 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27284,G__27285) : sci.impl.evaluator.eval.call(null,G__27284,G__27285));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26951 = (function (){var G__27286 = ctx;
var G__27287 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27286,G__27287) : sci.impl.evaluator.eval.call(null,G__27286,G__27287));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26952 = (function (){var G__27288 = ctx;
var G__27289 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27288,G__27289) : sci.impl.evaluator.eval.call(null,G__27288,G__27289));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26953 = (function (){var G__27290 = ctx;
var G__27291 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27290,G__27291) : sci.impl.evaluator.eval.call(null,G__27290,G__27291));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26954 = (function (){var G__27292 = ctx;
var G__27293 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27292,G__27293) : sci.impl.evaluator.eval.call(null,G__27292,G__27293));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26955 = (function (){var G__27294 = ctx;
var G__27295 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27294,G__27295) : sci.impl.evaluator.eval.call(null,G__27294,G__27295));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26956 = (function (){var G__27296 = ctx;
var G__27297 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27296,G__27297) : sci.impl.evaluator.eval.call(null,G__27296,G__27297));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26957 = (function (){var G__27298 = ctx;
var G__27299 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27298,G__27299) : sci.impl.evaluator.eval.call(null,G__27298,G__27299));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26958 = (function (){var G__27300 = ctx;
var G__27301 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27300,G__27301) : sci.impl.evaluator.eval.call(null,G__27300,G__27301));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26959 = (function (){var G__27302 = ctx;
var G__27303 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27302,G__27303) : sci.impl.evaluator.eval.call(null,G__27302,G__27303));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg26943,arg26944,arg26945,arg26946,arg26947,arg26948,arg26949,arg26950,arg26951,arg26952,arg26953,arg26954,arg26955,arg26956,arg26957,arg26958,arg26959) : f.call(null,arg26943,arg26944,arg26945,arg26946,arg26947,arg26948,arg26949,arg26950,arg26951,arg26952,arg26953,arg26954,arg26955,arg26956,arg26957,arg26958,arg26959));

break;
case (18):
var arg26960 = (function (){var G__27304 = ctx;
var G__27305 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27304,G__27305) : sci.impl.evaluator.eval.call(null,G__27304,G__27305));
})();
var args__$1 = cljs.core.rest(args);
var arg26961 = (function (){var G__27306 = ctx;
var G__27307 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27306,G__27307) : sci.impl.evaluator.eval.call(null,G__27306,G__27307));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26962 = (function (){var G__27308 = ctx;
var G__27309 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27308,G__27309) : sci.impl.evaluator.eval.call(null,G__27308,G__27309));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26963 = (function (){var G__27310 = ctx;
var G__27311 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27310,G__27311) : sci.impl.evaluator.eval.call(null,G__27310,G__27311));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26964 = (function (){var G__27312 = ctx;
var G__27313 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27312,G__27313) : sci.impl.evaluator.eval.call(null,G__27312,G__27313));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26965 = (function (){var G__27314 = ctx;
var G__27315 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27314,G__27315) : sci.impl.evaluator.eval.call(null,G__27314,G__27315));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26966 = (function (){var G__27316 = ctx;
var G__27317 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27316,G__27317) : sci.impl.evaluator.eval.call(null,G__27316,G__27317));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26967 = (function (){var G__27318 = ctx;
var G__27319 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27318,G__27319) : sci.impl.evaluator.eval.call(null,G__27318,G__27319));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26968 = (function (){var G__27320 = ctx;
var G__27321 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27320,G__27321) : sci.impl.evaluator.eval.call(null,G__27320,G__27321));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26969 = (function (){var G__27322 = ctx;
var G__27323 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27322,G__27323) : sci.impl.evaluator.eval.call(null,G__27322,G__27323));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26970 = (function (){var G__27324 = ctx;
var G__27325 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27324,G__27325) : sci.impl.evaluator.eval.call(null,G__27324,G__27325));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26971 = (function (){var G__27326 = ctx;
var G__27327 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27326,G__27327) : sci.impl.evaluator.eval.call(null,G__27326,G__27327));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26972 = (function (){var G__27328 = ctx;
var G__27329 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27328,G__27329) : sci.impl.evaluator.eval.call(null,G__27328,G__27329));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26973 = (function (){var G__27330 = ctx;
var G__27331 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27330,G__27331) : sci.impl.evaluator.eval.call(null,G__27330,G__27331));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26974 = (function (){var G__27332 = ctx;
var G__27333 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27332,G__27333) : sci.impl.evaluator.eval.call(null,G__27332,G__27333));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26975 = (function (){var G__27334 = ctx;
var G__27335 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27334,G__27335) : sci.impl.evaluator.eval.call(null,G__27334,G__27335));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26976 = (function (){var G__27336 = ctx;
var G__27337 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27336,G__27337) : sci.impl.evaluator.eval.call(null,G__27336,G__27337));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26977 = (function (){var G__27338 = ctx;
var G__27339 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27338,G__27339) : sci.impl.evaluator.eval.call(null,G__27338,G__27339));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg26960,arg26961,arg26962,arg26963,arg26964,arg26965,arg26966,arg26967,arg26968,arg26969,arg26970,arg26971,arg26972,arg26973,arg26974,arg26975,arg26976,arg26977) : f.call(null,arg26960,arg26961,arg26962,arg26963,arg26964,arg26965,arg26966,arg26967,arg26968,arg26969,arg26970,arg26971,arg26972,arg26973,arg26974,arg26975,arg26976,arg26977));

break;
case (19):
var arg26978 = (function (){var G__27340 = ctx;
var G__27341 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27340,G__27341) : sci.impl.evaluator.eval.call(null,G__27340,G__27341));
})();
var args__$1 = cljs.core.rest(args);
var arg26979 = (function (){var G__27342 = ctx;
var G__27343 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27342,G__27343) : sci.impl.evaluator.eval.call(null,G__27342,G__27343));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26980 = (function (){var G__27344 = ctx;
var G__27345 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27344,G__27345) : sci.impl.evaluator.eval.call(null,G__27344,G__27345));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26981 = (function (){var G__27346 = ctx;
var G__27347 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27346,G__27347) : sci.impl.evaluator.eval.call(null,G__27346,G__27347));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26982 = (function (){var G__27348 = ctx;
var G__27349 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27348,G__27349) : sci.impl.evaluator.eval.call(null,G__27348,G__27349));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26983 = (function (){var G__27350 = ctx;
var G__27351 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27350,G__27351) : sci.impl.evaluator.eval.call(null,G__27350,G__27351));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26984 = (function (){var G__27352 = ctx;
var G__27353 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27352,G__27353) : sci.impl.evaluator.eval.call(null,G__27352,G__27353));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26985 = (function (){var G__27354 = ctx;
var G__27355 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27354,G__27355) : sci.impl.evaluator.eval.call(null,G__27354,G__27355));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26986 = (function (){var G__27356 = ctx;
var G__27357 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27356,G__27357) : sci.impl.evaluator.eval.call(null,G__27356,G__27357));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26987 = (function (){var G__27358 = ctx;
var G__27359 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27358,G__27359) : sci.impl.evaluator.eval.call(null,G__27358,G__27359));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26988 = (function (){var G__27360 = ctx;
var G__27361 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27360,G__27361) : sci.impl.evaluator.eval.call(null,G__27360,G__27361));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26989 = (function (){var G__27362 = ctx;
var G__27363 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27362,G__27363) : sci.impl.evaluator.eval.call(null,G__27362,G__27363));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26990 = (function (){var G__27364 = ctx;
var G__27365 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27364,G__27365) : sci.impl.evaluator.eval.call(null,G__27364,G__27365));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26991 = (function (){var G__27366 = ctx;
var G__27367 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27366,G__27367) : sci.impl.evaluator.eval.call(null,G__27366,G__27367));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26992 = (function (){var G__27368 = ctx;
var G__27369 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27368,G__27369) : sci.impl.evaluator.eval.call(null,G__27368,G__27369));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26993 = (function (){var G__27370 = ctx;
var G__27371 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27370,G__27371) : sci.impl.evaluator.eval.call(null,G__27370,G__27371));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26994 = (function (){var G__27372 = ctx;
var G__27373 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27372,G__27373) : sci.impl.evaluator.eval.call(null,G__27372,G__27373));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26995 = (function (){var G__27374 = ctx;
var G__27375 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27374,G__27375) : sci.impl.evaluator.eval.call(null,G__27374,G__27375));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg26996 = (function (){var G__27376 = ctx;
var G__27377 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27376,G__27377) : sci.impl.evaluator.eval.call(null,G__27376,G__27377));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg26978,arg26979,arg26980,arg26981,arg26982,arg26983,arg26984,arg26985,arg26986,arg26987,arg26988,arg26989,arg26990,arg26991,arg26992,arg26993,arg26994,arg26995,arg26996) : f.call(null,arg26978,arg26979,arg26980,arg26981,arg26982,arg26983,arg26984,arg26985,arg26986,arg26987,arg26988,arg26989,arg26990,arg26991,arg26992,arg26993,arg26994,arg26995,arg26996));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26325_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26325_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26325_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__27379 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27379)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,G__27379)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27379)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27379)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27379)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27379)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$in_DASH_ns,G__27379)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$use,G__27379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27379)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,G__27379)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,G__27379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27379)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$refer,G__27379)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27379)){
return (new cljs.core.LazySeq(null,(function (){var G__27380 = ctx;
var G__27381 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27380,G__27381) : sci.impl.evaluator.eval.call(null,G__27380,G__27381));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$throw,G__27379)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27379)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__27379)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27379)].join('')));

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
});
sci.impl.evaluator.eval_call = (function sci$impl$evaluator$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(cljs.core.cst$kw$sci$impl_SLASH_op):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.evaluator.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__27383 = op;
var G__27384 = cljs.core.cst$kw$static_DASH_access;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27383,G__27384) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27383,G__27384));
})())){
return sci.impl.evaluator.eval_static_method_invocation(ctx,expr);
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.evaluator.eval.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
return sci.impl.evaluator.fn_call(ctx,f__$1,cljs.core.rest(expr));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e27382){if((e27382 instanceof Error)){
var e = e27382;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e27382;

}
}});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5718__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5718__auto__)){
var mm = temp__5718__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(cljs.core.cst$kw$sci$impl_SLASH_op):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
} else {
return m;
}
} else {
return m;
}
})(),cljs.core.cst$kw$sci$impl_SLASH_op);
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,expr){
try{if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
return cljs.core._deref(v);
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(cljs.core.cst$kw$sci$impl_SLASH_op):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__27390 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,G__27390)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$try,G__27390)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,G__27390)){
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$static_DASH_access,G__27390)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deref_BANG_,G__27390)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resolve_DASH_sym,G__27390)){
return ctx.get(cljs.core.cst$kw$bindings).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$needs_DASH_ctx,G__27390)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$eval,G__27390)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27385_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27385_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27385_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27386_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27386_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27386_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27387_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27387_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27387_SHARP_));
}),expr)),sci.impl.evaluator.handle_meta(ctx,m));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

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
})());
return ret;
}
}catch (e27388){if((e27388 instanceof Error)){
var e = e27388;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__27389 = e;
var G__27389__$1 = (((G__27389 == null))?null:cljs.core.ex_data(G__27389));
if((G__27389__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27389__$1);
}
})(),cljs.core.cst$kw$sci_SLASH_error)){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e27388;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);
