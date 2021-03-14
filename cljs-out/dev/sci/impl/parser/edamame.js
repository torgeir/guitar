// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.parser.edamame');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.inspect');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('edamame.impl.read_fn');
goog.require('sci.impl.parser.edamame.syntax_quote');
goog.require('goog.string.StringBuffer');
sci.impl.parser.edamame.edn_read = (function sci$impl$parser$edamame$edn_read(ctx,reader){
var tools_reader_opts = cljs.core.cst$kw$tools$reader_SLASH_opts.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
sci.impl.parser.edamame.dispatch_macro_QMARK_ = (function sci$impl$parser$edamame$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
sci.impl.parser.edamame.read_token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},cljs.core.cst$sym$cljs$tools$reader$edn_SLASH_read_DASH_token,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$top_DASH_fn,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$tools$reader$edn,cljs.core.cst$sym$read_DASH_token,"resources/public/cljs-out/dev/cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$variadic_QMARK_,false,cljs.core.cst$kw$fixed_DASH_arity,4,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,4,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)], null),cljs.core.cst$kw$arglists,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
sci.impl.parser.edamame.parse_symbol = new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},cljs.core.cst$sym$cljs$tools$reader$impl$commons_SLASH_parse_DASH_symbol,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$tools$reader$impl$commons,cljs.core.cst$sym$parse_DASH_symbol,"resources/public/cljs-out/dev/cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$token], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)]));

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.parser.edamame.Loc = (function (line,column,__meta,__extmap,__hash){
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.parser.edamame.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k17511,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__17515 = k17511;
var G__17515__$1 = (((G__17515 instanceof cljs.core.Keyword))?G__17515.fqn:null);
switch (G__17515__$1) {
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17511,else__4383__auto__);

}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__17516){
var vec__17517 = p__17516;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sci.impl.parser.edamame.Loc{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$line,self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$column,self__.column],null))], null),self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17510){
var self__ = this;
var G__17510__$1 = this;
return (new cljs.core.RecordIter((0),G__17510__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$column], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__17520 = (function (coll__4377__auto__){
return (-952826147 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__17520(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17512,other17513){
var self__ = this;
var this17512__$1 = this;
return (((!((other17513 == null)))) && ((this17512__$1.constructor === other17513.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17512__$1.line,other17513.line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17512__$1.column,other17513.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17512__$1.__extmap,other17513.__extmap)));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,null,cljs.core.cst$kw$line,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__17510){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__17521 = cljs.core.keyword_identical_QMARK_;
var expr__17522 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__17524 = cljs.core.cst$kw$line;
var G__17525 = expr__17522;
return (pred__17521.cljs$core$IFn$_invoke$arity$2 ? pred__17521.cljs$core$IFn$_invoke$arity$2(G__17524,G__17525) : pred__17521.call(null,G__17524,G__17525));
})())){
return (new sci.impl.parser.edamame.Loc(G__17510,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17526 = cljs.core.cst$kw$column;
var G__17527 = expr__17522;
return (pred__17521.cljs$core$IFn$_invoke$arity$2 ? pred__17521.cljs$core$IFn$_invoke$arity$2(G__17526,G__17527) : pred__17521.call(null,G__17526,G__17527));
})())){
return (new sci.impl.parser.edamame.Loc(self__.line,G__17510,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__17510),null));
}
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$line,self__.line,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$column,self__.column,null))], null),self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__17510){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,G__17510,self__.__extmap,self__.__hash));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sci.impl.parser.edamame.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$line,cljs.core.cst$sym$column], null);
}));

(sci.impl.parser.edamame.Loc.cljs$lang$type = true);

(sci.impl.parser.edamame.Loc.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sci.impl.parser.edamame/Loc",null,(1),null));
}));

(sci.impl.parser.edamame.Loc.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sci.impl.parser.edamame/Loc");
}));

