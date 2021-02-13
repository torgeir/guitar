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
var G__14300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__14301 = G__14300;
var seq__14302 = cljs.core.seq(vec__14301);
var first__14303 = cljs.core.first(seq__14302);
var seq__14302__$1 = cljs.core.next(seq__14302);
var note = first__14303;
var notes = seq__14302__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__14300__$1 = G__14300;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__14313 = G__14300__$1;
var seq__14314 = cljs.core.seq(vec__14313);
var first__14315 = cljs.core.first(seq__14314);
var seq__14314__$1 = cljs.core.next(seq__14314);
var note__$1 = first__14315;
var notes__$1 = seq__14314__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__14322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14316 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14316) : in_scale_QMARK_.call(null,G__14316));
})())?note__$1:null));
var G__14323 = (skip__$2 - (1));
var G__14324 = nps__$2;
var G__14325 = notes__$1;
acc__$1 = G__14322;
skip__$1 = G__14323;
nps__$1 = G__14324;
G__14300__$1 = G__14325;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__14318 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14318) : in_scale_QMARK_.call(null,G__14318));
})():false))){
var G__14326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14319 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14319) : in_scale_QMARK_.call(null,G__14319));
})())?note__$1:null));
var G__14327 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__14320 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__14320.cljs$core$IFn$_invoke$arity$1 ? fexpr__14320.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__14320.call(null,(100)));
})())?(4):(5)));
var G__14328 = notes_per_string;
var G__14329 = notes__$1;
acc__$1 = G__14326;
skip__$1 = G__14327;
nps__$1 = G__14328;
G__14300__$1 = G__14329;
continue;
} else {
if(cljs.core.truth_((function (){var G__14321 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14321) : in_scale_QMARK_.call(null,G__14321));
})())){
var G__14330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__14331 = skip__$2;
var G__14332 = (nps__$2 - (1));
var G__14333 = notes__$1;
acc__$1 = G__14330;
skip__$1 = G__14331;
nps__$1 = G__14332;
G__14300__$1 = G__14333;
continue;
} else {
var G__14334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__14335 = skip__$2;
var G__14336 = nps__$2;
var G__14337 = notes__$1;
acc__$1 = G__14334;
skip__$1 = G__14335;
nps__$1 = G__14336;
G__14300__$1 = G__14337;
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
var or__4126__auto__ = (function (){var fexpr__14339 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14339.cljs$core$IFn$_invoke$arity$1 ? fexpr__14339.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__14339.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(3));
}
});
