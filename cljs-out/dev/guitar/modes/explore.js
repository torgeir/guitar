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
goog.require('guitar.maps');
goog.require('hashp.core');
goog.require('rum.core');
guitar.modes.explore.scale_key = (function guitar$modes$explore$scale_key(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
guitar.modes.explore.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$mode,cljs.core.cst$kw$ionian,cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$color,(0),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.initial_state = (function guitar$modes$explore$initial_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38647 = arguments.length;
var i__4737__auto___38648 = (0);
while(true){
if((i__4737__auto___38648 < len__4736__auto___38647)){
args__4742__auto__.push((arguments[i__4737__auto___38648]));

var G__38649 = (i__4737__auto___38648 + (1));
i__4737__auto___38648 = G__38649;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38643){
var vec__38644 = p__38643;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38644,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38644,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,state);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$joined_DASH_neck,true,cljs.core.cst$kw$condensed,true,cljs.core.cst$kw$scales,cljs.core.vec(keys)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,states));
}));

(guitar.modes.explore.initial_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.initial_state.cljs$lang$applyTo = (function (seq38642){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38642));
}));

guitar.modes.explore.state = guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.modes.explore.default_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(3)], 0))], 0));
guitar.modes.explore.update_scales = (function guitar$modes$explore$update_scales(state,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,k,f);
}),state,cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight));
var note_colors = cljs.core.select_keys(guitar.sets.indexed_map(scale_notes),cljs.core.set(keys));
var G__38650 = note;
var G__38651 = ((-1) * default$);
return (note_colors.cljs$core$IFn$_invoke$arity$2 ? note_colors.cljs$core$IFn$_invoke$arity$2(G__38650,G__38651) : note_colors.call(null,G__38650,G__38651));
});
guitar.modes.explore.find_closest_fret_index = (function guitar$modes$explore$find_closest_fret_index(last_strings_notes,scale_notes,fret,note){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38653_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,cljs.core.second(p1__38653_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38654){
var vec__38655 = p__38654;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(0),null);
var note__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.math.diff(fret,index),note__$1,index], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38652_SHARP_){
var G__38658 = cljs.core.second(p1__38652_SHARP_);
return (scale_notes.cljs$core$IFn$_invoke$arity$1 ? scale_notes.cljs$core$IFn$_invoke$arity$1(G__38658) : scale_notes.call(null,G__38658));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note,last_strings_notes))))))));
});
guitar.modes.explore.mode_buttons = (function guitar$modes$explore$mode_buttons(state,scale,modes,mode){
var G__38660 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(mode),cljs.core.cst$kw$on_DASH_click,(function (p1__38659_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38659_SHARP_));
})], null);
var G__38661 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modes);
var G__38662 = guitar.maps.map_keys(cljs.core.name,(scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(guitar.notes.mode_names) : scale.call(null,guitar.notes.mode_names)));
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3(G__38660,G__38661,G__38662) : guitar.buttons.buttons.call(null,G__38660,G__38661,G__38662));
});
guitar.modes.explore.scale_buttons = (function guitar$modes$explore$scale_buttons(state,scales,scale){
var G__38664 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__38663_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38663_SHARP_));
})], null);
var G__38665 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),scales);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38664,G__38665) : guitar.buttons.buttons.call(null,G__38664,G__38665));
});
guitar.modes.explore.note_buttons = (function guitar$modes$explore$note_buttons(state,root,find_start_fret){
var G__38667 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__38666_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__38666_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(find_start_fret.cljs$core$IFn$_invoke$arity$1 ? find_start_fret.cljs$core$IFn$_invoke$arity$1(p1__38666_SHARP_) : find_start_fret.call(null,p1__38666_SHARP_))], 0));
})], null);
var G__38668 = guitar.notes.notes;
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38667,G__38668) : guitar.buttons.buttons.call(null,G__38667,G__38668));
});
guitar.modes.explore.fret_button = (function guitar$modes$explore$fret_button(state,op,fret,text){
var G__38670 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,fret,cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (p1__38669_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$start_DASH_fret,op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38669_SHARP_], 0));
})], null);
var G__38671 = text;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38670,G__38671) : guitar.buttons.button.call(null,G__38670,G__38671));
});
guitar.modes.explore.highlight_buttons = (function guitar$modes$explore$highlight_buttons(state,in_scale,scale_highlight){
var G__38673 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__38674 = scale_highlight;
var G__38675 = (function (p1__38672_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.sets.toggle_in,p1__38672_SHARP_));
});
var G__38676 = guitar.notes.ordinal_suffixed_number;
return (guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4 ? guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4(G__38673,G__38674,G__38675,G__38676) : guitar.buttons.buttons_multi.call(null,G__38673,G__38674,G__38675,G__38676));
});
guitar.modes.explore.zip = (function guitar$modes$explore$zip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38678 = arguments.length;
var i__4737__auto___38679 = (0);
while(true){
if((i__4737__auto___38679 < len__4736__auto___38678)){
args__4742__auto__.push((arguments[i__4737__auto___38679]));

var G__38680 = (i__4737__auto___38679 + (1));
i__4737__auto___38679 = G__38680;
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
(guitar.modes.explore.zip.cljs$lang$applyTo = (function (seq38677){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38677));
}));

guitar.modes.explore.distinct_non_highlighted = (function guitar$modes$explore$distinct_non_highlighted(notes){
if(cljs.core.truth_(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,notes)))))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38681_SHARP_){
return cljs.core.not(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(p1__38681_SHARP_));
}),notes);
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(notes);
}
});
guitar.modes.explore.combine_scales = (function guitar$modes$explore$combine_scales(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38684 = arguments.length;
var i__4737__auto___38685 = (0);
while(true){
if((i__4737__auto___38685 < len__4736__auto___38684)){
args__4742__auto__.push((arguments[i__4737__auto___38685]));

var G__38686 = (i__4737__auto___38685 + (1));
i__4737__auto___38685 = G__38686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.distinct_non_highlighted,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38682_SHARP_){
if(cljs.core.empty_QMARK_(p1__38682_SHARP_)){
return null;
} else {
return p1__38682_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,args))));
}));

