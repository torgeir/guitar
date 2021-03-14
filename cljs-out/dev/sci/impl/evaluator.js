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
var G__26306 = xs;
args__$2 = G__26306;
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
var G__26307 = xs;
args__$2 = G__26307;
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
var G__26308 = ctx__$2;
var G__26309 = rest_let_bindings;
ctx__$1 = G__26308;
let_bindings__$1 = G__26309;
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
var G__26310 = nexprs;
exprs__$1 = G__26310;
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
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__26311){
var vec__26312 = p__26311;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26312,(3),null);
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
var v = (cljs.core.truth_((function (){var G__26315 = cljs.core.cst$kw$sci$impl_SLASH_var$unbound;
var G__26316 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26315,G__26316) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26315,G__26316));
})())?(function (){var G__26317 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26317,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__26317;
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
var ret__4785__auto___26318 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,ctx,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$file,null,(1),null)),(new cljs.core.List(null,"/home/runner/work/guitar/guitar/resources/public/cljs-out/dev/sci/impl/evaluator.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$line,null,(1),null)),(new cljs.core.List(null,128,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$column,null,(1),null)),(new cljs.core.List(null,10,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_line,null,(1),null)),(new cljs.core.List(null,130,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_column,null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$tag,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$java$util$Map,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__26319){
var vec__26320 = p__26319;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26320,(1),null);
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
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__26323){
var map__26324 = p__26323;
var map__26324__$1 = (((((!((map__26324 == null))))?(((((map__26324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26324):map__26324);
var _parsed_libspec = map__26324__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$as);
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$refer);
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$rename);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$exclude);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$only);
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26324__$1,cljs.core.cst$kw$use);
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__26328 = cljs.core.cst$kw$all;
var G__26329 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26328,G__26329) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26328,G__26329));
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
var vec__26330 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(1),null);
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
var temp__5720__auto___26335 = (function (){var G__26333 = the_loaded_ns;
var G__26333__$1 = (((G__26333 == null))?null:cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__26333));
var G__26333__$2 = (((G__26333__$1 == null))?null:cljs.core.meta(G__26333__$1));
if((G__26333__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_required_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__26333__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___26335)){
var on_loaded_26336 = temp__5720__auto___26335;
var G__26334_26337 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_26336.cljs$core$IFn$_invoke$arity$1 ? on_loaded_26336.cljs$core$IFn$_invoke$arity$1(G__26334_26337) : on_loaded_26336.call(null,G__26334_26337));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__26338 = opts;
var map__26338__$1 = (((((!((map__26338 == null))))?(((((map__26338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26338):map__26338);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26338__$1,cljs.core.cst$kw$reload);
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
var temp__5718__auto____$2 = (function (){var G__26340 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,lib,cljs.core.cst$kw$reload,reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__26340) : load_fn.call(null,G__26340));
})();
if(cljs.core.truth_(temp__5718__auto____$2)){
var map__26341 = temp__5718__auto____$2;
var map__26341__$1 = (((((!((map__26341 == null))))?(((((map__26341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26341):map__26341);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26341__$1,cljs.core.cst$kw$file);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26341__$1,cljs.core.cst$kw$source);
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__26345_26347 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY);
var G__26346_26348 = source;
var fexpr__26344_26349 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__26344_26349.cljs$core$IFn$_invoke$arity$2 ? fexpr__26344_26349.cljs$core$IFn$_invoke$arity$2(G__26345_26347,G__26346_26348) : fexpr__26344_26349.call(null,G__26345_26347,G__26346_26348));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e26343){if((e26343 instanceof Error)){
var e_26350 = e26343;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,cljs.core.cst$kw$namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_26350;
} else {
throw e26343;

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
var len__4736__auto___26355 = arguments.length;
var i__4737__auto___26356 = (0);
while(true){
if((i__4737__auto___26356 < len__4736__auto___26355)){
args__4742__auto__.push((arguments[i__4737__auto___26356]));

var G__26357 = (i__4737__auto___26356 + (1));
i__4737__auto___26356 = G__26357;
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
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq26351){
var G__26352 = cljs.core.first(seq26351);
var seq26351__$1 = cljs.core.next(seq26351);
var G__26353 = cljs.core.first(seq26351__$1);
var seq26351__$2 = cljs.core.next(seq26351__$1);
var G__26354 = cljs.core.first(seq26351__$2);
var seq26351__$3 = cljs.core.next(seq26351__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26352,G__26353,G__26354,seq26351__$3);
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
var supported_26390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$as,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$verbose,null,cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null,cljs.core.cst$kw$refer,null], null), null);
var unsupported_26391 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_26390,flags));
if(unsupported_26391){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_26391)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__26358 = cljs.core.seq(args_STAR___$1);
var chunk__26359 = null;
var count__26360 = (0);
var i__26361 = (0);
while(true){
if((i__26361 < count__26360)){
var arg = chunk__26359.cljs$core$IIndexed$_nth$arity$2(null,i__26361);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26376_26392 = arg;
var seq__26377_26393 = cljs.core.seq(vec__26376_26392);
var first__26378_26394 = cljs.core.first(seq__26377_26393);
var seq__26377_26395__$1 = cljs.core.next(seq__26377_26393);
var prefix_26396 = first__26378_26394;
var args_STAR__26397__$2 = seq__26377_26395__$1;
if((prefix_26396 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26379_26398 = cljs.core.seq(args_STAR__26397__$2);
var chunk__26380_26399 = null;
var count__26381_26400 = (0);
var i__26382_26401 = (0);
while(true){
if((i__26382_26401 < count__26381_26400)){
var arg_26402__$1 = chunk__26380_26399.cljs$core$IIndexed$_nth$arity$2(null,i__26382_26401);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26396,sci.impl.evaluator.prependss(arg_26402__$1,opts));


var G__26403 = seq__26379_26398;
var G__26404 = chunk__26380_26399;
var G__26405 = count__26381_26400;
var G__26406 = (i__26382_26401 + (1));
seq__26379_26398 = G__26403;
chunk__26380_26399 = G__26404;
count__26381_26400 = G__26405;
i__26382_26401 = G__26406;
continue;
} else {
var temp__5720__auto___26407 = cljs.core.seq(seq__26379_26398);
if(temp__5720__auto___26407){
var seq__26379_26408__$1 = temp__5720__auto___26407;
if(cljs.core.chunked_seq_QMARK_(seq__26379_26408__$1)){
var c__4556__auto___26409 = cljs.core.chunk_first(seq__26379_26408__$1);
var G__26410 = cljs.core.chunk_rest(seq__26379_26408__$1);
var G__26411 = c__4556__auto___26409;
var G__26412 = cljs.core.count(c__4556__auto___26409);
var G__26413 = (0);
seq__26379_26398 = G__26410;
chunk__26380_26399 = G__26411;
count__26381_26400 = G__26412;
i__26382_26401 = G__26413;
continue;
} else {
var arg_26414__$1 = cljs.core.first(seq__26379_26408__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26396,sci.impl.evaluator.prependss(arg_26414__$1,opts));


var G__26415 = cljs.core.next(seq__26379_26408__$1);
var G__26416 = null;
var G__26417 = (0);
var G__26418 = (0);
seq__26379_26398 = G__26415;
chunk__26380_26399 = G__26416;
count__26381_26400 = G__26417;
i__26382_26401 = G__26418;
continue;
}
} else {
}
}
break;
}
}


var G__26419 = seq__26358;
var G__26420 = chunk__26359;
var G__26421 = count__26360;
var G__26422 = (i__26361 + (1));
seq__26358 = G__26419;
chunk__26359 = G__26420;
count__26360 = G__26421;
i__26361 = G__26422;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26358);
if(temp__5720__auto__){
var seq__26358__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26358__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26358__$1);
var G__26423 = cljs.core.chunk_rest(seq__26358__$1);
var G__26424 = c__4556__auto__;
var G__26425 = cljs.core.count(c__4556__auto__);
var G__26426 = (0);
seq__26358 = G__26423;
chunk__26359 = G__26424;
count__26360 = G__26425;
i__26361 = G__26426;
continue;
} else {
var arg = cljs.core.first(seq__26358__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26383_26427 = arg;
var seq__26384_26428 = cljs.core.seq(vec__26383_26427);
var first__26385_26429 = cljs.core.first(seq__26384_26428);
var seq__26384_26430__$1 = cljs.core.next(seq__26384_26428);
var prefix_26431 = first__26385_26429;
var args_STAR__26432__$2 = seq__26384_26430__$1;
if((prefix_26431 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26386_26433 = cljs.core.seq(args_STAR__26432__$2);
var chunk__26387_26434 = null;
var count__26388_26435 = (0);
var i__26389_26436 = (0);
while(true){
if((i__26389_26436 < count__26388_26435)){
var arg_26437__$1 = chunk__26387_26434.cljs$core$IIndexed$_nth$arity$2(null,i__26389_26436);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26431,sci.impl.evaluator.prependss(arg_26437__$1,opts));


var G__26438 = seq__26386_26433;
var G__26439 = chunk__26387_26434;
var G__26440 = count__26388_26435;
var G__26441 = (i__26389_26436 + (1));
seq__26386_26433 = G__26438;
chunk__26387_26434 = G__26439;
count__26388_26435 = G__26440;
i__26389_26436 = G__26441;
continue;
} else {
var temp__5720__auto___26442__$1 = cljs.core.seq(seq__26386_26433);
if(temp__5720__auto___26442__$1){
var seq__26386_26443__$1 = temp__5720__auto___26442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26386_26443__$1)){
var c__4556__auto___26444 = cljs.core.chunk_first(seq__26386_26443__$1);
var G__26445 = cljs.core.chunk_rest(seq__26386_26443__$1);
var G__26446 = c__4556__auto___26444;
var G__26447 = cljs.core.count(c__4556__auto___26444);
var G__26448 = (0);
seq__26386_26433 = G__26445;
chunk__26387_26434 = G__26446;
count__26388_26435 = G__26447;
i__26389_26436 = G__26448;
continue;
} else {
var arg_26449__$1 = cljs.core.first(seq__26386_26443__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26431,sci.impl.evaluator.prependss(arg_26449__$1,opts));


var G__26450 = cljs.core.next(seq__26386_26443__$1);
var G__26451 = null;
var G__26452 = (0);
var G__26453 = (0);
seq__26386_26433 = G__26450;
chunk__26387_26434 = G__26451;
count__26388_26435 = G__26452;
i__26389_26436 = G__26453;
continue;
}
} else {
}
}
break;
}
}


var G__26454 = cljs.core.next(seq__26358__$1);
var G__26455 = null;
var G__26456 = (0);
var G__26457 = (0);
seq__26358 = G__26454;
chunk__26359 = G__26455;
count__26360 = G__26456;
i__26361 = G__26457;
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
var len__4736__auto___26460 = arguments.length;
var i__4737__auto___26461 = (0);
while(true){
if((i__4737__auto___26461 < len__4736__auto___26460)){
args__4742__auto__.push((arguments[i__4737__auto___26461]));

var G__26462 = (i__4737__auto___26461 + (1));
i__4737__auto___26461 = G__26462;
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
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq26458){
var G__26459 = cljs.core.first(seq26458);
var seq26458__$1 = cljs.core.next(seq26458);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26459,seq26458__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26465 = arguments.length;
var i__4737__auto___26466 = (0);
while(true){
if((i__4737__auto___26466 < len__4736__auto___26465)){
args__4742__auto__.push((arguments[i__4737__auto___26466]));

var G__26467 = (i__4737__auto___26466 + (1));
i__4737__auto___26466 = G__26467;
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
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq26463){
var G__26464 = cljs.core.first(seq26463);
var seq26463__$1 = cljs.core.next(seq26463);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26464,seq26463__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__26468){
var vec__26469 = p__26468;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26469,(0),null);
var map__26472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26469,(1),null);
var map__26472__$1 = (((((!((map__26472 == null))))?(((((map__26472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26472):map__26472);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$case_DASH_map);
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$case_DASH_val);
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,cljs.core.cst$kw$case_DASH_default);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5718__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26474 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__26477 = ctx;
var G__26478 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26477,G__26478) : sci.impl.evaluator.eval.call(null,G__26477,G__26478));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__26479 = cljs.core.cst$kw$sci$impl_SLASH_try.cljs$core$IFn$_invoke$arity$1(expr);
var map__26479__$1 = (((((!((map__26479 == null))))?(((((map__26479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26479):map__26479);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26479__$1,cljs.core.cst$kw$body);
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26479__$1,cljs.core.cst$kw$catches);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26479__$1,cljs.core.cst$kw$finally);
try{var _STAR_in_try_STAR__orig_val__26487 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__26488 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__26488);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__26487);
}}catch (e26481){if((e26481 instanceof Error)){
var e = e26481;
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl$evaluator_SLASH_try_DASH_result,(function (){var G__26482 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__26483 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26482,G__26483) : sci.impl.evaluator.eval.call(null,G__26482,G__26483));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26484 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e26481;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__26489){
var vec__26490 = p__26489;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26490,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26490,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26493_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26493_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26493_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__26495){
var vec__26496 = p__26495;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26496,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26496,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26496,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26494_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26494_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26494_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__26501,p__26502){
var map__26503 = p__26501;
var map__26503__$1 = (((((!((map__26503 == null))))?(((((map__26503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26503):map__26503);
var ctx = map__26503__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26503__$1,cljs.core.cst$kw$class_DASH__GT_opts);
var vec__26504 = p__26502;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(3),null);
var _expr = vec__26504;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26500_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26500_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26500_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__26508){
var vec__26509 = p__26508;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26509,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26509,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26519 = arguments.length;
var i__4737__auto___26520 = (0);
while(true){
if((i__4737__auto___26520 < len__4736__auto___26519)){
args__4742__auto__.push((arguments[i__4737__auto___26520]));

var G__26521 = (i__4737__auto___26520 + (1));
i__4737__auto___26520 = G__26521;
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
var vec__26515 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26515,(1),null);
var G__26518_26522 = k;
var G__26518_26523__$1 = (((G__26518_26522 instanceof cljs.core.Keyword))?G__26518_26522.fqn:null);
switch (G__26518_26523__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26518_26522,G__26518_26523__$1,vec__26515,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$refer,ns_sym__$1,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__26518_26522,G__26518_26523__$1,vec__26515,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26518_26522,G__26518_26523__$1,vec__26515,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__26518_26522,G__26518_26523__$1,vec__26515,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26518_26523__$1)].join('')));

}

var G__26525 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__26525;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq26512){
var G__26513 = cljs.core.first(seq26512);
var seq26512__$1 = cljs.core.next(seq26512);
var G__26514 = cljs.core.first(seq26512__$1);
var seq26512__$2 = cljs.core.next(seq26512__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26513,G__26514,seq26512__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__26527 = arguments.length;
switch (G__26527) {
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
return cljs.core.second((function (){var fexpr__26528 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26528.cljs$core$IFn$_invoke$arity$3 ? fexpr__26528.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26528.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__26529 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26529.cljs$core$IFn$_invoke$arity$3 ? fexpr__26529.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26529.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26537 = arguments.length;
var i__4737__auto___26538 = (0);
while(true){
if((i__4737__auto___26538 < len__4736__auto___26537)){
args__4742__auto__.push((arguments[i__4737__auto___26538]));

var G__26539 = (i__4737__auto___26538 + (1));
i__4737__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26531_SHARP_){
if(((cljs.core.seq_QMARK_(p1__26531_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__26531_SHARP_))))){
return cljs.core.second(p1__26531_SHARP_);
} else {
return p1__26531_SHARP_;
}
}),import_symbols_or_lists);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__26534 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(1),null);
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
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq26532){
var G__26533 = cljs.core.first(seq26532);
var seq26532__$1 = cljs.core.next(seq26532);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26533,seq26532__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__26540){
var vec__26541 = p__26540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$obj,obj__$1,cljs.core.cst$kw$v,v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__26547 = exprs;
var vec__26548 = G__26547;
var seq__26549 = cljs.core.seq(vec__26548);
var first__26550 = cljs.core.first(seq__26549);
var seq__26549__$1 = cljs.core.next(seq__26549);
var expr = first__26550;
var exprs__$1 = seq__26549__$1;
var G__26547__$1 = G__26547;
while(true){
var vec__26551 = G__26547__$1;
var seq__26552 = cljs.core.seq(vec__26551);
var first__26553 = cljs.core.first(seq__26552);
var seq__26552__$1 = cljs.core.next(seq__26552);
var expr__$1 = first__26553;
var exprs__$2 = seq__26552__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5718__auto__ = cljs.core.seq(exprs__$2);
if(temp__5718__auto__){
var exprs__$3 = temp__5718__auto__;
var G__26554 = exprs__$3;
G__26547__$1 = G__26554;
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
var G__26749 = cljs.core.count(args);
switch (G__26749) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg26559 = (function (){var G__26750 = ctx;
var G__26751 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26750,G__26751) : sci.impl.evaluator.eval.call(null,G__26750,G__26751));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg26559) : f.call(null,arg26559));

break;
case (2):
var arg26560 = (function (){var G__26752 = ctx;
var G__26753 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26752,G__26753) : sci.impl.evaluator.eval.call(null,G__26752,G__26753));
})();
var args__$1 = cljs.core.rest(args);
var arg26561 = (function (){var G__26754 = ctx;
var G__26755 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26754,G__26755) : sci.impl.evaluator.eval.call(null,G__26754,G__26755));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg26560,arg26561) : f.call(null,arg26560,arg26561));

break;
case (3):
var arg26562 = (function (){var G__26756 = ctx;
var G__26757 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26756,G__26757) : sci.impl.evaluator.eval.call(null,G__26756,G__26757));
})();
var args__$1 = cljs.core.rest(args);
var arg26563 = (function (){var G__26758 = ctx;
var G__26759 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26758,G__26759) : sci.impl.evaluator.eval.call(null,G__26758,G__26759));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26564 = (function (){var G__26760 = ctx;
var G__26761 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26760,G__26761) : sci.impl.evaluator.eval.call(null,G__26760,G__26761));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg26562,arg26563,arg26564) : f.call(null,arg26562,arg26563,arg26564));

break;
case (4):
var arg26565 = (function (){var G__26762 = ctx;
var G__26763 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26762,G__26763) : sci.impl.evaluator.eval.call(null,G__26762,G__26763));
})();
var args__$1 = cljs.core.rest(args);
var arg26566 = (function (){var G__26764 = ctx;
var G__26765 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26764,G__26765) : sci.impl.evaluator.eval.call(null,G__26764,G__26765));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26567 = (function (){var G__26766 = ctx;
var G__26767 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26766,G__26767) : sci.impl.evaluator.eval.call(null,G__26766,G__26767));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26568 = (function (){var G__26768 = ctx;
var G__26769 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26768,G__26769) : sci.impl.evaluator.eval.call(null,G__26768,G__26769));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg26565,arg26566,arg26567,arg26568) : f.call(null,arg26565,arg26566,arg26567,arg26568));

break;
case (5):
var arg26569 = (function (){var G__26770 = ctx;
var G__26771 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26770,G__26771) : sci.impl.evaluator.eval.call(null,G__26770,G__26771));
})();
var args__$1 = cljs.core.rest(args);
var arg26570 = (function (){var G__26772 = ctx;
var G__26773 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26772,G__26773) : sci.impl.evaluator.eval.call(null,G__26772,G__26773));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26571 = (function (){var G__26774 = ctx;
var G__26775 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26774,G__26775) : sci.impl.evaluator.eval.call(null,G__26774,G__26775));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26572 = (function (){var G__26776 = ctx;
var G__26777 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26776,G__26777) : sci.impl.evaluator.eval.call(null,G__26776,G__26777));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26573 = (function (){var G__26778 = ctx;
var G__26779 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26778,G__26779) : sci.impl.evaluator.eval.call(null,G__26778,G__26779));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg26569,arg26570,arg26571,arg26572,arg26573) : f.call(null,arg26569,arg26570,arg26571,arg26572,arg26573));

