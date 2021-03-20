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
var G__26371 = xs;
args__$2 = G__26371;
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
var G__26372 = xs;
args__$2 = G__26372;
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
var G__26373 = ctx__$2;
var G__26374 = rest_let_bindings;
ctx__$1 = G__26373;
let_bindings__$1 = G__26374;
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
var G__26375 = nexprs;
exprs__$1 = G__26375;
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
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__26376){
var vec__26377 = p__26376;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26377,(3),null);
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
var v = (cljs.core.truth_((function (){var G__26380 = cljs.core.cst$kw$sci$impl_SLASH_var$unbound;
var G__26381 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26380,G__26381) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26380,G__26381));
})())?(function (){var G__26382 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26382,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__26382;
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
var ret__4785__auto___26383 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,ctx,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$file,null,(1),null)),(new cljs.core.List(null,"/home/runner/work/guitar/guitar/resources/public/cljs-out/dev/sci/impl/evaluator.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$line,null,(1),null)),(new cljs.core.List(null,128,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$column,null,(1),null)),(new cljs.core.List(null,10,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_line,null,(1),null)),(new cljs.core.List(null,130,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_column,null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$tag,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$java$util$Map,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__26384){
var vec__26385 = p__26384;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(1),null);
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
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__26388){
var map__26389 = p__26388;
var map__26389__$1 = (((((!((map__26389 == null))))?(((((map__26389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26389):map__26389);
var _parsed_libspec = map__26389__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$as);
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$refer);
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$rename);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$exclude);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$only);
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26389__$1,cljs.core.cst$kw$use);
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__26393 = cljs.core.cst$kw$all;
var G__26394 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26393,G__26394) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26393,G__26394));
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
var vec__26395 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(1),null);
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
var temp__5720__auto___26400 = (function (){var G__26398 = the_loaded_ns;
var G__26398__$1 = (((G__26398 == null))?null:cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__26398));
var G__26398__$2 = (((G__26398__$1 == null))?null:cljs.core.meta(G__26398__$1));
if((G__26398__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_required_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__26398__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___26400)){
var on_loaded_26401 = temp__5720__auto___26400;
var G__26399_26402 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_26401.cljs$core$IFn$_invoke$arity$1 ? on_loaded_26401.cljs$core$IFn$_invoke$arity$1(G__26399_26402) : on_loaded_26401.call(null,G__26399_26402));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__26403 = opts;
var map__26403__$1 = (((((!((map__26403 == null))))?(((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26403):map__26403);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26403__$1,cljs.core.cst$kw$reload);
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
var temp__5718__auto____$2 = (function (){var G__26405 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,lib,cljs.core.cst$kw$reload,reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__26405) : load_fn.call(null,G__26405));
})();
if(cljs.core.truth_(temp__5718__auto____$2)){
var map__26406 = temp__5718__auto____$2;
var map__26406__$1 = (((((!((map__26406 == null))))?(((((map__26406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26406):map__26406);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,cljs.core.cst$kw$file);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,cljs.core.cst$kw$source);
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__26410_26412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY);
var G__26411_26413 = source;
var fexpr__26409_26414 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__26409_26414.cljs$core$IFn$_invoke$arity$2 ? fexpr__26409_26414.cljs$core$IFn$_invoke$arity$2(G__26410_26412,G__26411_26413) : fexpr__26409_26414.call(null,G__26410_26412,G__26411_26413));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e26408){if((e26408 instanceof Error)){
var e_26415 = e26408;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,cljs.core.cst$kw$namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_26415;
} else {
throw e26408;

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
var len__4736__auto___26420 = arguments.length;
var i__4737__auto___26421 = (0);
while(true){
if((i__4737__auto___26421 < len__4736__auto___26420)){
args__4742__auto__.push((arguments[i__4737__auto___26421]));

var G__26422 = (i__4737__auto___26421 + (1));
i__4737__auto___26421 = G__26422;
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
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq26416){
var G__26417 = cljs.core.first(seq26416);
var seq26416__$1 = cljs.core.next(seq26416);
var G__26418 = cljs.core.first(seq26416__$1);
var seq26416__$2 = cljs.core.next(seq26416__$1);
var G__26419 = cljs.core.first(seq26416__$2);
var seq26416__$3 = cljs.core.next(seq26416__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26417,G__26418,G__26419,seq26416__$3);
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
var supported_26455 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$as,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$verbose,null,cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null,cljs.core.cst$kw$refer,null], null), null);
var unsupported_26456 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_26455,flags));
if(unsupported_26456){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_26456)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__26423 = cljs.core.seq(args_STAR___$1);
var chunk__26424 = null;
var count__26425 = (0);
var i__26426 = (0);
while(true){
if((i__26426 < count__26425)){
var arg = chunk__26424.cljs$core$IIndexed$_nth$arity$2(null,i__26426);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26441_26457 = arg;
var seq__26442_26458 = cljs.core.seq(vec__26441_26457);
var first__26443_26459 = cljs.core.first(seq__26442_26458);
var seq__26442_26460__$1 = cljs.core.next(seq__26442_26458);
var prefix_26461 = first__26443_26459;
var args_STAR__26462__$2 = seq__26442_26460__$1;
if((prefix_26461 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26444_26463 = cljs.core.seq(args_STAR__26462__$2);
var chunk__26445_26464 = null;
var count__26446_26465 = (0);
var i__26447_26466 = (0);
while(true){
if((i__26447_26466 < count__26446_26465)){
var arg_26467__$1 = chunk__26445_26464.cljs$core$IIndexed$_nth$arity$2(null,i__26447_26466);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26461,sci.impl.evaluator.prependss(arg_26467__$1,opts));


var G__26468 = seq__26444_26463;
var G__26469 = chunk__26445_26464;
var G__26470 = count__26446_26465;
var G__26471 = (i__26447_26466 + (1));
seq__26444_26463 = G__26468;
chunk__26445_26464 = G__26469;
count__26446_26465 = G__26470;
i__26447_26466 = G__26471;
continue;
} else {
var temp__5720__auto___26472 = cljs.core.seq(seq__26444_26463);
if(temp__5720__auto___26472){
var seq__26444_26473__$1 = temp__5720__auto___26472;
if(cljs.core.chunked_seq_QMARK_(seq__26444_26473__$1)){
var c__4556__auto___26474 = cljs.core.chunk_first(seq__26444_26473__$1);
var G__26475 = cljs.core.chunk_rest(seq__26444_26473__$1);
var G__26476 = c__4556__auto___26474;
var G__26477 = cljs.core.count(c__4556__auto___26474);
var G__26478 = (0);
seq__26444_26463 = G__26475;
chunk__26445_26464 = G__26476;
count__26446_26465 = G__26477;
i__26447_26466 = G__26478;
continue;
} else {
var arg_26479__$1 = cljs.core.first(seq__26444_26473__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26461,sci.impl.evaluator.prependss(arg_26479__$1,opts));


var G__26480 = cljs.core.next(seq__26444_26473__$1);
var G__26481 = null;
var G__26482 = (0);
var G__26483 = (0);
seq__26444_26463 = G__26480;
chunk__26445_26464 = G__26481;
count__26446_26465 = G__26482;
i__26447_26466 = G__26483;
continue;
}
} else {
}
}
break;
}
}


var G__26484 = seq__26423;
var G__26485 = chunk__26424;
var G__26486 = count__26425;
var G__26487 = (i__26426 + (1));
seq__26423 = G__26484;
chunk__26424 = G__26485;
count__26425 = G__26486;
i__26426 = G__26487;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26423);
if(temp__5720__auto__){
var seq__26423__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26423__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26423__$1);
var G__26488 = cljs.core.chunk_rest(seq__26423__$1);
var G__26489 = c__4556__auto__;
var G__26490 = cljs.core.count(c__4556__auto__);
var G__26491 = (0);
seq__26423 = G__26488;
chunk__26424 = G__26489;
count__26425 = G__26490;
i__26426 = G__26491;
continue;
} else {
var arg = cljs.core.first(seq__26423__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26448_26492 = arg;
var seq__26449_26493 = cljs.core.seq(vec__26448_26492);
var first__26450_26494 = cljs.core.first(seq__26449_26493);
var seq__26449_26495__$1 = cljs.core.next(seq__26449_26493);
var prefix_26496 = first__26450_26494;
var args_STAR__26497__$2 = seq__26449_26495__$1;
if((prefix_26496 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26451_26498 = cljs.core.seq(args_STAR__26497__$2);
var chunk__26452_26499 = null;
var count__26453_26500 = (0);
var i__26454_26501 = (0);
while(true){
if((i__26454_26501 < count__26453_26500)){
var arg_26502__$1 = chunk__26452_26499.cljs$core$IIndexed$_nth$arity$2(null,i__26454_26501);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26496,sci.impl.evaluator.prependss(arg_26502__$1,opts));


var G__26503 = seq__26451_26498;
var G__26504 = chunk__26452_26499;
var G__26505 = count__26453_26500;
var G__26506 = (i__26454_26501 + (1));
seq__26451_26498 = G__26503;
chunk__26452_26499 = G__26504;
count__26453_26500 = G__26505;
i__26454_26501 = G__26506;
continue;
} else {
var temp__5720__auto___26507__$1 = cljs.core.seq(seq__26451_26498);
if(temp__5720__auto___26507__$1){
var seq__26451_26508__$1 = temp__5720__auto___26507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26451_26508__$1)){
var c__4556__auto___26509 = cljs.core.chunk_first(seq__26451_26508__$1);
var G__26510 = cljs.core.chunk_rest(seq__26451_26508__$1);
var G__26511 = c__4556__auto___26509;
var G__26512 = cljs.core.count(c__4556__auto___26509);
var G__26513 = (0);
seq__26451_26498 = G__26510;
chunk__26452_26499 = G__26511;
count__26453_26500 = G__26512;
i__26454_26501 = G__26513;
continue;
} else {
var arg_26514__$1 = cljs.core.first(seq__26451_26508__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26496,sci.impl.evaluator.prependss(arg_26514__$1,opts));


var G__26515 = cljs.core.next(seq__26451_26508__$1);
var G__26516 = null;
var G__26517 = (0);
var G__26518 = (0);
seq__26451_26498 = G__26515;
chunk__26452_26499 = G__26516;
count__26453_26500 = G__26517;
i__26454_26501 = G__26518;
continue;
}
} else {
}
}
break;
}
}


var G__26519 = cljs.core.next(seq__26423__$1);
var G__26520 = null;
var G__26521 = (0);
var G__26522 = (0);
seq__26423 = G__26519;
chunk__26424 = G__26520;
count__26425 = G__26521;
i__26426 = G__26522;
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
var len__4736__auto___26525 = arguments.length;
var i__4737__auto___26526 = (0);
while(true){
if((i__4737__auto___26526 < len__4736__auto___26525)){
args__4742__auto__.push((arguments[i__4737__auto___26526]));

var G__26527 = (i__4737__auto___26526 + (1));
i__4737__auto___26526 = G__26527;
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
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq26523){
var G__26524 = cljs.core.first(seq26523);
var seq26523__$1 = cljs.core.next(seq26523);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26524,seq26523__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26530 = arguments.length;
var i__4737__auto___26531 = (0);
while(true){
if((i__4737__auto___26531 < len__4736__auto___26530)){
args__4742__auto__.push((arguments[i__4737__auto___26531]));

var G__26532 = (i__4737__auto___26531 + (1));
i__4737__auto___26531 = G__26532;
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
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq26528){
var G__26529 = cljs.core.first(seq26528);
var seq26528__$1 = cljs.core.next(seq26528);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26529,seq26528__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__26533){
var vec__26534 = p__26533;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(0),null);
var map__26537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(1),null);
var map__26537__$1 = (((((!((map__26537 == null))))?(((((map__26537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26537):map__26537);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26537__$1,cljs.core.cst$kw$case_DASH_map);
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26537__$1,cljs.core.cst$kw$case_DASH_val);
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26537__$1,cljs.core.cst$kw$case_DASH_default);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5718__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26539 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__26542 = ctx;
var G__26543 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26542,G__26543) : sci.impl.evaluator.eval.call(null,G__26542,G__26543));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__26544 = cljs.core.cst$kw$sci$impl_SLASH_try.cljs$core$IFn$_invoke$arity$1(expr);
var map__26544__$1 = (((((!((map__26544 == null))))?(((((map__26544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26544):map__26544);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26544__$1,cljs.core.cst$kw$body);
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26544__$1,cljs.core.cst$kw$catches);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26544__$1,cljs.core.cst$kw$finally);
try{var _STAR_in_try_STAR__orig_val__26552 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__26553 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__26553);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__26552);
}}catch (e26546){if((e26546 instanceof Error)){
var e = e26546;
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl$evaluator_SLASH_try_DASH_result,(function (){var G__26547 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__26548 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26547,G__26548) : sci.impl.evaluator.eval.call(null,G__26547,G__26548));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26549 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26549,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26549,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e26546;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__26554){
var vec__26555 = p__26554;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26558_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26558_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26558_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__26560){
var vec__26561 = p__26560;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26559_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26559_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26559_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__26566,p__26567){
var map__26568 = p__26566;
var map__26568__$1 = (((((!((map__26568 == null))))?(((((map__26568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26568):map__26568);
var ctx = map__26568__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26568__$1,cljs.core.cst$kw$class_DASH__GT_opts);
var vec__26569 = p__26567;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26569,(3),null);
var _expr = vec__26569;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26565_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26565_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26565_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__26573){
var vec__26574 = p__26573;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26584 = arguments.length;
var i__4737__auto___26585 = (0);
while(true){
if((i__4737__auto___26585 < len__4736__auto___26584)){
args__4742__auto__.push((arguments[i__4737__auto___26585]));

var G__26586 = (i__4737__auto___26585 + (1));
i__4737__auto___26585 = G__26586;
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
var vec__26580 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(1),null);
var G__26583_26587 = k;
var G__26583_26588__$1 = (((G__26583_26587 instanceof cljs.core.Keyword))?G__26583_26587.fqn:null);
switch (G__26583_26588__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26583_26587,G__26583_26588__$1,vec__26580,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$refer,ns_sym__$1,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__26583_26587,G__26583_26588__$1,vec__26580,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26583_26587,G__26583_26588__$1,vec__26580,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__26583_26587,G__26583_26588__$1,vec__26580,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26583_26588__$1)].join('')));

}

var G__26590 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__26590;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq26577){
var G__26578 = cljs.core.first(seq26577);
var seq26577__$1 = cljs.core.next(seq26577);
var G__26579 = cljs.core.first(seq26577__$1);
var seq26577__$2 = cljs.core.next(seq26577__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26578,G__26579,seq26577__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__26592 = arguments.length;
switch (G__26592) {
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
return cljs.core.second((function (){var fexpr__26593 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26593.cljs$core$IFn$_invoke$arity$3 ? fexpr__26593.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26593.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__26594 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26594.cljs$core$IFn$_invoke$arity$3 ? fexpr__26594.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26594.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26602 = arguments.length;
var i__4737__auto___26603 = (0);
while(true){
if((i__4737__auto___26603 < len__4736__auto___26602)){
args__4742__auto__.push((arguments[i__4737__auto___26603]));

var G__26604 = (i__4737__auto___26603 + (1));
i__4737__auto___26603 = G__26604;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26596_SHARP_){
if(((cljs.core.seq_QMARK_(p1__26596_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__26596_SHARP_))))){
return cljs.core.second(p1__26596_SHARP_);
} else {
return p1__26596_SHARP_;
}
}),import_symbols_or_lists);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__26599 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26599,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26599,(1),null);
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
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq26597){
var G__26598 = cljs.core.first(seq26597);
var seq26597__$1 = cljs.core.next(seq26597);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26598,seq26597__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__26605){
var vec__26606 = p__26605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26606,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26606,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26606,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$obj,obj__$1,cljs.core.cst$kw$v,v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__26612 = exprs;
var vec__26613 = G__26612;
var seq__26614 = cljs.core.seq(vec__26613);
var first__26615 = cljs.core.first(seq__26614);
var seq__26614__$1 = cljs.core.next(seq__26614);
var expr = first__26615;
var exprs__$1 = seq__26614__$1;
var G__26612__$1 = G__26612;
while(true){
var vec__26616 = G__26612__$1;
var seq__26617 = cljs.core.seq(vec__26616);
var first__26618 = cljs.core.first(seq__26617);
var seq__26617__$1 = cljs.core.next(seq__26617);
var expr__$1 = first__26618;
var exprs__$2 = seq__26617__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5718__auto__ = cljs.core.seq(exprs__$2);
if(temp__5718__auto__){
var exprs__$3 = temp__5718__auto__;
var G__26619 = exprs__$3;
G__26612__$1 = G__26619;
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
var G__26814 = cljs.core.count(args);
switch (G__26814) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg26624 = (function (){var G__26815 = ctx;
var G__26816 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26815,G__26816) : sci.impl.evaluator.eval.call(null,G__26815,G__26816));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg26624) : f.call(null,arg26624));

break;
case (2):
var arg26625 = (function (){var G__26817 = ctx;
var G__26818 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26817,G__26818) : sci.impl.evaluator.eval.call(null,G__26817,G__26818));
})();
var args__$1 = cljs.core.rest(args);
var arg26626 = (function (){var G__26819 = ctx;
var G__26820 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26819,G__26820) : sci.impl.evaluator.eval.call(null,G__26819,G__26820));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg26625,arg26626) : f.call(null,arg26625,arg26626));

break;
case (3):
var arg26627 = (function (){var G__26821 = ctx;
var G__26822 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26821,G__26822) : sci.impl.evaluator.eval.call(null,G__26821,G__26822));
})();
var args__$1 = cljs.core.rest(args);
var arg26628 = (function (){var G__26823 = ctx;
var G__26824 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26823,G__26824) : sci.impl.evaluator.eval.call(null,G__26823,G__26824));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26629 = (function (){var G__26825 = ctx;
var G__26826 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26825,G__26826) : sci.impl.evaluator.eval.call(null,G__26825,G__26826));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg26627,arg26628,arg26629) : f.call(null,arg26627,arg26628,arg26629));

break;
case (4):
var arg26630 = (function (){var G__26827 = ctx;
var G__26828 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26827,G__26828) : sci.impl.evaluator.eval.call(null,G__26827,G__26828));
})();
var args__$1 = cljs.core.rest(args);
var arg26631 = (function (){var G__26829 = ctx;
var G__26830 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26829,G__26830) : sci.impl.evaluator.eval.call(null,G__26829,G__26830));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26632 = (function (){var G__26831 = ctx;
var G__26832 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26831,G__26832) : sci.impl.evaluator.eval.call(null,G__26831,G__26832));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26633 = (function (){var G__26833 = ctx;
var G__26834 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26833,G__26834) : sci.impl.evaluator.eval.call(null,G__26833,G__26834));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg26630,arg26631,arg26632,arg26633) : f.call(null,arg26630,arg26631,arg26632,arg26633));

