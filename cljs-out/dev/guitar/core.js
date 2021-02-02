// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.setup');
goog.require('guitar.notes');
goog.require('rum.core');
goog.require('guitar.unicode');
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.setup.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.notes.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null)], null));
}
guitar.core.guitar_nut = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14254 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14254))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs14254], 0))):{'className':"guitar-nut"}),((cljs.core.map_QMARK_(attrs14254))?null:[daiquiri.interpreter.interpret(attrs14254)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14255 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14255))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs14255], 0))):{'className':"guitar-fret"}),((cljs.core.map_QMARK_(attrs14255))?null:[daiquiri.interpreter.interpret(attrs14255)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (visible,notes){
var attrs14260 = (function (){var G__14261 = (cljs.core.truth_(visible)?cljs.core.first(notes):guitar.unicode.nbsp);
return (guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1(G__14261) : guitar.core.guitar_nut.call(null,G__14261));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14260))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14260], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14260))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14257_SHARP_,p2__14256_SHARP_){
return rum.core.with_key(p2__14256_SHARP_,p1__14257_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.unicode.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes)))))]:[daiquiri.interpreter.interpret(attrs14260),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14257_SHARP_,p2__14256_SHARP_){
return rum.core.with_key(p2__14256_SHARP_,p1__14257_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.unicode.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes)))))]));
}),null,"guitar.core/guitar-string");
guitar.core.locate_note_text = rum.core.lazy_build(rum.core.build_defc,(function (p__14262){
var map__14263 = p__14262;
var map__14263__$1 = (((((!((map__14263 == null))))?(((((map__14263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14263):map__14263);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$note);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$string);
return daiquiri.core.create_element("p",null,[["Locate ",guitar.notes.prefixed_note(note)," on the ",guitar.notes.ordinal_suffixed_number(string)," string."].join('')]);
}),null,"guitar.core/locate-note-text");
guitar.core.guess_fretboard_notes = rum.core.lazy_build(rum.core.build_defc,(function (strings,state){
var notes_shown = cljs.core.cst$kw$show_DASH_notes.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var reset_state = (function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null));
});
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.truth_(notes_shown)){
return reset_state();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$show_DASH_notes,cljs.core.not);
}
}),'className':"guitar"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14266_SHARP_,p2__14265_SHARP_){
return rum.core.with_key(p2__14265_SHARP_,p1__14266_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,notes_shown),strings)))]),(function (){var attrs14269 = (function (){var G__14270 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14270) : guitar.core.locate_note_text.call(null,G__14270));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14269))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14269], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14269))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14269),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guess-fretboard-notes");
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var mode_state = rum.core.cursor(state,mode);
var strings = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
var pred__14271 = cljs.core._EQ_;
var expr__14272 = mode;
if(cljs.core.truth_((function (){var G__14274 = cljs.core.cst$kw$guess;
var G__14275 = expr__14272;
return (pred__14271.cljs$core$IFn$_invoke$arity$2 ? pred__14271.cljs$core$IFn$_invoke$arity$2(G__14274,G__14275) : pred__14271.call(null,G__14274,G__14275));
})())){
return (guitar.core.guess_fretboard_notes.cljs$core$IFn$_invoke$arity$2 ? guitar.core.guess_fretboard_notes.cljs$core$IFn$_invoke$arity$2(strings,mode_state) : guitar.core.guess_fretboard_notes.call(null,strings,mode_state));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/app");
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
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount();
});
