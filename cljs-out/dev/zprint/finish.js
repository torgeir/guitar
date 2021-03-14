// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.finish');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.ansi');
goog.require('zprint.focus');
zprint.finish.no_style_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$f,(function (p1__29852_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__29852_SHARP_,cljs.core.cst$kw$none)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reverse], null),p1__29852_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reverse], null);
}
}),cljs.core.cst$kw$b,cljs.core.identity,cljs.core.cst$kw$c,cljs.core.identity], null);
/**
 * Is n within the closed range of low to high?
 */
zprint.finish.within_QMARK_ = (function zprint$finish$within_QMARK_(n,p__29853){
var vec__29854 = p__29853;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854,(1),null);
return (((n >= low)) && ((n <= high)));
});
/**
 * Is n within any of the the closed range of low to high?
 */
zprint.finish.within_vec_QMARK_ = (function zprint$finish$within_vec_QMARK_(n,low_high_vec){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.within_QMARK_,n),low_high_vec);
});
/**
 * Ignore any foreground/background designation, and use the
 *   focus and the color to figure out a style.  Intimately 
 *   associated with build-styles.
 *   You don't have to have a color, but you do need a ground.
 *   If the ground is :c, it is used, otherwise the ground is
 *   determined from the focus.  In focus gets :f, otherwise :b.
 *   If you don't have a color, the style you get
 *   is the same as the key for the ground you get from the
 *   focus.  If you don't have a focus, you get the background.
 */
zprint.finish.ground_color_to_style = (function zprint$finish$ground_color_to_style(p__29857,s,color,element,idx){
var map__29858 = p__29857;
var map__29858__$1 = (((((!((map__29858 == null))))?(((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29858):map__29858);
var style_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,cljs.core.cst$kw$style_DASH_map);
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,cljs.core.cst$kw$focus);
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,cljs.core.cst$kw$select);
var output_QMARK_ = (cljs.core.truth_(select)?zprint.finish.within_vec_QMARK_(idx,select):true);
if(cljs.core.truth_(output_QMARK_)){
var G__29862 = (function (){var or__4126__auto__ = color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$none;
}
})();
var fexpr__29861 = (function (){var G__29863 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$cursor_DASH_element))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cursor-element:",s], 0));

return cljs.core.cst$kw$c;
})()
:(cljs.core.truth_((function (){var and__4115__auto__ = focus;
if(cljs.core.truth_(and__4115__auto__)){
return ((zprint.finish.within_QMARK_(idx,focus)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$indent)));
} else {
return and__4115__auto__;
}
})())?cljs.core.cst$kw$f:cljs.core.cst$kw$b));
return (style_map.cljs$core$IFn$_invoke$arity$1 ? style_map.cljs$core$IFn$_invoke$arity$1(G__29863) : style_map.call(null,G__29863));
})();
return (fexpr__29861.cljs$core$IFn$_invoke$arity$1 ? fexpr__29861.cljs$core$IFn$_invoke$arity$1(G__29862) : fexpr__29861.call(null,G__29862));
} else {
return null;
}
});
/**
 * Given [string :style <start>] turn it into
 *   [string :style <start> <length>]
 */
zprint.finish.add_length = (function zprint$finish$add_length(p__29864){
var vec__29865 = p__29864;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29865,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29865,(1),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29865,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,style,start,cljs.core.count(s)], null);
});
/**
 * Take an index and a [string :color element] and produce a
 *   [string :style element] with the correct elements (i.e., the
 *   elements with the correct idx) having a different 
 *   background for focus output. The ctx is a map which
 *   must have a :style-map and may have a :focus.  The
 *   :focus is a two element vector of start and end elements
 *   which are in focus.
 */
zprint.finish.gc_vec_to_style_vec = (function zprint$finish$gc_vec_to_style_vec(ctx,idx,p__29868){
var vec__29869 = p__29868;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29869,(0),null);
var keyword_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29869,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29869,(2),null);
var style = zprint.finish.ground_color_to_style(ctx,s,keyword_color,element,idx);
if(cljs.core.truth_(style)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$none))?style:null),element], null);
} else {
return null;
}
});
/**
 * Take a vector of any length, and trim it to be
 *   only n elements in length.
 */
zprint.finish.trim_vec = (function zprint$finish$trim_vec(n,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,v));
});
/**
 * Take an ssv element which is presumably an indent, and do 1/2
 *   of it.  If the argument is nil, do a newline with no indent.
 */
