// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.setup');
goog.require('guitar.notes');
goog.require('rum.core');
goog.require('guitar.unicode');
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,guitar.setup.scale_length);
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.setup.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.notes.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null)], null));
}
guitar.core.guitar_nut = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14256 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14256))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs14256], 0))):{'className':"guitar-nut"}),((cljs.core.map_QMARK_(attrs14256))?null:[daiquiri.interpreter.interpret(attrs14256)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14257 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14257))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs14257], 0))):{'className':"guitar-fret"}),((cljs.core.map_QMARK_(attrs14257))?null:[daiquiri.interpreter.interpret(attrs14257)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (visible,notes){
var attrs14262 = (function (){var G__14263 = (cljs.core.truth_(visible)?cljs.core.first(notes):guitar.unicode.nbsp);
return (guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1(G__14263) : guitar.core.guitar_nut.call(null,G__14263));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14262))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14262], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14262))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14259_SHARP_,p2__14258_SHARP_){
return rum.core.with_key(p2__14258_SHARP_,p1__14259_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.unicode.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes)))))]:[daiquiri.interpreter.interpret(attrs14262),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14259_SHARP_,p2__14258_SHARP_){
return rum.core.with_key(p2__14258_SHARP_,p1__14259_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.unicode.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes)))))]));
}),null,"guitar.core/guitar-string");
guitar.core.locate_note_text = rum.core.lazy_build(rum.core.build_defc,(function (p__14264){
var map__14265 = p__14264;
var map__14265__$1 = (((((!((map__14265 == null))))?(((((map__14265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14265):map__14265);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14265__$1,cljs.core.cst$kw$note);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14265__$1,cljs.core.cst$kw$string);
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
}),'className':"guitar"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14268_SHARP_,p2__14267_SHARP_){
return rum.core.with_key(p2__14267_SHARP_,p1__14268_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,notes_shown),strings)))]),(function (){var attrs14271 = (function (){var G__14272 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14272) : guitar.core.locate_note_text.call(null,G__14272));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14271))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14271], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14271))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14271),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guess-fretboard-notes");
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var mode_state = rum.core.cursor(state,mode);
var strings = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
var attrs14283 = (function (){var pred__14286 = cljs.core._EQ_;
var expr__14287 = mode;
if(cljs.core.truth_((function (){var G__14289 = cljs.core.cst$kw$guess;
var G__14290 = expr__14287;
return (pred__14286.cljs$core$IFn$_invoke$arity$2 ? pred__14286.cljs$core$IFn$_invoke$arity$2(G__14289,G__14290) : pred__14286.call(null,G__14289,G__14290));
})())){
return (guitar.core.guess_fretboard_notes.cljs$core$IFn$_invoke$arity$2 ? guitar.core.guess_fretboard_notes.cljs$core$IFn$_invoke$arity$2(strings,mode_state) : guitar.core.guess_fretboard_notes.call(null,strings,mode_state));
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14283))?daiquiri.interpreter.attributes(attrs14283):null),((cljs.core.map_QMARK_(attrs14283))?[(function (){var attrs14284 = (function (){var repo_url = "https://github.com/torgeir/guitar/";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,repo_url], null),repo_url], null);
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs14284))?daiquiri.interpreter.attributes(attrs14284):null),((cljs.core.map_QMARK_(attrs14284))?null:[daiquiri.interpreter.interpret(attrs14284)]));
})()]:[daiquiri.interpreter.interpret(attrs14283),(function (){var attrs14285 = (function (){var repo_url = "https://github.com/torgeir/guitar/";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,repo_url], null),repo_url], null);
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs14285))?daiquiri.interpreter.attributes(attrs14285):null),((cljs.core.map_QMARK_(attrs14285))?null:[daiquiri.interpreter.interpret(attrs14285)]));
})()]));
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
