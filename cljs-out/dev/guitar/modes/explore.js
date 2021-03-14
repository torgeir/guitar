// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.buttons');
goog.require('guitar.guitar');
goog.require('guitar.math');
goog.require('guitar.sets');
goog.require('hashp.core');
goog.require('rum.core');
guitar.modes.explore.scale_key = (function guitar$modes$explore$scale_key(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
guitar.modes.explore.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$mode,cljs.core.cst$kw$ionian,cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$color,(0),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.state = (function (){var k = guitar.modes.explore.scale_key();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),k,guitar.modes.explore.default_state]);
})();
guitar.modes.explore.update_scales = (function guitar$modes$explore$update_scales(state,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,k,f);
}),state,cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.indexed_map = (function guitar$modes$explore$indexed_map(set){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.first),cljs.core.second),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,set)))));
});
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight));
var note_colors = cljs.core.select_keys(guitar.modes.explore.indexed_map(scale_notes),cljs.core.set(keys));
return (note_colors.cljs$core$IFn$_invoke$arity$2 ? note_colors.cljs$core$IFn$_invoke$arity$2(note,default$) : note_colors.call(null,note,default$));
});
guitar.modes.explore.find_closest_fret_index = (function guitar$modes$explore$find_closest_fret_index(last_strings_notes,scale_notes,fret,note){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38433_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,cljs.core.second(p1__38433_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38434){
var vec__38435 = p__38434;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(0),null);
var note__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.math.diff(fret,index),note__$1,index], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38432_SHARP_){
var G__38438 = cljs.core.second(p1__38432_SHARP_);
return (scale_notes.cljs$core$IFn$_invoke$arity$1 ? scale_notes.cljs$core$IFn$_invoke$arity$1(G__38438) : scale_notes.call(null,G__38438));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note,last_strings_notes))))))));
});
guitar.modes.explore.mode_buttons = (function guitar$modes$explore$mode_buttons(state,modes,mode){
var G__38440 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(mode),cljs.core.cst$kw$on_DASH_click,(function (p1__38439_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38439_SHARP_));
})], null);
var G__38441 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modes);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38440,G__38441) : guitar.buttons.buttons.call(null,G__38440,G__38441));
});
guitar.modes.explore.scale_buttons = (function guitar$modes$explore$scale_buttons(state,scales,scale){
var G__38443 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__38442_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38442_SHARP_));
})], null);
var G__38444 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),scales);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38443,G__38444) : guitar.buttons.buttons.call(null,G__38443,G__38444));
});
guitar.modes.explore.note_buttons = (function guitar$modes$explore$note_buttons(state,root,find_start_fret){
var G__38446 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__38445_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__38445_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(find_start_fret.cljs$core$IFn$_invoke$arity$1 ? find_start_fret.cljs$core$IFn$_invoke$arity$1(p1__38445_SHARP_) : find_start_fret.call(null,p1__38445_SHARP_))], 0));
})], null);
var G__38447 = guitar.notes.notes;
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38446,G__38447) : guitar.buttons.buttons.call(null,G__38446,G__38447));
});
guitar.modes.explore.fret_button = (function guitar$modes$explore$fret_button(state,op,fret,text){
var G__38449 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,fret,cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (p1__38448_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$start_DASH_fret,op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38448_SHARP_], 0));
})], null);
var G__38450 = text;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38449,G__38450) : guitar.buttons.button.call(null,G__38449,G__38450));
});
guitar.modes.explore.highlight_buttons = (function guitar$modes$explore$highlight_buttons(state,in_scale,scale_highlight){
var G__38452 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__38453 = scale_highlight;
var G__38454 = (function (p1__38451_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.sets.toggle_in,p1__38451_SHARP_));
});
var G__38455 = guitar.notes.ordinal_suffixed_number;
return (guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4 ? guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4(G__38452,G__38453,G__38454,G__38455) : guitar.buttons.buttons_multi.call(null,G__38452,G__38453,G__38454,G__38455));
});
guitar.modes.explore.zip = (function guitar$modes$explore$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38457 = arguments.length;
var i__4737__auto___38458 = (0);
while(true){
if((i__4737__auto___38458 < len__4736__auto___38457)){
args__4742__auto__.push((arguments[i__4737__auto___38458]));

var G__38459 = (i__4737__auto___38458 + (1));
i__4737__auto___38458 = G__38459;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
if((cljs.core.count(rest) === (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,rest);
}
}));

(guitar.modes.explore.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.zip.cljs$lang$applyTo = (function (seq38456){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38456));
}));

