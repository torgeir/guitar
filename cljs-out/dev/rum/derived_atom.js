// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__10631 = arguments.length;
switch (G__10631) {
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
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__10632 = opts;
var map__10632__$1 = (((((!((map__10632 == null))))?(((((map__10632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10632):map__10632);
var ref = cljs.core.get.call(null,map__10632__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__10632__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__10634 = cljs.core.count.call(null,refs);
switch (G__10634) {
case (1):
var vec__10635 = refs;
var a = cljs.core.nth.call(null,vec__10635,(0),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});

break;
case (2):
var vec__10638 = refs;
var a = cljs.core.nth.call(null,vec__10638,(0),null);
var b = cljs.core.nth.call(null,vec__10638,(1),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});

break;
case (3):
var vec__10641 = refs;
var a = cljs.core.nth.call(null,vec__10641,(0),null);
var b = cljs.core.nth.call(null,vec__10641,(1),null);
var c = cljs.core.nth.call(null,vec__10641,(2),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});

break;
default:
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__10644 = ref;
cljs.core.reset_BANG_.call(null,G__10644,recalc.call(null));

return G__10644;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
}));
var seq__10645_10651 = cljs.core.seq.call(null,refs);
var chunk__10646_10652 = null;
var count__10647_10653 = (0);
var i__10648_10654 = (0);
while(true){
if((i__10648_10654 < count__10647_10653)){
var ref_10655__$1 = cljs.core._nth.call(null,chunk__10646_10652,i__10648_10654);
cljs.core.add_watch.call(null,ref_10655__$1,key,watch);


var G__10656 = seq__10645_10651;
var G__10657 = chunk__10646_10652;
var G__10658 = count__10647_10653;
var G__10659 = (i__10648_10654 + (1));
seq__10645_10651 = G__10656;
chunk__10646_10652 = G__10657;
count__10647_10653 = G__10658;
i__10648_10654 = G__10659;
continue;
} else {
var temp__5720__auto___10660 = cljs.core.seq.call(null,seq__10645_10651);
if(temp__5720__auto___10660){
var seq__10645_10661__$1 = temp__5720__auto___10660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10645_10661__$1)){
var c__4556__auto___10662 = cljs.core.chunk_first.call(null,seq__10645_10661__$1);
var G__10663 = cljs.core.chunk_rest.call(null,seq__10645_10661__$1);
var G__10664 = c__4556__auto___10662;
var G__10665 = cljs.core.count.call(null,c__4556__auto___10662);
var G__10666 = (0);
seq__10645_10651 = G__10663;
chunk__10646_10652 = G__10664;
count__10647_10653 = G__10665;
i__10648_10654 = G__10666;
continue;
} else {
var ref_10667__$1 = cljs.core.first.call(null,seq__10645_10661__$1);
cljs.core.add_watch.call(null,ref_10667__$1,key,watch);


var G__10668 = cljs.core.next.call(null,seq__10645_10661__$1);
var G__10669 = null;
var G__10670 = (0);
var G__10671 = (0);
seq__10645_10651 = G__10668;
chunk__10646_10652 = G__10669;
count__10647_10653 = G__10670;
i__10648_10654 = G__10671;
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

