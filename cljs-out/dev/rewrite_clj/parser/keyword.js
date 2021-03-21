// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.parser.keyword');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node');
goog.require('cljs.tools.reader.reader_types');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));

var temp__5718__auto__ = (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader));
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if((c === ":")){
var G__22113 = rewrite_clj.reader.read_keyword(reader,":");
var G__22114 = true;
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2(G__22113,G__22114) : rewrite_clj.node.keyword_node.call(null,G__22113,G__22114));
} else {
var G__22115_22118 = reader;
var G__22116_22119 = ":";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__22115_22118,G__22116_22119) : rewrite_clj.reader.unread.call(null,G__22115_22118,G__22116_22119));

var G__22117 = rewrite_clj.reader.read_keyword(reader,":");
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1(G__22117) : rewrite_clj.node.keyword_node.call(null,G__22117));
}
} else {
return rewrite_clj.reader.throw_reader(reader,"unexpected EOF while reading keyword.");
}
});
