// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('rum.core');
guitar.core.nbsp = "\u00A0";
guitar.core.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"], null);
guitar.core.note_vowel_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["f",null,"e",null,"f#",null,"a",null,"a#",null], null), null);
guitar.core.prefixed_note = (function guitar$core$prefixed_note(note){
return [(cljs.core.truth_(guitar.core.note_vowel_QMARK_.call(null,note))?"an":"a")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note.toUpperCase())].join('');
});
guitar.core.suffixed_number = (function guitar$core$suffixed_number(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(function (){var pred__12046 = cljs.core._EQ_;
var expr__12047 = (cljs.core.last.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)) | (0));
if(cljs.core.truth_(pred__12046.call(null,(1),expr__12047))){
return "st";
} else {
if(cljs.core.truth_(pred__12046.call(null,(2),expr__12047))){
return "nd";
} else {
if(cljs.core.truth_(pred__12046.call(null,(3),expr__12047))){
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),(cljs.core.rand_int.call(null,cljs.core.count.call(null,guitar.core.tuning)) + (1)),new cljs.core.Keyword(null,"note","note",1426297904),cljs.core.rand_nth.call(null,guitar.core.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),guitar.core.tuning,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"guess","guess",-1820715867),new cljs.core.Keyword(null,"guess","guess",-1820715867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-notes","show-notes",-64742501),false,new cljs.core.Keyword(null,"locate","locate",-762069235),guitar.core.rand_note.call(null)], null)], null));
}
guitar.core.scale_length = (24);
guitar.core.string_notes = (function guitar$core$string_notes(notes,start_note){
var from = cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,start_note),notes);
return cljs.core.reduce.call(null,(function (p1__12049_SHARP_,p2__12050_SHARP_){
return cljs.core.conj.call(null,p1__12049_SHARP_,cljs.core.nth.call(null,from,p2__12050_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,(guitar.core.scale_length + (1))));
});
guitar.core.get_app_element = (function guitar$core$get_app_element(){
return goog.dom.getElement("app");
});
guitar.core.guitar_nut = rum.core.lazy_build.call(null,rum.core.build_defc,(function (note){
var attrs12051 = note;
return daiquiri.core.create_element.call(null,"div",((cljs.core.map_QMARK_.call(null,attrs12051))?daiquiri.interpreter.attributes.call(null,daiquiri.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs12051)):{'className':"guitar-nut"}),((cljs.core.map_QMARK_.call(null,attrs12051))?null:[daiquiri.interpreter.interpret.call(null,attrs12051)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build.call(null,rum.core.build_defc,(function (note){
var attrs12052 = note;
return daiquiri.core.create_element.call(null,"div",((cljs.core.map_QMARK_.call(null,attrs12052))?daiquiri.interpreter.attributes.call(null,daiquiri.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs12052)):{'className':"guitar-fret"}),((cljs.core.map_QMARK_.call(null,attrs12052))?null:[daiquiri.interpreter.interpret.call(null,attrs12052)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build.call(null,rum.core.build_defc,(function (visible,notes){
var attrs12055 = cljs.core.conj.call(null,cljs.core.map_indexed.call(null,(function (p1__12054_SHARP_,p2__12053_SHARP_){
return rum.core.with_key.call(null,guitar.core.guitar_fret.call(null,p2__12053_SHARP_),["key-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12054_SHARP_)].join(''));
}),cljs.core.map.call(null,(cljs.core.truth_(visible)?cljs.core.identity:cljs.core.constantly.call(null,guitar.core.nbsp)),cljs.core.drop.call(null,(1),notes))),rum.core.with_key.call(null,guitar.core.guitar_nut.call(null,(cljs.core.truth_(visible)?cljs.core.first.call(null,notes):guitar.core.nbsp)),"key-nut"));
return daiquiri.core.create_element.call(null,"div",((cljs.core.map_QMARK_.call(null,attrs12055))?daiquiri.interpreter.attributes.call(null,daiquiri.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs12055)):{'className':"guitar-string"}),((cljs.core.map_QMARK_.call(null,attrs12055))?null:[daiquiri.interpreter.interpret.call(null,attrs12055)]));
}),null,"guitar.core/guitar-string");
guitar.core.guitar = rum.core.lazy_build.call(null,rum.core.build_defc,(function (){
var strings = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,guitar.core.string_notes,cljs.core.cycle.call(null,guitar.core.notes)),new cljs.core.Keyword(null,"tuning","tuning",-48660925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guitar.core.state))));
var guess = rum.core.cursor.call(null,guitar.core.state,new cljs.core.Keyword(null,"guess","guess",-1820715867));
return daiquiri.core.create_element.call(null,"div",null,[daiquiri.core.create_element.call(null,"div",{'onClick':(function (){
return cljs.core.swap_BANG_.call(null,guess,cljs.core.update,new cljs.core.Keyword(null,"show-notes","show-notes",-64742501),cljs.core.not);
}),'className':"guitar"},[daiquiri.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__12057_SHARP_,p2__12056_SHARP_){
return rum.core.with_key.call(null,guitar.core.guitar_string.call(null,new cljs.core.Keyword(null,"show-notes","show-notes",-64742501).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,guess)),p2__12056_SHARP_),p1__12057_SHARP_);
}),strings))]),daiquiri.core.create_element.call(null,"h3",{'onClick':(function (){
return cljs.core.reset_BANG_.call(null,guess,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-notes","show-notes",-64742501),false,new cljs.core.Keyword(null,"locate","locate",-762069235),guitar.core.rand_note.call(null)], null));
}),'className':"guess center-text"},[["Locate ",guitar.core.prefixed_note.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,guess),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locate","locate",-762069235),new cljs.core.Keyword(null,"note","note",1426297904)], null)))," on the ",guitar.core.suffixed_number.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,guess),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locate","locate",-762069235),new cljs.core.Keyword(null,"string","string",-1989541586)], null)))," string."].join('')])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guitar");
guitar.core.mount = (function guitar$core$mount(el){
return rum.core.mount.call(null,guitar.core.guitar.call(null),el);
});
guitar.core.mount_app = (function guitar$core$mount_app(){
var temp__5720__auto__ = guitar.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return guitar.core.mount.call(null,el);
} else {
return null;
}
});
guitar.core.mount_app.call(null);
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount_app.call(null);
});
