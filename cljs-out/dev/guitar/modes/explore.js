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
guitar.modes.explore.initial_state = (function guitar$modes$explore$initial_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38623 = arguments.length;
var i__4737__auto___38624 = (0);
while(true){
if((i__4737__auto___38624 < len__4736__auto___38623)){
args__4742__auto__.push((arguments[i__4737__auto___38624]));

var G__38625 = (i__4737__auto___38624 + (1));
i__4737__auto___38624 = G__38625;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.scale_key,states);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38619){
var vec__38620 = p__38619;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,state);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$joined_DASH_neck,true,cljs.core.cst$kw$condensed,true,cljs.core.cst$kw$scales,cljs.core.vec(keys)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,states));
}));

(guitar.modes.explore.initial_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.initial_state.cljs$lang$applyTo = (function (seq38618){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38618));
}));

guitar.modes.explore.state = guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.modes.explore.default_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(3)], 0))], 0));
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
var G__38626 = note;
var G__38627 = ((-1) * default$);
return (note_colors.cljs$core$IFn$_invoke$arity$2 ? note_colors.cljs$core$IFn$_invoke$arity$2(G__38626,G__38627) : note_colors.call(null,G__38626,G__38627));
});
guitar.modes.explore.find_closest_fret_index = (function guitar$modes$explore$find_closest_fret_index(last_strings_notes,scale_notes,fret,note){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38629_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,cljs.core.second(p1__38629_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38630){
var vec__38631 = p__38630;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(0),null);
var note__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.math.diff(fret,index),note__$1,index], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38628_SHARP_){
var G__38634 = cljs.core.second(p1__38628_SHARP_);
return (scale_notes.cljs$core$IFn$_invoke$arity$1 ? scale_notes.cljs$core$IFn$_invoke$arity$1(G__38634) : scale_notes.call(null,G__38634));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note,last_strings_notes))))))));
});
guitar.modes.explore.mode_buttons = (function guitar$modes$explore$mode_buttons(state,modes,mode){
var G__38636 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(mode),cljs.core.cst$kw$on_DASH_click,(function (p1__38635_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38635_SHARP_));
})], null);
var G__38637 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modes);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38636,G__38637) : guitar.buttons.buttons.call(null,G__38636,G__38637));
});
guitar.modes.explore.scale_buttons = (function guitar$modes$explore$scale_buttons(state,scales,scale){
var G__38639 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__38638_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38638_SHARP_));
})], null);
var G__38640 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),scales);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38639,G__38640) : guitar.buttons.buttons.call(null,G__38639,G__38640));
});
guitar.modes.explore.note_buttons = (function guitar$modes$explore$note_buttons(state,root,find_start_fret){
var G__38642 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__38641_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__38641_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(find_start_fret.cljs$core$IFn$_invoke$arity$1 ? find_start_fret.cljs$core$IFn$_invoke$arity$1(p1__38641_SHARP_) : find_start_fret.call(null,p1__38641_SHARP_))], 0));
})], null);
var G__38643 = guitar.notes.notes;
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38642,G__38643) : guitar.buttons.buttons.call(null,G__38642,G__38643));
});
guitar.modes.explore.fret_button = (function guitar$modes$explore$fret_button(state,op,fret,text){
var G__38645 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,fret,cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (p1__38644_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$start_DASH_fret,op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38644_SHARP_], 0));
})], null);
var G__38646 = text;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38645,G__38646) : guitar.buttons.button.call(null,G__38645,G__38646));
});
guitar.modes.explore.highlight_buttons = (function guitar$modes$explore$highlight_buttons(state,in_scale,scale_highlight){
var G__38648 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__38649 = scale_highlight;
var G__38650 = (function (p1__38647_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.sets.toggle_in,p1__38647_SHARP_));
});
var G__38651 = guitar.notes.ordinal_suffixed_number;
return (guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4 ? guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4(G__38648,G__38649,G__38650,G__38651) : guitar.buttons.buttons_multi.call(null,G__38648,G__38649,G__38650,G__38651));
});
guitar.modes.explore.zip = (function guitar$modes$explore$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38653 = arguments.length;
var i__4737__auto___38654 = (0);
while(true){
if((i__4737__auto___38654 < len__4736__auto___38653)){
args__4742__auto__.push((arguments[i__4737__auto___38654]));

var G__38655 = (i__4737__auto___38654 + (1));
i__4737__auto___38654 = G__38655;
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
(guitar.modes.explore.zip.cljs$lang$applyTo = (function (seq38652){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38652));
}));

guitar.modes.explore.distinct_non_highlighted = (function guitar$modes$explore$distinct_non_highlighted(notes){
if(cljs.core.truth_(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,notes)))))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38656_SHARP_){
return cljs.core.not(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(p1__38656_SHARP_));
}),notes);
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(notes);
}
});
guitar.modes.explore.combine_scales = (function guitar$modes$explore$combine_scales(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38659 = arguments.length;
var i__4737__auto___38660 = (0);
while(true){
if((i__4737__auto___38660 < len__4736__auto___38659)){
args__4742__auto__.push((arguments[i__4737__auto___38660]));

var G__38661 = (i__4737__auto___38660 + (1));
i__4737__auto___38660 = G__38661;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.distinct_non_highlighted,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38657_SHARP_){
if(cljs.core.empty_QMARK_(p1__38657_SHARP_)){
return null;
} else {
return p1__38657_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,args))));
}));

