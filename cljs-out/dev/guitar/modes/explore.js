// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.guitar');
goog.require('rum.core');
guitar.modes.explore.state = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8)], null);
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__14348 = rum.core.react(state);
var map__14348__$1 = (((((!((map__14348 == null))))?(((((map__14348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14348):map__14348);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14348__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14348__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14348__$1,cljs.core.cst$kw$start_DASH_fret);
var in_scale_QMARK_ = cljs.core.set(guitar.notes.scale_notes(root,scale));
return React.createElement(React.Fragment,null,(function (){var attrs14391 = (function (){var G__14392 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14393 = (function (p1__14342_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__14342_SHARP_));
});
var G__14394 = (function (){var G__14396 = strings_notes;
var G__14397 = in_scale_QMARK_;
var G__14398 = start_fret;
var G__14399 = (function (p1__14343_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14343_SHARP_,cljs.core.cst$kw$hl,(1));
});
var fexpr__14395 = guitar.patterns.scale_pattern(scale);
return (fexpr__14395.cljs$core$IFn$_invoke$arity$4 ? fexpr__14395.cljs$core$IFn$_invoke$arity$4(G__14396,G__14397,G__14398,G__14399) : fexpr__14395.call(null,G__14396,G__14397,G__14398,G__14399));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14392,G__14393,G__14394) : guitar.guitar.guitar.call(null,G__14392,G__14393,G__14394));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14391))?daiquiri.interpreter.attributes(attrs14391):null),((cljs.core.map_QMARK_(attrs14391))?null:[daiquiri.interpreter.interpret(attrs14391)]));
})(),daiquiri.core.create_element("select",{'onChange':(function (p1__14344_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14344_SHARP_.currentTarget.value);
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14345_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14345_SHARP_], null),p1__14345_SHARP_],null));
}),guitar.notes.notes))]),daiquiri.core.create_element("select",{'value':cljs.core.name(scale),'onChange':(function (p1__14346_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14346_SHARP_.currentTarget.value));
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14347_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14347_SHARP_], null),p1__14347_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales))))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