break;
case (5):
var arg26634 = (function (){var G__26835 = ctx;
var G__26836 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26835,G__26836) : sci.impl.evaluator.eval.call(null,G__26835,G__26836));
})();
var args__$1 = cljs.core.rest(args);
var arg26635 = (function (){var G__26837 = ctx;
var G__26838 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26837,G__26838) : sci.impl.evaluator.eval.call(null,G__26837,G__26838));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26636 = (function (){var G__26839 = ctx;
var G__26840 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26839,G__26840) : sci.impl.evaluator.eval.call(null,G__26839,G__26840));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26637 = (function (){var G__26841 = ctx;
var G__26842 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26841,G__26842) : sci.impl.evaluator.eval.call(null,G__26841,G__26842));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26638 = (function (){var G__26843 = ctx;
var G__26844 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26843,G__26844) : sci.impl.evaluator.eval.call(null,G__26843,G__26844));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg26634,arg26635,arg26636,arg26637,arg26638) : f.call(null,arg26634,arg26635,arg26636,arg26637,arg26638));

break;
case (6):
var arg26639 = (function (){var G__26845 = ctx;
var G__26846 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26845,G__26846) : sci.impl.evaluator.eval.call(null,G__26845,G__26846));
})();
var args__$1 = cljs.core.rest(args);
var arg26640 = (function (){var G__26847 = ctx;
var G__26848 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26847,G__26848) : sci.impl.evaluator.eval.call(null,G__26847,G__26848));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26641 = (function (){var G__26849 = ctx;
var G__26850 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26849,G__26850) : sci.impl.evaluator.eval.call(null,G__26849,G__26850));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26642 = (function (){var G__26851 = ctx;
var G__26852 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26851,G__26852) : sci.impl.evaluator.eval.call(null,G__26851,G__26852));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26643 = (function (){var G__26853 = ctx;
var G__26854 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26853,G__26854) : sci.impl.evaluator.eval.call(null,G__26853,G__26854));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26644 = (function (){var G__26855 = ctx;
var G__26856 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26855,G__26856) : sci.impl.evaluator.eval.call(null,G__26855,G__26856));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg26639,arg26640,arg26641,arg26642,arg26643,arg26644) : f.call(null,arg26639,arg26640,arg26641,arg26642,arg26643,arg26644));