(guitar.modes.explore.combine_scales.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.combine_scales.cljs$lang$applyTo = (function (seq38658){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38658));
}));

guitar.modes.explore.remove_overshooting_highlights = (function guitar$modes$explore$remove_overshooting_highlights(in_scale,highlight){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38662_SHARP_){
return ((p1__38662_SHARP_ - (1)) >= cljs.core.count(in_scale));
}),highlight);
});
guitar.modes.explore.notes_of_scale = (function guitar$modes$explore$notes_of_scale(p__38664){
var vec__38665 = p__38664;
var start_fret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(2),null);
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(3),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38665,(4),null);
var G__38668 = in_scale;
var G__38669 = start_fret;
var G__38670 = (function (p1__38663_SHARP_){
var hl = guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38663_SHARP_),cljs.core.set(highlight),cljs.core.vec(in_scale),color);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38663_SHARP_,cljs.core.cst$kw$hl,Math.abs(hl),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$emp,(hl > (0))], 0));
});
return (notes.cljs$core$IFn$_invoke$arity$3 ? notes.cljs$core$IFn$_invoke$arity$3(G__38668,G__38669,G__38670) : notes.call(null,G__38668,G__38669,G__38670));
});
guitar.modes.explore.active_scales = (function guitar$modes$explore$active_scales(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38671_SHARP_){
return (p1__38671_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38671_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38671_SHARP_.call(null,state));
}),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.combined_in_scale = (function guitar$modes$explore$combined_in_scale(current_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.notes.scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$root,cljs.core.cst$kw$scale,cljs.core.cst$kw$mode),current_scales)));
});
guitar.modes.explore.combined_highlights = (function guitar$modes$explore$combined_highlights(current_scales,in_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38672){
var vec__38673 = p__38672;
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(0),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(1),null);
return guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight);
}),guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_scales,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$highlight,current_scales)], 0)));
});
guitar.modes.explore.combined_scale_data = (function guitar$modes$explore$combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights){
return guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_fret,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38676_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(p1__38676_SHARP_)),strings_notes);
}),current_scales),in_scales,highlights], 0));
});
guitar.modes.explore.combined_notes = (function guitar$modes$explore$combined_notes(scale_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.modes.explore.combine_scales),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.notes_of_scale,scale_data)));
});
guitar.modes.explore.insert_at = (function guitar$modes$explore$insert_at(coll,at,n){
var vec__38677 = cljs.core.split_at(at,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
});
guitar.modes.explore.rand_color = (function guitar$modes$explore$rand_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38681 = arguments.length;
var i__4737__auto___38682 = (0);
while(true){
if((i__4737__auto___38682 < len__4736__auto___38681)){
args__4742__auto__.push((arguments[i__4737__auto___38682]));

var G__38683 = (i__4737__auto___38682 + (1));
i__4737__auto___38682 = G__38683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.rand_color.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.rand_color.cljs$core$IFn$_invoke$arity$variadic = (function (existing_colors){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(existing_colors)], 0));

return cljs.core.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(existing_colors),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(8))));
}));

(guitar.modes.explore.rand_color.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.rand_color.cljs$lang$applyTo = (function (seq38680){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38680));
}));

