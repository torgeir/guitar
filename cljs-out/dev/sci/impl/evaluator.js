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
var G__26539 = xs;
args__$2 = G__26539;
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
var G__26540 = xs;
args__$2 = G__26540;
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
var G__26541 = ctx__$2;
var G__26542 = rest_let_bindings;
ctx__$1 = G__26541;
let_bindings__$1 = G__26542;
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
var G__26543 = nexprs;
exprs__$1 = G__26543;
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
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__26544){
var vec__26545 = p__26544;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(3),null);
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
var v = (cljs.core.truth_((function (){var G__26548 = cljs.core.cst$kw$sci$impl_SLASH_var$unbound;
var G__26549 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26548,G__26549) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26548,G__26549));
})())?(function (){var G__26550 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26550,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__26550;
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
var ret__4785__auto___26551 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,ctx,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$file,null,(1),null)),(new cljs.core.List(null,"/home/runner/work/guitar/guitar/resources/public/cljs-out/dev/sci/impl/evaluator.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$line,null,(1),null)),(new cljs.core.List(null,128,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$column,null,(1),null)),(new cljs.core.List(null,10,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_line,null,(1),null)),(new cljs.core.List(null,130,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$end_DASH_column,null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$tag,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$java$util$Map,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__26552){
var vec__26553 = p__26552;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(1),null);
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
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__26556){
var map__26557 = p__26556;
var map__26557__$1 = (((((!((map__26557 == null))))?(((((map__26557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26557):map__26557);
var _parsed_libspec = map__26557__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$as);
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$refer);
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$rename);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$exclude);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$only);
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26557__$1,cljs.core.cst$kw$use);
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__26561 = cljs.core.cst$kw$all;
var G__26562 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26561,G__26562) : sci.impl.utils.kw_identical_QMARK_.call(null,G__26561,G__26562));
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
var vec__26563 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26563,(1),null);
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
var temp__5720__auto___26568 = (function (){var G__26566 = the_loaded_ns;
var G__26566__$1 = (((G__26566 == null))?null:cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__26566));
var G__26566__$2 = (((G__26566__$1 == null))?null:cljs.core.meta(G__26566__$1));
if((G__26566__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_required_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__26566__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___26568)){
var on_loaded_26569 = temp__5720__auto___26568;
var G__26567_26570 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_26569.cljs$core$IFn$_invoke$arity$1 ? on_loaded_26569.cljs$core$IFn$_invoke$arity$1(G__26567_26570) : on_loaded_26569.call(null,G__26567_26570));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__26571 = opts;
var map__26571__$1 = (((((!((map__26571 == null))))?(((((map__26571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26571):map__26571);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26571__$1,cljs.core.cst$kw$reload);
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
var temp__5718__auto____$2 = (function (){var G__26573 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,lib,cljs.core.cst$kw$reload,reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__26573) : load_fn.call(null,G__26573));
})();
if(cljs.core.truth_(temp__5718__auto____$2)){
var map__26574 = temp__5718__auto____$2;
var map__26574__$1 = (((((!((map__26574 == null))))?(((((map__26574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26574):map__26574);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26574__$1,cljs.core.cst$kw$file);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26574__$1,cljs.core.cst$kw$source);
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__26578_26580 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY);
var G__26579_26581 = source;
var fexpr__26577_26582 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__26577_26582.cljs$core$IFn$_invoke$arity$2 ? fexpr__26577_26582.cljs$core$IFn$_invoke$arity$2(G__26578_26580,G__26579_26581) : fexpr__26577_26582.call(null,G__26578_26580,G__26579_26581));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e26576){if((e26576 instanceof Error)){
var e_26583 = e26576;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,cljs.core.cst$kw$namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_26583;
} else {
throw e26576;

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
var len__4736__auto___26588 = arguments.length;
var i__4737__auto___26589 = (0);
while(true){
if((i__4737__auto___26589 < len__4736__auto___26588)){
args__4742__auto__.push((arguments[i__4737__auto___26589]));

var G__26590 = (i__4737__auto___26589 + (1));
i__4737__auto___26589 = G__26590;
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
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq26584){
var G__26585 = cljs.core.first(seq26584);
var seq26584__$1 = cljs.core.next(seq26584);
var G__26586 = cljs.core.first(seq26584__$1);
var seq26584__$2 = cljs.core.next(seq26584__$1);
var G__26587 = cljs.core.first(seq26584__$2);
var seq26584__$3 = cljs.core.next(seq26584__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26585,G__26586,G__26587,seq26584__$3);
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
var supported_26623 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$as,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$verbose,null,cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null,cljs.core.cst$kw$refer,null], null), null);
var unsupported_26624 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_26623,flags));
if(unsupported_26624){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_26624)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__26591 = cljs.core.seq(args_STAR___$1);
var chunk__26592 = null;
var count__26593 = (0);
var i__26594 = (0);
while(true){
if((i__26594 < count__26593)){
var arg = chunk__26592.cljs$core$IIndexed$_nth$arity$2(null,i__26594);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26609_26625 = arg;
var seq__26610_26626 = cljs.core.seq(vec__26609_26625);
var first__26611_26627 = cljs.core.first(seq__26610_26626);
var seq__26610_26628__$1 = cljs.core.next(seq__26610_26626);
var prefix_26629 = first__26611_26627;
var args_STAR__26630__$2 = seq__26610_26628__$1;
if((prefix_26629 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26612_26631 = cljs.core.seq(args_STAR__26630__$2);
var chunk__26613_26632 = null;
var count__26614_26633 = (0);
var i__26615_26634 = (0);
while(true){
if((i__26615_26634 < count__26614_26633)){
var arg_26635__$1 = chunk__26613_26632.cljs$core$IIndexed$_nth$arity$2(null,i__26615_26634);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26629,sci.impl.evaluator.prependss(arg_26635__$1,opts));


var G__26636 = seq__26612_26631;
var G__26637 = chunk__26613_26632;
var G__26638 = count__26614_26633;
var G__26639 = (i__26615_26634 + (1));
seq__26612_26631 = G__26636;
chunk__26613_26632 = G__26637;
count__26614_26633 = G__26638;
i__26615_26634 = G__26639;
continue;
} else {
var temp__5720__auto___26640 = cljs.core.seq(seq__26612_26631);
if(temp__5720__auto___26640){
var seq__26612_26641__$1 = temp__5720__auto___26640;
if(cljs.core.chunked_seq_QMARK_(seq__26612_26641__$1)){
var c__4556__auto___26642 = cljs.core.chunk_first(seq__26612_26641__$1);
var G__26643 = cljs.core.chunk_rest(seq__26612_26641__$1);
var G__26644 = c__4556__auto___26642;
var G__26645 = cljs.core.count(c__4556__auto___26642);
var G__26646 = (0);
seq__26612_26631 = G__26643;
chunk__26613_26632 = G__26644;
count__26614_26633 = G__26645;
i__26615_26634 = G__26646;
continue;
} else {
var arg_26647__$1 = cljs.core.first(seq__26612_26641__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26629,sci.impl.evaluator.prependss(arg_26647__$1,opts));


var G__26648 = cljs.core.next(seq__26612_26641__$1);
var G__26649 = null;
var G__26650 = (0);
var G__26651 = (0);
seq__26612_26631 = G__26648;
chunk__26613_26632 = G__26649;
count__26614_26633 = G__26650;
i__26615_26634 = G__26651;
continue;
}
} else {
}
}
break;
}
}


var G__26652 = seq__26591;
var G__26653 = chunk__26592;
var G__26654 = count__26593;
var G__26655 = (i__26594 + (1));
seq__26591 = G__26652;
chunk__26592 = G__26653;
count__26593 = G__26654;
i__26594 = G__26655;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26591);
if(temp__5720__auto__){
var seq__26591__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26591__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26591__$1);
var G__26656 = cljs.core.chunk_rest(seq__26591__$1);
var G__26657 = c__4556__auto__;
var G__26658 = cljs.core.count(c__4556__auto__);
var G__26659 = (0);
seq__26591 = G__26656;
chunk__26592 = G__26657;
count__26593 = G__26658;
i__26594 = G__26659;
continue;
} else {
var arg = cljs.core.first(seq__26591__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__26616_26660 = arg;
var seq__26617_26661 = cljs.core.seq(vec__26616_26660);
var first__26618_26662 = cljs.core.first(seq__26617_26661);
var seq__26617_26663__$1 = cljs.core.next(seq__26617_26661);
var prefix_26664 = first__26618_26662;
var args_STAR__26665__$2 = seq__26617_26663__$1;
if((prefix_26664 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__26619_26666 = cljs.core.seq(args_STAR__26665__$2);
var chunk__26620_26667 = null;
var count__26621_26668 = (0);
var i__26622_26669 = (0);
while(true){
if((i__26622_26669 < count__26621_26668)){
var arg_26670__$1 = chunk__26620_26667.cljs$core$IIndexed$_nth$arity$2(null,i__26622_26669);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26664,sci.impl.evaluator.prependss(arg_26670__$1,opts));


var G__26671 = seq__26619_26666;
var G__26672 = chunk__26620_26667;
var G__26673 = count__26621_26668;
var G__26674 = (i__26622_26669 + (1));
seq__26619_26666 = G__26671;
chunk__26620_26667 = G__26672;
count__26621_26668 = G__26673;
i__26622_26669 = G__26674;
continue;
} else {
var temp__5720__auto___26675__$1 = cljs.core.seq(seq__26619_26666);
if(temp__5720__auto___26675__$1){
var seq__26619_26676__$1 = temp__5720__auto___26675__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26619_26676__$1)){
var c__4556__auto___26677 = cljs.core.chunk_first(seq__26619_26676__$1);
var G__26678 = cljs.core.chunk_rest(seq__26619_26676__$1);
var G__26679 = c__4556__auto___26677;
var G__26680 = cljs.core.count(c__4556__auto___26677);
var G__26681 = (0);
seq__26619_26666 = G__26678;
chunk__26620_26667 = G__26679;
count__26621_26668 = G__26680;
i__26622_26669 = G__26681;
continue;
} else {
var arg_26682__$1 = cljs.core.first(seq__26619_26676__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_26664,sci.impl.evaluator.prependss(arg_26682__$1,opts));


var G__26683 = cljs.core.next(seq__26619_26676__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26619_26666 = G__26683;
chunk__26620_26667 = G__26684;
count__26621_26668 = G__26685;
i__26622_26669 = G__26686;
continue;
}
} else {
}
}
break;
}
}


var G__26687 = cljs.core.next(seq__26591__$1);
var G__26688 = null;
var G__26689 = (0);
var G__26690 = (0);
seq__26591 = G__26687;
chunk__26592 = G__26688;
count__26593 = G__26689;
i__26594 = G__26690;
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
var len__4736__auto___26693 = arguments.length;
var i__4737__auto___26694 = (0);
while(true){
if((i__4737__auto___26694 < len__4736__auto___26693)){
args__4742__auto__.push((arguments[i__4737__auto___26694]));

var G__26695 = (i__4737__auto___26694 + (1));
i__4737__auto___26694 = G__26695;
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
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq26691){
var G__26692 = cljs.core.first(seq26691);
var seq26691__$1 = cljs.core.next(seq26691);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26692,seq26691__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26698 = arguments.length;
var i__4737__auto___26699 = (0);
while(true){
if((i__4737__auto___26699 < len__4736__auto___26698)){
args__4742__auto__.push((arguments[i__4737__auto___26699]));

var G__26700 = (i__4737__auto___26699 + (1));
i__4737__auto___26699 = G__26700;
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
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq26696){
var G__26697 = cljs.core.first(seq26696);
var seq26696__$1 = cljs.core.next(seq26696);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26697,seq26696__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__26701){
var vec__26702 = p__26701;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(0),null);
var map__26705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26702,(1),null);
var map__26705__$1 = (((((!((map__26705 == null))))?(((((map__26705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26705):map__26705);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26705__$1,cljs.core.cst$kw$case_DASH_map);
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26705__$1,cljs.core.cst$kw$case_DASH_val);
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26705__$1,cljs.core.cst$kw$case_DASH_default);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5718__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26707 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__26710 = ctx;
var G__26711 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26710,G__26711) : sci.impl.evaluator.eval.call(null,G__26710,G__26711));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__26712 = cljs.core.cst$kw$sci$impl_SLASH_try.cljs$core$IFn$_invoke$arity$1(expr);
var map__26712__$1 = (((((!((map__26712 == null))))?(((((map__26712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26712):map__26712);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26712__$1,cljs.core.cst$kw$body);
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26712__$1,cljs.core.cst$kw$catches);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26712__$1,cljs.core.cst$kw$finally);
try{var _STAR_in_try_STAR__orig_val__26720 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__26721 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__26721);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__26720);
}}catch (e26714){if((e26714 instanceof Error)){
var e = e26714;
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl$evaluator_SLASH_try_DASH_result,(function (){var G__26715 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__26716 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26715,G__26716) : sci.impl.evaluator.eval.call(null,G__26715,G__26716));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26717 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26717,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26717,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e26714;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__26722){
var vec__26723 = p__26722;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26726_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26726_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26726_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__26728){
var vec__26729 = p__26728;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26729,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26727_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26727_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26727_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__26734,p__26735){
var map__26736 = p__26734;
var map__26736__$1 = (((((!((map__26736 == null))))?(((((map__26736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26736):map__26736);
var ctx = map__26736__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26736__$1,cljs.core.cst$kw$class_DASH__GT_opts);
var vec__26737 = p__26735;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(3),null);
var _expr = vec__26737;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26733_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26733_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26733_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__26741){
var vec__26742 = p__26741;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26752 = arguments.length;
var i__4737__auto___26753 = (0);
while(true){
if((i__4737__auto___26753 < len__4736__auto___26752)){
args__4742__auto__.push((arguments[i__4737__auto___26753]));

var G__26754 = (i__4737__auto___26753 + (1));
i__4737__auto___26753 = G__26754;
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
var vec__26748 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(1),null);
var G__26751_26755 = k;
var G__26751_26756__$1 = (((G__26751_26755 instanceof cljs.core.Keyword))?G__26751_26755.fqn:null);
switch (G__26751_26756__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26751_26755,G__26751_26756__$1,vec__26748,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$refer,ns_sym__$1,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__26751_26755,G__26751_26756__$1,vec__26748,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__26751_26755,G__26751_26756__$1,vec__26748,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__26751_26755,G__26751_26756__$1,vec__26748,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26751_26756__$1)].join('')));

}

var G__26758 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__26758;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq26745){
var G__26746 = cljs.core.first(seq26745);
var seq26745__$1 = cljs.core.next(seq26745);
var G__26747 = cljs.core.first(seq26745__$1);
var seq26745__$2 = cljs.core.next(seq26745__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26746,G__26747,seq26745__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__26760 = arguments.length;
switch (G__26760) {
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
return cljs.core.second((function (){var fexpr__26761 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26761.cljs$core$IFn$_invoke$arity$3 ? fexpr__26761.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26761.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__26762 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__26762.cljs$core$IFn$_invoke$arity$3 ? fexpr__26762.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__26762.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26770 = arguments.length;
var i__4737__auto___26771 = (0);
while(true){
if((i__4737__auto___26771 < len__4736__auto___26770)){
args__4742__auto__.push((arguments[i__4737__auto___26771]));

var G__26772 = (i__4737__auto___26771 + (1));
i__4737__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26764_SHARP_){
if(((cljs.core.seq_QMARK_(p1__26764_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__26764_SHARP_))))){
return cljs.core.second(p1__26764_SHARP_);
} else {
return p1__26764_SHARP_;
}
}),import_symbols_or_lists);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__26767 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26767,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26767,(1),null);
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
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq26765){
var G__26766 = cljs.core.first(seq26765);
var seq26765__$1 = cljs.core.next(seq26765);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26766,seq26765__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__26773){
var vec__26774 = p__26773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26774,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26774,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26774,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$obj,obj__$1,cljs.core.cst$kw$v,v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__26780 = exprs;
var vec__26781 = G__26780;
var seq__26782 = cljs.core.seq(vec__26781);
var first__26783 = cljs.core.first(seq__26782);
var seq__26782__$1 = cljs.core.next(seq__26782);
var expr = first__26783;
var exprs__$1 = seq__26782__$1;
var G__26780__$1 = G__26780;
while(true){
var vec__26784 = G__26780__$1;
var seq__26785 = cljs.core.seq(vec__26784);
var first__26786 = cljs.core.first(seq__26785);
var seq__26785__$1 = cljs.core.next(seq__26785);
var expr__$1 = first__26786;
var exprs__$2 = seq__26785__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5718__auto__ = cljs.core.seq(exprs__$2);
if(temp__5718__auto__){
var exprs__$3 = temp__5718__auto__;
var G__26787 = exprs__$3;
G__26780__$1 = G__26787;
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
var G__26982 = cljs.core.count(args);
switch (G__26982) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg26792 = (function (){var G__26983 = ctx;
var G__26984 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26983,G__26984) : sci.impl.evaluator.eval.call(null,G__26983,G__26984));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg26792) : f.call(null,arg26792));

break;
case (2):
var arg26793 = (function (){var G__26985 = ctx;
var G__26986 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26985,G__26986) : sci.impl.evaluator.eval.call(null,G__26985,G__26986));
})();
var args__$1 = cljs.core.rest(args);
var arg26794 = (function (){var G__26987 = ctx;
var G__26988 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26987,G__26988) : sci.impl.evaluator.eval.call(null,G__26987,G__26988));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg26793,arg26794) : f.call(null,arg26793,arg26794));

break;
case (3):
var arg26795 = (function (){var G__26989 = ctx;
var G__26990 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26989,G__26990) : sci.impl.evaluator.eval.call(null,G__26989,G__26990));
})();
var args__$1 = cljs.core.rest(args);
var arg26796 = (function (){var G__26991 = ctx;
var G__26992 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26991,G__26992) : sci.impl.evaluator.eval.call(null,G__26991,G__26992));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26797 = (function (){var G__26993 = ctx;
var G__26994 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26993,G__26994) : sci.impl.evaluator.eval.call(null,G__26993,G__26994));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg26795,arg26796,arg26797) : f.call(null,arg26795,arg26796,arg26797));

break;
case (4):
var arg26798 = (function (){var G__26995 = ctx;
var G__26996 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26995,G__26996) : sci.impl.evaluator.eval.call(null,G__26995,G__26996));
})();
var args__$1 = cljs.core.rest(args);
var arg26799 = (function (){var G__26997 = ctx;
var G__26998 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26997,G__26998) : sci.impl.evaluator.eval.call(null,G__26997,G__26998));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26800 = (function (){var G__26999 = ctx;
var G__27000 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__26999,G__27000) : sci.impl.evaluator.eval.call(null,G__26999,G__27000));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26801 = (function (){var G__27001 = ctx;
var G__27002 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27001,G__27002) : sci.impl.evaluator.eval.call(null,G__27001,G__27002));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg26798,arg26799,arg26800,arg26801) : f.call(null,arg26798,arg26799,arg26800,arg26801));

break;
case (5):
var arg26802 = (function (){var G__27003 = ctx;
var G__27004 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27003,G__27004) : sci.impl.evaluator.eval.call(null,G__27003,G__27004));
})();
var args__$1 = cljs.core.rest(args);
var arg26803 = (function (){var G__27005 = ctx;
var G__27006 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27005,G__27006) : sci.impl.evaluator.eval.call(null,G__27005,G__27006));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26804 = (function (){var G__27007 = ctx;
var G__27008 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27007,G__27008) : sci.impl.evaluator.eval.call(null,G__27007,G__27008));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26805 = (function (){var G__27009 = ctx;
var G__27010 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27009,G__27010) : sci.impl.evaluator.eval.call(null,G__27009,G__27010));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26806 = (function (){var G__27011 = ctx;
var G__27012 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27011,G__27012) : sci.impl.evaluator.eval.call(null,G__27011,G__27012));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg26802,arg26803,arg26804,arg26805,arg26806) : f.call(null,arg26802,arg26803,arg26804,arg26805,arg26806));

