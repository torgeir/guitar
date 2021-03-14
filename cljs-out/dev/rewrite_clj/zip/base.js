// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper(rewrite_clj.node.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.tag.call(null,node)),cljs.core.cst$kw$forms)){
var top = rewrite_clj.zip.base.edn_STAR_(node);
var or__4126__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.down(top));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return top;
}
} else {
var G__23951 = (function (){var G__23950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
return (rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1(G__23950) : rewrite_clj.node.forms_node.call(null,G__23950));
})();
node = G__23951;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__23952 = zloc;
var G__23952__$1 = (((G__23952 == null))?null:clojure.zip.node(G__23952));
if((G__23952__$1 == null)){
return null;
} else {
return (rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(G__23952__$1) : rewrite_clj.node.tag.call(null,G__23952__$1));
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__23953 = zloc;
var G__23953__$1 = (((G__23953 == null))?null:clojure.zip.node(G__23953));
if((G__23953__$1 == null)){
return null;
} else {
return (rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(G__23953__$1) : rewrite_clj.node.sexpr.call(null,G__23953__$1));
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__23954 = zloc;
var G__23954__$1 = (((G__23954 == null))?null:clojure.zip.node(G__23954));
if((G__23954__$1 == null)){
return null;
} else {
return (rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1(G__23954__$1) : rewrite_clj.node.child_sexprs.call(null,G__23954__$1));
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__4126__auto__ = (function (){var G__23956 = zloc;
var G__23956__$1 = (((G__23956 == null))?null:clojure.zip.node(G__23956));
if((G__23956__$1 == null)){
return null;
} else {
return (rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1(G__23956__$1) : rewrite_clj.node.length.call(null,G__23956__$1));
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__23957 = s;
var G__23957__$1 = (((G__23957 == null))?null:rewrite_clj.parser.parse_string_all(G__23957));
if((G__23957__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn(G__23957__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__23958 = zloc;
var G__23958__$1 = (((G__23958 == null))?null:clojure.zip.node(G__23958));
if((G__23958__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__23958__$1) : rewrite_clj.node.string.call(null,G__23958__$1));
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__23959 = zloc;
var G__23959__$1 = (((G__23959 == null))?null:clojure.zip.root(G__23959));
if((G__23959__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__23959__$1) : rewrite_clj.node.string.call(null,G__23959__$1));
}
});