break;
case (6):
var arg26574 = (function (){var G__26780 = ctx;
var G__26781 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26780,G__26781) : sci.impl.evaluator.eval.call(null,G__26780,G__26781));
})();
var args__$1 = cljs.core.rest(args);
var arg26575 = (function (){var G__26782 = ctx;
var G__26783 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26782,G__26783) : sci.impl.evaluator.eval.call(null,G__26782,G__26783));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26576 = (function (){var G__26784 = ctx;
var G__26785 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26784,G__26785) : sci.impl.evaluator.eval.call(null,G__26784,G__26785));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26577 = (function (){var G__26786 = ctx;
var G__26787 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26786,G__26787) : sci.impl.evaluator.eval.call(null,G__26786,G__26787));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26578 = (function (){var G__26788 = ctx;
var G__26789 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26788,G__26789) : sci.impl.evaluator.eval.call(null,G__26788,G__26789));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26579 = (function (){var G__26790 = ctx;
var G__26791 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26790,G__26791) : sci.impl.evaluator.eval.call(null,G__26790,G__26791));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg26574,arg26575,arg26576,arg26577,arg26578,arg26579) : f.call(null,arg26574,arg26575,arg26576,arg26577,arg26578,arg26579));

break;
case (7):
var arg26580 = (function (){var G__26792 = ctx;
var G__26793 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26792,G__26793) : sci.impl.evaluator.eval.call(null,G__26792,G__26793));
})();
var args__$1 = cljs.core.rest(args);
var arg26581 = (function (){var G__26794 = ctx;
var G__26795 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26794,G__26795) : sci.impl.evaluator.eval.call(null,G__26794,G__26795));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26582 = (function (){var G__26796 = ctx;
var G__26797 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26796,G__26797) : sci.impl.evaluator.eval.call(null,G__26796,G__26797));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26583 = (function (){var G__26798 = ctx;
var G__26799 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26798,G__26799) : sci.impl.evaluator.eval.call(null,G__26798,G__26799));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26584 = (function (){var G__26800 = ctx;
var G__26801 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26800,G__26801) : sci.impl.evaluator.eval.call(null,G__26800,G__26801));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26585 = (function (){var G__26802 = ctx;
var G__26803 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26802,G__26803) : sci.impl.evaluator.eval.call(null,G__26802,G__26803));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26586 = (function (){var G__26804 = ctx;
var G__26805 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26804,G__26805) : sci.impl.evaluator.eval.call(null,G__26804,G__26805));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg26580,arg26581,arg26582,arg26583,arg26584,arg26585,arg26586) : f.call(null,arg26580,arg26581,arg26582,arg26583,arg26584,arg26585,arg26586));

