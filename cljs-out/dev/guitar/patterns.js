// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.patterns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.setup');
guitar.patterns.zip = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.vector);
guitar.patterns.tuning_shifts = (function guitar$patterns$tuning_shifts(tuning){
var G__24223 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (string){
return (string * (guitar.setup.scale_length + (1)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tuning)));
var G__24224 = guitar.setup.tuning_distances(tuning);
return (guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2 ? guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2(G__24223,G__24224) : guitar.patterns.zip.call(null,G__24223,G__24224));
});
guitar.patterns.find_string_offset = (function guitar$patterns$find_string_offset(tuning,n){
return cljs.core.last(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__24225_SHARP_){
return (n <= cljs.core.first(p1__24225_SHARP_));
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
var G__24229 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__24230 = G__24229;
var seq__24231 = cljs.core.seq(vec__24230);
var first__24232 = cljs.core.first(seq__24231);
var seq__24231__$1 = cljs.core.next(seq__24231);
var note = first__24232;
var notes = seq__24231__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__24229__$1 = G__24229;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__24241 = G__24229__$1;
var seq__24242 = cljs.core.seq(vec__24241);
var first__24243 = cljs.core.first(seq__24242);
var seq__24242__$1 = cljs.core.next(seq__24242);
var note__$1 = first__24243;
var notes__$1 = seq__24242__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if(cljs.core.truth_((((skip__$2 > (0)))?(function (){var G__24245 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24245) : in_scale_QMARK_.call(null,G__24245));
})():false))){
var G__24249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__24250 = (skip__$2 - (1));
var G__24251 = nps__$2;
var G__24252 = notes__$1;
acc__$1 = G__24249;
skip__$1 = G__24250;
nps__$1 = G__24251;
G__24229__$1 = G__24252;
continue;
} else {
if((skip__$2 > (0))){
var G__24253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__24254 = (skip__$2 - (1));
var G__24255 = nps__$2;
var G__24256 = notes__$1;
acc__$1 = G__24253;
skip__$1 = G__24254;
nps__$1 = G__24255;
G__24229__$1 = G__24256;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__24247 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24247) : in_scale_QMARK_.call(null,G__24247));
})():false))){
var G__24257 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__24258 = (guitar.setup.scale_length - guitar.patterns.find_string_offset(tuning,cljs.core.count(acc__$2)));
var G__24259 = notes_per_string;
var G__24260 = notes__$1;
acc__$1 = G__24257;
skip__$1 = G__24258;
nps__$1 = G__24259;
G__24229__$1 = G__24260;
continue;
} else {
if(cljs.core.truth_((function (){var G__24248 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24248) : in_scale_QMARK_.call(null,G__24248));
})())){
var G__24261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(note__$1) : format.call(null,note__$1)));
var G__24262 = skip__$2;
var G__24263 = (nps__$2 - (1));
var G__24264 = notes__$1;
acc__$1 = G__24261;
skip__$1 = G__24262;
nps__$1 = G__24263;
G__24229__$1 = G__24264;
continue;
} else {
var G__24265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__24266 = skip__$2;
var G__24267 = nps__$2;
var G__24268 = notes__$1;
acc__$1 = G__24265;
skip__$1 = G__24266;
nps__$1 = G__24267;
G__24229__$1 = G__24268;
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
var or__4126__auto__ = (function (){var fexpr__24270 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__24270.cljs$core$IFn$_invoke$arity$1 ? fexpr__24270.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__24270.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(3),tuning);
}
});
