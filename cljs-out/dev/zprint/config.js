// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.data');
goog.require('zprint.spec');
goog.require('zprint.rewrite');
goog.require('sci.core');
goog.require('cljs.reader');
/**
 * Return version of this program.
 */
zprint.config.about = (function zprint$config$about(){
return "zprint-1.1.1";
});
zprint.config.zprintrc = ".zprintrc";
zprint.config.zprintedn = ".zprint.edn";
zprint.config.zprint_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width], null);
zprint.config.operational_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cache,cljs.core.cst$kw$cwd_DASH_zprintrc_QMARK_,cljs.core.cst$kw$parallel_QMARK_,cljs.core.cst$kw$search_DASH_config_QMARK_,cljs.core.cst$kw$url], null);
zprint.config.explain_hide_keys = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configured_QMARK_,cljs.core.cst$kw$dbg_DASH_print_QMARK_,cljs.core.cst$kw$dbg_QMARK_,cljs.core.cst$kw$force_DASH_eol_DASH_blanks_QMARK_,cljs.core.cst$kw$do_DASH_in_DASH_hang_QMARK_,cljs.core.cst$kw$drop_QMARK_,cljs.core.cst$kw$dbg_DASH_ge,cljs.core.cst$kw$file_QMARK_,cljs.core.cst$kw$spaces_QMARK_,cljs.core.cst$kw$process_DASH_bang_DASH_zprint_QMARK_,cljs.core.cst$kw$trim_DASH_comments_QMARK_,cljs.core.cst$kw$zipper_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$remove,cljs.core.cst$kw$return_DASH_cvec_QMARK_,cljs.core.cst$kw$test_DASH_for_DASH_eol_DASH_blanks_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$object,cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_,cljs.core.cst$kw$wrap_DASH_coll_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader_DASH_cond,cljs.core.cst$kw$comma_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pair,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$justify_DASH_tuning], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$justify_DASH_tuning], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$map,cljs.core.cst$kw$dbg_DASH_local_QMARK_,cljs.core.cst$kw$hang_DASH_adjust,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$justify_DASH_tuning], null),cljs.core.cst$kw$tuning,cljs.core.cst$kw$perf_DASH_vs_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,cljs.core.cst$kw$cache_DASH_path], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extend,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$map,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pair,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_DASH_fn,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$ha_DASH_width_DASH_factor], null)], null);
zprint.config.zfnstyle = cljs.core.PersistentHashMap.fromArrays(["map","binding","cond->","as->","with-local-vars","loop","defn","=","some->","if-not","when-first","when-some","defcc","fdef","if-let","doseq","try","s/fdef","with-redefs","matchm","defc","defcs","fn","for","defrecord","with-meta","catch","defexpect","with-redefs-fn","defui","s/or","swap!","apply",":require","s/def","cond","if","let","defproject","reify","defmulti","when-let",":import","not=","with-bindings","doto","cond-let","if-some","extend-protocol","or","case","alt","remove","mapcat","with-open","with-bindings*","filter","condp","when","s/and","->","and","defmethod","do","some->>","fn*","interpose","deftest","match","extend","->>","defprotocol","extend-type","defn-","filterv","def","reduce","assert-args","dotimes","proxy","assoc-in","assoc","mapv","when-not","cat","letfn","ns","deftype","defmacro","with-out-str"],[cljs.core.cst$kw$arg1,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$arg2,cljs.core.cst$kw$binding,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$hang,cljs.core.cst$kw$force_DASH_nl_DASH_body,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$binding,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_mixin,cljs.core.cst$kw$arg1_DASH_force_DASH_nl,cljs.core.cst$kw$binding,cljs.core.cst$kw$binding,cljs.core.cst$kw$none_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arg1_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_DASH_min,(2)], null)], null)], null),cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$arg1_DASH_mixin,cljs.core.cst$kw$arg1_DASH_mixin,cljs.core.cst$kw$fn,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg2_DASH_extend,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arg1_DASH_body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$respect_DASH_nl,cljs.core.cst$kw$next_DASH_inner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$respect_DASH_nl_DASH_off], null)], null)], null),cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg1_DASH_extend,cljs.core.cst$kw$gt2_DASH_force_DASH_nl,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg1,cljs.core.cst$kw$force_DASH_nl_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arg1_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_DASH_min,(2)], null)], null)], null),cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arg2_DASH_pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrap_QMARK_,false], null)], null)], null),cljs.core.cst$kw$extend,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$binding,cljs.core.cst$kw$force_DASH_nl_DASH_body,cljs.core.cst$kw$hang,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_extend,cljs.core.cst$kw$hang,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2_DASH_pair,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$gt2_DASH_force_DASH_nl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noarg1_DASH_body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_QMARK_,false], null),cljs.core.cst$kw$next_DASH_inner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_QMARK_,true], null)], null)], null)], null),cljs.core.cst$kw$hang,cljs.core.cst$kw$arg2,cljs.core.cst$kw$none_DASH_body,cljs.core.cst$kw$force_DASH_nl_DASH_body,cljs.core.cst$kw$fn,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,cljs.core.cst$kw$arg1_DASH_extend,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$force_DASH_nl_DASH_body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_QMARK_,false], null),cljs.core.cst$kw$next_DASH_inner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constant_DASH_pair_QMARK_,true], null)], null)], null)], null),cljs.core.cst$kw$arg1_DASH_force_DASH_nl,cljs.core.cst$kw$arg1_DASH_extend,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg1,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg2_DASH_fn,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1_DASH_pair,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$force_DASH_nl,cljs.core.cst$kw$binding,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$arg2_DASH_extend,cljs.core.cst$kw$arg1_DASH_body,cljs.core.cst$kw$none_DASH_body]);
zprint.config.default_zprint_options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$old_QMARK_,cljs.core.cst$kw$format,cljs.core.cst$kw$remove,cljs.core.cst$kw$indent,cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$tuning,cljs.core.cst$kw$fn_DASH_force_DASH_nl,cljs.core.cst$kw$max_DASH_hang_DASH_depth,cljs.core.cst$kw$future,cljs.core.cst$kw$max_DASH_depth_DASH_string,cljs.core.cst$kw$user_DASH_fn_DASH_map,cljs.core.cst$kw$pair_DASH_fn,cljs.core.cst$kw$extend,cljs.core.cst$kw$script,cljs.core.cst$kw$promise,cljs.core.cst$kw$spaces_QMARK_,cljs.core.cst$kw$pair,cljs.core.cst$kw$configured_QMARK_,cljs.core.cst$kw$dbg_DASH_ge,cljs.core.cst$kw$width,cljs.core.cst$kw$uneval,cljs.core.cst$kw$fn_DASH_name,cljs.core.cst$kw$color_DASH_map,cljs.core.cst$kw$color_QMARK_,cljs.core.cst$kw$output,cljs.core.cst$kw$agent,cljs.core.cst$kw$do_DASH_in_DASH_hang_QMARK_,cljs.core.cst$kw$search_DASH_config_QMARK_,cljs.core.cst$kw$vector,cljs.core.cst$kw$array,cljs.core.cst$kw$parse_DASH_string_DASH_all_QMARK_,cljs.core.cst$kw$style,cljs.core.cst$kw$dbg_DASH_print_QMARK_,cljs.core.cst$kw$file_QMARK_,cljs.core.cst$kw$fn_DASH_obj,cljs.core.cst$kw$fn_DASH_gt2_DASH_force_DASH_nl,cljs.core.cst$kw$spec,cljs.core.cst$kw$test_DASH_for_DASH_eol_DASH_blanks_QMARK_,cljs.core.cst$kw$binding,cljs.core.cst$kw$cache,cljs.core.cst$kw$dbg_QMARK_,cljs.core.cst$kw$list,cljs.core.cst$kw$trim_DASH_comments_QMARK_,cljs.core.cst$kw$max_DASH_hang_DASH_span,cljs.core.cst$kw$record,cljs.core.cst$kw$comment,cljs.core.cst$kw$parse,cljs.core.cst$kw$cwd_DASH_zprintrc_QMARK_,cljs.core.cst$kw$parse_DASH_string_QMARK_,cljs.core.cst$kw$url,cljs.core.cst$kw$perf_DASH_vs_DASH_format,cljs.core.cst$kw$style_DASH_map,cljs.core.cst$kw$fn_DASH_gt3_DASH_force_DASH_nl,cljs.core.cst$kw$process_DASH_bang_DASH_zprint_QMARK_,cljs.core.cst$kw$max_DASH_depth,cljs.core.cst$kw$input,cljs.core.cst$kw$vector_DASH_fn,cljs.core.cst$kw$drop_QMARK_,cljs.core.cst$kw$set,cljs.core.cst$kw$fn_DASH_map,cljs.core.cst$kw$atom,cljs.core.cst$kw$force_DASH_eol_DASH_blanks_QMARK_,cljs.core.cst$kw$tab,cljs.core.cst$kw$max_DASH_hang_DASH_count,cljs.core.cst$kw$parallel_QMARK_,cljs.core.cst$kw$delay,cljs.core.cst$kw$map,cljs.core.cst$kw$object,cljs.core.cst$kw$reader_DASH_cond,cljs.core.cst$kw$return_DASH_cvec_QMARK_,cljs.core.cst$kw$zipper_QMARK_],[true,cljs.core.cst$kw$on,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_force_DASH_nl,null,cljs.core.cst$kw$fn_DASH_gt2_DASH_force_DASH_nl,null,cljs.core.cst$kw$fn_DASH_gt3_DASH_force_DASH_nl,null,cljs.core.cst$kw$extend,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$modifiers,null], null)], null),(0),(1000000),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$hang_DASH_flow,1.1,cljs.core.cst$kw$hang_DASH_type_DASH_flow,1.5,cljs.core.cst$kw$hang_DASH_flow_DASH_limit,(10),cljs.core.cst$kw$general_DASH_hang_DASH_adjust,(-1),cljs.core.cst$kw$hang_DASH_if_DASH_equal_DASH_flow_QMARK_,true], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$force_DASH_nl,null,cljs.core.cst$kw$flow,null,cljs.core.cst$kw$noarg1,null,cljs.core.cst$kw$noarg1_DASH_body,null,cljs.core.cst$kw$force_DASH_nl_DASH_body,null,cljs.core.cst$kw$arg1_DASH_force_DASH_nl,null,cljs.core.cst$kw$flow_DASH_body,null], null), null),(300),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),"##",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$hang_DASH_diff,(1),cljs.core.cst$kw$hang_DASH_expand,2.0,cljs.core.cst$kw$hang_DASH_size,(10),cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$flow_QMARK_,cljs.core.cst$kw$nl_DASH_separator_QMARK_,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$indent,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$force_DASH_nl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$modifiers,cljs.core.cst$kw$hang_QMARK_],[true,false,(0),(2),(0),1000.0,true,null,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["static",null], null), null),true]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$more_DASH_options,null], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$flow_QMARK_,cljs.core.cst$kw$nl_DASH_separator_QMARK_,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$indent,cljs.core.cst$kw$justify_QMARK_,cljs.core.cst$kw$justify_DASH_tuning,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$force_DASH_nl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$hang_QMARK_],[false,false,(0),(2),false,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_flow,(4),cljs.core.cst$kw$hang_DASH_flow_DASH_limit,(30)], null),(0),false,2.0,null,null,(1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_DASH_expand,(5)], null),true]),false,null,(80),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_DASH_map,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$true,cljs.core.cst$kw$fn,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$number,cljs.core.cst$kw$brace,cljs.core.cst$kw$symbol,cljs.core.cst$kw$comma,cljs.core.cst$kw$user_DASH_fn,cljs.core.cst$kw$uneval,cljs.core.cst$kw$false,cljs.core.cst$kw$string,cljs.core.cst$kw$paren,cljs.core.cst$kw$quote,cljs.core.cst$kw$keyword,cljs.core.cst$kw$syntax_DASH_quote_DASH_paren,cljs.core.cst$kw$nil,cljs.core.cst$kw$deref,cljs.core.cst$kw$bracket,cljs.core.cst$kw$comment,cljs.core.cst$kw$regex,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$none,cljs.core.cst$kw$char],[cljs.core.cst$kw$yellow,cljs.core.cst$kw$cyan,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$cyan,cljs.core.cst$kw$none,cljs.core.cst$kw$cyan,cljs.core.cst$kw$magenta,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$green,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$yellow,cljs.core.cst$kw$magenta])], null),null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$true,cljs.core.cst$kw$fn,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$number,cljs.core.cst$kw$brace,cljs.core.cst$kw$symbol,cljs.core.cst$kw$comma,cljs.core.cst$kw$user_DASH_fn,cljs.core.cst$kw$uneval,cljs.core.cst$kw$false,cljs.core.cst$kw$string,cljs.core.cst$kw$paren,cljs.core.cst$kw$quote,cljs.core.cst$kw$keyword,cljs.core.cst$kw$syntax_DASH_quote_DASH_paren,cljs.core.cst$kw$nil,cljs.core.cst$kw$deref,cljs.core.cst$kw$bracket,cljs.core.cst$kw$comment,cljs.core.cst$kw$regex,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$none,cljs.core.cst$kw$char],[cljs.core.cst$kw$black,cljs.core.cst$kw$blue,cljs.core.cst$kw$green,cljs.core.cst$kw$purple,cljs.core.cst$kw$red,cljs.core.cst$kw$black,cljs.core.cst$kw$none,cljs.core.cst$kw$black,cljs.core.cst$kw$magenta,cljs.core.cst$kw$black,cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$red,cljs.core.cst$kw$magenta,cljs.core.cst$kw$red,cljs.core.cst$kw$yellow,cljs.core.cst$kw$red,cljs.core.cst$kw$purple,cljs.core.cst$kw$green,cljs.core.cst$kw$black,cljs.core.cst$kw$red,cljs.core.cst$kw$black,cljs.core.cst$kw$black]),false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$focus,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$zloc_QMARK_,false,cljs.core.cst$kw$surround,null], null),cljs.core.cst$kw$lines,null,cljs.core.cst$kw$elide,null], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),true,false,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$wrap_DASH_coll_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$option_DASH_fn,cljs.core.cst$kw$wrap_QMARK_,cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_,cljs.core.cst$kw$binding_QMARK_,cljs.core.cst$kw$option_DASH_fn_DASH_first,cljs.core.cst$kw$fn_DASH_format,cljs.core.cst$kw$indent_DASH_only_QMARK_],[true,(1),false,false,null,true,true,false,null,null,false]),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$hex_QMARK_,false,cljs.core.cst$kw$indent,(1),cljs.core.cst$kw$object_QMARK_,false,cljs.core.cst$kw$wrap_QMARK_,true], null),false,null,null,false,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pair_DASH_fn,null,cljs.core.cst$kw$gt2_DASH_force_DASH_nl,null,cljs.core.cst$kw$binding,null], null), null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$docstring_QMARK_,true,cljs.core.cst$kw$value,null], null),false,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$flow_QMARK_,cljs.core.cst$kw$nl_DASH_separator_QMARK_,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$indent,cljs.core.cst$kw$justify_QMARK_,cljs.core.cst$kw$justify_DASH_tuning,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$force_DASH_nl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$hang_QMARK_],[false,false,(0),(2),false,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_flow,(4),cljs.core.cst$kw$hang_DASH_flow_DASH_limit,(30)], null),(0),false,2.0,false,null,(1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_DASH_expand,(5)], null),true]),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$directory,".zprint",cljs.core.cst$kw$location,"HOME"], null),null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hang_DASH_size,cljs.core.cst$kw$indent_DASH_arg,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$constant_DASH_pair_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$pair_DASH_hang_QMARK_,cljs.core.cst$kw$constant_DASH_pair_DASH_min,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_avoid,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$constant_DASH_pair_DASH_fn,cljs.core.cst$kw$hang_QMARK_,cljs.core.cst$kw$indent_DASH_only_QMARK_,cljs.core.cst$kw$replacement_DASH_string,cljs.core.cst$kw$indent_DASH_only_DASH_style],[(100),null,(0),true,(2),(0),2.0,true,(4),false,false,null,0.5,(1),null,true,false,null,cljs.core.cst$kw$input_DASH_hang]),null,(4),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hang_QMARK_,true,cljs.core.cst$kw$record_DASH_type_QMARK_,true,cljs.core.cst$kw$to_DASH_string_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$count_QMARK_,false,cljs.core.cst$kw$wrap_QMARK_,true,cljs.core.cst$kw$inline_QMARK_,true,cljs.core.cst$kw$inline_DASH_align_DASH_style,cljs.core.cst$kw$aligned], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$interpose,null,cljs.core.cst$kw$left_DASH_space,cljs.core.cst$kw$drop], null),false,false,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cache_DASH_dir,"urlcache",cljs.core.cst$kw$cache_DASH_secs,(300)], null),null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$vector_DASH_pairs,cljs.core.cst$kw$pair_DASH_nl,cljs.core.cst$kw$community,cljs.core.cst$kw$extend_DASH_nl,cljs.core.cst$kw$moustache,cljs.core.cst$kw$no_DASH_hang,cljs.core.cst$kw$keyword_DASH_respect_DASH_nl,cljs.core.cst$kw$backtranslate,cljs.core.cst$kw$binding_DASH_nl,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$respect_DASH_bl_DASH_off,cljs.core.cst$kw$binding_DASH_nl_DASH_all,cljs.core.cst$kw$pair_DASH_nl_DASH_all,cljs.core.cst$kw$map_DASH_nl,cljs.core.cst$kw$indent_DASH_only,cljs.core.cst$kw$sort_DASH_dependencies,cljs.core.cst$kw$fast_DASH_hang,cljs.core.cst$kw$all_DASH_hang,cljs.core.cst$kw$justified,cljs.core.cst$kw$respect_DASH_bl,cljs.core.cst$kw$how_DASH_to_DASH_ns,cljs.core.cst$kw$respect_DASH_nl_DASH_off,cljs.core.cst$kw$respect_DASH_nl,cljs.core.cst$kw$map_DASH_nl_DASH_all,cljs.core.cst$kw$dark_DASH_color_DASH_map],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant_DASH_pair_DASH_min,(1),cljs.core.cst$kw$constant_DASH_pair_DASH_fn,(function (p1__29701_SHARP_){
return (((p1__29701_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__29701_SHARP_ === 'string') || (typeof p1__29701_SHARP_ === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,p1__29701_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,p1__29701_SHARP_)) || (cljs.core.vector_QMARK_(p1__29701_SHARP_)));
})], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,true], null),cljs.core.cst$kw$next_DASH_inner,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant_DASH_pair_DASH_min,(4),cljs.core.cst$kw$constant_DASH_pair_DASH_fn,null], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent,(0)], null),cljs.core.cst$kw$fn_DASH_map,cljs.core.PersistentHashMap.fromArrays(["map","with-meta","apply","remove","filter","filterv","reduce","assoc","mapv"],[cljs.core.cst$kw$none,cljs.core.cst$kw$none_DASH_body,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none]),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent_DASH_arg,(1)], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent,(0)], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent,(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flow_QMARK_,true,cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn_DASH_map,new cljs.core.PersistentArrayMap(null, 1, ["app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$vector_DASH_pairs], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$extend,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$pair_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$reader_DASH_cond,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null),cljs.core.cst$kw$record,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$option_DASH_fn_DASH_first,(function (p1__29700_SHARP_,p2__29699_SHARP_){
var k_QMARK_ = (p2__29699_SHARP_ instanceof cljs.core.Keyword);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_QMARK_,cljs.core.cst$kw$respect_DASH_nl_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$vector.cljs$core$IFn$_invoke$arity$1(p1__29700_SHARP_)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,k_QMARK_], null)], null);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn_DASH_map,new cljs.core.PersistentArrayMap(null, 4, ["quote",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_w_DASH_string,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$replacement_DASH_string,"'"], null)], null)], null),"clojure.core/deref",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_w_DASH_string,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$replacement_DASH_string,"@"], null)], null)], null),"var",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_w_DASH_string,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$replacement_DASH_string,"#'"], null)], null)], null),"clojure.core/unquote",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_w_DASH_string,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$replacement_DASH_string,"~"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$option_DASH_fn,(function (opts,n,exprs){
var hiccup_QMARK_ = (((n >= (2))) && ((((cljs.core.first(exprs) instanceof cljs.core.Keyword)) || ((cljs.core.first(exprs) instanceof cljs.core.Symbol)))) && (cljs.core.map_QMARK_(cljs.core.second(exprs))));
if(((hiccup_QMARK_) && (cljs.core.not(cljs.core.cst$kw$fn_DASH_format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$vector.cljs$core$IFn$_invoke$arity$1(opts)))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn_DASH_format,cljs.core.cst$kw$arg1_DASH_force_DASH_nl], null)], null);
} else {
if(cljs.core.truth_((((!(hiccup_QMARK_)))?cljs.core.cst$kw$fn_DASH_format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$vector.cljs$core$IFn$_invoke$arity$1(opts)):false))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn_DASH_format,null], null)], null);
} else {
return null;

}
}
}),cljs.core.cst$kw$wrap_QMARK_,false], null),cljs.core.cst$kw$vector_DASH_fn,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(1),cljs.core.cst$kw$indent_DASH_arg,(1)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,false], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,false], null),cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,false], null),cljs.core.cst$kw$set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$comment,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrap_QMARK_,false], null),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent_DASH_only_QMARK_,true], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent_DASH_only_QMARK_,true], null),cljs.core.cst$kw$set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent_DASH_only_QMARK_,true], null),cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indent_DASH_only_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return_DASH_altered_DASH_zipper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$sym$defproject,zprint.rewrite.sort_dependencies], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(100),cljs.core.cst$kw$ha_DASH_width_DASH_factor,(-600)], null),cljs.core.cst$kw$extend,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(100),cljs.core.cst$kw$ha_DASH_width_DASH_factor,(-600)], null),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(100),cljs.core.cst$kw$ha_DASH_width_DASH_factor,(-300)], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(0),cljs.core.cst$kw$ha_DASH_depth_DASH_factor,(15)], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(20),cljs.core.cst$kw$ha_DASH_width_DASH_factor,(-150)], null),cljs.core.cst$kw$vector_DASH_fn,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_accept,(100),cljs.core.cst$kw$ha_DASH_width_DASH_factor,(-300)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$extend,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$pair_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$reader_DASH_cond,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null),cljs.core.cst$kw$record,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,true], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,true], null),cljs.core.cst$kw$pair,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,true], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,true], null),cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,true], null),cljs.core.cst$kw$set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_bl_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn_DASH_map,new cljs.core.PersistentArrayMap(null, 1, ["ns",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$arg1_DASH_body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [":import",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_QMARK_,true], null)], null)], null),":require",cljs.core.cst$kw$flow], null),cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_QMARK_,false,cljs.core.cst$kw$indent_DASH_arg,(1)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,false], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,false], null),cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,false], null),cljs.core.cst$kw$set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,false], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,true], null),cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,true], null),cljs.core.cst$kw$vector,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,true], null),cljs.core.cst$kw$set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$respect_DASH_nl_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$indent,(0),cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color_DASH_map,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$true,cljs.core.cst$kw$fn,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$number,cljs.core.cst$kw$brace,cljs.core.cst$kw$unquote,cljs.core.cst$kw$symbol,cljs.core.cst$kw$comma,cljs.core.cst$kw$user_DASH_fn,cljs.core.cst$kw$uneval,cljs.core.cst$kw$false,cljs.core.cst$kw$string,cljs.core.cst$kw$paren,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$quote,cljs.core.cst$kw$keyword,cljs.core.cst$kw$syntax_DASH_quote_DASH_paren,cljs.core.cst$kw$nil,cljs.core.cst$kw$deref,cljs.core.cst$kw$bracket,cljs.core.cst$kw$comment,cljs.core.cst$kw$regex,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$none,cljs.core.cst$kw$char],[cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$bright_DASH_red,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_white,cljs.core.cst$kw$bright_DASH_white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_red,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$bright_DASH_green,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_blue,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$red,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_black,cljs.core.cst$kw$bright_DASH_cyan,cljs.core.cst$kw$white,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_cyan]),cljs.core.cst$kw$uneval,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_DASH_map,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$true,cljs.core.cst$kw$fn,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$number,cljs.core.cst$kw$brace,cljs.core.cst$kw$unquote,cljs.core.cst$kw$symbol,cljs.core.cst$kw$comma,cljs.core.cst$kw$user_DASH_fn,cljs.core.cst$kw$uneval,cljs.core.cst$kw$false,cljs.core.cst$kw$string,cljs.core.cst$kw$paren,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$quote,cljs.core.cst$kw$keyword,cljs.core.cst$kw$syntax_DASH_quote_DASH_paren,cljs.core.cst$kw$nil,cljs.core.cst$kw$deref,cljs.core.cst$kw$bracket,cljs.core.cst$kw$comment,cljs.core.cst$kw$regex,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$none,cljs.core.cst$kw$char],[cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$bright_DASH_red,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_white,cljs.core.cst$kw$bright_DASH_white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_red,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$bright_DASH_green,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_yellow,cljs.core.cst$kw$bright_DASH_blue,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_magenta,cljs.core.cst$kw$red,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_black,cljs.core.cst$kw$bright_DASH_cyan,cljs.core.cst$kw$white,cljs.core.cst$kw$white,cljs.core.cst$kw$bright_DASH_cyan])], null)], null)]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$gt3_DASH_force_DASH_nl,null,cljs.core.cst$kw$arg1_DASH_pair,null,cljs.core.cst$kw$arg1_DASH_pair_DASH_body,null], null), null),null,(1000000),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$range,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null)], null),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hang_DASH_size,cljs.core.cst$kw$indent_DASH_arg,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$constant_DASH_pair_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$pair_DASH_hang_QMARK_,cljs.core.cst$kw$constant_DASH_pair_DASH_min,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_avoid,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$constant_DASH_pair_DASH_fn,cljs.core.cst$kw$hang_QMARK_,cljs.core.cst$kw$indent_DASH_only_QMARK_,cljs.core.cst$kw$indent_DASH_only_DASH_style],[(100),null,(0),true,(2),(0),2.0,true,(4),false,false,null,0.5,(1),null,true,false,cljs.core.cst$kw$input_DASH_hang]),null,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_,cljs.core.cst$kw$wrap_DASH_coll_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$wrap_QMARK_,cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_,cljs.core.cst$kw$indent_DASH_only_QMARK_,cljs.core.cst$kw$sort_QMARK_],[false,true,(2),false,false,true,true,false,true]),zprint.config.zfnstyle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),false,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expand_QMARK_,true,cljs.core.cst$kw$size,(8)], null),(4),false,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$object_QMARK_,false], null),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$flow_QMARK_,cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_,cljs.core.cst$kw$nl_DASH_separator_QMARK_,cljs.core.cst$kw$ha_DASH_depth_DASH_factor,cljs.core.cst$kw$key_DASH_depth_DASH_color,cljs.core.cst$kw$indent,cljs.core.cst$kw$comma_QMARK_,cljs.core.cst$kw$justify_QMARK_,cljs.core.cst$kw$justify_DASH_tuning,cljs.core.cst$kw$ha_DASH_width_DASH_factor,cljs.core.cst$kw$nl_DASH_separator_DASH_all_QMARK_,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$key_DASH_value_DASH_color,cljs.core.cst$kw$force_DASH_nl_QMARK_,cljs.core.cst$kw$respect_DASH_nl_QMARK_,cljs.core.cst$kw$key_DASH_ignore_DASH_silent,cljs.core.cst$kw$key_DASH_order,cljs.core.cst$kw$key_DASH_ignore,cljs.core.cst$kw$respect_DASH_bl_QMARK_,cljs.core.cst$kw$hang_DASH_accept,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$lift_DASH_ns_DASH_in_DASH_code_QMARK_,cljs.core.cst$kw$hang_DASH_adjust,cljs.core.cst$kw$justify_DASH_hang,cljs.core.cst$kw$key_DASH_color,cljs.core.cst$kw$lift_DASH_ns_QMARK_,cljs.core.cst$kw$hang_QMARK_,cljs.core.cst$kw$indent_DASH_only_QMARK_,cljs.core.cst$kw$unlift_DASH_ns_QMARK_,cljs.core.cst$kw$sort_QMARK_],[false,null,false,(0),null,(2),true,false,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hang_DASH_flow,(4),cljs.core.cst$kw$hang_DASH_flow_DASH_limit,(30)], null),(0),false,1000.0,null,null,false,null,null,null,false,null,(1),false,(-1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hang_DASH_expand,(5)], null),null,false,true,false,false,true]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$indent,(1),cljs.core.cst$kw$wrap_DASH_after_DASH_multi_QMARK_,true,cljs.core.cst$kw$wrap_DASH_coll_QMARK_,true], null),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$sort_DASH_in_DASH_code_QMARK_,cljs.core.cst$kw$indent,cljs.core.cst$kw$comma_QMARK_,cljs.core.cst$kw$hang_DASH_expand,cljs.core.cst$kw$force_DASH_nl_QMARK_,cljs.core.cst$kw$key_DASH_order,cljs.core.cst$kw$hang_DASH_diff,cljs.core.cst$kw$hang_QMARK_,cljs.core.cst$kw$sort_QMARK_],[null,(2),null,1000.0,true,null,(1),true,null]),false,false]);
zprint.config.no_color_map = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$fn,cljs.core.cst$kw$hash_DASH_paren,cljs.core.cst$kw$number,cljs.core.cst$kw$brace,cljs.core.cst$kw$user_DASH_fn,cljs.core.cst$kw$uneval,cljs.core.cst$kw$string,cljs.core.cst$kw$paren,cljs.core.cst$kw$quote,cljs.core.cst$kw$keyword,cljs.core.cst$kw$syntax_DASH_quote_DASH_paren,cljs.core.cst$kw$nil,cljs.core.cst$kw$deref,cljs.core.cst$kw$bracket,cljs.core.cst$kw$comment,cljs.core.cst$kw$hash_DASH_brace,cljs.core.cst$kw$none],[cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none,cljs.core.cst$kw$none]);
zprint.config.configured_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zprint.config.default_zprint_options);
zprint.config.explained_sequence = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
/**
 * Take two arguments of things to merge and figure it out.
 *   Works for sets too.
 */
