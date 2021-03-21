// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('zprint.zprint');
goog.require('zprint.finish');
goog.require('zprint.comment');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('zprint.sutil');
goog.require('zprint.focus');
goog.require('zprint.range');
goog.require('sci.core');
goog.require('rewrite_clj.parser');
zprint.core._STAR_cache_path_STAR_ = null;
/**
 * There is an internal options-map containing default values which is 
 *   configured from ~/.zprintrc when zprint is first used.  set-options! 
 *   is used to alter the internal options-map by specifying individual
 *   options-map values that will be merged into the internal options-map.
 *   Typically, it is called with only new-options, an options map.  If
 *   you add a doc-str, that will show up when the internal options map
 *   is displayed with (czprint nil :explain).  The argument op-options
 *   is an options map that is only examined if the call to set-options!
 *   is the first use of the zprint library.  If it is, operational options
 *   are examined in the op-options map to see where to find formatting
 *   options.  Operational options are those such as cwd-zprintrc? and
 *   search-config?.
 */
zprint.core.set_options_BANG_ = (function zprint$core$set_options_BANG_(var_args){
var G__31401 = arguments.length;
switch (G__31401) {
case 3:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (new_options,doc_str,op_options){
zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3(new_options,doc_str,op_options);

return null;
}));

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2(new_options,doc_str);

return null;
}));

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1(new_options);

return null;
}));

(zprint.core.set_options_BANG_.cljs$lang$maxFixedArity = 3);

zprint.core._STAR_default_cache_loc_STAR_ = ".";
zprint.core._STAR_default_cache_dir_STAR_ = ".zprint";
zprint.core._STAR_default_url_cache_STAR_ = "urlcache";
zprint.core._STAR_default_url_cache_secs_STAR_ = (300);
/**
 * Loads options from url, expecting an edn options map that will be passed
 *   to set-options! Valid options will be cached in 
 *   (str (:cache-loc (:cache options)) 
 *     File/separator 
 *     (:cache-dir (:cache options))
 *     File/separator
 *     (:url (:cache-dir (:cache options))))
 *   for (:cache-secs (:url options)) or 5 minutes if :cache-secs is nil.
 *   If [:cache :location] contains a ".", it is considered a Java property, 
 *   else it is considered an environment variable.  In either case, 
 *   it is looked up.
 *   Invalid options will throw an Exception.
 *   HTTP urls will have the Cache-Control max-age parameter respected,
 *   falling back to the Expires header if set.
 */
zprint.core.load_options_BANG_ = (function zprint$core$load_options_BANG_(options,url){
return null;
});
/**
 * Do external configuration regardless of whether or not it already
 *   been done, replacing any existing configuration.  Returns nil if successful,
 *   a vector of errors if not.
 */
zprint.core.configure_all_BANG_ = (function zprint$core$configure_all_BANG_(){
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Is this a rewrite-clj zipper node? A surprisingly hard thing to 
 *   determine, actually.
 */
zprint.core.rewrite_clj_zipper_QMARK_ = (function zprint$core$rewrite_clj_zipper_QMARK_(z){
if(((cljs.core.coll_QMARK_(z))?(function (){var type_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(cljs.core.first(z))], 0));
return (((((type_str).length) > (16))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("rewrite_clj.node",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(type_str,(0),(16)))));
})():false)){
return z;
} else {
return null;
}
});
/**
 * Is this a zipper?
 */
zprint.core.zipper_QMARK_ = (function zprint$core$zipper_QMARK_(z){
if(cljs.core.coll_QMARK_(z)){
var or__4126__auto__ = zprint.core.rewrite_clj_zipper_QMARK_(z);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.first(z));
}
} else {
return null;
}
});
/**
 * If it is a zipper or a string, return a zipper, else return nil.
 *   Always trims whitespace (including nl) off of strings before parsing!
 *   Returns [zloc line-ending-str], with line-ending-str nil if x was a
 *   zipper.
 */
zprint.core.get_zipper = (function zprint$core$get_zipper(options,x){
if(typeof x === 'string'){
var vec__31403 = zprint.zprint.determine_ending_split_lines(x);
var line_ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403,(0),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403,(1),null);
var lines__$1 = (cljs.core.truth_(cljs.core.cst$kw$expand_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.expand_tabs,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(options))),lines):lines);
var x__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
var n = rewrite_clj.parser.parse_string(clojure.string.trim(x__$1));
if(cljs.core.truth_(n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(n) : zprint.zutil.edn_STAR_.call(null,n)),line_ending], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(zprint.core.zipper_QMARK_(x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,null], null);
} else {
return null;
}
}
});
/**
 * Do a basic zprint and output the style vector and the options used for
 *   further processing: [<style-vec> options line-ending]
 */
