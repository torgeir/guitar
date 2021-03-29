// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__22931 = arguments.length;
switch (G__22931) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__22932 = opts;
var map__22932__$1 = (((((!((map__22932 == null))))?(((((map__22932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22932):map__22932);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22932__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22932__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__22934 = cljs.core.count(refs);
switch (G__22934) {
case (1):
var vec__22935 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(0),null);
return (function (){
var G__22938 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22938) : f.call(null,G__22938));
});

break;
case (2):
var vec__22939 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22939,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22939,(1),null);
return (function (){
var G__22942 = cljs.core.deref(a);
var G__22943 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22942,G__22943) : f.call(null,G__22942,G__22943));
});

break;
case (3):
var vec__22944 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(2),null);
return (function (){
var G__22947 = cljs.core.deref(a);
var G__22948 = cljs.core.deref(b);
var G__22949 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22947,G__22948,G__22949) : f.call(null,G__22947,G__22948,G__22949));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22950 = ref;
cljs.core.reset_BANG_(G__22950,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__22950;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__22951_22957 = cljs.core.seq(refs);
var chunk__22952_22958 = null;
var count__22953_22959 = (0);
var i__22954_22960 = (0);
while(true){
if((i__22954_22960 < count__22953_22959)){
var ref_22961__$1 = chunk__22952_22958.cljs$core$IIndexed$_nth$arity$2(null,i__22954_22960);
cljs.core.add_watch(ref_22961__$1,key,watch);


var G__22962 = seq__22951_22957;
var G__22963 = chunk__22952_22958;
var G__22964 = count__22953_22959;
var G__22965 = (i__22954_22960 + (1));
seq__22951_22957 = G__22962;
chunk__22952_22958 = G__22963;
count__22953_22959 = G__22964;
i__22954_22960 = G__22965;
continue;
} else {
var temp__5720__auto___22966 = cljs.core.seq(seq__22951_22957);
if(temp__5720__auto___22966){
var seq__22951_22967__$1 = temp__5720__auto___22966;
if(cljs.core.chunked_seq_QMARK_(seq__22951_22967__$1)){
var c__4556__auto___22968 = cljs.core.chunk_first(seq__22951_22967__$1);
var G__22969 = cljs.core.chunk_rest(seq__22951_22967__$1);
var G__22970 = c__4556__auto___22968;
var G__22971 = cljs.core.count(c__4556__auto___22968);
var G__22972 = (0);
seq__22951_22957 = G__22969;
chunk__22952_22958 = G__22970;
count__22953_22959 = G__22971;
i__22954_22960 = G__22972;
continue;
} else {
var ref_22973__$1 = cljs.core.first(seq__22951_22967__$1);
cljs.core.add_watch(ref_22973__$1,key,watch);


var G__22974 = cljs.core.next(seq__22951_22967__$1);
var G__22975 = null;
var G__22976 = (0);
var G__22977 = (0);
seq__22951_22957 = G__22974;
chunk__22952_22958 = G__22975;
count__22953_22959 = G__22976;
i__22954_22960 = G__22977;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);

