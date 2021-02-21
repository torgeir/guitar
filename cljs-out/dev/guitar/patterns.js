// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.patterns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.setup');
/**
 * Locates clusters of notes-per-string from strings-notes that are in the
 *   scale, starting fret-posision. These clusters represent well known finger
 *   patterns when playing guitar scales.
 */
guitar.patterns.notes_per_string = (function guitar$patterns$notes_per_string(notes_per_string,strings_notes,in_scale_QMARK_,fret_position,format_scale_note){
return cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((guitar.setup.scale_length + (1)),(function (){var acc = cljs.core.PersistentVector.EMPTY;
var skip = fret_position;
var nps = notes_per_string;
var G__17020 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__17021 = G__17020;
var seq__17022 = cljs.core.seq(vec__17021);
var first__17023 = cljs.core.first(seq__17022);
var seq__17022__$1 = cljs.core.next(seq__17022);
var note = first__17023;
var notes = seq__17022__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__17020__$1 = G__17020;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__17033 = G__17020__$1;
var seq__17034 = cljs.core.seq(vec__17033);
var first__17035 = cljs.core.first(seq__17034);
var seq__17034__$1 = cljs.core.next(seq__17034);
var note__$1 = first__17035;
var notes__$1 = seq__17034__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__17042 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__17036 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17036) : in_scale_QMARK_.call(null,G__17036));
})())?note__$1:null));
var G__17043 = (skip__$2 - (1));
var G__17044 = nps__$2;
var G__17045 = notes__$1;
acc__$1 = G__17042;
skip__$1 = G__17043;
nps__$1 = G__17044;
G__17020__$1 = G__17045;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__17038 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17038) : in_scale_QMARK_.call(null,G__17038));
})():false))){
var G__17046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__17039 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17039) : in_scale_QMARK_.call(null,G__17039));
})())?note__$1:null));
var G__17047 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__17040 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__17040.cljs$core$IFn$_invoke$arity$1 ? fexpr__17040.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__17040.call(null,(100)));
})())?(4):(5)));
var G__17048 = notes_per_string;
var G__17049 = notes__$1;
acc__$1 = G__17046;
skip__$1 = G__17047;
nps__$1 = G__17048;
G__17020__$1 = G__17049;
continue;
} else {
if(cljs.core.truth_((function (){var G__17041 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17041) : in_scale_QMARK_.call(null,G__17041));
})())){
var G__17050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__17051 = skip__$2;
var G__17052 = (nps__$2 - (1));
var G__17053 = notes__$1;
acc__$1 = G__17050;
skip__$1 = G__17051;
nps__$1 = G__17052;
G__17020__$1 = G__17053;
continue;
} else {
var G__17054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__17055 = skip__$2;
var G__17056 = nps__$2;
var G__17057 = notes__$1;
acc__$1 = G__17054;
skip__$1 = G__17055;
nps__$1 = G__17056;
G__17020__$1 = G__17057;
continue;

}
}
}
}
break;
}
})()));
});
/**
 * Represents the type of scale pattern often used for this kind of scale, e.g.
 *   two note per string or three note per string.
 */
guitar.patterns.scale_pattern = (function guitar$patterns$scale_pattern(scale){
var or__4126__auto__ = (function (){var fexpr__17059 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__17059.cljs$core$IFn$_invoke$arity$1 ? fexpr__17059.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__17059.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(3));
}
});