zprint.finish.elide_indent = (function zprint$finish$elide_indent(ssv_element){
if(cljs.core.truth_(ssv_element)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",clojure.string.replace(cljs.core.first(ssv_element)," ",""))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\n",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.count(cljs.core.first(ssv_element)) - (1)) / (1))," ")),cljs.core.cst$kw$none], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",cljs.core.cst$kw$none], null);
}
});
/**
 * Replace all sequences of nil in the sequence with elide
 */
zprint.finish.replace_nil_seq = (function zprint$finish$replace_nil_seq(ctx,ssv_in,elide){
var last_element = cljs.core.cst$kw$last_DASH_element.cljs$core$IFn$_invoke$arity$1(ctx);
var elide__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(elide),cljs.core.second(last_element),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(last_element,(2))], null);
var ssv = ssv_in;
var doing_nil_QMARK_ = false;
var last_elide = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(ssv)){
if(doing_nil_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.gc_vec_to_style_vec(ctx,(0),(function (){var or__4126__auto__ = last_elide;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return zprint.finish.elide_indent(null);
}
})())),zprint.finish.gc_vec_to_style_vec(ctx,(0),elide__$1)),zprint.finish.gc_vec_to_style_vec(ctx,(0),cljs.core.cst$kw$last_DASH_element.cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
return out;
}
} else {
var this_ssv = cljs.core.first(ssv);
var this_elide = ((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?zprint.finish.elide_indent(this_ssv):null);
var G__29872 = cljs.core.next(ssv);
var G__29873 = (this_ssv == null);
var G__29874 = (cljs.core.truth_(this_elide)?this_elide:last_elide);
var G__29875 = ((((doing_nil_QMARK_) && ((this_ssv == null))))?out:((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.gc_vec_to_style_vec(ctx,(0),this_elide)),zprint.finish.gc_vec_to_style_vec(ctx,(0),elide__$1)),this_ssv):(((this_ssv == null))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,this_ssv)
)));
ssv = G__29872;
doing_nil_QMARK_ = G__29873;
last_elide = G__29874;
out = G__29875;
continue;
}
break;
}
});
/**
 * Given a cvec, generate an index vector which can be input to map
 *   and will make map work like map-indexed -- unless there are
 *   :comment-wrap elements, in which case the :comment-wrap element
 *   will have the same element idx as the previous :comment element.
 */
zprint.finish.index_vec = (function zprint$finish$index_vec(cvec){
var remaining_cvec = cvec;
var idx = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(remaining_cvec)){
return out;
} else {
var vec__29879 = cljs.core.first(remaining_cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(1),null);
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(2),null);
var new_idx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining_cvec),(2)),cljs.core.cst$kw$comment_DASH_wrap))?idx:(idx + (1)));
var G__29882 = cljs.core.next(remaining_cvec);
var G__29883 = new_idx;
var G__29884 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_idx);
remaining_cvec = G__29882;
idx = G__29883;
out = G__29884;
continue;
}
break;
}
});
/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] input.
 *   The focus is a vector of [start-focus end-focus] which are the 
 *   inclusive values for the focus.  The end is inclusive because it 
 *   gets a bit dicey if it was 'beyond', since how much beyond would 
 *   be interesting given the amount of whitespace in the input.
 *   Not clear at this point just what the counts in the focus-vec count,
 *   possibly things with <anything> == :element, possibly just any
 *   [string color <anything>] vector.
 *   From this, build of: [[string :style] [string :style] ...], where
 *   :style might be a color, like :blue or :none, or it might be a 
 *   java-text-pane style (which would have a color encoded in it).  This
 *   is based on the :style-map in the ctx map. Note that this :style-map
 *   doesn't have any relation to the :style-map in the options map.
 */
