// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('daiquiri.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('daiquiri.interpreter');
/**
 * The React.js create element function.
 */
daiquiri.core.create_element = (function daiquiri$core$create_element(type,attrs,children){
if(children){
return React.createElement.apply(null,[type,attrs].concat(children));
} else {
return React.createElement(type,attrs);
}
});
/**
 * The React.js Fragment.
 */
daiquiri.core.fragment = React.Fragment;
