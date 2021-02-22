// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('daiquiri.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
daiquiri.util.valid_key_QMARK_ = (function daiquiri$util$valid_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)));
});
daiquiri.util._camel_case = (function daiquiri$util$_camel_case(k){
if(typeof k === 'string'){
return k;
} else {
var vec__12968 = cljs.core.name(k).split("-");
var seq__12969 = cljs.core.seq(vec__12968);
var first__12970 = cljs.core.first(seq__12969);
var seq__12969__$1 = cljs.core.next(seq__12969);
var first_word = first__12970;
var words = seq__12969__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
}
});
daiquiri.util.attrs_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 *   Does not convert string attributes.
 */
daiquiri.util.camel_case = (function daiquiri$util$camel_case(k){
if(daiquiri.util.valid_key_QMARK_(k)){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(daiquiri.util.attrs_cache),k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var kk = daiquiri.util._camel_case(k);
daiquiri.util.attrs_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(daiquiri.util.attrs_cache.cljs$core$IDeref$_deref$arity$1(null),k,kk));

return kk;
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
daiquiri.util.camel_case_keys = (function daiquiri$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (p1__12971_SHARP_,p2__12972_SHARP_,p3__12973_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__12971_SHARP_,daiquiri.util.camel_case(p2__12972_SHARP_),p3__12973_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
var G__12974 = m__$1;
if(cljs.core.map_QMARK_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__12974,cljs.core.cst$kw$style,daiquiri.util.camel_case_keys);
} else {
return G__12974;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
daiquiri.util.element_QMARK_ = (function daiquiri$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
daiquiri.util.html_to_dom_attrs = (function daiquiri$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(daiquiri.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null));
});
/**
 * Join the `classes` with a whitespace.
 */
daiquiri.util.join_classes = (function daiquiri$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});