break;
case (8):
var arg26587 = (function (){var G__26806 = ctx;
var G__26807 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26806,G__26807) : sci.impl.evaluator.eval.call(null,G__26806,G__26807));
})();
var args__$1 = cljs.core.rest(args);
var arg26588 = (function (){var G__26808 = ctx;
var G__26809 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26808,G__26809) : sci.impl.evaluator.eval.call(null,G__26808,G__26809));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26589 = (function (){var G__26810 = ctx;
var G__26811 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26810,G__26811) : sci.impl.evaluator.eval.call(null,G__26810,G__26811));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26590 = (function (){var G__26812 = ctx;
var G__26813 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26812,G__26813) : sci.impl.evaluator.eval.call(null,G__26812,G__26813));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26591 = (function (){var G__26814 = ctx;
var G__26815 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26814,G__26815) : sci.impl.evaluator.eval.call(null,G__26814,G__26815));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26592 = (function (){var G__26816 = ctx;
var G__26817 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26816,G__26817) : sci.impl.evaluator.eval.call(null,G__26816,G__26817));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26593 = (function (){var G__26818 = ctx;
var G__26819 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26818,G__26819) : sci.impl.evaluator.eval.call(null,G__26818,G__26819));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26594 = (function (){var G__26820 = ctx;
var G__26821 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26820,G__26821) : sci.impl.evaluator.eval.call(null,G__26820,G__26821));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg26587,arg26588,arg26589,arg26590,arg26591,arg26592,arg26593,arg26594) : f.call(null,arg26587,arg26588,arg26589,arg26590,arg26591,arg26592,arg26593,arg26594));

