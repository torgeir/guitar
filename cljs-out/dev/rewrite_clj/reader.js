// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.commons');
goog.require('goog.string');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.reader.read_char = cljs.tools.reader.reader_types.read_char;
rewrite_clj.reader.get_column_number = cljs.tools.reader.reader_types.get_column_number;
rewrite_clj.reader.get_line_number = cljs.tools.reader.reader_types.get_line_number;
rewrite_clj.reader.peek_char = cljs.tools.reader.reader_types.peek_char;
rewrite_clj.reader.indexing_push_back_reader = cljs.tools.reader.reader_types.indexing_push_back_reader;
rewrite_clj.reader.unread = cljs.tools.reader.reader_types.unread;
rewrite_clj.reader.read_string = cljs.tools.reader.read_string;
/**
 * Throw reader exception, including line/column.
 */
rewrite_clj.reader.throw_reader = (function rewrite_clj$reader$throw_reader(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23364 = arguments.length;
var i__4737__auto___23365 = (0);
while(true){
if((i__4737__auto___23365 < len__4736__auto___23364)){
args__4742__auto__.push((arguments[i__4737__auto___23365]));

var G__23366 = (i__4737__auto___23365 + (1));
i__4737__auto___23365 = G__23366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var l = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join('')));
}));

(rewrite_clj.reader.throw_reader.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.reader.throw_reader.cljs$lang$applyTo = (function (seq23361){
var G__23362 = cljs.core.first(seq23361);
var seq23361__$1 = cljs.core.next(seq23361);
var G__23363 = cljs.core.first(seq23361__$1);
var seq23361__$2 = cljs.core.next(seq23361__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23362,G__23363,seq23361__$2);
}));

/**
 * Check whether a given char is a token boundary.
 */
rewrite_clj.reader.boundary_QMARK_ = (function rewrite_clj$reader$boundary_QMARK_(c){
return ((-1) < ["\"",":",";","'","@","^","`","~","(",")","[","]","{","}","\\",null].indexOf(c));
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_clj.reader.whitespace_QMARK_ = (function rewrite_clj$reader$whitespace_QMARK_(ch){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(ch));
});
/**
 * Checks whether the character is a newline
 */
rewrite_clj.reader.linebreak_QMARK_ = (function rewrite_clj$reader$linebreak_QMARK_(c){
return ((-1) < ["\r","\n"].indexOf(c));
});
/**
 * Checks whether the character is a space
 */
rewrite_clj.reader.space_QMARK_ = (function rewrite_clj$reader$space_QMARK_(c){
return ((-1) < ["\t"," ",","].indexOf(c));
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function rewrite_clj$reader$whitespace_or_boundary_QMARK_(c){
return ((rewrite_clj.reader.whitespace_QMARK_(c)) || (rewrite_clj.reader.boundary_QMARK_(c)));
});
rewrite_clj.reader.buf = (new goog.string.StringBuffer(""));
/**
 * Read while the chars fulfill the given condition. Ignores
 *   the unmatching char.
 */
rewrite_clj.reader.read_while = (function rewrite_clj$reader$read_while(var_args){
var G__23368 = arguments.length;
switch (G__23368) {
case 2:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,p_QMARK_,cljs.core.not((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))));
}));

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
rewrite_clj.reader.buf.clear();

while(true){
var temp__5718__auto__ = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : p_QMARK_.call(null,c)))){
rewrite_clj.reader.buf.append(c);

continue;
} else {
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(reader,c) : rewrite_clj.reader.unread.call(null,reader,c));

return rewrite_clj.reader.buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return rewrite_clj.reader.buf.toString();
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
}
}
break;
}
}));

(rewrite_clj.reader.read_while.cljs$lang$maxFixedArity = 3);

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_clj.reader.read_until = (function rewrite_clj$reader$read_until(reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.complement(p_QMARK_),(p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null)));
});
/**
 * Read until linebreak and include it.
 */
rewrite_clj.reader.read_include_linebreak = (function rewrite_clj$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_until(reader,(function (p1__23370_SHARP_){
return (((p1__23370_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_(p1__23370_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader)))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_clj.reader.string__GT_edn = (function rewrite_clj$reader$string__GT_edn(s){
return (rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1(s) : rewrite_clj.reader.read_string.call(null,s));
});
/**
 * Ignore the next character.
 */
rewrite_clj.reader.ignore = (function rewrite_clj$reader$ignore(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));

return null;
});
/**
 * Read next char.
 */
rewrite_clj.reader.next = (function rewrite_clj$reader$next(reader){
return (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
});
/**
 * Peek next char.
 */
rewrite_clj.reader.peek = (function rewrite_clj$reader$peek(reader){
return (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader));
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_clj.reader.read_with_meta = (function rewrite_clj$reader$read_with_meta(reader,read_fn){
var row = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
var col = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var entry = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(entry)){
var end_row = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
var end_col = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var end_col__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),end_col))?(col + entry.rewrite_clj$node$protocols$Node$string$arity$1(null).length):end_col);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),col)){
return entry;
} else {
return entry.cljs$core$IWithMeta$_with_meta$arity$2(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col,cljs.core.cst$kw$end_DASH_row,end_row,cljs.core.cst$kw$end_DASH_col,end_col__$1], null));
}
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_clj.reader.read_repeatedly = (function rewrite_clj$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_clj.reader.read_n = (function rewrite_clj$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5718__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__23371 = (cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : p_QMARK_.call(null,v)))?(c + (1)):c);
var G__23372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vs,v);
c = G__23371;
vs = G__23372;
continue;
} else {
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"%s node expects %d value%s.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_tag,n,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?"":"s")], 0));
}
} else {
return vs;
}
break;
}
});
rewrite_clj.reader.re_matches_STAR_ = (function rewrite_clj$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((((!((matches == null)))) && (((matches[(0)]) === s)))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
rewrite_clj.reader.read_keyword = (function rewrite_clj$reader$read_keyword(reader,initch){
var tok = (function (){var G__23374 = reader;
var G__23375 = cljs.core.cst$kw$keyword;
var G__23376 = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
var fexpr__23373 = new cljs.core.Var(function(){return cljs.tools.reader.read_token;},cljs.core.cst$sym$cljs$tools$reader_SLASH_read_DASH_token,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$tools$reader,cljs.core.cst$sym$read_DASH_token,"resources/public/cljs-out/dev/cljs/tools/reader.cljs",18,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$rdr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null)),"Read in a single logical token from the reader",(cljs.core.truth_(cljs.tools.reader.read_token)?cljs.tools.reader.read_token.cljs$lang$test:null)]));
return (fexpr__23373.cljs$core$IFn$_invoke$arity$3 ? fexpr__23373.cljs$core$IFn$_invoke$arity$3(G__23374,G__23375,G__23376) : fexpr__23373.call(null,G__23374,G__23375,G__23376));
})();
var a = rewrite_clj.reader.re_matches_STAR_(cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$"),tok);
var token = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if((((((!((void 0 === ns)))) && ((ns.substring((ns.length - (2)),ns.length) === ":/")))) || (((name[(name.length - (1))]) === ":")) || ((!((token.indexOf("::",(1)) === (-1))))))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid token: ",token], 0));
} else {
if((((!((ns == null)))) && ((ns.length > (0))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token.substring((1)));
}
}
});
