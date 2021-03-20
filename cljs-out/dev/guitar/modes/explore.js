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
guitar.modes.explore.state = (function (){var key = guitar.modes.explore.scale_key();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),key,guitar.modes.explore.default_state,cljs.core.cst$kw$joined_DASH_neck,true,cljs.core.cst$kw$condensed,false]);
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
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38442_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,cljs.core.second(p1__38442_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38443){
var vec__38444 = p__38443;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(0),null);
var note__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.math.diff(fret,index),note__$1,index], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38441_SHARP_){
var G__38447 = cljs.core.second(p1__38441_SHARP_);
return (scale_notes.cljs$core$IFn$_invoke$arity$1 ? scale_notes.cljs$core$IFn$_invoke$arity$1(G__38447) : scale_notes.call(null,G__38447));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note,last_strings_notes))))))));
});
guitar.modes.explore.mode_buttons = (function guitar$modes$explore$mode_buttons(state,modes,mode){
var G__38449 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(mode),cljs.core.cst$kw$on_DASH_click,(function (p1__38448_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38448_SHARP_));
})], null);
var G__38450 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modes);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38449,G__38450) : guitar.buttons.buttons.call(null,G__38449,G__38450));
});
guitar.modes.explore.scale_buttons = (function guitar$modes$explore$scale_buttons(state,scales,scale){
var G__38452 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__38451_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38451_SHARP_));
})], null);
var G__38453 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),scales);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38452,G__38453) : guitar.buttons.buttons.call(null,G__38452,G__38453));
});
guitar.modes.explore.note_buttons = (function guitar$modes$explore$note_buttons(state,root,find_start_fret){
var G__38455 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__38454_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__38454_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(find_start_fret.cljs$core$IFn$_invoke$arity$1 ? find_start_fret.cljs$core$IFn$_invoke$arity$1(p1__38454_SHARP_) : find_start_fret.call(null,p1__38454_SHARP_))], 0));
})], null);
var G__38456 = guitar.notes.notes;
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38455,G__38456) : guitar.buttons.buttons.call(null,G__38455,G__38456));
});
guitar.modes.explore.fret_button = (function guitar$modes$explore$fret_button(state,op,fret,text){
var G__38458 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,fret,cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (p1__38457_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$start_DASH_fret,op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38457_SHARP_], 0));
})], null);
var G__38459 = text;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38458,G__38459) : guitar.buttons.button.call(null,G__38458,G__38459));
});
guitar.modes.explore.highlight_buttons = (function guitar$modes$explore$highlight_buttons(state,in_scale,scale_highlight){
var G__38461 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__38462 = scale_highlight;
var G__38463 = (function (p1__38460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.sets.toggle_in,p1__38460_SHARP_));
});
var G__38464 = guitar.notes.ordinal_suffixed_number;
return (guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4 ? guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4(G__38461,G__38462,G__38463,G__38464) : guitar.buttons.buttons_multi.call(null,G__38461,G__38462,G__38463,G__38464));
});
guitar.modes.explore.zip = (function guitar$modes$explore$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38466 = arguments.length;
var i__4737__auto___38467 = (0);
while(true){
if((i__4737__auto___38467 < len__4736__auto___38466)){
args__4742__auto__.push((arguments[i__4737__auto___38467]));

var G__38468 = (i__4737__auto___38467 + (1));
i__4737__auto___38467 = G__38468;
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
(guitar.modes.explore.zip.cljs$lang$applyTo = (function (seq38465){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38465));
}));

guitar.modes.explore.distinct_non_highlighted = (function guitar$modes$explore$distinct_non_highlighted(notes){
if(cljs.core.truth_(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,notes)))))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38469_SHARP_){
return cljs.core.not(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(p1__38469_SHARP_));
}),notes);
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(notes);
}
});
guitar.modes.explore.combine_scales = (function guitar$modes$explore$combine_scales(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38472 = arguments.length;
var i__4737__auto___38473 = (0);
while(true){
if((i__4737__auto___38473 < len__4736__auto___38472)){
args__4742__auto__.push((arguments[i__4737__auto___38473]));

var G__38474 = (i__4737__auto___38473 + (1));
i__4737__auto___38473 = G__38474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.distinct_non_highlighted,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38470_SHARP_){
if(cljs.core.empty_QMARK_(p1__38470_SHARP_)){
return null;
} else {
return p1__38470_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,args))));
}));

