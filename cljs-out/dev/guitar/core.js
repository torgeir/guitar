// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('rum.core');
guitar.core.nbsp = "\u00A0";
guitar.core.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
guitar.core.note_vowel_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["f",null,"e",null,"f#",null,"a",null,"a#",null], null), null);
guitar.core.prefixed_note = (function guitar$core$prefixed_note(note){
return [(cljs.core.truth_((guitar.core.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? guitar.core.note_vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(note) : guitar.core.note_vowel_QMARK_.call(null,note)))?"an":"a")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note.toUpperCase())].join('');
});
guitar.core.suffixed_number = (function guitar$core$suffixed_number(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__14245 = cljs.core._EQ_;
var expr__14246 = (cljs.core.last(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_((pred__14245.cljs$core$IFn$_invoke$arity$2 ? pred__14245.cljs$core$IFn$_invoke$arity$2((1),expr__14246) : pred__14245.call(null,(1),expr__14246)))){
return "st";
} else {
if(cljs.core.truth_((pred__14245.cljs$core$IFn$_invoke$arity$2 ? pred__14245.cljs$core$IFn$_invoke$arity$2((2),expr__14246) : pred__14245.call(null,(2),expr__14246)))){
return "nd";
} else {
if(cljs.core.truth_((pred__14245.cljs$core$IFn$_invoke$arity$2 ? pred__14245.cljs$core$IFn$_invoke$arity$2((3),expr__14246) : pred__14245.call(null,(3),expr__14246)))){
return "rd";
} else {
return "th";
}
}
}
})()].join('');
});
guitar.core.tuning = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","d","g","b","e"], null);
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.core.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.core.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tuning,guitar.core.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null)], null));
}
guitar.core.scale_length = (24);
guitar.core.string_notes = (function guitar$core$string_notes(notes,start_note){
var from = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,start_note),notes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14248_SHARP_,p2__14249_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14248_SHARP_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(from,p2__14249_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((guitar.core.scale_length + (1))));
});
guitar.core.get_app_element = (function guitar$core$get_app_element(){
return goog.dom.getElement("app");
});
guitar.core.guitar_nut = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14250 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14250))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs14250], 0))):{'className':"guitar-nut"}),((cljs.core.map_QMARK_(attrs14250))?null:[daiquiri.interpreter.interpret(attrs14250)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14251 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14251))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs14251], 0))):{'className':"guitar-fret"}),((cljs.core.map_QMARK_(attrs14251))?null:[daiquiri.interpreter.interpret(attrs14251)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (visible,notes){
var attrs14256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14253_SHARP_,p2__14252_SHARP_){
return rum.core.with_key((guitar.core.guitar_fret.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_fret.cljs$core$IFn$_invoke$arity$1(p2__14252_SHARP_) : guitar.core.guitar_fret.call(null,p2__14252_SHARP_)),["key-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14253_SHARP_)].join(''));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.core.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes))),rum.core.with_key((function (){var G__14257 = (cljs.core.truth_(visible)?cljs.core.first(notes):guitar.core.nbsp);
return (guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1(G__14257) : guitar.core.guitar_nut.call(null,G__14257));
})(),"key-nut"));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14256))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14256], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14256))?null:[daiquiri.interpreter.interpret(attrs14256)]));
}),null,"guitar.core/guitar-string");
guitar.core.guitar = rum.core.lazy_build(rum.core.build_defc,(function (){
var strings = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.string_notes,cljs.core.cycle(guitar.core.notes)),cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(guitar.core.state))));
var guess = rum.core.cursor(guitar.core.state,cljs.core.cst$kw$guess);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(guess,cljs.core.update,cljs.core.cst$kw$show_DASH_notes,cljs.core.not);
}),'className':"guitar"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14259_SHARP_,p2__14258_SHARP_){
return rum.core.with_key((function (){var G__14262 = cljs.core.cst$kw$show_DASH_notes.cljs$core$IFn$_invoke$arity$1(rum.core.react(guess));
var G__14263 = p2__14258_SHARP_;
return (guitar.core.guitar_string.cljs$core$IFn$_invoke$arity$2 ? guitar.core.guitar_string.cljs$core$IFn$_invoke$arity$2(G__14262,G__14263) : guitar.core.guitar_string.call(null,G__14262,G__14263));
})(),p1__14259_SHARP_);
}),strings))]),daiquiri.core.create_element("h3",{'onClick':(function (){
return cljs.core.reset_BANG_(guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null));
}),'className':"guess center-text"},[["Locate ",guitar.core.prefixed_note(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(guess),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locate,cljs.core.cst$kw$note], null)))," on the ",guitar.core.suffixed_number(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(guess),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locate,cljs.core.cst$kw$string], null)))," string."].join('')])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guitar");
guitar.core.mount = (function guitar$core$mount(el){
return rum.core.mount((guitar.core.guitar.cljs$core$IFn$_invoke$arity$0 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$0() : guitar.core.guitar.call(null)),el);
});
guitar.core.mount_app = (function guitar$core$mount_app(){
var temp__5720__auto__ = guitar.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return guitar.core.mount(el);
} else {
return null;
}
});
guitar.core.mount_app();
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount_app();
});