/**
 * Positional factory function for sci.impl.parser.edamame/Loc.
 */
sci.impl.parser.edamame.__GT_Loc = (function sci$impl$parser$edamame$__GT_Loc(line,column){
return (new sci.impl.parser.edamame.Loc(line,column,null,null,null));
});

/**
 * Factory function for sci.impl.parser.edamame/Loc, taking a map of keywords to field values.
 */
sci.impl.parser.edamame.map__GT_Loc = (function sci$impl$parser$edamame$map__GT_Loc(G__17514){
var extmap__4419__auto__ = (function (){var G__17528 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17514,cljs.core.cst$kw$line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column], 0));
if(cljs.core.record_QMARK_(G__17514)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17528);
} else {
return G__17528;
}
})();
return (new sci.impl.parser.edamame.Loc(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(G__17514),cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(G__17514),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sci.impl.parser.edamame.location = (function sci$impl$parser$edamame$location(reader){
return sci.impl.parser.edamame.__GT_Loc(reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null));
});
sci.impl.parser.edamame.kw_identical_QMARK_ = (function sci$impl$parser$edamame$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_(kw,v);
});
sci.impl.parser.edamame.parse_comment = (function sci$impl$parser$edamame$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
sci.impl.parser.edamame.whitespace_QMARK_ = (function sci$impl$parser$edamame$whitespace_QMARK_(c){
var and__4115__auto__ = c;
if(cljs.core.truth_(and__4115__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4115__auto__;
}
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
sci.impl.parser.edamame.skip_whitespace = (function sci$impl$parser$edamame$skip_whitespace(_ctx,reader){
while(true){
var temp__5720__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
if(cljs.core.truth_(sci.impl.parser.edamame.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
} else {
return null;
}
break;
}
});
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
sci.impl.parser.edamame.throw_reader = (function sci$impl$parser$edamame$throw_reader(var_args){
var G__17531 = arguments.length;
switch (G__17531) {
case 3:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (_ctx,reader,msg,data,loc){
var c = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader));
var l = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$edamame_SLASH_error,cljs.core.cst$kw$line,l,cljs.core.cst$kw$column,c], null),data], 0)));
}));

(sci.impl.parser.edamame.throw_reader.cljs$lang$maxFixedArity = 5);

sci.impl.parser.edamame.non_match = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("non-match");
sci.impl.parser.edamame.non_match_QMARK_ = (function sci$impl$parser$edamame$non_match_QMARK_(v){
return (v === sci.impl.parser.edamame.non_match);
});
sci.impl.parser.edamame.throw_eof_while_reading = (function sci$impl$parser$edamame$throw_eof_while_reading(ctx,reader){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
sci.impl.parser.edamame.parse_to_delimiter = (function sci$impl$parser$edamame$parse_to_delimiter(var_args){
var G__17534 = arguments.length;
switch (G__17534) {
case 3:
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var line = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var column = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,delimiter),cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char,opened,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__17540 = next_val;
var G__17540__$1 = (((G__17540 == null))?null:cljs.core.meta(G__17540));
if((G__17540__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_cond_DASH_splice.cljs$core$IFn$_invoke$arity$1(G__17540__$1);
}
})();
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,next_val)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edamame_SLASH_expected_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),cljs.core.cst$kw$edamame_SLASH_opened_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)], null));
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__17541_17546 = cljs.core.seq(next_val);
var chunk__17542_17547 = null;
var count__17543_17548 = (0);
var i__17544_17549 = (0);
while(true){
if((i__17544_17549 < count__17543_17548)){
var v_17550 = chunk__17542_17547.cljs$core$IIndexed$_nth$arity$2(null,i__17544_17549);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_17550);


var G__17551 = seq__17541_17546;
var G__17552 = chunk__17542_17547;
var G__17553 = count__17543_17548;
var G__17554 = (i__17544_17549 + (1));
seq__17541_17546 = G__17551;
chunk__17542_17547 = G__17552;
count__17543_17548 = G__17553;
i__17544_17549 = G__17554;
continue;
} else {
var temp__5720__auto___17555 = cljs.core.seq(seq__17541_17546);
if(temp__5720__auto___17555){
var seq__17541_17556__$1 = temp__5720__auto___17555;
if(cljs.core.chunked_seq_QMARK_(seq__17541_17556__$1)){
var c__4556__auto___17557 = cljs.core.chunk_first(seq__17541_17556__$1);
var G__17558 = cljs.core.chunk_rest(seq__17541_17556__$1);
var G__17559 = c__4556__auto___17557;
var G__17560 = cljs.core.count(c__4556__auto___17557);
var G__17561 = (0);
seq__17541_17546 = G__17558;
chunk__17542_17547 = G__17559;
count__17543_17548 = G__17560;
i__17544_17549 = G__17561;
continue;
} else {
var v_17562 = cljs.core.first(seq__17541_17556__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_17562);


var G__17563 = cljs.core.next(seq__17541_17556__$1);
var G__17564 = null;
var G__17565 = (0);
var G__17566 = (0);
seq__17541_17546 = G__17563;
chunk__17542_17547 = G__17564;
count__17543_17548 = G__17565;
i__17544_17549 = G__17566;
continue;
}
} else {
}
}
break;
}

