// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.patterns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.setup');
guitar.patterns.zip = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.vector);
guitar.patterns.tuning_shifts = (function guitar$patterns$tuning_shifts(tuning){
var G__24238 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (string){
return (string * (guitar.setup.scale_length + (1)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tuning)));
var G__24239 = guitar.setup.tuning_distances(tuning);
return (guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2 ? guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2(G__24238,G__24239) : guitar.patterns.zip.call(null,G__24238,G__24239));
});
guitar.patterns.find_string_offset = (function guitar$patterns$find_string_offset(tuning,n){
return cljs.core.last(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__24240_SHARP_){
return (n <= cljs.core.first(p1__24240_SHARP_));
}),cljs.core.reverse(guitar.patterns.tuning_shifts(tuning)))));
});
/**
 * Locates clusters of notes-per-string from strings-notes that are in the
 *   scale, starting fret-posision. These clusters represent well known finger
 *   patterns when playing guitar scales.
 */
guitar.patterns.notes_per_string = (function guitar$patterns$notes_per_string(notes_per_string,tuning,strings_notes,in_scale_QMARK_,fret_position,format){
return cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((guitar.setup.scale_length + (1)),(function (){var acc = cljs.core.PersistentVector.EMPTY;
var skip = fret_position;
var nps = notes_per_string;
var G__24244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__24245 = G__24244;
var seq__24246 = cljs.core.seq(vec__24245);
var first__24247 = cljs.core.first(seq__24246);
var seq__24246__$1 = cljs.core.next(seq__24246);
var note = first__24247;
var notes = seq__24246__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__24244__$1 = G__24244;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__24256 = G__24244__$1;
var seq__24257 = cljs.core.seq(vec__24256);
var first__24258 = cljs.core.first(seq__24257);
var seq__24257__$1 = cljs.core.next(seq__24257);
var note__$1 = first__24258;
var notes__$1 = seq__24257__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if(cljs.core.truth_((((skip__$2 > (0)))?(function (){var G__24260 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24260) : in_scale_QMARK_.call(null,G__24260));
})():false))){
var G__24264 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__24265 = (skip__$2 - (1));
var G__24266 = nps__$2;
var G__24267 = notes__$1;
acc__$1 = G__24264;
skip__$1 = G__24265;
nps__$1 = G__24266;
G__24244__$1 = G__24267;
continue;
} else {
if((skip__$2 > (0))){
var G__24268 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__24269 = (skip__$2 - (1));
var G__24270 = nps__$2;
var G__24271 = notes__$1;
acc__$1 = G__24268;
skip__$1 = G__24269;
nps__$1 = G__24270;
G__24244__$1 = G__24271;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__24262 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24262) : in_scale_QMARK_.call(null,G__24262));
})():false))){
var G__24272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__24273 = (guitar.setup.scale_length - guitar.patterns.find_string_offset(tuning,cljs.core.count(acc__$2)));
var G__24274 = notes_per_string;
var G__24275 = notes__$1;
acc__$1 = G__24272;
skip__$1 = G__24273;
nps__$1 = G__24274;
G__24244__$1 = G__24275;
continue;
} else {
if(cljs.core.truth_((function (){var G__24263 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24263) : in_scale_QMARK_.call(null,G__24263));
})())){
var G__24276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(note__$1) : format.call(null,note__$1)));
var G__24277 = skip__$2;
var G__24278 = (nps__$2 - (1));
var G__24279 = notes__$1;
acc__$1 = G__24276;
skip__$1 = G__24277;
nps__$1 = G__24278;
G__24244__$1 = G__24279;
continue;
} else {
var G__24280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__24281 = skip__$2;
var G__24282 = nps__$2;
var G__24283 = notes__$1;
acc__$1 = G__24280;
skip__$1 = G__24281;
nps__$1 = G__24282;
G__24244__$1 = G__24283;
continue;

}
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
guitar.patterns.scale_pattern = (function guitar$patterns$scale_pattern(tuning,scale){
var or__4126__auto__ = (function (){var fexpr__24285 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__24285.cljs$core$IFn$_invoke$arity$1 ? fexpr__24285.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__24285.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(3),tuning);
}
});