zprint.core.fzprint_style = (function zprint$core$fzprint_style(coll,options){
var vec__31406 = (cljs.core.truth_(cljs.core.cst$kw$zipper_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,options,null], null):(cljs.core.truth_(cljs.core.cst$kw$parse_DASH_string_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?((typeof coll === 'string')?(function (){var vec__31409 = zprint.core.get_zipper(options,coll);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31409,(0),null);
var line_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31409,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,options,line_end], null);
})():(function(){throw (new Error(["Collection is not a string yet"," :parse-string? specified!"].join('')))})()):(cljs.core.truth_(cljs.core.cst$kw$zloc_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(options))))?(function (){var vec__31412 = zprint.zutil.find_root_and_path_nw(coll);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output,cljs.core.cst$kw$focus,cljs.core.cst$kw$path], null),path),null], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options,null], null)
)));
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31406,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31406,(1),null);
var line_ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31406,(2),null);
var z_type = (cljs.core.truth_(input)?cljs.core.cst$kw$zipper:cljs.core.cst$kw$sexpr);
var input__$1 = (function (){var or__4126__auto__ = input;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return coll;
}
})();
if((input__$1 == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil",zprint.zprint.zcolor_map(options__$1,cljs.core.cst$kw$nil),cljs.core.cst$kw$element], null)], null),options__$1,line_ending], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$drop_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$none], null)], null),options__$1,line_ending], null);
} else {
var options__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,cljs.core.cst$kw$ztype,z_type);
var fzprint_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zprint.zprint.fzprint,options__$2,(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.cst$kw$file_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(options__$2)),cljs.core.cst$kw$keep);
} else {
return and__4115__auto__;
}
})())?(function (){var or__4126__auto__ = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})():(0)),input__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z_type,cljs.core.cst$kw$zipper))?zprint.zutil.zredef_call(fzprint_fn):zprint.sutil.sredef_call(fzprint_fn)),options__$2,line_ending], null);

}
}
});
/**
 * Take some internal-options and the & rest of a zprint/czprint
 *   call and figure out the options and width and all of that, but
 *   stop short of integrating these values into the existing options
 *   that show up with (get-options). Note that internal-options MUST
 *   NOT be a full options-map.  It needs to be just the options that
 *   have been requested for this invocation.  Does auto-width if that
 *   is requested, and determines if there are 'special-options', which
 *   may short circuit the other options processing. 
 *   Returns [special-option rest-options]
 */
zprint.core.process_rest_options = (function zprint$core$process_rest_options(internal_options,p__31415){
var vec__31416 = p__31415;
var width_or_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31416,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31416,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width_or_options,cljs.core.cst$kw$default)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,zprint.config.get_default_options()], null);
} else {
var vec__31419 = (cljs.core.truth_((function (){var fexpr__31422 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$explain,null,cljs.core.cst$kw$support,null,cljs.core.cst$kw$explain_DASH_justified,null,cljs.core.cst$kw$explain_DASH_set,null,cljs.core.cst$kw$help,null], null), null);
return (fexpr__31422.cljs$core$IFn$_invoke$arity$1 ? fexpr__31422.cljs$core$IFn$_invoke$arity$1(width_or_options) : fexpr__31422.call(null,width_or_options));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,width_or_options], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width_or_options,null], null));
var width_or_options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419,(0),null);
var special_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419,(1),null);
var configure_errors = (cljs.core.truth_(cljs.core.cst$kw$configured_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))?null:zprint.core.configure_all_BANG_());
var width = ((typeof width_or_options__$1 === 'number')?width_or_options__$1:null);
var rest_options = (cljs.core.truth_((function (){var and__4115__auto__ = width;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(options);
} else {
return and__4115__auto__;
}
})())?options:((cljs.core.map_QMARK_(width_or_options__$1))?width_or_options__$1:null));
var width_map = (cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):cljs.core.PersistentArrayMap.EMPTY);
var new_options = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_options,rest_options,width_map], 0));
var auto_width = (cljs.core.truth_(((cljs.core.not(width))?cljs.core.cst$kw$auto_DASH_width_QMARK_.cljs$core$IFn$_invoke$arity$2(new_options,cljs.core.cst$kw$auto_DASH_width_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())):false))?(function (){var terminal_width_fn = null;
var actual_width = (cljs.core.truth_(terminal_width_fn)?(terminal_width_fn.cljs$core$IFn$_invoke$arity$0 ? terminal_width_fn.cljs$core$IFn$_invoke$arity$0() : terminal_width_fn.call(null)):null);
if(typeof actual_width === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,actual_width], null);
} else {
return null;
}
})():null);
var new_options__$1 = (cljs.core.truth_(auto_width)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_options,auto_width], 0)):new_options);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_option,new_options__$1], null);

}
});
/**
 * Take some internal-options and the & rest of a zprint/czprint
 *   call and figure out the options and width and all of that. Note
 *   that internal-options MUST NOT be a full options-map.  It needs
 *   to be just the options that have been requested for this invocation.
 *   Does auto-width if that is requested, and determines if there are
 *   'special-options', which may short circuit the other options
 *   processing. Returns [special-option actual-options]
 */
zprint.core.determine_options = (function zprint$core$determine_options(rest_options){
var configure_errors = (cljs.core.truth_(cljs.core.cst$kw$configured_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))?null:zprint.core.configure_all_BANG_());
var errors = zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1(rest_options);
var combined_errors = [(cljs.core.truth_(configure_errors)?["Global configuration errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(configure_errors)].join(''):null),(cljs.core.truth_(errors)?["Option errors in this call: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null)].join('');
if((!(cljs.core.empty_QMARK_(combined_errors)))){
throw (new Error(combined_errors));
} else {
var vec__31423 = zprint.config.perform_remove(null,null,zprint.config.get_options(),rest_options);
var internal_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(0),null);
var rest_options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(2),null);
var vec__31426 = zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4(null,null,internal_map,rest_options__$1);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426,(1),null);
var style_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426,(2),null);
var style_errors__$1 = (cljs.core.truth_(style_errors)?["Option errors in this call: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_errors)].join(''):null);
var actual_options = (((!(cljs.core.empty_QMARK_(style_errors__$1))))?(function(){throw (new Error(style_errors__$1))})():zprint.config.add_calculated_options(zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([updated_map,rest_options__$1], 0))));
return actual_options;
}
});
/**
 * Basic setup for fzprint call, used by all top level fns. Third
 *   argument can be either a number or a map, and if the third is a
 *   number, the fourth (if any) must be a map.  The internal-options
 *   is either an empty map or {:parse-string? true} for the -fn
 *   functions, and cannot be overridden by an options argument. Returns
 *   a vector with the style-vec and the options used: 
 *   [<style-vec> options line-ending]
 */