zprint.config.merge_with_fn = (function zprint$config$merge_with_fn(val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(zprint.config.merge_with_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
if(((cljs.core.set_QMARK_(val_in_result)) && (cljs.core.set_QMARK_(val_in_latter)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,val_in_result,cljs.core.seq(val_in_latter));
} else {
return val_in_latter;

}
}
});
/**
 * Do a merge of maps all the way down.
 */
zprint.config.merge_deep = (function zprint$config$merge_deep(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29703 = arguments.length;
var i__4737__auto___29704 = (0);
while(true){
if((i__4737__auto___29704 < len__4736__auto___29703)){
args__4742__auto__.push((arguments[i__4737__auto___29704]));

var G__29705 = (i__4737__auto___29704 + (1));
i__4737__auto___29704 = G__29705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,zprint.config.merge_with_fn,maps);
}));

(zprint.config.merge_deep.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.config.merge_deep.cljs$lang$applyTo = (function (seq29702){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29702));
}));

/**
 * Take two arguments of things to merge and figure it out.
 */
zprint.config.merge_with_fn_doc = (function zprint$config$merge_with_fn_doc(doc_string,val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_(val_in_result)) && (cljs.core.map_QMARK_(val_in_latter)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_in_result,val_in_latter], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,doc_string,cljs.core.cst$kw$value,val_in_latter], null);
}
});
/**
 * Do a merge of maps all the way down, keeping track of where every
 *   value came from.
 */
