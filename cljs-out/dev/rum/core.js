// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('rum.core');
goog.require('cljs.core');
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
var seq__11866 = cljs.core.seq.call(null,props);
var chunk__11868 = null;
var count__11869 = (0);
var i__11870 = (0);
while(true){
if((i__11870 < count__11869)){
var vec__11878 = cljs.core._nth.call(null,chunk__11868,i__11870);
var k = cljs.core.nth.call(null,vec__11878,(0),null);
var v = cljs.core.nth.call(null,vec__11878,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__11884 = seq__11866;
var G__11885 = chunk__11868;
var G__11886 = count__11869;
var G__11887 = (i__11870 + (1));
seq__11866 = G__11884;
chunk__11868 = G__11885;
count__11869 = G__11886;
i__11870 = G__11887;
continue;
} else {
var G__11888 = seq__11866;
var G__11889 = chunk__11868;
var G__11890 = count__11869;
var G__11891 = (i__11870 + (1));
seq__11866 = G__11888;
chunk__11868 = G__11889;
count__11869 = G__11890;
i__11870 = G__11891;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11866);
if(temp__5720__auto__){
var seq__11866__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11866__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__11866__$1);
var G__11892 = cljs.core.chunk_rest.call(null,seq__11866__$1);
var G__11893 = c__4556__auto__;
var G__11894 = cljs.core.count.call(null,c__4556__auto__);
var G__11895 = (0);
seq__11866 = G__11892;
chunk__11868 = G__11893;
count__11869 = G__11894;
i__11870 = G__11895;
continue;
} else {
var vec__11881 = cljs.core.first.call(null,seq__11866__$1);
var k = cljs.core.nth.call(null,vec__11881,(0),null);
var v = cljs.core.nth.call(null,vec__11881,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__11896 = cljs.core.next.call(null,seq__11866__$1);
var G__11897 = null;
var G__11898 = (0);
var G__11899 = (0);
seq__11866 = G__11896;
chunk__11868 = G__11897;
count__11869 = G__11898;
i__11870 = G__11899;
continue;
} else {
var G__11900 = cljs.core.next.call(null,seq__11866__$1);
var G__11901 = null;
var G__11902 = (0);
var G__11903 = (0);
seq__11866 = G__11900;
chunk__11868 = G__11901;
count__11869 = G__11902;
i__11870 = G__11903;
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
var mixins_11913__$1 = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.keys,mixins));
if(clojure.set.subset_QMARK_.call(null,mixins_11913__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.call(null,mixins_11913__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,(function (p1__11905_SHARP_,p2__11904_SHARP_){
return p2__11904_SHARP_.call(null,p1__11905_SHARP_);
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,(function (p1__11907_SHARP_,p2__11906_SHARP_){
return p2__11906_SHARP_.call(null,old_state,p1__11907_SHARP_);
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
}));

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__11908_SHARP_){
return p1__11908_SHARP_.call(null,old_state,new_state);
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__11910 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__11910,(0),null);
var next_state = cljs.core.nth.call(null,vec__11910,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__11909_SHARP_){
return p1__11909_SHARP_.call(null,state);
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = c.call(null);
return ctr.apply(ctr,arguments);
});
var x11914_11915 = f;
(x11914_11915.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x11914_11915.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta.call(null,c.call(null));
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
return ctor.call(null,render,mixins,display_name);
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_.call(null,c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__11916__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__11916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11917__i = 0, G__11917__a = new Array(arguments.length -  0);
while (G__11917__i < G__11917__a.length) {G__11917__a[G__11917__i] = arguments[G__11917__i + 0]; ++G__11917__i;}
  args = new cljs.core.IndexedSeq(G__11917__a,0,null);
} 
return G__11916__delegate.call(this,args);};
G__11916.cljs$lang$maxFixedArity = 0;
G__11916.cljs$lang$applyTo = (function (arglist__11918){
var args = cljs.core.seq(arglist__11918);
return G__11916__delegate(args);
});
G__11916.cljs$core$IFn$_invoke$arity$variadic = G__11916__delegate;
return G__11916;
})()
:(function() { 
var G__11919__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__11919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11920__i = 0, G__11920__a = new Array(arguments.length -  0);
while (G__11920__i < G__11920__a.length) {G__11920__a[G__11920__i] = arguments[G__11920__i + 0]; ++G__11920__i;}
  args = new cljs.core.IndexedSeq(G__11920__a,0,null);
} 
return G__11919__delegate.call(this,args);};
G__11919.cljs$lang$maxFixedArity = 0;
G__11919.cljs$lang$applyTo = (function (arglist__11921){
var args = cljs.core.seq(arglist__11921);
return G__11919__delegate(args);
});
G__11919.cljs$core$IFn$_invoke$arity$variadic = G__11919__delegate;
return G__11919;
})()
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.call(null,(prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5722__auto__ = React.memo;
if((temp__5722__auto__ == null)){
return f;
} else {
var memo = temp__5722__auto__;
return memo.call(null,f,rum.core.memo_compare_props);
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.call(null,mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo.call(null,class$);
var ctor = (function() { 
var G__11922__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__11922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11923__i = 0, G__11923__a = new Array(arguments.length -  0);
while (G__11923__i < G__11923__a.length) {G__11923__a[G__11923__i] = arguments[G__11923__i + 0]; ++G__11923__i;}
  args = new cljs.core.IndexedSeq(G__11923__a,0,null);
} 
return G__11922__delegate.call(this,args);};
G__11922.cljs$lang$maxFixedArity = 0;
G__11922.cljs$lang$applyTo = (function (arglist__11924){
var args = cljs.core.seq(arglist__11924);
return G__11922__delegate(args);
});
G__11922.cljs$core$IFn$_invoke$arity$variadic = G__11922__delegate;
return G__11922;
})()
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__11925__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__11925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11926__i = 0, G__11926__a = new Array(arguments.length -  0);
while (G__11926__i < G__11926__a.length) {G__11926__a[G__11926__i] = arguments[G__11926__i + 0]; ++G__11926__i;}
  args = new cljs.core.IndexedSeq(G__11926__a,0,null);
} 
return G__11925__delegate.call(this,args);};
G__11925.cljs$lang$maxFixedArity = 0;
G__11925.cljs$lang$applyTo = (function (arglist__11927){
var args = cljs.core.seq(arglist__11927);
return G__11925__delegate(args);
});
G__11925.cljs$core$IFn$_invoke$arity$variadic = G__11925__delegate;
return G__11925;
})()
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
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
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
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
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
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
var G__11929 = arguments.length;
switch (G__11929) {
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
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return component.forceUpdate();
} else {
return null;
}
}));