zprint.core.zprint_STAR_ = (function zprint$core$zprint_STAR_(coll,special_option,actual_options){
if(cljs.core.truth_(special_option)){
var G__31429 = special_option;
var G__31429__$1 = (((G__31429 instanceof cljs.core.Keyword))?G__31429.fqn:null);
switch (G__31429__$1) {
case "explain":
return zprint.core.fzprint_style(zprint.config.get_explained_options(),zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_default_options(),actual_options], 0)));

break;
case "explain-set":
return zprint.core.fzprint_style(zprint.config.get_explained_set_options(),zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_default_options(),actual_options], 0)));

break;
case "explain-justified":
return zprint.core.fzprint_style(zprint.config.get_explained_options(),zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_default_options(),actual_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,true], null)], null)], 0)));

break;
case "support":
return zprint.core.fzprint_style(zprint.config.get_explained_all_options(),zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_default_options(),actual_options], 0)));

break;
case "help":
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.help_str], 0));

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Unknown keyword option: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(special_option)].join('')], 0));

}
} else {
return zprint.core.fzprint_style(coll,(function (){var temp__5718__auto__ = cljs.core.cst$kw$fn_DASH_name.cljs$core$IFn$_invoke$arity$1(actual_options);
if(cljs.core.truth_(temp__5718__auto__)){
var fn_name = temp__5718__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$docstring_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(actual_options)))){
return actual_options;
} else {
return actual_options;
}
} else {
return actual_options;
}
})());
}
});
/**
 * Handle options for :parse-string-all?, by removing
 *   :parse-string-all? and changing the default for 
 *   :parse {:interpose } to be true instead of nil.
 */
zprint.core.parse_string_all_options = (function zprint$core$parse_string_all_options(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((((cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(options)) == null))?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse,cljs.core.cst$kw$interpose], null),true):options),cljs.core.cst$kw$parse_DASH_string_DASH_all_QMARK_),cljs.core.cst$kw$trim_DASH_comments_QMARK_,true);
});
/**
 * Select the elements from start to end from a vector.
 */
zprint.core.range_vec = (function zprint$core$range_vec(v,p__31431){
var vec__31432 = p__31431;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((end - start),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start,v));
});
/**
 * If this is a :newline, :indent, :whitespace, or :right, trim off the 
 *   4th thing.
 */
zprint.core.remove_loc = (function zprint$core$remove_loc(tuple){
var vec__31435 = tuple;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31435,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31435,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31435,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$newline)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$whitespace)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,cljs.core.cst$kw$right)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,element], null);
} else {
return tuple;
}
});
/**
 * Remove the debugging information on :indent and :newline style-vec
 *   elements when doing :return-cvec? true.
 */
zprint.core.remove_newline_indent_locs = (function zprint$core$remove_newline_indent_locs(cvec){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.core.remove_loc,cvec);
});
/**
 * If any of :respect-nl?, :respect-bl?, or :indent-only? are set, return
 *   true.
 */
zprint.core.any_respect_QMARK_ = (function zprint$core$any_respect_QMARK_(caller,options){
var callers_options = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var or__4126__auto__ = cljs.core.cst$kw$respect_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1(callers_options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.cst$kw$respect_DASH_bl_QMARK_.cljs$core$IFn$_invoke$arity$1(callers_options);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$indent_DASH_only_QMARK_.cljs$core$IFn$_invoke$arity$1(callers_options);
}
}
});
/**
 * Look throught the options, and see if any of :respect-nl?, :respect-bl?
 *   or :indent-only are enabled for anything.  Return false if none are enabled,
 *   truthy if any are.
 */
zprint.core.any_respect_at_all_QMARK_ = (function zprint$core$any_respect_at_all_QMARK_(options){
var or__4126__auto__ = zprint.core.any_respect_QMARK_(cljs.core.cst$kw$list,options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = zprint.core.any_respect_QMARK_(cljs.core.cst$kw$vector,options);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = zprint.core.any_respect_QMARK_(cljs.core.cst$kw$set,options);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return zprint.core.any_respect_QMARK_(cljs.core.cst$kw$map,options);
}
}
}
});
/**
 * Given a str-style-vec, find all of the places where the end of a line
 *   has blanks.  Output the tuples that have that and the ones that 
 *   follow. If no-respect? is truthy, then only do this if no :respect-nl,
 *   :respect-bl, or indent-only are set.
 */