(guitar.modes.explore.combine_scales.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.combine_scales.cljs$lang$applyTo = (function (seq38683){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38683));
}));

guitar.modes.explore.remove_overshooting_highlights = (function guitar$modes$explore$remove_overshooting_highlights(in_scale,highlight){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38687_SHARP_){
return ((p1__38687_SHARP_ - (1)) >= cljs.core.count(in_scale));
}),highlight);
});
guitar.modes.explore.notes_of_scale = (function guitar$modes$explore$notes_of_scale(p__38689){
var vec__38690 = p__38689;
var start_fret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(2),null);
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(3),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(4),null);
var G__38693 = in_scale;
var G__38694 = start_fret;
var G__38695 = (function (p1__38688_SHARP_){
var hl = guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38688_SHARP_),cljs.core.set(highlight),cljs.core.vec(in_scale),color);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38688_SHARP_,cljs.core.cst$kw$hl,Math.abs(hl),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$emp,(hl > (0))], 0));
});
return (notes.cljs$core$IFn$_invoke$arity$3 ? notes.cljs$core$IFn$_invoke$arity$3(G__38693,G__38694,G__38695) : notes.call(null,G__38693,G__38694,G__38695));
});
guitar.modes.explore.active_scales = (function guitar$modes$explore$active_scales(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38696_SHARP_){
return (p1__38696_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38696_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38696_SHARP_.call(null,state));
}),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.combined_in_scale = (function guitar$modes$explore$combined_in_scale(current_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.notes.scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$root,cljs.core.cst$kw$scale,cljs.core.cst$kw$mode),current_scales)));
});
guitar.modes.explore.combined_highlights = (function guitar$modes$explore$combined_highlights(current_scales,in_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38697){
var vec__38698 = p__38697;
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38698,(0),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38698,(1),null);
return guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight);
}),guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_scales,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$highlight,current_scales)], 0)));
});
guitar.modes.explore.combined_scale_data = (function guitar$modes$explore$combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights){
return guitar.modes.explore.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_fret,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38701_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(p1__38701_SHARP_)),strings_notes);
}),current_scales),in_scales,highlights], 0));
});
guitar.modes.explore.combined_notes = (function guitar$modes$explore$combined_notes(scale_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.modes.explore.combine_scales),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.zip,cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.notes_of_scale,scale_data)));
});
guitar.modes.explore.insert_at = (function guitar$modes$explore$insert_at(coll,at,n){
var vec__38702 = cljs.core.split_at(at,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38702,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38702,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)));
});
guitar.modes.explore.rand_color = (function guitar$modes$explore$rand_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38706 = arguments.length;
var i__4737__auto___38707 = (0);
while(true){
if((i__4737__auto___38707 < len__4736__auto___38706)){
args__4742__auto__.push((arguments[i__4737__auto___38707]));

var G__38708 = (i__4737__auto___38707 + (1));
i__4737__auto___38707 = G__38708;
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
(guitar.modes.explore.rand_color.cljs$lang$applyTo = (function (seq38705){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38705));
}));

guitar.modes.explore.add_scale = (function guitar$modes$explore$add_scale(var_args){
var G__38710 = arguments.length;
switch (G__38710) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,guitar.modes.explore.insert_at(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(guitar.notes.index_of(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),before_key) + (1)),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38711 = cljs.core.deref(state);
return (before_key.cljs$core$IFn$_invoke$arity$1 ? before_key.cljs$core$IFn$_invoke$arity$1(G__38711) : before_key.call(null,G__38711));
})(),cljs.core.cst$kw$color,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.rand_color,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,guitar.modes.explore.active_scales(cljs.core.deref(state)))))], 0));
}));

