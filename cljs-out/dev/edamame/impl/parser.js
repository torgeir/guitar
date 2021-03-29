// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('edamame.impl.parser');
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
goog.require('edamame.impl.syntax_quote');
goog.require('goog.string.StringBuffer');
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = cljs.core.cst$kw$tools$reader_SLASH_opts.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
edamame.impl.parser.read_token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},cljs.core.cst$sym$cljs$tools$reader$edn_SLASH_read_DASH_token,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$top_DASH_fn,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$tools$reader$edn,cljs.core.cst$sym$read_DASH_token,"resources/public/cljs-out/dev/cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$variadic_QMARK_,false,cljs.core.cst$kw$fixed_DASH_arity,4,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,4,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)], null),cljs.core.cst$kw$arglists,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
edamame.impl.parser.parse_symbol = new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},cljs.core.cst$sym$cljs$tools$reader$impl$commons_SLASH_parse_DASH_symbol,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$tools$reader$impl$commons,cljs.core.cst$sym$parse_DASH_symbol,"resources/public/cljs-out/dev/cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$token], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)]));

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
edamame.impl.parser.Loc = (function (row,col,__meta,__extmap,__hash){
this.row = row;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31011,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31015 = k31011;
var G__31015__$1 = (((G__31015 instanceof cljs.core.Keyword))?G__31015.fqn:null);
switch (G__31015__$1) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31011,else__4383__auto__);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__31016){
var vec__31017 = p__31016;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31017,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31017,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#edamame.impl.parser.Loc{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$row,self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31010){
var self__ = this;
var G__31010__$1 = this;
return (new cljs.core.RecordIter((0),G__31010__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row,cljs.core.cst$kw$col], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__31020 = (function (coll__4377__auto__){
return (1435872067 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__31020(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31012,other31013){
var self__ = this;
var this31012__$1 = this;
return (((!((other31013 == null)))) && ((this31012__$1.constructor === other31013.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31012__$1.row,other31013.row)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31012__$1.col,other31013.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31012__$1.__extmap,other31013.__extmap)));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$col,null,cljs.core.cst$kw$row,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31010){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31021 = cljs.core.keyword_identical_QMARK_;
var expr__31022 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__31024 = cljs.core.cst$kw$row;
var G__31025 = expr__31022;
return (pred__31021.cljs$core$IFn$_invoke$arity$2 ? pred__31021.cljs$core$IFn$_invoke$arity$2(G__31024,G__31025) : pred__31021.call(null,G__31024,G__31025));
})())){
return (new edamame.impl.parser.Loc(G__31010,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31026 = cljs.core.cst$kw$col;
var G__31027 = expr__31022;
return (pred__31021.cljs$core$IFn$_invoke$arity$2 ? pred__31021.cljs$core$IFn$_invoke$arity$2(G__31026,G__31027) : pred__31021.call(null,G__31026,G__31027));
})())){
return (new edamame.impl.parser.Loc(self__.row,G__31010,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__31010),null));
}
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$row,self__.row,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$col,self__.col,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31010){
var self__ = this;
var this__4379__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,G__31010,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(edamame.impl.parser.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$row,cljs.core.cst$sym$col], null);
}));

(edamame.impl.parser.Loc.cljs$lang$type = true);

(edamame.impl.parser.Loc.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Loc",null,(1),null));
}));

(edamame.impl.parser.Loc.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"edamame.impl.parser/Loc");
}));

/**
 * Positional factory function for edamame.impl.parser/Loc.
 */
