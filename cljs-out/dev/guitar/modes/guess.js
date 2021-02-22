// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.guess');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.guitar');
goog.require('guitar.notes');
goog.require('guitar.setup');
goog.require('guitar.unicode');
goog.require('rum.core');
/**
 * Returns a map with a random note on a random string.
 */
guitar.modes.guess.rand_note = (function guitar$modes$guess$rand_note(){
var string = cljs.core.rand_int(cljs.core.count(guitar.setup.tuning));
var notes_of_string = guitar.notes.string_notes(guitar.notes.notes,(guitar.setup.scale_length + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(guitar.setup.tuning),string));
var note = cljs.core.rand_nth(guitar.notes.notes);
var frets = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14271_SHARP_,p2__14270_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,p2__14270_SHARP_)){
return p1__14271_SHARP_;
} else {
return null;
}
}),notes_of_string);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,string,cljs.core.cst$kw$note,note,cljs.core.cst$kw$frets,cljs.core.set(frets)], null);
});
guitar.modes.guess.state = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.modes.guess.rand_note(),cljs.core.cst$kw$attempt,null], null);
guitar.modes.guess.conceal_note = (function guitar$modes$guess$conceal_note(note){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$note,guitar.unicode.nbsp);
});
/**
 * Text displayed suggesting what note to locate.
 */
guitar.modes.guess.locate_note_text = rum.core.lazy_build(rum.core.build_defc,(function (p__14272){
var map__14273 = p__14272;
var map__14273__$1 = (((((!((map__14273 == null))))?(((((map__14273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14273):map__14273);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14273__$1,cljs.core.cst$kw$note);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14273__$1,cljs.core.cst$kw$string);
return daiquiri.core.create_element("p",null,[["Locate ",guitar.notes.prefixed_note(note)," on the ",guitar.notes.ordinal_suffixed_number((string + (1)))," string."].join('')]);
}),null,"guitar.modes.guess/locate-note-text");
/**
 * A mode to guess where a note is located on a given string.
 */
guitar.modes.guess.guess_fretboard_notes = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var reset_state = (function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$locate,guitar.modes.guess.rand_note(),cljs.core.cst$kw$attempt,null], null));
});
var attempt = cljs.core.cst$kw$attempt.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var locate = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var attrs14294 = (function (){var G__14301 = cljs.core.PersistentArrayMap.EMPTY;
var G__14302 = (function (p1__14275_SHARP_){
if(cljs.core.truth_(attempt)){
return reset_state();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$attempt,p1__14275_SHARP_);
}
});
var G__14303 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (string,string_notes){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (fret,note){
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__14309 = cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(attempt);
var fexpr__14308 = cljs.core.cst$kw$frets.cljs$core$IFn$_invoke$arity$1(locate);
return (fexpr__14308.cljs$core$IFn$_invoke$arity$1 ? fexpr__14308.cljs$core$IFn$_invoke$arity$1(G__14309) : fexpr__14308.call(null,G__14309));
})();
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note),cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(locate))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(string,cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(attempt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(locate)], 0))));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$hl,(5));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(locate))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note),cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(locate))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$hl,(1));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(attempt))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(attempt))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$hl,(0));
} else {
return note;

}
}
}
}),string_notes);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((cljs.core.not(attempt))?guitar.modes.guess.conceal_note:cljs.core.identity)),strings_notes));
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14301,G__14302,G__14303) : guitar.guitar.guitar.call(null,G__14301,G__14302,G__14303));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14294))?daiquiri.interpreter.attributes(attrs14294):null),((cljs.core.map_QMARK_(attrs14294))?[(function (){var attrs14297 = (function (){var G__14310 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.modes.guess.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.modes.guess.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14310) : guitar.modes.guess.locate_note_text.call(null,G__14310));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14297))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14297], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14297))?[(cljs.core.truth_(attempt)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14297),(cljs.core.truth_(attempt)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]:[daiquiri.interpreter.interpret(attrs14294),(function (){var attrs14300 = (function (){var G__14311 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.modes.guess.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.modes.guess.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14311) : guitar.modes.guess.locate_note_text.call(null,G__14311));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14300))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14300], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14300))?[(cljs.core.truth_(attempt)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14300),(cljs.core.truth_(attempt)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.guess/guess-fretboard-notes");