break;
case (9):
var arg26595 = (function (){var G__26822 = ctx;
var G__26823 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26822,G__26823) : sci.impl.evaluator.eval.call(null,G__26822,G__26823));
})();
var args__$1 = cljs.core.rest(args);
var arg26596 = (function (){var G__26824 = ctx;
var G__26825 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26824,G__26825) : sci.impl.evaluator.eval.call(null,G__26824,G__26825));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26597 = (function (){var G__26826 = ctx;
var G__26827 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26826,G__26827) : sci.impl.evaluator.eval.call(null,G__26826,G__26827));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26598 = (function (){var G__26828 = ctx;
var G__26829 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26828,G__26829) : sci.impl.evaluator.eval.call(null,G__26828,G__26829));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26599 = (function (){var G__26830 = ctx;
var G__26831 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26830,G__26831) : sci.impl.evaluator.eval.call(null,G__26830,G__26831));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26600 = (function (){var G__26832 = ctx;
var G__26833 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26832,G__26833) : sci.impl.evaluator.eval.call(null,G__26832,G__26833));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26601 = (function (){var G__26834 = ctx;
var G__26835 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26834,G__26835) : sci.impl.evaluator.eval.call(null,G__26834,G__26835));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26602 = (function (){var G__26836 = ctx;
var G__26837 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26836,G__26837) : sci.impl.evaluator.eval.call(null,G__26836,G__26837));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26603 = (function (){var G__26838 = ctx;
var G__26839 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26838,G__26839) : sci.impl.evaluator.eval.call(null,G__26838,G__26839));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg26595,arg26596,arg26597,arg26598,arg26599,arg26600,arg26601,arg26602,arg26603) : f.call(null,arg26595,arg26596,arg26597,arg26598,arg26599,arg26600,arg26601,arg26602,arg26603));

break;
case (10):
var arg26604 = (function (){var G__26840 = ctx;
var G__26841 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26840,G__26841) : sci.impl.evaluator.eval.call(null,G__26840,G__26841));
})();
var args__$1 = cljs.core.rest(args);
var arg26605 = (function (){var G__26842 = ctx;
var G__26843 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26842,G__26843) : sci.impl.evaluator.eval.call(null,G__26842,G__26843));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26606 = (function (){var G__26844 = ctx;
var G__26845 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26844,G__26845) : sci.impl.evaluator.eval.call(null,G__26844,G__26845));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26607 = (function (){var G__26846 = ctx;
var G__26847 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26846,G__26847) : sci.impl.evaluator.eval.call(null,G__26846,G__26847));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26608 = (function (){var G__26848 = ctx;
var G__26849 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26848,G__26849) : sci.impl.evaluator.eval.call(null,G__26848,G__26849));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26609 = (function (){var G__26850 = ctx;
var G__26851 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26850,G__26851) : sci.impl.evaluator.eval.call(null,G__26850,G__26851));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26610 = (function (){var G__26852 = ctx;
var G__26853 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26852,G__26853) : sci.impl.evaluator.eval.call(null,G__26852,G__26853));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26611 = (function (){var G__26854 = ctx;
var G__26855 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26854,G__26855) : sci.impl.evaluator.eval.call(null,G__26854,G__26855));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26612 = (function (){var G__26856 = ctx;
var G__26857 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26856,G__26857) : sci.impl.evaluator.eval.call(null,G__26856,G__26857));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26613 = (function (){var G__26858 = ctx;
var G__26859 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26858,G__26859) : sci.impl.evaluator.eval.call(null,G__26858,G__26859));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg26604,arg26605,arg26606,arg26607,arg26608,arg26609,arg26610,arg26611,arg26612,arg26613) : f.call(null,arg26604,arg26605,arg26606,arg26607,arg26608,arg26609,arg26610,arg26611,arg26612,arg26613));

