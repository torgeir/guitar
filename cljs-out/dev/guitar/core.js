// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.notes');
goog.require('guitar.setup');
goog.require('guitar.unicode');
goog.require('rum.core');
guitar.core.debug = (function guitar$core$debug(v){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

return v;
});
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.setup.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.notes.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null),cljs.core.cst$kw$explore,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major,cljs.core.cst$kw$start_DASH_fret,(8)], null)], null));
}
guitar.core.scale_note = rum.core.lazy_build(rum.core.build_defc,(function (p__14259){
var map__14260 = p__14259;
var map__14260__$1 = (((((!((map__14260 == null))))?(((((map__14260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14260):map__14260);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14260__$1,cljs.core.cst$kw$note);
var hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14260__$1,cljs.core.cst$kw$hl);
if(cljs.core.truth_(note)){
var attrs14258 = (cljs.core.truth_(hl)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"scale-note--hl",cljs.core.cst$kw$title,note], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14258))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-note"], null)], null),attrs14258], 0))):{'className':"scale-note"}),((cljs.core.map_QMARK_(attrs14258))?[daiquiri.interpreter.interpret(note)]:[daiquiri.interpreter.interpret(attrs14258),daiquiri.interpreter.interpret(note)]));
} else {
return null;
}
}),null,"guitar.core/scale-note");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (on_click,index,note){
return daiquiri.core.create_element("div",{'onMouseOver':(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(index) : on_click.call(null,index));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((index === (0)))?"guitar-nut":"guitar-fret")], null))},[(guitar.core.scale_note.cljs$core$IFn$_invoke$arity$1 ? guitar.core.scale_note.cljs$core$IFn$_invoke$arity$1(note) : guitar.core.scale_note.call(null,note))]);
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (on_fret_click,notes){
var attrs14264 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14263_SHARP_,p2__14262_SHARP_){
return rum.core.with_key(p2__14262_SHARP_,p1__14263_SHARP_);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,on_fret_click),notes));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14264))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14264], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14264))?null:[daiquiri.interpreter.interpret(attrs14264)]));
}),null,"guitar.core/guitar-string");
guitar.core.locate_note_text = rum.core.lazy_build(rum.core.build_defc,(function (p__14265){
var map__14266 = p__14265;
var map__14266__$1 = (((((!((map__14266 == null))))?(((((map__14266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14266):map__14266);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14266__$1,cljs.core.cst$kw$note);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14266__$1,cljs.core.cst$kw$string);
return daiquiri.core.create_element("p",null,[["Locate ",guitar.notes.prefixed_note(note)," on the ",guitar.notes.ordinal_suffixed_number(string)," string."].join('')]);
}),null,"guitar.core/locate-note-text");
guitar.core.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,on_fret_click,string_notes){
var attrs14270 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14270))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs14270], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs14270))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14269_SHARP_,p2__14268_SHARP_){
return rum.core.with_key(p2__14268_SHARP_,p1__14269_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,on_fret_click),string_notes)))]:[daiquiri.interpreter.interpret(attrs14270),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14269_SHARP_,p2__14268_SHARP_){
return rum.core.with_key(p2__14268_SHARP_,p1__14269_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,on_fret_click),string_notes)))]));
}),null,"guitar.core/guitar");
guitar.core.guess_fretboard_notes = rum.core.lazy_build(rum.core.build_defc,(function (string_notes,state){
var notes_shown = cljs.core.cst$kw$show_DASH_notes.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var reset_state = (function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null));
});
var attrs14278 = (function (){var G__14285 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_(notes_shown)){
return reset_state();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$show_DASH_notes,cljs.core.not);
}
})], null);
var G__14286 = cljs.core.identity;
var G__14287 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__14271_SHARP_){
if(cljs.core.truth_(notes_shown)){
return p1__14271_SHARP_;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$note,guitar.unicode.nbsp], null);
}
})),string_notes);
return (guitar.core.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$3(G__14285,G__14286,G__14287) : guitar.core.guitar.call(null,G__14285,G__14286,G__14287));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14278))?daiquiri.interpreter.attributes(attrs14278):null),((cljs.core.map_QMARK_(attrs14278))?[(function (){var attrs14281 = (function (){var G__14288 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14288) : guitar.core.locate_note_text.call(null,G__14288));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14281))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14281], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14281))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14281),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]:[daiquiri.interpreter.interpret(attrs14278),(function (){var attrs14284 = (function (){var G__14289 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14289) : guitar.core.locate_note_text.call(null,G__14289));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14284))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14284], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14284))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14284),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guess-fretboard-notes");
guitar.core.notes_per_string = (function guitar$core$notes_per_string(notes_per_string,strings_notes,in_scale_QMARK_,fret_position,format_scale_note){
return cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((guitar.setup.scale_length + (1)),(function (){var acc = cljs.core.PersistentVector.EMPTY;
var skip = fret_position;
var nps = notes_per_string;
var G__14293 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(strings_notes));
var vec__14294 = G__14293;
var seq__14295 = cljs.core.seq(vec__14294);
var first__14296 = cljs.core.first(seq__14295);
var seq__14295__$1 = cljs.core.next(seq__14295);
var note = first__14296;
var notes = seq__14295__$1;
var acc__$1 = acc;
var skip__$1 = skip;
var nps__$1 = nps;
var G__14293__$1 = G__14293;
while(true){
var acc__$2 = acc__$1;
var skip__$2 = skip__$1;
var nps__$2 = nps__$1;
var vec__14306 = G__14293__$1;
var seq__14307 = cljs.core.seq(vec__14306);
var first__14308 = cljs.core.first(seq__14307);
var seq__14307__$1 = cljs.core.next(seq__14307);
var note__$1 = first__14308;
var notes__$1 = seq__14307__$1;
if(cljs.core.empty_QMARK_(note__$1)){
return acc__$2;
} else {
if((skip__$2 > (0))){
var G__14315 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14309 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14309) : in_scale_QMARK_.call(null,G__14309));
})())?note__$1:null));
var G__14316 = (skip__$2 - (1));
var G__14317 = nps__$2;
var G__14318 = notes__$1;
acc__$1 = G__14315;
skip__$1 = G__14316;
nps__$1 = G__14317;
G__14293__$1 = G__14318;
continue;
} else {
if(cljs.core.truth_((((nps__$2 === (0)))?(function (){var G__14311 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14311) : in_scale_QMARK_.call(null,G__14311));
})():false))){
var G__14319 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(cljs.core.truth_((function (){var G__14312 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14312) : in_scale_QMARK_.call(null,G__14312));
})())?note__$1:null));
var G__14320 = (guitar.setup.scale_length - (cljs.core.truth_((function (){var fexpr__14313 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(acc__$2),(cljs.core.count(acc__$2) + guitar.setup.scale_length)));
return (fexpr__14313.cljs$core$IFn$_invoke$arity$1 ? fexpr__14313.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__14313.call(null,(100)));
})())?(4):(5)));
var G__14321 = notes_per_string;
var G__14322 = notes__$1;
acc__$1 = G__14319;
skip__$1 = G__14320;
nps__$1 = G__14321;
G__14293__$1 = G__14322;
continue;
} else {
if(cljs.core.truth_((function (){var G__14314 = cljs.core.cst$kw$note.cljs$core$IFn$_invoke$arity$1(note__$1);
return (in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1 ? in_scale_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14314) : in_scale_QMARK_.call(null,G__14314));
})())){
var G__14323 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,(format_scale_note.cljs$core$IFn$_invoke$arity$1 ? format_scale_note.cljs$core$IFn$_invoke$arity$1(note__$1) : format_scale_note.call(null,note__$1)));
var G__14324 = skip__$2;
var G__14325 = (nps__$2 - (1));
var G__14326 = notes__$1;
acc__$1 = G__14323;
skip__$1 = G__14324;
nps__$1 = G__14325;
G__14293__$1 = G__14326;
continue;
} else {
var G__14327 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,null);
var G__14328 = skip__$2;
var G__14329 = nps__$2;
var G__14330 = notes__$1;
acc__$1 = G__14327;
skip__$1 = G__14328;
nps__$1 = G__14329;
G__14293__$1 = G__14330;
continue;

}
}
}
}
break;
}
})()));
});
guitar.core.scale_pattern = (function guitar$core$scale_pattern(scale){
var or__4126__auto__ = (function (){var fexpr__14332 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$major_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_per_string,(2)),cljs.core.cst$kw$minor_DASH_pentatonic,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_per_string,(2)),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14332.cljs$core$IFn$_invoke$arity$1 ? fexpr__14332.cljs$core$IFn$_invoke$arity$1(scale) : fexpr__14332.call(null,scale));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_per_string,(3));
}
});
guitar.core.scale_visualizer = rum.core.lazy_build(rum.core.build_defc,(function (strings_notes,state){
var map__14339 = rum.core.react(state);
var map__14339__$1 = (((((!((map__14339 == null))))?(((((map__14339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14339):map__14339);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$scale);
var start_fret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$start_DASH_fret);
var in_scale_QMARK_ = cljs.core.set(guitar.notes.scale_notes(root,scale));
return React.createElement(React.Fragment,null,(function (){var attrs14382 = (function (){var G__14383 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guitar--faded"], null);
var G__14384 = (function (p1__14333_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start_DASH_fret,p1__14333_SHARP_);
});
var G__14385 = (function (){var G__14387 = strings_notes;
var G__14388 = in_scale_QMARK_;
var G__14389 = start_fret;
var G__14390 = (function (p1__14334_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14334_SHARP_,cljs.core.cst$kw$hl,"#f5a");
});
var fexpr__14386 = guitar.core.scale_pattern(scale);
return (fexpr__14386.cljs$core$IFn$_invoke$arity$4 ? fexpr__14386.cljs$core$IFn$_invoke$arity$4(G__14387,G__14388,G__14389,G__14390) : fexpr__14386.call(null,G__14387,G__14388,G__14389,G__14390));
})();
return (guitar.core.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$3(G__14383,G__14384,G__14385) : guitar.core.guitar.call(null,G__14383,G__14384,G__14385));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14382))?daiquiri.interpreter.attributes(attrs14382):null),((cljs.core.map_QMARK_(attrs14382))?null:[daiquiri.interpreter.interpret(attrs14382)]));
})(),daiquiri.core.create_element("select",{'onChange':(function (p1__14335_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14335_SHARP_.currentTarget.value);
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14336_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14336_SHARP_], null),p1__14336_SHARP_],null));
}),guitar.notes.notes))]),daiquiri.core.create_element("select",{'value':cljs.core.name(scale),'onChange':(function (p1__14337_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14337_SHARP_.currentTarget.value));
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14338_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14338_SHARP_], null),p1__14338_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales))))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/scale-visualizer");
guitar.core.to_note = (function guitar$core$to_note(note){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$note,note], null);
});
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var mode_state = rum.core.cursor(state,mode);
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,guitar.core.to_note),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
})},["Guess"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
})},["Explore scales"]),daiquiri.interpreter.interpret((function (){var fexpr__14413 = (function (){var pred__14414 = cljs.core._EQ_;
var expr__14415 = mode;
if(cljs.core.truth_((function (){var G__14417 = cljs.core.cst$kw$guess;
var G__14418 = expr__14415;
return (pred__14414.cljs$core$IFn$_invoke$arity$2 ? pred__14414.cljs$core$IFn$_invoke$arity$2(G__14417,G__14418) : pred__14414.call(null,G__14417,G__14418));
})())){
return guitar.core.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__14419 = cljs.core.cst$kw$explore;
var G__14420 = expr__14415;
return (pred__14414.cljs$core$IFn$_invoke$arity$2 ? pred__14414.cljs$core$IFn$_invoke$arity$2(G__14419,G__14420) : pred__14414.call(null,G__14419,G__14420));
})())){
return guitar.core.scale_visualizer;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14415)].join('')));
}
}
})();
return (fexpr__14413.cljs$core$IFn$_invoke$arity$2 ? fexpr__14413.cljs$core$IFn$_invoke$arity$2(strings_notes,mode_state) : fexpr__14413.call(null,strings_notes,mode_state));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/app");
guitar.core.mount = (function guitar$core$mount(){
var temp__5720__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return rum.core.mount((guitar.core.app.cljs$core$IFn$_invoke$arity$1 ? guitar.core.app.cljs$core$IFn$_invoke$arity$1(guitar.core.state) : guitar.core.app.call(null,guitar.core.state)),el);
} else {
return null;
}
});
guitar.core.mount();
guitar.core.on_reload = (function guitar$core$on_reload(){
return guitar.core.mount();
});
