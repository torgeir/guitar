// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.interpreter.stats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parse,(0),cljs.core.cst$kw$analysis,(0),cljs.core.cst$kw$eval,(0),cljs.core.cst$kw$total,(0)], null));
sci.impl.interpreter.update_stats = (function sci$impl$interpreter$update_stats(_ctx,k,t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sci.impl.interpreter.stats,(function (stats){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(stats,k,cljs.core._PLUS_,t),cljs.core.cst$kw$total,cljs.core._PLUS_,t);
}));
});
sci.impl.interpreter.print_stats = (function sci$impl$interpreter$print_stats(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.zipmap(cljs.core.keys(cljs.core.deref(sci.impl.interpreter.stats)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27695_SHARP_){
return (p1__27695_SHARP_ / 1000000.0);
}),cljs.core.vals(cljs.core.deref(sci.impl.interpreter.stats))))], 0));
});
sci.impl.interpreter.eval_form_stats = (function sci$impl$interpreter$eval_form_stats(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__27702 = cljs.core.rest(exprs);
var G__27703 = (function (){var G__27698 = ctx;
var G__27699 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2(G__27698,G__27699) : sci.impl.interpreter.eval_form_stats.call(null,G__27698,G__27699));
})();
exprs = G__27702;
ret = G__27703;
continue;
} else {
return ret;
}
break;
}
} else {
if(((cljs.core.not(cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,cljs.core.first(form))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,cljs.core.first(form))))){
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,form,true);
var ret = (((analyzed instanceof sci.impl.types.EvalForm))?(function (){var G__27700 = ctx;
var G__27701 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2(G__27700,G__27701) : sci.impl.interpreter.eval_form_stats.call(null,G__27700,G__27701));
})():(function (){var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
})());
return ret;
} else {
return null;
}
}
} else {
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,form);
var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
}
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__27710 = cljs.core.rest(exprs);
var G__27711 = (function (){var G__27706 = ctx;
var G__27707 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__27706,G__27707) : sci.impl.interpreter.eval_form.call(null,G__27706,G__27707));
})();
exprs = G__27710;
ret = G__27711;
continue;
} else {
return ret;
}
break;
}
} else {
if(((cljs.core.not(cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,cljs.core.first(form))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$require,cljs.core.first(form))))){
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,form,true);
var ret = (((analyzed instanceof sci.impl.types.EvalForm))?(function (){var G__27708 = ctx;
var G__27709 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__27708,G__27709) : sci.impl.interpreter.eval_form.call(null,G__27708,G__27709));
})():sci.impl.evaluator.eval(ctx,analyzed));
return ret;
} else {
return null;
}
}
} else {
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,form);
var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_stats = (function sci$impl$interpreter$eval_string_stats(ctx,s){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$id,(function (){var or__4126__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})());
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,expr) : sci.impl.utils.kw_identical_QMARK_.call(null,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,expr)))){
sci.impl.interpreter.print_stats();

return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx__$1,expr);
var G__27712 = ret__$1;
ret = G__27712;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$id,(function (){var or__4126__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})());
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,expr) : sci.impl.utils.kw_identical_QMARK_.call(null,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx__$1,expr);
var G__27713 = ret__$1;
ret = G__27713;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_string_STAR_,sci.impl.interpreter.eval_string_STAR_);
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__27715 = arguments.length;
switch (G__27715) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);

