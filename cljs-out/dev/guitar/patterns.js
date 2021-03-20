// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.patterns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.setup');
guitar.patterns.zip = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.vector);
guitar.patterns.tuning_shifts = (function guitar$patterns$tuning_shifts(tuning){
var G__25855 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (string){
return (string * (guitar.setup.scale_length + (1)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tuning)));
var G__25856 = guitar.setup.tuning_distances(tuning);
return (guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2 ? guitar.patterns.zip.cljs$core$IFn$_invoke$arity$2(G__25855,G__25856) : guitar.patterns.zip.call(null,G__25855,G__25856));
});
guitar.patterns.find_string_offset = (function guitar$patterns$find_string_offset(tuning,n){
return cljs.core.last(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__25857_SHARP_){
return (n <= cljs.core.first(p1__25857_SHARP_));
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
var G__25861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__25862 = G__25861;
var seq__25863 = cljs.core.seq(vec__25862);
var first__25864 = cljs.core.first(seq__25863);
var seq__25863__$1 = cljs.core.next(seq__25863);
var note = first__25864;
var notes = seq__25863__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__25861__$1 = G__25861;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__25873 = G__25861__$1;
var seq__25874 = cljs.core.seq(vec__25873);
var first__25875 = cljs.core.first(seq__25874);
var seq__25874__$1 = cljs.core.next(seq__25874);
var note__$1 = first__25875;
var notes__$1 = seq__25874__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if(cljs.core.truth_((((skip__$2 > (0)))?(function (){var G__25877 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25877) : in_scale_QMARK_.call(null,G__25877));
})():false))){
var G__25881 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__25882 = (skip__$2 - (1));
var G__25883 = nps__$2;
var G__25884 = notes__$1;
acc__$1 = G__25881;
skip__$1 = G__25882;
nps__$1 = G__25883;
G__25861__$1 = G__25884;
continue;
} else {
if((skip__$2 > (0))){
var G__25885 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__25886 = (skip__$2 - (1));
var G__25887 = nps__$2;
var G__25888 = notes__$1;
acc__$1 = G__25885;
skip__$1 = G__25886;
nps__$1 = G__25887;
G__25861__$1 = G__25888;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__25879 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25879) : in_scale_QMARK_.call(null,G__25879));
})():false))){
var G__25889 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,note__$1);
var G__25890 = (guitar.setup.scale_length - guitar.patterns.find_string_offset(tuning,cljs.core.count(acc__$2)));
var G__25891 = notes_per_string;
var G__25892 = notes__$1;
acc__$1 = G__25889;
skip__$1 = G__25890;
nps__$1 = G__25891;
G__25861__$1 = G__25892;
continue;
} else {
if(cljs.core.truth_((function (){var G__25880 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25880) : in_scale_QMARK_.call(null,G__25880));
})())){
var G__25893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(note__$1) : format.call(null,note__$1)));
var G__25894 = skip__$2;
var G__25895 = (nps__$2 - (1));
var G__25896 = notes__$1;
acc__$1 = G__25893;
skip__$1 = G__25894;
nps__$1 = G__25895;
G__25861__$1 = G__25896;
continue;
} else {
var G__25897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__25898 = skip__$2;
var G__25899 = nps__$2;
var G__25900 = notes__$1;
acc__$1 = G__25897;
skip__$1 = G__25898;
nps__$1 = G__25899;
G__25861__$1 = G__25900;
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
var or__4126__auto__ = (function (){var fexpr__25902 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(2),tuning),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__25902.cljs$core$IFn$_invoke$arity$1 ? fexpr__25902.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__25902.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.patterns.notes_per_string,(3),tuning);
}
});
