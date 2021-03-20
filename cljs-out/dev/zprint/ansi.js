// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.ansi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
zprint.ansi.ansi_codes = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$bright_DASH_red,cljs.core.cst$kw$bold,cljs.core.cst$kw$bright_DASH_cyan,cljs.core.cst$kw$back_DASH_magenta,cljs.core.cst$kw$bright_DASH_blue,cljs.core.cst$kw$italic_DASH_off,cljs.core.cst$kw$blink,cljs.core.cst$kw$bright_DASH_green,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$back_DASH_green,cljs.core.cst$kw$back_DASH_bright_DASH_blue,cljs.core.cst$kw$white,cljs.core.cst$kw$reset,cljs.core.cst$kw$back_DASH_blue,cljs.core.cst$kw$hidden_DASH_off,cljs.core.cst$kw$yellow,cljs.core.cst$kw$back_DASH_bright_DASH_cyan,cljs.core.cst$kw$bright_DASH_purple,cljs.core.cst$kw$back_DASH_yellow,cljs.core.cst$kw$back_DASH_bright_DASH_magenta,cljs.core.cst$kw$green,cljs.core.cst$kw$back_DASH_purple,cljs.core.cst$kw$blink_DASH_off,cljs.core.cst$kw$cyan,cljs.core.cst$kw$bright_DASH_white,cljs.core.cst$kw$back_DASH_bright_DASH_red,cljs.core.cst$kw$strike_DASH_off,cljs.core.cst$kw$underline_DASH_off,cljs.core.cst$kw$back_DASH_bright_DASH_white,cljs.core.cst$kw$normal,cljs.core.cst$kw$back_DASH_bright_DASH_green,cljs.core.cst$kw$underline,cljs.core.cst$kw$xsf,cljs.core.cst$kw$back_DASH_black,cljs.core.cst$kw$back_DASH_cyan,cljs.core.cst$kw$strike,cljs.core.cst$kw$back_DASH_white,cljs.core.cst$kw$back_DASH_red,cljs.core.cst$kw$hidden,cljs.core.cst$kw$back_DASH_bright_DASH_purple,cljs.core.cst$kw$red,cljs.core.cst$kw$blue,cljs.core.cst$kw$off,cljs.core.cst$kw$reverse_DASH_off,cljs.core.cst$kw$magenta,cljs.core.cst$kw$purple,cljs.core.cst$kw$italic,cljs.core.cst$kw$faint,cljs.core.cst$kw$none,cljs.core.cst$kw$back_DASH_bright_DASH_black,cljs.core.cst$kw$reverse,cljs.core.cst$kw$bright_DASH_black,cljs.core.cst$kw$back_DASH_bright_DASH_yellow,cljs.core.cst$kw$black],[(95),(91),(1),(96),(45),(94),(23),(5),(92),(93),(42),(104),(37),(0),(44),(28),(33),(106),(95),(43),(105),(32),(45),(25),(36),(97),(101),(29),(24),(107),(22),(102),(4),(38),(40),(46),(9),(47),(41),(8),(105),(31),(34),(0),(27),(35),(35),(3),(2),(30),(100),(7),(90),(103),(30)]);
/**
 * Wraps a string with ANSI escape codes.
 */
zprint.ansi.color_str = (function zprint$ansi$color_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28254 = arguments.length;
var i__4737__auto___28255 = (0);
while(true){
if((i__4737__auto___28255 < len__4736__auto___28254)){
args__4742__auto__.push((arguments[i__4737__auto___28255]));

var G__28256 = (i__4737__auto___28255 + (1));
i__4737__auto___28255 = G__28256;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic = (function (s,ansi){
var ansi_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.ansi.ansi_codes,ansi)));
return ["\u001B","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ansi_str),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\u001B","[","0","m"].join('');
}));

(zprint.ansi.color_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.ansi.color_str.cljs$lang$applyTo = (function (seq28252){
var G__28253 = cljs.core.first(seq28252);
var seq28252__$1 = cljs.core.next(seq28252);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28253,seq28252__$1);
}));