break;
case (11):
var arg26614 = (function (){var G__26860 = ctx;
var G__26861 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26860,G__26861) : sci.impl.evaluator.eval.call(null,G__26860,G__26861));
})();
var args__$1 = cljs.core.rest(args);
var arg26615 = (function (){var G__26862 = ctx;
var G__26863 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26862,G__26863) : sci.impl.evaluator.eval.call(null,G__26862,G__26863));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26616 = (function (){var G__26864 = ctx;
var G__26865 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26864,G__26865) : sci.impl.evaluator.eval.call(null,G__26864,G__26865));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26617 = (function (){var G__26866 = ctx;
var G__26867 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26866,G__26867) : sci.impl.evaluator.eval.call(null,G__26866,G__26867));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26618 = (function (){var G__26868 = ctx;
var G__26869 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26868,G__26869) : sci.impl.evaluator.eval.call(null,G__26868,G__26869));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26619 = (function (){var G__26870 = ctx;
var G__26871 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26870,G__26871) : sci.impl.evaluator.eval.call(null,G__26870,G__26871));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26620 = (function (){var G__26872 = ctx;
var G__26873 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26872,G__26873) : sci.impl.evaluator.eval.call(null,G__26872,G__26873));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26621 = (function (){var G__26874 = ctx;
var G__26875 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26874,G__26875) : sci.impl.evaluator.eval.call(null,G__26874,G__26875));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26622 = (function (){var G__26876 = ctx;
var G__26877 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26876,G__26877) : sci.impl.evaluator.eval.call(null,G__26876,G__26877));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26623 = (function (){var G__26878 = ctx;
var G__26879 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26878,G__26879) : sci.impl.evaluator.eval.call(null,G__26878,G__26879));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26624 = (function (){var G__26880 = ctx;
var G__26881 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26880,G__26881) : sci.impl.evaluator.eval.call(null,G__26880,G__26881));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg26614,arg26615,arg26616,arg26617,arg26618,arg26619,arg26620,arg26621,arg26622,arg26623,arg26624) : f.call(null,arg26614,arg26615,arg26616,arg26617,arg26618,arg26619,arg26620,arg26621,arg26622,arg26623,arg26624));

break;
case (12):
var arg26625 = (function (){var G__26882 = ctx;
var G__26883 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26882,G__26883) : sci.impl.evaluator.eval.call(null,G__26882,G__26883));
})();
var args__$1 = cljs.core.rest(args);
var arg26626 = (function (){var G__26884 = ctx;
var G__26885 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26884,G__26885) : sci.impl.evaluator.eval.call(null,G__26884,G__26885));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26627 = (function (){var G__26886 = ctx;
var G__26887 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26886,G__26887) : sci.impl.evaluator.eval.call(null,G__26886,G__26887));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26628 = (function (){var G__26888 = ctx;
var G__26889 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26888,G__26889) : sci.impl.evaluator.eval.call(null,G__26888,G__26889));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26629 = (function (){var G__26890 = ctx;
var G__26891 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26890,G__26891) : sci.impl.evaluator.eval.call(null,G__26890,G__26891));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26630 = (function (){var G__26892 = ctx;
var G__26893 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26892,G__26893) : sci.impl.evaluator.eval.call(null,G__26892,G__26893));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26631 = (function (){var G__26894 = ctx;
var G__26895 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26894,G__26895) : sci.impl.evaluator.eval.call(null,G__26894,G__26895));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26632 = (function (){var G__26896 = ctx;
var G__26897 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26896,G__26897) : sci.impl.evaluator.eval.call(null,G__26896,G__26897));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26633 = (function (){var G__26898 = ctx;
var G__26899 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26898,G__26899) : sci.impl.evaluator.eval.call(null,G__26898,G__26899));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26634 = (function (){var G__26900 = ctx;
var G__26901 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26900,G__26901) : sci.impl.evaluator.eval.call(null,G__26900,G__26901));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26635 = (function (){var G__26902 = ctx;
var G__26903 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26902,G__26903) : sci.impl.evaluator.eval.call(null,G__26902,G__26903));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26636 = (function (){var G__26904 = ctx;
var G__26905 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26904,G__26905) : sci.impl.evaluator.eval.call(null,G__26904,G__26905));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg26625,arg26626,arg26627,arg26628,arg26629,arg26630,arg26631,arg26632,arg26633,arg26634,arg26635,arg26636) : f.call(null,arg26625,arg26626,arg26627,arg26628,arg26629,arg26630,arg26631,arg26632,arg26633,arg26634,arg26635,arg26636));

break;
case (13):
var arg26637 = (function (){var G__26906 = ctx;
var G__26907 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26906,G__26907) : sci.impl.evaluator.eval.call(null,G__26906,G__26907));
})();
var args__$1 = cljs.core.rest(args);
var arg26638 = (function (){var G__26908 = ctx;
var G__26909 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26908,G__26909) : sci.impl.evaluator.eval.call(null,G__26908,G__26909));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26639 = (function (){var G__26910 = ctx;
var G__26911 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26910,G__26911) : sci.impl.evaluator.eval.call(null,G__26910,G__26911));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26640 = (function (){var G__26912 = ctx;
var G__26913 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26912,G__26913) : sci.impl.evaluator.eval.call(null,G__26912,G__26913));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26641 = (function (){var G__26914 = ctx;
var G__26915 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26914,G__26915) : sci.impl.evaluator.eval.call(null,G__26914,G__26915));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26642 = (function (){var G__26916 = ctx;
var G__26917 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26916,G__26917) : sci.impl.evaluator.eval.call(null,G__26916,G__26917));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26643 = (function (){var G__26918 = ctx;
var G__26919 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26918,G__26919) : sci.impl.evaluator.eval.call(null,G__26918,G__26919));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26644 = (function (){var G__26920 = ctx;
var G__26921 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26920,G__26921) : sci.impl.evaluator.eval.call(null,G__26920,G__26921));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26645 = (function (){var G__26922 = ctx;
var G__26923 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26922,G__26923) : sci.impl.evaluator.eval.call(null,G__26922,G__26923));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26646 = (function (){var G__26924 = ctx;
var G__26925 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26924,G__26925) : sci.impl.evaluator.eval.call(null,G__26924,G__26925));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26647 = (function (){var G__26926 = ctx;
var G__26927 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26926,G__26927) : sci.impl.evaluator.eval.call(null,G__26926,G__26927));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26648 = (function (){var G__26928 = ctx;
var G__26929 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26928,G__26929) : sci.impl.evaluator.eval.call(null,G__26928,G__26929));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26649 = (function (){var G__26930 = ctx;
var G__26931 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26930,G__26931) : sci.impl.evaluator.eval.call(null,G__26930,G__26931));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg26637,arg26638,arg26639,arg26640,arg26641,arg26642,arg26643,arg26644,arg26645,arg26646,arg26647,arg26648,arg26649) : f.call(null,arg26637,arg26638,arg26639,arg26640,arg26641,arg26642,arg26643,arg26644,arg26645,arg26646,arg26647,arg26648,arg26649));