zprint.core.find_eol_blanks = (function zprint$core$find_eol_blanks(options,ssv,coll,no_respect_QMARK_){
if(cljs.core.truth_(((typeof coll === 'string')?(!(clojure.string.blank_QMARK_(coll))):(cljs.core.truth_(zprint.core.zipper_QMARK_(coll))?(!(clojure.string.blank_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(coll) : rewrite_clj.zip.string.call(null,coll))))):null
)))){
if(((cljs.core.not(no_respect_QMARK_)) || (cljs.core.not(zprint.core.any_respect_at_all_QMARK_(options))))){
var style_vec = ssv;
var previous_ends_w_blanks_QMARK_ = null;
var previous_tuple = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cljs.core.first(style_vec))){
if(cljs.core.truth_(previous_ends_w_blanks_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,previous_tuple);
} else {
return out;
}
} else {
var vec__31441 = cljs.core.first(style_vec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(2),null);
var tuple = vec__31441;
var add_previous_to_out_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$indent)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$newline))))?previous_ends_w_blanks_QMARK_:false);
var ends_w_blanks_QMARK_ = clojure.string.ends_with_QMARK_(s," ");
var G__31444 = cljs.core.next(style_vec);
var G__31445 = ends_w_blanks_QMARK_;
var G__31446 = tuple;
var G__31447 = (cljs.core.truth_(add_previous_to_out_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,previous_tuple):out);
style_vec = G__31444;
previous_ends_w_blanks_QMARK_ = G__31445;
previous_tuple = G__31446;
out = G__31447;
continue;
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Take a zipper or string and pretty print with fzprint, 
 *   output a str.  Key :color? is false by default, and should
 *   be set to true in internal-options to make things colored.
 *   Special processing for :parse-string-all?, with
 *   not only a different code path, but a different default for 
 *   :parse {:interpose nil} to {:interpose true}
 */
zprint.core.zprint_str_internal = (function zprint$core$zprint_str_internal(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31465 = arguments.length;
var i__4737__auto___31466 = (0);
while(true){
if((i__4737__auto___31466 < len__4736__auto___31465)){
args__4742__auto__.push((arguments[i__4737__auto___31466]));

var G__31467 = (i__4737__auto___31466 + (1));
i__4737__auto___31466 = G__31467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return zprint.core.zprint_str_internal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(zprint.core.zprint_str_internal.cljs$core$IFn$_invoke$arity$variadic = (function (internal_options,coll,rest){
var vec__31451 = zprint.core.process_rest_options(internal_options,rest);
var special_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31451,(0),null);
var rest_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31451,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal VVVVVVVVVVVVVVVV"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$parse_DASH_string_DASH_all_QMARK_.cljs$core$IFn$_invoke$arity$1(rest_options))){
if(typeof coll === 'string'){
var vec__31454 = zprint.zprint.determine_ending_split_lines(coll);
var line_ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31454,(0),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31454,(1),null);
var current_options = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_options(),rest_options], 0));
var lines__$1 = (cljs.core.truth_(cljs.core.cst$kw$expand_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(current_options)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.expand_tabs,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(current_options))),lines):lines);
var coll__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
var result = (function (){var G__31457 = zprint.core.parse_string_all_options(rest_options);
var G__31458 = zprint.core.zprint_str_internal;
var G__31459 = ":parse-string-all? call";
var G__31460 = (function (){var G__31461 = rewrite_clj.parser.parse_string_all(coll__$1);
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31461) : zprint.zutil.edn_STAR_.call(null,G__31461));
})();
return (zprint.core.process_multiple_forms.cljs$core$IFn$_invoke$arity$4 ? zprint.core.process_multiple_forms.cljs$core$IFn$_invoke$arity$4(G__31457,G__31458,G__31459,G__31460) : zprint.core.process_multiple_forms.call(null,G__31457,G__31458,G__31459,G__31460));
})();
var str_w_line_endings = (((((line_ending == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_ending,"\n"))))?result:clojure.string.replace(result,"\n",line_ending));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal ^^^ pmf ^^^ pmf ^^^ pmf ^^^"], 0));
} else {
}

return str_w_line_endings;
} else {
throw (new Error(":parse-string-all? requires a string!"));
}
} else {
var actual_options = zprint.core.determine_options(rest_options);
var vec__31462 = zprint.core.zprint_STAR_(coll,special_option,actual_options);
var cvec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(1),null);
var line_ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(2),null);
var cvec_wo_empty = cvec;
var focus_vec = (function (){var temp__5718__auto__ = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$focus.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(options)));
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return zprint.focus.range_ssv(cvec_wo_empty,path);
} else {
return null;
}
})();
var accept_vec = zprint.finish.handle_lines(options,cvec_wo_empty,focus_vec);
var eol_blanks = (cljs.core.truth_(cljs.core.cst$kw$test_DASH_for_DASH_eol_DASH_blanks_QMARK_.cljs$core$IFn$_invoke$arity$1(options))?zprint.core.find_eol_blanks(options,cvec_wo_empty,coll,null):null);
var eol_str = (((!(cljs.core.empty_QMARK_(eol_blanks))))?["=======  eol-blanks: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eol_blanks)].join(''):null);
var inline_style_vec = (cljs.core.truth_(cljs.core.cst$kw$inline_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options)))?zprint.comment.fzprint_inline_comments(options,cvec_wo_empty):cvec_wo_empty);
var inline_style_vec__$1 = (cljs.core.truth_(cljs.core.cst$kw$inline_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options)))?zprint.comment.fzprint_align_inline_comments(options,inline_style_vec):inline_style_vec);
var str_style_vec = zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style_DASH_map,zprint.finish.no_style_map,cljs.core.cst$kw$elide,cljs.core.cst$kw$elide.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(options))], null),inline_style_vec__$1,focus_vec,accept_vec);
var wrapped_style_vec = (cljs.core.truth_(cljs.core.cst$kw$wrap_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(options)))?zprint.comment.fzprint_wrap_comments(options,str_style_vec):str_style_vec);
var comp_style = zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1(wrapped_style_vec);
var color_style = (cljs.core.truth_((function (){var or__4126__auto__ = accept_vec;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = focus_vec;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.cst$kw$color_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
}
}
})())?zprint.finish.color_comp_vec(comp_style):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,comp_style)));
var str_w_line_endings = (((((line_ending == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_ending,"\n"))))?color_style:clojure.string.replace(color_style,"\n",line_ending));
if(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal ^^^^^^^^^^^^^^^^^^"], 0));
} else {
}

