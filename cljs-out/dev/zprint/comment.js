// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.comment');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('zprint.zutil');
/**
 * Produce a blank string of desired size.
 */
zprint.comment.blanks = (function zprint$comment$blanks(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
});
/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.comment.split_lf = (function zprint$comment$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(input)){
return out;
} else {
var next_lf = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),next_lf):input);
var G__24352 = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(next_lf + (1))):null);
var G__24353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,chunk);
input = G__24352;
out = G__24353;
continue;
}
break;
}
});
/**
 * Given a tag into which you can go down from rewrite-clj, which must be
 *   a collection of some kind, return the size the l-str.  All of the tag
 *   values into which you can go down must be in this list for indent-before
 *   to work correctly.  It uses these values when it steps up out of one of
 *   these things to see how big the thing would have been if it showed up
 *   as characters.
 */
zprint.comment.tag_l_size = (function zprint$comment$tag_l_size(t){
var G__24354 = t;
var G__24354__$1 = (((G__24354 instanceof cljs.core.Keyword))?G__24354.fqn:null);
switch (G__24354__$1) {
case "list":
return (1);

break;
case "vector":
return (1);

break;
case "set":
return (2);

break;
case "map":
return (1);

break;
case "uneval":
return (2);

break;
case "reader-macro":
return (1);

break;
case "meta":
return (1);

break;
case "quote":
return (1);

break;
case "syntax-quote":
return (1);

break;
case "fn":
return (2);

break;
case "unquote":
return (1);

break;
case "deref":
return (1);

break;
case "namespaced-map":
return (1);

break;
default:
return (0);

}
});
/**
 * Take a zloc and move left if possible, or move up if necessary.
 *   Return a vector with [up-size new-zloc]
 */
zprint.comment.left_or_up = (function zprint$comment$left_or_up(zloc){
var ploc = zloc;
var total_up = (0);
while(true){
var next_left = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zutil.left_STAR_.call(null,ploc));
if(cljs.core.truth_(next_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,next_left], null);
} else {
var moving_up = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zutil.up_STAR_.call(null,ploc));
var up_tag = (cljs.core.truth_(moving_up)?(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(moving_up) : zprint.zutil.tag.call(null,moving_up)):null);
var up_size = zprint.comment.tag_l_size(up_tag);
if(cljs.core.not(moving_up)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,null], null);
} else {
var G__24356 = moving_up;
var G__24357 = (total_up + up_size);
ploc = G__24356;
total_up = G__24357;
continue;
}
}
break;
}
});
/**
 * Given a string, return the number of characters to the right
 *   of any newlines in the string.  Will return nil if no newlines
 *   in the string.
 */
zprint.comment.length_after_newline = (function zprint$comment$length_after_newline(s){
var nl_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count(nl_split) - (1));
if((nl_num === (0))){
return null;
} else {
return (cljs.core.count(cljs.core.last(nl_split)) - (1));
}
});
/**
 * Given a zloc, find the amount of printing space before it on its
 *   current line.
 */
zprint.comment.length_before = (function zprint$comment$length_before(zloc){
var vec__24358 = zprint.comment.left_or_up(zloc);
var up_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24358,(0),null);
var next_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24358,(1),null);
var ploc = next_zloc;
var indent_before = up_size;
while(true){
if(cljs.core.not(ploc)){
return indent_before;
} else {
var zstr = (cljs.core.truth_(ploc)?(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zfns.zstring.call(null,ploc)):"");
var length_right_of_newline = zprint.comment.length_after_newline(zstr);
var vec__24364 = zprint.comment.left_or_up(ploc);
var up_size__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(0),null);
var next_zloc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(1),null);
if(cljs.core.truth_(length_right_of_newline)){
return (length_right_of_newline + indent_before);
} else {
var G__24367 = next_zloc__$1;
var G__24368 = ((indent_before + cljs.core.count(zstr)) + up_size__$1);
ploc = G__24367;
indent_before = G__24368;
continue;
}
}
break;
}
});
/**
 * If this is an inline comment, returns a vector with the amount
 *   of space that was between this and the previous element and the
 *   starting column of this inline comment.  That means that if we
 *   go left, we get something other than whitespace before a newline.
 *   If we get only whitespace before a newline, then this is considered
 *   an inline comment if the comment at the end of the previous line
 *   was an inline comment and we were aligned with that comment.
 *   Assumes zloc is a comment.
 */
