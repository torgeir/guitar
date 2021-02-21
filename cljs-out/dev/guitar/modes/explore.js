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
guitar.modes.explore.toggle_highlighted_notes = rum.core.lazy_build(rum.core.build_defc,(function (scale_notes,on_click){
return daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__14362 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__14362) : on_click.call(null,G__14362));
})], null),note], null);
}),scale_notes));
}),null,"guitar.modes.explore/toggle-highlighted-notes");
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__14370 = rum.core.react(state);
var map__14370__$1 = (((((!((map__14370 == null))))?(((((map__14370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14370):map__14370);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,cljs.core.cst$kw$highlight);
var in_scale_QMARK_ = cljs.core.set(guitar.notes.scale_notes(root,scale));
return React.createElement(React.Fragment,null,(function (){var attrs14420 = (function (){var G__14421 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14422 = (function (p1__14363_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__14363_SHARP_));
});
var G__14423 = (function (){var G__14425 = strings_notes;
var G__14426 = in_scale_QMARK_;
var G__14427 = start_fret;
var G__14428 = (function (p1__14364_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14364_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__14364_SHARP_),highlight,cljs.core.seq(in_scale_QMARK_),(4)));
});
var fexpr__14424 = guitar.patterns.scale_pattern(scale);
return (fexpr__14424.cljs$core$IFn$_invoke$arity$4 ? fexpr__14424.cljs$core$IFn$_invoke$arity$4(G__14425,G__14426,G__14427,G__14428) : fexpr__14424.call(null,G__14425,G__14426,G__14427,G__14428));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__14421,G__14422,G__14423) : guitar.guitar.guitar.call(null,G__14421,G__14422,G__14423));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14420))?daiquiri.interpreter.attributes(attrs14420):null),((cljs.core.map_QMARK_(attrs14420))?null:[daiquiri.interpreter.interpret(attrs14420)]));
})(),daiquiri.core.create_element("select",{'onChange':(function (p1__14365_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14365_SHARP_.currentTarget.value);
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14366_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14366_SHARP_], null),p1__14366_SHARP_],null));
}),guitar.notes.notes))]),daiquiri.core.create_element("select",{'value':cljs.core.name(scale),'onChange':(function (p1__14367_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14367_SHARP_.currentTarget.value));
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14368_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14368_SHARP_], null),p1__14368_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales))))]),(function (){var attrs14433 = (function (){var G__14434 = in_scale_QMARK_;
var G__14435 = (function (p1__14369_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.toggle_in,p1__14369_SHARP_));
});
return (guitar.modes.explore.toggle_highlighted_notes.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.toggle_highlighted_notes.cljs$core$IFn$_invoke$arity$2(G__14434,G__14435) : guitar.modes.explore.toggle_highlighted_notes.call(null,G__14434,G__14435));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14433))?daiquiri.interpreter.attributes(attrs14433):null),((cljs.core.map_QMARK_(attrs14433))?null:[daiquiri.interpreter.interpret(attrs14433)]));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
