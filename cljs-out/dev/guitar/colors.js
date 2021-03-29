// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.colors.rand_color = (function guitar$colors$rand_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24233 = arguments.length;
var i__4737__auto___24234 = (0);
while(true){
if((i__4737__auto___24234 < len__4736__auto___24233)){
args__4742__auto__.push((arguments[i__4737__auto___24234]));

var G__24235 = (i__4737__auto___24234 + (1));
i__4737__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.colors.rand_color.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.colors.rand_color.cljs$core$IFn$_invoke$arity$variadic = (function (existing_colors){
return cljs.core.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(existing_colors),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(8))));
}));

(guitar.colors.rand_color.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.colors.rand_color.cljs$lang$applyTo = (function (seq24232){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24232));
}));

