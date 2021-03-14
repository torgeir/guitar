// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__17704 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17705 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17705);

try{var G__17706 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_in_STAR_);
sci.impl.vars.unbind(G__17706);

return G__17706;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17704);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__17707 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17708 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17708);

try{var G__17709 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_out_STAR_);
sci.impl.vars.unbind(G__17709);

return G__17709;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17707);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__17710 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__17711 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__17711);

try{var G__17712 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_err_STAR_);
sci.impl.vars.unbind(G__17712);

return G__17712;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__17710);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_meta_STAR_,false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_namespace_DASH_maps_STAR_,true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17722 = arguments.length;
var i__4737__auto___17723 = (0);
while(true){
if((i__4737__auto___17723 < len__4736__auto___17722)){
args__4742__auto__.push((arguments[i__4737__auto___17723]));

var G__17724 = (i__4737__auto___17723 + (1));
i__4737__auto___17723 = G__17724;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17714 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17715 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17716 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17717 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17718 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17719 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17720 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17721 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17718);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17719);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17720);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17721);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17717);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17716);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17715);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17714);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq17713){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17713));
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
var len__4736__auto___17734 = arguments.length;
var i__4737__auto___17735 = (0);
while(true){
if((i__4737__auto___17735 < len__4736__auto___17734)){
args__4742__auto__.push((arguments[i__4737__auto___17735]));

var G__17736 = (i__4737__auto___17735 + (1));
i__4737__auto___17735 = G__17736;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17726 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17727 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17728 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17729 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17730 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17731 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17732 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17733 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17730);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17731);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17732);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17733);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17729);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17728);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17727);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17726);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq17725){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17725));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17746 = arguments.length;
var i__4737__auto___17747 = (0);
while(true){
if((i__4737__auto___17747 < len__4736__auto___17746)){
args__4742__auto__.push((arguments[i__4737__auto___17747]));

var G__17748 = (i__4737__auto___17747 + (1));
i__4737__auto___17747 = G__17748;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17738 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17739 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17740 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17741 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17742 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17743 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17744 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17745 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17742);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17743);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17744);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17745);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17741);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17740);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17739);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17738);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq17737){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17737));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17758 = arguments.length;
var i__4737__auto___17759 = (0);
while(true){
if((i__4737__auto___17759 < len__4736__auto___17758)){
args__4742__auto__.push((arguments[i__4737__auto___17759]));

var G__17760 = (i__4737__auto___17759 + (1));
i__4737__auto___17759 = G__17760;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17750 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17751 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17752 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17753 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17754 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17755 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17756 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17757 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17754);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17755);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17756);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17757);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17753);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17752);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17751);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17750);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq17749){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17749));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17768 = arguments.length;
var i__4737__auto___17769 = (0);
while(true){
if((i__4737__auto___17769 < len__4736__auto___17768)){
args__4742__auto__.push((arguments[i__4737__auto___17769]));

var G__17770 = (i__4737__auto___17769 + (1));
i__4737__auto___17769 = G__17770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17762 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17763 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17764 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17765 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17766 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__17767 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17765);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17766);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17767);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17764);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17763);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17762);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq17761){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17761));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17780 = arguments.length;
var i__4737__auto___17781 = (0);
while(true){
if((i__4737__auto___17781 < len__4736__auto___17780)){
args__4742__auto__.push((arguments[i__4737__auto___17781]));

var G__17782 = (i__4737__auto___17781 + (1));
i__4737__auto___17781 = G__17782;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17772 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17773 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17774 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17775 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17776 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17777 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17778 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17779 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17776);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17777);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17778);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17779);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17775);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17774);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17773);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17772);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq17771){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17771));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17792 = arguments.length;
var i__4737__auto___17793 = (0);
while(true){
if((i__4737__auto___17793 < len__4736__auto___17792)){
args__4742__auto__.push((arguments[i__4737__auto___17793]));

var G__17794 = (i__4737__auto___17793 + (1));
i__4737__auto___17793 = G__17794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__17784 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__17785 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__17786 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__17787 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__17788 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__17789 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__17790 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__17791 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17788);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__17789);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__17790);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17791);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17787);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__17786);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__17785);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17784);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq17783){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17783));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17799 = arguments.length;
var i__4737__auto___17800 = (0);
while(true){
if((i__4737__auto___17800 < len__4736__auto___17799)){
args__4742__auto__.push((arguments[i__4737__auto___17800]));

var G__17801 = (i__4737__auto___17800 + (1));
i__4737__auto___17800 = G__17801;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$s__17795__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$goog$string$StringBuffer,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_out_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__17795__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__17795__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq17796){
var G__17797 = cljs.core.first(seq17796);
var seq17796__$1 = cljs.core.next(seq17796);
var G__17798 = cljs.core.first(seq17796__$1);
var seq17796__$2 = cljs.core.next(seq17796__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17797,G__17798,seq17796__$2);
}));