break;
case (7):
var arg26645 = (function (){var G__26857 = ctx;
var G__26858 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26857,G__26858) : sci.impl.evaluator.eval.call(null,G__26857,G__26858));
})();
var args__$1 = cljs.core.rest(args);
var arg26646 = (function (){var G__26859 = ctx;
var G__26860 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26859,G__26860) : sci.impl.evaluator.eval.call(null,G__26859,G__26860));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26647 = (function (){var G__26861 = ctx;
var G__26862 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26861,G__26862) : sci.impl.evaluator.eval.call(null,G__26861,G__26862));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26648 = (function (){var G__26863 = ctx;
var G__26864 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26863,G__26864) : sci.impl.evaluator.eval.call(null,G__26863,G__26864));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26649 = (function (){var G__26865 = ctx;
var G__26866 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26865,G__26866) : sci.impl.evaluator.eval.call(null,G__26865,G__26866));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26650 = (function (){var G__26867 = ctx;
var G__26868 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26867,G__26868) : sci.impl.evaluator.eval.call(null,G__26867,G__26868));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26651 = (function (){var G__26869 = ctx;
var G__26870 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26869,G__26870) : sci.impl.evaluator.eval.call(null,G__26869,G__26870));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg26645,arg26646,arg26647,arg26648,arg26649,arg26650,arg26651) : f.call(null,arg26645,arg26646,arg26647,arg26648,arg26649,arg26650,arg26651));