(guitar.modes.explore.combine_scales.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.combine_scales.cljs$lang$applyTo = (function (seq38471){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38471));
}));

guitar.modes.explore.remove_overshooting_highlights = (function guitar$modes$explore$remove_overshooting_highlights(in_scale,highlight){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38475_SHARP_){
return ((p1__38475_SHARP_ - (1)) >= cljs.core.count(in_scale));
}),highlight);
});
guitar.modes.explore.notes_of_scale = (function guitar$modes$explore$notes_of_scale(p__38477){
var vec__38478 = p__38477;
var start_fret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478,(2),null);
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478,(3),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478,(4),null);
var G__38481 = in_scale;
var G__38482 = start_fret;
var G__38483 = (function (p1__38476_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38476_SHARP_,cljs.core.cst$kw$hl,guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38476_SHARP_),cljs.core.set(highlight),cljs.core.vec(in_scale),color));
});
return (notes.cljs$core$IFn$_invoke$arity$3 ? notes.cljs$core$IFn$_invoke$arity$3(G__38481,G__38482,G__38483) : notes.call(null,G__38481,G__38482,G__38483));
});
guitar.modes.explore.active_scales = (function guitar$modes$explore$active_scales(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38484_SHARP_){
return (p1__38484_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38484_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38484_SHARP_.call(null,state));
}),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.combined_in_scale = (function guitar$modes$explore$combined_in_scale(current_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.notes.scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$root,cljs.core.cst$kw$scale,cljs.core.cst$kw$mode),current_scales)));
});
guitar.modes.explore.combined_highlights = (function guitar$modes$explore$combined_highlights(current_scales,in_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38485){
var vec__38486 = p__38485;
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(0),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(1),null);
return guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight);
}),guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_scales,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$highlight,current_scales)], 0)));
});
guitar.modes.explore.combined_scale_data = (function guitar$modes$explore$combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights){
return guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_fret,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38489_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(p1__38489_SHARP_)),strings_notes);
}),current_scales),in_scales,highlights], 0));
});
guitar.modes.explore.combined_notes = (function guitar$modes$explore$combined_notes(scale_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.modes.explore.combine_scales),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.notes_of_scale,scale_data)));
});
guitar.modes.explore.insert_at = (function guitar$modes$explore$insert_at(coll,at,n){
var vec__38490 = cljs.core.split_at(at,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
});
guitar.modes.explore.add_scale = (function guitar$modes$explore$add_scale(var_args){
var G__38494 = arguments.length;
switch (G__38494) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,guitar.modes.explore.insert_at(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),guitar.notes.index_of(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),before_key),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,(function (){var G__38495 = cljs.core.deref(state);
return (before_key.cljs$core$IFn$_invoke$arity$1 ? before_key.cljs$core$IFn$_invoke$arity$1(G__38495) : before_key.call(null,G__38495));
})()], 0));
}));

(guitar.modes.explore.add_scale.cljs$lang$maxFixedArity = 3);

guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (key,on_sub_click,on_add_click,strings_notes,state,tuning,joined_neck){
var map__38506 = rum.core.react(state);
var map__38506__$1 = (((((!((map__38506 == null))))?(((((map__38506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38506):map__38506);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$highlight);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$mode);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,cljs.core.cst$kw$color);
var in_scale = guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,mode);
var scale_highlight = cljs.core.set(guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight));
var scale_modes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in_scale),guitar.notes.modes);
var attrs38505 = (cljs.core.truth_(joined_neck)?null:(function (){var G__38508 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__38509 = (function (p1__38497_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__38497_SHARP_));
});
var G__38510 = guitar.modes.explore.combined_notes((new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_fret,color,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,scale),strings_notes),cljs.core.set(in_scale),scale_highlight], null),null,(1),null)));
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38508,G__38509,G__38510) : guitar.guitar.guitar.call(null,G__38508,G__38509,G__38510));
})());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38505))?daiquiri.interpreter.attributes(attrs38505):null),((cljs.core.map_QMARK_(attrs38505))?[daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38511 = guitar.modes.explore.fret_button(state,cljs.core.dec,start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38511))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38511], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38511))?null:[daiquiri.interpreter.interpret(attrs38511)]));
})(),(function (){var attrs38516 = (function (){var G__38517 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar-buttons-opener"], null);
var G__38518 = "expand";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38517,G__38518) : guitar.buttons.button.call(null,G__38517,G__38518));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38516))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-buttons-wrapper"], null)], null),attrs38516], 0))):{'className':"guitar-buttons-wrapper"}),((cljs.core.map_QMARK_(attrs38516))?[daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38523 = (function (){var G__38534 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38535 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38534,G__38535) : guitar.buttons.button.call(null,G__38534,G__38535));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38523))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38523], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38523))?null:[daiquiri.interpreter.interpret(attrs38523)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38498_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38498_SHARP_,scale,mode)),start_fret,p1__38498_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38528 = (function (){var G__38536 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,cljs.core.rand_int((8)));
})], null);
var G__38537 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38536,G__38537) : guitar.buttons.button.call(null,G__38536,G__38537));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38528))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38528], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38528))?null:[daiquiri.interpreter.interpret(attrs38528)]));
})(),(function (){var attrs38533 = (function (){var G__38538 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38539 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38538,G__38539) : guitar.buttons.button.call(null,G__38538,G__38539));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38533))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38533], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38533))?null:[daiquiri.interpreter.interpret(attrs38533)]));
})()])]:[daiquiri.interpreter.interpret(attrs38516),daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38544 = (function (){var G__38555 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38556 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38555,G__38556) : guitar.buttons.button.call(null,G__38555,G__38556));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38544))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38544], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38544))?null:[daiquiri.interpreter.interpret(attrs38544)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38498_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38498_SHARP_,scale,mode)),start_fret,p1__38498_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38549 = (function (){var G__38557 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,cljs.core.rand_int((8)));
})], null);
var G__38558 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38557,G__38558) : guitar.buttons.button.call(null,G__38557,G__38558));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38549))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38549], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38549))?null:[daiquiri.interpreter.interpret(attrs38549)]));
})(),(function (){var attrs38554 = (function (){var G__38559 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38560 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38559,G__38560) : guitar.buttons.button.call(null,G__38559,G__38560));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38554))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38554], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38554))?null:[daiquiri.interpreter.interpret(attrs38554)]));
})()])]));
})(),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.inc,start_fret,"\u276F"),"fret")])])]:[daiquiri.interpreter.interpret(attrs38505),daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38561 = guitar.modes.explore.fret_button(state,cljs.core.dec,start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38561))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38561], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38561))?null:[daiquiri.interpreter.interpret(attrs38561)]));
})(),(function (){var attrs38566 = (function (){var G__38567 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar-buttons-opener"], null);
var G__38568 = "expand";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38567,G__38568) : guitar.buttons.button.call(null,G__38567,G__38568));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38566))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-buttons-wrapper"], null)], null),attrs38566], 0))):{'className':"guitar-buttons-wrapper"}),((cljs.core.map_QMARK_(attrs38566))?[daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38573 = (function (){var G__38584 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38585 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38584,G__38585) : guitar.buttons.button.call(null,G__38584,G__38585));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38573))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38573], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38573))?null:[daiquiri.interpreter.interpret(attrs38573)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38498_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38498_SHARP_,scale,mode)),start_fret,p1__38498_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38578 = (function (){var G__38586 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,cljs.core.rand_int((8)));
})], null);
var G__38587 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38586,G__38587) : guitar.buttons.button.call(null,G__38586,G__38587));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38578))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38578], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38578))?null:[daiquiri.interpreter.interpret(attrs38578)]));
})(),(function (){var attrs38583 = (function (){var G__38588 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38589 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38588,G__38589) : guitar.buttons.button.call(null,G__38588,G__38589));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38583))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38583], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38583))?null:[daiquiri.interpreter.interpret(attrs38583)]));
})()])]:[daiquiri.interpreter.interpret(attrs38566),daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38594 = (function (){var G__38605 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38606 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38605,G__38606) : guitar.buttons.button.call(null,G__38605,G__38606));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38594))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38594], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38594))?null:[daiquiri.interpreter.interpret(attrs38594)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38498_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38498_SHARP_,scale,mode)),start_fret,p1__38498_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38599 = (function (){var G__38607 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,cljs.core.rand_int((8)));
})], null);
var G__38608 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38607,G__38608) : guitar.buttons.button.call(null,G__38607,G__38608));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38599))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38599], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38599))?null:[daiquiri.interpreter.interpret(attrs38599)]));
})(),(function (){var attrs38604 = (function (){var G__38609 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38610 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38609,G__38610) : guitar.buttons.button.call(null,G__38609,G__38610));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38604))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38604], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38604))?null:[daiquiri.interpreter.interpret(attrs38604)]));
})()])]));
})(),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.inc,start_fret,"\u276F"),"fret")])])]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
guitar.modes.explore.visualize_scales = rum.core.lazy_build(rum.core.build_defc,(function (tuning,strings_notes,state){
var map__38615 = cljs.core.deref(state);
var map__38615__$1 = (((((!((map__38615 == null))))?(((((map__38615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38615):map__38615);
var joined_neck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38615__$1,cljs.core.cst$kw$joined_DASH_neck);
var condensed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38615__$1,cljs.core.cst$kw$condensed);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(condensed)?"condensed":null)], null))},[(cljs.core.truth_(joined_neck)?(function (){var current_scales = guitar.modes.explore.active_scales(cljs.core.deref(state));
var in_scales = guitar.modes.explore.combined_in_scale(current_scales);
var highlights = guitar.modes.explore.combined_highlights(current_scales,in_scales);
var scale_data = guitar.modes.explore.combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights);
var notes = guitar.modes.explore.combined_notes(scale_data);
return daiquiri.interpreter.interpret((function (){var G__38635 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__38636 = (function (note){
return cljs.core.reset_BANG_(state,guitar.modes.explore.update_scales(cljs.core.deref(state),(function (p1__38611_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38611_SHARP_,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(note));
})));
});
var G__38637 = notes;
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38635,G__38636,G__38637) : guitar.guitar.guitar.call(null,G__38635,G__38636,G__38637));
})());
})():null),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__38614_SHARP_,p2__38613_SHARP_){
return rum.core.with_key(p2__38613_SHARP_,p1__38614_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38649){
var vec__38650 = p__38649;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650,(1),null);
var G__38653 = key;
var G__38654 = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$scales,(function (s){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38612_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__38612_SHARP_);
}),s));
}));
});
var G__38655 = (function (before_key){
guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3(state,guitar.modes.explore.scale_key(),before_key);

return "+";
});
var G__38656 = strings_notes;
var G__38657 = cursor;
var G__38658 = tuning;
var G__38659 = joined_neck;
return (guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7 ? guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7(G__38653,G__38654,G__38655,G__38656,G__38657,G__38658,G__38659) : guitar.modes.explore.visualize_scale.call(null,G__38653,G__38654,G__38655,G__38656,G__38657,G__38658,G__38659));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,state)),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state)))))),((cljs.core.empty_QMARK_(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state))))?(function (){var attrs38621 = (function (){var G__38660 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2(state,guitar.modes.explore.scale_key());
})], null);
var G__38661 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38660,G__38661) : guitar.buttons.button.call(null,G__38660,G__38661));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38621))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38621], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38621))?null:[daiquiri.interpreter.interpret(attrs38621)]));
})():null),(function (){var attrs38626 = (function (){var G__38662 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck,true);
})], null);
var G__38663 = "Single neck";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38662,G__38663) : guitar.buttons.button.call(null,G__38662,G__38663));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38626))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38626], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38626))?[daiquiri.interpreter.interpret((function (){var G__38666 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck,false);
})], null);
var G__38667 = "Exploded neck";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38666,G__38667) : guitar.buttons.button.call(null,G__38666,G__38667));
})())]:[daiquiri.interpreter.interpret(attrs38626),daiquiri.interpreter.interpret((function (){var G__38670 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck,false);
})], null);
var G__38671 = "Exploded neck";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38670,G__38671) : guitar.buttons.button.call(null,G__38670,G__38671));
})())]));
})(),(function (){var attrs38631 = (function (){var G__38672 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$condensed,true);
})], null);
var G__38673 = "Condensed settings";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38672,G__38673) : guitar.buttons.button.call(null,G__38672,G__38673));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38631))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38631], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38631))?[daiquiri.interpreter.interpret((function (){var G__38676 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$condensed,false);
})], null);
var G__38677 = "Expanded settings";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38676,G__38677) : guitar.buttons.button.call(null,G__38676,G__38677));
})())]:[daiquiri.interpreter.interpret(attrs38631),daiquiri.interpreter.interpret((function (){var G__38680 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$condensed,false);
})], null);
var G__38681 = "Expanded settings";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38680,G__38681) : guitar.buttons.button.call(null,G__38680,G__38681));
})())]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scales");