var G__17567 = vals;
vals = G__17567;
continue;
} else {
if(sci.impl.parser.edamame.non_match_QMARK_(next_val)){
var G__17568 = vals;
vals = G__17568;
continue;
} else {
var G__17569 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__17569;
continue;

}
}
}
}
break;
}
}));

(sci.impl.parser.edamame.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

sci.impl.parser.edamame.parse_list = (function sci$impl$parser$edamame$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
sci.impl.parser.edamame.read_regex_pattern = (function sci$impl$parser$edamame$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_17570__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_17570__$1 == null)){
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_17570__$1);
} else {
}

var G__17571 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__17571;
continue;
}
}
break;
}
});
sci.impl.parser.edamame.duplicate_keys_error = (function sci$impl$parser$edamame$duplicate_keys_error(msg,coll){
var duplicates = (function sci$impl$parser$edamame$duplicate_keys_error_$_duplicates(seq){
var iter__4529__auto__ = (function sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__17582(s__17583){
return (new cljs.core.LazySeq(null,(function (){
var s__17583__$1 = s__17583;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17583__$1);
if(temp__5720__auto__){
var s__17583__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17583__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17583__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17585 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17584 = (0);
while(true){
if((i__17584 < size__4528__auto__)){
var vec__17586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17584);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__17585,id);

var G__17592 = (i__17584 + (1));
i__17584 = G__17592;
continue;
} else {
var G__17593 = (i__17584 + (1));
i__17584 = G__17593;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17585),sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__17582(cljs.core.chunk_rest(s__17583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17585),null);
}
} else {
var vec__17589 = cljs.core.first(s__17583__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(1),null);
if((freq > (1))){
return cljs.core.cons(id,sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__17582(cljs.core.rest(s__17583__$2)));
} else {
var G__17594 = cljs.core.rest(s__17583__$2);
s__17583__$1 = G__17594;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
sci.impl.parser.edamame.throw_dup_keys = (function sci$impl$parser$edamame$throw_dup_keys(ctx,reader,loc,kind,ks){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,sci.impl.parser.edamame.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
sci.impl.parser.edamame.parse_set = (function sci$impl$parser$edamame$parse_set(ctx,reader){
var start_loc = sci.impl.parser.edamame.location(reader);
var coll = sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
sci.impl.parser.edamame.throw_dup_keys(ctx,reader,start_loc,cljs.core.cst$kw$set,coll);
}

return the_set;
});
sci.impl.parser.edamame.parse_first_matching_condition = (function sci$impl$parser$edamame$parse_first_matching_condition(ctx,reader){
var features = cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(ctx);
var match = sci.impl.parser.edamame.non_match;
while(true){
var k = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(k,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter)){
return match;
} else {
var next_is_match_QMARK_ = ((sci.impl.parser.edamame.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (sci.impl.parser.edamame.kw_identical_QMARK_(k,cljs.core.cst$kw$default)))));
if(next_is_match_QMARK_){
var match__$1 = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_suppress,true);
while(true){
var next_val_17603 = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx__$1,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,next_val_17603)){
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,next_val_17603)){
var delimiter_17604 = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__17599_17605 = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__17599_17606__$1 = (((((!((map__17599_17605 == null))))?(((((map__17599_17605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17599_17605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17599_17605):map__17599_17605);
var line_17607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599_17606__$1,cljs.core.cst$kw$line);
var column_17608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599_17606__$1,cljs.core.cst$kw$column);
var char_17609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17599_17606__$1,cljs.core.cst$kw$char);
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_17604)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_17609)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17607),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_17608),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edamame_SLASH_expected_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_17604),cljs.core.cst$kw$edamame_SLASH_opened_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_17609)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
var G__17601_17610 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_suppress,true);
var G__17602_17611 = reader;
(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(G__17601_17610,G__17602_17611) : sci.impl.parser.edamame.parse_next.call(null,G__17601_17610,G__17602_17611));

var G__17612 = match;
match = G__17612;
continue;
}
}
break;
}
});
sci.impl.parser.edamame.parse_reader_conditional = (function sci$impl$parser$edamame$parse_reader_conditional(ctx,reader){
sci.impl.parser.edamame.skip_whitespace(ctx,reader);

var opt = cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

sci.impl.parser.edamame.skip_whitespace(ctx,reader);

if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$preserve,opt)){
return cljs.tools.reader.impl.utils.reader_conditional((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__17614 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),cljs.core.assoc,cljs.core.cst$kw$edamame_SLASH_read_DASH_cond_DASH_splicing,splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__17614) : opt.call(null,G__17614));
} else {
var line = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var column = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,")"),cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char,opened,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null));
var match = sci.impl.parser.edamame.parse_first_matching_condition(ctx__$1,reader);
if(sci.impl.parser.edamame.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__17613_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17613_SHARP_,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_cond_DASH_splice,true);
}));
} else {
return match;

}
}

}
}
});
sci.impl.parser.edamame.get_auto_resolve = (function sci$impl$parser$edamame$get_auto_resolve(var_args){
var G__17616 = arguments.length;
switch (G__17616) {
case 3:
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5718__auto__ = cljs.core.cst$kw$auto_DASH_resolve.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return v;
} else {
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4126__auto__ = msg;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(sci.impl.parser.edamame.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
sci.impl.parser.edamame.auto_resolve = (function sci$impl$parser$edamame$auto_resolve(var_args){
var G__17619 = arguments.length;
switch (G__17619) {
case 5:
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5718__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5718__auto__)){
var kns__$1 = temp__5718__auto__;
return kns__$1;
} else {
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4126__auto__ = msg;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(sci.impl.parser.edamame.auto_resolve.cljs$lang$maxFixedArity = 6);

sci.impl.parser.edamame.parse_namespaced_map = (function sci$impl$parser$edamame$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)))?(function (){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:sci.impl.parser.edamame.edn_read(ctx,reader)):sci.impl.parser.edamame.edn_read(ctx,reader));
var the_map = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?cljs.core.cst$kw$current:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix)));
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
sci.impl.parser.edamame.parse_sharp = (function sci$impl$parser$edamame$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__17621 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17621)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__17621)){
sci.impl.parser.edamame.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__17621)){
var pat = sci.impl.parser.edamame.read_regex_pattern(ctx,reader);
return cljs.core.re_pattern(pat);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__17621)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,next_val)){
sci.impl.parser.edamame.throw_eof_while_reading(ctx,reader);
} else {
}

