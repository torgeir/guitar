// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
guitar.buttons.title_case = (function guitar$buttons$title_case(p__38577){
var vec__38578 = p__38577;
var seq__38579 = cljs.core.seq(vec__38578);
var first__38580 = cljs.core.first(seq__38579);
var seq__38579__$1 = cljs.core.next(seq__38579);
var fst = first__38580;
var rst = seq__38579__$1;
if(cljs.core.truth_(fst)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,fst.toUpperCase(),rst);
} else {
return "";
}
});
guitar.buttons.button = rum.core.lazy_build(rum.core.build_defc,(function (props,value){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__38581 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38581.cljs$core$IFn$_invoke$arity$1 ? fexpr__38581.cljs$core$IFn$_invoke$arity$1(value) : fexpr__38581.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return " ";
}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)].join('')], null))},[daiquiri.interpreter.interpret(guitar.buttons.title_case(value))]);
}),null,"guitar.buttons/button");
guitar.buttons.toggle_button = rum.core.lazy_build(rum.core.build_defc,(function (props,on_value,off_value){
var attrs38588 = (function (){var G__38589 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === true)?on_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38591 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38591.cljs$core$IFn$_invoke$arity$1 ? fexpr__38591.cljs$core$IFn$_invoke$arity$1(true) : fexpr__38591.call(null,true));
})], 0));
var G__38590 = on_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38589,G__38590) : guitar.buttons.button.call(null,G__38589,G__38590));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38588))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38588], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38588))?[daiquiri.interpreter.interpret((function (){var G__38595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38597 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38597.cljs$core$IFn$_invoke$arity$1 ? fexpr__38597.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38597.call(null,false));
})], 0));
var G__38596 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38595,G__38596) : guitar.buttons.button.call(null,G__38595,G__38596));
})())]:[daiquiri.interpreter.interpret(attrs38588),daiquiri.interpreter.interpret((function (){var G__38601 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38603 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38603.cljs$core$IFn$_invoke$arity$1 ? fexpr__38603.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38603.call(null,false));
})], 0));
var G__38602 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38601,G__38602) : guitar.buttons.button.call(null,G__38601,G__38602));
})())]));
}),null,"guitar.buttons/toggle-button");
guitar.buttons.buttons = rum.core.lazy_build(rum.core.build_defc,(function (props,values){
var attrs38605 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38604_SHARP_){
return rum.core.with_key((guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(props,p1__38604_SHARP_) : guitar.buttons.button.call(null,props,p1__38604_SHARP_)),p1__38604_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38605))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38605], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38605))?null:[daiquiri.interpreter.interpret(attrs38605)]));
}),null,"guitar.buttons/buttons");
guitar.buttons.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,selected,on_click,format){
var attrs38610 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__38611 = (index + (1));
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__38611) : selected.call(null,G__38611));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__38612 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__38612) : on_click.call(null,G__38612));
})], null),(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(value) : format.call(null,value))], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38610))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38610], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38610))?null:[daiquiri.interpreter.interpret(attrs38610)]));
}),null,"guitar.buttons/buttons-multi");
