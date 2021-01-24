// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26958){
var map__26959 = p__26958;
var map__26959__$1 = (((((!((map__26959 == null))))?(((((map__26959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);
var m = map__26959__$1;
var n = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26961_26993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26962_26994 = null;
var count__26963_26995 = (0);
var i__26964_26996 = (0);
while(true){
if((i__26964_26996 < count__26963_26995)){
var f_26997 = cljs.core._nth.call(null,chunk__26962_26994,i__26964_26996);
cljs.core.println.call(null,"  ",f_26997);


var G__26998 = seq__26961_26993;
var G__26999 = chunk__26962_26994;
var G__27000 = count__26963_26995;
var G__27001 = (i__26964_26996 + (1));
seq__26961_26993 = G__26998;
chunk__26962_26994 = G__26999;
count__26963_26995 = G__27000;
i__26964_26996 = G__27001;
continue;
} else {
var temp__5720__auto___27002 = cljs.core.seq.call(null,seq__26961_26993);
if(temp__5720__auto___27002){
var seq__26961_27003__$1 = temp__5720__auto___27002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26961_27003__$1)){
var c__4556__auto___27004 = cljs.core.chunk_first.call(null,seq__26961_27003__$1);
var G__27005 = cljs.core.chunk_rest.call(null,seq__26961_27003__$1);
var G__27006 = c__4556__auto___27004;
var G__27007 = cljs.core.count.call(null,c__4556__auto___27004);
var G__27008 = (0);
seq__26961_26993 = G__27005;
chunk__26962_26994 = G__27006;
count__26963_26995 = G__27007;
i__26964_26996 = G__27008;
continue;
} else {
var f_27009 = cljs.core.first.call(null,seq__26961_27003__$1);
cljs.core.println.call(null,"  ",f_27009);


var G__27010 = cljs.core.next.call(null,seq__26961_27003__$1);
var G__27011 = null;
var G__27012 = (0);
var G__27013 = (0);
seq__26961_26993 = G__27010;
chunk__26962_26994 = G__27011;
count__26963_26995 = G__27012;
i__26964_26996 = G__27013;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27014 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27014);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27014)))?cljs.core.second.call(null,arglists_27014):arglists_27014));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26965_27015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26966_27016 = null;
var count__26967_27017 = (0);
var i__26968_27018 = (0);
while(true){
if((i__26968_27018 < count__26967_27017)){
var vec__26979_27019 = cljs.core._nth.call(null,chunk__26966_27016,i__26968_27018);
var name_27020 = cljs.core.nth.call(null,vec__26979_27019,(0),null);
var map__26982_27021 = cljs.core.nth.call(null,vec__26979_27019,(1),null);
var map__26982_27022__$1 = (((((!((map__26982_27021 == null))))?(((((map__26982_27021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26982_27021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982_27021):map__26982_27021);
var doc_27023 = cljs.core.get.call(null,map__26982_27022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27024 = cljs.core.get.call(null,map__26982_27022__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27020);

cljs.core.println.call(null," ",arglists_27024);

if(cljs.core.truth_(doc_27023)){
cljs.core.println.call(null," ",doc_27023);
} else {
}


var G__27025 = seq__26965_27015;
var G__27026 = chunk__26966_27016;
var G__27027 = count__26967_27017;
var G__27028 = (i__26968_27018 + (1));
seq__26965_27015 = G__27025;
chunk__26966_27016 = G__27026;
count__26967_27017 = G__27027;
i__26968_27018 = G__27028;
continue;
} else {
var temp__5720__auto___27029 = cljs.core.seq.call(null,seq__26965_27015);
if(temp__5720__auto___27029){
var seq__26965_27030__$1 = temp__5720__auto___27029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26965_27030__$1)){
var c__4556__auto___27031 = cljs.core.chunk_first.call(null,seq__26965_27030__$1);
var G__27032 = cljs.core.chunk_rest.call(null,seq__26965_27030__$1);
var G__27033 = c__4556__auto___27031;
var G__27034 = cljs.core.count.call(null,c__4556__auto___27031);
var G__27035 = (0);
seq__26965_27015 = G__27032;
chunk__26966_27016 = G__27033;
count__26967_27017 = G__27034;
i__26968_27018 = G__27035;
continue;
} else {
var vec__26984_27036 = cljs.core.first.call(null,seq__26965_27030__$1);
var name_27037 = cljs.core.nth.call(null,vec__26984_27036,(0),null);
var map__26987_27038 = cljs.core.nth.call(null,vec__26984_27036,(1),null);
var map__26987_27039__$1 = (((((!((map__26987_27038 == null))))?(((((map__26987_27038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26987_27038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987_27038):map__26987_27038);
var doc_27040 = cljs.core.get.call(null,map__26987_27039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27041 = cljs.core.get.call(null,map__26987_27039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27037);

cljs.core.println.call(null," ",arglists_27041);

if(cljs.core.truth_(doc_27040)){
cljs.core.println.call(null," ",doc_27040);
} else {
}


var G__27042 = cljs.core.next.call(null,seq__26965_27030__$1);
var G__27043 = null;
var G__27044 = (0);
var G__27045 = (0);
seq__26965_27015 = G__27042;
chunk__26966_27016 = G__27043;
count__26967_27017 = G__27044;
i__26968_27018 = G__27045;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__26989 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26990 = null;
var count__26991 = (0);
var i__26992 = (0);
while(true){
if((i__26992 < count__26991)){
var role = cljs.core._nth.call(null,chunk__26990,i__26992);
var temp__5720__auto___27046__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27046__$1)){
var spec_27047 = temp__5720__auto___27046__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27047));
} else {
}


var G__27048 = seq__26989;
var G__27049 = chunk__26990;
var G__27050 = count__26991;
var G__27051 = (i__26992 + (1));
seq__26989 = G__27048;
chunk__26990 = G__27049;
count__26991 = G__27050;
i__26992 = G__27051;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__26989);
if(temp__5720__auto____$1){
var seq__26989__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26989__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26989__$1);
var G__27052 = cljs.core.chunk_rest.call(null,seq__26989__$1);
var G__27053 = c__4556__auto__;
var G__27054 = cljs.core.count.call(null,c__4556__auto__);
var G__27055 = (0);
seq__26989 = G__27052;
chunk__26990 = G__27053;
count__26991 = G__27054;
i__26992 = G__27055;
continue;
} else {
var role = cljs.core.first.call(null,seq__26989__$1);
var temp__5720__auto___27056__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27056__$2)){
var spec_27057 = temp__5720__auto___27056__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27057));
} else {
}


var G__27058 = cljs.core.next.call(null,seq__26989__$1);
var G__27059 = null;
var G__27060 = (0);
var G__27061 = (0);
seq__26989 = G__27058;
chunk__26990 = G__27059;
count__26991 = G__27060;
i__26992 = G__27061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27062 = cljs.core.conj.call(null,via,t);
var G__27063 = cljs.core.ex_cause.call(null,t);
via = G__27062;
t = G__27063;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27066 = datafied_throwable;
var map__27066__$1 = (((((!((map__27066 == null))))?(((((map__27066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27066):map__27066);
var via = cljs.core.get.call(null,map__27066__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27066__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27066__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27067 = cljs.core.last.call(null,via);
var map__27067__$1 = (((((!((map__27067 == null))))?(((((map__27067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27067):map__27067);
var type = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27068 = data;
var map__27068__$1 = (((((!((map__27068 == null))))?(((((map__27068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27068):map__27068);
var problems = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27069 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27069__$1 = (((((!((map__27069 == null))))?(((((map__27069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27069):map__27069);
var top_data = map__27069__$1;
var source = cljs.core.get.call(null,map__27069__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27074 = phase;
var G__27074__$1 = (((G__27074 instanceof cljs.core.Keyword))?G__27074.fqn:null);
switch (G__27074__$1) {
case "read-source":
var map__27075 = data;
var map__27075__$1 = (((((!((map__27075 == null))))?(((((map__27075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var line = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27077 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27077__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27077,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27077);
var G__27077__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27077__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27077__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27077__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27077__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27078 = top_data;
var G__27078__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27078,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27078);
var G__27078__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27078__$1);
var G__27078__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27078__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27078__$2);
var G__27078__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27078__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27078__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27078__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27078__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27079 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27079,(0),null);
var method = cljs.core.nth.call(null,vec__27079,(1),null);
var file = cljs.core.nth.call(null,vec__27079,(2),null);
var line = cljs.core.nth.call(null,vec__27079,(3),null);
var G__27082 = top_data;
var G__27082__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27082,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27082);
var G__27082__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27082__$1);
var G__27082__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__27082__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27082__$2);
var G__27082__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27082__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27082__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27082__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27082__$4;
}

break;
case "execution":
var vec__27083 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27083,(0),null);
var method = cljs.core.nth.call(null,vec__27083,(1),null);
var file = cljs.core.nth.call(null,vec__27083,(2),null);
var line = cljs.core.nth.call(null,vec__27083,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__27065_SHARP_){
var or__4126__auto__ = (p1__27065_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27065_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__27086 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27086__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27086,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27086);
var G__27086__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27086__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27086__$1);
var G__27086__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27086__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27086__$2);
var G__27086__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27086__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27086__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27086__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27086__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27074__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27090){
var map__27091 = p__27090;
var map__27091__$1 = (((((!((map__27091 == null))))?(((((map__27091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27091):map__27091);
var triage_data = map__27091__$1;
var phase = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27093 = phase;
var G__27093__$1 = (((G__27093 instanceof cljs.core.Keyword))?G__27093.fqn:null);
switch (G__27093__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27094_27103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27095_27104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27096_27105 = true;
var _STAR_print_fn_STAR__temp_val__27097_27106 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27096_27105);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27097_27106);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27088_SHARP_){
return cljs.core.dissoc.call(null,p1__27088_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27095_27104);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27094_27103);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27098_27107 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27099_27108 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27100_27109 = true;
var _STAR_print_fn_STAR__temp_val__27101_27110 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27100_27109);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27101_27110);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27089_SHARP_){
return cljs.core.dissoc.call(null,p1__27089_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27099_27108);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27098_27107);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27093__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
