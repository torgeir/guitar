// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
guitar.buttons.title_case = (function guitar$buttons$title_case(p__38605){
var vec__38606 = p__38605;
var seq__38607 = cljs.core.seq(vec__38606);
var first__38608 = cljs.core.first(seq__38607);
var seq__38607__$1 = cljs.core.next(seq__38607);
var fst = first__38608;
var rst = seq__38607__$1;
if(cljs.core.truth_(fst)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,fst.toUpperCase(),rst);
} else {
return "";
}
});
guitar.buttons.button = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__38610 = null;
var G__38610__2 = (function (props,value){
return daiquiri.interpreter.interpret((guitar.buttons.button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$3(props,value,value) : guitar.buttons.button.call(null,props,value,value)));
});
var G__38610__3 = (function (props,value,label){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__38609 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38609.cljs$core$IFn$_invoke$arity$1 ? fexpr__38609.cljs$core$IFn$_invoke$arity$1(value) : fexpr__38609.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return " ";
}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)].join('')], null))},[daiquiri.interpreter.interpret(guitar.buttons.title_case(label))]);
});
G__38610 = function(props,value,label){
switch(arguments.length){
case 2:
return G__38610__2.call(this,props,value);
case 3:
return G__38610__3.call(this,props,value,label);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38610.cljs$core$IFn$_invoke$arity$2 = G__38610__2;
G__38610.cljs$core$IFn$_invoke$arity$3 = G__38610__3;
return G__38610;
})()
,null,"guitar.buttons/button");
guitar.buttons.toggle_button = rum.core.lazy_build(rum.core.build_defc,(function (props,on_value,off_value){
var attrs38617 = (function (){var G__38618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === true)?on_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38620 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38620.cljs$core$IFn$_invoke$arity$1 ? fexpr__38620.cljs$core$IFn$_invoke$arity$1(true) : fexpr__38620.call(null,true));
})], 0));
var G__38619 = on_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38618,G__38619) : guitar.buttons.button.call(null,G__38618,G__38619));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38617))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38617], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38617))?[daiquiri.interpreter.interpret((function (){var G__38624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38626 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38626.cljs$core$IFn$_invoke$arity$1 ? fexpr__38626.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38626.call(null,false));
})], 0));
var G__38625 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38624,G__38625) : guitar.buttons.button.call(null,G__38624,G__38625));
})())]:[daiquiri.interpreter.interpret(attrs38617),daiquiri.interpreter.interpret((function (){var G__38630 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,((cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props) === false)?off_value:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__38632 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__38632.cljs$core$IFn$_invoke$arity$1 ? fexpr__38632.cljs$core$IFn$_invoke$arity$1(false) : fexpr__38632.call(null,false));
})], 0));
var G__38631 = off_value;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38630,G__38631) : guitar.buttons.button.call(null,G__38630,G__38631));
})())]));
}),null,"guitar.buttons/toggle-button");
guitar.buttons.buttons = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__38644 = null;
var G__38644__2 = (function (props,values){
return daiquiri.interpreter.interpret((guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3(props,values,values) : guitar.buttons.buttons.call(null,props,values,values)));
});
var G__38644__3 = (function (props,values,labels){
var attrs38640 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38633_SHARP_){
return rum.core.with_key((function (){var G__38641 = props;
var G__38642 = p1__38633_SHARP_;
var G__38643 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(labels,p1__38633_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p1__38633_SHARP_;
}
})();
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$3(G__38641,G__38642,G__38643) : guitar.buttons.button.call(null,G__38641,G__38642,G__38643));
})(),p1__38633_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38640))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38640], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38640))?null:[daiquiri.interpreter.interpret(attrs38640)]));
});
G__38644 = function(props,values,labels){
switch(arguments.length){
case 2:
return G__38644__2.call(this,props,values);
case 3:
return G__38644__3.call(this,props,values,labels);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38644.cljs$core$IFn$_invoke$arity$2 = G__38644__2;
G__38644.cljs$core$IFn$_invoke$arity$3 = G__38644__3;
return G__38644;
})()
,null,"guitar.buttons/buttons");
guitar.buttons.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,selected,on_click,format){
var attrs38649 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__38650 = (index + (1));
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__38650) : selected.call(null,G__38650));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__38651 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__38651) : on_click.call(null,G__38651));
})], null),(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(value) : format.call(null,value))], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38649))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38649], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38649))?null:[daiquiri.interpreter.interpret(attrs38649)]));
}),null,"guitar.buttons/buttons-multi");
