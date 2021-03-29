// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.modes.explore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('guitar.notes');
goog.require('guitar.patterns');
goog.require('guitar.buttons');
goog.require('guitar.guitar');
goog.require('guitar.math');
goog.require('guitar.colors');
goog.require('guitar.sets');
goog.require('guitar.seqs');
goog.require('guitar.maps');
goog.require('hashp.core');
goog.require('rum.core');
guitar.modes.explore.scale_key = (function guitar$modes$explore$scale_key(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
guitar.modes.explore.default_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$mode,cljs.core.cst$kw$ionian,cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8),cljs.core.cst$kw$color,(0),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
guitar.modes.explore.initial_state = (function guitar$modes$explore$initial_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38662 = arguments.length;
var i__4737__auto___38663 = (0);
while(true){
if((i__4737__auto___38663 < len__4736__auto___38662)){
args__4742__auto__.push((arguments[i__4737__auto___38663]));

var G__38664 = (i__4737__auto___38663 + (1));
i__4737__auto___38663 = G__38664;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38658){
var vec__38659 = p__38658;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38659,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38659,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,state);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$joined_DASH_neck,true,cljs.core.cst$kw$condensed,true,cljs.core.cst$kw$scales,cljs.core.vec(keys)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,states));
}));

(guitar.modes.explore.initial_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.initial_state.cljs$lang$applyTo = (function (seq38657){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38657));
}));

guitar.modes.explore.state = guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guitar.modes.explore.default_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(3)], 0))], 0));
guitar.modes.explore.update_scales = (function guitar$modes$explore$update_scales(state,f){
return guitar.maps.update_maps(f,state,cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.active_scales = (function guitar$modes$explore$active_scales(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38665_SHARP_){
return (p1__38665_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38665_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__38665_SHARP_.call(null,state));
}),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(state));
});
guitar.modes.explore.mode_buttons = (function guitar$modes$explore$mode_buttons(state,scale,modes,mode){
var G__38667 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(mode),cljs.core.cst$kw$on_DASH_click,(function (p1__38666_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38666_SHARP_));
})], null);
var G__38668 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modes);
var G__38669 = guitar.maps.map_keys(cljs.core.name,(scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(guitar.notes.mode_names) : scale.call(null,guitar.notes.mode_names)));
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$3(G__38667,G__38668,G__38669) : guitar.buttons.buttons.call(null,G__38667,G__38668,G__38669));
});
guitar.modes.explore.scale_buttons = (function guitar$modes$explore$scale_buttons(state,scales,scale){
var G__38671 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.name(scale),cljs.core.cst$kw$on_DASH_click,(function (p1__38670_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38670_SHARP_));
})], null);
var G__38672 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),scales);
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38671,G__38672) : guitar.buttons.buttons.call(null,G__38671,G__38672));
});
guitar.modes.explore.note_buttons = (function guitar$modes$explore$note_buttons(state,root,find_start_fret){
var G__38674 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,root,cljs.core.cst$kw$on_DASH_click,(function (p1__38673_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__38673_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(find_start_fret.cljs$core$IFn$_invoke$arity$1 ? find_start_fret.cljs$core$IFn$_invoke$arity$1(p1__38673_SHARP_) : find_start_fret.call(null,p1__38673_SHARP_))], 0));
})], null);
var G__38675 = guitar.notes.notes;
return (guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.buttons.cljs$core$IFn$_invoke$arity$2(G__38674,G__38675) : guitar.buttons.buttons.call(null,G__38674,G__38675));
});
guitar.modes.explore.fret_button = (function guitar$modes$explore$fret_button(state,op,fret,text){
var G__38677 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,fret,cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (p1__38676_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$start_DASH_fret,op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38676_SHARP_], 0));
})], null);
var G__38678 = text;
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38677,G__38678) : guitar.buttons.button.call(null,G__38677,G__38678));
});
guitar.modes.explore.highlight_buttons = (function guitar$modes$explore$highlight_buttons(state,in_scale,scale_highlight){
var G__38680 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(in_scale) + (1)));
var G__38681 = scale_highlight;
var G__38682 = (function (p1__38679_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$highlight,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.sets.toggle_in,p1__38679_SHARP_));
});
var G__38683 = guitar.notes.ordinal_suffixed_number;
return (guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4 ? guitar.buttons.buttons_multi.cljs$core$IFn$_invoke$arity$4(G__38680,G__38681,G__38682,G__38683) : guitar.buttons.buttons_multi.call(null,G__38680,G__38681,G__38682,G__38683));
});
guitar.modes.explore.distinct_non_highlighted = (function guitar$modes$explore$distinct_non_highlighted(notes){
if(cljs.core.truth_(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,notes)))))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38684_SHARP_){
return cljs.core.not(cljs.core.cst$kw$hl.cljs$core$IFn$_invoke$arity$1(p1__38684_SHARP_));
}),notes);
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(notes);
}
});
guitar.modes.explore.combine_scales = (function guitar$modes$explore$combine_scales(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38687 = arguments.length;
var i__4737__auto___38688 = (0);
while(true){
if((i__4737__auto___38688 < len__4736__auto___38687)){
args__4742__auto__.push((arguments[i__4737__auto___38688]));

var G__38689 = (i__4737__auto___38688 + (1));
i__4737__auto___38688 = G__38689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(guitar.modes.explore.combine_scales.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.distinct_non_highlighted,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38685_SHARP_){
if(cljs.core.empty_QMARK_(p1__38685_SHARP_)){
return null;
} else {
return p1__38685_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.seqs.zip,args))));
}));

