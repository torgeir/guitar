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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17281 = cljs.core.get_global_hierarchy;
return (fexpr__17281.cljs$core$IFn$_invoke$arity$0 ? fexpr__17281.cljs$core$IFn$_invoke$arity$0() : fexpr__17281.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__17282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_deref);
return (fexpr__17282.cljs$core$IFn$_invoke$arity$1 ? fexpr__17282.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__17282.call(null,ref));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17283 = cljs.core.get_global_hierarchy;
return (fexpr__17283.cljs$core$IFn$_invoke$arity$0 ? fexpr__17283.cljs$core$IFn$_invoke$arity$0() : fexpr__17283.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17284 = cljs.core.get_global_hierarchy;
return (fexpr__17284.cljs$core$IFn$_invoke$arity$0 ? fexpr__17284.cljs$core$IFn$_invoke$arity$0() : fexpr__17284.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function() {
var G__17288 = null;
var G__17288__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__17285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__17285.cljs$core$IFn$_invoke$arity$2 ? fexpr__17285.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__17285.call(null,ref,f));
});
var G__17288__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__17286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__17286.cljs$core$IFn$_invoke$arity$3 ? fexpr__17286.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__17286.call(null,ref,f,a1));
});
var G__17288__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__17287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__17287.cljs$core$IFn$_invoke$arity$4 ? fexpr__17287.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__17287.call(null,ref,f,a1,a2));
});
var G__17288__5 = (function() { 
var G__17289__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__17289 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__17290__i = 0, G__17290__a = new Array(arguments.length -  4);
while (G__17290__i < G__17290__a.length) {G__17290__a[G__17290__i] = arguments[G__17290__i + 4]; ++G__17290__i;}
  args = new cljs.core.IndexedSeq(G__17290__a,0,null);
} 
return G__17289__delegate.call(this,ref,f,a1,a2,args);};
G__17289.cljs$lang$maxFixedArity = 4;
G__17289.cljs$lang$applyTo = (function (arglist__17291){
var ref = cljs.core.first(arglist__17291);
arglist__17291 = cljs.core.next(arglist__17291);
var f = cljs.core.first(arglist__17291);
arglist__17291 = cljs.core.next(arglist__17291);
var a1 = cljs.core.first(arglist__17291);
arglist__17291 = cljs.core.next(arglist__17291);
var a2 = cljs.core.first(arglist__17291);
var args = cljs.core.rest(arglist__17291);
return G__17289__delegate(ref,f,a1,a2,args);
});
G__17289.cljs$core$IFn$_invoke$arity$variadic = G__17289__delegate;
return G__17289;
})()
;
G__17288 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__17288__2.call(this,ref,f);
case 3:
return G__17288__3.call(this,ref,f,a1);
case 4:
return G__17288__4.call(this,ref,f,a1,a2);
default:
var G__17292 = null;
if (arguments.length > 4) {
var G__17293__i = 0, G__17293__a = new Array(arguments.length -  4);
while (G__17293__i < G__17293__a.length) {G__17293__a[G__17293__i] = arguments[G__17293__i + 4]; ++G__17293__i;}
G__17292 = new cljs.core.IndexedSeq(G__17293__a,0,null);
}
return G__17288__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__17292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17288.cljs$lang$maxFixedArity = 4;
G__17288.cljs$lang$applyTo = G__17288__5.cljs$lang$applyTo;
G__17288.cljs$core$IFn$_invoke$arity$2 = G__17288__2;
G__17288.cljs$core$IFn$_invoke$arity$3 = G__17288__3;
G__17288.cljs$core$IFn$_invoke$arity$4 = G__17288__4;
G__17288.cljs$core$IFn$_invoke$arity$variadic = G__17288__5.cljs$core$IFn$_invoke$arity$variadic;
return G__17288;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__17294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_reset_BANG_);
return (fexpr__17294.cljs$core$IFn$_invoke$arity$2 ? fexpr__17294.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__17294.call(null,ref,v));
}));
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__17295__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__17295 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17296__i = 0, G__17296__a = new Array(arguments.length -  2);
while (G__17296__i < G__17296__a.length) {G__17296__a[G__17296__i] = arguments[G__17296__i + 2]; ++G__17296__i;}
  args = new cljs.core.IndexedSeq(G__17296__a,0,null);
} 
return G__17295__delegate.call(this,ref,f,args);};
G__17295.cljs$lang$maxFixedArity = 2;
G__17295.cljs$lang$applyTo = (function (arglist__17297){
var ref = cljs.core.first(arglist__17297);
arglist__17297 = cljs.core.next(arglist__17297);
var f = cljs.core.first(arglist__17297);
var args = cljs.core.rest(arglist__17297);
return G__17295__delegate(ref,f,args);
});
G__17295.cljs$core$IFn$_invoke$arity$variadic = G__17295__delegate;
return G__17295;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}));
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17301 = arguments.length;
var i__4737__auto___17302 = (0);
while(true){
if((i__4737__auto___17302 < len__4736__auto___17301)){
args__4742__auto__.push((arguments[i__4737__auto___17302]));

var G__17303 = (i__4737__auto___17302 + (1));
i__4737__auto___17302 = G__17303;
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
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq17298){
var G__17299 = cljs.core.first(seq17298);
var seq17298__$1 = cljs.core.next(seq17298);
var G__17300 = cljs.core.first(seq17298__$1);
var seq17298__$2 = cljs.core.next(seq17298__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17299,G__17300,seq17298__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return (sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v) : sci.impl.core_protocols._reset_BANG_.call(null,ref,v));
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$ISwap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IReset,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
