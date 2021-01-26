// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.neck');
goog.require('guitar.notes');
goog.require('rum.core');
goog.require('guitar.unicode');
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,cljs.core.cycle(guitar.notes.notes),guitar.neck.scale_length);
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.neck.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.notes.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tuning,guitar.neck.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null)], null));
}
guitar.core.guitar_nut = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14256 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14256))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs14256], 0))):{'className':"guitar-nut"}),((cljs.core.map_QMARK_(attrs14256))?null:[daiquiri.interpreter.interpret(attrs14256)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14257 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14257))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs14257], 0))):{'className':"guitar-fret"}),((cljs.core.map_QMARK_(attrs14257))?null:[daiquiri.interpreter.interpret(attrs14257)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (visible,notes){
var attrs14262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14259_SHARP_,p2__14258_SHARP_){
return rum.core.with_key((guitar.core.guitar_fret.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_fret.cljs$core$IFn$_invoke$arity$1(p2__14258_SHARP_) : guitar.core.guitar_fret.call(null,p2__14258_SHARP_)),p1__14259_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly(guitar.unicode.nbsp)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),notes))),rum.core.with_key((function (){var G__14263 = (cljs.core.truth_(visible)?cljs.core.first(notes):guitar.unicode.nbsp);
return (guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1(G__14263) : guitar.core.guitar_nut.call(null,G__14263));
})(),"nut"));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14262))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14262], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14262))?null:[daiquiri.interpreter.interpret(attrs14262)]));
}),null,"guitar.core/guitar-string");
guitar.core.guitar = rum.core.lazy_build(rum.core.build_defc,(function (strings,state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$show_DASH_notes,cljs.core.not);
}),'className':"guitar"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14265_SHARP_,p2__14264_SHARP_){
return rum.core.with_key((function (){var G__14268 = cljs.core.cst$kw$show_DASH_notes.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var G__14269 = p2__14264_SHARP_;
return (guitar.core.guitar_string.cljs$core$IFn$_invoke$arity$2 ? guitar.core.guitar_string.cljs$core$IFn$_invoke$arity$2(G__14268,G__14269) : guitar.core.guitar_string.call(null,G__14268,G__14269));
})(),p1__14265_SHARP_);
}),strings))]),daiquiri.core.create_element("h3",{'onClick':(function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null));
}),'className':"guess center-text"},[["Locate ",guitar.notes.prefixed_note(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locate,cljs.core.cst$kw$note], null)))," on the ",guitar.notes.suffixed_number(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locate,cljs.core.cst$kw$string], null)))," string."].join('')])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guitar");
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var cursor = rum.core.cursor(state,mode);
var strings = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
var pred__14270 = cljs.core._EQ_;
var expr__14271 = mode;
if(cljs.core.truth_((function (){var G__14273 = cljs.core.cst$kw$guess;
var G__14274 = expr__14271;
return (pred__14270.cljs$core$IFn$_invoke$arity$2 ? pred__14270.cljs$core$IFn$_invoke$arity$2(G__14273,G__14274) : pred__14270.call(null,G__14273,G__14274));
})())){
return (guitar.core.guitar.cljs$core$IFn$_invoke$arity$2 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$2(strings,cursor) : guitar.core.guitar.call(null,strings,cursor));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/app");
guitar.core.mount = (function guitar$core$mount(){
var temp__5720__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return rum.core.mount((guitar.core.app.cljs$core$IFn$_invoke$arity$1 ? guitar.core.app.cljs$core$IFn$_invoke$arity$1(guitar.core.state) : guitar.core.app.call(null,guitar.core.state)),el);
} else {
return null;
}
});
guitar.core.mount();
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount();
});