break;
case (6):
var arg26807 = (function (){var G__27013 = ctx;
var G__27014 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27013,G__27014) : sci.impl.evaluator.eval.call(null,G__27013,G__27014));
})();
var args__$1 = cljs.core.rest(args);
var arg26808 = (function (){var G__27015 = ctx;
var G__27016 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27015,G__27016) : sci.impl.evaluator.eval.call(null,G__27015,G__27016));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26809 = (function (){var G__27017 = ctx;
var G__27018 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27017,G__27018) : sci.impl.evaluator.eval.call(null,G__27017,G__27018));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26810 = (function (){var G__27019 = ctx;
var G__27020 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27019,G__27020) : sci.impl.evaluator.eval.call(null,G__27019,G__27020));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26811 = (function (){var G__27021 = ctx;
var G__27022 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27021,G__27022) : sci.impl.evaluator.eval.call(null,G__27021,G__27022));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26812 = (function (){var G__27023 = ctx;
var G__27024 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27023,G__27024) : sci.impl.evaluator.eval.call(null,G__27023,G__27024));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg26807,arg26808,arg26809,arg26810,arg26811,arg26812) : f.call(null,arg26807,arg26808,arg26809,arg26810,arg26811,arg26812));

break;
case (7):
var arg26813 = (function (){var G__27025 = ctx;
var G__27026 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27025,G__27026) : sci.impl.evaluator.eval.call(null,G__27025,G__27026));
})();
var args__$1 = cljs.core.rest(args);
var arg26814 = (function (){var G__27027 = ctx;
var G__27028 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27027,G__27028) : sci.impl.evaluator.eval.call(null,G__27027,G__27028));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26815 = (function (){var G__27029 = ctx;
var G__27030 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27029,G__27030) : sci.impl.evaluator.eval.call(null,G__27029,G__27030));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26816 = (function (){var G__27031 = ctx;
var G__27032 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27031,G__27032) : sci.impl.evaluator.eval.call(null,G__27031,G__27032));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26817 = (function (){var G__27033 = ctx;
var G__27034 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27033,G__27034) : sci.impl.evaluator.eval.call(null,G__27033,G__27034));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26818 = (function (){var G__27035 = ctx;
var G__27036 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27035,G__27036) : sci.impl.evaluator.eval.call(null,G__27035,G__27036));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26819 = (function (){var G__27037 = ctx;
var G__27038 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27037,G__27038) : sci.impl.evaluator.eval.call(null,G__27037,G__27038));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg26813,arg26814,arg26815,arg26816,arg26817,arg26818,arg26819) : f.call(null,arg26813,arg26814,arg26815,arg26816,arg26817,arg26818,arg26819));

