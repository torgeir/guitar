// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.guitar');
goog.require('oops.core');
goog.require('rum.core');
guitar.modes.explore.state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var hl_colors = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,default$),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
var fexpr__17062 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,hl_colors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,cljs.core.cycle(scale_notes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight))))));
return (fexpr__17062.cljs$core$IFn$_invoke$arity$2 ? fexpr__17062.cljs$core$IFn$_invoke$arity$2(note,default$) : fexpr__17062.call(null,note,default$));
});
guitar.modes.explore.toggle_in = (function guitar$modes$explore$toggle_in(el,a_set){
var fexpr__17063 = (cljs.core.truth_((a_set.cljs$core$IFn$_invoke$arity$1 ? a_set.cljs$core$IFn$_invoke$arity$1(el) : a_set.call(null,el)))?cljs.core.disj:cljs.core.conj);
return (fexpr__17063.cljs$core$IFn$_invoke$arity$2 ? fexpr__17063.cljs$core$IFn$_invoke$arity$2(a_set,el) : fexpr__17063.call(null,a_set,el));
});
guitar.modes.explore.toggle_highlighted_notes = rum.core.lazy_build(rum.core.build_defc,(function (scale_notes,on_click){
return daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(note),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
var G__17065 = (index + (1));
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__17065) : on_click.call(null,G__17065));
})], null),note], null);
}),scale_notes));
}),null,"guitar.modes.explore/toggle-highlighted-notes");
guitar.modes.explore.to_option = (function guitar$modes$explore$to_option(value){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$label,value], null);
});
guitar.modes.explore.to_options = (function guitar$modes$explore$to_options(values){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.to_option,values);
});
guitar.modes.explore.from_value = (function guitar$modes$explore$from_value(option){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(option),"value");
});
guitar.modes.explore.select = rum.core.lazy_build(rum.core.build_defc,(function (p__17066,values){
var map__17067 = p__17066;
var map__17067__$1 = (((((!((map__17067 == null))))?(((((map__17067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17067):map__17067);
var is_multi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,cljs.core.cst$kw$is_DASH_multi);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,cljs.core.cst$kw$on_DASH_change);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,cljs.core.cst$kw$value);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return rum.core.adapt_class_helper(Select,{'onChange':on_change,'isMulti':(function (){var or__4126__auto__ = is_multi;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})(),'value':cljs.core.clj__GT_js(guitar.modes.explore.to_options(value)),'options':cljs.core.clj__GT_js(guitar.modes.explore.to_options(values))},[]);
}),null,"guitar.modes.explore/select");
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__17074 = rum.core.react(state);
var map__17074__$1 = (((((!((map__17074 == null))))?(((((map__17074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17074):map__17074);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17074__$1,cljs.core.cst$kw$highlight);
var in_scale_QMARK_ = cljs.core.set(guitar.notes.scale_notes(root,scale));
return React.createElement(React.Fragment,null,(function (){var attrs17129 = (function (){var G__17130 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__17131 = (function (p1__17069_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__17069_SHARP_));
});
var G__17132 = (function (){var G__17134 = strings_notes;
var G__17135 = in_scale_QMARK_;
var G__17136 = start_fret;
var G__17137 = (function (p1__17070_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17070_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__17070_SHARP_),highlight,cljs.core.seq(in_scale_QMARK_),(4)));
});
var fexpr__17133 = guitar.patterns.scale_pattern(scale);
return (fexpr__17133.cljs$core$IFn$_invoke$arity$4 ? fexpr__17133.cljs$core$IFn$_invoke$arity$4(G__17134,G__17135,G__17136,G__17137) : fexpr__17133.call(null,G__17134,G__17135,G__17136,G__17137));
})();
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__17130,G__17131,G__17132) : guitar.guitar.guitar.call(null,G__17130,G__17131,G__17132));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs17129))?daiquiri.interpreter.attributes(attrs17129):null),((cljs.core.map_QMARK_(attrs17129))?null:[daiquiri.interpreter.interpret(attrs17129)]));
})(),daiquiri.interpreter.interpret((function (){var G__17140 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null),cljs.core.cst$kw$on_DASH_change,(function (p1__17071_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,guitar.modes.explore.from_value(p1__17071_SHARP_));
})], null);
var G__17141 = guitar.notes.notes;
return (guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2(G__17140,G__17141) : guitar.modes.explore.select.call(null,G__17140,G__17141));
})()),daiquiri.interpreter.interpret((function (){var G__17144 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(scale)], null),cljs.core.cst$kw$on_DASH_change,(function (p1__17072_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(guitar.modes.explore.from_value(p1__17072_SHARP_)));
})], null);
var G__17145 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales));
return (guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2(G__17144,G__17145) : guitar.modes.explore.select.call(null,G__17144,G__17145));
})()),daiquiri.interpreter.interpret((function (){var G__17148 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$is_DASH_multi,true,cljs.core.cst$kw$on_DASH_change,(function (p1__17073_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$highlight,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,guitar.modes.explore.from_value),cljs.core.clj__GT_js(p1__17073_SHARP_)));
}),cljs.core.cst$kw$value,highlight], null);
var G__17149 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
return (guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2 ? guitar.modes.explore.select.cljs$core$IFn$_invoke$arity$2(G__17148,G__17149) : guitar.modes.explore.select.call(null,G__17148,G__17149));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
