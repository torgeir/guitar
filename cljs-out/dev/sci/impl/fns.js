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

var ret__4785__auto___24665 = (function (){
sci.impl.fns.gen_fn = (function sci$impl$fns$gen_fn(var_args){
var G__24664 = arguments.length;
switch (G__24664) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,let_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arity-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fn_params,null,(1),null)),(cljs.core.truth_(disable_arity_checks)?null:cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_length,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_throw_DASH_arity,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$fn_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$macro_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vals,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_get_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assocs,(new cljs.core.List(null,cljs.core.cst$sym$ctx__24660__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_assoc_DASH_3,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24661__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx__24660__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___24662__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_Recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$ret__24661__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___24662__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$types_SLASH_getVal,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24661__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),recurs))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24661__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(sci.impl.fns.gen_fn.cljs$lang$macro = true);

var ret__4785__auto___24667 = sci.impl.fns.gen_fn_varargs = (function sci$impl$fns$gen_fn_varargs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$fn,cljs.core.cst$sym$varargs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$$get,cljs.core.with_meta(cljs.core.cst$sym$ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),cljs.core.cst$kw$bindings),cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$loop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$args),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$params),cljs.core.cst$sym$ret,cljs.core.cst$sym$bindings], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$params)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_),cljs.core.cst$sym$fp),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$second,cljs.core.cst$sym$params),cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ret,cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$args_STAR_)))))),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.cst$sym$ret))),cljs.core.cst$sym$ctx,cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ctx,cljs.core.cst$kw$bindings,cljs.core.cst$sym$bindings),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$return,cljs.core.cst$sym$ctx),cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$Recur,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$recur_DASH_val,cljs.core.list(cljs.core.cst$sym$t_SLASH_getVal,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fixed_DASH_args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rest_DASH_args], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,(0),cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity),cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity)], null)], null),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$into,cljs.core.cst$sym$fixed_DASH_args,cljs.core.cst$sym$rest_DASH_args))),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.cst$sym$recur_DASH_val))),cljs.core.cst$sym$ret)));
});
(sci.impl.fns.gen_fn_varargs.cljs$lang$macro = true);

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,eval_do_STAR_,p__24670,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__24671 = p__24670;
var map__24671__$1 = (((((!((map__24671 == null))))?(((((map__24671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24671):map__24671);
var _m = map__24671__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$sci$impl_SLASH_params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$sci$impl_SLASH_body);
var disable_arity_checks_QMARK_ = ctx.get(cljs.core.cst$kw$disable_DASH_arity_DASH_checks);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var body_count = cljs.core.count(body);
var return$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),body_count))?(function (){var fst = cljs.core.first(body);
return (function (p1__24668_SHARP_){
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(p1__24668_SHARP_,fst) : interpret.call(null,p1__24668_SHARP_,fst));
});
})():(function (p1__24669_SHARP_){
return (eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(p1__24669_SHARP_,body) : eval_do_STAR_.call(null,p1__24669_SHARP_,body));
}));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__24673 = (fixed_arity | (0));
switch (G__24673) {
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
var G__24675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__24674){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24675,G__24674);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__24674 = G__25451;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__24676){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24677,G__24676);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25452 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__24676 = G__25452;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__24678,G__24679){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24680,G__24678);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24681,G__24679);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25454 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__24678 = G__25453;
G__24679 = G__25454;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__24682,G__24683){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24684,G__24682);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24685,G__24683);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__24682 = G__25455;
G__24683 = G__25456;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__24686,G__24687,G__24688){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24689,G__24686);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24690,G__24687);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24691,G__24688);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25458 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25459 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__24686 = G__25457;
G__24687 = G__25458;
G__24688 = G__25459;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__24692,G__24693,G__24694){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24695,G__24692);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24696,G__24693);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24697,G__24694);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25460 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__24692 = G__25460;
G__24693 = G__25461;
G__24694 = G__25462;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__24698,G__24699,G__24700,G__24701){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24702,G__24698);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24703,G__24699);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24704,G__24700);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24705,G__24701);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25463 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__24698 = G__25463;
G__24699 = G__25464;
G__24700 = G__25465;
G__24701 = G__25466;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__24706,G__24707,G__24708,G__24709){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24710,G__24706);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24711,G__24707);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24712,G__24708);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24713,G__24709);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__24706 = G__25467;
G__24707 = G__25468;
G__24708 = G__25469;
G__24709 = G__25470;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__24714,G__24715,G__24716,G__24717,G__24718){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24719,G__24714);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24720,G__24715);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24721,G__24716);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24722,G__24717);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24723,G__24718);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25474 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__24714 = G__25471;
G__24715 = G__25472;
G__24716 = G__25473;
G__24717 = G__25474;
G__24718 = G__25475;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__24724,G__24725,G__24726,G__24727,G__24728){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24729,G__24724);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24730,G__24725);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24731,G__24726);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24732,G__24727);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24733,G__24728);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25477 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25478 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25479 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__24724 = G__25476;
G__24725 = G__25477;
G__24726 = G__25478;
G__24727 = G__25479;
G__24728 = G__25480;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__24734,G__24735,G__24736,G__24737,G__24738,G__24739){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24740,G__24734);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24741,G__24735);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24742,G__24736);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24743,G__24737);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24744,G__24738);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24745,G__24739);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25481 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25482 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25485 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__24734 = G__25481;
G__24735 = G__25482;
G__24736 = G__25483;
G__24737 = G__25484;
G__24738 = G__25485;
G__24739 = G__25486;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24752 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__24746,G__24747,G__24748,G__24749,G__24750,G__24751){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24752,G__24746);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24753,G__24747);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24754,G__24748);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24755,G__24749);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24756,G__24750);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24757,G__24751);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25487 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__24746 = G__25487;
G__24747 = G__25488;
G__24748 = G__25489;
G__24749 = G__25490;
G__24750 = G__25491;
G__24751 = G__25492;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__24758,G__24759,G__24760,G__24761,G__24762,G__24763,G__24764){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24765,G__24758);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24766,G__24759);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24767,G__24760);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24768,G__24761);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24769,G__24762);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24770,G__24763);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24771,G__24764);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25499 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__24758 = G__25493;
G__24759 = G__25494;
G__24760 = G__25495;
G__24761 = G__25496;
G__24762 = G__25497;
G__24763 = G__25498;
G__24764 = G__25499;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__24772,G__24773,G__24774,G__24775,G__24776,G__24777,G__24778){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24779,G__24772);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24780,G__24773);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24781,G__24774);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24782,G__24775);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24783,G__24776);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24784,G__24777);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24785,G__24778);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25505 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25506 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__24772 = G__25500;
G__24773 = G__25501;
G__24774 = G__25502;
G__24775 = G__25503;
G__24776 = G__25504;
G__24777 = G__25505;
G__24778 = G__25506;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__24786,G__24787,G__24788,G__24789,G__24790,G__24791,G__24792,G__24793){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24794,G__24786);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24795,G__24787);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24796,G__24788);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24797,G__24789);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24798,G__24790);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24799,G__24791);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24800,G__24792);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24801,G__24793);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25508 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25510 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25513 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__24786 = G__25507;
G__24787 = G__25508;
G__24788 = G__25509;
G__24789 = G__25510;
G__24790 = G__25511;
G__24791 = G__25512;
G__24792 = G__25513;
G__24793 = G__25514;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__24802,G__24803,G__24804,G__24805,G__24806,G__24807,G__24808,G__24809){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24810,G__24802);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24811,G__24803);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24812,G__24804);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24813,G__24805);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24814,G__24806);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24815,G__24807);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24816,G__24808);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24817,G__24809);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__24802 = G__25515;
G__24803 = G__25516;
G__24804 = G__25517;
G__24805 = G__25518;
G__24806 = G__25519;
G__24807 = G__25520;
G__24808 = G__25521;
G__24809 = G__25522;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__24818,G__24819,G__24820,G__24821,G__24822,G__24823,G__24824,G__24825,G__24826){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24827,G__24818);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24828,G__24819);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24829,G__24820);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24830,G__24821);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24831,G__24822);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24832,G__24823);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24833,G__24824);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24834,G__24825);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24835,G__24826);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25527 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25531 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__24818 = G__25523;
G__24819 = G__25524;
G__24820 = G__25525;
G__24821 = G__25526;
G__24822 = G__25527;
G__24823 = G__25528;
G__24824 = G__25529;
G__24825 = G__25530;
G__24826 = G__25531;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24846 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__24836,G__24837,G__24838,G__24839,G__24840,G__24841,G__24842,G__24843,G__24844){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24845,G__24836);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24846,G__24837);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24847,G__24838);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24848,G__24839);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24849,G__24840);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24850,G__24841);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24851,G__24842);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24852,G__24843);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24853,G__24844);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25538 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25539 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__24836 = G__25532;
G__24837 = G__25533;
G__24838 = G__25534;
G__24839 = G__25535;
G__24840 = G__25536;
G__24841 = G__25537;
G__24842 = G__25538;
G__24843 = G__25539;
G__24844 = G__25540;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__24854,G__24855,G__24856,G__24857,G__24858,G__24859,G__24860,G__24861,G__24862,G__24863){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24864,G__24854);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24865,G__24855);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24866,G__24856);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24867,G__24857);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24868,G__24858);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24869,G__24859);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24870,G__24860);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24871,G__24861);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24872,G__24862);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24873,G__24863);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25543 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25549 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25550 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__24854 = G__25541;
G__24855 = G__25542;
G__24856 = G__25543;
G__24857 = G__25544;
G__24858 = G__25545;
G__24859 = G__25546;
G__24860 = G__25547;
G__24861 = G__25548;
G__24862 = G__25549;
G__24863 = G__25550;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__24874,G__24875,G__24876,G__24877,G__24878,G__24879,G__24880,G__24881,G__24882,G__24883){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24884,G__24874);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24885,G__24875);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24886,G__24876);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24887,G__24877);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24888,G__24878);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24889,G__24879);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24890,G__24880);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24891,G__24881);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24892,G__24882);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24893,G__24883);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25553 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__24874 = G__25551;
G__24875 = G__25552;
G__24876 = G__25553;
G__24877 = G__25554;
G__24878 = G__25555;
G__24879 = G__25556;
G__24880 = G__25557;
G__24881 = G__25558;
G__24882 = G__25559;
G__24883 = G__25560;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__24915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__24894,G__24895,G__24896,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24905,G__24894);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24906,G__24895);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24907,G__24896);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24908,G__24897);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24909,G__24898);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24910,G__24899);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24911,G__24900);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24912,G__24901);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24913,G__24902);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24914,G__24903);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__24915,G__24904);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25567 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25568 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25569 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25571 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__24894 = G__25561;
G__24895 = G__25562;
G__24896 = G__25563;
G__24897 = G__25564;
G__24898 = G__25565;
G__24899 = G__25566;
G__24900 = G__25567;
G__24901 = G__25568;
G__24902 = G__25569;
G__24903 = G__25570;
G__24904 = G__25571;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__24937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__24916,G__24917,G__24918,G__24919,G__24920,G__24921,G__24922,G__24923,G__24924,G__24925,G__24926){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24927,G__24916);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24928,G__24917);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24929,G__24918);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24930,G__24919);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24931,G__24920);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24932,G__24921);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24933,G__24922);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24934,G__24923);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24935,G__24924);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24936,G__24925);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__24937,G__24926);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25572 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25573 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25574 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25575 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25576 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25577 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25581 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__24916 = G__25572;
G__24917 = G__25573;
G__24918 = G__25574;
G__24919 = G__25575;
G__24920 = G__25576;
G__24921 = G__25577;
G__24922 = G__25578;
G__24923 = G__25579;
G__24924 = G__25580;
G__24925 = G__25581;
G__24926 = G__25582;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__24960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__24961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__24938,G__24939,G__24940,G__24941,G__24942,G__24943,G__24944,G__24945,G__24946,G__24947,G__24948,G__24949){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24950,G__24938);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24951,G__24939);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24952,G__24940);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24953,G__24941);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24954,G__24942);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24955,G__24943);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24956,G__24944);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24957,G__24945);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24958,G__24946);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24959,G__24947);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__24960,G__24948);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__24961,G__24949);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__24938 = G__25583;
G__24939 = G__25584;
G__24940 = G__25585;
G__24941 = G__25586;
G__24942 = G__25587;
G__24943 = G__25588;
G__24944 = G__25589;
G__24945 = G__25590;
G__24946 = G__25591;
G__24947 = G__25592;
G__24948 = G__25593;
G__24949 = G__25594;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__24974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__24980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__24981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__24982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__24983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__24984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__24985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__24962,G__24963,G__24964,G__24965,G__24966,G__24967,G__24968,G__24969,G__24970,G__24971,G__24972,G__24973){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24974,G__24962);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24975,G__24963);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24976,G__24964);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24977,G__24965);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24978,G__24966);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24979,G__24967);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__24980,G__24968);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__24981,G__24969);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__24982,G__24970);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__24983,G__24971);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__24984,G__24972);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__24985,G__24973);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25600 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__24962 = G__25595;
G__24963 = G__25596;
G__24964 = G__25597;
G__24965 = G__25598;
G__24966 = G__25599;
G__24967 = G__25600;
G__24968 = G__25601;
G__24969 = G__25602;
G__24970 = G__25603;
G__24971 = G__25604;
G__24972 = G__25605;
G__24973 = G__25606;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__24986,G__24987,G__24988,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,G__24998){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24999,G__24986);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25000,G__24987);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25001,G__24988);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25002,G__24989);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25003,G__24990);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25004,G__24991);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25005,G__24992);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25006,G__24993);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25007,G__24994);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25008,G__24995);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25009,G__24996);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25010,G__24997);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25011,G__24998);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25616 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25618 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__24986 = G__25607;
G__24987 = G__25608;
G__24988 = G__25609;
G__24989 = G__25610;
G__24990 = G__25611;
G__24991 = G__25612;
G__24992 = G__25613;
G__24993 = G__25614;
G__24994 = G__25615;
G__24995 = G__25616;
G__24996 = G__25617;
G__24997 = G__25618;
G__24998 = G__25619;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__25012,G__25013,G__25014,G__25015,G__25016,G__25017,G__25018,G__25019,G__25020,G__25021,G__25022,G__25023,G__25024){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25025,G__25012);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25026,G__25013);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25027,G__25014);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25028,G__25015);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25029,G__25016);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25030,G__25017);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25031,G__25018);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25032,G__25019);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25033,G__25020);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25034,G__25021);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25035,G__25022);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25036,G__25023);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25037,G__25024);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__25012 = G__25620;
G__25013 = G__25621;
G__25014 = G__25622;
G__25015 = G__25623;
G__25016 = G__25624;
G__25017 = G__25625;
G__25018 = G__25626;
G__25019 = G__25627;
G__25020 = G__25628;
G__25021 = G__25629;
G__25022 = G__25630;
G__25023 = G__25631;
G__25024 = G__25632;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25038,G__25039,G__25040,G__25041,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,G__25050,G__25051,G__25052){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25053,G__25038);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25054,G__25039);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25055,G__25040);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25056,G__25041);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25057,G__25042);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25058,G__25043);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25059,G__25044);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25060,G__25045);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25061,G__25046);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25062,G__25047);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25063,G__25048);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25064,G__25049);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25065,G__25050);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25066,G__25051);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25067,G__25052);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25640 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25038 = G__25633;
G__25039 = G__25634;
G__25040 = G__25635;
G__25041 = G__25636;
G__25042 = G__25637;
G__25043 = G__25638;
G__25044 = G__25639;
G__25045 = G__25640;
G__25046 = G__25641;
G__25047 = G__25642;
G__25048 = G__25643;
G__25049 = G__25644;
G__25050 = G__25645;
G__25051 = G__25646;
G__25052 = G__25647;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25068,G__25069,G__25070,G__25071,G__25072,G__25073,G__25074,G__25075,G__25076,G__25077,G__25078,G__25079,G__25080,G__25081,G__25082){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25083,G__25068);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25084,G__25069);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25085,G__25070);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25086,G__25071);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25087,G__25072);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25088,G__25073);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25089,G__25074);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25090,G__25075);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25091,G__25076);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25092,G__25077);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25093,G__25078);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25094,G__25079);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25095,G__25080);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25096,G__25081);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25097,G__25082);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25649 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25652 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25655 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25658 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25068 = G__25648;
G__25069 = G__25649;
G__25070 = G__25650;
G__25071 = G__25651;
G__25072 = G__25652;
G__25073 = G__25653;
G__25074 = G__25654;
G__25075 = G__25655;
G__25076 = G__25656;
G__25077 = G__25657;
G__25078 = G__25658;
G__25079 = G__25659;
G__25080 = G__25660;
G__25081 = G__25661;
G__25082 = G__25662;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25125 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25126 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25098,G__25099,G__25100,G__25101,G__25102,G__25103,G__25104,G__25105,G__25106,G__25107,G__25108,G__25109,G__25110,G__25111,G__25112){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25113,G__25098);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25114,G__25099);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25115,G__25100);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25116,G__25101);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25117,G__25102);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25118,G__25103);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25119,G__25104);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25120,G__25105);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25121,G__25106);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25122,G__25107);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25123,G__25108);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25124,G__25109);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25125,G__25110);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25126,G__25111);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25127,G__25112);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25665 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25676 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25098 = G__25663;
G__25099 = G__25664;
G__25100 = G__25665;
G__25101 = G__25666;
G__25102 = G__25667;
G__25103 = G__25668;
G__25104 = G__25669;
G__25105 = G__25670;
G__25106 = G__25671;
G__25107 = G__25672;
G__25108 = G__25673;
G__25109 = G__25674;
G__25110 = G__25675;
G__25111 = G__25676;
G__25112 = G__25677;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25146 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25153 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25128,G__25129,G__25130,G__25131,G__25132,G__25133,G__25134,G__25135,G__25136,G__25137,G__25138,G__25139,G__25140,G__25141,G__25142){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25143,G__25128);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25144,G__25129);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25145,G__25130);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25146,G__25131);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25147,G__25132);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25148,G__25133);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25149,G__25134);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25150,G__25135);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25151,G__25136);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25152,G__25137);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25153,G__25138);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25154,G__25139);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25155,G__25140);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25156,G__25141);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25157,G__25142);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25128 = G__25678;
G__25129 = G__25679;
G__25130 = G__25680;
G__25131 = G__25681;
G__25132 = G__25682;
G__25133 = G__25683;
G__25134 = G__25684;
G__25135 = G__25685;
G__25136 = G__25686;
G__25137 = G__25687;
G__25138 = G__25688;
G__25139 = G__25689;
G__25140 = G__25690;
G__25141 = G__25691;
G__25142 = G__25692;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25180 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25183 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25187 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__25158,G__25159,G__25160,G__25161,G__25162,G__25163,G__25164,G__25165,G__25166,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25174,G__25158);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25175,G__25159);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25176,G__25160);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25177,G__25161);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25178,G__25162);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25179,G__25163);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25180,G__25164);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25181,G__25165);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25182,G__25166);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25183,G__25167);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25184,G__25168);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25185,G__25169);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25186,G__25170);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25187,G__25171);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25188,G__25172);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25189,G__25173);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__25158 = G__25693;
G__25159 = G__25694;
G__25160 = G__25695;
G__25161 = G__25696;
G__25162 = G__25697;
G__25163 = G__25698;
G__25164 = G__25699;
G__25165 = G__25700;
G__25166 = G__25701;
G__25167 = G__25702;
G__25168 = G__25703;
G__25169 = G__25704;
G__25170 = G__25705;
G__25171 = G__25706;
G__25172 = G__25707;
G__25173 = G__25708;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25210 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25220 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__25190,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25202,G__25203,G__25204,G__25205){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25206,G__25190);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25207,G__25191);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25208,G__25192);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25209,G__25193);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25210,G__25194);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25211,G__25195);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25212,G__25196);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25213,G__25197);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25214,G__25198);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25215,G__25199);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25216,G__25200);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25217,G__25201);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25218,G__25202);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25219,G__25203);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25220,G__25204);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25221,G__25205);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__25190 = G__25709;
G__25191 = G__25710;
G__25192 = G__25711;
G__25193 = G__25712;
G__25194 = G__25713;
G__25195 = G__25714;
G__25196 = G__25715;
G__25197 = G__25716;
G__25198 = G__25717;
G__25199 = G__25718;
G__25200 = G__25719;
G__25201 = G__25720;
G__25202 = G__25721;
G__25203 = G__25722;
G__25204 = G__25723;
G__25205 = G__25724;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25240 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25246 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__25222,G__25223,G__25224,G__25225,G__25226,G__25227,G__25228,G__25229,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25238){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25239,G__25222);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25240,G__25223);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25241,G__25224);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25242,G__25225);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25243,G__25226);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25244,G__25227);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25245,G__25228);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25246,G__25229);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25247,G__25230);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25248,G__25231);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25249,G__25232);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25250,G__25233);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25251,G__25234);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25252,G__25235);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25253,G__25236);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25254,G__25237);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25255,G__25238);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25737 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__25222 = G__25725;
G__25223 = G__25726;
G__25224 = G__25727;
G__25225 = G__25728;
G__25226 = G__25729;
G__25227 = G__25730;
G__25228 = G__25731;
G__25229 = G__25732;
G__25230 = G__25733;
G__25231 = G__25734;
G__25232 = G__25735;
G__25233 = G__25736;
G__25234 = G__25737;
G__25235 = G__25738;
G__25236 = G__25739;
G__25237 = G__25740;
G__25238 = G__25741;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25279 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25280 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25265,G__25266,G__25267,G__25268,G__25269,G__25270,G__25271,G__25272){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25273,G__25256);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25274,G__25257);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25275,G__25258);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25276,G__25259);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25277,G__25260);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25278,G__25261);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25279,G__25262);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25280,G__25263);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25281,G__25264);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25282,G__25265);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25283,G__25266);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25284,G__25267);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25285,G__25268);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25286,G__25269);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25287,G__25270);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25288,G__25271);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25289,G__25272);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25746 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25749 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25751 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25752 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__25256 = G__25742;
G__25257 = G__25743;
G__25258 = G__25744;
G__25259 = G__25745;
G__25260 = G__25746;
G__25261 = G__25747;
G__25262 = G__25748;
G__25263 = G__25749;
G__25264 = G__25750;
G__25265 = G__25751;
G__25266 = G__25752;
G__25267 = G__25753;
G__25268 = G__25754;
G__25269 = G__25755;
G__25270 = G__25756;
G__25271 = G__25757;
G__25272 = G__25758;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25323 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__25290,G__25291,G__25292,G__25293,G__25294,G__25295,G__25296,G__25297,G__25298,G__25299,G__25300,G__25301,G__25302,G__25303,G__25304,G__25305,G__25306,G__25307){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25308,G__25290);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25309,G__25291);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25310,G__25292);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25311,G__25293);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25312,G__25294);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25313,G__25295);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25314,G__25296);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25315,G__25297);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25316,G__25298);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25317,G__25299);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25318,G__25300);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25319,G__25301);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25320,G__25302);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25321,G__25303);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25322,G__25304);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25323,G__25305);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25324,G__25306);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25325,G__25307);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25762 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25774 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__25776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__25290 = G__25759;
G__25291 = G__25760;
G__25292 = G__25761;
G__25293 = G__25762;
G__25294 = G__25763;
G__25295 = G__25764;
G__25296 = G__25765;
G__25297 = G__25766;
G__25298 = G__25767;
G__25299 = G__25768;
G__25300 = G__25769;
G__25301 = G__25770;
G__25302 = G__25771;
G__25303 = G__25772;
G__25304 = G__25773;
G__25305 = G__25774;
G__25306 = G__25775;
G__25307 = G__25776;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25346 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25357 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25359 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25360 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__25326,G__25327,G__25328,G__25329,G__25330,G__25331,G__25332,G__25333,G__25334,G__25335,G__25336,G__25337,G__25338,G__25339,G__25340,G__25341,G__25342,G__25343){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25344,G__25326);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25345,G__25327);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25346,G__25328);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25347,G__25329);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25348,G__25330);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25349,G__25331);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25350,G__25332);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25351,G__25333);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25352,G__25334);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25353,G__25335);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25354,G__25336);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25355,G__25337);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25356,G__25338);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25357,G__25339);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25358,G__25340);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25359,G__25341);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25360,G__25342);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25361,G__25343);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25777 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25790 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__25794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__25326 = G__25777;
G__25327 = G__25778;
G__25328 = G__25779;
G__25329 = G__25780;
G__25330 = G__25781;
G__25331 = G__25782;
G__25332 = G__25783;
G__25333 = G__25784;
G__25334 = G__25785;
G__25335 = G__25786;
G__25336 = G__25787;
G__25337 = G__25788;
G__25338 = G__25789;
G__25339 = G__25790;
G__25340 = G__25791;
G__25341 = G__25792;
G__25342 = G__25793;
G__25343 = G__25794;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25382 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25383 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25384 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25386 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25387 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25388 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25389 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25390 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25392 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25393 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25394 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__25399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__25362,G__25363,G__25364,G__25365,G__25366,G__25367,G__25368,G__25369,G__25370,G__25371,G__25372,G__25373,G__25374,G__25375,G__25376,G__25377,G__25378,G__25379,G__25380){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25381,G__25362);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25382,G__25363);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25383,G__25364);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25384,G__25365);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25385,G__25366);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25386,G__25367);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25387,G__25368);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25388,G__25369);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25389,G__25370);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25390,G__25371);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25391,G__25372);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25392,G__25373);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25393,G__25374);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25394,G__25375);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25395,G__25376);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25396,G__25377);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25397,G__25378);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25398,G__25379);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__25399,G__25380);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25802 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25806 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__25812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__25813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__25362 = G__25795;
G__25363 = G__25796;
G__25364 = G__25797;
G__25365 = G__25798;
G__25366 = G__25799;
G__25367 = G__25800;
G__25368 = G__25801;
G__25369 = G__25802;
G__25370 = G__25803;
G__25371 = G__25804;
G__25372 = G__25805;
G__25373 = G__25806;
G__25374 = G__25807;
G__25375 = G__25808;
G__25376 = G__25809;
G__25377 = G__25810;
G__25378 = G__25811;
G__25379 = G__25812;
G__25380 = G__25813;
continue;
} else {
return ret__24131__auto__;
}
break;
}
});
} else {
var G__25419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25420 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25422 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25424 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__25437 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__25400,G__25401,G__25402,G__25403,G__25404,G__25405,G__25406,G__25407,G__25408,G__25409,G__25410,G__25411,G__25412,G__25413,G__25414,G__25415,G__25416,G__25417,G__25418){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25419,G__25400);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25420,G__25401);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25421,G__25402);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25422,G__25403);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25423,G__25404);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25424,G__25405);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25425,G__25406);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25426,G__25407);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25427,G__25408);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25428,G__25409);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25429,G__25410);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25430,G__25411);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25431,G__25412);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25432,G__25413);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25433,G__25414);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25434,G__25415);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25435,G__25416);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25436,G__25417);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__25437,G__25418);
var ctx__24130__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__24131__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24130__auto__) : return$.call(null,ctx__24130__auto__));
var recur_QMARK___24132__auto__ = (ret__24131__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24132__auto__){
var recur_val = sci.impl.types.getVal(ret__24131__auto__);
var G__25814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25824 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__25831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__25832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__25400 = G__25814;
G__25401 = G__25815;
G__25402 = G__25816;
G__25403 = G__25817;
G__25404 = G__25818;
G__25405 = G__25819;
G__25406 = G__25820;
G__25407 = G__25821;
G__25408 = G__25822;
G__25409 = G__25823;
G__25410 = G__25824;
G__25411 = G__25825;
G__25412 = G__25826;
G__25413 = G__25827;
G__25414 = G__25828;
G__25415 = G__25829;
G__25416 = G__25830;
G__25417 = G__25831;
G__25418 = G__25832;
continue;
} else {
return ret__24131__auto__;
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

var G__25833 = cljs.core.next(args_STAR_);
var G__25834 = cljs.core.next(params__$1);
var G__25835 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__25833;
params__$1 = G__25834;
ret = G__25835;
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
var vec__25438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(0),null);
var vec__25441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25441,(0),null);
var G__25836 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__25836;
continue;
} else {
var G__25837 = recur_val;
args = G__25837;
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
var G__25838__i = 0, G__25838__a = new Array(arguments.length -  0);
while (G__25838__i < G__25838__a.length) {G__25838__a[G__25838__i] = arguments[G__25838__i + 0]; ++G__25838__i;}
  args = new cljs.core.IndexedSeq(G__25838__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__25839){
var args = cljs.core.seq(arglist__25839);
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

var G__25840 = cljs.core.next(args_STAR_);
var G__25841 = cljs.core.next(params__$1);
var G__25842 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__25840;
params__$1 = G__25841;
ret = G__25842;
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
var vec__25444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25444,(0),null);
var vec__25447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25444,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(0),null);
var G__25843 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__25843;
continue;
} else {
var G__25844 = recur_val;
args = G__25844;
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
var G__25845__i = 0, G__25845__a = new Array(arguments.length -  0);
while (G__25845__i < G__25845__a.length) {G__25845__a[G__25845__i] = arguments[G__25845__i + 0]; ++G__25845__i;}
  args = new cljs.core.IndexedSeq(G__25845__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__25846){
var args = cljs.core.seq(arglist__25846);
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
var map__25847 = cljs.core.meta(f);
var map__25847__$1 = (((((!((map__25847 == null))))?(((((map__25847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25847):map__25847);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25847__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25847__$1,cljs.core.cst$kw$sci$impl_SLASH_min_DASH_var_DASH_args_DASH_arity);
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
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__25851){
var map__25852 = p__25851;
var map__25852__$1 = (((((!((map__25852 == null))))?(((((map__25852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25852):map__25852);
var f = map__25852__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$sci$impl_SLASH_var);
var macro_QMARK_ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25854__i = 0, G__25854__a = new Array(arguments.length -  0);
while (G__25854__i < G__25854__a.length) {G__25854__a[G__25854__i] = arguments[G__25854__i + 0]; ++G__25854__i;}
  args = new cljs.core.IndexedSeq(G__25854__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__25855){
var args = cljs.core.seq(arglist__25855);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25849_SHARP_){
return sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,p1__25849_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__25856__delegate = function (args){
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
var G__25856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25857__i = 0, G__25857__a = new Array(arguments.length -  0);
while (G__25857__i < G__25857__a.length) {G__25857__a[G__25857__i] = arguments[G__25857__i + 0]; ++G__25857__i;}
  args = new cljs.core.IndexedSeq(G__25857__a,0,null);
} 
return G__25856__delegate.call(this,args);};
G__25856.cljs$lang$maxFixedArity = 0;
G__25856.cljs$lang$applyTo = (function (arglist__25858){
var args = cljs.core.seq(arglist__25858);
return G__25856__delegate(args);
});
G__25856.cljs$core$IFn$_invoke$arity$variadic = G__25856__delegate;
return G__25856;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__25850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25850_SHARP_,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);
