// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.maps');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.maps.map_keys = (function guitar$maps$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function guitar$maps$map_keys_$_iter__24273(s__24274){
return (new cljs.core.LazySeq(null,(function (){
var s__24274__$1 = s__24274;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24274__$1);
if(temp__5720__auto__){
var s__24274__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24274__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24274__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24276 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24275 = (0);
while(true){
if((i__24275 < size__4528__auto__)){
var vec__24277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24275);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24277,(1),null);
cljs.core.chunk_append(b__24276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__24283 = (i__24275 + (1));
i__24275 = G__24283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24276),guitar$maps$map_keys_$_iter__24273(cljs.core.chunk_rest(s__24274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24276),null);
}
} else {
var vec__24280 = cljs.core.first(s__24274__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24280,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),guitar$maps$map_keys_$_iter__24273(cljs.core.rest(s__24274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