break;
case (8):
var arg26820 = (function (){var G__27039 = ctx;
var G__27040 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27039,G__27040) : sci.impl.evaluator.eval.call(null,G__27039,G__27040));
})();
var args__$1 = cljs.core.rest(args);
var arg26821 = (function (){var G__27041 = ctx;
var G__27042 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27041,G__27042) : sci.impl.evaluator.eval.call(null,G__27041,G__27042));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26822 = (function (){var G__27043 = ctx;
var G__27044 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27043,G__27044) : sci.impl.evaluator.eval.call(null,G__27043,G__27044));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26823 = (function (){var G__27045 = ctx;
var G__27046 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27045,G__27046) : sci.impl.evaluator.eval.call(null,G__27045,G__27046));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26824 = (function (){var G__27047 = ctx;
var G__27048 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27047,G__27048) : sci.impl.evaluator.eval.call(null,G__27047,G__27048));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26825 = (function (){var G__27049 = ctx;
var G__27050 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27049,G__27050) : sci.impl.evaluator.eval.call(null,G__27049,G__27050));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26826 = (function (){var G__27051 = ctx;
var G__27052 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27051,G__27052) : sci.impl.evaluator.eval.call(null,G__27051,G__27052));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26827 = (function (){var G__27053 = ctx;
var G__27054 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27053,G__27054) : sci.impl.evaluator.eval.call(null,G__27053,G__27054));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg26820,arg26821,arg26822,arg26823,arg26824,arg26825,arg26826,arg26827) : f.call(null,arg26820,arg26821,arg26822,arg26823,arg26824,arg26825,arg26826,arg26827));

