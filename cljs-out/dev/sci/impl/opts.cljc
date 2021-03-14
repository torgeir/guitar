(ns sci.impl.opts
  {:no-doc true}
  (:require
   #?(:cljs [goog.string])
   [sci.impl.namespaces :as namespaces]
   [sci.impl.utils :as utils :refer [strip-core-ns]]
   [sci.impl.vars :as vars]
   [sci.lang]))

#?(:clj
   (defrecord Env [namespaces imports load-fn]))

(defn init-env! [env bindings aliases namespaces imports load-fn]
  (swap! env (fn [env]
               (let [namespaces (merge-with merge
                                            namespaces/namespaces
                                            {'user (assoc bindings
                                                          :obj vars/user-ns)}
                                            namespaces
                                            (:namespaces env))
                     aliases (merge namespaces/aliases aliases
                                    (get-in env [:namespaces 'user :aliases]))
                     namespaces (-> namespaces
                                    (update 'user assoc :aliases aliases)
                                    (update 'clojure.core assoc 'global-hierarchy
                                            (vars/->SciVar (make-hierarchy) 'global-hierarchy nil false)))]
                 (if-not env
                   #?(:clj (->Env namespaces imports load-fn)
                      :cljs {:namespaces namespaces
                             :imports imports
                             :load-fn load-fn})
                   (assoc env
                          :namespaces namespaces
                          :imports imports
                          :load-fn load-fn))))))

(defn process-permissions [& permissions]
  (not-empty (into #{} (comp cat (map strip-core-ns)) permissions)))

(def default-classes
  #?(:clj {'java.lang.AssertionError AssertionError
           'java.lang.Exception {:class Exception}
           'java.lang.IllegalArgumentException java.lang.IllegalArgumentException
           'clojure.lang.Delay clojure.lang.Delay
           'clojure.lang.ExceptionInfo clojure.lang.ExceptionInfo
           'clojure.lang.LineNumberingPushbackReader clojure.lang.LineNumberingPushbackReader
           'java.lang.String {:class String}
           'java.io.StringWriter java.io.StringWriter
           'java.io.StringReader java.io.StringReader
           'java.lang.Integer Integer
           'java.lang.Number Number
           'java.lang.Double Double
           'java.lang.ArithmeticException ArithmeticException
           'java.lang.Object Object
           'sci.lang.IVar sci.lang.IVar}
     :cljs {'Error {:class js/Error :constructor (fn
                                                   ([msg] (js/Error. msg))
                                                   ([msg filename] (js/Error. msg filename))
                                                   ([msg filename line] (js/Error. msg filename line)))}
            'cljs.core.Delay {:class cljs.core/Delay
                              :constructor #(cljs.core/Delay. % nil)}
            'goog.string.StringBuffer {:class goog.string/StringBuffer
                                       :constructor #(goog.string/StringBuffer. %)}}))

(def default-imports
  #?(:clj '{AssertionError java.lang.AssertionError
            Exception java.lang.Exception
            String java.lang.String
            ArithmeticException java.lang.ArithmeticException
            Integer java.lang.Integer
            Number java.lang.Number
            Double java.lang.Double
            Object java.lang.Object}
     :cljs {}))

(defn normalize-classes [classes]
  (loop [class->opts (transient (select-keys classes [:allow]))
         kvs classes]
    (if-let [[sym class-opts] (first kvs)]
      (recur ;; storing the physical class as key didn't work well with
       ;; GraalVM
       (assoc! class->opts sym (if (map? class-opts)
                                 class-opts
                                 {:class class-opts}))
       (rest kvs))
      {:public-class (:public-class classes)
       :class->opts (persistent! class->opts)})))

(def default-reify
  #?(:clj {'#{java.lang.Object}
           (fn [methods]
             (reify Object
               (toString [this]
                 ((get-in methods '[java.lang.Object toString]) this))))}
     :cljs {}))

#?(:clj (defrecord Ctx [bindings env
                        features readers]))

(defn ->ctx [bindings env features readers]
  #?(:cljs {:bindings bindings
            :env env
            :features features
            :readers readers}
     :clj (->Ctx bindings env features readers)))

(defn init
  "Initializes options"
  [{:keys [:bindings :env
           :allow :deny
           :aliases
           :namespaces
           :classes
           :imports
           :features
           :load-fn
           :uberscript ;; used by babashka, not public!
           :readers
           :reify
           :disable-arity-checks]}]
  (let [env (or env (atom {}))
        imports (merge default-imports imports)
        bindings bindings
        _ (init-env! env bindings aliases namespaces imports load-fn)
        classes (normalize-classes (merge default-classes classes))
        ctx (assoc (->ctx {} env features readers)
                   :allow (process-permissions allow)
                   :deny (process-permissions deny)
                   :uberscript uberscript
                   :reify (merge default-reify reify)
                   :disable-arity-checks disable-arity-checks
                   :public-class (:public-class classes)
                   :class->opts (:class->opts classes))]
    ctx))