break;
case (8):
var arg26652 = (function (){var G__26871 = ctx;
var G__26872 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26871,G__26872) : sci.impl.evaluator.eval.call(null,G__26871,G__26872));
})();
var args__$1 = cljs.core.rest(args);
var arg26653 = (function (){var G__26873 = ctx;
var G__26874 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26873,G__26874) : sci.impl.evaluator.eval.call(null,G__26873,G__26874));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26654 = (function (){var G__26875 = ctx;
var G__26876 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26875,G__26876) : sci.impl.evaluator.eval.call(null,G__26875,G__26876));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26655 = (function (){var G__26877 = ctx;
var G__26878 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26877,G__26878) : sci.impl.evaluator.eval.call(null,G__26877,G__26878));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26656 = (function (){var G__26879 = ctx;
var G__26880 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26879,G__26880) : sci.impl.evaluator.eval.call(null,G__26879,G__26880));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26657 = (function (){var G__26881 = ctx;
var G__26882 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26881,G__26882) : sci.impl.evaluator.eval.call(null,G__26881,G__26882));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26658 = (function (){var G__26883 = ctx;
var G__26884 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26883,G__26884) : sci.impl.evaluator.eval.call(null,G__26883,G__26884));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26659 = (function (){var G__26885 = ctx;
var G__26886 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26885,G__26886) : sci.impl.evaluator.eval.call(null,G__26885,G__26886));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg26652,arg26653,arg26654,arg26655,arg26656,arg26657,arg26658,arg26659) : f.call(null,arg26652,arg26653,arg26654,arg26655,arg26656,arg26657,arg26658,arg26659));

break;
case (9):
var arg26660 = (function (){var G__26887 = ctx;
var G__26888 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26887,G__26888) : sci.impl.evaluator.eval.call(null,G__26887,G__26888));
})();
var args__$1 = cljs.core.rest(args);
var arg26661 = (function (){var G__26889 = ctx;
var G__26890 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26889,G__26890) : sci.impl.evaluator.eval.call(null,G__26889,G__26890));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26662 = (function (){var G__26891 = ctx;
var G__26892 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26891,G__26892) : sci.impl.evaluator.eval.call(null,G__26891,G__26892));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26663 = (function (){var G__26893 = ctx;
var G__26894 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26893,G__26894) : sci.impl.evaluator.eval.call(null,G__26893,G__26894));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26664 = (function (){var G__26895 = ctx;
var G__26896 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26895,G__26896) : sci.impl.evaluator.eval.call(null,G__26895,G__26896));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26665 = (function (){var G__26897 = ctx;
var G__26898 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26897,G__26898) : sci.impl.evaluator.eval.call(null,G__26897,G__26898));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26666 = (function (){var G__26899 = ctx;
var G__26900 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26899,G__26900) : sci.impl.evaluator.eval.call(null,G__26899,G__26900));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26667 = (function (){var G__26901 = ctx;
var G__26902 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26901,G__26902) : sci.impl.evaluator.eval.call(null,G__26901,G__26902));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26668 = (function (){var G__26903 = ctx;
var G__26904 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26903,G__26904) : sci.impl.evaluator.eval.call(null,G__26903,G__26904));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg26660,arg26661,arg26662,arg26663,arg26664,arg26665,arg26666,arg26667,arg26668) : f.call(null,arg26660,arg26661,arg26662,arg26663,arg26664,arg26665,arg26666,arg26667,arg26668));

break;
case (10):
var arg26669 = (function (){var G__26905 = ctx;
var G__26906 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26905,G__26906) : sci.impl.evaluator.eval.call(null,G__26905,G__26906));
})();
var args__$1 = cljs.core.rest(args);
var arg26670 = (function (){var G__26907 = ctx;
var G__26908 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26907,G__26908) : sci.impl.evaluator.eval.call(null,G__26907,G__26908));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26671 = (function (){var G__26909 = ctx;
var G__26910 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26909,G__26910) : sci.impl.evaluator.eval.call(null,G__26909,G__26910));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26672 = (function (){var G__26911 = ctx;
var G__26912 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26911,G__26912) : sci.impl.evaluator.eval.call(null,G__26911,G__26912));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26673 = (function (){var G__26913 = ctx;
var G__26914 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26913,G__26914) : sci.impl.evaluator.eval.call(null,G__26913,G__26914));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26674 = (function (){var G__26915 = ctx;
var G__26916 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26915,G__26916) : sci.impl.evaluator.eval.call(null,G__26915,G__26916));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26675 = (function (){var G__26917 = ctx;
var G__26918 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26917,G__26918) : sci.impl.evaluator.eval.call(null,G__26917,G__26918));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26676 = (function (){var G__26919 = ctx;
var G__26920 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26919,G__26920) : sci.impl.evaluator.eval.call(null,G__26919,G__26920));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26677 = (function (){var G__26921 = ctx;
var G__26922 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26921,G__26922) : sci.impl.evaluator.eval.call(null,G__26921,G__26922));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26678 = (function (){var G__26923 = ctx;
var G__26924 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26923,G__26924) : sci.impl.evaluator.eval.call(null,G__26923,G__26924));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg26669,arg26670,arg26671,arg26672,arg26673,arg26674,arg26675,arg26676,arg26677,arg26678) : f.call(null,arg26669,arg26670,arg26671,arg26672,arg26673,arg26674,arg26675,arg26676,arg26677,arg26678));