edamame.impl.parser.__GT_Loc = (function edamame$impl$parser$__GT_Loc(row,col){
return (new edamame.impl.parser.Loc(row,col,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Loc, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Loc = (function edamame$impl$parser$map__GT_Loc(G__31014){
var extmap__4419__auto__ = (function (){var G__31028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31014,cljs.core.cst$kw$row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$col], 0));
if(cljs.core.record_QMARK_(G__31014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31028);
} else {
return G__31028;
}
})();
return (new edamame.impl.parser.Loc(cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1(G__31014),cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(G__31014),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return edamame.impl.parser.__GT_Loc(reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null));
});
edamame.impl.parser.kw_identical_QMARK_ = (function edamame$impl$parser$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_(kw,v);
});
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
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
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5720__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(c))){
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
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__31031 = arguments.length;
switch (G__31031) {
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (ctx,reader,msg,data,loc){
var c = cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader));
var l = cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$type,cljs.core.cst$kw$edamame_SLASH_error,cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),l,cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),c]),data], 0)));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.non_match = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("non-match");
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return (v === edamame.impl.parser.non_match);
});
edamame.impl.parser.throw_eof_while_reading = (function edamame$impl$parser$throw_eof_while_reading(ctx,reader){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__31034 = arguments.length;
switch (G__31034) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var row = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var col = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,delimiter),cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char,opened,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col], null));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__31040 = next_val;
var G__31040__$1 = (((G__31040 == null))?null:cljs.core.meta(G__31040));
if((G__31040__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$edamame$impl$parser_SLASH_cond_DASH_splice.cljs$core$IFn$_invoke$arity$1(G__31040__$1);
}
})();
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,next_val)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edamame_SLASH_expected_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),cljs.core.cst$kw$edamame_SLASH_opened_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)], null));
} else {
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__31041_31046 = cljs.core.seq(next_val);
var chunk__31042_31047 = null;
var count__31043_31048 = (0);
var i__31044_31049 = (0);
while(true){
if((i__31044_31049 < count__31043_31048)){
var v_31050 = chunk__31042_31047.cljs$core$IIndexed$_nth$arity$2(null,i__31044_31049);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_31050);


var G__31051 = seq__31041_31046;
var G__31052 = chunk__31042_31047;
var G__31053 = count__31043_31048;
var G__31054 = (i__31044_31049 + (1));
seq__31041_31046 = G__31051;
chunk__31042_31047 = G__31052;
count__31043_31048 = G__31053;
i__31044_31049 = G__31054;
continue;
} else {
var temp__5720__auto___31055 = cljs.core.seq(seq__31041_31046);
if(temp__5720__auto___31055){
var seq__31041_31056__$1 = temp__5720__auto___31055;
if(cljs.core.chunked_seq_QMARK_(seq__31041_31056__$1)){
var c__4556__auto___31057 = cljs.core.chunk_first(seq__31041_31056__$1);
var G__31058 = cljs.core.chunk_rest(seq__31041_31056__$1);
var G__31059 = c__4556__auto___31057;
var G__31060 = cljs.core.count(c__4556__auto___31057);
var G__31061 = (0);
seq__31041_31046 = G__31058;
chunk__31042_31047 = G__31059;
count__31043_31048 = G__31060;
i__31044_31049 = G__31061;
continue;
} else {
var v_31062 = cljs.core.first(seq__31041_31056__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_31062);


var G__31063 = cljs.core.next(seq__31041_31056__$1);
var G__31064 = null;
var G__31065 = (0);
var G__31066 = (0);
seq__31041_31046 = G__31063;
chunk__31042_31047 = G__31064;
count__31043_31048 = G__31065;
i__31044_31049 = G__31066;
continue;
}
} else {
}
}
break;
}

var G__31067 = vals;
vals = G__31067;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_(next_val)){
var G__31068 = vals;
vals = G__31068;
continue;
} else {
var G__31069 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__31069;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_31070__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_31070__$1 == null)){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_31070__$1);
} else {
}