(guitar.modes.explore.add_scale.cljs$lang$maxFixedArity = 3);

guitar.modes.explore.dec_to_prev_note = (function guitar$modes$explore$dec_to_prev_note(last_strings_notes,in_scale,fret){
return ((fret - (1)) - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38713_SHARP_){
return cljs.core.not((function (){var G__38715 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38713_SHARP_);
var fexpr__38714 = cljs.core.set(in_scale);
return (fexpr__38714.cljs$core$IFn$_invoke$arity$1 ? fexpr__38714.cljs$core$IFn$_invoke$arity$1(G__38715) : fexpr__38714.call(null,G__38715));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(last_strings_notes) - fret),cljs.core.reverse(last_strings_notes)))));
});
guitar.modes.explore.inc_to_next_note = (function guitar$modes$explore$inc_to_next_note(last_strings_notes,in_scale,fret){
return ((fret + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38716_SHARP_){
return cljs.core.not((function (){var G__38718 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38716_SHARP_);
var fexpr__38717 = cljs.core.set(in_scale);
return (fexpr__38717.cljs$core$IFn$_invoke$arity$1 ? fexpr__38717.cljs$core$IFn$_invoke$arity$1(G__38718) : fexpr__38717.call(null,G__38718));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((fret + (1)),last_strings_notes))));
});
guitar.modes.explore.guitar_classes = (function guitar$modes$explore$guitar_classes(highlights){
return ["guitar--faded"," ",((cljs.core.empty_QMARK_(highlights))?null:"guitar--with-highlight")].join('');
});
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (key,on_sub_click,on_add_click,strings_notes,state,tuning,joined_neck){
var map__38721 = rum.core.react(state);
var map__38721__$1 = (((((!((map__38721 == null))))?(((((map__38721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38721):map__38721);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$highlight);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$mode);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38721__$1,cljs.core.cst$kw$color);
var in_scale = guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,mode);
var scale_highlight = cljs.core.set(guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight));
var scale_modes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in_scale),guitar.notes.modes);
return React.createElement(React.Fragment,null,daiquiri.core.create_element("div",null,null),(cljs.core.truth_(joined_neck)?null:daiquiri.interpreter.interpret((function (){var G__38762 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(highlight)], null);
var G__38763 = (function (p1__38719_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__38719_SHARP_));
});
var G__38764 = guitar.modes.explore.combined_notes((new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_fret,color,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,scale),strings_notes),cljs.core.set(in_scale),scale_highlight], null),null,(1),null)));
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38762,G__38763,G__38764) : guitar.guitar.guitar.call(null,G__38762,G__38763,G__38764));
})())),daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38765 = guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.dec_to_prev_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38765))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38765], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38765))?null:[daiquiri.interpreter.interpret(attrs38765)]));
})(),daiquiri.core.create_element("div",{'tabIndex':(0),'className':"column-col guitar-buttons-wrapper"},[daiquiri.interpreter.interpret((function (){var G__38768 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$class,"guitar-buttons-opener"], null);
var G__38769 = "";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38768,G__38769) : guitar.buttons.button.call(null,G__38768,G__38769));
})()),daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38774 = (function (){var G__38785 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38786 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38785,G__38786) : guitar.buttons.button.call(null,G__38785,G__38786));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38774))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38774], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38774))?null:[daiquiri.interpreter.interpret(attrs38774)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38720_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38720_SHARP_,scale,mode)),start_fret,p1__38720_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38779 = (function (){var G__38787 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,guitar.modes.explore.rand_color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0)));
})], null);
var G__38788 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38787,G__38788) : guitar.buttons.button.call(null,G__38787,G__38788));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38779))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38779], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38779))?null:[daiquiri.interpreter.interpret(attrs38779)]));
})(),(function (){var attrs38784 = (function (){var G__38789 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38790 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38789,G__38790) : guitar.buttons.button.call(null,G__38789,G__38790));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38784))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38784], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38784))?null:[daiquiri.interpreter.interpret(attrs38784)]));
})()])]),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.inc_to_next_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276F"),"fret")])]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
guitar.modes.explore.visualize_scales = rum.core.lazy_build(rum.core.build_defc,(function (tuning,strings_notes,state){
var map__38795 = cljs.core.deref(state);
var map__38795__$1 = (((((!((map__38795 == null))))?(((((map__38795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38795):map__38795);
var joined_neck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38795__$1,cljs.core.cst$kw$joined_DASH_neck);
var condensed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38795__$1,cljs.core.cst$kw$condensed);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(condensed)?"condensed":null)], null))},[(cljs.core.truth_(joined_neck)?(function (){var current_scales = guitar.modes.explore.active_scales(cljs.core.deref(state));
var in_scales = guitar.modes.explore.combined_in_scale(current_scales);
var highlights = guitar.modes.explore.combined_highlights(current_scales,in_scales);
var scale_data = guitar.modes.explore.combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights);
var notes = guitar.modes.explore.combined_notes(scale_data);
return daiquiri.interpreter.interpret((function (){var G__38805 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(cljs.core.flatten(highlights))], null);
var G__38806 = (function (note){
return cljs.core.reset_BANG_(state,guitar.modes.explore.update_scales(cljs.core.deref(state),(function (p1__38791_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38791_SHARP_,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(note));
})));
});
var G__38807 = notes;
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38805,G__38806,G__38807) : guitar.guitar.guitar.call(null,G__38805,G__38806,G__38807));
})());
})():null),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__38794_SHARP_,p2__38793_SHARP_){
return rum.core.with_key(p2__38793_SHARP_,p1__38794_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38819){
var vec__38820 = p__38819;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38820,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38820,(1),null);
var G__38823 = key;
var G__38824 = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$scales,(function (s){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38792_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__38792_SHARP_);
}),s));
}));
});
var G__38825 = (function (before_key){
guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3(state,guitar.modes.explore.scale_key(),before_key);

return "+";
});
var G__38826 = strings_notes;
var G__38827 = cursor;
var G__38828 = tuning;
var G__38829 = joined_neck;
return (guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7 ? guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7(G__38823,G__38824,G__38825,G__38826,G__38827,G__38828,G__38829) : guitar.modes.explore.visualize_scale.call(null,G__38823,G__38824,G__38825,G__38826,G__38827,G__38828,G__38829));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,state)),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state)))))),((cljs.core.empty_QMARK_(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state))))?(function (){var attrs38801 = (function (){var G__38830 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2(state,guitar.modes.explore.scale_key());
})], null);
var G__38831 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38830,G__38831) : guitar.buttons.button.call(null,G__38830,G__38831));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38801))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38801], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38801))?null:[daiquiri.interpreter.interpret(attrs38801)]));
})():null),daiquiri.interpreter.interpret((function (){var G__38835 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$joined_DASH_neck.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck)], null);
var G__38836 = "Single neck";
var G__38837 = "Exploded neck";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38835,G__38836,G__38837) : guitar.buttons.toggle_button.call(null,G__38835,G__38836,G__38837));
})()),daiquiri.interpreter.interpret((function (){var G__38841 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$condensed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$condensed)], null);
var G__38842 = "Condensed settings";
var G__38843 = "Expanded settings";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38841,G__38842,G__38843) : guitar.buttons.toggle_button.call(null,G__38841,G__38842,G__38843));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scales");
guitar.modes.explore.scale_from = (function guitar$modes$explore$scale_from(scale,fret,color,root,highlights){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38847_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38847_SHARP_,cljs.core.cst$kw$color,color);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38846_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38846_SHARP_,cljs.core.cst$kw$scale,scale);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38845_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38845_SHARP_,cljs.core.cst$kw$highlight,highlights);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38844_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38844_SHARP_,cljs.core.cst$kw$root,root);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,guitar.modes.explore.default_state,cljs.core.cst$kw$start_DASH_fret),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,fret),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,guitar.notes.scale_steps(scale))))))));
});
guitar.modes.explore.example_states = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major, highlighting the root",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor, highlighting the root, 3rd and 5th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(5),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, across all positions, highlighting the C dorian's 3rd and 7th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(14),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(13),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null)], null);
