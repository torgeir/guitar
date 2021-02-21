// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__16888 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__16888)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__16888)){
var G__16890 = (console["error"]);
var G__16891 = msg;
var G__16892 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__16889 = oops.state.get_console_reporter();
return (fexpr__16889.cljs$core$IFn$_invoke$arity$3 ? fexpr__16889.cljs$core$IFn$_invoke$arity$3(G__16890,G__16891,G__16892) : fexpr__16889.call(null,G__16890,G__16891,G__16892));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__16888)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16888)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__16893 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__16893)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__16893)){
var G__16895 = (console["warn"]);
var G__16896 = msg;
var G__16897 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__16894 = oops.state.get_console_reporter();
return (fexpr__16894.cljs$core$IFn$_invoke$arity$3 ? fexpr__16894.cljs$core$IFn$_invoke$arity$3(G__16895,G__16896,G__16897) : fexpr__16894.call(null,G__16895,G__16896,G__16897));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__16893)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16893)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16904 = arguments.length;
var i__4737__auto___16905 = (0);
while(true){
if((i__4737__auto___16905 < len__4736__auto___16904)){
args__4742__auto__.push((arguments[i__4737__auto___16905]));

var G__16906 = (i__4737__auto___16905 + (1));
i__4737__auto___16905 = G__16906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__16900){
var vec__16901 = p__16900;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16901,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq16898){
var G__16899 = cljs.core.first(seq16898);
var seq16898__$1 = cljs.core.next(seq16898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16899,seq16898__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5722__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_16907 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_16907);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_16908 = temp__5722__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_16908,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_16908,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_16910 = oops.config.get_child_factory();
var child_factory_16910__$1 = (function (){var G__16911 = child_factory_16910;
var G__16911__$1 = (((G__16911 instanceof cljs.core.Keyword))?G__16911.fqn:null);
switch (G__16911__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_16910;

}
})();

var child_obj_16909 = (child_factory_16910__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_16910__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_16910__$1.call(null,obj,key));
(obj[key] = child_obj_16909);

return child_obj_16909;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_16915 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_16915);

return selector_path_16915;
} else {
var selector_path_16916 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_16916);