break;
case (14):
var arg26650 = (function (){var G__26932 = ctx;
var G__26933 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26932,G__26933) : sci.impl.evaluator.eval.call(null,G__26932,G__26933));
})();
var args__$1 = cljs.core.rest(args);
var arg26651 = (function (){var G__26934 = ctx;
var G__26935 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26934,G__26935) : sci.impl.evaluator.eval.call(null,G__26934,G__26935));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26652 = (function (){var G__26936 = ctx;
var G__26937 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26936,G__26937) : sci.impl.evaluator.eval.call(null,G__26936,G__26937));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26653 = (function (){var G__26938 = ctx;
var G__26939 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26938,G__26939) : sci.impl.evaluator.eval.call(null,G__26938,G__26939));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26654 = (function (){var G__26940 = ctx;
var G__26941 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26940,G__26941) : sci.impl.evaluator.eval.call(null,G__26940,G__26941));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26655 = (function (){var G__26942 = ctx;
var G__26943 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26942,G__26943) : sci.impl.evaluator.eval.call(null,G__26942,G__26943));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26656 = (function (){var G__26944 = ctx;
var G__26945 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26944,G__26945) : sci.impl.evaluator.eval.call(null,G__26944,G__26945));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26657 = (function (){var G__26946 = ctx;
var G__26947 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26946,G__26947) : sci.impl.evaluator.eval.call(null,G__26946,G__26947));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26658 = (function (){var G__26948 = ctx;
var G__26949 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26948,G__26949) : sci.impl.evaluator.eval.call(null,G__26948,G__26949));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26659 = (function (){var G__26950 = ctx;
var G__26951 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26950,G__26951) : sci.impl.evaluator.eval.call(null,G__26950,G__26951));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26660 = (function (){var G__26952 = ctx;
var G__26953 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26952,G__26953) : sci.impl.evaluator.eval.call(null,G__26952,G__26953));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26661 = (function (){var G__26954 = ctx;
var G__26955 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26954,G__26955) : sci.impl.evaluator.eval.call(null,G__26954,G__26955));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26662 = (function (){var G__26956 = ctx;
var G__26957 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26956,G__26957) : sci.impl.evaluator.eval.call(null,G__26956,G__26957));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26663 = (function (){var G__26958 = ctx;
var G__26959 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26958,G__26959) : sci.impl.evaluator.eval.call(null,G__26958,G__26959));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg26650,arg26651,arg26652,arg26653,arg26654,arg26655,arg26656,arg26657,arg26658,arg26659,arg26660,arg26661,arg26662,arg26663) : f.call(null,arg26650,arg26651,arg26652,arg26653,arg26654,arg26655,arg26656,arg26657,arg26658,arg26659,arg26660,arg26661,arg26662,arg26663));

break;
case (15):
var arg26664 = (function (){var G__26960 = ctx;
var G__26961 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26960,G__26961) : sci.impl.evaluator.eval.call(null,G__26960,G__26961));
})();
var args__$1 = cljs.core.rest(args);
var arg26665 = (function (){var G__26962 = ctx;
var G__26963 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26962,G__26963) : sci.impl.evaluator.eval.call(null,G__26962,G__26963));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26666 = (function (){var G__26964 = ctx;
var G__26965 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26964,G__26965) : sci.impl.evaluator.eval.call(null,G__26964,G__26965));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26667 = (function (){var G__26966 = ctx;
var G__26967 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26966,G__26967) : sci.impl.evaluator.eval.call(null,G__26966,G__26967));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26668 = (function (){var G__26968 = ctx;
var G__26969 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26968,G__26969) : sci.impl.evaluator.eval.call(null,G__26968,G__26969));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26669 = (function (){var G__26970 = ctx;
var G__26971 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26970,G__26971) : sci.impl.evaluator.eval.call(null,G__26970,G__26971));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26670 = (function (){var G__26972 = ctx;
var G__26973 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26972,G__26973) : sci.impl.evaluator.eval.call(null,G__26972,G__26973));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26671 = (function (){var G__26974 = ctx;
var G__26975 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26974,G__26975) : sci.impl.evaluator.eval.call(null,G__26974,G__26975));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26672 = (function (){var G__26976 = ctx;
var G__26977 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26976,G__26977) : sci.impl.evaluator.eval.call(null,G__26976,G__26977));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26673 = (function (){var G__26978 = ctx;
var G__26979 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26978,G__26979) : sci.impl.evaluator.eval.call(null,G__26978,G__26979));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26674 = (function (){var G__26980 = ctx;
var G__26981 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26980,G__26981) : sci.impl.evaluator.eval.call(null,G__26980,G__26981));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26675 = (function (){var G__26982 = ctx;
var G__26983 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26982,G__26983) : sci.impl.evaluator.eval.call(null,G__26982,G__26983));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26676 = (function (){var G__26984 = ctx;
var G__26985 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26984,G__26985) : sci.impl.evaluator.eval.call(null,G__26984,G__26985));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26677 = (function (){var G__26986 = ctx;
var G__26987 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26986,G__26987) : sci.impl.evaluator.eval.call(null,G__26986,G__26987));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26678 = (function (){var G__26988 = ctx;
var G__26989 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26988,G__26989) : sci.impl.evaluator.eval.call(null,G__26988,G__26989));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg26664,arg26665,arg26666,arg26667,arg26668,arg26669,arg26670,arg26671,arg26672,arg26673,arg26674,arg26675,arg26676,arg26677,arg26678) : f.call(null,arg26664,arg26665,arg26666,arg26667,arg26668,arg26669,arg26670,arg26671,arg26672,arg26673,arg26674,arg26675,arg26676,arg26677,arg26678));