return (new cljs.core.List(null,cljs.core.cst$sym$var,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__17621)){
var fn_expr = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return edamame.impl.read_fn.read_fn(fn_expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__17621)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__17621)){
return sci.impl.parser.edamame.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__17621)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,cljs.core.cst$sym$read_DASH_eval,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__17621)){
if(cljs.core.truth_(cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__17621)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));

return reader;
} else {
if(sci.impl.parser.edamame.dispatch_macro_QMARK_(c)){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return sci.impl.parser.edamame.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_suppress.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));

return (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
} else {
var sym = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var data = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var f = (function (){var or__4126__auto__ = (function (){var temp__5720__auto__ = cljs.core.cst$kw$readers.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var readers = temp__5720__auto__;
return (readers.cljs$core$IFn$_invoke$arity$1 ? readers.cljs$core$IFn$_invoke$arity$1(sym) : readers.call(null,sym));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__17622 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (fexpr__17622.cljs$core$IFn$_invoke$arity$1 ? fexpr__17622.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__17622.call(null,sym));
}
})();
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
}
}
}

}
}
}
}
}
}
}
}
}
}
});
sci.impl.parser.edamame.throw_odd_map = (function sci$impl$parser$edamame$throw_odd_map(ctx,reader,loc,elements){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
sci.impl.parser.edamame.parse_map = (function sci$impl$parser$edamame$parse_map(ctx,reader){
var start_loc = sci.impl.parser.edamame.location(reader);
var elements = sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
sci.impl.parser.edamame.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_17623 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_17623))){
} else {
sci.impl.parser.edamame.throw_dup_keys(ctx,reader,start_loc,cljs.core.cst$kw$map,ks_17623);
}
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
});
sci.impl.parser.edamame.parse_keyword = (function sci$impl$parser$edamame$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(sci.impl.parser.edamame.whitespace_QMARK_(init_c))){
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = (function (){var G__17624 = reader;
var G__17625 = cljs.core.cst$kw$keyword;
var G__17626 = init_c;
return (sci.impl.parser.edamame.read_token.cljs$core$IFn$_invoke$arity$3 ? sci.impl.parser.edamame.read_token.cljs$core$IFn$_invoke$arity$3(G__17624,G__17625,G__17626) : sci.impl.parser.edamame.read_token.call(null,G__17624,G__17625,G__17626));
})();
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__17627 = (sci.impl.parser.edamame.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.parser.edamame.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : sci.impl.parser.edamame.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(1),null);
if(cljs.core.truth_(token_ns)){
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,cljs.core.cst$kw$current,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
sci.impl.parser.edamame.dispatch = (function sci$impl$parser$edamame$dispatch(ctx,reader,c){
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_sharp(ctx,reader);
} else {
var G__17630 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17630)){
return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__17630)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_deref,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__17630)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$gensyms,gensyms);
var ret = sci.impl.parser.edamame.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__17630)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,next_val)){
sci.impl.parser.edamame.throw_eof_while_reading(ctx,reader);
} else {
}