break;
case (9):
var arg26828 = (function (){var G__27055 = ctx;
var G__27056 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27055,G__27056) : sci.impl.evaluator.eval.call(null,G__27055,G__27056));
})();
var args__$1 = cljs.core.rest(args);
var arg26829 = (function (){var G__27057 = ctx;
var G__27058 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27057,G__27058) : sci.impl.evaluator.eval.call(null,G__27057,G__27058));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26830 = (function (){var G__27059 = ctx;
var G__27060 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27059,G__27060) : sci.impl.evaluator.eval.call(null,G__27059,G__27060));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26831 = (function (){var G__27061 = ctx;
var G__27062 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27061,G__27062) : sci.impl.evaluator.eval.call(null,G__27061,G__27062));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26832 = (function (){var G__27063 = ctx;
var G__27064 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27063,G__27064) : sci.impl.evaluator.eval.call(null,G__27063,G__27064));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26833 = (function (){var G__27065 = ctx;
var G__27066 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27065,G__27066) : sci.impl.evaluator.eval.call(null,G__27065,G__27066));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26834 = (function (){var G__27067 = ctx;
var G__27068 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27067,G__27068) : sci.impl.evaluator.eval.call(null,G__27067,G__27068));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26835 = (function (){var G__27069 = ctx;
var G__27070 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27069,G__27070) : sci.impl.evaluator.eval.call(null,G__27069,G__27070));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26836 = (function (){var G__27071 = ctx;
var G__27072 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27071,G__27072) : sci.impl.evaluator.eval.call(null,G__27071,G__27072));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg26828,arg26829,arg26830,arg26831,arg26832,arg26833,arg26834,arg26835,arg26836) : f.call(null,arg26828,arg26829,arg26830,arg26831,arg26832,arg26833,arg26834,arg26835,arg26836));

break;
case (10):
var arg26837 = (function (){var G__27073 = ctx;
var G__27074 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27073,G__27074) : sci.impl.evaluator.eval.call(null,G__27073,G__27074));
})();
var args__$1 = cljs.core.rest(args);
var arg26838 = (function (){var G__27075 = ctx;
var G__27076 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27075,G__27076) : sci.impl.evaluator.eval.call(null,G__27075,G__27076));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26839 = (function (){var G__27077 = ctx;
var G__27078 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27077,G__27078) : sci.impl.evaluator.eval.call(null,G__27077,G__27078));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26840 = (function (){var G__27079 = ctx;
var G__27080 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27079,G__27080) : sci.impl.evaluator.eval.call(null,G__27079,G__27080));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26841 = (function (){var G__27081 = ctx;
var G__27082 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27081,G__27082) : sci.impl.evaluator.eval.call(null,G__27081,G__27082));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26842 = (function (){var G__27083 = ctx;
var G__27084 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27083,G__27084) : sci.impl.evaluator.eval.call(null,G__27083,G__27084));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26843 = (function (){var G__27085 = ctx;
var G__27086 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27085,G__27086) : sci.impl.evaluator.eval.call(null,G__27085,G__27086));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26844 = (function (){var G__27087 = ctx;
var G__27088 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27087,G__27088) : sci.impl.evaluator.eval.call(null,G__27087,G__27088));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26845 = (function (){var G__27089 = ctx;
var G__27090 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27089,G__27090) : sci.impl.evaluator.eval.call(null,G__27089,G__27090));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26846 = (function (){var G__27091 = ctx;
var G__27092 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27091,G__27092) : sci.impl.evaluator.eval.call(null,G__27091,G__27092));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg26837,arg26838,arg26839,arg26840,arg26841,arg26842,arg26843,arg26844,arg26845,arg26846) : f.call(null,arg26837,arg26838,arg26839,arg26840,arg26841,arg26842,arg26843,arg26844,arg26845,arg26846));