zprint.comment.inlinecomment_QMARK_ = (function zprint$comment$inlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
var passed_nl_QMARK_ = false;
while(true){
var vec__24372 = (function (){var tnloc = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.ztag.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,cljs.core.cst$kw$whitespace)){
var nstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.zstring.call(null,nloc));
var trim_nstr = clojure.string.trimr(nstr);
if((((trim_nstr).length) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,(spaces + (cljs.core.count(nstr) - ((trim_nstr).length)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$whitespace,spaces], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tnloc,spaces], null);
}
})();
var tnloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(0),null);
var spaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(1),null);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,cljs.core.cst$kw$newline)){
var G__24375 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__24376 = spaces__$1;
var G__24377 = true;
nloc = G__24375;
spaces = G__24376;
passed_nl_QMARK_ = G__24377;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,cljs.core.cst$kw$comment_DASH_inline)))){
if(cljs.core.truth_((zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.comment.inlinecomment_QMARK_.call(null,nloc)))){
var nloc_length_before = zprint.comment.length_before(nloc);
var zloc_length_before = zprint.comment.length_before(zloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nloc_length_before,zloc_length_before)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zloc_length_before], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,cljs.core.cst$kw$whitespace)){
if(cljs.core.truth_(passed_nl_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zprint.comment.length_before(zloc)], null);
}
} else {
var G__24378 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__24379 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces__$1);
var G__24380 = passed_nl_QMARK_;
nloc = G__24378;
spaces = G__24379;
passed_nl_QMARK_ = G__24380;
continue;

}
}
}
}
break;
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.comment.last_space = (function zprint$comment$last_space(s,from_index){
var from_index__$1 = (function (){var x__4217__auto__ = (cljs.core.count(s) - (1));
var y__4218__auto__ = from_index;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var rev_seq = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__24381_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__24381_SHARP_," ");
}),rev_seq);
var space_index = (from_index__$1 - cljs.core.count(seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.comment.next_space = (function zprint$comment$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count(s))){
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__24382_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__24382_SHARP_," ");
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(from_index__$1,cljs.core.seq(s)));
var space_index = (from_index__$1 + cljs.core.count(seq_after_space));
if((space_index >= cljs.core.count(s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.comment.wrap_comment = (function zprint$comment$wrap_comment(width,p__24383,start){
var vec__24384 = p__24383;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(1),null);
var stype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(2),null);
var element = vec__24384;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,cljs.core.cst$kw$comment_DASH_inline)))))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find(/;*/,s);
var rest_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(semi_str));
var space_str = cljs.core.re_find(/ */,rest_str);
var rest_str__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest_str,cljs.core.count(space_str));
var newline_QMARK_ = cljs.core.re_find(/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count(semi_str)) - cljs.core.count(space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(comment_str)){
if((cljs.core.count(out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(38)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_((cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(39)], null)):out));
}
} else {
var last_space_index = (((((comment_str).length) <= comment_width__$1))?(((comment_str).length) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__4126__auto__ = zprint.comment.next_space(comment_str,(0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (((comment_str).length) - (1));
}
})():(function (){var or__4126__auto__ = zprint.comment.last_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = zprint.comment.next_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (((comment_str).length) - (1));
}
}
})()));
var next_comment = clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(comment_str,(0),(last_space_index + (1))));
var G__24387 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(comment_str,(last_space_index + (1)));
var G__24388 = (((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,stype], null)):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(start))].join(''),cljs.core.cst$kw$none,cljs.core.cst$kw$indent,(40)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,cljs.core.cst$kw$comment_DASH_wrap], null)));
comment_str = G__24387;
out = G__24388;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.comment.loc_vec = (function zprint$comment$loc_vec(start,p__24389){
var vec__24390 = p__24389;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24390,(0),null);
var split = zprint.comment.split_lf(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(split),(1))){
return (start + cljs.core.count(s));
} else {
return cljs.core.count(cljs.core.last(split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec. Accepts a beginning indent.
 */
zprint.comment.style_loc_vec = (function zprint$comment$style_loc_vec(indent,style_vec){
return cljs.core.butlast(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(zprint.comment.loc_vec,indent,style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.comment.lift_vec = (function zprint$comment$lift_vec(out_vec,element){
if(typeof cljs.core.first(element) === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not(element_vec)){
return out;
} else {
var G__24393 = cljs.core.next(element_vec);
var G__24394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(element_vec));
element_vec = G__24393;
out = G__24394;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.comment.lift_style_vec = (function zprint$comment$lift_style_vec(style_vec){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.comment.fzprint_wrap_comments = (function zprint$comment$fzprint_wrap_comments(p__24395,style_vec){
var map__24396 = p__24395;
var map__24396__$1 = (((((!((map__24396 == null))))?(((((map__24396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24396):map__24396);
var options = map__24396__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,cljs.core.cst$kw$width);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: indent:",cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(options)], 0));
} else {
}

var start_col = zprint.comment.style_loc_vec((function (){var or__4126__auto__ = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),style_vec);
var _ = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var ___$1 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col], 0)):null);
var wrap_style_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var out_style_vec = zprint.comment.lift_style_vec(wrap_style_vec);
return out_style_vec;
});
/**
 * Find a the first element of this type working from the end of a 
 *   style-vec.  Return the index of the element.
 */
zprint.comment.find_element_from_end = (function zprint$comment$find_element_from_end(element_pred_QMARK_,style_vec){
var index = (cljs.core.count(style_vec) - (1));
while(true){
if((index < (0))){
return null;
} else {
var vec__24398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24398,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24398,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24398,(2),null);
if(cljs.core.truth_((element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : element_pred_QMARK_.call(null,e)))){
return index;
} else {
var G__24401 = (index - (1));
index = G__24401;
continue;
}
}
break;
}
});
/**
 * Given a style-vec, how big is it in actual characters.  This doesn't
 *   handle newlines.
 */
zprint.comment.line_size = (function zprint$comment$line_size(style_vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.loc_vec,(0)),style_vec));
});
/**
 * Given a style-vec, whose last element in a comment, find the amount
 *   of space before that comment on the line.
 */
zprint.comment.space_before_comment = (function zprint$comment$space_before_comment(style_vec){
var indent_index = zprint.comment.find_element_from_end((function (p1__24402_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24402_SHARP_,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24402_SHARP_,cljs.core.cst$kw$newline)));
}),style_vec);
var this_line_vec = (cljs.core.truth_(indent_index)?cljs.core.nthnext(style_vec,indent_index):style_vec);
return zprint.comment.line_size(cljs.core.butlast(this_line_vec));
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.comment.fzprint_inline_comments = (function zprint$comment$fzprint_inline_comments(p__24403,style_vec){
var map__24404 = p__24403;
var map__24404__$1 = (((((!((map__24404 == null))))?(((((map__24404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24404):map__24404);
var options = map__24404__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24404__$1,cljs.core.cst$kw$width);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-inline-comments:",style_vec], 0))], 0));
} else {
}

var cvec = style_vec;
var last_out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",null,null], null);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__24415 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415,(2),null);
var element = vec__24415;
var vec__24418 = cljs.core.second(cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(1),null);
var ne = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(2),null);
var nn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(3),null);
var next_element = vec__24418;
var vec__24421 = last_out;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(1),null);
var le = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(2),null);
var new_element = ((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$newline)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ne,cljs.core.cst$kw$comment_DASH_inline))))?(((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,cljs.core.cst$kw$comment)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,cljs.core.cst$kw$comment_DASH_inline))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(nn),c,cljs.core.cst$kw$whitespace,(25)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(zprint.comment.space_before_comment(out)))].join(''),c,cljs.core.cst$kw$indent,(41)], null)):element
);
var G__24424 = cljs.core.next(cvec);
var G__24425 = new_element;
var G__24426 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_element);
cvec = G__24424;
last_out = G__24425;
out = G__24426;
continue;
}
break;
}
});
zprint.comment.max_aligned_inline_comment_distance = (5);
/**
 * Given a style-vec, find previously aligned inline comments and
 *   output the as a sequence of vectors of comments. The previously
 *   aligned comments do not have to be consecutive, but they can't
 *   be separated by more than max-aligned-inline-comment-distance.
 *   Each comment itself is a vector: [indent-index inline-comment-index],
 *   yielding a [[[indent-index inline-comment-index] [indent-index
 *   inline-comment-index] ...] ...].  The indexes are into the
 *   style-vec.
 */
