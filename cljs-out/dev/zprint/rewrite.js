// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('zprint.rewrite');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.rewrite.prewalk_subtree = (function zprint$rewrite$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.end_QMARK_.call(null,loc)))){
return loc;
} else {
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : p_QMARK_.call(null,loc)))){
var temp__5718__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
var G__29865 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.zip.next.call(null,n));
loc = G__29865;
continue;
} else {
var G__29866 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__29866;
continue;
}
} else {
var G__29867 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__29867;
continue;
}
}
break;
}
});
zprint.rewrite.prewalk = (function zprint$rewrite$prewalk(zloc,p_QMARK_,f){
var G__29868 = zloc;
var G__29869 = (function (){var G__29870 = zprint.rewrite.prewalk_subtree(p_QMARK_,f,(function (){var G__29871 = zloc;
var G__29871__$1 = (((G__29871 == null))?null:(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__29871) : rewrite_clj.zip.node.call(null,G__29871)));
if((G__29871__$1 == null)){
return null;
} else {
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29871__$1) : zprint.zutil.edn_STAR_.call(null,G__29871__$1));
}
})());
return (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(G__29870) : rewrite_clj.zip.root.call(null,G__29870));
})();
return (rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2(G__29868,G__29869) : rewrite_clj.zip.replace.call(null,G__29868,G__29869));
});
/**
 * Given a zloc, get something out of it that is sortable.
 */
zprint.rewrite.get_sortable = (function zprint$rewrite$get_sortable(zloc){
var nloc = zloc;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),cljs.core.cst$kw$token)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_element = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.tag.call(null,next_element)),cljs.core.cst$kw$token)){
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.string.call(null,next_element));
} else {
return "";
}
})())].join('');
} else {
var G__29872 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.down.call(null,nloc));
nloc = G__29872;
continue;
}
break;
}
});
/**
 * Sort the everything in the vector to the right of zloc.
 */
zprint.rewrite.sort_val = (function zprint$rewrite$sort_val(zloc){
var dep_val = zloc;
var dep_seq = (function (){var nloc = zloc;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(nloc)){
var G__29873 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
var G__29874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nloc);
nloc = G__29873;
out = G__29874;
continue;
} else {
return out;
}
break;
}
})();
var dep_count = cljs.core.count(dep_seq);
var sorted_seq = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(zprint.rewrite.get_sortable,dep_seq);
var nloc = zloc;
var new_loc = sorted_seq;
var last_loc = null;
while(true){
if(cljs.core.truth_(new_loc)){
var new_z = cljs.core.first(new_loc);
var new_node = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.tag.call(null,new_z)),cljs.core.cst$kw$uneval))?rewrite_clj.parser.parse_string((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.string.call(null,new_z))):(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.node.call(null,new_z)));
var replaced_loc = clojure.zip.replace(nloc,new_node);
var G__29875 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(replaced_loc) : rewrite_clj.zip.right.call(null,replaced_loc));
var G__29876 = cljs.core.next(new_loc);
var G__29877 = replaced_loc;
nloc = G__29875;
new_loc = G__29876;
last_loc = G__29877;
continue;
} else {
return (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(last_loc) : rewrite_clj.zip.up.call(null,last_loc));
}
break;
}
});
/**
 * Do a down and a sort-val
 */
zprint.rewrite.sort_down = (function zprint$rewrite$sort_down(zloc){
return zprint.rewrite.sort_val((function (){var G__29878 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.right.call(null,zloc));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__29878) : rewrite_clj.zip.down.call(null,G__29878));
})());
});
/**
 * Reorder the dependencies in a project.clj file.
 */
zprint.rewrite.sort_dependencies = (function zprint$rewrite$sort_dependencies(caller,options,zloc){
var new_dep = zprint.rewrite.prewalk(zloc,(function (p1__29879_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(p1__29879_SHARP_) : rewrite_clj.zip.tag.call(null,p1__29879_SHARP_)),cljs.core.cst$kw$token)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(p1__29879_SHARP_) : rewrite_clj.zip.sexpr.call(null,p1__29879_SHARP_)),cljs.core.cst$kw$dependencies)));
}),zprint.rewrite.sort_down);
return new_dep;
});
