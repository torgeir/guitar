// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.resolve');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.interop');
goog.require('sci.impl.records');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$resolve_DASH_sym);
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(p__27430,check_sym,sym,v){
var map__27431 = p__27430;
var map__27431__$1 = (((((!((map__27431 == null))))?(((((map__27431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27431):map__27431);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27431__$1,cljs.core.cst$kw$allow);
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27431__$1,cljs.core.cst$kw$deny);
var or__4126__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
if((cljs.core.truth_(allow)?((((sci.impl.vars.var_QMARK_(v)) && (cljs.core.not(cljs.core.cst$kw$sci$impl_SLASH_built_DASH_in.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(p__27433,sym,call_QMARK_){
var map__27434 = p__27433;
var map__27434__$1 = (((((!((map__27434 == null))))?(((((map__27434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27434):map__27434);
var ctx = map__27434__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27434__$1,cljs.core.cst$kw$env);
var sym_ns = (function (){var G__27436 = cljs.core.namespace(sym);
if((G__27436 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__27436);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__27437 = cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__27437) : cnn.call(null,G__27437));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aliases,sym_ns], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym_ns;
}
})():null);
var or__4126__auto__ = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = sym_ns__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,cljs.core.cst$sym$clojure$core)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,cljs.core.cst$sym$cljs$core)));
} else {
return and__4115__auto__;
}
})())){
var or__4126__auto____$1 = (function (){var G__27439 = env__$1;
var G__27439__$1 = (((G__27439 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__27439));
var G__27439__$2 = (((G__27439__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__27439__$1,cljs.core.cst$sym$clojure$core));
if((G__27439__$2 == null)){
return null;
} else {
return cljs.core.find(G__27439__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5720__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(sym_ns__$1)){
var or__4126__auto____$1 = (function (){var G__27441 = env__$1;
var G__27441__$1 = (((G__27441 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__27441));
var G__27441__$2 = (((G__27441__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__27441__$1) : sym_ns__$1.call(null,G__27441__$1)));
if((G__27441__$2 == null)){
return null;
} else {
return cljs.core.find(G__27441__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5720__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var clazz = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$static_DASH_access], null))], null);
} else {
return null;
}
}
} else {
var or__4126__auto____$1 = (function (){var kv = (function (){var G__27444 = env__$1;
var G__27444__$1 = (((G__27444 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__27444));
var G__27444__$2 = (((G__27444__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__27444__$1,cljs.core.cst$sym$clojure$core));
if((G__27444__$2 == null)){
return null;
} else {
return cljs.core.find(G__27444__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__27445 = the_current_ns;
var G__27445__$1 = (((G__27445 == null))?null:cljs.core.cst$kw$refer.cljs$core$IFn$_invoke$arity$1(G__27445));
var G__27445__$2 = (((G__27445__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__27445__$1,cljs.core.cst$sym$clojure$core));
var G__27445__$3 = (((G__27445__$2 == null))?null:cljs.core.cst$kw$exclude.cljs$core$IFn$_invoke$arity$1(G__27445__$2));
if((G__27445__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__27445__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (function (){var temp__5720__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var temp__5720__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5720__auto__)){
var x = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}

}
}
}
});
sci.impl.resolve.tag = (function sci$impl$resolve$tag(_ctx,expr){
var temp__5720__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
});
sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(p__27446,sym,call_QMARK_){
var map__27447 = p__27446;
var map__27447__$1 = (((((!((map__27447 == null))))?(((((map__27447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27447):map__27447);
var ctx = map__27447__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27447__$1,cljs.core.cst$kw$bindings);
var vec__27449 = (function (){var or__4126__auto__ = (function (){var temp__5720__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__27455 = temp__5720__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27455,(1),null);
var t = sci.impl.resolve.tag(ctx,v);
var v__$1 = sci.impl.resolve.mark_resolve_sym(k);
var v__$2 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v__$1,cljs.core.assoc,cljs.core.cst$kw$tag,t):v__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$2], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5720__auto__ = sci.impl.resolve.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__27458 = temp__5720__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27458,(1),null);
var kv = vec__27458;
sci.impl.resolve.check_permission_BANG_(ctx,k,sym,v);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27449,(1),null);
var kv = vec__27449;
var temp__5718__auto__ = ((cljs.core.not(cljs.core.cst$kw$sci$impl_SLASH_prevent_DASH_deref.cljs$core$IFn$_invoke$arity$1(ctx)))?cljs.core.meta(k):false);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_deref_BANG_.cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$deref_BANG_], null))], null);
} else {
return kv;
}
} else {
return kv;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__27462 = arguments.length;
switch (G__27462) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,sym,false);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
var sym__$1 = sym;
var res = cljs.core.second((function (){var or__4126__auto__ = sci.impl.resolve.lookup(ctx,sym__$1,call_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var n = cljs.core.name(sym__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,cljs.core.cst$sym$expand_DASH_dot_STAR_], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,cljs.core.cst$sym$expand_DASH_constructor], null);
} else {
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),sym__$1);

}
}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 3);

