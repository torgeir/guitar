// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13017 = arguments.length;
switch (G__13017) {
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
var map__13018 = opts;
var map__13018__$1 = (((((!((map__13018 == null))))?(((((map__13018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13018):map__13018);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13018__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13018__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13020 = cljs.core.count(refs);
switch (G__13020) {
case (1):
var vec__13021 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(0),null);
return (function (){
var G__13024 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13024) : f.call(null,G__13024));
});

break;
case (2):
var vec__13025 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(1),null);
return (function (){
var G__13028 = cljs.core.deref(a);
var G__13029 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13028,G__13029) : f.call(null,G__13028,G__13029));
});

break;
case (3):
var vec__13030 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13030,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13030,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13030,(2),null);
return (function (){
var G__13033 = cljs.core.deref(a);
var G__13034 = cljs.core.deref(b);
var G__13035 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13033,G__13034,G__13035) : f.call(null,G__13033,G__13034,G__13035));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13036 = ref;
cljs.core.reset_BANG_(G__13036,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13036;
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
var seq__13037_13043 = cljs.core.seq(refs);
var chunk__13038_13044 = null;
var count__13039_13045 = (0);
var i__13040_13046 = (0);
while(true){
if((i__13040_13046 < count__13039_13045)){
var ref_13047__$1 = chunk__13038_13044.cljs$core$IIndexed$_nth$arity$2(null,i__13040_13046);
cljs.core.add_watch(ref_13047__$1,key,watch);


var G__13048 = seq__13037_13043;
var G__13049 = chunk__13038_13044;
var G__13050 = count__13039_13045;
var G__13051 = (i__13040_13046 + (1));
seq__13037_13043 = G__13048;
chunk__13038_13044 = G__13049;
count__13039_13045 = G__13050;
i__13040_13046 = G__13051;
continue;
} else {
var temp__5720__auto___13052 = cljs.core.seq(seq__13037_13043);
if(temp__5720__auto___13052){
var seq__13037_13053__$1 = temp__5720__auto___13052;
if(cljs.core.chunked_seq_QMARK_(seq__13037_13053__$1)){
var c__4556__auto___13054 = cljs.core.chunk_first(seq__13037_13053__$1);
var G__13055 = cljs.core.chunk_rest(seq__13037_13053__$1);
var G__13056 = c__4556__auto___13054;
var G__13057 = cljs.core.count(c__4556__auto___13054);
var G__13058 = (0);
seq__13037_13043 = G__13055;
chunk__13038_13044 = G__13056;
count__13039_13045 = G__13057;
i__13040_13046 = G__13058;
continue;
} else {
var ref_13059__$1 = cljs.core.first(seq__13037_13053__$1);
cljs.core.add_watch(ref_13059__$1,key,watch);


var G__13060 = cljs.core.next(seq__13037_13053__$1);
var G__13061 = null;
var G__13062 = (0);
var G__13063 = (0);
seq__13037_13043 = G__13060;
chunk__13038_13044 = G__13061;
count__13039_13045 = G__13062;
i__13040_13046 = G__13063;
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

