// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.guitar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('clojure.string');
/**
 * A visible note on a fret.
 */
guitar.guitar.scale_note = rum.core.lazy_build(rum.core.build_defc,(function (p__24165){
var map__24166 = p__24165;
var map__24166__$1 = (((((!((map__24166 == null))))?(((((map__24166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24166):map__24166);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24166__$1,cljs.core.cst$kw$note);
var hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24166__$1,cljs.core.cst$kw$hl);
var emp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24166__$1,cljs.core.cst$kw$emp);
return daiquiri.core.create_element("div",{'data-note':clojure.string.trim(note),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-note",(cljs.core.truth_(hl)?[" scale-note--hl"," scale-note--hl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl),(cljs.core.truth_(emp)?" scale-note--hl-emp":null)].join(''):null)], null))},[daiquiri.interpreter.interpret(note)]);
}),null,"guitar.guitar/scale-note");
/**
 * A clickable guitar nut or fret.
 */
guitar.guitar.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (on_click,string_index,fret,notes){
return daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.seq(notes)){
var G__24170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(notes),cljs.core.cst$kw$fret,fret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string,string_index], 0));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__24170) : on_click.call(null,G__24170));
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((fret === (0)))?"guitar-nut":"guitar-fret")], null))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24169_SHARP_,p2__24168_SHARP_){
return rum.core.with_key(p2__24168_SHARP_,p1__24169_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.guitar.scale_note,notes)))]);
}),null,"guitar.guitar/guitar-fret");
/**
 * A guitar string, with clickable frets.
 */
guitar.guitar.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (on_fret_click,string_index,notes){
var attrs24173 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24172_SHARP_,p2__24171_SHARP_){
return rum.core.with_key(p2__24171_SHARP_,p1__24172_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.guitar.guitar_fret,on_fret_click,string_index),notes));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs24173))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs24173], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs24173))?null:[daiquiri.interpreter.interpret(attrs24173)]));
}),null,"guitar.guitar/guitar-string");
/**
 * A guitar, with clickable frets for each of the strings-notes
 */
guitar.guitar.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,on_fret_click,strings_notes){
return daiquiri.core.create_element("div",{'className':"guitar-container"},[(function (){var attrs24176 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs24176))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs24176], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs24176))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24175_SHARP_,p2__24174_SHARP_){
return rum.core.with_key(p2__24174_SHARP_,p1__24175_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]:[daiquiri.interpreter.interpret(attrs24176),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24175_SHARP_,p2__24174_SHARP_){
return rum.core.with_key(p2__24174_SHARP_,p1__24175_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]));
})()]);
}),null,"guitar.guitar/guitar");
