// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('daiquiri.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('daiquiri.normalize');
goog.require('daiquiri.util');
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.attributes = (function daiquiri$interpreter$attributes(attrs){
var temp__5720__auto__ = cljs.core.clj__GT_js.call(null,daiquiri.util.html_to_dom_attrs.call(null,attrs));
if(cljs.core.truth_(temp__5720__auto__)){
var js_attrs = temp__5720__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.call(null,(function (ret,x__$1){
ret.push(daiquiri.interpreter.interpret.call(null,x__$1));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__10687 = daiquiri.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__10687,(0),null);
var attrs = cljs.core.nth.call(null,vec__10687,(1),null);
var content = cljs.core.nth.call(null,vec__10687,(2),null);
return daiquiri.interpreter.create_element.call(null,type,daiquiri.interpreter.attributes.call(null,attrs),daiquiri.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.element_QMARK_.call(null,x)){
return daiquiri.interpreter.element.call(null,x);
} else {
return daiquiri.interpreter.interpret_seq.call(null,x);
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return daiquiri.interpreter.interpret_vec.call(null,v);
} else {
if(cljs.core.seq_QMARK_.call(null,v)){
return daiquiri.interpreter.interpret_seq.call(null,v);
} else {
return v;

}
}
});