zprint.finish.cvec_to_style_vec = (function zprint$finish$cvec_to_style_vec(var_args){
var G__29886 = arguments.length;
switch (G__29886) {
case 4:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4 = (function (ctx,cvec,focus_vec,select_vec){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$last_DASH_element,cljs.core.last(cvec));
var str_style_vec_w_nil = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.gc_vec_to_style_vec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx__$1,cljs.core.cst$kw$focus,focus_vec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$select,select_vec], 0))),cvec);
var count_w_nil = cljs.core.count(str_style_vec_w_nil);
var str_style_vec = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,str_style_vec_w_nil);
var elide_vec = (cljs.core.truth_(cljs.core.cst$kw$elide.cljs$core$IFn$_invoke$arity$1(ctx__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elide.cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.cst$kw$none], null):null);
var str_style_vec__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(count_w_nil,cljs.core.count(str_style_vec)))?str_style_vec:(cljs.core.truth_(elide_vec)?zprint.finish.replace_nil_seq(ctx__$1,str_style_vec_w_nil,elide_vec):str_style_vec));
return str_style_vec__$1;
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2 = (function (ctx,cvec){
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3(ctx,cvec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3 = (function (ctx,cvec,focus_vec){
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4(ctx,cvec,focus_vec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$lang$maxFixedArity = 4);

/**
 * Take a [[string :style] [string :style] ...] vector and
 *   build a list of: [[string :style <start> <length>] 
 *                  [string :style <start> <length>]...]
 *   from it.  This will compress strings which have the same style.
 */
zprint.finish.compress_style = (function zprint$finish$compress_style(var_args){
var G__29889 = arguments.length;
switch (G__29889) {
case 2:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2 = (function (str_style_vec,initial_pos){
var ss_vec = str_style_vec;
var current = null;
var pos = initial_pos;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var ss = cljs.core.first(ss_vec);
if(cljs.core.not(ss)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.add_length(current));
} else {
var same_style_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(current),cljs.core.second(ss));
var G__29891 = cljs.core.next(ss_vec);
var G__29892 = ((same_style_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(current)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ss))].join(''),cljs.core.second(current),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(current,(2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ss),cljs.core.second(ss),pos], null));
var G__29893 = (pos + cljs.core.count(cljs.core.first(ss)));
var G__29894 = ((((same_style_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(initial_pos,pos))))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.add_length(current)));
ss_vec = G__29891;
current = G__29892;
pos = G__29893;
out = G__29894;
continue;
}
break;
}
}));

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1 = (function (str_style_vec){
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2(str_style_vec,(0));
}));

(zprint.finish.compress_style.cljs$lang$maxFixedArity = 2);

/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] as input.
 *   and a focus-vec and, possibly, a non-empty cursor-vec.  If
 *   there is a cursor-vec, replace the focus-vec items with a cursor
 *   vec and return a new focus-vec and gcw-vec as [focus-vec gcw-vec], 
 *   else just return with no changes
 */
zprint.finish.replace_focus_w_cursor = (function zprint$finish$replace_focus_w_cursor(gcw_vec,p__29895,cursor_vec){
var vec__29896 = p__29895;
var focus_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29896,(0),null);
var focus_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29896,(1),null);
var focus_vec = vec__29896;
if(cljs.core.empty_QMARK_(cursor_vec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_vec,gcw_vec], null);
} else {
var vec__29899 = cljs.core.split_at(focus_start,gcw_vec);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29899,(0),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29899,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_start,(focus_start + (cljs.core.count(cursor_vec) - (1)))], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(front,cursor_vec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((focus_end - focus_start) + (1)),back)], 0))], null);
}
});
/**
 * Turn a [string :color] into an ansi colored string.
 */
zprint.finish.color_style = (function zprint$finish$color_style(p__29902){
var vec__29903 = p__29902;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(1),null);
if((color == null)){
return s;
} else {
if(cljs.core.coll_QMARK_(color)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zprint.ansi.color_str,s,color);
} else {
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color], 0));
}
}
});
/**
 * Use output from compress-style -- but just the [string :style] part,
 *   which since we used identity as the color map, should be just
 *   [string :color].  Produce a single string with ansi escape sequences embedded
 *   in it.
 */
zprint.finish.color_comp_vec = (function zprint$finish$color_comp_vec(comp_vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.finish.color_style,comp_vec));
});
/**
 * Ensure one number is above a certain value.
 */
zprint.finish.floor = (function zprint$finish$floor(f,n){
if((n >= f)){
return n;
} else {
return f;
}
});
zprint.finish.fzprint_cursor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default-cursor",(0)], null);
/**
 * Take a [<string> cursor-number] pair and produce the style-vec
 *   that will display it. Allow for existing characters.
 *   This is a style-vec that map-style can use, i.e.,
 *   [[string <start> <length>] ...]
 */