zprint.comment.find_aligned_inline_comments = (function zprint$comment$find_aligned_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var current_column = (0);
var distance = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
var out__$1 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
return out__$1;
} else {
var vec__24430 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(2),null);
var spaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(3),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(4),null);
var element = vec__24430;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$comment_DASH_inline)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_column,current_column)){
var G__24433 = cljs.core.next(cvec);
var G__24434 = (index + (1));
var G__24435 = null;
var G__24436 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-aligned-inline-comments a:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__24437 = current_column;
var G__24438 = (0);
var G__24439 = out;
cvec = G__24433;
index = G__24434;
last_indent = G__24435;
current_seq = G__24436;
current_column = G__24437;
distance = G__24438;
out = G__24439;
continue;
} else {
var G__24440 = cljs.core.next(cvec);
var G__24441 = (index + (1));
var G__24442 = null;
var G__24443 = (cljs.core.truth_(last_indent)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)], null):(function (){
throw (new Error(["find-aligned-inline-comments b:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__24444 = start_column;
var G__24445 = (0);
var G__24446 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__24440;
index = G__24441;
last_indent = G__24442;
current_seq = G__24443;
current_column = G__24444;
distance = G__24445;
out = G__24446;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$newline)))){
if((distance >= zprint.comment.max_aligned_inline_comment_distance)){
var G__24447 = cljs.core.next(cvec);
var G__24448 = (index + (1));
var G__24449 = index;
var G__24450 = cljs.core.PersistentVector.EMPTY;
var G__24451 = (0);
var G__24452 = (0);
var G__24453 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__24447;
index = G__24448;
last_indent = G__24449;
current_seq = G__24450;
current_column = G__24451;
distance = G__24452;
out = G__24453;
continue;
} else {
var G__24454 = cljs.core.next(cvec);
var G__24455 = (index + (1));
var G__24456 = index;
var G__24457 = current_seq;
var G__24458 = current_column;
var G__24459 = (distance + (1));
var G__24460 = out;
cvec = G__24454;
index = G__24455;
last_indent = G__24456;
current_seq = G__24457;
current_column = G__24458;
distance = G__24459;
out = G__24460;
continue;
}
} else {
var G__24461 = cljs.core.next(cvec);
var G__24462 = (index + (1));
var G__24463 = last_indent;
var G__24464 = current_seq;
var G__24465 = current_column;
var G__24466 = distance;
var G__24467 = out;
cvec = G__24461;
index = G__24462;
last_indent = G__24463;
current_seq = G__24464;
current_column = G__24465;
distance = G__24466;
out = G__24467;
continue;

}
}
}
break;
}
});
/**
 * Given a style-vec, find consecutive inline comments and output
 *   the as a sequence of vectors of comments.  Each comment itself
 *   is a vector: [indent-index inline-comment-index], yielding a
 *   [[[indent-index inline-comment-index] [indent-index inline-comment-index]
 *   ...] ...]
 */
