// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.insert_right_STAR_ = clojure.zip.insert_right;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$comma)));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__22420 = arguments.length;
switch (G__22420) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.right,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(f,zprint.zutil.whitespace_QMARK_,zloc) : zprint.zutil.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc));
}));

(zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2);

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$comma)));
});
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__22422 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22422,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22422,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$f))?style:((zprint.zutil.zfocus(zloc,floc))?cljs.core.cst$kw$f:cljs.core.cst$kw$b));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$uneval);
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$meta);
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$quote);
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$reader_DASH_macro);
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$namespaced_DASH_map);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_find(/^#:/,(rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)));
}
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$comment);
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$newline);
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond_no_comment = (function zprint$zutil$zsecond_no_comment(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst_no_comment(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__22425 = zprint.zutil.zfirst(zloc);
var G__22425__$1 = (((G__22425 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22425) : zprint.zutil.right_STAR_.call(null,G__22425)));
var G__22425__$2 = (((G__22425__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22425__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22425__$1)));
var G__22425__$3 = (((G__22425__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22425__$2) : zprint.zutil.right_STAR_.call(null,G__22425__$2)));
if((G__22425__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22425__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22425__$3));
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird_no_comment = (function zprint$zutil$zthird_no_comment(zloc){
var G__22426 = zprint.zutil.zfirst_no_comment(zloc);
var G__22426__$1 = (((G__22426 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22426) : zprint.zutil.right_STAR_.call(null,G__22426)));
var G__22426__$2 = (((G__22426__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__22426__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__22426__$1)));
var G__22426__$3 = (((G__22426__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22426__$2) : zprint.zutil.right_STAR_.call(null,G__22426__$2)));
if((G__22426__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__22426__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__22426__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__22427 = zprint.zutil.zfirst(zloc);
var G__22427__$1 = (((G__22427 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22427) : zprint.zutil.right_STAR_.call(null,G__22427)));
var G__22427__$2 = (((G__22427__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$1)));
var G__22427__$3 = (((G__22427__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22427__$2) : zprint.zutil.right_STAR_.call(null,G__22427__$2)));
var G__22427__$4 = (((G__22427__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$3)));
var G__22427__$5 = (((G__22427__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__22427__$4) : zprint.zutil.right_STAR_.call(null,G__22427__$4)));
if((G__22427__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__22427__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__22428 = zprint.zutil.zrightnws(nloc);
var G__22429 = nloc;
nloc = G__22428;
ploc = G__22429;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__22430 = zprint.zutil.zleftnws(nloc);
var G__22431 = nloc;
nloc = G__22430;
ploc = G__22431;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5718__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5718__auto__)){
var ploc = temp__5718__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__22432 = zprint.zutil.zrightnws(nloc);
var G__22433 = (i - (1));
nloc = G__22432;
i = G__22433;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__22434 = zprint.zutil.zrightnws(nloc);
var G__22435 = (i + (1));
nloc = G__22434;
i = G__22435;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zutil.znl = (function zprint$zutil$znl(){

var G__22436 = rewrite_clj.parser.parse_string("\n");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22436) : zprint.zutil.edn_STAR_.call(null,G__22436));
});
/**
 * Return a sequence of zloc newlines.
 */
zprint.zutil.multi_nl = (function zprint$zutil$multi_nl(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,zprint.zutil.znl()));
});
/**
 * Given a zloc which is a comment, replace it with a zloc which is the
 *   same comment with no newline, and a newline that follows it.  This is
 *   done in the zipper so that later navigation in this area remains
 *   continues to work.
 */
zprint.zutil.split_newline_from_comment = (function zprint$zutil$split_newline_from_comment(zloc){
var comment_no_nl = rewrite_clj.parser.parse_string(clojure.string.replace_first((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),"\n",""));
var new_comment = (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(zloc,comment_no_nl) : zprint.zutil.replace_STAR_.call(null,zloc,comment_no_nl));
var new_comment__$1 = (function (){var G__22437 = new_comment;
var G__22438 = rewrite_clj.parser.parse_string("\n");
return (zprint.zutil.insert_right_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.insert_right_STAR_.cljs$core$IFn$_invoke$arity$2(G__22437,G__22438) : zprint.zutil.insert_right_STAR_.call(null,G__22437,G__22438));
})();
return new_comment__$1;
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including two newlines
 *   for every blank line encountered.  Note that a truly blank line
 *   will show up as one zloc with two newlines in it.  It will have
 *   (= (z/tag nloc) :newline), but it will have both newlines.  To
 *   ease handling of these multi-line newlines, this routine will
 *   split them up into multiple individual newlines.
 */
zprint.zutil.zmap_w_bl = (function zprint$zutil$zmap_w_bl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var blank_QMARK_ = false;
var previous_was_nl_QMARK_ = false;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var ws_QMARK_ = zprint.zutil.whitespace_QMARK_(nloc);
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$newline);
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) > (1)):null);
var emit_nl_QMARK_ = (function (){var or__4126__auto__ = ((blank_QMARK_) && (nl_QMARK_));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return multi_nl_QMARK_;
}
})();
var nl_to_emit = (cljs.core.truth_(emit_nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl((((function (){var or__4126__auto__ = previous_was_nl_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(blank_QMARK_));
}
})())?nl_len:(nl_len + (1))))):(cljs.core.truth_(previous_was_nl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)),(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))], null)
)):null);
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$comment);
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__4126__auto__ = (!(ws_QMARK_));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(nl_QMARK_){
return previous_comment_QMARK_;
} else {
return false;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var G__22439 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__22440 = ((blank_QMARK_)?((ws_QMARK_) || (nl_QMARK_)):nl_QMARK_);
var G__22441 = (cljs.core.truth_((function (){var or__4126__auto__ = result;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return nl_to_emit;
}
})())?(function (){var or__4126__auto__ = ((nl_QMARK_)?previous_comment_QMARK_:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return emit_nl_QMARK_;
}
})():previous_was_nl_QMARK_);
var G__22442 = comment_QMARK_;
var G__22443 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__22439;
blank_QMARK_ = G__22440;
previous_was_nl_QMARK_ = G__22441;
previous_comment_QMARK_ = G__22442;
out = G__22443;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment. The
 *   comment split actually changes the zipper for the rest of the
 *   sequence, where the newline splits do not.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$newline);
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$comment);
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((!(zprint.zutil.whitespace_QMARK_(nloc__$1))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1))], null)):null);
var G__22444 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__22445 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__22444;
out = G__22445;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$newline);
var comma_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$comma)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$whitespace)) && (clojure.string.includes_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),",")))));
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$comment);
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (((((!(zprint.zutil.whitespace_QMARK_(nloc__$1)))) || (comma_QMARK_)))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var nl_len = ((nl_QMARK_)?(zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.length.call(null,nloc__$1)) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,zprint.zutil.multi_nl(nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1))], null)):null);
var G__22446 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__22447 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,nl_to_emit):out
));
nloc = G__22446;
out = G__22447;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$comment);
var nl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$newline);
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment(nloc):nloc);
var result = (cljs.core.truth_((function (){var or__4126__auto__ = (!(zprint.zutil.whitespace_QMARK_(nloc__$1)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(nl_QMARK_){
return previous_comment_QMARK_;
} else {
return false;
}
}
})())?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zfn.call(null,nloc__$1)):null);
var G__22448 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc__$1) : zprint.zutil.right_STAR_.call(null,nloc__$1));
var G__22449 = comment_QMARK_;
var G__22450 = (cljs.core.truth_(result)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result):out);
nloc = G__22448;
previous_comment_QMARK_ = G__22449;
out = G__22450;
continue;
}
break;
}
});
/**
 * Return the count of non-whitespace elements in zloc.  Comments are
 *   counted as one thing, commas are ignored as whitespace.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if(cljs.core.not(nloc)){
return i;
} else {
var G__22451 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__22452 = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(i + (1)):i);
nloc = G__22451;
i = G__22452;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__22453 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__22454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__22453;
out = G__22454;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   only newlines that start and end blank lines.
 */