zprint.config.merge_deep_doc = (function zprint$config$merge_deep_doc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29708 = arguments.length;
var i__4737__auto___29709 = (0);
while(true){
if((i__4737__auto___29709 < len__4736__auto___29708)){
args__4742__auto__.push((arguments[i__4737__auto___29709]));

var G__29710 = (i__4737__auto___29709 + (1));
i__4737__auto___29709 = G__29710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic = (function (doc_string,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.merge_with_fn_doc,doc_string),maps);
}));

(zprint.config.merge_deep_doc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.config.merge_deep_doc.cljs$lang$applyTo = (function (seq29706){
var G__29707 = cljs.core.first(seq29706);
var seq29706__$1 = cljs.core.next(seq29706);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29707,seq29706__$1);
}));

/**
 * Remove a single key from a map or remove a series of
 *   keys from an internal map.
 */
zprint.config.remove_key = (function zprint$config$remove_key(m,k){
if(cljs.core.coll_QMARK_(k)){
var map_key = cljs.core.first(k);
var keys_to_remove = cljs.core.next(k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,map_key,(function (){var G__29711 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(map_key) : m.call(null,map_key));
var G__29712 = keys_to_remove;
return (zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2 ? zprint.config.remove_keys.cljs$core$IFn$_invoke$arity$2(G__29711,G__29712) : zprint.config.remove_keys.call(null,G__29711,G__29712));
})());
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Remove keys from a map at multiple levels.
 */
zprint.config.remove_keys = (function zprint$config$remove_keys(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29713_SHARP_,p2__29714_SHARP_){
return zprint.config.remove_key(p1__29713_SHARP_,p2__29714_SHARP_);
}),m,ks);
});
/**
 * Get the key seq for every terminal element in a map.
 */
