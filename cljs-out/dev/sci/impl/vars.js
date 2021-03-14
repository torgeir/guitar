// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.vars');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.macros');
goog.require('sci.impl.types');
goog.require('sci.impl.unrestrict');
goog.require('sci.lang');

/**
 * @interface
 */
sci.impl.vars.HasName = function(){};

var sci$impl$vars$HasName$getName$dyn_14206 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.vars.getName[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.vars.getName["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("HasName.getName",_);
}
}
});
sci.impl.vars.getName = (function sci$impl$vars$getName(_){
if((((!((_ == null)))) && ((!((_.sci$impl$vars$HasName$getName$arity$1 == null)))))){
return _.sci$impl$vars$HasName$getName$arity$1(_);
} else {
return sci$impl$vars$HasName$getName$dyn_14206(_);
}
});


/**
* @constructor
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciNamespace = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciNamespace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sci.impl.vars.SciNamespace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciNamespace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.with_meta(cljs.core.cst$sym$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(sci.impl.vars.SciNamespace.cljs$lang$type = true);

(sci.impl.vars.SciNamespace.cljs$lang$ctorStr = "sci.impl.vars/SciNamespace");

(sci.impl.vars.SciNamespace.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.vars/SciNamespace");
}));

/**
 * Positional factory function for sci.impl.vars/SciNamespace.
 */
sci.impl.vars.__GT_SciNamespace = (function sci$impl$vars$__GT_SciNamespace(name,meta){
return (new sci.impl.vars.SciNamespace(name,meta));
});

sci.impl.vars.namespace_QMARK_ = (function sci$impl$vars$namespace_QMARK_(x){
return (x instanceof sci.impl.vars.SciNamespace);
});

/**
* @constructor
*/
sci.impl.vars.Frame = (function (bindings,prev){
this.bindings = bindings;
this.prev = prev;
});

(sci.impl.vars.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings,cljs.core.cst$sym$prev], null);
}));

(sci.impl.vars.Frame.cljs$lang$type = true);

(sci.impl.vars.Frame.cljs$lang$ctorStr = "sci.impl.vars/Frame");

(sci.impl.vars.Frame.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.vars/Frame");
}));

/**
 * Positional factory function for sci.impl.vars/Frame.
 */
sci.impl.vars.__GT_Frame = (function sci$impl$vars$__GT_Frame(bindings,prev){
return (new sci.impl.vars.Frame(bindings,prev));
});

sci.impl.vars.top_frame = (new sci.impl.vars.Frame(cljs.core.PersistentArrayMap.EMPTY,null));
sci.impl.vars.dvals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.top_frame);
sci.impl.vars.get_thread_binding_frame = (function sci$impl$vars$get_thread_binding_frame(){
return cljs.core.deref(sci.impl.vars.dvals);
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.TBox = (function (thread,val){
this.thread = thread;
this.val = val;
});
(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (self__.val = v);
}));

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.vars.TBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$thread,cljs.core.with_meta(cljs.core.cst$sym$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(sci.impl.vars.TBox.cljs$lang$type = true);

(sci.impl.vars.TBox.cljs$lang$ctorStr = "sci.impl.vars/TBox");

(sci.impl.vars.TBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.vars/TBox");
}));

/**
 * Positional factory function for sci.impl.vars/TBox.
 */
sci.impl.vars.__GT_TBox = (function sci$impl$vars$__GT_TBox(thread,val){
return (new sci.impl.vars.TBox(thread,val));
});

sci.impl.vars.clone_thread_binding_frame = (function sci$impl$vars$clone_thread_binding_frame(){
var f = cljs.core.deref(sci.impl.vars.dvals);
return (new sci.impl.vars.Frame(f.bindings,null));
});
sci.impl.vars.reset_thread_binding_frame = (function sci$impl$vars$reset_thread_binding_frame(frame){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,frame);
});
sci.impl.vars.dynamic_var_QMARK_ = (function sci$impl$vars$dynamic_var_QMARK_(v){
var and__4115__auto__ = (sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sci.impl.vars.var_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : sci.impl.vars.var_QMARK_.call(null,v));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
} else {
return and__4115__auto__;
}
});

/**
 * @interface
 */
sci.impl.vars.IVar = function(){};