break;
case (16):
var arg26679 = (function (){var G__26990 = ctx;
var G__26991 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26990,G__26991) : sci.impl.evaluator.eval.call(null,G__26990,G__26991));
})();
var args__$1 = cljs.core.rest(args);
var arg26680 = (function (){var G__26992 = ctx;
var G__26993 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26992,G__26993) : sci.impl.evaluator.eval.call(null,G__26992,G__26993));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26681 = (function (){var G__26994 = ctx;
var G__26995 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26994,G__26995) : sci.impl.evaluator.eval.call(null,G__26994,G__26995));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26682 = (function (){var G__26996 = ctx;
var G__26997 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26996,G__26997) : sci.impl.evaluator.eval.call(null,G__26996,G__26997));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26683 = (function (){var G__26998 = ctx;
var G__26999 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26998,G__26999) : sci.impl.evaluator.eval.call(null,G__26998,G__26999));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26684 = (function (){var G__27000 = ctx;
var G__27001 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27000,G__27001) : sci.impl.evaluator.eval.call(null,G__27000,G__27001));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26685 = (function (){var G__27002 = ctx;
var G__27003 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27002,G__27003) : sci.impl.evaluator.eval.call(null,G__27002,G__27003));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26686 = (function (){var G__27004 = ctx;
var G__27005 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27004,G__27005) : sci.impl.evaluator.eval.call(null,G__27004,G__27005));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26687 = (function (){var G__27006 = ctx;
var G__27007 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27006,G__27007) : sci.impl.evaluator.eval.call(null,G__27006,G__27007));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26688 = (function (){var G__27008 = ctx;
var G__27009 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27008,G__27009) : sci.impl.evaluator.eval.call(null,G__27008,G__27009));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26689 = (function (){var G__27010 = ctx;
var G__27011 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27010,G__27011) : sci.impl.evaluator.eval.call(null,G__27010,G__27011));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26690 = (function (){var G__27012 = ctx;
var G__27013 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27012,G__27013) : sci.impl.evaluator.eval.call(null,G__27012,G__27013));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26691 = (function (){var G__27014 = ctx;
var G__27015 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27014,G__27015) : sci.impl.evaluator.eval.call(null,G__27014,G__27015));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26692 = (function (){var G__27016 = ctx;
var G__27017 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27016,G__27017) : sci.impl.evaluator.eval.call(null,G__27016,G__27017));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26693 = (function (){var G__27018 = ctx;
var G__27019 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27018,G__27019) : sci.impl.evaluator.eval.call(null,G__27018,G__27019));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26694 = (function (){var G__27020 = ctx;
var G__27021 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27020,G__27021) : sci.impl.evaluator.eval.call(null,G__27020,G__27021));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg26679,arg26680,arg26681,arg26682,arg26683,arg26684,arg26685,arg26686,arg26687,arg26688,arg26689,arg26690,arg26691,arg26692,arg26693,arg26694) : f.call(null,arg26679,arg26680,arg26681,arg26682,arg26683,arg26684,arg26685,arg26686,arg26687,arg26688,arg26689,arg26690,arg26691,arg26692,arg26693,arg26694));

break;
case (17):
var arg26695 = (function (){var G__27022 = ctx;
var G__27023 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27022,G__27023) : sci.impl.evaluator.eval.call(null,G__27022,G__27023));
})();
var args__$1 = cljs.core.rest(args);
var arg26696 = (function (){var G__27024 = ctx;
var G__27025 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27024,G__27025) : sci.impl.evaluator.eval.call(null,G__27024,G__27025));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26697 = (function (){var G__27026 = ctx;
var G__27027 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27026,G__27027) : sci.impl.evaluator.eval.call(null,G__27026,G__27027));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26698 = (function (){var G__27028 = ctx;
var G__27029 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27028,G__27029) : sci.impl.evaluator.eval.call(null,G__27028,G__27029));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26699 = (function (){var G__27030 = ctx;
var G__27031 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27030,G__27031) : sci.impl.evaluator.eval.call(null,G__27030,G__27031));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26700 = (function (){var G__27032 = ctx;
var G__27033 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27032,G__27033) : sci.impl.evaluator.eval.call(null,G__27032,G__27033));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26701 = (function (){var G__27034 = ctx;
var G__27035 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27034,G__27035) : sci.impl.evaluator.eval.call(null,G__27034,G__27035));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26702 = (function (){var G__27036 = ctx;
var G__27037 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27036,G__27037) : sci.impl.evaluator.eval.call(null,G__27036,G__27037));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26703 = (function (){var G__27038 = ctx;
var G__27039 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27038,G__27039) : sci.impl.evaluator.eval.call(null,G__27038,G__27039));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26704 = (function (){var G__27040 = ctx;
var G__27041 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27040,G__27041) : sci.impl.evaluator.eval.call(null,G__27040,G__27041));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26705 = (function (){var G__27042 = ctx;
var G__27043 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27042,G__27043) : sci.impl.evaluator.eval.call(null,G__27042,G__27043));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26706 = (function (){var G__27044 = ctx;
var G__27045 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27044,G__27045) : sci.impl.evaluator.eval.call(null,G__27044,G__27045));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26707 = (function (){var G__27046 = ctx;
var G__27047 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27046,G__27047) : sci.impl.evaluator.eval.call(null,G__27046,G__27047));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26708 = (function (){var G__27048 = ctx;
var G__27049 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27048,G__27049) : sci.impl.evaluator.eval.call(null,G__27048,G__27049));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26709 = (function (){var G__27050 = ctx;
var G__27051 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27050,G__27051) : sci.impl.evaluator.eval.call(null,G__27050,G__27051));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26710 = (function (){var G__27052 = ctx;
var G__27053 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27052,G__27053) : sci.impl.evaluator.eval.call(null,G__27052,G__27053));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26711 = (function (){var G__27054 = ctx;
var G__27055 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27054,G__27055) : sci.impl.evaluator.eval.call(null,G__27054,G__27055));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg26695,arg26696,arg26697,arg26698,arg26699,arg26700,arg26701,arg26702,arg26703,arg26704,arg26705,arg26706,arg26707,arg26708,arg26709,arg26710,arg26711) : f.call(null,arg26695,arg26696,arg26697,arg26698,arg26699,arg26700,arg26701,arg26702,arg26703,arg26704,arg26705,arg26706,arg26707,arg26708,arg26709,arg26710,arg26711));

