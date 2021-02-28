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
var G__15155 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__15156 = G__15155;
var seq__15157 = cljs.core.seq(vec__15156);
var first__15158 = cljs.core.first(seq__15157);
var seq__15157__$1 = cljs.core.next(seq__15157);
var note = first__15158;
var notes = seq__15157__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__15155__$1 = G__15155;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__15168 = G__15155__$1;
var seq__15169 = cljs.core.seq(vec__15168);
var first__15170 = cljs.core.first(seq__15169);
var seq__15169__$1 = cljs.core.next(seq__15169);
var note__$1 = first__15170;
var notes__$1 = seq__15169__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__15177 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__15171 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15171) : in_scale_QMARK_.call(null,G__15171));
})())?note__$1:null));
var G__15178 = (skip__$2 - (1));
var G__15179 = nps__$2;
var G__15180 = notes__$1;
acc__$1 = G__15177;
skip__$1 = G__15178;
nps__$1 = G__15179;
G__15155__$1 = G__15180;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__15173 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15173) : in_scale_QMARK_.call(null,G__15173));
})():false))){
var G__15181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__15174 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15174) : in_scale_QMARK_.call(null,G__15174));
})())?note__$1:null));
var G__15182 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__15175 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__15175.cljs$core$IFn$_invoke$arity$1 ? fexpr__15175.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__15175.call(null,(100)));
})())?(4):(5)));
var G__15183 = notes_per_string;
var G__15184 = notes__$1;
acc__$1 = G__15181;
skip__$1 = G__15182;
nps__$1 = G__15183;
G__15155__$1 = G__15184;
continue;
} else {
if(cljs.core.truth_((function (){var G__15176 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15176) : in_scale_QMARK_.call(null,G__15176));
})())){
var G__15185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__15186 = skip__$2;
var G__15187 = (nps__$2 - (1));
var G__15188 = notes__$1;
acc__$1 = G__15185;
skip__$1 = G__15186;
nps__$1 = G__15187;
G__15155__$1 = G__15188;
continue;
} else {
var G__15189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__15190 = skip__$2;
var G__15191 = nps__$2;
var G__15192 = notes__$1;
acc__$1 = G__15189;
skip__$1 = G__15190;
nps__$1 = G__15191;
G__15155__$1 = G__15192;
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
var or__4126__auto__ = (function (){var fexpr__15194 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__15194.cljs$core$IFn$_invoke$arity$1 ? fexpr__15194.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__15194.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.notes_per_string,(3));
}
});