return cljs.core.assoc.call(null,state,key,local_state);
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
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__11931 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__11932 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__11932);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__11933 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11933,(0),null);
var next_state = cljs.core.nth.call(null,vec__11933,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11936_11948 = cljs.core.seq.call(null,old_reactions);
var chunk__11937_11949 = null;
var count__11938_11950 = (0);
var i__11939_11951 = (0);
while(true){
if((i__11939_11951 < count__11938_11950)){
var ref_11952 = cljs.core._nth.call(null,chunk__11937_11949,i__11939_11951);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11952)){
} else {
cljs.core.remove_watch.call(null,ref_11952,key);
}


var G__11953 = seq__11936_11948;
var G__11954 = chunk__11937_11949;
var G__11955 = count__11938_11950;
var G__11956 = (i__11939_11951 + (1));
seq__11936_11948 = G__11953;
chunk__11937_11949 = G__11954;
count__11938_11950 = G__11955;
i__11939_11951 = G__11956;
continue;
} else {
var temp__5720__auto___11957 = cljs.core.seq.call(null,seq__11936_11948);
if(temp__5720__auto___11957){
var seq__11936_11958__$1 = temp__5720__auto___11957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11936_11958__$1)){
var c__4556__auto___11959 = cljs.core.chunk_first.call(null,seq__11936_11958__$1);
var G__11960 = cljs.core.chunk_rest.call(null,seq__11936_11958__$1);
var G__11961 = c__4556__auto___11959;
var G__11962 = cljs.core.count.call(null,c__4556__auto___11959);
var G__11963 = (0);
seq__11936_11948 = G__11960;
chunk__11937_11949 = G__11961;
count__11938_11950 = G__11962;
i__11939_11951 = G__11963;
continue;
} else {
var ref_11964 = cljs.core.first.call(null,seq__11936_11958__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11964)){
} else {
cljs.core.remove_watch.call(null,ref_11964,key);
}


