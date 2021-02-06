// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('guitar.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('guitar.setup');
goog.require('guitar.notes');
goog.require('rum.core');
goog.require('guitar.unicode');
guitar.core.notes_of_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(guitar.notes.string_notes,guitar.notes.notes,(guitar.setup.scale_length + (1)));
guitar.core.rand_note = (function guitar$core$rand_note(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,(cljs.core.rand_int(cljs.core.count(guitar.setup.tuning)) + (1)),cljs.core.cst$kw$note,cljs.core.rand_nth(guitar.notes.notes)], null);
});
if((typeof guitar !== 'undefined') && (typeof guitar.core !== 'undefined') && (typeof guitar.core.state !== 'undefined')){
} else {
guitar.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tuning,guitar.setup.tuning,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore,cljs.core.cst$kw$guess,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null),cljs.core.cst$kw$explore,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$root,"c",cljs.core.cst$kw$scale,cljs.core.cst$kw$major], null)], null));
}
guitar.core.guitar_nut = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14254 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14254))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-nut"], null)], null),attrs14254], 0))):{'className':"guitar-nut"}),((cljs.core.map_QMARK_(attrs14254))?null:[daiquiri.interpreter.interpret(attrs14254)]));
}),null,"guitar.core/guitar-nut");
guitar.core.guitar_fret = rum.core.lazy_build(rum.core.build_defc,(function (note){
var attrs14255 = note;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14255))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-fret"], null)], null),attrs14255], 0))):{'className':"guitar-fret"}),((cljs.core.map_QMARK_(attrs14255))?null:[daiquiri.interpreter.interpret(attrs14255)]));
}),null,"guitar.core/guitar-fret");
guitar.core.guitar_string = rum.core.lazy_build(rum.core.build_defc,(function (show_QMARK_,notes){
var attrs14261 = (function (){var G__14262 = (function (){var note = cljs.core.first(notes);
if(cljs.core.truth_((show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? show_QMARK_.cljs$core$IFn$_invoke$arity$1(note) : show_QMARK_.call(null,note)))){
return note;
} else {
return guitar.unicode.nbsp;
}
})();
return (guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1 ? guitar.core.guitar_nut.cljs$core$IFn$_invoke$arity$1(G__14262) : guitar.core.guitar_nut.call(null,G__14262));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14261))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar-string"], null)], null),attrs14261], 0))):{'className':"guitar-string"}),((cljs.core.map_QMARK_(attrs14261))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14258_SHARP_,p2__14257_SHARP_){
return rum.core.with_key(p2__14257_SHARP_,p1__14258_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14256_SHARP_){
if(cljs.core.truth_((show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? show_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__14256_SHARP_) : show_QMARK_.call(null,p1__14256_SHARP_)))){
return p1__14256_SHARP_;
} else {
return guitar.unicode.nbsp;
}
}),cljs.core.rest(notes)))))]:[daiquiri.interpreter.interpret(attrs14261),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14258_SHARP_,p2__14257_SHARP_){
return rum.core.with_key(p2__14257_SHARP_,p1__14258_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_fret,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14256_SHARP_){
if(cljs.core.truth_((show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? show_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__14256_SHARP_) : show_QMARK_.call(null,p1__14256_SHARP_)))){
return p1__14256_SHARP_;
} else {
return guitar.unicode.nbsp;
}
}),cljs.core.rest(notes)))))]));
}),null,"guitar.core/guitar-string");
guitar.core.locate_note_text = rum.core.lazy_build(rum.core.build_defc,(function (p__14263){
var map__14264 = p__14263;
var map__14264__$1 = (((((!((map__14264 == null))))?(((((map__14264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14264):map__14264);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14264__$1,cljs.core.cst$kw$note);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14264__$1,cljs.core.cst$kw$string);
return daiquiri.core.create_element("p",null,[["Locate ",guitar.notes.prefixed_note(note)," on the ",guitar.notes.ordinal_suffixed_number(string)," string."].join('')]);
}),null,"guitar.core/locate-note-text");
guitar.core.guitar = rum.core.lazy_build(rum.core.build_defc,(function (props,string_notes,show_notes_QMARK_){
var attrs14268 = props;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14268))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guitar"], null)], null),attrs14268], 0))):{'className':"guitar"}),((cljs.core.map_QMARK_(attrs14268))?[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14267_SHARP_,p2__14266_SHARP_){
return rum.core.with_key(p2__14266_SHARP_,p1__14267_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,show_notes_QMARK_),string_notes)))]:[daiquiri.interpreter.interpret(attrs14268),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14267_SHARP_,p2__14266_SHARP_){
return rum.core.with_key(p2__14266_SHARP_,p1__14267_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(guitar.core.guitar_string,show_notes_QMARK_),string_notes)))]));
}),null,"guitar.core/guitar");
guitar.core.guess_fretboard_notes = rum.core.lazy_build(rum.core.build_defc,(function (string_notes,state){
var notes_shown = cljs.core.cst$kw$show_DASH_notes.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var reset_state = (function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_notes,false,cljs.core.cst$kw$locate,guitar.core.rand_note()], null));
});
var attrs14275 = (function (){var G__14282 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_(notes_shown)){
return reset_state();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$show_DASH_notes,cljs.core.not);
}
})], null);
var G__14283 = string_notes;
var G__14284 = cljs.core.constantly(notes_shown);
return (guitar.core.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$3(G__14282,G__14283,G__14284) : guitar.core.guitar.call(null,G__14282,G__14283,G__14284));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14275))?daiquiri.interpreter.attributes(attrs14275):null),((cljs.core.map_QMARK_(attrs14275))?[(function (){var attrs14278 = (function (){var G__14285 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14285) : guitar.core.locate_note_text.call(null,G__14285));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14278))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14278], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14278))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14278),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]:[daiquiri.interpreter.interpret(attrs14275),(function (){var attrs14281 = (function (){var G__14286 = cljs.core.cst$kw$locate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1 ? guitar.core.locate_note_text.cljs$core$IFn$_invoke$arity$1(G__14286) : guitar.core.locate_note_text.call(null,G__14286));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs14281))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center-text"], null)], null),attrs14281], 0))):{'className':"center-text"}),((cljs.core.map_QMARK_(attrs14281))?[(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]:[daiquiri.interpreter.interpret(attrs14281),(cljs.core.truth_(notes_shown)?"Click the fretboard to try again.":"Make a guess and click the fretboard to reveal the notes.")]));
})()]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/guess-fretboard-notes");
guitar.core.scale_visualizer = rum.core.lazy_build(rum.core.build_defc,(function (string_notes,state){
var map__14291 = rum.core.react(state);
var map__14291__$1 = (((((!((map__14291 == null))))?(((((map__14291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14291):map__14291);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14291__$1,cljs.core.cst$kw$root);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14291__$1,cljs.core.cst$kw$scale);
return React.createElement(React.Fragment,null,(function (){var attrs14309 = (function (){var G__14310 = cljs.core.PersistentArrayMap.EMPTY;
var G__14311 = string_notes;
var G__14312 = cljs.core.set(guitar.notes.scale_notes(root,scale));
return (guitar.core.guitar.cljs$core$IFn$_invoke$arity$3 ? guitar.core.guitar.cljs$core$IFn$_invoke$arity$3(G__14310,G__14311,G__14312) : guitar.core.guitar.call(null,G__14310,G__14311,G__14312));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14309))?daiquiri.interpreter.attributes(attrs14309):null),((cljs.core.map_QMARK_(attrs14309))?null:[daiquiri.interpreter.interpret(attrs14309)]));
})(),daiquiri.core.create_element("select",{'onChange':(function (p1__14287_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$root,p1__14287_SHARP_.currentTarget.value);
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14288_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14288_SHARP_], null),p1__14288_SHARP_],null));
}),guitar.notes.notes))]),daiquiri.core.create_element("select",{'value':cljs.core.name(scale),'onChange':(function (p1__14289_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$scale,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__14289_SHARP_.currentTarget.value));
})},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14290_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14290_SHARP_], null),p1__14290_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(guitar.notes.scales))))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"guitar.core/scale-visualizer");
guitar.core.app = rum.core.lazy_build(rum.core.build_defc,(function (state){
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(rum.core.react(state));
var mode_state = rum.core.cursor(state,mode);
var strings_notes = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(guitar.core.notes_of_string,cljs.core.cst$kw$tuning.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$guess);
})},["Guess"]),daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$explore);
})},["Explore scales"]),daiquiri.interpreter.interpret((function (){var fexpr__14335 = (function (){var pred__14336 = cljs.core._EQ_;
var expr__14337 = mode;
if(cljs.core.truth_((function (){var G__14339 = cljs.core.cst$kw$guess;
var G__14340 = expr__14337;
return (pred__14336.cljs$core$IFn$_invoke$arity$2 ? pred__14336.cljs$core$IFn$_invoke$arity$2(G__14339,G__14340) : pred__14336.call(null,G__14339,G__14340));
})())){
return guitar.core.guess_fretboard_notes;
} else {
if(cljs.core.truth_((function (){var G__14341 = cljs.core.cst$kw$explore;
var G__14342 = expr__14337;
return (pred__14336.cljs$core$IFn$_invoke$arity$2 ? pred__14336.cljs$core$IFn$_invoke$arity$2(G__14341,G__14342) : pred__14336.call(null,G__14341,G__14342));
})())){
return guitar.core.scale_visualizer;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14337)].join('')));
}
}
})();
return (fexpr__14335.cljs$core$IFn$_invoke$arity$2 ? fexpr__14335.cljs$core$IFn$_invoke$arity$2(strings_notes,mode_state) : fexpr__14335.call(null,strings_notes,mode_state));
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
