// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.node.keyword');
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.keyword.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k21980,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__21984 = k21980;
var G__21984__$1 = (((G__21984 instanceof cljs.core.Keyword))?G__21984.fqn:null);
switch (G__21984__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21980,else__4383__auto__);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__21985){
var vec__21986 = p__21985;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$namespaced_QMARK_,self__.namespaced_QMARK_],null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21979){
var self__ = this;
var G__21979__$1 = this;
return (new cljs.core.RecordIter((0),G__21979__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$namespaced_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__21989 = (function (coll__4377__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__21989(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21981,other21982){
var self__ = this;
var this21981__$1 = this;
return (((!((other21982 == null)))) && ((this21981__$1.constructor === other21982.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21981__$1.k,other21982.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21981__$1.namespaced_QMARK_,other21982.namespaced_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21981__$1.__extmap,other21982.__extmap)));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$token;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.namespace(self__.k));
} else {
return and__4115__auto__;
}
})())){
throw (new Error("Namespaced keywords not supported !"));
} else {
return self__.k;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (((cljs.core.name(self__.k)).length) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5718__auto__ = cljs.core.namespace(self__.k);
if(cljs.core.truth_(temp__5718__auto__)){
var nspace = temp__5718__auto__;
return (((1) + c) + ((nspace).length));
} else {
return c;
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.k], 0));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return [":",v].join('');
} else {
return v;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,null,cljs.core.cst$kw$namespaced_QMARK_,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__21979){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__21990 = cljs.core.keyword_identical_QMARK_;
var expr__21991 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__21993 = cljs.core.cst$kw$k;
var G__21994 = expr__21991;
return (pred__21990.cljs$core$IFn$_invoke$arity$2 ? pred__21990.cljs$core$IFn$_invoke$arity$2(G__21993,G__21994) : pred__21990.call(null,G__21993,G__21994));
})())){
return (new rewrite_clj.node.keyword.KeywordNode(G__21979,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21995 = cljs.core.cst$kw$namespaced_QMARK_;
var G__21996 = expr__21991;
return (pred__21990.cljs$core$IFn$_invoke$arity$2 ? pred__21990.cljs$core$IFn$_invoke$arity$2(G__21995,G__21996) : pred__21990.call(null,G__21995,G__21996));
})())){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__21979,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__21979),null));
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$k,self__.k,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$namespaced_QMARK_,self__.namespaced_QMARK_,null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__21979){
var self__ = this;
var this__4379__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__21979,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$namespaced_QMARK_], null);
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true);

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"rewrite-clj.node.keyword/KeywordNode");
}));

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__21983){
var extmap__4419__auto__ = (function (){var G__21997 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21983,cljs.core.cst$kw$k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$namespaced_QMARK_], 0));
if(cljs.core.record_QMARK_(G__21983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21997);
} else {
return G__21997;
}
})();
return (new rewrite_clj.node.keyword.KeywordNode(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__21983),cljs.core.cst$kw$namespaced_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21983),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create node representing a keyword. If `namespaced?` is given as `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22005 = arguments.length;
var i__4737__auto___22006 = (0);
while(true){
if((i__4737__auto___22006 < len__4736__auto___22005)){
args__4742__auto__.push((arguments[i__4737__auto___22006]));

var G__22007 = (i__4737__auto___22006 + (1));
i__4737__auto___22006 = G__22007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__22001){
var vec__22002 = p__22001;
var namespaced_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22002,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode(k,namespaced_QMARK_);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq21999){
var G__22000 = cljs.core.first(seq21999);
var seq21999__$1 = cljs.core.next(seq21999);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22000,seq21999__$1);
}));