var G__11965 = cljs.core.next.call(null,seq__11936_11958__$1);
var G__11966 = null;
var G__11967 = (0);
var G__11968 = (0);
seq__11936_11948 = G__11965;
chunk__11937_11949 = G__11966;
count__11938_11950 = G__11967;
i__11939_11951 = G__11968;
continue;
}
} else {
}
}
break;
}

var seq__11940_11969 = cljs.core.seq.call(null,new_reactions);
var chunk__11941_11970 = null;
var count__11942_11971 = (0);
var i__11943_11972 = (0);
while(true){
if((i__11943_11972 < count__11942_11971)){
var ref_11973 = cljs.core._nth.call(null,chunk__11941_11970,i__11943_11972);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11973)){
} else {
cljs.core.add_watch.call(null,ref_11973,key,((function (seq__11940_11969,chunk__11941_11970,count__11942_11971,i__11943_11972,ref_11973,comp,old_reactions,vec__11933,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__11931,_STAR_reactions_STAR__temp_val__11932){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__11940_11969,chunk__11941_11970,count__11942_11971,i__11943_11972,ref_11973,comp,old_reactions,vec__11933,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__11931,_STAR_reactions_STAR__temp_val__11932))
);
}


var G__11974 = seq__11940_11969;
var G__11975 = chunk__11941_11970;
var G__11976 = count__11942_11971;
var G__11977 = (i__11943_11972 + (1));
seq__11940_11969 = G__11974;
chunk__11941_11970 = G__11975;
count__11942_11971 = G__11976;
i__11943_11972 = G__11977;
continue;
} else {
var temp__5720__auto___11978 = cljs.core.seq.call(null,seq__11940_11969);
if(temp__5720__auto___11978){
var seq__11940_11979__$1 = temp__5720__auto___11978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11940_11979__$1)){
var c__4556__auto___11980 = cljs.core.chunk_first.call(null,seq__11940_11979__$1);
var G__11981 = cljs.core.chunk_rest.call(null,seq__11940_11979__$1);
var G__11982 = c__4556__auto___11980;
var G__11983 = cljs.core.count.call(null,c__4556__auto___11980);
var G__11984 = (0);
seq__11940_11969 = G__11981;
chunk__11941_11970 = G__11982;
count__11942_11971 = G__11983;
i__11943_11972 = G__11984;
continue;
} else {
var ref_11985 = cljs.core.first.call(null,seq__11940_11979__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11985)){
} else {
cljs.core.add_watch.call(null,ref_11985,key,((function (seq__11940_11969,chunk__11941_11970,count__11942_11971,i__11943_11972,ref_11985,seq__11940_11979__$1,temp__5720__auto___11978,comp,old_reactions,vec__11933,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__11931,_STAR_reactions_STAR__temp_val__11932){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__11940_11969,chunk__11941_11970,count__11942_11971,i__11943_11972,ref_11985,seq__11940_11979__$1,temp__5720__auto___11978,comp,old_reactions,vec__11933,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__11931,_STAR_reactions_STAR__temp_val__11932))
);
}


var G__11986 = cljs.core.next.call(null,seq__11940_11979__$1);
var G__11987 = null;
var G__11988 = (0);
var G__11989 = (0);
seq__11940_11969 = G__11986;
chunk__11941_11970 = G__11987;
count__11942_11971 = G__11988;
i__11943_11972 = G__11989;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__11931);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_11990 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11944_11991 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11945_11992 = null;
var count__11946_11993 = (0);
var i__11947_11994 = (0);
while(true){
if((i__11947_11994 < count__11946_11993)){
var ref_11995 = cljs.core._nth.call(null,chunk__11945_11992,i__11947_11994);
cljs.core.remove_watch.call(null,ref_11995,key_11990);


var G__11996 = seq__11944_11991;
var G__11997 = chunk__11945_11992;
var G__11998 = count__11946_11993;
var G__11999 = (i__11947_11994 + (1));
seq__11944_11991 = G__11996;
chunk__11945_11992 = G__11997;
count__11946_11993 = G__11998;
i__11947_11994 = G__11999;
continue;
} else {
var temp__5720__auto___12000 = cljs.core.seq.call(null,seq__11944_11991);
if(temp__5720__auto___12000){
var seq__11944_12001__$1 = temp__5720__auto___12000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11944_12001__$1)){
var c__4556__auto___12002 = cljs.core.chunk_first.call(null,seq__11944_12001__$1);
var G__12003 = cljs.core.chunk_rest.call(null,seq__11944_12001__$1);
var G__12004 = c__4556__auto___12002;
var G__12005 = cljs.core.count.call(null,c__4556__auto___12002);
var G__12006 = (0);
seq__11944_11991 = G__12003;
chunk__11945_11992 = G__12004;
count__11946_11993 = G__12005;
i__11947_11994 = G__12006;
continue;
} else {
var ref_12007 = cljs.core.first.call(null,seq__11944_12001__$1);
cljs.core.remove_watch.call(null,ref_12007,key_11990);


var G__12008 = cljs.core.next.call(null,seq__11944_12001__$1);
var G__12009 = null;
var G__12010 = (0);
var G__12011 = (0);
seq__11944_11991 = G__12008;
chunk__11945_11992 = G__12009;
count__11946_11993 = G__12010;
i__11947_11994 = G__12011;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
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
var len__4736__auto___12018 = arguments.length;
var i__4737__auto___12019 = (0);
while(true){
if((i__4737__auto___12019 < len__4736__auto___12018)){
args__4742__auto__.push((arguments[i__4737__auto___12019]));

var G__12020 = (i__4737__auto___12019 + (1));
i__4737__auto___12019 = G__12020;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__12015){
var map__12016 = p__12015;
var map__12016__$1 = (((((!((map__12016 == null))))?(((((map__12016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12016):map__12016);
var options = map__12016__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq12012){
var G__12013 = cljs.core.first.call(null,seq12012);
var seq12012__$1 = cljs.core.next.call(null,seq12012);
var G__12014 = cljs.core.first.call(null,seq12012__$1);
var seq12012__$2 = cljs.core.next.call(null,seq12012__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12013,G__12014,seq12012__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12024 = arguments.length;
var i__4737__auto___12025 = (0);
while(true){
if((i__4737__auto___12025 < len__4736__auto___12024)){
args__4742__auto__.push((arguments[i__4737__auto___12025]));

var G__12026 = (i__4737__auto___12025 + (1));
i__4737__auto___12025 = G__12026;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq12021){
var G__12022 = cljs.core.first.call(null,seq12021);
var seq12021__$1 = cljs.core.next.call(null,seq12021);
var G__12023 = cljs.core.first.call(null,seq12021__$1);
var seq12021__$2 = cljs.core.next.call(null,seq12021__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12022,G__12023,seq12021__$2);
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
return React.useReducer((function (p1__12027_SHARP_,p2__12028_SHARP_){
return reducer_fn.call(null,p1__12027_SHARP_,p2__12028_SHARP_);
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
var G__12030 = arguments.length;
switch (G__12030) {
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
var or__4126__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4126__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
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
var G__12033 = arguments.length;
switch (G__12033) {
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
return React.useCallback(callback,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__12036 = arguments.length;
switch (G__12036) {
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
return React.useMemo(f,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
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
var G__12039 = arguments.length;
switch (G__12039) {
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
return rum.core.render_html.call(null,element,null);
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