if(cljs.core.truth_(eol_str)){
return eol_str;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$return_DASH_cvec_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
return zprint.core.remove_newline_indent_locs(cvec);
} else {
return str_w_line_endings;
}
}
}
}));

(zprint.core.zprint_str_internal.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(zprint.core.zprint_str_internal.cljs$lang$applyTo = (function (seq31448){
var G__31449 = cljs.core.first(seq31448);
var seq31448__$1 = cljs.core.next(seq31448);
var G__31450 = cljs.core.first(seq31448__$1);
var seq31448__$2 = cljs.core.next(seq31448__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31449,G__31450,seq31448__$2);
}));

/**
 * Call source-fn, and if it isn't there throw an exception.
 */
zprint.core.get_fn_source = (function zprint$core$get_fn_source(fn_name){
throw (new Error(["No definition found for a function named: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')));
});
/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str. Additional optional arguments: 
 * 
 *    (zprint-str coll <numeric-width>)
 *    (zprint-str coll <numeric-width> <options-map>)
 *    (zprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (zprint-str coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint_str = (function zprint$core$zprint_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31470 = arguments.length;
var i__4737__auto___31471 = (0);
while(true){
if((i__4737__auto___31471 < len__4736__auto___31470)){
args__4742__auto__.push((arguments[i__4737__auto___31471]));

var G__31472 = (i__4737__auto___31471 + (1));
i__4737__auto___31471 = G__31472;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zprint.core.zprint_str_internal,cljs.core.PersistentArrayMap.EMPTY,coll,rest);
}));

(zprint.core.zprint_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.zprint_str.cljs$lang$applyTo = (function (seq31468){
var G__31469 = cljs.core.first(seq31468);
var seq31468__$1 = cljs.core.next(seq31468);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31469,seq31468__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str containing ANSI escapes to 
 *   syntax color the output. Additional optional arguments: 
 * 
 *    (czprint-str coll <numeric-width>)
 *    (czprint-str coll <numeric-width> <options-map>)
 *    (czprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint-str coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint_str = (function zprint$core$czprint_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31475 = arguments.length;
var i__4737__auto___31476 = (0);
while(true){
if((i__4737__auto___31476 < len__4736__auto___31475)){
args__4742__auto__.push((arguments[i__4737__auto___31476]));

var G__31477 = (i__4737__auto___31476 + (1));
i__4737__auto___31476 = G__31477;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zprint.core.zprint_str_internal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_QMARK_,true], null),coll,rest);
}));

(zprint.core.czprint_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.czprint_str.cljs$lang$applyTo = (function (seq31473){
var G__31474 = cljs.core.first(seq31473);
var seq31473__$1 = cljs.core.next(seq31473);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31474,seq31473__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output to stdout. Additional optional 
 *   arguments: 
 * 
 *    (zprint coll <numeric-width>)
 *    (zprint coll <numeric-width> <options-map>)
 *    (zprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source::
 * 
 *      (zprint coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint = (function zprint$core$zprint(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31480 = arguments.length;
var i__4737__auto___31481 = (0);
while(true){
if((i__4737__auto___31481 < len__4736__auto___31480)){
args__4742__auto__.push((arguments[i__4737__auto___31481]));

var G__31482 = (i__4737__auto___31481 + (1));
i__4737__auto___31481 = G__31482;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zprint.core.zprint_str_internal,cljs.core.PersistentArrayMap.EMPTY,coll,rest)], 0));
}));

(zprint.core.zprint.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.zprint.cljs$lang$applyTo = (function (seq31478){
var G__31479 = cljs.core.first(seq31478);
var seq31478__$1 = cljs.core.next(seq31478);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31479,seq31478__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and produce output to stdout containing ANSI 
 *   escapes to syntax color the output. Optional arguments: 
 * 
 *    (czprint coll <numeric-width>)
 *    (czprint coll <numeric-width> <options-map>)
 *    (czprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint = (function zprint$core$czprint(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31485 = arguments.length;
var i__4737__auto___31486 = (0);
while(true){
if((i__4737__auto___31486 < len__4736__auto___31485)){
args__4742__auto__.push((arguments[i__4737__auto___31486]));

var G__31487 = (i__4737__auto___31486 + (1));
i__4737__auto___31486 = G__31487;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$4(zprint.core.zprint_str_internal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_QMARK_,true], null),coll,rest)], 0));
}));

(zprint.core.czprint.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.czprint.cljs$lang$applyTo = (function (seq31483){
var G__31484 = cljs.core.first(seq31483);
var seq31483__$1 = cljs.core.next(seq31483);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31484,seq31483__$1);
}));

/**
 * s is string containing a comment.  See if it starts out ;!zprint
 *   (with any number of ';' allowed), and if it does, attempt to parse
 *   it as an options-map.  Return [options error-str] with only options
 *   populated if it works, and throw an exception if it doesn't work.
 *   Use sci/eval-string to create sandboxed functions if any exist in
 *   the options map.
 */
zprint.core.get_options_from_comment = (function zprint$core$get_options_from_comment(zprint_num,s){
var s_onesemi = clojure.string.replace(s,/^;+/,";");
var comment_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s_onesemi,/^;!zprint /);
var temp__5720__auto__ = cljs.core.second(comment_split);
if(cljs.core.truth_(temp__5720__auto__)){
var possible_options = temp__5720__auto__;
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.core.eval_string.cljs$core$IFn$_invoke$arity$1(possible_options),null], null);
}catch (e31488){var e = e31488;
throw (new Error(["Unable to create zprint options-map from: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(possible_options),"' found in !zprint directive number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_num)," because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}} else {
return null;
}
});
/**
 * If a string is all spaces and has at least one space, 
 *   returns the count of the spaces, otherwise nil.
 */
zprint.core.spaces_QMARK_ = (function zprint$core$spaces_QMARK_(s){
var len = cljs.core.count(s);
if((len === (0))){
return null;
} else {
if(cljs.core.empty_QMARK_(clojure.string.replace(s," ",""))){
return len;
} else {
return null;
}
}
});
/**
 * Take one form from a file and process it.  The primary goal is
 *   of course to produce a string to put into the output file.  In
 *   addition, see if that string starts with ;!zprint and if it does,
 *   pass along that information back to the caller.  The input is a 
 *   [[next-options <previous-string>] form], where next-options accumulates
 *   the information to be applied to the next non-comment/non-whitespace
 *   element in the file.  The output is [next-options output-str zprint-num], 
 *   since reductions is used to call this function.  See process-multiple-forms
 *   for what is actually done with the various :format values.
 */
zprint.core.process_form = (function zprint$core$process_form(rest_options,zprint_fn,zprint_specifier,p__31489,form){
var vec__31490 = p__31489;
var next_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(1),null);
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(2),null);
var zprint_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(3),null);
var comment_QMARK_ = zprint.zutil.zcomment_QMARK_(form);
var whitespace_form_QMARK_ = zprint.zutil.whitespace_QMARK_(form);
var vec__31493 = (cljs.core.truth_((function (){var and__4115__auto__ = comment_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if((indent === (0))){
return cljs.core.cst$kw$process_DASH_bang_DASH_zprint_QMARK_.cljs$core$IFn$_invoke$arity$1(rest_options);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?zprint.core.get_options_from_comment((zprint_num + (1)),(zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(form) : zprint.zutil.string.call(null,form))):null);
var new_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(0),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(1),null);
var next_options__$1 = (((indent === (0)))?next_options:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_options,cljs.core.cst$kw$indent,indent));
var internal_options = ((cljs.core.empty_QMARK_(next_options__$1))?rest_options:zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest_options,next_options__$1], 0)));
var decision_options = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.get_options(),internal_options], 0));
var space_count = ((whitespace_form_QMARK_)?(cljs.core.truth_(cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(decision_options)))?(0):zprint.core.spaces_QMARK_((zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(form) : zprint.zutil.string.call(null,form)))):null);
var drop_QMARK_ = (!(cljs.core.not((function (){var and__4115__auto__ = space_count;
if(cljs.core.truth_(and__4115__auto__)){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$skip,cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(next_options__$1))))){
var or__4126__auto__ = cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(decision_options));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(decision_options)),cljs.core.cst$kw$drop);
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())));
var local_options = (cljs.core.truth_(new_options)?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$comment,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrap_QMARK_,false], null),cljs.core.cst$kw$zipper_QMARK_,true,cljs.core.cst$kw$file_QMARK_,true,cljs.core.cst$kw$drop_QMARK_,drop_QMARK_], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zipper_QMARK_,true,cljs.core.cst$kw$file_QMARK_,true,cljs.core.cst$kw$drop_QMARK_,drop_QMARK_], null));
var internal_options__$1 = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_options,local_options], 0));
var output_str = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$off,cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(decision_options))) || ((((!((function (){var or__4126__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return whitespace_form_QMARK_;
}
})()))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$skip,cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(internal_options__$1)))))))?(zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(form) : zprint.zutil.string.call(null,form)):(zprint_fn.cljs$core$IFn$_invoke$arity$2 ? zprint_fn.cljs$core$IFn$_invoke$arity$2(internal_options__$1,form) : zprint_fn.call(null,internal_options__$1,form)));
var local_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$skip,cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(new_options))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next,cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(new_options))));
if(cljs.core.truth_((function (){var and__4115__auto__ = new_options;
if(cljs.core.truth_(and__4115__auto__)){
return (!(local_QMARK_));
} else {
return and__4115__auto__;
}
})())){
zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2(new_options,[";!zprint number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint_num + (1)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_specifier)].join(''));
} else {
}

if(cljs.core.truth_(error_str)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Warning: ",error_str], 0));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((local_QMARK_)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_options__$1,new_options], 0)):(((function (){var or__4126__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return whitespace_form_QMARK_;
}
})())?next_options__$1:cljs.core.PersistentArrayMap.EMPTY
)),output_str,(function (){var or__4126__auto__ = space_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),(cljs.core.truth_(new_options)?(zprint_num + (1)):zprint_num)], null);
});
/**
 * A comment aware interpose. It takes a seq of strings, leaves out
 *   empty strings, and interposes interpose-str between everything,
 *   except after a comment.  After a comment, it will interpose a
 *   single newline if there were no blank lines between the comment
 *   and a following comment. If there was any number of blank lines
 *   after a comment, it will interpose interpose-comment-str before
 *   the next (non-comment) element. Output is a vector of strings.
 */