var sci$impl$vars$IVar$bindRoot$dyn_14210 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.bindRoot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (sci.impl.vars.bindRoot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.bindRoot",this$);
}
}
});
sci.impl.vars.bindRoot = (function sci$impl$vars$bindRoot(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$bindRoot$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$bindRoot$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$bindRoot$dyn_14210(this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_14211 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.getRawRoot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.vars.getRawRoot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.getRawRoot",this$);
}
}
});
sci.impl.vars.getRawRoot = (function sci$impl$vars$getRawRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$getRawRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$getRawRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$getRawRoot$dyn_14211(this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_14212 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.toSymbol[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.vars.toSymbol["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.toSymbol",this$);
}
}
});
sci.impl.vars.toSymbol = (function sci$impl$vars$toSymbol(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$toSymbol$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$toSymbol$arity$1(this$);
} else {
return sci$impl$vars$IVar$toSymbol$dyn_14212(this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_14213 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.isMacro[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.vars.isMacro["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.isMacro",this$);
}
}
});
sci.impl.vars.isMacro = (function sci$impl$vars$isMacro(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$isMacro$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$isMacro$arity$1(this$);
} else {
return sci$impl$vars$IVar$isMacro$dyn_14213(this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_14214 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.hasRoot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.vars.hasRoot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.hasRoot",this$);
}
}
});
sci.impl.vars.hasRoot = (function sci$impl$vars$hasRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$hasRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$hasRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$hasRoot$dyn_14214(this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_14215 = (function (this$,v){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.setThreadBound[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4429__auto__.call(null,this$,v));
} else {
var m__4426__auto__ = (sci.impl.vars.setThreadBound["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4426__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.setThreadBound",this$);
}
}
});
sci.impl.vars.setThreadBound = (function sci$impl$vars$setThreadBound(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$setThreadBound$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$setThreadBound$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$setThreadBound$dyn_14215(this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_14216 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.vars.unbind[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.vars.unbind["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.unbind",this$);
}
}
});
sci.impl.vars.unbind = (function sci$impl$vars$unbind(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$unbind$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$unbind$arity$1(this$);
} else {
return sci$impl$vars$IVar$unbind$dyn_14216(this$);
}
});

sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame();
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__14217){
var vec__14218 = p__14217;
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14218,(0),null);
var val_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14218,(1),null);
if(cljs.core.truth_(sci.impl.vars.dynamic_var_QMARK_(var_STAR_))){
} else {
throw (new Error(["Can't dynamically bind non-dynamic var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_STAR_)].join('')));
}

sci.impl.vars.setThreadBound(var_STAR_,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,var_STAR_,(new sci.impl.vars.TBox(null,val_STAR_)));
}),bmap,bindings);
return sci.impl.vars.reset_thread_binding_frame((new sci.impl.vars.Frame(bmap__$1,frame)));
});
sci.impl.vars.pop_thread_bindings = (function sci$impl$vars$pop_thread_bindings(){
var temp__5718__auto__ = sci.impl.vars.get_thread_binding_frame().prev;
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
if((sci.impl.vars.top_frame === f)){
return cljs.core.reset_BANG_(sci.impl.vars.dvals,sci.impl.vars.top_frame);
} else {
return sci.impl.vars.reset_thread_binding_frame(f);
}
} else {
throw (new Error("No frame to pop."));
}
});
sci.impl.vars.get_thread_bindings = (function sci$impl$vars$get_thread_bindings(){
var f = sci.impl.vars.get_thread_binding_frame();
var ret = cljs.core.PersistentArrayMap.EMPTY;
var kvs = cljs.core.seq(f.bindings);
while(true){
if(kvs){
var vec__14224 = cljs.core.first(kvs);
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14224,(0),null);
var tbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14224,(1),null);
var tbox_val = tbox.sci$impl$types$IBox$getVal$arity$1(null);
var G__14227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,var_STAR_,tbox_val);
var G__14228 = cljs.core.next(kvs);
ret = G__14227;
kvs = G__14228;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.vars.get_thread_binding = (function sci$impl$vars$get_thread_binding(sci_var){
var temp__5720__auto__ = cljs.core.deref(sci.impl.vars.dvals);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return f.bindings.get(sci_var);
} else {
return null;
}
});
sci.impl.vars.binding_conveyor_fn = (function sci$impl$vars$binding_conveyor_fn(f){
var frame = sci.impl.vars.clone_thread_binding_frame();
return (function() {
var G__14229 = null;
var G__14229__0 = (function (){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14229__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});
var G__14229__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
var G__14229__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
});
var G__14229__4 = (function() { 
var G__14230__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame(frame);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
};
var G__14230 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__14231__i = 0, G__14231__a = new Array(arguments.length -  3);
while (G__14231__i < G__14231__a.length) {G__14231__a[G__14231__i] = arguments[G__14231__i + 3]; ++G__14231__i;}
  args = new cljs.core.IndexedSeq(G__14231__a,0,null);
} 
return G__14230__delegate.call(this,x,y,z,args);};
G__14230.cljs$lang$maxFixedArity = 3;
G__14230.cljs$lang$applyTo = (function (arglist__14232){
var x = cljs.core.first(arglist__14232);
arglist__14232 = cljs.core.next(arglist__14232);
var y = cljs.core.first(arglist__14232);
arglist__14232 = cljs.core.next(arglist__14232);
var z = cljs.core.first(arglist__14232);
var args = cljs.core.rest(arglist__14232);
return G__14230__delegate(x,y,z,args);
});
G__14230.cljs$core$IFn$_invoke$arity$variadic = G__14230__delegate;
return G__14230;
})()
;
G__14229 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14229__0.call(this);
case 1:
return G__14229__1.call(this,x);
case 2:
return G__14229__2.call(this,x,y);
case 3:
return G__14229__3.call(this,x,y,z);
default:
var G__14233 = null;
if (arguments.length > 3) {
var G__14234__i = 0, G__14234__a = new Array(arguments.length -  3);
while (G__14234__i < G__14234__a.length) {G__14234__a[G__14234__i] = arguments[G__14234__i + 3]; ++G__14234__i;}
G__14233 = new cljs.core.IndexedSeq(G__14234__a,0,null);
}
return G__14229__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14229.cljs$lang$maxFixedArity = 3;
G__14229.cljs$lang$applyTo = G__14229__4.cljs$lang$applyTo;
G__14229.cljs$core$IFn$_invoke$arity$0 = G__14229__0;
G__14229.cljs$core$IFn$_invoke$arity$1 = G__14229__1;
G__14229.cljs$core$IFn$_invoke$arity$2 = G__14229__2;
G__14229.cljs$core$IFn$_invoke$arity$3 = G__14229__3;
G__14229.cljs$core$IFn$_invoke$arity$variadic = G__14229__4.cljs$core$IFn$_invoke$arity$variadic;
return G__14229;
})()
});
sci.impl.vars.throw_unbound_call_exception = (function sci$impl$vars$throw_unbound_call_exception(the_var){
throw (new Error(["Attempting to call unbound fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_var)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciUnbound = (function (the_var){
this.the_var = the_var;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciUnbound.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["Unbound: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.the_var)].join('');
}));

(sci.impl.vars.SciUnbound.prototype.call = (function() {
var G__14236 = null;
var G__14236__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
var G__14236__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
});
G__14236 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14236__1.call(this,self__);
case 2:
return G__14236__2.call(this,self__,a);
case 3:
return G__14236__3.call(this,self__,a,b);
case 4:
return G__14236__4.call(this,self__,a,b,c);
case 5:
return G__14236__5.call(this,self__,a,b,c,d);
case 6:
return G__14236__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14236__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14236__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14236__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14236__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14236__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14236__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14236__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14236__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14236__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14236__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14236__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14236__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14236__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14236__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14236__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14236__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14236.cljs$core$IFn$_invoke$arity$1 = G__14236__1;
G__14236.cljs$core$IFn$_invoke$arity$2 = G__14236__2;
G__14236.cljs$core$IFn$_invoke$arity$3 = G__14236__3;
G__14236.cljs$core$IFn$_invoke$arity$4 = G__14236__4;
G__14236.cljs$core$IFn$_invoke$arity$5 = G__14236__5;
G__14236.cljs$core$IFn$_invoke$arity$6 = G__14236__6;
G__14236.cljs$core$IFn$_invoke$arity$7 = G__14236__7;
G__14236.cljs$core$IFn$_invoke$arity$8 = G__14236__8;
G__14236.cljs$core$IFn$_invoke$arity$9 = G__14236__9;
G__14236.cljs$core$IFn$_invoke$arity$10 = G__14236__10;
G__14236.cljs$core$IFn$_invoke$arity$11 = G__14236__11;
G__14236.cljs$core$IFn$_invoke$arity$12 = G__14236__12;
G__14236.cljs$core$IFn$_invoke$arity$13 = G__14236__13;
G__14236.cljs$core$IFn$_invoke$arity$14 = G__14236__14;
G__14236.cljs$core$IFn$_invoke$arity$15 = G__14236__15;
G__14236.cljs$core$IFn$_invoke$arity$16 = G__14236__16;
G__14236.cljs$core$IFn$_invoke$arity$17 = G__14236__17;
G__14236.cljs$core$IFn$_invoke$arity$18 = G__14236__18;
G__14236.cljs$core$IFn$_invoke$arity$19 = G__14236__19;
G__14236.cljs$core$IFn$_invoke$arity$20 = G__14236__20;
G__14236.cljs$core$IFn$_invoke$arity$21 = G__14236__21;
G__14236.cljs$core$IFn$_invoke$arity$22 = G__14236__22;
return G__14236;
})()
);

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args14235){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14235)));
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$the_DASH_var], null);
}));

