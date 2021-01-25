// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13007 = arguments.length;
switch (G__13007) {
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
var map__13008 = opts;
var map__13008__$1 = (((((!((map__13008 == null))))?(((((map__13008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13008):map__13008);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13008__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13008__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13010 = cljs.core.count(refs);
switch (G__13010) {
case (1):
var vec__13011 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(0),null);
return (function (){
var G__13014 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13014) : f.call(null,G__13014));
});

break;
case (2):
var vec__13015 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(1),null);
return (function (){
var G__13018 = cljs.core.deref(a);
var G__13019 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13018,G__13019) : f.call(null,G__13018,G__13019));
});

break;
case (3):
var vec__13020 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13020,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13020,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13020,(2),null);
return (function (){
var G__13023 = cljs.core.deref(a);
var G__13024 = cljs.core.deref(b);
var G__13025 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13023,G__13024,G__13025) : f.call(null,G__13023,G__13024,G__13025));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13026 = ref;
cljs.core.reset_BANG_(G__13026,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13026;
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
var seq__13027_13033 = cljs.core.seq(refs);
var chunk__13028_13034 = null;
var count__13029_13035 = (0);
var i__13030_13036 = (0);
while(true){
if((i__13030_13036 < count__13029_13035)){
var ref_13037__$1 = chunk__13028_13034.cljs$core$IIndexed$_nth$arity$2(null,i__13030_13036);
cljs.core.add_watch(ref_13037__$1,key,watch);


var G__13038 = seq__13027_13033;
var G__13039 = chunk__13028_13034;
var G__13040 = count__13029_13035;
var G__13041 = (i__13030_13036 + (1));
seq__13027_13033 = G__13038;
chunk__13028_13034 = G__13039;
count__13029_13035 = G__13040;
i__13030_13036 = G__13041;
continue;
} else {
var temp__5720__auto___13042 = cljs.core.seq(seq__13027_13033);
if(temp__5720__auto___13042){
var seq__13027_13043__$1 = temp__5720__auto___13042;
if(cljs.core.chunked_seq_QMARK_(seq__13027_13043__$1)){
var c__4556__auto___13044 = cljs.core.chunk_first(seq__13027_13043__$1);
var G__13045 = cljs.core.chunk_rest(seq__13027_13043__$1);
var G__13046 = c__4556__auto___13044;
var G__13047 = cljs.core.count(c__4556__auto___13044);
var G__13048 = (0);
seq__13027_13033 = G__13045;
chunk__13028_13034 = G__13046;
count__13029_13035 = G__13047;
i__13030_13036 = G__13048;
continue;
} else {
var ref_13049__$1 = cljs.core.first(seq__13027_13043__$1);
cljs.core.add_watch(ref_13049__$1,key,watch);


var G__13050 = cljs.core.next(seq__13027_13043__$1);
var G__13051 = null;
var G__13052 = (0);
var G__13053 = (0);
seq__13027_13033 = G__13050;
chunk__13028_13034 = G__13051;
count__13029_13035 = G__13052;
i__13030_13036 = G__13053;
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

