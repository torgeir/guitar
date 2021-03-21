// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.parser.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.whitespace');
goog.require('cljs.tools.reader.reader_types');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.reader.read_repeatedly(reader,(function (p1__22140_SHARP_){
var _STAR_delimiter_STAR__orig_val__22141 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__22142 = delimiter;
(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__22142);

try{return (rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1(p1__22140_SHARP_) : rewrite_clj.parser.core.parse_next.call(null,p1__22140_SHARP_));
}finally {(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__22141);
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22151 = arguments.length;
var i__4737__auto___22152 = (0);
while(true){
if((i__4737__auto___22152 < len__4736__auto___22151)){
args__4742__auto__.push((arguments[i__4737__auto___22152]));

var G__22153 = (i__4737__auto___22152 + (1));
i__4737__auto___22152 = G__22153;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__22147){
var vec__22148 = p__22147;
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore(reader);
} else {
}

return rewrite_clj.reader.read_n(reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement(rewrite_clj.node.printable_only_QMARK_),n);
}));

(rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq22143){
var G__22144 = cljs.core.first(seq22143);
var seq22143__$1 = cljs.core.next(seq22143);
var G__22145 = cljs.core.first(seq22143__$1);
var seq22143__$2 = cljs.core.next(seq22143__$1);
var G__22146 = cljs.core.first(seq22143__$2);
var seq22143__$3 = cljs.core.next(seq22143__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22144,G__22145,G__22146,seq22143__$3);
}));