(sci.impl.vars.SciUnbound.cljs$lang$type = true);

(sci.impl.vars.SciUnbound.cljs$lang$ctorStr = "sci.impl.vars/SciUnbound");

(sci.impl.vars.SciUnbound.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.vars/SciUnbound");
}));

/**
 * Positional factory function for sci.impl.vars/SciUnbound.
 */
sci.impl.vars.__GT_SciUnbound = (function sci$impl$vars$__GT_SciUnbound(the_var){
return (new sci.impl.vars.SciUnbound(the_var));
});

sci.impl.vars.built_in_var_QMARK_ = (function sci$impl$vars$built_in_var_QMARK_(var_meta){
return cljs.core.cst$kw$sci$impl_SLASH_built_DASH_in.cljs$core$IFn$_invoke$arity$1(var_meta);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.IVar}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciVar = (function (root,sym,meta,thread_bound){
this.root = root;
this.sym = sym;
this.meta = meta;
this.thread_bound = thread_bound;
this.cljs$lang$protocol_mask$partition0$ = 2147647489;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$bindRoot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var vm__14141__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__4126__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$sci$impl_SLASH_built_DASH_in.cljs$core$IFn$_invoke$arity$1(vm__14141__auto__));
}
})())){
return (this$__$1.root = v);
} else {
var the_var__14142__auto__ = this$__$1;
var ns__14143__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm__14141__auto__);
var ns_name__14144__auto__ = sci.impl.vars.getName(ns__14143__auto__);
var name__14145__auto__ = the_var__14142__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__14144__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__14145__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var,this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$getRawRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$toSymbol$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$isMacro$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.root));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$setThreadBound$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (this$__$1.thread_bound = v);
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$unbind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vm__14141__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__4126__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$sci$impl_SLASH_built_DASH_in.cljs$core$IFn$_invoke$arity$1(vm__14141__auto__));
}
})())){
return (this$__$1.root = (new sci.impl.vars.SciUnbound(this$__$1)));
} else {
var the_var__14142__auto__ = this$__$1;
var ns__14143__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm__14141__auto__);
var ns_name__14144__auto__ = sci.impl.vars.getName(ns__14143__auto__);
var name__14145__auto__ = the_var__14142__auto__.sci$impl$vars$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__14144__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__14145__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var,this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$hasRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (!((self__.root instanceof sci.impl.vars.SciUnbound)));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var b = temp__5718__auto__;
return sci.impl.types.setVal(b,v);
} else {
throw (new Error(["Can't change/establish root binding of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," with set"].join('')));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.thread_bound)){
var temp__5718__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var tbox = temp__5718__auto__;
return sci.impl.types.getVal(tbox);
} else {
return self__.root;
}
} else {
return self__.root;
}
}));

