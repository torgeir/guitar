// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
sci.impl.types.IBox = function(){};

var sci$impl$types$IBox$setVal$dyn_16708 = (function (_this,_v){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.setVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4429__auto__.call(null,_this,_v));
} else {
var m__4426__auto__ = (sci.impl.types.setVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4426__auto__.call(null,_this,_v));
} else {
throw cljs.core.missing_protocol("IBox.setVal",_this);
}
}
});
sci.impl.types.setVal = (function sci$impl$types$setVal(_this,_v){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$setVal$arity$2 == null)))))){
return _this.sci$impl$types$IBox$setVal$arity$2(_this,_v);
} else {
return sci$impl$types$IBox$setVal$dyn_16708(_this,_v);
}
});

var sci$impl$types$IBox$getVal$dyn_16709 = (function (_this){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.getVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4429__auto__.call(null,_this));
} else {
var m__4426__auto__ = (sci.impl.types.getVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4426__auto__.call(null,_this));
} else {
throw cljs.core.missing_protocol("IBox.getVal",_this);
}
}
});
sci.impl.types.getVal = (function sci$impl$types$getVal(_this){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$getVal$arity$1 == null)))))){
return _this.sci$impl$types$IBox$getVal$arity$1(_this);
} else {
return sci$impl$types$IBox$getVal$dyn_16709(_this);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalVar = (function (v){
this.v = v;
});
(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.v;
}));

(sci.impl.types.EvalVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
}));

(sci.impl.types.EvalVar.cljs$lang$type = true);

(sci.impl.types.EvalVar.cljs$lang$ctorStr = "sci.impl.types/EvalVar");

(sci.impl.types.EvalVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalVar");
}));

/**
 * Positional factory function for sci.impl.types/EvalVar.
 */
sci.impl.types.__GT_EvalVar = (function sci$impl$types$__GT_EvalVar(v){
return (new sci.impl.types.EvalVar(v));
});


/**
 * @interface
 */
sci.impl.types.IReified = function(){};

var sci$impl$types$IReified$getInterface$dyn_16710 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.types.getInterface[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.types.getInterface["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getInterface",_);
}
}
});
sci.impl.types.getInterface = (function sci$impl$types$getInterface(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getInterface$arity$1 == null)))))){
return _.sci$impl$types$IReified$getInterface$arity$1(_);
} else {
return sci$impl$types$IReified$getInterface$dyn_16710(_);
}
});

var sci$impl$types$IReified$getMethods$dyn_16711 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.types.getMethods[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.types.getMethods["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getMethods",_);
}
}
});
sci.impl.types.getMethods = (function sci$impl$types$getMethods(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getMethods$arity$1 == null)))))){
return _.sci$impl$types$IReified$getMethods$arity$1(_);
} else {
return sci$impl$types$IReified$getMethods$dyn_16711(_);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IReified}
*/
sci.impl.types.Reified = (function (interface$,meths){
this.interface$ = interface$;
this.meths = meths;
});
(sci.impl.types.Reified.prototype.sci$impl$types$IReified$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getInterface$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.interface$;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getMethods$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meths;
}));

(sci.impl.types.Reified.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$interface,cljs.core.cst$sym$meths], null);
}));

(sci.impl.types.Reified.cljs$lang$type = true);

(sci.impl.types.Reified.cljs$lang$ctorStr = "sci.impl.types/Reified");

(sci.impl.types.Reified.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/Reified");
}));

/**
 * Positional factory function for sci.impl.types/Reified.
 */
sci.impl.types.__GT_Reified = (function sci$impl$types$__GT_Reified(interface$,meths){
return (new sci.impl.types.Reified(interface$,meths));
});

sci.impl.types.type_impl = (function sci$impl$types$type_impl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16716 = arguments.length;
var i__4737__auto___16717 = (0);
while(true){
if((i__4737__auto___16717 < len__4736__auto___16716)){
args__4742__auto__.push((arguments[i__4737__auto___16717]));

var G__16718 = (i__4737__auto___16717 + (1));
i__4737__auto___16717 = G__16718;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic = (function (x,_xs){
var or__4126__auto__ = (((x instanceof sci.impl.types.Reified))?cljs.core.cst$kw$sci$impl$protocols_SLASH_reified:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__16715 = x;
var G__16715__$1 = (((G__16715 == null))?null:cljs.core.meta(G__16715));
if((G__16715__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_type.cljs$core$IFn$_invoke$arity$1(G__16715__$1);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.type(x);
}
}
}));

(sci.impl.types.type_impl.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.types.type_impl.cljs$lang$applyTo = (function (seq16712){
var G__16713 = cljs.core.first(seq16712);
var seq16712__$1 = cljs.core.next(seq16712);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16713,seq16712__$1);
}));


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalForm = (function (form){
this.form = form;
});
(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.form;
}));

(sci.impl.types.EvalForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form], null);
}));

(sci.impl.types.EvalForm.cljs$lang$type = true);

(sci.impl.types.EvalForm.cljs$lang$ctorStr = "sci.impl.types/EvalForm");

(sci.impl.types.EvalForm.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalForm");
}));

/**
 * Positional factory function for sci.impl.types/EvalForm.
 */
sci.impl.types.__GT_EvalForm = (function sci$impl$types$__GT_EvalForm(form){
return (new sci.impl.types.EvalForm(form));
});

