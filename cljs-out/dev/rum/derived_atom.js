// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13725 = arguments.length;
switch (G__13725) {
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
var map__13726 = opts;
var map__13726__$1 = (((((!((map__13726 == null))))?(((((map__13726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13726):map__13726);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13726__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13726__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13728 = cljs.core.count(refs);
switch (G__13728) {
case (1):
var vec__13729 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13729,(0),null);
return (function (){
var G__13732 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13732) : f.call(null,G__13732));
});

break;
case (2):
var vec__13733 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(1),null);
return (function (){
var G__13736 = cljs.core.deref(a);
var G__13737 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13736,G__13737) : f.call(null,G__13736,G__13737));
});

break;
case (3):
var vec__13738 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13738,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13738,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13738,(2),null);
return (function (){
var G__13741 = cljs.core.deref(a);
var G__13742 = cljs.core.deref(b);
var G__13743 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13741,G__13742,G__13743) : f.call(null,G__13741,G__13742,G__13743));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13744 = ref;
cljs.core.reset_BANG_(G__13744,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13744;
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
var seq__13745_13751 = cljs.core.seq(refs);
var chunk__13746_13752 = null;
var count__13747_13753 = (0);
var i__13748_13754 = (0);
while(true){
if((i__13748_13754 < count__13747_13753)){
var ref_13755__$1 = chunk__13746_13752.cljs$core$IIndexed$_nth$arity$2(null,i__13748_13754);
cljs.core.add_watch(ref_13755__$1,key,watch);


var G__13756 = seq__13745_13751;
var G__13757 = chunk__13746_13752;
var G__13758 = count__13747_13753;
var G__13759 = (i__13748_13754 + (1));
seq__13745_13751 = G__13756;
chunk__13746_13752 = G__13757;
count__13747_13753 = G__13758;
i__13748_13754 = G__13759;
continue;
} else {
var temp__5720__auto___13760 = cljs.core.seq(seq__13745_13751);
if(temp__5720__auto___13760){
var seq__13745_13761__$1 = temp__5720__auto___13760;
if(cljs.core.chunked_seq_QMARK_(seq__13745_13761__$1)){
var c__4556__auto___13762 = cljs.core.chunk_first(seq__13745_13761__$1);
var G__13763 = cljs.core.chunk_rest(seq__13745_13761__$1);
var G__13764 = c__4556__auto___13762;
var G__13765 = cljs.core.count(c__4556__auto___13762);
var G__13766 = (0);
seq__13745_13751 = G__13763;
chunk__13746_13752 = G__13764;
count__13747_13753 = G__13765;
i__13748_13754 = G__13766;
continue;
} else {
var ref_13767__$1 = cljs.core.first(seq__13745_13761__$1);
cljs.core.add_watch(ref_13767__$1,key,watch);


var G__13768 = cljs.core.next(seq__13745_13761__$1);
var G__13769 = null;
var G__13770 = (0);
var G__13771 = (0);
seq__13745_13751 = G__13768;
chunk__13746_13752 = G__13769;
count__13747_13753 = G__13770;
i__13748_13754 = G__13771;
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

