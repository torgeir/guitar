// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.fns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.faster');
goog.require('sci.impl.macros');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(cljs.core.cst$kw$disable_DASH_arity_DASH_checks.cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

var ret__4785__auto___15009 = (function (){
sci.impl.fns.gen_fn = (function sci$impl$fns$gen_fn(var_args){
var G__15008 = arguments.length;
switch (G__15008) {
case 3:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_gen_DASH_fn,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,n,disable_arity_checks){
var locals = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,cljs.core.gensym);
var fn_params = cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,cljs.core.gensym));
var rnge = cljs.core.range.cljs$core$IFn$_invoke$arity$1(n);
var nths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_nth_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$params,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n__$1,null,(1),null))], 0))));
}),rnge);
var let_vec = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (local,ith){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local,ith], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,nths], 0)));
var assocs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (local,fn_param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_assoc_DASH_3,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,local,null,(1),null)),(new cljs.core.List(null,fn_param,null,(1),null))], 0)))),null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,fn_params], 0));
var recurs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_nth_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n__$1,null,(1),null))], 0))));
}),rnge);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,let_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arity-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fn_params,null,(1),null)),(cljs.core.truth_(disable_arity_checks)?null:cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_length,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_throw_DASH_arity,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$fn_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$macro_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vals,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_get_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assocs,(new cljs.core.List(null,cljs.core.cst$sym$ctx__15004__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_assoc_DASH_3,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__15005__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx__15004__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___15006__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_Recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$ret__15005__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___15006__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$types_SLASH_getVal,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__15005__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),recurs))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__15005__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(sci.impl.fns.gen_fn.cljs$lang$macro = true);

