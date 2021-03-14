// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.modes.explore');
goog.require('guitar.modes.guess');
goog.require('guitar.notes');
goog.require('guitar.setup');
goog.require('rum.core');
/**
 * Finds notes of a string, starting from the provided note.
 */
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
guitar.core.location_hash = (function guitar$core$location_hash(var_args){
var G__38586 = arguments.length;
switch (G__38586) {
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
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$theme,cljs.core.cst$kw$dark,cljs.core.cst$kw$mode,(function (){var pred__38588 = cljs.core._EQ_;
var expr__38589 = guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_((pred__38588.cljs$core$IFn$_invoke$arity$2 ? pred__38588.cljs$core$IFn$_invoke$arity$2("guess",expr__38589) : pred__38588.call(null,"guess",expr__38589)))){
return cljs.core.cst$kw$guess;
} else {
if(cljs.core.truth_((pred__38588.cljs$core$IFn$_invoke$arity$2 ? pred__38588.cljs$core$IFn$_invoke$arity$2("explore",expr__38589) : pred__38588.call(null,"explore",expr__38589)))){
return cljs.core.cst$kw$explore;
} else {
return cljs.core.cst$kw$explore;
}
}
})(),cljs.core.cst$kw$guess,guitar.modes.guess.state,cljs.core.cst$kw$explore,guitar.modes.explore.state], null));
}
cljs.core.add_watch(guitar.core.state,cljs.core.cst$kw$mode,(function (_,___$1,___$2,p__38591){
var map__38592 = p__38591;
var map__38592__$1 = (((((!((map__38592 == null))))?(((((map__38592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38592):map__38592);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38592__$1,cljs.core.cst$kw$mode);
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mode));
}));
guitar.core.cycle_theme = (function guitar$core$cycle_theme(v){
var pred__38594 = cljs.core._EQ_;
var expr__38595 = v;
if(cljs.core.truth_((function (){var G__38597 = cljs.core.cst$kw$light;
var G__38598 = expr__38595;
return (pred__38594.cljs$core$IFn$_invoke$arity$2 ? pred__38594.cljs$core$IFn$_invoke$arity$2(G__38597,G__38598) : pred__38594.call(null,G__38597,G__38598));
})())){
return cljs.core.cst$kw$dark;
} else {
if(cljs.core.truth_((function (){var G__38599 = cljs.core.cst$kw$dark;
var G__38600 = expr__38595;
return (pred__38594.cljs$core$IFn$_invoke$arity$2 ? pred__38594.cljs$core$IFn$_invoke$arity$2(G__38599,G__38600) : pred__38594.call(null,G__38599,G__38600));
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
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__38601_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$note,p1__38601_SHARP_], null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["theme--",cljs.core.name(theme)].join('')], null))},[daiquiri.core.create_element("div",{'className':"buttons"},[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
}),'className':"button button--huge"},["Explore scales"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
}),'className':"button button--huge"},["Guess notes"])]),daiquiri.interpreter.interpret((function (){var fexpr__38624 = (function (){var pred__38625 = cljs.core._EQ_;
var expr__38626 = mode;
if(cljs.core.truth_((function (){var G__38628 = cljs.core.cst$kw$guess;
var G__38629 = expr__38626;
return (pred__38625.cljs$core$IFn$_invoke$arity$2 ? pred__38625.cljs$core$IFn$_invoke$arity$2(G__38628,G__38629) : pred__38625.call(null,G__38628,G__38629));
})())){
return guitar.modes.guess.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__38630 = cljs.core.cst$kw$explore;
var G__38631 = expr__38626;
return (pred__38625.cljs$core$IFn$_invoke$arity$2 ? pred__38625.cljs$core$IFn$_invoke$arity$2(G__38630,G__38631) : pred__38625.call(null,G__38630,G__38631));
})())){
return guitar.modes.explore.visualize_scales;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38626)].join('')));
}
}
})();
return (fexpr__38624.cljs$core$IFn$_invoke$arity$2 ? fexpr__38624.cljs$core$IFn$_invoke$arity$2(strings_notes,mode_state) : fexpr__38624.call(null,strings_notes,mode_state));
})()),null]);
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
