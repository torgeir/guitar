// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__15342 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__15343 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__15343);

try{var G__15344 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_in_STAR_);
sci.impl.vars.unbind(G__15344);

return G__15344;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__15342);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__15345 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__15346 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__15346);

try{var G__15347 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_out_STAR_);
sci.impl.vars.unbind(G__15347);

return G__15347;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__15345);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__15348 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__15349 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__15349);

try{var G__15350 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_err_STAR_);
sci.impl.vars.unbind(G__15350);

return G__15350;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__15348);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_meta_STAR_,false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_namespace_DASH_maps_STAR_,true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15360 = arguments.length;
var i__4737__auto___15361 = (0);
while(true){
if((i__4737__auto___15361 < len__4736__auto___15360)){
args__4742__auto__.push((arguments[i__4737__auto___15361]));

var G__15362 = (i__4737__auto___15361 + (1));
i__4737__auto___15361 = G__15362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15352 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15353 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15354 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15355 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15356 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15357 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15358 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15359 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15356);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15357);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15358);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15359);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15355);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15354);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15353);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15352);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq15351){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15351));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15372 = arguments.length;
var i__4737__auto___15373 = (0);
while(true){
if((i__4737__auto___15373 < len__4736__auto___15372)){
args__4742__auto__.push((arguments[i__4737__auto___15373]));

var G__15374 = (i__4737__auto___15373 + (1));
i__4737__auto___15373 = G__15374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15364 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15365 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15366 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15367 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15368 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15369 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15370 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15371 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15368);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15369);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15370);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15371);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15367);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15366);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15365);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15364);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq15363){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15363));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15384 = arguments.length;
var i__4737__auto___15385 = (0);
while(true){
if((i__4737__auto___15385 < len__4736__auto___15384)){
args__4742__auto__.push((arguments[i__4737__auto___15385]));

var G__15386 = (i__4737__auto___15385 + (1));
i__4737__auto___15385 = G__15386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15376 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15377 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15378 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15379 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15380 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15381 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15382 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15383 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15380);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15381);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15382);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15383);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15379);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15378);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15377);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15376);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq15375){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15375));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15396 = arguments.length;
var i__4737__auto___15397 = (0);
while(true){
if((i__4737__auto___15397 < len__4736__auto___15396)){
args__4742__auto__.push((arguments[i__4737__auto___15397]));

var G__15398 = (i__4737__auto___15397 + (1));
i__4737__auto___15397 = G__15398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15388 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15389 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15390 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15391 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15392 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15393 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15394 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15395 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15392);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15393);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15394);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15395);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15391);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15390);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15389);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15388);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq15387){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15387));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15406 = arguments.length;
var i__4737__auto___15407 = (0);
while(true){
if((i__4737__auto___15407 < len__4736__auto___15406)){
args__4742__auto__.push((arguments[i__4737__auto___15407]));

var G__15408 = (i__4737__auto___15407 + (1));
i__4737__auto___15407 = G__15408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15400 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15401 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15402 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15403 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15404 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__15405 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15403);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15404);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15405);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15402);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15401);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15400);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq15399){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15399));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15418 = arguments.length;
var i__4737__auto___15419 = (0);
while(true){
if((i__4737__auto___15419 < len__4736__auto___15418)){
args__4742__auto__.push((arguments[i__4737__auto___15419]));

var G__15420 = (i__4737__auto___15419 + (1));
i__4737__auto___15419 = G__15420;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15410 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15411 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15412 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15413 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15414 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15415 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15416 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15417 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15414);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15415);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15416);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15417);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15413);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15412);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15411);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15410);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq15409){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15409));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15430 = arguments.length;
var i__4737__auto___15431 = (0);
while(true){
if((i__4737__auto___15431 < len__4736__auto___15430)){
args__4742__auto__.push((arguments[i__4737__auto___15431]));

var G__15432 = (i__4737__auto___15431 + (1));
i__4737__auto___15431 = G__15432;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__15422 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__15423 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__15424 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__15425 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__15426 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__15427 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__15428 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__15429 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__15426);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15427);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__15428);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__15429);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__15425);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__15424);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15423);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__15422);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq15421){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15421));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15437 = arguments.length;
var i__4737__auto___15438 = (0);
while(true){
if((i__4737__auto___15438 < len__4736__auto___15437)){
args__4742__auto__.push((arguments[i__4737__auto___15438]));

var G__15439 = (i__4737__auto___15438 + (1));
i__4737__auto___15438 = G__15439;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$s__15433__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$goog$string$StringBuffer,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_out_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__15433__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__15433__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq15434){
var G__15435 = cljs.core.first(seq15434);
var seq15434__$1 = cljs.core.next(seq15434);
var G__15436 = cljs.core.first(seq15434__$1);
var seq15434__$2 = cljs.core.next(seq15434__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15435,G__15436,seq15434__$2);
}));

