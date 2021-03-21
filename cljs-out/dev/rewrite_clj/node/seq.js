// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.node.seq');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.seq.wrap_vec = (function rewrite_clj$node$seq$wrap_vec(s){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"]"].join('');
});
rewrite_clj.node.seq.wrap_list = (function rewrite_clj$node$seq$wrap_list(s){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
});
rewrite_clj.node.seq.wrap_set = (function rewrite_clj$node$seq$wrap_set(s){
return ["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});
rewrite_clj.node.seq.wrap_map = (function rewrite_clj$node$seq$wrap_map(s){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.seq.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.seq.SeqNode = (function (tag,wrap_fn,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.wrap_fn = wrap_fn;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k21848,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__21852 = k21848;
var G__21852__$1 = (((G__21852 instanceof cljs.core.Keyword))?G__21852.fqn:null);
switch (G__21852__$1) {
case "tag":
return self__.tag;

break;
case "wrap-fn":
return self__.wrap_fn;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21848,else__4383__auto__);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__21853){
var vec__21854 = p__21853;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21854,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21854,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wrap_DASH_fn,self__.wrap_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wrap_DASH_length,self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq_DASH_fn,self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21847){
var self__ = this;
var G__21847__$1 = this;
return (new cljs.core.RecordIter((0),G__21847__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$wrap_DASH_fn,cljs.core.cst$kw$wrap_DASH_length,cljs.core.cst$kw$seq_DASH_fn,cljs.core.cst$kw$children], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__21857 = (function (coll__4377__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__21857(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21849,other21850){
var self__ = this;
var this21849__$1 = this;
return (((!((other21850 == null)))) && ((this21849__$1.constructor === other21850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.tag,other21850.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.wrap_fn,other21850.wrap_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.wrap_length,other21850.wrap_length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.seq_fn,other21850.seq_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.children,other21850.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21849__$1.__extmap,other21850.__extmap)));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__21858 = rewrite_clj.node.protocols.sexprs(self__.children);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__21858) : self__.seq_fn.call(null,G__21858));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__21859 = rewrite_clj.node.protocols.concat_strings(self__.children);
return (self__.wrap_fn.cljs$core$IFn$_invoke$arity$1 ? self__.wrap_fn.cljs$core$IFn$_invoke$arity$1(G__21859) : self__.wrap_fn.call(null,G__21859));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$seq_DASH_fn,null,cljs.core.cst$kw$wrap_DASH_fn,null,cljs.core.cst$kw$wrap_DASH_length,null,cljs.core.cst$kw$tag,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$children,children_SINGLEQUOTE_);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__21847){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__21860 = cljs.core.keyword_identical_QMARK_;
var expr__21861 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__21863 = cljs.core.cst$kw$tag;
var G__21864 = expr__21861;
return (pred__21860.cljs$core$IFn$_invoke$arity$2 ? pred__21860.cljs$core$IFn$_invoke$arity$2(G__21863,G__21864) : pred__21860.call(null,G__21863,G__21864));
})())){
return (new rewrite_clj.node.seq.SeqNode(G__21847,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21865 = cljs.core.cst$kw$wrap_DASH_fn;
var G__21866 = expr__21861;
return (pred__21860.cljs$core$IFn$_invoke$arity$2 ? pred__21860.cljs$core$IFn$_invoke$arity$2(G__21865,G__21866) : pred__21860.call(null,G__21865,G__21866));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__21847,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21867 = cljs.core.cst$kw$wrap_DASH_length;
var G__21868 = expr__21861;
return (pred__21860.cljs$core$IFn$_invoke$arity$2 ? pred__21860.cljs$core$IFn$_invoke$arity$2(G__21867,G__21868) : pred__21860.call(null,G__21867,G__21868));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,G__21847,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21869 = cljs.core.cst$kw$seq_DASH_fn;
var G__21870 = expr__21861;
return (pred__21860.cljs$core$IFn$_invoke$arity$2 ? pred__21860.cljs$core$IFn$_invoke$arity$2(G__21869,G__21870) : pred__21860.call(null,G__21869,G__21870));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,G__21847,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21871 = cljs.core.cst$kw$children;
var G__21872 = expr__21861;
return (pred__21860.cljs$core$IFn$_invoke$arity$2 ? pred__21860.cljs$core$IFn$_invoke$arity$2(G__21871,G__21872) : pred__21860.call(null,G__21871,G__21872));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,G__21847,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__21847),null));
}
}
}
}
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$tag,self__.tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wrap_DASH_fn,self__.wrap_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wrap_DASH_length,self__.wrap_length,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$seq_DASH_fn,self__.seq_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__21847){
var self__ = this;
var this__4379__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,G__21847,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$wrap_DASH_fn,cljs.core.cst$sym$wrap_DASH_length,cljs.core.cst$sym$seq_DASH_fn,cljs.core.cst$sym$children], null);
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"rewrite-clj.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,wrap_fn,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,wrap_fn,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__21851){
var extmap__4419__auto__ = (function (){var G__21873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21851,cljs.core.cst$kw$tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wrap_DASH_fn,cljs.core.cst$kw$wrap_DASH_length,cljs.core.cst$kw$seq_DASH_fn,cljs.core.cst$kw$children], 0));
if(cljs.core.record_QMARK_(G__21851)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21873);
} else {
return G__21873;
}
})();
return (new rewrite_clj.node.seq.SeqNode(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__21851),cljs.core.cst$kw$wrap_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__21851),cljs.core.cst$kw$wrap_DASH_length.cljs$core$IFn$_invoke$arity$1(G__21851),cljs.core.cst$kw$seq_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__21851),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__21851),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a node representing an EDN list.
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$list,rewrite_clj.node.seq.wrap_list,(2),(function (p1__21875_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__21875_SHARP_);
}),children);
});
/**
 * Create a node representing an EDN vector.
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$vector,rewrite_clj.node.seq.wrap_vec,(2),cljs.core.vec,children);
});
/**
 * Create a node representing an EDN set.
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$set,rewrite_clj.node.seq.wrap_set,(3),cljs.core.set,children);
});
/**
 * Create a node representing an EDN map.
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$map,rewrite_clj.node.seq.wrap_map,(2),(function (p1__21876_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__21876_SHARP_);
}),children);
});