var G__31071 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__31071;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__4529__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__31082(s__31083){
return (new cljs.core.LazySeq(null,(function (){
var s__31083__$1 = s__31083;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31083__$1);
if(temp__5720__auto__){
var s__31083__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31083__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31083__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31085 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31084 = (0);
while(true){
if((i__31084 < size__4528__auto__)){
var vec__31086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__31084);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__31085,id);

var G__31092 = (i__31084 + (1));
i__31084 = G__31092;
continue;
} else {
var G__31093 = (i__31084 + (1));
i__31084 = G__31093;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31085),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__31082(cljs.core.chunk_rest(s__31083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31085),null);
}
} else {
var vec__31089 = cljs.core.first(s__31083__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31089,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31089,(1),null);
if((freq > (1))){
return cljs.core.cons(id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__31082(cljs.core.rest(s__31083__$2)));
} else {
var G__31094 = cljs.core.rest(s__31083__$2);
s__31083__$1 = G__31094;
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
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(ctx,reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,edamame.impl.parser.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var coll = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,cljs.core.cst$kw$set,coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
var k = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(edamame.impl.parser.kw_identical_QMARK_(k,cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter)){
return match;
} else {
var next_is_match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (edamame.impl.parser.kw_identical_QMARK_(k,cljs.core.cst$kw$default)))));
if(next_is_match_QMARK_){
var match__$1 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$edamame$impl$parser_SLASH_suppress,true);
while(true){
var next_val_31103 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,next_val_31103)){
} else {
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,next_val_31103)){
var delimiter_31104 = cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__31099_31105 = cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__31099_31106__$1 = (((((!((map__31099_31105 == null))))?(((((map__31099_31105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31099_31105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31099_31105):map__31099_31105);
var row_31107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31099_31106__$1,cljs.core.cst$kw$row);
var col_31108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31099_31106__$1,cljs.core.cst$kw$col);
var char_31109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31099_31106__$1,cljs.core.cst$kw$char);
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_31104)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_31109)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_31107),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_31108),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edamame_SLASH_expected_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_31104),cljs.core.cst$kw$edamame_SLASH_opened_DASH_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_31109)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
var G__31101_31110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$edamame$impl$parser_SLASH_suppress,true);
var G__31102_31111 = reader;
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(G__31101_31110,G__31102_31111) : edamame.impl.parser.parse_next.call(null,G__31101_31110,G__31102_31111));

var G__31112 = match;
match = G__31112;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace(ctx,reader);

var opt = cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

edamame.impl.parser.skip_whitespace(ctx,reader);

if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$preserve,opt)){
return cljs.tools.reader.impl.utils.reader_conditional((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__31114 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.assoc,cljs.core.cst$kw$edamame_SLASH_read_DASH_cond_DASH_splicing,splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__31114) : opt.call(null,G__31114));
} else {
var row = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var col = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,")"),cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char,opened,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col], null));
var match = edamame.impl.parser.parse_first_matching_condition(ctx__$1,reader);
if(edamame.impl.parser.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__31113_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31113_SHARP_,cljs.core.cst$kw$edamame$impl$parser_SLASH_cond_DASH_splice,true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__31116 = arguments.length;
switch (G__31116) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5718__auto__ = cljs.core.cst$kw$auto_DASH_resolve.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4126__auto__ = msg;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__31119 = arguments.length;
switch (G__31119) {
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5718__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5718__auto__)){
var kns__$1 = temp__5718__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4126__auto__ = msg;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 6);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)))?(function (){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:edamame.impl.parser.edn_read(ctx,reader)):edamame.impl.parser.edn_read(ctx,reader));
var the_map = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?cljs.core.cst$kw$current:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix)));
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__31121 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31121)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__31121)){
edamame.impl.parser.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__31121)){
var temp__5718__auto__ = cljs.core.cst$kw$regex.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var pat = edamame.impl.parser.read_regex_pattern(ctx,reader);
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(pat) : v.call(null,pat));
} else {
return cljs.core.re_pattern(pat);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__31121)){
var temp__5718__auto__ = cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$var,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__31121)){
var temp__5718__auto__ = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var fn_expr = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(fn_expr) : v.call(null,fn_expr));
} else {
return edamame.impl.read_fn.read_fn(fn_expr);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__31121)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__31121)){
return edamame.impl.parser.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__31121)){
var temp__5718__auto__ = cljs.core.cst$kw$read_DASH_eval.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$read_DASH_eval,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__31121)){
if(cljs.core.truth_(cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__31121)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return reader;
} else {
if(edamame.impl.parser.dispatch_macro_QMARK_(c)){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return edamame.impl.parser.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = cljs.core.cst$kw$edamame$impl$parser_SLASH_suppress.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
var sym = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var data = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
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
var fexpr__31122 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (fexpr__31122.cljs$core$IFn$_invoke$arity$1 ? fexpr__31122.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__31122.call(null,sym));
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
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(ctx,reader,loc,elements){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var elements = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
edamame.impl.parser.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_31123 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_31123))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,cljs.core.cst$kw$map,ks_31123);
}
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(init_c))){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = (function (){var G__31124 = reader;
var G__31125 = cljs.core.cst$kw$keyword;
var G__31126 = init_c;
return (edamame.impl.parser.read_token.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_token.cljs$core$IFn$_invoke$arity$3(G__31124,G__31125,G__31126) : edamame.impl.parser.read_token.call(null,G__31124,G__31125,G__31126));
})();
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__31127 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : edamame.impl.parser.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31127,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31127,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,cljs.core.cst$kw$current,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
/**
 * Resolves syntactical sugar in metadata
 */
edamame.impl.parser.desugar_meta = (function edamame$impl$parser$desugar_meta(var_args){
var G__31131 = arguments.length;
switch (G__31131) {
case 1:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1 = (function (f){
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
}));

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2 = (function (f,postprocess){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f)),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(true) : postprocess.call(null,true))]);
} else {
if((f instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__31132 = cljs.core.cst$kw$tag;
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__31132) : postprocess.call(null,G__31132));
})(),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
if(typeof f === 'string'){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__31133 = cljs.core.cst$kw$tag;
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__31133) : postprocess.call(null,G__31133));
})(),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$lang$maxFixedArity = 2);

edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_sharp(ctx,reader);
} else {
var G__31135 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31135)){
return cljs.core.cst$kw$edamame$impl$parser_SLASH_eof;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__31135)){
var temp__5718__auto__ = cljs.core.cst$kw$deref.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_deref,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__31135)){
var temp__5718__auto__ = cljs.core.cst$kw$syntax_DASH_quote.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.fn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$gensyms,gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__31135)){
var temp__5718__auto__ = cljs.core.cst$kw$quote.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__31135)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__31135)){
var expected = cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__31142 = temp__5720__auto__;
var map__31142__$1 = (((((!((map__31142 == null))))?(((((map__31142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31142):map__31142);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,cljs.core.cst$kw$col);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__31135)){
return edamame.impl.parser.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__31135)){
return edamame.impl.parser.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__31135)){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__31135)){
return edamame.impl.parser.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__31135)){
var expected = cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__31150 = temp__5720__auto__;
var map__31150__$1 = (((((!((map__31150 == null))))?(((((map__31150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31150):map__31150);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150__$1,cljs.core.cst$kw$col);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__31135)){
var expected = cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = cljs.core.cst$kw$edamame$impl$parser_SLASH_opened_DASH_delimiter.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__31158 = temp__5720__auto__;
var map__31158__$1 = (((((!((map__31158 == null))))?(((((map__31158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31158):map__31158);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,cljs.core.cst$kw$col);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,cljs.core.cst$kw$char);
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__31135)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : edamame.impl.parser.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__31135)){
var temp__5718__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$syntax_DASH_quote.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = cljs.core.cst$kw$unquote.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
var temp__5718__auto____$1 = (function (){var and__4115__auto__ = cljs.core.cst$kw$syntax_DASH_quote.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = cljs.core.cst$kw$unquote_DASH_splicing.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var v__$1 = temp__5718__auto____$1;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v__$1)){
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(next_val) : v__$1.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$clojure$core_SLASH_unquote,(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);

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
edamame.impl.parser.iobj_QMARK_ = (function edamame$impl$parser$iobj_QMARK_(obj){
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
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(var_args){
var G__31165 = arguments.length;
switch (G__31165) {
case 2:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var temp__5718__auto__ = (function (){var and__4115__auto__ = edamame.impl.parser.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
var loc = edamame.impl.parser.location(reader);
var log_QMARK_ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(ctx);
var buf = ((function (ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__){
return (function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reader.frames)));
});})(ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__))
;
var offset = (cljs.core.truth_(log_QMARK_)?((buf()).length):null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_(reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__){
return (function (){
return edamame.impl.parser.dispatch(ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__))
):edamame.impl.parser.dispatch(ctx,reader,c));
if((reader === obj)){
var G__31171 = ctx;
var G__31172 = reader;
var G__31173 = desugar;
ctx = G__31171;
reader = G__31172;
desugar = G__31173;
continue;
} else {
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,obj)){
return obj;
} else {
var postprocess = cljs.core.cst$kw$postprocess.cljs$core$IFn$_invoke$arity$1(ctx);
var location_QMARK_ = cljs.core.cst$kw$location_QMARK_.cljs$core$IFn$_invoke$arity$1(ctx);
var end_loc_QMARK_ = cljs.core.cst$kw$end_DASH_location.cljs$core$IFn$_invoke$arity$1(ctx);
var iobj_QMARK__QMARK_ = edamame.impl.parser.iobj_QMARK_(obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(),offset).trim():null);
var loc_QMARK_ = (function (){var or__4126__auto__ = ((iobj_QMARK__QMARK_)?(function (){var or__4126__auto__ = cljs.core.not(location_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (location_QMARK_.cljs$core$IFn$_invoke$arity$1 ? location_QMARK_.cljs$core$IFn$_invoke$arity$1(obj) : location_QMARK_.call(null,obj));
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return postprocess;
}
})();
var end_loc = (cljs.core.truth_((function (){var and__4115__auto__ = loc_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return end_loc_QMARK_;
} else {
return and__4115__auto__;
}
})())?edamame.impl.parser.location(reader):null);
var row = (cljs.core.truth_(loc_QMARK_)?loc.row:null);
var end_row = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1(end_loc):null);
var col = (cljs.core.truth_(loc_QMARK_)?loc.col:null);
var end_col = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(end_loc):null);
var postprocess_fn = (cljs.core.truth_(postprocess)?((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__){
return (function (p1__31162_SHARP_){
var G__31166 = (function (){var G__31167 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,p1__31162_SHARP_], null);
var G__31167__$1 = (cljs.core.truth_(loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31167,cljs.core.cst$kw$loc,(function (){var G__31168 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),row,cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),col]);
if(cljs.core.truth_(end_loc_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__31168,cljs.core.cst$kw$end_DASH_row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),end_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end_DASH_col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),end_col], 0));
} else {
return G__31168;
}
})()):G__31167);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31167__$1,(function (){var or__4126__auto__ = cljs.core.cst$kw$source_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$source;
}
})(),src);
} else {
return G__31167__$1;
}
})();
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__31166) : postprocess.call(null,G__31166));
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__))
:null);
var obj__$1 = (cljs.core.truth_(desugar)?(cljs.core.truth_(postprocess_fn)?edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2(obj,postprocess_fn):edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1(obj)):obj);
var obj__$2 = (cljs.core.truth_(postprocess)?(postprocess_fn.cljs$core$IFn$_invoke$arity$1 ? postprocess_fn.cljs$core$IFn$_invoke$arity$1(obj__$1) : postprocess_fn.call(null,obj__$1)):(cljs.core.truth_(loc_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__){
return (function (p1__31163_SHARP_){
var G__31169 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31163_SHARP_,cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),row),cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),col);
var G__31169__$1 = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31169,cljs.core.cst$kw$end_DASH_row_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),end_row),cljs.core.cst$kw$end_DASH_col_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),end_col):G__31169);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31169__$1,cljs.core.cst$kw$source_DASH_key.cljs$core$IFn$_invoke$arity$1(ctx),src);
} else {
return G__31169__$1;
}
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__))
):obj__$1
));
return obj__$2;
}
}
} else {
return cljs.core.cst$kw$edamame$impl$parser_SLASH_eof;
}
break;
}
}));