zprint.config.key_seq = (function zprint$config$key_seq(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__29716){
var vec__29717 = p__29716;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(1),null);
var ks = (zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.config.key_seq.cljs$core$IFn$_invoke$arity$1(v) : zprint.config.key_seq.call(null,v));
if(cljs.core.truth_(ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29715_SHARP_){
return cljs.core.cons(k,((cljs.core.coll_QMARK_(p1__29715_SHARP_))?p1__29715_SHARP_:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29715_SHARP_], null)));
}),ks);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
} else {
return null;
}
});
/**
 * Given a key sequence and two maps, remove the elements of the set at
 *   the key sequence in the second map from set in the first map.
 */
zprint.config.remove_elements = (function zprint$config$remove_elements(map_remove,map_orig,ks){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(map_orig,ks,clojure.set.difference,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(map_remove,ks));
});
/**
 * Take two maps, and remove all of the elemnts in the second maps sets
 *   from equivalent places in the first map.
 */
zprint.config.remove_set_elements = (function zprint$config$remove_set_elements(map_orig,map_remove){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.remove_elements,map_remove),map_orig,zprint.config.key_seq(map_remove));
});
/**
 * Take an options map, and remove the set elements that are at the :remove
 *   key, and also remove the :remove key.
 */
zprint.config.perform_remove = (function zprint$config$perform_remove(doc_string,doc_map,options,new_options){
var map_remove = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1(new_options);
var options_out = zprint.config.remove_set_elements(options,map_remove);
var remove_ks_seq = zprint.config.key_seq(map_remove);
var new_options_out = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_options,cljs.core.cst$kw$remove);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [options_out,new_options_out,(zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4 ? zprint.config.diff_deep_ks.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,remove_ks_seq,options_out) : zprint.config.diff_deep_ks.call(null,doc_string,doc_map,remove_ks_seq,options_out))], null);
});
/**
 * Given a function and map and a key, replace the value with 
 *   (f leaf) or (map-leaves f m).
 */
