// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.guitar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
/**
 * A visible note on a fret.
 */
guitar.guitar.scale_note = rum.core.lazy_build(rum.core.build_defc,(function (p__14965){
var map__14966 = p__14965;
var map__14966__$1 = (((((!((map__14966 == null))))?(((((map__14966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14966):map__14966);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14966__$1,cljs.core.cst$kw$note);
var hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14966__$1,cljs.core.cst$kw$hl);
if(cljs.core.truth_(note)){
return daiquiri.core.create_element("div",{'title':note,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-note",(cljs.core.truth_(hl)?["scale-note--hl scale-note--hl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl)].join(''):null)], null))},[daiquiri.interpreter.interpret(note)]);
} else {
return null;
}
}),null,"guitar.guitar/scale-note");
/**
 * A clickable guitar nut or fret.
 */
guitar.guitar.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (on_click,string_index,index,note){
return daiquiri.core.create_element("div",{'onClick':(function (){
var G__14968 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(note,cljs.core.cst$kw$string,string_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fret,index], 0));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__14968) : on_click.call(null,G__14968));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((index === (0)))?"guitar-nut":"guitar-fret")], null))},[(guitar.guitar.scale_note.cljs$core$IFn$_invoke$arity$1 ? guitar.guitar.scale_note.cljs$core$IFn$_invoke$arity$1(note) : guitar.guitar.scale_note.call(null,note))]);
}),null,"guitar.guitar/guitar-fret");
/**
 * A guitar string, with clickable frets.
 */
guitar.guitar.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (on_fret_click,string_index,notes){
var attrs14971 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14970_SHARP_,p2__14969_SHARP_){
return rum.core.with_key(p2__14969_SHARP_,p1__14970_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.guitar.guitar_fret,on_fret_click,string_index),notes));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14971))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14971], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14971))?null:[daiquiri.interpreter.interpret(attrs14971)]));
}),null,"guitar.guitar/guitar-string");
/**
 * A guitar, with clickable frets for each of the strings-notes
 */
guitar.guitar.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,on_fret_click,strings_notes){
var attrs14974 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14974))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs14974], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs14974))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14973_SHARP_,p2__14972_SHARP_){
return rum.core.with_key(p2__14972_SHARP_,p1__14973_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]:[daiquiri.interpreter.interpret(attrs14974),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14973_SHARP_,p2__14972_SHARP_){
return rum.core.with_key(p2__14972_SHARP_,p1__14973_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.guitar.guitar_string,on_fret_click),strings_notes)))]));
}),null,"guitar.guitar/guitar");
