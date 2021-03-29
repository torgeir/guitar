// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.destructure');
goog.require('cljs.core');
goog.require('cljs.core.constants');
sci.impl.destructure.destructure_STAR_ = (function sci$impl$destructure$destructure_STAR_(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = (function sci$impl$destructure$destructure_STAR__$_pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.seq,(new cljs.core.List(null,gvec,null,(1),null)),(2),null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__27496 = sci$impl$destructure$destructure_STAR__$_pb(ret,cljs.core.second(bs),gseq);
var G__27497 = n;
var G__27498 = cljs.core.nnext(bs);
var G__27499 = true;
ret = G__27496;
n = G__27497;
bs = G__27498;
seen_rest_QMARK_ = G__27499;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return sci$impl$destructure$destructure_STAR__$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(cljs.core.truth_(seen_rest_QMARK_)){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__27500 = sci$impl$destructure$destructure_STAR__$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first,null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.next,null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,cljs.core.nth,(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__27501 = (n + (1));
var G__27502 = cljs.core.next(bs);
var G__27503 = seen_rest_QMARK_;
ret = G__27500;
n = G__27501;
bs = G__27502;
seen_rest_QMARK_ = G__27503;
continue;
}

}
}
} else {
return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__27492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),(new cljs.core.List(null,cljs.core.cst$sym$if,(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.seq_QMARK_,(new cljs.core.List(null,gmap,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.apply,(new cljs.core.List(null,cljs.core.hash_map,(new cljs.core.List(null,gmap,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,gmap,null,(1),null)),(2),null)),(3),null)),(4),null)));
var fexpr__27491 = ((function (G__27492,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__27492,gmap,defaults,pvec,bents))
;
return fexpr__27491(G__27492);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__27481_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__27481_SHARP_);
}
})(),cljs.core.name(p1__27481_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__27482_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__27482_SHARP_);
}
})(),cljs.core.name(p1__27482_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27483_SHARP_,p2__27484_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27483_SHARP_,p2__27484_SHARP_,(function (){var fexpr__27493 = cljs.core.val(entry);
return (fexpr__27493.cljs$core$IFn$_invoke$arity$1 ? fexpr__27493.cljs$core$IFn$_invoke$arity$1(p2__27484_SHARP_) : fexpr__27493.call(null,p2__27484_SHARP_));
})());
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__27494 = cljs.core.key(entry);
return (fexpr__27494.cljs$core$IFn$_invoke$arity$1 ? fexpr__27494.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__27494.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$or], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bk__$1 = ((cljs.core.not(cljs.core.meta(bk)))?(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,bk,null,(1),null)),(2),null)):bk);
var bv = (function (){var temp__5718__auto__ = cljs.core.find(defaults,local);
if(cljs.core.truth_(temp__5718__auto__)){
var entry = temp__5718__auto__;
return (new cljs.core.List(null,cljs.core.get,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,(new cljs.core.List(null,cljs.core.val(entry),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return (new cljs.core.List(null,cljs.core.get,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,null,(1),null)),(2),null)),(3),null));
}
})();
var G__27504 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):sci$impl$destructure$destructure_STAR__$_pb(ret,bb,bv));
var G__27505 = cljs.core.next(bes);
ret = G__27504;
bes = G__27505;
continue;
} else {
return ret;
}
break;
}
});
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});
var process_entry = (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5718__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27485_SHARP_){
return (cljs.core.first(p1__27485_SHARP_) instanceof cljs.core.Keyword);
}),bents));
if(temp__5718__auto__){
var kwbs = temp__5718__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
sci.impl.destructure.destructure = (function sci$impl$destructure$destructure(b){
return sci.impl.destructure.destructure_STAR_(b);
});
