// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.guitar');
goog.require('rum.core');
guitar.modes.explore.state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.indexed_map = (function guitar$modes$explore$indexed_map(set){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.first),cljs.core.second),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,set)))));
});
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight));
var note_colors = cljs.core.select_keys(guitar.modes.explore.indexed_map(scale_notes),cljs.core.set(keys));
return (note_colors.cljs$core$IFn$_invoke$arity$2 ? note_colors.cljs$core$IFn$_invoke$arity$2(note,default$) : note_colors.call(null,note,default$));
});
guitar.modes.explore.toggle_in = (function guitar$modes$explore$toggle_in(el,a_set){
var fexpr__14359 = (cljs.core.truth_((a_set.cljs$core$IFn$_invoke$arity$1 ? a_set.cljs$core$IFn$_invoke$arity$1(el) : a_set.call(null,el)))?cljs.core.disj:cljs.core.conj);
return (fexpr__14359.cljs$core$IFn$_invoke$arity$2 ? fexpr__14359.cljs$core$IFn$_invoke$arity$2(a_set,el) : fexpr__14359.call(null,a_set,el));
});
guitar.modes.explore.button = rum.core.lazy_build(rum.core.build_defc,(function (props,value){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__14360 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__14360.cljs$core$IFn$_invoke$arity$1 ? fexpr__14360.cljs$core$IFn$_invoke$arity$1(value) : fexpr__14360.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)], null))},[daiquiri.interpreter.interpret(value)]);
}),null,"guitar.modes.explore/button");
guitar.modes.explore.buttons = rum.core.lazy_build(rum.core.build_defc,(function (props,values){
var attrs14362 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14361_SHARP_){
return rum.core.with_key((guitar.modes.explore.button.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.button.cljs$core$IFn$_invoke$arity$2(props,p1__14361_SHARP_) : guitar.modes.explore.button.call(null,props,p1__14361_SHARP_)),p1__14361_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14362))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs14362], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs14362))?null:[daiquiri.interpreter.interpret(attrs14362)]));
}),null,"guitar.modes.explore/buttons");
guitar.modes.explore.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,highlighted,on_click){
var attrs14367 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__14368 = (index + (1));
return (highlighted.cljs$core$IFn$_invoke$arity$1 ? highlighted.cljs$core$IFn$_invoke$arity$1(G__14368) : highlighted.call(null,G__14368));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__14369 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__14369) : on_click.call(null,G__14369));
})], null),value], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14367))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs14367], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs14367))?null:[daiquiri.interpreter.interpret(attrs14367)]));
}),null,"guitar.modes.explore/buttons-multi");
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__14375 = rum.core.react(state);
var map__14375__$1 = (((((!((map__14375 == null))))?(((((map__14375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14375):map__14375);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$highlight);
var in_scale = guitar.notes.scale_notes(root,scale);
return React.createElement(React.Fragment,null,(function (){var attrs14432 = (function (){var G__14433 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14434 = (function (p1__14370_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__14370_SHARP_));
});
var G__14435 = (function (){var G__14437 = strings_notes;
var G__14438 = cljs.core.set(in_scale);
var G__14439 = start_fret;
var G__14440 = (function (p1__14371_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14371_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__14371_SHARP_),highlight,in_scale,(0)));
});
var fexpr__14436 = guitar.patterns.scale_pattern(scale);
return (fexpr__14436.cljs$core$IFn$_invoke$arity$4 ? fexpr__14436.cljs$core$IFn$_invoke$arity$4(G__14437,G__14438,G__14439,G__14440) : fexpr__14436.call(null,G__14437,G__14438,G__14439,G__14440));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14433,G__14434,G__14435) : guitar.guitar.guitar.call(null,G__14433,G__14434,G__14435));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14432))?daiquiri.interpreter.attributes(attrs14432):null),((cljs.core.map_QMARK_(attrs14432))?null:[daiquiri.interpreter.interpret(attrs14432)]));
})(),rum.core.with_key((function (){var G__14443 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__14372_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14372_SHARP_);
})], null);
var G__14444 = guitar.notes.notes;
return (guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2(G__14443,G__14444) : guitar.modes.explore.buttons.call(null,G__14443,G__14444));
})(),"notes"),rum.core.with_key((function (){var G__14447 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__14373_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14373_SHARP_));
})], null);
var G__14448 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales));
return (guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2(G__14447,G__14448) : guitar.modes.explore.buttons.call(null,G__14447,G__14448));
})(),"scales"),daiquiri.interpreter.interpret((function (){var G__14452 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__14453 = highlight;
var G__14454 = (function (p1__14374_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.toggle_in,p1__14374_SHARP_));
});
return (guitar.modes.explore.buttons_multi.cljs$core$IFn$_invoke$arity$3 ? guitar.modes.explore.buttons_multi.cljs$core$IFn$_invoke$arity$3(G__14452,G__14453,G__14454) : guitar.modes.explore.buttons_multi.call(null,G__14452,G__14453,G__14454));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
