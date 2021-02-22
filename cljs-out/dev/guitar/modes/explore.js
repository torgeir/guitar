// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.guitar');
goog.require('rum.core');
guitar.modes.explore.state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var hl_colors = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,default$),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
var fexpr__14359 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,hl_colors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,cljs.core.cycle(scale_notes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight))))));
return (fexpr__14359.cljs$core$IFn$_invoke$arity$2 ? fexpr__14359.cljs$core$IFn$_invoke$arity$2(note,default$) : fexpr__14359.call(null,note,default$));
});
guitar.modes.explore.toggle_in = (function guitar$modes$explore$toggle_in(el,a_set){
var fexpr__14360 = (cljs.core.truth_((a_set.cljs$core$IFn$_invoke$arity$1 ? a_set.cljs$core$IFn$_invoke$arity$1(el) : a_set.call(null,el)))?cljs.core.disj:cljs.core.conj);
return (fexpr__14360.cljs$core$IFn$_invoke$arity$2 ? fexpr__14360.cljs$core$IFn$_invoke$arity$2(a_set,el) : fexpr__14360.call(null,a_set,el));
});
guitar.modes.explore.button = rum.core.lazy_build(rum.core.build_defc,(function (props,value){
return daiquiri.core.create_element("button",{'onClick':(function (){
var fexpr__14361 = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__14361.cljs$core$IFn$_invoke$arity$1 ? fexpr__14361.cljs$core$IFn$_invoke$arity$1(value) : fexpr__14361.call(null,value));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props),value))?"button--selected":null)], null))},[daiquiri.interpreter.interpret(value)]);
}),null,"guitar.modes.explore/button");
guitar.modes.explore.buttons = rum.core.lazy_build(rum.core.build_defc,(function (props,values){
var attrs14363 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14362_SHARP_){
return rum.core.with_key((guitar.modes.explore.button.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.button.cljs$core$IFn$_invoke$arity$2(props,p1__14362_SHARP_) : guitar.modes.explore.button.call(null,props,p1__14362_SHARP_)),p1__14362_SHARP_);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14363))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs14363], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs14363))?null:[daiquiri.interpreter.interpret(attrs14363)]));
}),null,"guitar.modes.explore/buttons");
guitar.modes.explore.buttons_multi = rum.core.lazy_build(rum.core.build_defc,(function (values,highlighted,on_click){
var attrs14368 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(cljs.core.truth_((function (){var G__14369 = (index + (1));
return (highlighted.cljs$core$IFn$_invoke$arity$1 ? highlighted.cljs$core$IFn$_invoke$arity$1(G__14369) : highlighted.call(null,G__14369));
})())?"button--selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__14370 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__14370) : on_click.call(null,G__14370));
})], null),value], null);
}),values);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14368))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs14368], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs14368))?null:[daiquiri.interpreter.interpret(attrs14368)]));
}),null,"guitar.modes.explore/buttons-multi");
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__14376 = rum.core.react(state);
var map__14376__$1 = (((((!((map__14376 == null))))?(((((map__14376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14376):map__14376);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$highlight);
var in_scale = guitar.notes.scale_notes(root,scale);
return React.createElement(React.Fragment,null,(function (){var attrs14433 = (function (){var G__14434 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14435 = (function (p1__14371_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__14371_SHARP_));
});
var G__14436 = (function (){var G__14438 = strings_notes;
var G__14439 = cljs.core.set(in_scale);
var G__14440 = start_fret;
var G__14441 = (function (p1__14372_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14372_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__14372_SHARP_),highlight,in_scale,(4)));
});
var fexpr__14437 = guitar.patterns.scale_pattern(scale);
return (fexpr__14437.cljs$core$IFn$_invoke$arity$4 ? fexpr__14437.cljs$core$IFn$_invoke$arity$4(G__14438,G__14439,G__14440,G__14441) : fexpr__14437.call(null,G__14438,G__14439,G__14440,G__14441));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14434,G__14435,G__14436) : guitar.guitar.guitar.call(null,G__14434,G__14435,G__14436));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14433))?daiquiri.interpreter.attributes(attrs14433):null),((cljs.core.map_QMARK_(attrs14433))?null:[daiquiri.interpreter.interpret(attrs14433)]));
})(),rum.core.with_key((function (){var G__14444 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__14373_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14373_SHARP_);
})], null);
var G__14445 = guitar.notes.notes;
return (guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2(G__14444,G__14445) : guitar.modes.explore.buttons.call(null,G__14444,G__14445));
})(),"notes"),rum.core.with_key((function (){var G__14448 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__14374_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14374_SHARP_));
})], null);
var G__14449 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales));
return (guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.buttons.cljs$core$IFn$_invoke$arity$2(G__14448,G__14449) : guitar.modes.explore.buttons.call(null,G__14448,G__14449));
})(),"scales"),daiquiri.interpreter.interpret((function (){var G__14453 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8));
var G__14454 = highlight;
var G__14455 = (function (p1__14375_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.toggle_in,p1__14375_SHARP_));
});
return (guitar.modes.explore.buttons_multi.cljs$core$IFn$_invoke$arity$3 ? guitar.modes.explore.buttons_multi.cljs$core$IFn$_invoke$arity$3(G__14453,G__14454,G__14455) : guitar.modes.explore.buttons_multi.call(null,G__14453,G__14454,G__14455));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
