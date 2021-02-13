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
var map__14365 = rum.core.react(state);
var map__14365__$1 = (((((!((map__14365 == null))))?(((((map__14365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14365):map__14365);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$start_DASH_fret);
var in_scale_QMARK_ = cljs.core.set(guitar.notes.scale_notes(root,scale));
return React.createElement(React.Fragment,null,(function (){var attrs14408 = (function (){var G__14409 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14410 = (function (p1__14359_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__14359_SHARP_));
});
var G__14411 = (function (){var G__14413 = strings_notes;
var G__14414 = in_scale_QMARK_;
var G__14415 = start_fret;
var G__14416 = (function (p1__14360_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14360_SHARP_,cljs.core.cst$kw$hl,(4));
});
var fexpr__14412 = guitar.patterns.scale_pattern(scale);
return (fexpr__14412.cljs$core$IFn$_invoke$arity$4 ? fexpr__14412.cljs$core$IFn$_invoke$arity$4(G__14413,G__14414,G__14415,G__14416) : fexpr__14412.call(null,G__14413,G__14414,G__14415,G__14416));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14409,G__14410,G__14411) : guitar.guitar.guitar.call(null,G__14409,G__14410,G__14411));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14408))?daiquiri.interpreter.attributes(attrs14408):null),((cljs.core.map_QMARK_(attrs14408))?null:[daiquiri.interpreter.interpret(attrs14408)]));
})(),daiquiri.core.create_element("select",{'onChange':(function (p1__14361_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14361_SHARP_.currentTarget.value);
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14362_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14362_SHARP_], null),p1__14362_SHARP_],null));
}),guitar.notes.notes))]),daiquiri.core.create_element("select",{'value':cljs.core.name(scale),'onChange':(function (p1__14363_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14363_SHARP_.currentTarget.value));
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14364_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14364_SHARP_], null),p1__14364_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales))))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
