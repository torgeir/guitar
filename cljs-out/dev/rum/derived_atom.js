// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__24554 = arguments.length;
switch (G__24554) {
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
var map__24555 = opts;
var map__24555__$1 = (((((!((map__24555 == null))))?(((((map__24555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24555):map__24555);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24555__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24555__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__24557 = cljs.core.count(refs);
switch (G__24557) {
case (1):
var vec__24558 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24558,(0),null);
return (function (){
var G__24561 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24561) : f.call(null,G__24561));
});

break;
case (2):
var vec__24562 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24562,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24562,(1),null);
return (function (){
var G__24565 = cljs.core.deref(a);
var G__24566 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24565,G__24566) : f.call(null,G__24565,G__24566));
});

break;
case (3):
var vec__24567 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(2),null);
return (function (){
var G__24570 = cljs.core.deref(a);
var G__24571 = cljs.core.deref(b);
var G__24572 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24570,G__24571,G__24572) : f.call(null,G__24570,G__24571,G__24572));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__24573 = ref;
cljs.core.reset_BANG_(G__24573,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__24573;
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
var seq__24574_24580 = cljs.core.seq(refs);
var chunk__24575_24581 = null;
var count__24576_24582 = (0);
var i__24577_24583 = (0);
while(true){
if((i__24577_24583 < count__24576_24582)){
var ref_24584__$1 = chunk__24575_24581.cljs$core$IIndexed$_nth$arity$2(null,i__24577_24583);
cljs.core.add_watch(ref_24584__$1,key,watch);


var G__24585 = seq__24574_24580;
var G__24586 = chunk__24575_24581;
var G__24587 = count__24576_24582;
var G__24588 = (i__24577_24583 + (1));
seq__24574_24580 = G__24585;
chunk__24575_24581 = G__24586;
count__24576_24582 = G__24587;
i__24577_24583 = G__24588;
continue;
} else {
var temp__5720__auto___24589 = cljs.core.seq(seq__24574_24580);
if(temp__5720__auto___24589){
var seq__24574_24590__$1 = temp__5720__auto___24589;
if(cljs.core.chunked_seq_QMARK_(seq__24574_24590__$1)){
var c__4556__auto___24591 = cljs.core.chunk_first(seq__24574_24590__$1);
var G__24592 = cljs.core.chunk_rest(seq__24574_24590__$1);
var G__24593 = c__4556__auto___24591;
var G__24594 = cljs.core.count(c__4556__auto___24591);
var G__24595 = (0);
seq__24574_24580 = G__24592;
chunk__24575_24581 = G__24593;
count__24576_24582 = G__24594;
i__24577_24583 = G__24595;
continue;
} else {
var ref_24596__$1 = cljs.core.first(seq__24574_24590__$1);
cljs.core.add_watch(ref_24596__$1,key,watch);


var G__24597 = cljs.core.next(seq__24574_24590__$1);
var G__24598 = null;
var G__24599 = (0);
var G__24600 = (0);
seq__24574_24580 = G__24597;
chunk__24575_24581 = G__24598;
count__24576_24582 = G__24599;
i__24577_24583 = G__24600;
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