zprint.finish.cursor_style = (function zprint$finish$cursor_style(var_args){
var G__29908 = arguments.length;
switch (G__29908) {
case 2:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2 = (function (p__29909,existing_count){
var vec__29910 = p__29909;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29910,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29910,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cursor-style: s:",s,",cursor:",cursor], 0));

if(cljs.core.truth_(cursor)){
var s__$1 = (((cursor >= cljs.core.count(s)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''):s);
var len = cljs.core.count(s__$1);
var cursor__$1 = (function (){var x__4217__auto__ = zprint.finish.floor((0),(len - (1)));
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return cljs.core.filterv((function (p1__29906_SHARP_){
return (!(cljs.core.empty_QMARK_(cljs.core.first(p1__29906_SHARP_))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),cursor__$1),cljs.core.cst$kw$none,cljs.core.cst$kw$element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s__$1,cursor__$1)),cljs.core.cst$kw$none,cljs.core.cst$kw$cursor_DASH_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(cursor__$1 + (1)),len),cljs.core.cst$kw$none,cljs.core.cst$kw$element], null)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.cst$kw$none,cljs.core.cst$kw$element], null)], null);
}
}));

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1 = (function (str_cursor){
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2(str_cursor,(0));
}));

(zprint.finish.cursor_style.cljs$lang$maxFixedArity = 2);

/**
 * Find out how many newlines are in a string, and where they appear.
 *   Returns either nil for no newlines, or a vector [<count> #{:b :m :e}]
 *   for beginning, middle, or end (or all three).
 */
zprint.finish.newline_vec = (function zprint$finish$newline_vec(s){
var nl_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count(nl_split) - (1));
if((!((nl_num === (0))))){
var where = ((cljs.core.empty_QMARK_(cljs.core.first(nl_split)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$b,null], null), null):cljs.core.PersistentHashSet.EMPTY);
var where__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(nl_split)," "))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(where,cljs.core.cst$kw$e):where);
var where__$2 = (((nl_num > cljs.core.count(where__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(where__$1,cljs.core.cst$kw$m):where__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl_num,where__$2], null);
} else {
return null;
}
});
/**
 * Return a vector containing vectors each with the cvec elements 
 *   for the start and end of each line.
 */
zprint.finish.cvec_lines = (function zprint$finish$cvec_lines(cvec){
var cvec_nl = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(zprint.finish.newline_vec,cljs.core.first),cvec);
var idx = (0);
var start = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(cvec_nl)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
} else {
var vec__29917 = cljs.core.first(cvec_nl);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29917,(0),null);
var where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29917,(1),null);
var cvec_element = vec__29917;
if((cvec_element == null)){
var G__29920 = cljs.core.next(cvec_nl);
var G__29921 = (idx + (1));
var G__29922 = start;
var G__29923 = out;
cvec_nl = G__29920;
idx = G__29921;
start = G__29922;
out = G__29923;
continue;
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(where):false))){
var G__29924 = cljs.core.next(cvec_nl);
var G__29925 = (idx + (1));
var G__29926 = idx;
var G__29927 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
cvec_nl = G__29924;
idx = G__29925;
start = G__29926;
out = G__29927;
continue;
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(where):false))){
var G__29928 = cljs.core.next(cvec_nl);
var G__29929 = (idx + (1));
var G__29930 = (idx + (1));
var G__29931 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null));
cvec_nl = G__29928;
idx = G__29929;
start = G__29930;
out = G__29931;
continue;
} else {
if(cljs.core.truth_((((n > (1)))?(function (){var and__4115__auto__ = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$m.cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4115__auto__;
}
})():false))){
var G__29932 = cljs.core.next(cvec_nl);
var G__29933 = (idx + (1));
var G__29934 = idx;
var G__29935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,idx], null)));
cvec_nl = G__29932;
idx = G__29933;
start = G__29934;
out = G__29935;
continue;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$m.cljs$core$IFn$_invoke$arity$1(where))){
var G__29936 = cljs.core.next(cvec_nl);
var G__29937 = (idx + (1));
var G__29938 = start;
var G__29939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null)));
cvec_nl = G__29936;
idx = G__29937;
start = G__29938;
out = G__29939;
continue;
} else {
return null;
}
}
}
}
}
}
break;
}
});
/**
 * Given a cvec index, return the line that it is in.
 */