zprint.config.map_leaf = (function zprint$config$map_leaf(f,m,k){
var v = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2 ? zprint.config.map_leaves.cljs$core$IFn$_invoke$arity$2(f,v) : zprint.config.map_leaves.call(null,f,v)));
}
});
/**
 * Return a map of the same shape but where every leaf value
 *   (i.e., not map value) has been replaced by the (f leaf-value).
 */
zprint.config.map_leaves = (function zprint$config$map_leaves(f,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.map_leaf,f),m,cljs.core.keys(m));
});
/**
 * Create a map with a :value and :set-by elements.
 */
zprint.config.value_set_by = (function zprint$config$value_set_by(set_by,_,value){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$set_DASH_by,set_by,cljs.core.cst$kw$value,value], null);
});
/**
 * Update an existing doc-map with labels of everything that shows up
 *   in the ks-seq.
 */
zprint.config.diff_deep_ks = (function zprint$config$diff_deep_ks(doc_string,doc_map,changed_key_seq,existing){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29720_SHARP_,p2__29721_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__29720_SHARP_,p2__29721_SHARP_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.config.value_set_by,doc_string),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing,p2__29721_SHARP_));
}),doc_map,changed_key_seq);
});
/**
 * Diff two maps.
 */
zprint.config.diff_map = (function zprint$config$diff_map(before,after){
return cljs.core.second(clojure.data.diff(before,after));
});
/**
 * Return current explained-seqence and add one to it.
 */
zprint.config.inc_explained_sequence = (function zprint$config$inc_explained_sequence(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zprint.config.explained_sequence,cljs.core.inc);
});
/**
 * Do a simple dissoc-in for two levels.  Does not remove the
 *   second map if it is empty.
 */
zprint.config.dissoc_two = (function zprint$config$dissoc_two(m,p__29722){
var vec__29723 = p__29722;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k1),k2));
});
/**
 * Take an updated-map and generate calculated options
 *   from it.  Takes the updated-map and further updates
 *   it, being smart about things that were set to nil.
 */
zprint.config.add_calculated_options = (function zprint$config$add_calculated_options(updated_map){
var G__29726 = updated_map;
var G__29726__$1 = (cljs.core.truth_(cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__29726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$map,cljs.core.cst$kw$key_DASH_value], null),cljs.core.zipmap(cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__29726);
var G__29726__$2 = (((((cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((cljs.core.cst$kw$key_DASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(updated_map)) == null))))))?zprint.config.dissoc_two(G__29726__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$map,cljs.core.cst$kw$key_DASH_value], null)):G__29726__$1);
var G__29726__$3 = (cljs.core.truth_(cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reader_DASH_cond.cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in(G__29726__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader_DASH_cond,cljs.core.cst$kw$key_DASH_value], null),cljs.core.zipmap(cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reader_DASH_cond.cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.cljs$core$IFn$_invoke$arity$0())):G__29726__$2);
if((((cljs.core.cst$kw$key_DASH_order.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reader_DASH_cond.cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && ((!((cljs.core.cst$kw$key_DASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reader_DASH_cond.cljs$core$IFn$_invoke$arity$1(updated_map)) == null)))))){
return zprint.config.dissoc_two(G__29726__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader_DASH_cond,cljs.core.cst$kw$key_DASH_value], null));
} else {
return G__29726__$3;
}
});
/**
 * Replace options to be used on every call.  You must have validated
 *   these options already!
 */
zprint.config.reset_options_BANG_ = (function zprint$config$reset_options_BANG_(var_args){
var G__29728 = arguments.length;
switch (G__29728) {
case 2:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (updated_map,doc_map){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.add_calculated_options(updated_map));

if(cljs.core.truth_(doc_map)){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
} else {
return null;
}
}));

(zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (updated_map){
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,null);
}));

(zprint.config.reset_options_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Remove any previously set options.
 */
zprint.config.reset_default_options_BANG_ = (function zprint$config$reset_default_options_BANG_(){
cljs.core.reset_BANG_(zprint.config.configured_options,zprint.config.default_zprint_options);

return cljs.core.reset_BANG_(zprint.config.explained_options,zprint.config.default_zprint_options);
});
/**
 * Return any previously set options.
 */
zprint.config.get_options = (function zprint$config$get_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.configured_options),cljs.core.cst$kw$version,zprint.config.about());
});
/**
 * Return the base default options.
 */
zprint.config.get_default_options = (function zprint$config$get_default_options(){
return zprint.config.default_zprint_options;
});
/**
 * If the mapentry was explicitly set, return it as {:k {:set-by x
 *   :value y}}.  If the key has information below it that was explicitly
 *   set, return that as [k stuff] where stuff is a seq of maps whose
 *   ultimate value is {:set-by x :value y}.
 */
zprint.config.find_set = (function zprint$config$find_set(p__29730){
var vec__29731 = p__29730;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29731,(1),null);
var mapentry = vec__29731;
if(cljs.core.map_QMARK_(v)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$set_DASH_by,null], null), null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(v)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
} else {
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.config.find_set,v);
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,result);
if((!(cljs.core.empty_QMARK_(result__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,result__$1], null);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Call find-set on all the elements of a map.
 */
zprint.config.map_set = (function zprint$config$map_set(options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.config.find_set,options);
});
/**
 * Handle the three things returned from find-set, a regular map, nil,
 *   or a key with a seq of things that ultimately had a set map underneath,
 *   and build a map from each.
 */
zprint.config.extract_map = (function zprint$config$extract_map(m){
if(cljs.core.map_QMARK_(m)){
return m;
} else {
if((m == null)){
return m;
} else {
if(cljs.core.seq_QMARK_(cljs.core.first(cljs.core.next(m)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(m),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var G__29734 = cljs.core.first(cljs.core.next(m));
return (zprint.config.form_map.cljs$core$IFn$_invoke$arity$1 ? zprint.config.form_map.cljs$core$IFn$_invoke$arity$1(G__29734) : zprint.config.form_map.call(null,G__29734));
})())]);
} else {
return null;

}
}
}
});
/**
 * Given the vector of things from map-set, reconstruct a map out of
 *   the information.
 */
zprint.config.form_map = (function zprint$config$form_map(map_set_result){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.config.extract_map,map_set_result);
});
/**
 * Take an option map, and return a new options map with only the
 *   set values shows.
 */
zprint.config.only_set = (function zprint$config$only_set(options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,zprint.config.form_map(zprint.config.map_set(options)));
});
/**
 * Set options to be used on every call.
 */
zprint.config.set_explained_options_BANG_ = (function zprint$config$set_explained_options_BANG_(doc_map){
return cljs.core.reset_BANG_(zprint.config.explained_options,doc_map);
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_options = (function zprint$config$get_explained_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zprint.config.remove_keys(cljs.core.deref(zprint.config.explained_options),zprint.config.explain_hide_keys),cljs.core.cst$kw$version,zprint.config.about());
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_set_options = (function zprint$config$get_explained_set_options(){
return zprint.config.only_set(zprint.config.get_explained_options());
});
/**
 * Return any previously set doc-map complete.
 */
zprint.config.get_explained_all_options = (function zprint$config$get_explained_all_options(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(zprint.config.explained_options),cljs.core.cst$kw$version,zprint.config.about());
});
/**
 * Return the base explained options, matches get-default-options
 */
zprint.config.get_default_explained_all_options = (function zprint$config$get_default_explained_all_options(){
return zprint.config.default_zprint_options;
});
/**
 * Validate the new options, and update both the saved options
 *   and the doc-map as well.  Will throw an exceptino for errors.
 */
zprint.config.internal_set_options_BANG_ = (function zprint$config$internal_set_options_BANG_(doc_string,doc_map,existing_options,new_options){
var vec__29735 = (zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4 ? zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$4(doc_string,doc_map,existing_options,new_options) : zprint.config.config_and_validate.call(null,doc_string,doc_map,existing_options,new_options));
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29735,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29735,(1),null);
var error_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29735,(2),null);
if(cljs.core.truth_(error_vec)){
throw (new Error(["set-options! for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," found these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(updated_map,new_doc_map);

return null;
}
});
zprint.config.is_in_repl_QMARK_ = (function zprint$config$is_in_repl_QMARK_(){
return null;
});
/**
 * Given an options map, return an options map with only the operational
 *   options remaining.
 */
zprint.config.select_op_options = (function zprint$config$select_op_options(options){
return cljs.core.select_keys(options,zprint.config.operational_options);
});
/**
 * Do external configuration regardless of whether or not it has
 *   already been done, replacing any internal configuration.  Returns
 *   nil if successful, a vector of errors if not. 
 */
zprint.config.config_configure_all_BANG_ = (function zprint$config$config_configure_all_BANG_(var_args){
var G__29739 = arguments.length;
switch (G__29739) {
case 1:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (op_options){
var vec__29740 = (zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$3 ? zprint.config.config_and_validate_all.cljs$core$IFn$_invoke$arity$3(null,null,op_options) : zprint.config.config_and_validate_all.call(null,null,null,op_options));
var zprint_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29740,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29740,(1),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29740,(2),null);
if(cljs.core.truth_(errors)){
return errors;
} else {
zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2(zprint_options,doc_map);

var G__29743_29746 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$configured_QMARK_,true], null);
var G__29744_29747 = "internal";
(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 ? zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2(G__29743_29746,G__29744_29747) : zprint.config.config_set_options_BANG_.call(null,G__29743_29746,G__29744_29747));

if(cljs.core.truth_((function (){var and__4115__auto__ = zprint.config.is_in_repl_QMARK_();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.cst$kw$set_DASH_by.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$parallel_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_explained_all_options())));
} else {
return and__4115__auto__;
}
})())){
zprint.config.internal_set_options_BANG_("REPL execution default",zprint.config.get_explained_all_options(),zprint.config.get_options(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parallel_QMARK_,true], null));
} else {
}

