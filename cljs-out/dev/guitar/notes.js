// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.notes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Supported scales represented as semitone increments.
 */
guitar.notes.scales = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$major,"2212221"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minor,"2122122"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$harmonic_DASH_minor,"2122131"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$harmonic_DASH_major,"2212131"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$melodic_DASH_minor,"2122221"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minor_DASH_pentatonic,"32232"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$major_DASH_pentatonic,"22323"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$diminished_DASH_whole_DASH_half,"21212121"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$diminished_DASH_half_DASH_whole,"12121212"], null)], null);
/**
 * Named notes of the western c major scale.
 */
guitar.notes.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
guitar.notes.modes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ionian,cljs.core.cst$kw$dorian,cljs.core.cst$kw$phrygian,cljs.core.cst$kw$lydian,cljs.core.cst$kw$aeolian,cljs.core.cst$kw$mixolydian,cljs.core.cst$kw$locrian], null);
guitar.notes.shift_n = (function guitar$notes$shift_n(at,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_at(at,coll)));
});
guitar.notes.index_of = (function guitar$notes$index_of(coll,el){
return cljs.core.ffirst(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__13703_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,cljs.core.second(p1__13703_SHARP_));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
});
/**
 * Finds the notes for the type of scale, starting from the root.
 */
guitar.notes.scale_notes = (function guitar$notes$scale_notes(var_args){
var G__13705 = arguments.length;
switch (G__13705) {
case 2:
return guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$2 = (function (root,scale){
return guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,cljs.core.cst$kw$ionian);
}));

(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3 = (function (root,scale,mode){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,cljs.core.cycle(guitar.notes.notes)),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.notes.notes.indexOf(root)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.seq(guitar.notes.shift_n(guitar.notes.index_of(guitar.notes.modes,mode),(function (){var G__13706 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,guitar.notes.scales);
return (scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(G__13706) : scale.call(null,G__13706));
})())))))));
}));

(guitar.notes.scale_notes.cljs$lang$maxFixedArity = 3);

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__13711 = cljs.core._EQ_;
var expr__13712 = (cljs.core.last(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_((pred__13711.cljs$core$IFn$_invoke$arity$2 ? pred__13711.cljs$core$IFn$_invoke$arity$2((1),expr__13712) : pred__13711.call(null,(1),expr__13712)))){
return "st";
} else {
if(cljs.core.truth_((pred__13711.cljs$core$IFn$_invoke$arity$2 ? pred__13711.cljs$core$IFn$_invoke$arity$2((2),expr__13712) : pred__13711.call(null,(2),expr__13712)))){
return "nd";
} else {
if(cljs.core.truth_((pred__13711.cljs$core$IFn$_invoke$arity$2 ? pred__13711.cljs$core$IFn$_invoke$arity$2((3),expr__13712) : pred__13711.call(null,(3),expr__13712)))){
return "rd";
} else {
return "th";
}
}
}
})()].join('');
});