return selector_path_16916;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_16917 = temp__5724__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_16917);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_16919 = (function (){var path_16918 = oops.core.build_path_dynamically(selector);

return path_16918;
})();
var len_16920 = path_16919.length;
var i_16921 = (0);
var obj_16922 = obj;
while(true){
if((i_16921 < len_16920)){
var mode_16923 = (path_16919[i_16921]);
var key_16924 = (path_16919[(i_16921 + (1))]);
var next_obj_16925 = oops.core.get_key_dynamically(obj_16922,key_16924,mode_16923);
var G__16926 = mode_16923;
switch (G__16926) {
case (0):
var G__16928 = (i_16921 + (2));
var G__16929 = next_obj_16925;
i_16921 = G__16928;
obj_16922 = G__16929;
continue;

break;
case (1):
if((!((next_obj_16925 == null)))){
var G__16930 = (i_16921 + (2));
var G__16931 = next_obj_16925;
i_16921 = G__16930;
obj_16922 = G__16931;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16925 == null)))){
var G__16932 = (i_16921 + (2));
var G__16933 = next_obj_16925;
i_16921 = G__16932;
obj_16922 = G__16933;
continue;
} else {
var G__16934 = (i_16921 + (2));
var G__16935 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_16922,key_16924) : oops.core.punch_key_dynamically_BANG_.call(null,obj_16922,key_16924));
i_16921 = G__16934;
obj_16922 = G__16935;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16926)].join('')));

}
} else {
return obj_16922;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_16937 = (function (){var path_16936 = oops.core.build_path_dynamically(selector);

return path_16936;
})();
var len_16938 = path_16937.length;
if((len_16938 < (4))){
return [obj,(function (){var path_16940 = path_16937;
var len_16941 = path_16940.length;
var i_16942 = (0);
var obj_16943 = obj;
while(true){
if((i_16942 < len_16941)){
var mode_16944 = (path_16940[i_16942]);
var key_16945 = (path_16940[(i_16942 + (1))]);
var next_obj_16946 = oops.core.get_key_dynamically(obj_16943,key_16945,mode_16944);
var G__16961 = mode_16944;
switch (G__16961) {
case (0):
var G__16965 = (i_16942 + (2));
var G__16966 = next_obj_16946;
i_16942 = G__16965;
obj_16943 = G__16966;
continue;

break;
case (1):
if((!((next_obj_16946 == null)))){
var G__16967 = (i_16942 + (2));
var G__16968 = next_obj_16946;
i_16942 = G__16967;
obj_16943 = G__16968;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16946 == null)))){
var G__16969 = (i_16942 + (2));
var G__16970 = next_obj_16946;
i_16942 = G__16969;
obj_16943 = G__16970;
continue;
} else {
var G__16971 = (i_16942 + (2));
var G__16972 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_16943,key_16945) : oops.core.punch_key_dynamically_BANG_.call(null,obj_16943,key_16945));
i_16942 = G__16971;
obj_16943 = G__16972;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16961)].join('')));

}
} else {
return obj_16943;
}
break;
}
})()];
} else {
var target_obj_16939 = (function (){var path_16947 = path_16937.slice((0),(len_16938 - (2)));
var len_16948 = path_16947.length;
var i_16949 = (0);
var obj_16950 = obj;
while(true){
if((i_16949 < len_16948)){
var mode_16951 = (path_16947[i_16949]);
var key_16952 = (path_16947[(i_16949 + (1))]);
var next_obj_16953 = oops.core.get_key_dynamically(obj_16950,key_16952,mode_16951);
var G__16962 = mode_16951;
switch (G__16962) {
case (0):
var G__16974 = (i_16949 + (2));
var G__16975 = next_obj_16953;
i_16949 = G__16974;
obj_16950 = G__16975;
continue;

break;
case (1):
if((!((next_obj_16953 == null)))){
var G__16976 = (i_16949 + (2));
var G__16977 = next_obj_16953;
i_16949 = G__16976;
obj_16950 = G__16977;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16953 == null)))){
var G__16978 = (i_16949 + (2));
var G__16979 = next_obj_16953;
i_16949 = G__16978;
obj_16950 = G__16979;
continue;
} else {
var G__16980 = (i_16949 + (2));
var G__16981 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_16950,key_16952) : oops.core.punch_key_dynamically_BANG_.call(null,obj_16950,key_16952));
i_16949 = G__16980;
obj_16950 = G__16981;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16962)].join('')));

}
} else {
return obj_16950;
}
break;
}
})();
return [target_obj_16939,(function (){var path_16954 = [(path_16937[(len_16938 - (2))]),(path_16937[(len_16938 - (1))])];
var len_16955 = path_16954.length;
var i_16956 = (0);
var obj_16957 = target_obj_16939;
while(true){
if((i_16956 < len_16955)){
var mode_16958 = (path_16954[i_16956]);
var key_16959 = (path_16954[(i_16956 + (1))]);
var next_obj_16960 = oops.core.get_key_dynamically(obj_16957,key_16959,mode_16958);
var G__16963 = mode_16958;
switch (G__16963) {
case (0):
var G__16983 = (i_16956 + (2));
var G__16984 = next_obj_16960;
i_16956 = G__16983;
obj_16957 = G__16984;
continue;

break;
case (1):
if((!((next_obj_16960 == null)))){
var G__16985 = (i_16956 + (2));
var G__16986 = next_obj_16960;
i_16956 = G__16985;
obj_16957 = G__16986;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16960 == null)))){
var G__16987 = (i_16956 + (2));
var G__16988 = next_obj_16960;
i_16956 = G__16987;
obj_16957 = G__16988;
continue;
} else {
var G__16989 = (i_16956 + (2));
var G__16990 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_16957,key_16959) : oops.core.punch_key_dynamically_BANG_.call(null,obj_16957,key_16959));
i_16956 = G__16989;
obj_16957 = G__16990;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16963)].join('')));

}
} else {
return obj_16957;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_16992 = (function (){var path_16991 = oops.core.build_path_dynamically(selector);

return path_16991;
})();
var len_16995 = path_16992.length;
var parent_obj_path_16996 = path_16992.slice((0),(len_16995 - (2)));
var key_16993 = (path_16992[(len_16995 - (1))]);
var mode_16994 = (path_16992[(len_16995 - (2))]);
var parent_obj_16997 = (function (){var path_16998 = parent_obj_path_16996;
var len_16999 = path_16998.length;
var i_17000 = (0);
var obj_17001 = obj;
while(true){
if((i_17000 < len_16999)){
var mode_17002 = (path_16998[i_17000]);
var key_17003 = (path_16998[(i_17000 + (1))]);
var next_obj_17004 = oops.core.get_key_dynamically(obj_17001,key_17003,mode_17002);
var G__17005 = mode_17002;
switch (G__17005) {
case (0):
var G__17007 = (i_17000 + (2));
var G__17008 = next_obj_17004;
i_17000 = G__17007;
obj_17001 = G__17008;
continue;

break;
case (1):
if((!((next_obj_17004 == null)))){
var G__17009 = (i_17000 + (2));
var G__17010 = next_obj_17004;
i_17000 = G__17009;
obj_17001 = G__17010;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_17004 == null)))){
var G__17011 = (i_17000 + (2));
var G__17012 = next_obj_17004;
i_17000 = G__17011;
obj_17001 = G__17012;
continue;
} else {
var G__17013 = (i_17000 + (2));
var G__17014 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_17001,key_17003) : oops.core.punch_key_dynamically_BANG_.call(null,obj_17001,key_17003));
i_17000 = G__17013;
obj_17001 = G__17014;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17005)].join('')));

}
} else {
return obj_17001;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_16997,key_16993,val,mode_16994);
});
