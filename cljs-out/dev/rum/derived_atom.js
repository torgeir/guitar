// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13801 = arguments.length;
switch (G__13801) {
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
var map__13802 = opts;
var map__13802__$1 = (((((!((map__13802 == null))))?(((((map__13802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13802):map__13802);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13802__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13802__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13804 = cljs.core.count(refs);
switch (G__13804) {
case (1):
var vec__13805 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805,(0),null);
return (function (){
var G__13808 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13808) : f.call(null,G__13808));
});

break;
case (2):
var vec__13809 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(1),null);
return (function (){
var G__13812 = cljs.core.deref(a);
var G__13813 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13812,G__13813) : f.call(null,G__13812,G__13813));
});

break;
case (3):
var vec__13814 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(2),null);
return (function (){
var G__13817 = cljs.core.deref(a);
var G__13818 = cljs.core.deref(b);
var G__13819 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13817,G__13818,G__13819) : f.call(null,G__13817,G__13818,G__13819));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13820 = ref;
cljs.core.reset_BANG_(G__13820,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13820;
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
var seq__13821_13827 = cljs.core.seq(refs);
var chunk__13822_13828 = null;
var count__13823_13829 = (0);
var i__13824_13830 = (0);
while(true){
if((i__13824_13830 < count__13823_13829)){
var ref_13831__$1 = chunk__13822_13828.cljs$core$IIndexed$_nth$arity$2(null,i__13824_13830);
cljs.core.add_watch(ref_13831__$1,key,watch);


var G__13832 = seq__13821_13827;
var G__13833 = chunk__13822_13828;
var G__13834 = count__13823_13829;
var G__13835 = (i__13824_13830 + (1));
seq__13821_13827 = G__13832;
chunk__13822_13828 = G__13833;
count__13823_13829 = G__13834;
i__13824_13830 = G__13835;
continue;
} else {
var temp__5720__auto___13836 = cljs.core.seq(seq__13821_13827);
if(temp__5720__auto___13836){
var seq__13821_13837__$1 = temp__5720__auto___13836;
if(cljs.core.chunked_seq_QMARK_(seq__13821_13837__$1)){
var c__4556__auto___13838 = cljs.core.chunk_first(seq__13821_13837__$1);
var G__13839 = cljs.core.chunk_rest(seq__13821_13837__$1);
var G__13840 = c__4556__auto___13838;
var G__13841 = cljs.core.count(c__4556__auto___13838);
var G__13842 = (0);
seq__13821_13827 = G__13839;
chunk__13822_13828 = G__13840;
count__13823_13829 = G__13841;
i__13824_13830 = G__13842;
continue;
} else {
var ref_13843__$1 = cljs.core.first(seq__13821_13837__$1);
cljs.core.add_watch(ref_13843__$1,key,watch);


var G__13844 = cljs.core.next(seq__13821_13837__$1);
var G__13845 = null;
var G__13846 = (0);
var G__13847 = (0);
seq__13821_13827 = G__13844;
chunk__13822_13828 = G__13845;
count__13823_13829 = G__13846;
i__13824_13830 = G__13847;
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

