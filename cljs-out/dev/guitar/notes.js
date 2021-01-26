// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.notes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
guitar.notes.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
guitar.notes.string_notes = (function guitar$notes$string_notes(notes,scale_length,start_note){
var from = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,start_note),notes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13000_SHARP_,p2__13001_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13000_SHARP_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(from,p2__13001_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((scale_length + (1))));
});
guitar.notes.note_vowel_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["f",null,"e",null,"f#",null,"a",null,"a#",null], null), null);
guitar.notes.prefixed_note = (function guitar$notes$prefixed_note(note){
return [(cljs.core.truth_((guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? guitar.notes.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(note) : guitar.notes.note_vowel_QMARK_.call(null,note)))?"an":"a")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note.toUpperCase())].join('');
});
guitar.notes.suffixed_number = (function guitar$notes$suffixed_number(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__13005 = cljs.core._EQ_;
var expr__13006 = (cljs.core.last(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_((pred__13005.cljs$core$IFn$_invoke$arity$2 ? pred__13005.cljs$core$IFn$_invoke$arity$2((1),expr__13006) : pred__13005.call(null,(1),expr__13006)))){
return "st";
} else {
if(cljs.core.truth_((pred__13005.cljs$core$IFn$_invoke$arity$2 ? pred__13005.cljs$core$IFn$_invoke$arity$2((2),expr__13006) : pred__13005.call(null,(2),expr__13006)))){
return "nd";
} else {
if(cljs.core.truth_((pred__13005.cljs$core$IFn$_invoke$arity$2 ? pred__13005.cljs$core$IFn$_invoke$arity$2((3),expr__13006) : pred__13005.call(null,(3),expr__13006)))){
return "rd";
} else {
return "th";
}
}
}
})()].join('');
});
