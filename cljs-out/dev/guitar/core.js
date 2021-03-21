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
goog.require('cognitect.transit');
guitar.core.state_writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
guitar.core.state_reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
guitar.core.state_str = (function guitar$core$state_str(state){
return encodeURIComponent(cognitect.transit.write(guitar.core.state_writer,state));
});
guitar.core.read_state_str = (function guitar$core$read_state_str(state_str){
return cognitect.transit.read(guitar.core.state_reader,decodeURIComponent(state_str));
});
guitar.core.nil_if_empty = (function guitar$core$nil_if_empty(s){
if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return s;
}
});
guitar.core.location_hash = (function guitar$core$location_hash(var_args){
var G__38814 = arguments.length;
switch (G__38814) {
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
return guitar.core.nil_if_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),location.hash)));
}));

(guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1 = (function (hash){
return (location.hash = hash);
}));

(guitar.core.location_hash.cljs$lang$maxFixedArity = 1);

if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var temp__5718__auto__ = guitar.core.location_hash.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5718__auto__)){
var hash = temp__5718__auto__;
return guitar.core.read_state_str(hash);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$theme,cljs.core.cst$kw$dark,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore,cljs.core.cst$kw$guess,guitar.modes.guess.state,cljs.core.cst$kw$explore,guitar.modes.explore.state], null);
}
})());
}
cljs.core.add_watch(guitar.core.state,cljs.core.cst$kw$mode,(function (_,___$1,___$2,state){
return setTimeout((function (){
return guitar.core.location_hash.cljs$core$IFn$_invoke$arity$1(guitar.core.state_str(state));
}));
}));
guitar.core.cycle_theme = (function guitar$core$cycle_theme(v){
var pred__38816 = cljs.core._EQ_;
var expr__38817 = v;
if(cljs.core.truth_((function (){var G__38819 = cljs.core.cst$kw$light;
var G__38820 = expr__38817;
return (pred__38816.cljs$core$IFn$_invoke$arity$2 ? pred__38816.cljs$core$IFn$_invoke$arity$2(G__38819,G__38820) : pred__38816.call(null,G__38819,G__38820));
})())){
return cljs.core.cst$kw$dark;
} else {
if(cljs.core.truth_((function (){var G__38821 = cljs.core.cst$kw$dark;
var G__38822 = expr__38817;
return (pred__38816.cljs$core$IFn$_invoke$arity$2 ? pred__38816.cljs$core$IFn$_invoke$arity$2(G__38821,G__38822) : pred__38816.call(null,G__38821,G__38822));
})())){
return cljs.core.cst$kw$light;
} else {
return cljs.core.cst$kw$dark;
}
}
});
/**
 * Finds notes of a string, starting from the provided note.
 */
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
/**
 * Main component. Dispatches to other components based on the :mode of the state.
 */
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var theme = cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var mode_state = rum.core.cursor(state,mode);
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__38823_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$note,p1__38823_SHARP_], null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["theme--",cljs.core.name(theme)].join('')], null))},[daiquiri.core.create_element("div",{'className':"buttons"},[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
}),'className':"button button--huge"},["Explore scales"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
}),'className':"button button--huge"},["Guess notes"])]),daiquiri.interpreter.interpret((function (){var G__38855 = cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var G__38856 = strings_notes;
var G__38857 = mode_state;
var fexpr__38854 = (function (){var pred__38858 = cljs.core._EQ_;
var expr__38859 = mode;
if(cljs.core.truth_((function (){var G__38861 = cljs.core.cst$kw$guess;
var G__38862 = expr__38859;
return (pred__38858.cljs$core$IFn$_invoke$arity$2 ? pred__38858.cljs$core$IFn$_invoke$arity$2(G__38861,G__38862) : pred__38858.call(null,G__38861,G__38862));
})())){
return guitar.modes.guess.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__38863 = cljs.core.cst$kw$explore;
var G__38864 = expr__38859;
return (pred__38858.cljs$core$IFn$_invoke$arity$2 ? pred__38858.cljs$core$IFn$_invoke$arity$2(G__38863,G__38864) : pred__38858.call(null,G__38863,G__38864));
})())){
return guitar.modes.explore.visualize_scales;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38859)].join('')));
}
}
})();
return (fexpr__38854.cljs$core$IFn$_invoke$arity$3 ? fexpr__38854.cljs$core$IFn$_invoke$arity$3(G__38855,G__38856,G__38857) : fexpr__38854.call(null,G__38855,G__38856,G__38857));
})()),(function (){var attrs38828 = (function (){var G__38865 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),guitar.setup.tuning))?"6-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,guitar.setup.tuning);
})], null);
var G__38866 = "6-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38865,G__38866) : guitar.buttons.button.call(null,G__38865,G__38866));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38828))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38828], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38828))?[daiquiri.interpreter.interpret((function (){var G__38869 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning))))?"7-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38870 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38869,G__38870) : guitar.buttons.button.call(null,G__38869,G__38870));
})()),daiquiri.interpreter.interpret((function (){var G__38873 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0)))))?"8-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38874 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38873,G__38874) : guitar.buttons.button.call(null,G__38873,G__38874));
})())]:[daiquiri.interpreter.interpret(attrs38828),daiquiri.interpreter.interpret((function (){var G__38877 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning))))?"7-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2("b",guitar.setup.tuning)));
})], null);
var G__38878 = "7-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38877,G__38878) : guitar.buttons.button.call(null,G__38877,G__38878));
})()),daiquiri.interpreter.interpret((function (){var G__38881 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0)))))?"8-string":null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$tuning,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("g","b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.setup.tuning], 0))));
})], null);
var G__38882 = "8-string";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38881,G__38882) : guitar.buttons.button.call(null,G__38881,G__38882));
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
