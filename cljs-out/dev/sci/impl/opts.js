// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.opts');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('sci.impl.namespaces');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
goog.require('sci.lang');
sci.impl.opts.init_env_BANG_ = (function sci$impl$opts$init_env_BANG_(env,bindings,aliases,namespaces,imports,load_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var namespaces__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.namespaces,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$user,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,cljs.core.cst$kw$obj,sci.impl.vars.user_ns)], null),namespaces,cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(env__$1)], 0));
var aliases__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.aliases,aliases,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cljs.core.cst$sym$user,cljs.core.cst$kw$aliases], null))], 0));
var namespaces__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(namespaces__$1,cljs.core.cst$sym$user,cljs.core.assoc,cljs.core.cst$kw$aliases,aliases__$1),cljs.core.cst$sym$clojure$core,cljs.core.assoc,cljs.core.cst$sym$global_DASH_hierarchy,sci.impl.vars.__GT_SciVar(cljs.core.make_hierarchy(),cljs.core.cst$sym$global_DASH_hierarchy,null,false));
if(cljs.core.not(env__$1)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$namespaces,namespaces__$2,cljs.core.cst$kw$imports,imports,cljs.core.cst$kw$load_DASH_fn,load_fn], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env__$1,cljs.core.cst$kw$namespaces,namespaces__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$imports,imports,cljs.core.cst$kw$load_DASH_fn,load_fn], 0));
}
}));
});
sci.impl.opts.process_permissions = (function sci$impl$opts$process_permissions(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21713 = arguments.length;
var i__4737__auto___21714 = (0);
while(true){
if((i__4737__auto___21714 < len__4736__auto___21713)){
args__4742__auto__.push((arguments[i__4737__auto___21714]));

var G__21715 = (i__4737__auto___21714 + (1));
i__4737__auto___21714 = G__21715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic = (function (permissions){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.strip_core_ns)),permissions));
}));

(sci.impl.opts.process_permissions.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.opts.process_permissions.cljs$lang$applyTo = (function (seq21712){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21712));
}));

sci.impl.opts.default_classes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$Error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,Error,cljs.core.cst$kw$constructor,(function() {
var G__21718 = null;
var G__21718__1 = (function (msg){
return (new Error(msg));
});
var G__21718__2 = (function (msg,filename){
return (new Error(msg,filename));
});
var G__21718__3 = (function (msg,filename,line){
return (new Error(msg,filename,line));
});
G__21718 = function(msg,filename,line){
switch(arguments.length){
case 1:
return G__21718__1.call(this,msg);
case 2:
return G__21718__2.call(this,msg,filename);
case 3:
return G__21718__3.call(this,msg,filename,line);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21718.cljs$core$IFn$_invoke$arity$1 = G__21718__1;
G__21718.cljs$core$IFn$_invoke$arity$2 = G__21718__2;
G__21718.cljs$core$IFn$_invoke$arity$3 = G__21718__3;
return G__21718;
})()
], null),cljs.core.cst$sym$cljs$core$Delay,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.Delay,cljs.core.cst$kw$constructor,(function (p1__21716_SHARP_){
return (new cljs.core.Delay(p1__21716_SHARP_,null));
})], null),cljs.core.cst$sym$goog$string$StringBuffer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,goog.string.StringBuffer,cljs.core.cst$kw$constructor,(function (p1__21717_SHARP_){
return (new goog.string.StringBuffer(p1__21717_SHARP_));
})], null)], null);
sci.impl.opts.default_imports = cljs.core.PersistentArrayMap.EMPTY;
sci.impl.opts.normalize_classes = (function sci$impl$opts$normalize_classes(classes){
var class__GT_opts = cljs.core.transient$(cljs.core.select_keys(classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$allow], null)));
var kvs = classes;
while(true){
var temp__5718__auto__ = cljs.core.first(kvs);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__21719 = temp__5718__auto__;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(0),null);
var class_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21719,(1),null);
var G__21722 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(class__GT_opts,sym,((cljs.core.map_QMARK_(class_opts))?class_opts:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,class_opts], null)));
var G__21723 = cljs.core.rest(kvs);
class__GT_opts = G__21722;
kvs = G__21723;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$public_DASH_class,cljs.core.cst$kw$public_DASH_class.cljs$core$IFn$_invoke$arity$1(classes),cljs.core.cst$kw$class_DASH__GT_opts,cljs.core.persistent_BANG_(class__GT_opts)], null);
}
break;
}
});
sci.impl.opts.default_reify = cljs.core.PersistentArrayMap.EMPTY;
sci.impl.opts.__GT_ctx = (function sci$impl$opts$__GT_ctx(bindings,env,features,readers){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bindings,bindings,cljs.core.cst$kw$env,env,cljs.core.cst$kw$features,features,cljs.core.cst$kw$readers,readers], null);
});
/**
 * Initializes options
 */
sci.impl.opts.init = (function sci$impl$opts$init(p__21724){
var map__21725 = p__21724;
var map__21725__$1 = (((((!((map__21725 == null))))?(((((map__21725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21725):map__21725);
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$features);
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$namespaces);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$bindings);
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$readers);
var reify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$reify);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$env);
var disable_arity_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$disable_DASH_arity_DASH_checks);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$imports);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$allow);
var load_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$load_DASH_fn);
var uberscript = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$uberscript);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$aliases);
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$deny);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21725__$1,cljs.core.cst$kw$classes);
var env__$1 = (function (){var or__4126__auto__ = env;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var imports__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.opts.default_imports,imports], 0));
var bindings__$1 = bindings;
var _ = sci.impl.opts.init_env_BANG_(env__$1,bindings__$1,aliases,namespaces,imports__$1,load_fn);
var classes__$1 = sci.impl.opts.normalize_classes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.opts.default_classes,classes], 0)));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sci.impl.opts.__GT_ctx(cljs.core.PersistentArrayMap.EMPTY,env__$1,features,readers),cljs.core.cst$kw$allow,sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([allow], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$deny,sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deny], 0)),cljs.core.cst$kw$uberscript,uberscript,cljs.core.cst$kw$reify,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.opts.default_reify,reify], 0)),cljs.core.cst$kw$disable_DASH_arity_DASH_checks,disable_arity_checks,cljs.core.cst$kw$public_DASH_class,cljs.core.cst$kw$public_DASH_class.cljs$core$IFn$_invoke$arity$1(classes__$1),cljs.core.cst$kw$class_DASH__GT_opts,cljs.core.cst$kw$class_DASH__GT_opts.cljs$core$IFn$_invoke$arity$1(classes__$1)], 0));
return ctx;
});
