// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13853 = arguments.length;
switch (G__13853) {
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
var map__13854 = opts;
var map__13854__$1 = (((((!((map__13854 == null))))?(((((map__13854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13854):map__13854);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13854__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13856 = cljs.core.count(refs);
switch (G__13856) {
case (1):
var vec__13857 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
return (function (){
var G__13860 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13860) : f.call(null,G__13860));
});

break;
case (2):
var vec__13861 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13861,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13861,(1),null);
return (function (){
var G__13864 = cljs.core.deref(a);
var G__13865 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13864,G__13865) : f.call(null,G__13864,G__13865));
});

break;
case (3):
var vec__13866 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(2),null);
return (function (){
var G__13869 = cljs.core.deref(a);
var G__13870 = cljs.core.deref(b);
var G__13871 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13869,G__13870,G__13871) : f.call(null,G__13869,G__13870,G__13871));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13872 = ref;
cljs.core.reset_BANG_(G__13872,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13872;
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
var seq__13873_13879 = cljs.core.seq(refs);
var chunk__13874_13880 = null;
var count__13875_13881 = (0);
var i__13876_13882 = (0);
while(true){
if((i__13876_13882 < count__13875_13881)){
var ref_13883__$1 = chunk__13874_13880.cljs$core$IIndexed$_nth$arity$2(null,i__13876_13882);
cljs.core.add_watch(ref_13883__$1,key,watch);


var G__13884 = seq__13873_13879;
var G__13885 = chunk__13874_13880;
var G__13886 = count__13875_13881;
var G__13887 = (i__13876_13882 + (1));
seq__13873_13879 = G__13884;
chunk__13874_13880 = G__13885;
count__13875_13881 = G__13886;
i__13876_13882 = G__13887;
continue;
} else {
var temp__5720__auto___13888 = cljs.core.seq(seq__13873_13879);
if(temp__5720__auto___13888){
var seq__13873_13889__$1 = temp__5720__auto___13888;
if(cljs.core.chunked_seq_QMARK_(seq__13873_13889__$1)){
var c__4556__auto___13890 = cljs.core.chunk_first(seq__13873_13889__$1);
var G__13891 = cljs.core.chunk_rest(seq__13873_13889__$1);
var G__13892 = c__4556__auto___13890;
var G__13893 = cljs.core.count(c__4556__auto___13890);
var G__13894 = (0);
seq__13873_13879 = G__13891;
chunk__13874_13880 = G__13892;
count__13875_13881 = G__13893;
i__13876_13882 = G__13894;
continue;
} else {
var ref_13895__$1 = cljs.core.first(seq__13873_13889__$1);
cljs.core.add_watch(ref_13895__$1,key,watch);


var G__13896 = cljs.core.next(seq__13873_13889__$1);
var G__13897 = null;
var G__13898 = (0);
var G__13899 = (0);
seq__13873_13879 = G__13896;
chunk__13874_13880 = G__13897;
count__13875_13881 = G__13898;
i__13876_13882 = G__13899;
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

