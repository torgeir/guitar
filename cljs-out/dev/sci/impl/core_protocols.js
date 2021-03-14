// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.core_protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16627 = cljs.core.get_global_hierarchy;
return (fexpr__16627.cljs$core$IFn$_invoke$arity$0 ? fexpr__16627.cljs$core$IFn$_invoke$arity$0() : fexpr__16627.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__16628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_deref);
return (fexpr__16628.cljs$core$IFn$_invoke$arity$1 ? fexpr__16628.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__16628.call(null,ref));
}));
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return (sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1 ? sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x) : sci.impl.core_protocols._deref.call(null,x));
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(cljs.core.cst$sym$cljs$core,null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IDeref,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16629 = cljs.core.get_global_hierarchy;
return (fexpr__16629.cljs$core$IFn$_invoke$arity$0 ? fexpr__16629.cljs$core$IFn$_invoke$arity$0() : fexpr__16629.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16630 = cljs.core.get_global_hierarchy;
return (fexpr__16630.cljs$core$IFn$_invoke$arity$0 ? fexpr__16630.cljs$core$IFn$_invoke$arity$0() : fexpr__16630.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function() {
var G__16634 = null;
var G__16634__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__16631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__16631.cljs$core$IFn$_invoke$arity$2 ? fexpr__16631.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__16631.call(null,ref,f));
});
var G__16634__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__16632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__16632.cljs$core$IFn$_invoke$arity$3 ? fexpr__16632.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__16632.call(null,ref,f,a1));
});
var G__16634__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__16633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__16633.cljs$core$IFn$_invoke$arity$4 ? fexpr__16633.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__16633.call(null,ref,f,a1,a2));
});
var G__16634__5 = (function() { 
var G__16635__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__16635 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__16636__i = 0, G__16636__a = new Array(arguments.length -  4);
while (G__16636__i < G__16636__a.length) {G__16636__a[G__16636__i] = arguments[G__16636__i + 4]; ++G__16636__i;}
  args = new cljs.core.IndexedSeq(G__16636__a,0,null);
} 
return G__16635__delegate.call(this,ref,f,a1,a2,args);};
G__16635.cljs$lang$maxFixedArity = 4;
G__16635.cljs$lang$applyTo = (function (arglist__16637){
var ref = cljs.core.first(arglist__16637);
arglist__16637 = cljs.core.next(arglist__16637);
var f = cljs.core.first(arglist__16637);
arglist__16637 = cljs.core.next(arglist__16637);
var a1 = cljs.core.first(arglist__16637);
arglist__16637 = cljs.core.next(arglist__16637);
var a2 = cljs.core.first(arglist__16637);
var args = cljs.core.rest(arglist__16637);
return G__16635__delegate(ref,f,a1,a2,args);
});
G__16635.cljs$core$IFn$_invoke$arity$variadic = G__16635__delegate;
return G__16635;
})()
;
G__16634 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__16634__2.call(this,ref,f);
case 3:
return G__16634__3.call(this,ref,f,a1);
case 4:
return G__16634__4.call(this,ref,f,a1,a2);
default:
var G__16638 = null;
if (arguments.length > 4) {
var G__16639__i = 0, G__16639__a = new Array(arguments.length -  4);
while (G__16639__i < G__16639__a.length) {G__16639__a[G__16639__i] = arguments[G__16639__i + 4]; ++G__16639__i;}
G__16638 = new cljs.core.IndexedSeq(G__16639__a,0,null);
}
return G__16634__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__16638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16634.cljs$lang$maxFixedArity = 4;
G__16634.cljs$lang$applyTo = G__16634__5.cljs$lang$applyTo;
G__16634.cljs$core$IFn$_invoke$arity$2 = G__16634__2;
G__16634.cljs$core$IFn$_invoke$arity$3 = G__16634__3;
G__16634.cljs$core$IFn$_invoke$arity$4 = G__16634__4;
G__16634.cljs$core$IFn$_invoke$arity$variadic = G__16634__5.cljs$core$IFn$_invoke$arity$variadic;
return G__16634;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__16640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_reset_BANG_);
return (fexpr__16640.cljs$core$IFn$_invoke$arity$2 ? fexpr__16640.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__16640.call(null,ref,v));
}));
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__16641__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__16641 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__16642__i = 0, G__16642__a = new Array(arguments.length -  2);
while (G__16642__i < G__16642__a.length) {G__16642__a[G__16642__i] = arguments[G__16642__i + 2]; ++G__16642__i;}
  args = new cljs.core.IndexedSeq(G__16642__a,0,null);
} 
return G__16641__delegate.call(this,ref,f,args);};
G__16641.cljs$lang$maxFixedArity = 2;
G__16641.cljs$lang$applyTo = (function (arglist__16643){
var ref = cljs.core.first(arglist__16643);
arglist__16643 = cljs.core.next(arglist__16643);
var f = cljs.core.first(arglist__16643);
var args = cljs.core.rest(arglist__16643);
return G__16641__delegate(ref,f,args);
});
G__16641.cljs$core$IFn$_invoke$arity$variadic = G__16641__delegate;
return G__16641;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}));
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16647 = arguments.length;
var i__4737__auto___16648 = (0);
while(true){
if((i__4737__auto___16648 < len__4736__auto___16647)){
args__4742__auto__.push((arguments[i__4737__auto___16648]));

var G__16649 = (i__4737__auto___16648 + (1));
i__4737__auto___16648 = G__16649;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return (sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f) : sci.impl.core_protocols._swap_BANG_.call(null,ref,f));
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq16644){
var G__16645 = cljs.core.first(seq16644);
var seq16644__$1 = cljs.core.next(seq16644);
var G__16646 = cljs.core.first(seq16644__$1);
var seq16644__$2 = cljs.core.next(seq16644__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16645,G__16646,seq16644__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return (sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v) : sci.impl.core_protocols._reset_BANG_.call(null,ref,v));
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$ISwap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IReset,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