(guitar.modes.explore.combine_scales.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(guitar.modes.explore.combine_scales.cljs$lang$applyTo = (function (seq38686){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38686));
}));

guitar.modes.explore.remove_overshooting_highlights = (function guitar$modes$explore$remove_overshooting_highlights(in_scale,highlight){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38690_SHARP_){
return ((p1__38690_SHARP_ - (1)) >= cljs.core.count(in_scale));
}),highlight);
});
guitar.modes.explore.hl_notes = (function guitar$modes$explore$hl_notes(note,notes_to_highlight,scale_notes,default$){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,notes_to_highlight));
var note_colors = cljs.core.select_keys(guitar.sets.indexed_map(scale_notes),cljs.core.set(keys));
var G__38691 = note;
var G__38692 = ((-1) * default$);
return (note_colors.cljs$core$IFn$_invoke$arity$2 ? note_colors.cljs$core$IFn$_invoke$arity$2(G__38691,G__38692) : note_colors.call(null,G__38691,G__38692));
});
guitar.modes.explore.notes_of_scale = (function guitar$modes$explore$notes_of_scale(p__38694){
var vec__38695 = p__38694;
var start_fret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(2),null);
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(3),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(4),null);
var G__38698 = in_scale;
var G__38699 = start_fret;
var G__38700 = (function (p1__38693_SHARP_){
var hl = guitar.modes.explore.hl_notes(cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38693_SHARP_),cljs.core.set(highlight),cljs.core.vec(in_scale),color);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38693_SHARP_,cljs.core.cst$kw$hl,Math.abs(hl),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$emp,(hl > (0))], 0));
});
return (notes.cljs$core$IFn$_invoke$arity$3 ? notes.cljs$core$IFn$_invoke$arity$3(G__38698,G__38699,G__38700) : notes.call(null,G__38698,G__38699,G__38700));
});
guitar.modes.explore.combined_in_scale = (function guitar$modes$explore$combined_in_scale(current_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.notes.scale_notes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$root,cljs.core.cst$kw$scale,cljs.core.cst$kw$mode),current_scales)));
});
guitar.modes.explore.combined_highlights = (function guitar$modes$explore$combined_highlights(current_scales,in_scales){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38701){
var vec__38702 = p__38701;
var in_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38702,(0),null);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38702,(1),null);
return guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight);
}),guitar.seqs.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_scales,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$highlight,current_scales)], 0)));
});
guitar.modes.explore.combined_scale_data = (function guitar$modes$explore$combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights){
return guitar.seqs.zip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_fret,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,current_scales),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38705_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(p1__38705_SHARP_)),strings_notes);
}),current_scales),in_scales,highlights], 0));
});
guitar.modes.explore.combined_notes = (function guitar$modes$explore$combined_notes(scale_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,guitar.modes.explore.combine_scales),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.seqs.zip,cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.notes_of_scale,scale_data)));
});
guitar.modes.explore.add_scale = (function guitar$modes$explore$add_scale(var_args){
var G__38707 = arguments.length;
switch (G__38707) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$scales,guitar.seqs.insert_at(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(guitar.seqs.index_of(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),before_key) + (1)),new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38708 = cljs.core.deref(state);
return (before_key.cljs$core$IFn$_invoke$arity$1 ? before_key.cljs$core$IFn$_invoke$arity$1(G__38708) : before_key.call(null,G__38708));
})(),cljs.core.cst$kw$color,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.colors.rand_color,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,guitar.modes.explore.active_scales(cljs.core.deref(state)))))], 0));
}));