break;
case (11):
var arg26847 = (function (){var G__27093 = ctx;
var G__27094 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27093,G__27094) : sci.impl.evaluator.eval.call(null,G__27093,G__27094));
})();
var args__$1 = cljs.core.rest(args);
var arg26848 = (function (){var G__27095 = ctx;
var G__27096 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27095,G__27096) : sci.impl.evaluator.eval.call(null,G__27095,G__27096));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26849 = (function (){var G__27097 = ctx;
var G__27098 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27097,G__27098) : sci.impl.evaluator.eval.call(null,G__27097,G__27098));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26850 = (function (){var G__27099 = ctx;
var G__27100 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27099,G__27100) : sci.impl.evaluator.eval.call(null,G__27099,G__27100));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26851 = (function (){var G__27101 = ctx;
var G__27102 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27101,G__27102) : sci.impl.evaluator.eval.call(null,G__27101,G__27102));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26852 = (function (){var G__27103 = ctx;
var G__27104 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27103,G__27104) : sci.impl.evaluator.eval.call(null,G__27103,G__27104));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26853 = (function (){var G__27105 = ctx;
var G__27106 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27105,G__27106) : sci.impl.evaluator.eval.call(null,G__27105,G__27106));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26854 = (function (){var G__27107 = ctx;
var G__27108 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27107,G__27108) : sci.impl.evaluator.eval.call(null,G__27107,G__27108));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26855 = (function (){var G__27109 = ctx;
var G__27110 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27109,G__27110) : sci.impl.evaluator.eval.call(null,G__27109,G__27110));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26856 = (function (){var G__27111 = ctx;
var G__27112 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27111,G__27112) : sci.impl.evaluator.eval.call(null,G__27111,G__27112));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26857 = (function (){var G__27113 = ctx;
var G__27114 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27113,G__27114) : sci.impl.evaluator.eval.call(null,G__27113,G__27114));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg26847,arg26848,arg26849,arg26850,arg26851,arg26852,arg26853,arg26854,arg26855,arg26856,arg26857) : f.call(null,arg26847,arg26848,arg26849,arg26850,arg26851,arg26852,arg26853,arg26854,arg26855,arg26856,arg26857));

break;
case (12):
var arg26858 = (function (){var G__27115 = ctx;
var G__27116 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : sci.impl.evaluator.eval.call(null,G__27115,G__27116));
})();
var args__$1 = cljs.core.rest(args);
var arg26859 = (function (){var G__27117 = ctx;
var G__27118 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27117,G__27118) : sci.impl.evaluator.eval.call(null,G__27117,G__27118));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26860 = (function (){var G__27119 = ctx;
var G__27120 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27119,G__27120) : sci.impl.evaluator.eval.call(null,G__27119,G__27120));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26861 = (function (){var G__27121 = ctx;
var G__27122 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27121,G__27122) : sci.impl.evaluator.eval.call(null,G__27121,G__27122));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26862 = (function (){var G__27123 = ctx;
var G__27124 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27123,G__27124) : sci.impl.evaluator.eval.call(null,G__27123,G__27124));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26863 = (function (){var G__27125 = ctx;
var G__27126 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27125,G__27126) : sci.impl.evaluator.eval.call(null,G__27125,G__27126));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26864 = (function (){var G__27127 = ctx;
var G__27128 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27127,G__27128) : sci.impl.evaluator.eval.call(null,G__27127,G__27128));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26865 = (function (){var G__27129 = ctx;
var G__27130 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27129,G__27130) : sci.impl.evaluator.eval.call(null,G__27129,G__27130));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26866 = (function (){var G__27131 = ctx;
var G__27132 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27131,G__27132) : sci.impl.evaluator.eval.call(null,G__27131,G__27132));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26867 = (function (){var G__27133 = ctx;
var G__27134 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27133,G__27134) : sci.impl.evaluator.eval.call(null,G__27133,G__27134));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26868 = (function (){var G__27135 = ctx;
var G__27136 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27135,G__27136) : sci.impl.evaluator.eval.call(null,G__27135,G__27136));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26869 = (function (){var G__27137 = ctx;
var G__27138 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27137,G__27138) : sci.impl.evaluator.eval.call(null,G__27137,G__27138));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg26858,arg26859,arg26860,arg26861,arg26862,arg26863,arg26864,arg26865,arg26866,arg26867,arg26868,arg26869) : f.call(null,arg26858,arg26859,arg26860,arg26861,arg26862,arg26863,arg26864,arg26865,arg26866,arg26867,arg26868,arg26869));

break;
case (13):
var arg26870 = (function (){var G__27139 = ctx;
var G__27140 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27139,G__27140) : sci.impl.evaluator.eval.call(null,G__27139,G__27140));
})();
var args__$1 = cljs.core.rest(args);
var arg26871 = (function (){var G__27141 = ctx;
var G__27142 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27141,G__27142) : sci.impl.evaluator.eval.call(null,G__27141,G__27142));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26872 = (function (){var G__27143 = ctx;
var G__27144 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27143,G__27144) : sci.impl.evaluator.eval.call(null,G__27143,G__27144));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26873 = (function (){var G__27145 = ctx;
var G__27146 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27145,G__27146) : sci.impl.evaluator.eval.call(null,G__27145,G__27146));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26874 = (function (){var G__27147 = ctx;
var G__27148 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27147,G__27148) : sci.impl.evaluator.eval.call(null,G__27147,G__27148));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26875 = (function (){var G__27149 = ctx;
var G__27150 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27149,G__27150) : sci.impl.evaluator.eval.call(null,G__27149,G__27150));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26876 = (function (){var G__27151 = ctx;
var G__27152 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27151,G__27152) : sci.impl.evaluator.eval.call(null,G__27151,G__27152));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26877 = (function (){var G__27153 = ctx;
var G__27154 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27153,G__27154) : sci.impl.evaluator.eval.call(null,G__27153,G__27154));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26878 = (function (){var G__27155 = ctx;
var G__27156 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27155,G__27156) : sci.impl.evaluator.eval.call(null,G__27155,G__27156));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26879 = (function (){var G__27157 = ctx;
var G__27158 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27157,G__27158) : sci.impl.evaluator.eval.call(null,G__27157,G__27158));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26880 = (function (){var G__27159 = ctx;
var G__27160 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27159,G__27160) : sci.impl.evaluator.eval.call(null,G__27159,G__27160));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26881 = (function (){var G__27161 = ctx;
var G__27162 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27161,G__27162) : sci.impl.evaluator.eval.call(null,G__27161,G__27162));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26882 = (function (){var G__27163 = ctx;
var G__27164 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27163,G__27164) : sci.impl.evaluator.eval.call(null,G__27163,G__27164));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg26870,arg26871,arg26872,arg26873,arg26874,arg26875,arg26876,arg26877,arg26878,arg26879,arg26880,arg26881,arg26882) : f.call(null,arg26870,arg26871,arg26872,arg26873,arg26874,arg26875,arg26876,arg26877,arg26878,arg26879,arg26880,arg26881,arg26882));