var ret__4785__auto___15011 = sci.impl.fns.gen_fn_varargs = (function sci$impl$fns$gen_fn_varargs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$fn,cljs.core.cst$sym$varargs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$$get,cljs.core.with_meta(cljs.core.cst$sym$ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),cljs.core.cst$kw$bindings),cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$loop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$args),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$params),cljs.core.cst$sym$ret,cljs.core.cst$sym$bindings], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$params)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_),cljs.core.cst$sym$fp),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$second,cljs.core.cst$sym$params),cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ret,cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$args_STAR_)))))),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.cst$sym$ret))),cljs.core.cst$sym$ctx,cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ctx,cljs.core.cst$kw$bindings,cljs.core.cst$sym$bindings),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$return,cljs.core.cst$sym$ctx),cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$Recur,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$recur_DASH_val,cljs.core.list(cljs.core.cst$sym$t_SLASH_getVal,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fixed_DASH_args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rest_DASH_args], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,(0),cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity),cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity)], null)], null),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$into,cljs.core.cst$sym$fixed_DASH_args,cljs.core.cst$sym$rest_DASH_args))),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.cst$sym$recur_DASH_val))),cljs.core.cst$sym$ret)));
});
(sci.impl.fns.gen_fn_varargs.cljs$lang$macro = true);

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,eval_do_STAR_,p__15014,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__15015 = p__15014;
var map__15015__$1 = (((((!((map__15015 == null))))?(((((map__15015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15015):map__15015);
var _m = map__15015__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15015__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15015__$1,cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15015__$1,cljs.core.cst$kw$sci$impl_SLASH_params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15015__$1,cljs.core.cst$kw$sci$impl_SLASH_body);
var disable_arity_checks_QMARK_ = ctx.get(cljs.core.cst$kw$disable_DASH_arity_DASH_checks);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var body_count = cljs.core.count(body);
var return$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),body_count))?(function (){var fst = cljs.core.first(body);
return (function (p1__15012_SHARP_){
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(p1__15012_SHARP_,fst) : interpret.call(null,p1__15012_SHARP_,fst));
});
})():(function (p1__15013_SHARP_){
return (eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(p1__15013_SHARP_,body) : eval_do_STAR_.call(null,p1__15013_SHARP_,body));
}));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__15017 = (fixed_arity | (0));
switch (G__15017) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx) : return$.call(null,ctx));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__15018){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15019,G__15018);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__15018 = G__15795;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15021 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__15020){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15021,G__15020);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__15020 = G__15796;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15024 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__15022,G__15023){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15024,G__15022);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15025,G__15023);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__15022 = G__15797;
G__15023 = G__15798;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__15026,G__15027){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15028,G__15026);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15029,G__15027);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__15026 = G__15799;
G__15027 = G__15800;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__15030,G__15031,G__15032){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15033,G__15030);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15034,G__15031);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15035,G__15032);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15802 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__15030 = G__15801;
G__15031 = G__15802;
G__15032 = G__15803;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__15036,G__15037,G__15038){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15039,G__15036);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15040,G__15037);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15041,G__15038);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15806 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__15036 = G__15804;
G__15037 = G__15805;
G__15038 = G__15806;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__15042,G__15043,G__15044,G__15045){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15046,G__15042);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15047,G__15043);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15048,G__15044);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15049,G__15045);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__15042 = G__15807;
G__15043 = G__15808;
G__15044 = G__15809;
G__15045 = G__15810;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__15050,G__15051,G__15052,G__15053){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15054,G__15050);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15055,G__15051);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15056,G__15052);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15057,G__15053);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__15050 = G__15811;
G__15051 = G__15812;
G__15052 = G__15813;
G__15053 = G__15814;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__15058,G__15059,G__15060,G__15061,G__15062){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15063,G__15058);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15064,G__15059);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15065,G__15060);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15066,G__15061);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15067,G__15062);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__15058 = G__15815;
G__15059 = G__15816;
G__15060 = G__15817;
G__15061 = G__15818;
G__15062 = G__15819;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__15068,G__15069,G__15070,G__15071,G__15072){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15073,G__15068);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15074,G__15069);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15075,G__15070);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15076,G__15071);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15077,G__15072);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15824 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__15068 = G__15820;
G__15069 = G__15821;
G__15070 = G__15822;
G__15071 = G__15823;
G__15072 = G__15824;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__15078,G__15079,G__15080,G__15081,G__15082,G__15083){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15084,G__15078);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15085,G__15079);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15086,G__15080);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15087,G__15081);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15088,G__15082);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15089,G__15083);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__15078 = G__15825;
G__15079 = G__15826;
G__15080 = G__15827;
G__15081 = G__15828;
G__15082 = G__15829;
G__15083 = G__15830;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__15090,G__15091,G__15092,G__15093,G__15094,G__15095){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15096,G__15090);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15097,G__15091);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15098,G__15092);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15099,G__15093);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15100,G__15094);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15101,G__15095);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__15090 = G__15831;
G__15091 = G__15832;
G__15092 = G__15833;
G__15093 = G__15834;
G__15094 = G__15835;
G__15095 = G__15836;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__15102,G__15103,G__15104,G__15105,G__15106,G__15107,G__15108){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15109,G__15102);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15110,G__15103);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15111,G__15104);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15112,G__15105);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15113,G__15106);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15114,G__15107);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15115,G__15108);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__15102 = G__15837;
G__15103 = G__15838;
G__15104 = G__15839;
G__15105 = G__15840;
G__15106 = G__15841;
G__15107 = G__15842;
G__15108 = G__15843;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15125 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15126 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15129 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__15116,G__15117,G__15118,G__15119,G__15120,G__15121,G__15122){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15123,G__15116);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15124,G__15117);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15125,G__15118);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15126,G__15119);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15127,G__15120);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15128,G__15121);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15129,G__15122);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15844 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15846 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__15116 = G__15844;
G__15117 = G__15845;
G__15118 = G__15846;
G__15119 = G__15847;
G__15120 = G__15848;
G__15121 = G__15849;
G__15122 = G__15850;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__15130,G__15131,G__15132,G__15133,G__15134,G__15135,G__15136,G__15137){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15138,G__15130);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15139,G__15131);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15140,G__15132);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15141,G__15133);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15142,G__15134);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15143,G__15135);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15144,G__15136);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15145,G__15137);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__15130 = G__15851;
G__15131 = G__15852;
G__15132 = G__15853;
G__15133 = G__15854;
G__15134 = G__15855;
G__15135 = G__15856;
G__15136 = G__15857;
G__15137 = G__15858;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15158 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__15146,G__15147,G__15148,G__15149,G__15150,G__15151,G__15152,G__15153){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15154,G__15146);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15155,G__15147);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15156,G__15148);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15157,G__15149);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15158,G__15150);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15159,G__15151);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15160,G__15152);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15161,G__15153);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__15146 = G__15859;
G__15147 = G__15860;
G__15148 = G__15861;
G__15149 = G__15862;
G__15150 = G__15863;
G__15151 = G__15864;
G__15152 = G__15865;
G__15153 = G__15866;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__15162,G__15163,G__15164,G__15165,G__15166,G__15167,G__15168,G__15169,G__15170){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15171,G__15162);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15172,G__15163);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15173,G__15164);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15174,G__15165);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15175,G__15166);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15176,G__15167);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15177,G__15168);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15178,G__15169);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15179,G__15170);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__15162 = G__15867;
G__15163 = G__15868;
G__15164 = G__15869;
G__15165 = G__15870;
G__15166 = G__15871;
G__15167 = G__15872;
G__15168 = G__15873;
G__15169 = G__15874;
G__15170 = G__15875;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15193 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15197 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__15180,G__15181,G__15182,G__15183,G__15184,G__15185,G__15186,G__15187,G__15188){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15189,G__15180);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15190,G__15181);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15191,G__15182);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15192,G__15183);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15193,G__15184);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15194,G__15185);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15195,G__15186);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15196,G__15187);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15197,G__15188);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__15180 = G__15876;
G__15181 = G__15877;
G__15182 = G__15878;
G__15183 = G__15879;
G__15184 = G__15880;
G__15185 = G__15881;
G__15186 = G__15882;
G__15187 = G__15883;
G__15188 = G__15884;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15210 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__15198,G__15199,G__15200,G__15201,G__15202,G__15203,G__15204,G__15205,G__15206,G__15207){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15208,G__15198);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15209,G__15199);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15210,G__15200);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15211,G__15201);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15212,G__15202);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15213,G__15203);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15214,G__15204);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15215,G__15205);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15216,G__15206);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15217,G__15207);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__15198 = G__15885;
G__15199 = G__15886;
G__15200 = G__15887;
G__15201 = G__15888;
G__15202 = G__15889;
G__15203 = G__15890;
G__15204 = G__15891;
G__15205 = G__15892;
G__15206 = G__15893;
G__15207 = G__15894;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15229 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__15218,G__15219,G__15220,G__15221,G__15222,G__15223,G__15224,G__15225,G__15226,G__15227){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15228,G__15218);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15229,G__15219);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15230,G__15220);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15231,G__15221);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15232,G__15222);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15233,G__15223);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15234,G__15224);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15235,G__15225);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15236,G__15226);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15237,G__15227);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__15218 = G__15895;
G__15219 = G__15896;
G__15220 = G__15897;
G__15221 = G__15898;
G__15222 = G__15899;
G__15223 = G__15900;
G__15224 = G__15901;
G__15225 = G__15902;
G__15226 = G__15903;
G__15227 = G__15904;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15257 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__15238,G__15239,G__15240,G__15241,G__15242,G__15243,G__15244,G__15245,G__15246,G__15247,G__15248){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15249,G__15238);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15250,G__15239);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15251,G__15240);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15252,G__15241);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15253,G__15242);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15254,G__15243);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15255,G__15244);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15256,G__15245);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15257,G__15246);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15258,G__15247);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15259,G__15248);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__15238 = G__15905;
G__15239 = G__15906;
G__15240 = G__15907;
G__15241 = G__15908;
G__15242 = G__15909;
G__15243 = G__15910;
G__15244 = G__15911;
G__15245 = G__15912;
G__15246 = G__15913;
G__15247 = G__15914;
G__15248 = G__15915;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15279 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15280 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__15260,G__15261,G__15262,G__15263,G__15264,G__15265,G__15266,G__15267,G__15268,G__15269,G__15270){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15271,G__15260);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15272,G__15261);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15273,G__15262);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15274,G__15263);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15275,G__15264);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15276,G__15265);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15277,G__15266);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15278,G__15267);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15279,G__15268);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15280,G__15269);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15281,G__15270);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__15260 = G__15916;
G__15261 = G__15917;
G__15262 = G__15918;
G__15263 = G__15919;
G__15264 = G__15920;
G__15265 = G__15921;
G__15266 = G__15922;
G__15267 = G__15923;
G__15268 = G__15924;
G__15269 = G__15925;
G__15270 = G__15926;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15297 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15298 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__15282,G__15283,G__15284,G__15285,G__15286,G__15287,G__15288,G__15289,G__15290,G__15291,G__15292,G__15293){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15294,G__15282);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15295,G__15283);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15296,G__15284);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15297,G__15285);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15298,G__15286);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15299,G__15287);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15300,G__15288);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15301,G__15289);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15302,G__15290);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15303,G__15291);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15304,G__15292);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15305,G__15293);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__15938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__15282 = G__15927;
G__15283 = G__15928;
G__15284 = G__15929;
G__15285 = G__15930;
G__15286 = G__15931;
G__15287 = G__15932;
G__15288 = G__15933;
G__15289 = G__15934;
G__15290 = G__15935;
G__15291 = G__15936;
G__15292 = G__15937;
G__15293 = G__15938;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15323 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15326 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__15306,G__15307,G__15308,G__15309,G__15310,G__15311,G__15312,G__15313,G__15314,G__15315,G__15316,G__15317){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15318,G__15306);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15319,G__15307);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15320,G__15308);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15321,G__15309);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15322,G__15310);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15323,G__15311);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15324,G__15312);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15325,G__15313);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15326,G__15314);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15327,G__15315);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15328,G__15316);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15329,G__15317);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15942 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__15950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__15306 = G__15939;
G__15307 = G__15940;
G__15308 = G__15941;
G__15309 = G__15942;
G__15310 = G__15943;
G__15311 = G__15944;
G__15312 = G__15945;
G__15313 = G__15946;
G__15314 = G__15947;
G__15315 = G__15948;
G__15316 = G__15949;
G__15317 = G__15950;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15346 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__15330,G__15331,G__15332,G__15333,G__15334,G__15335,G__15336,G__15337,G__15338,G__15339,G__15340,G__15341,G__15342){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15343,G__15330);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15344,G__15331);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15345,G__15332);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15346,G__15333);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15347,G__15334);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15348,G__15335);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15349,G__15336);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15350,G__15337);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15351,G__15338);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15352,G__15339);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15353,G__15340);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15354,G__15341);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15355,G__15342);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__15962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__15963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__15330 = G__15951;
G__15331 = G__15952;
G__15332 = G__15953;
G__15333 = G__15954;
G__15334 = G__15955;
G__15335 = G__15956;
G__15336 = G__15957;
G__15337 = G__15958;
G__15338 = G__15959;
G__15339 = G__15960;
G__15340 = G__15961;
G__15341 = G__15962;
G__15342 = G__15963;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15373 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__15356,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363,G__15364,G__15365,G__15366,G__15367,G__15368){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15369,G__15356);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15370,G__15357);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15371,G__15358);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15372,G__15359);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15373,G__15360);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15374,G__15361);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15375,G__15362);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15376,G__15363);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15377,G__15364);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15378,G__15365);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15379,G__15366);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15380,G__15367);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15381,G__15368);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15968 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15973 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__15975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__15976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__15356 = G__15964;
G__15357 = G__15965;
G__15358 = G__15966;
G__15359 = G__15967;
G__15360 = G__15968;
G__15361 = G__15969;
G__15362 = G__15970;
G__15363 = G__15971;
G__15364 = G__15972;
G__15365 = G__15973;
G__15366 = G__15974;
G__15367 = G__15975;
G__15368 = G__15976;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15407 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15410 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__15382,G__15383,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392,G__15393,G__15394,G__15395,G__15396){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15397,G__15382);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15398,G__15383);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15399,G__15384);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15400,G__15385);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15401,G__15386);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15402,G__15387);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15403,G__15388);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15404,G__15389);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15405,G__15390);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15406,G__15391);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15407,G__15392);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15408,G__15393);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15409,G__15394);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15410,G__15395);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15411,G__15396);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__15985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__15986 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__15987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__15988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__15989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__15990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__15991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__15382 = G__15977;
G__15383 = G__15978;
G__15384 = G__15979;
G__15385 = G__15980;
G__15386 = G__15981;
G__15387 = G__15982;
G__15388 = G__15983;
G__15389 = G__15984;
G__15390 = G__15985;
G__15391 = G__15986;
G__15392 = G__15987;
G__15393 = G__15988;
G__15394 = G__15989;
G__15395 = G__15990;
G__15396 = G__15991;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15437 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15441 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__15412,G__15413,G__15414,G__15415,G__15416,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15427,G__15412);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15428,G__15413);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15429,G__15414);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15430,G__15415);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15431,G__15416);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15432,G__15417);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15433,G__15418);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15434,G__15419);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15435,G__15420);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15436,G__15421);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15437,G__15422);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15438,G__15423);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15439,G__15424);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15440,G__15425);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15441,G__15426);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__15992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__15993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__15994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__15995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__15996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__15997 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__15998 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__15999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__15412 = G__15992;
G__15413 = G__15993;
G__15414 = G__15994;
G__15415 = G__15995;
G__15416 = G__15996;
G__15417 = G__15997;
G__15418 = G__15998;
G__15419 = G__15999;
G__15420 = G__16000;
G__15421 = G__16001;
G__15422 = G__16002;
G__15423 = G__16003;
G__15424 = G__16004;
G__15425 = G__16005;
G__15426 = G__16006;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15458 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15459 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15460 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15463 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451,G__15452,G__15453,G__15454,G__15455,G__15456){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15457,G__15442);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15458,G__15443);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15459,G__15444);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15460,G__15445);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15461,G__15446);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15462,G__15447);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15463,G__15448);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15464,G__15449);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15465,G__15450);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15466,G__15451);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15467,G__15452);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15468,G__15453);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15469,G__15454);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15470,G__15455);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15471,G__15456);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16021 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__15442 = G__16007;
G__15443 = G__16008;
G__15444 = G__16009;
G__15445 = G__16010;
G__15446 = G__16011;
G__15447 = G__16012;
G__15448 = G__16013;
G__15449 = G__16014;
G__15450 = G__16015;
G__15451 = G__16016;
G__15452 = G__16017;
G__15453 = G__16018;
G__15454 = G__16019;
G__15455 = G__16020;
G__15456 = G__16021;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15487 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15499 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__15472,G__15473,G__15474,G__15475,G__15476,G__15477,G__15478,G__15479,G__15480,G__15481,G__15482,G__15483,G__15484,G__15485,G__15486){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15487,G__15472);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15488,G__15473);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15489,G__15474);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15490,G__15475);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15491,G__15476);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15492,G__15477);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15493,G__15478);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15494,G__15479);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15495,G__15480);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15496,G__15481);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15497,G__15482);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15498,G__15483);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15499,G__15484);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15500,G__15485);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15501,G__15486);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16024 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__15472 = G__16022;
G__15473 = G__16023;
G__15474 = G__16024;
G__15475 = G__16025;
G__15476 = G__16026;
G__15477 = G__16027;
G__15478 = G__16028;
G__15479 = G__16029;
G__15480 = G__16030;
G__15481 = G__16031;
G__15482 = G__16032;
G__15483 = G__16033;
G__15484 = G__16034;
G__15485 = G__16035;
G__15486 = G__16036;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15527 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15531 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__15502,G__15503,G__15504,G__15505,G__15506,G__15507,G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15518,G__15502);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15519,G__15503);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15520,G__15504);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15521,G__15505);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15522,G__15506);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15523,G__15507);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15524,G__15508);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15525,G__15509);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15526,G__15510);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15527,G__15511);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15528,G__15512);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15529,G__15513);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15530,G__15514);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15531,G__15515);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15532,G__15516);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15533,G__15517);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16051 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__15502 = G__16037;
G__15503 = G__16038;
G__15504 = G__16039;
G__15505 = G__16040;
G__15506 = G__16041;
G__15507 = G__16042;
G__15508 = G__16043;
G__15509 = G__16044;
G__15510 = G__16045;
G__15511 = G__16046;
G__15512 = G__16047;
G__15513 = G__16048;
G__15514 = G__16049;
G__15515 = G__16050;
G__15516 = G__16051;
G__15517 = G__16052;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15550 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15553 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__15534,G__15535,G__15536,G__15537,G__15538,G__15539,G__15540,G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15550,G__15534);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15551,G__15535);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15552,G__15536);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15553,G__15537);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15554,G__15538);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15555,G__15539);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15556,G__15540);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15557,G__15541);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15558,G__15542);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15559,G__15543);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15560,G__15544);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15561,G__15545);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15562,G__15546);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15563,G__15547);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15564,G__15548);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15565,G__15549);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__15534 = G__16053;
G__15535 = G__16054;
G__15536 = G__16055;
G__15537 = G__16056;
G__15538 = G__16057;
G__15539 = G__16058;
G__15540 = G__16059;
G__15541 = G__16060;
G__15542 = G__16061;
G__15543 = G__16062;
G__15544 = G__16063;
G__15545 = G__16064;
G__15546 = G__16065;
G__15547 = G__16066;
G__15548 = G__16067;
G__15549 = G__16068;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__15566,G__15567,G__15568,G__15569,G__15570,G__15571,G__15572,G__15573,G__15574,G__15575,G__15576,G__15577,G__15578,G__15579,G__15580,G__15581,G__15582){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15583,G__15566);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15584,G__15567);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15585,G__15568);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15586,G__15569);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15587,G__15570);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15588,G__15571);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15589,G__15572);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15590,G__15573);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15591,G__15574);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15592,G__15575);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15593,G__15576);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15594,G__15577);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15595,G__15578);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15596,G__15579);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15597,G__15580);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15598,G__15581);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15599,G__15582);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16072 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__15566 = G__16069;
G__15567 = G__16070;
G__15568 = G__16071;
G__15569 = G__16072;
G__15570 = G__16073;
G__15571 = G__16074;
G__15572 = G__16075;
G__15573 = G__16076;
G__15574 = G__16077;
G__15575 = G__16078;
G__15576 = G__16079;
G__15577 = G__16080;
G__15578 = G__16081;
G__15579 = G__16082;
G__15580 = G__16083;
G__15581 = G__16084;
G__15582 = G__16085;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15618 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__15600,G__15601,G__15602,G__15603,G__15604,G__15605,G__15606,G__15607,G__15608,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614,G__15615,G__15616){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15617,G__15600);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15618,G__15601);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15619,G__15602);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15620,G__15603);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15621,G__15604);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15622,G__15605);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15623,G__15606);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15624,G__15607);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15625,G__15608);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15626,G__15609);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15627,G__15610);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15628,G__15611);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15629,G__15612);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15630,G__15613);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15631,G__15614);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15632,G__15615);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15633,G__15616);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16102 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__15600 = G__16086;
G__15601 = G__16087;
G__15602 = G__16088;
G__15603 = G__16089;
G__15604 = G__16090;
G__15605 = G__16091;
G__15606 = G__16092;
G__15607 = G__16093;
G__15608 = G__16094;
G__15609 = G__16095;
G__15610 = G__16096;
G__15611 = G__16097;
G__15612 = G__16098;
G__15613 = G__16099;
G__15614 = G__16100;
G__15615 = G__16101;
G__15616 = G__16102;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15652 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15655 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15658 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15665 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__15669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643,G__15644,G__15645,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15652,G__15634);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15653,G__15635);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15654,G__15636);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15655,G__15637);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15656,G__15638);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15657,G__15639);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15658,G__15640);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15659,G__15641);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15660,G__15642);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15661,G__15643);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15662,G__15644);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15663,G__15645);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15664,G__15646);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15665,G__15647);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15666,G__15648);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15667,G__15649);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15668,G__15650);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__15669,G__15651);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16106 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__16120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__15634 = G__16103;
G__15635 = G__16104;
G__15636 = G__16105;
G__15637 = G__16106;
G__15638 = G__16107;
G__15639 = G__16108;
G__15640 = G__16109;
G__15641 = G__16110;
G__15642 = G__16111;
G__15643 = G__16112;
G__15644 = G__16113;
G__15645 = G__16114;
G__15646 = G__16115;
G__15647 = G__16116;
G__15648 = G__16117;
G__15649 = G__16118;
G__15650 = G__16119;
G__15651 = G__16120;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__15705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682,G__15683,G__15684,G__15685,G__15686,G__15687){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15688,G__15670);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15689,G__15671);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15690,G__15672);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15691,G__15673);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15692,G__15674);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15693,G__15675);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15694,G__15676);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15695,G__15677);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15696,G__15678);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15697,G__15679);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15698,G__15680);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15699,G__15681);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15700,G__15682);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15701,G__15683);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15702,G__15684);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15703,G__15685);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15704,G__15686);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__15705,G__15687);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16125 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16126 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16129 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16130 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__16138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__15670 = G__16121;
G__15671 = G__16122;
G__15672 = G__16123;
G__15673 = G__16124;
G__15674 = G__16125;
G__15675 = G__16126;
G__15676 = G__16127;
G__15677 = G__16128;
G__15678 = G__16129;
G__15679 = G__16130;
G__15680 = G__16131;
G__15681 = G__16132;
G__15682 = G__16133;
G__15683 = G__16134;
G__15684 = G__16135;
G__15685 = G__16136;
G__15686 = G__16137;
G__15687 = G__16138;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__15725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15737 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__15742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__15743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__15706,G__15707,G__15708,G__15709,G__15710,G__15711,G__15712,G__15713,G__15714,G__15715,G__15716,G__15717,G__15718,G__15719,G__15720,G__15721,G__15722,G__15723,G__15724){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15725,G__15706);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15726,G__15707);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15727,G__15708);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15728,G__15709);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15729,G__15710);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15730,G__15711);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15731,G__15712);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15732,G__15713);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15733,G__15714);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15734,G__15715);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15735,G__15716);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15736,G__15717);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15737,G__15718);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15738,G__15719);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15739,G__15720);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15740,G__15721);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15741,G__15722);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__15742,G__15723);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__15743,G__15724);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16146 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16153 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__16156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__16157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__15706 = G__16139;
G__15707 = G__16140;
G__15708 = G__16141;
G__15709 = G__16142;
G__15710 = G__16143;
G__15711 = G__16144;
G__15712 = G__16145;
G__15713 = G__16146;
G__15714 = G__16147;
G__15715 = G__16148;
G__15716 = G__16149;
G__15717 = G__16150;
G__15718 = G__16151;
G__15719 = G__16152;
G__15720 = G__16153;
G__15721 = G__16154;
G__15722 = G__16155;
G__15723 = G__16156;
G__15724 = G__16157;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
} else {
var G__15763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__15764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__15765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__15766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__15767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__15768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__15769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__15770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__15771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__15772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__15773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__15774 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__15775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__15776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__15777 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__15778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__15779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__15780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__15781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__15744,G__15745,G__15746,G__15747,G__15748,G__15749,G__15750,G__15751,G__15752,G__15753,G__15754,G__15755,G__15756,G__15757,G__15758,G__15759,G__15760,G__15761,G__15762){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__15763,G__15744);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__15764,G__15745);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__15765,G__15746);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__15766,G__15747);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__15767,G__15748);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__15768,G__15749);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__15769,G__15750);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__15770,G__15751);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__15771,G__15752);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__15772,G__15753);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__15773,G__15754);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__15774,G__15755);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__15775,G__15756);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__15776,G__15757);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__15777,G__15758);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__15778,G__15759);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__15779,G__15760);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__15780,G__15761);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__15781,G__15762);
var ctx__14474__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__14475__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__14474__auto__) : return$.call(null,ctx__14474__auto__));
var recur_QMARK___14476__auto__ = (ret__14475__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___14476__auto__){
var recur_val = sci.impl.types.getVal(ret__14475__auto__);
var G__16158 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__16159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__16160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__16161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__16162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__16163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__16164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__16165 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__16166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__16167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__16168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__16169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__16170 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__16171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__16172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__16173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__16174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__16175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__16176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__15744 = G__16158;
G__15745 = G__16159;
G__15746 = G__16160;
G__15747 = G__16161;
G__15748 = G__16162;
G__15749 = G__16163;
G__15750 = G__16164;
G__15751 = G__16165;
G__15752 = G__16166;
G__15753 = G__16167;
G__15754 = G__16168;
G__15755 = G__16169;
G__15756 = G__16170;
G__15757 = G__16171;
G__15758 = G__16172;
G__15759 = G__16173;
G__15760 = G__16174;
G__15761 = G__16175;
G__15762 = G__16176;
continue;
} else {
return ret__14475__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__16177 = cljs.core.next(args_STAR_);
var G__16178 = cljs.core.next(params__$1);
var G__16179 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__16177;
params__$1 = G__16178;
ret = G__16179;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__$1) : return$.call(null,ctx__$1));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__15782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15782,(0),null);
var vec__15785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15782,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15785,(0),null);
var G__16180 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__16180;
continue;
} else {
var G__16181 = recur_val;
args = G__16181;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16182__i = 0, G__16182__a = new Array(arguments.length -  0);
while (G__16182__i < G__16182__a.length) {G__16182__a[G__16182__i] = arguments[G__16182__i + 0]; ++G__16182__i;}
  args = new cljs.core.IndexedSeq(G__16182__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__16183){
var args = cljs.core.seq(arglist__16183);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__16184 = cljs.core.next(args_STAR_);
var G__16185 = cljs.core.next(params__$1);
var G__16186 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__16184;
params__$1 = G__16185;
ret = G__16186;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__$1) : return$.call(null,ctx__$1));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__15788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15788,(0),null);
var vec__15791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15788,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15791,(0),null);
var G__16187 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__16187;
continue;
} else {
var G__16188 = recur_val;
args = G__16188;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16189__i = 0, G__16189__a = new Array(arguments.length -  0);
while (G__16189__i < G__16189__a.length) {G__16189__a[G__16189__i] = arguments[G__16189__i + 0]; ++G__16189__i;}
  args = new cljs.core.IndexedSeq(G__16189__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__16190){
var args = cljs.core.seq(arglist__16190);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_min_DASH_var_DASH_args_DASH_arity,min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity,fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__16191 = cljs.core.meta(f);
var map__16191__$1 = (((((!((map__16191 == null))))?(((((map__16191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16191):map__16191);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$sci$impl_SLASH_min_DASH_var_DASH_args_DASH_arity);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4115__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4115__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__16195){
var map__16196 = p__16195;
var map__16196__$1 = (((((!((map__16196 == null))))?(((((map__16196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16196):map__16196);
var f = map__16196__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,cljs.core.cst$kw$sci$impl_SLASH_var);
var macro_QMARK_ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16198__i = 0, G__16198__a = new Array(arguments.length -  0);
while (G__16198__i < G__16198__a.length) {G__16198__a[G__16198__i] = arguments[G__16198__i + 0]; ++G__16198__i;}
  args = new cljs.core.IndexedSeq(G__16198__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__16199){
var args = cljs.core.seq(arglist__16199);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16193_SHARP_){
return sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,p1__16193_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__16200__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5718__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5718__auto__)){
var f__$1 = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__16200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16201__i = 0, G__16201__a = new Array(arguments.length -  0);
while (G__16201__i < G__16201__a.length) {G__16201__a[G__16201__i] = arguments[G__16201__i + 0]; ++G__16201__i;}
  args = new cljs.core.IndexedSeq(G__16201__a,0,null);
} 
return G__16200__delegate.call(this,args);};
G__16200.cljs$lang$maxFixedArity = 0;
G__16200.cljs$lang$applyTo = (function (arglist__16202){
var args = cljs.core.seq(arglist__16202);
return G__16200__delegate(args);
});
G__16200.cljs$core$IFn$_invoke$arity$variadic = G__16200__delegate;
return G__16200;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__16194_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16194_SHARP_,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);
