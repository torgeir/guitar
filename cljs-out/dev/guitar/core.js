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
var G__14459 = arguments.length;
switch (G__14459) {
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
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$mode,(function (){var pred__14461 = cljs.core._EQ_;
var expr__14462 = guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_((pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2("guess",expr__14462) : pred__14461.call(null,"guess",expr__14462)))){
return cljs.core.cst$kw$guess;
} else {
if(cljs.core.truth_((pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2("explore",expr__14462) : pred__14461.call(null,"explore",expr__14462)))){
return cljs.core.cst$kw$explore;
} else {
return cljs.core.cst$kw$explore;
}
}
})(),cljs.core.cst$kw$guess,guitar.modes.guess.state,cljs.core.cst$kw$explore,guitar.modes.explore.state], null));
}
cljs.core.add_watch(guitar.core.state,cljs.core.cst$kw$mode,(function (_,___$1,___$2,p__14464){
var map__14465 = p__14464;
var map__14465__$1 = (((((!((map__14465 == null))))?(((((map__14465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14465):map__14465);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14465__$1,cljs.core.cst$kw$mode);
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mode));
}));
/**
 * Main component. Dispatches to other components based on the :mode of the state.
 */
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var mode_state = rum.core.cursor(state,mode);
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__14467_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$note,p1__14467_SHARP_], null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"buttons"},[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
}),'className':"button button--huge"},["Explore scales"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
}),'className':"button button--huge"},["Guess notes"])]),daiquiri.interpreter.interpret((function (){var fexpr__14490 = (function (){var pred__14491 = cljs.core._EQ_;
var expr__14492 = mode;
if(cljs.core.truth_((function (){var G__14494 = cljs.core.cst$kw$guess;
var G__14495 = expr__14492;
return (pred__14491.cljs$core$IFn$_invoke$arity$2 ? pred__14491.cljs$core$IFn$_invoke$arity$2(G__14494,G__14495) : pred__14491.call(null,G__14494,G__14495));
})())){
return guitar.modes.guess.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__14496 = cljs.core.cst$kw$explore;
var G__14497 = expr__14492;
return (pred__14491.cljs$core$IFn$_invoke$arity$2 ? pred__14491.cljs$core$IFn$_invoke$arity$2(G__14496,G__14497) : pred__14491.call(null,G__14496,G__14497));
})())){
return guitar.modes.explore.visualize_scale;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14492)].join('')));
}
}
})();
return (fexpr__14490.cljs$core$IFn$_invoke$arity$2 ? fexpr__14490.cljs$core$IFn$_invoke$arity$2(strings_notes,mode_state) : fexpr__14490.call(null,strings_notes,mode_state));
})())]);
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