zprint.comment.find_consecutive_inline_comments = (function zprint$comment$find_consecutive_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__24471 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(2),null);
var element = vec__24471;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$comment_DASH_inline)){
var G__24474 = cljs.core.next(cvec);
var G__24475 = (index + (1));
var G__24476 = null;
var G__24477 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-consecutive-inline-comments:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__24478 = out;
cvec = G__24474;
index = G__24475;
last_indent = G__24476;
current_seq = G__24477;
out = G__24478;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$newline)))){
var G__24479 = cljs.core.next(cvec);
var G__24480 = (index + (1));
var G__24481 = index;
var G__24482 = (cljs.core.truth_(last_indent)?cljs.core.PersistentVector.EMPTY:current_seq);
var G__24483 = (cljs.core.truth_(last_indent)?(((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out):out);
cvec = G__24479;
index = G__24480;
last_indent = G__24481;
current_seq = G__24482;
out = G__24483;
continue;
} else {
var G__24484 = cljs.core.next(cvec);
var G__24485 = (index + (1));
var G__24486 = last_indent;
var G__24487 = current_seq;
var G__24488 = out;
cvec = G__24484;
index = G__24485;
last_indent = G__24486;
current_seq = G__24487;
out = G__24488;
continue;

}
}
}
break;
}
});
/**
 * Takes a single vector of [indent-index comment-index] and will show the
 *   column on the line in which the comment starts.
 */
