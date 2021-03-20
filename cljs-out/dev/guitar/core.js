// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.modes.explore');
goog.require('guitar.modes.guess');
goog.require('guitar.notes');
goog.require('guitar.setup');
goog.require('guitar.buttons');
goog.require('rum.core');
/**
 * Finds notes of a string, starting from the provided note.
 */
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
guitar.core.location_hash = (function guitar$core$location_hash(var_args){
var G__38689 = arguments.length;
switch (G__38689) {
case 0:
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),location.hash));
}));

(guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1 = (function (hash){
return (location.hash = hash);
}));

(guitar.core.location_hash.cljs$lang$maxFixedArity = 1);

if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$theme,cljs.core.cst$kw$dark,cljs.core.cst$kw$mode,(function (){var pred__38691 = cljs.core._EQ_;
var expr__38692 = guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_((pred__38691.cljs$core$IFn$_invoke$arity$2 ? pred__38691.cljs$core$IFn$_invoke$arity$2("guess",expr__38692) : pred__38691.call(null,"guess",expr__38692)))){
return cljs.core.cst$kw$guess;
} else {
if(cljs.core.truth_((pred__38691.cljs$core$IFn$_invoke$arity$2 ? pred__38691.cljs$core$IFn$_invoke$arity$2("explore",expr__38692) : pred__38691.call(null,"explore",expr__38692)))){
return cljs.core.cst$kw$explore;
} else {
return cljs.core.cst$kw$explore;
}
}
})(),cljs.core.cst$kw$guess,guitar.modes.guess.state,cljs.core.cst$kw$explore,guitar.modes.explore.state], null));
}
cljs.core.add_watch(guitar.core.state,cljs.core.cst$kw$mode,(function (_,___$1,___$2,p__38694){
var map__38695 = p__38694;
var map__38695__$1 = (((((!((map__38695 == null))))?(((((map__38695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38695):map__38695);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38695__$1,cljs.core.cst$kw$mode);
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mode));
}));
guitar.core.cycle_theme = (function guitar$core$cycle_theme(v){
var pred__38697 = cljs.core._EQ_;
var expr__38698 = v;
if(cljs.core.truth_((function (){var G__38700 = cljs.core.cst$kw$light;
var G__38701 = expr__38698;
return (pred__38697.cljs$core$IFn$_invoke$arity$2 ? pred__38697.cljs$core$IFn$_invoke$arity$2(G__38700,G__38701) : pred__38697.call(null,G__38700,G__38701));
})())){
return cljs.core.cst$kw$dark;
} else {
if(cljs.core.truth_((function (){var G__38702 = cljs.core.cst$kw$dark;
var G__38703 = expr__38698;
return (pred__38697.cljs$core$IFn$_invoke$arity$2 ? pred__38697.cljs$core$IFn$_invoke$arity$2(G__38702,G__38703) : pred__38697.call(null,G__38702,G__38703));
})())){
return cljs.core.cst$kw$light;
} else {
return cljs.core.cst$kw$dark;
}
}
});
/**
 * Main component. Dispatches to other components based on the :mode of the state.
 */
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var theme = cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var mode_state = rum.core.cursor(state,mode);
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__38704_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$note,p1__38704_SHARP_], null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["theme--",cljs.core.name(theme)].join('')], null))},[daiquiri.core.create_element("div",{'className':"buttons"},[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
}),'className':"button button--huge"},["Explore scales"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
}),'className':"button button--huge"},["Guess notes"])]),daiquiri.interpreter.interpret((function (){var G__38736 = cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var G__38737 = strings_notes;
var G__38738 = mode_state;
var fexpr__38735 = (function (){var pred__38739 = cljs.core._EQ_;
var expr__38740 = mode;
if(cljs.core.truth_((function (){var G__38742 = cljs.core.cst$kw$guess;
var G__38743 = expr__38740;
return (pred__38739.cljs$core$IFn$_invoke$arity$2 ? pred__38739.cljs$core$IFn$_invoke$arity$2(G__38742,G__38743) : pred__38739.call(null,G__38742,G__38743));
})())){
return guitar.modes.guess.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__38744 = cljs.core.cst$kw$explore;
var G__38745 = expr__38740;
return (pred__38739.cljs$core$IFn$_invoke$arity$2 ? pred__38739.cljs$core$IFn$_invoke$arity$2(G__38744,G__38745) : pred__38739.call(null,G__38744,G__38745));
})())){
return guitar.modes.explore.visualize_scales;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38740)].join('')));
}
}
})();
return (fexpr__38735.cljs$core$IFn$_invoke$arity$3 ? fexpr__38735.cljs$core$IFn$_invoke$arity$3(G__38736,G__38737,G__38738) : fexpr__38735.call(null,G__38736,G__38737,G__38738));
})()),(function (){var attrs38709 = (function (){var G__38746 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),guitar.setup.tuning))?"6-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,guitar.setup.tuning);
})], null);
var G__38747 = "6-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38746,G__38747) : guitar.buttons.button.call(null,G__38746,G__38747));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38709))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38709], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38709))?[daiquiri.interpreter.interpret((function (){var G__38750 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning))))?"7-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38751 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38750,G__38751) : guitar.buttons.button.call(null,G__38750,G__38751));
})()),daiquiri.interpreter.interpret((function (){var G__38754 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0)))))?"8-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38755 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38754,G__38755) : guitar.buttons.button.call(null,G__38754,G__38755));
})())]:[daiquiri.interpreter.interpret(attrs38709),daiquiri.interpreter.interpret((function (){var G__38758 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning))))?"7-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38759 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38758,G__38759) : guitar.buttons.button.call(null,G__38758,G__38759));
})()),daiquiri.interpreter.interpret((function (){var G__38762 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0)))))?"8-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38763 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38762,G__38763) : guitar.buttons.button.call(null,G__38762,G__38763));
})())]));
})(),null]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/app");
/**
 * Mounts the application to the dom.
 */
guitar.core.mount = (function guitar$core$mount(){
var temp__5720__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return rum.core.mount((guitar.core.app.cljs$core$IFn$_invoke$arity$1 ? guitar.core.app.cljs$core$IFn$_invoke$arity$1(guitar.core.state) : guitar.core.app.call(null,guitar.core.state)),el);
} else {
return null;
}
});
guitar.core.mount();
/**
 * Hook run after figwheel has reloaded.
 */
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount();
});
