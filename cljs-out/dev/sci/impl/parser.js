// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.interop');
goog.require('sci.impl.parser.edamame');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.parser.eof = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof;
sci.impl.parser.default_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_eval,false,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow], null);
sci.impl.parser.fully_qualify = (function sci$impl$parser$fully_qualify(ctx,sym){
var env = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var sym_ns = (function (){var temp__5720__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);
} else {
return null;
}
})();
var sym_name_str = cljs.core.name(sym);
var current_ns = sci.impl.vars.current_ns_name();
var current_ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns);
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$namespaces);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,current_ns);
var aliases = cljs.core.cst$kw$aliases.cljs$core$IFn$_invoke$arity$1(the_current_ns);
var ret = ((cljs.core.not(sym_ns))?(function (){var or__4126__auto__ = ((((((cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cljs.core.cst$sym$clojure$core),sym)) && (cljs.core.not((function (){var G__17695 = the_current_ns;
var G__17695__$1 = (((G__17695 == null))?null:cljs.core.cst$kw$refer.cljs$core$IFn$_invoke$arity$1(G__17695));
var G__17695__$2 = (((G__17695__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__17695__$1,cljs.core.cst$sym$clojure$core));
var G__17695__$3 = (((G__17695__$2 == null))?null:cljs.core.cst$kw$exclude.cljs$core$IFn$_invoke$arity$1(G__17695__$2));
if((G__17695__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__17695__$3,sym);
}
})())))) || (cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,sym))))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",sym_name_str):null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.interop.fully_qualify_class(ctx,sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,sym);
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.meta(v);
if(cljs.core.truth_(temp__5720__auto____$1)){
var m = temp__5720__auto____$1;
var temp__5720__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto____$2)){
var var_name = temp__5720__auto____$2;
var temp__5720__auto____$3 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto____$3)){
var ns = temp__5720__auto____$3;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns_str,sym_name_str);
}
}
}
})():(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,sym_ns], null)))?sym:(function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,sym_ns);
if(cljs.core.truth_(temp__5718__auto__)){
var ns = temp__5718__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),sym_name_str);
} else {
return sym;
}
})()));
return ret;
});
sci.impl.parser.parse_next = (function sci$impl$parser$parse_next(var_args){
var G__17698 = arguments.length;
switch (G__17698) {
case 1:
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$1 = (function (r){
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(sci.impl.parser.default_opts,r);
}));

(sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,r){
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,r,null);
}));

(sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,r,opts){
var features = cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(ctx);
var readers = cljs.core.cst$kw$readers.cljs$core$IFn$_invoke$arity$1(ctx);
var readers__$1 = ((sci.impl.vars.var_QMARK_(readers))?cljs.core.deref(readers):readers);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var env_val = cljs.core.deref(env);
var current_ns = sci.impl.vars.current_ns_name();
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,current_ns], null));
var aliases = cljs.core.cst$kw$aliases.cljs$core$IFn$_invoke$arity$1(the_current_ns);
var auto_resolve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aliases,cljs.core.cst$kw$current,current_ns);
var parse_opts = (function (){var G__17699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sci.impl.parser.default_opts,cljs.core.cst$kw$features,features,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_resolve,auto_resolve,cljs.core.cst$kw$syntax_DASH_quote,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$resolve_DASH_symbol,(function (p1__17696_SHARP_){
return sci.impl.parser.fully_qualify(ctx,p1__17696_SHARP_);
})], null),cljs.core.cst$kw$readers,readers__$1], 0));
if(cljs.core.truth_(opts)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17699,opts], 0));
} else {
return G__17699;
}
})();
var ret = (function (){try{return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(parse_opts,r);
}catch (e17700){if((e17700 instanceof cljs.core.ExceptionInfo)){
var e = e17700;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.ex_data(e),cljs.core.cst$kw$type,cljs.core.cst$kw$sci$error_SLASH_parse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$phase,"parse",cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)),e);
} else {
throw e17700;

}
}})();
return ret;
}));

(sci.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

sci.impl.parser.reader = (function sci$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
sci.impl.parser.get_line_number = (function sci$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
sci.impl.parser.get_column_number = (function sci$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
sci.impl.parser.parse_string = (function sci$impl$parser$parse_string(ctx,s){
var r = sci.impl.parser.reader(s);
var v = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,v) : sci.impl.utils.kw_identical_QMARK_.call(null,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,v)))){
return null;
} else {
return v;
}
});