break;
case (14):
var arg26883 = (function (){var G__27165 = ctx;
var G__27166 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27165,G__27166) : sci.impl.evaluator.eval.call(null,G__27165,G__27166));
})();
var args__$1 = cljs.core.rest(args);
var arg26884 = (function (){var G__27167 = ctx;
var G__27168 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27167,G__27168) : sci.impl.evaluator.eval.call(null,G__27167,G__27168));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26885 = (function (){var G__27169 = ctx;
var G__27170 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27169,G__27170) : sci.impl.evaluator.eval.call(null,G__27169,G__27170));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26886 = (function (){var G__27171 = ctx;
var G__27172 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27171,G__27172) : sci.impl.evaluator.eval.call(null,G__27171,G__27172));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26887 = (function (){var G__27173 = ctx;
var G__27174 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27173,G__27174) : sci.impl.evaluator.eval.call(null,G__27173,G__27174));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26888 = (function (){var G__27175 = ctx;
var G__27176 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27175,G__27176) : sci.impl.evaluator.eval.call(null,G__27175,G__27176));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26889 = (function (){var G__27177 = ctx;
var G__27178 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27177,G__27178) : sci.impl.evaluator.eval.call(null,G__27177,G__27178));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26890 = (function (){var G__27179 = ctx;
var G__27180 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27179,G__27180) : sci.impl.evaluator.eval.call(null,G__27179,G__27180));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26891 = (function (){var G__27181 = ctx;
var G__27182 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27181,G__27182) : sci.impl.evaluator.eval.call(null,G__27181,G__27182));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26892 = (function (){var G__27183 = ctx;
var G__27184 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27183,G__27184) : sci.impl.evaluator.eval.call(null,G__27183,G__27184));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26893 = (function (){var G__27185 = ctx;
var G__27186 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27185,G__27186) : sci.impl.evaluator.eval.call(null,G__27185,G__27186));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26894 = (function (){var G__27187 = ctx;
var G__27188 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27187,G__27188) : sci.impl.evaluator.eval.call(null,G__27187,G__27188));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26895 = (function (){var G__27189 = ctx;
var G__27190 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27189,G__27190) : sci.impl.evaluator.eval.call(null,G__27189,G__27190));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26896 = (function (){var G__27191 = ctx;
var G__27192 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27191,G__27192) : sci.impl.evaluator.eval.call(null,G__27191,G__27192));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg26883,arg26884,arg26885,arg26886,arg26887,arg26888,arg26889,arg26890,arg26891,arg26892,arg26893,arg26894,arg26895,arg26896) : f.call(null,arg26883,arg26884,arg26885,arg26886,arg26887,arg26888,arg26889,arg26890,arg26891,arg26892,arg26893,arg26894,arg26895,arg26896));

break;
case (15):
var arg26897 = (function (){var G__27193 = ctx;
var G__27194 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27193,G__27194) : sci.impl.evaluator.eval.call(null,G__27193,G__27194));
})();
var args__$1 = cljs.core.rest(args);
var arg26898 = (function (){var G__27195 = ctx;
var G__27196 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27195,G__27196) : sci.impl.evaluator.eval.call(null,G__27195,G__27196));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26899 = (function (){var G__27197 = ctx;
var G__27198 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27197,G__27198) : sci.impl.evaluator.eval.call(null,G__27197,G__27198));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26900 = (function (){var G__27199 = ctx;
var G__27200 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27199,G__27200) : sci.impl.evaluator.eval.call(null,G__27199,G__27200));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26901 = (function (){var G__27201 = ctx;
var G__27202 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27201,G__27202) : sci.impl.evaluator.eval.call(null,G__27201,G__27202));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26902 = (function (){var G__27203 = ctx;
var G__27204 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27203,G__27204) : sci.impl.evaluator.eval.call(null,G__27203,G__27204));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26903 = (function (){var G__27205 = ctx;
var G__27206 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27205,G__27206) : sci.impl.evaluator.eval.call(null,G__27205,G__27206));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26904 = (function (){var G__27207 = ctx;
var G__27208 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27207,G__27208) : sci.impl.evaluator.eval.call(null,G__27207,G__27208));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26905 = (function (){var G__27209 = ctx;
var G__27210 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27209,G__27210) : sci.impl.evaluator.eval.call(null,G__27209,G__27210));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26906 = (function (){var G__27211 = ctx;
var G__27212 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27211,G__27212) : sci.impl.evaluator.eval.call(null,G__27211,G__27212));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26907 = (function (){var G__27213 = ctx;
var G__27214 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27213,G__27214) : sci.impl.evaluator.eval.call(null,G__27213,G__27214));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26908 = (function (){var G__27215 = ctx;
var G__27216 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27215,G__27216) : sci.impl.evaluator.eval.call(null,G__27215,G__27216));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26909 = (function (){var G__27217 = ctx;
var G__27218 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27217,G__27218) : sci.impl.evaluator.eval.call(null,G__27217,G__27218));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26910 = (function (){var G__27219 = ctx;
var G__27220 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27219,G__27220) : sci.impl.evaluator.eval.call(null,G__27219,G__27220));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26911 = (function (){var G__27221 = ctx;
var G__27222 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27221,G__27222) : sci.impl.evaluator.eval.call(null,G__27221,G__27222));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg26897,arg26898,arg26899,arg26900,arg26901,arg26902,arg26903,arg26904,arg26905,arg26906,arg26907,arg26908,arg26909,arg26910,arg26911) : f.call(null,arg26897,arg26898,arg26899,arg26900,arg26901,arg26902,arg26903,arg26904,arg26905,arg26906,arg26907,arg26908,arg26909,arg26910,arg26911));