break;
case (18):
var arg26712 = (function (){var G__27056 = ctx;
var G__27057 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27056,G__27057) : sci.impl.evaluator.eval.call(null,G__27056,G__27057));
})();
var args__$1 = cljs.core.rest(args);
var arg26713 = (function (){var G__27058 = ctx;
var G__27059 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27058,G__27059) : sci.impl.evaluator.eval.call(null,G__27058,G__27059));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26714 = (function (){var G__27060 = ctx;
var G__27061 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27060,G__27061) : sci.impl.evaluator.eval.call(null,G__27060,G__27061));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26715 = (function (){var G__27062 = ctx;
var G__27063 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27062,G__27063) : sci.impl.evaluator.eval.call(null,G__27062,G__27063));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26716 = (function (){var G__27064 = ctx;
var G__27065 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27064,G__27065) : sci.impl.evaluator.eval.call(null,G__27064,G__27065));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26717 = (function (){var G__27066 = ctx;
var G__27067 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27066,G__27067) : sci.impl.evaluator.eval.call(null,G__27066,G__27067));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26718 = (function (){var G__27068 = ctx;
var G__27069 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27068,G__27069) : sci.impl.evaluator.eval.call(null,G__27068,G__27069));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26719 = (function (){var G__27070 = ctx;
var G__27071 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27070,G__27071) : sci.impl.evaluator.eval.call(null,G__27070,G__27071));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26720 = (function (){var G__27072 = ctx;
var G__27073 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27072,G__27073) : sci.impl.evaluator.eval.call(null,G__27072,G__27073));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26721 = (function (){var G__27074 = ctx;
var G__27075 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27074,G__27075) : sci.impl.evaluator.eval.call(null,G__27074,G__27075));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26722 = (function (){var G__27076 = ctx;
var G__27077 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27076,G__27077) : sci.impl.evaluator.eval.call(null,G__27076,G__27077));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26723 = (function (){var G__27078 = ctx;
var G__27079 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27078,G__27079) : sci.impl.evaluator.eval.call(null,G__27078,G__27079));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26724 = (function (){var G__27080 = ctx;
var G__27081 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27080,G__27081) : sci.impl.evaluator.eval.call(null,G__27080,G__27081));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26725 = (function (){var G__27082 = ctx;
var G__27083 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27082,G__27083) : sci.impl.evaluator.eval.call(null,G__27082,G__27083));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26726 = (function (){var G__27084 = ctx;
var G__27085 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27084,G__27085) : sci.impl.evaluator.eval.call(null,G__27084,G__27085));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26727 = (function (){var G__27086 = ctx;
var G__27087 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27086,G__27087) : sci.impl.evaluator.eval.call(null,G__27086,G__27087));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26728 = (function (){var G__27088 = ctx;
var G__27089 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27088,G__27089) : sci.impl.evaluator.eval.call(null,G__27088,G__27089));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26729 = (function (){var G__27090 = ctx;
var G__27091 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27090,G__27091) : sci.impl.evaluator.eval.call(null,G__27090,G__27091));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg26712,arg26713,arg26714,arg26715,arg26716,arg26717,arg26718,arg26719,arg26720,arg26721,arg26722,arg26723,arg26724,arg26725,arg26726,arg26727,arg26728,arg26729) : f.call(null,arg26712,arg26713,arg26714,arg26715,arg26716,arg26717,arg26718,arg26719,arg26720,arg26721,arg26722,arg26723,arg26724,arg26725,arg26726,arg26727,arg26728,arg26729));

break;
case (19):
var arg26730 = (function (){var G__27092 = ctx;
var G__27093 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27092,G__27093) : sci.impl.evaluator.eval.call(null,G__27092,G__27093));
})();
var args__$1 = cljs.core.rest(args);
var arg26731 = (function (){var G__27094 = ctx;
var G__27095 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27094,G__27095) : sci.impl.evaluator.eval.call(null,G__27094,G__27095));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26732 = (function (){var G__27096 = ctx;
var G__27097 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27096,G__27097) : sci.impl.evaluator.eval.call(null,G__27096,G__27097));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26733 = (function (){var G__27098 = ctx;
var G__27099 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27098,G__27099) : sci.impl.evaluator.eval.call(null,G__27098,G__27099));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26734 = (function (){var G__27100 = ctx;
var G__27101 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27100,G__27101) : sci.impl.evaluator.eval.call(null,G__27100,G__27101));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26735 = (function (){var G__27102 = ctx;
var G__27103 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27102,G__27103) : sci.impl.evaluator.eval.call(null,G__27102,G__27103));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26736 = (function (){var G__27104 = ctx;
var G__27105 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27104,G__27105) : sci.impl.evaluator.eval.call(null,G__27104,G__27105));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26737 = (function (){var G__27106 = ctx;
var G__27107 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27106,G__27107) : sci.impl.evaluator.eval.call(null,G__27106,G__27107));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26738 = (function (){var G__27108 = ctx;
var G__27109 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27108,G__27109) : sci.impl.evaluator.eval.call(null,G__27108,G__27109));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26739 = (function (){var G__27110 = ctx;
var G__27111 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27110,G__27111) : sci.impl.evaluator.eval.call(null,G__27110,G__27111));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26740 = (function (){var G__27112 = ctx;
var G__27113 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27112,G__27113) : sci.impl.evaluator.eval.call(null,G__27112,G__27113));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26741 = (function (){var G__27114 = ctx;
var G__27115 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27114,G__27115) : sci.impl.evaluator.eval.call(null,G__27114,G__27115));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26742 = (function (){var G__27116 = ctx;
var G__27117 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27116,G__27117) : sci.impl.evaluator.eval.call(null,G__27116,G__27117));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26743 = (function (){var G__27118 = ctx;
var G__27119 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27118,G__27119) : sci.impl.evaluator.eval.call(null,G__27118,G__27119));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26744 = (function (){var G__27120 = ctx;
var G__27121 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27120,G__27121) : sci.impl.evaluator.eval.call(null,G__27120,G__27121));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26745 = (function (){var G__27122 = ctx;
var G__27123 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27122,G__27123) : sci.impl.evaluator.eval.call(null,G__27122,G__27123));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26746 = (function (){var G__27124 = ctx;
var G__27125 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27124,G__27125) : sci.impl.evaluator.eval.call(null,G__27124,G__27125));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26747 = (function (){var G__27126 = ctx;
var G__27127 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27126,G__27127) : sci.impl.evaluator.eval.call(null,G__27126,G__27127));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg26748 = (function (){var G__27128 = ctx;
var G__27129 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27128,G__27129) : sci.impl.evaluator.eval.call(null,G__27128,G__27129));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg26730,arg26731,arg26732,arg26733,arg26734,arg26735,arg26736,arg26737,arg26738,arg26739,arg26740,arg26741,arg26742,arg26743,arg26744,arg26745,arg26746,arg26747,arg26748) : f.call(null,arg26730,arg26731,arg26732,arg26733,arg26734,arg26735,arg26736,arg26737,arg26738,arg26739,arg26740,arg26741,arg26742,arg26743,arg26744,arg26745,arg26746,arg26747,arg26748));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26077_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26077_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26077_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__27131 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27131)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,G__27131)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27131)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27131)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27131)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27131)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27131)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$in_DASH_ns,G__27131)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$use,G__27131)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27131)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,G__27131)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,G__27131)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27131)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$refer,G__27131)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27131)){
return (new cljs.core.LazySeq(null,(function (){var G__27132 = ctx;
var G__27133 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27132,G__27133) : sci.impl.evaluator.eval.call(null,G__27132,G__27133));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$throw,G__27131)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27131)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__27131)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27131)].join('')));

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
if(cljs.core.truth_((function (){var G__27135 = op;
var G__27136 = cljs.core.cst$kw$static_DASH_access;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27135,G__27136) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27135,G__27136));
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
}catch (e27134){if((e27134 instanceof Error)){
var e = e27134;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e27134;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__27142 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,G__27142)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$try,G__27142)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,G__27142)){
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$static_DASH_access,G__27142)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deref_BANG_,G__27142)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resolve_DASH_sym,G__27142)){
return ctx.get(cljs.core.cst$kw$bindings).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$needs_DASH_ctx,G__27142)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$eval,G__27142)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27137_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27137_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27137_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27138_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27138_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27138_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27139_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27139_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27139_SHARP_));
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
}catch (e27140){if((e27140 instanceof Error)){
var e = e27140;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__27141 = e;
var G__27141__$1 = (((G__27141 == null))?null:cljs.core.ex_data(G__27141));
if((G__27141__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27141__$1);
}
})(),cljs.core.cst$kw$sci_SLASH_error)){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e27140;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);