(edamame.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});

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
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,sci,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.source = source;
this.source_key = source_key;
this.postprocess = postprocess;
this.location_QMARK_ = location_QMARK_;
this.end_location = end_location;
this.sci = sci;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31175,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31179 = k31175;
var G__31179__$1 = (((G__31179 instanceof cljs.core.Keyword))?G__31179.fqn:null);
switch (G__31179__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
case "source":
return self__.source;

break;
case "source-key":
return self__.source_key;

break;
case "postprocess":
return self__.postprocess;

break;
case "location?":
return self__.location_QMARK_;

break;
case "end-location":
return self__.end_location;

break;
case "sci":
return self__.sci;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31175,else__4383__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__31180){
var vec__31181 = p__31180;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31181,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31181,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#edamame.impl.parser.Options{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dispatch,self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$deref,self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$syntax_DASH_quote,self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unquote,self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unquote_DASH_splicing,self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$quote,self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var,self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read_DASH_eval,self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$regex,self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$row_DASH_key,self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col_DASH_key,self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_row_DASH_key,self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_col_DASH_key,self__.end_col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source_DASH_key,self__.source_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postprocess,self__.postprocess],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$location_QMARK_,self__.location_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_location,self__.end_location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sci,self__.sci],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31174){
var self__ = this;
var G__31174__$1 = this;
return (new cljs.core.RecordIter((0),G__31174__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dispatch,cljs.core.cst$kw$deref,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$unquote,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$quote,cljs.core.cst$kw$fn,cljs.core.cst$kw$var,cljs.core.cst$kw$read_DASH_eval,cljs.core.cst$kw$regex,cljs.core.cst$kw$row_DASH_key,cljs.core.cst$kw$col_DASH_key,cljs.core.cst$kw$end_DASH_row_DASH_key,cljs.core.cst$kw$end_DASH_col_DASH_key,cljs.core.cst$kw$source,cljs.core.cst$kw$source_DASH_key,cljs.core.cst$kw$postprocess,cljs.core.cst$kw$location_QMARK_,cljs.core.cst$kw$end_DASH_location,cljs.core.cst$kw$sci], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__31184 = (function (coll__4377__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__31184(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31176,other31177){
var self__ = this;
var this31176__$1 = this;
return (((!((other31177 == null)))) && ((this31176__$1.constructor === other31177.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.dispatch,other31177.dispatch)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.deref,other31177.deref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.syntax_quote,other31177.syntax_quote)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.unquote,other31177.unquote)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.unquote_splicing,other31177.unquote_splicing)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.quote,other31177.quote)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.fn,other31177.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.var,other31177.var)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.read_eval,other31177.read_eval)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.regex,other31177.regex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.row_key,other31177.row_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.col_key,other31177.col_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.end_row_key,other31177.end_row_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.end_col_key,other31177.end_col_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.source,other31177.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.source_key,other31177.source_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.postprocess,other31177.postprocess)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.location_QMARK_,other31177.location_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.end_location,other31177.end_location)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.sci,other31177.sci)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31176__$1.__extmap,other31177.__extmap)));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$unquote_DASH_splicing,null,cljs.core.cst$kw$end_DASH_location,null,cljs.core.cst$kw$location_QMARK_,null,cljs.core.cst$kw$unquote,null,cljs.core.cst$kw$end_DASH_row_DASH_key,null,cljs.core.cst$kw$row_DASH_key,null,cljs.core.cst$kw$col_DASH_key,null,cljs.core.cst$kw$source_DASH_key,null,cljs.core.cst$kw$read_DASH_eval,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$dispatch,null,cljs.core.cst$kw$syntax_DASH_quote,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$quote,null,cljs.core.cst$kw$deref,null,cljs.core.cst$kw$regex,null,cljs.core.cst$kw$end_DASH_col_DASH_key,null,cljs.core.cst$kw$sci,null,cljs.core.cst$kw$postprocess,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31174){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31185 = cljs.core.keyword_identical_QMARK_;
var expr__31186 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__31188 = cljs.core.cst$kw$dispatch;
var G__31189 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31188,G__31189) : pred__31185.call(null,G__31188,G__31189));
})())){
return (new edamame.impl.parser.Options(G__31174,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31190 = cljs.core.cst$kw$deref;
var G__31191 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31190,G__31191) : pred__31185.call(null,G__31190,G__31191));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,G__31174,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31192 = cljs.core.cst$kw$syntax_DASH_quote;
var G__31193 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31192,G__31193) : pred__31185.call(null,G__31192,G__31193));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__31174,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31194 = cljs.core.cst$kw$unquote;
var G__31195 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31194,G__31195) : pred__31185.call(null,G__31194,G__31195));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__31174,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31196 = cljs.core.cst$kw$unquote_DASH_splicing;
var G__31197 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31196,G__31197) : pred__31185.call(null,G__31196,G__31197));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__31174,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31198 = cljs.core.cst$kw$quote;
var G__31199 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31198,G__31199) : pred__31185.call(null,G__31198,G__31199));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__31174,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31200 = cljs.core.cst$kw$fn;
var G__31201 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31200,G__31201) : pred__31185.call(null,G__31200,G__31201));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__31174,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31202 = cljs.core.cst$kw$var;
var G__31203 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31202,G__31203) : pred__31185.call(null,G__31202,G__31203));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__31174,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31204 = cljs.core.cst$kw$read_DASH_eval;
var G__31205 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31204,G__31205) : pred__31185.call(null,G__31204,G__31205));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__31174,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31206 = cljs.core.cst$kw$regex;
var G__31207 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31206,G__31207) : pred__31185.call(null,G__31206,G__31207));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__31174,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31208 = cljs.core.cst$kw$row_DASH_key;
var G__31209 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31208,G__31209) : pred__31185.call(null,G__31208,G__31209));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__31174,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31210 = cljs.core.cst$kw$col_DASH_key;
var G__31211 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31210,G__31211) : pred__31185.call(null,G__31210,G__31211));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__31174,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31212 = cljs.core.cst$kw$end_DASH_row_DASH_key;
var G__31213 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31212,G__31213) : pred__31185.call(null,G__31212,G__31213));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__31174,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31214 = cljs.core.cst$kw$end_DASH_col_DASH_key;
var G__31215 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31214,G__31215) : pred__31185.call(null,G__31214,G__31215));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__31174,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31216 = cljs.core.cst$kw$source;
var G__31217 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31216,G__31217) : pred__31185.call(null,G__31216,G__31217));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__31174,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31218 = cljs.core.cst$kw$source_DASH_key;
var G__31219 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31218,G__31219) : pred__31185.call(null,G__31218,G__31219));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,G__31174,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31220 = cljs.core.cst$kw$postprocess;
var G__31221 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31220,G__31221) : pred__31185.call(null,G__31220,G__31221));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,G__31174,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31222 = cljs.core.cst$kw$location_QMARK_;
var G__31223 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31222,G__31223) : pred__31185.call(null,G__31222,G__31223));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,G__31174,self__.end_location,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31224 = cljs.core.cst$kw$end_DASH_location;
var G__31225 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31224,G__31225) : pred__31185.call(null,G__31224,G__31225));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,G__31174,self__.sci,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31226 = cljs.core.cst$kw$sci;
var G__31227 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31226,G__31227) : pred__31185.call(null,G__31226,G__31227));
})())){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,G__31174,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__31174),null));
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
}
}
}
}
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$dispatch,self__.dispatch,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$deref,self__.deref,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$syntax_DASH_quote,self__.syntax_quote,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$unquote,self__.unquote,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$unquote_DASH_splicing,self__.unquote_splicing,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$quote,self__.quote,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$var,self__.var$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$read_DASH_eval,self__.read_eval,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$regex,self__.regex,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$row_DASH_key,self__.row_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$col_DASH_key,self__.col_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_row_DASH_key,self__.end_row_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_col_DASH_key,self__.end_col_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$source_DASH_key,self__.source_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$postprocess,self__.postprocess,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$location_QMARK_,self__.location_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_location,self__.end_location,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sci,self__.sci,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31174){
var self__ = this;
var this__4379__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.sci,G__31174,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dispatch,cljs.core.cst$sym$deref,cljs.core.cst$sym$syntax_DASH_quote,cljs.core.cst$sym$unquote,cljs.core.cst$sym$unquote_DASH_splicing,cljs.core.cst$sym$quote,cljs.core.cst$sym$fn,cljs.core.cst$sym$var,cljs.core.cst$sym$read_DASH_eval,cljs.core.cst$sym$regex,cljs.core.cst$sym$row_DASH_key,cljs.core.cst$sym$col_DASH_key,cljs.core.cst$sym$end_DASH_row_DASH_key,cljs.core.cst$sym$end_DASH_col_DASH_key,cljs.core.cst$sym$source,cljs.core.cst$sym$source_DASH_key,cljs.core.cst$sym$postprocess,cljs.core.cst$sym$location_QMARK_,cljs.core.cst$sym$end_DASH_location,cljs.core.cst$sym$sci], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,sci__$1){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,sci__$1,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__31178){
var extmap__4419__auto__ = (function (){var G__31228 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31178,cljs.core.cst$kw$dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$deref,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$unquote,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$quote,cljs.core.cst$kw$fn,cljs.core.cst$kw$var,cljs.core.cst$kw$read_DASH_eval,cljs.core.cst$kw$regex,cljs.core.cst$kw$row_DASH_key,cljs.core.cst$kw$col_DASH_key,cljs.core.cst$kw$end_DASH_row_DASH_key,cljs.core.cst$kw$end_DASH_col_DASH_key,cljs.core.cst$kw$source,cljs.core.cst$kw$source_DASH_key,cljs.core.cst$kw$postprocess,cljs.core.cst$kw$location_QMARK_,cljs.core.cst$kw$end_DASH_location,cljs.core.cst$kw$sci], 0));
if(cljs.core.record_QMARK_(G__31178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31228);
} else {
return G__31228;
}
})();
return (new edamame.impl.parser.Options(cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$deref.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$syntax_DASH_quote.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$unquote.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$unquote_DASH_splicing.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$quote.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$read_DASH_eval.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$regex.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$end_DASH_row_DASH_key.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$end_DASH_col_DASH_key.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$source_DASH_key.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$postprocess.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$location_QMARK_.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$end_DASH_location.cljs$core$IFn$_invoke$arity$1(G__31178),cljs.core.cst$kw$sci.cljs$core$IFn$_invoke$arity$1(G__31178),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5718__auto__ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var dispatch = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$dispatch),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deref,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$syntax_DASH_quote,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unquote,v], null);
} else {
var temp__5720__auto____$1 = cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5720__auto____$1)){
var v__$1 = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unquote,v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unquote_DASH_splicing,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quote,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read_DASH_eval,v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$regex,v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$deref,true,cljs.core.cst$kw$fn,true,cljs.core.cst$kw$quote,true,cljs.core.cst$kw$read_DASH_eval,true,cljs.core.cst$kw$regex,true,cljs.core.cst$kw$syntax_DASH_quote,true,cljs.core.cst$kw$var,true], null),opts__$1], 0)):opts__$1);
var opts__$3 = (function (){var G__31230 = opts__$2;
var G__31230__$1 = ((cljs.core.not(cljs.core.cst$kw$row_DASH_key.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230,cljs.core.cst$kw$row_DASH_key,cljs.core.cst$kw$row):G__31230);
var G__31230__$2 = ((cljs.core.not(cljs.core.cst$kw$col_DASH_key.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230__$1,cljs.core.cst$kw$col_DASH_key,cljs.core.cst$kw$col):G__31230__$1);
var G__31230__$3 = ((cljs.core.not(cljs.core.cst$kw$end_DASH_row_DASH_key.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230__$2,cljs.core.cst$kw$end_DASH_row_DASH_key,cljs.core.cst$kw$end_DASH_row):G__31230__$2);
var G__31230__$4 = ((cljs.core.not(cljs.core.cst$kw$end_DASH_col_DASH_key.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230__$3,cljs.core.cst$kw$end_DASH_col_DASH_key,cljs.core.cst$kw$end_DASH_col):G__31230__$3);
var G__31230__$5 = ((cljs.core.not(cljs.core.cst$kw$source_DASH_key.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230__$4,cljs.core.cst$kw$source_DASH_key,cljs.core.cst$kw$source):G__31230__$4);
if((!(cljs.core.contains_QMARK_(opts__$2,cljs.core.cst$kw$end_DASH_location)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31230__$5,cljs.core.cst$kw$end_DASH_location,true);
} else {
return G__31230__$5;
}
})();
return edamame.impl.parser.map__GT_Options(opts__$3);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var src_QMARK_ = opts__$1.source;
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s):edamame.impl.parser.string_reader(s));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,null);
var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$edamame$impl$parser_SLASH_expected_DASH_delimiter,null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_(cljs.core.cst$kw$edamame$impl$parser_SLASH_eof,next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__31231 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__31231;
continue;
}
break;
}
});
edamame.impl.parser.reader = (function edamame$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
edamame.impl.parser.get_line_number = (function edamame$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
edamame.impl.parser.get_column_number = (function edamame$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
edamame.impl.parser.source_logging_reader = (function edamame$impl$parser$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
