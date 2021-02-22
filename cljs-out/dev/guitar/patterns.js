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
var G__14317 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__14318 = G__14317;
var seq__14319 = cljs.core.seq(vec__14318);
var first__14320 = cljs.core.first(seq__14319);
var seq__14319__$1 = cljs.core.next(seq__14319);
var note = first__14320;
var notes = seq__14319__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__14317__$1 = G__14317;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__14330 = G__14317__$1;
var seq__14331 = cljs.core.seq(vec__14330);
var first__14332 = cljs.core.first(seq__14331);
var seq__14331__$1 = cljs.core.next(seq__14331);
var note__$1 = first__14332;
var notes__$1 = seq__14331__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__14339 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14333 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14333) : in_scale_QMARK_.call(null,G__14333));
})())?note__$1:null));
var G__14340 = (skip__$2 - (1));
var G__14341 = nps__$2;
var G__14342 = notes__$1;
acc__$1 = G__14339;
skip__$1 = G__14340;
nps__$1 = G__14341;
G__14317__$1 = G__14342;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__14335 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14335) : in_scale_QMARK_.call(null,G__14335));
})():false))){
var G__14343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14336 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14336) : in_scale_QMARK_.call(null,G__14336));
})())?note__$1:null));
var G__14344 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__14337 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__14337.cljs$core$IFn$_invoke$arity$1 ? fexpr__14337.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__14337.call(null,(100)));
})())?(4):(5)));
var G__14345 = notes_per_string;
var G__14346 = notes__$1;
acc__$1 = G__14343;
skip__$1 = G__14344;
nps__$1 = G__14345;
G__14317__$1 = G__14346;
continue;
} else {
if(cljs.core.truth_((function (){var G__14338 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14338) : in_scale_QMARK_.call(null,G__14338));
})())){
var G__14347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__14348 = skip__$2;
var G__14349 = (nps__$2 - (1));
var G__14350 = notes__$1;
acc__$1 = G__14347;
skip__$1 = G__14348;
nps__$1 = G__14349;
G__14317__$1 = G__14350;
continue;
} else {
var G__14351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__14352 = skip__$2;
var G__14353 = nps__$2;
var G__14354 = notes__$1;
acc__$1 = G__14351;
skip__$1 = G__14352;
nps__$1 = G__14353;
G__14317__$1 = G__14354;
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
var or__4126__auto__ = (function (){var fexpr__14356 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14356.cljs$core$IFn$_invoke$arity$1 ? fexpr__14356.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__14356.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(3));
}
});