break;
case (16):
var arg26912 = (function (){var G__27223 = ctx;
var G__27224 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27223,G__27224) : sci.impl.evaluator.eval.call(null,G__27223,G__27224));
})();
var args__$1 = cljs.core.rest(args);
var arg26913 = (function (){var G__27225 = ctx;
var G__27226 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27225,G__27226) : sci.impl.evaluator.eval.call(null,G__27225,G__27226));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26914 = (function (){var G__27227 = ctx;
var G__27228 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27227,G__27228) : sci.impl.evaluator.eval.call(null,G__27227,G__27228));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26915 = (function (){var G__27229 = ctx;
var G__27230 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27229,G__27230) : sci.impl.evaluator.eval.call(null,G__27229,G__27230));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26916 = (function (){var G__27231 = ctx;
var G__27232 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27231,G__27232) : sci.impl.evaluator.eval.call(null,G__27231,G__27232));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26917 = (function (){var G__27233 = ctx;
var G__27234 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27233,G__27234) : sci.impl.evaluator.eval.call(null,G__27233,G__27234));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26918 = (function (){var G__27235 = ctx;
var G__27236 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27235,G__27236) : sci.impl.evaluator.eval.call(null,G__27235,G__27236));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26919 = (function (){var G__27237 = ctx;
var G__27238 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27237,G__27238) : sci.impl.evaluator.eval.call(null,G__27237,G__27238));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26920 = (function (){var G__27239 = ctx;
var G__27240 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27239,G__27240) : sci.impl.evaluator.eval.call(null,G__27239,G__27240));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26921 = (function (){var G__27241 = ctx;
var G__27242 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27241,G__27242) : sci.impl.evaluator.eval.call(null,G__27241,G__27242));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26922 = (function (){var G__27243 = ctx;
var G__27244 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27243,G__27244) : sci.impl.evaluator.eval.call(null,G__27243,G__27244));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26923 = (function (){var G__27245 = ctx;
var G__27246 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27245,G__27246) : sci.impl.evaluator.eval.call(null,G__27245,G__27246));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26924 = (function (){var G__27247 = ctx;
var G__27248 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27247,G__27248) : sci.impl.evaluator.eval.call(null,G__27247,G__27248));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26925 = (function (){var G__27249 = ctx;
var G__27250 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27249,G__27250) : sci.impl.evaluator.eval.call(null,G__27249,G__27250));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26926 = (function (){var G__27251 = ctx;
var G__27252 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27251,G__27252) : sci.impl.evaluator.eval.call(null,G__27251,G__27252));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26927 = (function (){var G__27253 = ctx;
var G__27254 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27253,G__27254) : sci.impl.evaluator.eval.call(null,G__27253,G__27254));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg26912,arg26913,arg26914,arg26915,arg26916,arg26917,arg26918,arg26919,arg26920,arg26921,arg26922,arg26923,arg26924,arg26925,arg26926,arg26927) : f.call(null,arg26912,arg26913,arg26914,arg26915,arg26916,arg26917,arg26918,arg26919,arg26920,arg26921,arg26922,arg26923,arg26924,arg26925,arg26926,arg26927));

break;
case (17):
var arg26928 = (function (){var G__27255 = ctx;
var G__27256 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27255,G__27256) : sci.impl.evaluator.eval.call(null,G__27255,G__27256));
})();
var args__$1 = cljs.core.rest(args);
var arg26929 = (function (){var G__27257 = ctx;
var G__27258 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27257,G__27258) : sci.impl.evaluator.eval.call(null,G__27257,G__27258));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26930 = (function (){var G__27259 = ctx;
var G__27260 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27259,G__27260) : sci.impl.evaluator.eval.call(null,G__27259,G__27260));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26931 = (function (){var G__27261 = ctx;
var G__27262 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27261,G__27262) : sci.impl.evaluator.eval.call(null,G__27261,G__27262));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26932 = (function (){var G__27263 = ctx;
var G__27264 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27263,G__27264) : sci.impl.evaluator.eval.call(null,G__27263,G__27264));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26933 = (function (){var G__27265 = ctx;
var G__27266 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27265,G__27266) : sci.impl.evaluator.eval.call(null,G__27265,G__27266));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26934 = (function (){var G__27267 = ctx;
var G__27268 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27267,G__27268) : sci.impl.evaluator.eval.call(null,G__27267,G__27268));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26935 = (function (){var G__27269 = ctx;
var G__27270 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27269,G__27270) : sci.impl.evaluator.eval.call(null,G__27269,G__27270));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26936 = (function (){var G__27271 = ctx;
var G__27272 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27271,G__27272) : sci.impl.evaluator.eval.call(null,G__27271,G__27272));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26937 = (function (){var G__27273 = ctx;
var G__27274 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27273,G__27274) : sci.impl.evaluator.eval.call(null,G__27273,G__27274));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26938 = (function (){var G__27275 = ctx;
var G__27276 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27275,G__27276) : sci.impl.evaluator.eval.call(null,G__27275,G__27276));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26939 = (function (){var G__27277 = ctx;
var G__27278 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27277,G__27278) : sci.impl.evaluator.eval.call(null,G__27277,G__27278));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26940 = (function (){var G__27279 = ctx;
var G__27280 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27279,G__27280) : sci.impl.evaluator.eval.call(null,G__27279,G__27280));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26941 = (function (){var G__27281 = ctx;
var G__27282 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27281,G__27282) : sci.impl.evaluator.eval.call(null,G__27281,G__27282));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26942 = (function (){var G__27283 = ctx;
var G__27284 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27283,G__27284) : sci.impl.evaluator.eval.call(null,G__27283,G__27284));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26943 = (function (){var G__27285 = ctx;
var G__27286 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27285,G__27286) : sci.impl.evaluator.eval.call(null,G__27285,G__27286));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26944 = (function (){var G__27287 = ctx;
var G__27288 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27287,G__27288) : sci.impl.evaluator.eval.call(null,G__27287,G__27288));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg26928,arg26929,arg26930,arg26931,arg26932,arg26933,arg26934,arg26935,arg26936,arg26937,arg26938,arg26939,arg26940,arg26941,arg26942,arg26943,arg26944) : f.call(null,arg26928,arg26929,arg26930,arg26931,arg26932,arg26933,arg26934,arg26935,arg26936,arg26937,arg26938,arg26939,arg26940,arg26941,arg26942,arg26943,arg26944));

break;
case (18):
var arg26945 = (function (){var G__27289 = ctx;
var G__27290 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27289,G__27290) : sci.impl.evaluator.eval.call(null,G__27289,G__27290));
})();
var args__$1 = cljs.core.rest(args);
var arg26946 = (function (){var G__27291 = ctx;
var G__27292 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27291,G__27292) : sci.impl.evaluator.eval.call(null,G__27291,G__27292));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26947 = (function (){var G__27293 = ctx;
var G__27294 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27293,G__27294) : sci.impl.evaluator.eval.call(null,G__27293,G__27294));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26948 = (function (){var G__27295 = ctx;
var G__27296 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27295,G__27296) : sci.impl.evaluator.eval.call(null,G__27295,G__27296));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26949 = (function (){var G__27297 = ctx;
var G__27298 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27297,G__27298) : sci.impl.evaluator.eval.call(null,G__27297,G__27298));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26950 = (function (){var G__27299 = ctx;
var G__27300 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27299,G__27300) : sci.impl.evaluator.eval.call(null,G__27299,G__27300));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26951 = (function (){var G__27301 = ctx;
var G__27302 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27301,G__27302) : sci.impl.evaluator.eval.call(null,G__27301,G__27302));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26952 = (function (){var G__27303 = ctx;
var G__27304 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27303,G__27304) : sci.impl.evaluator.eval.call(null,G__27303,G__27304));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26953 = (function (){var G__27305 = ctx;
var G__27306 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27305,G__27306) : sci.impl.evaluator.eval.call(null,G__27305,G__27306));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26954 = (function (){var G__27307 = ctx;
var G__27308 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27307,G__27308) : sci.impl.evaluator.eval.call(null,G__27307,G__27308));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26955 = (function (){var G__27309 = ctx;
var G__27310 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27309,G__27310) : sci.impl.evaluator.eval.call(null,G__27309,G__27310));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26956 = (function (){var G__27311 = ctx;
var G__27312 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27311,G__27312) : sci.impl.evaluator.eval.call(null,G__27311,G__27312));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26957 = (function (){var G__27313 = ctx;
var G__27314 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27313,G__27314) : sci.impl.evaluator.eval.call(null,G__27313,G__27314));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26958 = (function (){var G__27315 = ctx;
var G__27316 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27315,G__27316) : sci.impl.evaluator.eval.call(null,G__27315,G__27316));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26959 = (function (){var G__27317 = ctx;
var G__27318 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27317,G__27318) : sci.impl.evaluator.eval.call(null,G__27317,G__27318));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26960 = (function (){var G__27319 = ctx;
var G__27320 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27319,G__27320) : sci.impl.evaluator.eval.call(null,G__27319,G__27320));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26961 = (function (){var G__27321 = ctx;
var G__27322 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27321,G__27322) : sci.impl.evaluator.eval.call(null,G__27321,G__27322));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26962 = (function (){var G__27323 = ctx;
var G__27324 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27323,G__27324) : sci.impl.evaluator.eval.call(null,G__27323,G__27324));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg26945,arg26946,arg26947,arg26948,arg26949,arg26950,arg26951,arg26952,arg26953,arg26954,arg26955,arg26956,arg26957,arg26958,arg26959,arg26960,arg26961,arg26962) : f.call(null,arg26945,arg26946,arg26947,arg26948,arg26949,arg26950,arg26951,arg26952,arg26953,arg26954,arg26955,arg26956,arg26957,arg26958,arg26959,arg26960,arg26961,arg26962));

