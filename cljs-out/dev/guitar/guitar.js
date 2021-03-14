// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.guitar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('clojure.string');
/**
 * A visible note on a fret.
 */
guitar.guitar.scale_note = rum.core.lazy_build(rum.core.build_defc,(function (p__25797){
var map__25798 = p__25797;
var map__25798__$1 = (((((!((map__25798 == null))))?(((((map__25798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25798):map__25798);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,cljs.core.cst$kw$note);
var hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,cljs.core.cst$kw$hl);
return daiquiri.core.create_element("div",{'data-note':clojure.string.trim(note),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-note",(cljs.core.truth_(hl)?["scale-note--hl scale-note--hl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl)].join(''):null)], null))},[daiquiri.interpreter.interpret(note)]);
}),null,"guitar.guitar/scale-note");
/**
 * A clickable guitar nut or fret.
 */
guitar.guitar.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (on_click,string_index,fret,notes){
return daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.seq(notes)){
var G__25802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(notes),cljs.core.cst$kw$fret,fret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string,string_index], 0));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__25802) : on_click.call(null,G__25802));
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((fret === (0)))?"guitar-nut":"guitar-fret")], null))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25801_SHARP_,p2__25800_SHARP_){
return rum.core.with_key(p2__25800_SHARP_,p1__25801_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.guitar.scale_note,notes)))]);
}),null,"guitar.guitar/guitar-fret");
/**
 * A guitar string, with clickable frets.
 */
guitar.guitar.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (on_fret_click,string_index,notes){
var attrs25805 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25804_SHARP_,p2__25803_SHARP_){
return rum.core.with_key(p2__25803_SHARP_,p1__25804_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.guitar.guitar_fret,on_fret_click,string_index),notes));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs25805))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs25805], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs25805))?null:[daiquiri.interpreter.interpret(attrs25805)]));
}),null,"guitar.guitar/guitar-string");
/**
 * A guitar, with clickable frets for each of the strings-notes
 */
guitar.guitar.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,on_fret_click,strings_notes){
return daiquiri.core.create_element("div",{'className':"guitar-container"},[(function (){var attrs25808 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs25808))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs25808], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs25808))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25807_SHARP_,p2__25806_SHARP_){
return rum.core.with_key(p2__25806_SHARP_,p1__25807_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]:[daiquiri.interpreter.interpret(attrs25808),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25807_SHARP_,p2__25806_SHARP_){
return rum.core.with_key(p2__25806_SHARP_,p1__25807_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]));
})()]);
}),null,"guitar.guitar/guitar");