(guitar.modes.explore.add_scale.cljs$lang$maxFixedArity = 3);

guitar.modes.explore.dec_to_prev_note = (function guitar$modes$explore$dec_to_prev_note(last_strings_notes,in_scale,fret){
return ((fret - (1)) - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38710_SHARP_){
return cljs.core.not((function (){var G__38712 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38710_SHARP_);
var fexpr__38711 = cljs.core.set(in_scale);
return (fexpr__38711.cljs$core$IFn$_invoke$arity$1 ? fexpr__38711.cljs$core$IFn$_invoke$arity$1(G__38712) : fexpr__38711.call(null,G__38712));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(last_strings_notes) - fret),cljs.core.reverse(last_strings_notes)))));
});
guitar.modes.explore.inc_to_next_note = (function guitar$modes$explore$inc_to_next_note(last_strings_notes,in_scale,fret){
return ((fret + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__38713_SHARP_){
return cljs.core.not((function (){var G__38715 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(p1__38713_SHARP_);
var fexpr__38714 = cljs.core.set(in_scale);
return (fexpr__38714.cljs$core$IFn$_invoke$arity$1 ? fexpr__38714.cljs$core$IFn$_invoke$arity$1(G__38715) : fexpr__38714.call(null,G__38715));
})());
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((fret + (1)),last_strings_notes))));
});
guitar.modes.explore.find_closest_fret_index = (function guitar$modes$explore$find_closest_fret_index(last_strings_notes,scale_notes,fret,note){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38717_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(note,cljs.core.second(p1__38717_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38718){
var vec__38719 = p__38718;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38719,(0),null);
var note__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38719,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar.math.diff(fret,index),note__$1,index], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38716_SHARP_){
var G__38722 = cljs.core.second(p1__38716_SHARP_);
return (scale_notes.cljs$core$IFn$_invoke$arity$1 ? scale_notes.cljs$core$IFn$_invoke$arity$1(G__38722) : scale_notes.call(null,G__38722));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$note,last_strings_notes))))))));
});
guitar.modes.explore.guitar_classes = (function guitar$modes$explore$guitar_classes(highlights){
return ["guitar--faded"," ",((cljs.core.empty_QMARK_(highlights))?null:"guitar--with-highlight")].join('');
});
guitar.modes.explore.visualize_scale = rum.core.lazy_build(rum.core.build_defc,(function (key,on_sub_click,on_add_click,strings_notes,state,tuning,joined_neck){
var map__38725 = rum.core.react(state);
var map__38725__$1 = (((((!((map__38725 == null))))?(((((map__38725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38725):map__38725);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$start_DASH_fret);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$highlight);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$mode);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$color);
var in_scale = guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(root,scale,mode);
var scale_highlight = cljs.core.set(guitar.modes.explore.remove_overshooting_highlights(in_scale,highlight));
var scale_modes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in_scale),guitar.notes.modes);
return React.createElement(React.Fragment,null,daiquiri.core.create_element("div",null,null),(cljs.core.truth_(joined_neck)?null:daiquiri.interpreter.interpret((function (){var G__38766 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(highlight)], null);
var G__38767 = (function (p1__38723_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(p1__38723_SHARP_));
});
var G__38768 = guitar.modes.explore.combined_notes((new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_fret,color,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.patterns.scale_pattern(tuning,scale),strings_notes),cljs.core.set(in_scale),scale_highlight], null),null,(1),null)));
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38766,G__38767,G__38768) : guitar.guitar.guitar.call(null,G__38766,G__38767,G__38768));
})())),daiquiri.core.create_element("div",{'className':"column"},[(function (){var attrs38769 = guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.dec_to_prev_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276E");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38769))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-col"], null)], null),attrs38769], 0))):{'className':"column-col"}),((cljs.core.map_QMARK_(attrs38769))?null:[daiquiri.interpreter.interpret(attrs38769)]));
})(),daiquiri.core.create_element("div",{'tabIndex':(0),'className':"column-col guitar-buttons-wrapper"},[daiquiri.interpreter.interpret((function (){var G__38772 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$class,"guitar-buttons-opener"], null);
var G__38773 = "";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38772,G__38773) : guitar.buttons.button.call(null,G__38772,G__38773));
})()),daiquiri.core.create_element("div",{'className':"guitar-buttons"},[(function (){var attrs38778 = (function (){var G__38789 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_sub_click.cljs$core$IFn$_invoke$arity$1 ? on_sub_click.cljs$core$IFn$_invoke$arity$1(key) : on_sub_click.call(null,key));
})], null);
var G__38790 = "-";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38789,G__38790) : guitar.buttons.button.call(null,G__38789,G__38790));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38778))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38778], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38778))?null:[daiquiri.interpreter.interpret(attrs38778)]));
})(),rum.core.with_key(guitar.modes.explore.mode_buttons(state,scale,scale_modes,mode),"modes"),rum.core.with_key(guitar.modes.explore.note_buttons(state,root,(function (p1__38724_SHARP_){
return guitar.modes.explore.find_closest_fret_index(cljs.core.last(strings_notes),cljs.core.set(guitar.notes.scale_notes.cljs$core$IFn$_invoke$arity$3(p1__38724_SHARP_,scale,mode)),start_fret,p1__38724_SHARP_);
})),"notes"),rum.core.with_key(guitar.modes.explore.scale_buttons(state,guitar.notes.scales,scale),"scales"),rum.core.with_key(guitar.modes.explore.highlight_buttons(state,in_scale,scale_highlight),"highlights"),(function (){var attrs38783 = (function (){var G__38791 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$color,guitar.colors.rand_color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0)));
})], null);
var G__38792 = "Colorize";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38791,G__38792) : guitar.buttons.button.call(null,G__38791,G__38792));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38783))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38783], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38783))?null:[daiquiri.interpreter.interpret(attrs38783)]));
})(),(function (){var attrs38788 = (function (){var G__38793 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"button--square",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_add_click.cljs$core$IFn$_invoke$arity$1 ? on_add_click.cljs$core$IFn$_invoke$arity$1(key) : on_add_click.call(null,key));
})], null);
var G__38794 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38793,G__38794) : guitar.buttons.button.call(null,G__38793,G__38794));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38788))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38788], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38788))?null:[daiquiri.interpreter.interpret(attrs38788)]));
})()])]),daiquiri.core.create_element("div",{'className':"column-col"},[rum.core.with_key(guitar.modes.explore.fret_button(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.inc_to_next_note,cljs.core.last(strings_notes),in_scale),start_fret,"\u276F"),"fret")])]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scale");
guitar.modes.explore.visualize_scales = rum.core.lazy_build(rum.core.build_defc,(function (tuning,strings_notes,state){
var map__38799 = cljs.core.deref(state);
var map__38799__$1 = (((((!((map__38799 == null))))?(((((map__38799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38799):map__38799);
var joined_neck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,cljs.core.cst$kw$joined_DASH_neck);
var condensed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38799__$1,cljs.core.cst$kw$condensed);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(condensed)?"condensed":null)], null))},[(cljs.core.truth_(joined_neck)?(function (){var current_scales = guitar.modes.explore.active_scales(cljs.core.deref(state));
var in_scales = guitar.modes.explore.combined_in_scale(current_scales);
var highlights = guitar.modes.explore.combined_highlights(current_scales,in_scales);
var scale_data = guitar.modes.explore.combined_scale_data(current_scales,in_scales,tuning,strings_notes,highlights);
var notes = guitar.modes.explore.combined_notes(scale_data);
return daiquiri.interpreter.interpret((function (){var G__38809 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,guitar.modes.explore.guitar_classes(cljs.core.flatten(highlights))], null);
var G__38810 = (function (note){
return cljs.core.reset_BANG_(state,guitar.modes.explore.update_scales(cljs.core.deref(state),(function (p1__38795_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38795_SHARP_,cljs.core.cst$kw$start_DASH_fret,cljs.core.cst$kw$fret.cljs$core$IFn$_invoke$arity$1(note));
})));
});
var G__38811 = notes;
return (guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.guitar.guitar.cljs$core$IFn$_invoke$arity$3(G__38809,G__38810,G__38811) : guitar.guitar.guitar.call(null,G__38809,G__38810,G__38811));
})());
})():null),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__38798_SHARP_,p2__38797_SHARP_){
return rum.core.with_key(p2__38797_SHARP_,p1__38798_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38823){
var vec__38824 = p__38823;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(1),null);
var G__38827 = key;
var G__38828 = (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$scales,(function (s){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38796_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__38796_SHARP_);
}),s));
}));
});
var G__38829 = (function (before_key){
guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$3(state,guitar.modes.explore.scale_key(),before_key);

return "+";
});
var G__38830 = strings_notes;
var G__38831 = cursor;
var G__38832 = tuning;
var G__38833 = joined_neck;
return (guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7 ? guitar.modes.explore.visualize_scale.cljs$core$IFn$_invoke$arity$7(G__38827,G__38828,G__38829,G__38830,G__38831,G__38832,G__38833) : guitar.modes.explore.visualize_scale.call(null,G__38827,G__38828,G__38829,G__38830,G__38831,G__38832,G__38833));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rum.core.cursor,state)),cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state)))))),((cljs.core.empty_QMARK_(cljs.core.cst$kw$scales.cljs$core$IFn$_invoke$arity$1(rum.core.react(state))))?(function (){var attrs38805 = (function (){var G__38834 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return guitar.modes.explore.add_scale.cljs$core$IFn$_invoke$arity$2(state,guitar.modes.explore.scale_key());
})], null);
var G__38835 = "+";
return (guitar.buttons.button.cljs$core$IFn$_invoke$arity$2 ? guitar.buttons.button.cljs$core$IFn$_invoke$arity$2(G__38834,G__38835) : guitar.buttons.button.call(null,G__38834,G__38835));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs38805))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buttons"], null)], null),attrs38805], 0))):{'className':"buttons"}),((cljs.core.map_QMARK_(attrs38805))?null:[daiquiri.interpreter.interpret(attrs38805)]));
})():null),daiquiri.interpreter.interpret((function (){var G__38839 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$joined_DASH_neck.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$joined_DASH_neck)], null);
var G__38840 = "Single neck";
var G__38841 = "Exploded neck";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38839,G__38840,G__38841) : guitar.buttons.toggle_button.call(null,G__38839,G__38840,G__38841));
})()),daiquiri.interpreter.interpret((function (){var G__38845 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$condensed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,cljs.core.cst$kw$condensed)], null);
var G__38846 = "Condensed settings";
var G__38847 = "Expanded settings";
return (guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3 ? guitar.buttons.toggle_button.cljs$core$IFn$_invoke$arity$3(G__38845,G__38846,G__38847) : guitar.buttons.toggle_button.call(null,G__38845,G__38846,G__38847));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.modes.explore/visualize-scales");
guitar.modes.explore.scale_from = (function guitar$modes$explore$scale_from(scale,fret,color,root,highlights){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38851_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38851_SHARP_,cljs.core.cst$kw$color,color);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38850_SHARP_,cljs.core.cst$kw$scale,scale);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38849_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38849_SHARP_,cljs.core.cst$kw$highlight,highlights);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38848_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38848_SHARP_,cljs.core.cst$kw$root,root);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,guitar.modes.explore.default_state,cljs.core.cst$kw$start_DASH_fret),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,fret),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,guitar.notes.scale_steps(scale))))))));
});
guitar.modes.explore.example_states = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of C Major, highlighting the root",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$major,(6),(0),"c",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Modes of G Melodic Minor, highlighting the root, 3rd and 5th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(guitar.modes.explore.initial_state,guitar.modes.explore.scale_from(cljs.core.cst$kw$melodic_DASH_minor,(1),(3),"g",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(5),null], null), null))),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,false)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, in root and 3rd position respectively",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$color,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Compare C dorian major and A minor pentatonic, joined, across all positions, highlighting the C dorian's 3rd and 7th",cljs.core.cst$kw$state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guitar.modes.explore.initial_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(9),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$mode,cljs.core.cst$kw$dorian,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(14),cljs.core.cst$kw$highlight,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(3),null], null), null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(5),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(10),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(guitar.modes.explore.default_state,cljs.core.cst$kw$root,"a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_fret,(13),cljs.core.cst$kw$color,(1),cljs.core.cst$kw$highlight,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scale,cljs.core.cst$kw$minor_DASH_pentatonic], 0))], 0)),cljs.core.cst$kw$joined_DASH_neck,true)], null)], null);
