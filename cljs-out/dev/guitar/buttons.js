// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
guitar.buttons.title_case = (function guitar$buttons$title_case(p__38422){
var vec__38423 = p__38422;
var seq__38424 = cljs.core.seq(vec__38423);
var first__38425 = cljs.core.first(seq__38424);
var seq__38424__$1 = cljs.core.next(seq__38424);
var fst = first__38425;
var rst = seq__38424__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,fst.toUpperCase(),rst);
});
guitar.buttons.button = rum.core.lazy_build(rum.core.build_defc,(function (props,value){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__38426 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38426.cljs$core$IFn$_invoke$arity$1 ? fexpr__38426.cljs$core$IFn$_invoke$arity$1(value) : fexpr__38426.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return " ";
}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)].join('')], null))},[daiquiri.interpreter.interpret(guitar.buttons.title_case(value))]);
}),null,"guitar.buttons/button");
guitar.buttons.buttons = rum.core.lazy_build(rum.core.build_defc,(function (props,values){
var attrs38428 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38427_SHARP_){
return rum.core.with_key((guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(props,p1__38427_SHARP_) : guitar.buttons.button.call(null,props,p1__38427_SHARP_)),p1__38427_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38428))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38428], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38428))?null:[daiquiri.interpreter.interpret(attrs38428)]));
}),null,"guitar.buttons/buttons");
guitar.buttons.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,selected,on_click,format){
var attrs38433 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__38434 = (index + (1));
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__38434) : selected.call(null,G__38434));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__38435 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__38435) : on_click.call(null,G__38435));
})], null),(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(value) : format.call(null,value))], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38433))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38433], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38433))?null:[daiquiri.interpreter.interpret(attrs38433)]));
}),null,"guitar.buttons/buttons-multi");