zprint.core.interpose_w_comment = (function zprint$core$interpose_w_comment(seq_of_strings,interpose_str){
if(cljs.core.empty_QMARK_(seq_of_strings)){
return cljs.core.PersistentVector.EMPTY;
} else {
var sos = seq_of_strings;
var previous_comment_QMARK_ = null;
var start_interpolating_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(sos)){
return out;
} else {
var s = cljs.core.first(sos);
var empty_string_QMARK_ = cljs.core.empty_QMARK_(s);
var comment_QMARK_ = clojure.string.starts_with_QMARK_(s,";");
var G__31496 = cljs.core.next(sos);
var G__31497 = comment_QMARK_;
var G__31498 = (function (){var or__4126__auto__ = (!(empty_string_QMARK_));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return start_interpolating_QMARK_;
}
})();
var G__31499 = ((empty_string_QMARK_)?out:((cljs.core.not(start_interpolating_QMARK_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,s):(cljs.core.truth_(previous_comment_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,"\n"),s):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,interpose_str),s)
)));
sos = G__31496;
previous_comment_QMARK_ = G__31497;
start_interpolating_QMARK_ = G__31498;
out = G__31499;
continue;
}
break;
}
}
});
/**
 * Given a string which contains multiple lines, check the first line to
 *   see if it begins with a shebang, that is: #!.  If it does, remove that
 *   line and return it as the shebang, else shebang is nil.  Returns:
 *   [shebang filestring]
 */
