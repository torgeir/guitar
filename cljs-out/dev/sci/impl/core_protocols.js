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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14919 = cljs.core.get_global_hierarchy;
return (fexpr__14919.cljs$core$IFn$_invoke$arity$0 ? fexpr__14919.cljs$core$IFn$_invoke$arity$0() : fexpr__14919.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__14920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_deref);
return (fexpr__14920.cljs$core$IFn$_invoke$arity$1 ? fexpr__14920.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__14920.call(null,ref));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14921 = cljs.core.get_global_hierarchy;
return (fexpr__14921.cljs$core$IFn$_invoke$arity$0 ? fexpr__14921.cljs$core$IFn$_invoke$arity$0() : fexpr__14921.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14922 = cljs.core.get_global_hierarchy;
return (fexpr__14922.cljs$core$IFn$_invoke$arity$0 ? fexpr__14922.cljs$core$IFn$_invoke$arity$0() : fexpr__14922.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function() {
var G__14926 = null;
var G__14926__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__14923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__14923.cljs$core$IFn$_invoke$arity$2 ? fexpr__14923.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__14923.call(null,ref,f));
});
var G__14926__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__14924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__14924.cljs$core$IFn$_invoke$arity$3 ? fexpr__14924.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__14924.call(null,ref,f,a1));
});
var G__14926__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__14925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__14925.cljs$core$IFn$_invoke$arity$4 ? fexpr__14925.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__14925.call(null,ref,f,a1,a2));
});
var G__14926__5 = (function() { 
var G__14927__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__14927 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__14928__i = 0, G__14928__a = new Array(arguments.length -  4);
while (G__14928__i < G__14928__a.length) {G__14928__a[G__14928__i] = arguments[G__14928__i + 4]; ++G__14928__i;}
  args = new cljs.core.IndexedSeq(G__14928__a,0,null);
} 
return G__14927__delegate.call(this,ref,f,a1,a2,args);};
G__14927.cljs$lang$maxFixedArity = 4;
G__14927.cljs$lang$applyTo = (function (arglist__14929){
var ref = cljs.core.first(arglist__14929);
arglist__14929 = cljs.core.next(arglist__14929);
var f = cljs.core.first(arglist__14929);
arglist__14929 = cljs.core.next(arglist__14929);
var a1 = cljs.core.first(arglist__14929);
arglist__14929 = cljs.core.next(arglist__14929);
var a2 = cljs.core.first(arglist__14929);
var args = cljs.core.rest(arglist__14929);
return G__14927__delegate(ref,f,a1,a2,args);
});
G__14927.cljs$core$IFn$_invoke$arity$variadic = G__14927__delegate;
return G__14927;
})()
;
G__14926 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__14926__2.call(this,ref,f);
case 3:
return G__14926__3.call(this,ref,f,a1);
case 4:
return G__14926__4.call(this,ref,f,a1,a2);
default:
var G__14930 = null;
if (arguments.length > 4) {
var G__14931__i = 0, G__14931__a = new Array(arguments.length -  4);
while (G__14931__i < G__14931__a.length) {G__14931__a[G__14931__i] = arguments[G__14931__i + 4]; ++G__14931__i;}
G__14930 = new cljs.core.IndexedSeq(G__14931__a,0,null);
}
return G__14926__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__14930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14926.cljs$lang$maxFixedArity = 4;
G__14926.cljs$lang$applyTo = G__14926__5.cljs$lang$applyTo;
G__14926.cljs$core$IFn$_invoke$arity$2 = G__14926__2;
G__14926.cljs$core$IFn$_invoke$arity$3 = G__14926__3;
G__14926.cljs$core$IFn$_invoke$arity$4 = G__14926__4;
G__14926.cljs$core$IFn$_invoke$arity$variadic = G__14926__5.cljs$core$IFn$_invoke$arity$variadic;
return G__14926;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__14932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_reset_BANG_);
return (fexpr__14932.cljs$core$IFn$_invoke$arity$2 ? fexpr__14932.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__14932.call(null,ref,v));
}));
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__14933__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__14933 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__14934__i = 0, G__14934__a = new Array(arguments.length -  2);
while (G__14934__i < G__14934__a.length) {G__14934__a[G__14934__i] = arguments[G__14934__i + 2]; ++G__14934__i;}
  args = new cljs.core.IndexedSeq(G__14934__a,0,null);
} 
return G__14933__delegate.call(this,ref,f,args);};
G__14933.cljs$lang$maxFixedArity = 2;
G__14933.cljs$lang$applyTo = (function (arglist__14935){
var ref = cljs.core.first(arglist__14935);
arglist__14935 = cljs.core.next(arglist__14935);
var f = cljs.core.first(arglist__14935);
var args = cljs.core.rest(arglist__14935);
return G__14933__delegate(ref,f,args);
});
G__14933.cljs$core$IFn$_invoke$arity$variadic = G__14933__delegate;
return G__14933;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}));
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14939 = arguments.length;
var i__4737__auto___14940 = (0);
while(true){
if((i__4737__auto___14940 < len__4736__auto___14939)){
args__4742__auto__.push((arguments[i__4737__auto___14940]));

var G__14941 = (i__4737__auto___14940 + (1));
i__4737__auto___14940 = G__14941;
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
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq14936){
var G__14937 = cljs.core.first(seq14936);
var seq14936__$1 = cljs.core.next(seq14936);
var G__14938 = cljs.core.first(seq14936__$1);
var seq14936__$2 = cljs.core.next(seq14936__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14937,G__14938,seq14936__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return (sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v) : sci.impl.core_protocols._reset_BANG_.call(null,ref,v));
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$ISwap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IReset,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