break;
case (11):
var arg26679 = (function (){var G__26925 = ctx;
var G__26926 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26925,G__26926) : sci.impl.evaluator.eval.call(null,G__26925,G__26926));
})();
var args__$1 = cljs.core.rest(args);
var arg26680 = (function (){var G__26927 = ctx;
var G__26928 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26927,G__26928) : sci.impl.evaluator.eval.call(null,G__26927,G__26928));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26681 = (function (){var G__26929 = ctx;
var G__26930 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26929,G__26930) : sci.impl.evaluator.eval.call(null,G__26929,G__26930));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26682 = (function (){var G__26931 = ctx;
var G__26932 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26931,G__26932) : sci.impl.evaluator.eval.call(null,G__26931,G__26932));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26683 = (function (){var G__26933 = ctx;
var G__26934 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26933,G__26934) : sci.impl.evaluator.eval.call(null,G__26933,G__26934));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26684 = (function (){var G__26935 = ctx;
var G__26936 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26935,G__26936) : sci.impl.evaluator.eval.call(null,G__26935,G__26936));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26685 = (function (){var G__26937 = ctx;
var G__26938 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26937,G__26938) : sci.impl.evaluator.eval.call(null,G__26937,G__26938));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26686 = (function (){var G__26939 = ctx;
var G__26940 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26939,G__26940) : sci.impl.evaluator.eval.call(null,G__26939,G__26940));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26687 = (function (){var G__26941 = ctx;
var G__26942 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26941,G__26942) : sci.impl.evaluator.eval.call(null,G__26941,G__26942));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26688 = (function (){var G__26943 = ctx;
var G__26944 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26943,G__26944) : sci.impl.evaluator.eval.call(null,G__26943,G__26944));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26689 = (function (){var G__26945 = ctx;
var G__26946 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26945,G__26946) : sci.impl.evaluator.eval.call(null,G__26945,G__26946));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg26679,arg26680,arg26681,arg26682,arg26683,arg26684,arg26685,arg26686,arg26687,arg26688,arg26689) : f.call(null,arg26679,arg26680,arg26681,arg26682,arg26683,arg26684,arg26685,arg26686,arg26687,arg26688,arg26689));

break;
case (12):
var arg26690 = (function (){var G__26947 = ctx;
var G__26948 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26947,G__26948) : sci.impl.evaluator.eval.call(null,G__26947,G__26948));
})();
var args__$1 = cljs.core.rest(args);
var arg26691 = (function (){var G__26949 = ctx;
var G__26950 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26949,G__26950) : sci.impl.evaluator.eval.call(null,G__26949,G__26950));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26692 = (function (){var G__26951 = ctx;
var G__26952 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26951,G__26952) : sci.impl.evaluator.eval.call(null,G__26951,G__26952));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26693 = (function (){var G__26953 = ctx;
var G__26954 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26953,G__26954) : sci.impl.evaluator.eval.call(null,G__26953,G__26954));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26694 = (function (){var G__26955 = ctx;
var G__26956 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26955,G__26956) : sci.impl.evaluator.eval.call(null,G__26955,G__26956));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26695 = (function (){var G__26957 = ctx;
var G__26958 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26957,G__26958) : sci.impl.evaluator.eval.call(null,G__26957,G__26958));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26696 = (function (){var G__26959 = ctx;
var G__26960 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26959,G__26960) : sci.impl.evaluator.eval.call(null,G__26959,G__26960));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26697 = (function (){var G__26961 = ctx;
var G__26962 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26961,G__26962) : sci.impl.evaluator.eval.call(null,G__26961,G__26962));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26698 = (function (){var G__26963 = ctx;
var G__26964 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26963,G__26964) : sci.impl.evaluator.eval.call(null,G__26963,G__26964));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26699 = (function (){var G__26965 = ctx;
var G__26966 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26965,G__26966) : sci.impl.evaluator.eval.call(null,G__26965,G__26966));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26700 = (function (){var G__26967 = ctx;
var G__26968 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26967,G__26968) : sci.impl.evaluator.eval.call(null,G__26967,G__26968));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26701 = (function (){var G__26969 = ctx;
var G__26970 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26969,G__26970) : sci.impl.evaluator.eval.call(null,G__26969,G__26970));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg26690,arg26691,arg26692,arg26693,arg26694,arg26695,arg26696,arg26697,arg26698,arg26699,arg26700,arg26701) : f.call(null,arg26690,arg26691,arg26692,arg26693,arg26694,arg26695,arg26696,arg26697,arg26698,arg26699,arg26700,arg26701));

break;
case (13):
var arg26702 = (function (){var G__26971 = ctx;
var G__26972 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26971,G__26972) : sci.impl.evaluator.eval.call(null,G__26971,G__26972));
})();
var args__$1 = cljs.core.rest(args);
var arg26703 = (function (){var G__26973 = ctx;
var G__26974 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26973,G__26974) : sci.impl.evaluator.eval.call(null,G__26973,G__26974));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26704 = (function (){var G__26975 = ctx;
var G__26976 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26975,G__26976) : sci.impl.evaluator.eval.call(null,G__26975,G__26976));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26705 = (function (){var G__26977 = ctx;
var G__26978 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26977,G__26978) : sci.impl.evaluator.eval.call(null,G__26977,G__26978));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26706 = (function (){var G__26979 = ctx;
var G__26980 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26979,G__26980) : sci.impl.evaluator.eval.call(null,G__26979,G__26980));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26707 = (function (){var G__26981 = ctx;
var G__26982 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26981,G__26982) : sci.impl.evaluator.eval.call(null,G__26981,G__26982));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26708 = (function (){var G__26983 = ctx;
var G__26984 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26983,G__26984) : sci.impl.evaluator.eval.call(null,G__26983,G__26984));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26709 = (function (){var G__26985 = ctx;
var G__26986 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26985,G__26986) : sci.impl.evaluator.eval.call(null,G__26985,G__26986));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26710 = (function (){var G__26987 = ctx;
var G__26988 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26987,G__26988) : sci.impl.evaluator.eval.call(null,G__26987,G__26988));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26711 = (function (){var G__26989 = ctx;
var G__26990 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26989,G__26990) : sci.impl.evaluator.eval.call(null,G__26989,G__26990));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26712 = (function (){var G__26991 = ctx;
var G__26992 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26991,G__26992) : sci.impl.evaluator.eval.call(null,G__26991,G__26992));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26713 = (function (){var G__26993 = ctx;
var G__26994 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26993,G__26994) : sci.impl.evaluator.eval.call(null,G__26993,G__26994));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26714 = (function (){var G__26995 = ctx;
var G__26996 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26995,G__26996) : sci.impl.evaluator.eval.call(null,G__26995,G__26996));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg26702,arg26703,arg26704,arg26705,arg26706,arg26707,arg26708,arg26709,arg26710,arg26711,arg26712,arg26713,arg26714) : f.call(null,arg26702,arg26703,arg26704,arg26705,arg26706,arg26707,arg26708,arg26709,arg26710,arg26711,arg26712,arg26713,arg26714));