guitar.modes.explore.add_scale = (function guitar$modes$explore$add_scale(var_args){
var G__38685 = arguments.length;
switch (G__38685) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,guitar.modes.explore.insert_at(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(guitar.notes.index_of(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),before_key) + (1)),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38686 = cljs.core.deref(state);
return (before_key.cljs$core$IFn$_invoke$arity$1 ? before_key.cljs$core$IFn$_invoke$arity$1(G__38686) : before_key.call(null,G__38686));
})(),cljs.core.cst$kw$color,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.rand_color,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,guitar.modes.explore.active_scales(cljs.core.deref(state)))))], 0));
}));

(guitar.modes.explore.add_scale.cljs$lang$maxFixedArity = 3);

guitar.modes.explore.dec_to_prev_note = (function guitar$modes$explore$dec_to_prev_note(last_strings_notes,in_scale,fret){
return ((fret - (1)) - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38688_SHARP_){
return cljs.core.not((function (){var G__38690 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38688_SHARP_);
var fexpr__38689 = cljs.core.set(in_scale);
return (fexpr__38689.cljs$core$IFn$_invoke$arity$1 ? fexpr__38689.cljs$core$IFn$_invoke$arity$1(G__38690) : fexpr__38689.call(null,G__38690));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(last_strings_notes) - fret),cljs.core.reverse(last_strings_notes)))));
});
guitar.modes.explore.inc_to_next_note = (function guitar$modes$explore$inc_to_next_note(last_strings_notes,in_scale,fret){
return ((fret + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38691_SHARP_){
return cljs.core.not((function (){var G__38693 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38691_SHARP_);
var fexpr__38692 = cljs.core.set(in_scale);
return (fexpr__38692.cljs$core$IFn$_invoke$arity$1 ? fexpr__38692.cljs$core$IFn$_invoke$arity$1(G__38693) : fexpr__38692.call(null,G__38693));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((fret + (1)),last_strings_notes))));
});
guitar.modes.explore.guitar_classes = (function guitar$modes$explore$guitar_classes(highlights){
return ["guitar--faded"," ",((cljs.core.empty_QMARK_(highlights))?null:"guitar--with-highlight")].join('');
});
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (key,on_sub_click,on_add_click,strings_notes,state,tuning,joined_neck){
var map__38696 = rum.core.react(state);
var map__38696__$1 = (((((!((map__38696 == null))))?(((((map__38696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38696):map__38696);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$highlight);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$mode);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38696__$1,cljs.core.cst$kw$color);
var in_scale = guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,mode);
var scale_highlight = cljs.core.set(guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight));
var scale_modes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in_scale),guitar.notes.modes);
return React.createElement(React.Fragment,null,daiquiri.core.create_element("div",null,null),(cljs.core.truth_(joined_neck)?null:daiquiri.interpreter.interpret((function (){var G__38737 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(highlight)], null);
var G__38738 = (function (p1__38694_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__38694_SHARP_));
});
var G__38739 = guitar.modes.explore.combined_notes((new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_fret,color,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,scale),strings_notes),cljs.core.set(in_scale),scale_highlight], null),null,(1),null)));
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38737,G__38738,G__38739) : guitar.guitar.guitar.call(null,G__38737,G__38738,G__38739));
})())),daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38740 = guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.dec_to_prev_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38740))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38740], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38740))?null:[daiquiri.interpreter.interpret(attrs38740)]));
})(),daiquiri.core.create_element("div",{'tabIndex':(0),'className':"column-col guitar-buttons-wrapper"},[daiquiri.interpreter.interpret((function (){var G__38743 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$class,"guitar-buttons-opener"], null);
var G__38744 = "";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38743,G__38744) : guitar.buttons.button.call(null,G__38743,G__38744));
})()),daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38749 = (function (){var G__38760 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38761 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38760,G__38761) : guitar.buttons.button.call(null,G__38760,G__38761));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38749))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38749], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38749))?null:[daiquiri.interpreter.interpret(attrs38749)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38695_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38695_SHARP_,scale,mode)),start_fret,p1__38695_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38754 = (function (){var G__38762 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,guitar.modes.explore.rand_color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0)));
})], null);
var G__38763 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38762,G__38763) : guitar.buttons.button.call(null,G__38762,G__38763));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38754))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38754], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38754))?null:[daiquiri.interpreter.interpret(attrs38754)]));
})(),(function (){var attrs38759 = (function (){var G__38764 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38765 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38764,G__38765) : guitar.buttons.button.call(null,G__38764,G__38765));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38759))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38759], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38759))?null:[daiquiri.interpreter.interpret(attrs38759)]));
})()])]),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.inc_to_next_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276F"),"fret")])]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
guitar.modes.explore.visualize_scales = rum.core.lazy_build(rum.core.build_defc,(function (tuning,strings_notes,state){
var map__38770 = cljs.core.deref(state);
var map__38770__$1 = (((((!((map__38770 == null))))?(((((map__38770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38770):map__38770);
var joined_neck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,cljs.core.cst$kw$joined_DASH_neck);
var condensed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,cljs.core.cst$kw$condensed);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(condensed)?"condensed":null)], null))},[(cljs.core.truth_(joined_neck)?(function (){var current_scales = guitar.modes.explore.active_scales(cljs.core.deref(state));
var in_scales = guitar.modes.explore.combined_in_scale(current_scales);
var highlights = guitar.modes.explore.combined_highlights(current_scales,in_scales);
var scale_data = guitar.modes.explore.combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights);
var notes = guitar.modes.explore.combined_notes(scale_data);
return daiquiri.interpreter.interpret((function (){var G__38780 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(cljs.core.flatten(highlights))], null);
var G__38781 = (function (note){
return cljs.core.reset_BANG_(state,guitar.modes.explore.update_scales(cljs.core.deref(state),(function (p1__38766_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38766_SHARP_,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(note));
})));
});
var G__38782 = notes;
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38780,G__38781,G__38782) : guitar.guitar.guitar.call(null,G__38780,G__38781,G__38782));
})());
})():null),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__38769_SHARP_,p2__38768_SHARP_){
return rum.core.with_key(p2__38768_SHARP_,p1__38769_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38794){
var vec__38795 = p__38794;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38795,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38795,(1),null);
var G__38798 = key;
var G__38799 = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$scales,(function (s){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38767_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__38767_SHARP_);
}),s));
}));
});
var G__38800 = (function (before_key){
guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3(state,guitar.modes.explore.scale_key(),before_key);

return "+";
});
var G__38801 = strings_notes;
var G__38802 = cursor;
var G__38803 = tuning;
var G__38804 = joined_neck;
return (guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7 ? guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7(G__38798,G__38799,G__38800,G__38801,G__38802,G__38803,G__38804) : guitar.modes.explore.visualize_scale.call(null,G__38798,G__38799,G__38800,G__38801,G__38802,G__38803,G__38804));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,state)),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state)))))),((cljs.core.empty_QMARK_(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state))))?(function (){var attrs38776 = (function (){var G__38805 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2(state,guitar.modes.explore.scale_key());
})], null);
var G__38806 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38805,G__38806) : guitar.buttons.button.call(null,G__38805,G__38806));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38776))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38776], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38776))?null:[daiquiri.interpreter.interpret(attrs38776)]));
})():null),daiquiri.interpreter.interpret((function (){var G__38810 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$joined_DASH_neck.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck)], null);
var G__38811 = "Single neck";
var G__38812 = "Exploded neck";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38810,G__38811,G__38812) : guitar.buttons.toggle_button.call(null,G__38810,G__38811,G__38812));
})()),daiquiri.interpreter.interpret((function (){var G__38816 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$condensed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$condensed)], null);
var G__38817 = "Condensed settings";
var G__38818 = "Expanded settings";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38816,G__38817,G__38818) : guitar.buttons.toggle_button.call(null,G__38816,G__38817,G__38818));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scales");
guitar.modes.explore.scale_from = (function guitar$modes$explore$scale_from(scale,fret,color,root,highlights){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38822_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38822_SHARP_,cljs.core.cst$kw$color,color);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38821_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38821_SHARP_,cljs.core.cst$kw$scale,scale);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38820_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38820_SHARP_,cljs.core.cst$kw$highlight,highlights);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38819_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38819_SHARP_,cljs.core.cst$kw$root,root);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,guitar.modes.explore.default_state,cljs.core.cst$kw$start_DASH_fret),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,fret),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,guitar.notes.scale_steps(scale))))))));
});
guitar.modes.explore.example_states = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major, highlighting the root",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor, highlighting the root, 3rd and 5th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(5),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, across all positions, highlighting the C dorian's 3rd and 7th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(14),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(13),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null)], null);
