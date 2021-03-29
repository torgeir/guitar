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

var ret__4785__auto___24913 = (function (){
sci.impl.fns.gen_fn = (function sci$impl$fns$gen_fn(var_args){
var G__24912 = arguments.length;
switch (G__24912) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,let_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arity-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fn_params,null,(1),null)),(cljs.core.truth_(disable_arity_checks)?null:cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_length,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_throw_DASH_arity,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$fn_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$macro_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vals,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_get_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assocs,(new cljs.core.List(null,cljs.core.cst$sym$ctx__24908__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_assoc_DASH_3,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24909__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx__24908__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___24910__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_Recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$ret__24909__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___24910__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$types_SLASH_getVal,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24909__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),recurs))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__24909__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(sci.impl.fns.gen_fn.cljs$lang$macro = true);

var ret__4785__auto___24915 = sci.impl.fns.gen_fn_varargs = (function sci$impl$fns$gen_fn_varargs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$fn,cljs.core.cst$sym$varargs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$$get,cljs.core.with_meta(cljs.core.cst$sym$ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),cljs.core.cst$kw$bindings),cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$loop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$args),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$params),cljs.core.cst$sym$ret,cljs.core.cst$sym$bindings], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$params)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_),cljs.core.cst$sym$fp),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$second,cljs.core.cst$sym$params),cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ret,cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$args_STAR_)))))),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.cst$sym$ret))),cljs.core.cst$sym$ctx,cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ctx,cljs.core.cst$kw$bindings,cljs.core.cst$sym$bindings),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$return,cljs.core.cst$sym$ctx),cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$Recur,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$recur_DASH_val,cljs.core.list(cljs.core.cst$sym$t_SLASH_getVal,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fixed_DASH_args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rest_DASH_args], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,(0),cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity),cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity)], null)], null),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$into,cljs.core.cst$sym$fixed_DASH_args,cljs.core.cst$sym$rest_DASH_args))),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.cst$sym$recur_DASH_val))),cljs.core.cst$sym$ret)));
});
(sci.impl.fns.gen_fn_varargs.cljs$lang$macro = true);

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,eval_do_STAR_,p__24918,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__24919 = p__24918;
var map__24919__$1 = (((((!((map__24919 == null))))?(((((map__24919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24919):map__24919);
var _m = map__24919__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,cljs.core.cst$kw$sci$impl_SLASH_var_DASH_arg_DASH_name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,cljs.core.cst$kw$sci$impl_SLASH_params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,cljs.core.cst$kw$sci$impl_SLASH_body);
var disable_arity_checks_QMARK_ = ctx.get(cljs.core.cst$kw$disable_DASH_arity_DASH_checks);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var body_count = cljs.core.count(body);
var return$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),body_count))?(function (){var fst = cljs.core.first(body);
return (function (p1__24916_SHARP_){
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(p1__24916_SHARP_,fst) : interpret.call(null,p1__24916_SHARP_,fst));
});
})():(function (p1__24917_SHARP_){
return (eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(p1__24917_SHARP_,body) : eval_do_STAR_.call(null,p1__24917_SHARP_,body));
}));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__24921 = (fixed_arity | (0));
switch (G__24921) {
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
var G__24923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__24922){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24923,G__24922);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__24922 = G__25699;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__24925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__24924){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24925,G__24924);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$1);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__24924 = G__25700;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__24926,G__24927){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24928,G__24926);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24929,G__24927);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__24926 = G__25701;
G__24927 = G__25702;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__24932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__24930,G__24931){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24932,G__24930);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24933,G__24931);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$2);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__24930 = G__25703;
G__24931 = G__25704;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__24934,G__24935,G__24936){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24937,G__24934);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24938,G__24935);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24939,G__24936);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__24934 = G__25705;
G__24935 = G__25706;
G__24936 = G__25707;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__24943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__24940,G__24941,G__24942){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24943,G__24940);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24944,G__24941);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24945,G__24942);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$3);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__24940 = G__25708;
G__24941 = G__25709;
G__24942 = G__25710;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__24946,G__24947,G__24948,G__24949){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24950,G__24946);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24951,G__24947);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24952,G__24948);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24953,G__24949);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__24946 = G__25711;
G__24947 = G__25712;
G__24948 = G__25713;
G__24949 = G__25714;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__24958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__24954,G__24955,G__24956,G__24957){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24958,G__24954);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24959,G__24955);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24960,G__24956);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24961,G__24957);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$4);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__24954 = G__25715;
G__24955 = G__25716;
G__24956 = G__25717;
G__24957 = G__25718;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24968 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__24962,G__24963,G__24964,G__24965,G__24966){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24967,G__24962);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24968,G__24963);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24969,G__24964);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24970,G__24965);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24971,G__24966);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__24962 = G__25719;
G__24963 = G__25720;
G__24964 = G__25721;
G__24965 = G__25722;
G__24966 = G__25723;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__24977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__24972,G__24973,G__24974,G__24975,G__24976){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24977,G__24972);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24978,G__24973);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24979,G__24974);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24980,G__24975);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24981,G__24976);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$5);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__24972 = G__25724;
G__24973 = G__25725;
G__24974 = G__25726;
G__24975 = G__25727;
G__24976 = G__25728;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__24988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__24989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__24990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__24991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__24992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__24993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__24982,G__24983,G__24984,G__24985,G__24986,G__24987){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__24988,G__24982);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__24989,G__24983);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__24990,G__24984);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__24991,G__24985);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__24992,G__24986);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__24993,G__24987);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__24982 = G__25729;
G__24983 = G__25730;
G__24984 = G__25731;
G__24985 = G__25732;
G__24986 = G__25733;
G__24987 = G__25734;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__24994,G__24995,G__24996,G__24997,G__24998,G__24999){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25000,G__24994);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25001,G__24995);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25002,G__24996);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25003,G__24997);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25004,G__24998);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25005,G__24999);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$6);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25737 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__24994 = G__25735;
G__24995 = G__25736;
G__24996 = G__25737;
G__24997 = G__25738;
G__24998 = G__25739;
G__24999 = G__25740;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__25006,G__25007,G__25008,G__25009,G__25010,G__25011,G__25012){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25013,G__25006);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25014,G__25007);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25015,G__25008);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25016,G__25009);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25017,G__25010);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25018,G__25011);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25019,G__25012);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25746 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__25006 = G__25741;
G__25007 = G__25742;
G__25008 = G__25743;
G__25009 = G__25744;
G__25010 = G__25745;
G__25011 = G__25746;
G__25012 = G__25747;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__25020,G__25021,G__25022,G__25023,G__25024,G__25025,G__25026){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25027,G__25020);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25028,G__25021);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25029,G__25022);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25030,G__25023);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25031,G__25024);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25032,G__25025);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25033,G__25026);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$7);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25749 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25751 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25752 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__25020 = G__25748;
G__25021 = G__25749;
G__25022 = G__25750;
G__25023 = G__25751;
G__25024 = G__25752;
G__25025 = G__25753;
G__25026 = G__25754;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__25034,G__25035,G__25036,G__25037,G__25038,G__25039,G__25040,G__25041){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25042,G__25034);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25043,G__25035);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25044,G__25036);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25045,G__25037);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25046,G__25038);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25047,G__25039);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25048,G__25040);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25049,G__25041);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25762 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__25034 = G__25755;
G__25035 = G__25756;
G__25036 = G__25757;
G__25037 = G__25758;
G__25038 = G__25759;
G__25039 = G__25760;
G__25040 = G__25761;
G__25041 = G__25762;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__25050,G__25051,G__25052,G__25053,G__25054,G__25055,G__25056,G__25057){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25058,G__25050);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25059,G__25051);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25060,G__25052);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25061,G__25053);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25062,G__25054);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25063,G__25055);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25064,G__25056);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25065,G__25057);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$8);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__25050 = G__25763;
G__25051 = G__25764;
G__25052 = G__25765;
G__25053 = G__25766;
G__25054 = G__25767;
G__25055 = G__25768;
G__25056 = G__25769;
G__25057 = G__25770;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__25066,G__25067,G__25068,G__25069,G__25070,G__25071,G__25072,G__25073,G__25074){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25075,G__25066);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25076,G__25067);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25077,G__25068);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25078,G__25069);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25079,G__25070);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25080,G__25071);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25081,G__25072);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25082,G__25073);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25083,G__25074);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25774 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25777 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__25066 = G__25771;
G__25067 = G__25772;
G__25068 = G__25773;
G__25069 = G__25774;
G__25070 = G__25775;
G__25071 = G__25776;
G__25072 = G__25777;
G__25073 = G__25778;
G__25074 = G__25779;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__25084,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25093,G__25084);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25094,G__25085);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25095,G__25086);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25096,G__25087);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25097,G__25088);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25098,G__25089);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25099,G__25090);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25100,G__25091);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25101,G__25092);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$9);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__25084 = G__25780;
G__25085 = G__25781;
G__25086 = G__25782;
G__25087 = G__25783;
G__25088 = G__25784;
G__25089 = G__25785;
G__25090 = G__25786;
G__25091 = G__25787;
G__25092 = G__25788;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__25102,G__25103,G__25104,G__25105,G__25106,G__25107,G__25108,G__25109,G__25110,G__25111){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25112,G__25102);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25113,G__25103);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25114,G__25104);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25115,G__25105);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25116,G__25106);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25117,G__25107);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25118,G__25108);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25119,G__25109);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25120,G__25110);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25121,G__25111);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25790 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__25102 = G__25789;
G__25103 = G__25790;
G__25104 = G__25791;
G__25105 = G__25792;
G__25106 = G__25793;
G__25107 = G__25794;
G__25108 = G__25795;
G__25109 = G__25796;
G__25110 = G__25797;
G__25111 = G__25798;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__25122,G__25123,G__25124,G__25125,G__25126,G__25127,G__25128,G__25129,G__25130,G__25131){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25132,G__25122);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25133,G__25123);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25134,G__25124);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25135,G__25125);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25136,G__25126);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25137,G__25127);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25138,G__25128);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25139,G__25129);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25140,G__25130);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25141,G__25131);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$10);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25802 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25806 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__25122 = G__25799;
G__25123 = G__25800;
G__25124 = G__25801;
G__25125 = G__25802;
G__25126 = G__25803;
G__25127 = G__25804;
G__25128 = G__25805;
G__25129 = G__25806;
G__25130 = G__25807;
G__25131 = G__25808;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25153 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25158 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__25142,G__25143,G__25144,G__25145,G__25146,G__25147,G__25148,G__25149,G__25150,G__25151,G__25152){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25153,G__25142);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25154,G__25143);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25155,G__25144);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25156,G__25145);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25157,G__25146);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25158,G__25147);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25159,G__25148);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25160,G__25149);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25161,G__25150);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25162,G__25151);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25163,G__25152);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__25142 = G__25809;
G__25143 = G__25810;
G__25144 = G__25811;
G__25145 = G__25812;
G__25146 = G__25813;
G__25147 = G__25814;
G__25148 = G__25815;
G__25149 = G__25816;
G__25150 = G__25817;
G__25151 = G__25818;
G__25152 = G__25819;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25180 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25183 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__25164,G__25165,G__25166,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25175,G__25164);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25176,G__25165);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25177,G__25166);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25178,G__25167);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25179,G__25168);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25180,G__25169);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25181,G__25170);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25182,G__25171);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25183,G__25172);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25184,G__25173);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25185,G__25174);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$11);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25824 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__25164 = G__25820;
G__25165 = G__25821;
G__25166 = G__25822;
G__25167 = G__25823;
G__25168 = G__25824;
G__25169 = G__25825;
G__25170 = G__25826;
G__25171 = G__25827;
G__25172 = G__25828;
G__25173 = G__25829;
G__25174 = G__25830;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25199 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__25186,G__25187,G__25188,G__25189,G__25190,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25198,G__25186);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25199,G__25187);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25200,G__25188);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25201,G__25189);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25202,G__25190);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25203,G__25191);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25204,G__25192);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25205,G__25193);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25206,G__25194);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25207,G__25195);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25208,G__25196);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25209,G__25197);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__25186 = G__25831;
G__25187 = G__25832;
G__25188 = G__25833;
G__25189 = G__25834;
G__25190 = G__25835;
G__25191 = G__25836;
G__25192 = G__25837;
G__25193 = G__25838;
G__25194 = G__25839;
G__25195 = G__25840;
G__25196 = G__25841;
G__25197 = G__25842;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25229 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__25210,G__25211,G__25212,G__25213,G__25214,G__25215,G__25216,G__25217,G__25218,G__25219,G__25220,G__25221){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25222,G__25210);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25223,G__25211);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25224,G__25212);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25225,G__25213);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25226,G__25214);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25227,G__25215);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25228,G__25216);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25229,G__25217);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25230,G__25218);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25231,G__25219);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25232,G__25220);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25233,G__25221);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$12);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25844 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25846 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__25210 = G__25843;
G__25211 = G__25844;
G__25212 = G__25845;
G__25213 = G__25846;
G__25214 = G__25847;
G__25215 = G__25848;
G__25216 = G__25849;
G__25217 = G__25850;
G__25218 = G__25851;
G__25219 = G__25852;
G__25220 = G__25853;
G__25221 = G__25854;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25257 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__25234,G__25235,G__25236,G__25237,G__25238,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25247,G__25234);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25248,G__25235);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25249,G__25236);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25250,G__25237);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25251,G__25238);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25252,G__25239);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25253,G__25240);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25254,G__25241);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25255,G__25242);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25256,G__25243);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25257,G__25244);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25258,G__25245);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25259,G__25246);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__25234 = G__25855;
G__25235 = G__25856;
G__25236 = G__25857;
G__25237 = G__25858;
G__25238 = G__25859;
G__25239 = G__25860;
G__25240 = G__25861;
G__25241 = G__25862;
G__25242 = G__25863;
G__25243 = G__25864;
G__25244 = G__25865;
G__25245 = G__25866;
G__25246 = G__25867;
continue;
} else {
return ret__24379__auto__;
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
return (function sci$impl$fns$fun_$_arity_13(G__25260,G__25261,G__25262,G__25263,G__25264,G__25265,G__25266,G__25267,G__25268,G__25269,G__25270,G__25271,G__25272){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25273,G__25260);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25274,G__25261);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25275,G__25262);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25276,G__25263);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25277,G__25264);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25278,G__25265);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25279,G__25266);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25280,G__25267);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25281,G__25268);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25282,G__25269);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25283,G__25270);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25284,G__25271);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25285,G__25272);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$13);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__25260 = G__25868;
G__25261 = G__25869;
G__25262 = G__25870;
G__25263 = G__25871;
G__25264 = G__25872;
G__25265 = G__25873;
G__25266 = G__25874;
G__25267 = G__25875;
G__25268 = G__25876;
G__25269 = G__25877;
G__25270 = G__25878;
G__25271 = G__25879;
G__25272 = G__25880;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25286,G__25287,G__25288,G__25289,G__25290,G__25291,G__25292,G__25293,G__25294,G__25295,G__25296,G__25297,G__25298,G__25299,G__25300){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25301,G__25286);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25302,G__25287);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25303,G__25288);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25304,G__25289);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25305,G__25290);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25306,G__25291);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25307,G__25292);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25308,G__25293);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25309,G__25294);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25310,G__25295);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25311,G__25296);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25312,G__25297);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25313,G__25298);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25314,G__25299);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25315,G__25300);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25286 = G__25881;
G__25287 = G__25882;
G__25288 = G__25883;
G__25289 = G__25884;
G__25290 = G__25885;
G__25291 = G__25886;
G__25292 = G__25887;
G__25293 = G__25888;
G__25294 = G__25889;
G__25295 = G__25890;
G__25296 = G__25891;
G__25297 = G__25892;
G__25298 = G__25893;
G__25299 = G__25894;
G__25300 = G__25895;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25334 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25340 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25316,G__25317,G__25318,G__25319,G__25320,G__25321,G__25322,G__25323,G__25324,G__25325,G__25326,G__25327,G__25328,G__25329,G__25330){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25331,G__25316);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25332,G__25317);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25333,G__25318);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25334,G__25319);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25335,G__25320);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25336,G__25321);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25337,G__25322);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25338,G__25323);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25339,G__25324);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25340,G__25325);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25341,G__25326);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25342,G__25327);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25343,G__25328);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25344,G__25329);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25345,G__25330);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25316 = G__25896;
G__25317 = G__25897;
G__25318 = G__25898;
G__25319 = G__25899;
G__25320 = G__25900;
G__25321 = G__25901;
G__25322 = G__25902;
G__25323 = G__25903;
G__25324 = G__25904;
G__25325 = G__25905;
G__25326 = G__25906;
G__25327 = G__25907;
G__25328 = G__25908;
G__25329 = G__25909;
G__25330 = G__25910;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25367 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25368 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25373 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25346,G__25347,G__25348,G__25349,G__25350,G__25351,G__25352,G__25353,G__25354,G__25355,G__25356,G__25357,G__25358,G__25359,G__25360){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25361,G__25346);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25362,G__25347);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25363,G__25348);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25364,G__25349);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25365,G__25350);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25366,G__25351);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25367,G__25352);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25368,G__25353);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25369,G__25354);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25370,G__25355);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25371,G__25356);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25372,G__25357);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25373,G__25358);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25374,G__25359);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25375,G__25360);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25346 = G__25911;
G__25347 = G__25912;
G__25348 = G__25913;
G__25349 = G__25914;
G__25350 = G__25915;
G__25351 = G__25916;
G__25352 = G__25917;
G__25353 = G__25918;
G__25354 = G__25919;
G__25355 = G__25920;
G__25356 = G__25921;
G__25357 = G__25922;
G__25358 = G__25923;
G__25359 = G__25924;
G__25360 = G__25925;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25392 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25393 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25394 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__25376,G__25377,G__25378,G__25379,G__25380,G__25381,G__25382,G__25383,G__25384,G__25385,G__25386,G__25387,G__25388,G__25389,G__25390){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25391,G__25376);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25392,G__25377);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25393,G__25378);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25394,G__25379);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25395,G__25380);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25396,G__25381);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25397,G__25382);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25398,G__25383);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25399,G__25384);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25400,G__25385);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25401,G__25386);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25402,G__25387);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25403,G__25388);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25404,G__25389);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25405,G__25390);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$15);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__25376 = G__25926;
G__25377 = G__25927;
G__25378 = G__25928;
G__25379 = G__25929;
G__25380 = G__25930;
G__25381 = G__25931;
G__25382 = G__25932;
G__25383 = G__25933;
G__25384 = G__25934;
G__25385 = G__25935;
G__25386 = G__25936;
G__25387 = G__25937;
G__25388 = G__25938;
G__25389 = G__25939;
G__25390 = G__25940;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25422 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25424 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25437 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__25406,G__25407,G__25408,G__25409,G__25410,G__25411,G__25412,G__25413,G__25414,G__25415,G__25416,G__25417,G__25418,G__25419,G__25420,G__25421){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25422,G__25406);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25423,G__25407);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25424,G__25408);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25425,G__25409);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25426,G__25410);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25427,G__25411);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25428,G__25412);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25429,G__25413);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25430,G__25414);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25431,G__25415);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25432,G__25416);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25433,G__25417);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25434,G__25418);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25435,G__25419);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25436,G__25420);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25437,G__25421);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25942 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__25406 = G__25941;
G__25407 = G__25942;
G__25408 = G__25943;
G__25409 = G__25944;
G__25410 = G__25945;
G__25411 = G__25946;
G__25412 = G__25947;
G__25413 = G__25948;
G__25414 = G__25949;
G__25415 = G__25950;
G__25416 = G__25951;
G__25417 = G__25952;
G__25418 = G__25953;
G__25419 = G__25954;
G__25420 = G__25955;
G__25421 = G__25956;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25454 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25458 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25459 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25460 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25463 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__25438,G__25439,G__25440,G__25441,G__25442,G__25443,G__25444,G__25445,G__25446,G__25447,G__25448,G__25449,G__25450,G__25451,G__25452,G__25453){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25454,G__25438);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25455,G__25439);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25456,G__25440);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25457,G__25441);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25458,G__25442);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25459,G__25443);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25460,G__25444);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25461,G__25445);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25462,G__25446);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25463,G__25447);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25464,G__25448);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25465,G__25449);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25466,G__25450);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25467,G__25451);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25468,G__25452);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25469,G__25453);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$16);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25968 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__25438 = G__25957;
G__25439 = G__25958;
G__25440 = G__25959;
G__25441 = G__25960;
G__25442 = G__25961;
G__25443 = G__25962;
G__25444 = G__25963;
G__25445 = G__25964;
G__25446 = G__25965;
G__25447 = G__25966;
G__25448 = G__25967;
G__25449 = G__25968;
G__25450 = G__25969;
G__25451 = G__25970;
G__25452 = G__25971;
G__25453 = G__25972;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25487 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25499 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__25470,G__25471,G__25472,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479,G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25487,G__25470);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25488,G__25471);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25489,G__25472);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25490,G__25473);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25491,G__25474);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25492,G__25475);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25493,G__25476);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25494,G__25477);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25495,G__25478);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25496,G__25479);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25497,G__25480);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25498,G__25481);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25499,G__25482);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25500,G__25483);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25501,G__25484);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25502,G__25485);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25503,G__25486);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25973 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__25983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__25984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__25985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__25986 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__25987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__25988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__25989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__25470 = G__25973;
G__25471 = G__25974;
G__25472 = G__25975;
G__25473 = G__25976;
G__25474 = G__25977;
G__25475 = G__25978;
G__25476 = G__25979;
G__25477 = G__25980;
G__25478 = G__25981;
G__25479 = G__25982;
G__25480 = G__25983;
G__25481 = G__25984;
G__25482 = G__25985;
G__25483 = G__25986;
G__25484 = G__25987;
G__25485 = G__25988;
G__25486 = G__25989;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25527 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25531 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__25504,G__25505,G__25506,G__25507,G__25508,G__25509,G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516,G__25517,G__25518,G__25519,G__25520){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25521,G__25504);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25522,G__25505);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25523,G__25506);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25524,G__25507);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25525,G__25508);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25526,G__25509);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25527,G__25510);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25528,G__25511);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25529,G__25512);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25530,G__25513);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25531,G__25514);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25532,G__25515);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25533,G__25516);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25534,G__25517);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25535,G__25518);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25536,G__25519);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25537,G__25520);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$17);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__25990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__25991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__25992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__25993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__25994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__25995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__25996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__25997 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__25998 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__25999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__26000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__26001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__26002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__26003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__26004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__26005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__26006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__25504 = G__25990;
G__25505 = G__25991;
G__25506 = G__25992;
G__25507 = G__25993;
G__25508 = G__25994;
G__25509 = G__25995;
G__25510 = G__25996;
G__25511 = G__25997;
G__25512 = G__25998;
G__25513 = G__25999;
G__25514 = G__26000;
G__25515 = G__26001;
G__25516 = G__26002;
G__25517 = G__26003;
G__25518 = G__26004;
G__25519 = G__26005;
G__25520 = G__26006;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25567 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25568 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25569 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25571 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25572 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25573 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__25538,G__25539,G__25540,G__25541,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547,G__25548,G__25549,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25556,G__25538);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25557,G__25539);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25558,G__25540);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25559,G__25541);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25560,G__25542);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25561,G__25543);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25562,G__25544);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25563,G__25545);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25564,G__25546);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25565,G__25547);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25566,G__25548);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25567,G__25549);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25568,G__25550);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25569,G__25551);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25570,G__25552);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25571,G__25553);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25572,G__25554);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25573,G__25555);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__26007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__26008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__26009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__26010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__26011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__26012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__26013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__26014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__26015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__26016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__26017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__26018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__26019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__26020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__26021 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__26022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__26023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__26024 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__25538 = G__26007;
G__25539 = G__26008;
G__25540 = G__26009;
G__25541 = G__26010;
G__25542 = G__26011;
G__25543 = G__26012;
G__25544 = G__26013;
G__25545 = G__26014;
G__25546 = G__26015;
G__25547 = G__26016;
G__25548 = G__26017;
G__25549 = G__26018;
G__25550 = G__26019;
G__25551 = G__26020;
G__25552 = G__26021;
G__25553 = G__26022;
G__25554 = G__26023;
G__25555 = G__26024;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25600 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__25574,G__25575,G__25576,G__25577,G__25578,G__25579,G__25580,G__25581,G__25582,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589,G__25590,G__25591){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25592,G__25574);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25593,G__25575);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25594,G__25576);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25595,G__25577);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25596,G__25578);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25597,G__25579);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25598,G__25580);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25599,G__25581);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25600,G__25582);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25601,G__25583);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25602,G__25584);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25603,G__25585);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25604,G__25586);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25605,G__25587);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25606,G__25588);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25607,G__25589);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25608,G__25590);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25609,G__25591);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$18);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__26025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__26026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__26027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__26028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__26029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__26030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__26031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__26032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__26033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__26034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__26035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__26036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__26037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__26038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__26039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__26040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__26041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__26042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__25574 = G__26025;
G__25575 = G__26026;
G__25576 = G__26027;
G__25577 = G__26028;
G__25578 = G__26029;
G__25579 = G__26030;
G__25580 = G__26031;
G__25581 = G__26032;
G__25582 = G__26033;
G__25583 = G__26034;
G__25584 = G__26035;
G__25585 = G__26036;
G__25586 = G__26037;
G__25587 = G__26038;
G__25588 = G__26039;
G__25589 = G__26040;
G__25590 = G__26041;
G__25591 = G__26042;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__25629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25640 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__25647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__25610,G__25611,G__25612,G__25613,G__25614,G__25615,G__25616,G__25617,G__25618,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625,G__25626,G__25627,G__25628){
while(true){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25629,G__25610);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25630,G__25611);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25631,G__25612);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25632,G__25613);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25633,G__25614);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25634,G__25615);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25635,G__25616);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25636,G__25617);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25637,G__25618);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25638,G__25619);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25639,G__25620);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25640,G__25621);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25641,G__25622);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25642,G__25623);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25643,G__25624);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25644,G__25625);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25645,G__25626);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25646,G__25627);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__25647,G__25628);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__26043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__26044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__26045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__26046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__26047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__26048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__26049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__26050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__26051 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__26052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__26053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__26054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__26055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__26056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__26057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__26058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__26059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__26060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__26061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__25610 = G__26043;
G__25611 = G__26044;
G__25612 = G__26045;
G__25613 = G__26046;
G__25614 = G__26047;
G__25615 = G__26048;
G__25616 = G__26049;
G__25617 = G__26050;
G__25618 = G__26051;
G__25619 = G__26052;
G__25620 = G__26053;
G__25621 = G__26054;
G__25622 = G__26055;
G__25623 = G__26056;
G__25624 = G__26057;
G__25625 = G__26058;
G__25626 = G__26059;
G__25627 = G__26060;
G__25628 = G__26061;
continue;
} else {
return ret__24379__auto__;
}
break;
}
});
} else {
var G__25667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__25668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__25669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__25670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__25671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__25672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__25673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__25674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__25675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__25676 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__25677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__25678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__25679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__25680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__25681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__25682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__25683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__25684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__25685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654,G__25655,G__25656,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663,G__25664,G__25665,G__25666){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(cljs.core.cst$kw$bindings);
var bindings__$1 = cljs.core._assoc(bindings,G__25667,G__25648);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__25668,G__25649);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__25669,G__25650);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__25670,G__25651);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__25671,G__25652);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__25672,G__25653);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__25673,G__25654);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__25674,G__25655);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__25675,G__25656);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__25676,G__25657);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__25677,G__25658);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__25678,G__25659);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__25679,G__25660);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__25680,G__25661);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__25681,G__25662);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__25682,G__25663);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__25683,G__25664);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__25684,G__25665);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__25685,G__25666);
var ctx__24378__auto__ = cljs.core._assoc(ctx,cljs.core.cst$kw$bindings,bindings__$19);
var ret__24379__auto__ = (return$.cljs$core$IFn$_invoke$arity$1 ? return$.cljs$core$IFn$_invoke$arity$1(ctx__24378__auto__) : return$.call(null,ctx__24378__auto__));
var recur_QMARK___24380__auto__ = (ret__24379__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___24380__auto__){
var recur_val = sci.impl.types.getVal(ret__24379__auto__);
var G__26062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__26063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__26064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__26065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__26066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__26067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__26068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__26069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__26070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__26071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__26072 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__26073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__26074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__26075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__26076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__26077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__26078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__26079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__26080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__25648 = G__26062;
G__25649 = G__26063;
G__25650 = G__26064;
G__25651 = G__26065;
G__25652 = G__26066;
G__25653 = G__26067;
G__25654 = G__26068;
G__25655 = G__26069;
G__25656 = G__26070;
G__25657 = G__26071;
G__25658 = G__26072;
G__25659 = G__26073;
G__25660 = G__26074;
G__25661 = G__26075;
G__25662 = G__26076;
G__25663 = G__26077;
G__25664 = G__26078;
G__25665 = G__26079;
G__25666 = G__26080;
continue;
} else {
return ret__24379__auto__;
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

var G__26081 = cljs.core.next(args_STAR_);
var G__26082 = cljs.core.next(params__$1);
var G__26083 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__26081;
params__$1 = G__26082;
ret = G__26083;
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
var vec__25686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25686,(0),null);
var vec__25689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25686,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25689,(0),null);
var G__26084 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__26084;
continue;
} else {
var G__26085 = recur_val;
args = G__26085;
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
var G__26086__i = 0, G__26086__a = new Array(arguments.length -  0);
while (G__26086__i < G__26086__a.length) {G__26086__a[G__26086__i] = arguments[G__26086__i + 0]; ++G__26086__i;}
  args = new cljs.core.IndexedSeq(G__26086__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__26087){
var args = cljs.core.seq(arglist__26087);
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

var G__26088 = cljs.core.next(args_STAR_);
var G__26089 = cljs.core.next(params__$1);
var G__26090 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__26088;
params__$1 = G__26089;
ret = G__26090;
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
var vec__25692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25692,(0),null);
var vec__25695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25692,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25695,(0),null);
var G__26091 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__26091;
continue;
} else {
var G__26092 = recur_val;
args = G__26092;
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
var G__26093__i = 0, G__26093__a = new Array(arguments.length -  0);
while (G__26093__i < G__26093__a.length) {G__26093__a[G__26093__i] = arguments[G__26093__i + 0]; ++G__26093__i;}
  args = new cljs.core.IndexedSeq(G__26093__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__26094){
var args = cljs.core.seq(arglist__26094);
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
var map__26095 = cljs.core.meta(f);
var map__26095__$1 = (((((!((map__26095 == null))))?(((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26095):map__26095);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26095__$1,cljs.core.cst$kw$sci$impl_SLASH_fixed_DASH_arity);
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26095__$1,cljs.core.cst$kw$sci$impl_SLASH_min_DASH_var_DASH_args_DASH_arity);
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
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__26099){
var map__26100 = p__26099;
var map__26100__$1 = (((((!((map__26100 == null))))?(((((map__26100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26100):map__26100);
var f = map__26100__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26100__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26100__$1,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26100__$1,cljs.core.cst$kw$sci$impl_SLASH_var);
var macro_QMARK_ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26102__i = 0, G__26102__a = new Array(arguments.length -  0);
while (G__26102__i < G__26102__a.length) {G__26102__a[G__26102__i] = arguments[G__26102__i + 0]; ++G__26102__i;}
  args = new cljs.core.IndexedSeq(G__26102__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__26103){
var args = cljs.core.seq(arglist__26103);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26097_SHARP_){
return sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,p1__26097_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__26104__delegate = function (args){
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
var G__26104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26105__i = 0, G__26105__a = new Array(arguments.length -  0);
while (G__26105__i < G__26105__a.length) {G__26105__a[G__26105__i] = arguments[G__26105__i + 0]; ++G__26105__i;}
  args = new cljs.core.IndexedSeq(G__26105__a,0,null);
} 
return G__26104__delegate.call(this,args);};
G__26104.cljs$lang$maxFixedArity = 0;
G__26104.cljs$lang$applyTo = (function (arglist__26106){
var args = cljs.core.seq(arglist__26106);
return G__26104__delegate(args);
});
G__26104.cljs$core$IFn$_invoke$arity$variadic = G__26104__delegate;
return G__26104;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__26098_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26098_SHARP_,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);
