// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__22922 = arguments.length;
switch (G__22922) {
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
var map__22923 = opts;
var map__22923__$1 = (((((!((map__22923 == null))))?(((((map__22923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22923):map__22923);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22923__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22923__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__22925 = cljs.core.count(refs);
switch (G__22925) {
case (1):
var vec__22926 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(0),null);
return (function (){
var G__22929 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22929) : f.call(null,G__22929));
});

break;
case (2):
var vec__22930 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22930,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22930,(1),null);
return (function (){
var G__22933 = cljs.core.deref(a);
var G__22934 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22933,G__22934) : f.call(null,G__22933,G__22934));
});

break;
case (3):
var vec__22935 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(2),null);
return (function (){
var G__22938 = cljs.core.deref(a);
var G__22939 = cljs.core.deref(b);
var G__22940 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22938,G__22939,G__22940) : f.call(null,G__22938,G__22939,G__22940));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22941 = ref;
cljs.core.reset_BANG_(G__22941,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__22941;
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
var seq__22942_22948 = cljs.core.seq(refs);
var chunk__22943_22949 = null;
var count__22944_22950 = (0);
var i__22945_22951 = (0);
while(true){
if((i__22945_22951 < count__22944_22950)){
var ref_22952__$1 = chunk__22943_22949.cljs$core$IIndexed$_nth$arity$2(null,i__22945_22951);
cljs.core.add_watch(ref_22952__$1,key,watch);


var G__22953 = seq__22942_22948;
var G__22954 = chunk__22943_22949;
var G__22955 = count__22944_22950;
var G__22956 = (i__22945_22951 + (1));
seq__22942_22948 = G__22953;
chunk__22943_22949 = G__22954;
count__22944_22950 = G__22955;
i__22945_22951 = G__22956;
continue;
} else {
var temp__5720__auto___22957 = cljs.core.seq(seq__22942_22948);
if(temp__5720__auto___22957){
var seq__22942_22958__$1 = temp__5720__auto___22957;
if(cljs.core.chunked_seq_QMARK_(seq__22942_22958__$1)){
var c__4556__auto___22959 = cljs.core.chunk_first(seq__22942_22958__$1);
var G__22960 = cljs.core.chunk_rest(seq__22942_22958__$1);
var G__22961 = c__4556__auto___22959;
var G__22962 = cljs.core.count(c__4556__auto___22959);
var G__22963 = (0);
seq__22942_22948 = G__22960;
chunk__22943_22949 = G__22961;
count__22944_22950 = G__22962;
i__22945_22951 = G__22963;
continue;
} else {
var ref_22964__$1 = cljs.core.first(seq__22942_22958__$1);
cljs.core.add_watch(ref_22964__$1,key,watch);


var G__22965 = cljs.core.next(seq__22942_22958__$1);
var G__22966 = null;
var G__22967 = (0);
var G__22968 = (0);
seq__22942_22948 = G__22965;
chunk__22943_22949 = G__22966;
count__22944_22950 = G__22967;
i__22945_22951 = G__22968;
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

