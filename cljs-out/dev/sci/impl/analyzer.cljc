(ns sci.impl.analyzer
  {:no-doc true}
  (:refer-clojure :exclude [destructure macroexpand macroexpand-all macroexpand-1])
  (:require
   #?(:clj [clojure.string :as str])
   [sci.impl.destructure :refer [destructure]]
   [sci.impl.doseq-macro :refer [expand-doseq]]
   [sci.impl.evaluator :as eval]
   [sci.impl.for-macro :refer [expand-for]]
   [sci.impl.interop :as interop]
   [sci.impl.records :as records]
   [sci.impl.resolve :as resolve]
   [sci.impl.types :as types]
   [sci.impl.utils :as utils :refer
    [mark-eval mark-eval-call constant?
     rethrow-with-location-of-node
     merge-meta set-namespace!
     macro? ana-macros]]
   [sci.impl.vars :as vars])
  #?(:clj (:import [sci.impl Reflector])))

#?(:clj (set! *warn-on-reflection* true))

;; derived from (keys (. clojure.lang.Compiler specials))
;; (& monitor-exit case* try reify* finally loop* do letfn* if clojure.core/import* new deftype* let* fn* recur set! . var quote catch throw monitor-enter def)
(def special-syms '#{try finally do if new recur quote catch throw def . var set!})

(defn- throw-error-with-location [msg node]
  (utils/throw-error-with-location msg node {:phase "analysis"}))

(declare analyze analyze-call)

;;;; Macros

(defn macroexpand-1 [ctx expr]
  (let [original-expr expr]
    (if (seq? expr)
      (let [op (first expr)]
        (if (symbol? op)
          (cond (get special-syms op) expr
                (contains? #{'for} op) (analyze (assoc ctx :sci.impl/macroexpanding true)
                                                    expr)
                :else
                (let [f (resolve/resolve-symbol ctx op true)
                      f (if (and (vars/var? f)
                                 (vars/isMacro f))
                          @f f)]
                  (if (macro? f)
                    (let [f (if (identical? utils/needs-ctx (some-> f meta :sci.impl/op))
                              (partial f ctx)
                              f)]
                      (apply f original-expr (:bindings ctx) (rest expr)))
                    expr)))
          expr))
      expr)))

(defn macroexpand
  [ctx form]
  (let [ex (macroexpand-1 ctx form)]
    (if (identical? ex form)
      form
      (macroexpand ctx ex))))

(vreset! utils/macroexpand* macroexpand)
(vreset! utils/macroexpand-1* macroexpand-1)

;;;; End macros

(defn analyze-children [ctx children]
  (mapv #(analyze ctx %) children))

(defn maybe-destructured
  [params body]
  (if (every? symbol? params)
    {:params params
     :body body}
    (loop [params params
           new-params (with-meta [] (meta params))
           lets []]
      (if params
        (if (symbol? (first params))
          (recur (next params) (conj new-params (first params)) lets)
          (let [gparam (gensym "p__")]
            (recur (next params) (conj new-params gparam)
                   (-> lets (conj (first params)) (conj gparam)))))
        {:params new-params
         :body [`(let ~lets
                   ~@body)]}))))

(defn expand-fn-args+body [{:keys [:fn-expr] :as ctx} fn-name [binding-vector & body-exprs] macro?]
  (when-not binding-vector
    (throw-error-with-location "Parameter declaration missing." fn-expr))
  (when-not (vector? binding-vector)
    (throw-error-with-location "Parameter declaration should be a vector" fn-expr))
  (let [binding-vector (if macro? (into ['&form '&env] binding-vector)
                           binding-vector)
        fixed-args (take-while #(not= '& %) binding-vector)
        fixed-arity (count fixed-args)
        var-arg-name (second (drop-while #(not= '& %) binding-vector))
        next-body (next body-exprs)
        conds (when next-body
                (let [e (first body-exprs)]
                  (when (map? e) e)))
        body-exprs (if conds next-body body-exprs)
        conds (or conds (meta binding-vector))
        pre (:pre conds)
        post (:post conds)
        body-exprs (if post
                     `((let [~'% ~(if (< 1 (count body-exprs))
                                    `(do ~@body-exprs)
                                    (first body-exprs))]
                         ~@(map (fn* [c] `(assert ~c)) post)
                         ~'%))
                     body-exprs)
        body-exprs (if pre
                     (concat (map (fn* [c] `(assert ~c)) pre)
                             body-exprs)
                     body-exprs)
        {:keys [:params :body]} (maybe-destructured binding-vector body-exprs)
        ctx (update ctx :bindings merge (zipmap params
                                                (repeat nil)))
        body (analyze-children ctx body)]
    #:sci.impl{:body body
               :params params
               :fixed-arity fixed-arity
               :var-arg-name var-arg-name
               :fn-name fn-name}))

(defn analyzed-fn-meta [ctx m]
  (let [;; seq expr has location info with 2 keys
        meta-needs-eval? (> (count m) 2)
        m (if meta-needs-eval? (mark-eval (analyze ctx m))
              m)]
    m))

(defn expand-fn [ctx [_fn name? & body :as fn-expr] macro?]
  (let [ctx (assoc ctx :fn-expr fn-expr)
        fn-name (if (symbol? name?)
                  name?
                  nil)
        body (if fn-name
               body
               (cons name? body))
        ;; fn-name (or fn-name (gensym* "fn"))
        bodies (if (seq? (first body))
                 body
                 [body])
        ctx (if fn-name (assoc-in ctx [:bindings fn-name] nil)
                ctx)
        analyzed-bodies (reduce
                         (fn [{:keys [:max-fixed :min-varargs] :as acc} body]
                           (let [arglist (first body)
                                 body (expand-fn-args+body ctx fn-name body macro?)
                                 body (assoc body :sci.impl/arglist arglist)
                                 var-arg-name (:sci.impl/var-arg-name body)
                                 fixed-arity (:sci.impl/fixed-arity body)
                                 new-min-varargs (when var-arg-name fixed-arity)]
                             (when (and var-arg-name min-varargs)
                               (throw-error-with-location "Can't have more than 1 variadic overload" fn-expr))
                             (when (and (not var-arg-name) min-varargs (> fixed-arity min-varargs))
                               (throw-error-with-location
                                "Can't have fixed arity function with more params than variadic function" fn-expr))
                             (-> acc
                                 (assoc :min-varargs new-min-varargs
                                        :max-fixed (max (:sci.impl/fixed-arity body)
                                                        max-fixed))
                                 (update :bodies conj body)
                                 (update :arglists conj arglist))))
                         {:bodies []
                          :arglists []
                          :min-var-args nil
                          :max-fixed -1} bodies)
        arities (:bodies analyzed-bodies)
        arglists (:arglists analyzed-bodies)
        fn-meta (meta fn-expr)
        ana-fn-meta (analyzed-fn-meta ctx fn-meta)
        fn-meta (when-not (identical? fn-meta ana-fn-meta)
                  ;; fn-meta contains more than only location info
                  (-> ana-fn-meta (dissoc :line :end-line :column :end-column)))]
    (with-meta #:sci.impl{:fn-bodies arities
                          :fn-name fn-name
                          :arglists arglists
                          :fn true
                          :fn-meta fn-meta}
      {:sci.impl/op :fn})))

(defn expand-let*
  [ctx destructured-let-bindings exprs]
  (let [[ctx new-let-bindings]
        (reduce
         (fn [[ctx new-let-bindings] [binding-name binding-value]]
           (let [v (analyze ctx binding-value)]
             [(update ctx :bindings assoc binding-name v)
              (conj new-let-bindings binding-name v)]))
         [ctx []]
         (partition 2 destructured-let-bindings))
        body (analyze-children ctx exprs)]
    (with-meta
      (fn [ctx]
        (eval/eval-let ctx new-let-bindings body))
      {:sci.impl/op utils/evaluate})))

(defn expand-let
  "The let macro from clojure.core"
  [ctx [_let let-bindings  & exprs]]
  (let [let-bindings (destructure let-bindings)]
    (expand-let* ctx let-bindings exprs)))

(declare expand-declare)

(defn expand-def
  [ctx expr]
  (let [[_def var-name ?docstring ?init] expr]
    (expand-declare ctx [nil var-name])
    (when-not (simple-symbol? var-name)
      (throw-error-with-location "Var name should be simple symbol." expr))
    (let [arg-count (count expr)
          docstring (when (and (= 4 arg-count)
                               (string? ?docstring))
                      ?docstring)
          expected-arg-count (if docstring 4 3)]
      (when-not (<= arg-count expected-arg-count)
        (throw (new #?(:clj  IllegalArgumentException
                       :cljs js/Error)
                    "Too many arguments to def")))
      (let [init (if docstring ?init ?docstring)
            init (if (= 2 arg-count)
                   :sci.impl/var.unbound
                   (analyze ctx init))
            m (meta var-name)
            m (analyze ctx m)
            m (assoc m :ns @vars/current-ns)
            m (if docstring (assoc m :doc docstring) m)
            var-name (with-meta var-name m)]
        (mark-eval-call (list 'def var-name init))))))

(defn expand-defn [ctx [op fn-name & body :as expr]]
  (when-not (simple-symbol? fn-name)
    (throw-error-with-location "Var name should be simple symbol." expr))
  (expand-declare ctx [nil fn-name])
  (let [macro? (= "defmacro" (name op))
        [pre-body body] (split-with (comp not sequential?) body)
        _ (when (empty? body)
            (throw-error-with-location "Parameter declaration missing." expr))
        docstring (when-let [ds (first pre-body)]
                    (when (string? ds) ds))
        meta-map (when-let [m (last pre-body)]
                   (when (map? m) m))
        meta-map (analyze ctx (merge (meta fn-name) (meta expr) meta-map))
        fn-body (with-meta (cons 'fn body)
                  (meta expr))
        f (expand-fn ctx fn-body macro?)
        arglists (seq (:sci.impl/arglists f))
        meta-map (assoc meta-map
                        :ns @vars/current-ns
                        :arglists arglists)
        fn-name (with-meta fn-name
                  (cond-> meta-map
                    docstring (assoc :doc docstring)
                    macro? (assoc :macro true)))
        f (assoc f
                 :sci/macro macro?
                 :sci.impl/fn-name fn-name
                 :sci.impl/var true)]
    (mark-eval-call (list 'def fn-name f))))

(defn expand-loop
  [ctx expr]
  (let [bv (second expr)
        arg-names (take-nth 2 bv)
        init-vals (take-nth 2 (rest bv))
        [bv syms] (if (every? symbol? arg-names)
                    [bv arg-names]
                    (let [syms (repeatedly (count arg-names) #(gensym))
                          bv1 (map vector syms init-vals)
                          bv2  (map vector arg-names syms)]
                      [(into [] cat (interleave bv1 bv2)) syms]))
        body (nnext expr)
        expansion (list 'let bv
                        (list* `(fn ~(vec arg-names) ~@body)
                               syms))]
    (analyze ctx expansion)))

(defn expand-lazy-seq
  [ctx expr]
  (let [body (rest expr)]
    (mark-eval-call
     (list `lazy-seq
           (analyze ctx
                    ;; expand-fn will take care of the analysis of the body
                    (list 'fn [] (cons 'do body)))))))

(defn expand-if
  [ctx [_if & exprs :as expr]]
  (case (count exprs)
    (0 1) (throw-error-with-location "Too few arguments to if" expr)
    (2 3) (let [[cond then else] (analyze-children ctx exprs)]
            (with-meta
              (fn [ctx]
                (eval/eval-if ctx cond then else))
              {:sci.impl/op utils/evaluate}))
    (throw-error-with-location "Too many arguments to if" expr)))

(defn expand-case
  [ctx expr]
  (let [v (analyze ctx (second expr))
        clauses (nnext expr)
        match-clauses (take-nth 2 clauses)
        result-clauses (analyze-children ctx (take-nth 2 (rest clauses)))
        default (when (odd? (count clauses))
                  [:val (analyze ctx (last clauses))])
        cases (interleave match-clauses result-clauses)
        assoc-new (fn [m k v]
                    (if-not (contains? m k)
                      (assoc m k v)
                      (throw-error-with-location (str "Duplicate case test constant " k)
                                                 expr)))
        case-map (loop [cases (seq cases)
                        ret-map {}]
                   (if cases
                     (let [[k v & cases] cases]
                       (if (list? k)
                         (recur
                          cases
                          (reduce (fn [acc k]
                                    (assoc-new acc k v))
                                  ret-map
                                  k))
                         (recur
                          cases
                          (assoc-new ret-map k v))))
                     ret-map))
        ret (mark-eval-call (list 'case
                                  {:case-map case-map
                                   :case-val v
                                   :case-default default}
                                  default))]
    (mark-eval-call ret)))

(defn expand-try
  [ctx [_try & body]]
  (let [[body-exprs
         catches
         finally]
        (loop [exprs #_[expr & exprs :as all-exprs] (seq body)
               body-exprs []
               catch-exprs []
               finally-expr nil]
          (if exprs
            (let [expr (first exprs)
                  exprs (next exprs)]
              (cond (and (seq? expr) (= 'catch (first expr)))
                    (recur exprs body-exprs (conj catch-exprs expr) finally-expr)
                    (and (not exprs) (and (seq? expr) (= 'finally (first expr))))
                    [body-exprs catch-exprs expr]
                    :else
                    ;; TODO: cannot add body expression when catch is not empty
                    ;; TODO: can't have finally as non-last expression
                    (recur exprs (conj body-exprs expr) catch-exprs finally-expr)))
            [body-exprs catch-exprs finally-expr]))
        body (analyze ctx (cons 'do body-exprs))
        catches (mapv (fn [c]
                        (let [[_ ex binding & body] c]
                          (if-let [clazz (interop/resolve-class ctx ex)]
                            {:class clazz
                             :binding binding
                             :body (analyze (assoc-in ctx [:bindings binding] nil)
                                            (cons 'do body))}
                            (throw-error-with-location (str "Unable to resolve classname: " ex) ex))))
                      catches)
        finally (when finally
                  (analyze ctx (cons 'do (rest finally))))]
    (with-meta
      {:sci.impl/try
       {:body body
        :catches catches
        :finally finally}}
      {:sci.impl/op :try})))

(defn expand-declare [ctx [_declare & names :as expr]]
  (swap! (:env ctx)
         (fn [env]
           (let [cnn (vars/current-ns-name)]
             (update-in env [:namespaces cnn]
                        (fn [current-ns]
                          (reduce (fn [acc name]
                                    (if-let [x (.get ^java.util.Map acc name)]
                                      (if-let [prev-ns (some-> x meta :ns)]
                                        (let [current-ns-name (vars/current-ns-name)]
                                          (if-not (= (vars/getName prev-ns)
                                                     current-ns-name)
                                            (throw-error-with-location
                                             (str name " already refers to "
                                                  x " in namespace "
                                                  current-ns-name)
                                             expr)
                                            ;; when the previous bound thing
                                            ;; didn't have an ns, just assume
                                            ;; things are ok to redefine
                                            acc))
                                        ;; declare does not override an existing var
                                        acc)
                                      (assoc acc name
                                             (doto (vars/->SciVar nil (symbol (str cnn)
                                                                              (str name))
                                                                  (assoc (meta name)
                                                                         :name name
                                                                         :ns @vars/current-ns
                                                                         :file @vars/current-file)
                                                                  false)
                                               (vars/unbind)))))
                                  current-ns
                                  names))))))
  nil)

;;;; Interop

(defn expand-dot [ctx [_dot instance-expr method-expr & args :as _expr]]
  (let [[method-expr & args] (if (seq? method-expr) method-expr
                                 (cons method-expr args))
        instance-expr (analyze ctx instance-expr)
        instance-expr (utils/vary-meta*
                       instance-expr
                       (fn [m]
                         (if-let [t (:tag m)]
                           (let [clazz (or (interop/resolve-class ctx t)
                                           (records/resolve-record-class ctx t)
                                           (throw-error-with-location
                                            (str "Unable to resolve classname: " t) t))]
                             (assoc m :tag-class clazz))
                           m)))
        method-expr (name method-expr)
        args (when args (analyze-children ctx args))
        res #?(:clj (if (class? instance-expr)
                      (if (nil? args)
                        (if (str/starts-with? method-expr "-")
                          (with-meta [instance-expr (subs method-expr 1)]
                            {:sci.impl/op :static-access})
                          ;; https://clojure.org/reference/java_interop
                          ;; If the second operand is a symbol and no args are
                          ;; supplied it is taken to be a field access - the
                          ;; name of the field is the name of the symbol, and
                          ;; the value of the expression is the value of the
                          ;; field, unless there is a no argument public method
                          ;; of the same name, in which case it resolves to a
                          ;; call to the method.
                          (if-let [_
                                   (try (Reflector/getStaticField ^Class instance-expr ^String method-expr)
                                        (catch IllegalArgumentException _ nil))]
                            (with-meta [instance-expr method-expr]
                              {:sci.impl/op :static-access})
                            (mark-eval-call
                             `(~(with-meta [instance-expr method-expr]
                                  {:sci.impl/op :static-access}) ~@args))))
                        (mark-eval-call
                         `(~(with-meta [instance-expr method-expr]
                              {:sci.impl/op :static-access}) ~@args)))
                      (mark-eval-call `(~'. ~instance-expr ~method-expr ~args)))
               :cljs (mark-eval-call `(~'. ~instance-expr ~method-expr ~args)))]
    res))

(defn expand-dot**
  "Expands (. x method)"
  [ctx expr]
  (when (< (count expr) 3)
    (throw (new #?(:clj IllegalArgumentException :cljs js/Error)
                "Malformed member expression, expecting (.member target ...)")))
  (expand-dot ctx expr))

(defn expand-dot*
  "Expands (.foo x)"
  [ctx [method-name obj & args :as expr]]
  (when (< (count expr) 2)
    (throw (new #?(:clj IllegalArgumentException :cljs js/Error)
                "Malformed member expression, expecting (.member target ...)")))
  (expand-dot ctx (list '. obj (cons (symbol (subs (name method-name) 1)) args))))

(defn expand-new [ctx [_new class-sym & args :as _expr]]
  (if-let [#?(:clj {:keys [:class] :as _opts}
              :cljs {:keys [:constructor] :as _opts}) (interop/resolve-class-opts ctx class-sym)]
    (let [args (analyze-children ctx args)] ;; analyze args!
      (mark-eval-call (list 'new #?(:clj class :cljs constructor) args)))
    (if-let [record (records/resolve-record-class ctx class-sym)]
      (let [args (analyze-children ctx args)]
        (mark-eval-call (list* (:sci.impl.record/constructor (meta record)) args)))
      (throw-error-with-location (str "Unable to resolve classname: " class-sym) class-sym))))

(defn expand-constructor [ctx [constructor-sym & args]]
  (let [constructor-name (name constructor-sym)
        class-sym (with-meta (symbol (subs constructor-name 0
                                           (dec (count constructor-name))))
                    (meta constructor-sym))]
    (expand-new ctx (with-meta (list* 'new class-sym args)
                      (meta constructor-sym)))))

;;;; End interop

;;;; Namespaces

(defn analyze-ns-form [ctx [_ns ns-name & exprs]]
  (when-not (symbol? ns-name)
    (throw (new #?(:clj IllegalArgumentException
                   :cljs js/Error)
                (str "Namespace name must be symbol, got: " (pr-str ns-name)))))
  (let [[docstring exprs]
        (let [fexpr (first exprs)]
          (if (string? fexpr)
            [fexpr (next exprs)]
            [nil exprs]))
        ;; skip attr-map
        [attr-map exprs]
        (let [m (first exprs)]
          (if (map? m)
            [m (next exprs)]
            [nil exprs]))
        attr-map (if docstring
                   (assoc attr-map :doc docstring)
                   attr-map)]
    (set-namespace! ctx ns-name attr-map)
    (loop [exprs exprs
           ret []]
      (if exprs
        (let [[k & args :as expr] (first exprs)]
          (case k
            (:require :use)
            (recur (next exprs)
                   (conj ret
                         (mark-eval-call
                          (with-meta (list* (symbol (name k)) args)
                            (meta expr)))))
            :import (recur (next exprs) (conj ret (mark-eval-call
                                                   (with-meta (list* 'import args)
                                                     (meta expr)))))
            :refer-clojure (recur (next exprs)
                                  (conj ret
                                        (mark-eval-call
                                         (with-meta (list* 'refer 'clojure.core args)
                                           (meta expr)))))
            :gen-class ;; ignore
            (recur (next exprs) ret)))
        (mark-eval-call (list* 'do ret))))))

;;;; End namespaces


;;;; Vars

(defn analyze-var [ctx [_ var-name]]
  (resolve/resolve-symbol (assoc ctx :sci.impl/prevent-deref true) var-name))

(defn analyze-set! [ctx [_ obj v]]
  (let [obj (analyze ctx obj)
        v (analyze ctx v)
        obj (types/getVal obj)]
    (mark-eval-call (list 'set! obj v))))

;;;; End vars

(defn analyze-call [ctx expr top-level?]
  (let [f (first expr)]
    (if (symbol? f)
      (let [;; in call position Clojure prioritizes special symbols over
            ;; bindings
            special-sym (get special-syms f)
            _ (when special-sym (resolve/check-permission! ctx special-sym f nil))
            f (or special-sym
                  (resolve/resolve-symbol ctx f true))
            #_#_f (if (and (vars/var? f)
                           (vars/isMacro f))
                    f f)
            f-meta (meta f)
            eval? (and f-meta (:sci.impl/op f-meta))]
        (cond (and f-meta (::static-access f-meta))
              (expand-dot** ctx (list* '. (first f) (second f) (rest expr)))
              (and (not eval?) ;; the symbol is not a binding
                   (or
                    special-sym
                    (contains? ana-macros f)))
              (case f
                ;; we treat every subexpression of a top-level do as a separate
                ;; analysis/interpretation unit so we hand this over to the
                ;; interpreter again, which will invoke analysis + evaluation on
                ;; every sub expression
                do (mark-eval-call (cons 'do
                                         (analyze-children ctx (rest expr))))
                let (expand-let ctx expr)
                (fn fn*) (expand-fn ctx expr false)
                def (expand-def ctx expr)
                ;; NOTE: defn / defmacro aren't implemented as normal macros yet
                (defn defmacro) (let [ret (expand-defn ctx expr)]
                                  ret)
                ;; TODO: implement as normal macro in namespaces.cljc
                loop (expand-loop ctx expr)
                lazy-seq (expand-lazy-seq ctx expr)
                for (let [res (expand-for ctx expr)]
                      (if (:sci.impl/macroexpanding ctx)
                        res
                        (analyze ctx res)))
                doseq (analyze ctx (expand-doseq ctx expr))
                if (expand-if ctx expr)
                case (expand-case ctx expr)
                try (expand-try ctx expr)
                declare (expand-declare ctx expr)
                expand-dot* (expand-dot* ctx expr)
                . (expand-dot** ctx expr)
                expand-constructor (expand-constructor ctx expr)
                new (expand-new ctx expr)
                ns (analyze-ns-form ctx expr)
                var (analyze-var ctx expr)
                set! (analyze-set! ctx expr)
                (import quote) (mark-eval-call expr) ;; don't analyze children
                ;; else:
                (mark-eval-call (cons f (analyze-children ctx (rest expr)))))
              :else
              (try
                (if (macro? f)
                  (let [needs-ctx? (identical? utils/needs-ctx
                                               (:sci.impl/op (meta f)))
                        v (if needs-ctx?
                            (apply f expr
                                   (:bindings ctx)
                                   ctx
                                   (rest expr))
                            (apply f expr
                                   (:bindings ctx) (rest expr)))
                        expanded (cond (:sci.impl/macroexpanding ctx) v
                                       (and top-level? (seq? v) (= 'do (first v)))
                                       ;; hand back control to eval-form for
                                       ;; interleaved analysis and eval
                                       (types/->EvalForm v)
                                       :else (analyze ctx v))]
                    expanded)
                  (if-let [f (:sci.impl/inlined f-meta)]
                    (mark-eval-call (cons f (analyze-children ctx (rest expr)))
                                    :sci.impl/f-meta f-meta)
                    (mark-eval-call (cons f (analyze-children ctx (rest expr))))))
                (catch #?(:clj Exception :cljs js/Error) e
                  (rethrow-with-location-of-node ctx e
                                                 ;; adding metadata for error reporting
                                                 (mark-eval-call
                                                  (with-meta (cons f (rest expr))
                                                    (meta expr))))))))
      (let [ret (mark-eval-call (analyze-children ctx expr))]
        ret))))

(def ^:const constant-colls true) ;; see GH #452

(defn analyze
  ([ctx expr]
   (analyze ctx expr false))
  ([ctx expr top-level?]
   ;; (prn :ana expr)
   (let [m (meta expr)
         ret (cond (constant? expr) expr ;; constants do not carry metadata
                   (symbol? expr) (let [v (resolve/resolve-symbol ctx expr false)]
                                    (cond (constant? v) v
                                          (vars/var? v)
                                          (if (:const (meta v))
                                            @v
                                            (if (vars/isMacro v)
                                              (throw (new #?(:clj IllegalStateException :cljs js/Error)
                                                          (str "Can't take value of a macro: " v "")))
                                              (types/->EvalVar v)))
                                          :else (merge-meta v m)))
                   ;; don't evaluate records, this check needs to go before map?
                   ;; since a record is also a map
                   (record? expr) expr
                   (map? expr)
                   (let [ks (keys expr)
                         vs (vals expr)
                         constant-map? (and constant-colls
                                            (every? constant? ks)
                                            (every? constant? vs))
                         analyzed-map (if constant-map?
                                        expr
                                        ;; potential place for optimization
                                        (zipmap (analyze-children ctx ks)
                                                (analyze-children ctx vs)))
                         analyzed-meta (when m (analyze ctx m))
                         analyzed-meta (if (and constant-map?
                                                ;; meta was also a constant-map
                                                (identical? m analyzed-meta))
                                         analyzed-meta
                                         (assoc analyzed-meta :sci.impl/op :eval))]
                     (if analyzed-meta
                       (with-meta analyzed-map analyzed-meta)
                       analyzed-map))
                   (or (vector? expr) (set? expr))
                   (let [constant-coll? (and constant-colls
                                             (every? constant? expr))
                         analyzed-coll (if constant-coll?
                                         expr
                                         (into (empty expr) (analyze-children ctx expr)))
                         analyzed-meta (when m (analyze ctx m))
                         analyzed-meta (if (and constant-coll?
                                                (identical? m analyzed-meta))
                                         analyzed-meta
                                         (assoc analyzed-meta :sci.impl/op :eval))]
                     (if analyzed-meta
                       (with-meta analyzed-coll analyzed-meta)
                       analyzed-coll))
                   (seq? expr) (if (seq expr)
                                 (merge-meta (analyze-call ctx expr top-level?) m)
                                 ;; the empty list
                                 expr)
                   :else
                   expr)]
     ret)))

;;;; Scratch

(comment
  )
