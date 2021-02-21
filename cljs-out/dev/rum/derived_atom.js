// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13722 = arguments.length;
switch (G__13722) {
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
var map__13723 = opts;
var map__13723__$1 = (((((!((map__13723 == null))))?(((((map__13723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13723):map__13723);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13723__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13723__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13725 = cljs.core.count(refs);
switch (G__13725) {
case (1):
var vec__13726 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(0),null);
return (function (){
var G__13729 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13729) : f.call(null,G__13729));
});

break;
case (2):
var vec__13730 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(1),null);
return (function (){
var G__13733 = cljs.core.deref(a);
var G__13734 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13733,G__13734) : f.call(null,G__13733,G__13734));
});

break;
case (3):
var vec__13735 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13735,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13735,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13735,(2),null);
return (function (){
var G__13738 = cljs.core.deref(a);
var G__13739 = cljs.core.deref(b);
var G__13740 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13738,G__13739,G__13740) : f.call(null,G__13738,G__13739,G__13740));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13741 = ref;
cljs.core.reset_BANG_(G__13741,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13741;
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
var seq__13742_13748 = cljs.core.seq(refs);
var chunk__13743_13749 = null;
var count__13744_13750 = (0);
var i__13745_13751 = (0);
while(true){
if((i__13745_13751 < count__13744_13750)){
var ref_13752__$1 = chunk__13743_13749.cljs$core$IIndexed$_nth$arity$2(null,i__13745_13751);
cljs.core.add_watch(ref_13752__$1,key,watch);


var G__13753 = seq__13742_13748;
var G__13754 = chunk__13743_13749;
var G__13755 = count__13744_13750;
var G__13756 = (i__13745_13751 + (1));
seq__13742_13748 = G__13753;
chunk__13743_13749 = G__13754;
count__13744_13750 = G__13755;
i__13745_13751 = G__13756;
continue;
} else {
var temp__5720__auto___13757 = cljs.core.seq(seq__13742_13748);
if(temp__5720__auto___13757){
var seq__13742_13758__$1 = temp__5720__auto___13757;
if(cljs.core.chunked_seq_QMARK_(seq__13742_13758__$1)){
var c__4556__auto___13759 = cljs.core.chunk_first(seq__13742_13758__$1);
var G__13760 = cljs.core.chunk_rest(seq__13742_13758__$1);
var G__13761 = c__4556__auto___13759;
var G__13762 = cljs.core.count(c__4556__auto___13759);
var G__13763 = (0);
seq__13742_13748 = G__13760;
chunk__13743_13749 = G__13761;
count__13744_13750 = G__13762;
i__13745_13751 = G__13763;
continue;
} else {
var ref_13764__$1 = cljs.core.first(seq__13742_13758__$1);
cljs.core.add_watch(ref_13764__$1,key,watch);


var G__13765 = cljs.core.next(seq__13742_13758__$1);
var G__13766 = null;
var G__13767 = (0);
var G__13768 = (0);
seq__13742_13748 = G__13765;
chunk__13743_13749 = G__13766;
count__13744_13750 = G__13767;
i__13745_13751 = G__13768;
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

