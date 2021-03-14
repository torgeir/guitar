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
var G__15094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__15095 = G__15094;
var seq__15096 = cljs.core.seq(vec__15095);
var first__15097 = cljs.core.first(seq__15096);
var seq__15096__$1 = cljs.core.next(seq__15096);
var note = first__15097;
var notes = seq__15096__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__15094__$1 = G__15094;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__15107 = G__15094__$1;
var seq__15108 = cljs.core.seq(vec__15107);
var first__15109 = cljs.core.first(seq__15108);
var seq__15108__$1 = cljs.core.next(seq__15108);
var note__$1 = first__15109;
var notes__$1 = seq__15108__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__15116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__15110 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15110) : in_scale_QMARK_.call(null,G__15110));
})())?note__$1:null));
var G__15117 = (skip__$2 - (1));
var G__15118 = nps__$2;
var G__15119 = notes__$1;
acc__$1 = G__15116;
skip__$1 = G__15117;
nps__$1 = G__15118;
G__15094__$1 = G__15119;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__15112 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15112) : in_scale_QMARK_.call(null,G__15112));
})():false))){
var G__15120 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__15113 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15113) : in_scale_QMARK_.call(null,G__15113));
})())?note__$1:null));
var G__15121 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__15114 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__15114.cljs$core$IFn$_invoke$arity$1 ? fexpr__15114.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__15114.call(null,(100)));
})())?(4):(5)));
var G__15122 = notes_per_string;
var G__15123 = notes__$1;
acc__$1 = G__15120;
skip__$1 = G__15121;
nps__$1 = G__15122;
G__15094__$1 = G__15123;
continue;
} else {
if(cljs.core.truth_((function (){var G__15115 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15115) : in_scale_QMARK_.call(null,G__15115));
})())){
var G__15124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__15125 = skip__$2;
var G__15126 = (nps__$2 - (1));
var G__15127 = notes__$1;
acc__$1 = G__15124;
skip__$1 = G__15125;
nps__$1 = G__15126;
G__15094__$1 = G__15127;
continue;
} else {
var G__15128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__15129 = skip__$2;
var G__15130 = nps__$2;
var G__15131 = notes__$1;
acc__$1 = G__15128;
skip__$1 = G__15129;
nps__$1 = G__15130;
G__15094__$1 = G__15131;
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
var or__4126__auto__ = (function (){var fexpr__15133 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__15133.cljs$core$IFn$_invoke$arity$1 ? fexpr__15133.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__15133.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(3));
}
});