break;
case (14):
var arg26715 = (function (){var G__26997 = ctx;
var G__26998 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26997,G__26998) : sci.impl.evaluator.eval.call(null,G__26997,G__26998));
})();
var args__$1 = cljs.core.rest(args);
var arg26716 = (function (){var G__26999 = ctx;
var G__27000 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26999,G__27000) : sci.impl.evaluator.eval.call(null,G__26999,G__27000));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26717 = (function (){var G__27001 = ctx;
var G__27002 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27001,G__27002) : sci.impl.evaluator.eval.call(null,G__27001,G__27002));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26718 = (function (){var G__27003 = ctx;
var G__27004 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27003,G__27004) : sci.impl.evaluator.eval.call(null,G__27003,G__27004));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26719 = (function (){var G__27005 = ctx;
var G__27006 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27005,G__27006) : sci.impl.evaluator.eval.call(null,G__27005,G__27006));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26720 = (function (){var G__27007 = ctx;
var G__27008 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27007,G__27008) : sci.impl.evaluator.eval.call(null,G__27007,G__27008));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26721 = (function (){var G__27009 = ctx;
var G__27010 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27009,G__27010) : sci.impl.evaluator.eval.call(null,G__27009,G__27010));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26722 = (function (){var G__27011 = ctx;
var G__27012 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27011,G__27012) : sci.impl.evaluator.eval.call(null,G__27011,G__27012));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26723 = (function (){var G__27013 = ctx;
var G__27014 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27013,G__27014) : sci.impl.evaluator.eval.call(null,G__27013,G__27014));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26724 = (function (){var G__27015 = ctx;
var G__27016 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27015,G__27016) : sci.impl.evaluator.eval.call(null,G__27015,G__27016));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26725 = (function (){var G__27017 = ctx;
var G__27018 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27017,G__27018) : sci.impl.evaluator.eval.call(null,G__27017,G__27018));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26726 = (function (){var G__27019 = ctx;
var G__27020 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27019,G__27020) : sci.impl.evaluator.eval.call(null,G__27019,G__27020));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26727 = (function (){var G__27021 = ctx;
var G__27022 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27021,G__27022) : sci.impl.evaluator.eval.call(null,G__27021,G__27022));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26728 = (function (){var G__27023 = ctx;
var G__27024 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27023,G__27024) : sci.impl.evaluator.eval.call(null,G__27023,G__27024));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg26715,arg26716,arg26717,arg26718,arg26719,arg26720,arg26721,arg26722,arg26723,arg26724,arg26725,arg26726,arg26727,arg26728) : f.call(null,arg26715,arg26716,arg26717,arg26718,arg26719,arg26720,arg26721,arg26722,arg26723,arg26724,arg26725,arg26726,arg26727,arg26728));

break;
case (15):
var arg26729 = (function (){var G__27025 = ctx;
var G__27026 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27025,G__27026) : sci.impl.evaluator.eval.call(null,G__27025,G__27026));
})();
var args__$1 = cljs.core.rest(args);
var arg26730 = (function (){var G__27027 = ctx;
var G__27028 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27027,G__27028) : sci.impl.evaluator.eval.call(null,G__27027,G__27028));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26731 = (function (){var G__27029 = ctx;
var G__27030 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27029,G__27030) : sci.impl.evaluator.eval.call(null,G__27029,G__27030));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26732 = (function (){var G__27031 = ctx;
var G__27032 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27031,G__27032) : sci.impl.evaluator.eval.call(null,G__27031,G__27032));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26733 = (function (){var G__27033 = ctx;
var G__27034 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27033,G__27034) : sci.impl.evaluator.eval.call(null,G__27033,G__27034));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26734 = (function (){var G__27035 = ctx;
var G__27036 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27035,G__27036) : sci.impl.evaluator.eval.call(null,G__27035,G__27036));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26735 = (function (){var G__27037 = ctx;
var G__27038 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27037,G__27038) : sci.impl.evaluator.eval.call(null,G__27037,G__27038));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26736 = (function (){var G__27039 = ctx;
var G__27040 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27039,G__27040) : sci.impl.evaluator.eval.call(null,G__27039,G__27040));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26737 = (function (){var G__27041 = ctx;
var G__27042 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27041,G__27042) : sci.impl.evaluator.eval.call(null,G__27041,G__27042));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26738 = (function (){var G__27043 = ctx;
var G__27044 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27043,G__27044) : sci.impl.evaluator.eval.call(null,G__27043,G__27044));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26739 = (function (){var G__27045 = ctx;
var G__27046 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27045,G__27046) : sci.impl.evaluator.eval.call(null,G__27045,G__27046));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26740 = (function (){var G__27047 = ctx;
var G__27048 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27047,G__27048) : sci.impl.evaluator.eval.call(null,G__27047,G__27048));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26741 = (function (){var G__27049 = ctx;
var G__27050 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27049,G__27050) : sci.impl.evaluator.eval.call(null,G__27049,G__27050));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26742 = (function (){var G__27051 = ctx;
var G__27052 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27051,G__27052) : sci.impl.evaluator.eval.call(null,G__27051,G__27052));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26743 = (function (){var G__27053 = ctx;
var G__27054 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27053,G__27054) : sci.impl.evaluator.eval.call(null,G__27053,G__27054));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg26729,arg26730,arg26731,arg26732,arg26733,arg26734,arg26735,arg26736,arg26737,arg26738,arg26739,arg26740,arg26741,arg26742,arg26743) : f.call(null,arg26729,arg26730,arg26731,arg26732,arg26733,arg26734,arg26735,arg26736,arg26737,arg26738,arg26739,arg26740,arg26741,arg26742,arg26743));