return null;
}
}));

(zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(zprint.config.config_configure_all_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Add some options to the current options, checking to make sure
 *   that they are correct. op-options are operational options that
 *   affect where to get options or how to do the processing, but do
 *   not affect the format of the output directly.
 */
zprint.config.config_set_options_BANG_ = (function zprint$config$config_set_options_BANG_(var_args){
var G__29749 = arguments.length;
switch (G__29749) {
case 3:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (new_options,doc_str,op_options){
var error_vec = ((((cljs.core.not(cljs.core.cst$kw$configured_QMARK_.cljs$core$IFn$_invoke$arity$1(zprint.config.get_options()))) && (cljs.core.not(cljs.core.cst$kw$configured_QMARK_.cljs$core$IFn$_invoke$arity$1(new_options)))))?zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1(op_options):null);
if(cljs.core.truth_(error_vec)){
throw (new Error(["set-options! for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_str)," found these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_vec)].join('')));
} else {
}

return zprint.config.internal_set_options_BANG_(doc_str,zprint.config.get_explained_all_options(),zprint.config.get_options(),new_options);
}));

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3(new_options,["repl or api call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.config.inc_explained_sequence())].join(''),zprint.config.select_op_options(new_options));
}));

(zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$3(new_options,doc_str,zprint.config.select_op_options(new_options));
}));

(zprint.config.config_set_options_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * If the sequence is empty, then return nil, else return the sequence.
 */
zprint.config.empty_to_nil = (function zprint$config$empty_to_nil(empty_seq){
if(cljs.core.empty_QMARK_(empty_seq)){
return null;
} else {
return empty_seq;
}
});
/**
 * Validate an options map, source-str is a descriptive phrase 
 *   which will be included in the errors (if any). Returns nil 
 *   for success, a string with error(s) if not.
 */
zprint.config.validate_options = (function zprint$config$validate_options(var_args){
var G__29753 = arguments.length;
switch (G__29753) {
case 2:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2 = (function (options,source_str){
if(cljs.core.truth_(options)){
return zprint.config.empty_to_nil(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29751_SHARP_){
return (((p1__29751_SHARP_ == null)) || (cljs.core.empty_QMARK_(p1__29751_SHARP_)));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,zprint.spec.validate_basic.cljs$core$IFn$_invoke$arity$2(options,source_str))))));
} else {
return null;
}
}));

(zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1 = (function (options){
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(options,null);
}));

(zprint.config.validate_options.cljs$lang$maxFixedArity = 2);

/**
 * Take a [doc-string new-map [existing-map doc-map error-str] style-name]
 *   and produce a new [existing-map doc-map error-str] from the style defined
 *   in the new-map if it exists, or the existing-map if it doesn't.
 */
zprint.config.apply_one_style_alt = (function zprint$config$apply_one_style_alt(doc_string,new_map,p__29755,style_name){
var vec__29756 = p__29755;
var existing_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(1),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$not_DASH_specified)) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$default))?zprint.config.get_default_options():(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
}
})());
if(cljs.core.truth_(style_map)){
var updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_map,style_map], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,(cljs.core.truth_(doc_map)?zprint.config.diff_deep_ks([cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''),doc_map,zprint.config.key_seq(style_map),updated_map):null),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')], null);
}
}
});
/**
 * Take a [doc-string new-map [existing-map doc-map error-str] style-name]
 *   and produce a new [updated-map doc-map error-str] from the style defined
 *   in the new-map if it exists, or the existing-map if it doesn't.
 */
zprint.config.apply_one_style_alt1 = (function zprint$config$apply_one_style_alt1(doc_string,new_map,p__29759,style_name){
var vec__29760 = p__29759;
var existing_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29760,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29760,(1),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29760,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$not_DASH_specified)) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$default))?zprint.config.get_default_options():(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
}
})());
if(cljs.core.truth_(style_map)){
var updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_map,style_map], 0));
var updated_doc_map = (cljs.core.truth_(doc_map)?zprint.config.diff_deep_ks([cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''),doc_map,zprint.config.key_seq(style_map),updated_map):null);
return (zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4 ? zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4(doc_string,updated_doc_map,updated_map,new_map) : zprint.config.apply_style.call(null,doc_string,updated_doc_map,updated_map,new_map));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')], null);
}
}
});
/**
 * Take a [doc-string new-map [existing-map doc-map error-str] style-name]
 *   and produce a new [existing-map doc-map error-str] from the style defined
 *   in the new-map if it exists, or the existing-map if it doesn't.
 */
zprint.config.apply_one_style = (function zprint$config$apply_one_style(doc_string,new_map,p__29763,style_name){
var vec__29764 = p__29763;
var existing_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29764,(0),null);
var doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29764,(1),null);
var error_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29764,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$not_DASH_specified)) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$default))?zprint.config.get_default_options():(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style_DASH_map,style_name], null));
}
})());
if(cljs.core.truth_(style_map)){
var updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_map,style_map], 0));
var updated_map__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(updated_map,cljs.core.cst$kw$styles_DASH_applied,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$styles_DASH_applied.cljs$core$IFn$_invoke$arity$1(updated_map))?cljs.core.cst$kw$styles_DASH_applied.cljs$core$IFn$_invoke$arity$1(updated_map):cljs.core.PersistentVector.EMPTY),style_name));
var doc_map__$1 = (cljs.core.truth_(doc_map)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc_map,cljs.core.cst$kw$styles_DASH_applied,cljs.core.cst$kw$styles_DASH_applied.cljs$core$IFn$_invoke$arity$1(updated_map__$1)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map__$1,(cljs.core.truth_(doc_map__$1)?zprint.config.diff_deep_ks([cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''),doc_map__$1,zprint.config.key_seq(style_map),updated_map__$1):null),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')], null);
}
}
});
/**
 * Given an existing-map and a new-map, if the new-map specifies a
 *   style, apply it if it exists, looking first in the new-map for the style
 *   and then in the existing-map for the style.  Otherwise do nothing. 
 *   Return [updated-map new-doc-map error-string]
 */
zprint.config.apply_style = (function zprint$config$apply_style(var_args){
var G__29769 = arguments.length;
switch (G__29769) {
case 5:
return zprint.config.apply_style.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.apply_style.cljs$core$IFn$_invoke$arity$5 = (function (doc_string,doc_map,existing_map,new_map,styles_applied){
while(true){
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new_map,cljs.core.cst$kw$style,cljs.core.cst$kw$not_DASH_specified);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$not_DASH_specified)) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
if(cljs.core.truth_(cljs.core.some(((function (doc_string,doc_map,existing_map,new_map,styles_applied,style_name){
return (function (p1__29767_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29767_SHARP_,style_name);
});})(doc_string,doc_map,existing_map,new_map,styles_applied,style_name))
,styles_applied))){
throw (new Error(["Circular style error: style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)," has already been applied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(styles_applied)].join('')));
} else {
var vec__29770 = (((!(cljs.core.coll_QMARK_(style_name))))?zprint.config.apply_one_style(doc_string,new_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.config.apply_one_style,doc_string,new_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name));
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29770,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29770,(1),null);
var error_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29770,(2),null);
var another_style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(updated_map,cljs.core.cst$kw$style,cljs.core.cst$kw$not_DASH_specified);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(another_style_name,cljs.core.cst$kw$not_DASH_specified)) || ((another_style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_doc_map,error_string], null);
} else {
var G__29774 = doc_string;
var G__29775 = new_doc_map;
var G__29776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(updated_map,cljs.core.cst$kw$style);
var G__29777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_map,cljs.core.cst$kw$style,another_style_name);
var G__29778 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,styles_applied,(((style_name instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_name], null):style_name));
doc_string = G__29774;
doc_map = G__29775;
existing_map = G__29776;
new_map = G__29777;
styles_applied = G__29778;
continue;
}
}
}
break;
}
}));

(zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4 = (function (doc_string,doc_map,existing_map,new_map){
return zprint.config.apply_style.cljs$core$IFn$_invoke$arity$5(doc_string,doc_map,existing_map,new_map,cljs.core.PersistentVector.EMPTY);
}));

(zprint.config.apply_style.cljs$lang$maxFixedArity = 5);

/**
 * Given an existing-map and a new-map, if the new-map specifies a
 *   style, apply it if it exists, looking first in the new-map for the style
 *   and then in the existing-map for the style.  Otherwise do nothing. 
 *   Return [updated-map new-doc-map error-string]
 */
zprint.config.apply_style_alt = (function zprint$config$apply_style_alt(doc_string,doc_map,existing_map,new_map){
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new_map,cljs.core.cst$kw$style,cljs.core.cst$kw$not_DASH_specified);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,cljs.core.cst$kw$not_DASH_specified)) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
if((!(cljs.core.coll_QMARK_(style_name)))){
return zprint.config.apply_one_style(doc_string,new_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.config.apply_one_style,doc_string,new_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
}
}
});
/**
 * Read an options map from a string using sci/eval-string to read
 *   in the structure, and to create sandboxed function for any functions
 *   defined in the options-map (i.e. in the string).  Any failures
 *   from eval-string are not caught and propagate back up the call
 *   stack.
 */
zprint.config.try_to_load_string = (function zprint$config$try_to_load_string(s){
return null;
});
/**
 * Read in an options map from one file or another file. Possibly neither of
 *   them exist, which is fine if optional? is truthy. Return
 *   [options-from-file error-string full-path-of-file].  It is acceptable to
 *   not have a file if optional? is truthy, but if the file exists, then 
 *   regardless of optional?, errors are detected and reported.
 */
zprint.config.get_config_from_file = (function zprint$config$get_config_from_file(var_args){
var G__29780 = arguments.length;
switch (G__29780) {
case 2:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2 = (function (filename,optional_QMARK_){
return null;
}));

(zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(filename,null);
}));

(zprint.config.get_config_from_file.cljs$lang$maxFixedArity = 2);

/**
 * Take a vector of filenames, and look in exactly one directory for
 *   all of the filenames.  Return the [option-map error-str full-file-path]
 *   from get-config-from-file for the first one found, or nil if none found.
 */
zprint.config.get_config_from_path = (function zprint$config$get_config_from_path(filename_vec,file_sep,dir_vec){
var dirspec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(file_sep,dir_vec));
var config_vec = cljs.core.some((function (p1__29782_SHARP_){
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2(p1__29782_SHARP_,cljs.core.cst$kw$optional);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.str,dirspec,file_sep),filename_vec));
return config_vec;
});
/**
 * Take a vector of directories dir-vec and check for all of the
 *   filenames in filename-vec in the directory specified by dir-vec.
 *   When one is found, return (using reduced) the [option-map error-str
 *   full-file-path] from get-config-from-file, or nil if none are
 *   found.  Will now accept fns from any of the files since using
 *   sci/eval-string.
 */
zprint.config.get_config_from_dirs = (function zprint$config$get_config_from_dirs(filename_vec,file_sep,dir_vec,_){
var config_vec = zprint.config.get_config_from_path(filename_vec,file_sep,dir_vec);
if(cljs.core.truth_(config_vec)){
return cljs.core.reduced(config_vec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null),dir_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null),dir_vec);
}
}
});
/**
 * Take a vector of filenames and scan up the directory tree from
 *   the current directory to the root, looking for any of the files
 *   in each directory.  Look for them in the order given in the vector.
 *   Return nil or a vector from get-config-from-file: [option-map
 *   error-str full-file-path].
 */
zprint.config.scan_up_dir_tree = (function zprint$config$scan_up_dir_tree(filename_vec,file_sep){
return null;
});
/**
 * Read in an options map from a string.
 */
zprint.config.get_config_from_map = (function zprint$config$get_config_from_map(map_string){
if(cljs.core.truth_(map_string)){
try{var opts_map = sci.core.eval_string.cljs$core$IFn$_invoke$arity$1(map_string);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts_map,null], null);
}catch (e29783){var e = e29783;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to read configuration from map",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_string)," because ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * If it is a string, and it is true or false (any case), turn it
 *   into true or false, else leave it the way it is.
 */
zprint.config.strtf__GT_boolean = (function zprint$config$strtf__GT_boolean(sexpr){
if((!(typeof sexpr === 'string'))){
return sexpr;
} else {
var lc_sexpr = clojure.string.lower_case(clojure.string.trim(sexpr));
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"false")))))){
return sexpr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc_sexpr,"true")){
return true;
} else {
return false;
}
}
}
});
/**
 * Return true if a sequence starts with another sequence.
 */
zprint.config.starts_with_QMARK_ = (function zprint$config$starts_with_QMARK_(coll,seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29784_SHARP_,p2__29785_SHARP_){
var and__4115__auto__ = p1__29784_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return p2__29785_SHARP_;
} else {
return and__4115__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,coll,seq));
});
/**
 * Given a map of environment variable entries from cprop, which contain
 *   a sequence key and a keyword value, build a map to merge with the
 *   fn-map.
 */
zprint.config.build_fn_map_update = (function zprint$config$build_fn_map_update(m){
var mapseq = cljs.core.seq(m);
var fn_map_entries = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29786_SHARP_){
return zprint.config.starts_with_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zprint,cljs.core.cst$kw$fn_DASH_map], null),cljs.core.first(p1__29786_SHARP_));
}),mapseq);
var fn_map_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29787_SHARP_){
return cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__29787_SHARP_),(2)));
}),fn_map_entries);
var fn_map_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29788_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__29788_SHARP_));
}),fn_map_entries);
return cljs.core.zipmap(fn_map_keys,fn_map_vals);
});
/**
 * Given the current options map and a map of environment variables
 *   from cprop, update the fn-map as described by the environment variable
 *   map.
 */
zprint.config.update_fn_map = (function zprint$config$update_fn_map(options,env_map){
var fn_map_update = zprint.config.build_fn_map_update(env_map);
if(cljs.core.empty_QMARK_(fn_map_update)){
return options;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$fn_DASH_map,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fn_DASH_map.cljs$core$IFn$_invoke$arity$1(options),fn_map_update], 0)));
}
});
/**
 * If a particular key-path exists in an existing map, replace it
 *   with a new key-path.  The existing key-path can have a nil value.
 */
zprint.config.replace_existing = (function zprint$config$replace_existing(existing,p__29789){
var vec__29790 = p__29789;
var k_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790,(1),null);
if(((cljs.core.seq(k_path)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(existing,k_path,cljs.core.cst$kw$not_DASH_present),cljs.core.cst$kw$not_DASH_present)))){
return cljs.core.assoc_in(existing,k_path,v);
} else {
return existing;
}
});
/**
 * Takes a map with multiple levels, and merge only the value from
 *   the second map where the path of the keys already exists in the first
 *   map.  Will not add any new keys to the first map.
 */
zprint.config.merge_existing = (function zprint$config$merge_existing(existing,new$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.config.replace_existing,existing,new$);
});
/**
 * Do a single new map. Returns [updated-map new-doc-map error-vec]
 *   Depends on existing-map to be the full, current options map!
 */
zprint.config.config_and_validate = (function zprint$config$config_and_validate(doc_string,doc_map,existing_map,new_map){
if(cljs.core.truth_(new_map)){
var new_map__$1 = zprint.spec.coerce_to_boolean(new_map);
var errors = zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2(new_map__$1,doc_string);
var vec__29793 = zprint.config.perform_remove(doc_string,doc_map,existing_map,new_map__$1);
var existing_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(0),null);
var new_map__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(1),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(2),null);
var vec__29796 = zprint.config.apply_style.cljs$core$IFn$_invoke$arity$4(doc_string,new_doc_map,existing_map__$1,new_map__$2);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(1),null);
var style_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(2),null);
var new_map__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_map__$2,cljs.core.cst$kw$style);
var errors__$1 = (cljs.core.truth_(style_errors)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_errors)].join(''):errors);
var new_updated_map = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([updated_map,new_map__$3], 0));
var new_doc_map__$2 = zprint.config.diff_deep_ks(doc_string,new_doc_map__$1,zprint.config.key_seq(new_map__$3),new_updated_map);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_updated_map,new_doc_map__$2,errors__$1], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
}
});
/**
 * Take the opts and errors from the command line arguments, if any,
 *   and do the rest of the configuration and validation along the way.  
 *   op-options are options that control where to look for information.
 *   Left the config map, config file, and cli processing in place in case
 *   we go replace the uberjar capability soon.  
 *   Returns [new-map doc-map errors]
 */