rewrite_clj.parser.core.parse_meta = (function rewrite_clj$parser$core$parse_meta(reader){
rewrite_clj.reader.ignore(reader);

var G__22154 = rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$meta,(2));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__22154) : rewrite_clj.node.meta_node.call(null,G__22154));
});
rewrite_clj.parser.core.parse_eof = (function rewrite_clj$parser$core$parse_eof(reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
return null;
}
});
rewrite_clj.parser.core.parse_list = (function rewrite_clj$parser$core$parse_list(reader){
var G__22155 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1(G__22155) : rewrite_clj.node.list_node.call(null,G__22155));
});
rewrite_clj.parser.core.parse_vector = (function rewrite_clj$parser$core$parse_vector(reader){
var G__22156 = rewrite_clj.parser.core.parse_delim(reader,"]");
return (rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1(G__22156) : rewrite_clj.node.vector_node.call(null,G__22156));
});
rewrite_clj.parser.core.parse_map = (function rewrite_clj$parser$core$parse_map(reader){
var G__22157 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1(G__22157) : rewrite_clj.node.map_node.call(null,G__22157));
});
rewrite_clj.parser.core.parse_conditional = (function rewrite_clj$parser$core$parse_conditional(reader){
rewrite_clj.reader.next(reader);

var G__22158 = (function (){var read1 = (function (){
return rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$reader_DASH_macro,(1));
});
return cljs.core.cons((function (){var G__22159 = rewrite_clj.reader.peek(reader);
switch (G__22159) {
case "(":
var G__22160 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__22160) : rewrite_clj.node.token_node.call(null,G__22160));

break;
case "@":
rewrite_clj.reader.next(reader);

var G__22161 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?@");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__22161) : rewrite_clj.node.token_node.call(null,G__22161));

break;
default:
var G__22162_22165 = reader;
var G__22163_22166 = "?";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__22162_22165,G__22163_22166) : rewrite_clj.reader.unread.call(null,G__22162_22165,G__22163_22166));

return cljs.core.first(read1());

}
})(),read1());
})();
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__22158) : rewrite_clj.node.reader_macro_node.call(null,G__22158));
});
rewrite_clj.parser.core.parse_sharp = (function rewrite_clj$parser$core$parse_sharp(reader){
rewrite_clj.reader.ignore(reader);

var G__22167 = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22167)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__22167)){
return rewrite_clj.parser.string.parse_regex(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__22167)){
var G__22168 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$var,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1(G__22168) : rewrite_clj.node.var_node.call(null,G__22168));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__22167)){
var G__22169 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1(G__22169) : rewrite_clj.node.fn_node.call(null,G__22169));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__22167)){
var G__22170 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1(G__22170) : rewrite_clj.node.set_node.call(null,G__22170));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__22167)){
var G__22171 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$eval,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1(G__22171) : rewrite_clj.node.eval_node.call(null,G__22171));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__22167)){
var G__22172 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$meta,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__22172) : rewrite_clj.node.meta_node.call(null,G__22172));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__22167)){
return rewrite_clj.parser.core.parse_conditional(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__22167)){
var G__22173 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$uneval,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1(G__22173) : rewrite_clj.node.uneval_node.call(null,G__22173));
} else {
var G__22174 = rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$reader_DASH_macro,(2));
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__22174) : rewrite_clj.node.reader_macro_node.call(null,G__22174));

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
rewrite_clj.parser.core.parse_unmatched = (function rewrite_clj$parser$core$parse_unmatched(reader){
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"Unmatched delimiter: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)], 0));
});
rewrite_clj.parser.core.parse_deref = (function rewrite_clj$parser$core$parse_deref(reader){
var G__22175 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$deref,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1(G__22175) : rewrite_clj.node.deref_node.call(null,G__22175));
});
rewrite_clj.parser.core.parse_quote = (function rewrite_clj$parser$core$parse_quote(reader){
var G__22176 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$quote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1(G__22176) : rewrite_clj.node.quote_node.call(null,G__22176));
});
rewrite_clj.parser.core.parse_syntax_quote = (function rewrite_clj$parser$core$parse_syntax_quote(reader){
var G__22177 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$syntax_DASH_quote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1(G__22177) : rewrite_clj.node.syntax_quote_node.call(null,G__22177));
});
rewrite_clj.parser.core.parse_unquote = (function rewrite_clj$parser$core$parse_unquote(reader){
rewrite_clj.reader.ignore(reader);

var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"@")){
var G__22178 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$unquote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1(G__22178) : rewrite_clj.node.unquote_splicing_node.call(null,G__22178));
} else {
var G__22179 = rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$unquote,(1));
return (rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1(G__22179) : rewrite_clj.node.unquote_node.call(null,G__22179));
}
});
rewrite_clj.parser.core.parse_comment = (function rewrite_clj$parser$core$parse_comment(reader){
rewrite_clj.reader.ignore(reader);

var G__22180 = rewrite_clj.reader.read_include_linebreak(reader);
return (rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1(G__22180) : rewrite_clj.node.comment_node.call(null,G__22180));
});
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return rewrite_clj.parser.core.parse_eof;
} else {
if((c === rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.ignore;
} else {
if(rewrite_clj.reader.whitespace_QMARK_(c)){
return rewrite_clj.parser.whitespace.parse_whitespace;
} else {
if((c === "^")){
return rewrite_clj.parser.core.parse_meta;
} else {
if((c === "#")){
return rewrite_clj.parser.core.parse_sharp;
} else {
if((c === "(")){
return rewrite_clj.parser.core.parse_list;
} else {
if((c === "[")){
return rewrite_clj.parser.core.parse_vector;
} else {
if((c === "{")){
return rewrite_clj.parser.core.parse_map;
} else {
if((c === "}")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "]")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === ")")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "~")){
return rewrite_clj.parser.core.parse_unquote;
} else {
if((c === "'")){
return rewrite_clj.parser.core.parse_quote;
} else {
if((c === "`")){
return rewrite_clj.parser.core.parse_syntax_quote;
} else {
if((c === ";")){
return rewrite_clj.parser.core.parse_comment;
} else {
if((c === "@")){
return rewrite_clj.parser.core.parse_deref;
} else {
if((c === "\"")){
return rewrite_clj.parser.string.parse_string;
} else {
if((c === ":")){
return rewrite_clj.parser.keyword.parse_keyword;
} else {
return rewrite_clj.parser.token.parse_token;

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
});
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(rdr){
return rewrite_clj.reader.read_with_meta(rdr,rewrite_clj.parser.core.dispatch(rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)));
});