break;
case (16):
var arg26744 = (function (){var G__27055 = ctx;
var G__27056 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27055,G__27056) : sci.impl.evaluator.eval.call(null,G__27055,G__27056));
})();
var args__$1 = cljs.core.rest(args);
var arg26745 = (function (){var G__27057 = ctx;
var G__27058 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27057,G__27058) : sci.impl.evaluator.eval.call(null,G__27057,G__27058));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26746 = (function (){var G__27059 = ctx;
var G__27060 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27059,G__27060) : sci.impl.evaluator.eval.call(null,G__27059,G__27060));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26747 = (function (){var G__27061 = ctx;
var G__27062 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27061,G__27062) : sci.impl.evaluator.eval.call(null,G__27061,G__27062));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26748 = (function (){var G__27063 = ctx;
var G__27064 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27063,G__27064) : sci.impl.evaluator.eval.call(null,G__27063,G__27064));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26749 = (function (){var G__27065 = ctx;
var G__27066 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27065,G__27066) : sci.impl.evaluator.eval.call(null,G__27065,G__27066));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26750 = (function (){var G__27067 = ctx;
var G__27068 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27067,G__27068) : sci.impl.evaluator.eval.call(null,G__27067,G__27068));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26751 = (function (){var G__27069 = ctx;
var G__27070 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27069,G__27070) : sci.impl.evaluator.eval.call(null,G__27069,G__27070));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26752 = (function (){var G__27071 = ctx;
var G__27072 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27071,G__27072) : sci.impl.evaluator.eval.call(null,G__27071,G__27072));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26753 = (function (){var G__27073 = ctx;
var G__27074 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27073,G__27074) : sci.impl.evaluator.eval.call(null,G__27073,G__27074));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26754 = (function (){var G__27075 = ctx;
var G__27076 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27075,G__27076) : sci.impl.evaluator.eval.call(null,G__27075,G__27076));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26755 = (function (){var G__27077 = ctx;
var G__27078 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27077,G__27078) : sci.impl.evaluator.eval.call(null,G__27077,G__27078));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26756 = (function (){var G__27079 = ctx;
var G__27080 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27079,G__27080) : sci.impl.evaluator.eval.call(null,G__27079,G__27080));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26757 = (function (){var G__27081 = ctx;
var G__27082 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27081,G__27082) : sci.impl.evaluator.eval.call(null,G__27081,G__27082));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26758 = (function (){var G__27083 = ctx;
var G__27084 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27083,G__27084) : sci.impl.evaluator.eval.call(null,G__27083,G__27084));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26759 = (function (){var G__27085 = ctx;
var G__27086 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27085,G__27086) : sci.impl.evaluator.eval.call(null,G__27085,G__27086));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg26744,arg26745,arg26746,arg26747,arg26748,arg26749,arg26750,arg26751,arg26752,arg26753,arg26754,arg26755,arg26756,arg26757,arg26758,arg26759) : f.call(null,arg26744,arg26745,arg26746,arg26747,arg26748,arg26749,arg26750,arg26751,arg26752,arg26753,arg26754,arg26755,arg26756,arg26757,arg26758,arg26759));

break;
case (17):
var arg26760 = (function (){var G__27087 = ctx;
var G__27088 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27087,G__27088) : sci.impl.evaluator.eval.call(null,G__27087,G__27088));
})();
var args__$1 = cljs.core.rest(args);
var arg26761 = (function (){var G__27089 = ctx;
var G__27090 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27089,G__27090) : sci.impl.evaluator.eval.call(null,G__27089,G__27090));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26762 = (function (){var G__27091 = ctx;
var G__27092 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27091,G__27092) : sci.impl.evaluator.eval.call(null,G__27091,G__27092));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26763 = (function (){var G__27093 = ctx;
var G__27094 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27093,G__27094) : sci.impl.evaluator.eval.call(null,G__27093,G__27094));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26764 = (function (){var G__27095 = ctx;
var G__27096 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27095,G__27096) : sci.impl.evaluator.eval.call(null,G__27095,G__27096));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26765 = (function (){var G__27097 = ctx;
var G__27098 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27097,G__27098) : sci.impl.evaluator.eval.call(null,G__27097,G__27098));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26766 = (function (){var G__27099 = ctx;
var G__27100 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27099,G__27100) : sci.impl.evaluator.eval.call(null,G__27099,G__27100));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26767 = (function (){var G__27101 = ctx;
var G__27102 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27101,G__27102) : sci.impl.evaluator.eval.call(null,G__27101,G__27102));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26768 = (function (){var G__27103 = ctx;
var G__27104 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27103,G__27104) : sci.impl.evaluator.eval.call(null,G__27103,G__27104));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26769 = (function (){var G__27105 = ctx;
var G__27106 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27105,G__27106) : sci.impl.evaluator.eval.call(null,G__27105,G__27106));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26770 = (function (){var G__27107 = ctx;
var G__27108 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27107,G__27108) : sci.impl.evaluator.eval.call(null,G__27107,G__27108));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26771 = (function (){var G__27109 = ctx;
var G__27110 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27109,G__27110) : sci.impl.evaluator.eval.call(null,G__27109,G__27110));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26772 = (function (){var G__27111 = ctx;
var G__27112 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27111,G__27112) : sci.impl.evaluator.eval.call(null,G__27111,G__27112));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26773 = (function (){var G__27113 = ctx;
var G__27114 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27113,G__27114) : sci.impl.evaluator.eval.call(null,G__27113,G__27114));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26774 = (function (){var G__27115 = ctx;
var G__27116 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : sci.impl.evaluator.eval.call(null,G__27115,G__27116));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26775 = (function (){var G__27117 = ctx;
var G__27118 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27117,G__27118) : sci.impl.evaluator.eval.call(null,G__27117,G__27118));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26776 = (function (){var G__27119 = ctx;
var G__27120 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27119,G__27120) : sci.impl.evaluator.eval.call(null,G__27119,G__27120));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg26760,arg26761,arg26762,arg26763,arg26764,arg26765,arg26766,arg26767,arg26768,arg26769,arg26770,arg26771,arg26772,arg26773,arg26774,arg26775,arg26776) : f.call(null,arg26760,arg26761,arg26762,arg26763,arg26764,arg26765,arg26766,arg26767,arg26768,arg26769,arg26770,arg26771,arg26772,arg26773,arg26774,arg26775,arg26776));