zprint.core.remove_shebang = (function zprint$core$remove_shebang(filestring){
if(clojure.string.starts_with_QMARK_(filestring,"#!")){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(filestring,/\n/,(2));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,filestring], null);
}
});
/**
 * Take a sequence of forms (which are zippers of the elements of
 *   a file or a string containing multiple forms somewhere), and not 
 *   only format them for output but also handle comments containing 
 *   ;!zprint that affect the options-map throughout the processing.
 */
zprint.core.process_multiple_forms = (function zprint$core$process_multiple_forms(rest_options,zprint_fn,zprint_specifier,forms){
var interpose_option = (function (){var or__4126__auto__ = cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(rest_options));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()));
}
})();
var interpose_str = (((((interpose_option == null)) || (interpose_option === false)))?null:((typeof interpose_option === 'string')?interpose_option:((interpose_option === true)?"\n":(function(){throw (new Error(["Unsupported {:parse {:interpose value}}: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interpose_option)].join('')))})()
)));
var seq_of_zprint_fn = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zprint.core.process_form,rest_options,zprint_fn,zprint_specifier),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,"",(0),(0)], null),zprint.zutil.zmap_all(cljs.core.identity,forms));
var seq_of_strings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,seq_of_zprint_fn);
if(cljs.core.truth_(interpose_str)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,zprint.core.interpose_w_comment(seq_of_strings,interpose_str));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,seq_of_strings);
}
});
/**
 * Take a string, which typically holds the contents of an entire
 *   file, but doesn't have to, and format the entire string, outputing
 *   a formatted string.  It respects white space at the top level,
 *   while ignoring it within all top level forms (unless
 *   :indent-only, :respect-bl, or :respect-nl are used).
 *   It allows comments at the top
 *   level, as well as in function definitions, and also supports
 *   ;!zprint directives at the top level. See File Comment API for
 *   information on ;!zprint directives. zprint-specifier is the thing
 *   that will be used in messages if errors are detected in ;!zprint
 *   directives, so it should identify the file (or other element) to
 *   allow the user to find the problem. new-options is an options-map 
 *   containing options to be used when doing the formatting (and will 
 *   be overriddden by any options in ;!zprint directives).  doc-str is 
 *   an optional string to be used when setting the new-options into the 
 *   configuration.
 */
