// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.notes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Supported scales represented as semitone increments.
 */
guitar.notes.scales = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$major,"2212221",cljs.core.cst$kw$melodic_DASH_minor,"2122221",cljs.core.cst$kw$minor,"2122122",cljs.core.cst$kw$minor_DASH_pentatonic,"32232",cljs.core.cst$kw$major_DASH_pentatonic,"22323",cljs.core.cst$kw$harmonic_DASH_minor,"2122131",cljs.core.cst$kw$diminished_DASH_whole_DASH_half,"21212121",cljs.core.cst$kw$diminished_DASH_half_DASH_whole,"12121212"], null);
/**
 * Named notes of the western c major scale.
 */
guitar.notes.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
/**
 * Finds the notes for the type of scale, starting from the root.
 */
guitar.notes.scale_notes = (function guitar$notes$scale_notes(root,scale){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,cljs.core.cycle(guitar.notes.notes)),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.notes.notes.indexOf(root)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.seq((scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(guitar.notes.scales) : scale.call(null,guitar.notes.scales))))))));
});
/**
 * Finds scale-length number of notes from a given start-note, representing the
 *   notes on a guitar string.
 */
guitar.notes.string_notes = (function guitar$notes$string_notes(notes,scale_length,start_note){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(scale_length,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,start_note),cljs.core.cycle(notes)));
});
/**
 * Set of notes that are pronounced as vowels.
 */
guitar.notes.note_vowel_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["f",null,"e",null,"f#",null,"a",null,"a#",null], null), null);
/**
 * Prefixes a note with a or an, depending on wether the note is considered a
 *   vowel.
 */
guitar.notes.prefixed_note = (function guitar$notes$prefixed_note(note){
return [(cljs.core.truth_((guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(note) : guitar.notes.note_vowel_QMARK_.call(null,note)))?"an":"a")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note.toUpperCase())].join('');
});
/**
 * Suffixes a number with its ordinal.
 */
guitar.notes.ordinal_suffixed_number = (function guitar$notes$ordinal_suffixed_number(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__13708 = cljs.core._EQ_;
var expr__13709 = (cljs.core.last(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_((pred__13708.cljs$core$IFn$_invoke$arity$2 ? pred__13708.cljs$core$IFn$_invoke$arity$2((1),expr__13709) : pred__13708.call(null,(1),expr__13709)))){
return "st";
} else {
if(cljs.core.truth_((pred__13708.cljs$core$IFn$_invoke$arity$2 ? pred__13708.cljs$core$IFn$_invoke$arity$2((2),expr__13709) : pred__13708.call(null,(2),expr__13709)))){
return "nd";
} else {
if(cljs.core.truth_((pred__13708.cljs$core$IFn$_invoke$arity$2 ? pred__13708.cljs$core$IFn$_invoke$arity$2((3),expr__13709) : pred__13708.call(null,(3),expr__13709)))){
return "rd";
} else {
return "th";
}
}
}
})()].join('');
});
