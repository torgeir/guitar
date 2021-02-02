// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('goog.functions');
goog.require('clojure.set');
goog.require('rum.specs');
goog.require('daiquiri.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__14074 = cljs.core.seq(props);
var chunk__14076 = null;
var count__14077 = (0);
var i__14078 = (0);
while(true){
if((i__14078 < count__14077)){
var vec__14086 = chunk__14076.cljs$core$IIndexed$_nth$arity$2(null,i__14078);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__14092 = seq__14074;
var G__14093 = chunk__14076;
var G__14094 = count__14077;
var G__14095 = (i__14078 + (1));
seq__14074 = G__14092;
chunk__14076 = G__14093;
count__14077 = G__14094;
i__14078 = G__14095;
continue;
} else {
var G__14096 = seq__14074;
var G__14097 = chunk__14076;
var G__14098 = count__14077;
var G__14099 = (i__14078 + (1));
seq__14074 = G__14096;
chunk__14076 = G__14097;
count__14077 = G__14098;
i__14078 = G__14099;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__14074);
if(temp__5720__auto__){
var seq__14074__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14074__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14074__$1);
var G__14100 = cljs.core.chunk_rest(seq__14074__$1);
var G__14101 = c__4556__auto__;
var G__14102 = cljs.core.count(c__4556__auto__);
var G__14103 = (0);
seq__14074 = G__14100;
chunk__14076 = G__14101;
count__14077 = G__14102;
i__14078 = G__14103;
continue;
} else {
var vec__14089 = cljs.core.first(seq__14074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__14104 = cljs.core.next(seq__14074__$1);
var G__14105 = null;
var G__14106 = (0);
var G__14107 = (0);
seq__14074 = G__14104;
chunk__14076 = G__14105;
count__14077 = G__14106;
i__14078 = G__14107;
continue;
} else {
var G__14108 = cljs.core.next(seq__14074__$1);
var G__14109 = null;
var G__14110 = (0);
var G__14111 = (0);
seq__14074 = G__14108;
chunk__14076 = G__14109;
count__14077 = G__14110;
i__14078 = G__14111;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var mixins_14122__$1 = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
if(clojure.set.subset_QMARK_(mixins_14122__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mixins_14122__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14113_SHARP_,p2__14112_SHARP_){
return (p2__14112_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14112_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14113_SHARP_) : p2__14112_SHARP_.call(null,p1__14113_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14115_SHARP_,p2__14114_SHARP_){
return (p2__14114_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14114_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14115_SHARP_) : p2__14114_SHARP_.call(null,old_state,p1__14115_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__14116_SHARP_){
return (p1__14116_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14116_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14116_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14118 = (function (){var G__14121 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14121) : wrapped_render.call(null,G__14121));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14118,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14118,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14117_SHARP_){
return (p1__14117_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14117_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14117_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
return ctr.apply(ctr,arguments);
});
var x14123_14124 = f;
(x14123_14124.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x14123_14124.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta((c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$3 ? ctor.cljs$core$IFn$_invoke$arity$3(render,mixins,display_name) : ctor.call(null,render,mixins,display_name));
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_(c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__14125__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14126__i = 0, G__14126__a = new Array(arguments.length -  0);
while (G__14126__i < G__14126__a.length) {G__14126__a[G__14126__i] = arguments[G__14126__i + 0]; ++G__14126__i;}
  args = new cljs.core.IndexedSeq(G__14126__a,0,null);
} 
return G__14125__delegate.call(this,args);};
G__14125.cljs$lang$maxFixedArity = 0;
G__14125.cljs$lang$applyTo = (function (arglist__14127){
var args = cljs.core.seq(arglist__14127);
return G__14125__delegate(args);
});
G__14125.cljs$core$IFn$_invoke$arity$variadic = G__14125__delegate;
return G__14125;
})()
:(function() { 
var G__14128__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14129__i = 0, G__14129__a = new Array(arguments.length -  0);
while (G__14129__i < G__14129__a.length) {G__14129__a[G__14129__i] = arguments[G__14129__i + 0]; ++G__14129__i;}
  args = new cljs.core.IndexedSeq(G__14129__a,0,null);
} 
return G__14128__delegate.call(this,args);};
G__14128.cljs$lang$maxFixedArity = 0;
G__14128.cljs$lang$applyTo = (function (arglist__14130){
var args = cljs.core.seq(arglist__14130);
return G__14128__delegate(args);
});
G__14128.cljs$core$IFn$_invoke$arity$variadic = G__14128__delegate;
return G__14128;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5722__auto__ = React.memo;
if((temp__5722__auto__ == null)){
return f;
} else {
var memo = temp__5722__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(f,rum.core.memo_compare_props) : memo.call(null,f,rum.core.memo_compare_props));
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo(class$);
var ctor = (function() { 
var G__14131__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__14131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14132__i = 0, G__14132__a = new Array(arguments.length -  0);
while (G__14132__i < G__14132__a.length) {G__14132__a[G__14132__i] = arguments[G__14132__i + 0]; ++G__14132__i;}
  args = new cljs.core.IndexedSeq(G__14132__a,0,null);
} 
return G__14131__delegate.call(this,args);};
G__14131.cljs$lang$maxFixedArity = 0;
G__14131.cljs$lang$applyTo = (function (arglist__14133){
var args = cljs.core.seq(arglist__14133);
return G__14131__delegate(args);
});
G__14131.cljs$core$IFn$_invoke$arity$variadic = G__14131__delegate;
return G__14131;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,memo_class], null));
} else {
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__14134__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__14134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14135__i = 0, G__14135__a = new Array(arguments.length -  0);
while (G__14135__i < G__14135__a.length) {G__14135__a[G__14135__i] = arguments[G__14135__i + 0]; ++G__14135__i;}
  args = new cljs.core.IndexedSeq(G__14135__a,0,null);
} 
return G__14134__delegate.call(this,args);};
G__14134.cljs$lang$maxFixedArity = 0;
G__14134.cljs$lang$applyTo = (function (arglist__14136){
var args = cljs.core.seq(arglist__14136);
return G__14134__delegate(args);
});
G__14134.cljs$core$IFn$_invoke$arity$variadic = G__14134__delegate;
return G__14134;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.request_render = (function rum$core$request_render(comp){
return comp.forceUpdate();
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__14138 = arguments.length;
switch (G__14138) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return component.forceUpdate();
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__14140 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__14141 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__14141);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14142 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14142,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14142,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14145_14157 = cljs.core.seq(old_reactions);
var chunk__14146_14158 = null;
var count__14147_14159 = (0);
var i__14148_14160 = (0);
while(true){
if((i__14148_14160 < count__14147_14159)){
var ref_14161 = chunk__14146_14158.cljs$core$IIndexed$_nth$arity$2(null,i__14148_14160);
if(cljs.core.contains_QMARK_(new_reactions,ref_14161)){
} else {
cljs.core.remove_watch(ref_14161,key);
}


var G__14162 = seq__14145_14157;
var G__14163 = chunk__14146_14158;
var G__14164 = count__14147_14159;
var G__14165 = (i__14148_14160 + (1));
seq__14145_14157 = G__14162;
chunk__14146_14158 = G__14163;
count__14147_14159 = G__14164;
i__14148_14160 = G__14165;
continue;
} else {
var temp__5720__auto___14166 = cljs.core.seq(seq__14145_14157);
if(temp__5720__auto___14166){
var seq__14145_14167__$1 = temp__5720__auto___14166;
if(cljs.core.chunked_seq_QMARK_(seq__14145_14167__$1)){
var c__4556__auto___14168 = cljs.core.chunk_first(seq__14145_14167__$1);
var G__14169 = cljs.core.chunk_rest(seq__14145_14167__$1);
var G__14170 = c__4556__auto___14168;
var G__14171 = cljs.core.count(c__4556__auto___14168);
var G__14172 = (0);
seq__14145_14157 = G__14169;
chunk__14146_14158 = G__14170;
count__14147_14159 = G__14171;
i__14148_14160 = G__14172;
continue;
} else {
var ref_14173 = cljs.core.first(seq__14145_14167__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14173)){
} else {
cljs.core.remove_watch(ref_14173,key);
}


var G__14174 = cljs.core.next(seq__14145_14167__$1);
var G__14175 = null;
var G__14176 = (0);
var G__14177 = (0);
seq__14145_14157 = G__14174;
chunk__14146_14158 = G__14175;
count__14147_14159 = G__14176;
i__14148_14160 = G__14177;
continue;
}
} else {
}
}
break;
}

var seq__14149_14178 = cljs.core.seq(new_reactions);
var chunk__14150_14179 = null;
var count__14151_14180 = (0);
var i__14152_14181 = (0);
while(true){
if((i__14152_14181 < count__14151_14180)){
var ref_14182 = chunk__14150_14179.cljs$core$IIndexed$_nth$arity$2(null,i__14152_14181);
if(cljs.core.contains_QMARK_(old_reactions,ref_14182)){
} else {
cljs.core.add_watch(ref_14182,key,((function (seq__14149_14178,chunk__14150_14179,count__14151_14180,i__14152_14181,ref_14182,comp,old_reactions,vec__14142,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14140,_STAR_reactions_STAR__temp_val__14141){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__14149_14178,chunk__14150_14179,count__14151_14180,i__14152_14181,ref_14182,comp,old_reactions,vec__14142,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14140,_STAR_reactions_STAR__temp_val__14141))
);
}


var G__14183 = seq__14149_14178;
var G__14184 = chunk__14150_14179;
var G__14185 = count__14151_14180;
var G__14186 = (i__14152_14181 + (1));
seq__14149_14178 = G__14183;
chunk__14150_14179 = G__14184;
count__14151_14180 = G__14185;
i__14152_14181 = G__14186;
continue;
} else {
var temp__5720__auto___14187 = cljs.core.seq(seq__14149_14178);
if(temp__5720__auto___14187){
var seq__14149_14188__$1 = temp__5720__auto___14187;
if(cljs.core.chunked_seq_QMARK_(seq__14149_14188__$1)){
var c__4556__auto___14189 = cljs.core.chunk_first(seq__14149_14188__$1);
var G__14190 = cljs.core.chunk_rest(seq__14149_14188__$1);
var G__14191 = c__4556__auto___14189;
var G__14192 = cljs.core.count(c__4556__auto___14189);
var G__14193 = (0);
seq__14149_14178 = G__14190;
chunk__14150_14179 = G__14191;
count__14151_14180 = G__14192;
i__14152_14181 = G__14193;
continue;
} else {
var ref_14194 = cljs.core.first(seq__14149_14188__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14194)){
} else {
cljs.core.add_watch(ref_14194,key,((function (seq__14149_14178,chunk__14150_14179,count__14151_14180,i__14152_14181,ref_14194,seq__14149_14188__$1,temp__5720__auto___14187,comp,old_reactions,vec__14142,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14140,_STAR_reactions_STAR__temp_val__14141){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__14149_14178,chunk__14150_14179,count__14151_14180,i__14152_14181,ref_14194,seq__14149_14188__$1,temp__5720__auto___14187,comp,old_reactions,vec__14142,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14140,_STAR_reactions_STAR__temp_val__14141))
);
}


var G__14195 = cljs.core.next(seq__14149_14188__$1);
var G__14196 = null;
var G__14197 = (0);
var G__14198 = (0);
seq__14149_14178 = G__14195;
chunk__14150_14179 = G__14196;
count__14151_14180 = G__14197;
i__14152_14181 = G__14198;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__14140);
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14199 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14153_14200 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14154_14201 = null;
var count__14155_14202 = (0);
var i__14156_14203 = (0);
while(true){
if((i__14156_14203 < count__14155_14202)){
var ref_14204 = chunk__14154_14201.cljs$core$IIndexed$_nth$arity$2(null,i__14156_14203);
cljs.core.remove_watch(ref_14204,key_14199);


var G__14205 = seq__14153_14200;
var G__14206 = chunk__14154_14201;
var G__14207 = count__14155_14202;
var G__14208 = (i__14156_14203 + (1));
seq__14153_14200 = G__14205;
chunk__14154_14201 = G__14206;
count__14155_14202 = G__14207;
i__14156_14203 = G__14208;
continue;
} else {
var temp__5720__auto___14209 = cljs.core.seq(seq__14153_14200);
if(temp__5720__auto___14209){
var seq__14153_14210__$1 = temp__5720__auto___14209;
if(cljs.core.chunked_seq_QMARK_(seq__14153_14210__$1)){
var c__4556__auto___14211 = cljs.core.chunk_first(seq__14153_14210__$1);
var G__14212 = cljs.core.chunk_rest(seq__14153_14210__$1);
var G__14213 = c__4556__auto___14211;
var G__14214 = cljs.core.count(c__4556__auto___14211);
var G__14215 = (0);
seq__14153_14200 = G__14212;
chunk__14154_14201 = G__14213;
count__14155_14202 = G__14214;
i__14156_14203 = G__14215;
continue;
} else {
var ref_14216 = cljs.core.first(seq__14153_14210__$1);
cljs.core.remove_watch(ref_14216,key_14199);


var G__14217 = cljs.core.next(seq__14153_14210__$1);
var G__14218 = null;
var G__14219 = (0);
var G__14220 = (0);
seq__14153_14200 = G__14217;
chunk__14154_14201 = G__14218;
count__14155_14202 = G__14219;
i__14156_14203 = G__14220;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14227 = arguments.length;
var i__4737__auto___14228 = (0);
while(true){
if((i__4737__auto___14228 < len__4736__auto___14227)){
args__4742__auto__.push((arguments[i__4737__auto___14228]));

var G__14229 = (i__4737__auto___14228 + (1));
i__4737__auto___14228 = G__14229;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14224){
var map__14225 = p__14224;
var map__14225__$1 = (((((!((map__14225 == null))))?(((((map__14225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14225):map__14225);
var options = map__14225__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq14221){
var G__14222 = cljs.core.first(seq14221);
var seq14221__$1 = cljs.core.next(seq14221);
var G__14223 = cljs.core.first(seq14221__$1);
var seq14221__$2 = cljs.core.next(seq14221__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14222,G__14223,seq14221__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14233 = arguments.length;
var i__4737__auto___14234 = (0);
while(true){
if((i__4737__auto___14234 < len__4736__auto___14233)){
args__4742__auto__.push((arguments[i__4737__auto___14234]));

var G__14235 = (i__4737__auto___14234 + (1));
i__4737__auto___14234 = G__14235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq14230){
var G__14231 = cljs.core.first(seq14230);
var seq14230__$1 = cljs.core.next(seq14230);
var G__14232 = cljs.core.first(seq14230__$1);
var seq14230__$2 = cljs.core.next(seq14230__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14231,G__14232,seq14230__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__14236_SHARP_,p2__14237_SHARP_){
return (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(p1__14236_SHARP_,p2__14237_SHARP_) : reducer_fn.call(null,p1__14236_SHARP_,p2__14237_SHARP_));
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__14239 = arguments.length;
switch (G__14239) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4126__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4126__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__14242 = arguments.length;
switch (G__14242) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__14245 = arguments.length;
switch (G__14245) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__14248 = arguments.length;
switch (G__14248) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2(element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});