break;
case (18):
var arg26777 = (function (){var G__27121 = ctx;
var G__27122 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27121,G__27122) : sci.impl.evaluator.eval.call(null,G__27121,G__27122));
})();
var args__$1 = cljs.core.rest(args);
var arg26778 = (function (){var G__27123 = ctx;
var G__27124 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27123,G__27124) : sci.impl.evaluator.eval.call(null,G__27123,G__27124));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26779 = (function (){var G__27125 = ctx;
var G__27126 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27125,G__27126) : sci.impl.evaluator.eval.call(null,G__27125,G__27126));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26780 = (function (){var G__27127 = ctx;
var G__27128 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27127,G__27128) : sci.impl.evaluator.eval.call(null,G__27127,G__27128));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26781 = (function (){var G__27129 = ctx;
var G__27130 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27129,G__27130) : sci.impl.evaluator.eval.call(null,G__27129,G__27130));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26782 = (function (){var G__27131 = ctx;
var G__27132 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27131,G__27132) : sci.impl.evaluator.eval.call(null,G__27131,G__27132));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26783 = (function (){var G__27133 = ctx;
var G__27134 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27133,G__27134) : sci.impl.evaluator.eval.call(null,G__27133,G__27134));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26784 = (function (){var G__27135 = ctx;
var G__27136 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27135,G__27136) : sci.impl.evaluator.eval.call(null,G__27135,G__27136));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26785 = (function (){var G__27137 = ctx;
var G__27138 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27137,G__27138) : sci.impl.evaluator.eval.call(null,G__27137,G__27138));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26786 = (function (){var G__27139 = ctx;
var G__27140 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27139,G__27140) : sci.impl.evaluator.eval.call(null,G__27139,G__27140));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26787 = (function (){var G__27141 = ctx;
var G__27142 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27141,G__27142) : sci.impl.evaluator.eval.call(null,G__27141,G__27142));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26788 = (function (){var G__27143 = ctx;
var G__27144 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27143,G__27144) : sci.impl.evaluator.eval.call(null,G__27143,G__27144));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26789 = (function (){var G__27145 = ctx;
var G__27146 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27145,G__27146) : sci.impl.evaluator.eval.call(null,G__27145,G__27146));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26790 = (function (){var G__27147 = ctx;
var G__27148 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27147,G__27148) : sci.impl.evaluator.eval.call(null,G__27147,G__27148));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26791 = (function (){var G__27149 = ctx;
var G__27150 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27149,G__27150) : sci.impl.evaluator.eval.call(null,G__27149,G__27150));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26792 = (function (){var G__27151 = ctx;
var G__27152 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27151,G__27152) : sci.impl.evaluator.eval.call(null,G__27151,G__27152));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26793 = (function (){var G__27153 = ctx;
var G__27154 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27153,G__27154) : sci.impl.evaluator.eval.call(null,G__27153,G__27154));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26794 = (function (){var G__27155 = ctx;
var G__27156 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27155,G__27156) : sci.impl.evaluator.eval.call(null,G__27155,G__27156));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg26777,arg26778,arg26779,arg26780,arg26781,arg26782,arg26783,arg26784,arg26785,arg26786,arg26787,arg26788,arg26789,arg26790,arg26791,arg26792,arg26793,arg26794) : f.call(null,arg26777,arg26778,arg26779,arg26780,arg26781,arg26782,arg26783,arg26784,arg26785,arg26786,arg26787,arg26788,arg26789,arg26790,arg26791,arg26792,arg26793,arg26794));

break;
case (19):
var arg26795 = (function (){var G__27157 = ctx;
var G__27158 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27157,G__27158) : sci.impl.evaluator.eval.call(null,G__27157,G__27158));
})();
var args__$1 = cljs.core.rest(args);
var arg26796 = (function (){var G__27159 = ctx;
var G__27160 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27159,G__27160) : sci.impl.evaluator.eval.call(null,G__27159,G__27160));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26797 = (function (){var G__27161 = ctx;
var G__27162 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27161,G__27162) : sci.impl.evaluator.eval.call(null,G__27161,G__27162));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26798 = (function (){var G__27163 = ctx;
var G__27164 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27163,G__27164) : sci.impl.evaluator.eval.call(null,G__27163,G__27164));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26799 = (function (){var G__27165 = ctx;
var G__27166 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27165,G__27166) : sci.impl.evaluator.eval.call(null,G__27165,G__27166));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26800 = (function (){var G__27167 = ctx;
var G__27168 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27167,G__27168) : sci.impl.evaluator.eval.call(null,G__27167,G__27168));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26801 = (function (){var G__27169 = ctx;
var G__27170 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27169,G__27170) : sci.impl.evaluator.eval.call(null,G__27169,G__27170));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26802 = (function (){var G__27171 = ctx;
var G__27172 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27171,G__27172) : sci.impl.evaluator.eval.call(null,G__27171,G__27172));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26803 = (function (){var G__27173 = ctx;
var G__27174 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27173,G__27174) : sci.impl.evaluator.eval.call(null,G__27173,G__27174));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26804 = (function (){var G__27175 = ctx;
var G__27176 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27175,G__27176) : sci.impl.evaluator.eval.call(null,G__27175,G__27176));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26805 = (function (){var G__27177 = ctx;
var G__27178 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27177,G__27178) : sci.impl.evaluator.eval.call(null,G__27177,G__27178));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26806 = (function (){var G__27179 = ctx;
var G__27180 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27179,G__27180) : sci.impl.evaluator.eval.call(null,G__27179,G__27180));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26807 = (function (){var G__27181 = ctx;
var G__27182 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27181,G__27182) : sci.impl.evaluator.eval.call(null,G__27181,G__27182));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26808 = (function (){var G__27183 = ctx;
var G__27184 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27183,G__27184) : sci.impl.evaluator.eval.call(null,G__27183,G__27184));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26809 = (function (){var G__27185 = ctx;
var G__27186 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27185,G__27186) : sci.impl.evaluator.eval.call(null,G__27185,G__27186));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26810 = (function (){var G__27187 = ctx;
var G__27188 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27187,G__27188) : sci.impl.evaluator.eval.call(null,G__27187,G__27188));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26811 = (function (){var G__27189 = ctx;
var G__27190 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27189,G__27190) : sci.impl.evaluator.eval.call(null,G__27189,G__27190));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26812 = (function (){var G__27191 = ctx;
var G__27192 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27191,G__27192) : sci.impl.evaluator.eval.call(null,G__27191,G__27192));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg26813 = (function (){var G__27193 = ctx;
var G__27194 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27193,G__27194) : sci.impl.evaluator.eval.call(null,G__27193,G__27194));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg26795,arg26796,arg26797,arg26798,arg26799,arg26800,arg26801,arg26802,arg26803,arg26804,arg26805,arg26806,arg26807,arg26808,arg26809,arg26810,arg26811,arg26812,arg26813) : f.call(null,arg26795,arg26796,arg26797,arg26798,arg26799,arg26800,arg26801,arg26802,arg26803,arg26804,arg26805,arg26806,arg26807,arg26808,arg26809,arg26810,arg26811,arg26812,arg26813));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26142_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26142_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26142_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__27196 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27196)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,G__27196)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27196)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27196)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27196)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27196)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27196)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$in_DASH_ns,G__27196)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$use,G__27196)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27196)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,G__27196)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,G__27196)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27196)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$refer,G__27196)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27196)){
return (new cljs.core.LazySeq(null,(function (){var G__27197 = ctx;
var G__27198 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27197,G__27198) : sci.impl.evaluator.eval.call(null,G__27197,G__27198));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$throw,G__27196)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27196)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__27196)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27196)].join('')));

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
if(cljs.core.truth_((function (){var G__27200 = op;
var G__27201 = cljs.core.cst$kw$static_DASH_access;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27200,G__27201) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27200,G__27201));
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
}catch (e27199){if((e27199 instanceof Error)){
var e = e27199;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e27199;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__27207 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,G__27207)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$try,G__27207)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,G__27207)){
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$static_DASH_access,G__27207)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deref_BANG_,G__27207)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resolve_DASH_sym,G__27207)){
return ctx.get(cljs.core.cst$kw$bindings).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$needs_DASH_ctx,G__27207)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$eval,G__27207)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27202_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27202_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27202_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27203_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27203_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27203_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27204_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27204_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27204_SHARP_));
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
}catch (e27205){if((e27205 instanceof Error)){
var e = e27205;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__27206 = e;
var G__27206__$1 = (((G__27206 == null))?null:cljs.core.ex_data(G__27206));
if((G__27206__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27206__$1);
}
})(),cljs.core.cst$kw$sci_SLASH_error)){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e27205;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);
