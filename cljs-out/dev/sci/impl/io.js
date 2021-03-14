// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__17050 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17051 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17051);

try{var G__17052 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_in_STAR_);
sci.impl.vars.unbind(G__17052);

return G__17052;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17050);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__17053 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17054 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17054);

try{var G__17055 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_out_STAR_);
sci.impl.vars.unbind(G__17055);

return G__17055;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17053);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__17056 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17057 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17057);

try{var G__17058 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_err_STAR_);
sci.impl.vars.unbind(G__17058);

return G__17058;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17056);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_meta_STAR_,false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_namespace_DASH_maps_STAR_,true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17068 = arguments.length;
var i__4737__auto___17069 = (0);
while(true){
if((i__4737__auto___17069 < len__4736__auto___17068)){
args__4742__auto__.push((arguments[i__4737__auto___17069]));

var G__17070 = (i__4737__auto___17069 + (1));
i__4737__auto___17069 = G__17070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17060 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17061 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17062 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17063 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17064 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17065 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17066 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17067 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17064);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17065);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17066);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17067);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17063);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17062);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17061);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17060);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq17059){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17059));
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
var len__4736__auto___17080 = arguments.length;
var i__4737__auto___17081 = (0);
while(true){
if((i__4737__auto___17081 < len__4736__auto___17080)){
args__4742__auto__.push((arguments[i__4737__auto___17081]));

var G__17082 = (i__4737__auto___17081 + (1));
i__4737__auto___17081 = G__17082;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17072 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17073 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17074 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17075 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17076 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17077 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17078 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17079 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17076);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17077);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17078);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17079);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17075);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17074);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17073);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17072);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq17071){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17071));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17092 = arguments.length;
var i__4737__auto___17093 = (0);
while(true){
if((i__4737__auto___17093 < len__4736__auto___17092)){
args__4742__auto__.push((arguments[i__4737__auto___17093]));

var G__17094 = (i__4737__auto___17093 + (1));
i__4737__auto___17093 = G__17094;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17084 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17085 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17086 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17087 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17088 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17089 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17090 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17091 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17088);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17089);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17090);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17091);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17087);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17086);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17085);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17084);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq17083){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17083));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17104 = arguments.length;
var i__4737__auto___17105 = (0);
while(true){
if((i__4737__auto___17105 < len__4736__auto___17104)){
args__4742__auto__.push((arguments[i__4737__auto___17105]));

var G__17106 = (i__4737__auto___17105 + (1));
i__4737__auto___17105 = G__17106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17096 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17097 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17098 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17099 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17100 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17101 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17102 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17103 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17100);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17101);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17102);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17103);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17099);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17098);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17097);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17096);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq17095){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17095));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17114 = arguments.length;
var i__4737__auto___17115 = (0);
while(true){
if((i__4737__auto___17115 < len__4736__auto___17114)){
args__4742__auto__.push((arguments[i__4737__auto___17115]));

var G__17116 = (i__4737__auto___17115 + (1));
i__4737__auto___17115 = G__17116;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17108 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17109 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17110 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17111 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17112 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__17113 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17111);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17112);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17113);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17110);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17109);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17108);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq17107){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17107));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17126 = arguments.length;
var i__4737__auto___17127 = (0);
while(true){
if((i__4737__auto___17127 < len__4736__auto___17126)){
args__4742__auto__.push((arguments[i__4737__auto___17127]));

var G__17128 = (i__4737__auto___17127 + (1));
i__4737__auto___17127 = G__17128;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17118 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17119 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17120 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17121 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17122 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17123 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17124 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17125 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17122);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17123);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17124);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17125);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17121);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17120);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17119);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17118);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq17117){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17117));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17138 = arguments.length;
var i__4737__auto___17139 = (0);
while(true){
if((i__4737__auto___17139 < len__4736__auto___17138)){
args__4742__auto__.push((arguments[i__4737__auto___17139]));

var G__17140 = (i__4737__auto___17139 + (1));
i__4737__auto___17139 = G__17140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17130 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17131 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17132 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17133 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17134 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17135 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17136 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17137 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17134);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17135);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17136);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17137);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17133);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17132);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17131);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17130);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq17129){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17129));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17145 = arguments.length;
var i__4737__auto___17146 = (0);
while(true){
if((i__4737__auto___17146 < len__4736__auto___17145)){
args__4742__auto__.push((arguments[i__4737__auto___17146]));

var G__17147 = (i__4737__auto___17146 + (1));
i__4737__auto___17146 = G__17147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$s__17141__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$goog$string$StringBuffer,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_out_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__17141__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__17141__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq17142){
var G__17143 = cljs.core.first(seq17142);
var seq17142__$1 = cljs.core.next(seq17142);
var G__17144 = cljs.core.first(seq17142__$1);
var seq17142__$2 = cljs.core.next(seq17142__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17143,G__17144,seq17142__$2);
}));