zprint.zutil.zseqnws_w_bl = (function zprint$zutil$zseqnws_w_bl(zloc){
return zprint.zutil.zmap_w_bl(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__22456 = (function (){var G__22455 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__22455) : zprint.zutil.zremove.call(null,G__22455));
})();
nloc = G__22456;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__22457 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__22457) : zprint.zutil.up_STAR_.call(null,G__22457));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__22458 = xloc;
var G__22459 = ((zprint.zutil.whitespace_QMARK_(xloc))?index:(index + (1)));
nloc = G__22458;
index = G__22459;
continue;
}
break;
}
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22461_SHARP_,p2__22460_SHARP_){
if(cljs.core.truth_((zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1(p2__22460_SHARP_) : zprint.zutil.whitespace_or_comment_QMARK_.call(null,p2__22460_SHARP_)))){
return p1__22461_SHARP_;
} else {
return (p1__22461_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__22462 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__22463 = (0);
var G__22464 = cljs.core.cons(left,out);
nloc = G__22462;
left = G__22463;
out = G__22464;
continue;
}
} else {
var G__22465 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__22466 = (left + (1));
var G__22467 = out;
nloc = G__22465;
left = G__22466;
out = G__22467;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__22468 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__22469 = (0);
var G__22470 = cljs.core.cons(left,out);
nloc = G__22468;
left = G__22469;
out = G__22470;
continue;
}
} else {
var G__22471 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__22472 = ((zprint.zutil.whitespace_QMARK_(nloc))?left:(left + (1)));
var G__22473 = out;
nloc = G__22471;
left = G__22472;
out = G__22473;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__22474 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__22474;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__22475 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__22476 = (remaining_right - (1));
nloc = G__22475;
remaining_right = G__22476;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),cljs.core.cst$kw$fn);
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4115__auto__ = zloc;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__22478 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22478) : rewrite_clj.node.printable_only_QMARK_.call(null,G__22478));
})())));
} else {
return and__4115__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4115__auto__ = zloc;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4115__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4115__auto__ = zloc;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4115__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4115__auto__ = zloc;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4115__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__22479 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__22479) : rewrite_clj.zip.down.call(null,G__22479));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__22480 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__22480) : rewrite_clj.zip.down.call(null,G__22480));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__22481 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22481) : zprint.zutil.edn_STAR_.call(null,G__22481));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,cljs.core.cst$kw$unquote)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,cljs.core.cst$kw$quote)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,cljs.core.cst$kw$syntax_DASH_quote)))){
var G__22482 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22482) : zprint.zutil.zconstant_QMARK_.call(null,G__22482));
} else {
if(cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc))){
var or__4126__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return false;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4115__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4115__auto__;
}
})())){
if(typeof (function (){var G__22483 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__22483) : zprint.zutil.sexpr.call(null,G__22483));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__22485 = (function (){var G__22484 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__22484) : rewrite_clj.zip.right.call(null,G__22484));
})();
nloc = G__22485;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__22486 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__22486) : rewrite_clj.zip.string.call(null,G__22486));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__22487 = (function (){var G__22488 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__22488) : rewrite_clj.zip.right.call(null,G__22488));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__22487) : rewrite_clj.zip.right.call(null,G__22487));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__22489 = (function (){var G__22490 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__22490) : rewrite_clj.zip.right.call(null,G__22490));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__22489) : rewrite_clj.zip.down.call(null,G__22489));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5718__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var doc_zloc = temp__5718__auto__;
var new_doc_zloc = (function (){var G__22491 = doc_zloc;
var G__22492 = (function (){var G__22493 = (function (){var G__22494 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22494) : zprint.zutil.edn_STAR_.call(null,G__22494));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__22493) : rewrite_clj.zip.node.call(null,G__22493));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__22491,G__22492) : zprint.zutil.replace_STAR_.call(null,G__22491,G__22492));
})();
var G__22495 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22495) : zprint.zutil.edn_STAR_.call(null,G__22495));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__22496,pair_seq,ns){
var map__22497 = p__22496;
var map__22497__$1 = (((((!((map__22497 == null))))?(((((map__22497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22497):map__22497);
var map_options = map__22497__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.cst$kw$in_DASH_code_QMARK_);
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.cst$kw$lift_DASH_ns_QMARK_);
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.cst$kw$lift_DASH_ns_DASH_in_DASH_code_QMARK_);
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.cst$kw$unlift_DASH_ns_QMARK_);
if(cljs.core.truth_((function (){var and__4115__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__22506 = cljs.core.first(pair_seq__$1);
var seq__22507 = cljs.core.seq(vec__22506);
var first__22508 = cljs.core.first(seq__22507);
var seq__22507__$1 = cljs.core.next(seq__22507);
var k = first__22508;
var rest_of_pair = seq__22507__$1;
var pair = vec__22506;
var current_ns = (cljs.core.truth_((function (){var and__4115__auto__ = rest_of_pair;
if(and__4115__auto__){
if((!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")))){
var or__4126__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__22523 = ns__$1;
var G__22524 = cljs.core.next(pair_seq__$1);
var G__22525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__22509 = (function (){var G__22510 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__22510) : rewrite_clj.node.token_node.call(null,G__22510));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22509) : zprint.zutil.edn_STAR_.call(null,G__22509));
})(),rest_of_pair));
ns__$1 = G__22523;
pair_seq__$1 = G__22524;
out = G__22525;
continue;
} else {
return null;
}
} else {
var G__22526 = current_ns;
var G__22527 = cljs.core.next(pair_seq__$1);
var G__22528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__22511 = (function (){var G__22512 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__22512) : rewrite_clj.node.token_node.call(null,G__22512));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22511) : zprint.zutil.edn_STAR_.call(null,G__22511));
})(),rest_of_pair));
ns__$1 = G__22526;
pair_seq__$1 = G__22527;
out = G__22528;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__22529 = ns__$1;
var G__22530 = cljs.core.next(pair_seq__$1);
var G__22531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__22529;
pair_seq__$1 = G__22530;
out = G__22531;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = ns;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(lift_ns_QMARK_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__22518 = cljs.core.first(pair_seq__$1);
var seq__22519 = cljs.core.seq(vec__22518);
var first__22520 = cljs.core.first(seq__22519);
var seq__22519__$1 = cljs.core.next(seq__22519);
var k = first__22520;
var rest_of_pair = seq__22519__$1;
var pair = vec__22518;
var current_ns = (cljs.core.truth_((function (){var and__4115__auto__ = rest_of_pair;
if(and__4115__auto__){
if((!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")))){
var or__4126__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__22532 = cljs.core.next(pair_seq__$1);
var G__22533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
pair_seq__$1 = G__22532;
out = G__22533;
continue;
} else {
var G__22534 = cljs.core.next(pair_seq__$1);
var G__22535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__22521 = (function (){var G__22522 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.name((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)))].join(''));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__22522) : rewrite_clj.node.token_node.call(null,G__22522));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__22521) : zprint.zutil.edn_STAR_.call(null,G__22521));
})(),rest_of_pair));
pair_seq__$1 = G__22534;
out = G__22535;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__22536 = zprint.zfns.zstring;
var znumstr_orig_val__22537 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__22538 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__22539 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__22540 = zprint.zfns.zsexpr;
var zsexpr_QMARK__orig_val__22541 = zprint.zfns.zsexpr_QMARK_;
var zseqnws_orig_val__22542 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__22543 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__22544 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__22545 = zprint.zfns.zfocus_style;
var zstart_orig_val__22546 = zprint.zfns.zstart;
var zfirst_orig_val__22547 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__22548 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__22549 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__22550 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__22551 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__22552 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__22553 = zprint.zfns.zfourth;
var znextnws_orig_val__22554 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__22555 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__22556 = zprint.zfns.znthnext;
var zcount_orig_val__22557 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__22558 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__22559 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__22560 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__22561 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__22562 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__22563 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__22564 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__22565 = zprint.zfns.zfocus;
var zfind_path_orig_val__22566 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__22567 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__22568 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__22569 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__22570 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__22571 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__22572 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__22573 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__22574 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__22575 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__22576 = zprint.zfns.ztag;
var zlast_orig_val__22577 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__22578 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__22579 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__22580 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__22581 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__22582 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__22583 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__22584 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__22585 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__22586 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__22587 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__22588 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__22589 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__22590 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__22591 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__22592 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__22593 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__22594 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__22595 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__22596 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__22597 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__22598 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__22599 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__22600 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__22601 = zprint.zfns.zlift_ns;
var zfind_orig_val__22602 = zprint.zfns.zfind;
var ztake_append_orig_val__22603 = zprint.zfns.ztake_append;
var zstring_temp_val__22604 = rewrite_clj.zip.string;
var znumstr_temp_val__22605 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__22606 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__22607 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__22608 = zprint.zutil.sexpr;
var zsexpr_QMARK__temp_val__22609 = zprint.zutil.zsexpr_QMARK_;
var zseqnws_temp_val__22610 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__22611 = zprint.zutil.zseqnws_w_nl;
var zseqnws_w_bl_temp_val__22612 = zprint.zutil.zseqnws_w_bl;
var zfocus_style_temp_val__22613 = zprint.zutil.zfocus_style;
var zstart_temp_val__22614 = zprint.zutil.zstart;
var zfirst_temp_val__22615 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__22616 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__22617 = zprint.zutil.zsecond;
var zsecond_no_comment_temp_val__22618 = zprint.zutil.zsecond_no_comment;
var zthird_temp_val__22619 = zprint.zutil.zthird;
var zthird_no_comment_temp_val__22620 = zprint.zutil.zthird_no_comment;
var zfourth_temp_val__22621 = zprint.zutil.zfourth;
var znextnws_temp_val__22622 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__22623 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__22624 = zprint.zutil.znthnext;
var zcount_temp_val__22625 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__22626 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__22627 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__22628 = zprint.zutil.zmap_w_nl;
var zmap_w_bl_temp_val__22629 = zprint.zutil.zmap_w_bl;
var zmap_w_nl_comma_temp_val__22630 = zprint.zutil.zmap_w_nl_comma;
var zanonfn_QMARK__temp_val__22631 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__22632 = cljs.core.constantly(false);
var zfocus_temp_val__22633 = zprint.zutil.zfocus;
var zfind_path_temp_val__22634 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__22635 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__22636 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__22637 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__22638 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__22639 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__22640 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__22641 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__22642 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__22643 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__22644 = zprint.zutil.ztag;
var zlast_temp_val__22645 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__22646 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__22647 = cljs.core.constantly(false);
var zderef_temp_val__22648 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__22649 = cljs.core.constantly(false);
var zns_QMARK__temp_val__22650 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__22651 = cljs.core.constantly(null);
var zexpandarray_temp_val__22652 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__22653 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__22654 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__22655 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__22656 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__22657 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__22658 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__22659 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__22660 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__22661 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__22662 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__22663 = cljs.core.constantly(null);
var zdotdotdot_temp_val__22664 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__22665 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__22666 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__22667 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__22668 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__22669 = zprint.zutil.zlift_ns;
var zfind_temp_val__22670 = zprint.zutil.zfind;
var ztake_append_temp_val__22671 = zprint.zutil.ztake_append;
(zprint.zfns.zstring = zstring_temp_val__22604);

