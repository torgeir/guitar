// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13019 = arguments.length;
switch (G__13019) {
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
var map__13020 = opts;
var map__13020__$1 = (((((!((map__13020 == null))))?(((((map__13020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13020):map__13020);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13020__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13020__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13022 = cljs.core.count(refs);
switch (G__13022) {
case (1):
var vec__13023 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(0),null);
return (function (){
var G__13026 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13026) : f.call(null,G__13026));
});

break;
case (2):
var vec__13027 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13027,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13027,(1),null);
return (function (){
var G__13030 = cljs.core.deref(a);
var G__13031 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13030,G__13031) : f.call(null,G__13030,G__13031));
});

break;
case (3):
var vec__13032 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(2),null);
return (function (){
var G__13035 = cljs.core.deref(a);
var G__13036 = cljs.core.deref(b);
var G__13037 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13035,G__13036,G__13037) : f.call(null,G__13035,G__13036,G__13037));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13038 = ref;
cljs.core.reset_BANG_(G__13038,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13038;
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
var seq__13039_13045 = cljs.core.seq(refs);
var chunk__13040_13046 = null;
var count__13041_13047 = (0);
var i__13042_13048 = (0);
while(true){
if((i__13042_13048 < count__13041_13047)){
var ref_13049__$1 = chunk__13040_13046.cljs$core$IIndexed$_nth$arity$2(null,i__13042_13048);
cljs.core.add_watch(ref_13049__$1,key,watch);


var G__13050 = seq__13039_13045;
var G__13051 = chunk__13040_13046;
var G__13052 = count__13041_13047;
var G__13053 = (i__13042_13048 + (1));
seq__13039_13045 = G__13050;
chunk__13040_13046 = G__13051;
count__13041_13047 = G__13052;
i__13042_13048 = G__13053;
continue;
} else {
var temp__5720__auto___13054 = cljs.core.seq(seq__13039_13045);
if(temp__5720__auto___13054){
var seq__13039_13055__$1 = temp__5720__auto___13054;
if(cljs.core.chunked_seq_QMARK_(seq__13039_13055__$1)){
var c__4556__auto___13056 = cljs.core.chunk_first(seq__13039_13055__$1);
var G__13057 = cljs.core.chunk_rest(seq__13039_13055__$1);
var G__13058 = c__4556__auto___13056;
var G__13059 = cljs.core.count(c__4556__auto___13056);
var G__13060 = (0);
seq__13039_13045 = G__13057;
chunk__13040_13046 = G__13058;
count__13041_13047 = G__13059;
i__13042_13048 = G__13060;
continue;
} else {
var ref_13061__$1 = cljs.core.first(seq__13039_13055__$1);
cljs.core.add_watch(ref_13061__$1,key,watch);


var G__13062 = cljs.core.next(seq__13039_13055__$1);
var G__13063 = null;
var G__13064 = (0);
var G__13065 = (0);
seq__13039_13045 = G__13062;
chunk__13040_13046 = G__13063;
count__13041_13047 = G__13064;
i__13042_13048 = G__13065;
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

