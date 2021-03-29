// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.maps');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.maps.map_keys = (function guitar$maps$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function guitar$maps$map_keys_$_iter__24288(s__24289){
return (new cljs.core.LazySeq(null,(function (){
var s__24289__$1 = s__24289;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24289__$1);
if(temp__5720__auto__){
var s__24289__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24289__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24289__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24291 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24290 = (0);
while(true){
if((i__24290 < size__4528__auto__)){
var vec__24292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24290);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24292,(1),null);
cljs.core.chunk_append(b__24291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__24298 = (i__24290 + (1));
i__24290 = G__24298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24291),guitar$maps$map_keys_$_iter__24288(cljs.core.chunk_rest(s__24289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24291),null);
}
} else {
var vec__24295 = cljs.core.first(s__24289__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24295,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),guitar$maps$map_keys_$_iter__24288(cljs.core.rest(s__24289__$2)));
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
guitar.maps.update_maps = (function guitar$maps$update_maps(init,state,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,k,f);
}),init,state);
});