(zprint.zfns.znumstr = znumstr_temp_val__22605);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__22606);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__22607);

(zprint.zfns.zsexpr = zsexpr_temp_val__22608);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__temp_val__22609);

(zprint.zfns.zseqnws = zseqnws_temp_val__22610);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__22611);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__22612);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__22613);

(zprint.zfns.zstart = zstart_temp_val__22614);

(zprint.zfns.zfirst = zfirst_temp_val__22615);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__22616);

(zprint.zfns.zsecond = zsecond_temp_val__22617);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__22618);

(zprint.zfns.zthird = zthird_temp_val__22619);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__22620);

(zprint.zfns.zfourth = zfourth_temp_val__22621);

(zprint.zfns.znextnws = znextnws_temp_val__22622);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__22623);

(zprint.zfns.znthnext = znthnext_temp_val__22624);

(zprint.zfns.zcount = zcount_temp_val__22625);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__22626);

(zprint.zfns.zmap = zmap_temp_val__22627);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__22628);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__22629);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__22630);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__22631);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__22632);

(zprint.zfns.zfocus = zfocus_temp_val__22633);

(zprint.zfns.zfind_path = zfind_path_temp_val__22634);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__22635);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__22636);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__22637);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__22638);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__22639);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__22640);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__22641);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__22642);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__22643);