zprint.config.config_and_validate_all = (function zprint$config$config_and_validate_all(cli_opts,cli_errors,op_options){
var default_map = zprint.config.get_default_options();
var default_doc_map = zprint.config.get_default_explained_all_options();
var vec__29799 = zprint.config.config_and_validate("Operational options",default_doc_map,default_map,op_options);
var op_options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(1),null);
var op_option_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(2),null);
var op_options__$2 = zprint.config.select_op_options(op_options__$1);
var home = null;
var file_separator = null;
var zprintrc_file = [home,file_separator,zprint.config.zprintrc].join('');
var vec__29802 = (cljs.core.truth_((function (){var and__4115__auto__ = home;
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})())?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [home], null)):null);
var opts_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29802,(0),null);
var errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29802,(1),null);
var rc_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29802,(2),null);
var home_config = vec__29802;
var vec__29805 = zprint.config.config_and_validate(["Home directory file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rc_filename)].join(''),default_doc_map,default_map,opts_rcfile);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(0),null);
var new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(1),null);
var rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(2),null);
var vec__29808 = (cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = cljs.core.cst$kw$search_DASH_config_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$search_DASH_config_QMARK_.cljs$core$IFn$_invoke$arity$1(op_options__$2);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})())?zprint.config.scan_up_dir_tree(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator):null);
var search_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29808,(0),null);
var search_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29808,(1),null);
var search_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29808,(2),null);
var search_config = vec__29808;
var vec__29811 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(home_config,search_config))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_rcfile,search_errors_rcfile,search_filename], null):null);
var search_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29811,(0),null);
var search_errors_rcfile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29811,(1),null);
var search_filename__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29811,(2),null);
var vec__29814 = zprint.config.config_and_validate([":search-config? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_filename__$1)].join(''),new_doc_map,updated_map,search_rcfile__$1);
var search_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(0),null);
var search_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(1),null);
var search_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(2),null);
var vec__29817 = (cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$search_DASH_config_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_map)))?(function (){var and__4115__auto__ = (function (){var or__4126__auto__ = cljs.core.cst$kw$cwd_DASH_zprintrc_QMARK_.cljs$core$IFn$_invoke$arity$1(search_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$cwd_DASH_zprintrc_QMARK_.cljs$core$IFn$_invoke$arity$1(op_options__$2);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return file_separator;
} else {
return and__4115__auto__;
}
})():false))?zprint.config.get_config_from_path(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.config.zprintrc,zprint.config.zprintedn], null),file_separator,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null)):null);
var cwd_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var cwd_errors_rcfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(1),null);
var cwd_filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(2),null);
var vec__29820 = zprint.config.config_and_validate([":cwd-zprintrc? file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cwd_filename)].join(''),search_doc_map,search_map,cwd_rcfile);
var cwd_updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(0),null);
var cwd_new_doc_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(1),null);
var cwd_rc_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(2),null);
var read_system_env_fn = null;
var env_map = (cljs.core.truth_(read_system_env_fn)?(read_system_env_fn.cljs$core$IFn$_invoke$arity$0 ? read_system_env_fn.cljs$core$IFn$_invoke$arity$0() : read_system_env_fn.call(null)):null);
var env_and_default_map = zprint.config.merge_existing(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zprint,default_map], null),env_map);
var new_env_map = zprint.config.diff_map(default_map,cljs.core.cst$kw$zprint.cljs$core$IFn$_invoke$arity$1(env_and_default_map));
var new_env_map__$1 = zprint.config.update_fn_map(new_env_map,env_map);
var new_env_map__$2 = zprint.config.map_leaves(zprint.config.strtf__GT_boolean,new_env_map__$1);
var vec__29823 = zprint.config.config_and_validate("Environment variable",cwd_new_doc_map,cwd_updated_map,new_env_map__$2);
var updated_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(0),null);
var new_doc_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(1),null);
var env_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(2),null);
var read_system_props_fn = null;
var prop_map = (cljs.core.truth_(read_system_props_fn)?(read_system_props_fn.cljs$core$IFn$_invoke$arity$0 ? read_system_props_fn.cljs$core$IFn$_invoke$arity$0() : read_system_props_fn.call(null)):null);
var prop_and_default_map = zprint.config.merge_existing(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zprint,default_map], null),prop_map);
var new_prop_map = zprint.config.diff_map(default_map,cljs.core.cst$kw$zprint.cljs$core$IFn$_invoke$arity$1(prop_and_default_map));
var new_prop_map__$1 = zprint.config.update_fn_map(new_prop_map,prop_map);
var new_prop_map__$2 = zprint.config.map_leaves(zprint.config.strtf__GT_boolean,new_prop_map__$1);
var vec__29826 = zprint.config.config_and_validate("System property",new_doc_map__$1,updated_map__$1,new_prop_map__$2);
var updated_map__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29826,(0),null);
var new_doc_map__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29826,(1),null);
var prop_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29826,(2),null);
var config_filename = null;
var vec__29829 = (cljs.core.truth_(config_filename)?zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1(config_filename):null);
var opts_configfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29829,(0),null);
var errors_configfile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29829,(1),null);
var config_filename__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29829,(2),null);
var vec__29832 = zprint.config.config_and_validate(["Config file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(config_filename__$1)].join(''),new_doc_map__$2,updated_map__$2,opts_configfile);
var updated_map__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29832,(0),null);
var new_doc_map__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29832,(1),null);
var config_file_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29832,(2),null);
var vec__29835 = zprint.config.get_config_from_map(cljs.core.cst$kw$config_DASH_map.cljs$core$IFn$_invoke$arity$1(cli_opts));
var opts_configmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835,(0),null);
var errors_configmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835,(1),null);
var vec__29838 = zprint.config.config_and_validate(["Config map:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config_DASH_map.cljs$core$IFn$_invoke$arity$1(cli_opts))].join(''),new_doc_map__$3,updated_map__$3,opts_configmap);
var updated_map__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838,(0),null);
var new_doc_map__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838,(1),null);
var config_map_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838,(2),null);
var opts_cli = cljs.core.select_keys(cli_opts,zprint.config.zprint_keys);
var vec__29841 = zprint.config.config_and_validate("CLI options",new_doc_map__$4,updated_map__$4,opts_cli);
var updated_map__$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29841,(0),null);
var new_doc_map__$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29841,(1),null);
var cli_errors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29841,(2),null);
var all_errors = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,errors_rcfile,(new cljs.core.List(null,rc_errors,(new cljs.core.List(null,cwd_errors_rcfile,(new cljs.core.List(null,cwd_rc_errors,(new cljs.core.List(null,search_errors_rcfile__$1,(new cljs.core.List(null,search_rc_errors,(new cljs.core.List(null,env_errors,(new cljs.core.List(null,prop_errors,(new cljs.core.List(null,errors_configfile,(new cljs.core.List(null,config_file_errors,(new cljs.core.List(null,config_map_errors,(new cljs.core.List(null,cli_errors__$1,(new cljs.core.List(null,op_option_errors,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null)),(12),null)),(13),null)))));
var all_errors__$1 = ((cljs.core.empty_QMARK_(all_errors))?null:all_errors);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map__$5,new_doc_map__$5,all_errors__$1], null);
});
/**
 * Take a vector of strings and concatenate them into one string with
 *   newlines between them.
 */
zprint.config.vec_str_to_str = (function zprint$config$vec_str_to_str(vec_str){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",vec_str));
});
zprint.config.help_str = zprint.config.vec_str_to_str(cljs.core.PersistentVector.fromArray([zprint.config.about(),""," The basic call uses defaults, prints to stdout","","   (zprint x)",""," All zprint functions also allow the following arguments:","","   (zprint x <width>)","   (zprint x <width> <options>)","   (zprint x <options>)",""," Format a function to stdout (accepts arguments as above)","","   (zprint-fn <fn-name>)",""," Output to a string instead of stdout:","","   (zprint-str x)","   (zprint-fn-str <fn-name>)",""," Syntax color output for an ANSI terminal:","","   (czprint x)","   (czprint-fn <fn-name>)","   (czprint-str x)","   (czprint-fn-str <fn-name>)",""," The first time you call a zprint printing function, it configures"," itself from $HOME/.zprintrc.",""," Explain current configuration, shows all possible configurable"," values as well as source of non-default values:","","   (zprint nil :explain)",""," Change current configuration from running code:","","   (set-options! <options>)",""," Format a complete file (recognizing ;!zprint directives):","","   (zprint-file infile file-name outfile <options>)",""," Format a string containing multiple \"top level\" forms, essentially"," a file contained in a string, (recognizing ;!zprint directives):","","   (zprint-file-str file-str zprint-specifier <options> <doc-str>)",""," Output information to include when submitting an issue:","","   (zprint nil :support)",""], true));
