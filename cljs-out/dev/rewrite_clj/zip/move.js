// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.zip.move');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__22277 = zloc;
var G__22277__$1 = (((G__22277 == null))?null:clojure.zip.right(G__22277));
if((G__22277__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__22277__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__22278 = zloc;
var G__22278__$1 = (((G__22278 == null))?null:clojure.zip.left(G__22278));
if((G__22278__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__22278__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__22279 = zloc;
var G__22279__$1 = (((G__22279 == null))?null:clojure.zip.down(G__22279));
if((G__22279__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__22279__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__22280 = zloc;
var G__22280__$1 = (((G__22280 == null))?null:clojure.zip.up(G__22280));
if((G__22280__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__22280__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__4126__auto__ = (function (){var G__22282 = zloc;
var G__22282__$1 = (((G__22282 == null))?null:clojure.zip.next(G__22282));
if((G__22282__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.next,G__22282__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,cljs.core.cst$kw$rewrite_DASH_clj$zip$move_SLASH_end_QMARK_,true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__4126__auto__ = cljs.core.not(zloc);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = clojure.zip.end_QMARK_(zloc);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$rewrite_DASH_clj$zip$move_SLASH_end_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.right(zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left(clojure.zip.left(zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__22283 = zloc;
var G__22283__$1 = (((G__22283 == null))?null:clojure.zip.prev(G__22283));
if((G__22283__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,G__22283__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__22284 = zloc;
var G__22284__$1 = (((G__22284 == null))?null:clojure.zip.leftmost(G__22284));
if((G__22284__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__22284__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__22285 = zloc;
var G__22285__$1 = (((G__22285 == null))?null:clojure.zip.rightmost(G__22285));
if((G__22285__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__22285__$1);
}
});