zprint.comment.comment_column = (function zprint$comment$comment_column(p__24489,style_vec){
var vec__24490 = p__24489;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(0),null);
var comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(1),null);
if(cljs.core.vector_QMARK_(style_vec)){
} else {
throw (new Error(["comment-column: style-vec not a vector!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_vec)].join('')));
}

var index = indent_index;
var column = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,comment_index)){
return column;
} else {
var G__24493 = (index + (1));
var G__24494 = zprint.comment.loc_vec(column,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index));
index = G__24493;
column = G__24494;
continue;
}
break;
}
});
/**
 * Take a single inline comment vector:
 *   [indent-index inline-comment-index] 
 *   and replace it with [inline-comment-index start-column spaces-before].
 */
zprint.comment.comment_vec_column = (function zprint$comment$comment_vec_column(style_vec,p__24495){
var vec__24496 = p__24495;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(0),null);
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24496,(1),null);
var comment_vec = vec__24496;
var start_column = zprint.comment.comment_column(comment_vec,style_vec);
var spaces_before = zprint.comment.loc_vec((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,(inline_comment_index - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_comment_index,start_column,spaces_before], null);
});
/**
 * Take a single vector of inline comments
 *   [[indent-index inline-comment-index] [indent-index inline-comment-index]
 * ...] and replace it with [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...]
 */
zprint.comment.comment_vec_seq_column = (function zprint$comment$comment_vec_seq_column(style_vec,comment_vec_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_column,style_vec),comment_vec_seq);
});
/**
 * Take a seq of all of the comments as produced by 
 *   find-consecutive-inline-comments, and turn it into:
 *   [[[inline-comment-index start-column spaces-before] [inline-comment-index
 *   start-column spaces-before]
 *   ...] ...]
 */
zprint.comment.comment_vec_all_column = (function zprint$comment$comment_vec_all_column(style_vec,comment_vec_all){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_seq_column,style_vec),comment_vec_all);
});
/**
 * Given a set of inline comments:
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], determine
 * the minimum column at which they could be aligned.
 */
zprint.comment.minimum_column = (function zprint$comment$minimum_column(comment_vec){
var minimum_vec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24499_SHARP_){
return ((cljs.core.second(p1__24499_SHARP_) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__24499_SHARP_,(2))) + (1));
}),comment_vec);
var minimum_col = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,minimum_vec);
return minimum_col;
});
/**
 * Given a new start-column, and a vector 
 *   [[inline-comment-index start-column spaces-before]
 *   and a style-vec, return a new style-vec with the inline-comment starting
 *   at a new column.
 */
zprint.comment.change_start_column = (function zprint$comment$change_start_column(new_start_column,style_vec,p__24500){
var vec__24501 = p__24500;
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(1),null);
var spaces_before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(2),null);
var comment_vec = vec__24501;
var delta_spaces = (new_start_column - start_column);
var new_spaces = (spaces_before + delta_spaces);
var previous_element_index = (inline_comment_index - (1));
var vec__24504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,previous_element_index);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24504,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24504,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24504,(2),null);
var previous_element = vec__24504;
var new_previous_element = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$indent))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces))].join(''),c,e], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$whitespace))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces)),c,e,(26)], null):(function(){throw (new Error(["change-start-column: comment preceded by neither"," an :indent nor :whitespace!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')))})()
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(style_vec,previous_element_index,new_previous_element);
});
/**
 * Given one set of inline comments: 
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], align them 
 * as best as possible, and return the modified style-vec.
 */
zprint.comment.align_comment_vec = (function zprint$comment$align_comment_vec(style_vec,comment_vec){
var minimum_col = zprint.comment.minimum_column(comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.change_start_column,minimum_col),style_vec,comment_vec);
});
/**
 * Given the current style-vec, align all consecutive inline comments.
 */
zprint.comment.fzprint_align_inline_comments = (function zprint$comment$fzprint_align_inline_comments(options,style_vec){
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-align-inline-comments: style-vec:",style_vec], 0))], 0));
} else {
}

var style = cljs.core.cst$kw$inline_DASH_align_DASH_style.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$none)){
return style_vec;
} else {
var comment_vec = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$aligned))?zprint.comment.find_aligned_inline_comments(style_vec):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$consecutive))?zprint.comment.find_consecutive_inline_comments(style_vec):null));
var comment_vec_column = zprint.comment.comment_vec_all_column(style_vec,comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.align_comment_vec,style_vec,comment_vec_column);
}
});
