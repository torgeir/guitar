// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.hierarchies');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.vars');
sci.impl.hierarchies.global_hierarchy = (function sci$impl$hierarchies$global_hierarchy(ctx){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cljs.core.cst$sym$clojure$core,cljs.core.cst$sym$global_DASH_hierarchy], null));
});
sci.impl.hierarchies.derive_STAR_ = (function sci$impl$hierarchies$derive_STAR_(var_args){
var G__17806 = arguments.length;
switch (G__17806) {
case 3:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,tag,parent){
sci.impl.vars.alter_var_root(sci.impl.hierarchies.global_hierarchy(ctx),(function (h){
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}));

return null;
}));

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,tag,parent){
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}));

(sci.impl.hierarchies.derive_STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.underive_STAR_ = (function sci$impl$hierarchies$underive_STAR_(var_args){
var G__17809 = arguments.length;
switch (G__17809) {
case 3:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,tag,parent){
sci.impl.vars.alter_var_root(sci.impl.hierarchies.global_hierarchy(ctx),(function (h){
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}));

return null;
}));

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,tag,parent){
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}));

(sci.impl.hierarchies.underive_STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.isa_QMARK__STAR_ = (function sci$impl$hierarchies$isa_QMARK__STAR_(var_args){
var G__17812 = arguments.length;
switch (G__17812) {
case 3:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,child,parent){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,child,parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_ctx,h,child,parent){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,child,parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.hierarchies.ancestors_STAR_ = (function sci$impl$hierarchies$ancestors_STAR_(var_args){
var G__17815 = arguments.length;
switch (G__17815) {
case 2:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.descendants_STAR_ = (function sci$impl$hierarchies$descendants_STAR_(var_args){
var G__17818 = arguments.length;
switch (G__17818) {
case 2:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.parents_STAR_ = (function sci$impl$hierarchies$parents_STAR_(var_args){
var G__17821 = arguments.length;
switch (G__17821) {
case 2:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy(ctx));
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_ctx,h,tag){
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$lang$maxFixedArity = 3);