zprint.core.zprint_file_str = (function zprint$core$zprint_file_str(var_args){
var G__31501 = arguments.length;
switch (G__31501) {
case 4:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4 = (function (file_str,zprint_specifier,new_options,doc_str){
var original_options = zprint.config.get_options();
var original_doc_map = zprint.config.get_explained_all_options();
if(cljs.core.truth_(new_options)){
zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2(new_options,doc_str);
} else {
}

try{var vec__31502 = zprint.core.remove_shebang(file_str);
var shebang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(0),null);
var file_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(1),null);
var vec__31505 = zprint.zprint.determine_ending_split_lines(file_str__$1);
var line_ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31505,(0),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31505,(1),null);
var lines__$1 = (cljs.core.truth_(cljs.core.cst$kw$expand_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.expand_tabs,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tab.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))),lines):lines);
var filestring = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
var range_start = cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())));
var range_start__$1 = (cljs.core.truth_(range_start)?(cljs.core.truth_(shebang)?(range_start - (1)):range_start):null);
var range_end = cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())));
var range_end__$1 = (cljs.core.truth_(range_end)?(cljs.core.truth_(shebang)?(range_end - (1)):range_end):null);
var _ = (cljs.core.truth_((function (){var or__4126__auto__ = range_start__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return range_end__$1;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(new_options),"zprint-file-str: range-start:",range_start__$1,"range-end:",range_end__$1], 0)):null):null);
var lines__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = range_start__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return range_end__$1;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.vector_QMARK_(lines__$1)));
} else {
return and__4115__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,lines__$1):lines__$1);
var vec__31508 = (cljs.core.truth_((function (){var or__4126__auto__ = range_start__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return range_end__$1;
}
})())?zprint.range.expand_range_to_top_level(filestring,lines__$2,range_start__$1,range_end__$1,cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())):null);
var actual_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31508,(0),null);
var actual_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31508,(1),null);
var ___$1 = (cljs.core.truth_((function (){var or__4126__auto__ = range_start__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return range_end__$1;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(new_options),"zprint-file-str: actual-start:",actual_start,"actual-end:",actual_end], 0)):null):null);
var vec__31511 = (cljs.core.truth_((function (){var and__4115__auto__ = actual_start;
if(cljs.core.truth_(and__4115__auto__)){
return actual_end;
} else {
return and__4115__auto__;
}
})())?zprint.range.split_out_range(lines__$2,actual_start,actual_end):null);
var before_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31511,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31511,(1),null);
var after_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31511,(2),null);
var filestring__$1 = (cljs.core.truth_(range)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",range):filestring);
var ___$2 = (cljs.core.truth_((function (){var and__4115__auto__ = actual_start;
if(cljs.core.truth_(and__4115__auto__)){
return actual_end;
} else {
return and__4115__auto__;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(new_options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zprint-file-str: lines count:",cljs.core.count(lines__$2),"before count:",cljs.core.count(before_lines),"range count:",cljs.core.count(range),"after count:",cljs.core.count(after_lines),"range:",range], 0))], 0)):null):null);
var ends_with_nl_QMARK_ = clojure.string.ends_with_QMARK_(file_str__$1,"\n");
var forms = (function (){var G__31514 = rewrite_clj.parser.parse_string_all(filestring__$1);
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31514) : zprint.zutil.edn_STAR_.call(null,G__31514));
})();
var pmf_options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$process_DASH_bang_DASH_zprint_QMARK_,true], null);
var pmf_options__$1 = (cljs.core.truth_(cljs.core.cst$kw$interpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parse.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options())))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pmf_options,cljs.core.cst$kw$trim_DASH_comments_QMARK_,true):pmf_options);
var pmf_options__$2 = (cljs.core.truth_(shebang)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pmf_options__$1,cljs.core.cst$kw$more_DASH_options.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$script.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))], 0)):pmf_options__$1);
var out_str = zprint.core.process_multiple_forms(pmf_options__$2,zprint.core.zprint_str_internal,zprint_specifier,forms);
var ___$3 = (cljs.core.truth_(cljs.core.cst$kw$dbg_QMARK_.cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dbg_DASH_indent.cljs$core$IFn$_invoke$arity$1(new_options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zprint-file-str: out-str:",out_str], 0))], 0)):null);
var out_str__$1 = (cljs.core.truth_(range)?zprint.range.reassemble_range(before_lines,out_str,after_lines):out_str);
var out_str__$2 = (cljs.core.truth_(shebang)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shebang),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(out_str__$1)].join(''):out_str__$1);
var out_str__$3 = ((((ends_with_nl_QMARK_) && ((!(clojure.string.ends_with_QMARK_(out_str__$2,"\n"))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out_str__$2),"\n"].join(''):out_str__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_ending,"\n")){
return out_str__$3;
} else {
return clojure.string.replace(out_str__$3,"\n",line_ending);
}
}finally {zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(original_options,original_doc_map);
}}));

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3 = (function (file_str,zprint_specifier,new_options){
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4(file_str,zprint_specifier,new_options,"zprint-file-str input");
}));

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2 = (function (file_str,zprint_specifier){
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4(file_str,zprint_specifier,null,null);
}));

(zprint.core.zprint_file_str.cljs$lang$maxFixedArity = 4);

/**
 * Take a spec and a key, and format the output as a string. Width is
 *   because the width isn't really (:width options).
 */
zprint.core.format_spec = (function zprint$core$format_spec(options,describe_fn,fn_spec,indent,key){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fn_spec,key);
if(cljs.core.truth_(temp__5720__auto__)){
var key_spec = temp__5720__auto__;
var key_str = [cljs.core.name(key),": "].join('');
var total_indent = (((key_str).length) + indent);
var width = ((cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(options) - total_indent) - (1));
var key_spec_data = (describe_fn.cljs$core$IFn$_invoke$arity$1 ? describe_fn.cljs$core$IFn$_invoke$arity$1(key_spec) : describe_fn.call(null,key_spec));
var spec_str = zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic(key_spec_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([width], 0));
var spec_no_nl = clojure.string.split.cljs$core$IFn$_invoke$arity$2(spec_str,/\n/);
var spec_shift_right = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(total_indent))].join(''),spec_no_nl));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(indent)),key_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_shift_right)].join('');
} else {
return null;
}
});
