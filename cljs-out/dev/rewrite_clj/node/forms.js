// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.node.forms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.forms.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.forms.FormsNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.forms.FormsNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k15859,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__15863 = k15859;
var G__15863__$1 = (((G__15863 instanceof cljs.core.Keyword))?G__15863.fqn:null);
switch (G__15863__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15859,else__4383__auto__);

}
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__15864){
var vec__15865 = p__15864;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#rewrite-clj.node.forms.FormsNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15858){
var self__ = this;
var G__15858__$1 = this;
return (new cljs.core.RecordIter((0),G__15858__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__15868 = (function (coll__4377__auto__){
return (116885345 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__15868(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15860,other15861){
var self__ = this;
var this15860__$1 = this;
return (((!((other15861 == null)))) && ((this15860__$1.constructor === other15861.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15860__$1.children,other15861.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15860__$1.__extmap,other15861.__extmap)));
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$forms;
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var es = rewrite_clj.node.protocols.sexprs(self__.children);
if(cljs.core.next(es)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,es);
} else {
return cljs.core.first(es);
}
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.protocols.sum_lengths(self__.children);
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.protocols.concat_strings(self__.children);
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$children,children_SINGLEQUOTE_);
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__15858){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__15869 = cljs.core.keyword_identical_QMARK_;
var expr__15870 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__15872 = cljs.core.cst$kw$children;
var G__15873 = expr__15870;
return (pred__15869.cljs$core$IFn$_invoke$arity$2 ? pred__15869.cljs$core$IFn$_invoke$arity$2(G__15872,G__15873) : pred__15869.call(null,G__15872,G__15873));
})())){
return (new rewrite_clj.node.forms.FormsNode(G__15858,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__15858),null));
}
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__15858){
var self__ = this;
var this__4379__auto____$1 = this;
return (new rewrite_clj.node.forms.FormsNode(self__.children,G__15858,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(rewrite_clj.node.forms.FormsNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$children], null);
}));

(rewrite_clj.node.forms.FormsNode.cljs$lang$type = true);

(rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.forms/FormsNode",null,(1),null));
}));

(rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"rewrite-clj.node.forms/FormsNode");
}));

/**
 * Positional factory function for rewrite-clj.node.forms/FormsNode.
 */
rewrite_clj.node.forms.__GT_FormsNode = (function rewrite_clj$node$forms$__GT_FormsNode(children){
return (new rewrite_clj.node.forms.FormsNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.forms/FormsNode, taking a map of keywords to field values.
 */
rewrite_clj.node.forms.map__GT_FormsNode = (function rewrite_clj$node$forms$map__GT_FormsNode(G__15862){
var extmap__4419__auto__ = (function (){var G__15874 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15862,cljs.core.cst$kw$children);
if(cljs.core.record_QMARK_(G__15862)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15874);
} else {
return G__15874;
}
})();
return (new rewrite_clj.node.forms.FormsNode(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__15862),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create top-level node wrapping multiple children
 * (equals an implicit `do` on the top-level).
 */
rewrite_clj.node.forms.forms_node = (function rewrite_clj$node$forms$forms_node(children){
return rewrite_clj.node.forms.__GT_FormsNode(children);
});