break;
case (19):
var arg26963 = (function (){var G__27325 = ctx;
var G__27326 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27325,G__27326) : sci.impl.evaluator.eval.call(null,G__27325,G__27326));
})();
var args__$1 = cljs.core.rest(args);
var arg26964 = (function (){var G__27327 = ctx;
var G__27328 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27327,G__27328) : sci.impl.evaluator.eval.call(null,G__27327,G__27328));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg26965 = (function (){var G__27329 = ctx;
var G__27330 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27329,G__27330) : sci.impl.evaluator.eval.call(null,G__27329,G__27330));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg26966 = (function (){var G__27331 = ctx;
var G__27332 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27331,G__27332) : sci.impl.evaluator.eval.call(null,G__27331,G__27332));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg26967 = (function (){var G__27333 = ctx;
var G__27334 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27333,G__27334) : sci.impl.evaluator.eval.call(null,G__27333,G__27334));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg26968 = (function (){var G__27335 = ctx;
var G__27336 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27335,G__27336) : sci.impl.evaluator.eval.call(null,G__27335,G__27336));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg26969 = (function (){var G__27337 = ctx;
var G__27338 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27337,G__27338) : sci.impl.evaluator.eval.call(null,G__27337,G__27338));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg26970 = (function (){var G__27339 = ctx;
var G__27340 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27339,G__27340) : sci.impl.evaluator.eval.call(null,G__27339,G__27340));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg26971 = (function (){var G__27341 = ctx;
var G__27342 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27341,G__27342) : sci.impl.evaluator.eval.call(null,G__27341,G__27342));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg26972 = (function (){var G__27343 = ctx;
var G__27344 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27343,G__27344) : sci.impl.evaluator.eval.call(null,G__27343,G__27344));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg26973 = (function (){var G__27345 = ctx;
var G__27346 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27345,G__27346) : sci.impl.evaluator.eval.call(null,G__27345,G__27346));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg26974 = (function (){var G__27347 = ctx;
var G__27348 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27347,G__27348) : sci.impl.evaluator.eval.call(null,G__27347,G__27348));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg26975 = (function (){var G__27349 = ctx;
var G__27350 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27349,G__27350) : sci.impl.evaluator.eval.call(null,G__27349,G__27350));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg26976 = (function (){var G__27351 = ctx;
var G__27352 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27351,G__27352) : sci.impl.evaluator.eval.call(null,G__27351,G__27352));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg26977 = (function (){var G__27353 = ctx;
var G__27354 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27353,G__27354) : sci.impl.evaluator.eval.call(null,G__27353,G__27354));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg26978 = (function (){var G__27355 = ctx;
var G__27356 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27355,G__27356) : sci.impl.evaluator.eval.call(null,G__27355,G__27356));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg26979 = (function (){var G__27357 = ctx;
var G__27358 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27357,G__27358) : sci.impl.evaluator.eval.call(null,G__27357,G__27358));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg26980 = (function (){var G__27359 = ctx;
var G__27360 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27359,G__27360) : sci.impl.evaluator.eval.call(null,G__27359,G__27360));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg26981 = (function (){var G__27361 = ctx;
var G__27362 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27361,G__27362) : sci.impl.evaluator.eval.call(null,G__27361,G__27362));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg26963,arg26964,arg26965,arg26966,arg26967,arg26968,arg26969,arg26970,arg26971,arg26972,arg26973,arg26974,arg26975,arg26976,arg26977,arg26978,arg26979,arg26980,arg26981) : f.call(null,arg26963,arg26964,arg26965,arg26966,arg26967,arg26968,arg26969,arg26970,arg26971,arg26972,arg26973,arg26974,arg26975,arg26976,arg26977,arg26978,arg26979,arg26980,arg26981));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26310_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__26310_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__26310_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__27364 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__27364)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,G__27364)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__27364)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__27364)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__27364)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__27364)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__27364)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$in_DASH_ns,G__27364)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$use,G__27364)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__27364)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,G__27364)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,G__27364)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__27364)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$refer,G__27364)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__27364)){
return (new cljs.core.LazySeq(null,(function (){var G__27365 = ctx;
var G__27366 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__27365,G__27366) : sci.impl.evaluator.eval.call(null,G__27365,G__27366));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$throw,G__27364)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__27364)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__27364)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27364)].join('')));

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
if(cljs.core.truth_((function (){var G__27368 = op;
var G__27369 = cljs.core.cst$kw$static_DASH_access;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27368,G__27369) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27368,G__27369));
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
}catch (e27367){if((e27367 instanceof Error)){
var e = e27367;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e27367;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__27375 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,G__27375)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$try,G__27375)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,G__27375)){
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$static_DASH_access,G__27375)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deref_BANG_,G__27375)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resolve_DASH_sym,G__27375)){
return ctx.get(cljs.core.cst$kw$bindings).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$needs_DASH_ctx,G__27375)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$eval,G__27375)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27370_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27370_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27370_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27371_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27371_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27371_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27372_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__27372_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__27372_SHARP_));
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
}catch (e27373){if((e27373 instanceof Error)){
var e = e27373;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__27374 = e;
var G__27374__$1 = (((G__27374 == null))?null:cljs.core.ex_data(G__27374));
if((G__27374__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__27374__$1);
}
})(),cljs.core.cst$kw$sci_SLASH_error)){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e27373;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);