guitar.modes.explore.distinct_non_highlighted = (function guitar$modes$explore$distinct_non_highlighted(notes){
if(cljs.core.truth_(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,notes)))))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38460_SHARP_){
return cljs.core.not(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(p1__38460_SHARP_));
}),notes);
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(notes);
}
});
guitar.modes.explore.combine_scales = (function guitar$modes$explore$combine_scales(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38463 = arguments.length;
var i__4737__auto___38464 = (0);
while(true){
if((i__4737__auto___38464 < len__4736__auto___38463)){
args__4742__auto__.push((arguments[i__4737__auto___38464]));

var G__38465 = (i__4737__auto___38464 + (1));
i__4737__auto___38464 = G__38465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.distinct_non_highlighted,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38461_SHARP_){
if(cljs.core.empty_QMARK_(p1__38461_SHARP_)){
return null;
} else {
return p1__38461_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,args))));
}));

(guitar.modes.explore.combine_scales.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.combine_scales.cljs$lang$applyTo = (function (seq38462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38462));
}));

guitar.modes.explore.remove_overshooting_highlights = (function guitar$modes$explore$remove_overshooting_highlights(in_scale,highlight){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38466_SHARP_){
return ((p1__38466_SHARP_ - (1)) >= cljs.core.count(in_scale));
}),highlight);
});
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (key,on_sub_click,on_add_click,strings_notes,state){
var map__38468 = rum.core.react(state);
var map__38468__$1 = (((((!((map__38468 == null))))?(((((map__38468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38468):map__38468);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38468__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38468__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38468__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38468__$1,cljs.core.cst$kw$highlight);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38468__$1,cljs.core.cst$kw$mode);
var in_scale = guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,mode);
var scale_highlight = cljs.core.set(guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight));
var scale_modes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in_scale),guitar.notes.modes);
return daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38470 = guitar.modes.explore.fret_button(state,cljs.core.dec,start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38470))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38470], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38470))?null:[daiquiri.interpreter.interpret(attrs38470)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs38475 = (function (){var G__38481 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38482 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38481,G__38482) : guitar.buttons.button.call(null,G__38481,G__38482));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38475))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38475], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38475))?null:[daiquiri.interpreter.interpret(attrs38475)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38467_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38467_SHARP_,scale,mode)),start_fret,p1__38467_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38480 = (function (){var G__38483 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38484 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38483,G__38484) : guitar.buttons.button.call(null,G__38483,G__38484));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38480))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38480], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38480))?null:[daiquiri.interpreter.interpret(attrs38480)]));
})()]),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.inc,start_fret,"\u276F"),"fret")])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
guitar.modes.explore.active_scales = (function guitar$modes$explore$active_scales(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38485_SHARP_){
return (p1__38485_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38485_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38485_SHARP_.call(null,state));
}),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.notes_of_scale = (function guitar$modes$explore$notes_of_scale(p__38487){
var vec__38488 = p__38487;
var start_fret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(2),null);
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(3),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38488,(4),null);
var G__38491 = in_scale;
var G__38492 = start_fret;
var G__38493 = (function (p1__38486_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38486_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38486_SHARP_),cljs.core.set(highlight),cljs.core.vec(in_scale),color));
});
return (notes.cljs$core$IFn$_invoke$arity$3 ? notes.cljs$core$IFn$_invoke$arity$3(G__38491,G__38492,G__38493) : notes.call(null,G__38491,G__38492,G__38493));
});
guitar.modes.explore.combined_in_scale = (function guitar$modes$explore$combined_in_scale(current_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.notes.scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$root,cljs.core.cst$kw$scale,cljs.core.cst$kw$mode),current_scales)));
});
guitar.modes.explore.combined_highlights = (function guitar$modes$explore$combined_highlights(current_scales,in_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38494){
var vec__38495 = p__38494;
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38495,(0),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38495,(1),null);
return guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight);
}),guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_scales,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$highlight,current_scales)], 0)));
});
guitar.modes.explore.combined_scale_data = (function guitar$modes$explore$combined_scale_data(current_scales,in_scales,strings_notes,highlights){
return guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_fret,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38498_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(p1__38498_SHARP_)),strings_notes);
}),current_scales),in_scales,highlights], 0));
});
guitar.modes.explore.combined_notes = (function guitar$modes$explore$combined_notes(scale_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.modes.explore.combine_scales),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.notes_of_scale,scale_data)));
});
guitar.modes.explore.insert_at = (function guitar$modes$explore$insert_at(coll,at,n){
var vec__38499 = cljs.core.split_at(at,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
});
guitar.modes.explore.add_scale = (function guitar$modes$explore$add_scale(var_args){
var G__38503 = arguments.length;
switch (G__38503) {
case 2:
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2 = (function (state,new_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,guitar.modes.explore.default_state], 0));
}));

(guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3 = (function (state,new_key,before_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,guitar.modes.explore.insert_at(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),guitar.notes.index_of(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),before_key),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,(function (){var G__38504 = cljs.core.deref(state);
return (before_key.cljs$core$IFn$_invoke$arity$1 ? before_key.cljs$core$IFn$_invoke$arity$1(G__38504) : before_key.call(null,G__38504));
})()], 0));
}));

(guitar.modes.explore.add_scale.cljs$lang$maxFixedArity = 3);

guitar.modes.explore.visualize_scales = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
return React.createElement(React.Fragment,null,daiquiri.core.create_element("div",null,null),(function (){var current_scales = guitar.modes.explore.active_scales(cljs.core.deref(state));
var in_scales = guitar.modes.explore.combined_in_scale(current_scales);
var highlights = guitar.modes.explore.combined_highlights(current_scales,in_scales);
var scale_data = guitar.modes.explore.combined_scale_data(current_scales,in_scales,strings_notes,highlights);
var notes = guitar.modes.explore.combined_notes(scale_data);
return daiquiri.interpreter.interpret((function (){var G__38548 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__38549 = (function (note){
return cljs.core.reset_BANG_(state,guitar.modes.explore.update_scales(cljs.core.deref(state),(function (p1__38506_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38506_SHARP_,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(note));
})));
});
var G__38550 = notes;
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38548,G__38549,G__38550) : guitar.guitar.guitar.call(null,G__38548,G__38549,G__38550));
})());
})(),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__38509_SHARP_,p2__38508_SHARP_){
return rum.core.with_key(p2__38508_SHARP_,p1__38509_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38560){
var vec__38561 = p__38560;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(1),null);
var G__38564 = key;
var G__38565 = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$scales,(function (s){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38507_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__38507_SHARP_);
}),s));
}));
});
var G__38566 = (function (before_key){
guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3(state,guitar.modes.explore.scale_key(),before_key);

return "+";
});
var G__38567 = strings_notes;
var G__38568 = cursor;
return (guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$5 ? guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$5(G__38564,G__38565,G__38566,G__38567,G__38568) : guitar.modes.explore.visualize_scale.call(null,G__38564,G__38565,G__38566,G__38567,G__38568));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,state)),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state)))))),((cljs.core.empty_QMARK_(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state))))?(function (){var attrs38573 = (function (){var G__38574 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2(state,guitar.modes.explore.scale_key());
})], null);
var G__38575 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38574,G__38575) : guitar.buttons.button.call(null,G__38574,G__38575));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38573))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38573], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38573))?null:[daiquiri.interpreter.interpret(attrs38573)]));
})():null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scales");
