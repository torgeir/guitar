// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rewrite_clj.parser.whitespace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
/**
 * Parse as much whitespace as possible. The created node can either contain
 * only linebreaks or only space/tabs.
 */
rewrite_clj.parser.whitespace.parse_whitespace = (function rewrite_clj$parser$whitespace$parse_whitespace(reader){
if(rewrite_clj.reader.linebreak_QMARK_((rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader)))){
var G__23759 = rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_clj.reader.linebreak_QMARK_);
return (rewrite_clj.node.newline_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.newline_node.cljs$core$IFn$_invoke$arity$1(G__23759) : rewrite_clj.node.newline_node.call(null,G__23759));
} else {
var G__23760 = rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_clj.reader.space_QMARK_);
return (rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1(G__23760) : rewrite_clj.node.whitespace_node.call(null,G__23760));
}
});