zprint.finish.find_line = (function zprint$finish$find_line(lines,idx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29941_SHARP_,p2__29940_SHARP_){
if(zprint.finish.within_QMARK_(idx,p2__29940_SHARP_)){
return cljs.core.reduced(p1__29941_SHARP_);
} else {
return (p1__29941_SHARP_ + (1));
}
}),(0),lines);
});
/**
 * Given a cvec and a focus-vec, and the number of line before and after
 *   the focus, output a vector of vectors of cvec indicies that cover the 
 *   desired lines. [[start end] [start end] ...]
 */
zprint.finish.surround_focus = (function zprint$finish$surround_focus(lines_to_cvec,p__29942,p__29943){
var vec__29944 = p__29942;
var focus_begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29944,(0),null);
var focus_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29944,(1),null);
var vec__29947 = p__29943;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(1),null);
var line_count = cljs.core.count(lines_to_cvec);
var focus_begin_line = zprint.finish.find_line(lines_to_cvec,focus_begin);
var focus_end_line = zprint.finish.find_line(lines_to_cvec,focus_end);
var before_line = (focus_begin_line - before);
var before_line__$1 = (((before_line > (0)))?before_line:(0));
var after_line = (focus_end_line + after);
var after_line__$1 = (((after_line >= line_count))?(line_count - (1)):after_line);
var surround_vec = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines_to_cvec,before_line__$1)),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines_to_cvec,after_line__$1))], null);
return surround_vec;
});
/**
 * If given a single integer, return the range from lines.  If given
 *   a range of lines, return the beginning of the first line and the end
 *   of the last line.
 */
zprint.finish.find_range = (function zprint$finish$find_range(lines,line_selector){
if(typeof line_selector === 'number'){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,line_selector);
} else {
if(cljs.core.vector_QMARK_(line_selector)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.first(line_selector))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.second(line_selector)))], null);
} else {
throw (new Error(["Line selector '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector),"' must be a number or a vector!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector)].join('')));

}
}
});
/**
 * line-vec is a vector of individual lines, or two-vecs of
 *   line ranges: [1 2 [3-5] 8 9]. Returns a vector of cvec element
 *   ranges [[0 20] [45-70] ...].  lines is the return from cvec-lines,
 *   which maps lines onto cvec ranges.
 */
zprint.finish.select_lines = (function zprint$finish$select_lines(lines_to_cvec,line_vec){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.find_range,lines_to_cvec),line_vec);
});
/**
 * Take the current cvec and any focus-vec and the options map,
 *   and figure out a set of cvecs to use.  Don't generate lines
 *   array unless we need to.
 */
zprint.finish.handle_lines = (function zprint$finish$handle_lines(p__29951,cvec,focus_vec){
var map__29952 = p__29951;
var map__29952__$1 = (((((!((map__29952 == null))))?(((((map__29952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29952):map__29952);
var options = map__29952__$1;
var map__29953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29952__$1,cljs.core.cst$kw$output);
var map__29953__$1 = (((((!((map__29953 == null))))?(((((map__29953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29953):map__29953);
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,cljs.core.cst$kw$focus);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,cljs.core.cst$kw$lines);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,cljs.core.cst$kw$paths);
if(cljs.core.truth_((function (){var or__4126__auto__ = lines;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = paths;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$surround.cljs$core$IFn$_invoke$arity$1(focus);
}
}
})())){
var lines_to_cvec = zprint.finish.cvec_lines(cvec);
var surround = cljs.core.cst$kw$surround.cljs$core$IFn$_invoke$arity$1(focus);
var cvec_ranges = (cljs.core.truth_(lines)?zprint.finish.select_lines(lines_to_cvec,lines):cljs.core.PersistentVector.EMPTY);
var cvec_ranges__$1 = (cljs.core.truth_(surround)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cvec_ranges,zprint.finish.surround_focus(lines_to_cvec,focus_vec,surround)):cvec_ranges);
var path_vecs = (cljs.core.truth_(paths)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.focus.range_ssv,cvec),paths):null);
var path_vecs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29950_SHARP_){
return zprint.finish.surround_focus(lines_to_cvec,p1__29950_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}),path_vecs);
var cvec_ranges__$2 = (cljs.core.truth_(path_vecs__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cvec_ranges__$1,path_vecs__$1):cvec_ranges__$1);
if(cljs.core.empty_QMARK_(cvec_ranges__$2)){
return null;
} else {
return cvec_ranges__$2;
}
} else {
return null;
}
});