return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__17630)){
return sci.impl.parser.edamame.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__17630)){
var expected = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__17637 = temp__5720__auto__;
var map__17637__$1 = (((((!((map__17637 == null))))?(((((map__17637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17637):map__17637);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17637__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17637__$1,cljs.core.cst$kw$column);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17637__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__17630)){
return sci.impl.parser.edamame.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__17630)){
return sci.impl.parser.edamame.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__17630)){
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__17630)){
return sci.impl.parser.edamame.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__17630)){
var expected = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__17645 = temp__5720__auto__;
var map__17645__$1 = (((((!((map__17645 == null))))?(((((map__17645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17645):map__17645);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17645__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17645__$1,cljs.core.cst$kw$column);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17645__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__17630)){
var expected = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__17653 = temp__5720__auto__;
var map__17653__$1 = (((((!((map__17653 == null))))?(((((map__17653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17653):map__17653);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,cljs.core.cst$kw$column);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__17630)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__17630)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_unquote,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return sci.impl.parser.edamame.edn_read(ctx,reader);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Resolves syntactical sugar in metadata
 */
sci.impl.parser.edamame.desugar_meta = (function sci$impl$parser$edamame$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
return f;

}
}
}
});
sci.impl.parser.edamame.iobj_QMARK_ = (function sci$impl$parser$edamame$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});
sci.impl.parser.edamame.parse_next = (function sci$impl$parser$edamame$parse_next(var_args){
var G__17658 = arguments.length;
switch (G__17658) {
case 2:
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var temp__5718__auto__ = (function (){var and__4115__auto__ = sci.impl.parser.edamame.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
var loc = sci.impl.parser.edamame.location(reader);
var log_QMARK_ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(ctx);
var buf = ((function (ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__){
return (function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reader.frames)));
});})(ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__))
;
var offset = (cljs.core.truth_(log_QMARK_)?((buf()).length):null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_(reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__){
return (function (){
return sci.impl.parser.edamame.dispatch(ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__))
):sci.impl.parser.edamame.dispatch(ctx,reader,c));
if((reader === obj)){
var G__17661 = ctx;
var G__17662 = reader;
var G__17663 = desugar;
ctx = G__17661;
reader = G__17662;
desugar = G__17663;
continue;
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,obj)){
return obj;
} else {
var iobj_QMARK__QMARK_ = sci.impl.parser.edamame.iobj_QMARK_(obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(),offset).trim():null);
var loc_QMARK_ = ((iobj_QMARK__QMARK_) && ((((obj instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(obj)))));
var line = ((loc_QMARK_)?loc.line:null);
var column = ((loc_QMARK_)?loc.column:null);
var obj__$1 = (cljs.core.truth_(desugar)?sci.impl.parser.edamame.desugar_meta(obj):obj);
var obj__$2 = ((loc_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,iobj_QMARK__QMARK_,src,loc_QMARK_,line,column,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__){
return (function (p1__17656_SHARP_){
var G__17659 = p1__17656_SHARP_;
var G__17659__$1 = ((loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17659,cljs.core.cst$kw$line,line),cljs.core.cst$kw$column,column):G__17659);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17659__$1,cljs.core.cst$kw$source,src);
} else {
return G__17659__$1;
}
});})(ctx,reader,desugar,iobj_QMARK__QMARK_,src,loc_QMARK_,line,column,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__))
):obj__$1
);
return obj__$2;
}
}
} else {
return cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof;
}
break;
}
}));

(sci.impl.parser.edamame.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
sci.impl.parser.edamame.string_reader = (function sci$impl$parser$edamame$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});
sci.impl.parser.edamame.parse_string = (function sci$impl$parser$edamame$parse_string(s,opts){
var src_QMARK_ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(opts);
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s):sci.impl.parser.edamame.string_reader(s));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,null);
var v = sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,v)){
return null;
} else {
return v;
}
});
sci.impl.parser.edamame.parse_string_all = (function sci$impl$parser$edamame$parse_string_all(s,opts){
var r = sci.impl.parser.edamame.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_expected_DASH_delimiter,null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(sci.impl.parser.edamame.kw_identical_QMARK_(cljs.core.cst$kw$sci$impl$parser$edamame_SLASH_eof,next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__17664 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__17664;
continue;
}
break;
}
});
sci.impl.parser.edamame.reader = (function sci$impl$parser$edamame$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
sci.impl.parser.edamame.get_line_number = (function sci$impl$parser$edamame$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
sci.impl.parser.edamame.get_column_number = (function sci$impl$parser$edamame$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
sci.impl.parser.edamame.source_logging_reader = (function sci$impl$parser$edamame$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
