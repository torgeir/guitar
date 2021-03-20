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
var G__38635 = arguments.length;
switch (G__38635) {
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
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$theme,cljs.core.cst$kw$dark,cljs.core.cst$kw$mode,(function (){var pred__38637 = cljs.core._EQ_;
var expr__38638 = guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_((pred__38637.cljs$core$IFn$_invoke$arity$2 ? pred__38637.cljs$core$IFn$_invoke$arity$2("guess",expr__38638) : pred__38637.call(null,"guess",expr__38638)))){
return cljs.core.cst$kw$guess;
} else {
if(cljs.core.truth_((pred__38637.cljs$core$IFn$_invoke$arity$2 ? pred__38637.cljs$core$IFn$_invoke$arity$2("explore",expr__38638) : pred__38637.call(null,"explore",expr__38638)))){
return cljs.core.cst$kw$explore;
} else {
return cljs.core.cst$kw$explore;
}
}
})(),cljs.core.cst$kw$guess,guitar.modes.guess.state,cljs.core.cst$kw$explore,guitar.modes.explore.state], null));
}
cljs.core.add_watch(guitar.core.state,cljs.core.cst$kw$mode,(function (_,___$1,___$2,p__38640){
var map__38641 = p__38640;
var map__38641__$1 = (((((!((map__38641 == null))))?(((((map__38641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38641):map__38641);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38641__$1,cljs.core.cst$kw$mode);
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mode));
}));
guitar.core.cycle_theme = (function guitar$core$cycle_theme(v){
var pred__38643 = cljs.core._EQ_;
var expr__38644 = v;
if(cljs.core.truth_((function (){var G__38646 = cljs.core.cst$kw$light;
var G__38647 = expr__38644;
return (pred__38643.cljs$core$IFn$_invoke$arity$2 ? pred__38643.cljs$core$IFn$_invoke$arity$2(G__38646,G__38647) : pred__38643.call(null,G__38646,G__38647));
})())){
return cljs.core.cst$kw$dark;
} else {
if(cljs.core.truth_((function (){var G__38648 = cljs.core.cst$kw$dark;
var G__38649 = expr__38644;
return (pred__38643.cljs$core$IFn$_invoke$arity$2 ? pred__38643.cljs$core$IFn$_invoke$arity$2(G__38648,G__38649) : pred__38643.call(null,G__38648,G__38649));
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
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__38650_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$note,p1__38650_SHARP_], null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["theme--",cljs.core.name(theme)].join('')], null))},[daiquiri.core.create_element("div",{'className':"buttons"},[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
}),'className':"button button--huge"},["Explore scales"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
}),'className':"button button--huge"},["Guess notes"])]),daiquiri.interpreter.interpret((function (){var G__38682 = cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var G__38683 = strings_notes;
var G__38684 = mode_state;
var fexpr__38681 = (function (){var pred__38685 = cljs.core._EQ_;
var expr__38686 = mode;
if(cljs.core.truth_((function (){var G__38688 = cljs.core.cst$kw$guess;
var G__38689 = expr__38686;
return (pred__38685.cljs$core$IFn$_invoke$arity$2 ? pred__38685.cljs$core$IFn$_invoke$arity$2(G__38688,G__38689) : pred__38685.call(null,G__38688,G__38689));
})())){
return guitar.modes.guess.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__38690 = cljs.core.cst$kw$explore;
var G__38691 = expr__38686;
return (pred__38685.cljs$core$IFn$_invoke$arity$2 ? pred__38685.cljs$core$IFn$_invoke$arity$2(G__38690,G__38691) : pred__38685.call(null,G__38690,G__38691));
})())){
return guitar.modes.explore.visualize_scales;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38686)].join('')));
}
}
})();
return (fexpr__38681.cljs$core$IFn$_invoke$arity$3 ? fexpr__38681.cljs$core$IFn$_invoke$arity$3(G__38682,G__38683,G__38684) : fexpr__38681.call(null,G__38682,G__38683,G__38684));
})()),(function (){var attrs38655 = (function (){var G__38692 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,guitar.setup.tuning);
})], null);
var G__38693 = "6-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38692,G__38693) : guitar.buttons.button.call(null,G__38692,G__38693));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38655))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38655], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38655))?[daiquiri.interpreter.interpret((function (){var G__38696 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38697 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38696,G__38697) : guitar.buttons.button.call(null,G__38696,G__38697));
})()),daiquiri.interpreter.interpret((function (){var G__38700 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38701 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38700,G__38701) : guitar.buttons.button.call(null,G__38700,G__38701));
})())]:[daiquiri.interpreter.interpret(attrs38655),daiquiri.interpreter.interpret((function (){var G__38704 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38705 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38704,G__38705) : guitar.buttons.button.call(null,G__38704,G__38705));
})()),daiquiri.interpreter.interpret((function (){var G__38708 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38709 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38708,G__38709) : guitar.buttons.button.call(null,G__38708,G__38709));
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