(sci.impl.vars.SciVar.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.sym)].join('');
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(self__.sym,writer,opts);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciVar.prototype.call = (function() {
var G__14285 = null;
var G__14285__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14243 = cljs.core.deref(this$);
return (fexpr__14243.cljs$core$IFn$_invoke$arity$0 ? fexpr__14243.cljs$core$IFn$_invoke$arity$0() : fexpr__14243.call(null));
});
var G__14285__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14244 = cljs.core.deref(this$);
return (fexpr__14244.cljs$core$IFn$_invoke$arity$1 ? fexpr__14244.cljs$core$IFn$_invoke$arity$1(a) : fexpr__14244.call(null,a));
});
var G__14285__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14245 = cljs.core.deref(this$);
return (fexpr__14245.cljs$core$IFn$_invoke$arity$2 ? fexpr__14245.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__14245.call(null,a,b));
});
var G__14285__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14246 = cljs.core.deref(this$);
return (fexpr__14246.cljs$core$IFn$_invoke$arity$3 ? fexpr__14246.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__14246.call(null,a,b,c));
});
var G__14285__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14247 = cljs.core.deref(this$);
return (fexpr__14247.cljs$core$IFn$_invoke$arity$4 ? fexpr__14247.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__14247.call(null,a,b,c,d));
});
var G__14285__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14248 = cljs.core.deref(this$);
return (fexpr__14248.cljs$core$IFn$_invoke$arity$5 ? fexpr__14248.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__14248.call(null,a,b,c,d,e));
});
var G__14285__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14249 = cljs.core.deref(this$);
return (fexpr__14249.cljs$core$IFn$_invoke$arity$6 ? fexpr__14249.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__14249.call(null,a,b,c,d,e,f));
});
var G__14285__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14250 = cljs.core.deref(this$);
return (fexpr__14250.cljs$core$IFn$_invoke$arity$7 ? fexpr__14250.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__14250.call(null,a,b,c,d,e,f,g));
});
var G__14285__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14251 = cljs.core.deref(this$);
return (fexpr__14251.cljs$core$IFn$_invoke$arity$8 ? fexpr__14251.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__14251.call(null,a,b,c,d,e,f,g,h));
});
var G__14285__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14252 = cljs.core.deref(this$);
return (fexpr__14252.cljs$core$IFn$_invoke$arity$9 ? fexpr__14252.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__14252.call(null,a,b,c,d,e,f,g,h,i));
});
var G__14285__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14253 = cljs.core.deref(this$);
return (fexpr__14253.cljs$core$IFn$_invoke$arity$10 ? fexpr__14253.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__14253.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__14285__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14254 = cljs.core.deref(this$);
return (fexpr__14254.cljs$core$IFn$_invoke$arity$11 ? fexpr__14254.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__14254.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__14285__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14255 = cljs.core.deref(this$);
return (fexpr__14255.cljs$core$IFn$_invoke$arity$12 ? fexpr__14255.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__14255.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__14285__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14256 = cljs.core.deref(this$);
return (fexpr__14256.cljs$core$IFn$_invoke$arity$13 ? fexpr__14256.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__14256.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__14285__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14257 = cljs.core.deref(this$);
return (fexpr__14257.cljs$core$IFn$_invoke$arity$14 ? fexpr__14257.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__14257.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__14285__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14258 = cljs.core.deref(this$);
return (fexpr__14258.cljs$core$IFn$_invoke$arity$15 ? fexpr__14258.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__14258.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__14285__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14259 = cljs.core.deref(this$);
return (fexpr__14259.cljs$core$IFn$_invoke$arity$16 ? fexpr__14259.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__14259.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__14285__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14260 = cljs.core.deref(this$);
return (fexpr__14260.cljs$core$IFn$_invoke$arity$17 ? fexpr__14260.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__14260.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__14285__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14261 = cljs.core.deref(this$);
return (fexpr__14261.cljs$core$IFn$_invoke$arity$18 ? fexpr__14261.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__14261.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__14285__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14262 = cljs.core.deref(this$);
return (fexpr__14262.cljs$core$IFn$_invoke$arity$19 ? fexpr__14262.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__14262.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__14285__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__14263 = cljs.core.deref(this$);
return (fexpr__14263.cljs$core$IFn$_invoke$arity$20 ? fexpr__14263.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__14263.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__14285__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__14285 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14285__1.call(this,self__);
case 2:
return G__14285__2.call(this,self__,a);
case 3:
return G__14285__3.call(this,self__,a,b);
case 4:
return G__14285__4.call(this,self__,a,b,c);
case 5:
return G__14285__5.call(this,self__,a,b,c,d);
case 6:
return G__14285__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14285__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14285__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14285__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14285__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14285__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14285__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14285__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14285__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14285__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14285__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14285__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14285__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14285__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14285__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14285__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14285__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14285.cljs$core$IFn$_invoke$arity$1 = G__14285__1;
G__14285.cljs$core$IFn$_invoke$arity$2 = G__14285__2;
G__14285.cljs$core$IFn$_invoke$arity$3 = G__14285__3;
G__14285.cljs$core$IFn$_invoke$arity$4 = G__14285__4;
G__14285.cljs$core$IFn$_invoke$arity$5 = G__14285__5;
G__14285.cljs$core$IFn$_invoke$arity$6 = G__14285__6;
G__14285.cljs$core$IFn$_invoke$arity$7 = G__14285__7;
G__14285.cljs$core$IFn$_invoke$arity$8 = G__14285__8;
G__14285.cljs$core$IFn$_invoke$arity$9 = G__14285__9;
G__14285.cljs$core$IFn$_invoke$arity$10 = G__14285__10;
G__14285.cljs$core$IFn$_invoke$arity$11 = G__14285__11;
G__14285.cljs$core$IFn$_invoke$arity$12 = G__14285__12;
G__14285.cljs$core$IFn$_invoke$arity$13 = G__14285__13;
G__14285.cljs$core$IFn$_invoke$arity$14 = G__14285__14;
G__14285.cljs$core$IFn$_invoke$arity$15 = G__14285__15;
G__14285.cljs$core$IFn$_invoke$arity$16 = G__14285__16;
G__14285.cljs$core$IFn$_invoke$arity$17 = G__14285__17;
G__14285.cljs$core$IFn$_invoke$arity$18 = G__14285__18;
G__14285.cljs$core$IFn$_invoke$arity$19 = G__14285__19;
G__14285.cljs$core$IFn$_invoke$arity$20 = G__14285__20;
G__14285.cljs$core$IFn$_invoke$arity$21 = G__14285__21;
G__14285.cljs$core$IFn$_invoke$arity$22 = G__14285__22;
return G__14285;
})()
);

(sci.impl.vars.SciVar.prototype.apply = (function (self__,args14242){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14242)));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__14264 = cljs.core.deref(this$);
return (fexpr__14264.cljs$core$IFn$_invoke$arity$0 ? fexpr__14264.cljs$core$IFn$_invoke$arity$0() : fexpr__14264.call(null));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__14265 = cljs.core.deref(this$);
return (fexpr__14265.cljs$core$IFn$_invoke$arity$1 ? fexpr__14265.cljs$core$IFn$_invoke$arity$1(a) : fexpr__14265.call(null,a));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__14266 = cljs.core.deref(this$);
return (fexpr__14266.cljs$core$IFn$_invoke$arity$2 ? fexpr__14266.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__14266.call(null,a,b));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__14267 = cljs.core.deref(this$);
return (fexpr__14267.cljs$core$IFn$_invoke$arity$3 ? fexpr__14267.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__14267.call(null,a,b,c));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__14268 = cljs.core.deref(this$);
return (fexpr__14268.cljs$core$IFn$_invoke$arity$4 ? fexpr__14268.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__14268.call(null,a,b,c,d));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__14269 = cljs.core.deref(this$);
return (fexpr__14269.cljs$core$IFn$_invoke$arity$5 ? fexpr__14269.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__14269.call(null,a,b,c,d,e));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var fexpr__14270 = cljs.core.deref(this$);
return (fexpr__14270.cljs$core$IFn$_invoke$arity$6 ? fexpr__14270.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__14270.call(null,a,b,c,d,e,f));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var fexpr__14271 = cljs.core.deref(this$);
return (fexpr__14271.cljs$core$IFn$_invoke$arity$7 ? fexpr__14271.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__14271.call(null,a,b,c,d,e,f,g));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var fexpr__14272 = cljs.core.deref(this$);
return (fexpr__14272.cljs$core$IFn$_invoke$arity$8 ? fexpr__14272.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__14272.call(null,a,b,c,d,e,f,g,h));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__14273 = cljs.core.deref(this$);
return (fexpr__14273.cljs$core$IFn$_invoke$arity$9 ? fexpr__14273.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__14273.call(null,a,b,c,d,e,f,g,h,i));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__14274 = cljs.core.deref(this$);
return (fexpr__14274.cljs$core$IFn$_invoke$arity$10 ? fexpr__14274.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__14274.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__14275 = cljs.core.deref(this$);
return (fexpr__14275.cljs$core$IFn$_invoke$arity$11 ? fexpr__14275.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__14275.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__14276 = cljs.core.deref(this$);
return (fexpr__14276.cljs$core$IFn$_invoke$arity$12 ? fexpr__14276.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__14276.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__14277 = cljs.core.deref(this$);
return (fexpr__14277.cljs$core$IFn$_invoke$arity$13 ? fexpr__14277.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__14277.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__14278 = cljs.core.deref(this$);
return (fexpr__14278.cljs$core$IFn$_invoke$arity$14 ? fexpr__14278.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__14278.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__14279 = cljs.core.deref(this$);
return (fexpr__14279.cljs$core$IFn$_invoke$arity$15 ? fexpr__14279.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__14279.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__14280 = cljs.core.deref(this$);
return (fexpr__14280.cljs$core$IFn$_invoke$arity$16 ? fexpr__14280.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__14280.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__14281 = cljs.core.deref(this$);
return (fexpr__14281.cljs$core$IFn$_invoke$arity$17 ? fexpr__14281.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__14281.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__14282 = cljs.core.deref(this$);
return (fexpr__14282.cljs$core$IFn$_invoke$arity$18 ? fexpr__14282.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__14282.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__14283 = cljs.core.deref(this$);
return (fexpr__14283.cljs$core$IFn$_invoke$arity$19 ? fexpr__14283.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__14283.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__14284 = cljs.core.deref(this$);
return (fexpr__14284.cljs$core$IFn$_invoke$arity$20 ? fexpr__14284.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__14284.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(sci.impl.vars.SciVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$root,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$sym,cljs.core.with_meta(cljs.core.cst$sym$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$thread_DASH_bound,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(sci.impl.vars.SciVar.cljs$lang$type = true);

(sci.impl.vars.SciVar.cljs$lang$ctorStr = "sci.impl.vars/SciVar");

(sci.impl.vars.SciVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.vars/SciVar");
}));

/**
 * Positional factory function for sci.impl.vars/SciVar.
 */
sci.impl.vars.__GT_SciVar = (function sci$impl$vars$__GT_SciVar(root,sym,meta,thread_bound){
return (new sci.impl.vars.SciVar(root,sym,meta,thread_bound));
});

sci.impl.vars.var_get = (function sci$impl$vars$var_get(v){
return cljs.core.deref(v);
});
sci.impl.vars.var_set = (function sci$impl$vars$var_set(v,val){
return sci.impl.types.setVal(v,val);
});
sci.impl.vars.var_QMARK_ = (function sci$impl$vars$var_QMARK_(x){
return (x instanceof sci.impl.vars.SciVar);
});
sci.impl.vars.dynamic_var = (function sci$impl$vars$dynamic_var(var_args){
var G__14287 = arguments.length;
switch (G__14287) {
case 1:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$dynamic,true);
return (new sci.impl.vars.SciVar(init_val,name,meta__$1,false));
}));

(sci.impl.vars.dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.vars.current_file = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_file_STAR_,null);
sci.impl.vars.user_ns = sci.impl.vars.__GT_SciNamespace(cljs.core.cst$sym$user,null);
sci.impl.vars.current_ns = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_ns_STAR_,sci.impl.vars.user_ns);
sci.impl.vars.current_ns_name = (function sci$impl$vars$current_ns_name(){
return sci.impl.vars.getName(cljs.core.deref(sci.impl.vars.current_ns));
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14292 = arguments.length;
var i__4737__auto___14293 = (0);
while(true){
if((i__4737__auto___14293 < len__4736__auto___14292)){
args__4742__auto__.push((arguments[i__4737__auto___14293]));

var G__14294 = (i__4737__auto___14293 + (1));
i__4737__auto___14293 = G__14294;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return sci.impl.vars.bindRoot(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.impl.vars.getRawRoot(v),args));
}));

(sci.impl.vars.alter_var_root.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq14289){
var G__14290 = cljs.core.first(seq14289);
var seq14289__$1 = cljs.core.next(seq14289);
var G__14291 = cljs.core.first(seq14289__$1);
var seq14289__$2 = cljs.core.next(seq14289__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14290,G__14291,seq14289__$2);
}));

/**
 * Returns a new sci var.
 */
sci.impl.vars.new_var = (function sci$impl$vars$new_var(var_args){
var G__14296 = arguments.length;
switch (G__14296) {
case 1:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__14297 = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__14297);

return G__14297;
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return sci.impl.vars.__GT_SciVar(init_val,name,meta,false);
}));

(sci.impl.vars.new_var.cljs$lang$maxFixedArity = 3);