(zprint.zfns.ztag = ztag_temp_val__22644);

(zprint.zfns.zlast = zlast_temp_val__22645);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__22646);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__22647);

(zprint.zfns.zderef = zderef_temp_val__22648);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__22649);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__22650);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__22651);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__22652);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__22653);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__22654);

(zprint.zfns.zmap_all = zmap_all_temp_val__22655);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__22656);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__22657);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__22658);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__22659);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__22660);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__22661);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__22662);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__22663);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__22664);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__22665);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__22666);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__22667);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__22668);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__22669);

(zprint.zfns.zfind = zfind_temp_val__22670);

(zprint.zfns.ztake_append = ztake_append_temp_val__22671);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__22603);

(zprint.zfns.zfind = zfind_orig_val__22602);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__22601);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__22600);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__22599);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__22598);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__22597);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__22596);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__22595);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__22594);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__22593);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__22592);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__22591);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__22590);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__22589);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__22588);

(zprint.zfns.zmap_all = zmap_all_orig_val__22587);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__22586);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__22585);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__22584);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__22583);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__22582);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__22581);

(zprint.zfns.zderef = zderef_orig_val__22580);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__22579);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__22578);

(zprint.zfns.zlast = zlast_orig_val__22577);

(zprint.zfns.ztag = ztag_orig_val__22576);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__22575);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__22574);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__22573);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__22572);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__22571);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__22570);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__22569);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__22568);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__22567);

(zprint.zfns.zfind_path = zfind_path_orig_val__22566);

(zprint.zfns.zfocus = zfocus_orig_val__22565);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__22564);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__22563);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__22562);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__22561);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__22560);

(zprint.zfns.zmap = zmap_orig_val__22559);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__22558);

(zprint.zfns.zcount = zcount_orig_val__22557);

(zprint.zfns.znthnext = znthnext_orig_val__22556);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__22555);

(zprint.zfns.znextnws = znextnws_orig_val__22554);

(zprint.zfns.zfourth = zfourth_orig_val__22553);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__22552);

(zprint.zfns.zthird = zthird_orig_val__22551);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__22550);

(zprint.zfns.zsecond = zsecond_orig_val__22549);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__22548);

(zprint.zfns.zfirst = zfirst_orig_val__22547);

(zprint.zfns.zstart = zstart_orig_val__22546);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__22545);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__22544);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__22543);

(zprint.zfns.zseqnws = zseqnws_orig_val__22542);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__orig_val__22541);

(zprint.zfns.zsexpr = zsexpr_orig_val__22540);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__22539);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__22538);

(zprint.zfns.znumstr = znumstr_orig_val__22537);

(zprint.zfns.zstring = zstring_orig_val__22536);
}});
