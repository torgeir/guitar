// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.guitar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('clojure.string');
/**
 * A visible note on a fret.
 */
guitar.guitar.scale_note = rum.core.lazy_build(rum.core.build_defc,(function (p__15096){
var map__15097 = p__15096;
var map__15097__$1 = (((((!((map__15097 == null))))?(((((map__15097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15097):map__15097);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15097__$1,cljs.core.cst$kw$note);
var hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15097__$1,cljs.core.cst$kw$hl);
if(cljs.core.truth_(note)){
return daiquiri.core.create_element("div",{'data-note':clojure.string.trim(note),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-note",(cljs.core.truth_(hl)?["scale-note--hl scale-note--hl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl)].join(''):null)], null))},[daiquiri.interpreter.interpret(note)]);
} else {
return null;
}
}),null,"guitar.guitar/scale-note");
/**
 * A clickable guitar nut or fret.
 */
guitar.guitar.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (on_click,string_index,fret,note){
return daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.truth_(note)){
var G__15099 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(note,cljs.core.cst$kw$fret,fret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string,string_index], 0));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__15099) : on_click.call(null,G__15099));
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((fret === (0)))?"guitar-nut":"guitar-fret")], null))},[(guitar.guitar.scale_note.cljs$core$IFn$_invoke$arity$1 ? guitar.guitar.scale_note.cljs$core$IFn$_invoke$arity$1(note) : guitar.guitar.scale_note.call(null,note))]);
}),null,"guitar.guitar/guitar-fret");
/**
 * A guitar string, with clickable frets.
 */
guitar.guitar.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (on_fret_click,string_index,notes){
var attrs15102 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__15101_SHARP_,p2__15100_SHARP_){
return rum.core.with_key(p2__15100_SHARP_,p1__15101_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.guitar.guitar_fret,on_fret_click,string_index),notes));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs15102))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs15102], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs15102))?null:[daiquiri.interpreter.interpret(attrs15102)]));
}),null,"guitar.guitar/guitar-string");
/**
 * A guitar, with clickable frets for each of the strings-notes
 */
guitar.guitar.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,on_fret_click,strings_notes){
return daiquiri.core.create_element("div",{'className':"guitar-container"},[(function (){var attrs15105 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs15105))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs15105], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs15105))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__15104_SHARP_,p2__15103_SHARP_){
return rum.core.with_key(p2__15103_SHARP_,p1__15104_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]:[daiquiri.interpreter.interpret(attrs15105),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__15104_SHARP_,p2__15103_SHARP_){
return rum.core.with_key(p2__15103_SHARP_,p1__15104_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]));
})()]);
}),null,"guitar.guitar/guitar");
