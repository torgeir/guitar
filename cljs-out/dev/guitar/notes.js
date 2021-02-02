// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.notes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.notes.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
guitar.notes.string_notes = (function guitar$notes$string_notes(notes,scale_length,start_note){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(scale_length,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,start_note),cljs.core.cycle(notes)));
});
guitar.notes.note_vowel_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["f",null,"e",null,"f#",null,"a",null,"a#",null], null), null);
guitar.notes.prefixed_note = (function guitar$notes$prefixed_note(note){
return [(cljs.core.truth_((guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(note) : guitar.notes.note_vowel_QMARK_.call(null,note)))?"an":"a")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note.toUpperCase())].join('');
});
guitar.notes.ordinal_suffixed_number = (function guitar$notes$ordinal_suffixed_number(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__13003 = cljs.core._EQ_;
var expr__13004 = (cljs.core.last(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_((pred__13003.cljs$core$IFn$_invoke$arity$2 ? pred__13003.cljs$core$IFn$_invoke$arity$2((1),expr__13004) : pred__13003.call(null,(1),expr__13004)))){
return "st";
} else {
if(cljs.core.truth_((pred__13003.cljs$core$IFn$_invoke$arity$2 ? pred__13003.cljs$core$IFn$_invoke$arity$2((2),expr__13004) : pred__13003.call(null,(2),expr__13004)))){
return "nd";
} else {
if(cljs.core.truth_((pred__13003.cljs$core$IFn$_invoke$arity$2 ? pred__13003.cljs$core$IFn$_invoke$arity$2((3),expr__13004) : pred__13003.call(null,(3),expr__13004)))){
return "rd";
} else {
return "th";
}
}
}
})()].join('');
});
