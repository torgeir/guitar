// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('edamame.impl.read_fn');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Preserves metadata, unlike clojure.walk/walk.
 */
edamame.impl.read_fn.walk_STAR_ = (function edamame$impl$read_fn$walk_STAR_(inner,outer,form){
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta((function (){var G__16730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__16730) : outer.call(null,G__16730));
})(),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
var G__16731 = (new cljs.core.MapEntry((function (){var G__16732 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__16732) : inner.call(null,G__16732));
})(),(function (){var G__16733 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__16733) : inner.call(null,G__16733));
})(),null));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__16731) : outer.call(null,G__16731));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta((function (){var G__16734 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__16734) : outer.call(null,G__16734));
})(),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
var G__16735 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__16735) : outer.call(null,G__16735));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__16736 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__16736) : outer.call(null,G__16736));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
}
}
}
});
/**
 * Preserves metadata, unlike clojure.walk/postwalk.
 */
edamame.impl.read_fn.postwalk_STAR_ = (function edamame$impl$read_fn$postwalk_STAR_(f,form){
return edamame.impl.read_fn.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(edamame.impl.read_fn.postwalk_STAR_,f),f,form);
});
edamame.impl.read_fn.read_fn = (function edamame$impl$read_fn$read_fn(expr){
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_fixed,(0),cljs.core.cst$kw$var_DASH_args_QMARK_,false], null));
var expr__$1 = edamame.impl.read_fn.postwalk_STAR_((function (elt){
if((elt instanceof cljs.core.Symbol)){
var temp__5718__auto__ = cljs.core.re_matches(/^%(.*)/,cljs.core.name(elt));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__16739 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(1),null);
if(cljs.core.empty_QMARK_(m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),cljs.core.cst$kw$max_DASH_fixed,cljs.core.max,(1)));

return cljs.core.cst$sym$_PERCENT_1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state.cljs$core$IDeref$_deref$arity$1(null),cljs.core.cst$kw$var_DASH_args_QMARK_,true));

return elt;
} else {
var n_16743 = parseInt(m);
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),cljs.core.cst$kw$max_DASH_fixed,cljs.core.max,n_16743));

return elt;

}
}
} else {
return elt;
}
} else {
return elt;
}
}),expr);
var map__16738 = cljs.core.deref(state);
var map__16738__$1 = (((((!((map__16738 == null))))?(((((map__16738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16738):map__16738);
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,cljs.core.cst$kw$max_DASH_fixed);
var var_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,cljs.core.cst$kw$var_DASH_args_QMARK_);
var fixed_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16737_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16737_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_fixed + (1))));
var var_args_sym = cljs.core.cst$sym$_PERCENT__AMPERSAND_;
var arg_list = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fixed_names,(cljs.core.truth_(var_args_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,var_args_sym], null):null)));
var form = (new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,(new cljs.core.List(null,arg_list,(new cljs.core.List(null,expr__$1,null,(1),null)),(2),null)),(3),null));
return form;
});