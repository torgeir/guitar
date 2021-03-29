// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('edamame.impl.syntax_quote');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
edamame.impl.syntax_quote.unquote_QMARK_ = (function edamame$impl$syntax_quote$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote)));
});
edamame.impl.syntax_quote.unquote_splicing_QMARK_ = (function edamame$impl$syntax_quote$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing)));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
edamame.impl.syntax_quote.expand_list = (function edamame$impl$syntax_quote$expand_list(ctx,reader,s){
var s__$1 = cljs.core.seq(s);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first(s__$1);
var ret = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,((edamame.impl.syntax_quote.unquote_QMARK_(item))?(new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_list,(new cljs.core.List(null,cljs.core.second(item),null,(1),null)),(2),null)):((edamame.impl.syntax_quote.unquote_splicing_QMARK_(item))?cljs.core.second(item):(new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_list,(new cljs.core.List(null,(edamame.impl.syntax_quote.syntax_quote.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.syntax_quote.syntax_quote.cljs$core$IFn$_invoke$arity$3(ctx,reader,item) : edamame.impl.syntax_quote.syntax_quote.call(null,ctx,reader,item)),null,(1),null)),(2),null))
)));
var G__30997 = cljs.core.next(s__$1);
var G__30998 = ret;
s__$1 = G__30997;
r = G__30998;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(r));
}
break;
}
});
edamame.impl.syntax_quote.syntax_quote_coll = (function edamame$impl$syntax_quote$syntax_quote_coll(ctx,reader,type,coll){
var res = (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_sequence,(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_seq,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$clojure$core_SLASH_concat,edamame.impl.syntax_quote.expand_list(ctx,reader,coll)),null,(1),null)),(2),null)),null,(1),null)),(2),null));
if(cljs.core.truth_(type)){
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_apply,(new cljs.core.List(null,type,(new cljs.core.List(null,res,null,(1),null)),(2),null)),(3),null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
edamame.impl.syntax_quote.map_func = (function edamame$impl$syntax_quote$map_func(coll){
if((cljs.core.count(coll) >= (16))){
return cljs.core.cst$sym$clojure$core_SLASH_hash_DASH_map;
} else {
return cljs.core.cst$sym$clojure$core_SLASH_array_DASH_map;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
edamame.impl.syntax_quote.flatten_map = (function edamame$impl$syntax_quote$flatten_map(form){
var s = cljs.core.seq(form);
var key_vals = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first(s);
var G__30999 = cljs.core.next(s);
var G__31000 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__30999;
key_vals = G__31000;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(key_vals));
}
break;
}
});
edamame.impl.syntax_quote.syntax_quote_STAR_ = (function edamame$impl$syntax_quote$syntax_quote_STAR_(p__31001,reader,form){
var map__31002 = p__31001;
var map__31002__$1 = (((((!((map__31002 == null))))?(((((map__31002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31002):map__31002);
var ctx = map__31002__$1;
var gensyms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31002__$1,cljs.core.cst$kw$gensyms);
if(cljs.core.special_symbol_QMARK_(form)){
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,form,null,(1),null)),(2),null));
} else {
if((form instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,(function (){var sym_name = cljs.core.name(form);
if(cljs.core.special_symbol_QMARK_(form)){
return form;
} else {
if(clojure.string.ends_with_QMARK_(sym_name,"#")){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gensyms),form);
if(cljs.core.truth_(temp__5718__auto__)){
var generated = temp__5718__auto__;
return generated;
} else {
var n = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_name,(0),(((sym_name).length) - (1)));
var generated = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([n,"__"].join(''));
var generated__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(generated),"__auto__"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gensyms,cljs.core.assoc,form,generated__$1);

return generated__$1;
}
} else {
var f = cljs.core.cst$kw$resolve_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$syntax_DASH_quote.cljs$core$IFn$_invoke$arity$1(ctx));
var fexpr__31004 = (function (){var or__4126__auto__ = f;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
return (fexpr__31004.cljs$core$IFn$_invoke$arity$1 ? fexpr__31004.cljs$core$IFn$_invoke$arity$1(form) : fexpr__31004.call(null,form));

}
}
})(),null,(1),null)),(2),null));
} else {
if(edamame.impl.syntax_quote.unquote_QMARK_(form)){
return cljs.core.second(form);
} else {
if(edamame.impl.syntax_quote.unquote_splicing_QMARK_(form)){
throw (new Error("unquote-splice not in list"));
} else {
if(cljs.core.coll_QMARK_(form)){
if((form instanceof cljs.core.IRecord)){
return form;
} else {
if(cljs.core.map_QMARK_(form)){
return edamame.impl.syntax_quote.syntax_quote_coll(ctx,reader,edamame.impl.syntax_quote.map_func(form),edamame.impl.syntax_quote.flatten_map(form));
} else {
if(cljs.core.vector_QMARK_(form)){
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_vec,(new cljs.core.List(null,edamame.impl.syntax_quote.syntax_quote_coll(ctx,reader,null,form),null,(1),null)),(2),null));
} else {
if(cljs.core.set_QMARK_(form)){
return edamame.impl.syntax_quote.syntax_quote_coll(ctx,reader,cljs.core.cst$sym$clojure$core_SLASH_hash_DASH_set,form);
} else {
if(((cljs.core.seq_QMARK_(form)) || (cljs.core.list_QMARK_(form)))){
var seq = cljs.core.seq(form);
if(seq){
return edamame.impl.syntax_quote.syntax_quote_coll(ctx,reader,null,seq);
} else {
return cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list);
}
} else {
throw (new Error("Unknown Collection type"));

}
}
}
}
}
} else {
if((((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (cljs.core.char_QMARK_(form)) || (typeof form === 'string') || ((form == null)) || (cljs.core.boolean_QMARK_(form)) || (cljs.core.regexp_QMARK_(form)))){
return form;
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,form,null,(1),null)),(2),null));

}
}
}
}
}
}
});
edamame.impl.syntax_quote.add_meta = (function edamame$impl$syntax_quote$add_meta(ctx,reader,form,ret){
if((((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(form),cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.cst$kw$end_DASH_row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.cst$kw$end_DASH_col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx)], 0))):false)){
return (new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta,(new cljs.core.List(null,ret,(new cljs.core.List(null,edamame.impl.syntax_quote.syntax_quote_STAR_(ctx,reader,cljs.core.meta(form)),null,(1),null)),(2),null)),(3),null));
} else {
return ret;
}
});
edamame.impl.syntax_quote.syntax_quote = (function edamame$impl$syntax_quote$syntax_quote(ctx,reader,form){
var ret = edamame.impl.syntax_quote.syntax_quote_STAR_(ctx,reader,form);
return edamame.impl.syntax_quote.add_meta(ctx,reader,form,ret);
});
