// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
guitar.buttons.title_case = (function guitar$buttons$title_case(p__38590){
var vec__38591 = p__38590;
var seq__38592 = cljs.core.seq(vec__38591);
var first__38593 = cljs.core.first(seq__38592);
var seq__38592__$1 = cljs.core.next(seq__38592);
var fst = first__38593;
var rst = seq__38592__$1;
if(cljs.core.truth_(fst)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,fst.toUpperCase(),rst);
} else {
return "";
}
});
guitar.buttons.button = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__38595 = null;
var G__38595__2 = (function (props,value){
return daiquiri.interpreter.interpret((guitar.buttons.button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$3(props,value,value) : guitar.buttons.button.call(null,props,value,value)));
});
var G__38595__3 = (function (props,value,label){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__38594 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38594.cljs$core$IFn$_invoke$arity$1 ? fexpr__38594.cljs$core$IFn$_invoke$arity$1(value) : fexpr__38594.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return " ";
}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)].join('')], null))},[daiquiri.interpreter.interpret(guitar.buttons.title_case(label))]);
});
G__38595 = function(props,value,label){
switch(arguments.length){
case 2:
return G__38595__2.call(this,props,value);
case 3:
return G__38595__3.call(this,props,value,label);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38595.cljs$core$IFn$_invoke$arity$2 = G__38595__2;
G__38595.cljs$core$IFn$_invoke$arity$3 = G__38595__3;
return G__38595;
})()
,null,"guitar.buttons/button");
guitar.buttons.toggle_button = rum.core.lazy_build(rum.core.build_defc,(function (props,on_value,off_value){
var attrs38602 = (function (){var G__38603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === true)?on_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38605 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38605.cljs$core$IFn$_invoke$arity$1 ? fexpr__38605.cljs$core$IFn$_invoke$arity$1(true) : fexpr__38605.call(null,true));
})], 0));
var G__38604 = on_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38603,G__38604) : guitar.buttons.button.call(null,G__38603,G__38604));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38602))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38602], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38602))?[daiquiri.interpreter.interpret((function (){var G__38609 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38611 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38611.cljs$core$IFn$_invoke$arity$1 ? fexpr__38611.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38611.call(null,false));
})], 0));
var G__38610 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38609,G__38610) : guitar.buttons.button.call(null,G__38609,G__38610));
})())]:[daiquiri.interpreter.interpret(attrs38602),daiquiri.interpreter.interpret((function (){var G__38615 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38617 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38617.cljs$core$IFn$_invoke$arity$1 ? fexpr__38617.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38617.call(null,false));
})], 0));
var G__38616 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38615,G__38616) : guitar.buttons.button.call(null,G__38615,G__38616));
})())]));
}),null,"guitar.buttons/toggle-button");
guitar.buttons.buttons = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__38629 = null;
var G__38629__2 = (function (props,values){
return daiquiri.interpreter.interpret((guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3(props,values,values) : guitar.buttons.buttons.call(null,props,values,values)));
});
var G__38629__3 = (function (props,values,labels){
var attrs38625 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38618_SHARP_){
return rum.core.with_key((function (){var G__38626 = props;
var G__38627 = p1__38618_SHARP_;
var G__38628 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(labels,p1__38618_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p1__38618_SHARP_;
}
})();
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$3(G__38626,G__38627,G__38628) : guitar.buttons.button.call(null,G__38626,G__38627,G__38628));
})(),p1__38618_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38625))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38625], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38625))?null:[daiquiri.interpreter.interpret(attrs38625)]));
});
G__38629 = function(props,values,labels){
switch(arguments.length){
case 2:
return G__38629__2.call(this,props,values);
case 3:
return G__38629__3.call(this,props,values,labels);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38629.cljs$core$IFn$_invoke$arity$2 = G__38629__2;
G__38629.cljs$core$IFn$_invoke$arity$3 = G__38629__3;
return G__38629;
})()
,null,"guitar.buttons/buttons");
guitar.buttons.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,selected,on_click,format){
var attrs38634 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__38635 = (index + (1));
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__38635) : selected.call(null,G__38635));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__38636 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__38636) : on_click.call(null,G__38636));
})], null),(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(value) : format.call(null,value))], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38634))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38634], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38634))?null:[daiquiri.interpreter.interpret(attrs38634)]));
}),null,"guitar.buttons/buttons-multi");
