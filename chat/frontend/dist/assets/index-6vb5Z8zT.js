var Jw = Object.defineProperty;
var Ww = (e, n, a) =>
  n in e
    ? Jw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (e[n] = a);
var ex = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var td = (e, n, a) => Ww(e, typeof n != "symbol" ? n + "" : n, a);
var f8 = ex((qt, Ht) => {
  (function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      s(o);
    new MutationObserver((o) => {
      for (const c of o)
        if (c.type === "childList")
          for (const f of c.addedNodes)
            f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
    }).observe(document, { childList: !0, subtree: !0 });
    function a(o) {
      const c = {};
      return (
        o.integrity && (c.integrity = o.integrity),
        o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (c.credentials = "include")
          : o.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
        c
      );
    }
    function s(o) {
      if (o.ep) return;
      o.ep = !0;
      const c = a(o);
      fetch(o.href, c);
    }
  })();
  function Vh(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var nd = { exports: {} },
    Hs = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var g0;
  function tx() {
    if (g0) return Hs;
    g0 = 1;
    var e = Symbol.for("react.transitional.element"),
      n = Symbol.for("react.fragment");
    function a(s, o, c) {
      var f = null;
      if (
        (c !== void 0 && (f = "" + c),
        o.key !== void 0 && (f = "" + o.key),
        "key" in o)
      ) {
        c = {};
        for (var p in o) p !== "key" && (c[p] = o[p]);
      } else c = o;
      return (
        (o = c.ref),
        { $$typeof: e, type: s, key: f, ref: o !== void 0 ? o : null, props: c }
      );
    }
    return (Hs.Fragment = n), (Hs.jsx = a), (Hs.jsxs = a), Hs;
  }
  var v0;
  function nx() {
    return v0 || ((v0 = 1), (nd.exports = tx())), nd.exports;
  }
  var E = nx(),
    rd = { exports: {} },
    me = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var b0;
  function rx() {
    if (b0) return me;
    b0 = 1;
    var e = Symbol.for("react.transitional.element"),
      n = Symbol.for("react.portal"),
      a = Symbol.for("react.fragment"),
      s = Symbol.for("react.strict_mode"),
      o = Symbol.for("react.profiler"),
      c = Symbol.for("react.consumer"),
      f = Symbol.for("react.context"),
      p = Symbol.for("react.forward_ref"),
      h = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      g = Symbol.for("react.lazy"),
      v = Symbol.iterator;
    function S(O) {
      return O === null || typeof O != "object"
        ? null
        : ((O = (v && O[v]) || O["@@iterator"]),
          typeof O == "function" ? O : null);
    }
    var _ = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      w = Object.assign,
      M = {};
    function A(O, G, ne) {
      (this.props = O),
        (this.context = G),
        (this.refs = M),
        (this.updater = ne || _);
    }
    (A.prototype.isReactComponent = {}),
      (A.prototype.setState = function (O, G) {
        if (typeof O != "object" && typeof O != "function" && O != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, O, G, "setState");
      }),
      (A.prototype.forceUpdate = function (O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate");
      });
    function T() {}
    T.prototype = A.prototype;
    function L(O, G, ne) {
      (this.props = O),
        (this.context = G),
        (this.refs = M),
        (this.updater = ne || _);
    }
    var B = (L.prototype = new T());
    (B.constructor = L), w(B, A.prototype), (B.isPureReactComponent = !0);
    var P = Array.isArray,
      N = { H: null, A: null, T: null, S: null },
      F = Object.prototype.hasOwnProperty;
    function K(O, G, ne, ae, Q, he) {
      return (
        (ne = he.ref),
        {
          $$typeof: e,
          type: O,
          key: G,
          ref: ne !== void 0 ? ne : null,
          props: he,
        }
      );
    }
    function ee(O, G) {
      return K(O.type, G, void 0, void 0, void 0, O.props);
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function oe(O) {
      var G = { "=": "=0", ":": "=2" };
      return (
        "$" +
        O.replace(/[=:]/g, function (ne) {
          return G[ne];
        })
      );
    }
    var ye = /\/+/g;
    function et(O, G) {
      return typeof O == "object" && O !== null && O.key != null
        ? oe("" + O.key)
        : G.toString(36);
    }
    function ze() {}
    function at(O) {
      switch (O.status) {
        case "fulfilled":
          return O.value;
        case "rejected":
          throw O.reason;
        default:
          switch (
            (typeof O.status == "string"
              ? O.then(ze, ze)
              : ((O.status = "pending"),
                O.then(
                  function (G) {
                    O.status === "pending" &&
                      ((O.status = "fulfilled"), (O.value = G));
                  },
                  function (G) {
                    O.status === "pending" &&
                      ((O.status = "rejected"), (O.reason = G));
                  }
                )),
            O.status)
          ) {
            case "fulfilled":
              return O.value;
            case "rejected":
              throw O.reason;
          }
      }
      throw O;
    }
    function dt(O, G, ne, ae, Q) {
      var he = typeof O;
      (he === "undefined" || he === "boolean") && (O = null);
      var fe = !1;
      if (O === null) fe = !0;
      else
        switch (he) {
          case "bigint":
          case "string":
          case "number":
            fe = !0;
            break;
          case "object":
            switch (O.$$typeof) {
              case e:
              case n:
                fe = !0;
                break;
              case g:
                return (fe = O._init), dt(fe(O._payload), G, ne, ae, Q);
            }
        }
      if (fe)
        return (
          (Q = Q(O)),
          (fe = ae === "" ? "." + et(O, 0) : ae),
          P(Q)
            ? ((ne = ""),
              fe != null && (ne = fe.replace(ye, "$&/") + "/"),
              dt(Q, G, ne, "", function (Fe) {
                return Fe;
              }))
            : Q != null &&
              (Y(Q) &&
                (Q = ee(
                  Q,
                  ne +
                    (Q.key == null || (O && O.key === Q.key)
                      ? ""
                      : ("" + Q.key).replace(ye, "$&/") + "/") +
                    fe
                )),
              G.push(Q)),
          1
        );
      fe = 0;
      var tt = ae === "" ? "." : ae + ":";
      if (P(O))
        for (var Te = 0; Te < O.length; Te++)
          (ae = O[Te]), (he = tt + et(ae, Te)), (fe += dt(ae, G, ne, he, Q));
      else if (((Te = S(O)), typeof Te == "function"))
        for (O = Te.call(O), Te = 0; !(ae = O.next()).done; )
          (ae = ae.value),
            (he = tt + et(ae, Te++)),
            (fe += dt(ae, G, ne, he, Q));
      else if (he === "object") {
        if (typeof O.then == "function") return dt(at(O), G, ne, ae, Q);
        throw (
          ((G = String(O)),
          Error(
            "Objects are not valid as a React child (found: " +
              (G === "[object Object]"
                ? "object with keys {" + Object.keys(O).join(", ") + "}"
                : G) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      }
      return fe;
    }
    function X(O, G, ne) {
      if (O == null) return O;
      var ae = [],
        Q = 0;
      return (
        dt(O, ae, "", "", function (he) {
          return G.call(ne, he, Q++);
        }),
        ae
      );
    }
    function ue(O) {
      if (O._status === -1) {
        var G = O._result;
        (G = G()),
          G.then(
            function (ne) {
              (O._status === 0 || O._status === -1) &&
                ((O._status = 1), (O._result = ne));
            },
            function (ne) {
              (O._status === 0 || O._status === -1) &&
                ((O._status = 2), (O._result = ne));
            }
          ),
          O._status === -1 && ((O._status = 0), (O._result = G));
      }
      if (O._status === 1) return O._result.default;
      throw O._result;
    }
    var se =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          };
    function De() {}
    return (
      (me.Children = {
        map: X,
        forEach: function (O, G, ne) {
          X(
            O,
            function () {
              G.apply(this, arguments);
            },
            ne
          );
        },
        count: function (O) {
          var G = 0;
          return (
            X(O, function () {
              G++;
            }),
            G
          );
        },
        toArray: function (O) {
          return (
            X(O, function (G) {
              return G;
            }) || []
          );
        },
        only: function (O) {
          if (!Y(O))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return O;
        },
      }),
      (me.Component = A),
      (me.Fragment = a),
      (me.Profiler = o),
      (me.PureComponent = L),
      (me.StrictMode = s),
      (me.Suspense = h),
      (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N),
      (me.act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (me.cache = function (O) {
        return function () {
          return O.apply(null, arguments);
        };
      }),
      (me.cloneElement = function (O, G, ne) {
        if (O == null)
          throw Error(
            "The argument must be a React element, but you passed " + O + "."
          );
        var ae = w({}, O.props),
          Q = O.key,
          he = void 0;
        if (G != null)
          for (fe in (G.ref !== void 0 && (he = void 0),
          G.key !== void 0 && (Q = "" + G.key),
          G))
            !F.call(G, fe) ||
              fe === "key" ||
              fe === "__self" ||
              fe === "__source" ||
              (fe === "ref" && G.ref === void 0) ||
              (ae[fe] = G[fe]);
        var fe = arguments.length - 2;
        if (fe === 1) ae.children = ne;
        else if (1 < fe) {
          for (var tt = Array(fe), Te = 0; Te < fe; Te++)
            tt[Te] = arguments[Te + 2];
          ae.children = tt;
        }
        return K(O.type, Q, void 0, void 0, he, ae);
      }),
      (me.createContext = function (O) {
        return (
          (O = {
            $$typeof: f,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (O.Provider = O),
          (O.Consumer = { $$typeof: c, _context: O }),
          O
        );
      }),
      (me.createElement = function (O, G, ne) {
        var ae,
          Q = {},
          he = null;
        if (G != null)
          for (ae in (G.key !== void 0 && (he = "" + G.key), G))
            F.call(G, ae) &&
              ae !== "key" &&
              ae !== "__self" &&
              ae !== "__source" &&
              (Q[ae] = G[ae]);
        var fe = arguments.length - 2;
        if (fe === 1) Q.children = ne;
        else if (1 < fe) {
          for (var tt = Array(fe), Te = 0; Te < fe; Te++)
            tt[Te] = arguments[Te + 2];
          Q.children = tt;
        }
        if (O && O.defaultProps)
          for (ae in ((fe = O.defaultProps), fe))
            Q[ae] === void 0 && (Q[ae] = fe[ae]);
        return K(O, he, void 0, void 0, null, Q);
      }),
      (me.createRef = function () {
        return { current: null };
      }),
      (me.forwardRef = function (O) {
        return { $$typeof: p, render: O };
      }),
      (me.isValidElement = Y),
      (me.lazy = function (O) {
        return {
          $$typeof: g,
          _payload: { _status: -1, _result: O },
          _init: ue,
        };
      }),
      (me.memo = function (O, G) {
        return { $$typeof: m, type: O, compare: G === void 0 ? null : G };
      }),
      (me.startTransition = function (O) {
        var G = N.T,
          ne = {};
        N.T = ne;
        try {
          var ae = O(),
            Q = N.S;
          Q !== null && Q(ne, ae),
            typeof ae == "object" &&
              ae !== null &&
              typeof ae.then == "function" &&
              ae.then(De, se);
        } catch (he) {
          se(he);
        } finally {
          N.T = G;
        }
      }),
      (me.unstable_useCacheRefresh = function () {
        return N.H.useCacheRefresh();
      }),
      (me.use = function (O) {
        return N.H.use(O);
      }),
      (me.useActionState = function (O, G, ne) {
        return N.H.useActionState(O, G, ne);
      }),
      (me.useCallback = function (O, G) {
        return N.H.useCallback(O, G);
      }),
      (me.useContext = function (O) {
        return N.H.useContext(O);
      }),
      (me.useDebugValue = function () {}),
      (me.useDeferredValue = function (O, G) {
        return N.H.useDeferredValue(O, G);
      }),
      (me.useEffect = function (O, G) {
        return N.H.useEffect(O, G);
      }),
      (me.useId = function () {
        return N.H.useId();
      }),
      (me.useImperativeHandle = function (O, G, ne) {
        return N.H.useImperativeHandle(O, G, ne);
      }),
      (me.useInsertionEffect = function (O, G) {
        return N.H.useInsertionEffect(O, G);
      }),
      (me.useLayoutEffect = function (O, G) {
        return N.H.useLayoutEffect(O, G);
      }),
      (me.useMemo = function (O, G) {
        return N.H.useMemo(O, G);
      }),
      (me.useOptimistic = function (O, G) {
        return N.H.useOptimistic(O, G);
      }),
      (me.useReducer = function (O, G, ne) {
        return N.H.useReducer(O, G, ne);
      }),
      (me.useRef = function (O) {
        return N.H.useRef(O);
      }),
      (me.useState = function (O) {
        return N.H.useState(O);
      }),
      (me.useSyncExternalStore = function (O, G, ne) {
        return N.H.useSyncExternalStore(O, G, ne);
      }),
      (me.useTransition = function () {
        return N.H.useTransition();
      }),
      (me.version = "19.0.0"),
      me
    );
  }
  var S0;
  function gu() {
    return S0 || ((S0 = 1), (rd.exports = rx())), rd.exports;
  }
  var R = gu();
  const Xn = Vh(R);
  var ad = { exports: {} },
    Fs = {},
    id = { exports: {} },
    sd = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var E0;
  function ax() {
    return (
      E0 ||
        ((E0 = 1),
        (function (e) {
          function n(X, ue) {
            var se = X.length;
            X.push(ue);
            e: for (; 0 < se; ) {
              var De = (se - 1) >>> 1,
                O = X[De];
              if (0 < o(O, ue)) (X[De] = ue), (X[se] = O), (se = De);
              else break e;
            }
          }
          function a(X) {
            return X.length === 0 ? null : X[0];
          }
          function s(X) {
            if (X.length === 0) return null;
            var ue = X[0],
              se = X.pop();
            if (se !== ue) {
              X[0] = se;
              e: for (var De = 0, O = X.length, G = O >>> 1; De < G; ) {
                var ne = 2 * (De + 1) - 1,
                  ae = X[ne],
                  Q = ne + 1,
                  he = X[Q];
                if (0 > o(ae, se))
                  Q < O && 0 > o(he, ae)
                    ? ((X[De] = he), (X[Q] = se), (De = Q))
                    : ((X[De] = ae), (X[ne] = se), (De = ne));
                else if (Q < O && 0 > o(he, se))
                  (X[De] = he), (X[Q] = se), (De = Q);
                else break e;
              }
            }
            return ue;
          }
          function o(X, ue) {
            var se = X.sortIndex - ue.sortIndex;
            return se !== 0 ? se : X.id - ue.id;
          }
          if (
            ((e.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var c = performance;
            e.unstable_now = function () {
              return c.now();
            };
          } else {
            var f = Date,
              p = f.now();
            e.unstable_now = function () {
              return f.now() - p;
            };
          }
          var h = [],
            m = [],
            g = 1,
            v = null,
            S = 3,
            _ = !1,
            w = !1,
            M = !1,
            A = typeof setTimeout == "function" ? setTimeout : null,
            T = typeof clearTimeout == "function" ? clearTimeout : null,
            L = typeof setImmediate < "u" ? setImmediate : null;
          function B(X) {
            for (var ue = a(m); ue !== null; ) {
              if (ue.callback === null) s(m);
              else if (ue.startTime <= X)
                s(m), (ue.sortIndex = ue.expirationTime), n(h, ue);
              else break;
              ue = a(m);
            }
          }
          function P(X) {
            if (((M = !1), B(X), !w))
              if (a(h) !== null) (w = !0), at();
              else {
                var ue = a(m);
                ue !== null && dt(P, ue.startTime - X);
              }
          }
          var N = !1,
            F = -1,
            K = 5,
            ee = -1;
          function Y() {
            return !(e.unstable_now() - ee < K);
          }
          function oe() {
            if (N) {
              var X = e.unstable_now();
              ee = X;
              var ue = !0;
              try {
                e: {
                  (w = !1), M && ((M = !1), T(F), (F = -1)), (_ = !0);
                  var se = S;
                  try {
                    t: {
                      for (
                        B(X), v = a(h);
                        v !== null && !(v.expirationTime > X && Y());

                      ) {
                        var De = v.callback;
                        if (typeof De == "function") {
                          (v.callback = null), (S = v.priorityLevel);
                          var O = De(v.expirationTime <= X);
                          if (
                            ((X = e.unstable_now()), typeof O == "function")
                          ) {
                            (v.callback = O), B(X), (ue = !0);
                            break t;
                          }
                          v === a(h) && s(h), B(X);
                        } else s(h);
                        v = a(h);
                      }
                      if (v !== null) ue = !0;
                      else {
                        var G = a(m);
                        G !== null && dt(P, G.startTime - X), (ue = !1);
                      }
                    }
                    break e;
                  } finally {
                    (v = null), (S = se), (_ = !1);
                  }
                  ue = void 0;
                }
              } finally {
                ue ? ye() : (N = !1);
              }
            }
          }
          var ye;
          if (typeof L == "function")
            ye = function () {
              L(oe);
            };
          else if (typeof MessageChannel < "u") {
            var et = new MessageChannel(),
              ze = et.port2;
            (et.port1.onmessage = oe),
              (ye = function () {
                ze.postMessage(null);
              });
          } else
            ye = function () {
              A(oe, 0);
            };
          function at() {
            N || ((N = !0), ye());
          }
          function dt(X, ue) {
            F = A(function () {
              X(e.unstable_now());
            }, ue);
          }
          (e.unstable_IdlePriority = 5),
            (e.unstable_ImmediatePriority = 1),
            (e.unstable_LowPriority = 4),
            (e.unstable_NormalPriority = 3),
            (e.unstable_Profiling = null),
            (e.unstable_UserBlockingPriority = 2),
            (e.unstable_cancelCallback = function (X) {
              X.callback = null;
            }),
            (e.unstable_continueExecution = function () {
              w || _ || ((w = !0), at());
            }),
            (e.unstable_forceFrameRate = function (X) {
              0 > X || 125 < X
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (K = 0 < X ? Math.floor(1e3 / X) : 5);
            }),
            (e.unstable_getCurrentPriorityLevel = function () {
              return S;
            }),
            (e.unstable_getFirstCallbackNode = function () {
              return a(h);
            }),
            (e.unstable_next = function (X) {
              switch (S) {
                case 1:
                case 2:
                case 3:
                  var ue = 3;
                  break;
                default:
                  ue = S;
              }
              var se = S;
              S = ue;
              try {
                return X();
              } finally {
                S = se;
              }
            }),
            (e.unstable_pauseExecution = function () {}),
            (e.unstable_requestPaint = function () {}),
            (e.unstable_runWithPriority = function (X, ue) {
              switch (X) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  X = 3;
              }
              var se = S;
              S = X;
              try {
                return ue();
              } finally {
                S = se;
              }
            }),
            (e.unstable_scheduleCallback = function (X, ue, se) {
              var De = e.unstable_now();
              switch (
                (typeof se == "object" && se !== null
                  ? ((se = se.delay),
                    (se = typeof se == "number" && 0 < se ? De + se : De))
                  : (se = De),
                X)
              ) {
                case 1:
                  var O = -1;
                  break;
                case 2:
                  O = 250;
                  break;
                case 5:
                  O = 1073741823;
                  break;
                case 4:
                  O = 1e4;
                  break;
                default:
                  O = 5e3;
              }
              return (
                (O = se + O),
                (X = {
                  id: g++,
                  callback: ue,
                  priorityLevel: X,
                  startTime: se,
                  expirationTime: O,
                  sortIndex: -1,
                }),
                se > De
                  ? ((X.sortIndex = se),
                    n(m, X),
                    a(h) === null &&
                      X === a(m) &&
                      (M ? (T(F), (F = -1)) : (M = !0), dt(P, se - De)))
                  : ((X.sortIndex = O), n(h, X), w || _ || ((w = !0), at())),
                X
              );
            }),
            (e.unstable_shouldYield = Y),
            (e.unstable_wrapCallback = function (X) {
              var ue = S;
              return function () {
                var se = S;
                S = ue;
                try {
                  return X.apply(this, arguments);
                } finally {
                  S = se;
                }
              };
            });
        })(sd)),
      sd
    );
  }
  var w0;
  function ix() {
    return w0 || ((w0 = 1), (id.exports = ax())), id.exports;
  }
  var ld = { exports: {} },
    St = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var x0;
  function sx() {
    if (x0) return St;
    x0 = 1;
    var e = gu();
    function n(h) {
      var m = "https://react.dev/errors/" + h;
      if (1 < arguments.length) {
        m += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var g = 2; g < arguments.length; g++)
          m += "&args[]=" + encodeURIComponent(arguments[g]);
      }
      return (
        "Minified React error #" +
        h +
        "; visit " +
        m +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function a() {}
    var s = {
        d: {
          f: a,
          r: function () {
            throw Error(n(522));
          },
          D: a,
          C: a,
          L: a,
          m: a,
          X: a,
          S: a,
          M: a,
        },
        p: 0,
        findDOMNode: null,
      },
      o = Symbol.for("react.portal");
    function c(h, m, g) {
      var v =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: o,
        key: v == null ? null : "" + v,
        children: h,
        containerInfo: m,
        implementation: g,
      };
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(h, m) {
      if (h === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return (
      (St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
      (St.createPortal = function (h, m) {
        var g =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
          throw Error(n(299));
        return c(h, m, null, g);
      }),
      (St.flushSync = function (h) {
        var m = f.T,
          g = s.p;
        try {
          if (((f.T = null), (s.p = 2), h)) return h();
        } finally {
          (f.T = m), (s.p = g), s.d.f();
        }
      }),
      (St.preconnect = function (h, m) {
        typeof h == "string" &&
          (m
            ? ((m = m.crossOrigin),
              (m =
                typeof m == "string"
                  ? m === "use-credentials"
                    ? m
                    : ""
                  : void 0))
            : (m = null),
          s.d.C(h, m));
      }),
      (St.prefetchDNS = function (h) {
        typeof h == "string" && s.d.D(h);
      }),
      (St.preinit = function (h, m) {
        if (typeof h == "string" && m && typeof m.as == "string") {
          var g = m.as,
            v = p(g, m.crossOrigin),
            S = typeof m.integrity == "string" ? m.integrity : void 0,
            _ = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
          g === "style"
            ? s.d.S(
                h,
                typeof m.precedence == "string" ? m.precedence : void 0,
                { crossOrigin: v, integrity: S, fetchPriority: _ }
              )
            : g === "script" &&
              s.d.X(h, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: _,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
        }
      }),
      (St.preinitModule = function (h, m) {
        if (typeof h == "string")
          if (typeof m == "object" && m !== null) {
            if (m.as == null || m.as === "script") {
              var g = p(m.as, m.crossOrigin);
              s.d.M(h, {
                crossOrigin: g,
                integrity:
                  typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
            }
          } else m == null && s.d.M(h);
      }),
      (St.preload = function (h, m) {
        if (
          typeof h == "string" &&
          typeof m == "object" &&
          m !== null &&
          typeof m.as == "string"
        ) {
          var g = m.as,
            v = p(g, m.crossOrigin);
          s.d.L(h, g, {
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            type: typeof m.type == "string" ? m.type : void 0,
            fetchPriority:
              typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
            referrerPolicy:
              typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
            imageSrcSet:
              typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
            imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
            media: typeof m.media == "string" ? m.media : void 0,
          });
        }
      }),
      (St.preloadModule = function (h, m) {
        if (typeof h == "string")
          if (m) {
            var g = p(m.as, m.crossOrigin);
            s.d.m(h, {
              as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            });
          } else s.d.m(h);
      }),
      (St.requestFormReset = function (h) {
        s.d.r(h);
      }),
      (St.unstable_batchedUpdates = function (h, m) {
        return h(m);
      }),
      (St.useFormState = function (h, m, g) {
        return f.H.useFormState(h, m, g);
      }),
      (St.useFormStatus = function () {
        return f.H.useHostTransitionStatus();
      }),
      (St.version = "19.0.0"),
      St
    );
  }
  var _0;
  function lx() {
    if (_0) return ld.exports;
    _0 = 1;
    function e() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (n) {
          console.error(n);
        }
    }
    return e(), (ld.exports = sx()), ld.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var T0;
  function ox() {
    if (T0) return Fs;
    T0 = 1;
    var e = ix(),
      n = gu(),
      a = lx();
    function s(t) {
      var r = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        r += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          r += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return (
        "Minified React error #" +
        t +
        "; visit " +
        r +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function o(t) {
      return !(
        !t ||
        (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      );
    }
    var c = Symbol.for("react.element"),
      f = Symbol.for("react.transitional.element"),
      p = Symbol.for("react.portal"),
      h = Symbol.for("react.fragment"),
      m = Symbol.for("react.strict_mode"),
      g = Symbol.for("react.profiler"),
      v = Symbol.for("react.provider"),
      S = Symbol.for("react.consumer"),
      _ = Symbol.for("react.context"),
      w = Symbol.for("react.forward_ref"),
      M = Symbol.for("react.suspense"),
      A = Symbol.for("react.suspense_list"),
      T = Symbol.for("react.memo"),
      L = Symbol.for("react.lazy"),
      B = Symbol.for("react.offscreen"),
      P = Symbol.for("react.memo_cache_sentinel"),
      N = Symbol.iterator;
    function F(t) {
      return t === null || typeof t != "object"
        ? null
        : ((t = (N && t[N]) || t["@@iterator"]),
          typeof t == "function" ? t : null);
    }
    var K = Symbol.for("react.client.reference");
    function ee(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === K ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case h:
          return "Fragment";
        case p:
          return "Portal";
        case g:
          return "Profiler";
        case m:
          return "StrictMode";
        case M:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return (t.displayName || "Context") + ".Provider";
          case S:
            return (t._context.displayName || "Context") + ".Consumer";
          case w:
            var r = t.render;
            return (
              (t = t.displayName),
              t ||
                ((t = r.displayName || r.name || ""),
                (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
              t
            );
          case T:
            return (
              (r = t.displayName || null), r !== null ? r : ee(t.type) || "Memo"
            );
          case L:
            (r = t._payload), (t = t._init);
            try {
              return ee(t(r));
            } catch {}
        }
      return null;
    }
    var Y = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      oe = Object.assign,
      ye,
      et;
    function ze(t) {
      if (ye === void 0)
        try {
          throw Error();
        } catch (i) {
          var r = i.stack.trim().match(/\n( *(at )?)/);
          (ye = (r && r[1]) || ""),
            (et =
              -1 <
              i.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < i.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
        }
      return (
        `
` +
        ye +
        t +
        et
      );
    }
    var at = !1;
    function dt(t, r) {
      if (!t || at) return "";
      at = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var l = {
          DetermineComponentFrameRoot: function () {
            try {
              if (r) {
                var I = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(I.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(I, []);
                  } catch (q) {
                    var k = q;
                  }
                  Reflect.construct(t, [], I);
                } else {
                  try {
                    I.call();
                  } catch (q) {
                    k = q;
                  }
                  t.call(I.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (q) {
                  k = q;
                }
                (I = t()) &&
                  typeof I.catch == "function" &&
                  I.catch(function () {});
              }
            } catch (q) {
              if (q && k && typeof q.stack == "string")
                return [q.stack, k.stack];
            }
            return [null, null];
          },
        };
        l.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        u &&
          u.configurable &&
          Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var d = l.DetermineComponentFrameRoot(),
          y = d[0],
          b = d[1];
        if (y && b) {
          var x = y.split(`
`),
            D = b.split(`
`);
          for (
            u = l = 0;
            l < x.length && !x[l].includes("DetermineComponentFrameRoot");

          )
            l++;
          for (
            ;
            u < D.length && !D[u].includes("DetermineComponentFrameRoot");

          )
            u++;
          if (l === x.length || u === D.length)
            for (
              l = x.length - 1, u = D.length - 1;
              1 <= l && 0 <= u && x[l] !== D[u];

            )
              u--;
          for (; 1 <= l && 0 <= u; l--, u--)
            if (x[l] !== D[u]) {
              if (l !== 1 || u !== 1)
                do
                  if ((l--, u--, 0 > u || x[l] !== D[u])) {
                    var H =
                      `
` + x[l].replace(" at new ", " at ");
                    return (
                      t.displayName &&
                        H.includes("<anonymous>") &&
                        (H = H.replace("<anonymous>", t.displayName)),
                      H
                    );
                  }
                while (1 <= l && 0 <= u);
              break;
            }
        }
      } finally {
        (at = !1), (Error.prepareStackTrace = i);
      }
      return (i = t ? t.displayName || t.name : "") ? ze(i) : "";
    }
    function X(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return ze(t.type);
        case 16:
          return ze("Lazy");
        case 13:
          return ze("Suspense");
        case 19:
          return ze("SuspenseList");
        case 0:
        case 15:
          return (t = dt(t.type, !1)), t;
        case 11:
          return (t = dt(t.type.render, !1)), t;
        case 1:
          return (t = dt(t.type, !0)), t;
        default:
          return "";
      }
    }
    function ue(t) {
      try {
        var r = "";
        do (r += X(t)), (t = t.return);
        while (t);
        return r;
      } catch (i) {
        return (
          `
Error generating stack: ` +
          i.message +
          `
` +
          i.stack
        );
      }
    }
    function se(t) {
      var r = t,
        i = t;
      if (t.alternate) for (; r.return; ) r = r.return;
      else {
        t = r;
        do (r = t), r.flags & 4098 && (i = r.return), (t = r.return);
        while (t);
      }
      return r.tag === 3 ? i : null;
    }
    function De(t) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          (r === null &&
            ((t = t.alternate), t !== null && (r = t.memoizedState)),
          r !== null)
        )
          return r.dehydrated;
      }
      return null;
    }
    function O(t) {
      if (se(t) !== t) throw Error(s(188));
    }
    function G(t) {
      var r = t.alternate;
      if (!r) {
        if (((r = se(t)), r === null)) throw Error(s(188));
        return r !== t ? null : t;
      }
      for (var i = t, l = r; ; ) {
        var u = i.return;
        if (u === null) break;
        var d = u.alternate;
        if (d === null) {
          if (((l = u.return), l !== null)) {
            i = l;
            continue;
          }
          break;
        }
        if (u.child === d.child) {
          for (d = u.child; d; ) {
            if (d === i) return O(u), t;
            if (d === l) return O(u), r;
            d = d.sibling;
          }
          throw Error(s(188));
        }
        if (i.return !== l.return) (i = u), (l = d);
        else {
          for (var y = !1, b = u.child; b; ) {
            if (b === i) {
              (y = !0), (i = u), (l = d);
              break;
            }
            if (b === l) {
              (y = !0), (l = u), (i = d);
              break;
            }
            b = b.sibling;
          }
          if (!y) {
            for (b = d.child; b; ) {
              if (b === i) {
                (y = !0), (i = d), (l = u);
                break;
              }
              if (b === l) {
                (y = !0), (l = d), (i = u);
                break;
              }
              b = b.sibling;
            }
            if (!y) throw Error(s(189));
          }
        }
        if (i.alternate !== l) throw Error(s(190));
      }
      if (i.tag !== 3) throw Error(s(188));
      return i.stateNode.current === i ? t : r;
    }
    function ne(t) {
      var r = t.tag;
      if (r === 5 || r === 26 || r === 27 || r === 6) return t;
      for (t = t.child; t !== null; ) {
        if (((r = ne(t)), r !== null)) return r;
        t = t.sibling;
      }
      return null;
    }
    var ae = Array.isArray,
      Q = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      he = { pending: !1, data: null, method: null, action: null },
      fe = [],
      tt = -1;
    function Te(t) {
      return { current: t };
    }
    function Fe(t) {
      0 > tt || ((t.current = fe[tt]), (fe[tt] = null), tt--);
    }
    function je(t, r) {
      tt++, (fe[tt] = t.current), (t.current = r);
    }
    var At = Te(null),
      Ir = Te(null),
      on = Te(null),
      ka = Te(null);
    function za(t, r) {
      switch ((je(on, r), je(Ir, t), je(At, null), (t = r.nodeType), t)) {
        case 9:
        case 11:
          r = (r = r.documentElement) && (r = r.namespaceURI) ? Pg(r) : 0;
          break;
        default:
          if (
            ((t = t === 8 ? r.parentNode : r),
            (r = t.tagName),
            (t = t.namespaceURI))
          )
            (t = Pg(t)), (r = Yg(t, r));
          else
            switch (r) {
              case "svg":
                r = 1;
                break;
              case "math":
                r = 2;
                break;
              default:
                r = 0;
            }
      }
      Fe(At), je(At, r);
    }
    function sr() {
      Fe(At), Fe(Ir), Fe(on);
    }
    function Fi(t) {
      t.memoizedState !== null && je(ka, t);
      var r = At.current,
        i = Yg(r, t.type);
      r !== i && (je(Ir, t), je(At, i));
    }
    function $a(t) {
      Ir.current === t && (Fe(At), Fe(Ir)),
        ka.current === t && (Fe(ka), (Ls._currentValue = he));
    }
    var Gr = Object.prototype.hasOwnProperty,
      Vi = e.unstable_scheduleCallback,
      Ii = e.unstable_cancelCallback,
      z = e.unstable_shouldYield,
      Z = e.unstable_requestPaint,
      J = e.unstable_now,
      ie = e.unstable_getCurrentPriorityLevel,
      pe = e.unstable_ImmediatePriority,
      Ae = e.unstable_UserBlockingPriority,
      Xe = e.unstable_NormalPriority,
      un = e.unstable_LowPriority,
      qa = e.unstable_IdlePriority,
      Gi = e.log,
      Ku = e.unstable_setDisableYieldValue,
      lr = null,
      xt = null;
    function LE(t) {
      if (xt && typeof xt.onCommitFiberRoot == "function")
        try {
          xt.onCommitFiberRoot(lr, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
    }
    function or(t) {
      if (
        (typeof Gi == "function" && Ku(t),
        xt && typeof xt.setStrictMode == "function")
      )
        try {
          xt.setStrictMode(lr, t);
        } catch {}
    }
    var jt = Math.clz32 ? Math.clz32 : $E,
      kE = Math.log,
      zE = Math.LN2;
    function $E(t) {
      return (t >>>= 0), t === 0 ? 32 : (31 - ((kE(t) / zE) | 0)) | 0;
    }
    var Sl = 128,
      El = 4194304;
    function Pr(t) {
      var r = t & 42;
      if (r !== 0) return r;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function wl(t, r) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var l = 0,
        u = t.suspendedLanes,
        d = t.pingedLanes,
        y = t.warmLanes;
      t = t.finishedLanes !== 0;
      var b = i & 134217727;
      return (
        b !== 0
          ? ((i = b & ~u),
            i !== 0
              ? (l = Pr(i))
              : ((d &= b),
                d !== 0
                  ? (l = Pr(d))
                  : t || ((y = b & ~y), y !== 0 && (l = Pr(y)))))
          : ((b = i & ~u),
            b !== 0
              ? (l = Pr(b))
              : d !== 0
              ? (l = Pr(d))
              : t || ((y = i & ~y), y !== 0 && (l = Pr(y)))),
        l === 0
          ? 0
          : r !== 0 &&
            r !== l &&
            !(r & u) &&
            ((u = l & -l),
            (y = r & -r),
            u >= y || (u === 32 && (y & 4194176) !== 0))
          ? r
          : l
      );
    }
    function Pi(t, r) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
    }
    function qE(t, r) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
          return r + 250;
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return r + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function zp() {
      var t = Sl;
      return (Sl <<= 1), !(Sl & 4194176) && (Sl = 128), t;
    }
    function $p() {
      var t = El;
      return (El <<= 1), !(El & 62914560) && (El = 4194304), t;
    }
    function Xu(t) {
      for (var r = [], i = 0; 31 > i; i++) r.push(t);
      return r;
    }
    function Yi(t, r) {
      (t.pendingLanes |= r),
        r !== 268435456 &&
          ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
    }
    function HE(t, r, i, l, u, d) {
      var y = t.pendingLanes;
      (t.pendingLanes = i),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.warmLanes = 0),
        (t.expiredLanes &= i),
        (t.entangledLanes &= i),
        (t.errorRecoveryDisabledLanes &= i),
        (t.shellSuspendCounter = 0);
      var b = t.entanglements,
        x = t.expirationTimes,
        D = t.hiddenUpdates;
      for (i = y & ~i; 0 < i; ) {
        var H = 31 - jt(i),
          I = 1 << H;
        (b[H] = 0), (x[H] = -1);
        var k = D[H];
        if (k !== null)
          for (D[H] = null, H = 0; H < k.length; H++) {
            var q = k[H];
            q !== null && (q.lane &= -536870913);
          }
        i &= ~I;
      }
      l !== 0 && qp(t, l, 0),
        d !== 0 &&
          u === 0 &&
          t.tag !== 0 &&
          (t.suspendedLanes |= d & ~(y & ~r));
    }
    function qp(t, r, i) {
      (t.pendingLanes |= r), (t.suspendedLanes &= ~r);
      var l = 31 - jt(r);
      (t.entangledLanes |= r),
        (t.entanglements[l] = t.entanglements[l] | 1073741824 | (i & 4194218));
    }
    function Hp(t, r) {
      var i = (t.entangledLanes |= r);
      for (t = t.entanglements; i; ) {
        var l = 31 - jt(i),
          u = 1 << l;
        (u & r) | (t[l] & r) && (t[l] |= r), (i &= ~u);
      }
    }
    function Fp(t) {
      return (
        (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function Vp() {
      var t = Q.p;
      return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : f0(t.type));
    }
    function FE(t, r) {
      var i = Q.p;
      try {
        return (Q.p = t), r();
      } finally {
        Q.p = i;
      }
    }
    var ur = Math.random().toString(36).slice(2),
      vt = "__reactFiber$" + ur,
      Ot = "__reactProps$" + ur,
      Ha = "__reactContainer$" + ur,
      Qu = "__reactEvents$" + ur,
      VE = "__reactListeners$" + ur,
      IE = "__reactHandles$" + ur,
      Ip = "__reactResources$" + ur,
      Ki = "__reactMarker$" + ur;
    function Zu(t) {
      delete t[vt], delete t[Ot], delete t[Qu], delete t[VE], delete t[IE];
    }
    function Yr(t) {
      var r = t[vt];
      if (r) return r;
      for (var i = t.parentNode; i; ) {
        if ((r = i[Ha] || i[vt])) {
          if (
            ((i = r.alternate),
            r.child !== null || (i !== null && i.child !== null))
          )
            for (t = Qg(t); t !== null; ) {
              if ((i = t[vt])) return i;
              t = Qg(t);
            }
          return r;
        }
        (t = i), (i = t.parentNode);
      }
      return null;
    }
    function Fa(t) {
      if ((t = t[vt] || t[Ha])) {
        var r = t.tag;
        if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
          return t;
      }
      return null;
    }
    function Xi(t) {
      var r = t.tag;
      if (r === 5 || r === 26 || r === 27 || r === 6) return t.stateNode;
      throw Error(s(33));
    }
    function Va(t) {
      var r = t[Ip];
      return (
        r ||
          (r = t[Ip] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        r
      );
    }
    function it(t) {
      t[Ki] = !0;
    }
    var Gp = new Set(),
      Pp = {};
    function Kr(t, r) {
      Ia(t, r), Ia(t + "Capture", r);
    }
    function Ia(t, r) {
      for (Pp[t] = r, t = 0; t < r.length; t++) Gp.add(r[t]);
    }
    var Nn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      GE = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
      ),
      Yp = {},
      Kp = {};
    function PE(t) {
      return Gr.call(Kp, t)
        ? !0
        : Gr.call(Yp, t)
        ? !1
        : GE.test(t)
        ? (Kp[t] = !0)
        : ((Yp[t] = !0), !1);
    }
    function xl(t, r, i) {
      if (PE(r))
        if (i === null) t.removeAttribute(r);
        else {
          switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(r);
              return;
            case "boolean":
              var l = r.toLowerCase().slice(0, 5);
              if (l !== "data-" && l !== "aria-") {
                t.removeAttribute(r);
                return;
              }
          }
          t.setAttribute(r, "" + i);
        }
    }
    function _l(t, r, i) {
      if (i === null) t.removeAttribute(r);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(r);
            return;
        }
        t.setAttribute(r, "" + i);
      }
    }
    function Mn(t, r, i, l) {
      if (l === null) t.removeAttribute(i);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(i);
            return;
        }
        t.setAttributeNS(r, i, "" + l);
      }
    }
    function Pt(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Xp(t) {
      var r = t.type;
      return (
        (t = t.nodeName) &&
        t.toLowerCase() === "input" &&
        (r === "checkbox" || r === "radio")
      );
    }
    function YE(t) {
      var r = Xp(t) ? "checked" : "value",
        i = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
        l = "" + t[r];
      if (
        !t.hasOwnProperty(r) &&
        typeof i < "u" &&
        typeof i.get == "function" &&
        typeof i.set == "function"
      ) {
        var u = i.get,
          d = i.set;
        return (
          Object.defineProperty(t, r, {
            configurable: !0,
            get: function () {
              return u.call(this);
            },
            set: function (y) {
              (l = "" + y), d.call(this, y);
            },
          }),
          Object.defineProperty(t, r, { enumerable: i.enumerable }),
          {
            getValue: function () {
              return l;
            },
            setValue: function (y) {
              l = "" + y;
            },
            stopTracking: function () {
              (t._valueTracker = null), delete t[r];
            },
          }
        );
      }
    }
    function Tl(t) {
      t._valueTracker || (t._valueTracker = YE(t));
    }
    function Qp(t) {
      if (!t) return !1;
      var r = t._valueTracker;
      if (!r) return !0;
      var i = r.getValue(),
        l = "";
      return (
        t && (l = Xp(t) ? (t.checked ? "true" : "false") : t.value),
        (t = l),
        t !== i ? (r.setValue(t), !0) : !1
      );
    }
    function Al(t) {
      if (
        ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var KE = /[\n"\\]/g;
    function Yt(t) {
      return t.replace(KE, function (r) {
        return "\\" + r.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ju(t, r, i, l, u, d, y, b) {
      (t.name = ""),
        y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean"
          ? (t.type = y)
          : t.removeAttribute("type"),
        r != null
          ? y === "number"
            ? ((r === 0 && t.value === "") || t.value != r) &&
              (t.value = "" + Pt(r))
            : t.value !== "" + Pt(r) && (t.value = "" + Pt(r))
          : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
        r != null
          ? Wu(t, y, Pt(r))
          : i != null
          ? Wu(t, y, Pt(i))
          : l != null && t.removeAttribute("value"),
        u == null && d != null && (t.defaultChecked = !!d),
        u != null &&
          (t.checked = u && typeof u != "function" && typeof u != "symbol"),
        b != null &&
        typeof b != "function" &&
        typeof b != "symbol" &&
        typeof b != "boolean"
          ? (t.name = "" + Pt(b))
          : t.removeAttribute("name");
    }
    function Zp(t, r, i, l, u, d, y, b) {
      if (
        (d != null &&
          typeof d != "function" &&
          typeof d != "symbol" &&
          typeof d != "boolean" &&
          (t.type = d),
        r != null || i != null)
      ) {
        if (!((d !== "submit" && d !== "reset") || r != null)) return;
        (i = i != null ? "" + Pt(i) : ""),
          (r = r != null ? "" + Pt(r) : i),
          b || r === t.value || (t.value = r),
          (t.defaultValue = r);
      }
      (l = l ?? u),
        (l = typeof l != "function" && typeof l != "symbol" && !!l),
        (t.checked = b ? t.checked : !!l),
        (t.defaultChecked = !!l),
        y != null &&
          typeof y != "function" &&
          typeof y != "symbol" &&
          typeof y != "boolean" &&
          (t.name = y);
    }
    function Wu(t, r, i) {
      (r === "number" && Al(t.ownerDocument) === t) ||
        t.defaultValue === "" + i ||
        (t.defaultValue = "" + i);
    }
    function Ga(t, r, i, l) {
      if (((t = t.options), r)) {
        r = {};
        for (var u = 0; u < i.length; u++) r["$" + i[u]] = !0;
        for (i = 0; i < t.length; i++)
          (u = r.hasOwnProperty("$" + t[i].value)),
            t[i].selected !== u && (t[i].selected = u),
            u && l && (t[i].defaultSelected = !0);
      } else {
        for (i = "" + Pt(i), r = null, u = 0; u < t.length; u++) {
          if (t[u].value === i) {
            (t[u].selected = !0), l && (t[u].defaultSelected = !0);
            return;
          }
          r !== null || t[u].disabled || (r = t[u]);
        }
        r !== null && (r.selected = !0);
      }
    }
    function Jp(t, r, i) {
      if (
        r != null &&
        ((r = "" + Pt(r)), r !== t.value && (t.value = r), i == null)
      ) {
        t.defaultValue !== r && (t.defaultValue = r);
        return;
      }
      t.defaultValue = i != null ? "" + Pt(i) : "";
    }
    function Wp(t, r, i, l) {
      if (r == null) {
        if (l != null) {
          if (i != null) throw Error(s(92));
          if (ae(l)) {
            if (1 < l.length) throw Error(s(93));
            l = l[0];
          }
          i = l;
        }
        i == null && (i = ""), (r = i);
      }
      (i = Pt(r)),
        (t.defaultValue = i),
        (l = t.textContent),
        l === i && l !== "" && l !== null && (t.value = l);
    }
    function Pa(t, r) {
      if (r) {
        var i = t.firstChild;
        if (i && i === t.lastChild && i.nodeType === 3) {
          i.nodeValue = r;
          return;
        }
      }
      t.textContent = r;
    }
    var XE = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function em(t, r, i) {
      var l = r.indexOf("--") === 0;
      i == null || typeof i == "boolean" || i === ""
        ? l
          ? t.setProperty(r, "")
          : r === "float"
          ? (t.cssFloat = "")
          : (t[r] = "")
        : l
        ? t.setProperty(r, i)
        : typeof i != "number" || i === 0 || XE.has(r)
        ? r === "float"
          ? (t.cssFloat = i)
          : (t[r] = ("" + i).trim())
        : (t[r] = i + "px");
    }
    function tm(t, r, i) {
      if (r != null && typeof r != "object") throw Error(s(62));
      if (((t = t.style), i != null)) {
        for (var l in i)
          !i.hasOwnProperty(l) ||
            (r != null && r.hasOwnProperty(l)) ||
            (l.indexOf("--") === 0
              ? t.setProperty(l, "")
              : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
        for (var u in r)
          (l = r[u]), r.hasOwnProperty(u) && i[u] !== l && em(t, u, l);
      } else for (var d in r) r.hasOwnProperty(d) && em(t, d, r[d]);
    }
    function ec(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var QE = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      ZE =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ol(t) {
      return ZE.test("" + t)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : t;
    }
    var tc = null;
    function nc(t) {
      return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
      );
    }
    var Ya = null,
      Ka = null;
    function nm(t) {
      var r = Fa(t);
      if (r && (t = r.stateNode)) {
        var i = t[Ot] || null;
        e: switch (((t = r.stateNode), r.type)) {
          case "input":
            if (
              (Ju(
                t,
                i.value,
                i.defaultValue,
                i.defaultValue,
                i.checked,
                i.defaultChecked,
                i.type,
                i.name
              ),
              (r = i.name),
              i.type === "radio" && r != null)
            ) {
              for (i = t; i.parentNode; ) i = i.parentNode;
              for (
                i = i.querySelectorAll(
                  'input[name="' + Yt("" + r) + '"][type="radio"]'
                ),
                  r = 0;
                r < i.length;
                r++
              ) {
                var l = i[r];
                if (l !== t && l.form === t.form) {
                  var u = l[Ot] || null;
                  if (!u) throw Error(s(90));
                  Ju(
                    l,
                    u.value,
                    u.defaultValue,
                    u.defaultValue,
                    u.checked,
                    u.defaultChecked,
                    u.type,
                    u.name
                  );
                }
              }
              for (r = 0; r < i.length; r++)
                (l = i[r]), l.form === t.form && Qp(l);
            }
            break e;
          case "textarea":
            Jp(t, i.value, i.defaultValue);
            break e;
          case "select":
            (r = i.value), r != null && Ga(t, !!i.multiple, r, !1);
        }
      }
    }
    var rc = !1;
    function rm(t, r, i) {
      if (rc) return t(r, i);
      rc = !0;
      try {
        var l = t(r);
        return l;
      } finally {
        if (
          ((rc = !1),
          (Ya !== null || Ka !== null) &&
            (co(), Ya && ((r = Ya), (t = Ka), (Ka = Ya = null), nm(r), t)))
        )
          for (r = 0; r < t.length; r++) nm(t[r]);
      }
    }
    function Qi(t, r) {
      var i = t.stateNode;
      if (i === null) return null;
      var l = i[Ot] || null;
      if (l === null) return null;
      i = l[r];
      e: switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) ||
            ((t = t.type),
            (l = !(
              t === "button" ||
              t === "input" ||
              t === "select" ||
              t === "textarea"
            ))),
            (t = !l);
          break e;
        default:
          t = !1;
      }
      if (t) return null;
      if (i && typeof i != "function") throw Error(s(231, r, typeof i));
      return i;
    }
    var ac = !1;
    if (Nn)
      try {
        var Zi = {};
        Object.defineProperty(Zi, "passive", {
          get: function () {
            ac = !0;
          },
        }),
          window.addEventListener("test", Zi, Zi),
          window.removeEventListener("test", Zi, Zi);
      } catch {
        ac = !1;
      }
    var cr = null,
      ic = null,
      Rl = null;
    function am() {
      if (Rl) return Rl;
      var t,
        r = ic,
        i = r.length,
        l,
        u = "value" in cr ? cr.value : cr.textContent,
        d = u.length;
      for (t = 0; t < i && r[t] === u[t]; t++);
      var y = i - t;
      for (l = 1; l <= y && r[i - l] === u[d - l]; l++);
      return (Rl = u.slice(t, 1 < l ? 1 - l : void 0));
    }
    function Cl(t) {
      var r = t.keyCode;
      return (
        "charCode" in t
          ? ((t = t.charCode), t === 0 && r === 13 && (t = 13))
          : (t = r),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
      );
    }
    function Dl() {
      return !0;
    }
    function im() {
      return !1;
    }
    function Rt(t) {
      function r(i, l, u, d, y) {
        (this._reactName = i),
          (this._targetInst = u),
          (this.type = l),
          (this.nativeEvent = d),
          (this.target = y),
          (this.currentTarget = null);
        for (var b in t)
          t.hasOwnProperty(b) && ((i = t[b]), (this[b] = i ? i(d) : d[b]));
        return (
          (this.isDefaultPrevented = (
            d.defaultPrevented != null
              ? d.defaultPrevented
              : d.returnValue === !1
          )
            ? Dl
            : im),
          (this.isPropagationStopped = im),
          this
        );
      }
      return (
        oe(r.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var i = this.nativeEvent;
            i &&
              (i.preventDefault
                ? i.preventDefault()
                : typeof i.returnValue != "unknown" && (i.returnValue = !1),
              (this.isDefaultPrevented = Dl));
          },
          stopPropagation: function () {
            var i = this.nativeEvent;
            i &&
              (i.stopPropagation
                ? i.stopPropagation()
                : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
              (this.isPropagationStopped = Dl));
          },
          persist: function () {},
          isPersistent: Dl,
        }),
        r
      );
    }
    var Xr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Nl = Rt(Xr),
      Ji = oe({}, Xr, { view: 0, detail: 0 }),
      JE = Rt(Ji),
      sc,
      lc,
      Wi,
      Ml = oe({}, Ji, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: uc,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
          return t.relatedTarget === void 0
            ? t.fromElement === t.srcElement
              ? t.toElement
              : t.fromElement
            : t.relatedTarget;
        },
        movementX: function (t) {
          return "movementX" in t
            ? t.movementX
            : (t !== Wi &&
                (Wi && t.type === "mousemove"
                  ? ((sc = t.screenX - Wi.screenX),
                    (lc = t.screenY - Wi.screenY))
                  : (lc = sc = 0),
                (Wi = t)),
              sc);
        },
        movementY: function (t) {
          return "movementY" in t ? t.movementY : lc;
        },
      }),
      sm = Rt(Ml),
      WE = oe({}, Ml, { dataTransfer: 0 }),
      e2 = Rt(WE),
      t2 = oe({}, Ji, { relatedTarget: 0 }),
      oc = Rt(t2),
      n2 = oe({}, Xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      r2 = Rt(n2),
      a2 = oe({}, Xr, {
        clipboardData: function (t) {
          return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
      }),
      i2 = Rt(a2),
      s2 = oe({}, Xr, { data: 0 }),
      lm = Rt(s2),
      l2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      o2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      u2 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function c2(t) {
      var r = this.nativeEvent;
      return r.getModifierState
        ? r.getModifierState(t)
        : (t = u2[t])
        ? !!r[t]
        : !1;
    }
    function uc() {
      return c2;
    }
    var f2 = oe({}, Ji, {
        key: function (t) {
          if (t.key) {
            var r = l2[t.key] || t.key;
            if (r !== "Unidentified") return r;
          }
          return t.type === "keypress"
            ? ((t = Cl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
            : t.type === "keydown" || t.type === "keyup"
            ? o2[t.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: uc,
        charCode: function (t) {
          return t.type === "keypress" ? Cl(t) : 0;
        },
        keyCode: function (t) {
          return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
        which: function (t) {
          return t.type === "keypress"
            ? Cl(t)
            : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
        },
      }),
      d2 = Rt(f2),
      h2 = oe({}, Ml, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      om = Rt(h2),
      p2 = oe({}, Ji, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: uc,
      }),
      m2 = Rt(p2),
      y2 = oe({}, Xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      g2 = Rt(y2),
      v2 = oe({}, Ml, {
        deltaX: function (t) {
          return "deltaX" in t
            ? t.deltaX
            : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t
            ? t.deltaY
            : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      b2 = Rt(v2),
      S2 = oe({}, Xr, { newState: 0, oldState: 0 }),
      E2 = Rt(S2),
      w2 = [9, 13, 27, 32],
      cc = Nn && "CompositionEvent" in window,
      es = null;
    Nn && "documentMode" in document && (es = document.documentMode);
    var x2 = Nn && "TextEvent" in window && !es,
      um = Nn && (!cc || (es && 8 < es && 11 >= es)),
      cm = " ",
      fm = !1;
    function dm(t, r) {
      switch (t) {
        case "keyup":
          return w2.indexOf(r.keyCode) !== -1;
        case "keydown":
          return r.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hm(t) {
      return (
        (t = t.detail), typeof t == "object" && "data" in t ? t.data : null
      );
    }
    var Xa = !1;
    function _2(t, r) {
      switch (t) {
        case "compositionend":
          return hm(r);
        case "keypress":
          return r.which !== 32 ? null : ((fm = !0), cm);
        case "textInput":
          return (t = r.data), t === cm && fm ? null : t;
        default:
          return null;
      }
    }
    function T2(t, r) {
      if (Xa)
        return t === "compositionend" || (!cc && dm(t, r))
          ? ((t = am()), (Rl = ic = cr = null), (Xa = !1), t)
          : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(r.ctrlKey || r.altKey || r.metaKey) ||
            (r.ctrlKey && r.altKey)
          ) {
            if (r.char && 1 < r.char.length) return r.char;
            if (r.which) return String.fromCharCode(r.which);
          }
          return null;
        case "compositionend":
          return um && r.locale !== "ko" ? null : r.data;
        default:
          return null;
      }
    }
    var A2 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function pm(t) {
      var r = t && t.nodeName && t.nodeName.toLowerCase();
      return r === "input" ? !!A2[t.type] : r === "textarea";
    }
    function mm(t, r, i, l) {
      Ya ? (Ka ? Ka.push(l) : (Ka = [l])) : (Ya = l),
        (r = yo(r, "onChange")),
        0 < r.length &&
          ((i = new Nl("onChange", "change", null, i, l)),
          t.push({ event: i, listeners: r }));
    }
    var ts = null,
      ns = null;
    function O2(t) {
      Hg(t, 0);
    }
    function jl(t) {
      var r = Xi(t);
      if (Qp(r)) return t;
    }
    function ym(t, r) {
      if (t === "change") return r;
    }
    var gm = !1;
    if (Nn) {
      var fc;
      if (Nn) {
        var dc = "oninput" in document;
        if (!dc) {
          var vm = document.createElement("div");
          vm.setAttribute("oninput", "return;"),
            (dc = typeof vm.oninput == "function");
        }
        fc = dc;
      } else fc = !1;
      gm = fc && (!document.documentMode || 9 < document.documentMode);
    }
    function bm() {
      ts && (ts.detachEvent("onpropertychange", Sm), (ns = ts = null));
    }
    function Sm(t) {
      if (t.propertyName === "value" && jl(ns)) {
        var r = [];
        mm(r, ns, t, nc(t)), rm(O2, r);
      }
    }
    function R2(t, r, i) {
      t === "focusin"
        ? (bm(), (ts = r), (ns = i), ts.attachEvent("onpropertychange", Sm))
        : t === "focusout" && bm();
    }
    function C2(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return jl(ns);
    }
    function D2(t, r) {
      if (t === "click") return jl(r);
    }
    function N2(t, r) {
      if (t === "input" || t === "change") return jl(r);
    }
    function M2(t, r) {
      return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
    }
    var Bt = typeof Object.is == "function" ? Object.is : M2;
    function rs(t, r) {
      if (Bt(t, r)) return !0;
      if (
        typeof t != "object" ||
        t === null ||
        typeof r != "object" ||
        r === null
      )
        return !1;
      var i = Object.keys(t),
        l = Object.keys(r);
      if (i.length !== l.length) return !1;
      for (l = 0; l < i.length; l++) {
        var u = i[l];
        if (!Gr.call(r, u) || !Bt(t[u], r[u])) return !1;
      }
      return !0;
    }
    function Em(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function wm(t, r) {
      var i = Em(t);
      t = 0;
      for (var l; i; ) {
        if (i.nodeType === 3) {
          if (((l = t + i.textContent.length), t <= r && l >= r))
            return { node: i, offset: r - t };
          t = l;
        }
        e: {
          for (; i; ) {
            if (i.nextSibling) {
              i = i.nextSibling;
              break e;
            }
            i = i.parentNode;
          }
          i = void 0;
        }
        i = Em(i);
      }
    }
    function xm(t, r) {
      return t && r
        ? t === r
          ? !0
          : t && t.nodeType === 3
          ? !1
          : r && r.nodeType === 3
          ? xm(t, r.parentNode)
          : "contains" in t
          ? t.contains(r)
          : t.compareDocumentPosition
          ? !!(t.compareDocumentPosition(r) & 16)
          : !1
        : !1;
    }
    function _m(t) {
      t =
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
          ? t.ownerDocument.defaultView
          : window;
      for (var r = Al(t.document); r instanceof t.HTMLIFrameElement; ) {
        try {
          var i = typeof r.contentWindow.location.href == "string";
        } catch {
          i = !1;
        }
        if (i) t = r.contentWindow;
        else break;
        r = Al(t.document);
      }
      return r;
    }
    function hc(t) {
      var r = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        r &&
        ((r === "input" &&
          (t.type === "text" ||
            t.type === "search" ||
            t.type === "tel" ||
            t.type === "url" ||
            t.type === "password")) ||
          r === "textarea" ||
          t.contentEditable === "true")
      );
    }
    function j2(t, r) {
      var i = _m(r);
      r = t.focusedElem;
      var l = t.selectionRange;
      if (
        i !== r &&
        r &&
        r.ownerDocument &&
        xm(r.ownerDocument.documentElement, r)
      ) {
        if (l !== null && hc(r)) {
          if (
            ((t = l.start),
            (i = l.end),
            i === void 0 && (i = t),
            "selectionStart" in r)
          )
            (r.selectionStart = t),
              (r.selectionEnd = Math.min(i, r.value.length));
          else if (
            ((i =
              ((t = r.ownerDocument || document) && t.defaultView) || window),
            i.getSelection)
          ) {
            i = i.getSelection();
            var u = r.textContent.length,
              d = Math.min(l.start, u);
            (l = l.end === void 0 ? d : Math.min(l.end, u)),
              !i.extend && d > l && ((u = l), (l = d), (d = u)),
              (u = wm(r, d));
            var y = wm(r, l);
            u &&
              y &&
              (i.rangeCount !== 1 ||
                i.anchorNode !== u.node ||
                i.anchorOffset !== u.offset ||
                i.focusNode !== y.node ||
                i.focusOffset !== y.offset) &&
              ((t = t.createRange()),
              t.setStart(u.node, u.offset),
              i.removeAllRanges(),
              d > l
                ? (i.addRange(t), i.extend(y.node, y.offset))
                : (t.setEnd(y.node, y.offset), i.addRange(t)));
          }
        }
        for (t = [], i = r; (i = i.parentNode); )
          i.nodeType === 1 &&
            t.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
        for (
          typeof r.focus == "function" && r.focus(), r = 0;
          r < t.length;
          r++
        )
          (i = t[r]),
            (i.element.scrollLeft = i.left),
            (i.element.scrollTop = i.top);
      }
    }
    var B2 = Nn && "documentMode" in document && 11 >= document.documentMode,
      Qa = null,
      pc = null,
      as = null,
      mc = !1;
    function Tm(t, r, i) {
      var l =
        i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
      mc ||
        Qa == null ||
        Qa !== Al(l) ||
        ((l = Qa),
        "selectionStart" in l && hc(l)
          ? (l = { start: l.selectionStart, end: l.selectionEnd })
          : ((l = (
              (l.ownerDocument && l.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (l = {
              anchorNode: l.anchorNode,
              anchorOffset: l.anchorOffset,
              focusNode: l.focusNode,
              focusOffset: l.focusOffset,
            })),
        (as && rs(as, l)) ||
          ((as = l),
          (l = yo(pc, "onSelect")),
          0 < l.length &&
            ((r = new Nl("onSelect", "select", null, r, i)),
            t.push({ event: r, listeners: l }),
            (r.target = Qa))));
    }
    function Qr(t, r) {
      var i = {};
      return (
        (i[t.toLowerCase()] = r.toLowerCase()),
        (i["Webkit" + t] = "webkit" + r),
        (i["Moz" + t] = "moz" + r),
        i
      );
    }
    var Za = {
        animationend: Qr("Animation", "AnimationEnd"),
        animationiteration: Qr("Animation", "AnimationIteration"),
        animationstart: Qr("Animation", "AnimationStart"),
        transitionrun: Qr("Transition", "TransitionRun"),
        transitionstart: Qr("Transition", "TransitionStart"),
        transitioncancel: Qr("Transition", "TransitionCancel"),
        transitionend: Qr("Transition", "TransitionEnd"),
      },
      yc = {},
      Am = {};
    Nn &&
      ((Am = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Za.animationend.animation,
        delete Za.animationiteration.animation,
        delete Za.animationstart.animation),
      "TransitionEvent" in window || delete Za.transitionend.transition);
    function Zr(t) {
      if (yc[t]) return yc[t];
      if (!Za[t]) return t;
      var r = Za[t],
        i;
      for (i in r) if (r.hasOwnProperty(i) && i in Am) return (yc[t] = r[i]);
      return t;
    }
    var Om = Zr("animationend"),
      Rm = Zr("animationiteration"),
      Cm = Zr("animationstart"),
      U2 = Zr("transitionrun"),
      L2 = Zr("transitionstart"),
      k2 = Zr("transitioncancel"),
      Dm = Zr("transitionend"),
      Nm = new Map(),
      Mm =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
          " "
        );
    function cn(t, r) {
      Nm.set(t, r), Kr(r, [t]);
    }
    var Kt = [],
      Ja = 0,
      gc = 0;
    function Bl() {
      for (var t = Ja, r = (gc = Ja = 0); r < t; ) {
        var i = Kt[r];
        Kt[r++] = null;
        var l = Kt[r];
        Kt[r++] = null;
        var u = Kt[r];
        Kt[r++] = null;
        var d = Kt[r];
        if (((Kt[r++] = null), l !== null && u !== null)) {
          var y = l.pending;
          y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)),
            (l.pending = u);
        }
        d !== 0 && jm(i, u, d);
      }
    }
    function Ul(t, r, i, l) {
      (Kt[Ja++] = t),
        (Kt[Ja++] = r),
        (Kt[Ja++] = i),
        (Kt[Ja++] = l),
        (gc |= l),
        (t.lanes |= l),
        (t = t.alternate),
        t !== null && (t.lanes |= l);
    }
    function vc(t, r, i, l) {
      return Ul(t, r, i, l), Ll(t);
    }
    function fr(t, r) {
      return Ul(t, null, null, r), Ll(t);
    }
    function jm(t, r, i) {
      t.lanes |= i;
      var l = t.alternate;
      l !== null && (l.lanes |= i);
      for (var u = !1, d = t.return; d !== null; )
        (d.childLanes |= i),
          (l = d.alternate),
          l !== null && (l.childLanes |= i),
          d.tag === 22 &&
            ((t = d.stateNode), t === null || t._visibility & 1 || (u = !0)),
          (t = d),
          (d = d.return);
      u &&
        r !== null &&
        t.tag === 3 &&
        ((d = t.stateNode),
        (u = 31 - jt(i)),
        (d = d.hiddenUpdates),
        (t = d[u]),
        t === null ? (d[u] = [r]) : t.push(r),
        (r.lane = i | 536870912));
    }
    function Ll(t) {
      if (50 < Cs) throw ((Cs = 0), (Tf = null), Error(s(185)));
      for (var r = t.return; r !== null; ) (t = r), (r = t.return);
      return t.tag === 3 ? t.stateNode : null;
    }
    var Wa = {},
      Bm = new WeakMap();
    function Xt(t, r) {
      if (typeof t == "object" && t !== null) {
        var i = Bm.get(t);
        return i !== void 0
          ? i
          : ((r = { value: t, source: r, stack: ue(r) }), Bm.set(t, r), r);
      }
      return { value: t, source: r, stack: ue(r) };
    }
    var ei = [],
      ti = 0,
      kl = null,
      zl = 0,
      Qt = [],
      Zt = 0,
      Jr = null,
      jn = 1,
      Bn = "";
    function Wr(t, r) {
      (ei[ti++] = zl), (ei[ti++] = kl), (kl = t), (zl = r);
    }
    function Um(t, r, i) {
      (Qt[Zt++] = jn), (Qt[Zt++] = Bn), (Qt[Zt++] = Jr), (Jr = t);
      var l = jn;
      t = Bn;
      var u = 32 - jt(l) - 1;
      (l &= ~(1 << u)), (i += 1);
      var d = 32 - jt(r) + u;
      if (30 < d) {
        var y = u - (u % 5);
        (d = (l & ((1 << y) - 1)).toString(32)),
          (l >>= y),
          (u -= y),
          (jn = (1 << (32 - jt(r) + u)) | (i << u) | l),
          (Bn = d + t);
      } else (jn = (1 << d) | (i << u) | l), (Bn = t);
    }
    function bc(t) {
      t.return !== null && (Wr(t, 1), Um(t, 1, 0));
    }
    function Sc(t) {
      for (; t === kl; )
        (kl = ei[--ti]), (ei[ti] = null), (zl = ei[--ti]), (ei[ti] = null);
      for (; t === Jr; )
        (Jr = Qt[--Zt]),
          (Qt[Zt] = null),
          (Bn = Qt[--Zt]),
          (Qt[Zt] = null),
          (jn = Qt[--Zt]),
          (Qt[Zt] = null);
    }
    var _t = null,
      ht = null,
      Oe = !1,
      fn = null,
      En = !1,
      Ec = Error(s(519));
    function ea(t) {
      var r = Error(s(418, ""));
      throw (ls(Xt(r, t)), Ec);
    }
    function Lm(t) {
      var r = t.stateNode,
        i = t.type,
        l = t.memoizedProps;
      switch (((r[vt] = t), (r[Ot] = l), i)) {
        case "dialog":
          Se("cancel", r), Se("close", r);
          break;
        case "iframe":
        case "object":
        case "embed":
          Se("load", r);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Ns.length; i++) Se(Ns[i], r);
          break;
        case "source":
          Se("error", r);
          break;
        case "img":
        case "image":
        case "link":
          Se("error", r), Se("load", r);
          break;
        case "details":
          Se("toggle", r);
          break;
        case "input":
          Se("invalid", r),
            Zp(
              r,
              l.value,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
              !0
            ),
            Tl(r);
          break;
        case "select":
          Se("invalid", r);
          break;
        case "textarea":
          Se("invalid", r), Wp(r, l.value, l.defaultValue, l.children), Tl(r);
      }
      (i = l.children),
        (typeof i != "string" &&
          typeof i != "number" &&
          typeof i != "bigint") ||
        r.textContent === "" + i ||
        l.suppressHydrationWarning === !0 ||
        Gg(r.textContent, i)
          ? (l.popover != null && (Se("beforetoggle", r), Se("toggle", r)),
            l.onScroll != null && Se("scroll", r),
            l.onScrollEnd != null && Se("scrollend", r),
            l.onClick != null && (r.onclick = go),
            (r = !0))
          : (r = !1),
        r || ea(t);
    }
    function km(t) {
      for (_t = t.return; _t; )
        switch (_t.tag) {
          case 3:
          case 27:
            En = !0;
            return;
          case 5:
          case 13:
            En = !1;
            return;
          default:
            _t = _t.return;
        }
    }
    function is(t) {
      if (t !== _t) return !1;
      if (!Oe) return km(t), (Oe = !0), !1;
      var r = !1,
        i;
      if (
        ((i = t.tag !== 3 && t.tag !== 27) &&
          ((i = t.tag === 5) &&
            ((i = t.type),
            (i =
              !(i !== "form" && i !== "button") ||
              Ff(t.type, t.memoizedProps))),
          (i = !i)),
        i && (r = !0),
        r && ht && ea(t),
        km(t),
        t.tag === 13)
      ) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(s(317));
        e: {
          for (t = t.nextSibling, r = 0; t; ) {
            if (t.nodeType === 8)
              if (((i = t.data), i === "/$")) {
                if (r === 0) {
                  ht = hn(t.nextSibling);
                  break e;
                }
                r--;
              } else (i !== "$" && i !== "$!" && i !== "$?") || r++;
            t = t.nextSibling;
          }
          ht = null;
        }
      } else ht = _t ? hn(t.stateNode.nextSibling) : null;
      return !0;
    }
    function ss() {
      (ht = _t = null), (Oe = !1);
    }
    function ls(t) {
      fn === null ? (fn = [t]) : fn.push(t);
    }
    var os = Error(s(460)),
      zm = Error(s(474)),
      wc = { then: function () {} };
    function $m(t) {
      return (t = t.status), t === "fulfilled" || t === "rejected";
    }
    function $l() {}
    function qm(t, r, i) {
      switch (
        ((i = t[i]),
        i === void 0 ? t.push(r) : i !== r && (r.then($l, $l), (r = i)),
        r.status)
      ) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw ((t = r.reason), t === os ? Error(s(483)) : t);
        default:
          if (typeof r.status == "string") r.then($l, $l);
          else {
            if (((t = Ue), t !== null && 100 < t.shellSuspendCounter))
              throw Error(s(482));
            (t = r),
              (t.status = "pending"),
              t.then(
                function (l) {
                  if (r.status === "pending") {
                    var u = r;
                    (u.status = "fulfilled"), (u.value = l);
                  }
                },
                function (l) {
                  if (r.status === "pending") {
                    var u = r;
                    (u.status = "rejected"), (u.reason = l);
                  }
                }
              );
          }
          switch (r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw ((t = r.reason), t === os ? Error(s(483)) : t);
          }
          throw ((us = r), os);
      }
    }
    var us = null;
    function Hm() {
      if (us === null) throw Error(s(459));
      var t = us;
      return (us = null), t;
    }
    var ni = null,
      cs = 0;
    function ql(t) {
      var r = cs;
      return (cs += 1), ni === null && (ni = []), qm(ni, t, r);
    }
    function fs(t, r) {
      (r = r.props.ref), (t.ref = r !== void 0 ? r : null);
    }
    function Hl(t, r) {
      throw r.$$typeof === c
        ? Error(s(525))
        : ((t = Object.prototype.toString.call(r)),
          Error(
            s(
              31,
              t === "[object Object]"
                ? "object with keys {" + Object.keys(r).join(", ") + "}"
                : t
            )
          ));
    }
    function Fm(t) {
      var r = t._init;
      return r(t._payload);
    }
    function Vm(t) {
      function r(j, C) {
        if (t) {
          var U = j.deletions;
          U === null ? ((j.deletions = [C]), (j.flags |= 16)) : U.push(C);
        }
      }
      function i(j, C) {
        if (!t) return null;
        for (; C !== null; ) r(j, C), (C = C.sibling);
        return null;
      }
      function l(j) {
        for (var C = new Map(); j !== null; )
          j.key !== null ? C.set(j.key, j) : C.set(j.index, j), (j = j.sibling);
        return C;
      }
      function u(j, C) {
        return (j = xr(j, C)), (j.index = 0), (j.sibling = null), j;
      }
      function d(j, C, U) {
        return (
          (j.index = U),
          t
            ? ((U = j.alternate),
              U !== null
                ? ((U = U.index), U < C ? ((j.flags |= 33554434), C) : U)
                : ((j.flags |= 33554434), C))
            : ((j.flags |= 1048576), C)
        );
      }
      function y(j) {
        return t && j.alternate === null && (j.flags |= 33554434), j;
      }
      function b(j, C, U, V) {
        return C === null || C.tag !== 6
          ? ((C = gf(U, j.mode, V)), (C.return = j), C)
          : ((C = u(C, U)), (C.return = j), C);
      }
      function x(j, C, U, V) {
        var W = U.type;
        return W === h
          ? H(j, C, U.props.children, V, U.key)
          : C !== null &&
            (C.elementType === W ||
              (typeof W == "object" &&
                W !== null &&
                W.$$typeof === L &&
                Fm(W) === C.type))
          ? ((C = u(C, U.props)), fs(C, U), (C.return = j), C)
          : ((C = io(U.type, U.key, U.props, null, j.mode, V)),
            fs(C, U),
            (C.return = j),
            C);
      }
      function D(j, C, U, V) {
        return C === null ||
          C.tag !== 4 ||
          C.stateNode.containerInfo !== U.containerInfo ||
          C.stateNode.implementation !== U.implementation
          ? ((C = vf(U, j.mode, V)), (C.return = j), C)
          : ((C = u(C, U.children || [])), (C.return = j), C);
      }
      function H(j, C, U, V, W) {
        return C === null || C.tag !== 7
          ? ((C = ca(U, j.mode, V, W)), (C.return = j), C)
          : ((C = u(C, U)), (C.return = j), C);
      }
      function I(j, C, U) {
        if (
          (typeof C == "string" && C !== "") ||
          typeof C == "number" ||
          typeof C == "bigint"
        )
          return (C = gf("" + C, j.mode, U)), (C.return = j), C;
        if (typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case f:
              return (
                (U = io(C.type, C.key, C.props, null, j.mode, U)),
                fs(U, C),
                (U.return = j),
                U
              );
            case p:
              return (C = vf(C, j.mode, U)), (C.return = j), C;
            case L:
              var V = C._init;
              return (C = V(C._payload)), I(j, C, U);
          }
          if (ae(C) || F(C))
            return (C = ca(C, j.mode, U, null)), (C.return = j), C;
          if (typeof C.then == "function") return I(j, ql(C), U);
          if (C.$$typeof === _) return I(j, no(j, C), U);
          Hl(j, C);
        }
        return null;
      }
      function k(j, C, U, V) {
        var W = C !== null ? C.key : null;
        if (
          (typeof U == "string" && U !== "") ||
          typeof U == "number" ||
          typeof U == "bigint"
        )
          return W !== null ? null : b(j, C, "" + U, V);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case f:
              return U.key === W ? x(j, C, U, V) : null;
            case p:
              return U.key === W ? D(j, C, U, V) : null;
            case L:
              return (W = U._init), (U = W(U._payload)), k(j, C, U, V);
          }
          if (ae(U) || F(U)) return W !== null ? null : H(j, C, U, V, null);
          if (typeof U.then == "function") return k(j, C, ql(U), V);
          if (U.$$typeof === _) return k(j, C, no(j, U), V);
          Hl(j, U);
        }
        return null;
      }
      function q(j, C, U, V, W) {
        if (
          (typeof V == "string" && V !== "") ||
          typeof V == "number" ||
          typeof V == "bigint"
        )
          return (j = j.get(U) || null), b(C, j, "" + V, W);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case f:
              return (
                (j = j.get(V.key === null ? U : V.key) || null), x(C, j, V, W)
              );
            case p:
              return (
                (j = j.get(V.key === null ? U : V.key) || null), D(C, j, V, W)
              );
            case L:
              var ve = V._init;
              return (V = ve(V._payload)), q(j, C, U, V, W);
          }
          if (ae(V) || F(V)) return (j = j.get(U) || null), H(C, j, V, W, null);
          if (typeof V.then == "function") return q(j, C, U, ql(V), W);
          if (V.$$typeof === _) return q(j, C, U, no(C, V), W);
          Hl(C, V);
        }
        return null;
      }
      function te(j, C, U, V) {
        for (
          var W = null, ve = null, re = C, le = (C = 0), ot = null;
          re !== null && le < U.length;
          le++
        ) {
          re.index > le ? ((ot = re), (re = null)) : (ot = re.sibling);
          var Re = k(j, re, U[le], V);
          if (Re === null) {
            re === null && (re = ot);
            break;
          }
          t && re && Re.alternate === null && r(j, re),
            (C = d(Re, C, le)),
            ve === null ? (W = Re) : (ve.sibling = Re),
            (ve = Re),
            (re = ot);
        }
        if (le === U.length) return i(j, re), Oe && Wr(j, le), W;
        if (re === null) {
          for (; le < U.length; le++)
            (re = I(j, U[le], V)),
              re !== null &&
                ((C = d(re, C, le)),
                ve === null ? (W = re) : (ve.sibling = re),
                (ve = re));
          return Oe && Wr(j, le), W;
        }
        for (re = l(re); le < U.length; le++)
          (ot = q(re, j, le, U[le], V)),
            ot !== null &&
              (t &&
                ot.alternate !== null &&
                re.delete(ot.key === null ? le : ot.key),
              (C = d(ot, C, le)),
              ve === null ? (W = ot) : (ve.sibling = ot),
              (ve = ot));
        return (
          t &&
            re.forEach(function (Dr) {
              return r(j, Dr);
            }),
          Oe && Wr(j, le),
          W
        );
      }
      function ce(j, C, U, V) {
        if (U == null) throw Error(s(151));
        for (
          var W = null,
            ve = null,
            re = C,
            le = (C = 0),
            ot = null,
            Re = U.next();
          re !== null && !Re.done;
          le++, Re = U.next()
        ) {
          re.index > le ? ((ot = re), (re = null)) : (ot = re.sibling);
          var Dr = k(j, re, Re.value, V);
          if (Dr === null) {
            re === null && (re = ot);
            break;
          }
          t && re && Dr.alternate === null && r(j, re),
            (C = d(Dr, C, le)),
            ve === null ? (W = Dr) : (ve.sibling = Dr),
            (ve = Dr),
            (re = ot);
        }
        if (Re.done) return i(j, re), Oe && Wr(j, le), W;
        if (re === null) {
          for (; !Re.done; le++, Re = U.next())
            (Re = I(j, Re.value, V)),
              Re !== null &&
                ((C = d(Re, C, le)),
                ve === null ? (W = Re) : (ve.sibling = Re),
                (ve = Re));
          return Oe && Wr(j, le), W;
        }
        for (re = l(re); !Re.done; le++, Re = U.next())
          (Re = q(re, j, le, Re.value, V)),
            Re !== null &&
              (t &&
                Re.alternate !== null &&
                re.delete(Re.key === null ? le : Re.key),
              (C = d(Re, C, le)),
              ve === null ? (W = Re) : (ve.sibling = Re),
              (ve = Re));
        return (
          t &&
            re.forEach(function (Zw) {
              return r(j, Zw);
            }),
          Oe && Wr(j, le),
          W
        );
      }
      function Ye(j, C, U, V) {
        if (
          (typeof U == "object" &&
            U !== null &&
            U.type === h &&
            U.key === null &&
            (U = U.props.children),
          typeof U == "object" && U !== null)
        ) {
          switch (U.$$typeof) {
            case f:
              e: {
                for (var W = U.key; C !== null; ) {
                  if (C.key === W) {
                    if (((W = U.type), W === h)) {
                      if (C.tag === 7) {
                        i(j, C.sibling),
                          (V = u(C, U.props.children)),
                          (V.return = j),
                          (j = V);
                        break e;
                      }
                    } else if (
                      C.elementType === W ||
                      (typeof W == "object" &&
                        W !== null &&
                        W.$$typeof === L &&
                        Fm(W) === C.type)
                    ) {
                      i(j, C.sibling),
                        (V = u(C, U.props)),
                        fs(V, U),
                        (V.return = j),
                        (j = V);
                      break e;
                    }
                    i(j, C);
                    break;
                  } else r(j, C);
                  C = C.sibling;
                }
                U.type === h
                  ? ((V = ca(U.props.children, j.mode, V, U.key)),
                    (V.return = j),
                    (j = V))
                  : ((V = io(U.type, U.key, U.props, null, j.mode, V)),
                    fs(V, U),
                    (V.return = j),
                    (j = V));
              }
              return y(j);
            case p:
              e: {
                for (W = U.key; C !== null; ) {
                  if (C.key === W)
                    if (
                      C.tag === 4 &&
                      C.stateNode.containerInfo === U.containerInfo &&
                      C.stateNode.implementation === U.implementation
                    ) {
                      i(j, C.sibling),
                        (V = u(C, U.children || [])),
                        (V.return = j),
                        (j = V);
                      break e;
                    } else {
                      i(j, C);
                      break;
                    }
                  else r(j, C);
                  C = C.sibling;
                }
                (V = vf(U, j.mode, V)), (V.return = j), (j = V);
              }
              return y(j);
            case L:
              return (W = U._init), (U = W(U._payload)), Ye(j, C, U, V);
          }
          if (ae(U)) return te(j, C, U, V);
          if (F(U)) {
            if (((W = F(U)), typeof W != "function")) throw Error(s(150));
            return (U = W.call(U)), ce(j, C, U, V);
          }
          if (typeof U.then == "function") return Ye(j, C, ql(U), V);
          if (U.$$typeof === _) return Ye(j, C, no(j, U), V);
          Hl(j, U);
        }
        return (typeof U == "string" && U !== "") ||
          typeof U == "number" ||
          typeof U == "bigint"
          ? ((U = "" + U),
            C !== null && C.tag === 6
              ? (i(j, C.sibling), (V = u(C, U)), (V.return = j), (j = V))
              : (i(j, C), (V = gf(U, j.mode, V)), (V.return = j), (j = V)),
            y(j))
          : i(j, C);
      }
      return function (j, C, U, V) {
        try {
          cs = 0;
          var W = Ye(j, C, U, V);
          return (ni = null), W;
        } catch (re) {
          if (re === os) throw re;
          var ve = tn(29, re, null, j.mode);
          return (ve.lanes = V), (ve.return = j), ve;
        } finally {
        }
      };
    }
    var ta = Vm(!0),
      Im = Vm(!1),
      ri = Te(null),
      Fl = Te(0);
    function Gm(t, r) {
      (t = Gn), je(Fl, t), je(ri, r), (Gn = t | r.baseLanes);
    }
    function xc() {
      je(Fl, Gn), je(ri, ri.current);
    }
    function _c() {
      (Gn = Fl.current), Fe(ri), Fe(Fl);
    }
    var Jt = Te(null),
      wn = null;
    function dr(t) {
      var r = t.alternate;
      je(nt, nt.current & 1),
        je(Jt, t),
        wn === null &&
          (r === null || ri.current !== null || r.memoizedState !== null) &&
          (wn = t);
    }
    function Pm(t) {
      if (t.tag === 22) {
        if ((je(nt, nt.current), je(Jt, t), wn === null)) {
          var r = t.alternate;
          r !== null && r.memoizedState !== null && (wn = t);
        }
      } else hr();
    }
    function hr() {
      je(nt, nt.current), je(Jt, Jt.current);
    }
    function Un(t) {
      Fe(Jt), wn === t && (wn = null), Fe(nt);
    }
    var nt = Te(0);
    function Vl(t) {
      for (var r = t; r !== null; ) {
        if (r.tag === 13) {
          var i = r.memoizedState;
          if (
            i !== null &&
            ((i = i.dehydrated),
            i === null || i.data === "$?" || i.data === "$!")
          )
            return r;
        } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
          if (r.flags & 128) return r;
        } else if (r.child !== null) {
          (r.child.return = r), (r = r.child);
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return null;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
      return null;
    }
    var z2 =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var t = [],
                r = (this.signal = {
                  aborted: !1,
                  addEventListener: function (i, l) {
                    t.push(l);
                  },
                });
              this.abort = function () {
                (r.aborted = !0),
                  t.forEach(function (i) {
                    return i();
                  });
              };
            },
      $2 = e.unstable_scheduleCallback,
      q2 = e.unstable_NormalPriority,
      rt = {
        $$typeof: _,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Tc() {
      return { controller: new z2(), data: new Map(), refCount: 0 };
    }
    function ds(t) {
      t.refCount--,
        t.refCount === 0 &&
          $2(q2, function () {
            t.controller.abort();
          });
    }
    var hs = null,
      Ac = 0,
      ai = 0,
      ii = null;
    function H2(t, r) {
      if (hs === null) {
        var i = (hs = []);
        (Ac = 0),
          (ai = jf()),
          (ii = {
            status: "pending",
            value: void 0,
            then: function (l) {
              i.push(l);
            },
          });
      }
      return Ac++, r.then(Ym, Ym), r;
    }
    function Ym() {
      if (--Ac === 0 && hs !== null) {
        ii !== null && (ii.status = "fulfilled");
        var t = hs;
        (hs = null), (ai = 0), (ii = null);
        for (var r = 0; r < t.length; r++) (0, t[r])();
      }
    }
    function F2(t, r) {
      var i = [],
        l = {
          status: "pending",
          value: null,
          reason: null,
          then: function (u) {
            i.push(u);
          },
        };
      return (
        t.then(
          function () {
            (l.status = "fulfilled"), (l.value = r);
            for (var u = 0; u < i.length; u++) (0, i[u])(r);
          },
          function (u) {
            for (l.status = "rejected", l.reason = u, u = 0; u < i.length; u++)
              (0, i[u])(void 0);
          }
        ),
        l
      );
    }
    var Km = Y.S;
    Y.S = function (t, r) {
      typeof r == "object" &&
        r !== null &&
        typeof r.then == "function" &&
        H2(t, r),
        Km !== null && Km(t, r);
    };
    var na = Te(null);
    function Oc() {
      var t = na.current;
      return t !== null ? t : Ue.pooledCache;
    }
    function Il(t, r) {
      r === null ? je(na, na.current) : je(na, r.pool);
    }
    function Xm() {
      var t = Oc();
      return t === null ? null : { parent: rt._currentValue, pool: t };
    }
    var pr = 0,
      ge = null,
      Ne = null,
      Qe = null,
      Gl = !1,
      si = !1,
      ra = !1,
      Pl = 0,
      ps = 0,
      li = null,
      V2 = 0;
    function Ke() {
      throw Error(s(321));
    }
    function Rc(t, r) {
      if (r === null) return !1;
      for (var i = 0; i < r.length && i < t.length; i++)
        if (!Bt(t[i], r[i])) return !1;
      return !0;
    }
    function Cc(t, r, i, l, u, d) {
      return (
        (pr = d),
        (ge = r),
        (r.memoizedState = null),
        (r.updateQueue = null),
        (r.lanes = 0),
        (Y.H = t === null || t.memoizedState === null ? aa : mr),
        (ra = !1),
        (d = i(l, u)),
        (ra = !1),
        si && (d = Zm(r, i, l, u)),
        Qm(t),
        d
      );
    }
    function Qm(t) {
      Y.H = xn;
      var r = Ne !== null && Ne.next !== null;
      if (
        ((pr = 0), (Qe = Ne = ge = null), (Gl = !1), (ps = 0), (li = null), r)
      )
        throw Error(s(300));
      t === null ||
        st ||
        ((t = t.dependencies), t !== null && to(t) && (st = !0));
    }
    function Zm(t, r, i, l) {
      ge = t;
      var u = 0;
      do {
        if ((si && (li = null), (ps = 0), (si = !1), 25 <= u))
          throw Error(s(301));
        if (((u += 1), (Qe = Ne = null), t.updateQueue != null)) {
          var d = t.updateQueue;
          (d.lastEffect = null),
            (d.events = null),
            (d.stores = null),
            d.memoCache != null && (d.memoCache.index = 0);
        }
        (Y.H = ia), (d = r(i, l));
      } while (si);
      return d;
    }
    function I2() {
      var t = Y.H,
        r = t.useState()[0];
      return (
        (r = typeof r.then == "function" ? ms(r) : r),
        (t = t.useState()[0]),
        (Ne !== null ? Ne.memoizedState : null) !== t && (ge.flags |= 1024),
        r
      );
    }
    function Dc() {
      var t = Pl !== 0;
      return (Pl = 0), t;
    }
    function Nc(t, r, i) {
      (r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~i);
    }
    function Mc(t) {
      if (Gl) {
        for (t = t.memoizedState; t !== null; ) {
          var r = t.queue;
          r !== null && (r.pending = null), (t = t.next);
        }
        Gl = !1;
      }
      (pr = 0), (Qe = Ne = ge = null), (si = !1), (ps = Pl = 0), (li = null);
    }
    function Ct() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Qe === null ? (ge.memoizedState = Qe = t) : (Qe = Qe.next = t), Qe;
    }
    function Ze() {
      if (Ne === null) {
        var t = ge.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Ne.next;
      var r = Qe === null ? ge.memoizedState : Qe.next;
      if (r !== null) (Qe = r), (Ne = t);
      else {
        if (t === null)
          throw ge.alternate === null ? Error(s(467)) : Error(s(310));
        (Ne = t),
          (t = {
            memoizedState: Ne.memoizedState,
            baseState: Ne.baseState,
            baseQueue: Ne.baseQueue,
            queue: Ne.queue,
            next: null,
          }),
          Qe === null ? (ge.memoizedState = Qe = t) : (Qe = Qe.next = t);
      }
      return Qe;
    }
    var Yl;
    Yl = function () {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    };
    function ms(t) {
      var r = ps;
      return (
        (ps += 1),
        li === null && (li = []),
        (t = qm(li, t, r)),
        (r = ge),
        (Qe === null ? r.memoizedState : Qe.next) === null &&
          ((r = r.alternate),
          (Y.H = r === null || r.memoizedState === null ? aa : mr)),
        t
      );
    }
    function Kl(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return ms(t);
        if (t.$$typeof === _) return bt(t);
      }
      throw Error(s(438, String(t)));
    }
    function jc(t) {
      var r = null,
        i = ge.updateQueue;
      if ((i !== null && (r = i.memoCache), r == null)) {
        var l = ge.alternate;
        l !== null &&
          ((l = l.updateQueue),
          l !== null &&
            ((l = l.memoCache),
            l != null &&
              (r = {
                data: l.data.map(function (u) {
                  return u.slice();
                }),
                index: 0,
              })));
      }
      if (
        (r == null && (r = { data: [], index: 0 }),
        i === null && ((i = Yl()), (ge.updateQueue = i)),
        (i.memoCache = r),
        (i = r.data[r.index]),
        i === void 0)
      )
        for (i = r.data[r.index] = Array(t), l = 0; l < t; l++) i[l] = P;
      return r.index++, i;
    }
    function Ln(t, r) {
      return typeof r == "function" ? r(t) : r;
    }
    function Xl(t) {
      var r = Ze();
      return Bc(r, Ne, t);
    }
    function Bc(t, r, i) {
      var l = t.queue;
      if (l === null) throw Error(s(311));
      l.lastRenderedReducer = i;
      var u = t.baseQueue,
        d = l.pending;
      if (d !== null) {
        if (u !== null) {
          var y = u.next;
          (u.next = d.next), (d.next = y);
        }
        (r.baseQueue = u = d), (l.pending = null);
      }
      if (((d = t.baseState), u === null)) t.memoizedState = d;
      else {
        r = u.next;
        var b = (y = null),
          x = null,
          D = r,
          H = !1;
        do {
          var I = D.lane & -536870913;
          if (I !== D.lane ? (we & I) === I : (pr & I) === I) {
            var k = D.revertLane;
            if (k === 0)
              x !== null &&
                (x = x.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: D.action,
                    hasEagerState: D.hasEagerState,
                    eagerState: D.eagerState,
                    next: null,
                  }),
                I === ai && (H = !0);
            else if ((pr & k) === k) {
              (D = D.next), k === ai && (H = !0);
              continue;
            } else
              (I = {
                lane: 0,
                revertLane: D.revertLane,
                action: D.action,
                hasEagerState: D.hasEagerState,
                eagerState: D.eagerState,
                next: null,
              }),
                x === null ? ((b = x = I), (y = d)) : (x = x.next = I),
                (ge.lanes |= k),
                (_r |= k);
            (I = D.action),
              ra && i(d, I),
              (d = D.hasEagerState ? D.eagerState : i(d, I));
          } else
            (k = {
              lane: I,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              x === null ? ((b = x = k), (y = d)) : (x = x.next = k),
              (ge.lanes |= I),
              (_r |= I);
          D = D.next;
        } while (D !== null && D !== r);
        if (
          (x === null ? (y = d) : (x.next = b),
          !Bt(d, t.memoizedState) && ((st = !0), H && ((i = ii), i !== null)))
        )
          throw i;
        (t.memoizedState = d),
          (t.baseState = y),
          (t.baseQueue = x),
          (l.lastRenderedState = d);
      }
      return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
    }
    function Uc(t) {
      var r = Ze(),
        i = r.queue;
      if (i === null) throw Error(s(311));
      i.lastRenderedReducer = t;
      var l = i.dispatch,
        u = i.pending,
        d = r.memoizedState;
      if (u !== null) {
        i.pending = null;
        var y = (u = u.next);
        do (d = t(d, y.action)), (y = y.next);
        while (y !== u);
        Bt(d, r.memoizedState) || (st = !0),
          (r.memoizedState = d),
          r.baseQueue === null && (r.baseState = d),
          (i.lastRenderedState = d);
      }
      return [d, l];
    }
    function Jm(t, r, i) {
      var l = ge,
        u = Ze(),
        d = Oe;
      if (d) {
        if (i === void 0) throw Error(s(407));
        i = i();
      } else i = r();
      var y = !Bt((Ne || u).memoizedState, i);
      if (
        (y && ((u.memoizedState = i), (st = !0)),
        (u = u.queue),
        zc(ty.bind(null, l, u, t), [t]),
        u.getSnapshot !== r || y || (Qe !== null && Qe.memoizedState.tag & 1))
      ) {
        if (
          ((l.flags |= 2048),
          oi(9, ey.bind(null, l, u, i, r), { destroy: void 0 }, null),
          Ue === null)
        )
          throw Error(s(349));
        d || pr & 60 || Wm(l, r, i);
      }
      return i;
    }
    function Wm(t, r, i) {
      (t.flags |= 16384),
        (t = { getSnapshot: r, value: i }),
        (r = ge.updateQueue),
        r === null
          ? ((r = Yl()), (ge.updateQueue = r), (r.stores = [t]))
          : ((i = r.stores), i === null ? (r.stores = [t]) : i.push(t));
    }
    function ey(t, r, i, l) {
      (r.value = i), (r.getSnapshot = l), ny(r) && ry(t);
    }
    function ty(t, r, i) {
      return i(function () {
        ny(r) && ry(t);
      });
    }
    function ny(t) {
      var r = t.getSnapshot;
      t = t.value;
      try {
        var i = r();
        return !Bt(t, i);
      } catch {
        return !0;
      }
    }
    function ry(t) {
      var r = fr(t, 2);
      r !== null && Tt(r, t, 2);
    }
    function Lc(t) {
      var r = Ct();
      if (typeof t == "function") {
        var i = t;
        if (((t = i()), ra)) {
          or(!0);
          try {
            i();
          } finally {
            or(!1);
          }
        }
      }
      return (
        (r.memoizedState = r.baseState = t),
        (r.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ln,
          lastRenderedState: t,
        }),
        r
      );
    }
    function ay(t, r, i, l) {
      return (t.baseState = i), Bc(t, Ne, typeof l == "function" ? l : Ln);
    }
    function G2(t, r, i, l, u) {
      if (Jl(t)) throw Error(s(485));
      if (((t = r.action), t !== null)) {
        var d = {
          payload: u,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (y) {
            d.listeners.push(y);
          },
        };
        Y.T !== null ? i(!0) : (d.isTransition = !1),
          l(d),
          (i = r.pending),
          i === null
            ? ((d.next = r.pending = d), iy(r, d))
            : ((d.next = i.next), (r.pending = i.next = d));
      }
    }
    function iy(t, r) {
      var i = r.action,
        l = r.payload,
        u = t.state;
      if (r.isTransition) {
        var d = Y.T,
          y = {};
        Y.T = y;
        try {
          var b = i(u, l),
            x = Y.S;
          x !== null && x(y, b), sy(t, r, b);
        } catch (D) {
          kc(t, r, D);
        } finally {
          Y.T = d;
        }
      } else
        try {
          (d = i(u, l)), sy(t, r, d);
        } catch (D) {
          kc(t, r, D);
        }
    }
    function sy(t, r, i) {
      i !== null && typeof i == "object" && typeof i.then == "function"
        ? i.then(
            function (l) {
              ly(t, r, l);
            },
            function (l) {
              return kc(t, r, l);
            }
          )
        : ly(t, r, i);
    }
    function ly(t, r, i) {
      (r.status = "fulfilled"),
        (r.value = i),
        oy(r),
        (t.state = i),
        (r = t.pending),
        r !== null &&
          ((i = r.next),
          i === r
            ? (t.pending = null)
            : ((i = i.next), (r.next = i), iy(t, i)));
    }
    function kc(t, r, i) {
      var l = t.pending;
      if (((t.pending = null), l !== null)) {
        l = l.next;
        do (r.status = "rejected"), (r.reason = i), oy(r), (r = r.next);
        while (r !== l);
      }
      t.action = null;
    }
    function oy(t) {
      t = t.listeners;
      for (var r = 0; r < t.length; r++) (0, t[r])();
    }
    function uy(t, r) {
      return r;
    }
    function cy(t, r) {
      if (Oe) {
        var i = Ue.formState;
        if (i !== null) {
          e: {
            var l = ge;
            if (Oe) {
              if (ht) {
                t: {
                  for (var u = ht, d = En; u.nodeType !== 8; ) {
                    if (!d) {
                      u = null;
                      break t;
                    }
                    if (((u = hn(u.nextSibling)), u === null)) {
                      u = null;
                      break t;
                    }
                  }
                  (d = u.data), (u = d === "F!" || d === "F" ? u : null);
                }
                if (u) {
                  (ht = hn(u.nextSibling)), (l = u.data === "F!");
                  break e;
                }
              }
              ea(l);
            }
            l = !1;
          }
          l && (r = i[0]);
        }
      }
      return (
        (i = Ct()),
        (i.memoizedState = i.baseState = r),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: uy,
          lastRenderedState: r,
        }),
        (i.queue = l),
        (i = Ry.bind(null, ge, l)),
        (l.dispatch = i),
        (l = Lc(!1)),
        (d = Vc.bind(null, ge, !1, l.queue)),
        (l = Ct()),
        (u = { state: r, dispatch: null, action: t, pending: null }),
        (l.queue = u),
        (i = G2.bind(null, ge, u, d, i)),
        (u.dispatch = i),
        (l.memoizedState = t),
        [r, i, !1]
      );
    }
    function fy(t) {
      var r = Ze();
      return dy(r, Ne, t);
    }
    function dy(t, r, i) {
      (r = Bc(t, r, uy)[0]),
        (t = Xl(Ln)[0]),
        (r =
          typeof r == "object" && r !== null && typeof r.then == "function"
            ? ms(r)
            : r);
      var l = Ze(),
        u = l.queue,
        d = u.dispatch;
      return (
        i !== l.memoizedState &&
          ((ge.flags |= 2048),
          oi(9, P2.bind(null, u, i), { destroy: void 0 }, null)),
        [r, d, t]
      );
    }
    function P2(t, r) {
      t.action = r;
    }
    function hy(t) {
      var r = Ze(),
        i = Ne;
      if (i !== null) return dy(r, i, t);
      Ze(), (r = r.memoizedState), (i = Ze());
      var l = i.queue.dispatch;
      return (i.memoizedState = t), [r, l, !1];
    }
    function oi(t, r, i, l) {
      return (
        (t = { tag: t, create: r, inst: i, deps: l, next: null }),
        (r = ge.updateQueue),
        r === null && ((r = Yl()), (ge.updateQueue = r)),
        (i = r.lastEffect),
        i === null
          ? (r.lastEffect = t.next = t)
          : ((l = i.next), (i.next = t), (t.next = l), (r.lastEffect = t)),
        t
      );
    }
    function py() {
      return Ze().memoizedState;
    }
    function Ql(t, r, i, l) {
      var u = Ct();
      (ge.flags |= t),
        (u.memoizedState = oi(
          1 | r,
          i,
          { destroy: void 0 },
          l === void 0 ? null : l
        ));
    }
    function Zl(t, r, i, l) {
      var u = Ze();
      l = l === void 0 ? null : l;
      var d = u.memoizedState.inst;
      Ne !== null && l !== null && Rc(l, Ne.memoizedState.deps)
        ? (u.memoizedState = oi(r, i, d, l))
        : ((ge.flags |= t), (u.memoizedState = oi(1 | r, i, d, l)));
    }
    function my(t, r) {
      Ql(8390656, 8, t, r);
    }
    function zc(t, r) {
      Zl(2048, 8, t, r);
    }
    function yy(t, r) {
      return Zl(4, 2, t, r);
    }
    function gy(t, r) {
      return Zl(4, 4, t, r);
    }
    function vy(t, r) {
      if (typeof r == "function") {
        t = t();
        var i = r(t);
        return function () {
          typeof i == "function" ? i() : r(null);
        };
      }
      if (r != null)
        return (
          (t = t()),
          (r.current = t),
          function () {
            r.current = null;
          }
        );
    }
    function by(t, r, i) {
      (i = i != null ? i.concat([t]) : null), Zl(4, 4, vy.bind(null, r, t), i);
    }
    function $c() {}
    function Sy(t, r) {
      var i = Ze();
      r = r === void 0 ? null : r;
      var l = i.memoizedState;
      return r !== null && Rc(r, l[1]) ? l[0] : ((i.memoizedState = [t, r]), t);
    }
    function Ey(t, r) {
      var i = Ze();
      r = r === void 0 ? null : r;
      var l = i.memoizedState;
      if (r !== null && Rc(r, l[1])) return l[0];
      if (((l = t()), ra)) {
        or(!0);
        try {
          t();
        } finally {
          or(!1);
        }
      }
      return (i.memoizedState = [l, r]), l;
    }
    function qc(t, r, i) {
      return i === void 0 || pr & 1073741824
        ? (t.memoizedState = r)
        : ((t.memoizedState = i), (t = xg()), (ge.lanes |= t), (_r |= t), i);
    }
    function wy(t, r, i, l) {
      return Bt(i, r)
        ? i
        : ri.current !== null
        ? ((t = qc(t, i, l)), Bt(t, r) || (st = !0), t)
        : pr & 42
        ? ((t = xg()), (ge.lanes |= t), (_r |= t), r)
        : ((st = !0), (t.memoizedState = i));
    }
    function xy(t, r, i, l, u) {
      var d = Q.p;
      Q.p = d !== 0 && 8 > d ? d : 8;
      var y = Y.T,
        b = {};
      (Y.T = b), Vc(t, !1, r, i);
      try {
        var x = u(),
          D = Y.S;
        if (
          (D !== null && D(b, x),
          x !== null && typeof x == "object" && typeof x.then == "function")
        ) {
          var H = F2(x, l);
          ys(t, r, H, zt(t));
        } else ys(t, r, l, zt(t));
      } catch (I) {
        ys(t, r, { then: function () {}, status: "rejected", reason: I }, zt());
      } finally {
        (Q.p = d), (Y.T = y);
      }
    }
    function Y2() {}
    function Hc(t, r, i, l) {
      if (t.tag !== 5) throw Error(s(476));
      var u = _y(t).queue;
      xy(
        t,
        u,
        r,
        he,
        i === null
          ? Y2
          : function () {
              return Ty(t), i(l);
            }
      );
    }
    function _y(t) {
      var r = t.memoizedState;
      if (r !== null) return r;
      r = {
        memoizedState: he,
        baseState: he,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ln,
          lastRenderedState: he,
        },
        next: null,
      };
      var i = {};
      return (
        (r.next = {
          memoizedState: i,
          baseState: i,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ln,
            lastRenderedState: i,
          },
          next: null,
        }),
        (t.memoizedState = r),
        (t = t.alternate),
        t !== null && (t.memoizedState = r),
        r
      );
    }
    function Ty(t) {
      var r = _y(t).next.queue;
      ys(t, r, {}, zt());
    }
    function Fc() {
      return bt(Ls);
    }
    function Ay() {
      return Ze().memoizedState;
    }
    function Oy() {
      return Ze().memoizedState;
    }
    function K2(t) {
      for (var r = t.return; r !== null; ) {
        switch (r.tag) {
          case 24:
          case 3:
            var i = zt();
            t = vr(i);
            var l = br(r, t, i);
            l !== null && (Tt(l, r, i), bs(l, r, i)),
              (r = { cache: Tc() }),
              (t.payload = r);
            return;
        }
        r = r.return;
      }
    }
    function X2(t, r, i) {
      var l = zt();
      (i = {
        lane: l,
        revertLane: 0,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Jl(t)
          ? Cy(r, i)
          : ((i = vc(t, r, i, l)), i !== null && (Tt(i, t, l), Dy(i, r, l)));
    }
    function Ry(t, r, i) {
      var l = zt();
      ys(t, r, i, l);
    }
    function ys(t, r, i, l) {
      var u = {
        lane: l,
        revertLane: 0,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Jl(t)) Cy(r, u);
      else {
        var d = t.alternate;
        if (
          t.lanes === 0 &&
          (d === null || d.lanes === 0) &&
          ((d = r.lastRenderedReducer), d !== null)
        )
          try {
            var y = r.lastRenderedState,
              b = d(y, i);
            if (((u.hasEagerState = !0), (u.eagerState = b), Bt(b, y)))
              return Ul(t, r, u, 0), Ue === null && Bl(), !1;
          } catch {
          } finally {
          }
        if (((i = vc(t, r, u, l)), i !== null))
          return Tt(i, t, l), Dy(i, r, l), !0;
      }
      return !1;
    }
    function Vc(t, r, i, l) {
      if (
        ((l = {
          lane: 2,
          revertLane: jf(),
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Jl(t))
      ) {
        if (r) throw Error(s(479));
      } else (r = vc(t, i, l, 2)), r !== null && Tt(r, t, 2);
    }
    function Jl(t) {
      var r = t.alternate;
      return t === ge || (r !== null && r === ge);
    }
    function Cy(t, r) {
      si = Gl = !0;
      var i = t.pending;
      i === null ? (r.next = r) : ((r.next = i.next), (i.next = r)),
        (t.pending = r);
    }
    function Dy(t, r, i) {
      if (i & 4194176) {
        var l = r.lanes;
        (l &= t.pendingLanes), (i |= l), (r.lanes = i), Hp(t, i);
      }
    }
    var xn = {
      readContext: bt,
      use: Kl,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useLayoutEffect: Ke,
      useInsertionEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useSyncExternalStore: Ke,
      useId: Ke,
    };
    (xn.useCacheRefresh = Ke),
      (xn.useMemoCache = Ke),
      (xn.useHostTransitionStatus = Ke),
      (xn.useFormState = Ke),
      (xn.useActionState = Ke),
      (xn.useOptimistic = Ke);
    var aa = {
      readContext: bt,
      use: Kl,
      useCallback: function (t, r) {
        return (Ct().memoizedState = [t, r === void 0 ? null : r]), t;
      },
      useContext: bt,
      useEffect: my,
      useImperativeHandle: function (t, r, i) {
        (i = i != null ? i.concat([t]) : null),
          Ql(4194308, 4, vy.bind(null, r, t), i);
      },
      useLayoutEffect: function (t, r) {
        return Ql(4194308, 4, t, r);
      },
      useInsertionEffect: function (t, r) {
        Ql(4, 2, t, r);
      },
      useMemo: function (t, r) {
        var i = Ct();
        r = r === void 0 ? null : r;
        var l = t();
        if (ra) {
          or(!0);
          try {
            t();
          } finally {
            or(!1);
          }
        }
        return (i.memoizedState = [l, r]), l;
      },
      useReducer: function (t, r, i) {
        var l = Ct();
        if (i !== void 0) {
          var u = i(r);
          if (ra) {
            or(!0);
            try {
              i(r);
            } finally {
              or(!1);
            }
          }
        } else u = r;
        return (
          (l.memoizedState = l.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (l.queue = t),
          (t = t.dispatch = X2.bind(null, ge, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var r = Ct();
        return (t = { current: t }), (r.memoizedState = t);
      },
      useState: function (t) {
        t = Lc(t);
        var r = t.queue,
          i = Ry.bind(null, ge, r);
        return (r.dispatch = i), [t.memoizedState, i];
      },
      useDebugValue: $c,
      useDeferredValue: function (t, r) {
        var i = Ct();
        return qc(i, t, r);
      },
      useTransition: function () {
        var t = Lc(!1);
        return (
          (t = xy.bind(null, ge, t.queue, !0, !1)),
          (Ct().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, r, i) {
        var l = ge,
          u = Ct();
        if (Oe) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = r()), Ue === null)) throw Error(s(349));
          we & 60 || Wm(l, r, i);
        }
        u.memoizedState = i;
        var d = { value: i, getSnapshot: r };
        return (
          (u.queue = d),
          my(ty.bind(null, l, d, t), [t]),
          (l.flags |= 2048),
          oi(9, ey.bind(null, l, d, i, r), { destroy: void 0 }, null),
          i
        );
      },
      useId: function () {
        var t = Ct(),
          r = Ue.identifierPrefix;
        if (Oe) {
          var i = Bn,
            l = jn;
          (i = (l & ~(1 << (32 - jt(l) - 1))).toString(32) + i),
            (r = ":" + r + "R" + i),
            (i = Pl++),
            0 < i && (r += "H" + i.toString(32)),
            (r += ":");
        } else (i = V2++), (r = ":" + r + "r" + i.toString(32) + ":");
        return (t.memoizedState = r);
      },
      useCacheRefresh: function () {
        return (Ct().memoizedState = K2.bind(null, ge));
      },
    };
    (aa.useMemoCache = jc),
      (aa.useHostTransitionStatus = Fc),
      (aa.useFormState = cy),
      (aa.useActionState = cy),
      (aa.useOptimistic = function (t) {
        var r = Ct();
        r.memoizedState = r.baseState = t;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (r.queue = i),
          (r = Vc.bind(null, ge, !0, i)),
          (i.dispatch = r),
          [t, r]
        );
      });
    var mr = {
      readContext: bt,
      use: Kl,
      useCallback: Sy,
      useContext: bt,
      useEffect: zc,
      useImperativeHandle: by,
      useInsertionEffect: yy,
      useLayoutEffect: gy,
      useMemo: Ey,
      useReducer: Xl,
      useRef: py,
      useState: function () {
        return Xl(Ln);
      },
      useDebugValue: $c,
      useDeferredValue: function (t, r) {
        var i = Ze();
        return wy(i, Ne.memoizedState, t, r);
      },
      useTransition: function () {
        var t = Xl(Ln)[0],
          r = Ze().memoizedState;
        return [typeof t == "boolean" ? t : ms(t), r];
      },
      useSyncExternalStore: Jm,
      useId: Ay,
    };
    (mr.useCacheRefresh = Oy),
      (mr.useMemoCache = jc),
      (mr.useHostTransitionStatus = Fc),
      (mr.useFormState = fy),
      (mr.useActionState = fy),
      (mr.useOptimistic = function (t, r) {
        var i = Ze();
        return ay(i, Ne, t, r);
      });
    var ia = {
      readContext: bt,
      use: Kl,
      useCallback: Sy,
      useContext: bt,
      useEffect: zc,
      useImperativeHandle: by,
      useInsertionEffect: yy,
      useLayoutEffect: gy,
      useMemo: Ey,
      useReducer: Uc,
      useRef: py,
      useState: function () {
        return Uc(Ln);
      },
      useDebugValue: $c,
      useDeferredValue: function (t, r) {
        var i = Ze();
        return Ne === null ? qc(i, t, r) : wy(i, Ne.memoizedState, t, r);
      },
      useTransition: function () {
        var t = Uc(Ln)[0],
          r = Ze().memoizedState;
        return [typeof t == "boolean" ? t : ms(t), r];
      },
      useSyncExternalStore: Jm,
      useId: Ay,
    };
    (ia.useCacheRefresh = Oy),
      (ia.useMemoCache = jc),
      (ia.useHostTransitionStatus = Fc),
      (ia.useFormState = hy),
      (ia.useActionState = hy),
      (ia.useOptimistic = function (t, r) {
        var i = Ze();
        return Ne !== null
          ? ay(i, Ne, t, r)
          : ((i.baseState = t), [t, i.queue.dispatch]);
      });
    function Ic(t, r, i, l) {
      (r = t.memoizedState),
        (i = i(l, r)),
        (i = i == null ? r : oe({}, r, i)),
        (t.memoizedState = i),
        t.lanes === 0 && (t.updateQueue.baseState = i);
    }
    var Gc = {
      isMounted: function (t) {
        return (t = t._reactInternals) ? se(t) === t : !1;
      },
      enqueueSetState: function (t, r, i) {
        t = t._reactInternals;
        var l = zt(),
          u = vr(l);
        (u.payload = r),
          i != null && (u.callback = i),
          (r = br(t, u, l)),
          r !== null && (Tt(r, t, l), bs(r, t, l));
      },
      enqueueReplaceState: function (t, r, i) {
        t = t._reactInternals;
        var l = zt(),
          u = vr(l);
        (u.tag = 1),
          (u.payload = r),
          i != null && (u.callback = i),
          (r = br(t, u, l)),
          r !== null && (Tt(r, t, l), bs(r, t, l));
      },
      enqueueForceUpdate: function (t, r) {
        t = t._reactInternals;
        var i = zt(),
          l = vr(i);
        (l.tag = 2),
          r != null && (l.callback = r),
          (r = br(t, l, i)),
          r !== null && (Tt(r, t, i), bs(r, t, i));
      },
    };
    function Ny(t, r, i, l, u, d, y) {
      return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
          ? t.shouldComponentUpdate(l, d, y)
          : r.prototype && r.prototype.isPureReactComponent
          ? !rs(i, l) || !rs(u, d)
          : !0
      );
    }
    function My(t, r, i, l) {
      (t = r.state),
        typeof r.componentWillReceiveProps == "function" &&
          r.componentWillReceiveProps(i, l),
        typeof r.UNSAFE_componentWillReceiveProps == "function" &&
          r.UNSAFE_componentWillReceiveProps(i, l),
        r.state !== t && Gc.enqueueReplaceState(r, r.state, null);
    }
    function sa(t, r) {
      var i = r;
      if ("ref" in r) {
        i = {};
        for (var l in r) l !== "ref" && (i[l] = r[l]);
      }
      if ((t = t.defaultProps)) {
        i === r && (i = oe({}, i));
        for (var u in t) i[u] === void 0 && (i[u] = t[u]);
      }
      return i;
    }
    var Wl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var r = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(r)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          };
    function jy(t) {
      Wl(t);
    }
    function By(t) {
      console.error(t);
    }
    function Uy(t) {
      Wl(t);
    }
    function eo(t, r) {
      try {
        var i = t.onUncaughtError;
        i(r.value, { componentStack: r.stack });
      } catch (l) {
        setTimeout(function () {
          throw l;
        });
      }
    }
    function Ly(t, r, i) {
      try {
        var l = t.onCaughtError;
        l(i.value, {
          componentStack: i.stack,
          errorBoundary: r.tag === 1 ? r.stateNode : null,
        });
      } catch (u) {
        setTimeout(function () {
          throw u;
        });
      }
    }
    function Pc(t, r, i) {
      return (
        (i = vr(i)),
        (i.tag = 3),
        (i.payload = { element: null }),
        (i.callback = function () {
          eo(t, r);
        }),
        i
      );
    }
    function ky(t) {
      return (t = vr(t)), (t.tag = 3), t;
    }
    function zy(t, r, i, l) {
      var u = i.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = l.value;
        (t.payload = function () {
          return u(d);
        }),
          (t.callback = function () {
            Ly(r, i, l);
          });
      }
      var y = i.stateNode;
      y !== null &&
        typeof y.componentDidCatch == "function" &&
        (t.callback = function () {
          Ly(r, i, l),
            typeof u != "function" &&
              (Tr === null ? (Tr = new Set([this])) : Tr.add(this));
          var b = l.stack;
          this.componentDidCatch(l.value, {
            componentStack: b !== null ? b : "",
          });
        });
    }
    function Q2(t, r, i, l, u) {
      if (
        ((i.flags |= 32768),
        l !== null && typeof l == "object" && typeof l.then == "function")
      ) {
        if (
          ((r = i.alternate),
          r !== null && vs(r, i, u, !0),
          (i = Jt.current),
          i !== null)
        ) {
          switch (i.tag) {
            case 13:
              return (
                wn === null
                  ? Rf()
                  : i.alternate === null && Pe === 0 && (Pe = 3),
                (i.flags &= -257),
                (i.flags |= 65536),
                (i.lanes = u),
                l === wc
                  ? (i.flags |= 16384)
                  : ((r = i.updateQueue),
                    r === null ? (i.updateQueue = new Set([l])) : r.add(l),
                    Df(t, l, u)),
                !1
              );
            case 22:
              return (
                (i.flags |= 65536),
                l === wc
                  ? (i.flags |= 16384)
                  : ((r = i.updateQueue),
                    r === null
                      ? ((r = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([l]),
                        }),
                        (i.updateQueue = r))
                      : ((i = r.retryQueue),
                        i === null ? (r.retryQueue = new Set([l])) : i.add(l)),
                    Df(t, l, u)),
                !1
              );
          }
          throw Error(s(435, i.tag));
        }
        return Df(t, l, u), Rf(), !1;
      }
      if (Oe)
        return (
          (r = Jt.current),
          r !== null
            ? (!(r.flags & 65536) && (r.flags |= 256),
              (r.flags |= 65536),
              (r.lanes = u),
              l !== Ec && ((t = Error(s(422), { cause: l })), ls(Xt(t, i))))
            : (l !== Ec && ((r = Error(s(423), { cause: l })), ls(Xt(r, i))),
              (t = t.current.alternate),
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (l = Xt(l, i)),
              (u = Pc(t.stateNode, l, u)),
              of(t, u),
              Pe !== 4 && (Pe = 2)),
          !1
        );
      var d = Error(s(520), { cause: l });
      if (
        ((d = Xt(d, i)),
        Os === null ? (Os = [d]) : Os.push(d),
        Pe !== 4 && (Pe = 2),
        r === null)
      )
        return !0;
      (l = Xt(l, i)), (i = r);
      do {
        switch (i.tag) {
          case 3:
            return (
              (i.flags |= 65536),
              (t = u & -u),
              (i.lanes |= t),
              (t = Pc(i.stateNode, l, t)),
              of(i, t),
              !1
            );
          case 1:
            if (
              ((r = i.type),
              (d = i.stateNode),
              (i.flags & 128) === 0 &&
                (typeof r.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Tr === null || !Tr.has(d)))))
            )
              return (
                (i.flags |= 65536),
                (u &= -u),
                (i.lanes |= u),
                (u = ky(u)),
                zy(u, t, i, l),
                of(i, u),
                !1
              );
        }
        i = i.return;
      } while (i !== null);
      return !1;
    }
    var $y = Error(s(461)),
      st = !1;
    function pt(t, r, i, l) {
      r.child = t === null ? Im(r, null, i, l) : ta(r, t.child, i, l);
    }
    function qy(t, r, i, l, u) {
      i = i.render;
      var d = r.ref;
      if ("ref" in l) {
        var y = {};
        for (var b in l) b !== "ref" && (y[b] = l[b]);
      } else y = l;
      return (
        oa(r),
        (l = Cc(t, r, i, y, d, u)),
        (b = Dc()),
        t !== null && !st
          ? (Nc(t, r, u), kn(t, r, u))
          : (Oe && b && bc(r), (r.flags |= 1), pt(t, r, l, u), r.child)
      );
    }
    function Hy(t, r, i, l, u) {
      if (t === null) {
        var d = i.type;
        return typeof d == "function" &&
          !yf(d) &&
          d.defaultProps === void 0 &&
          i.compare === null
          ? ((r.tag = 15), (r.type = d), Fy(t, r, d, l, u))
          : ((t = io(i.type, null, l, r, r.mode, u)),
            (t.ref = r.ref),
            (t.return = r),
            (r.child = t));
      }
      if (((d = t.child), !tf(t, u))) {
        var y = d.memoizedProps;
        if (
          ((i = i.compare),
          (i = i !== null ? i : rs),
          i(y, l) && t.ref === r.ref)
        )
          return kn(t, r, u);
      }
      return (
        (r.flags |= 1),
        (t = xr(d, l)),
        (t.ref = r.ref),
        (t.return = r),
        (r.child = t)
      );
    }
    function Fy(t, r, i, l, u) {
      if (t !== null) {
        var d = t.memoizedProps;
        if (rs(d, l) && t.ref === r.ref)
          if (((st = !1), (r.pendingProps = l = d), tf(t, u)))
            t.flags & 131072 && (st = !0);
          else return (r.lanes = t.lanes), kn(t, r, u);
      }
      return Yc(t, r, i, l, u);
    }
    function Vy(t, r, i) {
      var l = r.pendingProps,
        u = l.children,
        d = (r.stateNode._pendingVisibility & 2) !== 0,
        y = t !== null ? t.memoizedState : null;
      if ((gs(t, r), l.mode === "hidden" || d)) {
        if (r.flags & 128) {
          if (((l = y !== null ? y.baseLanes | i : i), t !== null)) {
            for (u = r.child = t.child, d = 0; u !== null; )
              (d = d | u.lanes | u.childLanes), (u = u.sibling);
            r.childLanes = d & ~l;
          } else (r.childLanes = 0), (r.child = null);
          return Iy(t, r, l, i);
        }
        if (i & 536870912)
          (r.memoizedState = { baseLanes: 0, cachePool: null }),
            t !== null && Il(r, y !== null ? y.cachePool : null),
            y !== null ? Gm(r, y) : xc(),
            Pm(r);
        else
          return (
            (r.lanes = r.childLanes = 536870912),
            Iy(t, r, y !== null ? y.baseLanes | i : i, i)
          );
      } else
        y !== null
          ? (Il(r, y.cachePool), Gm(r, y), hr(), (r.memoizedState = null))
          : (t !== null && Il(r, null), xc(), hr());
      return pt(t, r, u, i), r.child;
    }
    function Iy(t, r, i, l) {
      var u = Oc();
      return (
        (u = u === null ? null : { parent: rt._currentValue, pool: u }),
        (r.memoizedState = { baseLanes: i, cachePool: u }),
        t !== null && Il(r, null),
        xc(),
        Pm(r),
        t !== null && vs(t, r, l, !0),
        null
      );
    }
    function gs(t, r) {
      var i = r.ref;
      if (i === null) t !== null && t.ref !== null && (r.flags |= 2097664);
      else {
        if (typeof i != "function" && typeof i != "object") throw Error(s(284));
        (t === null || t.ref !== i) && (r.flags |= 2097664);
      }
    }
    function Yc(t, r, i, l, u) {
      return (
        oa(r),
        (i = Cc(t, r, i, l, void 0, u)),
        (l = Dc()),
        t !== null && !st
          ? (Nc(t, r, u), kn(t, r, u))
          : (Oe && l && bc(r), (r.flags |= 1), pt(t, r, i, u), r.child)
      );
    }
    function Gy(t, r, i, l, u, d) {
      return (
        oa(r),
        (r.updateQueue = null),
        (i = Zm(r, l, i, u)),
        Qm(t),
        (l = Dc()),
        t !== null && !st
          ? (Nc(t, r, d), kn(t, r, d))
          : (Oe && l && bc(r), (r.flags |= 1), pt(t, r, i, d), r.child)
      );
    }
    function Py(t, r, i, l, u) {
      if ((oa(r), r.stateNode === null)) {
        var d = Wa,
          y = i.contextType;
        typeof y == "object" && y !== null && (d = bt(y)),
          (d = new i(l, d)),
          (r.memoizedState =
            d.state !== null && d.state !== void 0 ? d.state : null),
          (d.updater = Gc),
          (r.stateNode = d),
          (d._reactInternals = r),
          (d = r.stateNode),
          (d.props = l),
          (d.state = r.memoizedState),
          (d.refs = {}),
          sf(r),
          (y = i.contextType),
          (d.context = typeof y == "object" && y !== null ? bt(y) : Wa),
          (d.state = r.memoizedState),
          (y = i.getDerivedStateFromProps),
          typeof y == "function" &&
            (Ic(r, i, y, l), (d.state = r.memoizedState)),
          typeof i.getDerivedStateFromProps == "function" ||
            typeof d.getSnapshotBeforeUpdate == "function" ||
            (typeof d.UNSAFE_componentWillMount != "function" &&
              typeof d.componentWillMount != "function") ||
            ((y = d.state),
            typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" &&
              d.UNSAFE_componentWillMount(),
            y !== d.state && Gc.enqueueReplaceState(d, d.state, null),
            Es(r, l, d, u),
            Ss(),
            (d.state = r.memoizedState)),
          typeof d.componentDidMount == "function" && (r.flags |= 4194308),
          (l = !0);
      } else if (t === null) {
        d = r.stateNode;
        var b = r.memoizedProps,
          x = sa(i, b);
        d.props = x;
        var D = d.context,
          H = i.contextType;
        (y = Wa), typeof H == "object" && H !== null && (y = bt(H));
        var I = i.getDerivedStateFromProps;
        (H =
          typeof I == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function"),
          (b = r.pendingProps !== b),
          H ||
            (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
              typeof d.componentWillReceiveProps != "function") ||
            ((b || D !== y) && My(r, d, l, y)),
          (gr = !1);
        var k = r.memoizedState;
        (d.state = k),
          Es(r, l, d, u),
          Ss(),
          (D = r.memoizedState),
          b || k !== D || gr
            ? (typeof I == "function" &&
                (Ic(r, i, I, l), (D = r.memoizedState)),
              (x = gr || Ny(r, i, x, l, k, D, y))
                ? (H ||
                    (typeof d.UNSAFE_componentWillMount != "function" &&
                      typeof d.componentWillMount != "function") ||
                    (typeof d.componentWillMount == "function" &&
                      d.componentWillMount(),
                    typeof d.UNSAFE_componentWillMount == "function" &&
                      d.UNSAFE_componentWillMount()),
                  typeof d.componentDidMount == "function" &&
                    (r.flags |= 4194308))
                : (typeof d.componentDidMount == "function" &&
                    (r.flags |= 4194308),
                  (r.memoizedProps = l),
                  (r.memoizedState = D)),
              (d.props = l),
              (d.state = D),
              (d.context = y),
              (l = x))
            : (typeof d.componentDidMount == "function" && (r.flags |= 4194308),
              (l = !1));
      } else {
        (d = r.stateNode),
          lf(t, r),
          (y = r.memoizedProps),
          (H = sa(i, y)),
          (d.props = H),
          (I = r.pendingProps),
          (k = d.context),
          (D = i.contextType),
          (x = Wa),
          typeof D == "object" && D !== null && (x = bt(D)),
          (b = i.getDerivedStateFromProps),
          (D =
            typeof b == "function" ||
            typeof d.getSnapshotBeforeUpdate == "function") ||
            (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
              typeof d.componentWillReceiveProps != "function") ||
            ((y !== I || k !== x) && My(r, d, l, x)),
          (gr = !1),
          (k = r.memoizedState),
          (d.state = k),
          Es(r, l, d, u),
          Ss();
        var q = r.memoizedState;
        y !== I ||
        k !== q ||
        gr ||
        (t !== null && t.dependencies !== null && to(t.dependencies))
          ? (typeof b == "function" && (Ic(r, i, b, l), (q = r.memoizedState)),
            (H =
              gr ||
              Ny(r, i, H, l, k, q, x) ||
              (t !== null && t.dependencies !== null && to(t.dependencies)))
              ? (D ||
                  (typeof d.UNSAFE_componentWillUpdate != "function" &&
                    typeof d.componentWillUpdate != "function") ||
                  (typeof d.componentWillUpdate == "function" &&
                    d.componentWillUpdate(l, q, x),
                  typeof d.UNSAFE_componentWillUpdate == "function" &&
                    d.UNSAFE_componentWillUpdate(l, q, x)),
                typeof d.componentDidUpdate == "function" && (r.flags |= 4),
                typeof d.getSnapshotBeforeUpdate == "function" &&
                  (r.flags |= 1024))
              : (typeof d.componentDidUpdate != "function" ||
                  (y === t.memoizedProps && k === t.memoizedState) ||
                  (r.flags |= 4),
                typeof d.getSnapshotBeforeUpdate != "function" ||
                  (y === t.memoizedProps && k === t.memoizedState) ||
                  (r.flags |= 1024),
                (r.memoizedProps = l),
                (r.memoizedState = q)),
            (d.props = l),
            (d.state = q),
            (d.context = x),
            (l = H))
          : (typeof d.componentDidUpdate != "function" ||
              (y === t.memoizedProps && k === t.memoizedState) ||
              (r.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" ||
              (y === t.memoizedProps && k === t.memoizedState) ||
              (r.flags |= 1024),
            (l = !1));
      }
      return (
        (d = l),
        gs(t, r),
        (l = (r.flags & 128) !== 0),
        d || l
          ? ((d = r.stateNode),
            (i =
              l && typeof i.getDerivedStateFromError != "function"
                ? null
                : d.render()),
            (r.flags |= 1),
            t !== null && l
              ? ((r.child = ta(r, t.child, null, u)),
                (r.child = ta(r, null, i, u)))
              : pt(t, r, i, u),
            (r.memoizedState = d.state),
            (t = r.child))
          : (t = kn(t, r, u)),
        t
      );
    }
    function Yy(t, r, i, l) {
      return ss(), (r.flags |= 256), pt(t, r, i, l), r.child;
    }
    var Kc = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Xc(t) {
      return { baseLanes: t, cachePool: Xm() };
    }
    function Qc(t, r, i) {
      return (t = t !== null ? t.childLanes & ~i : 0), r && (t |= nn), t;
    }
    function Ky(t, r, i) {
      var l = r.pendingProps,
        u = !1,
        d = (r.flags & 128) !== 0,
        y;
      if (
        ((y = d) ||
          (y =
            t !== null && t.memoizedState === null
              ? !1
              : (nt.current & 2) !== 0),
        y && ((u = !0), (r.flags &= -129)),
        (y = (r.flags & 32) !== 0),
        (r.flags &= -33),
        t === null)
      ) {
        if (Oe) {
          if ((u ? dr(r) : hr(), Oe)) {
            var b = ht,
              x;
            if ((x = b)) {
              e: {
                for (x = b, b = En; x.nodeType !== 8; ) {
                  if (!b) {
                    b = null;
                    break e;
                  }
                  if (((x = hn(x.nextSibling)), x === null)) {
                    b = null;
                    break e;
                  }
                }
                b = x;
              }
              b !== null
                ? ((r.memoizedState = {
                    dehydrated: b,
                    treeContext: Jr !== null ? { id: jn, overflow: Bn } : null,
                    retryLane: 536870912,
                  }),
                  (x = tn(18, null, null, 0)),
                  (x.stateNode = b),
                  (x.return = r),
                  (r.child = x),
                  (_t = r),
                  (ht = null),
                  (x = !0))
                : (x = !1);
            }
            x || ea(r);
          }
          if (
            ((b = r.memoizedState),
            b !== null && ((b = b.dehydrated), b !== null))
          )
            return (
              b.data === "$!" ? (r.lanes = 16) : (r.lanes = 536870912), null
            );
          Un(r);
        }
        return (
          (b = l.children),
          (l = l.fallback),
          u
            ? (hr(),
              (u = r.mode),
              (b = Jc({ mode: "hidden", children: b }, u)),
              (l = ca(l, u, i, null)),
              (b.return = r),
              (l.return = r),
              (b.sibling = l),
              (r.child = b),
              (u = r.child),
              (u.memoizedState = Xc(i)),
              (u.childLanes = Qc(t, y, i)),
              (r.memoizedState = Kc),
              l)
            : (dr(r), Zc(r, b))
        );
      }
      if (
        ((x = t.memoizedState), x !== null && ((b = x.dehydrated), b !== null))
      ) {
        if (d)
          r.flags & 256
            ? (dr(r), (r.flags &= -257), (r = Wc(t, r, i)))
            : r.memoizedState !== null
            ? (hr(), (r.child = t.child), (r.flags |= 128), (r = null))
            : (hr(),
              (u = l.fallback),
              (b = r.mode),
              (l = Jc({ mode: "visible", children: l.children }, b)),
              (u = ca(u, b, i, null)),
              (u.flags |= 2),
              (l.return = r),
              (u.return = r),
              (l.sibling = u),
              (r.child = l),
              ta(r, t.child, null, i),
              (l = r.child),
              (l.memoizedState = Xc(i)),
              (l.childLanes = Qc(t, y, i)),
              (r.memoizedState = Kc),
              (r = u));
        else if ((dr(r), b.data === "$!")) {
          if (((y = b.nextSibling && b.nextSibling.dataset), y)) var D = y.dgst;
          (y = D),
            (l = Error(s(419))),
            (l.stack = ""),
            (l.digest = y),
            ls({ value: l, source: null, stack: null }),
            (r = Wc(t, r, i));
        } else if (
          (st || vs(t, r, i, !1), (y = (i & t.childLanes) !== 0), st || y)
        ) {
          if (((y = Ue), y !== null)) {
            if (((l = i & -i), l & 42)) l = 1;
            else
              switch (l) {
                case 2:
                  l = 1;
                  break;
                case 8:
                  l = 4;
                  break;
                case 32:
                  l = 16;
                  break;
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                  l = 64;
                  break;
                case 268435456:
                  l = 134217728;
                  break;
                default:
                  l = 0;
              }
            if (
              ((l = l & (y.suspendedLanes | i) ? 0 : l),
              l !== 0 && l !== x.retryLane)
            )
              throw ((x.retryLane = l), fr(t, l), Tt(y, t, l), $y);
          }
          b.data === "$?" || Rf(), (r = Wc(t, r, i));
        } else
          b.data === "$?"
            ? ((r.flags |= 128),
              (r.child = t.child),
              (r = fw.bind(null, t)),
              (b._reactRetry = r),
              (r = null))
            : ((t = x.treeContext),
              (ht = hn(b.nextSibling)),
              (_t = r),
              (Oe = !0),
              (fn = null),
              (En = !1),
              t !== null &&
                ((Qt[Zt++] = jn),
                (Qt[Zt++] = Bn),
                (Qt[Zt++] = Jr),
                (jn = t.id),
                (Bn = t.overflow),
                (Jr = r)),
              (r = Zc(r, l.children)),
              (r.flags |= 4096));
        return r;
      }
      return u
        ? (hr(),
          (u = l.fallback),
          (b = r.mode),
          (x = t.child),
          (D = x.sibling),
          (l = xr(x, { mode: "hidden", children: l.children })),
          (l.subtreeFlags = x.subtreeFlags & 31457280),
          D !== null
            ? (u = xr(D, u))
            : ((u = ca(u, b, i, null)), (u.flags |= 2)),
          (u.return = r),
          (l.return = r),
          (l.sibling = u),
          (r.child = l),
          (l = u),
          (u = r.child),
          (b = t.child.memoizedState),
          b === null
            ? (b = Xc(i))
            : ((x = b.cachePool),
              x !== null
                ? ((D = rt._currentValue),
                  (x = x.parent !== D ? { parent: D, pool: D } : x))
                : (x = Xm()),
              (b = { baseLanes: b.baseLanes | i, cachePool: x })),
          (u.memoizedState = b),
          (u.childLanes = Qc(t, y, i)),
          (r.memoizedState = Kc),
          l)
        : (dr(r),
          (i = t.child),
          (t = i.sibling),
          (i = xr(i, { mode: "visible", children: l.children })),
          (i.return = r),
          (i.sibling = null),
          t !== null &&
            ((y = r.deletions),
            y === null ? ((r.deletions = [t]), (r.flags |= 16)) : y.push(t)),
          (r.child = i),
          (r.memoizedState = null),
          i);
    }
    function Zc(t, r) {
      return (
        (r = Jc({ mode: "visible", children: r }, t.mode)),
        (r.return = t),
        (t.child = r)
      );
    }
    function Jc(t, r) {
      return Sg(t, r, 0, null);
    }
    function Wc(t, r, i) {
      return (
        ta(r, t.child, null, i),
        (t = Zc(r, r.pendingProps.children)),
        (t.flags |= 2),
        (r.memoizedState = null),
        t
      );
    }
    function Xy(t, r, i) {
      t.lanes |= r;
      var l = t.alternate;
      l !== null && (l.lanes |= r), rf(t.return, r, i);
    }
    function ef(t, r, i, l, u) {
      var d = t.memoizedState;
      d === null
        ? (t.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: i,
            tailMode: u,
          })
        : ((d.isBackwards = r),
          (d.rendering = null),
          (d.renderingStartTime = 0),
          (d.last = l),
          (d.tail = i),
          (d.tailMode = u));
    }
    function Qy(t, r, i) {
      var l = r.pendingProps,
        u = l.revealOrder,
        d = l.tail;
      if ((pt(t, r, l.children, i), (l = nt.current), l & 2))
        (l = (l & 1) | 2), (r.flags |= 128);
      else {
        if (t !== null && t.flags & 128)
          e: for (t = r.child; t !== null; ) {
            if (t.tag === 13) t.memoizedState !== null && Xy(t, i, r);
            else if (t.tag === 19) Xy(t, i, r);
            else if (t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === r) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === r) break e;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        l &= 1;
      }
      switch ((je(nt, l), u)) {
        case "forwards":
          for (i = r.child, u = null; i !== null; )
            (t = i.alternate),
              t !== null && Vl(t) === null && (u = i),
              (i = i.sibling);
          (i = u),
            i === null
              ? ((u = r.child), (r.child = null))
              : ((u = i.sibling), (i.sibling = null)),
            ef(r, !1, u, i, d);
          break;
        case "backwards":
          for (i = null, u = r.child, r.child = null; u !== null; ) {
            if (((t = u.alternate), t !== null && Vl(t) === null)) {
              r.child = u;
              break;
            }
            (t = u.sibling), (u.sibling = i), (i = u), (u = t);
          }
          ef(r, !0, i, null, d);
          break;
        case "together":
          ef(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
      return r.child;
    }
    function kn(t, r, i) {
      if (
        (t !== null && (r.dependencies = t.dependencies),
        (_r |= r.lanes),
        !(i & r.childLanes))
      )
        if (t !== null) {
          if ((vs(t, r, i, !1), (i & r.childLanes) === 0)) return null;
        } else return null;
      if (t !== null && r.child !== t.child) throw Error(s(153));
      if (r.child !== null) {
        for (
          t = r.child, i = xr(t, t.pendingProps), r.child = i, i.return = r;
          t.sibling !== null;

        )
          (t = t.sibling),
            (i = i.sibling = xr(t, t.pendingProps)),
            (i.return = r);
        i.sibling = null;
      }
      return r.child;
    }
    function tf(t, r) {
      return t.lanes & r ? !0 : ((t = t.dependencies), !!(t !== null && to(t)));
    }
    function Z2(t, r, i) {
      switch (r.tag) {
        case 3:
          za(r, r.stateNode.containerInfo),
            yr(r, rt, t.memoizedState.cache),
            ss();
          break;
        case 27:
        case 5:
          Fi(r);
          break;
        case 4:
          za(r, r.stateNode.containerInfo);
          break;
        case 10:
          yr(r, r.type, r.memoizedProps.value);
          break;
        case 13:
          var l = r.memoizedState;
          if (l !== null)
            return l.dehydrated !== null
              ? (dr(r), (r.flags |= 128), null)
              : i & r.child.childLanes
              ? Ky(t, r, i)
              : (dr(r), (t = kn(t, r, i)), t !== null ? t.sibling : null);
          dr(r);
          break;
        case 19:
          var u = (t.flags & 128) !== 0;
          if (
            ((l = (i & r.childLanes) !== 0),
            l || (vs(t, r, i, !1), (l = (i & r.childLanes) !== 0)),
            u)
          ) {
            if (l) return Qy(t, r, i);
            r.flags |= 128;
          }
          if (
            ((u = r.memoizedState),
            u !== null &&
              ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
            je(nt, nt.current),
            l)
          )
            break;
          return null;
        case 22:
        case 23:
          return (r.lanes = 0), Vy(t, r, i);
        case 24:
          yr(r, rt, t.memoizedState.cache);
      }
      return kn(t, r, i);
    }
    function Zy(t, r, i) {
      if (t !== null)
        if (t.memoizedProps !== r.pendingProps) st = !0;
        else {
          if (!tf(t, i) && !(r.flags & 128)) return (st = !1), Z2(t, r, i);
          st = !!(t.flags & 131072);
        }
      else (st = !1), Oe && r.flags & 1048576 && Um(r, zl, r.index);
      switch (((r.lanes = 0), r.tag)) {
        case 16:
          e: {
            t = r.pendingProps;
            var l = r.elementType,
              u = l._init;
            if (((l = u(l._payload)), (r.type = l), typeof l == "function"))
              yf(l)
                ? ((t = sa(l, t)), (r.tag = 1), (r = Py(null, r, l, t, i)))
                : ((r.tag = 0), (r = Yc(null, r, l, t, i)));
            else {
              if (l != null) {
                if (((u = l.$$typeof), u === w)) {
                  (r.tag = 11), (r = qy(null, r, l, t, i));
                  break e;
                } else if (u === T) {
                  (r.tag = 14), (r = Hy(null, r, l, t, i));
                  break e;
                }
              }
              throw ((r = ee(l) || l), Error(s(306, r, "")));
            }
          }
          return r;
        case 0:
          return Yc(t, r, r.type, r.pendingProps, i);
        case 1:
          return (l = r.type), (u = sa(l, r.pendingProps)), Py(t, r, l, u, i);
        case 3:
          e: {
            if ((za(r, r.stateNode.containerInfo), t === null))
              throw Error(s(387));
            var d = r.pendingProps;
            (u = r.memoizedState), (l = u.element), lf(t, r), Es(r, d, null, i);
            var y = r.memoizedState;
            if (
              ((d = y.cache),
              yr(r, rt, d),
              d !== u.cache && af(r, [rt], i, !0),
              Ss(),
              (d = y.element),
              u.isDehydrated)
            )
              if (
                ((u = { element: d, isDehydrated: !1, cache: y.cache }),
                (r.updateQueue.baseState = u),
                (r.memoizedState = u),
                r.flags & 256)
              ) {
                r = Yy(t, r, d, i);
                break e;
              } else if (d !== l) {
                (l = Xt(Error(s(424)), r)), ls(l), (r = Yy(t, r, d, i));
                break e;
              } else
                for (
                  ht = hn(r.stateNode.containerInfo.firstChild),
                    _t = r,
                    Oe = !0,
                    fn = null,
                    En = !0,
                    i = Im(r, null, d, i),
                    r.child = i;
                  i;

                )
                  (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            else {
              if ((ss(), d === l)) {
                r = kn(t, r, i);
                break e;
              }
              pt(t, r, d, i);
            }
            r = r.child;
          }
          return r;
        case 26:
          return (
            gs(t, r),
            t === null
              ? (i = e0(r.type, null, r.pendingProps, null))
                ? (r.memoizedState = i)
                : Oe ||
                  ((i = r.type),
                  (t = r.pendingProps),
                  (l = vo(on.current).createElement(i)),
                  (l[vt] = r),
                  (l[Ot] = t),
                  mt(l, i, t),
                  it(l),
                  (r.stateNode = l))
              : (r.memoizedState = e0(
                  r.type,
                  t.memoizedProps,
                  r.pendingProps,
                  t.memoizedState
                )),
            null
          );
        case 27:
          return (
            Fi(r),
            t === null &&
              Oe &&
              ((l = r.stateNode = Zg(r.type, r.pendingProps, on.current)),
              (_t = r),
              (En = !0),
              (ht = hn(l.firstChild))),
            (l = r.pendingProps.children),
            t !== null || Oe ? pt(t, r, l, i) : (r.child = ta(r, null, l, i)),
            gs(t, r),
            r.child
          );
        case 5:
          return (
            t === null &&
              Oe &&
              ((u = l = ht) &&
                ((l = Ow(l, r.type, r.pendingProps, En)),
                l !== null
                  ? ((r.stateNode = l),
                    (_t = r),
                    (ht = hn(l.firstChild)),
                    (En = !1),
                    (u = !0))
                  : (u = !1)),
              u || ea(r)),
            Fi(r),
            (u = r.type),
            (d = r.pendingProps),
            (y = t !== null ? t.memoizedProps : null),
            (l = d.children),
            Ff(u, d) ? (l = null) : y !== null && Ff(u, y) && (r.flags |= 32),
            r.memoizedState !== null &&
              ((u = Cc(t, r, I2, null, null, i)), (Ls._currentValue = u)),
            gs(t, r),
            pt(t, r, l, i),
            r.child
          );
        case 6:
          return (
            t === null &&
              Oe &&
              ((t = i = ht) &&
                ((i = Rw(i, r.pendingProps, En)),
                i !== null
                  ? ((r.stateNode = i), (_t = r), (ht = null), (t = !0))
                  : (t = !1)),
              t || ea(r)),
            null
          );
        case 13:
          return Ky(t, r, i);
        case 4:
          return (
            za(r, r.stateNode.containerInfo),
            (l = r.pendingProps),
            t === null ? (r.child = ta(r, null, l, i)) : pt(t, r, l, i),
            r.child
          );
        case 11:
          return qy(t, r, r.type, r.pendingProps, i);
        case 7:
          return pt(t, r, r.pendingProps, i), r.child;
        case 8:
          return pt(t, r, r.pendingProps.children, i), r.child;
        case 12:
          return pt(t, r, r.pendingProps.children, i), r.child;
        case 10:
          return (
            (l = r.pendingProps),
            yr(r, r.type, l.value),
            pt(t, r, l.children, i),
            r.child
          );
        case 9:
          return (
            (u = r.type._context),
            (l = r.pendingProps.children),
            oa(r),
            (u = bt(u)),
            (l = l(u)),
            (r.flags |= 1),
            pt(t, r, l, i),
            r.child
          );
        case 14:
          return Hy(t, r, r.type, r.pendingProps, i);
        case 15:
          return Fy(t, r, r.type, r.pendingProps, i);
        case 19:
          return Qy(t, r, i);
        case 22:
          return Vy(t, r, i);
        case 24:
          return (
            oa(r),
            (l = bt(rt)),
            t === null
              ? ((u = Oc()),
                u === null &&
                  ((u = Ue),
                  (d = Tc()),
                  (u.pooledCache = d),
                  d.refCount++,
                  d !== null && (u.pooledCacheLanes |= i),
                  (u = d)),
                (r.memoizedState = { parent: l, cache: u }),
                sf(r),
                yr(r, rt, u))
              : (t.lanes & i && (lf(t, r), Es(r, null, null, i), Ss()),
                (u = t.memoizedState),
                (d = r.memoizedState),
                u.parent !== l
                  ? ((u = { parent: l, cache: l }),
                    (r.memoizedState = u),
                    r.lanes === 0 &&
                      (r.memoizedState = r.updateQueue.baseState = u),
                    yr(r, rt, l))
                  : ((l = d.cache),
                    yr(r, rt, l),
                    l !== u.cache && af(r, [rt], i, !0))),
            pt(t, r, r.pendingProps.children, i),
            r.child
          );
        case 29:
          throw r.pendingProps;
      }
      throw Error(s(156, r.tag));
    }
    var nf = Te(null),
      la = null,
      zn = null;
    function yr(t, r, i) {
      je(nf, r._currentValue), (r._currentValue = i);
    }
    function $n(t) {
      (t._currentValue = nf.current), Fe(nf);
    }
    function rf(t, r, i) {
      for (; t !== null; ) {
        var l = t.alternate;
        if (
          ((t.childLanes & r) !== r
            ? ((t.childLanes |= r), l !== null && (l.childLanes |= r))
            : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
          t === i)
        )
          break;
        t = t.return;
      }
    }
    function af(t, r, i, l) {
      var u = t.child;
      for (u !== null && (u.return = t); u !== null; ) {
        var d = u.dependencies;
        if (d !== null) {
          var y = u.child;
          d = d.firstContext;
          e: for (; d !== null; ) {
            var b = d;
            d = u;
            for (var x = 0; x < r.length; x++)
              if (b.context === r[x]) {
                (d.lanes |= i),
                  (b = d.alternate),
                  b !== null && (b.lanes |= i),
                  rf(d.return, i, t),
                  l || (y = null);
                break e;
              }
            d = b.next;
          }
        } else if (u.tag === 18) {
          if (((y = u.return), y === null)) throw Error(s(341));
          (y.lanes |= i),
            (d = y.alternate),
            d !== null && (d.lanes |= i),
            rf(y, i, t),
            (y = null);
        } else y = u.child;
        if (y !== null) y.return = u;
        else
          for (y = u; y !== null; ) {
            if (y === t) {
              y = null;
              break;
            }
            if (((u = y.sibling), u !== null)) {
              (u.return = y.return), (y = u);
              break;
            }
            y = y.return;
          }
        u = y;
      }
    }
    function vs(t, r, i, l) {
      t = null;
      for (var u = r, d = !1; u !== null; ) {
        if (!d) {
          if (u.flags & 524288) d = !0;
          else if (u.flags & 262144) break;
        }
        if (u.tag === 10) {
          var y = u.alternate;
          if (y === null) throw Error(s(387));
          if (((y = y.memoizedProps), y !== null)) {
            var b = u.type;
            Bt(u.pendingProps.value, y.value) ||
              (t !== null ? t.push(b) : (t = [b]));
          }
        } else if (u === ka.current) {
          if (((y = u.alternate), y === null)) throw Error(s(387));
          y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
            (t !== null ? t.push(Ls) : (t = [Ls]));
        }
        u = u.return;
      }
      t !== null && af(r, t, i, l), (r.flags |= 262144);
    }
    function to(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Bt(t.context._currentValue, t.memoizedValue)) return !0;
        t = t.next;
      }
      return !1;
    }
    function oa(t) {
      (la = t),
        (zn = null),
        (t = t.dependencies),
        t !== null && (t.firstContext = null);
    }
    function bt(t) {
      return Jy(la, t);
    }
    function no(t, r) {
      return la === null && oa(t), Jy(t, r);
    }
    function Jy(t, r) {
      var i = r._currentValue;
      if (((r = { context: r, memoizedValue: i, next: null }), zn === null)) {
        if (t === null) throw Error(s(308));
        (zn = r),
          (t.dependencies = { lanes: 0, firstContext: r }),
          (t.flags |= 524288);
      } else zn = zn.next = r;
      return i;
    }
    var gr = !1;
    function sf(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function lf(t, r) {
      (t = t.updateQueue),
        r.updateQueue === t &&
          (r.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null,
          });
    }
    function vr(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function br(t, r, i) {
      var l = t.updateQueue;
      if (l === null) return null;
      if (((l = l.shared), Ie & 2)) {
        var u = l.pending;
        return (
          u === null ? (r.next = r) : ((r.next = u.next), (u.next = r)),
          (l.pending = r),
          (r = Ll(t)),
          jm(t, null, i),
          r
        );
      }
      return Ul(t, l, r, i), Ll(t);
    }
    function bs(t, r, i) {
      if (
        ((r = r.updateQueue),
        r !== null && ((r = r.shared), (i & 4194176) !== 0))
      ) {
        var l = r.lanes;
        (l &= t.pendingLanes), (i |= l), (r.lanes = i), Hp(t, i);
      }
    }
    function of(t, r) {
      var i = t.updateQueue,
        l = t.alternate;
      if (l !== null && ((l = l.updateQueue), i === l)) {
        var u = null,
          d = null;
        if (((i = i.firstBaseUpdate), i !== null)) {
          do {
            var y = {
              lane: i.lane,
              tag: i.tag,
              payload: i.payload,
              callback: null,
              next: null,
            };
            d === null ? (u = d = y) : (d = d.next = y), (i = i.next);
          } while (i !== null);
          d === null ? (u = d = r) : (d = d.next = r);
        } else u = d = r;
        (i = {
          baseState: l.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: d,
          shared: l.shared,
          callbacks: l.callbacks,
        }),
          (t.updateQueue = i);
        return;
      }
      (t = i.lastBaseUpdate),
        t === null ? (i.firstBaseUpdate = r) : (t.next = r),
        (i.lastBaseUpdate = r);
    }
    var uf = !1;
    function Ss() {
      if (uf) {
        var t = ii;
        if (t !== null) throw t;
      }
    }
    function Es(t, r, i, l) {
      uf = !1;
      var u = t.updateQueue;
      gr = !1;
      var d = u.firstBaseUpdate,
        y = u.lastBaseUpdate,
        b = u.shared.pending;
      if (b !== null) {
        u.shared.pending = null;
        var x = b,
          D = x.next;
        (x.next = null), y === null ? (d = D) : (y.next = D), (y = x);
        var H = t.alternate;
        H !== null &&
          ((H = H.updateQueue),
          (b = H.lastBaseUpdate),
          b !== y &&
            (b === null ? (H.firstBaseUpdate = D) : (b.next = D),
            (H.lastBaseUpdate = x)));
      }
      if (d !== null) {
        var I = u.baseState;
        (y = 0), (H = D = x = null), (b = d);
        do {
          var k = b.lane & -536870913,
            q = k !== b.lane;
          if (q ? (we & k) === k : (l & k) === k) {
            k !== 0 && k === ai && (uf = !0),
              H !== null &&
                (H = H.next =
                  {
                    lane: 0,
                    tag: b.tag,
                    payload: b.payload,
                    callback: null,
                    next: null,
                  });
            e: {
              var te = t,
                ce = b;
              k = r;
              var Ye = i;
              switch (ce.tag) {
                case 1:
                  if (((te = ce.payload), typeof te == "function")) {
                    I = te.call(Ye, I, k);
                    break e;
                  }
                  I = te;
                  break e;
                case 3:
                  te.flags = (te.flags & -65537) | 128;
                case 0:
                  if (
                    ((te = ce.payload),
                    (k = typeof te == "function" ? te.call(Ye, I, k) : te),
                    k == null)
                  )
                    break e;
                  I = oe({}, I, k);
                  break e;
                case 2:
                  gr = !0;
              }
            }
            (k = b.callback),
              k !== null &&
                ((t.flags |= 64),
                q && (t.flags |= 8192),
                (q = u.callbacks),
                q === null ? (u.callbacks = [k]) : q.push(k));
          } else
            (q = {
              lane: k,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null,
            }),
              H === null ? ((D = H = q), (x = I)) : (H = H.next = q),
              (y |= k);
          if (((b = b.next), b === null)) {
            if (((b = u.shared.pending), b === null)) break;
            (q = b),
              (b = q.next),
              (q.next = null),
              (u.lastBaseUpdate = q),
              (u.shared.pending = null);
          }
        } while (!0);
        H === null && (x = I),
          (u.baseState = x),
          (u.firstBaseUpdate = D),
          (u.lastBaseUpdate = H),
          d === null && (u.shared.lanes = 0),
          (_r |= y),
          (t.lanes = y),
          (t.memoizedState = I);
      }
    }
    function Wy(t, r) {
      if (typeof t != "function") throw Error(s(191, t));
      t.call(r);
    }
    function eg(t, r) {
      var i = t.callbacks;
      if (i !== null)
        for (t.callbacks = null, t = 0; t < i.length; t++) Wy(i[t], r);
    }
    function ws(t, r) {
      try {
        var i = r.updateQueue,
          l = i !== null ? i.lastEffect : null;
        if (l !== null) {
          var u = l.next;
          i = u;
          do {
            if ((i.tag & t) === t) {
              l = void 0;
              var d = i.create,
                y = i.inst;
              (l = d()), (y.destroy = l);
            }
            i = i.next;
          } while (i !== u);
        }
      } catch (b) {
        Be(r, r.return, b);
      }
    }
    function Sr(t, r, i) {
      try {
        var l = r.updateQueue,
          u = l !== null ? l.lastEffect : null;
        if (u !== null) {
          var d = u.next;
          l = d;
          do {
            if ((l.tag & t) === t) {
              var y = l.inst,
                b = y.destroy;
              if (b !== void 0) {
                (y.destroy = void 0), (u = r);
                var x = i;
                try {
                  b();
                } catch (D) {
                  Be(u, x, D);
                }
              }
            }
            l = l.next;
          } while (l !== d);
        }
      } catch (D) {
        Be(r, r.return, D);
      }
    }
    function tg(t) {
      var r = t.updateQueue;
      if (r !== null) {
        var i = t.stateNode;
        try {
          eg(r, i);
        } catch (l) {
          Be(t, t.return, l);
        }
      }
    }
    function ng(t, r, i) {
      (i.props = sa(t.type, t.memoizedProps)), (i.state = t.memoizedState);
      try {
        i.componentWillUnmount();
      } catch (l) {
        Be(t, r, l);
      }
    }
    function ua(t, r) {
      try {
        var i = t.ref;
        if (i !== null) {
          var l = t.stateNode;
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var u = l;
              break;
            default:
              u = l;
          }
          typeof i == "function" ? (t.refCleanup = i(u)) : (i.current = u);
        }
      } catch (d) {
        Be(t, r, d);
      }
    }
    function Ut(t, r) {
      var i = t.ref,
        l = t.refCleanup;
      if (i !== null)
        if (typeof l == "function")
          try {
            l();
          } catch (u) {
            Be(t, r, u);
          } finally {
            (t.refCleanup = null),
              (t = t.alternate),
              t != null && (t.refCleanup = null);
          }
        else if (typeof i == "function")
          try {
            i(null);
          } catch (u) {
            Be(t, r, u);
          }
        else i.current = null;
    }
    function rg(t) {
      var r = t.type,
        i = t.memoizedProps,
        l = t.stateNode;
      try {
        e: switch (r) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            i.autoFocus && l.focus();
            break e;
          case "img":
            i.src ? (l.src = i.src) : i.srcSet && (l.srcset = i.srcSet);
        }
      } catch (u) {
        Be(t, t.return, u);
      }
    }
    function ag(t, r, i) {
      try {
        var l = t.stateNode;
        ww(l, t.type, i, r), (l[Ot] = r);
      } catch (u) {
        Be(t, t.return, u);
      }
    }
    function ig(t) {
      return (
        t.tag === 5 ||
        t.tag === 3 ||
        t.tag === 26 ||
        t.tag === 27 ||
        t.tag === 4
      );
    }
    function cf(t) {
      e: for (;;) {
        for (; t.sibling === null; ) {
          if (t.return === null || ig(t.return)) return null;
          t = t.return;
        }
        for (
          t.sibling.return = t.return, t = t.sibling;
          t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

        ) {
          if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
          (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function ff(t, r, i) {
      var l = t.tag;
      if (l === 5 || l === 6)
        (t = t.stateNode),
          r
            ? i.nodeType === 8
              ? i.parentNode.insertBefore(t, r)
              : i.insertBefore(t, r)
            : (i.nodeType === 8
                ? ((r = i.parentNode), r.insertBefore(t, i))
                : ((r = i), r.appendChild(t)),
              (i = i._reactRootContainer),
              i != null || r.onclick !== null || (r.onclick = go));
      else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
        for (ff(t, r, i), t = t.sibling; t !== null; )
          ff(t, r, i), (t = t.sibling);
    }
    function ro(t, r, i) {
      var l = t.tag;
      if (l === 5 || l === 6)
        (t = t.stateNode), r ? i.insertBefore(t, r) : i.appendChild(t);
      else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
        for (ro(t, r, i), t = t.sibling; t !== null; )
          ro(t, r, i), (t = t.sibling);
    }
    var qn = !1,
      Ge = !1,
      df = !1,
      sg = typeof WeakSet == "function" ? WeakSet : Set,
      lt = null,
      lg = !1;
    function J2(t, r) {
      if (((t = t.containerInfo), (qf = _o), (t = _m(t)), hc(t))) {
        if ("selectionStart" in t)
          var i = { start: t.selectionStart, end: t.selectionEnd };
        else
          e: {
            i = ((i = t.ownerDocument) && i.defaultView) || window;
            var l = i.getSelection && i.getSelection();
            if (l && l.rangeCount !== 0) {
              i = l.anchorNode;
              var u = l.anchorOffset,
                d = l.focusNode;
              l = l.focusOffset;
              try {
                i.nodeType, d.nodeType;
              } catch {
                i = null;
                break e;
              }
              var y = 0,
                b = -1,
                x = -1,
                D = 0,
                H = 0,
                I = t,
                k = null;
              t: for (;;) {
                for (
                  var q;
                  I !== i || (u !== 0 && I.nodeType !== 3) || (b = y + u),
                    I !== d || (l !== 0 && I.nodeType !== 3) || (x = y + l),
                    I.nodeType === 3 && (y += I.nodeValue.length),
                    (q = I.firstChild) !== null;

                )
                  (k = I), (I = q);
                for (;;) {
                  if (I === t) break t;
                  if (
                    (k === i && ++D === u && (b = y),
                    k === d && ++H === l && (x = y),
                    (q = I.nextSibling) !== null)
                  )
                    break;
                  (I = k), (k = I.parentNode);
                }
                I = q;
              }
              i = b === -1 || x === -1 ? null : { start: b, end: x };
            } else i = null;
          }
        i = i || { start: 0, end: 0 };
      } else i = null;
      for (
        Hf = { focusedElem: t, selectionRange: i }, _o = !1, lt = r;
        lt !== null;

      )
        if (
          ((r = lt), (t = r.child), (r.subtreeFlags & 1028) !== 0 && t !== null)
        )
          (t.return = r), (lt = t);
        else
          for (; lt !== null; ) {
            switch (((r = lt), (d = r.alternate), (t = r.flags), r.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (t & 1024 && d !== null) {
                  (t = void 0),
                    (i = r),
                    (u = d.memoizedProps),
                    (d = d.memoizedState),
                    (l = i.stateNode);
                  try {
                    var te = sa(i.type, u, i.elementType === i.type);
                    (t = l.getSnapshotBeforeUpdate(te, d)),
                      (l.__reactInternalSnapshotBeforeUpdate = t);
                  } catch (ce) {
                    Be(i, i.return, ce);
                  }
                }
                break;
              case 3:
                if (t & 1024) {
                  if (
                    ((t = r.stateNode.containerInfo), (i = t.nodeType), i === 9)
                  )
                    Gf(t);
                  else if (i === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Gf(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (t & 1024) throw Error(s(163));
            }
            if (((t = r.sibling), t !== null)) {
              (t.return = r.return), (lt = t);
              break;
            }
            lt = r.return;
          }
      return (te = lg), (lg = !1), te;
    }
    function og(t, r, i) {
      var l = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Fn(t, i), l & 4 && ws(5, i);
          break;
        case 1:
          if ((Fn(t, i), l & 4))
            if (((t = i.stateNode), r === null))
              try {
                t.componentDidMount();
              } catch (b) {
                Be(i, i.return, b);
              }
            else {
              var u = sa(i.type, r.memoizedProps);
              r = r.memoizedState;
              try {
                t.componentDidUpdate(
                  u,
                  r,
                  t.__reactInternalSnapshotBeforeUpdate
                );
              } catch (b) {
                Be(i, i.return, b);
              }
            }
          l & 64 && tg(i), l & 512 && ua(i, i.return);
          break;
        case 3:
          if ((Fn(t, i), l & 64 && ((l = i.updateQueue), l !== null))) {
            if (((t = null), i.child !== null))
              switch (i.child.tag) {
                case 27:
                case 5:
                  t = i.child.stateNode;
                  break;
                case 1:
                  t = i.child.stateNode;
              }
            try {
              eg(l, t);
            } catch (b) {
              Be(i, i.return, b);
            }
          }
          break;
        case 26:
          Fn(t, i), l & 512 && ua(i, i.return);
          break;
        case 27:
        case 5:
          Fn(t, i), r === null && l & 4 && rg(i), l & 512 && ua(i, i.return);
          break;
        case 12:
          Fn(t, i);
          break;
        case 13:
          Fn(t, i), l & 4 && fg(t, i);
          break;
        case 22:
          if (((u = i.memoizedState !== null || qn), !u)) {
            r = (r !== null && r.memoizedState !== null) || Ge;
            var d = qn,
              y = Ge;
            (qn = u),
              (Ge = r) && !y
                ? Er(t, i, (i.subtreeFlags & 8772) !== 0)
                : Fn(t, i),
              (qn = d),
              (Ge = y);
          }
          l & 512 &&
            (i.memoizedProps.mode === "manual"
              ? ua(i, i.return)
              : Ut(i, i.return));
          break;
        default:
          Fn(t, i);
      }
    }
    function ug(t) {
      var r = t.alternate;
      r !== null && ((t.alternate = null), ug(r)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 && ((r = t.stateNode), r !== null && Zu(r)),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
    }
    var Je = null,
      Lt = !1;
    function Hn(t, r, i) {
      for (i = i.child; i !== null; ) cg(t, r, i), (i = i.sibling);
    }
    function cg(t, r, i) {
      if (xt && typeof xt.onCommitFiberUnmount == "function")
        try {
          xt.onCommitFiberUnmount(lr, i);
        } catch {}
      switch (i.tag) {
        case 26:
          Ge || Ut(i, r),
            Hn(t, r, i),
            i.memoizedState
              ? i.memoizedState.count--
              : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
          break;
        case 27:
          Ge || Ut(i, r);
          var l = Je,
            u = Lt;
          for (
            Je = i.stateNode, Hn(t, r, i), i = i.stateNode, r = i.attributes;
            r.length;

          )
            i.removeAttributeNode(r[0]);
          Zu(i), (Je = l), (Lt = u);
          break;
        case 5:
          Ge || Ut(i, r);
        case 6:
          u = Je;
          var d = Lt;
          if (((Je = null), Hn(t, r, i), (Je = u), (Lt = d), Je !== null))
            if (Lt)
              try {
                (t = Je),
                  (l = i.stateNode),
                  t.nodeType === 8
                    ? t.parentNode.removeChild(l)
                    : t.removeChild(l);
              } catch (y) {
                Be(i, r, y);
              }
            else
              try {
                Je.removeChild(i.stateNode);
              } catch (y) {
                Be(i, r, y);
              }
          break;
        case 18:
          Je !== null &&
            (Lt
              ? ((r = Je),
                (i = i.stateNode),
                r.nodeType === 8
                  ? If(r.parentNode, i)
                  : r.nodeType === 1 && If(r, i),
                qs(r))
              : If(Je, i.stateNode));
          break;
        case 4:
          (l = Je),
            (u = Lt),
            (Je = i.stateNode.containerInfo),
            (Lt = !0),
            Hn(t, r, i),
            (Je = l),
            (Lt = u);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ge || Sr(2, i, r), Ge || Sr(4, i, r), Hn(t, r, i);
          break;
        case 1:
          Ge ||
            (Ut(i, r),
            (l = i.stateNode),
            typeof l.componentWillUnmount == "function" && ng(i, r, l)),
            Hn(t, r, i);
          break;
        case 21:
          Hn(t, r, i);
          break;
        case 22:
          Ge || Ut(i, r),
            (Ge = (l = Ge) || i.memoizedState !== null),
            Hn(t, r, i),
            (Ge = l);
          break;
        default:
          Hn(t, r, i);
      }
    }
    function fg(t, r) {
      if (
        r.memoizedState === null &&
        ((t = r.alternate),
        t !== null &&
          ((t = t.memoizedState),
          t !== null && ((t = t.dehydrated), t !== null)))
      )
        try {
          qs(t);
        } catch (i) {
          Be(r, r.return, i);
        }
    }
    function W2(t) {
      switch (t.tag) {
        case 13:
        case 19:
          var r = t.stateNode;
          return r === null && (r = t.stateNode = new sg()), r;
        case 22:
          return (
            (t = t.stateNode),
            (r = t._retryCache),
            r === null && (r = t._retryCache = new sg()),
            r
          );
        default:
          throw Error(s(435, t.tag));
      }
    }
    function hf(t, r) {
      var i = W2(t);
      r.forEach(function (l) {
        var u = dw.bind(null, t, l);
        i.has(l) || (i.add(l), l.then(u, u));
      });
    }
    function Wt(t, r) {
      var i = r.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var u = i[l],
            d = t,
            y = r,
            b = y;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 27:
              case 5:
                (Je = b.stateNode), (Lt = !1);
                break e;
              case 3:
                (Je = b.stateNode.containerInfo), (Lt = !0);
                break e;
              case 4:
                (Je = b.stateNode.containerInfo), (Lt = !0);
                break e;
            }
            b = b.return;
          }
          if (Je === null) throw Error(s(160));
          cg(d, y, u),
            (Je = null),
            (Lt = !1),
            (d = u.alternate),
            d !== null && (d.return = null),
            (u.return = null);
        }
      if (r.subtreeFlags & 13878)
        for (r = r.child; r !== null; ) dg(r, t), (r = r.sibling);
    }
    var dn = null;
    function dg(t, r) {
      var i = t.alternate,
        l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wt(r, t),
            en(t),
            l & 4 && (Sr(3, t, t.return), ws(3, t), Sr(5, t, t.return));
          break;
        case 1:
          Wt(r, t),
            en(t),
            l & 512 && (Ge || i === null || Ut(i, i.return)),
            l & 64 &&
              qn &&
              ((t = t.updateQueue),
              t !== null &&
                ((l = t.callbacks),
                l !== null &&
                  ((i = t.shared.hiddenCallbacks),
                  (t.shared.hiddenCallbacks = i === null ? l : i.concat(l)))));
          break;
        case 26:
          var u = dn;
          if (
            (Wt(r, t),
            en(t),
            l & 512 && (Ge || i === null || Ut(i, i.return)),
            l & 4)
          ) {
            var d = i !== null ? i.memoizedState : null;
            if (((l = t.memoizedState), i === null))
              if (l === null)
                if (t.stateNode === null) {
                  e: {
                    (l = t.type),
                      (i = t.memoizedProps),
                      (u = u.ownerDocument || u);
                    t: switch (l) {
                      case "title":
                        (d = u.getElementsByTagName("title")[0]),
                          (!d ||
                            d[Ki] ||
                            d[vt] ||
                            d.namespaceURI === "http://www.w3.org/2000/svg" ||
                            d.hasAttribute("itemprop")) &&
                            ((d = u.createElement(l)),
                            u.head.insertBefore(
                              d,
                              u.querySelector("head > title")
                            )),
                          mt(d, l, i),
                          (d[vt] = t),
                          it(d),
                          (l = d);
                        break e;
                      case "link":
                        var y = r0("link", "href", u).get(l + (i.href || ""));
                        if (y) {
                          for (var b = 0; b < y.length; b++)
                            if (
                              ((d = y[b]),
                              d.getAttribute("href") ===
                                (i.href == null ? null : i.href) &&
                                d.getAttribute("rel") ===
                                  (i.rel == null ? null : i.rel) &&
                                d.getAttribute("title") ===
                                  (i.title == null ? null : i.title) &&
                                d.getAttribute("crossorigin") ===
                                  (i.crossOrigin == null
                                    ? null
                                    : i.crossOrigin))
                            ) {
                              y.splice(b, 1);
                              break t;
                            }
                        }
                        (d = u.createElement(l)),
                          mt(d, l, i),
                          u.head.appendChild(d);
                        break;
                      case "meta":
                        if (
                          (y = r0("meta", "content", u).get(
                            l + (i.content || "")
                          ))
                        ) {
                          for (b = 0; b < y.length; b++)
                            if (
                              ((d = y[b]),
                              d.getAttribute("content") ===
                                (i.content == null ? null : "" + i.content) &&
                                d.getAttribute("name") ===
                                  (i.name == null ? null : i.name) &&
                                d.getAttribute("property") ===
                                  (i.property == null ? null : i.property) &&
                                d.getAttribute("http-equiv") ===
                                  (i.httpEquiv == null ? null : i.httpEquiv) &&
                                d.getAttribute("charset") ===
                                  (i.charSet == null ? null : i.charSet))
                            ) {
                              y.splice(b, 1);
                              break t;
                            }
                        }
                        (d = u.createElement(l)),
                          mt(d, l, i),
                          u.head.appendChild(d);
                        break;
                      default:
                        throw Error(s(468, l));
                    }
                    (d[vt] = t), it(d), (l = d);
                  }
                  t.stateNode = l;
                } else a0(u, t.type, t.stateNode);
              else t.stateNode = n0(u, l, t.memoizedProps);
            else
              d !== l
                ? (d === null
                    ? i.stateNode !== null &&
                      ((i = i.stateNode), i.parentNode.removeChild(i))
                    : d.count--,
                  l === null
                    ? a0(u, t.type, t.stateNode)
                    : n0(u, l, t.memoizedProps))
                : l === null &&
                  t.stateNode !== null &&
                  ag(t, t.memoizedProps, i.memoizedProps);
          }
          break;
        case 27:
          if (l & 4 && t.alternate === null) {
            (u = t.stateNode), (d = t.memoizedProps);
            try {
              for (var x = u.firstChild; x; ) {
                var D = x.nextSibling,
                  H = x.nodeName;
                x[Ki] ||
                  H === "HEAD" ||
                  H === "BODY" ||
                  H === "SCRIPT" ||
                  H === "STYLE" ||
                  (H === "LINK" && x.rel.toLowerCase() === "stylesheet") ||
                  u.removeChild(x),
                  (x = D);
              }
              for (var I = t.type, k = u.attributes; k.length; )
                u.removeAttributeNode(k[0]);
              mt(u, I, d), (u[vt] = t), (u[Ot] = d);
            } catch (te) {
              Be(t, t.return, te);
            }
          }
        case 5:
          if (
            (Wt(r, t),
            en(t),
            l & 512 && (Ge || i === null || Ut(i, i.return)),
            t.flags & 32)
          ) {
            u = t.stateNode;
            try {
              Pa(u, "");
            } catch (te) {
              Be(t, t.return, te);
            }
          }
          l & 4 &&
            t.stateNode != null &&
            ((u = t.memoizedProps), ag(t, u, i !== null ? i.memoizedProps : u)),
            l & 1024 && (df = !0);
          break;
        case 6:
          if ((Wt(r, t), en(t), l & 4)) {
            if (t.stateNode === null) throw Error(s(162));
            (l = t.memoizedProps), (i = t.stateNode);
            try {
              i.nodeValue = l;
            } catch (te) {
              Be(t, t.return, te);
            }
          }
          break;
        case 3:
          if (
            ((Eo = null),
            (u = dn),
            (dn = bo(r.containerInfo)),
            Wt(r, t),
            (dn = u),
            en(t),
            l & 4 && i !== null && i.memoizedState.isDehydrated)
          )
            try {
              qs(r.containerInfo);
            } catch (te) {
              Be(t, t.return, te);
            }
          df && ((df = !1), hg(t));
          break;
        case 4:
          (l = dn),
            (dn = bo(t.stateNode.containerInfo)),
            Wt(r, t),
            en(t),
            (dn = l);
          break;
        case 12:
          Wt(r, t), en(t);
          break;
        case 13:
          Wt(r, t),
            en(t),
            t.child.flags & 8192 &&
              (t.memoizedState !== null) !=
                (i !== null && i.memoizedState !== null) &&
              (wf = J()),
            l & 4 &&
              ((l = t.updateQueue),
              l !== null && ((t.updateQueue = null), hf(t, l)));
          break;
        case 22:
          if (
            (l & 512 && (Ge || i === null || Ut(i, i.return)),
            (x = t.memoizedState !== null),
            (D = i !== null && i.memoizedState !== null),
            (H = qn),
            (I = Ge),
            (qn = H || x),
            (Ge = I || D),
            Wt(r, t),
            (Ge = I),
            (qn = H),
            en(t),
            (r = t.stateNode),
            (r._current = t),
            (r._visibility &= -3),
            (r._visibility |= r._pendingVisibility & 2),
            l & 8192 &&
              ((r._visibility = x ? r._visibility & -2 : r._visibility | 1),
              x && ((r = qn || Ge), i === null || D || r || ui(t)),
              t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
          )
            e: for (i = null, r = t; ; ) {
              if (r.tag === 5 || r.tag === 26 || r.tag === 27) {
                if (i === null) {
                  D = i = r;
                  try {
                    if (((u = D.stateNode), x))
                      (d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none");
                    else {
                      (y = D.stateNode), (b = D.memoizedProps.style);
                      var q =
                        b != null && b.hasOwnProperty("display")
                          ? b.display
                          : null;
                      y.style.display =
                        q == null || typeof q == "boolean"
                          ? ""
                          : ("" + q).trim();
                    }
                  } catch (te) {
                    Be(D, D.return, te);
                  }
                }
              } else if (r.tag === 6) {
                if (i === null) {
                  D = r;
                  try {
                    D.stateNode.nodeValue = x ? "" : D.memoizedProps;
                  } catch (te) {
                    Be(D, D.return, te);
                  }
                }
              } else if (
                ((r.tag !== 22 && r.tag !== 23) ||
                  r.memoizedState === null ||
                  r === t) &&
                r.child !== null
              ) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t) break e;
                i === r && (i = null), (r = r.return);
              }
              i === r && (i = null),
                (r.sibling.return = r.return),
                (r = r.sibling);
            }
          l & 4 &&
            ((l = t.updateQueue),
            l !== null &&
              ((i = l.retryQueue),
              i !== null && ((l.retryQueue = null), hf(t, i))));
          break;
        case 19:
          Wt(r, t),
            en(t),
            l & 4 &&
              ((l = t.updateQueue),
              l !== null && ((t.updateQueue = null), hf(t, l)));
          break;
        case 21:
          break;
        default:
          Wt(r, t), en(t);
      }
    }
    function en(t) {
      var r = t.flags;
      if (r & 2) {
        try {
          if (t.tag !== 27) {
            e: {
              for (var i = t.return; i !== null; ) {
                if (ig(i)) {
                  var l = i;
                  break e;
                }
                i = i.return;
              }
              throw Error(s(160));
            }
            switch (l.tag) {
              case 27:
                var u = l.stateNode,
                  d = cf(t);
                ro(t, d, u);
                break;
              case 5:
                var y = l.stateNode;
                l.flags & 32 && (Pa(y, ""), (l.flags &= -33));
                var b = cf(t);
                ro(t, b, y);
                break;
              case 3:
              case 4:
                var x = l.stateNode.containerInfo,
                  D = cf(t);
                ff(t, D, x);
                break;
              default:
                throw Error(s(161));
            }
          }
        } catch (H) {
          Be(t, t.return, H);
        }
        t.flags &= -3;
      }
      r & 4096 && (t.flags &= -4097);
    }
    function hg(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var r = t;
          hg(r),
            r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
            (t = t.sibling);
        }
    }
    function Fn(t, r) {
      if (r.subtreeFlags & 8772)
        for (r = r.child; r !== null; ) og(t, r.alternate, r), (r = r.sibling);
    }
    function ui(t) {
      for (t = t.child; t !== null; ) {
        var r = t;
        switch (r.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Sr(4, r, r.return), ui(r);
            break;
          case 1:
            Ut(r, r.return);
            var i = r.stateNode;
            typeof i.componentWillUnmount == "function" && ng(r, r.return, i),
              ui(r);
            break;
          case 26:
          case 27:
          case 5:
            Ut(r, r.return), ui(r);
            break;
          case 22:
            Ut(r, r.return), r.memoizedState === null && ui(r);
            break;
          default:
            ui(r);
        }
        t = t.sibling;
      }
    }
    function Er(t, r, i) {
      for (i = i && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
        var l = r.alternate,
          u = t,
          d = r,
          y = d.flags;
        switch (d.tag) {
          case 0:
          case 11:
          case 15:
            Er(u, d, i), ws(4, d);
            break;
          case 1:
            if (
              (Er(u, d, i),
              (l = d),
              (u = l.stateNode),
              typeof u.componentDidMount == "function")
            )
              try {
                u.componentDidMount();
              } catch (D) {
                Be(l, l.return, D);
              }
            if (((l = d), (u = l.updateQueue), u !== null)) {
              var b = l.stateNode;
              try {
                var x = u.shared.hiddenCallbacks;
                if (x !== null)
                  for (
                    u.shared.hiddenCallbacks = null, u = 0;
                    u < x.length;
                    u++
                  )
                    Wy(x[u], b);
              } catch (D) {
                Be(l, l.return, D);
              }
            }
            i && y & 64 && tg(d), ua(d, d.return);
            break;
          case 26:
          case 27:
          case 5:
            Er(u, d, i), i && l === null && y & 4 && rg(d), ua(d, d.return);
            break;
          case 12:
            Er(u, d, i);
            break;
          case 13:
            Er(u, d, i), i && y & 4 && fg(u, d);
            break;
          case 22:
            d.memoizedState === null && Er(u, d, i), ua(d, d.return);
            break;
          default:
            Er(u, d, i);
        }
        r = r.sibling;
      }
    }
    function pf(t, r) {
      var i = null;
      t !== null &&
        t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (i = t.memoizedState.cachePool.pool),
        (t = null),
        r.memoizedState !== null &&
          r.memoizedState.cachePool !== null &&
          (t = r.memoizedState.cachePool.pool),
        t !== i && (t != null && t.refCount++, i != null && ds(i));
    }
    function mf(t, r) {
      (t = null),
        r.alternate !== null && (t = r.alternate.memoizedState.cache),
        (r = r.memoizedState.cache),
        r !== t && (r.refCount++, t != null && ds(t));
    }
    function wr(t, r, i, l) {
      if (r.subtreeFlags & 10256)
        for (r = r.child; r !== null; ) pg(t, r, i, l), (r = r.sibling);
    }
    function pg(t, r, i, l) {
      var u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          wr(t, r, i, l), u & 2048 && ws(9, r);
          break;
        case 3:
          wr(t, r, i, l),
            u & 2048 &&
              ((t = null),
              r.alternate !== null && (t = r.alternate.memoizedState.cache),
              (r = r.memoizedState.cache),
              r !== t && (r.refCount++, t != null && ds(t)));
          break;
        case 12:
          if (u & 2048) {
            wr(t, r, i, l), (t = r.stateNode);
            try {
              var d = r.memoizedProps,
                y = d.id,
                b = d.onPostCommit;
              typeof b == "function" &&
                b(
                  y,
                  r.alternate === null ? "mount" : "update",
                  t.passiveEffectDuration,
                  -0
                );
            } catch (x) {
              Be(r, r.return, x);
            }
          } else wr(t, r, i, l);
          break;
        case 23:
          break;
        case 22:
          (d = r.stateNode),
            r.memoizedState !== null
              ? d._visibility & 4
                ? wr(t, r, i, l)
                : xs(t, r)
              : d._visibility & 4
              ? wr(t, r, i, l)
              : ((d._visibility |= 4),
                ci(t, r, i, l, (r.subtreeFlags & 10256) !== 0)),
            u & 2048 && pf(r.alternate, r);
          break;
        case 24:
          wr(t, r, i, l), u & 2048 && mf(r.alternate, r);
          break;
        default:
          wr(t, r, i, l);
      }
    }
    function ci(t, r, i, l, u) {
      for (u = u && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
        var d = t,
          y = r,
          b = i,
          x = l,
          D = y.flags;
        switch (y.tag) {
          case 0:
          case 11:
          case 15:
            ci(d, y, b, x, u), ws(8, y);
            break;
          case 23:
            break;
          case 22:
            var H = y.stateNode;
            y.memoizedState !== null
              ? H._visibility & 4
                ? ci(d, y, b, x, u)
                : xs(d, y)
              : ((H._visibility |= 4), ci(d, y, b, x, u)),
              u && D & 2048 && pf(y.alternate, y);
            break;
          case 24:
            ci(d, y, b, x, u), u && D & 2048 && mf(y.alternate, y);
            break;
          default:
            ci(d, y, b, x, u);
        }
        r = r.sibling;
      }
    }
    function xs(t, r) {
      if (r.subtreeFlags & 10256)
        for (r = r.child; r !== null; ) {
          var i = t,
            l = r,
            u = l.flags;
          switch (l.tag) {
            case 22:
              xs(i, l), u & 2048 && pf(l.alternate, l);
              break;
            case 24:
              xs(i, l), u & 2048 && mf(l.alternate, l);
              break;
            default:
              xs(i, l);
          }
          r = r.sibling;
        }
    }
    var _s = 8192;
    function fi(t) {
      if (t.subtreeFlags & _s)
        for (t = t.child; t !== null; ) mg(t), (t = t.sibling);
    }
    function mg(t) {
      switch (t.tag) {
        case 26:
          fi(t),
            t.flags & _s &&
              t.memoizedState !== null &&
              Hw(dn, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          fi(t);
          break;
        case 3:
        case 4:
          var r = dn;
          (dn = bo(t.stateNode.containerInfo)), fi(t), (dn = r);
          break;
        case 22:
          t.memoizedState === null &&
            ((r = t.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = _s), (_s = 16777216), fi(t), (_s = r))
              : fi(t));
          break;
        default:
          fi(t);
      }
    }
    function yg(t) {
      var r = t.alternate;
      if (r !== null && ((t = r.child), t !== null)) {
        r.child = null;
        do (r = t.sibling), (t.sibling = null), (t = r);
        while (t !== null);
      }
    }
    function Ts(t) {
      var r = t.deletions;
      if (t.flags & 16) {
        if (r !== null)
          for (var i = 0; i < r.length; i++) {
            var l = r[i];
            (lt = l), vg(l, t);
          }
        yg(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) gg(t), (t = t.sibling);
    }
    function gg(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ts(t), t.flags & 2048 && Sr(9, t, t.return);
          break;
        case 3:
          Ts(t);
          break;
        case 12:
          Ts(t);
          break;
        case 22:
          var r = t.stateNode;
          t.memoizedState !== null &&
          r._visibility & 4 &&
          (t.return === null || t.return.tag !== 13)
            ? ((r._visibility &= -5), ao(t))
            : Ts(t);
          break;
        default:
          Ts(t);
      }
    }
    function ao(t) {
      var r = t.deletions;
      if (t.flags & 16) {
        if (r !== null)
          for (var i = 0; i < r.length; i++) {
            var l = r[i];
            (lt = l), vg(l, t);
          }
        yg(t);
      }
      for (t = t.child; t !== null; ) {
        switch (((r = t), r.tag)) {
          case 0:
          case 11:
          case 15:
            Sr(8, r, r.return), ao(r);
            break;
          case 22:
            (i = r.stateNode),
              i._visibility & 4 && ((i._visibility &= -5), ao(r));
            break;
          default:
            ao(r);
        }
        t = t.sibling;
      }
    }
    function vg(t, r) {
      for (; lt !== null; ) {
        var i = lt;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Sr(8, i, r);
            break;
          case 23:
          case 22:
            if (
              i.memoizedState !== null &&
              i.memoizedState.cachePool !== null
            ) {
              var l = i.memoizedState.cachePool.pool;
              l != null && l.refCount++;
            }
            break;
          case 24:
            ds(i.memoizedState.cache);
        }
        if (((l = i.child), l !== null)) (l.return = i), (lt = l);
        else
          e: for (i = t; lt !== null; ) {
            l = lt;
            var u = l.sibling,
              d = l.return;
            if ((ug(l), l === i)) {
              lt = null;
              break e;
            }
            if (u !== null) {
              (u.return = d), (lt = u);
              break e;
            }
            lt = d;
          }
      }
    }
    function ew(t, r, i, l) {
      (this.tag = t),
        (this.key = i),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = r),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = l),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function tn(t, r, i, l) {
      return new ew(t, r, i, l);
    }
    function yf(t) {
      return (t = t.prototype), !(!t || !t.isReactComponent);
    }
    function xr(t, r) {
      var i = t.alternate;
      return (
        i === null
          ? ((i = tn(t.tag, r, t.key, t.mode)),
            (i.elementType = t.elementType),
            (i.type = t.type),
            (i.stateNode = t.stateNode),
            (i.alternate = t),
            (t.alternate = i))
          : ((i.pendingProps = r),
            (i.type = t.type),
            (i.flags = 0),
            (i.subtreeFlags = 0),
            (i.deletions = null)),
        (i.flags = t.flags & 31457280),
        (i.childLanes = t.childLanes),
        (i.lanes = t.lanes),
        (i.child = t.child),
        (i.memoizedProps = t.memoizedProps),
        (i.memoizedState = t.memoizedState),
        (i.updateQueue = t.updateQueue),
        (r = t.dependencies),
        (i.dependencies =
          r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
        (i.sibling = t.sibling),
        (i.index = t.index),
        (i.ref = t.ref),
        (i.refCleanup = t.refCleanup),
        i
      );
    }
    function bg(t, r) {
      t.flags &= 31457282;
      var i = t.alternate;
      return (
        i === null
          ? ((t.childLanes = 0),
            (t.lanes = r),
            (t.child = null),
            (t.subtreeFlags = 0),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.dependencies = null),
            (t.stateNode = null))
          : ((t.childLanes = i.childLanes),
            (t.lanes = i.lanes),
            (t.child = i.child),
            (t.subtreeFlags = 0),
            (t.deletions = null),
            (t.memoizedProps = i.memoizedProps),
            (t.memoizedState = i.memoizedState),
            (t.updateQueue = i.updateQueue),
            (t.type = i.type),
            (r = i.dependencies),
            (t.dependencies =
              r === null
                ? null
                : { lanes: r.lanes, firstContext: r.firstContext })),
        t
      );
    }
    function io(t, r, i, l, u, d) {
      var y = 0;
      if (((l = t), typeof t == "function")) yf(t) && (y = 1);
      else if (typeof t == "string")
        y = $w(t, i, At.current)
          ? 26
          : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
      else
        e: switch (t) {
          case h:
            return ca(i.children, u, d, r);
          case m:
            (y = 8), (u |= 24);
            break;
          case g:
            return (
              (t = tn(12, i, r, u | 2)), (t.elementType = g), (t.lanes = d), t
            );
          case M:
            return (t = tn(13, i, r, u)), (t.elementType = M), (t.lanes = d), t;
          case A:
            return (t = tn(19, i, r, u)), (t.elementType = A), (t.lanes = d), t;
          case B:
            return Sg(i, u, d, r);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case v:
                case _:
                  y = 10;
                  break e;
                case S:
                  y = 9;
                  break e;
                case w:
                  y = 11;
                  break e;
                case T:
                  y = 14;
                  break e;
                case L:
                  (y = 16), (l = null);
                  break e;
              }
            (y = 29),
              (i = Error(s(130, t === null ? "null" : typeof t, ""))),
              (l = null);
        }
      return (
        (r = tn(y, i, r, u)),
        (r.elementType = t),
        (r.type = l),
        (r.lanes = d),
        r
      );
    }
    function ca(t, r, i, l) {
      return (t = tn(7, t, l, r)), (t.lanes = i), t;
    }
    function Sg(t, r, i, l) {
      (t = tn(22, t, l, r)), (t.elementType = B), (t.lanes = i);
      var u = {
        _visibility: 1,
        _pendingVisibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function () {
          var d = u._current;
          if (d === null) throw Error(s(456));
          if (!(u._pendingVisibility & 2)) {
            var y = fr(d, 2);
            y !== null && ((u._pendingVisibility |= 2), Tt(y, d, 2));
          }
        },
        attach: function () {
          var d = u._current;
          if (d === null) throw Error(s(456));
          if (u._pendingVisibility & 2) {
            var y = fr(d, 2);
            y !== null && ((u._pendingVisibility &= -3), Tt(y, d, 2));
          }
        },
      };
      return (t.stateNode = u), t;
    }
    function gf(t, r, i) {
      return (t = tn(6, t, null, r)), (t.lanes = i), t;
    }
    function vf(t, r, i) {
      return (
        (r = tn(4, t.children !== null ? t.children : [], t.key, r)),
        (r.lanes = i),
        (r.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        r
      );
    }
    function Vn(t) {
      t.flags |= 4;
    }
    function Eg(t, r) {
      if (r.type !== "stylesheet" || r.state.loading & 4) t.flags &= -16777217;
      else if (((t.flags |= 16777216), !i0(r))) {
        if (
          ((r = Jt.current),
          r !== null &&
            ((we & 4194176) === we
              ? wn !== null
              : ((we & 62914560) !== we && !(we & 536870912)) || r !== wn))
        )
          throw ((us = wc), zm);
        t.flags |= 8192;
      }
    }
    function so(t, r) {
      r !== null && (t.flags |= 4),
        t.flags & 16384 &&
          ((r = t.tag !== 22 ? $p() : 536870912), (t.lanes |= r), (hi |= r));
    }
    function As(t, r) {
      if (!Oe)
        switch (t.tailMode) {
          case "hidden":
            r = t.tail;
            for (var i = null; r !== null; )
              r.alternate !== null && (i = r), (r = r.sibling);
            i === null ? (t.tail = null) : (i.sibling = null);
            break;
          case "collapsed":
            i = t.tail;
            for (var l = null; i !== null; )
              i.alternate !== null && (l = i), (i = i.sibling);
            l === null
              ? r || t.tail === null
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (l.sibling = null);
        }
    }
    function Ve(t) {
      var r = t.alternate !== null && t.alternate.child === t.child,
        i = 0,
        l = 0;
      if (r)
        for (var u = t.child; u !== null; )
          (i |= u.lanes | u.childLanes),
            (l |= u.subtreeFlags & 31457280),
            (l |= u.flags & 31457280),
            (u.return = t),
            (u = u.sibling);
      else
        for (u = t.child; u !== null; )
          (i |= u.lanes | u.childLanes),
            (l |= u.subtreeFlags),
            (l |= u.flags),
            (u.return = t),
            (u = u.sibling);
      return (t.subtreeFlags |= l), (t.childLanes = i), r;
    }
    function tw(t, r, i) {
      var l = r.pendingProps;
      switch ((Sc(r), r.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ve(r), null;
        case 1:
          return Ve(r), null;
        case 3:
          return (
            (i = r.stateNode),
            (l = null),
            t !== null && (l = t.memoizedState.cache),
            r.memoizedState.cache !== l && (r.flags |= 2048),
            $n(rt),
            sr(),
            i.pendingContext &&
              ((i.context = i.pendingContext), (i.pendingContext = null)),
            (t === null || t.child === null) &&
              (is(r)
                ? Vn(r)
                : t === null ||
                  (t.memoizedState.isDehydrated && !(r.flags & 256)) ||
                  ((r.flags |= 1024), fn !== null && (Af(fn), (fn = null)))),
            Ve(r),
            null
          );
        case 26:
          return (
            (i = r.memoizedState),
            t === null
              ? (Vn(r),
                i !== null
                  ? (Ve(r), Eg(r, i))
                  : (Ve(r), (r.flags &= -16777217)))
              : i
              ? i !== t.memoizedState
                ? (Vn(r), Ve(r), Eg(r, i))
                : (Ve(r), (r.flags &= -16777217))
              : (t.memoizedProps !== l && Vn(r), Ve(r), (r.flags &= -16777217)),
            null
          );
        case 27:
          $a(r), (i = on.current);
          var u = r.type;
          if (t !== null && r.stateNode != null) t.memoizedProps !== l && Vn(r);
          else {
            if (!l) {
              if (r.stateNode === null) throw Error(s(166));
              return Ve(r), null;
            }
            (t = At.current),
              is(r) ? Lm(r) : ((t = Zg(u, l, i)), (r.stateNode = t), Vn(r));
          }
          return Ve(r), null;
        case 5:
          if (($a(r), (i = r.type), t !== null && r.stateNode != null))
            t.memoizedProps !== l && Vn(r);
          else {
            if (!l) {
              if (r.stateNode === null) throw Error(s(166));
              return Ve(r), null;
            }
            if (((t = At.current), is(r))) Lm(r);
            else {
              switch (((u = vo(on.current)), t)) {
                case 1:
                  t = u.createElementNS("http://www.w3.org/2000/svg", i);
                  break;
                case 2:
                  t = u.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    i
                  );
                  break;
                default:
                  switch (i) {
                    case "svg":
                      t = u.createElementNS("http://www.w3.org/2000/svg", i);
                      break;
                    case "math":
                      t = u.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        i
                      );
                      break;
                    case "script":
                      (t = u.createElement("div")),
                        (t.innerHTML = "<script></script>"),
                        (t = t.removeChild(t.firstChild));
                      break;
                    case "select":
                      (t =
                        typeof l.is == "string"
                          ? u.createElement("select", { is: l.is })
                          : u.createElement("select")),
                        l.multiple
                          ? (t.multiple = !0)
                          : l.size && (t.size = l.size);
                      break;
                    default:
                      t =
                        typeof l.is == "string"
                          ? u.createElement(i, { is: l.is })
                          : u.createElement(i);
                  }
              }
              (t[vt] = r), (t[Ot] = l);
              e: for (u = r.child; u !== null; ) {
                if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
                else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
                if (u === r) break e;
                for (; u.sibling === null; ) {
                  if (u.return === null || u.return === r) break e;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
              r.stateNode = t;
              e: switch ((mt(t, i, l), i)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  t = !!l.autoFocus;
                  break e;
                case "img":
                  t = !0;
                  break e;
                default:
                  t = !1;
              }
              t && Vn(r);
            }
          }
          return Ve(r), (r.flags &= -16777217), null;
        case 6:
          if (t && r.stateNode != null) t.memoizedProps !== l && Vn(r);
          else {
            if (typeof l != "string" && r.stateNode === null)
              throw Error(s(166));
            if (((t = on.current), is(r))) {
              if (
                ((t = r.stateNode),
                (i = r.memoizedProps),
                (l = null),
                (u = _t),
                u !== null)
              )
                switch (u.tag) {
                  case 27:
                  case 5:
                    l = u.memoizedProps;
                }
              (t[vt] = r),
                (t = !!(
                  t.nodeValue === i ||
                  (l !== null && l.suppressHydrationWarning === !0) ||
                  Gg(t.nodeValue, i)
                )),
                t || ea(r);
            } else
              (t = vo(t).createTextNode(l)), (t[vt] = r), (r.stateNode = t);
          }
          return Ve(r), null;
        case 13:
          if (
            ((l = r.memoizedState),
            t === null ||
              (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
          ) {
            if (((u = is(r)), l !== null && l.dehydrated !== null)) {
              if (t === null) {
                if (!u) throw Error(s(318));
                if (
                  ((u = r.memoizedState),
                  (u = u !== null ? u.dehydrated : null),
                  !u)
                )
                  throw Error(s(317));
                u[vt] = r;
              } else
                ss(),
                  !(r.flags & 128) && (r.memoizedState = null),
                  (r.flags |= 4);
              Ve(r), (u = !1);
            } else fn !== null && (Af(fn), (fn = null)), (u = !0);
            if (!u) return r.flags & 256 ? (Un(r), r) : (Un(r), null);
          }
          if ((Un(r), r.flags & 128)) return (r.lanes = i), r;
          if (
            ((i = l !== null), (t = t !== null && t.memoizedState !== null), i)
          ) {
            (l = r.child),
              (u = null),
              l.alternate !== null &&
                l.alternate.memoizedState !== null &&
                l.alternate.memoizedState.cachePool !== null &&
                (u = l.alternate.memoizedState.cachePool.pool);
            var d = null;
            l.memoizedState !== null &&
              l.memoizedState.cachePool !== null &&
              (d = l.memoizedState.cachePool.pool),
              d !== u && (l.flags |= 2048);
          }
          return (
            i !== t && i && (r.child.flags |= 8192),
            so(r, r.updateQueue),
            Ve(r),
            null
          );
        case 4:
          return sr(), t === null && kf(r.stateNode.containerInfo), Ve(r), null;
        case 10:
          return $n(r.type), Ve(r), null;
        case 19:
          if ((Fe(nt), (u = r.memoizedState), u === null)) return Ve(r), null;
          if (((l = (r.flags & 128) !== 0), (d = u.rendering), d === null))
            if (l) As(u, !1);
            else {
              if (Pe !== 0 || (t !== null && t.flags & 128))
                for (t = r.child; t !== null; ) {
                  if (((d = Vl(t)), d !== null)) {
                    for (
                      r.flags |= 128,
                        As(u, !1),
                        t = d.updateQueue,
                        r.updateQueue = t,
                        so(r, t),
                        r.subtreeFlags = 0,
                        t = i,
                        i = r.child;
                      i !== null;

                    )
                      bg(i, t), (i = i.sibling);
                    return je(nt, (nt.current & 1) | 2), r.child;
                  }
                  t = t.sibling;
                }
              u.tail !== null &&
                J() > lo &&
                ((r.flags |= 128), (l = !0), As(u, !1), (r.lanes = 4194304));
            }
          else {
            if (!l)
              if (((t = Vl(d)), t !== null)) {
                if (
                  ((r.flags |= 128),
                  (l = !0),
                  (t = t.updateQueue),
                  (r.updateQueue = t),
                  so(r, t),
                  As(u, !0),
                  u.tail === null &&
                    u.tailMode === "hidden" &&
                    !d.alternate &&
                    !Oe)
                )
                  return Ve(r), null;
              } else
                2 * J() - u.renderingStartTime > lo &&
                  i !== 536870912 &&
                  ((r.flags |= 128), (l = !0), As(u, !1), (r.lanes = 4194304));
            u.isBackwards
              ? ((d.sibling = r.child), (r.child = d))
              : ((t = u.last),
                t !== null ? (t.sibling = d) : (r.child = d),
                (u.last = d));
          }
          return u.tail !== null
            ? ((r = u.tail),
              (u.rendering = r),
              (u.tail = r.sibling),
              (u.renderingStartTime = J()),
              (r.sibling = null),
              (t = nt.current),
              je(nt, l ? (t & 1) | 2 : t & 1),
              r)
            : (Ve(r), null);
        case 22:
        case 23:
          return (
            Un(r),
            _c(),
            (l = r.memoizedState !== null),
            t !== null
              ? (t.memoizedState !== null) !== l && (r.flags |= 8192)
              : l && (r.flags |= 8192),
            l
              ? i & 536870912 &&
                !(r.flags & 128) &&
                (Ve(r), r.subtreeFlags & 6 && (r.flags |= 8192))
              : Ve(r),
            (i = r.updateQueue),
            i !== null && so(r, i.retryQueue),
            (i = null),
            t !== null &&
              t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (i = t.memoizedState.cachePool.pool),
            (l = null),
            r.memoizedState !== null &&
              r.memoizedState.cachePool !== null &&
              (l = r.memoizedState.cachePool.pool),
            l !== i && (r.flags |= 2048),
            t !== null && Fe(na),
            null
          );
        case 24:
          return (
            (i = null),
            t !== null && (i = t.memoizedState.cache),
            r.memoizedState.cache !== i && (r.flags |= 2048),
            $n(rt),
            Ve(r),
            null
          );
        case 25:
          return null;
      }
      throw Error(s(156, r.tag));
    }
    function nw(t, r) {
      switch ((Sc(r), r.tag)) {
        case 1:
          return (
            (t = r.flags),
            t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
          );
        case 3:
          return (
            $n(rt),
            sr(),
            (t = r.flags),
            t & 65536 && !(t & 128) ? ((r.flags = (t & -65537) | 128), r) : null
          );
        case 26:
        case 27:
        case 5:
          return $a(r), null;
        case 13:
          if (
            (Un(r), (t = r.memoizedState), t !== null && t.dehydrated !== null)
          ) {
            if (r.alternate === null) throw Error(s(340));
            ss();
          }
          return (
            (t = r.flags),
            t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
          );
        case 19:
          return Fe(nt), null;
        case 4:
          return sr(), null;
        case 10:
          return $n(r.type), null;
        case 22:
        case 23:
          return (
            Un(r),
            _c(),
            t !== null && Fe(na),
            (t = r.flags),
            t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
          );
        case 24:
          return $n(rt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function wg(t, r) {
      switch ((Sc(r), r.tag)) {
        case 3:
          $n(rt), sr();
          break;
        case 26:
        case 27:
        case 5:
          $a(r);
          break;
        case 4:
          sr();
          break;
        case 13:
          Un(r);
          break;
        case 19:
          Fe(nt);
          break;
        case 10:
          $n(r.type);
          break;
        case 22:
        case 23:
          Un(r), _c(), t !== null && Fe(na);
          break;
        case 24:
          $n(rt);
      }
    }
    var rw = {
        getCacheForType: function (t) {
          var r = bt(rt),
            i = r.data.get(t);
          return i === void 0 && ((i = t()), r.data.set(t, i)), i;
        },
      },
      aw = typeof WeakMap == "function" ? WeakMap : Map,
      Ie = 0,
      Ue = null,
      be = null,
      we = 0,
      Le = 0,
      kt = null,
      In = !1,
      di = !1,
      bf = !1,
      Gn = 0,
      Pe = 0,
      _r = 0,
      fa = 0,
      Sf = 0,
      nn = 0,
      hi = 0,
      Os = null,
      _n = null,
      Ef = !1,
      wf = 0,
      lo = 1 / 0,
      oo = null,
      Tr = null,
      uo = !1,
      da = null,
      Rs = 0,
      xf = 0,
      _f = null,
      Cs = 0,
      Tf = null;
    function zt() {
      if (Ie & 2 && we !== 0) return we & -we;
      if (Y.T !== null) {
        var t = ai;
        return t !== 0 ? t : jf();
      }
      return Vp();
    }
    function xg() {
      nn === 0 && (nn = !(we & 536870912) || Oe ? zp() : 536870912);
      var t = Jt.current;
      return t !== null && (t.flags |= 32), nn;
    }
    function Tt(t, r, i) {
      ((t === Ue && Le === 2) || t.cancelPendingCommit !== null) &&
        (pi(t, 0), Pn(t, we, nn, !1)),
        Yi(t, i),
        (!(Ie & 2) || t !== Ue) &&
          (t === Ue && (!(Ie & 2) && (fa |= i), Pe === 4 && Pn(t, we, nn, !1)),
          Tn(t));
    }
    function _g(t, r, i) {
      if (Ie & 6) throw Error(s(327));
      var l = (!i && (r & 60) === 0 && (r & t.expiredLanes) === 0) || Pi(t, r),
        u = l ? lw(t, r) : Cf(t, r, !0),
        d = l;
      do {
        if (u === 0) {
          di && !l && Pn(t, r, 0, !1);
          break;
        } else if (u === 6) Pn(t, r, 0, !In);
        else {
          if (((i = t.current.alternate), d && !iw(i))) {
            (u = Cf(t, r, !1)), (d = !1);
            continue;
          }
          if (u === 2) {
            if (((d = r), t.errorRecoveryDisabledLanes & d)) var y = 0;
            else
              (y = t.pendingLanes & -536870913),
                (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
            if (y !== 0) {
              r = y;
              e: {
                var b = t;
                u = Os;
                var x = b.current.memoizedState.isDehydrated;
                if (
                  (x && (pi(b, y).flags |= 256), (y = Cf(b, y, !1)), y !== 2)
                ) {
                  if (bf && !x) {
                    (b.errorRecoveryDisabledLanes |= d), (fa |= d), (u = 4);
                    break e;
                  }
                  (d = _n), (_n = u), d !== null && Af(d);
                }
                u = y;
              }
              if (((d = !1), u !== 2)) continue;
            }
          }
          if (u === 1) {
            pi(t, 0), Pn(t, r, 0, !0);
            break;
          }
          e: {
            switch (((l = t), u)) {
              case 0:
              case 1:
                throw Error(s(345));
              case 4:
                if ((r & 4194176) === r) {
                  Pn(l, r, nn, !In);
                  break e;
                }
                break;
              case 2:
                _n = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(s(329));
            }
            if (
              ((l.finishedWork = i),
              (l.finishedLanes = r),
              (r & 62914560) === r && ((d = wf + 300 - J()), 10 < d))
            ) {
              if ((Pn(l, r, nn, !In), wl(l, 0) !== 0)) break e;
              l.timeoutHandle = Kg(
                Tg.bind(null, l, i, _n, oo, Ef, r, nn, fa, hi, In, 2, -0, 0),
                d
              );
              break e;
            }
            Tg(l, i, _n, oo, Ef, r, nn, fa, hi, In, 0, -0, 0);
          }
        }
        break;
      } while (!0);
      Tn(t);
    }
    function Af(t) {
      _n === null ? (_n = t) : _n.push.apply(_n, t);
    }
    function Tg(t, r, i, l, u, d, y, b, x, D, H, I, k) {
      var q = r.subtreeFlags;
      if (
        (q & 8192 || (q & 16785408) === 16785408) &&
        ((Us = { stylesheets: null, count: 0, unsuspend: qw }),
        mg(r),
        (r = Fw()),
        r !== null)
      ) {
        (t.cancelPendingCommit = r(
          Mg.bind(null, t, i, l, u, y, b, x, 1, I, k)
        )),
          Pn(t, d, y, !D);
        return;
      }
      Mg(t, i, l, u, y, b, x, H, I, k);
    }
    function iw(t) {
      for (var r = t; ; ) {
        var i = r.tag;
        if (
          (i === 0 || i === 11 || i === 15) &&
          r.flags & 16384 &&
          ((i = r.updateQueue), i !== null && ((i = i.stores), i !== null))
        )
          for (var l = 0; l < i.length; l++) {
            var u = i[l],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!Bt(d(), u)) return !1;
            } catch {
              return !1;
            }
          }
        if (((i = r.child), r.subtreeFlags & 16384 && i !== null))
          (i.return = r), (r = i);
        else {
          if (r === t) break;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === t) return !0;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      }
      return !0;
    }
    function Pn(t, r, i, l) {
      (r &= ~Sf),
        (r &= ~fa),
        (t.suspendedLanes |= r),
        (t.pingedLanes &= ~r),
        l && (t.warmLanes |= r),
        (l = t.expirationTimes);
      for (var u = r; 0 < u; ) {
        var d = 31 - jt(u),
          y = 1 << d;
        (l[d] = -1), (u &= ~y);
      }
      i !== 0 && qp(t, i, r);
    }
    function co() {
      return Ie & 6 ? !0 : (Ds(0), !1);
    }
    function Of() {
      if (be !== null) {
        if (Le === 0) var t = be.return;
        else (t = be), (zn = la = null), Mc(t), (ni = null), (cs = 0), (t = be);
        for (; t !== null; ) wg(t.alternate, t), (t = t.return);
        be = null;
      }
    }
    function pi(t, r) {
      (t.finishedWork = null), (t.finishedLanes = 0);
      var i = t.timeoutHandle;
      i !== -1 && ((t.timeoutHandle = -1), _w(i)),
        (i = t.cancelPendingCommit),
        i !== null && ((t.cancelPendingCommit = null), i()),
        Of(),
        (Ue = t),
        (be = i = xr(t.current, null)),
        (we = r),
        (Le = 0),
        (kt = null),
        (In = !1),
        (di = Pi(t, r)),
        (bf = !1),
        (hi = nn = Sf = fa = _r = Pe = 0),
        (_n = Os = null),
        (Ef = !1),
        r & 8 && (r |= r & 32);
      var l = t.entangledLanes;
      if (l !== 0)
        for (t = t.entanglements, l &= r; 0 < l; ) {
          var u = 31 - jt(l),
            d = 1 << u;
          (r |= t[u]), (l &= ~d);
        }
      return (Gn = r), Bl(), i;
    }
    function Ag(t, r) {
      (ge = null),
        (Y.H = xn),
        r === os
          ? ((r = Hm()), (Le = 3))
          : r === zm
          ? ((r = Hm()), (Le = 4))
          : (Le =
              r === $y
                ? 8
                : r !== null &&
                  typeof r == "object" &&
                  typeof r.then == "function"
                ? 6
                : 1),
        (kt = r),
        be === null && ((Pe = 1), eo(t, Xt(r, t.current)));
    }
    function Og() {
      var t = Y.H;
      return (Y.H = xn), t === null ? xn : t;
    }
    function Rg() {
      var t = Y.A;
      return (Y.A = rw), t;
    }
    function Rf() {
      (Pe = 4),
        In || ((we & 4194176) !== we && Jt.current !== null) || (di = !0),
        (!(_r & 134217727) && !(fa & 134217727)) ||
          Ue === null ||
          Pn(Ue, we, nn, !1);
    }
    function Cf(t, r, i) {
      var l = Ie;
      Ie |= 2;
      var u = Og(),
        d = Rg();
      (Ue !== t || we !== r) && ((oo = null), pi(t, r)), (r = !1);
      var y = Pe;
      e: do
        try {
          if (Le !== 0 && be !== null) {
            var b = be,
              x = kt;
            switch (Le) {
              case 8:
                Of(), (y = 6);
                break e;
              case 3:
              case 2:
              case 6:
                Jt.current === null && (r = !0);
                var D = Le;
                if (((Le = 0), (kt = null), mi(t, b, x, D), i && di)) {
                  y = 0;
                  break e;
                }
                break;
              default:
                (D = Le), (Le = 0), (kt = null), mi(t, b, x, D);
            }
          }
          sw(), (y = Pe);
          break;
        } catch (H) {
          Ag(t, H);
        }
      while (!0);
      return (
        r && t.shellSuspendCounter++,
        (zn = la = null),
        (Ie = l),
        (Y.H = u),
        (Y.A = d),
        be === null && ((Ue = null), (we = 0), Bl()),
        y
      );
    }
    function sw() {
      for (; be !== null; ) Cg(be);
    }
    function lw(t, r) {
      var i = Ie;
      Ie |= 2;
      var l = Og(),
        u = Rg();
      Ue !== t || we !== r
        ? ((oo = null), (lo = J() + 500), pi(t, r))
        : (di = Pi(t, r));
      e: do
        try {
          if (Le !== 0 && be !== null) {
            r = be;
            var d = kt;
            t: switch (Le) {
              case 1:
                (Le = 0), (kt = null), mi(t, r, d, 1);
                break;
              case 2:
                if ($m(d)) {
                  (Le = 0), (kt = null), Dg(r);
                  break;
                }
                (r = function () {
                  Le === 2 && Ue === t && (Le = 7), Tn(t);
                }),
                  d.then(r, r);
                break e;
              case 3:
                Le = 7;
                break e;
              case 4:
                Le = 5;
                break e;
              case 7:
                $m(d)
                  ? ((Le = 0), (kt = null), Dg(r))
                  : ((Le = 0), (kt = null), mi(t, r, d, 7));
                break;
              case 5:
                var y = null;
                switch (be.tag) {
                  case 26:
                    y = be.memoizedState;
                  case 5:
                  case 27:
                    var b = be;
                    if (!y || i0(y)) {
                      (Le = 0), (kt = null);
                      var x = b.sibling;
                      if (x !== null) be = x;
                      else {
                        var D = b.return;
                        D !== null ? ((be = D), fo(D)) : (be = null);
                      }
                      break t;
                    }
                }
                (Le = 0), (kt = null), mi(t, r, d, 5);
                break;
              case 6:
                (Le = 0), (kt = null), mi(t, r, d, 6);
                break;
              case 8:
                Of(), (Pe = 6);
                break e;
              default:
                throw Error(s(462));
            }
          }
          ow();
          break;
        } catch (H) {
          Ag(t, H);
        }
      while (!0);
      return (
        (zn = la = null),
        (Y.H = l),
        (Y.A = u),
        (Ie = i),
        be !== null ? 0 : ((Ue = null), (we = 0), Bl(), Pe)
      );
    }
    function ow() {
      for (; be !== null && !z(); ) Cg(be);
    }
    function Cg(t) {
      var r = Zy(t.alternate, t, Gn);
      (t.memoizedProps = t.pendingProps), r === null ? fo(t) : (be = r);
    }
    function Dg(t) {
      var r = t,
        i = r.alternate;
      switch (r.tag) {
        case 15:
        case 0:
          r = Gy(i, r, r.pendingProps, r.type, void 0, we);
          break;
        case 11:
          r = Gy(i, r, r.pendingProps, r.type.render, r.ref, we);
          break;
        case 5:
          Mc(r);
        default:
          wg(i, r), (r = be = bg(r, Gn)), (r = Zy(i, r, Gn));
      }
      (t.memoizedProps = t.pendingProps), r === null ? fo(t) : (be = r);
    }
    function mi(t, r, i, l) {
      (zn = la = null), Mc(r), (ni = null), (cs = 0);
      var u = r.return;
      try {
        if (Q2(t, u, r, i, we)) {
          (Pe = 1), eo(t, Xt(i, t.current)), (be = null);
          return;
        }
      } catch (d) {
        if (u !== null) throw ((be = u), d);
        (Pe = 1), eo(t, Xt(i, t.current)), (be = null);
        return;
      }
      r.flags & 32768
        ? (Oe || l === 1
            ? (t = !0)
            : di || we & 536870912
            ? (t = !1)
            : ((In = t = !0),
              (l === 2 || l === 3 || l === 6) &&
                ((l = Jt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
          Ng(r, t))
        : fo(r);
    }
    function fo(t) {
      var r = t;
      do {
        if (r.flags & 32768) {
          Ng(r, In);
          return;
        }
        t = r.return;
        var i = tw(r.alternate, r, Gn);
        if (i !== null) {
          be = i;
          return;
        }
        if (((r = r.sibling), r !== null)) {
          be = r;
          return;
        }
        be = r = t;
      } while (r !== null);
      Pe === 0 && (Pe = 5);
    }
    function Ng(t, r) {
      do {
        var i = nw(t.alternate, t);
        if (i !== null) {
          (i.flags &= 32767), (be = i);
          return;
        }
        if (
          ((i = t.return),
          i !== null &&
            ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
          !r && ((t = t.sibling), t !== null))
        ) {
          be = t;
          return;
        }
        be = t = i;
      } while (t !== null);
      (Pe = 6), (be = null);
    }
    function Mg(t, r, i, l, u, d, y, b, x, D) {
      var H = Y.T,
        I = Q.p;
      try {
        (Q.p = 2), (Y.T = null), uw(t, r, i, l, I, u, d, y, b, x, D);
      } finally {
        (Y.T = H), (Q.p = I);
      }
    }
    function uw(t, r, i, l, u, d, y, b) {
      do yi();
      while (da !== null);
      if (Ie & 6) throw Error(s(327));
      var x = t.finishedWork;
      if (((l = t.finishedLanes), x === null)) return null;
      if (((t.finishedWork = null), (t.finishedLanes = 0), x === t.current))
        throw Error(s(177));
      (t.callbackNode = null),
        (t.callbackPriority = 0),
        (t.cancelPendingCommit = null);
      var D = x.lanes | x.childLanes;
      if (
        ((D |= gc),
        HE(t, l, D, d, y, b),
        t === Ue && ((be = Ue = null), (we = 0)),
        (!(x.subtreeFlags & 10256) && !(x.flags & 10256)) ||
          uo ||
          ((uo = !0),
          (xf = D),
          (_f = i),
          hw(Xe, function () {
            return yi(), null;
          })),
        (i = (x.flags & 15990) !== 0),
        x.subtreeFlags & 15990 || i
          ? ((i = Y.T),
            (Y.T = null),
            (d = Q.p),
            (Q.p = 2),
            (y = Ie),
            (Ie |= 4),
            J2(t, x),
            dg(x, t),
            j2(Hf, t.containerInfo),
            (_o = !!qf),
            (Hf = qf = null),
            (t.current = x),
            og(t, x.alternate, x),
            Z(),
            (Ie = y),
            (Q.p = d),
            (Y.T = i))
          : (t.current = x),
        uo ? ((uo = !1), (da = t), (Rs = l)) : jg(t, D),
        (D = t.pendingLanes),
        D === 0 && (Tr = null),
        LE(x.stateNode),
        Tn(t),
        r !== null)
      )
        for (u = t.onRecoverableError, x = 0; x < r.length; x++)
          (D = r[x]), u(D.value, { componentStack: D.stack });
      return (
        Rs & 3 && yi(),
        (D = t.pendingLanes),
        l & 4194218 && D & 42
          ? t === Tf
            ? Cs++
            : ((Cs = 0), (Tf = t))
          : (Cs = 0),
        Ds(0),
        null
      );
    }
    function jg(t, r) {
      (t.pooledCacheLanes &= r) === 0 &&
        ((r = t.pooledCache), r != null && ((t.pooledCache = null), ds(r)));
    }
    function yi() {
      if (da !== null) {
        var t = da,
          r = xf;
        xf = 0;
        var i = Fp(Rs),
          l = Y.T,
          u = Q.p;
        try {
          if (((Q.p = 32 > i ? 32 : i), (Y.T = null), da === null)) var d = !1;
          else {
            (i = _f), (_f = null);
            var y = da,
              b = Rs;
            if (((da = null), (Rs = 0), Ie & 6)) throw Error(s(331));
            var x = Ie;
            if (
              ((Ie |= 4),
              gg(y.current),
              pg(y, y.current, b, i),
              (Ie = x),
              Ds(0, !1),
              xt && typeof xt.onPostCommitFiberRoot == "function")
            )
              try {
                xt.onPostCommitFiberRoot(lr, y);
              } catch {}
            d = !0;
          }
          return d;
        } finally {
          (Q.p = u), (Y.T = l), jg(t, r);
        }
      }
      return !1;
    }
    function Bg(t, r, i) {
      (r = Xt(i, r)),
        (r = Pc(t.stateNode, r, 2)),
        (t = br(t, r, 2)),
        t !== null && (Yi(t, 2), Tn(t));
    }
    function Be(t, r, i) {
      if (t.tag === 3) Bg(t, t, i);
      else
        for (; r !== null; ) {
          if (r.tag === 3) {
            Bg(r, t, i);
            break;
          } else if (r.tag === 1) {
            var l = r.stateNode;
            if (
              typeof r.type.getDerivedStateFromError == "function" ||
              (typeof l.componentDidCatch == "function" &&
                (Tr === null || !Tr.has(l)))
            ) {
              (t = Xt(i, t)),
                (i = ky(2)),
                (l = br(r, i, 2)),
                l !== null && (zy(i, l, r, t), Yi(l, 2), Tn(l));
              break;
            }
          }
          r = r.return;
        }
    }
    function Df(t, r, i) {
      var l = t.pingCache;
      if (l === null) {
        l = t.pingCache = new aw();
        var u = new Set();
        l.set(r, u);
      } else (u = l.get(r)), u === void 0 && ((u = new Set()), l.set(r, u));
      u.has(i) ||
        ((bf = !0), u.add(i), (t = cw.bind(null, t, r, i)), r.then(t, t));
    }
    function cw(t, r, i) {
      var l = t.pingCache;
      l !== null && l.delete(r),
        (t.pingedLanes |= t.suspendedLanes & i),
        (t.warmLanes &= ~i),
        Ue === t &&
          (we & i) === i &&
          (Pe === 4 || (Pe === 3 && (we & 62914560) === we && 300 > J() - wf)
            ? !(Ie & 2) && pi(t, 0)
            : (Sf |= i),
          hi === we && (hi = 0)),
        Tn(t);
    }
    function Ug(t, r) {
      r === 0 && (r = $p()), (t = fr(t, r)), t !== null && (Yi(t, r), Tn(t));
    }
    function fw(t) {
      var r = t.memoizedState,
        i = 0;
      r !== null && (i = r.retryLane), Ug(t, i);
    }
    function dw(t, r) {
      var i = 0;
      switch (t.tag) {
        case 13:
          var l = t.stateNode,
            u = t.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case 19:
          l = t.stateNode;
          break;
        case 22:
          l = t.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      l !== null && l.delete(r), Ug(t, i);
    }
    function hw(t, r) {
      return Vi(t, r);
    }
    var ho = null,
      gi = null,
      Nf = !1,
      po = !1,
      Mf = !1,
      ha = 0;
    function Tn(t) {
      t !== gi &&
        t.next === null &&
        (gi === null ? (ho = gi = t) : (gi = gi.next = t)),
        (po = !0),
        Nf || ((Nf = !0), mw(pw));
    }
    function Ds(t, r) {
      if (!Mf && po) {
        Mf = !0;
        do
          for (var i = !1, l = ho; l !== null; ) {
            if (t !== 0) {
              var u = l.pendingLanes;
              if (u === 0) var d = 0;
              else {
                var y = l.suspendedLanes,
                  b = l.pingedLanes;
                (d = (1 << (31 - jt(42 | t) + 1)) - 1),
                  (d &= u & ~(y & ~b)),
                  (d = d & 201326677 ? (d & 201326677) | 1 : d ? d | 2 : 0);
              }
              d !== 0 && ((i = !0), zg(l, d));
            } else
              (d = we),
                (d = wl(l, l === Ue ? d : 0)),
                !(d & 3) || Pi(l, d) || ((i = !0), zg(l, d));
            l = l.next;
          }
        while (i);
        Mf = !1;
      }
    }
    function pw() {
      po = Nf = !1;
      var t = 0;
      ha !== 0 && (xw() && (t = ha), (ha = 0));
      for (var r = J(), i = null, l = ho; l !== null; ) {
        var u = l.next,
          d = Lg(l, r);
        d === 0
          ? ((l.next = null),
            i === null ? (ho = u) : (i.next = u),
            u === null && (gi = i))
          : ((i = l), (t !== 0 || d & 3) && (po = !0)),
          (l = u);
      }
      Ds(t);
    }
    function Lg(t, r) {
      for (
        var i = t.suspendedLanes,
          l = t.pingedLanes,
          u = t.expirationTimes,
          d = t.pendingLanes & -62914561;
        0 < d;

      ) {
        var y = 31 - jt(d),
          b = 1 << y,
          x = u[y];
        x === -1
          ? (!(b & i) || b & l) && (u[y] = qE(b, r))
          : x <= r && (t.expiredLanes |= b),
          (d &= ~b);
      }
      if (
        ((r = Ue),
        (i = we),
        (i = wl(t, t === r ? i : 0)),
        (l = t.callbackNode),
        i === 0 || (t === r && Le === 2) || t.cancelPendingCommit !== null)
      )
        return (
          l !== null && l !== null && Ii(l),
          (t.callbackNode = null),
          (t.callbackPriority = 0)
        );
      if (!(i & 3) || Pi(t, i)) {
        if (((r = i & -i), r === t.callbackPriority)) return r;
        switch ((l !== null && Ii(l), Fp(i))) {
          case 2:
          case 8:
            i = Ae;
            break;
          case 32:
            i = Xe;
            break;
          case 268435456:
            i = qa;
            break;
          default:
            i = Xe;
        }
        return (
          (l = kg.bind(null, t)),
          (i = Vi(i, l)),
          (t.callbackPriority = r),
          (t.callbackNode = i),
          r
        );
      }
      return (
        l !== null && l !== null && Ii(l),
        (t.callbackPriority = 2),
        (t.callbackNode = null),
        2
      );
    }
    function kg(t, r) {
      var i = t.callbackNode;
      if (yi() && t.callbackNode !== i) return null;
      var l = we;
      return (
        (l = wl(t, t === Ue ? l : 0)),
        l === 0
          ? null
          : (_g(t, l, r),
            Lg(t, J()),
            t.callbackNode != null && t.callbackNode === i
              ? kg.bind(null, t)
              : null)
      );
    }
    function zg(t, r) {
      if (yi()) return null;
      _g(t, r, !0);
    }
    function mw(t) {
      Tw(function () {
        Ie & 6 ? Vi(pe, t) : t();
      });
    }
    function jf() {
      return ha === 0 && (ha = zp()), ha;
    }
    function $g(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean"
        ? null
        : typeof t == "function"
        ? t
        : Ol("" + t);
    }
    function qg(t, r) {
      var i = r.ownerDocument.createElement("input");
      return (
        (i.name = r.name),
        (i.value = r.value),
        t.id && i.setAttribute("form", t.id),
        r.parentNode.insertBefore(i, r),
        (t = new FormData(t)),
        i.parentNode.removeChild(i),
        t
      );
    }
    function yw(t, r, i, l, u) {
      if (r === "submit" && i && i.stateNode === u) {
        var d = $g((u[Ot] || null).action),
          y = l.submitter;
        y &&
          ((r = (r = y[Ot] || null)
            ? $g(r.formAction)
            : y.getAttribute("formAction")),
          r !== null && ((d = r), (y = null)));
        var b = new Nl("action", "action", null, l, u);
        t.push({
          event: b,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (l.defaultPrevented) {
                  if (ha !== 0) {
                    var x = y ? qg(u, y) : new FormData(u);
                    Hc(
                      i,
                      { pending: !0, data: x, method: u.method, action: d },
                      null,
                      x
                    );
                  }
                } else
                  typeof d == "function" &&
                    (b.preventDefault(),
                    (x = y ? qg(u, y) : new FormData(u)),
                    Hc(
                      i,
                      { pending: !0, data: x, method: u.method, action: d },
                      d,
                      x
                    ));
              },
              currentTarget: u,
            },
          ],
        });
      }
    }
    for (var Bf = 0; Bf < Mm.length; Bf++) {
      var Uf = Mm[Bf],
        gw = Uf.toLowerCase(),
        vw = Uf[0].toUpperCase() + Uf.slice(1);
      cn(gw, "on" + vw);
    }
    cn(Om, "onAnimationEnd"),
      cn(Rm, "onAnimationIteration"),
      cn(Cm, "onAnimationStart"),
      cn("dblclick", "onDoubleClick"),
      cn("focusin", "onFocus"),
      cn("focusout", "onBlur"),
      cn(U2, "onTransitionRun"),
      cn(L2, "onTransitionStart"),
      cn(k2, "onTransitionCancel"),
      cn(Dm, "onTransitionEnd"),
      Ia("onMouseEnter", ["mouseout", "mouseover"]),
      Ia("onMouseLeave", ["mouseout", "mouseover"]),
      Ia("onPointerEnter", ["pointerout", "pointerover"]),
      Ia("onPointerLeave", ["pointerout", "pointerover"]),
      Kr(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      Kr(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      Kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      Kr(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      Kr(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      Kr(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Ns =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      bw = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(Ns)
      );
    function Hg(t, r) {
      r = (r & 4) !== 0;
      for (var i = 0; i < t.length; i++) {
        var l = t[i],
          u = l.event;
        l = l.listeners;
        e: {
          var d = void 0;
          if (r)
            for (var y = l.length - 1; 0 <= y; y--) {
              var b = l[y],
                x = b.instance,
                D = b.currentTarget;
              if (((b = b.listener), x !== d && u.isPropagationStopped()))
                break e;
              (d = b), (u.currentTarget = D);
              try {
                d(u);
              } catch (H) {
                Wl(H);
              }
              (u.currentTarget = null), (d = x);
            }
          else
            for (y = 0; y < l.length; y++) {
              if (
                ((b = l[y]),
                (x = b.instance),
                (D = b.currentTarget),
                (b = b.listener),
                x !== d && u.isPropagationStopped())
              )
                break e;
              (d = b), (u.currentTarget = D);
              try {
                d(u);
              } catch (H) {
                Wl(H);
              }
              (u.currentTarget = null), (d = x);
            }
        }
      }
    }
    function Se(t, r) {
      var i = r[Qu];
      i === void 0 && (i = r[Qu] = new Set());
      var l = t + "__bubble";
      i.has(l) || (Fg(r, t, 2, !1), i.add(l));
    }
    function Lf(t, r, i) {
      var l = 0;
      r && (l |= 4), Fg(i, t, l, r);
    }
    var mo = "_reactListening" + Math.random().toString(36).slice(2);
    function kf(t) {
      if (!t[mo]) {
        (t[mo] = !0),
          Gp.forEach(function (i) {
            i !== "selectionchange" &&
              (bw.has(i) || Lf(i, !1, t), Lf(i, !0, t));
          });
        var r = t.nodeType === 9 ? t : t.ownerDocument;
        r === null || r[mo] || ((r[mo] = !0), Lf("selectionchange", !1, r));
      }
    }
    function Fg(t, r, i, l) {
      switch (f0(r)) {
        case 2:
          var u = Gw;
          break;
        case 8:
          u = Pw;
          break;
        default:
          u = Qf;
      }
      (i = u.bind(null, r, i, t)),
        (u = void 0),
        !ac ||
          (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
          (u = !0),
        l
          ? u !== void 0
            ? t.addEventListener(r, i, { capture: !0, passive: u })
            : t.addEventListener(r, i, !0)
          : u !== void 0
          ? t.addEventListener(r, i, { passive: u })
          : t.addEventListener(r, i, !1);
    }
    function zf(t, r, i, l, u) {
      var d = l;
      if (!(r & 1) && !(r & 2) && l !== null)
        e: for (;;) {
          if (l === null) return;
          var y = l.tag;
          if (y === 3 || y === 4) {
            var b = l.stateNode.containerInfo;
            if (b === u || (b.nodeType === 8 && b.parentNode === u)) break;
            if (y === 4)
              for (y = l.return; y !== null; ) {
                var x = y.tag;
                if (
                  (x === 3 || x === 4) &&
                  ((x = y.stateNode.containerInfo),
                  x === u || (x.nodeType === 8 && x.parentNode === u))
                )
                  return;
                y = y.return;
              }
            for (; b !== null; ) {
              if (((y = Yr(b)), y === null)) return;
              if (((x = y.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
                l = d = y;
                continue e;
              }
              b = b.parentNode;
            }
          }
          l = l.return;
        }
      rm(function () {
        var D = d,
          H = nc(i),
          I = [];
        e: {
          var k = Nm.get(t);
          if (k !== void 0) {
            var q = Nl,
              te = t;
            switch (t) {
              case "keypress":
                if (Cl(i) === 0) break e;
              case "keydown":
              case "keyup":
                q = d2;
                break;
              case "focusin":
                (te = "focus"), (q = oc);
                break;
              case "focusout":
                (te = "blur"), (q = oc);
                break;
              case "beforeblur":
              case "afterblur":
                q = oc;
                break;
              case "click":
                if (i.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = sm;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = e2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = m2;
                break;
              case Om:
              case Rm:
              case Cm:
                q = r2;
                break;
              case Dm:
                q = g2;
                break;
              case "scroll":
              case "scrollend":
                q = JE;
                break;
              case "wheel":
                q = b2;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = i2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = om;
                break;
              case "toggle":
              case "beforetoggle":
                q = E2;
            }
            var ce = (r & 4) !== 0,
              Ye = !ce && (t === "scroll" || t === "scrollend"),
              j = ce ? (k !== null ? k + "Capture" : null) : k;
            ce = [];
            for (var C = D, U; C !== null; ) {
              var V = C;
              if (
                ((U = V.stateNode),
                (V = V.tag),
                (V !== 5 && V !== 26 && V !== 27) ||
                  U === null ||
                  j === null ||
                  ((V = Qi(C, j)), V != null && ce.push(Ms(C, V, U))),
                Ye)
              )
                break;
              C = C.return;
            }
            0 < ce.length &&
              ((k = new q(k, te, null, i, H)),
              I.push({ event: k, listeners: ce }));
          }
        }
        if (!(r & 7)) {
          e: {
            if (
              ((k = t === "mouseover" || t === "pointerover"),
              (q = t === "mouseout" || t === "pointerout"),
              k &&
                i !== tc &&
                (te = i.relatedTarget || i.fromElement) &&
                (Yr(te) || te[Ha]))
            )
              break e;
            if (
              (q || k) &&
              ((k =
                H.window === H
                  ? H
                  : (k = H.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
              q
                ? ((te = i.relatedTarget || i.toElement),
                  (q = D),
                  (te = te ? Yr(te) : null),
                  te !== null &&
                    ((Ye = se(te)),
                    (ce = te.tag),
                    te !== Ye || (ce !== 5 && ce !== 27 && ce !== 6)) &&
                    (te = null))
                : ((q = null), (te = D)),
              q !== te)
            ) {
              if (
                ((ce = sm),
                (V = "onMouseLeave"),
                (j = "onMouseEnter"),
                (C = "mouse"),
                (t === "pointerout" || t === "pointerover") &&
                  ((ce = om),
                  (V = "onPointerLeave"),
                  (j = "onPointerEnter"),
                  (C = "pointer")),
                (Ye = q == null ? k : Xi(q)),
                (U = te == null ? k : Xi(te)),
                (k = new ce(V, C + "leave", q, i, H)),
                (k.target = Ye),
                (k.relatedTarget = U),
                (V = null),
                Yr(H) === D &&
                  ((ce = new ce(j, C + "enter", te, i, H)),
                  (ce.target = U),
                  (ce.relatedTarget = Ye),
                  (V = ce)),
                (Ye = V),
                q && te)
              )
                t: {
                  for (ce = q, j = te, C = 0, U = ce; U; U = vi(U)) C++;
                  for (U = 0, V = j; V; V = vi(V)) U++;
                  for (; 0 < C - U; ) (ce = vi(ce)), C--;
                  for (; 0 < U - C; ) (j = vi(j)), U--;
                  for (; C--; ) {
                    if (ce === j || (j !== null && ce === j.alternate)) break t;
                    (ce = vi(ce)), (j = vi(j));
                  }
                  ce = null;
                }
              else ce = null;
              q !== null && Vg(I, k, q, ce, !1),
                te !== null && Ye !== null && Vg(I, Ye, te, ce, !0);
            }
          }
          e: {
            if (
              ((k = D ? Xi(D) : window),
              (q = k.nodeName && k.nodeName.toLowerCase()),
              q === "select" || (q === "input" && k.type === "file"))
            )
              var W = ym;
            else if (pm(k))
              if (gm) W = N2;
              else {
                W = C2;
                var ve = R2;
              }
            else
              (q = k.nodeName),
                !q ||
                q.toLowerCase() !== "input" ||
                (k.type !== "checkbox" && k.type !== "radio")
                  ? D && ec(D.elementType) && (W = ym)
                  : (W = D2);
            if (W && (W = W(t, D))) {
              mm(I, W, i, H);
              break e;
            }
            ve && ve(t, k, D),
              t === "focusout" &&
                D &&
                k.type === "number" &&
                D.memoizedProps.value != null &&
                Wu(k, "number", k.value);
          }
          switch (((ve = D ? Xi(D) : window), t)) {
            case "focusin":
              (pm(ve) || ve.contentEditable === "true") &&
                ((Qa = ve), (pc = D), (as = null));
              break;
            case "focusout":
              as = pc = Qa = null;
              break;
            case "mousedown":
              mc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (mc = !1), Tm(I, i, H);
              break;
            case "selectionchange":
              if (B2) break;
            case "keydown":
            case "keyup":
              Tm(I, i, H);
          }
          var re;
          if (cc)
            e: {
              switch (t) {
                case "compositionstart":
                  var le = "onCompositionStart";
                  break e;
                case "compositionend":
                  le = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  le = "onCompositionUpdate";
                  break e;
              }
              le = void 0;
            }
          else
            Xa
              ? dm(t, i) && (le = "onCompositionEnd")
              : t === "keydown" &&
                i.keyCode === 229 &&
                (le = "onCompositionStart");
          le &&
            (um &&
              i.locale !== "ko" &&
              (Xa || le !== "onCompositionStart"
                ? le === "onCompositionEnd" && Xa && (re = am())
                : ((cr = H),
                  (ic = "value" in cr ? cr.value : cr.textContent),
                  (Xa = !0))),
            (ve = yo(D, le)),
            0 < ve.length &&
              ((le = new lm(le, t, null, i, H)),
              I.push({ event: le, listeners: ve }),
              re
                ? (le.data = re)
                : ((re = hm(i)), re !== null && (le.data = re)))),
            (re = x2 ? _2(t, i) : T2(t, i)) &&
              ((le = yo(D, "onBeforeInput")),
              0 < le.length &&
                ((ve = new lm("onBeforeInput", "beforeinput", null, i, H)),
                I.push({ event: ve, listeners: le }),
                (ve.data = re))),
            yw(I, t, D, i, H);
        }
        Hg(I, r);
      });
    }
    function Ms(t, r, i) {
      return { instance: t, listener: r, currentTarget: i };
    }
    function yo(t, r) {
      for (var i = r + "Capture", l = []; t !== null; ) {
        var u = t,
          d = u.stateNode;
        (u = u.tag),
          (u !== 5 && u !== 26 && u !== 27) ||
            d === null ||
            ((u = Qi(t, i)),
            u != null && l.unshift(Ms(t, u, d)),
            (u = Qi(t, r)),
            u != null && l.push(Ms(t, u, d))),
          (t = t.return);
      }
      return l;
    }
    function vi(t) {
      if (t === null) return null;
      do t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Vg(t, r, i, l, u) {
      for (var d = r._reactName, y = []; i !== null && i !== l; ) {
        var b = i,
          x = b.alternate,
          D = b.stateNode;
        if (((b = b.tag), x !== null && x === l)) break;
        (b !== 5 && b !== 26 && b !== 27) ||
          D === null ||
          ((x = D),
          u
            ? ((D = Qi(i, d)), D != null && y.unshift(Ms(i, D, x)))
            : u || ((D = Qi(i, d)), D != null && y.push(Ms(i, D, x)))),
          (i = i.return);
      }
      y.length !== 0 && t.push({ event: r, listeners: y });
    }
    var Sw = /\r\n?/g,
      Ew = /\u0000|\uFFFD/g;
    function Ig(t) {
      return (typeof t == "string" ? t : "" + t)
        .replace(
          Sw,
          `
`
        )
        .replace(Ew, "");
    }
    function Gg(t, r) {
      return (r = Ig(r)), Ig(t) === r;
    }
    function go() {}
    function Me(t, r, i, l, u, d) {
      switch (i) {
        case "children":
          typeof l == "string"
            ? r === "body" || (r === "textarea" && l === "") || Pa(t, l)
            : (typeof l == "number" || typeof l == "bigint") &&
              r !== "body" &&
              Pa(t, "" + l);
          break;
        case "className":
          _l(t, "class", l);
          break;
        case "tabIndex":
          _l(t, "tabindex", l);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          _l(t, i, l);
          break;
        case "style":
          tm(t, l, d);
          break;
        case "data":
          if (r !== "object") {
            _l(t, "data", l);
            break;
          }
        case "src":
        case "href":
          if (l === "" && (r !== "a" || i !== "href")) {
            t.removeAttribute(i);
            break;
          }
          if (
            l == null ||
            typeof l == "function" ||
            typeof l == "symbol" ||
            typeof l == "boolean"
          ) {
            t.removeAttribute(i);
            break;
          }
          (l = Ol("" + l)), t.setAttribute(i, l);
          break;
        case "action":
        case "formAction":
          if (typeof l == "function") {
            t.setAttribute(
              i,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof d == "function" &&
              (i === "formAction"
                ? (r !== "input" && Me(t, r, "name", u.name, u, null),
                  Me(t, r, "formEncType", u.formEncType, u, null),
                  Me(t, r, "formMethod", u.formMethod, u, null),
                  Me(t, r, "formTarget", u.formTarget, u, null))
                : (Me(t, r, "encType", u.encType, u, null),
                  Me(t, r, "method", u.method, u, null),
                  Me(t, r, "target", u.target, u, null)));
          if (l == null || typeof l == "symbol" || typeof l == "boolean") {
            t.removeAttribute(i);
            break;
          }
          (l = Ol("" + l)), t.setAttribute(i, l);
          break;
        case "onClick":
          l != null && (t.onclick = go);
          break;
        case "onScroll":
          l != null && Se("scroll", t);
          break;
        case "onScrollEnd":
          l != null && Se("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
            if (((i = l.__html), i != null)) {
              if (u.children != null) throw Error(s(60));
              t.innerHTML = i;
            }
          }
          break;
        case "multiple":
          t.multiple = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "muted":
          t.muted = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            l == null ||
            typeof l == "function" ||
            typeof l == "boolean" ||
            typeof l == "symbol"
          ) {
            t.removeAttribute("xlink:href");
            break;
          }
          (i = Ol("" + l)),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          l != null && typeof l != "function" && typeof l != "symbol"
            ? t.setAttribute(i, "" + l)
            : t.removeAttribute(i);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          l && typeof l != "function" && typeof l != "symbol"
            ? t.setAttribute(i, "")
            : t.removeAttribute(i);
          break;
        case "capture":
        case "download":
          l === !0
            ? t.setAttribute(i, "")
            : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(i, l)
            : t.removeAttribute(i);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          l != null &&
          typeof l != "function" &&
          typeof l != "symbol" &&
          !isNaN(l) &&
          1 <= l
            ? t.setAttribute(i, l)
            : t.removeAttribute(i);
          break;
        case "rowSpan":
        case "start":
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          isNaN(l)
            ? t.removeAttribute(i)
            : t.setAttribute(i, l);
          break;
        case "popover":
          Se("beforetoggle", t), Se("toggle", t), xl(t, "popover", l);
          break;
        case "xlinkActuate":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
          break;
        case "xlinkArcrole":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
          break;
        case "xlinkRole":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
          break;
        case "xlinkShow":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
          break;
        case "xlinkTitle":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
          break;
        case "xlinkType":
          Mn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
          break;
        case "xmlBase":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
          break;
        case "xmlLang":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
          break;
        case "xmlSpace":
          Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
          break;
        case "is":
          xl(t, "is", l);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < i.length) ||
            (i[0] !== "o" && i[0] !== "O") ||
            (i[1] !== "n" && i[1] !== "N")) &&
            ((i = QE.get(i) || i), xl(t, i, l));
      }
    }
    function $f(t, r, i, l, u, d) {
      switch (i) {
        case "style":
          tm(t, l, d);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
            if (((i = l.__html), i != null)) {
              if (u.children != null) throw Error(s(60));
              t.innerHTML = i;
            }
          }
          break;
        case "children":
          typeof l == "string"
            ? Pa(t, l)
            : (typeof l == "number" || typeof l == "bigint") && Pa(t, "" + l);
          break;
        case "onScroll":
          l != null && Se("scroll", t);
          break;
        case "onScrollEnd":
          l != null && Se("scrollend", t);
          break;
        case "onClick":
          l != null && (t.onclick = go);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Pp.hasOwnProperty(i))
            e: {
              if (
                i[0] === "o" &&
                i[1] === "n" &&
                ((u = i.endsWith("Capture")),
                (r = i.slice(2, u ? i.length - 7 : void 0)),
                (d = t[Ot] || null),
                (d = d != null ? d[i] : null),
                typeof d == "function" && t.removeEventListener(r, d, u),
                typeof l == "function")
              ) {
                typeof d != "function" &&
                  d !== null &&
                  (i in t
                    ? (t[i] = null)
                    : t.hasAttribute(i) && t.removeAttribute(i)),
                  t.addEventListener(r, l, u);
                break e;
              }
              i in t
                ? (t[i] = l)
                : l === !0
                ? t.setAttribute(i, "")
                : xl(t, i, l);
            }
      }
    }
    function mt(t, r, i) {
      switch (r) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Se("error", t), Se("load", t);
          var l = !1,
            u = !1,
            d;
          for (d in i)
            if (i.hasOwnProperty(d)) {
              var y = i[d];
              if (y != null)
                switch (d) {
                  case "src":
                    l = !0;
                    break;
                  case "srcSet":
                    u = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(s(137, r));
                  default:
                    Me(t, r, d, y, i, null);
                }
            }
          u && Me(t, r, "srcSet", i.srcSet, i, null),
            l && Me(t, r, "src", i.src, i, null);
          return;
        case "input":
          Se("invalid", t);
          var b = (d = y = u = null),
            x = null,
            D = null;
          for (l in i)
            if (i.hasOwnProperty(l)) {
              var H = i[l];
              if (H != null)
                switch (l) {
                  case "name":
                    u = H;
                    break;
                  case "type":
                    y = H;
                    break;
                  case "checked":
                    x = H;
                    break;
                  case "defaultChecked":
                    D = H;
                    break;
                  case "value":
                    d = H;
                    break;
                  case "defaultValue":
                    b = H;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (H != null) throw Error(s(137, r));
                    break;
                  default:
                    Me(t, r, l, H, i, null);
                }
            }
          Zp(t, d, b, x, D, y, u, !1), Tl(t);
          return;
        case "select":
          Se("invalid", t), (l = y = d = null);
          for (u in i)
            if (i.hasOwnProperty(u) && ((b = i[u]), b != null))
              switch (u) {
                case "value":
                  d = b;
                  break;
                case "defaultValue":
                  y = b;
                  break;
                case "multiple":
                  l = b;
                default:
                  Me(t, r, u, b, i, null);
              }
          (r = d),
            (i = y),
            (t.multiple = !!l),
            r != null ? Ga(t, !!l, r, !1) : i != null && Ga(t, !!l, i, !0);
          return;
        case "textarea":
          Se("invalid", t), (d = u = l = null);
          for (y in i)
            if (i.hasOwnProperty(y) && ((b = i[y]), b != null))
              switch (y) {
                case "value":
                  l = b;
                  break;
                case "defaultValue":
                  u = b;
                  break;
                case "children":
                  d = b;
                  break;
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(s(91));
                  break;
                default:
                  Me(t, r, y, b, i, null);
              }
          Wp(t, l, u, d), Tl(t);
          return;
        case "option":
          for (x in i)
            if (i.hasOwnProperty(x) && ((l = i[x]), l != null))
              switch (x) {
                case "selected":
                  t.selected =
                    l && typeof l != "function" && typeof l != "symbol";
                  break;
                default:
                  Me(t, r, x, l, i, null);
              }
          return;
        case "dialog":
          Se("cancel", t), Se("close", t);
          break;
        case "iframe":
        case "object":
          Se("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Ns.length; l++) Se(Ns[l], t);
          break;
        case "image":
          Se("error", t), Se("load", t);
          break;
        case "details":
          Se("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          Se("error", t), Se("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (D in i)
            if (i.hasOwnProperty(D) && ((l = i[D]), l != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, r));
                default:
                  Me(t, r, D, l, i, null);
              }
          return;
        default:
          if (ec(r)) {
            for (H in i)
              i.hasOwnProperty(H) &&
                ((l = i[H]), l !== void 0 && $f(t, r, H, l, i, void 0));
            return;
          }
      }
      for (b in i)
        i.hasOwnProperty(b) &&
          ((l = i[b]), l != null && Me(t, r, b, l, i, null));
    }
    function ww(t, r, i, l) {
      switch (r) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var u = null,
            d = null,
            y = null,
            b = null,
            x = null,
            D = null,
            H = null;
          for (q in i) {
            var I = i[q];
            if (i.hasOwnProperty(q) && I != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  x = I;
                default:
                  l.hasOwnProperty(q) || Me(t, r, q, null, l, I);
              }
          }
          for (var k in l) {
            var q = l[k];
            if (((I = i[k]), l.hasOwnProperty(k) && (q != null || I != null)))
              switch (k) {
                case "type":
                  d = q;
                  break;
                case "name":
                  u = q;
                  break;
                case "checked":
                  D = q;
                  break;
                case "defaultChecked":
                  H = q;
                  break;
                case "value":
                  y = q;
                  break;
                case "defaultValue":
                  b = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(s(137, r));
                  break;
                default:
                  q !== I && Me(t, r, k, q, l, I);
              }
          }
          Ju(t, y, b, x, D, H, d, u);
          return;
        case "select":
          q = y = b = k = null;
          for (d in i)
            if (((x = i[d]), i.hasOwnProperty(d) && x != null))
              switch (d) {
                case "value":
                  break;
                case "multiple":
                  q = x;
                default:
                  l.hasOwnProperty(d) || Me(t, r, d, null, l, x);
              }
          for (u in l)
            if (
              ((d = l[u]),
              (x = i[u]),
              l.hasOwnProperty(u) && (d != null || x != null))
            )
              switch (u) {
                case "value":
                  k = d;
                  break;
                case "defaultValue":
                  b = d;
                  break;
                case "multiple":
                  y = d;
                default:
                  d !== x && Me(t, r, u, d, l, x);
              }
          (r = b),
            (i = y),
            (l = q),
            k != null
              ? Ga(t, !!i, k, !1)
              : !!l != !!i &&
                (r != null ? Ga(t, !!i, r, !0) : Ga(t, !!i, i ? [] : "", !1));
          return;
        case "textarea":
          q = k = null;
          for (b in i)
            if (
              ((u = i[b]),
              i.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b))
            )
              switch (b) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Me(t, r, b, null, l, u);
              }
          for (y in l)
            if (
              ((u = l[y]),
              (d = i[y]),
              l.hasOwnProperty(y) && (u != null || d != null))
            )
              switch (y) {
                case "value":
                  k = u;
                  break;
                case "defaultValue":
                  q = u;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (u != null) throw Error(s(91));
                  break;
                default:
                  u !== d && Me(t, r, y, u, l, d);
              }
          Jp(t, k, q);
          return;
        case "option":
          for (var te in i)
            if (
              ((k = i[te]),
              i.hasOwnProperty(te) && k != null && !l.hasOwnProperty(te))
            )
              switch (te) {
                case "selected":
                  t.selected = !1;
                  break;
                default:
                  Me(t, r, te, null, l, k);
              }
          for (x in l)
            if (
              ((k = l[x]),
              (q = i[x]),
              l.hasOwnProperty(x) && k !== q && (k != null || q != null))
            )
              switch (x) {
                case "selected":
                  t.selected =
                    k && typeof k != "function" && typeof k != "symbol";
                  break;
                default:
                  Me(t, r, x, k, l, q);
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ce in i)
            (k = i[ce]),
              i.hasOwnProperty(ce) &&
                k != null &&
                !l.hasOwnProperty(ce) &&
                Me(t, r, ce, null, l, k);
          for (D in l)
            if (
              ((k = l[D]),
              (q = i[D]),
              l.hasOwnProperty(D) && k !== q && (k != null || q != null))
            )
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null) throw Error(s(137, r));
                  break;
                default:
                  Me(t, r, D, k, l, q);
              }
          return;
        default:
          if (ec(r)) {
            for (var Ye in i)
              (k = i[Ye]),
                i.hasOwnProperty(Ye) &&
                  k !== void 0 &&
                  !l.hasOwnProperty(Ye) &&
                  $f(t, r, Ye, void 0, l, k);
            for (H in l)
              (k = l[H]),
                (q = i[H]),
                !l.hasOwnProperty(H) ||
                  k === q ||
                  (k === void 0 && q === void 0) ||
                  $f(t, r, H, k, l, q);
            return;
          }
      }
      for (var j in i)
        (k = i[j]),
          i.hasOwnProperty(j) &&
            k != null &&
            !l.hasOwnProperty(j) &&
            Me(t, r, j, null, l, k);
      for (I in l)
        (k = l[I]),
          (q = i[I]),
          !l.hasOwnProperty(I) ||
            k === q ||
            (k == null && q == null) ||
            Me(t, r, I, k, l, q);
    }
    var qf = null,
      Hf = null;
    function vo(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Pg(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Yg(t, r) {
      if (t === 0)
        switch (r) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return t === 1 && r === "foreignObject" ? 0 : t;
    }
    function Ff(t, r) {
      return (
        t === "textarea" ||
        t === "noscript" ||
        typeof r.children == "string" ||
        typeof r.children == "number" ||
        typeof r.children == "bigint" ||
        (typeof r.dangerouslySetInnerHTML == "object" &&
          r.dangerouslySetInnerHTML !== null &&
          r.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Vf = null;
    function xw() {
      var t = window.event;
      return t && t.type === "popstate"
        ? t === Vf
          ? !1
          : ((Vf = t), !0)
        : ((Vf = null), !1);
    }
    var Kg = typeof setTimeout == "function" ? setTimeout : void 0,
      _w = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Xg = typeof Promise == "function" ? Promise : void 0,
      Tw =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Xg < "u"
          ? function (t) {
              return Xg.resolve(null).then(t).catch(Aw);
            }
          : Kg;
    function Aw(t) {
      setTimeout(function () {
        throw t;
      });
    }
    function If(t, r) {
      var i = r,
        l = 0;
      do {
        var u = i.nextSibling;
        if ((t.removeChild(i), u && u.nodeType === 8))
          if (((i = u.data), i === "/$")) {
            if (l === 0) {
              t.removeChild(u), qs(r);
              return;
            }
            l--;
          } else (i !== "$" && i !== "$?" && i !== "$!") || l++;
        i = u;
      } while (i);
      qs(r);
    }
    function Gf(t) {
      var r = t.firstChild;
      for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
        var i = r;
        switch (((r = r.nextSibling), i.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Gf(i), Zu(i);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (i.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(i);
      }
    }
    function Ow(t, r, i, l) {
      for (; t.nodeType === 1; ) {
        var u = i;
        if (t.nodeName.toLowerCase() !== r.toLowerCase()) {
          if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (l) {
          if (!t[Ki])
            switch (r) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (
                  ((d = t.getAttribute("rel")),
                  d === "stylesheet" && t.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  d !== u.rel ||
                  t.getAttribute("href") !== (u.href == null ? null : u.href) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin) ||
                  t.getAttribute("title") !== (u.title == null ? null : u.title)
                )
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (
                  ((d = t.getAttribute("src")),
                  (d !== (u.src == null ? null : u.src) ||
                    t.getAttribute("type") !==
                      (u.type == null ? null : u.type) ||
                    t.getAttribute("crossorigin") !==
                      (u.crossOrigin == null ? null : u.crossOrigin)) &&
                    d &&
                    t.hasAttribute("async") &&
                    !t.hasAttribute("itemprop"))
                )
                  break;
                return t;
              default:
                return t;
            }
        } else if (r === "input" && t.type === "hidden") {
          var d = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && t.getAttribute("name") === d) return t;
        } else return t;
        if (((t = hn(t.nextSibling)), t === null)) break;
      }
      return null;
    }
    function Rw(t, r, i) {
      if (r === "") return null;
      for (; t.nodeType !== 3; )
        if (
          ((t.nodeType !== 1 ||
            t.nodeName !== "INPUT" ||
            t.type !== "hidden") &&
            !i) ||
          ((t = hn(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function hn(t) {
      for (; t != null; t = t.nextSibling) {
        var r = t.nodeType;
        if (r === 1 || r === 3) break;
        if (r === 8) {
          if (
            ((r = t.data),
            r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
          )
            break;
          if (r === "/$") return null;
        }
      }
      return t;
    }
    function Qg(t) {
      t = t.previousSibling;
      for (var r = 0; t; ) {
        if (t.nodeType === 8) {
          var i = t.data;
          if (i === "$" || i === "$!" || i === "$?") {
            if (r === 0) return t;
            r--;
          } else i === "/$" && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Zg(t, r, i) {
      switch (((r = vo(i)), t)) {
        case "html":
          if (((t = r.documentElement), !t)) throw Error(s(452));
          return t;
        case "head":
          if (((t = r.head), !t)) throw Error(s(453));
          return t;
        case "body":
          if (((t = r.body), !t)) throw Error(s(454));
          return t;
        default:
          throw Error(s(451));
      }
    }
    var rn = new Map(),
      Jg = new Set();
    function bo(t) {
      return typeof t.getRootNode == "function"
        ? t.getRootNode()
        : t.ownerDocument;
    }
    var Yn = Q.d;
    Q.d = { f: Cw, r: Dw, D: Nw, C: Mw, L: jw, m: Bw, X: Lw, S: Uw, M: kw };
    function Cw() {
      var t = Yn.f(),
        r = co();
      return t || r;
    }
    function Dw(t) {
      var r = Fa(t);
      r !== null && r.tag === 5 && r.type === "form" ? Ty(r) : Yn.r(t);
    }
    var bi = typeof document > "u" ? null : document;
    function Wg(t, r, i) {
      var l = bi;
      if (l && typeof r == "string" && r) {
        var u = Yt(r);
        (u = 'link[rel="' + t + '"][href="' + u + '"]'),
          typeof i == "string" && (u += '[crossorigin="' + i + '"]'),
          Jg.has(u) ||
            (Jg.add(u),
            (t = { rel: t, crossOrigin: i, href: r }),
            l.querySelector(u) === null &&
              ((r = l.createElement("link")),
              mt(r, "link", t),
              it(r),
              l.head.appendChild(r)));
      }
    }
    function Nw(t) {
      Yn.D(t), Wg("dns-prefetch", t, null);
    }
    function Mw(t, r) {
      Yn.C(t, r), Wg("preconnect", t, r);
    }
    function jw(t, r, i) {
      Yn.L(t, r, i);
      var l = bi;
      if (l && t && r) {
        var u = 'link[rel="preload"][as="' + Yt(r) + '"]';
        r === "image" && i && i.imageSrcSet
          ? ((u += '[imagesrcset="' + Yt(i.imageSrcSet) + '"]'),
            typeof i.imageSizes == "string" &&
              (u += '[imagesizes="' + Yt(i.imageSizes) + '"]'))
          : (u += '[href="' + Yt(t) + '"]');
        var d = u;
        switch (r) {
          case "style":
            d = Si(t);
            break;
          case "script":
            d = Ei(t);
        }
        rn.has(d) ||
          ((t = oe(
            {
              rel: "preload",
              href: r === "image" && i && i.imageSrcSet ? void 0 : t,
              as: r,
            },
            i
          )),
          rn.set(d, t),
          l.querySelector(u) !== null ||
            (r === "style" && l.querySelector(js(d))) ||
            (r === "script" && l.querySelector(Bs(d))) ||
            ((r = l.createElement("link")),
            mt(r, "link", t),
            it(r),
            l.head.appendChild(r)));
      }
    }
    function Bw(t, r) {
      Yn.m(t, r);
      var i = bi;
      if (i && t) {
        var l = r && typeof r.as == "string" ? r.as : "script",
          u =
            'link[rel="modulepreload"][as="' +
            Yt(l) +
            '"][href="' +
            Yt(t) +
            '"]',
          d = u;
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            d = Ei(t);
        }
        if (
          !rn.has(d) &&
          ((t = oe({ rel: "modulepreload", href: t }, r)),
          rn.set(d, t),
          i.querySelector(u) === null)
        ) {
          switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (i.querySelector(Bs(d))) return;
          }
          (l = i.createElement("link")),
            mt(l, "link", t),
            it(l),
            i.head.appendChild(l);
        }
      }
    }
    function Uw(t, r, i) {
      Yn.S(t, r, i);
      var l = bi;
      if (l && t) {
        var u = Va(l).hoistableStyles,
          d = Si(t);
        r = r || "default";
        var y = u.get(d);
        if (!y) {
          var b = { loading: 0, preload: null };
          if ((y = l.querySelector(js(d)))) b.loading = 5;
          else {
            (t = oe({ rel: "stylesheet", href: t, "data-precedence": r }, i)),
              (i = rn.get(d)) && Pf(t, i);
            var x = (y = l.createElement("link"));
            it(x),
              mt(x, "link", t),
              (x._p = new Promise(function (D, H) {
                (x.onload = D), (x.onerror = H);
              })),
              x.addEventListener("load", function () {
                b.loading |= 1;
              }),
              x.addEventListener("error", function () {
                b.loading |= 2;
              }),
              (b.loading |= 4),
              So(y, r, l);
          }
          (y = { type: "stylesheet", instance: y, count: 1, state: b }),
            u.set(d, y);
        }
      }
    }
    function Lw(t, r) {
      Yn.X(t, r);
      var i = bi;
      if (i && t) {
        var l = Va(i).hoistableScripts,
          u = Ei(t),
          d = l.get(u);
        d ||
          ((d = i.querySelector(Bs(u))),
          d ||
            ((t = oe({ src: t, async: !0 }, r)),
            (r = rn.get(u)) && Yf(t, r),
            (d = i.createElement("script")),
            it(d),
            mt(d, "link", t),
            i.head.appendChild(d)),
          (d = { type: "script", instance: d, count: 1, state: null }),
          l.set(u, d));
      }
    }
    function kw(t, r) {
      Yn.M(t, r);
      var i = bi;
      if (i && t) {
        var l = Va(i).hoistableScripts,
          u = Ei(t),
          d = l.get(u);
        d ||
          ((d = i.querySelector(Bs(u))),
          d ||
            ((t = oe({ src: t, async: !0, type: "module" }, r)),
            (r = rn.get(u)) && Yf(t, r),
            (d = i.createElement("script")),
            it(d),
            mt(d, "link", t),
            i.head.appendChild(d)),
          (d = { type: "script", instance: d, count: 1, state: null }),
          l.set(u, d));
      }
    }
    function e0(t, r, i, l) {
      var u = (u = on.current) ? bo(u) : null;
      if (!u) throw Error(s(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof i.precedence == "string" && typeof i.href == "string"
            ? ((r = Si(i.href)),
              (i = Va(u).hoistableStyles),
              (l = i.get(r)),
              l ||
                ((l = { type: "style", instance: null, count: 0, state: null }),
                i.set(r, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            i.rel === "stylesheet" &&
            typeof i.href == "string" &&
            typeof i.precedence == "string"
          ) {
            t = Si(i.href);
            var d = Va(u).hoistableStyles,
              y = d.get(t);
            if (
              (y ||
                ((u = u.ownerDocument || u),
                (y = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                d.set(t, y),
                (d = u.querySelector(js(t))) &&
                  !d._p &&
                  ((y.instance = d), (y.state.loading = 5)),
                rn.has(t) ||
                  ((i = {
                    rel: "preload",
                    as: "style",
                    href: i.href,
                    crossOrigin: i.crossOrigin,
                    integrity: i.integrity,
                    media: i.media,
                    hrefLang: i.hrefLang,
                    referrerPolicy: i.referrerPolicy,
                  }),
                  rn.set(t, i),
                  d || zw(u, t, i, y.state))),
              r && l === null)
            )
              throw Error(s(528, ""));
            return y;
          }
          if (r && l !== null) throw Error(s(529, ""));
          return null;
        case "script":
          return (
            (r = i.async),
            (i = i.src),
            typeof i == "string" &&
            r &&
            typeof r != "function" &&
            typeof r != "symbol"
              ? ((r = Ei(i)),
                (i = Va(u).hoistableScripts),
                (l = i.get(r)),
                l ||
                  ((l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  i.set(r, l)),
                l)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(s(444, t));
      }
    }
    function Si(t) {
      return 'href="' + Yt(t) + '"';
    }
    function js(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function t0(t) {
      return oe({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function zw(t, r, i, l) {
      t.querySelector('link[rel="preload"][as="style"][' + r + "]")
        ? (l.loading = 1)
        : ((r = t.createElement("link")),
          (l.preload = r),
          r.addEventListener("load", function () {
            return (l.loading |= 1);
          }),
          r.addEventListener("error", function () {
            return (l.loading |= 2);
          }),
          mt(r, "link", i),
          it(r),
          t.head.appendChild(r));
    }
    function Ei(t) {
      return '[src="' + Yt(t) + '"]';
    }
    function Bs(t) {
      return "script[async]" + t;
    }
    function n0(t, r, i) {
      if ((r.count++, r.instance === null))
        switch (r.type) {
          case "style":
            var l = t.querySelector('style[data-href~="' + Yt(i.href) + '"]');
            if (l) return (r.instance = l), it(l), l;
            var u = oe({}, i, {
              "data-href": i.href,
              "data-precedence": i.precedence,
              href: null,
              precedence: null,
            });
            return (
              (l = (t.ownerDocument || t).createElement("style")),
              it(l),
              mt(l, "style", u),
              So(l, i.precedence, t),
              (r.instance = l)
            );
          case "stylesheet":
            u = Si(i.href);
            var d = t.querySelector(js(u));
            if (d) return (r.state.loading |= 4), (r.instance = d), it(d), d;
            (l = t0(i)),
              (u = rn.get(u)) && Pf(l, u),
              (d = (t.ownerDocument || t).createElement("link")),
              it(d);
            var y = d;
            return (
              (y._p = new Promise(function (b, x) {
                (y.onload = b), (y.onerror = x);
              })),
              mt(d, "link", l),
              (r.state.loading |= 4),
              So(d, i.precedence, t),
              (r.instance = d)
            );
          case "script":
            return (
              (d = Ei(i.src)),
              (u = t.querySelector(Bs(d)))
                ? ((r.instance = u), it(u), u)
                : ((l = i),
                  (u = rn.get(d)) && ((l = oe({}, i)), Yf(l, u)),
                  (t = t.ownerDocument || t),
                  (u = t.createElement("script")),
                  it(u),
                  mt(u, "link", l),
                  t.head.appendChild(u),
                  (r.instance = u))
            );
          case "void":
            return null;
          default:
            throw Error(s(443, r.type));
        }
      else
        r.type === "stylesheet" &&
          !(r.state.loading & 4) &&
          ((l = r.instance), (r.state.loading |= 4), So(l, i.precedence, t));
      return r.instance;
    }
    function So(t, r, i) {
      for (
        var l = i.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]'
          ),
          u = l.length ? l[l.length - 1] : null,
          d = u,
          y = 0;
        y < l.length;
        y++
      ) {
        var b = l[y];
        if (b.dataset.precedence === r) d = b;
        else if (d !== u) break;
      }
      d
        ? d.parentNode.insertBefore(t, d.nextSibling)
        : ((r = i.nodeType === 9 ? i.head : i),
          r.insertBefore(t, r.firstChild));
    }
    function Pf(t, r) {
      t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
        t.title == null && (t.title = r.title);
    }
    function Yf(t, r) {
      t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
        t.integrity == null && (t.integrity = r.integrity);
    }
    var Eo = null;
    function r0(t, r, i) {
      if (Eo === null) {
        var l = new Map(),
          u = (Eo = new Map());
        u.set(i, l);
      } else (u = Eo), (l = u.get(i)), l || ((l = new Map()), u.set(i, l));
      if (l.has(t)) return l;
      for (
        l.set(t, null), i = i.getElementsByTagName(t), u = 0;
        u < i.length;
        u++
      ) {
        var d = i[u];
        if (
          !(
            d[Ki] ||
            d[vt] ||
            (t === "link" && d.getAttribute("rel") === "stylesheet")
          ) &&
          d.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var y = d.getAttribute(r) || "";
          y = t + y;
          var b = l.get(y);
          b ? b.push(d) : l.set(y, [d]);
        }
      }
      return l;
    }
    function a0(t, r, i) {
      (t = t.ownerDocument || t),
        t.head.insertBefore(
          i,
          r === "title" ? t.querySelector("head > title") : null
        );
    }
    function $w(t, r, i) {
      if (i === 1 || r.itemProp != null) return !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof r.precedence != "string" ||
            typeof r.href != "string" ||
            r.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof r.rel != "string" ||
            typeof r.href != "string" ||
            r.href === "" ||
            r.onLoad ||
            r.onError
          )
            break;
          switch (r.rel) {
            case "stylesheet":
              return (
                (t = r.disabled), typeof r.precedence == "string" && t == null
              );
            default:
              return !0;
          }
        case "script":
          if (
            r.async &&
            typeof r.async != "function" &&
            typeof r.async != "symbol" &&
            !r.onLoad &&
            !r.onError &&
            r.src &&
            typeof r.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function i0(t) {
      return !(t.type === "stylesheet" && !(t.state.loading & 3));
    }
    var Us = null;
    function qw() {}
    function Hw(t, r, i) {
      if (Us === null) throw Error(s(475));
      var l = Us;
      if (
        r.type === "stylesheet" &&
        (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
        !(r.state.loading & 4)
      ) {
        if (r.instance === null) {
          var u = Si(i.href),
            d = t.querySelector(js(u));
          if (d) {
            (t = d._p),
              t !== null &&
                typeof t == "object" &&
                typeof t.then == "function" &&
                (l.count++, (l = wo.bind(l)), t.then(l, l)),
              (r.state.loading |= 4),
              (r.instance = d),
              it(d);
            return;
          }
          (d = t.ownerDocument || t),
            (i = t0(i)),
            (u = rn.get(u)) && Pf(i, u),
            (d = d.createElement("link")),
            it(d);
          var y = d;
          (y._p = new Promise(function (b, x) {
            (y.onload = b), (y.onerror = x);
          })),
            mt(d, "link", i),
            (r.instance = d);
        }
        l.stylesheets === null && (l.stylesheets = new Map()),
          l.stylesheets.set(r, t),
          (t = r.state.preload) &&
            !(r.state.loading & 3) &&
            (l.count++,
            (r = wo.bind(l)),
            t.addEventListener("load", r),
            t.addEventListener("error", r));
      }
    }
    function Fw() {
      if (Us === null) throw Error(s(475));
      var t = Us;
      return (
        t.stylesheets && t.count === 0 && Kf(t, t.stylesheets),
        0 < t.count
          ? function (r) {
              var i = setTimeout(function () {
                if ((t.stylesheets && Kf(t, t.stylesheets), t.unsuspend)) {
                  var l = t.unsuspend;
                  (t.unsuspend = null), l();
                }
              }, 6e4);
              return (
                (t.unsuspend = r),
                function () {
                  (t.unsuspend = null), clearTimeout(i);
                }
              );
            }
          : null
      );
    }
    function wo() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) Kf(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          (this.unsuspend = null), t();
        }
      }
    }
    var xo = null;
    function Kf(t, r) {
      (t.stylesheets = null),
        t.unsuspend !== null &&
          (t.count++,
          (xo = new Map()),
          r.forEach(Vw, t),
          (xo = null),
          wo.call(t));
    }
    function Vw(t, r) {
      if (!(r.state.loading & 4)) {
        var i = xo.get(t);
        if (i) var l = i.get(null);
        else {
          (i = new Map()), xo.set(t, i);
          for (
            var u = t.querySelectorAll(
                "link[data-precedence],style[data-precedence]"
              ),
              d = 0;
            d < u.length;
            d++
          ) {
            var y = u[d];
            (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
              (i.set(y.dataset.precedence, y), (l = y));
          }
          l && i.set(null, l);
        }
        (u = r.instance),
          (y = u.getAttribute("data-precedence")),
          (d = i.get(y) || l),
          d === l && i.set(null, u),
          i.set(y, u),
          this.count++,
          (l = wo.bind(this)),
          u.addEventListener("load", l),
          u.addEventListener("error", l),
          d
            ? d.parentNode.insertBefore(u, d.nextSibling)
            : ((t = t.nodeType === 9 ? t.head : t),
              t.insertBefore(u, t.firstChild)),
          (r.state.loading |= 4);
      }
    }
    var Ls = {
      $$typeof: _,
      Provider: null,
      Consumer: null,
      _currentValue: he,
      _currentValue2: he,
      _threadCount: 0,
    };
    function Iw(t, r, i, l, u, d, y, b) {
      (this.tag = 1),
        (this.containerInfo = t),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Xu(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.finishedLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Xu(0)),
        (this.hiddenUpdates = Xu(null)),
        (this.identifierPrefix = l),
        (this.onUncaughtError = u),
        (this.onCaughtError = d),
        (this.onRecoverableError = y),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = b),
        (this.incompleteTransitions = new Map());
    }
    function s0(t, r, i, l, u, d, y, b, x, D, H, I) {
      return (
        (t = new Iw(t, r, i, y, b, x, D, I)),
        (r = 1),
        d === !0 && (r |= 24),
        (d = tn(3, null, null, r)),
        (t.current = d),
        (d.stateNode = t),
        (r = Tc()),
        r.refCount++,
        (t.pooledCache = r),
        r.refCount++,
        (d.memoizedState = { element: l, isDehydrated: i, cache: r }),
        sf(d),
        t
      );
    }
    function l0(t) {
      return t ? ((t = Wa), t) : Wa;
    }
    function o0(t, r, i, l, u, d) {
      (u = l0(u)),
        l.context === null ? (l.context = u) : (l.pendingContext = u),
        (l = vr(r)),
        (l.payload = { element: i }),
        (d = d === void 0 ? null : d),
        d !== null && (l.callback = d),
        (i = br(t, l, r)),
        i !== null && (Tt(i, t, r), bs(i, t, r));
    }
    function u0(t, r) {
      if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var i = t.retryLane;
        t.retryLane = i !== 0 && i < r ? i : r;
      }
    }
    function Xf(t, r) {
      u0(t, r), (t = t.alternate) && u0(t, r);
    }
    function c0(t) {
      if (t.tag === 13) {
        var r = fr(t, 67108864);
        r !== null && Tt(r, t, 67108864), Xf(t, 67108864);
      }
    }
    var _o = !0;
    function Gw(t, r, i, l) {
      var u = Y.T;
      Y.T = null;
      var d = Q.p;
      try {
        (Q.p = 2), Qf(t, r, i, l);
      } finally {
        (Q.p = d), (Y.T = u);
      }
    }
    function Pw(t, r, i, l) {
      var u = Y.T;
      Y.T = null;
      var d = Q.p;
      try {
        (Q.p = 8), Qf(t, r, i, l);
      } finally {
        (Q.p = d), (Y.T = u);
      }
    }
    function Qf(t, r, i, l) {
      if (_o) {
        var u = Zf(l);
        if (u === null) zf(t, r, l, To, i), d0(t, l);
        else if (Kw(u, t, r, i, l)) l.stopPropagation();
        else if ((d0(t, l), r & 4 && -1 < Yw.indexOf(t))) {
          for (; u !== null; ) {
            var d = Fa(u);
            if (d !== null)
              switch (d.tag) {
                case 3:
                  if (
                    ((d = d.stateNode), d.current.memoizedState.isDehydrated)
                  ) {
                    var y = Pr(d.pendingLanes);
                    if (y !== 0) {
                      var b = d;
                      for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                        var x = 1 << (31 - jt(y));
                        (b.entanglements[1] |= x), (y &= ~x);
                      }
                      Tn(d), !(Ie & 6) && ((lo = J() + 500), Ds(0));
                    }
                  }
                  break;
                case 13:
                  (b = fr(d, 2)), b !== null && Tt(b, d, 2), co(), Xf(d, 2);
              }
            if (((d = Zf(l)), d === null && zf(t, r, l, To, i), d === u)) break;
            u = d;
          }
          u !== null && l.stopPropagation();
        } else zf(t, r, l, null, i);
      }
    }
    function Zf(t) {
      return (t = nc(t)), Jf(t);
    }
    var To = null;
    function Jf(t) {
      if (((To = null), (t = Yr(t)), t !== null)) {
        var r = se(t);
        if (r === null) t = null;
        else {
          var i = r.tag;
          if (i === 13) {
            if (((t = De(r)), t !== null)) return t;
            t = null;
          } else if (i === 3) {
            if (r.stateNode.current.memoizedState.isDehydrated)
              return r.tag === 3 ? r.stateNode.containerInfo : null;
            t = null;
          } else r !== t && (t = null);
        }
      }
      return (To = t), null;
    }
    function f0(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (ie()) {
            case pe:
              return 2;
            case Ae:
              return 8;
            case Xe:
            case un:
              return 32;
            case qa:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Wf = !1,
      Ar = null,
      Or = null,
      Rr = null,
      ks = new Map(),
      zs = new Map(),
      Cr = [],
      Yw =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " "
        );
    function d0(t, r) {
      switch (t) {
        case "focusin":
        case "focusout":
          Ar = null;
          break;
        case "dragenter":
        case "dragleave":
          Or = null;
          break;
        case "mouseover":
        case "mouseout":
          Rr = null;
          break;
        case "pointerover":
        case "pointerout":
          ks.delete(r.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          zs.delete(r.pointerId);
      }
    }
    function $s(t, r, i, l, u, d) {
      return t === null || t.nativeEvent !== d
        ? ((t = {
            blockedOn: r,
            domEventName: i,
            eventSystemFlags: l,
            nativeEvent: d,
            targetContainers: [u],
          }),
          r !== null && ((r = Fa(r)), r !== null && c0(r)),
          t)
        : ((t.eventSystemFlags |= l),
          (r = t.targetContainers),
          u !== null && r.indexOf(u) === -1 && r.push(u),
          t);
    }
    function Kw(t, r, i, l, u) {
      switch (r) {
        case "focusin":
          return (Ar = $s(Ar, t, r, i, l, u)), !0;
        case "dragenter":
          return (Or = $s(Or, t, r, i, l, u)), !0;
        case "mouseover":
          return (Rr = $s(Rr, t, r, i, l, u)), !0;
        case "pointerover":
          var d = u.pointerId;
          return ks.set(d, $s(ks.get(d) || null, t, r, i, l, u)), !0;
        case "gotpointercapture":
          return (
            (d = u.pointerId),
            zs.set(d, $s(zs.get(d) || null, t, r, i, l, u)),
            !0
          );
      }
      return !1;
    }
    function h0(t) {
      var r = Yr(t.target);
      if (r !== null) {
        var i = se(r);
        if (i !== null) {
          if (((r = i.tag), r === 13)) {
            if (((r = De(i)), r !== null)) {
              (t.blockedOn = r),
                FE(t.priority, function () {
                  if (i.tag === 13) {
                    var l = zt(),
                      u = fr(i, l);
                    u !== null && Tt(u, i, l), Xf(i, l);
                  }
                });
              return;
            }
          } else if (
            r === 3 &&
            i.stateNode.current.memoizedState.isDehydrated
          ) {
            t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Ao(t) {
      if (t.blockedOn !== null) return !1;
      for (var r = t.targetContainers; 0 < r.length; ) {
        var i = Zf(t.nativeEvent);
        if (i === null) {
          i = t.nativeEvent;
          var l = new i.constructor(i.type, i);
          (tc = l), i.target.dispatchEvent(l), (tc = null);
        } else return (r = Fa(i)), r !== null && c0(r), (t.blockedOn = i), !1;
        r.shift();
      }
      return !0;
    }
    function p0(t, r, i) {
      Ao(t) && i.delete(r);
    }
    function Xw() {
      (Wf = !1),
        Ar !== null && Ao(Ar) && (Ar = null),
        Or !== null && Ao(Or) && (Or = null),
        Rr !== null && Ao(Rr) && (Rr = null),
        ks.forEach(p0),
        zs.forEach(p0);
    }
    function Oo(t, r) {
      t.blockedOn === r &&
        ((t.blockedOn = null),
        Wf ||
          ((Wf = !0),
          e.unstable_scheduleCallback(e.unstable_NormalPriority, Xw)));
    }
    var Ro = null;
    function m0(t) {
      Ro !== t &&
        ((Ro = t),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
          Ro === t && (Ro = null);
          for (var r = 0; r < t.length; r += 3) {
            var i = t[r],
              l = t[r + 1],
              u = t[r + 2];
            if (typeof l != "function") {
              if (Jf(l || i) === null) continue;
              break;
            }
            var d = Fa(i);
            d !== null &&
              (t.splice(r, 3),
              (r -= 3),
              Hc(
                d,
                { pending: !0, data: u, method: i.method, action: l },
                l,
                u
              ));
          }
        }));
    }
    function qs(t) {
      function r(x) {
        return Oo(x, t);
      }
      Ar !== null && Oo(Ar, t),
        Or !== null && Oo(Or, t),
        Rr !== null && Oo(Rr, t),
        ks.forEach(r),
        zs.forEach(r);
      for (var i = 0; i < Cr.length; i++) {
        var l = Cr[i];
        l.blockedOn === t && (l.blockedOn = null);
      }
      for (; 0 < Cr.length && ((i = Cr[0]), i.blockedOn === null); )
        h0(i), i.blockedOn === null && Cr.shift();
      if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
        for (l = 0; l < i.length; l += 3) {
          var u = i[l],
            d = i[l + 1],
            y = u[Ot] || null;
          if (typeof d == "function") y || m0(i);
          else if (y) {
            var b = null;
            if (d && d.hasAttribute("formAction")) {
              if (((u = d), (y = d[Ot] || null))) b = y.formAction;
              else if (Jf(u) !== null) continue;
            } else b = y.action;
            typeof b == "function"
              ? (i[l + 1] = b)
              : (i.splice(l, 3), (l -= 3)),
              m0(i);
          }
        }
    }
    function ed(t) {
      this._internalRoot = t;
    }
    (Co.prototype.render = ed.prototype.render =
      function (t) {
        var r = this._internalRoot;
        if (r === null) throw Error(s(409));
        var i = r.current,
          l = zt();
        o0(i, l, t, r, null, null);
      }),
      (Co.prototype.unmount = ed.prototype.unmount =
        function () {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var r = t.containerInfo;
            t.tag === 0 && yi(),
              o0(t.current, 2, null, t, null, null),
              co(),
              (r[Ha] = null);
          }
        });
    function Co(t) {
      this._internalRoot = t;
    }
    Co.prototype.unstable_scheduleHydration = function (t) {
      if (t) {
        var r = Vp();
        t = { blockedOn: null, target: t, priority: r };
        for (var i = 0; i < Cr.length && r !== 0 && r < Cr[i].priority; i++);
        Cr.splice(i, 0, t), i === 0 && h0(t);
      }
    };
    var y0 = n.version;
    if (y0 !== "19.0.0") throw Error(s(527, y0, "19.0.0"));
    Q.findDOMNode = function (t) {
      var r = t._reactInternals;
      if (r === void 0)
        throw typeof t.render == "function"
          ? Error(s(188))
          : ((t = Object.keys(t).join(",")), Error(s(268, t)));
      return (
        (t = G(r)),
        (t = t !== null ? ne(t) : null),
        (t = t === null ? null : t.stateNode),
        t
      );
    };
    var Qw = {
      bundleType: 0,
      version: "19.0.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: Y,
      findFiberByHostInstance: Yr,
      reconcilerVersion: "19.0.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Do.isDisabled && Do.supportsFiber)
        try {
          (lr = Do.inject(Qw)), (xt = Do);
        } catch {}
    }
    return (
      (Fs.createRoot = function (t, r) {
        if (!o(t)) throw Error(s(299));
        var i = !1,
          l = "",
          u = jy,
          d = By,
          y = Uy,
          b = null;
        return (
          r != null &&
            (r.unstable_strictMode === !0 && (i = !0),
            r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
            r.onUncaughtError !== void 0 && (u = r.onUncaughtError),
            r.onCaughtError !== void 0 && (d = r.onCaughtError),
            r.onRecoverableError !== void 0 && (y = r.onRecoverableError),
            r.unstable_transitionCallbacks !== void 0 &&
              (b = r.unstable_transitionCallbacks)),
          (r = s0(t, 1, !1, null, null, i, l, u, d, y, b, null)),
          (t[Ha] = r.current),
          kf(t.nodeType === 8 ? t.parentNode : t),
          new ed(r)
        );
      }),
      (Fs.hydrateRoot = function (t, r, i) {
        if (!o(t)) throw Error(s(299));
        var l = !1,
          u = "",
          d = jy,
          y = By,
          b = Uy,
          x = null,
          D = null;
        return (
          i != null &&
            (i.unstable_strictMode === !0 && (l = !0),
            i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
            i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
            i.onCaughtError !== void 0 && (y = i.onCaughtError),
            i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
            i.unstable_transitionCallbacks !== void 0 &&
              (x = i.unstable_transitionCallbacks),
            i.formState !== void 0 && (D = i.formState)),
          (r = s0(t, 1, !0, r, i ?? null, l, u, d, y, b, x, D)),
          (r.context = l0(null)),
          (i = r.current),
          (l = zt()),
          (u = vr(l)),
          (u.callback = null),
          br(i, u, l),
          (r.current.lanes = l),
          Yi(r, l),
          Tn(r),
          (t[Ha] = r.current),
          kf(t),
          new Co(r)
        );
      }),
      (Fs.version = "19.0.0"),
      Fs
    );
  }
  var A0;
  function ux() {
    if (A0) return ad.exports;
    A0 = 1;
    function e() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (n) {
          console.error(n);
        }
    }
    return e(), (ad.exports = ox()), ad.exports;
  }
  var cx = ux(),
    Vs = {},
    O0;
  function fx() {
    if (O0) return Vs;
    (O0 = 1),
      Object.defineProperty(Vs, "__esModule", { value: !0 }),
      (Vs.parse = f),
      (Vs.serialize = m);
    const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
      n = /^[\u0021-\u003A\u003C-\u007E]*$/,
      a =
        /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      s = /^[\u0020-\u003A\u003D-\u007E]*$/,
      o = Object.prototype.toString,
      c = (() => {
        const S = function () {};
        return (S.prototype = Object.create(null)), S;
      })();
    function f(S, _) {
      const w = new c(),
        M = S.length;
      if (M < 2) return w;
      const A = (_ == null ? void 0 : _.decode) || g;
      let T = 0;
      do {
        const L = S.indexOf("=", T);
        if (L === -1) break;
        const B = S.indexOf(";", T),
          P = B === -1 ? M : B;
        if (L > P) {
          T = S.lastIndexOf(";", L - 1) + 1;
          continue;
        }
        const N = p(S, T, L),
          F = h(S, L, N),
          K = S.slice(N, F);
        if (w[K] === void 0) {
          let ee = p(S, L + 1, P),
            Y = h(S, P, ee);
          const oe = A(S.slice(ee, Y));
          w[K] = oe;
        }
        T = P + 1;
      } while (T < M);
      return w;
    }
    function p(S, _, w) {
      do {
        const M = S.charCodeAt(_);
        if (M !== 32 && M !== 9) return _;
      } while (++_ < w);
      return w;
    }
    function h(S, _, w) {
      for (; _ > w; ) {
        const M = S.charCodeAt(--_);
        if (M !== 32 && M !== 9) return _ + 1;
      }
      return w;
    }
    function m(S, _, w) {
      const M = (w == null ? void 0 : w.encode) || encodeURIComponent;
      if (!e.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
      const A = M(_);
      if (!n.test(A)) throw new TypeError(`argument val is invalid: ${_}`);
      let T = S + "=" + A;
      if (!w) return T;
      if (w.maxAge !== void 0) {
        if (!Number.isInteger(w.maxAge))
          throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
        T += "; Max-Age=" + w.maxAge;
      }
      if (w.domain) {
        if (!a.test(w.domain))
          throw new TypeError(`option domain is invalid: ${w.domain}`);
        T += "; Domain=" + w.domain;
      }
      if (w.path) {
        if (!s.test(w.path))
          throw new TypeError(`option path is invalid: ${w.path}`);
        T += "; Path=" + w.path;
      }
      if (w.expires) {
        if (!v(w.expires) || !Number.isFinite(w.expires.valueOf()))
          throw new TypeError(`option expires is invalid: ${w.expires}`);
        T += "; Expires=" + w.expires.toUTCString();
      }
      if (
        (w.httpOnly && (T += "; HttpOnly"),
        w.secure && (T += "; Secure"),
        w.partitioned && (T += "; Partitioned"),
        w.priority)
      )
        switch (
          typeof w.priority == "string" ? w.priority.toLowerCase() : void 0
        ) {
          case "low":
            T += "; Priority=Low";
            break;
          case "medium":
            T += "; Priority=Medium";
            break;
          case "high":
            T += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${w.priority}`);
        }
      if (w.sameSite)
        switch (
          typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite
        ) {
          case !0:
          case "strict":
            T += "; SameSite=Strict";
            break;
          case "lax":
            T += "; SameSite=Lax";
            break;
          case "none":
            T += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
        }
      return T;
    }
    function g(S) {
      if (S.indexOf("%") === -1) return S;
      try {
        return decodeURIComponent(S);
      } catch {
        return S;
      }
    }
    function v(S) {
      return o.call(S) === "[object Date]";
    }
    return Vs;
  }
  fx();
  /**
   * react-router v7.2.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ var R0 = "popstate";
  function dx(e = {}) {
    function n(s, o) {
      let { pathname: c, search: f, hash: p } = s.location;
      return Wd(
        "",
        { pathname: c, search: f, hash: p },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      );
    }
    function a(s, o) {
      return typeof o == "string" ? o : rl(o);
    }
    return px(n, a, null, e);
  }
  function He(e, n) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(n);
  }
  function gn(e, n) {
    if (!e) {
      typeof console < "u" && console.warn(n);
      try {
        throw new Error(n);
      } catch {}
    }
  }
  function hx() {
    return Math.random().toString(36).substring(2, 10);
  }
  function C0(e, n) {
    return { usr: e.state, key: e.key, idx: n };
  }
  function Wd(e, n, a = null, s) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...(typeof n == "string" ? Bi(n) : n),
      state: a,
      key: (n && n.key) || s || hx(),
    };
  }
  function rl({ pathname: e = "/", search: n = "", hash: a = "" }) {
    return (
      n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
      a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
      e
    );
  }
  function Bi(e) {
    let n = {};
    if (e) {
      let a = e.indexOf("#");
      a >= 0 && ((n.hash = e.substring(a)), (e = e.substring(0, a)));
      let s = e.indexOf("?");
      s >= 0 && ((n.search = e.substring(s)), (e = e.substring(0, s))),
        e && (n.pathname = e);
    }
    return n;
  }
  function px(e, n, a, s = {}) {
    let { window: o = document.defaultView, v5Compat: c = !1 } = s,
      f = o.history,
      p = "POP",
      h = null,
      m = g();
    m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
    function g() {
      return (f.state || { idx: null }).idx;
    }
    function v() {
      p = "POP";
      let A = g(),
        T = A == null ? null : A - m;
      (m = A), h && h({ action: p, location: M.location, delta: T });
    }
    function S(A, T) {
      p = "PUSH";
      let L = Wd(M.location, A, T);
      m = g() + 1;
      let B = C0(L, m),
        P = M.createHref(L);
      try {
        f.pushState(B, "", P);
      } catch (N) {
        if (N instanceof DOMException && N.name === "DataCloneError") throw N;
        o.location.assign(P);
      }
      c && h && h({ action: p, location: M.location, delta: 1 });
    }
    function _(A, T) {
      p = "REPLACE";
      let L = Wd(M.location, A, T);
      m = g();
      let B = C0(L, m),
        P = M.createHref(L);
      f.replaceState(B, "", P),
        c && h && h({ action: p, location: M.location, delta: 0 });
    }
    function w(A) {
      let T =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        L = typeof A == "string" ? A : rl(A);
      return (
        (L = L.replace(/ $/, "%20")),
        He(
          T,
          `No window.location.(origin|href) available to create URL for href: ${L}`
        ),
        new URL(L, T)
      );
    }
    let M = {
      get action() {
        return p;
      },
      get location() {
        return e(o, f);
      },
      listen(A) {
        if (h) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(R0, v),
          (h = A),
          () => {
            o.removeEventListener(R0, v), (h = null);
          }
        );
      },
      createHref(A) {
        return n(o, A);
      },
      createURL: w,
      encodeLocation(A) {
        let T = w(A);
        return { pathname: T.pathname, search: T.search, hash: T.hash };
      },
      push: S,
      replace: _,
      go(A) {
        return f.go(A);
      },
    };
    return M;
  }
  function jb(e, n, a = "/") {
    return mx(e, n, a, !1);
  }
  function mx(e, n, a, s) {
    let o = typeof n == "string" ? Bi(n) : n,
      c = zr(o.pathname || "/", a);
    if (c == null) return null;
    let f = Bb(e);
    yx(f);
    let p = null;
    for (let h = 0; p == null && h < f.length; ++h) {
      let m = Ox(c);
      p = Tx(f[h], m, s);
    }
    return p;
  }
  function Bb(e, n = [], a = [], s = "") {
    let o = (c, f, p) => {
      let h = {
        relativePath: p === void 0 ? c.path || "" : p,
        caseSensitive: c.caseSensitive === !0,
        childrenIndex: f,
        route: c,
      };
      h.relativePath.startsWith("/") &&
        (He(
          h.relativePath.startsWith(s),
          `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        ),
        (h.relativePath = h.relativePath.slice(s.length)));
      let m = Wn([s, h.relativePath]),
        g = a.concat(h);
      c.children &&
        c.children.length > 0 &&
        (He(
          c.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
        ),
        Bb(c.children, n, g, m)),
        !(c.path == null && !c.index) &&
          n.push({ path: m, score: xx(m, c.index), routesMeta: g });
    };
    return (
      e.forEach((c, f) => {
        var p;
        if (c.path === "" || !((p = c.path) != null && p.includes("?")))
          o(c, f);
        else for (let h of Ub(c.path)) o(c, f, h);
      }),
      n
    );
  }
  function Ub(e) {
    let n = e.split("/");
    if (n.length === 0) return [];
    let [a, ...s] = n,
      o = a.endsWith("?"),
      c = a.replace(/\?$/, "");
    if (s.length === 0) return o ? [c, ""] : [c];
    let f = Ub(s.join("/")),
      p = [];
    return (
      p.push(...f.map((h) => (h === "" ? c : [c, h].join("/")))),
      o && p.push(...f),
      p.map((h) => (e.startsWith("/") && h === "" ? "/" : h))
    );
  }
  function yx(e) {
    e.sort((n, a) =>
      n.score !== a.score
        ? a.score - n.score
        : _x(
            n.routesMeta.map((s) => s.childrenIndex),
            a.routesMeta.map((s) => s.childrenIndex)
          )
    );
  }
  var gx = /^:[\w-]+$/,
    vx = 3,
    bx = 2,
    Sx = 1,
    Ex = 10,
    wx = -2,
    D0 = (e) => e === "*";
  function xx(e, n) {
    let a = e.split("/"),
      s = a.length;
    return (
      a.some(D0) && (s += wx),
      n && (s += bx),
      a
        .filter((o) => !D0(o))
        .reduce((o, c) => o + (gx.test(c) ? vx : c === "" ? Sx : Ex), s)
    );
  }
  function _x(e, n) {
    return e.length === n.length && e.slice(0, -1).every((s, o) => s === n[o])
      ? e[e.length - 1] - n[n.length - 1]
      : 0;
  }
  function Tx(e, n, a = !1) {
    let { routesMeta: s } = e,
      o = {},
      c = "/",
      f = [];
    for (let p = 0; p < s.length; ++p) {
      let h = s[p],
        m = p === s.length - 1,
        g = c === "/" ? n : n.slice(c.length) || "/",
        v = ru(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
          g
        ),
        S = h.route;
      if (
        (!v &&
          m &&
          a &&
          !s[s.length - 1].route.index &&
          (v = ru(
            { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
            g
          )),
        !v)
      )
        return null;
      Object.assign(o, v.params),
        f.push({
          params: o,
          pathname: Wn([c, v.pathname]),
          pathnameBase: Nx(Wn([c, v.pathnameBase])),
          route: S,
        }),
        v.pathnameBase !== "/" && (c = Wn([c, v.pathnameBase]));
    }
    return f;
  }
  function ru(e, n) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [a, s] = Ax(e.path, e.caseSensitive, e.end),
      o = n.match(a);
    if (!o) return null;
    let c = o[0],
      f = c.replace(/(.)\/+$/, "$1"),
      p = o.slice(1);
    return {
      params: s.reduce((m, { paramName: g, isOptional: v }, S) => {
        if (g === "*") {
          let w = p[S] || "";
          f = c.slice(0, c.length - w.length).replace(/(.)\/+$/, "$1");
        }
        const _ = p[S];
        return (
          v && !_ ? (m[g] = void 0) : (m[g] = (_ || "").replace(/%2F/g, "/")), m
        );
      }, {}),
      pathname: c,
      pathnameBase: f,
      pattern: e,
    };
  }
  function Ax(e, n = !1, a = !0) {
    gn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      `Route path "${e}" will be treated as if it were "${e.replace(
        /\*$/,
        "/*"
      )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
        /\*$/,
        "/*"
      )}".`
    );
    let s = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (f, p, h) => (
              s.push({ paramName: p, isOptional: h != null }),
              h ? "/?([^\\/]+)?" : "/([^\\/]+)"
            )
          );
    return (
      e.endsWith("*")
        ? (s.push({ paramName: "*" }),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : a
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, n ? void 0 : "i"), s]
    );
  }
  function Ox(e) {
    try {
      return e
        .split("/")
        .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
        .join("/");
    } catch (n) {
      return (
        gn(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
        ),
        e
      );
    }
  }
  function zr(e, n) {
    if (n === "/") return e;
    if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
    let a = n.endsWith("/") ? n.length - 1 : n.length,
      s = e.charAt(a);
    return s && s !== "/" ? null : e.slice(a) || "/";
  }
  function Rx(e, n = "/") {
    let {
      pathname: a,
      search: s = "",
      hash: o = "",
    } = typeof e == "string" ? Bi(e) : e;
    return {
      pathname: a ? (a.startsWith("/") ? a : Cx(a, n)) : n,
      search: Mx(s),
      hash: jx(o),
    };
  }
  function Cx(e, n) {
    let a = n.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((o) => {
        o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
      }),
      a.length > 1 ? a.join("/") : "/"
    );
  }
  function od(e, n, a, s) {
    return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
      s
    )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Dx(e) {
    return e.filter(
      (n, a) => a === 0 || (n.route.path && n.route.path.length > 0)
    );
  }
  function Ih(e) {
    let n = Dx(e);
    return n.map((a, s) => (s === n.length - 1 ? a.pathname : a.pathnameBase));
  }
  function Gh(e, n, a, s = !1) {
    let o;
    typeof e == "string"
      ? (o = Bi(e))
      : ((o = { ...e }),
        He(
          !o.pathname || !o.pathname.includes("?"),
          od("?", "pathname", "search", o)
        ),
        He(
          !o.pathname || !o.pathname.includes("#"),
          od("#", "pathname", "hash", o)
        ),
        He(!o.search || !o.search.includes("#"), od("#", "search", "hash", o)));
    let c = e === "" || o.pathname === "",
      f = c ? "/" : o.pathname,
      p;
    if (f == null) p = a;
    else {
      let v = n.length - 1;
      if (!s && f.startsWith("..")) {
        let S = f.split("/");
        for (; S[0] === ".."; ) S.shift(), (v -= 1);
        o.pathname = S.join("/");
      }
      p = v >= 0 ? n[v] : "/";
    }
    let h = Rx(o, p),
      m = f && f !== "/" && f.endsWith("/"),
      g = (c || f === ".") && a.endsWith("/");
    return !h.pathname.endsWith("/") && (m || g) && (h.pathname += "/"), h;
  }
  var Wn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Nx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Mx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    jx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function Bx(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  var Lb = ["POST", "PUT", "PATCH", "DELETE"];
  new Set(Lb);
  var Ux = ["GET", ...Lb];
  new Set(Ux);
  var Ui = R.createContext(null);
  Ui.displayName = "DataRouter";
  var vu = R.createContext(null);
  vu.displayName = "DataRouterState";
  var kb = R.createContext({ isTransitioning: !1 });
  kb.displayName = "ViewTransition";
  var Lx = R.createContext(new Map());
  Lx.displayName = "Fetchers";
  var kx = R.createContext(null);
  kx.displayName = "Await";
  var bn = R.createContext(null);
  bn.displayName = "Navigation";
  var hl = R.createContext(null);
  hl.displayName = "Location";
  var Cn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  Cn.displayName = "Route";
  var Ph = R.createContext(null);
  Ph.displayName = "RouteError";
  function zx(e, { relative: n } = {}) {
    He(
      Li(),
      "useHref() may be used only in the context of a <Router> component."
    );
    let { basename: a, navigator: s } = R.useContext(bn),
      { hash: o, pathname: c, search: f } = ml(e, { relative: n }),
      p = c;
    return (
      a !== "/" && (p = c === "/" ? a : Wn([a, c])),
      s.createHref({ pathname: p, search: f, hash: o })
    );
  }
  function Li() {
    return R.useContext(hl) != null;
  }
  function Fr() {
    return (
      He(
        Li(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      R.useContext(hl).location
    );
  }
  var zb =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function $b(e) {
    R.useContext(bn).static || R.useLayoutEffect(e);
  }
  function pl() {
    let { isDataRoute: e } = R.useContext(Cn);
    return e ? Zx() : $x();
  }
  function $x() {
    He(
      Li(),
      "useNavigate() may be used only in the context of a <Router> component."
    );
    let e = R.useContext(Ui),
      { basename: n, navigator: a } = R.useContext(bn),
      { matches: s } = R.useContext(Cn),
      { pathname: o } = Fr(),
      c = JSON.stringify(Ih(s)),
      f = R.useRef(!1);
    return (
      $b(() => {
        f.current = !0;
      }),
      R.useCallback(
        (h, m = {}) => {
          if ((gn(f.current, zb), !f.current)) return;
          if (typeof h == "number") {
            a.go(h);
            return;
          }
          let g = Gh(h, JSON.parse(c), o, m.relative === "path");
          e == null &&
            n !== "/" &&
            (g.pathname = g.pathname === "/" ? n : Wn([n, g.pathname])),
            (m.replace ? a.replace : a.push)(g, m.state, m);
        },
        [n, a, c, o, e]
      )
    );
  }
  R.createContext(null);
  function ml(e, { relative: n } = {}) {
    let { matches: a } = R.useContext(Cn),
      { pathname: s } = Fr(),
      o = JSON.stringify(Ih(a));
    return R.useMemo(() => Gh(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
  }
  function qx(e, n) {
    return qb(e, n);
  }
  function qb(e, n, a, s) {
    var L;
    He(
      Li(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: o, static: c } = R.useContext(bn),
      { matches: f } = R.useContext(Cn),
      p = f[f.length - 1],
      h = p ? p.params : {},
      m = p ? p.pathname : "/",
      g = p ? p.pathnameBase : "/",
      v = p && p.route;
    {
      let B = (v && v.path) || "";
      Hb(
        m,
        !v || B.endsWith("*") || B.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${
          B === "/" ? "*" : `${B}/*`
        }">.`
      );
    }
    let S = Fr(),
      _;
    if (n) {
      let B = typeof n == "string" ? Bi(n) : n;
      He(
        g === "/" || ((L = B.pathname) == null ? void 0 : L.startsWith(g)),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${B.pathname}" was given in the \`location\` prop.`
      ),
        (_ = B);
    } else _ = S;
    let w = _.pathname || "/",
      M = w;
    if (g !== "/") {
      let B = g.replace(/^\//, "").split("/");
      M = "/" + w.replace(/^\//, "").split("/").slice(B.length).join("/");
    }
    let A =
      !c && a && a.matches && a.matches.length > 0
        ? a.matches
        : jb(e, { pathname: M });
    gn(
      v || A != null,
      `No routes matched location "${_.pathname}${_.search}${_.hash}" `
    ),
      gn(
        A == null ||
          A[A.length - 1].route.element !== void 0 ||
          A[A.length - 1].route.Component !== void 0 ||
          A[A.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    let T = Gx(
      A &&
        A.map((B) =>
          Object.assign({}, B, {
            params: Object.assign({}, h, B.params),
            pathname: Wn([
              g,
              o.encodeLocation
                ? o.encodeLocation(B.pathname).pathname
                : B.pathname,
            ]),
            pathnameBase:
              B.pathnameBase === "/"
                ? g
                : Wn([
                    g,
                    o.encodeLocation
                      ? o.encodeLocation(B.pathnameBase).pathname
                      : B.pathnameBase,
                  ]),
          })
        ),
      f,
      a,
      s
    );
    return n && T
      ? R.createElement(
          hl.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ..._,
              },
              navigationType: "POP",
            },
          },
          T
        )
      : T;
  }
  function Hx() {
    let e = Qx(),
      n = Bx(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      a = e instanceof Error ? e.stack : null,
      s = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: s },
      c = { padding: "2px 4px", backgroundColor: s },
      f = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (f = R.createElement(
        R.Fragment,
        null,
        R.createElement("p", null, "💿 Hey developer 👋"),
        R.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          R.createElement("code", { style: c }, "ErrorBoundary"),
          " or",
          " ",
          R.createElement("code", { style: c }, "errorElement"),
          " prop on your route."
        )
      )),
      R.createElement(
        R.Fragment,
        null,
        R.createElement("h2", null, "Unexpected Application Error!"),
        R.createElement("h3", { style: { fontStyle: "italic" } }, n),
        a ? R.createElement("pre", { style: o }, a) : null,
        f
      )
    );
  }
  var Fx = R.createElement(Hx, null),
    Vx = class extends R.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, n) {
        return n.location !== e.location ||
          (n.revalidation !== "idle" && e.revalidation === "idle")
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: e.error !== void 0 ? e.error : n.error,
              location: n.location,
              revalidation: e.revalidation || n.revalidation,
            };
      }
      componentDidCatch(e, n) {
        console.error(
          "React Router caught the following error during render",
          e,
          n
        );
      }
      render() {
        return this.state.error !== void 0
          ? R.createElement(
              Cn.Provider,
              { value: this.props.routeContext },
              R.createElement(Ph.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function Ix({ routeContext: e, match: n, children: a }) {
    let s = R.useContext(Ui);
    return (
      s &&
        s.static &&
        s.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (s.staticContext._deepestRenderedBoundaryId = n.route.id),
      R.createElement(Cn.Provider, { value: e }, a)
    );
  }
  function Gx(e, n = [], a = null, s = null) {
    if (e == null) {
      if (!a) return null;
      if (a.errors) e = a.matches;
      else if (n.length === 0 && !a.initialized && a.matches.length > 0)
        e = a.matches;
      else return null;
    }
    let o = e,
      c = a == null ? void 0 : a.errors;
    if (c != null) {
      let h = o.findIndex(
        (m) => m.route.id && (c == null ? void 0 : c[m.route.id]) !== void 0
      );
      He(
        h >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          c
        ).join(",")}`
      ),
        (o = o.slice(0, Math.min(o.length, h + 1)));
    }
    let f = !1,
      p = -1;
    if (a)
      for (let h = 0; h < o.length; h++) {
        let m = o[h];
        if (
          ((m.route.HydrateFallback || m.route.hydrateFallbackElement) &&
            (p = h),
          m.route.id)
        ) {
          let { loaderData: g, errors: v } = a,
            S =
              m.route.loader &&
              !g.hasOwnProperty(m.route.id) &&
              (!v || v[m.route.id] === void 0);
          if (m.route.lazy || S) {
            (f = !0), p >= 0 ? (o = o.slice(0, p + 1)) : (o = [o[0]]);
            break;
          }
        }
      }
    return o.reduceRight((h, m, g) => {
      let v,
        S = !1,
        _ = null,
        w = null;
      a &&
        ((v = c && m.route.id ? c[m.route.id] : void 0),
        (_ = m.route.errorElement || Fx),
        f &&
          (p < 0 && g === 0
            ? (Hb(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (S = !0),
              (w = null))
            : p === g &&
              ((S = !0), (w = m.route.hydrateFallbackElement || null))));
      let M = n.concat(o.slice(0, g + 1)),
        A = () => {
          let T;
          return (
            v
              ? (T = _)
              : S
              ? (T = w)
              : m.route.Component
              ? (T = R.createElement(m.route.Component, null))
              : m.route.element
              ? (T = m.route.element)
              : (T = h),
            R.createElement(Ix, {
              match: m,
              routeContext: { outlet: h, matches: M, isDataRoute: a != null },
              children: T,
            })
          );
        };
      return a && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
        ? R.createElement(Vx, {
            location: a.location,
            revalidation: a.revalidation,
            component: _,
            error: v,
            children: A(),
            routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          })
        : A();
    }, null);
  }
  function Yh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Px(e) {
    let n = R.useContext(Ui);
    return He(n, Yh(e)), n;
  }
  function Yx(e) {
    let n = R.useContext(vu);
    return He(n, Yh(e)), n;
  }
  function Kx(e) {
    let n = R.useContext(Cn);
    return He(n, Yh(e)), n;
  }
  function Kh(e) {
    let n = Kx(e),
      a = n.matches[n.matches.length - 1];
    return (
      He(
        a.route.id,
        `${e} can only be used on routes that contain a unique "id"`
      ),
      a.route.id
    );
  }
  function Xx() {
    return Kh("useRouteId");
  }
  function Qx() {
    var s;
    let e = R.useContext(Ph),
      n = Yx("useRouteError"),
      a = Kh("useRouteError");
    return e !== void 0 ? e : (s = n.errors) == null ? void 0 : s[a];
  }
  function Zx() {
    let { router: e } = Px("useNavigate"),
      n = Kh("useNavigate"),
      a = R.useRef(!1);
    return (
      $b(() => {
        a.current = !0;
      }),
      R.useCallback(
        async (o, c = {}) => {
          gn(a.current, zb),
            a.current &&
              (typeof o == "number"
                ? e.navigate(o)
                : await e.navigate(o, { fromRouteId: n, ...c }));
        },
        [e, n]
      )
    );
  }
  var N0 = {};
  function Hb(e, n, a) {
    !n && !N0[e] && ((N0[e] = !0), gn(!1, a));
  }
  R.memo(Jx);
  function Jx({ routes: e, future: n, state: a }) {
    return qb(e, void 0, a, n);
  }
  function M0({ to: e, replace: n, state: a, relative: s }) {
    He(
      Li(),
      "<Navigate> may be used only in the context of a <Router> component."
    );
    let { static: o } = R.useContext(bn);
    gn(
      !o,
      "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
    );
    let { matches: c } = R.useContext(Cn),
      { pathname: f } = Fr(),
      p = pl(),
      h = Gh(e, Ih(c), f, s === "path"),
      m = JSON.stringify(h);
    return (
      R.useEffect(() => {
        p(JSON.parse(m), { replace: n, state: a, relative: s });
      }, [p, m, s, n, a]),
      null
    );
  }
  function xi(e) {
    He(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
    );
  }
  function Wx({
    basename: e = "/",
    children: n = null,
    location: a,
    navigationType: s = "POP",
    navigator: o,
    static: c = !1,
  }) {
    He(
      !Li(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let f = e.replace(/^\/*/, "/"),
      p = R.useMemo(
        () => ({ basename: f, navigator: o, static: c, future: {} }),
        [f, o, c]
      );
    typeof a == "string" && (a = Bi(a));
    let {
        pathname: h = "/",
        search: m = "",
        hash: g = "",
        state: v = null,
        key: S = "default",
      } = a,
      _ = R.useMemo(() => {
        let w = zr(h, f);
        return w == null
          ? null
          : {
              location: { pathname: w, search: m, hash: g, state: v, key: S },
              navigationType: s,
            };
      }, [f, h, m, g, v, S, s]);
    return (
      gn(
        _ != null,
        `<Router basename="${f}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
      ),
      _ == null
        ? null
        : R.createElement(
            bn.Provider,
            { value: p },
            R.createElement(hl.Provider, { children: n, value: _ })
          )
    );
  }
  function e_({ children: e, location: n }) {
    return qx(eh(e), n);
  }
  function eh(e, n = []) {
    let a = [];
    return (
      R.Children.forEach(e, (s, o) => {
        if (!R.isValidElement(s)) return;
        let c = [...n, o];
        if (s.type === R.Fragment) {
          a.push.apply(a, eh(s.props.children, c));
          return;
        }
        He(
          s.type === xi,
          `[${
            typeof s.type == "string" ? s.type : s.type.name
          }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        ),
          He(
            !s.props.index || !s.props.children,
            "An index route cannot have child routes."
          );
        let f = {
          id: s.props.id || c.join("-"),
          caseSensitive: s.props.caseSensitive,
          element: s.props.element,
          Component: s.props.Component,
          index: s.props.index,
          path: s.props.path,
          loader: s.props.loader,
          action: s.props.action,
          hydrateFallbackElement: s.props.hydrateFallbackElement,
          HydrateFallback: s.props.HydrateFallback,
          errorElement: s.props.errorElement,
          ErrorBoundary: s.props.ErrorBoundary,
          hasErrorBoundary:
            s.props.hasErrorBoundary === !0 ||
            s.props.ErrorBoundary != null ||
            s.props.errorElement != null,
          shouldRevalidate: s.props.shouldRevalidate,
          handle: s.props.handle,
          lazy: s.props.lazy,
        };
        s.props.children && (f.children = eh(s.props.children, c)), a.push(f);
      }),
      a
    );
  }
  var $o = "get",
    qo = "application/x-www-form-urlencoded";
  function bu(e) {
    return e != null && typeof e.tagName == "string";
  }
  function t_(e) {
    return bu(e) && e.tagName.toLowerCase() === "button";
  }
  function n_(e) {
    return bu(e) && e.tagName.toLowerCase() === "form";
  }
  function r_(e) {
    return bu(e) && e.tagName.toLowerCase() === "input";
  }
  function a_(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function i_(e, n) {
    return e.button === 0 && (!n || n === "_self") && !a_(e);
  }
  var No = null;
  function s_() {
    if (No === null)
      try {
        new FormData(document.createElement("form"), 0), (No = !1);
      } catch {
        No = !0;
      }
    return No;
  }
  var l_ = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function ud(e) {
    return e != null && !l_.has(e)
      ? (gn(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qo}"`
        ),
        null)
      : e;
  }
  function o_(e, n) {
    let a, s, o, c, f;
    if (n_(e)) {
      let p = e.getAttribute("action");
      (s = p ? zr(p, n) : null),
        (a = e.getAttribute("method") || $o),
        (o = ud(e.getAttribute("enctype")) || qo),
        (c = new FormData(e));
    } else if (
      t_(e) ||
      (r_(e) && (e.type === "submit" || e.type === "image"))
    ) {
      let p = e.form;
      if (p == null)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let h = e.getAttribute("formaction") || p.getAttribute("action");
      if (
        ((s = h ? zr(h, n) : null),
        (a = e.getAttribute("formmethod") || p.getAttribute("method") || $o),
        (o =
          ud(e.getAttribute("formenctype")) ||
          ud(p.getAttribute("enctype")) ||
          qo),
        (c = new FormData(p, e)),
        !s_())
      ) {
        let { name: m, type: g, value: v } = e;
        if (g === "image") {
          let S = m ? `${m}.` : "";
          c.append(`${S}x`, "0"), c.append(`${S}y`, "0");
        } else m && c.append(m, v);
      }
    } else {
      if (bu(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (a = $o), (s = null), (o = qo), (f = e);
    }
    return (
      c && o === "text/plain" && ((f = c), (c = void 0)),
      { action: s, method: a.toLowerCase(), encType: o, formData: c, body: f }
    );
  }
  function Xh(e, n) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(n);
  }
  async function u_(e, n) {
    if (e.id in n) return n[e.id];
    try {
      let a = await import(e.module);
      return (n[e.id] = a), a;
    } catch (a) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`
        ),
        console.error(a),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function c_(e) {
    return e == null
      ? !1
      : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
  }
  async function f_(e, n, a) {
    let s = await Promise.all(
      e.map(async (o) => {
        let c = n.routes[o.route.id];
        if (c) {
          let f = await u_(c, a);
          return f.links ? f.links() : [];
        }
        return [];
      })
    );
    return m_(
      s
        .flat(1)
        .filter(c_)
        .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
        .map((o) =>
          o.rel === "stylesheet"
            ? { ...o, rel: "prefetch", as: "style" }
            : { ...o, rel: "prefetch" }
        )
    );
  }
  function j0(e, n, a, s, o, c) {
    let f = (h, m) => (a[m] ? h.route.id !== a[m].route.id : !0),
      p = (h, m) => {
        var g;
        return (
          a[m].pathname !== h.pathname ||
          (((g = a[m].route.path) == null ? void 0 : g.endsWith("*")) &&
            a[m].params["*"] !== h.params["*"])
        );
      };
    return c === "assets"
      ? n.filter((h, m) => f(h, m) || p(h, m))
      : c === "data"
      ? n.filter((h, m) => {
          var v;
          let g = s.routes[h.route.id];
          if (!g || !g.hasLoader) return !1;
          if (f(h, m) || p(h, m)) return !0;
          if (h.route.shouldRevalidate) {
            let S = h.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: ((v = a[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == "boolean") return S;
          }
          return !0;
        })
      : [];
  }
  function d_(e, n, { includeHydrateFallback: a } = {}) {
    return h_(
      e
        .map((s) => {
          let o = n.routes[s.route.id];
          if (!o) return [];
          let c = [o.module];
          return (
            o.clientActionModule && (c = c.concat(o.clientActionModule)),
            o.clientLoaderModule && (c = c.concat(o.clientLoaderModule)),
            a &&
              o.hydrateFallbackModule &&
              (c = c.concat(o.hydrateFallbackModule)),
            o.imports && (c = c.concat(o.imports)),
            c
          );
        })
        .flat(1)
    );
  }
  function h_(e) {
    return [...new Set(e)];
  }
  function p_(e) {
    let n = {},
      a = Object.keys(e).sort();
    for (let s of a) n[s] = e[s];
    return n;
  }
  function m_(e, n) {
    let a = new Set();
    return (
      new Set(n),
      e.reduce((s, o) => {
        let c = JSON.stringify(p_(o));
        return a.has(c) || (a.add(c), s.push({ key: c, link: o })), s;
      }, [])
    );
  }
  function y_(e) {
    let n =
      typeof e == "string"
        ? new URL(
            e,
            typeof window > "u"
              ? "server://singlefetch/"
              : window.location.origin
          )
        : e;
    return (
      n.pathname === "/"
        ? (n.pathname = "_root.data")
        : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
      n
    );
  }
  function g_() {
    let e = R.useContext(Ui);
    return (
      Xh(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      e
    );
  }
  function v_() {
    let e = R.useContext(vu);
    return (
      Xh(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      e
    );
  }
  var Qh = R.createContext(void 0);
  Qh.displayName = "FrameworkContext";
  function Fb() {
    let e = R.useContext(Qh);
    return (
      Xh(e, "You must render this element inside a <HydratedRouter> element"), e
    );
  }
  function b_(e, n) {
    let a = R.useContext(Qh),
      [s, o] = R.useState(!1),
      [c, f] = R.useState(!1),
      {
        onFocus: p,
        onBlur: h,
        onMouseEnter: m,
        onMouseLeave: g,
        onTouchStart: v,
      } = n,
      S = R.useRef(null);
    R.useEffect(() => {
      if ((e === "render" && f(!0), e === "viewport")) {
        let M = (T) => {
            T.forEach((L) => {
              f(L.isIntersecting);
            });
          },
          A = new IntersectionObserver(M, { threshold: 0.5 });
        return (
          S.current && A.observe(S.current),
          () => {
            A.disconnect();
          }
        );
      }
    }, [e]),
      R.useEffect(() => {
        if (s) {
          let M = setTimeout(() => {
            f(!0);
          }, 100);
          return () => {
            clearTimeout(M);
          };
        }
      }, [s]);
    let _ = () => {
        o(!0);
      },
      w = () => {
        o(!1), f(!1);
      };
    return a
      ? e !== "intent"
        ? [c, S, {}]
        : [
            c,
            S,
            {
              onFocus: Is(p, _),
              onBlur: Is(h, w),
              onMouseEnter: Is(m, _),
              onMouseLeave: Is(g, w),
              onTouchStart: Is(v, _),
            },
          ]
      : [!1, S, {}];
  }
  function Is(e, n) {
    return (a) => {
      e && e(a), a.defaultPrevented || n(a);
    };
  }
  function S_({ page: e, ...n }) {
    let { router: a } = g_(),
      s = R.useMemo(
        () => jb(a.routes, e, a.basename),
        [a.routes, e, a.basename]
      );
    return s ? R.createElement(w_, { page: e, matches: s, ...n }) : null;
  }
  function E_(e) {
    let { manifest: n, routeModules: a } = Fb(),
      [s, o] = R.useState([]);
    return (
      R.useEffect(() => {
        let c = !1;
        return (
          f_(e, n, a).then((f) => {
            c || o(f);
          }),
          () => {
            c = !0;
          }
        );
      }, [e, n, a]),
      s
    );
  }
  function w_({ page: e, matches: n, ...a }) {
    let s = Fr(),
      { manifest: o, routeModules: c } = Fb(),
      { loaderData: f, matches: p } = v_(),
      h = R.useMemo(() => j0(e, n, p, o, s, "data"), [e, n, p, o, s]),
      m = R.useMemo(() => j0(e, n, p, o, s, "assets"), [e, n, p, o, s]),
      g = R.useMemo(() => {
        if (e === s.pathname + s.search + s.hash) return [];
        let _ = new Set(),
          w = !1;
        if (
          (n.forEach((A) => {
            var L;
            let T = o.routes[A.route.id];
            !T ||
              !T.hasLoader ||
              ((!h.some((B) => B.route.id === A.route.id) &&
                A.route.id in f &&
                (L = c[A.route.id]) != null &&
                L.shouldRevalidate) ||
              T.hasClientLoader
                ? (w = !0)
                : _.add(A.route.id));
          }),
          _.size === 0)
        )
          return [];
        let M = y_(e);
        return (
          w &&
            _.size > 0 &&
            M.searchParams.set(
              "_routes",
              n
                .filter((A) => _.has(A.route.id))
                .map((A) => A.route.id)
                .join(",")
            ),
          [M.pathname + M.search]
        );
      }, [f, s, o, h, n, e, c]),
      v = R.useMemo(() => d_(m, o), [m, o]),
      S = E_(m);
    return R.createElement(
      R.Fragment,
      null,
      g.map((_) =>
        R.createElement("link", {
          key: _,
          rel: "prefetch",
          as: "fetch",
          href: _,
          ...a,
        })
      ),
      v.map((_) =>
        R.createElement("link", { key: _, rel: "modulepreload", href: _, ...a })
      ),
      S.map(({ key: _, link: w }) => R.createElement("link", { key: _, ...w }))
    );
  }
  function x_(...e) {
    return (n) => {
      e.forEach((a) => {
        typeof a == "function" ? a(n) : a != null && (a.current = n);
      });
    };
  }
  var Vb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u";
  try {
    Vb && (window.__reactRouterVersion = "7.2.0");
  } catch {}
  function __({ basename: e, children: n, window: a }) {
    let s = R.useRef();
    s.current == null && (s.current = dx({ window: a, v5Compat: !0 }));
    let o = s.current,
      [c, f] = R.useState({ action: o.action, location: o.location }),
      p = R.useCallback(
        (h) => {
          R.startTransition(() => f(h));
        },
        [f]
      );
    return (
      R.useLayoutEffect(() => o.listen(p), [o, p]),
      R.createElement(Wx, {
        basename: e,
        children: n,
        location: c.location,
        navigationType: c.action,
        navigator: o,
      })
    );
  }
  var Ib = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    sn = R.forwardRef(function (
      {
        onClick: n,
        discover: a = "render",
        prefetch: s = "none",
        relative: o,
        reloadDocument: c,
        replace: f,
        state: p,
        target: h,
        to: m,
        preventScrollReset: g,
        viewTransition: v,
        ...S
      },
      _
    ) {
      let { basename: w } = R.useContext(bn),
        M = typeof m == "string" && Ib.test(m),
        A,
        T = !1;
      if (typeof m == "string" && M && ((A = m), Vb))
        try {
          let Y = new URL(window.location.href),
            oe = m.startsWith("//") ? new URL(Y.protocol + m) : new URL(m),
            ye = zr(oe.pathname, w);
          oe.origin === Y.origin && ye != null
            ? (m = ye + oe.search + oe.hash)
            : (T = !0);
        } catch {
          gn(
            !1,
            `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      let L = zx(m, { relative: o }),
        [B, P, N] = b_(s, S),
        F = R_(m, {
          replace: f,
          state: p,
          target: h,
          preventScrollReset: g,
          relative: o,
          viewTransition: v,
        });
      function K(Y) {
        n && n(Y), Y.defaultPrevented || F(Y);
      }
      let ee = R.createElement("a", {
        ...S,
        ...N,
        href: A || L,
        onClick: T || c ? n : K,
        ref: x_(_, P),
        target: h,
        "data-discover": !M && a === "render" ? "true" : void 0,
      });
      return B && !M
        ? R.createElement(
            R.Fragment,
            null,
            ee,
            R.createElement(S_, { page: L })
          )
        : ee;
    });
  sn.displayName = "Link";
  var T_ = R.forwardRef(function (
    {
      "aria-current": n = "page",
      caseSensitive: a = !1,
      className: s = "",
      end: o = !1,
      style: c,
      to: f,
      viewTransition: p,
      children: h,
      ...m
    },
    g
  ) {
    let v = ml(f, { relative: m.relative }),
      S = Fr(),
      _ = R.useContext(vu),
      { navigator: w, basename: M } = R.useContext(bn),
      A = _ != null && j_(v) && p === !0,
      T = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
      L = S.pathname,
      B =
        _ && _.navigation && _.navigation.location
          ? _.navigation.location.pathname
          : null;
    a ||
      ((L = L.toLowerCase()),
      (B = B ? B.toLowerCase() : null),
      (T = T.toLowerCase())),
      B && M && (B = zr(B, M) || B);
    const P = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let N = L === T || (!o && L.startsWith(T) && L.charAt(P) === "/"),
      F =
        B != null &&
        (B === T || (!o && B.startsWith(T) && B.charAt(T.length) === "/")),
      K = { isActive: N, isPending: F, isTransitioning: A },
      ee = N ? n : void 0,
      Y;
    typeof s == "function"
      ? (Y = s(K))
      : (Y = [
          s,
          N ? "active" : null,
          F ? "pending" : null,
          A ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let oe = typeof c == "function" ? c(K) : c;
    return R.createElement(
      sn,
      {
        ...m,
        "aria-current": ee,
        className: Y,
        ref: g,
        style: oe,
        to: f,
        viewTransition: p,
      },
      typeof h == "function" ? h(K) : h
    );
  });
  T_.displayName = "NavLink";
  var A_ = R.forwardRef(
    (
      {
        discover: e = "render",
        fetcherKey: n,
        navigate: a,
        reloadDocument: s,
        replace: o,
        state: c,
        method: f = $o,
        action: p,
        onSubmit: h,
        relative: m,
        preventScrollReset: g,
        viewTransition: v,
        ...S
      },
      _
    ) => {
      let w = N_(),
        M = M_(p, { relative: m }),
        A = f.toLowerCase() === "get" ? "get" : "post",
        T = typeof p == "string" && Ib.test(p),
        L = (B) => {
          if ((h && h(B), B.defaultPrevented)) return;
          B.preventDefault();
          let P = B.nativeEvent.submitter,
            N = (P == null ? void 0 : P.getAttribute("formmethod")) || f;
          w(P || B.currentTarget, {
            fetcherKey: n,
            method: N,
            navigate: a,
            replace: o,
            state: c,
            relative: m,
            preventScrollReset: g,
            viewTransition: v,
          });
        };
      return R.createElement("form", {
        ref: _,
        method: A,
        action: M,
        onSubmit: s ? h : L,
        ...S,
        "data-discover": !T && e === "render" ? "true" : void 0,
      });
    }
  );
  A_.displayName = "Form";
  function O_(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Gb(e) {
    let n = R.useContext(Ui);
    return He(n, O_(e)), n;
  }
  function R_(
    e,
    {
      target: n,
      replace: a,
      state: s,
      preventScrollReset: o,
      relative: c,
      viewTransition: f,
    } = {}
  ) {
    let p = pl(),
      h = Fr(),
      m = ml(e, { relative: c });
    return R.useCallback(
      (g) => {
        if (i_(g, n)) {
          g.preventDefault();
          let v = a !== void 0 ? a : rl(h) === rl(m);
          p(e, {
            replace: v,
            state: s,
            preventScrollReset: o,
            relative: c,
            viewTransition: f,
          });
        }
      },
      [h, p, m, a, s, n, e, o, c, f]
    );
  }
  var C_ = 0,
    D_ = () => `__${String(++C_)}__`;
  function N_() {
    let { router: e } = Gb("useSubmit"),
      { basename: n } = R.useContext(bn),
      a = Xx();
    return R.useCallback(
      async (s, o = {}) => {
        let {
          action: c,
          method: f,
          encType: p,
          formData: h,
          body: m,
        } = o_(s, n);
        if (o.navigate === !1) {
          let g = o.fetcherKey || D_();
          await e.fetch(g, a, o.action || c, {
            preventScrollReset: o.preventScrollReset,
            formData: h,
            body: m,
            formMethod: o.method || f,
            formEncType: o.encType || p,
            flushSync: o.flushSync,
          });
        } else
          await e.navigate(o.action || c, {
            preventScrollReset: o.preventScrollReset,
            formData: h,
            body: m,
            formMethod: o.method || f,
            formEncType: o.encType || p,
            replace: o.replace,
            state: o.state,
            fromRouteId: a,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition,
          });
      },
      [e, n, a]
    );
  }
  function M_(e, { relative: n } = {}) {
    let { basename: a } = R.useContext(bn),
      s = R.useContext(Cn);
    He(s, "useFormAction must be used inside a RouteContext");
    let [o] = s.matches.slice(-1),
      c = { ...ml(e || ".", { relative: n }) },
      f = Fr();
    if (e == null) {
      c.search = f.search;
      let p = new URLSearchParams(c.search),
        h = p.getAll("index");
      if (h.some((g) => g === "")) {
        p.delete("index"),
          h.filter((v) => v).forEach((v) => p.append("index", v));
        let g = p.toString();
        c.search = g ? `?${g}` : "";
      }
    }
    return (
      (!e || e === ".") &&
        o.route.index &&
        (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
      a !== "/" && (c.pathname = c.pathname === "/" ? a : Wn([a, c.pathname])),
      rl(c)
    );
  }
  function j_(e, n = {}) {
    let a = R.useContext(kb);
    He(
      a != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: s } = Gb("useViewTransitionState"),
      o = ml(e, { relative: n.relative });
    if (!a.isTransitioning) return !1;
    let c = zr(a.currentLocation.pathname, s) || a.currentLocation.pathname,
      f = zr(a.nextLocation.pathname, s) || a.nextLocation.pathname;
    return ru(o.pathname, f) != null || ru(o.pathname, c) != null;
  }
  new TextEncoder();
  var B_ = function (n) {
    return U_(n) && !L_(n);
  };
  function U_(e) {
    return !!e && typeof e == "object";
  }
  function L_(e) {
    var n = Object.prototype.toString.call(e);
    return n === "[object RegExp]" || n === "[object Date]" || $_(e);
  }
  var k_ = typeof Symbol == "function" && Symbol.for,
    z_ = k_ ? Symbol.for("react.element") : 60103;
  function $_(e) {
    return e.$$typeof === z_;
  }
  function q_(e) {
    return Array.isArray(e) ? [] : {};
  }
  function au(e, n) {
    return n.clone !== !1 && n.isMergeableObject(e) ? al(q_(e), e, n) : e;
  }
  function H_(e, n, a) {
    return e.concat(n).map(function (s) {
      return au(s, a);
    });
  }
  function F_(e, n, a) {
    var s = {};
    return (
      a.isMergeableObject(e) &&
        Object.keys(e).forEach(function (o) {
          s[o] = au(e[o], a);
        }),
      Object.keys(n).forEach(function (o) {
        !a.isMergeableObject(n[o]) || !e[o]
          ? (s[o] = au(n[o], a))
          : (s[o] = al(e[o], n[o], a));
      }),
      s
    );
  }
  function al(e, n, a) {
    (a = a || {}),
      (a.arrayMerge = a.arrayMerge || H_),
      (a.isMergeableObject = a.isMergeableObject || B_);
    var s = Array.isArray(n),
      o = Array.isArray(e),
      c = s === o;
    return c ? (s ? a.arrayMerge(e, n, a) : F_(e, n, a)) : au(n, a);
  }
  al.all = function (n, a) {
    if (!Array.isArray(n)) throw new Error("first argument should be an array");
    return n.reduce(function (s, o) {
      return al(s, o, a);
    }, {});
  };
  var th = al,
    Pb =
      typeof global == "object" && global && global.Object === Object && global,
    V_ = typeof self == "object" && self && self.Object === Object && self,
    Dn = Pb || V_ || Function("return this")(),
    $r = Dn.Symbol,
    Yb = Object.prototype,
    I_ = Yb.hasOwnProperty,
    G_ = Yb.toString,
    Gs = $r ? $r.toStringTag : void 0;
  function P_(e) {
    var n = I_.call(e, Gs),
      a = e[Gs];
    try {
      e[Gs] = void 0;
      var s = !0;
    } catch {}
    var o = G_.call(e);
    return s && (n ? (e[Gs] = a) : delete e[Gs]), o;
  }
  var Y_ = Object.prototype,
    K_ = Y_.toString;
  function X_(e) {
    return K_.call(e);
  }
  var Q_ = "[object Null]",
    Z_ = "[object Undefined]",
    B0 = $r ? $r.toStringTag : void 0;
  function Ma(e) {
    return e == null
      ? e === void 0
        ? Z_
        : Q_
      : B0 && B0 in Object(e)
      ? P_(e)
      : X_(e);
  }
  function Kb(e, n) {
    return function (a) {
      return e(n(a));
    };
  }
  var Zh = Kb(Object.getPrototypeOf, Object);
  function ja(e) {
    return e != null && typeof e == "object";
  }
  var J_ = "[object Object]",
    W_ = Function.prototype,
    eT = Object.prototype,
    Xb = W_.toString,
    tT = eT.hasOwnProperty,
    nT = Xb.call(Object);
  function U0(e) {
    if (!ja(e) || Ma(e) != J_) return !1;
    var n = Zh(e);
    if (n === null) return !0;
    var a = tT.call(n, "constructor") && n.constructor;
    return typeof a == "function" && a instanceof a && Xb.call(a) == nT;
  }
  function rT() {
    (this.__data__ = []), (this.size = 0);
  }
  function Qb(e, n) {
    return e === n || (e !== e && n !== n);
  }
  function Su(e, n) {
    for (var a = e.length; a--; ) if (Qb(e[a][0], n)) return a;
    return -1;
  }
  var aT = Array.prototype,
    iT = aT.splice;
  function sT(e) {
    var n = this.__data__,
      a = Su(n, e);
    if (a < 0) return !1;
    var s = n.length - 1;
    return a == s ? n.pop() : iT.call(n, a, 1), --this.size, !0;
  }
  function lT(e) {
    var n = this.__data__,
      a = Su(n, e);
    return a < 0 ? void 0 : n[a][1];
  }
  function oT(e) {
    return Su(this.__data__, e) > -1;
  }
  function uT(e, n) {
    var a = this.__data__,
      s = Su(a, e);
    return s < 0 ? (++this.size, a.push([e, n])) : (a[s][1] = n), this;
  }
  function ar(e) {
    var n = -1,
      a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  ar.prototype.clear = rT;
  ar.prototype.delete = sT;
  ar.prototype.get = lT;
  ar.prototype.has = oT;
  ar.prototype.set = uT;
  function cT() {
    (this.__data__ = new ar()), (this.size = 0);
  }
  function fT(e) {
    var n = this.__data__,
      a = n.delete(e);
    return (this.size = n.size), a;
  }
  function dT(e) {
    return this.__data__.get(e);
  }
  function hT(e) {
    return this.__data__.has(e);
  }
  function yl(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  var pT = "[object AsyncFunction]",
    mT = "[object Function]",
    yT = "[object GeneratorFunction]",
    gT = "[object Proxy]";
  function Zb(e) {
    if (!yl(e)) return !1;
    var n = Ma(e);
    return n == mT || n == yT || n == pT || n == gT;
  }
  var cd = Dn["__core-js_shared__"],
    L0 = (function () {
      var e = /[^.]+$/.exec((cd && cd.keys && cd.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function vT(e) {
    return !!L0 && L0 in e;
  }
  var bT = Function.prototype,
    ST = bT.toString;
  function Ba(e) {
    if (e != null) {
      try {
        return ST.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var ET = /[\\^$.*+?()[\]{}|]/g,
    wT = /^\[object .+?Constructor\]$/,
    xT = Function.prototype,
    _T = Object.prototype,
    TT = xT.toString,
    AT = _T.hasOwnProperty,
    OT = RegExp(
      "^" +
        TT.call(AT)
          .replace(ET, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function RT(e) {
    if (!yl(e) || vT(e)) return !1;
    var n = Zb(e) ? OT : wT;
    return n.test(Ba(e));
  }
  function CT(e, n) {
    return e == null ? void 0 : e[n];
  }
  function Ua(e, n) {
    var a = CT(e, n);
    return RT(a) ? a : void 0;
  }
  var il = Ua(Dn, "Map"),
    sl = Ua(Object, "create");
  function DT() {
    (this.__data__ = sl ? sl(null) : {}), (this.size = 0);
  }
  function NT(e) {
    var n = this.has(e) && delete this.__data__[e];
    return (this.size -= n ? 1 : 0), n;
  }
  var MT = "__lodash_hash_undefined__",
    jT = Object.prototype,
    BT = jT.hasOwnProperty;
  function UT(e) {
    var n = this.__data__;
    if (sl) {
      var a = n[e];
      return a === MT ? void 0 : a;
    }
    return BT.call(n, e) ? n[e] : void 0;
  }
  var LT = Object.prototype,
    kT = LT.hasOwnProperty;
  function zT(e) {
    var n = this.__data__;
    return sl ? n[e] !== void 0 : kT.call(n, e);
  }
  var $T = "__lodash_hash_undefined__";
  function qT(e, n) {
    var a = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (a[e] = sl && n === void 0 ? $T : n),
      this
    );
  }
  function Ta(e) {
    var n = -1,
      a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  Ta.prototype.clear = DT;
  Ta.prototype.delete = NT;
  Ta.prototype.get = UT;
  Ta.prototype.has = zT;
  Ta.prototype.set = qT;
  function HT() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Ta(),
        map: new (il || ar)(),
        string: new Ta(),
      });
  }
  function FT(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function Eu(e, n) {
    var a = e.__data__;
    return FT(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  function VT(e) {
    var n = Eu(this, e).delete(e);
    return (this.size -= n ? 1 : 0), n;
  }
  function IT(e) {
    return Eu(this, e).get(e);
  }
  function GT(e) {
    return Eu(this, e).has(e);
  }
  function PT(e, n) {
    var a = Eu(this, e),
      s = a.size;
    return a.set(e, n), (this.size += a.size == s ? 0 : 1), this;
  }
  function Vr(e) {
    var n = -1,
      a = e == null ? 0 : e.length;
    for (this.clear(); ++n < a; ) {
      var s = e[n];
      this.set(s[0], s[1]);
    }
  }
  Vr.prototype.clear = HT;
  Vr.prototype.delete = VT;
  Vr.prototype.get = IT;
  Vr.prototype.has = GT;
  Vr.prototype.set = PT;
  var YT = 200;
  function KT(e, n) {
    var a = this.__data__;
    if (a instanceof ar) {
      var s = a.__data__;
      if (!il || s.length < YT - 1)
        return s.push([e, n]), (this.size = ++a.size), this;
      a = this.__data__ = new Vr(s);
    }
    return a.set(e, n), (this.size = a.size), this;
  }
  function ki(e) {
    var n = (this.__data__ = new ar(e));
    this.size = n.size;
  }
  ki.prototype.clear = cT;
  ki.prototype.delete = fT;
  ki.prototype.get = dT;
  ki.prototype.has = hT;
  ki.prototype.set = KT;
  function XT(e, n) {
    for (
      var a = -1, s = e == null ? 0 : e.length;
      ++a < s && n(e[a], a, e) !== !1;

    );
    return e;
  }
  var k0 = (function () {
    try {
      var e = Ua(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  function Jb(e, n, a) {
    n == "__proto__" && k0
      ? k0(e, n, { configurable: !0, enumerable: !0, value: a, writable: !0 })
      : (e[n] = a);
  }
  var QT = Object.prototype,
    ZT = QT.hasOwnProperty;
  function Wb(e, n, a) {
    var s = e[n];
    (!(ZT.call(e, n) && Qb(s, a)) || (a === void 0 && !(n in e))) &&
      Jb(e, n, a);
  }
  function wu(e, n, a, s) {
    var o = !a;
    a || (a = {});
    for (var c = -1, f = n.length; ++c < f; ) {
      var p = n[c],
        h = void 0;
      h === void 0 && (h = e[p]), o ? Jb(a, p, h) : Wb(a, p, h);
    }
    return a;
  }
  function JT(e, n) {
    for (var a = -1, s = Array(e); ++a < e; ) s[a] = n(a);
    return s;
  }
  var WT = "[object Arguments]";
  function z0(e) {
    return ja(e) && Ma(e) == WT;
  }
  var e1 = Object.prototype,
    eA = e1.hasOwnProperty,
    tA = e1.propertyIsEnumerable,
    nA = z0(
      (function () {
        return arguments;
      })()
    )
      ? z0
      : function (e) {
          return ja(e) && eA.call(e, "callee") && !tA.call(e, "callee");
        },
    gl = Array.isArray;
  function rA() {
    return !1;
  }
  var t1 = typeof qt == "object" && qt && !qt.nodeType && qt,
    $0 = t1 && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
    aA = $0 && $0.exports === t1,
    q0 = aA ? Dn.Buffer : void 0,
    iA = q0 ? q0.isBuffer : void 0,
    n1 = iA || rA,
    sA = 9007199254740991,
    lA = /^(?:0|[1-9]\d*)$/;
  function oA(e, n) {
    var a = typeof e;
    return (
      (n = n ?? sA),
      !!n &&
        (a == "number" || (a != "symbol" && lA.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < n
    );
  }
  var uA = 9007199254740991;
  function r1(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uA;
  }
  var cA = "[object Arguments]",
    fA = "[object Array]",
    dA = "[object Boolean]",
    hA = "[object Date]",
    pA = "[object Error]",
    mA = "[object Function]",
    yA = "[object Map]",
    gA = "[object Number]",
    vA = "[object Object]",
    bA = "[object RegExp]",
    SA = "[object Set]",
    EA = "[object String]",
    wA = "[object WeakMap]",
    xA = "[object ArrayBuffer]",
    _A = "[object DataView]",
    TA = "[object Float32Array]",
    AA = "[object Float64Array]",
    OA = "[object Int8Array]",
    RA = "[object Int16Array]",
    CA = "[object Int32Array]",
    DA = "[object Uint8Array]",
    NA = "[object Uint8ClampedArray]",
    MA = "[object Uint16Array]",
    jA = "[object Uint32Array]",
    $e = {};
  $e[TA] =
    $e[AA] =
    $e[OA] =
    $e[RA] =
    $e[CA] =
    $e[DA] =
    $e[NA] =
    $e[MA] =
    $e[jA] =
      !0;
  $e[cA] =
    $e[fA] =
    $e[xA] =
    $e[dA] =
    $e[_A] =
    $e[hA] =
    $e[pA] =
    $e[mA] =
    $e[yA] =
    $e[gA] =
    $e[vA] =
    $e[bA] =
    $e[SA] =
    $e[EA] =
    $e[wA] =
      !1;
  function BA(e) {
    return ja(e) && r1(e.length) && !!$e[Ma(e)];
  }
  function Jh(e) {
    return function (n) {
      return e(n);
    };
  }
  var a1 = typeof qt == "object" && qt && !qt.nodeType && qt,
    Zs = a1 && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
    UA = Zs && Zs.exports === a1,
    fd = UA && Pb.process,
    Mi = (function () {
      try {
        var e = Zs && Zs.require && Zs.require("util").types;
        return e || (fd && fd.binding && fd.binding("util"));
      } catch {}
    })(),
    H0 = Mi && Mi.isTypedArray,
    LA = H0 ? Jh(H0) : BA,
    kA = Object.prototype,
    zA = kA.hasOwnProperty;
  function i1(e, n) {
    var a = gl(e),
      s = !a && nA(e),
      o = !a && !s && n1(e),
      c = !a && !s && !o && LA(e),
      f = a || s || o || c,
      p = f ? JT(e.length, String) : [],
      h = p.length;
    for (var m in e)
      (n || zA.call(e, m)) &&
        !(
          f &&
          (m == "length" ||
            (o && (m == "offset" || m == "parent")) ||
            (c && (m == "buffer" || m == "byteLength" || m == "byteOffset")) ||
            oA(m, h))
        ) &&
        p.push(m);
    return p;
  }
  var $A = Object.prototype;
  function Wh(e) {
    var n = e && e.constructor,
      a = (typeof n == "function" && n.prototype) || $A;
    return e === a;
  }
  var qA = Kb(Object.keys, Object),
    HA = Object.prototype,
    FA = HA.hasOwnProperty;
  function VA(e) {
    if (!Wh(e)) return qA(e);
    var n = [];
    for (var a in Object(e)) FA.call(e, a) && a != "constructor" && n.push(a);
    return n;
  }
  function s1(e) {
    return e != null && r1(e.length) && !Zb(e);
  }
  function ep(e) {
    return s1(e) ? i1(e) : VA(e);
  }
  function IA(e, n) {
    return e && wu(n, ep(n), e);
  }
  function GA(e) {
    var n = [];
    if (e != null) for (var a in Object(e)) n.push(a);
    return n;
  }
  var PA = Object.prototype,
    YA = PA.hasOwnProperty;
  function KA(e) {
    if (!yl(e)) return GA(e);
    var n = Wh(e),
      a = [];
    for (var s in e) (s == "constructor" && (n || !YA.call(e, s))) || a.push(s);
    return a;
  }
  function tp(e) {
    return s1(e) ? i1(e, !0) : KA(e);
  }
  function XA(e, n) {
    return e && wu(n, tp(n), e);
  }
  var l1 = typeof qt == "object" && qt && !qt.nodeType && qt,
    F0 = l1 && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
    QA = F0 && F0.exports === l1,
    V0 = QA ? Dn.Buffer : void 0,
    I0 = V0 ? V0.allocUnsafe : void 0;
  function ZA(e, n) {
    if (n) return e.slice();
    var a = e.length,
      s = I0 ? I0(a) : new e.constructor(a);
    return e.copy(s), s;
  }
  function o1(e, n) {
    var a = -1,
      s = e.length;
    for (n || (n = Array(s)); ++a < s; ) n[a] = e[a];
    return n;
  }
  function JA(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, o = 0, c = []; ++a < s; ) {
      var f = e[a];
      n(f, a, e) && (c[o++] = f);
    }
    return c;
  }
  function u1() {
    return [];
  }
  var WA = Object.prototype,
    eO = WA.propertyIsEnumerable,
    G0 = Object.getOwnPropertySymbols,
    np = G0
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              JA(G0(e), function (n) {
                return eO.call(e, n);
              }));
        }
      : u1;
  function tO(e, n) {
    return wu(e, np(e), n);
  }
  function c1(e, n) {
    for (var a = -1, s = n.length, o = e.length; ++a < s; ) e[o + a] = n[a];
    return e;
  }
  var nO = Object.getOwnPropertySymbols,
    f1 = nO
      ? function (e) {
          for (var n = []; e; ) c1(n, np(e)), (e = Zh(e));
          return n;
        }
      : u1;
  function rO(e, n) {
    return wu(e, f1(e), n);
  }
  function d1(e, n, a) {
    var s = n(e);
    return gl(e) ? s : c1(s, a(e));
  }
  function aO(e) {
    return d1(e, ep, np);
  }
  function iO(e) {
    return d1(e, tp, f1);
  }
  var nh = Ua(Dn, "DataView"),
    rh = Ua(Dn, "Promise"),
    ah = Ua(Dn, "Set"),
    ih = Ua(Dn, "WeakMap"),
    P0 = "[object Map]",
    sO = "[object Object]",
    Y0 = "[object Promise]",
    K0 = "[object Set]",
    X0 = "[object WeakMap]",
    Q0 = "[object DataView]",
    lO = Ba(nh),
    oO = Ba(il),
    uO = Ba(rh),
    cO = Ba(ah),
    fO = Ba(ih),
    Zn = Ma;
  ((nh && Zn(new nh(new ArrayBuffer(1))) != Q0) ||
    (il && Zn(new il()) != P0) ||
    (rh && Zn(rh.resolve()) != Y0) ||
    (ah && Zn(new ah()) != K0) ||
    (ih && Zn(new ih()) != X0)) &&
    (Zn = function (e) {
      var n = Ma(e),
        a = n == sO ? e.constructor : void 0,
        s = a ? Ba(a) : "";
      if (s)
        switch (s) {
          case lO:
            return Q0;
          case oO:
            return P0;
          case uO:
            return Y0;
          case cO:
            return K0;
          case fO:
            return X0;
        }
      return n;
    });
  var dO = Object.prototype,
    hO = dO.hasOwnProperty;
  function pO(e) {
    var n = e.length,
      a = new e.constructor(n);
    return (
      n &&
        typeof e[0] == "string" &&
        hO.call(e, "index") &&
        ((a.index = e.index), (a.input = e.input)),
      a
    );
  }
  var Z0 = Dn.Uint8Array;
  function rp(e) {
    var n = new e.constructor(e.byteLength);
    return new Z0(n).set(new Z0(e)), n;
  }
  function mO(e, n) {
    var a = n ? rp(e.buffer) : e.buffer;
    return new e.constructor(a, e.byteOffset, e.byteLength);
  }
  var yO = /\w*$/;
  function gO(e) {
    var n = new e.constructor(e.source, yO.exec(e));
    return (n.lastIndex = e.lastIndex), n;
  }
  var J0 = $r ? $r.prototype : void 0,
    W0 = J0 ? J0.valueOf : void 0;
  function vO(e) {
    return W0 ? Object(W0.call(e)) : {};
  }
  function bO(e, n) {
    var a = n ? rp(e.buffer) : e.buffer;
    return new e.constructor(a, e.byteOffset, e.length);
  }
  var SO = "[object Boolean]",
    EO = "[object Date]",
    wO = "[object Map]",
    xO = "[object Number]",
    _O = "[object RegExp]",
    TO = "[object Set]",
    AO = "[object String]",
    OO = "[object Symbol]",
    RO = "[object ArrayBuffer]",
    CO = "[object DataView]",
    DO = "[object Float32Array]",
    NO = "[object Float64Array]",
    MO = "[object Int8Array]",
    jO = "[object Int16Array]",
    BO = "[object Int32Array]",
    UO = "[object Uint8Array]",
    LO = "[object Uint8ClampedArray]",
    kO = "[object Uint16Array]",
    zO = "[object Uint32Array]";
  function $O(e, n, a) {
    var s = e.constructor;
    switch (n) {
      case RO:
        return rp(e);
      case SO:
      case EO:
        return new s(+e);
      case CO:
        return mO(e, a);
      case DO:
      case NO:
      case MO:
      case jO:
      case BO:
      case UO:
      case LO:
      case kO:
      case zO:
        return bO(e, a);
      case wO:
        return new s();
      case xO:
      case AO:
        return new s(e);
      case _O:
        return gO(e);
      case TO:
        return new s();
      case OO:
        return vO(e);
    }
  }
  var ev = Object.create,
    qO = (function () {
      function e() {}
      return function (n) {
        if (!yl(n)) return {};
        if (ev) return ev(n);
        e.prototype = n;
        var a = new e();
        return (e.prototype = void 0), a;
      };
    })();
  function HO(e) {
    return typeof e.constructor == "function" && !Wh(e) ? qO(Zh(e)) : {};
  }
  var FO = "[object Map]";
  function VO(e) {
    return ja(e) && Zn(e) == FO;
  }
  var tv = Mi && Mi.isMap,
    IO = tv ? Jh(tv) : VO,
    GO = "[object Set]";
  function PO(e) {
    return ja(e) && Zn(e) == GO;
  }
  var nv = Mi && Mi.isSet,
    YO = nv ? Jh(nv) : PO,
    KO = 1,
    XO = 2,
    QO = 4,
    h1 = "[object Arguments]",
    ZO = "[object Array]",
    JO = "[object Boolean]",
    WO = "[object Date]",
    eR = "[object Error]",
    p1 = "[object Function]",
    tR = "[object GeneratorFunction]",
    nR = "[object Map]",
    rR = "[object Number]",
    m1 = "[object Object]",
    aR = "[object RegExp]",
    iR = "[object Set]",
    sR = "[object String]",
    lR = "[object Symbol]",
    oR = "[object WeakMap]",
    uR = "[object ArrayBuffer]",
    cR = "[object DataView]",
    fR = "[object Float32Array]",
    dR = "[object Float64Array]",
    hR = "[object Int8Array]",
    pR = "[object Int16Array]",
    mR = "[object Int32Array]",
    yR = "[object Uint8Array]",
    gR = "[object Uint8ClampedArray]",
    vR = "[object Uint16Array]",
    bR = "[object Uint32Array]",
    ke = {};
  ke[h1] =
    ke[ZO] =
    ke[uR] =
    ke[cR] =
    ke[JO] =
    ke[WO] =
    ke[fR] =
    ke[dR] =
    ke[hR] =
    ke[pR] =
    ke[mR] =
    ke[nR] =
    ke[rR] =
    ke[m1] =
    ke[aR] =
    ke[iR] =
    ke[sR] =
    ke[lR] =
    ke[yR] =
    ke[gR] =
    ke[vR] =
    ke[bR] =
      !0;
  ke[eR] = ke[p1] = ke[oR] = !1;
  function Js(e, n, a, s, o, c) {
    var f,
      p = n & KO,
      h = n & XO,
      m = n & QO;
    if (f !== void 0) return f;
    if (!yl(e)) return e;
    var g = gl(e);
    if (g) {
      if (((f = pO(e)), !p)) return o1(e, f);
    } else {
      var v = Zn(e),
        S = v == p1 || v == tR;
      if (n1(e)) return ZA(e, p);
      if (v == m1 || v == h1 || (S && !o)) {
        if (((f = h || S ? {} : HO(e)), !p))
          return h ? rO(e, XA(f, e)) : tO(e, IA(f, e));
      } else {
        if (!ke[v]) return o ? e : {};
        f = $O(e, v, p);
      }
    }
    c || (c = new ki());
    var _ = c.get(e);
    if (_) return _;
    c.set(e, f),
      YO(e)
        ? e.forEach(function (A) {
            f.add(Js(A, n, a, A, e, c));
          })
        : IO(e) &&
          e.forEach(function (A, T) {
            f.set(T, Js(A, n, a, T, e, c));
          });
    var w = m ? (h ? iO : aO) : h ? tp : ep,
      M = g ? void 0 : w(e);
    return (
      XT(M || e, function (A, T) {
        M && ((T = A), (A = e[T])), Wb(f, T, Js(A, n, a, T, e, c));
      }),
      f
    );
  }
  var SR = 1,
    ER = 4;
  function Mo(e) {
    return Js(e, SR | ER);
  }
  var dd, rv;
  function wR() {
    if (rv) return dd;
    rv = 1;
    var e = Array.isArray,
      n = Object.keys,
      a = Object.prototype.hasOwnProperty,
      s = typeof Element < "u";
    function o(c, f) {
      if (c === f) return !0;
      if (c && f && typeof c == "object" && typeof f == "object") {
        var p = e(c),
          h = e(f),
          m,
          g,
          v;
        if (p && h) {
          if (((g = c.length), g != f.length)) return !1;
          for (m = g; m-- !== 0; ) if (!o(c[m], f[m])) return !1;
          return !0;
        }
        if (p != h) return !1;
        var S = c instanceof Date,
          _ = f instanceof Date;
        if (S != _) return !1;
        if (S && _) return c.getTime() == f.getTime();
        var w = c instanceof RegExp,
          M = f instanceof RegExp;
        if (w != M) return !1;
        if (w && M) return c.toString() == f.toString();
        var A = n(c);
        if (((g = A.length), g !== n(f).length)) return !1;
        for (m = g; m-- !== 0; ) if (!a.call(f, A[m])) return !1;
        if (s && c instanceof Element && f instanceof Element) return c === f;
        for (m = g; m-- !== 0; )
          if (((v = A[m]), !(v === "_owner" && c.$$typeof) && !o(c[v], f[v])))
            return !1;
        return !0;
      }
      return c !== c && f !== f;
    }
    return (
      (dd = function (f, p) {
        try {
          return o(f, p);
        } catch (h) {
          if (
            (h.message && h.message.match(/stack|recursion/i)) ||
            h.number === -2146828260
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                h.name,
                h.message
              ),
              !1
            );
          throw h;
        }
      }),
      dd
    );
  }
  var xR = wR();
  const ma = Vh(xR);
  var _R = 4;
  function av(e) {
    return Js(e, _R);
  }
  function y1(e, n) {
    for (var a = -1, s = e == null ? 0 : e.length, o = Array(s); ++a < s; )
      o[a] = n(e[a], a, e);
    return o;
  }
  var TR = "[object Symbol]";
  function ap(e) {
    return typeof e == "symbol" || (ja(e) && Ma(e) == TR);
  }
  var AR = "Expected a function";
  function ip(e, n) {
    if (typeof e != "function" || (n != null && typeof n != "function"))
      throw new TypeError(AR);
    var a = function () {
      var s = arguments,
        o = n ? n.apply(this, s) : s[0],
        c = a.cache;
      if (c.has(o)) return c.get(o);
      var f = e.apply(this, s);
      return (a.cache = c.set(o, f) || c), f;
    };
    return (a.cache = new (ip.Cache || Vr)()), a;
  }
  ip.Cache = Vr;
  var OR = 500;
  function RR(e) {
    var n = ip(e, function (s) {
        return a.size === OR && a.clear(), s;
      }),
      a = n.cache;
    return n;
  }
  var CR =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    DR = /\\(\\)?/g,
    NR = RR(function (e) {
      var n = [];
      return (
        e.charCodeAt(0) === 46 && n.push(""),
        e.replace(CR, function (a, s, o, c) {
          n.push(o ? c.replace(DR, "$1") : s || a);
        }),
        n
      );
    });
  function MR(e) {
    if (typeof e == "string" || ap(e)) return e;
    var n = e + "";
    return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
  }
  var iv = $r ? $r.prototype : void 0,
    sv = iv ? iv.toString : void 0;
  function g1(e) {
    if (typeof e == "string") return e;
    if (gl(e)) return y1(e, g1) + "";
    if (ap(e)) return sv ? sv.call(e) : "";
    var n = e + "";
    return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
  }
  function jR(e) {
    return e == null ? "" : g1(e);
  }
  function v1(e) {
    return gl(e) ? y1(e, MR) : ap(e) ? [e] : o1(NR(jR(e)));
  }
  var hd = { exports: {} },
    Ce = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var lv;
  function BR() {
    if (lv) return Ce;
    lv = 1;
    var e = typeof Symbol == "function" && Symbol.for,
      n = e ? Symbol.for("react.element") : 60103,
      a = e ? Symbol.for("react.portal") : 60106,
      s = e ? Symbol.for("react.fragment") : 60107,
      o = e ? Symbol.for("react.strict_mode") : 60108,
      c = e ? Symbol.for("react.profiler") : 60114,
      f = e ? Symbol.for("react.provider") : 60109,
      p = e ? Symbol.for("react.context") : 60110,
      h = e ? Symbol.for("react.async_mode") : 60111,
      m = e ? Symbol.for("react.concurrent_mode") : 60111,
      g = e ? Symbol.for("react.forward_ref") : 60112,
      v = e ? Symbol.for("react.suspense") : 60113,
      S = e ? Symbol.for("react.suspense_list") : 60120,
      _ = e ? Symbol.for("react.memo") : 60115,
      w = e ? Symbol.for("react.lazy") : 60116,
      M = e ? Symbol.for("react.block") : 60121,
      A = e ? Symbol.for("react.fundamental") : 60117,
      T = e ? Symbol.for("react.responder") : 60118,
      L = e ? Symbol.for("react.scope") : 60119;
    function B(N) {
      if (typeof N == "object" && N !== null) {
        var F = N.$$typeof;
        switch (F) {
          case n:
            switch (((N = N.type), N)) {
              case h:
              case m:
              case s:
              case c:
              case o:
              case v:
                return N;
              default:
                switch (((N = N && N.$$typeof), N)) {
                  case p:
                  case g:
                  case w:
                  case _:
                  case f:
                    return N;
                  default:
                    return F;
                }
            }
          case a:
            return F;
        }
      }
    }
    function P(N) {
      return B(N) === m;
    }
    return (
      (Ce.AsyncMode = h),
      (Ce.ConcurrentMode = m),
      (Ce.ContextConsumer = p),
      (Ce.ContextProvider = f),
      (Ce.Element = n),
      (Ce.ForwardRef = g),
      (Ce.Fragment = s),
      (Ce.Lazy = w),
      (Ce.Memo = _),
      (Ce.Portal = a),
      (Ce.Profiler = c),
      (Ce.StrictMode = o),
      (Ce.Suspense = v),
      (Ce.isAsyncMode = function (N) {
        return P(N) || B(N) === h;
      }),
      (Ce.isConcurrentMode = P),
      (Ce.isContextConsumer = function (N) {
        return B(N) === p;
      }),
      (Ce.isContextProvider = function (N) {
        return B(N) === f;
      }),
      (Ce.isElement = function (N) {
        return typeof N == "object" && N !== null && N.$$typeof === n;
      }),
      (Ce.isForwardRef = function (N) {
        return B(N) === g;
      }),
      (Ce.isFragment = function (N) {
        return B(N) === s;
      }),
      (Ce.isLazy = function (N) {
        return B(N) === w;
      }),
      (Ce.isMemo = function (N) {
        return B(N) === _;
      }),
      (Ce.isPortal = function (N) {
        return B(N) === a;
      }),
      (Ce.isProfiler = function (N) {
        return B(N) === c;
      }),
      (Ce.isStrictMode = function (N) {
        return B(N) === o;
      }),
      (Ce.isSuspense = function (N) {
        return B(N) === v;
      }),
      (Ce.isValidElementType = function (N) {
        return (
          typeof N == "string" ||
          typeof N == "function" ||
          N === s ||
          N === m ||
          N === c ||
          N === o ||
          N === v ||
          N === S ||
          (typeof N == "object" &&
            N !== null &&
            (N.$$typeof === w ||
              N.$$typeof === _ ||
              N.$$typeof === f ||
              N.$$typeof === p ||
              N.$$typeof === g ||
              N.$$typeof === A ||
              N.$$typeof === T ||
              N.$$typeof === L ||
              N.$$typeof === M))
        );
      }),
      (Ce.typeOf = B),
      Ce
    );
  }
  var ov;
  function UR() {
    return ov || ((ov = 1), (hd.exports = BR())), hd.exports;
  }
  var pd, uv;
  function LR() {
    if (uv) return pd;
    uv = 1;
    var e = UR(),
      n = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      a = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      s = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      c = {};
    (c[e.ForwardRef] = s), (c[e.Memo] = o);
    function f(w) {
      return e.isMemo(w) ? o : c[w.$$typeof] || n;
    }
    var p = Object.defineProperty,
      h = Object.getOwnPropertyNames,
      m = Object.getOwnPropertySymbols,
      g = Object.getOwnPropertyDescriptor,
      v = Object.getPrototypeOf,
      S = Object.prototype;
    function _(w, M, A) {
      if (typeof M != "string") {
        if (S) {
          var T = v(M);
          T && T !== S && _(w, T, A);
        }
        var L = h(M);
        m && (L = L.concat(m(M)));
        for (var B = f(w), P = f(M), N = 0; N < L.length; ++N) {
          var F = L[N];
          if (!a[F] && !(A && A[F]) && !(P && P[F]) && !(B && B[F])) {
            var K = g(M, F);
            try {
              p(w, F, K);
            } catch {}
          }
        }
      }
      return w;
    }
    return (pd = _), pd;
  }
  LR();
  function ut() {
    return (
      (ut =
        Object.assign ||
        function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
          }
          return e;
        }),
      ut.apply(this, arguments)
    );
  }
  function b1(e, n) {
    if (e == null) return {};
    var a = {},
      s = Object.keys(e),
      o,
      c;
    for (c = 0; c < s.length; c++)
      (o = s[c]), !(n.indexOf(o) >= 0) && (a[o] = e[o]);
    return a;
  }
  var xu = R.createContext(void 0);
  xu.displayName = "FormikContext";
  xu.Provider;
  xu.Consumer;
  function kR() {
    var e = R.useContext(xu);
    return e;
  }
  var pn = function (n) {
      return typeof n == "function";
    },
    _u = function (n) {
      return n !== null && typeof n == "object";
    },
    zR = function (n) {
      return String(Math.floor(Number(n))) === n;
    },
    md = function (n) {
      return Object.prototype.toString.call(n) === "[object String]";
    },
    yd = function (n) {
      return _u(n) && pn(n.then);
    };
  function $t(e, n, a, s) {
    s === void 0 && (s = 0);
    for (var o = v1(n); e && s < o.length; ) e = e[o[s++]];
    return (s !== o.length && !e) || e === void 0 ? a : e;
  }
  function Sa(e, n, a) {
    for (var s = av(e), o = s, c = 0, f = v1(n); c < f.length - 1; c++) {
      var p = f[c],
        h = $t(e, f.slice(0, c + 1));
      if (h && (_u(h) || Array.isArray(h))) o = o[p] = av(h);
      else {
        var m = f[c + 1];
        o = o[p] = zR(m) && Number(m) >= 0 ? [] : {};
      }
    }
    return (c === 0 ? e : o)[f[c]] === a
      ? e
      : (a === void 0 ? delete o[f[c]] : (o[f[c]] = a),
        c === 0 && a === void 0 && delete s[f[c]],
        s);
  }
  function S1(e, n, a, s) {
    a === void 0 && (a = new WeakMap()), s === void 0 && (s = {});
    for (var o = 0, c = Object.keys(e); o < c.length; o++) {
      var f = c[o],
        p = e[f];
      _u(p)
        ? a.get(p) ||
          (a.set(p, !0), (s[f] = Array.isArray(p) ? [] : {}), S1(p, n, a, s[f]))
        : (s[f] = n);
    }
    return s;
  }
  function $R(e, n) {
    switch (n.type) {
      case "SET_VALUES":
        return ut({}, e, { values: n.payload });
      case "SET_TOUCHED":
        return ut({}, e, { touched: n.payload });
      case "SET_ERRORS":
        return ma(e.errors, n.payload) ? e : ut({}, e, { errors: n.payload });
      case "SET_STATUS":
        return ut({}, e, { status: n.payload });
      case "SET_ISSUBMITTING":
        return ut({}, e, { isSubmitting: n.payload });
      case "SET_ISVALIDATING":
        return ut({}, e, { isValidating: n.payload });
      case "SET_FIELD_VALUE":
        return ut({}, e, {
          values: Sa(e.values, n.payload.field, n.payload.value),
        });
      case "SET_FIELD_TOUCHED":
        return ut({}, e, {
          touched: Sa(e.touched, n.payload.field, n.payload.value),
        });
      case "SET_FIELD_ERROR":
        return ut({}, e, {
          errors: Sa(e.errors, n.payload.field, n.payload.value),
        });
      case "RESET_FORM":
        return ut({}, e, n.payload);
      case "SET_FORMIK_STATE":
        return n.payload(e);
      case "SUBMIT_ATTEMPT":
        return ut({}, e, {
          touched: S1(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1,
        });
      case "SUBMIT_FAILURE":
        return ut({}, e, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return ut({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var pa = {},
    jo = {};
  function Tu(e) {
    var n = e.validateOnChange,
      a = n === void 0 ? !0 : n,
      s = e.validateOnBlur,
      o = s === void 0 ? !0 : s,
      c = e.validateOnMount,
      f = c === void 0 ? !1 : c,
      p = e.isInitialValid,
      h = e.enableReinitialize,
      m = h === void 0 ? !1 : h,
      g = e.onSubmit,
      v = b1(e, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      S = ut(
        {
          validateOnChange: a,
          validateOnBlur: o,
          validateOnMount: f,
          onSubmit: g,
        },
        v
      ),
      _ = R.useRef(S.initialValues),
      w = R.useRef(S.initialErrors || pa),
      M = R.useRef(S.initialTouched || jo),
      A = R.useRef(S.initialStatus),
      T = R.useRef(!1),
      L = R.useRef({});
    R.useEffect(function () {
      return (
        (T.current = !0),
        function () {
          T.current = !1;
        }
      );
    }, []);
    var B = R.useState(0),
      P = B[1],
      N = R.useRef({
        values: Mo(S.initialValues),
        errors: Mo(S.initialErrors) || pa,
        touched: Mo(S.initialTouched) || jo,
        status: Mo(S.initialStatus),
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      F = N.current,
      K = R.useCallback(function (z) {
        var Z = N.current;
        (N.current = $R(Z, z)),
          Z !== N.current &&
            P(function (J) {
              return J + 1;
            });
      }, []),
      ee = R.useCallback(
        function (z, Z) {
          return new Promise(function (J, ie) {
            var pe = S.validate(z, Z);
            pe == null
              ? J(pa)
              : yd(pe)
              ? pe.then(
                  function (Ae) {
                    J(Ae || pa);
                  },
                  function (Ae) {
                    ie(Ae);
                  }
                )
              : J(pe);
          });
        },
        [S.validate]
      ),
      Y = R.useCallback(
        function (z, Z) {
          var J = S.validationSchema,
            ie = pn(J) ? J(Z) : J,
            pe = Z && ie.validateAt ? ie.validateAt(Z, z) : HR(z, ie);
          return new Promise(function (Ae, Xe) {
            pe.then(
              function () {
                Ae(pa);
              },
              function (un) {
                un.name === "ValidationError" ? Ae(qR(un)) : Xe(un);
              }
            );
          });
        },
        [S.validationSchema]
      ),
      oe = R.useCallback(function (z, Z) {
        return new Promise(function (J) {
          return J(L.current[z].validate(Z));
        });
      }, []),
      ye = R.useCallback(
        function (z) {
          var Z = Object.keys(L.current).filter(function (ie) {
              return pn(L.current[ie].validate);
            }),
            J =
              Z.length > 0
                ? Z.map(function (ie) {
                    return oe(ie, $t(z, ie));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(J).then(function (ie) {
            return ie.reduce(function (pe, Ae, Xe) {
              return (
                Ae === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (Ae && (pe = Sa(pe, Z[Xe], Ae))),
                pe
              );
            }, {});
          });
        },
        [oe]
      ),
      et = R.useCallback(
        function (z) {
          return Promise.all([
            ye(z),
            S.validationSchema ? Y(z) : {},
            S.validate ? ee(z) : {},
          ]).then(function (Z) {
            var J = Z[0],
              ie = Z[1],
              pe = Z[2],
              Ae = th.all([J, ie, pe], { arrayMerge: FR });
            return Ae;
          });
        },
        [S.validate, S.validationSchema, ye, ee, Y]
      ),
      ze = an(function (z) {
        return (
          z === void 0 && (z = F.values),
          K({ type: "SET_ISVALIDATING", payload: !0 }),
          et(z).then(function (Z) {
            return (
              T.current &&
                (K({ type: "SET_ISVALIDATING", payload: !1 }),
                K({ type: "SET_ERRORS", payload: Z })),
              Z
            );
          })
        );
      });
    R.useEffect(
      function () {
        f &&
          T.current === !0 &&
          ma(_.current, S.initialValues) &&
          ze(_.current);
      },
      [f, ze]
    );
    var at = R.useCallback(
      function (z) {
        var Z = z && z.values ? z.values : _.current,
          J =
            z && z.errors
              ? z.errors
              : w.current
              ? w.current
              : S.initialErrors || {},
          ie =
            z && z.touched
              ? z.touched
              : M.current
              ? M.current
              : S.initialTouched || {},
          pe =
            z && z.status ? z.status : A.current ? A.current : S.initialStatus;
        (_.current = Z), (w.current = J), (M.current = ie), (A.current = pe);
        var Ae = function () {
          K({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!z && !!z.isSubmitting,
              errors: J,
              touched: ie,
              status: pe,
              values: Z,
              isValidating: !!z && !!z.isValidating,
              submitCount:
                z && z.submitCount && typeof z.submitCount == "number"
                  ? z.submitCount
                  : 0,
            },
          });
        };
        if (S.onReset) {
          var Xe = S.onReset(F.values, on);
          yd(Xe) ? Xe.then(Ae) : Ae();
        } else Ae();
      },
      [S.initialErrors, S.initialStatus, S.initialTouched, S.onReset]
    );
    R.useEffect(
      function () {
        T.current === !0 &&
          !ma(_.current, S.initialValues) &&
          m &&
          ((_.current = S.initialValues), at(), f && ze(_.current));
      },
      [m, S.initialValues, at, f, ze]
    ),
      R.useEffect(
        function () {
          m &&
            T.current === !0 &&
            !ma(w.current, S.initialErrors) &&
            ((w.current = S.initialErrors || pa),
            K({ type: "SET_ERRORS", payload: S.initialErrors || pa }));
        },
        [m, S.initialErrors]
      ),
      R.useEffect(
        function () {
          m &&
            T.current === !0 &&
            !ma(M.current, S.initialTouched) &&
            ((M.current = S.initialTouched || jo),
            K({ type: "SET_TOUCHED", payload: S.initialTouched || jo }));
        },
        [m, S.initialTouched]
      ),
      R.useEffect(
        function () {
          m &&
            T.current === !0 &&
            !ma(A.current, S.initialStatus) &&
            ((A.current = S.initialStatus),
            K({ type: "SET_STATUS", payload: S.initialStatus }));
        },
        [m, S.initialStatus, S.initialTouched]
      );
    var dt = an(function (z) {
        if (L.current[z] && pn(L.current[z].validate)) {
          var Z = $t(F.values, z),
            J = L.current[z].validate(Z);
          return yd(J)
            ? (K({ type: "SET_ISVALIDATING", payload: !0 }),
              J.then(function (ie) {
                return ie;
              }).then(function (ie) {
                K({
                  type: "SET_FIELD_ERROR",
                  payload: { field: z, value: ie },
                }),
                  K({ type: "SET_ISVALIDATING", payload: !1 });
              }))
            : (K({ type: "SET_FIELD_ERROR", payload: { field: z, value: J } }),
              Promise.resolve(J));
        } else if (S.validationSchema)
          return (
            K({ type: "SET_ISVALIDATING", payload: !0 }),
            Y(F.values, z)
              .then(function (ie) {
                return ie;
              })
              .then(function (ie) {
                K({
                  type: "SET_FIELD_ERROR",
                  payload: { field: z, value: $t(ie, z) },
                }),
                  K({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      X = R.useCallback(function (z, Z) {
        var J = Z.validate;
        L.current[z] = { validate: J };
      }, []),
      ue = R.useCallback(function (z) {
        delete L.current[z];
      }, []),
      se = an(function (z, Z) {
        K({ type: "SET_TOUCHED", payload: z });
        var J = Z === void 0 ? o : Z;
        return J ? ze(F.values) : Promise.resolve();
      }),
      De = R.useCallback(function (z) {
        K({ type: "SET_ERRORS", payload: z });
      }, []),
      O = an(function (z, Z) {
        var J = pn(z) ? z(F.values) : z;
        K({ type: "SET_VALUES", payload: J });
        var ie = Z === void 0 ? a : Z;
        return ie ? ze(J) : Promise.resolve();
      }),
      G = R.useCallback(function (z, Z) {
        K({ type: "SET_FIELD_ERROR", payload: { field: z, value: Z } });
      }, []),
      ne = an(function (z, Z, J) {
        K({ type: "SET_FIELD_VALUE", payload: { field: z, value: Z } });
        var ie = J === void 0 ? a : J;
        return ie ? ze(Sa(F.values, z, Z)) : Promise.resolve();
      }),
      ae = R.useCallback(
        function (z, Z) {
          var J = Z,
            ie = z,
            pe;
          if (!md(z)) {
            z.persist && z.persist();
            var Ae = z.target ? z.target : z.currentTarget,
              Xe = Ae.type,
              un = Ae.name,
              qa = Ae.id,
              Gi = Ae.value,
              Ku = Ae.checked;
            Ae.outerHTML;
            var lr = Ae.options,
              xt = Ae.multiple;
            (J = Z || un || qa),
              (ie = /number|range/.test(Xe)
                ? ((pe = parseFloat(Gi)), isNaN(pe) ? "" : pe)
                : /checkbox/.test(Xe)
                ? IR($t(F.values, J), Ku, Gi)
                : lr && xt
                ? VR(lr)
                : Gi);
          }
          J && ne(J, ie);
        },
        [ne, F.values]
      ),
      Q = an(function (z) {
        if (md(z))
          return function (Z) {
            return ae(Z, z);
          };
        ae(z);
      }),
      he = an(function (z, Z, J) {
        Z === void 0 && (Z = !0),
          K({ type: "SET_FIELD_TOUCHED", payload: { field: z, value: Z } });
        var ie = J === void 0 ? o : J;
        return ie ? ze(F.values) : Promise.resolve();
      }),
      fe = R.useCallback(
        function (z, Z) {
          z.persist && z.persist();
          var J = z.target,
            ie = J.name,
            pe = J.id;
          J.outerHTML;
          var Ae = Z || ie || pe;
          he(Ae, !0);
        },
        [he]
      ),
      tt = an(function (z) {
        if (md(z))
          return function (Z) {
            return fe(Z, z);
          };
        fe(z);
      }),
      Te = R.useCallback(function (z) {
        pn(z)
          ? K({ type: "SET_FORMIK_STATE", payload: z })
          : K({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return z;
              },
            });
      }, []),
      Fe = R.useCallback(function (z) {
        K({ type: "SET_STATUS", payload: z });
      }, []),
      je = R.useCallback(function (z) {
        K({ type: "SET_ISSUBMITTING", payload: z });
      }, []),
      At = an(function () {
        return (
          K({ type: "SUBMIT_ATTEMPT" }),
          ze().then(function (z) {
            var Z = z instanceof Error,
              J = !Z && Object.keys(z).length === 0;
            if (J) {
              var ie;
              try {
                if (((ie = ka()), ie === void 0)) return;
              } catch (pe) {
                throw pe;
              }
              return Promise.resolve(ie)
                .then(function (pe) {
                  return T.current && K({ type: "SUBMIT_SUCCESS" }), pe;
                })
                .catch(function (pe) {
                  if (T.current) throw (K({ type: "SUBMIT_FAILURE" }), pe);
                });
            } else if (T.current && (K({ type: "SUBMIT_FAILURE" }), Z)) throw z;
          })
        );
      }),
      Ir = an(function (z) {
        z && z.preventDefault && pn(z.preventDefault) && z.preventDefault(),
          z &&
            z.stopPropagation &&
            pn(z.stopPropagation) &&
            z.stopPropagation(),
          At().catch(function (Z) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              Z
            );
          });
      }),
      on = {
        resetForm: at,
        validateForm: ze,
        validateField: dt,
        setErrors: De,
        setFieldError: G,
        setFieldTouched: he,
        setFieldValue: ne,
        setStatus: Fe,
        setSubmitting: je,
        setTouched: se,
        setValues: O,
        setFormikState: Te,
        submitForm: At,
      },
      ka = an(function () {
        return g(F.values, on);
      }),
      za = an(function (z) {
        z && z.preventDefault && pn(z.preventDefault) && z.preventDefault(),
          z &&
            z.stopPropagation &&
            pn(z.stopPropagation) &&
            z.stopPropagation(),
          at();
      }),
      sr = R.useCallback(
        function (z) {
          return {
            value: $t(F.values, z),
            error: $t(F.errors, z),
            touched: !!$t(F.touched, z),
            initialValue: $t(_.current, z),
            initialTouched: !!$t(M.current, z),
            initialError: $t(w.current, z),
          };
        },
        [F.errors, F.touched, F.values]
      ),
      Fi = R.useCallback(
        function (z) {
          return {
            setValue: function (J, ie) {
              return ne(z, J, ie);
            },
            setTouched: function (J, ie) {
              return he(z, J, ie);
            },
            setError: function (J) {
              return G(z, J);
            },
          };
        },
        [ne, he, G]
      ),
      $a = R.useCallback(
        function (z) {
          var Z = _u(z),
            J = Z ? z.name : z,
            ie = $t(F.values, J),
            pe = { name: J, value: ie, onChange: Q, onBlur: tt };
          if (Z) {
            var Ae = z.type,
              Xe = z.value,
              un = z.as,
              qa = z.multiple;
            Ae === "checkbox"
              ? Xe === void 0
                ? (pe.checked = !!ie)
                : ((pe.checked = !!(Array.isArray(ie) && ~ie.indexOf(Xe))),
                  (pe.value = Xe))
              : Ae === "radio"
              ? ((pe.checked = ie === Xe), (pe.value = Xe))
              : un === "select" &&
                qa &&
                ((pe.value = pe.value || []), (pe.multiple = !0));
          }
          return pe;
        },
        [tt, Q, F.values]
      ),
      Gr = R.useMemo(
        function () {
          return !ma(_.current, F.values);
        },
        [_.current, F.values]
      ),
      Vi = R.useMemo(
        function () {
          return typeof p < "u"
            ? Gr
              ? F.errors && Object.keys(F.errors).length === 0
              : p !== !1 && pn(p)
              ? p(S)
              : p
            : F.errors && Object.keys(F.errors).length === 0;
        },
        [p, Gr, F.errors, S]
      ),
      Ii = ut({}, F, {
        initialValues: _.current,
        initialErrors: w.current,
        initialTouched: M.current,
        initialStatus: A.current,
        handleBlur: tt,
        handleChange: Q,
        handleReset: za,
        handleSubmit: Ir,
        resetForm: at,
        setErrors: De,
        setFormikState: Te,
        setFieldTouched: he,
        setFieldValue: ne,
        setFieldError: G,
        setStatus: Fe,
        setSubmitting: je,
        setTouched: se,
        setValues: O,
        submitForm: At,
        validateForm: ze,
        validateField: dt,
        isValid: Vi,
        dirty: Gr,
        unregisterField: ue,
        registerField: X,
        getFieldProps: $a,
        getFieldMeta: sr,
        getFieldHelpers: Fi,
        validateOnBlur: o,
        validateOnChange: a,
        validateOnMount: f,
      });
    return Ii;
  }
  function qR(e) {
    var n = {};
    if (e.inner) {
      if (e.inner.length === 0) return Sa(n, e.path, e.message);
      for (
        var o = e.inner,
          a = Array.isArray(o),
          s = 0,
          o = a ? o : o[Symbol.iterator]();
        ;

      ) {
        var c;
        if (a) {
          if (s >= o.length) break;
          c = o[s++];
        } else {
          if (((s = o.next()), s.done)) break;
          c = s.value;
        }
        var f = c;
        $t(n, f.path) || (n = Sa(n, f.path, f.message));
      }
    }
    return n;
  }
  function HR(e, n, a, s) {
    a === void 0 && (a = !1);
    var o = sh(e);
    return n[a ? "validateSync" : "validate"](o, {
      abortEarly: !1,
      context: o,
    });
  }
  function sh(e) {
    var n = Array.isArray(e) ? [] : {};
    for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
        var s = String(a);
        Array.isArray(e[s]) === !0
          ? (n[s] = e[s].map(function (o) {
              return Array.isArray(o) === !0 || U0(o)
                ? sh(o)
                : o !== ""
                ? o
                : void 0;
            }))
          : U0(e[s])
          ? (n[s] = sh(e[s]))
          : (n[s] = e[s] !== "" ? e[s] : void 0);
      }
    return n;
  }
  function FR(e, n, a) {
    var s = e.slice();
    return (
      n.forEach(function (c, f) {
        if (typeof s[f] > "u") {
          var p = a.clone !== !1,
            h = p && a.isMergeableObject(c);
          s[f] = h ? th(Array.isArray(c) ? [] : {}, c, a) : c;
        } else a.isMergeableObject(c) ? (s[f] = th(e[f], c, a)) : e.indexOf(c) === -1 && s.push(c);
      }),
      s
    );
  }
  function VR(e) {
    return Array.from(e)
      .filter(function (n) {
        return n.selected;
      })
      .map(function (n) {
        return n.value;
      });
  }
  function IR(e, n, a) {
    if (typeof e == "boolean") return !!n;
    var s = [],
      o = !1,
      c = -1;
    if (Array.isArray(e)) (s = e), (c = e.indexOf(a)), (o = c >= 0);
    else if (!a || a == "true" || a == "false") return !!n;
    return n && a && !o
      ? s.concat(a)
      : o
      ? s.slice(0, c).concat(s.slice(c + 1))
      : s;
  }
  var GR =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? R.useLayoutEffect
      : R.useEffect;
  function an(e) {
    var n = R.useRef(e);
    return (
      GR(function () {
        n.current = e;
      }),
      R.useCallback(function () {
        for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
          s[o] = arguments[o];
        return n.current.apply(void 0, s);
      }, [])
    );
  }
  var PR = R.forwardRef(function (e, n) {
    var a = e.action,
      s = b1(e, ["action"]),
      o = a ?? "#",
      c = kR(),
      f = c.handleReset,
      p = c.handleSubmit;
    return R.createElement(
      "form",
      ut({ onSubmit: p, ref: n, onReset: f, action: o }, s)
    );
  });
  PR.displayName = "Form";
  var gd = { exports: {} },
    vd = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var cv;
  function YR() {
    if (cv) return vd;
    cv = 1;
    var e = gu();
    function n(h, m) {
      return (h === m && (h !== 0 || 1 / h === 1 / m)) || (h !== h && m !== m);
    }
    var a = typeof Object.is == "function" ? Object.is : n,
      s = e.useSyncExternalStore,
      o = e.useRef,
      c = e.useEffect,
      f = e.useMemo,
      p = e.useDebugValue;
    return (
      (vd.useSyncExternalStoreWithSelector = function (h, m, g, v, S) {
        var _ = o(null);
        if (_.current === null) {
          var w = { hasValue: !1, value: null };
          _.current = w;
        } else w = _.current;
        _ = f(
          function () {
            function A(N) {
              if (!T) {
                if (
                  ((T = !0), (L = N), (N = v(N)), S !== void 0 && w.hasValue)
                ) {
                  var F = w.value;
                  if (S(F, N)) return (B = F);
                }
                return (B = N);
              }
              if (((F = B), a(L, N))) return F;
              var K = v(N);
              return S !== void 0 && S(F, K)
                ? ((L = N), F)
                : ((L = N), (B = K));
            }
            var T = !1,
              L,
              B,
              P = g === void 0 ? null : g;
            return [
              function () {
                return A(m());
              },
              P === null
                ? void 0
                : function () {
                    return A(P());
                  },
            ];
          },
          [m, g, v, S]
        );
        var M = s(h, _[0], _[1]);
        return (
          c(
            function () {
              (w.hasValue = !0), (w.value = M);
            },
            [M]
          ),
          p(M),
          M
        );
      }),
      vd
    );
  }
  var fv;
  function KR() {
    return fv || ((fv = 1), (gd.exports = YR())), gd.exports;
  }
  var XR = KR();
  function QR(e) {
    e();
  }
  function ZR() {
    let e = null,
      n = null;
    return {
      clear() {
        (e = null), (n = null);
      },
      notify() {
        QR(() => {
          let a = e;
          for (; a; ) a.callback(), (a = a.next);
        });
      },
      get() {
        const a = [];
        let s = e;
        for (; s; ) a.push(s), (s = s.next);
        return a;
      },
      subscribe(a) {
        let s = !0;
        const o = (n = { callback: a, next: null, prev: n });
        return (
          o.prev ? (o.prev.next = o) : (e = o),
          function () {
            !s ||
              e === null ||
              ((s = !1),
              o.next ? (o.next.prev = o.prev) : (n = o.prev),
              o.prev ? (o.prev.next = o.next) : (e = o.next));
          }
        );
      },
    };
  }
  var dv = { notify() {}, get: () => [] };
  function JR(e, n) {
    let a,
      s = dv,
      o = 0,
      c = !1;
    function f(M) {
      g();
      const A = s.subscribe(M);
      let T = !1;
      return () => {
        T || ((T = !0), A(), v());
      };
    }
    function p() {
      s.notify();
    }
    function h() {
      w.onStateChange && w.onStateChange();
    }
    function m() {
      return c;
    }
    function g() {
      o++, a || ((a = e.subscribe(h)), (s = ZR()));
    }
    function v() {
      o--, a && o === 0 && (a(), (a = void 0), s.clear(), (s = dv));
    }
    function S() {
      c || ((c = !0), g());
    }
    function _() {
      c && ((c = !1), v());
    }
    const w = {
      addNestedSub: f,
      notifyNestedSubs: p,
      handleChangeWrapper: h,
      isSubscribed: m,
      trySubscribe: S,
      tryUnsubscribe: _,
      getListeners: () => s,
    };
    return w;
  }
  var WR = () =>
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    eC = WR(),
    tC = () => typeof navigator < "u" && navigator.product === "ReactNative",
    nC = tC(),
    rC = () => (eC || nC ? R.useLayoutEffect : R.useEffect),
    aC = rC(),
    bd = Symbol.for("react-redux-context"),
    Sd = typeof globalThis < "u" ? globalThis : {};
  function iC() {
    if (!R.createContext) return {};
    const e = Sd[bd] ?? (Sd[bd] = new Map());
    let n = e.get(R.createContext);
    return n || ((n = R.createContext(null)), e.set(R.createContext, n)), n;
  }
  var qr = iC();
  function sC(e) {
    const { children: n, context: a, serverState: s, store: o } = e,
      c = R.useMemo(() => {
        const h = JR(o);
        return {
          store: o,
          subscription: h,
          getServerState: s ? () => s : void 0,
        };
      }, [o, s]),
      f = R.useMemo(() => o.getState(), [o]);
    aC(() => {
      const { subscription: h } = c;
      return (
        (h.onStateChange = h.notifyNestedSubs),
        h.trySubscribe(),
        f !== o.getState() && h.notifyNestedSubs(),
        () => {
          h.tryUnsubscribe(), (h.onStateChange = void 0);
        }
      );
    }, [c, f]);
    const p = a || qr;
    return R.createElement(p.Provider, { value: c }, n);
  }
  var lC = sC;
  function sp(e = qr) {
    return function () {
      return R.useContext(e);
    };
  }
  var E1 = sp();
  function w1(e = qr) {
    const n = e === qr ? E1 : sp(e),
      a = () => {
        const { store: s } = n();
        return s;
      };
    return Object.assign(a, { withTypes: () => a }), a;
  }
  var oC = w1();
  function uC(e = qr) {
    const n = e === qr ? oC : w1(e),
      a = () => n().dispatch;
    return Object.assign(a, { withTypes: () => a }), a;
  }
  var ft = uC(),
    cC = (e, n) => e === n;
  function fC(e = qr) {
    const n = e === qr ? E1 : sp(e),
      a = (s, o = {}) => {
        const { equalityFn: c = cC } =
            typeof o == "function" ? { equalityFn: o } : o,
          f = n(),
          { store: p, subscription: h, getServerState: m } = f;
        R.useRef(!0);
        const g = R.useCallback(
            {
              [s.name](S) {
                return s(S);
              },
            }[s.name],
            [s]
          ),
          v = XR.useSyncExternalStoreWithSelector(
            h.addNestedSub,
            p.getState,
            m || p.getState,
            g,
            c
          );
        return R.useDebugValue(v), v;
      };
    return Object.assign(a, { withTypes: () => a }), a;
  }
  var xe = fC();
  function gt(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  var dC = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
    hv = dC,
    Ed = () => Math.random().toString(36).substring(7).split("").join("."),
    hC = {
      INIT: `@@redux/INIT${Ed()}`,
      REPLACE: `@@redux/REPLACE${Ed()}`,
      PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ed()}`,
    },
    iu = hC;
  function lp(e) {
    if (typeof e != "object" || e === null) return !1;
    let n = e;
    for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
  }
  function x1(e, n, a) {
    if (typeof e != "function") throw new Error(gt(2));
    if (
      (typeof n == "function" && typeof a == "function") ||
      (typeof a == "function" && typeof arguments[3] == "function")
    )
      throw new Error(gt(0));
    if (
      (typeof n == "function" && typeof a > "u" && ((a = n), (n = void 0)),
      typeof a < "u")
    ) {
      if (typeof a != "function") throw new Error(gt(1));
      return a(x1)(e, n);
    }
    let s = e,
      o = n,
      c = new Map(),
      f = c,
      p = 0,
      h = !1;
    function m() {
      f === c &&
        ((f = new Map()),
        c.forEach((A, T) => {
          f.set(T, A);
        }));
    }
    function g() {
      if (h) throw new Error(gt(3));
      return o;
    }
    function v(A) {
      if (typeof A != "function") throw new Error(gt(4));
      if (h) throw new Error(gt(5));
      let T = !0;
      m();
      const L = p++;
      return (
        f.set(L, A),
        function () {
          if (T) {
            if (h) throw new Error(gt(6));
            (T = !1), m(), f.delete(L), (c = null);
          }
        }
      );
    }
    function S(A) {
      if (!lp(A)) throw new Error(gt(7));
      if (typeof A.type > "u") throw new Error(gt(8));
      if (typeof A.type != "string") throw new Error(gt(17));
      if (h) throw new Error(gt(9));
      try {
        (h = !0), (o = s(o, A));
      } finally {
        h = !1;
      }
      return (
        (c = f).forEach((L) => {
          L();
        }),
        A
      );
    }
    function _(A) {
      if (typeof A != "function") throw new Error(gt(10));
      (s = A), S({ type: iu.REPLACE });
    }
    function w() {
      const A = v;
      return {
        subscribe(T) {
          if (typeof T != "object" || T === null) throw new Error(gt(11));
          function L() {
            const P = T;
            P.next && P.next(g());
          }
          return L(), { unsubscribe: A(L) };
        },
        [hv]() {
          return this;
        },
      };
    }
    return (
      S({ type: iu.INIT }),
      { dispatch: S, subscribe: v, getState: g, replaceReducer: _, [hv]: w }
    );
  }
  function pC(e) {
    Object.keys(e).forEach((n) => {
      const a = e[n];
      if (typeof a(void 0, { type: iu.INIT }) > "u") throw new Error(gt(12));
      if (typeof a(void 0, { type: iu.PROBE_UNKNOWN_ACTION() }) > "u")
        throw new Error(gt(13));
    });
  }
  function mC(e) {
    const n = Object.keys(e),
      a = {};
    for (let c = 0; c < n.length; c++) {
      const f = n[c];
      typeof e[f] == "function" && (a[f] = e[f]);
    }
    const s = Object.keys(a);
    let o;
    try {
      pC(a);
    } catch (c) {
      o = c;
    }
    return function (f = {}, p) {
      if (o) throw o;
      let h = !1;
      const m = {};
      for (let g = 0; g < s.length; g++) {
        const v = s[g],
          S = a[v],
          _ = f[v],
          w = S(_, p);
        if (typeof w > "u") throw (p && p.type, new Error(gt(14)));
        (m[v] = w), (h = h || w !== _);
      }
      return (h = h || s.length !== Object.keys(f).length), h ? m : f;
    };
  }
  function su(...e) {
    return e.length === 0
      ? (n) => n
      : e.length === 1
      ? e[0]
      : e.reduce(
          (n, a) =>
            (...s) =>
              n(a(...s))
        );
  }
  function yC(...e) {
    return (n) => (a, s) => {
      const o = n(a, s);
      let c = () => {
        throw new Error(gt(15));
      };
      const f = { getState: o.getState, dispatch: (h, ...m) => c(h, ...m) },
        p = e.map((h) => h(f));
      return (c = su(...p)(o.dispatch)), { ...o, dispatch: c };
    };
  }
  function gC(e) {
    return lp(e) && "type" in e && typeof e.type == "string";
  }
  var _1 = Symbol.for("immer-nothing"),
    pv = Symbol.for("immer-draftable"),
    Vt = Symbol.for("immer-state");
  function yn(e, ...n) {
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var ji = Object.getPrototypeOf;
  function Aa(e) {
    return !!e && !!e[Vt];
  }
  function nr(e) {
    var n;
    return e
      ? T1(e) ||
          Array.isArray(e) ||
          !!e[pv] ||
          !!((n = e.constructor) != null && n[pv]) ||
          Ou(e) ||
          Ru(e)
      : !1;
  }
  var vC = Object.prototype.constructor.toString();
  function T1(e) {
    if (!e || typeof e != "object") return !1;
    const n = ji(e);
    if (n === null) return !0;
    const a = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return a === Object
      ? !0
      : typeof a == "function" && Function.toString.call(a) === vC;
  }
  function lu(e, n) {
    Au(e) === 0
      ? Reflect.ownKeys(e).forEach((a) => {
          n(a, e[a], e);
        })
      : e.forEach((a, s) => n(s, a, e));
  }
  function Au(e) {
    const n = e[Vt];
    return n ? n.type_ : Array.isArray(e) ? 1 : Ou(e) ? 2 : Ru(e) ? 3 : 0;
  }
  function lh(e, n) {
    return Au(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
  }
  function A1(e, n, a) {
    const s = Au(e);
    s === 2 ? e.set(n, a) : s === 3 ? e.add(a) : (e[n] = a);
  }
  function bC(e, n) {
    return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
  }
  function Ou(e) {
    return e instanceof Map;
  }
  function Ru(e) {
    return e instanceof Set;
  }
  function ya(e) {
    return e.copy_ || e.base_;
  }
  function oh(e, n) {
    if (Ou(e)) return new Map(e);
    if (Ru(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const a = T1(e);
    if (n === !0 || (n === "class_only" && !a)) {
      const s = Object.getOwnPropertyDescriptors(e);
      delete s[Vt];
      let o = Reflect.ownKeys(s);
      for (let c = 0; c < o.length; c++) {
        const f = o[c],
          p = s[f];
        p.writable === !1 && ((p.writable = !0), (p.configurable = !0)),
          (p.get || p.set) &&
            (s[f] = {
              configurable: !0,
              writable: !0,
              enumerable: p.enumerable,
              value: e[f],
            });
      }
      return Object.create(ji(e), s);
    } else {
      const s = ji(e);
      if (s !== null && a) return { ...e };
      const o = Object.create(s);
      return Object.assign(o, e);
    }
  }
  function op(e, n = !1) {
    return (
      Cu(e) ||
        Aa(e) ||
        !nr(e) ||
        (Au(e) > 1 && (e.set = e.add = e.clear = e.delete = SC),
        Object.freeze(e),
        n && Object.entries(e).forEach(([a, s]) => op(s, !0))),
      e
    );
  }
  function SC() {
    yn(2);
  }
  function Cu(e) {
    return Object.isFrozen(e);
  }
  var EC = {};
  function Oa(e) {
    const n = EC[e];
    return n || yn(0, e), n;
  }
  var ll;
  function O1() {
    return ll;
  }
  function wC(e, n) {
    return {
      drafts_: [],
      parent_: e,
      immer_: n,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    };
  }
  function mv(e, n) {
    n &&
      (Oa("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = n));
  }
  function uh(e) {
    ch(e), e.drafts_.forEach(xC), (e.drafts_ = null);
  }
  function ch(e) {
    e === ll && (ll = e.parent_);
  }
  function yv(e) {
    return (ll = wC(ll, e));
  }
  function xC(e) {
    const n = e[Vt];
    n.type_ === 0 || n.type_ === 1 ? n.revoke_() : (n.revoked_ = !0);
  }
  function gv(e, n) {
    n.unfinalizedDrafts_ = n.drafts_.length;
    const a = n.drafts_[0];
    return (
      e !== void 0 && e !== a
        ? (a[Vt].modified_ && (uh(n), yn(4)),
          nr(e) && ((e = ou(n, e)), n.parent_ || uu(n, e)),
          n.patches_ &&
            Oa("Patches").generateReplacementPatches_(
              a[Vt].base_,
              e,
              n.patches_,
              n.inversePatches_
            ))
        : (e = ou(n, a, [])),
      uh(n),
      n.patches_ && n.patchListener_(n.patches_, n.inversePatches_),
      e !== _1 ? e : void 0
    );
  }
  function ou(e, n, a) {
    if (Cu(n)) return n;
    const s = n[Vt];
    if (!s) return lu(n, (o, c) => vv(e, s, n, o, c, a)), n;
    if (s.scope_ !== e) return n;
    if (!s.modified_) return uu(e, s.base_, !0), s.base_;
    if (!s.finalized_) {
      (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
      const o = s.copy_;
      let c = o,
        f = !1;
      s.type_ === 3 && ((c = new Set(o)), o.clear(), (f = !0)),
        lu(c, (p, h) => vv(e, s, o, p, h, a, f)),
        uu(e, o, !1),
        a &&
          e.patches_ &&
          Oa("Patches").generatePatches_(s, a, e.patches_, e.inversePatches_);
    }
    return s.copy_;
  }
  function vv(e, n, a, s, o, c, f) {
    if (Aa(o)) {
      const p =
          c && n && n.type_ !== 3 && !lh(n.assigned_, s) ? c.concat(s) : void 0,
        h = ou(e, o, p);
      if ((A1(a, s, h), Aa(h))) e.canAutoFreeze_ = !1;
      else return;
    } else f && a.add(o);
    if (nr(o) && !Cu(o)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
      ou(e, o),
        (!n || !n.scope_.parent_) &&
          typeof s != "symbol" &&
          Object.prototype.propertyIsEnumerable.call(a, s) &&
          uu(e, o);
    }
  }
  function uu(e, n, a = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && op(n, a);
  }
  function _C(e, n) {
    const a = Array.isArray(e),
      s = {
        type_: a ? 1 : 0,
        scope_: n ? n.scope_ : O1(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: n,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1,
      };
    let o = s,
      c = up;
    a && ((o = [s]), (c = ol));
    const { revoke: f, proxy: p } = Proxy.revocable(o, c);
    return (s.draft_ = p), (s.revoke_ = f), p;
  }
  var up = {
      get(e, n) {
        if (n === Vt) return e;
        const a = ya(e);
        if (!lh(a, n)) return TC(e, a, n);
        const s = a[n];
        return e.finalized_ || !nr(s)
          ? s
          : s === wd(e.base_, n)
          ? (xd(e), (e.copy_[n] = dh(s, e)))
          : s;
      },
      has(e, n) {
        return n in ya(e);
      },
      ownKeys(e) {
        return Reflect.ownKeys(ya(e));
      },
      set(e, n, a) {
        const s = R1(ya(e), n);
        if (s != null && s.set) return s.set.call(e.draft_, a), !0;
        if (!e.modified_) {
          const o = wd(ya(e), n),
            c = o == null ? void 0 : o[Vt];
          if (c && c.base_ === a)
            return (e.copy_[n] = a), (e.assigned_[n] = !1), !0;
          if (bC(a, o) && (a !== void 0 || lh(e.base_, n))) return !0;
          xd(e), fh(e);
        }
        return (
          (e.copy_[n] === a && (a !== void 0 || n in e.copy_)) ||
            (Number.isNaN(a) && Number.isNaN(e.copy_[n])) ||
            ((e.copy_[n] = a), (e.assigned_[n] = !0)),
          !0
        );
      },
      deleteProperty(e, n) {
        return (
          wd(e.base_, n) !== void 0 || n in e.base_
            ? ((e.assigned_[n] = !1), xd(e), fh(e))
            : delete e.assigned_[n],
          e.copy_ && delete e.copy_[n],
          !0
        );
      },
      getOwnPropertyDescriptor(e, n) {
        const a = ya(e),
          s = Reflect.getOwnPropertyDescriptor(a, n);
        return (
          s && {
            writable: !0,
            configurable: e.type_ !== 1 || n !== "length",
            enumerable: s.enumerable,
            value: a[n],
          }
        );
      },
      defineProperty() {
        yn(11);
      },
      getPrototypeOf(e) {
        return ji(e.base_);
      },
      setPrototypeOf() {
        yn(12);
      },
    },
    ol = {};
  lu(up, (e, n) => {
    ol[e] = function () {
      return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
    };
  });
  ol.deleteProperty = function (e, n) {
    return ol.set.call(this, e, n, void 0);
  };
  ol.set = function (e, n, a) {
    return up.set.call(this, e[0], n, a, e[0]);
  };
  function wd(e, n) {
    const a = e[Vt];
    return (a ? ya(a) : e)[n];
  }
  function TC(e, n, a) {
    var o;
    const s = R1(n, a);
    return s
      ? "value" in s
        ? s.value
        : (o = s.get) == null
        ? void 0
        : o.call(e.draft_)
      : void 0;
  }
  function R1(e, n) {
    if (!(n in e)) return;
    let a = ji(e);
    for (; a; ) {
      const s = Object.getOwnPropertyDescriptor(a, n);
      if (s) return s;
      a = ji(a);
    }
  }
  function fh(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && fh(e.parent_));
  }
  function xd(e) {
    e.copy_ || (e.copy_ = oh(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  var AC = class {
    constructor(e) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (n, a, s) => {
          if (typeof n == "function" && typeof a != "function") {
            const c = a;
            a = n;
            const f = this;
            return function (h = c, ...m) {
              return f.produce(h, (g) => a.call(this, g, ...m));
            };
          }
          typeof a != "function" && yn(6),
            s !== void 0 && typeof s != "function" && yn(7);
          let o;
          if (nr(n)) {
            const c = yv(this),
              f = dh(n, void 0);
            let p = !0;
            try {
              (o = a(f)), (p = !1);
            } finally {
              p ? uh(c) : ch(c);
            }
            return mv(c, s), gv(o, c);
          } else if (!n || typeof n != "object") {
            if (
              ((o = a(n)),
              o === void 0 && (o = n),
              o === _1 && (o = void 0),
              this.autoFreeze_ && op(o, !0),
              s)
            ) {
              const c = [],
                f = [];
              Oa("Patches").generateReplacementPatches_(n, o, c, f), s(c, f);
            }
            return o;
          } else yn(1, n);
        }),
        (this.produceWithPatches = (n, a) => {
          if (typeof n == "function")
            return (f, ...p) => this.produceWithPatches(f, (h) => n(h, ...p));
          let s, o;
          return [
            this.produce(n, a, (f, p) => {
              (s = f), (o = p);
            }),
            s,
            o,
          ];
        }),
        typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
          this.setAutoFreeze(e.autoFreeze),
        typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
          this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
      nr(e) || yn(8), Aa(e) && (e = OC(e));
      const n = yv(this),
        a = dh(e, void 0);
      return (a[Vt].isManual_ = !0), ch(n), a;
    }
    finishDraft(e, n) {
      const a = e && e[Vt];
      (!a || !a.isManual_) && yn(9);
      const { scope_: s } = a;
      return mv(s, n), gv(void 0, s);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, n) {
      let a;
      for (a = n.length - 1; a >= 0; a--) {
        const o = n[a];
        if (o.path.length === 0 && o.op === "replace") {
          e = o.value;
          break;
        }
      }
      a > -1 && (n = n.slice(a + 1));
      const s = Oa("Patches").applyPatches_;
      return Aa(e) ? s(e, n) : this.produce(e, (o) => s(o, n));
    }
  };
  function dh(e, n) {
    const a = Ou(e)
      ? Oa("MapSet").proxyMap_(e, n)
      : Ru(e)
      ? Oa("MapSet").proxySet_(e, n)
      : _C(e, n);
    return (n ? n.scope_ : O1()).drafts_.push(a), a;
  }
  function OC(e) {
    return Aa(e) || yn(10, e), C1(e);
  }
  function C1(e) {
    if (!nr(e) || Cu(e)) return e;
    const n = e[Vt];
    let a;
    if (n) {
      if (!n.modified_) return n.base_;
      (n.finalized_ = !0), (a = oh(e, n.scope_.immer_.useStrictShallowCopy_));
    } else a = oh(e, !0);
    return (
      lu(a, (s, o) => {
        A1(a, s, C1(o));
      }),
      n && (n.finalized_ = !1),
      a
    );
  }
  var It = new AC(),
    D1 = It.produce;
  It.produceWithPatches.bind(It);
  It.setAutoFreeze.bind(It);
  It.setUseStrictShallowCopy.bind(It);
  It.applyPatches.bind(It);
  It.createDraft.bind(It);
  It.finishDraft.bind(It);
  function N1(e) {
    return ({ dispatch: a, getState: s }) =>
      (o) =>
      (c) =>
        typeof c == "function" ? c(a, s, e) : o(c);
  }
  var RC = N1(),
    CC = N1,
    DC =
      typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (arguments.length !== 0)
              return typeof arguments[0] == "object"
                ? su
                : su.apply(null, arguments);
          },
    NC = (e) => e && typeof e.match == "function";
  function Ws(e, n) {
    function a(...s) {
      if (n) {
        let o = n(...s);
        if (!o) throw new Error(er(0));
        return {
          type: e,
          payload: o.payload,
          ...("meta" in o && { meta: o.meta }),
          ...("error" in o && { error: o.error }),
        };
      }
      return { type: e, payload: s[0] };
    }
    return (
      (a.toString = () => `${e}`),
      (a.type = e),
      (a.match = (s) => gC(s) && s.type === e),
      a
    );
  }
  var M1 = class Ks extends Array {
    constructor(...n) {
      super(...n), Object.setPrototypeOf(this, Ks.prototype);
    }
    static get [Symbol.species]() {
      return Ks;
    }
    concat(...n) {
      return super.concat.apply(this, n);
    }
    prepend(...n) {
      return n.length === 1 && Array.isArray(n[0])
        ? new Ks(...n[0].concat(this))
        : new Ks(...n.concat(this));
    }
  };
  function bv(e) {
    return nr(e) ? D1(e, () => {}) : e;
  }
  function Sv(e, n, a) {
    return e.has(n) ? e.get(n) : e.set(n, a(n)).get(n);
  }
  function MC(e) {
    return typeof e == "boolean";
  }
  var jC = () =>
      function (n) {
        const {
          thunk: a = !0,
          immutableCheck: s = !0,
          serializableCheck: o = !0,
          actionCreatorCheck: c = !0,
        } = n ?? {};
        let f = new M1();
        return a && (MC(a) ? f.push(RC) : f.push(CC(a.extraArgument))), f;
      },
    BC = "RTK_autoBatch",
    Ev = (e) => (n) => {
      setTimeout(n, e);
    },
    UC =
      (e = { type: "raf" }) =>
      (n) =>
      (...a) => {
        const s = n(...a);
        let o = !0,
          c = !1,
          f = !1;
        const p = new Set(),
          h =
            e.type === "tick"
              ? queueMicrotask
              : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Ev(10)
              : e.type === "callback"
              ? e.queueNotification
              : Ev(e.timeout),
          m = () => {
            (f = !1), c && ((c = !1), p.forEach((g) => g()));
          };
        return Object.assign({}, s, {
          subscribe(g) {
            const v = () => o && g(),
              S = s.subscribe(v);
            return (
              p.add(g),
              () => {
                S(), p.delete(g);
              }
            );
          },
          dispatch(g) {
            var v;
            try {
              return (
                (o = !((v = g == null ? void 0 : g.meta) != null && v[BC])),
                (c = !o),
                c && (f || ((f = !0), h(m))),
                s.dispatch(g)
              );
            } finally {
              o = !0;
            }
          },
        });
      },
    LC = (e) =>
      function (a) {
        const { autoBatch: s = !0 } = a ?? {};
        let o = new M1(e);
        return s && o.push(UC(typeof s == "object" ? s : void 0)), o;
      };
  function kC(e) {
    const n = jC(),
      {
        reducer: a = void 0,
        middleware: s,
        devTools: o = !0,
        preloadedState: c = void 0,
        enhancers: f = void 0,
      } = e || {};
    let p;
    if (typeof a == "function") p = a;
    else if (lp(a)) p = mC(a);
    else throw new Error(er(1));
    let h;
    typeof s == "function" ? (h = s(n)) : (h = n());
    let m = su;
    o && (m = DC({ trace: !1, ...(typeof o == "object" && o) }));
    const g = yC(...h),
      v = LC(g);
    let S = typeof f == "function" ? f(v) : v();
    const _ = m(...S);
    return x1(p, c, _);
  }
  function j1(e) {
    const n = {},
      a = [];
    let s;
    const o = {
      addCase(c, f) {
        const p = typeof c == "string" ? c : c.type;
        if (!p) throw new Error(er(28));
        if (p in n) throw new Error(er(29));
        return (n[p] = f), o;
      },
      addMatcher(c, f) {
        return a.push({ matcher: c, reducer: f }), o;
      },
      addDefaultCase(c) {
        return (s = c), o;
      },
    };
    return e(o), [n, a, s];
  }
  function zC(e) {
    return typeof e == "function";
  }
  function $C(e, n) {
    let [a, s, o] = j1(n),
      c;
    if (zC(e)) c = () => bv(e());
    else {
      const p = bv(e);
      c = () => p;
    }
    function f(p = c(), h) {
      let m = [
        a[h.type],
        ...s.filter(({ matcher: g }) => g(h)).map(({ reducer: g }) => g),
      ];
      return (
        m.filter((g) => !!g).length === 0 && (m = [o]),
        m.reduce((g, v) => {
          if (v)
            if (Aa(g)) {
              const _ = v(g, h);
              return _ === void 0 ? g : _;
            } else {
              if (nr(g)) return D1(g, (S) => v(S, h));
              {
                const S = v(g, h);
                if (S === void 0) {
                  if (g === null) return g;
                  throw Error(
                    "A case reducer on a non-draftable value must not return undefined"
                  );
                }
                return S;
              }
            }
          return g;
        }, p)
      );
    }
    return (f.getInitialState = c), f;
  }
  var qC = (e, n) => (NC(e) ? e.match(n) : e(n));
  function HC(...e) {
    return (n) => e.some((a) => qC(a, n));
  }
  var FC = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    VC = (e = 21) => {
      let n = "",
        a = e;
      for (; a--; ) n += FC[(Math.random() * 64) | 0];
      return n;
    },
    IC = ["name", "message", "stack", "code"],
    _d = class {
      constructor(e, n) {
        td(this, "_type");
        (this.payload = e), (this.meta = n);
      }
    },
    wv = class {
      constructor(e, n) {
        td(this, "_type");
        (this.payload = e), (this.meta = n);
      }
    },
    GC = (e) => {
      if (typeof e == "object" && e !== null) {
        const n = {};
        for (const a of IC) typeof e[a] == "string" && (n[a] = e[a]);
        return n;
      }
      return { message: String(e) };
    },
    Gt = (() => {
      function e(n, a, s) {
        const o = Ws(n + "/fulfilled", (h, m, g, v) => ({
            payload: h,
            meta: {
              ...(v || {}),
              arg: g,
              requestId: m,
              requestStatus: "fulfilled",
            },
          })),
          c = Ws(n + "/pending", (h, m, g) => ({
            payload: void 0,
            meta: {
              ...(g || {}),
              arg: m,
              requestId: h,
              requestStatus: "pending",
            },
          })),
          f = Ws(n + "/rejected", (h, m, g, v, S) => ({
            payload: v,
            error: ((s && s.serializeError) || GC)(h || "Rejected"),
            meta: {
              ...(S || {}),
              arg: g,
              requestId: m,
              rejectedWithValue: !!v,
              requestStatus: "rejected",
              aborted: (h == null ? void 0 : h.name) === "AbortError",
              condition: (h == null ? void 0 : h.name) === "ConditionError",
            },
          }));
        function p(h) {
          return (m, g, v) => {
            const S = s != null && s.idGenerator ? s.idGenerator(h) : VC(),
              _ = new AbortController();
            let w, M;
            function A(L) {
              (M = L), _.abort();
            }
            const T = (async function () {
              var P, N;
              let L;
              try {
                let F =
                  (P = s == null ? void 0 : s.condition) == null
                    ? void 0
                    : P.call(s, h, { getState: g, extra: v });
                if ((YC(F) && (F = await F), F === !1 || _.signal.aborted))
                  throw {
                    name: "ConditionError",
                    message:
                      "Aborted due to condition callback returning false.",
                  };
                const K = new Promise((ee, Y) => {
                  (w = () => {
                    Y({ name: "AbortError", message: M || "Aborted" });
                  }),
                    _.signal.addEventListener("abort", w);
                });
                m(
                  c(
                    S,
                    h,
                    (N = s == null ? void 0 : s.getPendingMeta) == null
                      ? void 0
                      : N.call(
                          s,
                          { requestId: S, arg: h },
                          { getState: g, extra: v }
                        )
                  )
                ),
                  (L = await Promise.race([
                    K,
                    Promise.resolve(
                      a(h, {
                        dispatch: m,
                        getState: g,
                        extra: v,
                        requestId: S,
                        signal: _.signal,
                        abort: A,
                        rejectWithValue: (ee, Y) => new _d(ee, Y),
                        fulfillWithValue: (ee, Y) => new wv(ee, Y),
                      })
                    ).then((ee) => {
                      if (ee instanceof _d) throw ee;
                      return ee instanceof wv
                        ? o(ee.payload, S, h, ee.meta)
                        : o(ee, S, h);
                    }),
                  ]));
              } catch (F) {
                L =
                  F instanceof _d
                    ? f(null, S, h, F.payload, F.meta)
                    : f(F, S, h);
              } finally {
                w && _.signal.removeEventListener("abort", w);
              }
              return (
                (s &&
                  !s.dispatchConditionRejection &&
                  f.match(L) &&
                  L.meta.condition) ||
                  m(L),
                L
              );
            })();
            return Object.assign(T, {
              abort: A,
              requestId: S,
              arg: h,
              unwrap() {
                return T.then(PC);
              },
            });
          };
        }
        return Object.assign(p, {
          pending: c,
          rejected: f,
          fulfilled: o,
          settled: HC(f, o),
          typePrefix: n,
        });
      }
      return (e.withTypes = () => e), e;
    })();
  function PC(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload;
  }
  function YC(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function";
  }
  var KC = Symbol.for("rtk-slice-createasyncthunk");
  function XC(e, n) {
    return `${e}/${n}`;
  }
  function QC({ creators: e } = {}) {
    var a;
    const n = (a = e == null ? void 0 : e.asyncThunk) == null ? void 0 : a[KC];
    return function (o) {
      const { name: c, reducerPath: f = c } = o;
      if (!c) throw new Error(er(11));
      const p =
          (typeof o.reducers == "function" ? o.reducers(JC()) : o.reducers) ||
          {},
        h = Object.keys(p),
        m = {
          sliceCaseReducersByName: {},
          sliceCaseReducersByType: {},
          actionCreators: {},
          sliceMatchers: [],
        },
        g = {
          addCase(B, P) {
            const N = typeof B == "string" ? B : B.type;
            if (!N) throw new Error(er(12));
            if (N in m.sliceCaseReducersByType) throw new Error(er(13));
            return (m.sliceCaseReducersByType[N] = P), g;
          },
          addMatcher(B, P) {
            return m.sliceMatchers.push({ matcher: B, reducer: P }), g;
          },
          exposeAction(B, P) {
            return (m.actionCreators[B] = P), g;
          },
          exposeCaseReducer(B, P) {
            return (m.sliceCaseReducersByName[B] = P), g;
          },
        };
      h.forEach((B) => {
        const P = p[B],
          N = {
            reducerName: B,
            type: XC(c, B),
            createNotation: typeof o.reducers == "function",
          };
        e3(P) ? n3(N, P, g, n) : WC(N, P, g);
      });
      function v() {
        const [B = {}, P = [], N = void 0] =
            typeof o.extraReducers == "function"
              ? j1(o.extraReducers)
              : [o.extraReducers],
          F = { ...B, ...m.sliceCaseReducersByType };
        return $C(o.initialState, (K) => {
          for (let ee in F) K.addCase(ee, F[ee]);
          for (let ee of m.sliceMatchers) K.addMatcher(ee.matcher, ee.reducer);
          for (let ee of P) K.addMatcher(ee.matcher, ee.reducer);
          N && K.addDefaultCase(N);
        });
      }
      const S = (B) => B,
        _ = new Map();
      let w;
      function M(B, P) {
        return w || (w = v()), w(B, P);
      }
      function A() {
        return w || (w = v()), w.getInitialState();
      }
      function T(B, P = !1) {
        function N(K) {
          let ee = K[B];
          return typeof ee > "u" && P && (ee = A()), ee;
        }
        function F(K = S) {
          const ee = Sv(_, P, () => new WeakMap());
          return Sv(ee, K, () => {
            const Y = {};
            for (const [oe, ye] of Object.entries(o.selectors ?? {}))
              Y[oe] = ZC(ye, K, A, P);
            return Y;
          });
        }
        return {
          reducerPath: B,
          getSelectors: F,
          get selectors() {
            return F(N);
          },
          selectSlice: N,
        };
      }
      const L = {
        name: c,
        reducer: M,
        actions: m.actionCreators,
        caseReducers: m.sliceCaseReducersByName,
        getInitialState: A,
        ...T(f),
        injectInto(B, { reducerPath: P, ...N } = {}) {
          const F = P ?? f;
          return (
            B.inject({ reducerPath: F, reducer: M }, N), { ...L, ...T(F, !0) }
          );
        },
      };
      return L;
    };
  }
  function ZC(e, n, a, s) {
    function o(c, ...f) {
      let p = n(c);
      return typeof p > "u" && s && (p = a()), e(p, ...f);
    }
    return (o.unwrapped = e), o;
  }
  var ir = QC();
  function JC() {
    function e(n, a) {
      return { _reducerDefinitionType: "asyncThunk", payloadCreator: n, ...a };
    }
    return (
      (e.withTypes = () => e),
      {
        reducer(n) {
          return Object.assign(
            {
              [n.name](...a) {
                return n(...a);
              },
            }[n.name],
            { _reducerDefinitionType: "reducer" }
          );
        },
        preparedReducer(n, a) {
          return {
            _reducerDefinitionType: "reducerWithPrepare",
            prepare: n,
            reducer: a,
          };
        },
        asyncThunk: e,
      }
    );
  }
  function WC({ type: e, reducerName: n, createNotation: a }, s, o) {
    let c, f;
    if ("reducer" in s) {
      if (a && !t3(s)) throw new Error(er(17));
      (c = s.reducer), (f = s.prepare);
    } else c = s;
    o.addCase(e, c)
      .exposeCaseReducer(n, c)
      .exposeAction(n, f ? Ws(e, f) : Ws(e));
  }
  function e3(e) {
    return e._reducerDefinitionType === "asyncThunk";
  }
  function t3(e) {
    return e._reducerDefinitionType === "reducerWithPrepare";
  }
  function n3({ type: e, reducerName: n }, a, s, o) {
    if (!o) throw new Error(er(18));
    const {
        payloadCreator: c,
        fulfilled: f,
        pending: p,
        rejected: h,
        settled: m,
        options: g,
      } = a,
      v = o(e, c, g);
    s.exposeAction(n, v),
      f && s.addCase(v.fulfilled, f),
      p && s.addCase(v.pending, p),
      h && s.addCase(v.rejected, h),
      m && s.addMatcher(v.settled, m),
      s.exposeCaseReducer(n, {
        fulfilled: f || Bo,
        pending: p || Bo,
        rejected: h || Bo,
        settled: m || Bo,
      });
  }
  function Bo() {}
  function er(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  function B1(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  const { toString: r3 } = Object.prototype,
    { getPrototypeOf: cp } = Object,
    Du = ((e) => (n) => {
      const a = r3.call(n);
      return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Sn = (e) => ((e = e.toLowerCase()), (n) => Du(n) === e),
    Nu = (e) => (n) => typeof n === e,
    { isArray: zi } = Array,
    ul = Nu("undefined");
  function a3(e) {
    return (
      e !== null &&
      !ul(e) &&
      e.constructor !== null &&
      !ul(e.constructor) &&
      Ft(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const U1 = Sn("ArrayBuffer");
  function i3(e) {
    let n;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (n = ArrayBuffer.isView(e))
        : (n = e && e.buffer && U1(e.buffer)),
      n
    );
  }
  const s3 = Nu("string"),
    Ft = Nu("function"),
    L1 = Nu("number"),
    Mu = (e) => e !== null && typeof e == "object",
    l3 = (e) => e === !0 || e === !1,
    Ho = (e) => {
      if (Du(e) !== "object") return !1;
      const n = cp(e);
      return (
        (n === null ||
          n === Object.prototype ||
          Object.getPrototypeOf(n) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    o3 = Sn("Date"),
    u3 = Sn("File"),
    c3 = Sn("Blob"),
    f3 = Sn("FileList"),
    d3 = (e) => Mu(e) && Ft(e.pipe),
    h3 = (e) => {
      let n;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (Ft(e.append) &&
            ((n = Du(e)) === "formdata" ||
              (n === "object" &&
                Ft(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    p3 = Sn("URLSearchParams"),
    [m3, y3, g3, v3] = ["ReadableStream", "Request", "Response", "Headers"].map(
      Sn
    ),
    b3 = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function vl(e, n, { allOwnKeys: a = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let s, o;
    if ((typeof e != "object" && (e = [e]), zi(e)))
      for (s = 0, o = e.length; s < o; s++) n.call(null, e[s], s, e);
    else {
      const c = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
        f = c.length;
      let p;
      for (s = 0; s < f; s++) (p = c[s]), n.call(null, e[p], p, e);
    }
  }
  function k1(e, n) {
    n = n.toLowerCase();
    const a = Object.keys(e);
    let s = a.length,
      o;
    for (; s-- > 0; ) if (((o = a[s]), n === o.toLowerCase())) return o;
    return null;
  }
  const va =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global,
    z1 = (e) => !ul(e) && e !== va;
  function hh() {
    const { caseless: e } = (z1(this) && this) || {},
      n = {},
      a = (s, o) => {
        const c = (e && k1(n, o)) || o;
        Ho(n[c]) && Ho(s)
          ? (n[c] = hh(n[c], s))
          : Ho(s)
          ? (n[c] = hh({}, s))
          : zi(s)
          ? (n[c] = s.slice())
          : (n[c] = s);
      };
    for (let s = 0, o = arguments.length; s < o; s++)
      arguments[s] && vl(arguments[s], a);
    return n;
  }
  const S3 = (e, n, a, { allOwnKeys: s } = {}) => (
      vl(
        n,
        (o, c) => {
          a && Ft(o) ? (e[c] = B1(o, a)) : (e[c] = o);
        },
        { allOwnKeys: s }
      ),
      e
    ),
    E3 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    w3 = (e, n, a, s) => {
      (e.prototype = Object.create(n.prototype, s)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: n.prototype }),
        a && Object.assign(e.prototype, a);
    },
    x3 = (e, n, a, s) => {
      let o, c, f;
      const p = {};
      if (((n = n || {}), e == null)) return n;
      do {
        for (o = Object.getOwnPropertyNames(e), c = o.length; c-- > 0; )
          (f = o[c]),
            (!s || s(f, e, n)) && !p[f] && ((n[f] = e[f]), (p[f] = !0));
        e = a !== !1 && cp(e);
      } while (e && (!a || a(e, n)) && e !== Object.prototype);
      return n;
    },
    _3 = (e, n, a) => {
      (e = String(e)),
        (a === void 0 || a > e.length) && (a = e.length),
        (a -= n.length);
      const s = e.indexOf(n, a);
      return s !== -1 && s === a;
    },
    T3 = (e) => {
      if (!e) return null;
      if (zi(e)) return e;
      let n = e.length;
      if (!L1(n)) return null;
      const a = new Array(n);
      for (; n-- > 0; ) a[n] = e[n];
      return a;
    },
    A3 = (
      (e) => (n) =>
        e && n instanceof e
    )(typeof Uint8Array < "u" && cp(Uint8Array)),
    O3 = (e, n) => {
      const s = (e && e[Symbol.iterator]).call(e);
      let o;
      for (; (o = s.next()) && !o.done; ) {
        const c = o.value;
        n.call(e, c[0], c[1]);
      }
    },
    R3 = (e, n) => {
      let a;
      const s = [];
      for (; (a = e.exec(n)) !== null; ) s.push(a);
      return s;
    },
    C3 = Sn("HTMLFormElement"),
    D3 = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, s, o) {
        return s.toUpperCase() + o;
      }),
    xv = (
      ({ hasOwnProperty: e }) =>
      (n, a) =>
        e.call(n, a)
    )(Object.prototype),
    N3 = Sn("RegExp"),
    $1 = (e, n) => {
      const a = Object.getOwnPropertyDescriptors(e),
        s = {};
      vl(a, (o, c) => {
        let f;
        (f = n(o, c, e)) !== !1 && (s[c] = f || o);
      }),
        Object.defineProperties(e, s);
    },
    M3 = (e) => {
      $1(e, (n, a) => {
        if (Ft(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
          return !1;
        const s = e[a];
        if (Ft(s)) {
          if (((n.enumerable = !1), "writable" in n)) {
            n.writable = !1;
            return;
          }
          n.set ||
            (n.set = () => {
              throw Error("Can not rewrite read-only method '" + a + "'");
            });
        }
      });
    },
    j3 = (e, n) => {
      const a = {},
        s = (o) => {
          o.forEach((c) => {
            a[c] = !0;
          });
        };
      return zi(e) ? s(e) : s(String(e).split(n)), a;
    },
    B3 = () => {},
    U3 = (e, n) => (e != null && Number.isFinite((e = +e)) ? e : n);
  function L3(e) {
    return !!(
      e &&
      Ft(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const k3 = (e) => {
      const n = new Array(10),
        a = (s, o) => {
          if (Mu(s)) {
            if (n.indexOf(s) >= 0) return;
            if (!("toJSON" in s)) {
              n[o] = s;
              const c = zi(s) ? [] : {};
              return (
                vl(s, (f, p) => {
                  const h = a(f, o + 1);
                  !ul(h) && (c[p] = h);
                }),
                (n[o] = void 0),
                c
              );
            }
          }
          return s;
        };
      return a(e, 0);
    },
    z3 = Sn("AsyncFunction"),
    $3 = (e) => e && (Mu(e) || Ft(e)) && Ft(e.then) && Ft(e.catch),
    q1 = ((e, n) =>
      e
        ? setImmediate
        : n
        ? ((a, s) => (
            va.addEventListener(
              "message",
              ({ source: o, data: c }) => {
                o === va && c === a && s.length && s.shift()();
              },
              !1
            ),
            (o) => {
              s.push(o), va.postMessage(a, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (a) => setTimeout(a))(
      typeof setImmediate == "function",
      Ft(va.postMessage)
    ),
    q3 =
      typeof queueMicrotask < "u"
        ? queueMicrotask.bind(va)
        : (typeof process < "u" && process.nextTick) || q1,
    $ = {
      isArray: zi,
      isArrayBuffer: U1,
      isBuffer: a3,
      isFormData: h3,
      isArrayBufferView: i3,
      isString: s3,
      isNumber: L1,
      isBoolean: l3,
      isObject: Mu,
      isPlainObject: Ho,
      isReadableStream: m3,
      isRequest: y3,
      isResponse: g3,
      isHeaders: v3,
      isUndefined: ul,
      isDate: o3,
      isFile: u3,
      isBlob: c3,
      isRegExp: N3,
      isFunction: Ft,
      isStream: d3,
      isURLSearchParams: p3,
      isTypedArray: A3,
      isFileList: f3,
      forEach: vl,
      merge: hh,
      extend: S3,
      trim: b3,
      stripBOM: E3,
      inherits: w3,
      toFlatObject: x3,
      kindOf: Du,
      kindOfTest: Sn,
      endsWith: _3,
      toArray: T3,
      forEachEntry: O3,
      matchAll: R3,
      isHTMLForm: C3,
      hasOwnProperty: xv,
      hasOwnProp: xv,
      reduceDescriptors: $1,
      freezeMethods: M3,
      toObjectSet: j3,
      toCamelCase: D3,
      noop: B3,
      toFiniteNumber: U3,
      findKey: k1,
      global: va,
      isContextDefined: z1,
      isSpecCompliantForm: L3,
      toJSONObject: k3,
      isAsyncFn: z3,
      isThenable: $3,
      setImmediate: q1,
      asap: q3,
    };
  function de(e, n, a, s, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      n && (this.code = n),
      a && (this.config = a),
      s && (this.request = s),
      o && ((this.response = o), (this.status = o.status ? o.status : null));
  }
  $.inherits(de, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: $.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const H1 = de.prototype,
    F1 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    F1[e] = { value: e };
  });
  Object.defineProperties(de, F1);
  Object.defineProperty(H1, "isAxiosError", { value: !0 });
  de.from = (e, n, a, s, o, c) => {
    const f = Object.create(H1);
    return (
      $.toFlatObject(
        e,
        f,
        function (h) {
          return h !== Error.prototype;
        },
        (p) => p !== "isAxiosError"
      ),
      de.call(f, e.message, n, a, s, o),
      (f.cause = e),
      (f.name = e.name),
      c && Object.assign(f, c),
      f
    );
  };
  const H3 = null;
  function ph(e) {
    return $.isPlainObject(e) || $.isArray(e);
  }
  function V1(e) {
    return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function _v(e, n, a) {
    return e
      ? e
          .concat(n)
          .map(function (o, c) {
            return (o = V1(o)), !a && c ? "[" + o + "]" : o;
          })
          .join(a ? "." : "")
      : n;
  }
  function F3(e) {
    return $.isArray(e) && !e.some(ph);
  }
  const V3 = $.toFlatObject($, {}, null, function (n) {
    return /^is[A-Z]/.test(n);
  });
  function ju(e, n, a) {
    if (!$.isObject(e)) throw new TypeError("target must be an object");
    (n = n || new FormData()),
      (a = $.toFlatObject(
        a,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (M, A) {
          return !$.isUndefined(A[M]);
        }
      ));
    const s = a.metaTokens,
      o = a.visitor || g,
      c = a.dots,
      f = a.indexes,
      h = (a.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(n);
    if (!$.isFunction(o)) throw new TypeError("visitor must be a function");
    function m(w) {
      if (w === null) return "";
      if ($.isDate(w)) return w.toISOString();
      if (!h && $.isBlob(w))
        throw new de("Blob is not supported. Use a Buffer instead.");
      return $.isArrayBuffer(w) || $.isTypedArray(w)
        ? h && typeof Blob == "function"
          ? new Blob([w])
          : Buffer.from(w)
        : w;
    }
    function g(w, M, A) {
      let T = w;
      if (w && !A && typeof w == "object") {
        if ($.endsWith(M, "{}"))
          (M = s ? M : M.slice(0, -2)), (w = JSON.stringify(w));
        else if (
          ($.isArray(w) && F3(w)) ||
          (($.isFileList(w) || $.endsWith(M, "[]")) && (T = $.toArray(w)))
        )
          return (
            (M = V1(M)),
            T.forEach(function (B, P) {
              !($.isUndefined(B) || B === null) &&
                n.append(
                  f === !0 ? _v([M], P, c) : f === null ? M : M + "[]",
                  m(B)
                );
            }),
            !1
          );
      }
      return ph(w) ? !0 : (n.append(_v(A, M, c), m(w)), !1);
    }
    const v = [],
      S = Object.assign(V3, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: ph,
      });
    function _(w, M) {
      if (!$.isUndefined(w)) {
        if (v.indexOf(w) !== -1)
          throw Error("Circular reference detected in " + M.join("."));
        v.push(w),
          $.forEach(w, function (T, L) {
            (!($.isUndefined(T) || T === null) &&
              o.call(n, T, $.isString(L) ? L.trim() : L, M, S)) === !0 &&
              _(T, M ? M.concat(L) : [L]);
          }),
          v.pop();
      }
    }
    if (!$.isObject(e)) throw new TypeError("data must be an object");
    return _(e), n;
  }
  function Tv(e) {
    const n = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
      return n[s];
    });
  }
  function fp(e, n) {
    (this._pairs = []), e && ju(e, this, n);
  }
  const I1 = fp.prototype;
  I1.append = function (n, a) {
    this._pairs.push([n, a]);
  };
  I1.toString = function (n) {
    const a = n
      ? function (s) {
          return n.call(this, s, Tv);
        }
      : Tv;
    return this._pairs
      .map(function (o) {
        return a(o[0]) + "=" + a(o[1]);
      }, "")
      .join("&");
  };
  function I3(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function G1(e, n, a) {
    if (!n) return e;
    const s = (a && a.encode) || I3;
    $.isFunction(a) && (a = { serialize: a });
    const o = a && a.serialize;
    let c;
    if (
      (o
        ? (c = o(n, a))
        : (c = $.isURLSearchParams(n)
            ? n.toString()
            : new fp(n, a).toString(s)),
      c)
    ) {
      const f = e.indexOf("#");
      f !== -1 && (e = e.slice(0, f)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + c);
    }
    return e;
  }
  class Av {
    constructor() {
      this.handlers = [];
    }
    use(n, a, s) {
      return (
        this.handlers.push({
          fulfilled: n,
          rejected: a,
          synchronous: s ? s.synchronous : !1,
          runWhen: s ? s.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(n) {
      this.handlers[n] && (this.handlers[n] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(n) {
      $.forEach(this.handlers, function (s) {
        s !== null && n(s);
      });
    }
  }
  const P1 = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    G3 = typeof URLSearchParams < "u" ? URLSearchParams : fp,
    P3 = typeof FormData < "u" ? FormData : null,
    Y3 = typeof Blob < "u" ? Blob : null,
    K3 = {
      isBrowser: !0,
      classes: { URLSearchParams: G3, FormData: P3, Blob: Y3 },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    dp = typeof window < "u" && typeof document < "u",
    mh = (typeof navigator == "object" && navigator) || void 0,
    X3 =
      dp &&
      (!mh || ["ReactNative", "NativeScript", "NS"].indexOf(mh.product) < 0),
    Q3 =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    Z3 = (dp && window.location.href) || "http://localhost",
    J3 = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          hasBrowserEnv: dp,
          hasStandardBrowserEnv: X3,
          hasStandardBrowserWebWorkerEnv: Q3,
          navigator: mh,
          origin: Z3,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Et = { ...J3, ...K3 };
  function W3(e, n) {
    return ju(
      e,
      new Et.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (a, s, o, c) {
            return Et.isNode && $.isBuffer(a)
              ? (this.append(s, a.toString("base64")), !1)
              : c.defaultVisitor.apply(this, arguments);
          },
        },
        n
      )
    );
  }
  function eD(e) {
    return $.matchAll(/\w+|\[(\w*)]/g, e).map((n) =>
      n[0] === "[]" ? "" : n[1] || n[0]
    );
  }
  function tD(e) {
    const n = {},
      a = Object.keys(e);
    let s;
    const o = a.length;
    let c;
    for (s = 0; s < o; s++) (c = a[s]), (n[c] = e[c]);
    return n;
  }
  function Y1(e) {
    function n(a, s, o, c) {
      let f = a[c++];
      if (f === "__proto__") return !0;
      const p = Number.isFinite(+f),
        h = c >= a.length;
      return (
        (f = !f && $.isArray(o) ? o.length : f),
        h
          ? ($.hasOwnProp(o, f) ? (o[f] = [o[f], s]) : (o[f] = s), !p)
          : ((!o[f] || !$.isObject(o[f])) && (o[f] = []),
            n(a, s, o[f], c) && $.isArray(o[f]) && (o[f] = tD(o[f])),
            !p)
      );
    }
    if ($.isFormData(e) && $.isFunction(e.entries)) {
      const a = {};
      return (
        $.forEachEntry(e, (s, o) => {
          n(eD(s), o, a, 0);
        }),
        a
      );
    }
    return null;
  }
  function nD(e, n, a) {
    if ($.isString(e))
      try {
        return (n || JSON.parse)(e), $.trim(e);
      } catch (s) {
        if (s.name !== "SyntaxError") throw s;
      }
    return (a || JSON.stringify)(e);
  }
  const bl = {
    transitional: P1,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (n, a) {
        const s = a.getContentType() || "",
          o = s.indexOf("application/json") > -1,
          c = $.isObject(n);
        if ((c && $.isHTMLForm(n) && (n = new FormData(n)), $.isFormData(n)))
          return o ? JSON.stringify(Y1(n)) : n;
        if (
          $.isArrayBuffer(n) ||
          $.isBuffer(n) ||
          $.isStream(n) ||
          $.isFile(n) ||
          $.isBlob(n) ||
          $.isReadableStream(n)
        )
          return n;
        if ($.isArrayBufferView(n)) return n.buffer;
        if ($.isURLSearchParams(n))
          return (
            a.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            n.toString()
          );
        let p;
        if (c) {
          if (s.indexOf("application/x-www-form-urlencoded") > -1)
            return W3(n, this.formSerializer).toString();
          if ((p = $.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
            const h = this.env && this.env.FormData;
            return ju(
              p ? { "files[]": n } : n,
              h && new h(),
              this.formSerializer
            );
          }
        }
        return c || o ? (a.setContentType("application/json", !1), nD(n)) : n;
      },
    ],
    transformResponse: [
      function (n) {
        const a = this.transitional || bl.transitional,
          s = a && a.forcedJSONParsing,
          o = this.responseType === "json";
        if ($.isResponse(n) || $.isReadableStream(n)) return n;
        if (n && $.isString(n) && ((s && !this.responseType) || o)) {
          const f = !(a && a.silentJSONParsing) && o;
          try {
            return JSON.parse(n);
          } catch (p) {
            if (f)
              throw p.name === "SyntaxError"
                ? de.from(p, de.ERR_BAD_RESPONSE, this, null, this.response)
                : p;
          }
        }
        return n;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Et.classes.FormData, Blob: Et.classes.Blob },
    validateStatus: function (n) {
      return n >= 200 && n < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  $.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    bl.headers[e] = {};
  });
  const rD = $.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    aD = (e) => {
      const n = {};
      let a, s, o;
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (f) {
              (o = f.indexOf(":")),
                (a = f.substring(0, o).trim().toLowerCase()),
                (s = f.substring(o + 1).trim()),
                !(!a || (n[a] && rD[a])) &&
                  (a === "set-cookie"
                    ? n[a]
                      ? n[a].push(s)
                      : (n[a] = [s])
                    : (n[a] = n[a] ? n[a] + ", " + s : s));
            }),
        n
      );
    },
    Ov = Symbol("internals");
  function Ps(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Fo(e) {
    return e === !1 || e == null ? e : $.isArray(e) ? e.map(Fo) : String(e);
  }
  function iD(e) {
    const n = Object.create(null),
      a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; (s = a.exec(e)); ) n[s[1]] = s[2];
    return n;
  }
  const sD = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function Td(e, n, a, s, o) {
    if ($.isFunction(s)) return s.call(this, n, a);
    if ((o && (n = a), !!$.isString(n))) {
      if ($.isString(s)) return n.indexOf(s) !== -1;
      if ($.isRegExp(s)) return s.test(n);
    }
  }
  function lD(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (n, a, s) => a.toUpperCase() + s);
  }
  function oD(e, n) {
    const a = $.toCamelCase(" " + n);
    ["get", "set", "has"].forEach((s) => {
      Object.defineProperty(e, s + a, {
        value: function (o, c, f) {
          return this[s].call(this, n, o, c, f);
        },
        configurable: !0,
      });
    });
  }
  let Mt = class {
    constructor(n) {
      n && this.set(n);
    }
    set(n, a, s) {
      const o = this;
      function c(p, h, m) {
        const g = Ps(h);
        if (!g) throw new Error("header name must be a non-empty string");
        const v = $.findKey(o, g);
        (!v || o[v] === void 0 || m === !0 || (m === void 0 && o[v] !== !1)) &&
          (o[v || h] = Fo(p));
      }
      const f = (p, h) => $.forEach(p, (m, g) => c(m, g, h));
      if ($.isPlainObject(n) || n instanceof this.constructor) f(n, a);
      else if ($.isString(n) && (n = n.trim()) && !sD(n)) f(aD(n), a);
      else if ($.isHeaders(n)) for (const [p, h] of n.entries()) c(h, p, s);
      else n != null && c(a, n, s);
      return this;
    }
    get(n, a) {
      if (((n = Ps(n)), n)) {
        const s = $.findKey(this, n);
        if (s) {
          const o = this[s];
          if (!a) return o;
          if (a === !0) return iD(o);
          if ($.isFunction(a)) return a.call(this, o, s);
          if ($.isRegExp(a)) return a.exec(o);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(n, a) {
      if (((n = Ps(n)), n)) {
        const s = $.findKey(this, n);
        return !!(s && this[s] !== void 0 && (!a || Td(this, this[s], s, a)));
      }
      return !1;
    }
    delete(n, a) {
      const s = this;
      let o = !1;
      function c(f) {
        if (((f = Ps(f)), f)) {
          const p = $.findKey(s, f);
          p && (!a || Td(s, s[p], p, a)) && (delete s[p], (o = !0));
        }
      }
      return $.isArray(n) ? n.forEach(c) : c(n), o;
    }
    clear(n) {
      const a = Object.keys(this);
      let s = a.length,
        o = !1;
      for (; s--; ) {
        const c = a[s];
        (!n || Td(this, this[c], c, n, !0)) && (delete this[c], (o = !0));
      }
      return o;
    }
    normalize(n) {
      const a = this,
        s = {};
      return (
        $.forEach(this, (o, c) => {
          const f = $.findKey(s, c);
          if (f) {
            (a[f] = Fo(o)), delete a[c];
            return;
          }
          const p = n ? lD(c) : String(c).trim();
          p !== c && delete a[c], (a[p] = Fo(o)), (s[p] = !0);
        }),
        this
      );
    }
    concat(...n) {
      return this.constructor.concat(this, ...n);
    }
    toJSON(n) {
      const a = Object.create(null);
      return (
        $.forEach(this, (s, o) => {
          s != null &&
            s !== !1 &&
            (a[o] = n && $.isArray(s) ? s.join(", ") : s);
        }),
        a
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([n, a]) => n + ": " + a).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(n) {
      return n instanceof this ? n : new this(n);
    }
    static concat(n, ...a) {
      const s = new this(n);
      return a.forEach((o) => s.set(o)), s;
    }
    static accessor(n) {
      const s = (this[Ov] = this[Ov] = { accessors: {} }).accessors,
        o = this.prototype;
      function c(f) {
        const p = Ps(f);
        s[p] || (oD(o, f), (s[p] = !0));
      }
      return $.isArray(n) ? n.forEach(c) : c(n), this;
    }
  };
  Mt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  $.reduceDescriptors(Mt.prototype, ({ value: e }, n) => {
    let a = n[0].toUpperCase() + n.slice(1);
    return {
      get: () => e,
      set(s) {
        this[a] = s;
      },
    };
  });
  $.freezeMethods(Mt);
  function Ad(e, n) {
    const a = this || bl,
      s = n || a,
      o = Mt.from(s.headers);
    let c = s.data;
    return (
      $.forEach(e, function (p) {
        c = p.call(a, c, o.normalize(), n ? n.status : void 0);
      }),
      o.normalize(),
      c
    );
  }
  function K1(e) {
    return !!(e && e.__CANCEL__);
  }
  function $i(e, n, a) {
    de.call(this, e ?? "canceled", de.ERR_CANCELED, n, a),
      (this.name = "CanceledError");
  }
  $.inherits($i, de, { __CANCEL__: !0 });
  function X1(e, n, a) {
    const s = a.config.validateStatus;
    !a.status || !s || s(a.status)
      ? e(a)
      : n(
          new de(
            "Request failed with status code " + a.status,
            [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][
              Math.floor(a.status / 100) - 4
            ],
            a.config,
            a.request,
            a
          )
        );
  }
  function uD(e) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (n && n[1]) || "";
  }
  function cD(e, n) {
    e = e || 10;
    const a = new Array(e),
      s = new Array(e);
    let o = 0,
      c = 0,
      f;
    return (
      (n = n !== void 0 ? n : 1e3),
      function (h) {
        const m = Date.now(),
          g = s[c];
        f || (f = m), (a[o] = h), (s[o] = m);
        let v = c,
          S = 0;
        for (; v !== o; ) (S += a[v++]), (v = v % e);
        if (((o = (o + 1) % e), o === c && (c = (c + 1) % e), m - f < n))
          return;
        const _ = g && m - g;
        return _ ? Math.round((S * 1e3) / _) : void 0;
      }
    );
  }
  function fD(e, n) {
    let a = 0,
      s = 1e3 / n,
      o,
      c;
    const f = (m, g = Date.now()) => {
      (a = g), (o = null), c && (clearTimeout(c), (c = null)), e.apply(null, m);
    };
    return [
      (...m) => {
        const g = Date.now(),
          v = g - a;
        v >= s
          ? f(m, g)
          : ((o = m),
            c ||
              (c = setTimeout(() => {
                (c = null), f(o);
              }, s - v)));
      },
      () => o && f(o),
    ];
  }
  const cu = (e, n, a = 3) => {
      let s = 0;
      const o = cD(50, 250);
      return fD((c) => {
        const f = c.loaded,
          p = c.lengthComputable ? c.total : void 0,
          h = f - s,
          m = o(h),
          g = f <= p;
        s = f;
        const v = {
          loaded: f,
          total: p,
          progress: p ? f / p : void 0,
          bytes: h,
          rate: m || void 0,
          estimated: m && p && g ? (p - f) / m : void 0,
          event: c,
          lengthComputable: p != null,
          [n ? "download" : "upload"]: !0,
        };
        e(v);
      }, a);
    },
    Rv = (e, n) => {
      const a = e != null;
      return [(s) => n[0]({ lengthComputable: a, total: e, loaded: s }), n[1]];
    },
    Cv =
      (e) =>
      (...n) =>
        $.asap(() => e(...n)),
    dD = Et.hasStandardBrowserEnv
      ? ((e, n) => (a) => (
          (a = new URL(a, Et.origin)),
          e.protocol === a.protocol &&
            e.host === a.host &&
            (n || e.port === a.port)
        ))(
          new URL(Et.origin),
          Et.navigator && /(msie|trident)/i.test(Et.navigator.userAgent)
        )
      : () => !0,
    hD = Et.hasStandardBrowserEnv
      ? {
          write(e, n, a, s, o, c) {
            const f = [e + "=" + encodeURIComponent(n)];
            $.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()),
              $.isString(s) && f.push("path=" + s),
              $.isString(o) && f.push("domain=" + o),
              c === !0 && f.push("secure"),
              (document.cookie = f.join("; "));
          },
          read(e) {
            const n = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return n ? decodeURIComponent(n[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function pD(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function mD(e, n) {
    return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
  }
  function Q1(e, n, a) {
    let s = !pD(n);
    return (e && s) || a == !1 ? mD(e, n) : n;
  }
  const Dv = (e) => (e instanceof Mt ? { ...e } : e);
  function Ra(e, n) {
    n = n || {};
    const a = {};
    function s(m, g, v, S) {
      return $.isPlainObject(m) && $.isPlainObject(g)
        ? $.merge.call({ caseless: S }, m, g)
        : $.isPlainObject(g)
        ? $.merge({}, g)
        : $.isArray(g)
        ? g.slice()
        : g;
    }
    function o(m, g, v, S) {
      if ($.isUndefined(g)) {
        if (!$.isUndefined(m)) return s(void 0, m, v, S);
      } else return s(m, g, v, S);
    }
    function c(m, g) {
      if (!$.isUndefined(g)) return s(void 0, g);
    }
    function f(m, g) {
      if ($.isUndefined(g)) {
        if (!$.isUndefined(m)) return s(void 0, m);
      } else return s(void 0, g);
    }
    function p(m, g, v) {
      if (v in n) return s(m, g);
      if (v in e) return s(void 0, m);
    }
    const h = {
      url: c,
      method: c,
      data: c,
      baseURL: f,
      transformRequest: f,
      transformResponse: f,
      paramsSerializer: f,
      timeout: f,
      timeoutMessage: f,
      withCredentials: f,
      withXSRFToken: f,
      adapter: f,
      responseType: f,
      xsrfCookieName: f,
      xsrfHeaderName: f,
      onUploadProgress: f,
      onDownloadProgress: f,
      decompress: f,
      maxContentLength: f,
      maxBodyLength: f,
      beforeRedirect: f,
      transport: f,
      httpAgent: f,
      httpsAgent: f,
      cancelToken: f,
      socketPath: f,
      responseEncoding: f,
      validateStatus: p,
      headers: (m, g, v) => o(Dv(m), Dv(g), v, !0),
    };
    return (
      $.forEach(Object.keys(Object.assign({}, e, n)), function (g) {
        const v = h[g] || o,
          S = v(e[g], n[g], g);
        ($.isUndefined(S) && v !== p) || (a[g] = S);
      }),
      a
    );
  }
  const Z1 = (e) => {
      const n = Ra({}, e);
      let {
        data: a,
        withXSRFToken: s,
        xsrfHeaderName: o,
        xsrfCookieName: c,
        headers: f,
        auth: p,
      } = n;
      (n.headers = f = Mt.from(f)),
        (n.url = G1(Q1(n.baseURL, n.url), e.params, e.paramsSerializer)),
        p &&
          f.set(
            "Authorization",
            "Basic " +
              btoa(
                (p.username || "") +
                  ":" +
                  (p.password ? unescape(encodeURIComponent(p.password)) : "")
              )
          );
      let h;
      if ($.isFormData(a)) {
        if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
          f.setContentType(void 0);
        else if ((h = f.getContentType()) !== !1) {
          const [m, ...g] = h
            ? h
                .split(";")
                .map((v) => v.trim())
                .filter(Boolean)
            : [];
          f.setContentType([m || "multipart/form-data", ...g].join("; "));
        }
      }
      if (
        Et.hasStandardBrowserEnv &&
        (s && $.isFunction(s) && (s = s(n)), s || (s !== !1 && dD(n.url)))
      ) {
        const m = o && c && hD.read(c);
        m && f.set(o, m);
      }
      return n;
    },
    yD = typeof XMLHttpRequest < "u",
    gD =
      yD &&
      function (e) {
        return new Promise(function (a, s) {
          const o = Z1(e);
          let c = o.data;
          const f = Mt.from(o.headers).normalize();
          let {
              responseType: p,
              onUploadProgress: h,
              onDownloadProgress: m,
            } = o,
            g,
            v,
            S,
            _,
            w;
          function M() {
            _ && _(),
              w && w(),
              o.cancelToken && o.cancelToken.unsubscribe(g),
              o.signal && o.signal.removeEventListener("abort", g);
          }
          let A = new XMLHttpRequest();
          A.open(o.method.toUpperCase(), o.url, !0), (A.timeout = o.timeout);
          function T() {
            if (!A) return;
            const B = Mt.from(
                "getAllResponseHeaders" in A && A.getAllResponseHeaders()
              ),
              N = {
                data:
                  !p || p === "text" || p === "json"
                    ? A.responseText
                    : A.response,
                status: A.status,
                statusText: A.statusText,
                headers: B,
                config: e,
                request: A,
              };
            X1(
              function (K) {
                a(K), M();
              },
              function (K) {
                s(K), M();
              },
              N
            ),
              (A = null);
          }
          "onloadend" in A
            ? (A.onloadend = T)
            : (A.onreadystatechange = function () {
                !A ||
                  A.readyState !== 4 ||
                  (A.status === 0 &&
                    !(A.responseURL && A.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(T);
              }),
            (A.onabort = function () {
              A &&
                (s(new de("Request aborted", de.ECONNABORTED, e, A)),
                (A = null));
            }),
            (A.onerror = function () {
              s(new de("Network Error", de.ERR_NETWORK, e, A)), (A = null);
            }),
            (A.ontimeout = function () {
              let P = o.timeout
                ? "timeout of " + o.timeout + "ms exceeded"
                : "timeout exceeded";
              const N = o.transitional || P1;
              o.timeoutErrorMessage && (P = o.timeoutErrorMessage),
                s(
                  new de(
                    P,
                    N.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
                    e,
                    A
                  )
                ),
                (A = null);
            }),
            c === void 0 && f.setContentType(null),
            "setRequestHeader" in A &&
              $.forEach(f.toJSON(), function (P, N) {
                A.setRequestHeader(N, P);
              }),
            $.isUndefined(o.withCredentials) ||
              (A.withCredentials = !!o.withCredentials),
            p && p !== "json" && (A.responseType = o.responseType),
            m && (([S, w] = cu(m, !0)), A.addEventListener("progress", S)),
            h &&
              A.upload &&
              (([v, _] = cu(h)),
              A.upload.addEventListener("progress", v),
              A.upload.addEventListener("loadend", _)),
            (o.cancelToken || o.signal) &&
              ((g = (B) => {
                A &&
                  (s(!B || B.type ? new $i(null, e, A) : B),
                  A.abort(),
                  (A = null));
              }),
              o.cancelToken && o.cancelToken.subscribe(g),
              o.signal &&
                (o.signal.aborted
                  ? g()
                  : o.signal.addEventListener("abort", g)));
          const L = uD(o.url);
          if (L && Et.protocols.indexOf(L) === -1) {
            s(new de("Unsupported protocol " + L + ":", de.ERR_BAD_REQUEST, e));
            return;
          }
          A.send(c || null);
        });
      },
    vD = (e, n) => {
      const { length: a } = (e = e ? e.filter(Boolean) : []);
      if (n || a) {
        let s = new AbortController(),
          o;
        const c = function (m) {
          if (!o) {
            (o = !0), p();
            const g = m instanceof Error ? m : this.reason;
            s.abort(
              g instanceof de ? g : new $i(g instanceof Error ? g.message : g)
            );
          }
        };
        let f =
          n &&
          setTimeout(() => {
            (f = null), c(new de(`timeout ${n} of ms exceeded`, de.ETIMEDOUT));
          }, n);
        const p = () => {
          e &&
            (f && clearTimeout(f),
            (f = null),
            e.forEach((m) => {
              m.unsubscribe
                ? m.unsubscribe(c)
                : m.removeEventListener("abort", c);
            }),
            (e = null));
        };
        e.forEach((m) => m.addEventListener("abort", c));
        const { signal: h } = s;
        return (h.unsubscribe = () => $.asap(p)), h;
      }
    },
    bD = function* (e, n) {
      let a = e.byteLength;
      if (a < n) {
        yield e;
        return;
      }
      let s = 0,
        o;
      for (; s < a; ) (o = s + n), yield e.slice(s, o), (s = o);
    },
    SD = async function* (e, n) {
      for await (const a of ED(e)) yield* bD(a, n);
    },
    ED = async function* (e) {
      if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
      }
      const n = e.getReader();
      try {
        for (;;) {
          const { done: a, value: s } = await n.read();
          if (a) break;
          yield s;
        }
      } finally {
        await n.cancel();
      }
    },
    Nv = (e, n, a, s) => {
      const o = SD(e, n);
      let c = 0,
        f,
        p = (h) => {
          f || ((f = !0), s && s(h));
        };
      return new ReadableStream(
        {
          async pull(h) {
            try {
              const { done: m, value: g } = await o.next();
              if (m) {
                p(), h.close();
                return;
              }
              let v = g.byteLength;
              if (a) {
                let S = (c += v);
                a(S);
              }
              h.enqueue(new Uint8Array(g));
            } catch (m) {
              throw (p(m), m);
            }
          },
          cancel(h) {
            return p(h), o.return();
          },
        },
        { highWaterMark: 2 }
      );
    },
    Bu =
      typeof fetch == "function" &&
      typeof Request == "function" &&
      typeof Response == "function",
    J1 = Bu && typeof ReadableStream == "function",
    wD =
      Bu &&
      (typeof TextEncoder == "function"
        ? (
            (e) => (n) =>
              e.encode(n)
          )(new TextEncoder())
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    W1 = (e, ...n) => {
      try {
        return !!e(...n);
      } catch {
        return !1;
      }
    },
    xD =
      J1 &&
      W1(() => {
        let e = !1;
        const n = new Request(Et.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !n;
      }),
    Mv = 64 * 1024,
    yh = J1 && W1(() => $.isReadableStream(new Response("").body)),
    fu = { stream: yh && ((e) => e.body) };
  Bu &&
    ((e) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
        !fu[n] &&
          (fu[n] = $.isFunction(e[n])
            ? (a) => a[n]()
            : (a, s) => {
                throw new de(
                  `Response type '${n}' is not supported`,
                  de.ERR_NOT_SUPPORT,
                  s
                );
              });
      });
    })(new Response());
  const _D = async (e) => {
      if (e == null) return 0;
      if ($.isBlob(e)) return e.size;
      if ($.isSpecCompliantForm(e))
        return (
          await new Request(Et.origin, {
            method: "POST",
            body: e,
          }).arrayBuffer()
        ).byteLength;
      if ($.isArrayBufferView(e) || $.isArrayBuffer(e)) return e.byteLength;
      if (($.isURLSearchParams(e) && (e = e + ""), $.isString(e)))
        return (await wD(e)).byteLength;
    },
    TD = async (e, n) => {
      const a = $.toFiniteNumber(e.getContentLength());
      return a ?? _D(n);
    },
    AD =
      Bu &&
      (async (e) => {
        let {
          url: n,
          method: a,
          data: s,
          signal: o,
          cancelToken: c,
          timeout: f,
          onDownloadProgress: p,
          onUploadProgress: h,
          responseType: m,
          headers: g,
          withCredentials: v = "same-origin",
          fetchOptions: S,
        } = Z1(e);
        m = m ? (m + "").toLowerCase() : "text";
        let _ = vD([o, c && c.toAbortSignal()], f),
          w;
        const M =
          _ &&
          _.unsubscribe &&
          (() => {
            _.unsubscribe();
          });
        let A;
        try {
          if (
            h &&
            xD &&
            a !== "get" &&
            a !== "head" &&
            (A = await TD(g, s)) !== 0
          ) {
            let N = new Request(n, { method: "POST", body: s, duplex: "half" }),
              F;
            if (
              ($.isFormData(s) &&
                (F = N.headers.get("content-type")) &&
                g.setContentType(F),
              N.body)
            ) {
              const [K, ee] = Rv(A, cu(Cv(h)));
              s = Nv(N.body, Mv, K, ee);
            }
          }
          $.isString(v) || (v = v ? "include" : "omit");
          const T = "credentials" in Request.prototype;
          w = new Request(n, {
            ...S,
            signal: _,
            method: a.toUpperCase(),
            headers: g.normalize().toJSON(),
            body: s,
            duplex: "half",
            credentials: T ? v : void 0,
          });
          let L = await fetch(w);
          const B = yh && (m === "stream" || m === "response");
          if (yh && (p || (B && M))) {
            const N = {};
            ["status", "statusText", "headers"].forEach((Y) => {
              N[Y] = L[Y];
            });
            const F = $.toFiniteNumber(L.headers.get("content-length")),
              [K, ee] = (p && Rv(F, cu(Cv(p), !0))) || [];
            L = new Response(
              Nv(L.body, Mv, K, () => {
                ee && ee(), M && M();
              }),
              N
            );
          }
          m = m || "text";
          let P = await fu[$.findKey(fu, m) || "text"](L, e);
          return (
            !B && M && M(),
            await new Promise((N, F) => {
              X1(N, F, {
                data: P,
                headers: Mt.from(L.headers),
                status: L.status,
                statusText: L.statusText,
                config: e,
                request: w,
              });
            })
          );
        } catch (T) {
          throw (
            (M && M(),
            T && T.name === "TypeError" && /fetch/i.test(T.message)
              ? Object.assign(new de("Network Error", de.ERR_NETWORK, e, w), {
                  cause: T.cause || T,
                })
              : de.from(T, T && T.code, e, w))
          );
        }
      }),
    gh = { http: H3, xhr: gD, fetch: AD };
  $.forEach(gh, (e, n) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: n });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: n });
    }
  });
  const jv = (e) => `- ${e}`,
    OD = (e) => $.isFunction(e) || e === null || e === !1,
    eS = {
      getAdapter: (e) => {
        e = $.isArray(e) ? e : [e];
        const { length: n } = e;
        let a, s;
        const o = {};
        for (let c = 0; c < n; c++) {
          a = e[c];
          let f;
          if (
            ((s = a),
            !OD(a) && ((s = gh[(f = String(a)).toLowerCase()]), s === void 0))
          )
            throw new de(`Unknown adapter '${f}'`);
          if (s) break;
          o[f || "#" + c] = s;
        }
        if (!s) {
          const c = Object.entries(o).map(
            ([p, h]) =>
              `adapter ${p} ` +
              (h === !1
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          let f = n
            ? c.length > 1
              ? `since :
` +
                c.map(jv).join(`
`)
              : " " + jv(c[0])
            : "as no adapter specified";
          throw new de(
            "There is no suitable adapter to dispatch the request " + f,
            "ERR_NOT_SUPPORT"
          );
        }
        return s;
      },
      adapters: gh,
    };
  function Od(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new $i(null, e);
  }
  function Bv(e) {
    return (
      Od(e),
      (e.headers = Mt.from(e.headers)),
      (e.data = Ad.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      eS
        .getAdapter(e.adapter || bl.adapter)(e)
        .then(
          function (s) {
            return (
              Od(e),
              (s.data = Ad.call(e, e.transformResponse, s)),
              (s.headers = Mt.from(s.headers)),
              s
            );
          },
          function (s) {
            return (
              K1(s) ||
                (Od(e),
                s &&
                  s.response &&
                  ((s.response.data = Ad.call(
                    e,
                    e.transformResponse,
                    s.response
                  )),
                  (s.response.headers = Mt.from(s.response.headers)))),
              Promise.reject(s)
            );
          }
        )
    );
  }
  const tS = "1.8.1",
    Uu = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, n) => {
      Uu[e] = function (s) {
        return typeof s === e || "a" + (n < 1 ? "n " : " ") + e;
      };
    }
  );
  const Uv = {};
  Uu.transitional = function (n, a, s) {
    function o(c, f) {
      return (
        "[Axios v" +
        tS +
        "] Transitional option '" +
        c +
        "'" +
        f +
        (s ? ". " + s : "")
      );
    }
    return (c, f, p) => {
      if (n === !1)
        throw new de(
          o(f, " has been removed" + (a ? " in " + a : "")),
          de.ERR_DEPRECATED
        );
      return (
        a &&
          !Uv[f] &&
          ((Uv[f] = !0),
          console.warn(
            o(
              f,
              " has been deprecated since v" +
                a +
                " and will be removed in the near future"
            )
          )),
        n ? n(c, f, p) : !0
      );
    };
  };
  Uu.spelling = function (n) {
    return (a, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
  };
  function RD(e, n, a) {
    if (typeof e != "object")
      throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let o = s.length;
    for (; o-- > 0; ) {
      const c = s[o],
        f = n[c];
      if (f) {
        const p = e[c],
          h = p === void 0 || f(p, c, e);
        if (h !== !0)
          throw new de(
            "option " + c + " must be " + h,
            de.ERR_BAD_OPTION_VALUE
          );
        continue;
      }
      if (a !== !0) throw new de("Unknown option " + c, de.ERR_BAD_OPTION);
    }
  }
  const Vo = { assertOptions: RD, validators: Uu },
    An = Vo.validators;
  let Ea = class {
    constructor(n) {
      (this.defaults = n),
        (this.interceptors = { request: new Av(), response: new Av() });
    }
    async request(n, a) {
      try {
        return await this._request(n, a);
      } catch (s) {
        if (s instanceof Error) {
          let o = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(o)
            : (o = new Error());
          const c = o.stack ? o.stack.replace(/^.+\n/, "") : "";
          try {
            s.stack
              ? c &&
                !String(s.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
                (s.stack +=
                  `
` + c)
              : (s.stack = c);
          } catch {}
        }
        throw s;
      }
    }
    _request(n, a) {
      typeof n == "string" ? ((a = a || {}), (a.url = n)) : (a = n || {}),
        (a = Ra(this.defaults, a));
      const { transitional: s, paramsSerializer: o, headers: c } = a;
      s !== void 0 &&
        Vo.assertOptions(
          s,
          {
            silentJSONParsing: An.transitional(An.boolean),
            forcedJSONParsing: An.transitional(An.boolean),
            clarifyTimeoutError: An.transitional(An.boolean),
          },
          !1
        ),
        o != null &&
          ($.isFunction(o)
            ? (a.paramsSerializer = { serialize: o })
            : Vo.assertOptions(
                o,
                { encode: An.function, serialize: An.function },
                !0
              )),
        a.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls !== void 0
            ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (a.allowAbsoluteUrls = !0)),
        Vo.assertOptions(
          a,
          {
            baseUrl: An.spelling("baseURL"),
            withXsrfToken: An.spelling("withXSRFToken"),
          },
          !0
        ),
        (a.method = (a.method || this.defaults.method || "get").toLowerCase());
      let f = c && $.merge(c.common, c[a.method]);
      c &&
        $.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (w) => {
            delete c[w];
          }
        ),
        (a.headers = Mt.concat(f, c));
      const p = [];
      let h = !0;
      this.interceptors.request.forEach(function (M) {
        (typeof M.runWhen == "function" && M.runWhen(a) === !1) ||
          ((h = h && M.synchronous), p.unshift(M.fulfilled, M.rejected));
      });
      const m = [];
      this.interceptors.response.forEach(function (M) {
        m.push(M.fulfilled, M.rejected);
      });
      let g,
        v = 0,
        S;
      if (!h) {
        const w = [Bv.bind(this), void 0];
        for (
          w.unshift.apply(w, p),
            w.push.apply(w, m),
            S = w.length,
            g = Promise.resolve(a);
          v < S;

        )
          g = g.then(w[v++], w[v++]);
        return g;
      }
      S = p.length;
      let _ = a;
      for (v = 0; v < S; ) {
        const w = p[v++],
          M = p[v++];
        try {
          _ = w(_);
        } catch (A) {
          M.call(this, A);
          break;
        }
      }
      try {
        g = Bv.call(this, _);
      } catch (w) {
        return Promise.reject(w);
      }
      for (v = 0, S = m.length; v < S; ) g = g.then(m[v++], m[v++]);
      return g;
    }
    getUri(n) {
      n = Ra(this.defaults, n);
      const a = Q1(n.baseURL, n.url, n.allowAbsoluteUrls);
      return G1(a, n.params, n.paramsSerializer);
    }
  };
  $.forEach(["delete", "get", "head", "options"], function (n) {
    Ea.prototype[n] = function (a, s) {
      return this.request(
        Ra(s || {}, { method: n, url: a, data: (s || {}).data })
      );
    };
  });
  $.forEach(["post", "put", "patch"], function (n) {
    function a(s) {
      return function (c, f, p) {
        return this.request(
          Ra(p || {}, {
            method: n,
            headers: s ? { "Content-Type": "multipart/form-data" } : {},
            url: c,
            data: f,
          })
        );
      };
    }
    (Ea.prototype[n] = a()), (Ea.prototype[n + "Form"] = a(!0));
  });
  let CD = class nS {
    constructor(n) {
      if (typeof n != "function")
        throw new TypeError("executor must be a function.");
      let a;
      this.promise = new Promise(function (c) {
        a = c;
      });
      const s = this;
      this.promise.then((o) => {
        if (!s._listeners) return;
        let c = s._listeners.length;
        for (; c-- > 0; ) s._listeners[c](o);
        s._listeners = null;
      }),
        (this.promise.then = (o) => {
          let c;
          const f = new Promise((p) => {
            s.subscribe(p), (c = p);
          }).then(o);
          return (
            (f.cancel = function () {
              s.unsubscribe(c);
            }),
            f
          );
        }),
        n(function (c, f, p) {
          s.reason || ((s.reason = new $i(c, f, p)), a(s.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(n) {
      if (this.reason) {
        n(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
    }
    unsubscribe(n) {
      if (!this._listeners) return;
      const a = this._listeners.indexOf(n);
      a !== -1 && this._listeners.splice(a, 1);
    }
    toAbortSignal() {
      const n = new AbortController(),
        a = (s) => {
          n.abort(s);
        };
      return (
        this.subscribe(a),
        (n.signal.unsubscribe = () => this.unsubscribe(a)),
        n.signal
      );
    }
    static source() {
      let n;
      return {
        token: new nS(function (o) {
          n = o;
        }),
        cancel: n,
      };
    }
  };
  function DD(e) {
    return function (a) {
      return e.apply(null, a);
    };
  }
  function ND(e) {
    return $.isObject(e) && e.isAxiosError === !0;
  }
  const vh = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(vh).forEach(([e, n]) => {
    vh[n] = e;
  });
  function rS(e) {
    const n = new Ea(e),
      a = B1(Ea.prototype.request, n);
    return (
      $.extend(a, Ea.prototype, n, { allOwnKeys: !0 }),
      $.extend(a, n, null, { allOwnKeys: !0 }),
      (a.create = function (o) {
        return rS(Ra(e, o));
      }),
      a
    );
  }
  const _e = rS(bl);
  _e.Axios = Ea;
  _e.CanceledError = $i;
  _e.CancelToken = CD;
  _e.isCancel = K1;
  _e.VERSION = tS;
  _e.toFormData = ju;
  _e.AxiosError = de;
  _e.Cancel = _e.CanceledError;
  _e.all = function (n) {
    return Promise.all(n);
  };
  _e.spread = DD;
  _e.isAxiosError = ND;
  _e.mergeConfig = Ra;
  _e.AxiosHeaders = Mt;
  _e.formToJSON = (e) => Y1($.isHTMLForm(e) ? new FormData(e) : e);
  _e.getAdapter = eS.getAdapter;
  _e.HttpStatusCode = vh;
  _e.default = _e;
  const {
      Axios: m8,
      AxiosError: y8,
      CanceledError: g8,
      isCancel: v8,
      CancelToken: b8,
      VERSION: S8,
      all: E8,
      Cancel: w8,
      isAxiosError: x8,
      spread: _8,
      toFormData: T8,
      AxiosHeaders: A8,
      HttpStatusCode: O8,
      formToJSON: R8,
      getAdapter: C8,
      mergeConfig: D8,
    } = _e,
    MD = "http://localhost:1322/api",
    Io = Gt(
      "userRegister",
      async ({ firstName: e, lastName: n, email: a, phone: s }) => {
        try {
          return (
            await _e.post(`${MD}/user/register`, {
              firstName: e,
              lastName: n,
              email: a,
              phone: s,
            })
          ).data;
        } catch (o) {
          console.error("Error in user registration", o);
        }
      }
    ),
    jD = { loading: !1, data: null, error: null },
    aS = ir({
      name: "registration",
      initialState: jD,
      reducers: {
        resetRegisterState: (e) => {
          e.data = null;
        },
      },
      extraReducers: (e) => {
        e.addCase(Io.pending, (n) => {
          n.loading = !1;
        })
          .addCase(Io.fulfilled, (n, a) => {
            (n.loading = !1), (n.data = a.payload);
          })
          .addCase(Io.rejected, (n, a) => {
            (n.loading = !1), (n.error = a.error.message);
          });
      },
    }),
    { resetRegisterState: BD } = aS.actions,
    UD = aS.reducer;
  var Rd, Lv;
  function LD() {
    if (Lv) return Rd;
    Lv = 1;
    function e(T) {
      (this._maxSize = T), this.clear();
    }
    (e.prototype.clear = function () {
      (this._size = 0), (this._values = Object.create(null));
    }),
      (e.prototype.get = function (T) {
        return this._values[T];
      }),
      (e.prototype.set = function (T, L) {
        return (
          this._size >= this._maxSize && this.clear(),
          T in this._values || this._size++,
          (this._values[T] = L)
        );
      });
    var n = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
      a = /^\d+$/,
      s = /^\d/,
      o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
      c = /^\s*(['"]?)(.*?)(\1)\s*$/,
      f = 512,
      p = new e(f),
      h = new e(f),
      m = new e(f);
    Rd = {
      Cache: e,
      split: v,
      normalizePath: g,
      setter: function (T) {
        var L = g(T);
        return (
          h.get(T) ||
          h.set(T, function (P, N) {
            for (var F = 0, K = L.length, ee = P; F < K - 1; ) {
              var Y = L[F];
              if (Y === "__proto__" || Y === "constructor" || Y === "prototype")
                return P;
              ee = ee[L[F++]];
            }
            ee[L[F]] = N;
          })
        );
      },
      getter: function (T, L) {
        var B = g(T);
        return (
          m.get(T) ||
          m.set(T, function (N) {
            for (var F = 0, K = B.length; F < K; )
              if (N != null || !L) N = N[B[F++]];
              else return;
            return N;
          })
        );
      },
      join: function (T) {
        return T.reduce(function (L, B) {
          return L + (_(B) || a.test(B) ? "[" + B + "]" : (L ? "." : "") + B);
        }, "");
      },
      forEach: function (T, L, B) {
        S(Array.isArray(T) ? T : v(T), L, B);
      },
    };
    function g(T) {
      return (
        p.get(T) ||
        p.set(
          T,
          v(T).map(function (L) {
            return L.replace(c, "$2");
          })
        )
      );
    }
    function v(T) {
      return T.match(n) || [""];
    }
    function S(T, L, B) {
      var P = T.length,
        N,
        F,
        K,
        ee;
      for (F = 0; F < P; F++)
        (N = T[F]),
          N &&
            (A(N) && (N = '"' + N + '"'),
            (ee = _(N)),
            (K = !ee && /^\d+$/.test(N)),
            L.call(B, N, ee, K, F, T));
    }
    function _(T) {
      return (
        typeof T == "string" && T && ["'", '"'].indexOf(T.charAt(0)) !== -1
      );
    }
    function w(T) {
      return T.match(s) && !T.match(a);
    }
    function M(T) {
      return o.test(T);
    }
    function A(T) {
      return !_(T) && (w(T) || M(T));
    }
    return Rd;
  }
  var wa = LD(),
    Cd,
    kv;
  function kD() {
    if (kv) return Cd;
    kv = 1;
    const e =
        /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
      n = (g) => g.match(e) || [],
      a = (g) => g[0].toUpperCase() + g.slice(1),
      s = (g, v) => n(g).join(v).toLowerCase(),
      o = (g) =>
        n(g).reduce(
          (v, S) =>
            `${v}${
              v
                ? S[0].toUpperCase() + S.slice(1).toLowerCase()
                : S.toLowerCase()
            }`,
          ""
        );
    return (
      (Cd = {
        words: n,
        upperFirst: a,
        camelCase: o,
        pascalCase: (g) => a(o(g)),
        snakeCase: (g) => s(g, "_"),
        kebabCase: (g) => s(g, "-"),
        sentenceCase: (g) => a(s(g, " ")),
        titleCase: (g) => n(g).map(a).join(" "),
      }),
      Cd
    );
  }
  var Dd = kD(),
    Uo = { exports: {} },
    zv;
  function zD() {
    if (zv) return Uo.exports;
    (zv = 1),
      (Uo.exports = function (o) {
        return e(n(o), o);
      }),
      (Uo.exports.array = e);
    function e(o, c) {
      var f = o.length,
        p = new Array(f),
        h = {},
        m = f,
        g = a(c),
        v = s(o);
      for (
        c.forEach(function (_) {
          if (!v.has(_[0]) || !v.has(_[1]))
            throw new Error(
              "Unknown node. There is an unknown node in the supplied edges."
            );
        });
        m--;

      )
        h[m] || S(o[m], m, new Set());
      return p;
      function S(_, w, M) {
        if (M.has(_)) {
          var A;
          try {
            A = ", node was:" + JSON.stringify(_);
          } catch {
            A = "";
          }
          throw new Error("Cyclic dependency" + A);
        }
        if (!v.has(_))
          throw new Error(
            "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
              JSON.stringify(_)
          );
        if (!h[w]) {
          h[w] = !0;
          var T = g.get(_) || new Set();
          if (((T = Array.from(T)), (w = T.length))) {
            M.add(_);
            do {
              var L = T[--w];
              S(L, v.get(L), M);
            } while (w);
            M.delete(_);
          }
          p[--f] = _;
        }
      }
    }
    function n(o) {
      for (var c = new Set(), f = 0, p = o.length; f < p; f++) {
        var h = o[f];
        c.add(h[0]), c.add(h[1]);
      }
      return Array.from(c);
    }
    function a(o) {
      for (var c = new Map(), f = 0, p = o.length; f < p; f++) {
        var h = o[f];
        c.has(h[0]) || c.set(h[0], new Set()),
          c.has(h[1]) || c.set(h[1], new Set()),
          c.get(h[0]).add(h[1]);
      }
      return c;
    }
    function s(o) {
      for (var c = new Map(), f = 0, p = o.length; f < p; f++) c.set(o[f], f);
      return c;
    }
    return Uo.exports;
  }
  var $D = zD();
  const qD = Vh($D),
    HD = Object.prototype.toString,
    FD = Error.prototype.toString,
    VD = RegExp.prototype.toString,
    ID = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
    GD = /^Symbol\((.*)\)(.*)$/;
  function PD(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function $v(e, n = !1) {
    if (e == null || e === !0 || e === !1) return "" + e;
    const a = typeof e;
    if (a === "number") return PD(e);
    if (a === "string") return n ? `"${e}"` : e;
    if (a === "function") return "[Function " + (e.name || "anonymous") + "]";
    if (a === "symbol") return ID.call(e).replace(GD, "Symbol($1)");
    const s = HD.call(e).slice(8, -1);
    return s === "Date"
      ? isNaN(e.getTime())
        ? "" + e
        : e.toISOString(e)
      : s === "Error" || e instanceof Error
      ? "[" + FD.call(e) + "]"
      : s === "RegExp"
      ? VD.call(e)
      : null;
  }
  function Mr(e, n) {
    let a = $v(e, n);
    return a !== null
      ? a
      : JSON.stringify(
          e,
          function (s, o) {
            let c = $v(this[s], n);
            return c !== null ? c : o;
          },
          2
        );
  }
  function iS(e) {
    return e == null ? [] : [].concat(e);
  }
  let sS,
    lS,
    oS,
    YD = /\$\{\s*(\w+)\s*\}/g;
  sS = Symbol.toStringTag;
  class qv {
    constructor(n, a, s, o) {
      (this.name = void 0),
        (this.message = void 0),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.params = void 0),
        (this.errors = void 0),
        (this.inner = void 0),
        (this[sS] = "Error"),
        (this.name = "ValidationError"),
        (this.value = a),
        (this.path = s),
        (this.type = o),
        (this.errors = []),
        (this.inner = []),
        iS(n).forEach((c) => {
          if (Nt.isError(c)) {
            this.errors.push(...c.errors);
            const f = c.inner.length ? c.inner : [c];
            this.inner.push(...f);
          } else this.errors.push(c);
        }),
        (this.message =
          this.errors.length > 1
            ? `${this.errors.length} errors occurred`
            : this.errors[0]);
    }
  }
  lS = Symbol.hasInstance;
  oS = Symbol.toStringTag;
  class Nt extends Error {
    static formatError(n, a) {
      const s = a.label || a.path || "this";
      return (
        (a = Object.assign({}, a, { path: s, originalPath: a.path })),
        typeof n == "string"
          ? n.replace(YD, (o, c) => Mr(a[c]))
          : typeof n == "function"
          ? n(a)
          : n
      );
    }
    static isError(n) {
      return n && n.name === "ValidationError";
    }
    constructor(n, a, s, o, c) {
      const f = new qv(n, a, s, o);
      if (c) return f;
      super(),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.params = void 0),
        (this.errors = []),
        (this.inner = []),
        (this[oS] = "Error"),
        (this.name = f.name),
        (this.message = f.message),
        (this.type = f.type),
        (this.value = f.value),
        (this.path = f.path),
        (this.errors = f.errors),
        (this.inner = f.inner),
        Error.captureStackTrace && Error.captureStackTrace(this, Nt);
    }
    static [lS](n) {
      return qv[Symbol.hasInstance](n) || super[Symbol.hasInstance](n);
    }
  }
  let On = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      defined: "${path} must be defined",
      notNull: "${path} cannot be null",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({ path: e, type: n, value: a, originalValue: s }) => {
        const o =
          s != null && s !== a
            ? ` (cast from the value \`${Mr(s, !0)}\`).`
            : ".";
        return n !== "mixed"
          ? `${e} must be a \`${n}\` type, but the final value was: \`${Mr(
              a,
              !0
            )}\`` + o
          : `${e} must match the configured type. The validated value was: \`${Mr(
              a,
              !0
            )}\`` + o;
      },
    },
    Dt = {
      length: "${path} must be exactly ${length} characters",
      min: "${path} must be at least ${min} characters",
      max: "${path} must be at most ${max} characters",
      matches: '${path} must match the following: "${regex}"',
      email: "${path} must be a valid email",
      url: "${path} must be a valid URL",
      uuid: "${path} must be a valid UUID",
      datetime: "${path} must be a valid ISO date-time",
      datetime_precision:
        "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
      datetime_offset:
        '${path} must be a valid ISO date-time with UTC "Z" timezone',
      trim: "${path} must be a trimmed string",
      lowercase: "${path} must be a lowercase string",
      uppercase: "${path} must be a upper case string",
    },
    Nr = {
      min: "${path} must be greater than or equal to ${min}",
      max: "${path} must be less than or equal to ${max}",
      lessThan: "${path} must be less than ${less}",
      moreThan: "${path} must be greater than ${more}",
      positive: "${path} must be a positive number",
      negative: "${path} must be a negative number",
      integer: "${path} must be an integer",
    },
    bh = {
      min: "${path} field must be later than ${min}",
      max: "${path} field must be at earlier than ${max}",
    },
    KD = { isValue: "${path} field must be ${value}" },
    Go = {
      noUnknown: "${path} field has unspecified keys: ${unknown}",
      exact: "${path} object contains unknown properties: ${properties}",
    },
    XD = {
      min: "${path} field must have at least ${min} items",
      max: "${path} field must have less than or equal to ${max} items",
      length: "${path} must have ${length} items",
    },
    QD = {
      notType: (e) => {
        const { path: n, value: a, spec: s } = e,
          o = s.types.length;
        if (Array.isArray(a)) {
          if (a.length < o)
            return `${n} tuple value has too few items, expected a length of ${o} but got ${
              a.length
            } for value: \`${Mr(a, !0)}\``;
          if (a.length > o)
            return `${n} tuple value has too many items, expected a length of ${o} but got ${
              a.length
            } for value: \`${Mr(a, !0)}\``;
        }
        return Nt.formatError(On.notType, e);
      },
    };
  Object.assign(Object.create(null), {
    mixed: On,
    string: Dt,
    number: Nr,
    date: bh,
    object: Go,
    array: XD,
    boolean: KD,
    tuple: QD,
  });
  const hp = (e) => e && e.__isYupSchema__;
  class du {
    static fromOptions(n, a) {
      if (!a.then && !a.otherwise)
        throw new TypeError(
          "either `then:` or `otherwise:` is required for `when()` conditions"
        );
      let { is: s, then: o, otherwise: c } = a,
        f = typeof s == "function" ? s : (...p) => p.every((h) => h === s);
      return new du(n, (p, h) => {
        var m;
        let g = f(...p) ? o : c;
        return (m = g == null ? void 0 : g(h)) != null ? m : h;
      });
    }
    constructor(n, a) {
      (this.fn = void 0), (this.refs = n), (this.refs = n), (this.fn = a);
    }
    resolve(n, a) {
      let s = this.refs.map((c) =>
          c.getValue(
            a == null ? void 0 : a.value,
            a == null ? void 0 : a.parent,
            a == null ? void 0 : a.context
          )
        ),
        o = this.fn(s, n, a);
      if (o === void 0 || o === n) return n;
      if (!hp(o)) throw new TypeError("conditions must return a schema object");
      return o.resolve(a);
    }
  }
  const Lo = { context: "$", value: "." };
  class La {
    constructor(n, a = {}) {
      if (
        ((this.key = void 0),
        (this.isContext = void 0),
        (this.isValue = void 0),
        (this.isSibling = void 0),
        (this.path = void 0),
        (this.getter = void 0),
        (this.map = void 0),
        typeof n != "string")
      )
        throw new TypeError("ref must be a string, got: " + n);
      if (((this.key = n.trim()), n === ""))
        throw new TypeError("ref must be a non-empty string");
      (this.isContext = this.key[0] === Lo.context),
        (this.isValue = this.key[0] === Lo.value),
        (this.isSibling = !this.isContext && !this.isValue);
      let s = this.isContext ? Lo.context : this.isValue ? Lo.value : "";
      (this.path = this.key.slice(s.length)),
        (this.getter = this.path && wa.getter(this.path, !0)),
        (this.map = a.map);
    }
    getValue(n, a, s) {
      let o = this.isContext ? s : this.isValue ? n : a;
      return (
        this.getter && (o = this.getter(o || {})),
        this.map && (o = this.map(o)),
        o
      );
    }
    cast(n, a) {
      return this.getValue(
        n,
        a == null ? void 0 : a.parent,
        a == null ? void 0 : a.context
      );
    }
    resolve() {
      return this;
    }
    describe() {
      return { type: "ref", key: this.key };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(n) {
      return n && n.__isYupRef;
    }
  }
  La.prototype.__isYupRef = !0;
  const Jn = (e) => e == null;
  function wi(e) {
    function n(
      { value: a, path: s = "", options: o, originalValue: c, schema: f },
      p,
      h
    ) {
      const { name: m, test: g, params: v, message: S, skipAbsent: _ } = e;
      let {
        parent: w,
        context: M,
        abortEarly: A = f.spec.abortEarly,
        disableStackTrace: T = f.spec.disableStackTrace,
      } = o;
      function L(ye) {
        return La.isRef(ye) ? ye.getValue(a, w, M) : ye;
      }
      function B(ye = {}) {
        const et = Object.assign(
          {
            value: a,
            originalValue: c,
            label: f.spec.label,
            path: ye.path || s,
            spec: f.spec,
            disableStackTrace: ye.disableStackTrace || T,
          },
          v,
          ye.params
        );
        for (const at of Object.keys(et)) et[at] = L(et[at]);
        const ze = new Nt(
          Nt.formatError(ye.message || S, et),
          a,
          et.path,
          ye.type || m,
          et.disableStackTrace
        );
        return (ze.params = et), ze;
      }
      const P = A ? p : h;
      let N = {
        path: s,
        parent: w,
        type: m,
        from: o.from,
        createError: B,
        resolve: L,
        options: o,
        originalValue: c,
        schema: f,
      };
      const F = (ye) => {
          Nt.isError(ye) ? P(ye) : ye ? h(null) : P(B());
        },
        K = (ye) => {
          Nt.isError(ye) ? P(ye) : p(ye);
        };
      if (_ && Jn(a)) return F(!0);
      let Y;
      try {
        var oe;
        if (
          ((Y = g.call(N, a, N)),
          typeof ((oe = Y) == null ? void 0 : oe.then) == "function")
        ) {
          if (o.sync)
            throw new Error(
              `Validation test of type: "${N.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
            );
          return Promise.resolve(Y).then(F, K);
        }
      } catch (ye) {
        K(ye);
        return;
      }
      F(Y);
    }
    return (n.OPTIONS = e), n;
  }
  function ZD(e, n, a, s = a) {
    let o, c, f;
    return n
      ? (wa.forEach(n, (p, h, m) => {
          let g = h ? p.slice(1, p.length - 1) : p;
          e = e.resolve({ context: s, parent: o, value: a });
          let v = e.type === "tuple",
            S = m ? parseInt(g, 10) : 0;
          if (e.innerType || v) {
            if (v && !m)
              throw new Error(
                `Yup.reach cannot implicitly index into a tuple type. the path part "${f}" must contain an index to the tuple element, e.g. "${f}[0]"`
              );
            if (a && S >= a.length)
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${p}, in the path: ${n}. because there is no value at that index. `
              );
            (o = a), (a = a && a[S]), (e = v ? e.spec.types[S] : e.innerType);
          }
          if (!m) {
            if (!e.fields || !e.fields[g])
              throw new Error(
                `The schema does not contain the path: ${n}. (failed at: ${f} which is a type: "${e.type}")`
              );
            (o = a), (a = a && a[g]), (e = e.fields[g]);
          }
          (c = g), (f = h ? "[" + p + "]" : "." + p);
        }),
        { schema: e, parent: o, parentPath: c })
      : { parent: o, parentPath: n, schema: e };
  }
  class hu extends Set {
    describe() {
      const n = [];
      for (const a of this.values()) n.push(La.isRef(a) ? a.describe() : a);
      return n;
    }
    resolveAll(n) {
      let a = [];
      for (const s of this.values()) a.push(n(s));
      return a;
    }
    clone() {
      return new hu(this.values());
    }
    merge(n, a) {
      const s = this.clone();
      return n.forEach((o) => s.add(o)), a.forEach((o) => s.delete(o)), s;
    }
  }
  function _i(e, n = new Map()) {
    if (hp(e) || !e || typeof e != "object") return e;
    if (n.has(e)) return n.get(e);
    let a;
    if (e instanceof Date) (a = new Date(e.getTime())), n.set(e, a);
    else if (e instanceof RegExp) (a = new RegExp(e)), n.set(e, a);
    else if (Array.isArray(e)) {
      (a = new Array(e.length)), n.set(e, a);
      for (let s = 0; s < e.length; s++) a[s] = _i(e[s], n);
    } else if (e instanceof Map) {
      (a = new Map()), n.set(e, a);
      for (const [s, o] of e.entries()) a.set(s, _i(o, n));
    } else if (e instanceof Set) {
      (a = new Set()), n.set(e, a);
      for (const s of e) a.add(_i(s, n));
    } else if (e instanceof Object) {
      (a = {}), n.set(e, a);
      for (const [s, o] of Object.entries(e)) a[s] = _i(o, n);
    } else throw Error(`Unable to clone ${e}`);
    return a;
  }
  class vn {
    constructor(n) {
      (this.type = void 0),
        (this.deps = []),
        (this.tests = void 0),
        (this.transforms = void 0),
        (this.conditions = []),
        (this._mutate = void 0),
        (this.internalTests = {}),
        (this._whitelist = new hu()),
        (this._blacklist = new hu()),
        (this.exclusiveTests = Object.create(null)),
        (this._typeCheck = void 0),
        (this.spec = void 0),
        (this.tests = []),
        (this.transforms = []),
        this.withMutation(() => {
          this.typeError(On.notType);
        }),
        (this.type = n.type),
        (this._typeCheck = n.check),
        (this.spec = Object.assign(
          {
            strip: !1,
            strict: !1,
            abortEarly: !0,
            recursive: !0,
            disableStackTrace: !1,
            nullable: !1,
            optional: !0,
            coerce: !0,
          },
          n == null ? void 0 : n.spec
        )),
        this.withMutation((a) => {
          a.nonNullable();
        });
    }
    get _type() {
      return this.type;
    }
    clone(n) {
      if (this._mutate) return n && Object.assign(this.spec, n), this;
      const a = Object.create(Object.getPrototypeOf(this));
      return (
        (a.type = this.type),
        (a._typeCheck = this._typeCheck),
        (a._whitelist = this._whitelist.clone()),
        (a._blacklist = this._blacklist.clone()),
        (a.internalTests = Object.assign({}, this.internalTests)),
        (a.exclusiveTests = Object.assign({}, this.exclusiveTests)),
        (a.deps = [...this.deps]),
        (a.conditions = [...this.conditions]),
        (a.tests = [...this.tests]),
        (a.transforms = [...this.transforms]),
        (a.spec = _i(Object.assign({}, this.spec, n))),
        a
      );
    }
    label(n) {
      let a = this.clone();
      return (a.spec.label = n), a;
    }
    meta(...n) {
      if (n.length === 0) return this.spec.meta;
      let a = this.clone();
      return (a.spec.meta = Object.assign(a.spec.meta || {}, n[0])), a;
    }
    withMutation(n) {
      let a = this._mutate;
      this._mutate = !0;
      let s = n(this);
      return (this._mutate = a), s;
    }
    concat(n) {
      if (!n || n === this) return this;
      if (n.type !== this.type && this.type !== "mixed")
        throw new TypeError(
          `You cannot \`concat()\` schema's of different types: ${this.type} and ${n.type}`
        );
      let a = this,
        s = n.clone();
      const o = Object.assign({}, a.spec, s.spec);
      return (
        (s.spec = o),
        (s.internalTests = Object.assign({}, a.internalTests, s.internalTests)),
        (s._whitelist = a._whitelist.merge(n._whitelist, n._blacklist)),
        (s._blacklist = a._blacklist.merge(n._blacklist, n._whitelist)),
        (s.tests = a.tests),
        (s.exclusiveTests = a.exclusiveTests),
        s.withMutation((c) => {
          n.tests.forEach((f) => {
            c.test(f.OPTIONS);
          });
        }),
        (s.transforms = [...a.transforms, ...s.transforms]),
        s
      );
    }
    isType(n) {
      return n == null
        ? !!(
            (this.spec.nullable && n === null) ||
            (this.spec.optional && n === void 0)
          )
        : this._typeCheck(n);
    }
    resolve(n) {
      let a = this;
      if (a.conditions.length) {
        let s = a.conditions;
        (a = a.clone()),
          (a.conditions = []),
          (a = s.reduce((o, c) => c.resolve(o, n), a)),
          (a = a.resolve(n));
      }
      return a;
    }
    resolveOptions(n) {
      var a, s, o, c;
      return Object.assign({}, n, {
        from: n.from || [],
        strict: (a = n.strict) != null ? a : this.spec.strict,
        abortEarly: (s = n.abortEarly) != null ? s : this.spec.abortEarly,
        recursive: (o = n.recursive) != null ? o : this.spec.recursive,
        disableStackTrace:
          (c = n.disableStackTrace) != null ? c : this.spec.disableStackTrace,
      });
    }
    cast(n, a = {}) {
      let s = this.resolve(Object.assign({ value: n }, a)),
        o = a.assert === "ignore-optionality",
        c = s._cast(n, a);
      if (a.assert !== !1 && !s.isType(c)) {
        if (o && Jn(c)) return c;
        let f = Mr(n),
          p = Mr(c);
        throw new TypeError(
          `The value of ${
            a.path || "field"
          } could not be cast to a value that satisfies the schema type: "${
            s.type
          }". 

attempted value: ${f} 
` + (p !== f ? `result of cast: ${p}` : "")
        );
      }
      return c;
    }
    _cast(n, a) {
      let s =
        n === void 0
          ? n
          : this.transforms.reduce((o, c) => c.call(this, o, n, this), n);
      return s === void 0 && (s = this.getDefault(a)), s;
    }
    _validate(n, a = {}, s, o) {
      let { path: c, originalValue: f = n, strict: p = this.spec.strict } = a,
        h = n;
      p || (h = this._cast(h, Object.assign({ assert: !1 }, a)));
      let m = [];
      for (let g of Object.values(this.internalTests)) g && m.push(g);
      this.runTests(
        { path: c, value: h, originalValue: f, options: a, tests: m },
        s,
        (g) => {
          if (g.length) return o(g, h);
          this.runTests(
            {
              path: c,
              value: h,
              originalValue: f,
              options: a,
              tests: this.tests,
            },
            s,
            o
          );
        }
      );
    }
    runTests(n, a, s) {
      let o = !1,
        { tests: c, value: f, originalValue: p, path: h, options: m } = n,
        g = (M) => {
          o || ((o = !0), a(M, f));
        },
        v = (M) => {
          o || ((o = !0), s(M, f));
        },
        S = c.length,
        _ = [];
      if (!S) return v([]);
      let w = { value: f, originalValue: p, path: h, options: m, schema: this };
      for (let M = 0; M < c.length; M++) {
        const A = c[M];
        A(w, g, function (L) {
          L && (Array.isArray(L) ? _.push(...L) : _.push(L)), --S <= 0 && v(_);
        });
      }
    }
    asNestedTest({
      key: n,
      index: a,
      parent: s,
      parentPath: o,
      originalParent: c,
      options: f,
    }) {
      const p = n ?? a;
      if (p == null)
        throw TypeError("Must include `key` or `index` for nested validations");
      const h = typeof p == "number";
      let m = s[p];
      const g = Object.assign({}, f, {
        strict: !0,
        parent: s,
        value: m,
        originalValue: c[p],
        key: void 0,
        [h ? "index" : "key"]: p,
        path:
          h || p.includes(".")
            ? `${o || ""}[${h ? p : `"${p}"`}]`
            : (o ? `${o}.` : "") + n,
      });
      return (v, S, _) => this.resolve(g)._validate(m, g, S, _);
    }
    validate(n, a) {
      var s;
      let o = this.resolve(Object.assign({}, a, { value: n })),
        c =
          (s = a == null ? void 0 : a.disableStackTrace) != null
            ? s
            : o.spec.disableStackTrace;
      return new Promise((f, p) =>
        o._validate(
          n,
          a,
          (h, m) => {
            Nt.isError(h) && (h.value = m), p(h);
          },
          (h, m) => {
            h.length ? p(new Nt(h, m, void 0, void 0, c)) : f(m);
          }
        )
      );
    }
    validateSync(n, a) {
      var s;
      let o = this.resolve(Object.assign({}, a, { value: n })),
        c,
        f =
          (s = a == null ? void 0 : a.disableStackTrace) != null
            ? s
            : o.spec.disableStackTrace;
      return (
        o._validate(
          n,
          Object.assign({}, a, { sync: !0 }),
          (p, h) => {
            throw (Nt.isError(p) && (p.value = h), p);
          },
          (p, h) => {
            if (p.length) throw new Nt(p, n, void 0, void 0, f);
            c = h;
          }
        ),
        c
      );
    }
    isValid(n, a) {
      return this.validate(n, a).then(
        () => !0,
        (s) => {
          if (Nt.isError(s)) return !1;
          throw s;
        }
      );
    }
    isValidSync(n, a) {
      try {
        return this.validateSync(n, a), !0;
      } catch (s) {
        if (Nt.isError(s)) return !1;
        throw s;
      }
    }
    _getDefault(n) {
      let a = this.spec.default;
      return a == null ? a : typeof a == "function" ? a.call(this, n) : _i(a);
    }
    getDefault(n) {
      return this.resolve(n || {})._getDefault(n);
    }
    default(n) {
      return arguments.length === 0
        ? this._getDefault()
        : this.clone({ default: n });
    }
    strict(n = !0) {
      return this.clone({ strict: n });
    }
    nullability(n, a) {
      const s = this.clone({ nullable: n });
      return (
        (s.internalTests.nullable = wi({
          message: a,
          name: "nullable",
          test(o) {
            return o === null ? this.schema.spec.nullable : !0;
          },
        })),
        s
      );
    }
    optionality(n, a) {
      const s = this.clone({ optional: n });
      return (
        (s.internalTests.optionality = wi({
          message: a,
          name: "optionality",
          test(o) {
            return o === void 0 ? this.schema.spec.optional : !0;
          },
        })),
        s
      );
    }
    optional() {
      return this.optionality(!0);
    }
    defined(n = On.defined) {
      return this.optionality(!1, n);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(n = On.notNull) {
      return this.nullability(!1, n);
    }
    required(n = On.required) {
      return this.clone().withMutation((a) => a.nonNullable(n).defined(n));
    }
    notRequired() {
      return this.clone().withMutation((n) => n.nullable().optional());
    }
    transform(n) {
      let a = this.clone();
      return a.transforms.push(n), a;
    }
    test(...n) {
      let a;
      if (
        (n.length === 1
          ? typeof n[0] == "function"
            ? (a = { test: n[0] })
            : (a = n[0])
          : n.length === 2
          ? (a = { name: n[0], test: n[1] })
          : (a = { name: n[0], message: n[1], test: n[2] }),
        a.message === void 0 && (a.message = On.default),
        typeof a.test != "function")
      )
        throw new TypeError("`test` is a required parameters");
      let s = this.clone(),
        o = wi(a),
        c = a.exclusive || (a.name && s.exclusiveTests[a.name] === !0);
      if (a.exclusive && !a.name)
        throw new TypeError(
          "Exclusive tests must provide a unique `name` identifying the test"
        );
      return (
        a.name && (s.exclusiveTests[a.name] = !!a.exclusive),
        (s.tests = s.tests.filter(
          (f) =>
            !(
              f.OPTIONS.name === a.name &&
              (c || f.OPTIONS.test === o.OPTIONS.test)
            )
        )),
        s.tests.push(o),
        s
      );
    }
    when(n, a) {
      !Array.isArray(n) && typeof n != "string" && ((a = n), (n = "."));
      let s = this.clone(),
        o = iS(n).map((c) => new La(c));
      return (
        o.forEach((c) => {
          c.isSibling && s.deps.push(c.key);
        }),
        s.conditions.push(
          typeof a == "function" ? new du(o, a) : du.fromOptions(o, a)
        ),
        s
      );
    }
    typeError(n) {
      let a = this.clone();
      return (
        (a.internalTests.typeError = wi({
          message: n,
          name: "typeError",
          skipAbsent: !0,
          test(s) {
            return this.schema._typeCheck(s)
              ? !0
              : this.createError({ params: { type: this.schema.type } });
          },
        })),
        a
      );
    }
    oneOf(n, a = On.oneOf) {
      let s = this.clone();
      return (
        n.forEach((o) => {
          s._whitelist.add(o), s._blacklist.delete(o);
        }),
        (s.internalTests.whiteList = wi({
          message: a,
          name: "oneOf",
          skipAbsent: !0,
          test(o) {
            let c = this.schema._whitelist,
              f = c.resolveAll(this.resolve);
            return f.includes(o)
              ? !0
              : this.createError({
                  params: { values: Array.from(c).join(", "), resolved: f },
                });
          },
        })),
        s
      );
    }
    notOneOf(n, a = On.notOneOf) {
      let s = this.clone();
      return (
        n.forEach((o) => {
          s._blacklist.add(o), s._whitelist.delete(o);
        }),
        (s.internalTests.blacklist = wi({
          message: a,
          name: "notOneOf",
          test(o) {
            let c = this.schema._blacklist,
              f = c.resolveAll(this.resolve);
            return f.includes(o)
              ? this.createError({
                  params: { values: Array.from(c).join(", "), resolved: f },
                })
              : !0;
          },
        })),
        s
      );
    }
    strip(n = !0) {
      let a = this.clone();
      return (a.spec.strip = n), a;
    }
    describe(n) {
      const a = (n ? this.resolve(n) : this).clone(),
        { label: s, meta: o, optional: c, nullable: f } = a.spec;
      return {
        meta: o,
        label: s,
        optional: c,
        nullable: f,
        default: a.getDefault(n),
        type: a.type,
        oneOf: a._whitelist.describe(),
        notOneOf: a._blacklist.describe(),
        tests: a.tests
          .map((h) => ({ name: h.OPTIONS.name, params: h.OPTIONS.params }))
          .filter((h, m, g) => g.findIndex((v) => v.name === h.name) === m),
      };
    }
  }
  vn.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    vn.prototype[`${e}At`] = function (n, a, s = {}) {
      const { parent: o, parentPath: c, schema: f } = ZD(this, n, a, s.context);
      return f[e](o && o[c], Object.assign({}, s, { parent: o, path: n }));
    };
  for (const e of ["equals", "is"]) vn.prototype[e] = vn.prototype.oneOf;
  for (const e of ["not", "nope"]) vn.prototype[e] = vn.prototype.notOneOf;
  const JD =
    /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function WD(e) {
    const n = Sh(e);
    if (!n) return Date.parse ? Date.parse(e) : Number.NaN;
    if (n.z === void 0 && n.plusMinus === void 0)
      return new Date(
        n.year,
        n.month,
        n.day,
        n.hour,
        n.minute,
        n.second,
        n.millisecond
      ).valueOf();
    let a = 0;
    return (
      n.z !== "Z" &&
        n.plusMinus !== void 0 &&
        ((a = n.hourOffset * 60 + n.minuteOffset),
        n.plusMinus === "+" && (a = 0 - a)),
      Date.UTC(
        n.year,
        n.month,
        n.day,
        n.hour,
        n.minute + a,
        n.second,
        n.millisecond
      )
    );
  }
  function Sh(e) {
    var n, a;
    const s = JD.exec(e);
    return s
      ? {
          year: Kn(s[1]),
          month: Kn(s[2], 1) - 1,
          day: Kn(s[3], 1),
          hour: Kn(s[4]),
          minute: Kn(s[5]),
          second: Kn(s[6]),
          millisecond: s[7] ? Kn(s[7].substring(0, 3)) : 0,
          precision:
            (n = (a = s[7]) == null ? void 0 : a.length) != null ? n : void 0,
          z: s[8] || void 0,
          plusMinus: s[9] || void 0,
          hourOffset: Kn(s[10]),
          minuteOffset: Kn(s[11]),
        }
      : null;
  }
  function Kn(e, n = 0) {
    return Number(e) || n;
  }
  let eN =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    tN =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    nN =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    rN = "^\\d{4}-\\d{2}-\\d{2}",
    aN = "\\d{2}:\\d{2}:\\d{2}",
    iN = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
    sN = new RegExp(`${rN}T${aN}(\\.\\d+)?${iN}$`),
    lN = (e) => Jn(e) || e === e.trim(),
    oN = {}.toString();
  function Ti() {
    return new uS();
  }
  class uS extends vn {
    constructor() {
      super({
        type: "string",
        check(n) {
          return n instanceof String && (n = n.valueOf()), typeof n == "string";
        },
      }),
        this.withMutation(() => {
          this.transform((n, a, s) => {
            if (!s.spec.coerce || s.isType(n) || Array.isArray(n)) return n;
            const o = n != null && n.toString ? n.toString() : n;
            return o === oN ? n : o;
          });
        });
    }
    required(n) {
      return super
        .required(n)
        .withMutation((a) =>
          a.test({
            message: n || On.required,
            name: "required",
            skipAbsent: !0,
            test: (s) => !!s.length,
          })
        );
    }
    notRequired() {
      return super
        .notRequired()
        .withMutation(
          (n) => (
            (n.tests = n.tests.filter((a) => a.OPTIONS.name !== "required")), n
          )
        );
    }
    length(n, a = Dt.length) {
      return this.test({
        message: a,
        name: "length",
        exclusive: !0,
        params: { length: n },
        skipAbsent: !0,
        test(s) {
          return s.length === this.resolve(n);
        },
      });
    }
    min(n, a = Dt.min) {
      return this.test({
        message: a,
        name: "min",
        exclusive: !0,
        params: { min: n },
        skipAbsent: !0,
        test(s) {
          return s.length >= this.resolve(n);
        },
      });
    }
    max(n, a = Dt.max) {
      return this.test({
        name: "max",
        exclusive: !0,
        message: a,
        params: { max: n },
        skipAbsent: !0,
        test(s) {
          return s.length <= this.resolve(n);
        },
      });
    }
    matches(n, a) {
      let s = !1,
        o,
        c;
      return (
        a &&
          (typeof a == "object"
            ? ({ excludeEmptyString: s = !1, message: o, name: c } = a)
            : (o = a)),
        this.test({
          name: c || "matches",
          message: o || Dt.matches,
          params: { regex: n },
          skipAbsent: !0,
          test: (f) => (f === "" && s) || f.search(n) !== -1,
        })
      );
    }
    email(n = Dt.email) {
      return this.matches(eN, {
        name: "email",
        message: n,
        excludeEmptyString: !0,
      });
    }
    url(n = Dt.url) {
      return this.matches(tN, {
        name: "url",
        message: n,
        excludeEmptyString: !0,
      });
    }
    uuid(n = Dt.uuid) {
      return this.matches(nN, {
        name: "uuid",
        message: n,
        excludeEmptyString: !1,
      });
    }
    datetime(n) {
      let a = "",
        s,
        o;
      return (
        n &&
          (typeof n == "object"
            ? ({
                message: a = "",
                allowOffset: s = !1,
                precision: o = void 0,
              } = n)
            : (a = n)),
        this.matches(sN, {
          name: "datetime",
          message: a || Dt.datetime,
          excludeEmptyString: !0,
        })
          .test({
            name: "datetime_offset",
            message: a || Dt.datetime_offset,
            params: { allowOffset: s },
            skipAbsent: !0,
            test: (c) => {
              if (!c || s) return !0;
              const f = Sh(c);
              return f ? !!f.z : !1;
            },
          })
          .test({
            name: "datetime_precision",
            message: a || Dt.datetime_precision,
            params: { precision: o },
            skipAbsent: !0,
            test: (c) => {
              if (!c || o == null) return !0;
              const f = Sh(c);
              return f ? f.precision === o : !1;
            },
          })
      );
    }
    ensure() {
      return this.default("").transform((n) => (n === null ? "" : n));
    }
    trim(n = Dt.trim) {
      return this.transform((a) => (a != null ? a.trim() : a)).test({
        message: n,
        name: "trim",
        test: lN,
      });
    }
    lowercase(n = Dt.lowercase) {
      return this.transform((a) => (Jn(a) ? a : a.toLowerCase())).test({
        message: n,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (a) => Jn(a) || a === a.toLowerCase(),
      });
    }
    uppercase(n = Dt.uppercase) {
      return this.transform((a) => (Jn(a) ? a : a.toUpperCase())).test({
        message: n,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (a) => Jn(a) || a === a.toUpperCase(),
      });
    }
  }
  Ti.prototype = uS.prototype;
  let uN = (e) => e != +e;
  function cS() {
    return new fS();
  }
  class fS extends vn {
    constructor() {
      super({
        type: "number",
        check(n) {
          return (
            n instanceof Number && (n = n.valueOf()),
            typeof n == "number" && !uN(n)
          );
        },
      }),
        this.withMutation(() => {
          this.transform((n, a, s) => {
            if (!s.spec.coerce) return n;
            let o = n;
            if (typeof o == "string") {
              if (((o = o.replace(/\s/g, "")), o === "")) return NaN;
              o = +o;
            }
            return s.isType(o) || o === null ? o : parseFloat(o);
          });
        });
    }
    min(n, a = Nr.min) {
      return this.test({
        message: a,
        name: "min",
        exclusive: !0,
        params: { min: n },
        skipAbsent: !0,
        test(s) {
          return s >= this.resolve(n);
        },
      });
    }
    max(n, a = Nr.max) {
      return this.test({
        message: a,
        name: "max",
        exclusive: !0,
        params: { max: n },
        skipAbsent: !0,
        test(s) {
          return s <= this.resolve(n);
        },
      });
    }
    lessThan(n, a = Nr.lessThan) {
      return this.test({
        message: a,
        name: "max",
        exclusive: !0,
        params: { less: n },
        skipAbsent: !0,
        test(s) {
          return s < this.resolve(n);
        },
      });
    }
    moreThan(n, a = Nr.moreThan) {
      return this.test({
        message: a,
        name: "min",
        exclusive: !0,
        params: { more: n },
        skipAbsent: !0,
        test(s) {
          return s > this.resolve(n);
        },
      });
    }
    positive(n = Nr.positive) {
      return this.moreThan(0, n);
    }
    negative(n = Nr.negative) {
      return this.lessThan(0, n);
    }
    integer(n = Nr.integer) {
      return this.test({
        name: "integer",
        message: n,
        skipAbsent: !0,
        test: (a) => Number.isInteger(a),
      });
    }
    truncate() {
      return this.transform((n) => (Jn(n) ? n : n | 0));
    }
    round(n) {
      var a;
      let s = ["ceil", "floor", "round", "trunc"];
      if (
        ((n = ((a = n) == null ? void 0 : a.toLowerCase()) || "round"),
        n === "trunc")
      )
        return this.truncate();
      if (s.indexOf(n.toLowerCase()) === -1)
        throw new TypeError(
          "Only valid options for round() are: " + s.join(", ")
        );
      return this.transform((o) => (Jn(o) ? o : Math[n](o)));
    }
  }
  cS.prototype = fS.prototype;
  let cN = new Date(""),
    fN = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class pp extends vn {
    constructor() {
      super({
        type: "date",
        check(n) {
          return fN(n) && !isNaN(n.getTime());
        },
      }),
        this.withMutation(() => {
          this.transform((n, a, s) =>
            !s.spec.coerce || s.isType(n) || n === null
              ? n
              : ((n = WD(n)), isNaN(n) ? pp.INVALID_DATE : new Date(n))
          );
        });
    }
    prepareParam(n, a) {
      let s;
      if (La.isRef(n)) s = n;
      else {
        let o = this.cast(n);
        if (!this._typeCheck(o))
          throw new TypeError(
            `\`${a}\` must be a Date or a value that can be \`cast()\` to a Date`
          );
        s = o;
      }
      return s;
    }
    min(n, a = bh.min) {
      let s = this.prepareParam(n, "min");
      return this.test({
        message: a,
        name: "min",
        exclusive: !0,
        params: { min: n },
        skipAbsent: !0,
        test(o) {
          return o >= this.resolve(s);
        },
      });
    }
    max(n, a = bh.max) {
      let s = this.prepareParam(n, "max");
      return this.test({
        message: a,
        name: "max",
        exclusive: !0,
        params: { max: n },
        skipAbsent: !0,
        test(o) {
          return o <= this.resolve(s);
        },
      });
    }
  }
  pp.INVALID_DATE = cN;
  function dN(e, n = []) {
    let a = [],
      s = new Set(),
      o = new Set(n.map(([f, p]) => `${f}-${p}`));
    function c(f, p) {
      let h = wa.split(f)[0];
      s.add(h), o.has(`${p}-${h}`) || a.push([p, h]);
    }
    for (const f of Object.keys(e)) {
      let p = e[f];
      s.add(f),
        La.isRef(p) && p.isSibling
          ? c(p.path, f)
          : hp(p) && "deps" in p && p.deps.forEach((h) => c(h, f));
    }
    return qD.array(Array.from(s), a).reverse();
  }
  function Hv(e, n) {
    let a = 1 / 0;
    return (
      e.some((s, o) => {
        var c;
        if ((c = n.path) != null && c.includes(s)) return (a = o), !0;
      }),
      a
    );
  }
  function dS(e) {
    return (n, a) => Hv(e, n) - Hv(e, a);
  }
  const hN = (e, n, a) => {
    if (typeof e != "string") return e;
    let s = e;
    try {
      s = JSON.parse(e);
    } catch {}
    return a.isType(s) ? s : e;
  };
  function Po(e) {
    if ("fields" in e) {
      const n = {};
      for (const [a, s] of Object.entries(e.fields)) n[a] = Po(s);
      return e.setFields(n);
    }
    if (e.type === "array") {
      const n = e.optional();
      return n.innerType && (n.innerType = Po(n.innerType)), n;
    }
    return e.type === "tuple"
      ? e.optional().clone({ types: e.spec.types.map(Po) })
      : "optional" in e
      ? e.optional()
      : e;
  }
  const pN = (e, n) => {
    const a = [...wa.normalizePath(n)];
    if (a.length === 1) return a[0] in e;
    let s = a.pop(),
      o = wa.getter(wa.join(a), !0)(e);
    return !!(o && s in o);
  };
  let Fv = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function Vv(e, n) {
    let a = Object.keys(e.fields);
    return Object.keys(n).filter((s) => a.indexOf(s) === -1);
  }
  const mN = dS([]);
  function Lu(e) {
    return new hS(e);
  }
  class hS extends vn {
    constructor(n) {
      super({
        type: "object",
        check(a) {
          return Fv(a) || typeof a == "function";
        },
      }),
        (this.fields = Object.create(null)),
        (this._sortErrors = mN),
        (this._nodes = []),
        (this._excludedEdges = []),
        this.withMutation(() => {
          n && this.shape(n);
        });
    }
    _cast(n, a = {}) {
      var s;
      let o = super._cast(n, a);
      if (o === void 0) return this.getDefault(a);
      if (!this._typeCheck(o)) return o;
      let c = this.fields,
        f = (s = a.stripUnknown) != null ? s : this.spec.noUnknown,
        p = [].concat(
          this._nodes,
          Object.keys(o).filter((v) => !this._nodes.includes(v))
        ),
        h = {},
        m = Object.assign({}, a, {
          parent: h,
          __validating: a.__validating || !1,
        }),
        g = !1;
      for (const v of p) {
        let S = c[v],
          _ = v in o;
        if (S) {
          let w,
            M = o[v];
          (m.path = (a.path ? `${a.path}.` : "") + v),
            (S = S.resolve({ value: M, context: a.context, parent: h }));
          let A = S instanceof vn ? S.spec : void 0,
            T = A == null ? void 0 : A.strict;
          if (A != null && A.strip) {
            g = g || v in o;
            continue;
          }
          (w = !a.__validating || !T ? S.cast(o[v], m) : o[v]),
            w !== void 0 && (h[v] = w);
        } else _ && !f && (h[v] = o[v]);
        (_ !== v in h || h[v] !== o[v]) && (g = !0);
      }
      return g ? h : o;
    }
    _validate(n, a = {}, s, o) {
      let {
        from: c = [],
        originalValue: f = n,
        recursive: p = this.spec.recursive,
      } = a;
      (a.from = [{ schema: this, value: f }, ...c]),
        (a.__validating = !0),
        (a.originalValue = f),
        super._validate(n, a, s, (h, m) => {
          if (!p || !Fv(m)) {
            o(h, m);
            return;
          }
          f = f || m;
          let g = [];
          for (let v of this._nodes) {
            let S = this.fields[v];
            !S ||
              La.isRef(S) ||
              g.push(
                S.asNestedTest({
                  options: a,
                  key: v,
                  parent: m,
                  parentPath: a.path,
                  originalParent: f,
                })
              );
          }
          this.runTests(
            { tests: g, value: m, originalValue: f, options: a },
            s,
            (v) => {
              o(v.sort(this._sortErrors).concat(h), m);
            }
          );
        });
    }
    clone(n) {
      const a = super.clone(n);
      return (
        (a.fields = Object.assign({}, this.fields)),
        (a._nodes = this._nodes),
        (a._excludedEdges = this._excludedEdges),
        (a._sortErrors = this._sortErrors),
        a
      );
    }
    concat(n) {
      let a = super.concat(n),
        s = a.fields;
      for (let [o, c] of Object.entries(this.fields)) {
        const f = s[o];
        s[o] = f === void 0 ? c : f;
      }
      return a.withMutation((o) =>
        o.setFields(s, [...this._excludedEdges, ...n._excludedEdges])
      );
    }
    _getDefault(n) {
      if ("default" in this.spec) return super._getDefault(n);
      if (!this._nodes.length) return;
      let a = {};
      return (
        this._nodes.forEach((s) => {
          var o;
          const c = this.fields[s];
          let f = n;
          (o = f) != null &&
            o.value &&
            (f = Object.assign({}, f, { parent: f.value, value: f.value[s] })),
            (a[s] = c && "getDefault" in c ? c.getDefault(f) : void 0);
        }),
        a
      );
    }
    setFields(n, a) {
      let s = this.clone();
      return (
        (s.fields = n),
        (s._nodes = dN(n, a)),
        (s._sortErrors = dS(Object.keys(n))),
        a && (s._excludedEdges = a),
        s
      );
    }
    shape(n, a = []) {
      return this.clone().withMutation((s) => {
        let o = s._excludedEdges;
        return (
          a.length &&
            (Array.isArray(a[0]) || (a = [a]),
            (o = [...s._excludedEdges, ...a])),
          s.setFields(Object.assign(s.fields, n), o)
        );
      });
    }
    partial() {
      const n = {};
      for (const [a, s] of Object.entries(this.fields))
        n[a] =
          "optional" in s && s.optional instanceof Function ? s.optional() : s;
      return this.setFields(n);
    }
    deepPartial() {
      return Po(this);
    }
    pick(n) {
      const a = {};
      for (const s of n) this.fields[s] && (a[s] = this.fields[s]);
      return this.setFields(
        a,
        this._excludedEdges.filter(([s, o]) => n.includes(s) && n.includes(o))
      );
    }
    omit(n) {
      const a = [];
      for (const s of Object.keys(this.fields)) n.includes(s) || a.push(s);
      return this.pick(a);
    }
    from(n, a, s) {
      let o = wa.getter(n, !0);
      return this.transform((c) => {
        if (!c) return c;
        let f = c;
        return (
          pN(c, n) &&
            ((f = Object.assign({}, c)), s || delete f[n], (f[a] = o(c))),
          f
        );
      });
    }
    json() {
      return this.transform(hN);
    }
    exact(n) {
      return this.test({
        name: "exact",
        exclusive: !0,
        message: n || Go.exact,
        test(a) {
          if (a == null) return !0;
          const s = Vv(this.schema, a);
          return (
            s.length === 0 ||
            this.createError({ params: { properties: s.join(", ") } })
          );
        },
      });
    }
    stripUnknown() {
      return this.clone({ noUnknown: !0 });
    }
    noUnknown(n = !0, a = Go.noUnknown) {
      typeof n != "boolean" && ((a = n), (n = !0));
      let s = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: a,
        test(o) {
          if (o == null) return !0;
          const c = Vv(this.schema, o);
          return (
            !n ||
            c.length === 0 ||
            this.createError({ params: { unknown: c.join(", ") } })
          );
        },
      });
      return (s.spec.noUnknown = n), s;
    }
    unknown(n = !0, a = Go.noUnknown) {
      return this.noUnknown(!n, a);
    }
    transformKeys(n) {
      return this.transform((a) => {
        if (!a) return a;
        const s = {};
        for (const o of Object.keys(a)) s[n(o)] = a[o];
        return s;
      });
    }
    camelCase() {
      return this.transformKeys(Dd.camelCase);
    }
    snakeCase() {
      return this.transformKeys(Dd.snakeCase);
    }
    constantCase() {
      return this.transformKeys((n) => Dd.snakeCase(n).toUpperCase());
    }
    describe(n) {
      const a = (n ? this.resolve(n) : this).clone(),
        s = super.describe(n);
      s.fields = {};
      for (const [c, f] of Object.entries(a.fields)) {
        var o;
        let p = n;
        (o = p) != null &&
          o.value &&
          (p = Object.assign({}, p, { parent: p.value, value: p.value[c] })),
          (s.fields[c] = f.describe(p));
      }
      return s;
    }
  }
  Lu.prototype = hS.prototype;
  const yN = Lu().shape({
      firstName: Ti().required("Firstname is required"),
      lastName: Ti().required("LastName is required"),
      email: Ti().email().required("Email is required"),
      phone: Ti().required("Phone number is required"),
    }),
    Ai = ({
      label: e,
      name: n,
      type: a,
      placeholder: s,
      value: o,
      error: c,
      onChange: f,
    }) =>
      E.jsxs("div", {
        className: "mb-2.5 h-full",
        children: [
          e &&
            E.jsx("label", {
              htmlFor: n,
              className: "block text-xl font-medium mb-1 text-zinc-200",
              children: e,
            }),
          E.jsx("input", {
            name: n,
            type: a,
            placeholder: s,
            value: o,
            onChange: f,
            className:
              "text-zinc-200 border-2 border-white rounded-sm text-md p-2 w-full focus:outline-0",
          }),
          E.jsx("p", { className: "text-red-700", children: c }),
        ],
      }),
    mp = ({ type: e, title: n, disabled: a }) =>
      E.jsx("div", {
        className: "text-center",
        children: E.jsx("button", {
          type: e || "submit",
          className: `${
            a
              ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
              : "bg-orange-600  hover:bg-gray-900 cursor-pointer"
          } text-zinc-200 rounded-sm  px-2 py-2 w-full text-md font-medium transition duration-300 ease-in-out`,
          disabled: a,
          children: n,
        }),
      }),
    gN = { value: !1 },
    pS = ir({
      name: "toast",
      initialState: gN,
      reducers: {
        showToast: (e) => {
          e.value = !0;
        },
        closeToast: (e) => {
          e.value = !1;
        },
      },
    }),
    { showToast: yp, closeToast: ku } = pS.actions,
    vN = pS.reducer,
    mS = ({ state: e, errorMessage: n }) => {
      console.log("error state", e);
      const a = xe((s) => {
        var o;
        return (o = s == null ? void 0 : s.toast) == null ? void 0 : o.value;
      });
      return E.jsx("div", {
        className: `${
          a
            ? "absolute top-3 left-1/2 -translate-x-1/2 "
            : "absolute top-[-50px]"
        } bg-red-200 text-red-600 w-fit p-2 rounded-sm font-medium text-md`,
        children: E.jsx("div", { className: "", children: n }),
      });
    },
    bN = () => {
      const e = ft(),
        n = xe((v) => {
          var S;
          return (S = v == null ? void 0 : v.registration) == null
            ? void 0
            : S.loading;
        }),
        a = xe((v) => {
          var S;
          return (S = v == null ? void 0 : v.toast) == null ? void 0 : S.value;
        }),
        s = xe((v) => {
          var S;
          return (S = v == null ? void 0 : v.registration) == null
            ? void 0
            : S.data;
        }),
        o = pl(),
        c = { firstName: "", lastName: "", email: "", phone: "" },
        {
          values: f,
          touched: p,
          errors: h,
          handleChange: m,
          handleSubmit: g,
        } = Tu({
          initialValues: c,
          validationSchema: yN,
          onSubmit: async (v, S) => {
            var w;
            console.log("register value", v);
            const _ = await e(Io(v));
            (w = _ == null ? void 0 : _.payload) != null &&
              w.success &&
              (o("/login", { replace: !0 }), S.resetForm());
          },
        });
      return (
        R.useEffect(() => {
          (s == null ? void 0 : s.success) === !1 &&
            (e(yp()),
            setTimeout(() => {
              e(BD());
            }, 5e3)),
            setTimeout(() => {
              e(ku());
            }, 5e3);
        }, [s, e]),
        E.jsxs(E.Fragment, {
          children: [
            a &&
              E.jsx(mS, {
                state: s == null ? void 0 : s.success,
                errorMessage:
                  (s == null ? void 0 : s.success) === !1
                    ? s == null
                      ? void 0
                      : s.message
                    : "",
              }),
            E.jsx("div", {
              className:
                "bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10",
              children: E.jsxs("div", {
                className:
                  "bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg",
                children: [
                  E.jsx("h2", {
                    className: "text-3xl text-center mb-4 text-orange-600",
                    children: "Registration",
                  }),
                  E.jsxs("form", {
                    onSubmit: g,
                    children: [
                      E.jsxs("div", {
                        className: "mb-6",
                        children: [
                          E.jsx(Ai, {
                            type: "text",
                            placeholder: "First Name",
                            label: "First Name",
                            name: "firstName",
                            value: f == null ? void 0 : f.firstName,
                            onChange: m,
                            error:
                              (p == null ? void 0 : p.firstName) &&
                              (h == null ? void 0 : h.firstName),
                          }),
                          E.jsx(Ai, {
                            type: "text",
                            placeholder: "Last Name",
                            label: "Last Name",
                            name: "lastName",
                            value: f == null ? void 0 : f.lastName,
                            onChange: m,
                            error:
                              (p == null ? void 0 : p.lastName) &&
                              (h == null ? void 0 : h.lastName),
                          }),
                          E.jsx(Ai, {
                            type: "email",
                            placeholder: "Email",
                            label: "Email",
                            name: "email",
                            value: f == null ? void 0 : f.email,
                            onChange: m,
                            error:
                              (p == null ? void 0 : p.email) &&
                              (h == null ? void 0 : h.email),
                          }),
                          E.jsx(Ai, {
                            type: "phone",
                            placeholder: "Phone",
                            label: "Phone",
                            name: "phone",
                            value: f == null ? void 0 : f.phone,
                            onChange: m,
                            error:
                              (p == null ? void 0 : p.phone) &&
                              (h == null ? void 0 : h.phone),
                          }),
                        ],
                      }),
                      E.jsx(mp, {
                        type: "submit",
                        title: "Register",
                        disabled: n,
                      }),
                    ],
                  }),
                  E.jsxs("div", {
                    className: "mt-2 text-amber-50 text-center",
                    children: [
                      "Already have an account? please",
                      " ",
                      E.jsx(sn, {
                        to: "/login",
                        className: "text-orange-600 underline",
                        children: "Login",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      );
    },
    Rn = Object.create(null);
  Rn.open = "0";
  Rn.close = "1";
  Rn.ping = "2";
  Rn.pong = "3";
  Rn.message = "4";
  Rn.upgrade = "5";
  Rn.noop = "6";
  const Yo = Object.create(null);
  Object.keys(Rn).forEach((e) => {
    Yo[Rn[e]] = e;
  });
  const Eh = { type: "error", data: "parser error" },
    yS =
      typeof Blob == "function" ||
      (typeof Blob < "u" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
    gS = typeof ArrayBuffer == "function",
    vS = (e) =>
      typeof ArrayBuffer.isView == "function"
        ? ArrayBuffer.isView(e)
        : e && e.buffer instanceof ArrayBuffer,
    gp = ({ type: e, data: n }, a, s) =>
      yS && n instanceof Blob
        ? a
          ? s(n)
          : Iv(n, s)
        : gS && (n instanceof ArrayBuffer || vS(n))
        ? a
          ? s(n)
          : Iv(new Blob([n]), s)
        : s(Rn[e] + (n || "")),
    Iv = (e, n) => {
      const a = new FileReader();
      return (
        (a.onload = function () {
          const s = a.result.split(",")[1];
          n("b" + (s || ""));
        }),
        a.readAsDataURL(e)
      );
    };
  function Gv(e) {
    return e instanceof Uint8Array
      ? e
      : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  let Nd;
  function SN(e, n) {
    if (yS && e.data instanceof Blob)
      return e.data.arrayBuffer().then(Gv).then(n);
    if (gS && (e.data instanceof ArrayBuffer || vS(e.data)))
      return n(Gv(e.data));
    gp(e, !1, (a) => {
      Nd || (Nd = new TextEncoder()), n(Nd.encode(a));
    });
  }
  const Pv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Xs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let e = 0; e < Pv.length; e++) Xs[Pv.charCodeAt(e)] = e;
  const EN = (e) => {
      let n = e.length * 0.75,
        a = e.length,
        s,
        o = 0,
        c,
        f,
        p,
        h;
      e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
      const m = new ArrayBuffer(n),
        g = new Uint8Array(m);
      for (s = 0; s < a; s += 4)
        (c = Xs[e.charCodeAt(s)]),
          (f = Xs[e.charCodeAt(s + 1)]),
          (p = Xs[e.charCodeAt(s + 2)]),
          (h = Xs[e.charCodeAt(s + 3)]),
          (g[o++] = (c << 2) | (f >> 4)),
          (g[o++] = ((f & 15) << 4) | (p >> 2)),
          (g[o++] = ((p & 3) << 6) | (h & 63));
      return m;
    },
    wN = typeof ArrayBuffer == "function",
    vp = (e, n) => {
      if (typeof e != "string") return { type: "message", data: bS(e, n) };
      const a = e.charAt(0);
      return a === "b"
        ? { type: "message", data: xN(e.substring(1), n) }
        : Yo[a]
        ? e.length > 1
          ? { type: Yo[a], data: e.substring(1) }
          : { type: Yo[a] }
        : Eh;
    },
    xN = (e, n) => {
      if (wN) {
        const a = EN(e);
        return bS(a, n);
      } else return { base64: !0, data: e };
    },
    bS = (e, n) => {
      switch (n) {
        case "blob":
          return e instanceof Blob ? e : new Blob([e]);
        case "arraybuffer":
        default:
          return e instanceof ArrayBuffer ? e : e.buffer;
      }
    },
    SS = "",
    _N = (e, n) => {
      const a = e.length,
        s = new Array(a);
      let o = 0;
      e.forEach((c, f) => {
        gp(c, !1, (p) => {
          (s[f] = p), ++o === a && n(s.join(SS));
        });
      });
    },
    TN = (e, n) => {
      const a = e.split(SS),
        s = [];
      for (let o = 0; o < a.length; o++) {
        const c = vp(a[o], n);
        if ((s.push(c), c.type === "error")) break;
      }
      return s;
    };
  function AN() {
    return new TransformStream({
      transform(e, n) {
        SN(e, (a) => {
          const s = a.length;
          let o;
          if (s < 126)
            (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, s);
          else if (s < 65536) {
            o = new Uint8Array(3);
            const c = new DataView(o.buffer);
            c.setUint8(0, 126), c.setUint16(1, s);
          } else {
            o = new Uint8Array(9);
            const c = new DataView(o.buffer);
            c.setUint8(0, 127), c.setBigUint64(1, BigInt(s));
          }
          e.data && typeof e.data != "string" && (o[0] |= 128),
            n.enqueue(o),
            n.enqueue(a);
        });
      },
    });
  }
  let Md;
  function ko(e) {
    return e.reduce((n, a) => n + a.length, 0);
  }
  function zo(e, n) {
    if (e[0].length === n) return e.shift();
    const a = new Uint8Array(n);
    let s = 0;
    for (let o = 0; o < n; o++)
      (a[o] = e[0][s++]), s === e[0].length && (e.shift(), (s = 0));
    return e.length && s < e[0].length && (e[0] = e[0].slice(s)), a;
  }
  function ON(e, n) {
    Md || (Md = new TextDecoder());
    const a = [];
    let s = 0,
      o = -1,
      c = !1;
    return new TransformStream({
      transform(f, p) {
        for (a.push(f); ; ) {
          if (s === 0) {
            if (ko(a) < 1) break;
            const h = zo(a, 1);
            (c = (h[0] & 128) === 128),
              (o = h[0] & 127),
              o < 126 ? (s = 3) : o === 126 ? (s = 1) : (s = 2);
          } else if (s === 1) {
            if (ko(a) < 2) break;
            const h = zo(a, 2);
            (o = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0)),
              (s = 3);
          } else if (s === 2) {
            if (ko(a) < 8) break;
            const h = zo(a, 8),
              m = new DataView(h.buffer, h.byteOffset, h.length),
              g = m.getUint32(0);
            if (g > Math.pow(2, 21) - 1) {
              p.enqueue(Eh);
              break;
            }
            (o = g * Math.pow(2, 32) + m.getUint32(4)), (s = 3);
          } else {
            if (ko(a) < o) break;
            const h = zo(a, o);
            p.enqueue(vp(c ? h : Md.decode(h), n)), (s = 0);
          }
          if (o === 0 || o > e) {
            p.enqueue(Eh);
            break;
          }
        }
      },
    });
  }
  const ES = 4;
  function We(e) {
    if (e) return RN(e);
  }
  function RN(e) {
    for (var n in We.prototype) e[n] = We.prototype[n];
    return e;
  }
  We.prototype.on = We.prototype.addEventListener = function (e, n) {
    return (
      (this._callbacks = this._callbacks || {}),
      (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n),
      this
    );
  };
  We.prototype.once = function (e, n) {
    function a() {
      this.off(e, a), n.apply(this, arguments);
    }
    return (a.fn = n), this.on(e, a), this;
  };
  We.prototype.off =
    We.prototype.removeListener =
    We.prototype.removeAllListeners =
    We.prototype.removeEventListener =
      function (e, n) {
        if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
          return (this._callbacks = {}), this;
        var a = this._callbacks["$" + e];
        if (!a) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + e], this;
        for (var s, o = 0; o < a.length; o++)
          if (((s = a[o]), s === n || s.fn === n)) {
            a.splice(o, 1);
            break;
          }
        return a.length === 0 && delete this._callbacks["$" + e], this;
      };
  We.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
      var n = new Array(arguments.length - 1),
        a = this._callbacks["$" + e],
        s = 1;
      s < arguments.length;
      s++
    )
      n[s - 1] = arguments[s];
    if (a) {
      a = a.slice(0);
      for (var s = 0, o = a.length; s < o; ++s) a[s].apply(this, n);
    }
    return this;
  };
  We.prototype.emitReserved = We.prototype.emit;
  We.prototype.listeners = function (e) {
    return (
      (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
    );
  };
  We.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
  };
  const zu =
      typeof Promise == "function" && typeof Promise.resolve == "function"
        ? (n) => Promise.resolve().then(n)
        : (n, a) => a(n, 0),
    ln =
      typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")(),
    CN = "arraybuffer";
  function wS(e, ...n) {
    return n.reduce((a, s) => (e.hasOwnProperty(s) && (a[s] = e[s]), a), {});
  }
  const DN = ln.setTimeout,
    NN = ln.clearTimeout;
  function $u(e, n) {
    n.useNativeTimers
      ? ((e.setTimeoutFn = DN.bind(ln)), (e.clearTimeoutFn = NN.bind(ln)))
      : ((e.setTimeoutFn = ln.setTimeout.bind(ln)),
        (e.clearTimeoutFn = ln.clearTimeout.bind(ln)));
  }
  const MN = 1.33;
  function jN(e) {
    return typeof e == "string"
      ? BN(e)
      : Math.ceil((e.byteLength || e.size) * MN);
  }
  function BN(e) {
    let n = 0,
      a = 0;
    for (let s = 0, o = e.length; s < o; s++)
      (n = e.charCodeAt(s)),
        n < 128
          ? (a += 1)
          : n < 2048
          ? (a += 2)
          : n < 55296 || n >= 57344
          ? (a += 3)
          : (s++, (a += 4));
    return a;
  }
  function xS() {
    return (
      Date.now().toString(36).substring(3) +
      Math.random().toString(36).substring(2, 5)
    );
  }
  function UN(e) {
    let n = "";
    for (let a in e)
      e.hasOwnProperty(a) &&
        (n.length && (n += "&"),
        (n += encodeURIComponent(a) + "=" + encodeURIComponent(e[a])));
    return n;
  }
  function LN(e) {
    let n = {},
      a = e.split("&");
    for (let s = 0, o = a.length; s < o; s++) {
      let c = a[s].split("=");
      n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
    }
    return n;
  }
  class kN extends Error {
    constructor(n, a, s) {
      super(n),
        (this.description = a),
        (this.context = s),
        (this.type = "TransportError");
    }
  }
  class bp extends We {
    constructor(n) {
      super(),
        (this.writable = !1),
        $u(this, n),
        (this.opts = n),
        (this.query = n.query),
        (this.socket = n.socket),
        (this.supportsBinary = !n.forceBase64);
    }
    onError(n, a, s) {
      return super.emitReserved("error", new kN(n, a, s)), this;
    }
    open() {
      return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(n) {
      this.readyState === "open" && this.write(n);
    }
    onOpen() {
      (this.readyState = "open"),
        (this.writable = !0),
        super.emitReserved("open");
    }
    onData(n) {
      const a = vp(n, this.socket.binaryType);
      this.onPacket(a);
    }
    onPacket(n) {
      super.emitReserved("packet", n);
    }
    onClose(n) {
      (this.readyState = "closed"), super.emitReserved("close", n);
    }
    pause(n) {}
    createUri(n, a = {}) {
      return (
        n +
        "://" +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(a)
      );
    }
    _hostname() {
      const n = this.opts.hostname;
      return n.indexOf(":") === -1 ? n : "[" + n + "]";
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && +(this.opts.port !== 443)) ||
          (!this.opts.secure && Number(this.opts.port) !== 80))
        ? ":" + this.opts.port
        : "";
    }
    _query(n) {
      const a = UN(n);
      return a.length ? "?" + a : "";
    }
  }
  class zN extends bp {
    constructor() {
      super(...arguments), (this._polling = !1);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this._poll();
    }
    pause(n) {
      this.readyState = "pausing";
      const a = () => {
        (this.readyState = "paused"), n();
      };
      if (this._polling || !this.writable) {
        let s = 0;
        this._polling &&
          (s++,
          this.once("pollComplete", function () {
            --s || a();
          })),
          this.writable ||
            (s++,
            this.once("drain", function () {
              --s || a();
            }));
      } else a();
    }
    _poll() {
      (this._polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(n) {
      const a = (s) => {
        if (
          (this.readyState === "opening" && s.type === "open" && this.onOpen(),
          s.type === "close")
        )
          return (
            this.onClose({ description: "transport closed by the server" }), !1
          );
        this.onPacket(s);
      };
      TN(n, this.socket.binaryType).forEach(a),
        this.readyState !== "closed" &&
          ((this._polling = !1),
          this.emitReserved("pollComplete"),
          this.readyState === "open" && this._poll());
    }
    doClose() {
      const n = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? n() : this.once("open", n);
    }
    write(n) {
      (this.writable = !1),
        _N(n, (a) => {
          this.doWrite(a, () => {
            (this.writable = !0), this.emitReserved("drain");
          });
        });
    }
    uri() {
      const n = this.opts.secure ? "https" : "http",
        a = this.query || {};
      return (
        this.opts.timestampRequests !== !1 &&
          (a[this.opts.timestampParam] = xS()),
        !this.supportsBinary && !a.sid && (a.b64 = 1),
        this.createUri(n, a)
      );
    }
  }
  let _S = !1;
  try {
    _S =
      typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
  } catch {}
  const $N = _S;
  function qN() {}
  class HN extends zN {
    constructor(n) {
      if ((super(n), typeof location < "u")) {
        const a = location.protocol === "https:";
        let s = location.port;
        s || (s = a ? "443" : "80"),
          (this.xd =
            (typeof location < "u" && n.hostname !== location.hostname) ||
            s !== n.port);
      }
    }
    doWrite(n, a) {
      const s = this.request({ method: "POST", data: n });
      s.on("success", a),
        s.on("error", (o, c) => {
          this.onError("xhr post error", o, c);
        });
    }
    doPoll() {
      const n = this.request();
      n.on("data", this.onData.bind(this)),
        n.on("error", (a, s) => {
          this.onError("xhr poll error", a, s);
        }),
        (this.pollXhr = n);
    }
  }
  let Oi = class Ko extends We {
    constructor(n, a, s) {
      super(),
        (this.createRequest = n),
        $u(this, s),
        (this._opts = s),
        (this._method = s.method || "GET"),
        (this._uri = a),
        (this._data = s.data !== void 0 ? s.data : null),
        this._create();
    }
    _create() {
      var n;
      const a = wS(
        this._opts,
        "agent",
        "pfx",
        "key",
        "passphrase",
        "cert",
        "ca",
        "ciphers",
        "rejectUnauthorized",
        "autoUnref"
      );
      a.xdomain = !!this._opts.xd;
      const s = (this._xhr = this.createRequest(a));
      try {
        s.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
            for (let o in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(o) &&
                s.setRequestHeader(o, this._opts.extraHeaders[o]);
          }
        } catch {}
        if (this._method === "POST")
          try {
            s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch {}
        try {
          s.setRequestHeader("Accept", "*/*");
        } catch {}
        (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(s),
          "withCredentials" in s &&
            (s.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout),
          (s.onreadystatechange = () => {
            var o;
            s.readyState === 3 &&
              ((o = this._opts.cookieJar) === null ||
                o === void 0 ||
                o.parseCookies(s.getResponseHeader("set-cookie"))),
              s.readyState === 4 &&
                (s.status === 200 || s.status === 1223
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError(typeof s.status == "number" ? s.status : 0);
                    }, 0));
          }),
          s.send(this._data);
      } catch (o) {
        this.setTimeoutFn(() => {
          this._onError(o);
        }, 0);
        return;
      }
      typeof document < "u" &&
        ((this._index = Ko.requestsCount++), (Ko.requests[this._index] = this));
    }
    _onError(n) {
      this.emitReserved("error", n, this._xhr), this._cleanup(!0);
    }
    _cleanup(n) {
      if (!(typeof this._xhr > "u" || this._xhr === null)) {
        if (((this._xhr.onreadystatechange = qN), n))
          try {
            this._xhr.abort();
          } catch {}
        typeof document < "u" && delete Ko.requests[this._index],
          (this._xhr = null);
      }
    }
    _onLoad() {
      const n = this._xhr.responseText;
      n !== null &&
        (this.emitReserved("data", n),
        this.emitReserved("success"),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  };
  Oi.requestsCount = 0;
  Oi.requests = {};
  if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Yv);
    else if (typeof addEventListener == "function") {
      const e = "onpagehide" in ln ? "pagehide" : "unload";
      addEventListener(e, Yv, !1);
    }
  }
  function Yv() {
    for (let e in Oi.requests)
      Oi.requests.hasOwnProperty(e) && Oi.requests[e].abort();
  }
  const FN = (function () {
    const e = TS({ xdomain: !1 });
    return e && e.responseType !== null;
  })();
  class VN extends HN {
    constructor(n) {
      super(n);
      const a = n && n.forceBase64;
      this.supportsBinary = FN && !a;
    }
    request(n = {}) {
      return (
        Object.assign(n, { xd: this.xd }, this.opts), new Oi(TS, this.uri(), n)
      );
    }
  }
  function TS(e) {
    const n = e.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!n || $N))
        return new XMLHttpRequest();
    } catch {}
    if (!n)
      try {
        return new ln[["Active"].concat("Object").join("X")](
          "Microsoft.XMLHTTP"
        );
      } catch {}
  }
  const AS =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
  class IN extends bp {
    get name() {
      return "websocket";
    }
    doOpen() {
      const n = this.uri(),
        a = this.opts.protocols,
        s = AS
          ? {}
          : wS(
              this.opts,
              "agent",
              "perMessageDeflate",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "localAddress",
              "protocolVersion",
              "origin",
              "maxPayload",
              "family",
              "checkServerIdentity"
            );
      this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(n, a, s);
      } catch (o) {
        return this.emitReserved("error", o);
      }
      (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
      (this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }),
        (this.ws.onclose = (n) =>
          this.onClose({
            description: "websocket connection closed",
            context: n,
          })),
        (this.ws.onmessage = (n) => this.onData(n.data)),
        (this.ws.onerror = (n) => this.onError("websocket error", n));
    }
    write(n) {
      this.writable = !1;
      for (let a = 0; a < n.length; a++) {
        const s = n[a],
          o = a === n.length - 1;
        gp(s, this.supportsBinary, (c) => {
          try {
            this.doWrite(s, c);
          } catch {}
          o &&
            zu(() => {
              (this.writable = !0), this.emitReserved("drain");
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      typeof this.ws < "u" &&
        ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
    }
    uri() {
      const n = this.opts.secure ? "wss" : "ws",
        a = this.query || {};
      return (
        this.opts.timestampRequests && (a[this.opts.timestampParam] = xS()),
        this.supportsBinary || (a.b64 = 1),
        this.createUri(n, a)
      );
    }
  }
  const jd = ln.WebSocket || ln.MozWebSocket;
  class GN extends IN {
    createSocket(n, a, s) {
      return AS ? new jd(n, a, s) : a ? new jd(n, a) : new jd(n);
    }
    doWrite(n, a) {
      this.ws.send(a);
    }
  }
  class PN extends bp {
    get name() {
      return "webtransport";
    }
    doOpen() {
      try {
        this._transport = new WebTransport(
          this.createUri("https"),
          this.opts.transportOptions[this.name]
        );
      } catch (n) {
        return this.emitReserved("error", n);
      }
      this._transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((n) => {
          this.onError("webtransport error", n);
        }),
        this._transport.ready.then(() => {
          this._transport.createBidirectionalStream().then((n) => {
            const a = ON(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
              s = n.readable.pipeThrough(a).getReader(),
              o = AN();
            o.readable.pipeTo(n.writable),
              (this._writer = o.writable.getWriter());
            const c = () => {
              s.read()
                .then(({ done: p, value: h }) => {
                  p || (this.onPacket(h), c());
                })
                .catch((p) => {});
            };
            c();
            const f = { type: "open" };
            this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`),
              this._writer.write(f).then(() => this.onOpen());
          });
        });
    }
    write(n) {
      this.writable = !1;
      for (let a = 0; a < n.length; a++) {
        const s = n[a],
          o = a === n.length - 1;
        this._writer.write(s).then(() => {
          o &&
            zu(() => {
              (this.writable = !0), this.emitReserved("drain");
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      var n;
      (n = this._transport) === null || n === void 0 || n.close();
    }
  }
  const YN = { websocket: GN, webtransport: PN, polling: VN },
    KN =
      /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    XN = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor",
    ];
  function wh(e) {
    if (e.length > 8e3) throw "URI too long";
    const n = e,
      a = e.indexOf("["),
      s = e.indexOf("]");
    a != -1 &&
      s != -1 &&
      (e =
        e.substring(0, a) +
        e.substring(a, s).replace(/:/g, ";") +
        e.substring(s, e.length));
    let o = KN.exec(e || ""),
      c = {},
      f = 14;
    for (; f--; ) c[XN[f]] = o[f] || "";
    return (
      a != -1 &&
        s != -1 &&
        ((c.source = n),
        (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
        (c.authority = c.authority
          .replace("[", "")
          .replace("]", "")
          .replace(/;/g, ":")),
        (c.ipv6uri = !0)),
      (c.pathNames = QN(c, c.path)),
      (c.queryKey = ZN(c, c.query)),
      c
    );
  }
  function QN(e, n) {
    const a = /\/{2,9}/g,
      s = n.replace(a, "/").split("/");
    return (
      (n.slice(0, 1) == "/" || n.length === 0) && s.splice(0, 1),
      n.slice(-1) == "/" && s.splice(s.length - 1, 1),
      s
    );
  }
  function ZN(e, n) {
    const a = {};
    return (
      n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, o, c) {
        o && (a[o] = c);
      }),
      a
    );
  }
  const xh =
      typeof addEventListener == "function" &&
      typeof removeEventListener == "function",
    Xo = [];
  xh &&
    addEventListener(
      "offline",
      () => {
        Xo.forEach((e) => e());
      },
      !1
    );
  class jr extends We {
    constructor(n, a) {
      if (
        (super(),
        (this.binaryType = CN),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0),
        (this._pingInterval = -1),
        (this._pingTimeout = -1),
        (this._maxPayload = -1),
        (this._pingTimeoutTime = 1 / 0),
        n && typeof n == "object" && ((a = n), (n = null)),
        n)
      ) {
        const s = wh(n);
        (a.hostname = s.host),
          (a.secure = s.protocol === "https" || s.protocol === "wss"),
          (a.port = s.port),
          s.query && (a.query = s.query);
      } else a.host && (a.hostname = wh(a.host).host);
      $u(this, a),
        (this.secure =
          a.secure != null
            ? a.secure
            : typeof location < "u" && location.protocol === "https:"),
        a.hostname && !a.port && (a.port = this.secure ? "443" : "80"),
        (this.hostname =
          a.hostname ||
          (typeof location < "u" ? location.hostname : "localhost")),
        (this.port =
          a.port ||
          (typeof location < "u" && location.port
            ? location.port
            : this.secure
            ? "443"
            : "80")),
        (this.transports = []),
        (this._transportsByName = {}),
        a.transports.forEach((s) => {
          const o = s.prototype.name;
          this.transports.push(o), (this._transportsByName[o] = s);
        }),
        (this.opts = Object.assign(
          {
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !1,
          },
          a
        )),
        (this.opts.path =
          this.opts.path.replace(/\/$/, "") +
          (this.opts.addTrailingSlash ? "/" : "")),
        typeof this.opts.query == "string" &&
          (this.opts.query = LN(this.opts.query)),
        xh &&
          (this.opts.closeOnBeforeunload &&
            ((this._beforeunloadEventListener = () => {
              this.transport &&
                (this.transport.removeAllListeners(), this.transport.close());
            }),
            addEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            )),
          this.hostname !== "localhost" &&
            ((this._offlineEventListener = () => {
              this._onClose("transport close", {
                description: "network connection lost",
              });
            }),
            Xo.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open();
    }
    createTransport(n) {
      const a = Object.assign({}, this.opts.query);
      (a.EIO = ES), (a.transport = n), this.id && (a.sid = this.id);
      const s = Object.assign(
        {},
        this.opts,
        {
          query: a,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port,
        },
        this.opts.transportOptions[n]
      );
      return new this._transportsByName[n](s);
    }
    _open() {
      if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      const n =
        this.opts.rememberUpgrade &&
        jr.priorWebsocketSuccess &&
        this.transports.indexOf("websocket") !== -1
          ? "websocket"
          : this.transports[0];
      this.readyState = "opening";
      const a = this.createTransport(n);
      a.open(), this.setTransport(a);
    }
    setTransport(n) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = n),
        n
          .on("drain", this._onDrain.bind(this))
          .on("packet", this._onPacket.bind(this))
          .on("error", this._onError.bind(this))
          .on("close", (a) => this._onClose("transport close", a));
    }
    onOpen() {
      (this.readyState = "open"),
        (jr.priorWebsocketSuccess = this.transport.name === "websocket"),
        this.emitReserved("open"),
        this.flush();
    }
    _onPacket(n) {
      if (
        this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing"
      )
        switch (
          (this.emitReserved("packet", n),
          this.emitReserved("heartbeat"),
          n.type)
        ) {
          case "open":
            this.onHandshake(JSON.parse(n.data));
            break;
          case "ping":
            this._sendPacket("pong"),
              this.emitReserved("ping"),
              this.emitReserved("pong"),
              this._resetPingTimeout();
            break;
          case "error":
            const a = new Error("server error");
            (a.code = n.data), this._onError(a);
            break;
          case "message":
            this.emitReserved("data", n.data),
              this.emitReserved("message", n.data);
            break;
        }
    }
    onHandshake(n) {
      this.emitReserved("handshake", n),
        (this.id = n.sid),
        (this.transport.query.sid = n.sid),
        (this._pingInterval = n.pingInterval),
        (this._pingTimeout = n.pingTimeout),
        (this._maxPayload = n.maxPayload),
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout();
    }
    _resetPingTimeout() {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      const n = this._pingInterval + this._pingTimeout;
      (this._pingTimeoutTime = Date.now() + n),
        (this._pingTimeoutTimer = this.setTimeoutFn(() => {
          this._onClose("ping timeout");
        }, n)),
        this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen),
        (this._prevBufferLen = 0),
        this.writeBuffer.length === 0
          ? this.emitReserved("drain")
          : this.flush();
    }
    flush() {
      if (
        this.readyState !== "closed" &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length
      ) {
        const n = this._getWritablePackets();
        this.transport.send(n),
          (this._prevBufferLen = n.length),
          this.emitReserved("flush");
      }
    }
    _getWritablePackets() {
      if (
        !(
          this._maxPayload &&
          this.transport.name === "polling" &&
          this.writeBuffer.length > 1
        )
      )
        return this.writeBuffer;
      let a = 1;
      for (let s = 0; s < this.writeBuffer.length; s++) {
        const o = this.writeBuffer[s].data;
        if ((o && (a += jN(o)), s > 0 && a > this._maxPayload))
          return this.writeBuffer.slice(0, s);
        a += 2;
      }
      return this.writeBuffer;
    }
    _hasPingExpired() {
      if (!this._pingTimeoutTime) return !0;
      const n = Date.now() > this._pingTimeoutTime;
      return (
        n &&
          ((this._pingTimeoutTime = 0),
          zu(() => {
            this._onClose("ping timeout");
          }, this.setTimeoutFn)),
        n
      );
    }
    write(n, a, s) {
      return this._sendPacket("message", n, a, s), this;
    }
    send(n, a, s) {
      return this._sendPacket("message", n, a, s), this;
    }
    _sendPacket(n, a, s, o) {
      if (
        (typeof a == "function" && ((o = a), (a = void 0)),
        typeof s == "function" && ((o = s), (s = null)),
        this.readyState === "closing" || this.readyState === "closed")
      )
        return;
      (s = s || {}), (s.compress = s.compress !== !1);
      const c = { type: n, data: a, options: s };
      this.emitReserved("packetCreate", c),
        this.writeBuffer.push(c),
        o && this.once("flush", o),
        this.flush();
    }
    close() {
      const n = () => {
          this._onClose("forced close"), this.transport.close();
        },
        a = () => {
          this.off("upgrade", a), this.off("upgradeError", a), n();
        },
        s = () => {
          this.once("upgrade", a), this.once("upgradeError", a);
        };
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          ((this.readyState = "closing"),
          this.writeBuffer.length
            ? this.once("drain", () => {
                this.upgrading ? s() : n();
              })
            : this.upgrading
            ? s()
            : n()),
        this
      );
    }
    _onError(n) {
      if (
        ((jr.priorWebsocketSuccess = !1),
        this.opts.tryAllTransports &&
          this.transports.length > 1 &&
          this.readyState === "opening")
      )
        return this.transports.shift(), this._open();
      this.emitReserved("error", n), this._onClose("transport error", n);
    }
    _onClose(n, a) {
      if (
        this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing"
      ) {
        if (
          (this.clearTimeoutFn(this._pingTimeoutTimer),
          this.transport.removeAllListeners("close"),
          this.transport.close(),
          this.transport.removeAllListeners(),
          xh &&
            (this._beforeunloadEventListener &&
              removeEventListener(
                "beforeunload",
                this._beforeunloadEventListener,
                !1
              ),
            this._offlineEventListener))
        ) {
          const s = Xo.indexOf(this._offlineEventListener);
          s !== -1 && Xo.splice(s, 1);
        }
        (this.readyState = "closed"),
          (this.id = null),
          this.emitReserved("close", n, a),
          (this.writeBuffer = []),
          (this._prevBufferLen = 0);
      }
    }
  }
  jr.protocol = ES;
  class JN extends jr {
    constructor() {
      super(...arguments), (this._upgrades = []);
    }
    onOpen() {
      if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
        for (let n = 0; n < this._upgrades.length; n++)
          this._probe(this._upgrades[n]);
    }
    _probe(n) {
      let a = this.createTransport(n),
        s = !1;
      jr.priorWebsocketSuccess = !1;
      const o = () => {
        s ||
          (a.send([{ type: "ping", data: "probe" }]),
          a.once("packet", (v) => {
            if (!s)
              if (v.type === "pong" && v.data === "probe") {
                if (
                  ((this.upgrading = !0), this.emitReserved("upgrading", a), !a)
                )
                  return;
                (jr.priorWebsocketSuccess = a.name === "websocket"),
                  this.transport.pause(() => {
                    s ||
                      (this.readyState !== "closed" &&
                        (g(),
                        this.setTransport(a),
                        a.send([{ type: "upgrade" }]),
                        this.emitReserved("upgrade", a),
                        (a = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                const S = new Error("probe error");
                (S.transport = a.name), this.emitReserved("upgradeError", S);
              }
          }));
      };
      function c() {
        s || ((s = !0), g(), a.close(), (a = null));
      }
      const f = (v) => {
        const S = new Error("probe error: " + v);
        (S.transport = a.name), c(), this.emitReserved("upgradeError", S);
      };
      function p() {
        f("transport closed");
      }
      function h() {
        f("socket closed");
      }
      function m(v) {
        a && v.name !== a.name && c();
      }
      const g = () => {
        a.removeListener("open", o),
          a.removeListener("error", f),
          a.removeListener("close", p),
          this.off("close", h),
          this.off("upgrading", m);
      };
      a.once("open", o),
        a.once("error", f),
        a.once("close", p),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport"
          ? this.setTimeoutFn(() => {
              s || a.open();
            }, 200)
          : a.open();
    }
    onHandshake(n) {
      (this._upgrades = this._filterUpgrades(n.upgrades)), super.onHandshake(n);
    }
    _filterUpgrades(n) {
      const a = [];
      for (let s = 0; s < n.length; s++)
        ~this.transports.indexOf(n[s]) && a.push(n[s]);
      return a;
    }
  }
  let WN = class extends JN {
    constructor(n, a = {}) {
      const s = typeof n == "object" ? n : a;
      (!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
        (s.transports = (
          s.transports || ["polling", "websocket", "webtransport"]
        )
          .map((o) => YN[o])
          .filter((o) => !!o)),
        super(n, s);
    }
  };
  function e6(e, n = "", a) {
    let s = e;
    (a = a || (typeof location < "u" && location)),
      e == null && (e = a.protocol + "//" + a.host),
      typeof e == "string" &&
        (e.charAt(0) === "/" &&
          (e.charAt(1) === "/" ? (e = a.protocol + e) : (e = a.host + e)),
        /^(https?|wss?):\/\//.test(e) ||
          (typeof a < "u" ? (e = a.protocol + "//" + e) : (e = "https://" + e)),
        (s = wh(e))),
      s.port ||
        (/^(http|ws)$/.test(s.protocol)
          ? (s.port = "80")
          : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
      (s.path = s.path || "/");
    const c = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
    return (
      (s.id = s.protocol + "://" + c + ":" + s.port + n),
      (s.href =
        s.protocol + "://" + c + (a && a.port === s.port ? "" : ":" + s.port)),
      s
    );
  }
  const t6 = typeof ArrayBuffer == "function",
    n6 = (e) =>
      typeof ArrayBuffer.isView == "function"
        ? ArrayBuffer.isView(e)
        : e.buffer instanceof ArrayBuffer,
    OS = Object.prototype.toString,
    r6 =
      typeof Blob == "function" ||
      (typeof Blob < "u" && OS.call(Blob) === "[object BlobConstructor]"),
    a6 =
      typeof File == "function" ||
      (typeof File < "u" && OS.call(File) === "[object FileConstructor]");
  function Sp(e) {
    return (
      (t6 && (e instanceof ArrayBuffer || n6(e))) ||
      (r6 && e instanceof Blob) ||
      (a6 && e instanceof File)
    );
  }
  function Qo(e, n) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
      for (let a = 0, s = e.length; a < s; a++) if (Qo(e[a])) return !0;
      return !1;
    }
    if (Sp(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
      return Qo(e.toJSON(), !0);
    for (const a in e)
      if (Object.prototype.hasOwnProperty.call(e, a) && Qo(e[a])) return !0;
    return !1;
  }
  function i6(e) {
    const n = [],
      a = e.data,
      s = e;
    return (
      (s.data = _h(a, n)), (s.attachments = n.length), { packet: s, buffers: n }
    );
  }
  function _h(e, n) {
    if (!e) return e;
    if (Sp(e)) {
      const a = { _placeholder: !0, num: n.length };
      return n.push(e), a;
    } else if (Array.isArray(e)) {
      const a = new Array(e.length);
      for (let s = 0; s < e.length; s++) a[s] = _h(e[s], n);
      return a;
    } else if (typeof e == "object" && !(e instanceof Date)) {
      const a = {};
      for (const s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (a[s] = _h(e[s], n));
      return a;
    }
    return e;
  }
  function s6(e, n) {
    return (e.data = Th(e.data, n)), delete e.attachments, e;
  }
  function Th(e, n) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
      if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
        return n[e.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(e))
      for (let a = 0; a < e.length; a++) e[a] = Th(e[a], n);
    else if (typeof e == "object")
      for (const a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (e[a] = Th(e[a], n));
    return e;
  }
  const l6 = [
      "connect",
      "connect_error",
      "disconnect",
      "disconnecting",
      "newListener",
      "removeListener",
    ],
    o6 = 5;
  var Ee;
  (function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
      (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
      (e[(e.EVENT = 2)] = "EVENT"),
      (e[(e.ACK = 3)] = "ACK"),
      (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
      (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
      (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
  })(Ee || (Ee = {}));
  class u6 {
    constructor(n) {
      this.replacer = n;
    }
    encode(n) {
      return (n.type === Ee.EVENT || n.type === Ee.ACK) && Qo(n)
        ? this.encodeAsBinary({
            type: n.type === Ee.EVENT ? Ee.BINARY_EVENT : Ee.BINARY_ACK,
            nsp: n.nsp,
            data: n.data,
            id: n.id,
          })
        : [this.encodeAsString(n)];
    }
    encodeAsString(n) {
      let a = "" + n.type;
      return (
        (n.type === Ee.BINARY_EVENT || n.type === Ee.BINARY_ACK) &&
          (a += n.attachments + "-"),
        n.nsp && n.nsp !== "/" && (a += n.nsp + ","),
        n.id != null && (a += n.id),
        n.data != null && (a += JSON.stringify(n.data, this.replacer)),
        a
      );
    }
    encodeAsBinary(n) {
      const a = i6(n),
        s = this.encodeAsString(a.packet),
        o = a.buffers;
      return o.unshift(s), o;
    }
  }
  function Kv(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  class Ep extends We {
    constructor(n) {
      super(), (this.reviver = n);
    }
    add(n) {
      let a;
      if (typeof n == "string") {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        a = this.decodeString(n);
        const s = a.type === Ee.BINARY_EVENT;
        s || a.type === Ee.BINARY_ACK
          ? ((a.type = s ? Ee.EVENT : Ee.ACK),
            (this.reconstructor = new c6(a)),
            a.attachments === 0 && super.emitReserved("decoded", a))
          : super.emitReserved("decoded", a);
      } else if (Sp(n) || n.base64)
        if (this.reconstructor)
          (a = this.reconstructor.takeBinaryData(n)),
            a &&
              ((this.reconstructor = null), super.emitReserved("decoded", a));
        else
          throw new Error("got binary data when not reconstructing a packet");
      else throw new Error("Unknown type: " + n);
    }
    decodeString(n) {
      let a = 0;
      const s = { type: Number(n.charAt(0)) };
      if (Ee[s.type] === void 0)
        throw new Error("unknown packet type " + s.type);
      if (s.type === Ee.BINARY_EVENT || s.type === Ee.BINARY_ACK) {
        const c = a + 1;
        for (; n.charAt(++a) !== "-" && a != n.length; );
        const f = n.substring(c, a);
        if (f != Number(f) || n.charAt(a) !== "-")
          throw new Error("Illegal attachments");
        s.attachments = Number(f);
      }
      if (n.charAt(a + 1) === "/") {
        const c = a + 1;
        for (; ++a && !(n.charAt(a) === "," || a === n.length); );
        s.nsp = n.substring(c, a);
      } else s.nsp = "/";
      const o = n.charAt(a + 1);
      if (o !== "" && Number(o) == o) {
        const c = a + 1;
        for (; ++a; ) {
          const f = n.charAt(a);
          if (f == null || Number(f) != f) {
            --a;
            break;
          }
          if (a === n.length) break;
        }
        s.id = Number(n.substring(c, a + 1));
      }
      if (n.charAt(++a)) {
        const c = this.tryParse(n.substr(a));
        if (Ep.isPayloadValid(s.type, c)) s.data = c;
        else throw new Error("invalid payload");
      }
      return s;
    }
    tryParse(n) {
      try {
        return JSON.parse(n, this.reviver);
      } catch {
        return !1;
      }
    }
    static isPayloadValid(n, a) {
      switch (n) {
        case Ee.CONNECT:
          return Kv(a);
        case Ee.DISCONNECT:
          return a === void 0;
        case Ee.CONNECT_ERROR:
          return typeof a == "string" || Kv(a);
        case Ee.EVENT:
        case Ee.BINARY_EVENT:
          return (
            Array.isArray(a) &&
            (typeof a[0] == "number" ||
              (typeof a[0] == "string" && l6.indexOf(a[0]) === -1))
          );
        case Ee.ACK:
        case Ee.BINARY_ACK:
          return Array.isArray(a);
      }
    }
    destroy() {
      this.reconstructor &&
        (this.reconstructor.finishedReconstruction(),
        (this.reconstructor = null));
    }
  }
  class c6 {
    constructor(n) {
      (this.packet = n), (this.buffers = []), (this.reconPack = n);
    }
    takeBinaryData(n) {
      if (
        (this.buffers.push(n),
        this.buffers.length === this.reconPack.attachments)
      ) {
        const a = s6(this.reconPack, this.buffers);
        return this.finishedReconstruction(), a;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  }
  const f6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Decoder: Ep,
        Encoder: u6,
        get PacketType() {
          return Ee;
        },
        protocol: o6,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function mn(e, n, a) {
    return (
      e.on(n, a),
      function () {
        e.off(n, a);
      }
    );
  }
  const d6 = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  });
  class RS extends We {
    constructor(n, a, s) {
      super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = n),
        (this.nsp = a),
        s && s.auth && (this.auth = s.auth),
        (this._opts = Object.assign({}, s)),
        this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      const n = this.io;
      this.subs = [
        mn(n, "open", this.onopen.bind(this)),
        mn(n, "packet", this.onpacket.bind(this)),
        mn(n, "error", this.onerror.bind(this)),
        mn(n, "close", this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected
        ? this
        : (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          this.io._readyState === "open" && this.onopen(),
          this);
    }
    open() {
      return this.connect();
    }
    send(...n) {
      return n.unshift("message"), this.emit.apply(this, n), this;
    }
    emit(n, ...a) {
      var s, o, c;
      if (d6.hasOwnProperty(n))
        throw new Error('"' + n.toString() + '" is a reserved event name');
      if (
        (a.unshift(n),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return this._addToQueue(a), this;
      const f = { type: Ee.EVENT, data: a };
      if (
        ((f.options = {}),
        (f.options.compress = this.flags.compress !== !1),
        typeof a[a.length - 1] == "function")
      ) {
        const g = this.ids++,
          v = a.pop();
        this._registerAckCallback(g, v), (f.id = g);
      }
      const p =
          (o =
            (s = this.io.engine) === null || s === void 0
              ? void 0
              : s.transport) === null || o === void 0
            ? void 0
            : o.writable,
        h =
          this.connected &&
          !(
            !((c = this.io.engine) === null || c === void 0) &&
            c._hasPingExpired()
          );
      return (
        (this.flags.volatile && !p) ||
          (h
            ? (this.notifyOutgoingListeners(f), this.packet(f))
            : this.sendBuffer.push(f)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(n, a) {
      var s;
      const o =
        (s = this.flags.timeout) !== null && s !== void 0
          ? s
          : this._opts.ackTimeout;
      if (o === void 0) {
        this.acks[n] = a;
        return;
      }
      const c = this.io.setTimeoutFn(() => {
          delete this.acks[n];
          for (let p = 0; p < this.sendBuffer.length; p++)
            this.sendBuffer[p].id === n && this.sendBuffer.splice(p, 1);
          a.call(this, new Error("operation has timed out"));
        }, o),
        f = (...p) => {
          this.io.clearTimeoutFn(c), a.apply(this, p);
        };
      (f.withError = !0), (this.acks[n] = f);
    }
    emitWithAck(n, ...a) {
      return new Promise((s, o) => {
        const c = (f, p) => (f ? o(f) : s(p));
        (c.withError = !0), a.push(c), this.emit(n, ...a);
      });
    }
    _addToQueue(n) {
      let a;
      typeof n[n.length - 1] == "function" && (a = n.pop());
      const s = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: n,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      n.push((o, ...c) =>
        s !== this._queue[0]
          ? void 0
          : (o !== null
              ? s.tryCount > this._opts.retries &&
                (this._queue.shift(), a && a(o))
              : (this._queue.shift(), a && a(null, ...c)),
            (s.pending = !1),
            this._drainQueue())
      ),
        this._queue.push(s),
        this._drainQueue();
    }
    _drainQueue(n = !1) {
      if (!this.connected || this._queue.length === 0) return;
      const a = this._queue[0];
      (a.pending && !n) ||
        ((a.pending = !0),
        a.tryCount++,
        (this.flags = a.flags),
        this.emit.apply(this, a.args));
    }
    packet(n) {
      (n.nsp = this.nsp), this.io._packet(n);
    }
    onopen() {
      typeof this.auth == "function"
        ? this.auth((n) => {
            this._sendConnectPacket(n);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(n) {
      this.packet({
        type: Ee.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n)
          : n,
      });
    }
    onerror(n) {
      this.connected || this.emitReserved("connect_error", n);
    }
    onclose(n, a) {
      (this.connected = !1),
        delete this.id,
        this.emitReserved("disconnect", n, a),
        this._clearAcks();
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((n) => {
        if (!this.sendBuffer.some((s) => String(s.id) === n)) {
          const s = this.acks[n];
          delete this.acks[n],
            s.withError &&
              s.call(this, new Error("socket has been disconnected"));
        }
      });
    }
    onpacket(n) {
      if (n.nsp === this.nsp)
        switch (n.type) {
          case Ee.CONNECT:
            n.data && n.data.sid
              ? this.onconnect(n.data.sid, n.data.pid)
              : this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
            break;
          case Ee.EVENT:
          case Ee.BINARY_EVENT:
            this.onevent(n);
            break;
          case Ee.ACK:
          case Ee.BINARY_ACK:
            this.onack(n);
            break;
          case Ee.DISCONNECT:
            this.ondisconnect();
            break;
          case Ee.CONNECT_ERROR:
            this.destroy();
            const s = new Error(n.data.message);
            (s.data = n.data.data), this.emitReserved("connect_error", s);
            break;
        }
    }
    onevent(n) {
      const a = n.data || [];
      n.id != null && a.push(this.ack(n.id)),
        this.connected
          ? this.emitEvent(a)
          : this.receiveBuffer.push(Object.freeze(a));
    }
    emitEvent(n) {
      if (this._anyListeners && this._anyListeners.length) {
        const a = this._anyListeners.slice();
        for (const s of a) s.apply(this, n);
      }
      super.emit.apply(this, n),
        this._pid &&
          n.length &&
          typeof n[n.length - 1] == "string" &&
          (this._lastOffset = n[n.length - 1]);
    }
    ack(n) {
      const a = this;
      let s = !1;
      return function (...o) {
        s || ((s = !0), a.packet({ type: Ee.ACK, id: n, data: o }));
      };
    }
    onack(n) {
      const a = this.acks[n.id];
      typeof a == "function" &&
        (delete this.acks[n.id],
        a.withError && n.data.unshift(null),
        a.apply(this, n.data));
    }
    onconnect(n, a) {
      (this.id = n),
        (this.recovered = a && this._pid === a),
        (this._pid = a),
        (this.connected = !0),
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((n) => this.emitEvent(n)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((n) => {
          this.notifyOutgoingListeners(n), this.packet(n);
        }),
        (this.sendBuffer = []);
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((n) => n()), (this.subs = void 0)),
        this.io._destroy(this);
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: Ee.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(n) {
      return (this.flags.compress = n), this;
    }
    get volatile() {
      return (this.flags.volatile = !0), this;
    }
    timeout(n) {
      return (this.flags.timeout = n), this;
    }
    onAny(n) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(n),
        this
      );
    }
    prependAny(n) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(n),
        this
      );
    }
    offAny(n) {
      if (!this._anyListeners) return this;
      if (n) {
        const a = this._anyListeners;
        for (let s = 0; s < a.length; s++)
          if (n === a[s]) return a.splice(s, 1), this;
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(n) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(n),
        this
      );
    }
    prependAnyOutgoing(n) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(n),
        this
      );
    }
    offAnyOutgoing(n) {
      if (!this._anyOutgoingListeners) return this;
      if (n) {
        const a = this._anyOutgoingListeners;
        for (let s = 0; s < a.length; s++)
          if (n === a[s]) return a.splice(s, 1), this;
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(n) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const a = this._anyOutgoingListeners.slice();
        for (const s of a) s.apply(this, n.data);
      }
    }
  }
  function qi(e) {
    (e = e || {}),
      (this.ms = e.min || 100),
      (this.max = e.max || 1e4),
      (this.factor = e.factor || 2),
      (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
      (this.attempts = 0);
  }
  qi.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var n = Math.random(),
        a = Math.floor(n * this.jitter * e);
      e = Math.floor(n * 10) & 1 ? e + a : e - a;
    }
    return Math.min(e, this.max) | 0;
  };
  qi.prototype.reset = function () {
    this.attempts = 0;
  };
  qi.prototype.setMin = function (e) {
    this.ms = e;
  };
  qi.prototype.setMax = function (e) {
    this.max = e;
  };
  qi.prototype.setJitter = function (e) {
    this.jitter = e;
  };
  class Ah extends We {
    constructor(n, a) {
      var s;
      super(),
        (this.nsps = {}),
        (this.subs = []),
        n && typeof n == "object" && ((a = n), (n = void 0)),
        (a = a || {}),
        (a.path = a.path || "/socket.io"),
        (this.opts = a),
        $u(this, a),
        this.reconnection(a.reconnection !== !1),
        this.reconnectionAttempts(a.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(a.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(a.reconnectionDelayMax || 5e3),
        this.randomizationFactor(
          (s = a.randomizationFactor) !== null && s !== void 0 ? s : 0.5
        ),
        (this.backoff = new qi({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(a.timeout == null ? 2e4 : a.timeout),
        (this._readyState = "closed"),
        (this.uri = n);
      const o = a.parser || f6;
      (this.encoder = new o.Encoder()),
        (this.decoder = new o.Decoder()),
        (this._autoConnect = a.autoConnect !== !1),
        this._autoConnect && this.open();
    }
    reconnection(n) {
      return arguments.length
        ? ((this._reconnection = !!n), n || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(n) {
      return n === void 0
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = n), this);
    }
    reconnectionDelay(n) {
      var a;
      return n === void 0
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = n),
          (a = this.backoff) === null || a === void 0 || a.setMin(n),
          this);
    }
    randomizationFactor(n) {
      var a;
      return n === void 0
        ? this._randomizationFactor
        : ((this._randomizationFactor = n),
          (a = this.backoff) === null || a === void 0 || a.setJitter(n),
          this);
    }
    reconnectionDelayMax(n) {
      var a;
      return n === void 0
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = n),
          (a = this.backoff) === null || a === void 0 || a.setMax(n),
          this);
    }
    timeout(n) {
      return arguments.length ? ((this._timeout = n), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        this.backoff.attempts === 0 &&
        this.reconnect();
    }
    open(n) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new WN(this.uri, this.opts);
      const a = this.engine,
        s = this;
      (this._readyState = "opening"), (this.skipReconnect = !1);
      const o = mn(a, "open", function () {
          s.onopen(), n && n();
        }),
        c = (p) => {
          this.cleanup(),
            (this._readyState = "closed"),
            this.emitReserved("error", p),
            n ? n(p) : this.maybeReconnectOnOpen();
        },
        f = mn(a, "error", c);
      if (this._timeout !== !1) {
        const p = this._timeout,
          h = this.setTimeoutFn(() => {
            o(), c(new Error("timeout")), a.close();
          }, p);
        this.opts.autoUnref && h.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(h);
          });
      }
      return this.subs.push(o), this.subs.push(f), this;
    }
    connect(n) {
      return this.open(n);
    }
    onopen() {
      this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
      const n = this.engine;
      this.subs.push(
        mn(n, "ping", this.onping.bind(this)),
        mn(n, "data", this.ondata.bind(this)),
        mn(n, "error", this.onerror.bind(this)),
        mn(n, "close", this.onclose.bind(this)),
        mn(this.decoder, "decoded", this.ondecoded.bind(this))
      );
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(n) {
      try {
        this.decoder.add(n);
      } catch (a) {
        this.onclose("parse error", a);
      }
    }
    ondecoded(n) {
      zu(() => {
        this.emitReserved("packet", n);
      }, this.setTimeoutFn);
    }
    onerror(n) {
      this.emitReserved("error", n);
    }
    socket(n, a) {
      let s = this.nsps[n];
      return (
        s
          ? this._autoConnect && !s.active && s.connect()
          : ((s = new RS(this, n, a)), (this.nsps[n] = s)),
        s
      );
    }
    _destroy(n) {
      const a = Object.keys(this.nsps);
      for (const s of a) if (this.nsps[s].active) return;
      this._close();
    }
    _packet(n) {
      const a = this.encoder.encode(n);
      for (let s = 0; s < a.length; s++) this.engine.write(a[s], n.options);
    }
    cleanup() {
      this.subs.forEach((n) => n()),
        (this.subs.length = 0),
        this.decoder.destroy();
    }
    _close() {
      (this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose("forced close");
    }
    disconnect() {
      return this._close();
    }
    onclose(n, a) {
      var s;
      this.cleanup(),
        (s = this.engine) === null || s === void 0 || s.close(),
        this.backoff.reset(),
        (this._readyState = "closed"),
        this.emitReserved("close", n, a),
        this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const n = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(),
          this.emitReserved("reconnect_failed"),
          (this._reconnecting = !1);
      else {
        const a = this.backoff.duration();
        this._reconnecting = !0;
        const s = this.setTimeoutFn(() => {
          n.skipReconnect ||
            (this.emitReserved("reconnect_attempt", n.backoff.attempts),
            !n.skipReconnect &&
              n.open((o) => {
                o
                  ? ((n._reconnecting = !1),
                    n.reconnect(),
                    this.emitReserved("reconnect_error", o))
                  : n.onreconnect();
              }));
        }, a);
        this.opts.autoUnref && s.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(s);
          });
      }
    }
    onreconnect() {
      const n = this.backoff.attempts;
      (this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved("reconnect", n);
    }
  }
  const Ys = {};
  function Zo(e, n) {
    typeof e == "object" && ((n = e), (e = void 0)), (n = n || {});
    const a = e6(e, n.path || "/socket.io"),
      s = a.source,
      o = a.id,
      c = a.path,
      f = Ys[o] && c in Ys[o].nsps,
      p = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
    let h;
    return (
      p ? (h = new Ah(s, n)) : (Ys[o] || (Ys[o] = new Ah(s, n)), (h = Ys[o])),
      a.query && !n.query && (n.query = a.queryKey),
      h.socket(a.path, n)
    );
  }
  Object.assign(Zo, { Manager: Ah, Socket: RS, io: Zo, connect: Zo });
  const h6 = "http://localhost:1322",
    wp = "http://localhost:1322/api",
    el = Gt("sendOtp", async ({ email: e }) => {
      try {
        return (await _e.post(`${wp}/user/login`, { email: e })).data;
      } catch (n) {
        console.error("Error in user registration", n);
      }
    }),
    Jo = Gt("verifyOtp", async ({ otp: e }) => {
      try {
        return (
          await _e.post(
            `${wp}/user/verifyOTP`,
            { otp: e },
            { withCredentials: !0 }
          )
        ).data;
      } catch (n) {
        console.error("Error in user registration", n);
      }
    }),
    Wo = Gt(
      "logout",
      async () =>
        (await _e.post(`${wp}/user/logout`, {}, { withCredentials: !0 })).data
    ),
    p6 = {
      loading: !1,
      sendOtpState: null,
      verifyOtpState: null,
      error: null,
      socket: null,
      onlineUsers: [],
    },
    CS = ir({
      name: "login",
      initialState: p6,
      reducers: {
        resetSendOtpState: (e) => {
          e.sendOtpState = null;
        },
        resetVerifyOtpState: (e) => {
          e.verifyOtpState = null;
        },
        connectSocker: (e, n) => {
          const a = n.payload.userId;
          if (!e.socket && a) {
            const s = Zo(h6, { query: { userId: a } });
            s.connect(), (e.socket = s);
          }
        },
        disconnectSocker: (e) => {
          e.socket && (e.socket.disconnect(), (e.socket = null));
        },
        setOnlineUsers: (e, n) => {
          e.onlineUsers = n.payload;
        },
      },
      extraReducers: (e) => {
        e.addCase(el.pending, (n) => {
          n.loading = !0;
        })
          .addCase(el.fulfilled, (n, a) => {
            (n.loading = !1), (n.sendOtpState = a.payload);
          })
          .addCase(el.rejected, (n, a) => {
            (n.loading = !1), (n.error = a.error.message);
          })
          .addCase(Jo.pending, (n) => {
            n.loading = !0;
          })
          .addCase(Jo.fulfilled, (n, a) => {
            (n.loading = !1),
              (n.verifyOtpState = a.payload),
              localStorage.removeItem("loginMain");
          })
          .addCase(Jo.rejected, (n, a) => {
            (n.loading = !1), (n.error = a.error.message);
          })
          .addCase(Wo.pending, (n) => {
            n.loading = !0;
          })
          .addCase(Wo.fulfilled, (n) => {
            (n.loading = !1), localStorage.removeItem("selectedUser");
          })
          .addCase(Wo.rejected, (n, a) => {
            (n.loading = !1), (n.error = a.error.message);
          });
      },
    }),
    {
      resetSendOtpState: DS,
      resetVerifyOtpState: m6,
      connectSocker: NS,
      disconnectSocker: y6,
      setOnlineUsers: MS,
    } = CS.actions,
    g6 = CS.reducer,
    v6 = Lu().shape({ email: Ti().email().required("Email is required") }),
    b6 = Lu().shape({ otp: cS().required("OTP is required") }),
    S6 = "http://localhost:1322/api",
    Ri = Gt(
      "profile",
      async () =>
        (await _e.get(`${S6}/user/profile`, { withCredentials: !0 })).data
    ),
    E6 = { loading: !1, data: null, error: null },
    w6 = ir({
      name: "profile",
      initialState: E6,
      reducers: {},
      extraReducers: (e) => {
        e.addCase(Ri.pending, (n) => {
          n.loading = !0;
        })
          .addCase(Ri.fulfilled, (n, a) => {
            (n.loading = !1), (n.data = a.payload);
          })
          .addCase(Ri.rejected, (n, a) => {
            (n.loading = !1),
              (n.data = null),
              (n.error = a.error.message || "Something is wrong");
          });
      },
    }),
    x6 = w6.reducer,
    _6 = () => {
      const e = ft(),
        n = xe((_) => {
          var w, M;
          return (M =
            (w = _ == null ? void 0 : _.auth) == null
              ? void 0
              : w.verifyOtpState) == null
            ? void 0
            : M.success;
        }),
        a = xe((_) => {
          var w;
          return (w = _ == null ? void 0 : _.auth) == null ? void 0 : w.loading;
        }),
        s = xe((_) => {
          var w;
          return (w = _ == null ? void 0 : _.toast) == null ? void 0 : w.value;
        }),
        o = pl(),
        c = localStorage.getItem("loginMain");
      console.log("resend mail", c);
      const f = { otp: "" },
        {
          values: p,
          touched: h,
          errors: m,
          handleChange: g,
          handleSubmit: v,
        } = Tu({
          initialValues: f,
          validationSchema: b6,
          onSubmit: async (_, w) => {
            var A, T, L;
            console.log("verify value", _);
            const M = await e(Jo(_)).then(() => e(Ri()));
            w.resetForm(),
              (A = M == null ? void 0 : M.payload) != null &&
                A.success &&
                (o("/", { replace: !0 }),
                e(
                  NS({
                    userId:
                      (L =
                        (T = M == null ? void 0 : M.payload) == null
                          ? void 0
                          : T.data) == null
                        ? void 0
                        : L._id,
                  })
                ));
          },
        });
      R.useEffect(() => {
        n === !1 &&
          (e(yp()),
          setTimeout(() => {
            e(m6());
          }, 5e3)),
          setTimeout(() => {
            e(ku());
          }, 5e3);
      }, [n, e]);
      const S = () => {
        c
          ? e(el(JSON.parse(c)))
          : console.error("No email found in localStorage");
      };
      return (
        console.log("otp value", p),
        E.jsx("div", {
          className:
            "bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10",
          children: E.jsxs("div", {
            className:
              "bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg",
            children: [
              E.jsx("h2", {
                className: "text-3xl text-center mb-4 text-orange-600",
                children: "Verify OTP",
              }),
              E.jsxs("form", {
                onSubmit: v,
                children: [
                  E.jsx("div", {
                    className: "mb-6",
                    children: E.jsx(Ai, {
                      type: "number",
                      placeholder: "Verify OTP",
                      label: "OTP",
                      name: "otp",
                      value: p == null ? void 0 : p.otp,
                      onChange: g,
                      error:
                        (h == null ? void 0 : h.otp) &&
                        (m == null ? void 0 : m.otp),
                    }),
                  }),
                  E.jsx(mp, {
                    type: "submit",
                    title: a ? "Verifying OTP..." : "Verify OTP",
                    disabled: a || s,
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "mt-2 text-amber-50 text-center",
                children: [
                  "Didn't get OTP?",
                  " ",
                  E.jsx("button", {
                    className: "text-orange-600 underline cursor-pointer",
                    onClick: S,
                    children: "Resend",
                  }),
                ],
              }),
            ],
          }),
        })
      );
    },
    T6 = () => {
      const e = ft(),
        n = xe((g) => {
          var v, S;
          return (S =
            (v = g == null ? void 0 : g.auth) == null
              ? void 0
              : v.sendOtpState) == null
            ? void 0
            : S.success;
        }),
        a = xe((g) => {
          var v;
          return (v = g == null ? void 0 : g.auth) == null ? void 0 : v.loading;
        }),
        s = xe((g) => {
          var v;
          return (v = g == null ? void 0 : g.toast) == null ? void 0 : v.value;
        }),
        o = { email: "" },
        {
          values: c,
          touched: f,
          errors: p,
          handleChange: h,
          handleSubmit: m,
        } = Tu({
          initialValues: o,
          validationSchema: v6,
          onSubmit: async (g, v) => {
            var _;
            console.log("login value", g);
            const S = await e(el(g));
            localStorage.setItem("loginMain", JSON.stringify(g)),
              (_ = S == null ? void 0 : S.payload) != null &&
                _.success &&
                v.resetForm();
          },
        });
      return (
        R.useEffect(() => {
          n === !1 &&
            (e(yp()),
            setTimeout(() => {
              e(DS());
            }, 5e3)),
            setTimeout(() => {
              e(ku());
            }, 5e3);
        }, [n, e]),
        E.jsx("div", {
          className:
            "bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10",
          children: E.jsxs("div", {
            className:
              "bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg",
            children: [
              E.jsx("h2", {
                className: "text-3xl text-center mb-4 text-orange-600",
                children: "Login",
              }),
              E.jsxs("form", {
                onSubmit: m,
                children: [
                  E.jsx("div", {
                    className: "mb-6",
                    children: E.jsx(Ai, {
                      type: "email",
                      placeholder: "Email",
                      label: "Email",
                      name: "email",
                      value: c == null ? void 0 : c.email,
                      onChange: h,
                      error:
                        (f == null ? void 0 : f.email) &&
                        (p == null ? void 0 : p.email),
                    }),
                  }),
                  E.jsx(mp, {
                    type: "submit",
                    title: a ? "Sending OTP..." : "Send OTP",
                    disabled: a || s,
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "mt-2 text-amber-50 text-center",
                children: [
                  "Don't have an account? please",
                  " ",
                  E.jsx(sn, {
                    to: "/register",
                    className: "text-orange-600 underline",
                    children: "Register",
                  }),
                ],
              }),
            ],
          }),
        })
      );
    },
    qu = () => {
      const e = ft(),
        n = xe((a) => {
          var s;
          return (s = a == null ? void 0 : a.profile) == null ? void 0 : s.data;
        });
      return (
        R.useEffect(() => {
          var a;
          e(
            NS({
              userId:
                (a = n == null ? void 0 : n.data) == null ? void 0 : a._id,
            })
          );
        }, [n, e]),
        n
      );
    },
    jS = () =>
      xe((n) => {
        var a;
        return (a = n == null ? void 0 : n.profile) == null
          ? void 0
          : a.loading;
      }),
    A6 =
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20width='200'%20height='200'%20style='shape-rendering:%20auto;%20display:%20block;%20background:%20transparent;'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3ccircle%20stroke-width='2'%20stroke='%23f54a00'%20fill='none'%20r='0'%20cy='50'%20cx='50'%3e%3canimate%20begin='0s'%20calcMode='spline'%20keySplines='0%200.2%200.8%201'%20keyTimes='0;1'%20values='0;40'%20dur='1s'%20repeatCount='indefinite'%20attributeName='r'%3e%3c/animate%3e%3canimate%20begin='0s'%20calcMode='spline'%20keySplines='0.2%200%200.8%201'%20keyTimes='0;1'%20values='1;0'%20dur='1s'%20repeatCount='indefinite'%20attributeName='opacity'%3e%3c/animate%3e%3c/circle%3e%3ccircle%20stroke-width='2'%20stroke='%23ffffff'%20fill='none'%20r='0'%20cy='50'%20cx='50'%3e%3canimate%20begin='-0.5s'%20calcMode='spline'%20keySplines='0%200.2%200.8%201'%20keyTimes='0;1'%20values='0;40'%20dur='1s'%20repeatCount='indefinite'%20attributeName='r'%3e%3c/animate%3e%3canimate%20begin='-0.5s'%20calcMode='spline'%20keySplines='0.2%200%200.8%201'%20keyTimes='0;1'%20values='1;0'%20dur='1s'%20repeatCount='indefinite'%20attributeName='opacity'%3e%3c/animate%3e%3c/circle%3e%3cg%3e%3c/g%3e%3c/g%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io%20--%3e%3c/svg%3e",
    O6 = () =>
      E.jsx("div", {
        className: " w-full h-[100dvh] bg-gray-800",
        children: E.jsx("div", {
          className:
            "text-white font-bold text-2xl h-full flex items-center justify-center",
          children: E.jsx("div", {
            className: "",
            children: E.jsx("div", {
              className: "flex justify-center",
              children: E.jsx("img", {
                src: A6,
                alt: "loader",
                className: "w-[200px]",
              }),
            }),
          }),
        }),
      }),
    BS = () => {
      const [e, n] = R.useState(!1),
        [a, s] = R.useState(null);
      R.useEffect(() => {
        const c = (f) => {
          console.log("✅ `beforeinstallprompt` event fired!"),
            f.preventDefault(),
            s(f),
            n(!0);
        };
        return (
          window.addEventListener("beforeinstallprompt", c),
          () => {
            window.removeEventListener("beforeinstallprompt", c);
          }
        );
      }, []);
      const o = async () => {
        if (a) {
          a.prompt();
          const { outcome: c } = await a.userChoice;
          console.log(`User chose: ${c}`), s(null), n(!1);
        }
      };
      return e
        ? E.jsx("button", {
            onClick: o,
            className: "install-button",
            children: "Install App",
          })
        : null;
    },
    R6 = () => {
      const e = xe((f) => {
          var p, h;
          return (h =
            (p = f == null ? void 0 : f.auth) == null
              ? void 0
              : p.sendOtpState) == null
            ? void 0
            : h.success;
        }),
        n = xe((f) => {
          var p, h;
          return (h =
            (p = f == null ? void 0 : f.auth) == null
              ? void 0
              : p.verifyOtpState) == null
            ? void 0
            : h.success;
        }),
        a = xe((f) => {
          var p, h;
          return (h =
            (p = f == null ? void 0 : f.auth) == null
              ? void 0
              : p.sendOtpState) == null
            ? void 0
            : h.message;
        }),
        s = xe((f) => {
          var p, h;
          return (h =
            (p = f == null ? void 0 : f.auth) == null
              ? void 0
              : p.verifyOtpState) == null
            ? void 0
            : h.message;
        }),
        o = xe((f) => {
          var p;
          return (p = f == null ? void 0 : f.toast) == null ? void 0 : p.value;
        });
      return jS()
        ? E.jsx(O6, {})
        : E.jsxs(E.Fragment, {
            children: [
              o &&
                E.jsx(mS, {
                  state: e || n,
                  errorMessage: e === !1 ? a : n === !1 ? s : "",
                }),
              E.jsx("div", {
                className: "",
                children:
                  e && (n !== null || n !== void 0 || n === !1)
                    ? E.jsx(_6, {})
                    : E.jsx(T6, {}),
              }),
              E.jsx(BS, {}),
            ],
          });
    },
    Oh = (e, n) => n.some((a) => e instanceof a);
  let Xv, Qv;
  function C6() {
    return (
      Xv ||
      (Xv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function D6() {
    return (
      Qv ||
      (Qv = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  const Rh = new WeakMap(),
    Bd = new WeakMap(),
    Hu = new WeakMap();
  function N6(e) {
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("success", c),
            e.removeEventListener("error", f);
        },
        c = () => {
          a(xa(e.result)), o();
        },
        f = () => {
          s(e.error), o();
        };
      e.addEventListener("success", c), e.addEventListener("error", f);
    });
    return Hu.set(n, e), n;
  }
  function M6(e) {
    if (Rh.has(e)) return;
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("complete", c),
            e.removeEventListener("error", f),
            e.removeEventListener("abort", f);
        },
        c = () => {
          a(), o();
        },
        f = () => {
          s(e.error || new DOMException("AbortError", "AbortError")), o();
        };
      e.addEventListener("complete", c),
        e.addEventListener("error", f),
        e.addEventListener("abort", f);
    });
    Rh.set(e, n);
  }
  let Ch = {
    get(e, n, a) {
      if (e instanceof IDBTransaction) {
        if (n === "done") return Rh.get(e);
        if (n === "store")
          return a.objectStoreNames[1]
            ? void 0
            : a.objectStore(a.objectStoreNames[0]);
      }
      return xa(e[n]);
    },
    set(e, n, a) {
      return (e[n] = a), !0;
    },
    has(e, n) {
      return e instanceof IDBTransaction && (n === "done" || n === "store")
        ? !0
        : n in e;
    },
  };
  function US(e) {
    Ch = e(Ch);
  }
  function j6(e) {
    return D6().includes(e)
      ? function (...n) {
          return e.apply(Dh(this), n), xa(this.request);
        }
      : function (...n) {
          return xa(e.apply(Dh(this), n));
        };
  }
  function B6(e) {
    return typeof e == "function"
      ? j6(e)
      : (e instanceof IDBTransaction && M6(e),
        Oh(e, C6()) ? new Proxy(e, Ch) : e);
  }
  function xa(e) {
    if (e instanceof IDBRequest) return N6(e);
    if (Bd.has(e)) return Bd.get(e);
    const n = B6(e);
    return n !== e && (Bd.set(e, n), Hu.set(n, e)), n;
  }
  const Dh = (e) => Hu.get(e);
  function U6(
    e,
    n,
    { blocked: a, upgrade: s, blocking: o, terminated: c } = {}
  ) {
    const f = indexedDB.open(e, n),
      p = xa(f);
    return (
      s &&
        f.addEventListener("upgradeneeded", (h) => {
          s(xa(f.result), h.oldVersion, h.newVersion, xa(f.transaction), h);
        }),
      a &&
        f.addEventListener("blocked", (h) => a(h.oldVersion, h.newVersion, h)),
      p
        .then((h) => {
          c && h.addEventListener("close", () => c()),
            o &&
              h.addEventListener("versionchange", (m) =>
                o(m.oldVersion, m.newVersion, m)
              );
        })
        .catch(() => {}),
      p
    );
  }
  const L6 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    k6 = ["put", "add", "delete", "clear"],
    Ud = new Map();
  function Zv(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == "string"))
      return;
    if (Ud.get(n)) return Ud.get(n);
    const a = n.replace(/FromIndex$/, ""),
      s = n !== a,
      o = k6.includes(a);
    if (
      !(a in (s ? IDBIndex : IDBObjectStore).prototype) ||
      !(o || L6.includes(a))
    )
      return;
    const c = async function (f, ...p) {
      const h = this.transaction(f, o ? "readwrite" : "readonly");
      let m = h.store;
      return (
        s && (m = m.index(p.shift())),
        (await Promise.all([m[a](...p), o && h.done]))[0]
      );
    };
    return Ud.set(n, c), c;
  }
  US((e) => ({
    ...e,
    get: (n, a, s) => Zv(n, a) || e.get(n, a, s),
    has: (n, a) => !!Zv(n, a) || e.has(n, a),
  }));
  const z6 = ["continue", "continuePrimaryKey", "advance"],
    Jv = {},
    Nh = new WeakMap(),
    LS = new WeakMap(),
    $6 = {
      get(e, n) {
        if (!z6.includes(n)) return e[n];
        let a = Jv[n];
        return (
          a ||
            (a = Jv[n] =
              function (...s) {
                Nh.set(this, LS.get(this)[n](...s));
              }),
          a
        );
      },
    };
  async function* q6(...e) {
    let n = this;
    if ((n instanceof IDBCursor || (n = await n.openCursor(...e)), !n)) return;
    n = n;
    const a = new Proxy(n, $6);
    for (LS.set(a, n), Hu.set(a, Dh(n)); n; )
      yield a, (n = await (Nh.get(a) || n.continue())), Nh.delete(a);
  }
  function Wv(e, n) {
    return (
      (n === Symbol.asyncIterator &&
        Oh(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
      (n === "iterate" && Oh(e, [IDBIndex, IDBObjectStore]))
    );
  }
  US((e) => ({
    ...e,
    get(n, a, s) {
      return Wv(n, a) ? q6 : e.get(n, a, s);
    },
    has(n, a) {
      return Wv(n, a) || e.has(n, a);
    },
  }));
  const H6 = "chat-app",
    pu = "messages",
    xp = U6(H6, 1, {
      upgrade(e) {
        e.objectStoreNames.contains(pu) ||
          e.createObjectStore(pu, { keyPath: "_id" });
      },
    }),
    Fu = async (e) => {
      await (await xp).put(pu, e);
    },
    Vu = async () => {
      const n = await (await xp).getAll(pu);
      return n || [];
    },
    kS = async () => {
      console.log("🗑 Clearing IndexedDB messages...");
      const n = (await xp).transaction("messages", "readwrite");
      await n.objectStore("messages").clear(),
        await n.done,
        console.log("✅ IndexedDB messages cleared.");
    },
    _p = "http://localhost:1322/api",
    Ci = Gt(
      "getUsers",
      async () =>
        (await _e.get(`${_p}/message/users`, { withCredentials: !0 })).data
    ),
    Di = Gt("getMessage", async (e) => {
      var s;
      if (!navigator.onLine)
        return (
          console.log("📴 Offline: Fetching messages from IndexedDB"),
          { message: await Vu() }
        );
      const a =
        ((s = (await _e.get(`${_p}/message/${e}`, { withCredentials: !0 }))
          .data) == null
          ? void 0
          : s.message) || [];
      await kS();
      for (const o of a) await Fu(o);
      return { message: a };
    }),
    tl = Gt(
      "sendMessage",
      async ({ selectedUserId: e, text: n, loggedinUserId: a }) => {
        const s = {
          _id: crypto.randomUUID(),
          senderId: a,
          recieverId: e,
          text: n,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __v: 0,
          success: !1,
        };
        return navigator.onLine
          ? (
              await _e.post(
                `${_p}/message/send/${e}`,
                { text: n },
                { withCredentials: !0 }
              )
            ).data
          : (console.log("📴 User is offline. Saving message locally."),
            await Fu(s),
            s);
      }
    ),
    F6 = (e, n, a, s, o) => {
      n &&
        (n.off("newMessage"),
        n.on("newMessage", async (c) => {
          console.log("🔵 New message received:", c),
            console.log("messageLoading", o),
            o ||
              (((c.senderId === a && c.recieverId === s) ||
                (c.senderId === s && c.recieverId === a)) &&
                (e($S(c)), await Fu(c)));
        }));
    },
    V6 = (e) => {
      e &&
        (console.log("🛑 Unsubscribing from messages."), e.off("newMessage"));
    },
    I6 = {
      messages: [],
      users: null,
      selectedUser: null,
      userLoading: !1,
      messageLoading: !1,
      error: null,
    },
    zS = ir({
      name: "chat",
      initialState: I6,
      reducers: {
        selectUser: (e, n) => {
          (e.selectedUser = n.payload),
            localStorage.setItem("selectedUser", JSON.stringify(n.payload));
        },
        removeSelectUser: (e) => {
          (e.selectedUser = null),
            localStorage.setItem("selectedUser", JSON.stringify(null));
        },
        addMessage: (e, n) => {
          e.messageLoading === !1 &&
            (Array.isArray(e.messages) || (e.messages = []),
            e.messages.push(n.payload));
        },
      },
      extraReducers: (e) => {
        e.addCase(Ci.pending, (n) => {
          n.userLoading = !0;
        })
          .addCase(Ci.fulfilled, (n, a) => {
            (n.userLoading = !1), (n.users = a.payload);
          })
          .addCase(Ci.rejected, (n, a) => {
            (n.userLoading = !1),
              (n.error = a.error.message || "Something went wrong");
          })
          .addCase(Di.pending, (n) => {
            n.messageLoading = !0;
          })
          .addCase(Di.fulfilled, (n, a) => {
            (n.messageLoading = !1),
              a.payload && Array.isArray(a.payload.message)
                ? (n.messages = a.payload.message)
                : (n.messages = []);
          })
          .addCase(Di.rejected, (n, a) => {
            (n.messageLoading = !1),
              (n.error = a.error.message || "Something went wrong");
          })
          .addCase(tl.pending, (n) => {
            n.messageLoading = !0;
          })
          .addCase(tl.fulfilled, (n, a) => {
            (n.messageLoading = !1),
              Array.isArray(n.messages) || (n.messages = []),
              a.payload && (n.messages = [...n.messages, a.payload]);
          })
          .addCase(tl.rejected, (n, a) => {
            (n.messageLoading = !1),
              (n.error = a.error.message || "Something went wrong");
          });
      },
    }),
    { selectUser: G6, addMessage: $S, removeSelectUser: P6 } = zS.actions,
    Y6 = zS.reducer,
    qS = () => {
      const e = ft(),
        n = xe((s) => s.auth.socket),
        a = xe((s) => s.auth.onlineUsers);
      return (
        R.useEffect(() => {
          if (n && n.connected)
            return (
              n.on("getOnlineUsers", (s) => {
                console.log("🔵 Online Users Received:", s), e(MS(s));
              }),
              () => {
                n.off("getOnlineUsers");
              }
            );
        }, [e, n]),
        a
      );
    },
    K6 = ({ firstName: e, lastName: n, _id: a }) => {
      const s = ft(),
        o = e == null ? void 0 : e.slice(0, 1),
        c = n == null ? void 0 : n.slice(0, 1),
        f = qS(),
        p = () => {
          s(G6({ _id: a, firstName: e, lastName: n })), s(Di(a));
        };
      return E.jsx("div", {
        className: "px-3",
        onClick: () => p(),
        children: E.jsxs("button", {
          className:
            "py-2 px-2 lg:px-5 my-1 flex items-center gap-5 w-full cursor-pointer hover:bg-gray-800 rounded-md border-b-[1px] border-orange-600",
          children: [
            E.jsxs("div", {
              className:
                "relative text-[16px]text-[16px] text-white bg-gray-600 rounded-full py-2.5 px-3 uppercase w-[45px]",
              children: [
                o,
                c,
                f != null && f.includes(a)
                  ? E.jsx("span", {
                      className:
                        "absolute bottom-1 right-[-5px] bg-green-500 rounded-2xl border-2 border-black",
                      children: E.jsx("svg", {
                        width: "10",
                        height: "10",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "#FFFFFF",
                        stroke: "#00c951",
                        children: E.jsx("path", {
                          d: "M11.993 6.648a.75.75 0 0 0-1.493.102v6c0 .028.002.057.006.086v.016a.75.75 0 0 0 .28.486l2.762 2.763.077.067a.75.75 0 0 0 .984-1.127L12 12.5V6.75l-.007-.102Z",
                        }),
                      }),
                    })
                  : E.jsx("span", {
                      className:
                        "absolute bottom-1 right-[-5px] bg-[#ffba00] rounded-2xl border-2 border-black",
                      children: E.jsx("svg", {
                        width: "10",
                        height: "10",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "#FFFFFF",
                        children: E.jsx("path", {
                          d: "M11.993 6.648a.75.75 0 0 0-1.493.102v6c0 .028.002.057.006.086v.016a.75.75 0 0 0 .28.486l2.762 2.763.077.067a.75.75 0 0 0 .984-1.127L12 12.5V6.75l-.007-.102Z",
                        }),
                      }),
                    }),
              ],
            }),
            E.jsxs("div", {
              className:
                "text-[17px] lg:text-[18px] text-white capitalize font-normal",
              children: [e, " ", n],
            }),
          ],
        }),
      });
    },
    HS = () =>
      xe((n) => {
        var a, s;
        return (
          ((s = (a = n == null ? void 0 : n.chat) == null ? void 0 : a.users) ==
          null
            ? void 0
            : s.data) || []
        );
      }),
    X6 = () =>
      xe((n) => {
        var a;
        return (a = n == null ? void 0 : n.chat) == null
          ? void 0
          : a.userLoading;
      }),
    FS = Xn.createContext({}),
    VS = !0;
  function Q6({
    baseColor: e,
    highlightColor: n,
    width: a,
    height: s,
    borderRadius: o,
    circle: c,
    direction: f,
    duration: p,
    enableAnimation: h = VS,
    customHighlightBackground: m,
  }) {
    const g = {};
    return (
      f === "rtl" && (g["--animation-direction"] = "reverse"),
      typeof p == "number" && (g["--animation-duration"] = `${p}s`),
      h || (g["--pseudo-element-display"] = "none"),
      (typeof a == "string" || typeof a == "number") && (g.width = a),
      (typeof s == "string" || typeof s == "number") && (g.height = s),
      (typeof o == "string" || typeof o == "number") && (g.borderRadius = o),
      c && (g.borderRadius = "50%"),
      typeof e < "u" && (g["--base-color"] = e),
      typeof n < "u" && (g["--highlight-color"] = n),
      typeof m == "string" && (g["--custom-highlight-background"] = m),
      g
    );
  }
  function ct({
    count: e = 1,
    wrapper: n,
    className: a,
    containerClassName: s,
    containerTestId: o,
    circle: c = !1,
    style: f,
    ...p
  }) {
    var h, m, g;
    const v = Xn.useContext(FS),
      S = { ...p };
    for (const [B, P] of Object.entries(p)) typeof P > "u" && delete S[B];
    const _ = { ...v, ...S, circle: c },
      w = { ...f, ...Q6(_) };
    let M = "react-loading-skeleton";
    a && (M += ` ${a}`);
    const A = (h = _.inline) !== null && h !== void 0 ? h : !1,
      T = [],
      L = Math.ceil(e);
    for (let B = 0; B < L; B++) {
      let P = w;
      if (L > e && B === L - 1) {
        const F = (m = P.width) !== null && m !== void 0 ? m : "100%",
          K = e % 1,
          ee = typeof F == "number" ? F * K : `calc(${F} * ${K})`;
        P = { ...P, width: ee };
      }
      const N = Xn.createElement(
        "span",
        { className: M, style: P, key: B },
        "‌"
      );
      A
        ? T.push(N)
        : T.push(
            Xn.createElement(
              Xn.Fragment,
              { key: B },
              N,
              Xn.createElement("br", null)
            )
          );
    }
    return Xn.createElement(
      "span",
      {
        className: s,
        "data-testid": o,
        "aria-live": "polite",
        "aria-busy": (g = _.enableAnimation) !== null && g !== void 0 ? g : VS,
      },
      n ? T.map((B, P) => Xn.createElement(n, { key: P }, B)) : T
    );
  }
  function Ni({ children: e, ...n }) {
    return Xn.createElement(FS.Provider, { value: n }, e);
  }
  const Z6 = () => {
      const e = ft(),
        n = HS(),
        a = X6();
      return (
        R.useEffect(() => {
          e(Ci());
        }, [e]),
        E.jsx("div", {
          className: "",
          children: E.jsx("div", {
            className: "py-5",
            children: a
              ? E.jsxs(Ni, {
                  baseColor: "#39424e",
                  highlightColor: "#f54a00",
                  children: [
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                  ],
                })
              : n == null
              ? void 0
              : n.map((s) =>
                  E.jsx(
                    K6,
                    {
                      _id: s == null ? void 0 : s._id,
                      firstName: s == null ? void 0 : s.firstName,
                      lastName: s == null ? void 0 : s.lastName,
                    },
                    s == null ? void 0 : s._id
                  )
                ),
          }),
        })
      );
    },
    eb = () => {
      const e = ft(),
        n = HS();
      return (
        R.useEffect(() => {
          e(Ci());
        }, [e]),
        E.jsx("div", {
          className:
            "bg-gray-900 w-full md:w-[35%] lg:w-[25%] min-h-full h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] overflow-x-auto",
          children:
            (n == null ? void 0 : n.length) > 0
              ? E.jsx("div", { className: "", children: E.jsx(Z6, {}) })
              : E.jsxs("div", {
                  className:
                    "text-orange-600 h-full flex justify-center items-center flex-col",
                  children: [
                    E.jsx("p", { children: "No Users to chat " }),
                    E.jsx("p", { children: "To get Users to chat click here" }),
                    E.jsx(sn, {
                      to: "/find-users",
                      className:
                        "bg-white px-3 py-1 rounded-sm text-[15px] mt-2",
                      children: "Find Users",
                    }),
                  ],
                }),
        })
      );
    },
    Iu = () => {
      const e = xe((a) => a.chat.selectedUser);
      return R.useMemo(() => {
        if (e) return e;
        const a = localStorage.getItem("selectedUser");
        return a ? JSON.parse(a) : null;
      }, [e]);
    },
    J6 = () =>
      xe((n) => {
        var a;
        return (a = n == null ? void 0 : n.chat) == null ? void 0 : a.messages;
      }),
    W6 = ({ name: e, placeholder: n, value: a, onChange: s, onKeyDown: o }) =>
      E.jsx("div", {
        className: "w-full leading-0",
        children: E.jsx("textarea", {
          name: e,
          placeholder: n,
          value: a,
          onChange: s,
          onKeyDown: o,
          className:
            "text-zinc-200 border-[1px] shadow-lg focus:shadow-orange-600/20  leading-[1.3] border-orange-600 rounded-4xl text-md px-4 py-2 h-[40px] w-full focus:outline-0 overflow-hidden break-words whitespace-pre-wrap",
        }),
      }),
    e4 = ({ type: e, disabled: n }) =>
      E.jsx("div", {
        className: "text-center",
        children: E.jsx("button", {
          type: e || "submit",
          className: `${
            n
              ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
              : "bg-orange-600  hover:bg-orange-800 cursor-pointer"
          } text-zinc-200 rounded-sm  px-2 py-2 w-full text-md font-medium transition duration-300 ease-in-out`,
          disabled: n,
          children: E.jsxs("svg", {
            id: "Layer_1",
            "data-name": "Layer 1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.56 122.88",
            className: "w-[22px] fill-white",
            children: [
              E.jsx("defs", {
                children: E.jsx("style", { children: ".cls-1" }),
              }),
              E.jsx("path", {
                className: "cls-1",
                d: "M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z",
              }),
            ],
          }),
        }),
      }),
    yt = [];
  for (let e = 0; e < 256; ++e) yt.push((e + 256).toString(16).slice(1));
  function t4(e, n = 0) {
    return (
      yt[e[n + 0]] +
      yt[e[n + 1]] +
      yt[e[n + 2]] +
      yt[e[n + 3]] +
      "-" +
      yt[e[n + 4]] +
      yt[e[n + 5]] +
      "-" +
      yt[e[n + 6]] +
      yt[e[n + 7]] +
      "-" +
      yt[e[n + 8]] +
      yt[e[n + 9]] +
      "-" +
      yt[e[n + 10]] +
      yt[e[n + 11]] +
      yt[e[n + 12]] +
      yt[e[n + 13]] +
      yt[e[n + 14]] +
      yt[e[n + 15]]
    ).toLowerCase();
  }
  let Ld;
  const n4 = new Uint8Array(16);
  function r4() {
    if (!Ld) {
      if (typeof crypto > "u" || !crypto.getRandomValues)
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      Ld = crypto.getRandomValues.bind(crypto);
    }
    return Ld(n4);
  }
  const a4 =
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    tb = { randomUUID: a4 };
  function i4(e, n, a) {
    var o;
    if (tb.randomUUID && !e) return tb.randomUUID();
    e = e || {};
    const s = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? r4();
    if (s.length < 16) throw new Error("Random bytes length must be >= 16");
    return (s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), t4(s);
  }
  const s4 = () => {
      const e = Iu(),
        n = qu(),
        a = ft(),
        s = { chat: "" },
        {
          values: o,
          handleChange: c,
          handleSubmit: f,
          resetForm: p,
        } = Tu({
          initialValues: s,
          onSubmit: async (m) => {
            var _, w, M, A;
            if (
              !e ||
              !((_ = n == null ? void 0 : n.data) != null && _._id) ||
              !(m != null && m.chat.trim())
            )
              return;
            const g = {
              _id: i4(),
              senderId:
                (w = n == null ? void 0 : n.data) == null ? void 0 : w._id,
              recieverId: e == null ? void 0 : e._id,
              text: m == null ? void 0 : m.chat.trim(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              __v: 0,
              success: !1,
            };
            if (!navigator.onLine) {
              console.log("📴 Offline mode: Saving message locally."),
                await Fu(g),
                a($S(g)),
                p();
              return;
            }
            const v = await a(
              tl({
                selectedUserId: e == null ? void 0 : e._id,
                text: g.text,
                loggedinUserId:
                  (M = n == null ? void 0 : n.data) == null ? void 0 : M._id,
              })
            );
            (A = v == null ? void 0 : v.payload) != null &&
              A.success &&
              a(Di(e == null ? void 0 : e._id));
            const S = Vu();
            console.log("unsent message", S), p();
          },
        }),
        h = (m) => {
          m.key === "Enter" &&
            !m.shiftKey &&
            (o == null ? void 0 : o.chat.trim().length) > 0 &&
            (m.preventDefault(), f());
        };
      return E.jsx("form", {
        onSubmit: f,
        className: "w-full relative z-10 px-5 md:px-10",
        children: E.jsxs("div", {
          className: "flex items-center justify-center w-full gap-5 py-4",
          children: [
            E.jsx(W6, {
              type: "text",
              name: "chat",
              placeholder: "Type...",
              value: o.chat,
              onChange: c,
              onKeyDown: h,
            }),
            E.jsx(e4, {
              type: "submit",
              disabled: (o == null ? void 0 : o.chat.trim().length) < 1,
            }),
          ],
        }),
      });
    },
    nb = (e) =>
      new Date(e).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
        hour12: !1,
      }),
    rb = () => {
      var g;
      const e = Iu(),
        n = J6(),
        a = qu(),
        s = ft(),
        o = qS(),
        c = R.useRef(null),
        f = xe((v) => v.auth.socket),
        p = xe((v) => {
          var S;
          return (S = v == null ? void 0 : v.chat) == null
            ? void 0
            : S.messageLoading;
        }),
        [h, m] = R.useState(!1);
      return (
        R.useEffect(() => {
          (async () => {
            if (!(!e || h)) {
              try {
                const w = (await Vu()).filter(
                  (M, A, T) => A === T.findIndex((L) => L._id === M._id)
                );
                s({ type: "chat/setMessages", payload: w }),
                  console.log("Offline messages loaded:", w),
                  navigator.onLine && (await s(Di(e._id)));
              } catch (_) {
                console.error("Error fetching messages:", _);
              }
              m(!0);
            }
          })();
          const S = () => {
            m(!1);
          };
          return (
            window.addEventListener("online", S),
            () => window.removeEventListener("online", S)
          );
        }, [s, e, h]),
        R.useEffect(() => {
          var v;
          return (
            e &&
              f &&
              F6(
                s,
                f,
                e._id,
                (v = a == null ? void 0 : a.data) == null ? void 0 : v._id,
                p
              ),
            () => {
              f && V6(f);
            }
          );
        }, [
          e,
          f,
          s,
          (g = a == null ? void 0 : a.data) == null ? void 0 : g._id,
          p,
        ]),
        R.useEffect(() => {
          c.current && (c.current.scrollTop = c.current.scrollHeight);
        }, [n]),
        E.jsxs("div", {
          className: "flex flex-col justify-between h-full",
          children: [
            E.jsx("div", {
              className: "w-full",
              children: E.jsxs("div", {
                className:
                  "text-orange-600 text-xl lg:text-2xl text-left px-5 py-2 lg:py-3 bg-[#85300452] w-full rounded-sm capitalize",
                children: [
                  e == null ? void 0 : e.firstName,
                  " ",
                  e == null ? void 0 : e.lastName,
                  o != null && o.includes(e == null ? void 0 : e._id)
                    ? E.jsx("span", {
                        className: "block text-yellow-50 text-sm",
                        children: "Online",
                      })
                    : E.jsx("span", {
                        className: "block text-yellow-50 text-sm",
                        children: "Offline",
                      }),
                ],
              }),
            }),
            E.jsx("div", {
              className:
                "h-full w-full flex flex-col items-center justify-between pb-10 pt-[77px] absolute",
              children: E.jsx("div", {
                className: "h-full w-full flex items-end pb-10",
                children: E.jsx("div", {
                  className: "w-full h-full overflow-auto px-5",
                  children: E.jsx("div", {
                    ref: c,
                    className: "w-full h-full overflow-auto px-3 lg:px-10",
                    children:
                      n == null
                        ? void 0
                        : n.map((v) => {
                            var S, _, w;
                            return (v == null ? void 0 : v.senderId) ===
                              ((S = a == null ? void 0 : a.data) == null
                                ? void 0
                                : S._id)
                              ? E.jsx(
                                  "div",
                                  {
                                    className:
                                      "flex justify-end text-[17px] w-fit ml-auto rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]",
                                    children:
                                      (v == null ? void 0 : v.text) &&
                                      E.jsx("div", {
                                        className:
                                          "my-3 flex flex-row-reverse gap-3 w-full",
                                        children: E.jsxs("div", {
                                          className: "w-fit max-w-[100%]",
                                          children: [
                                            E.jsx("div", {
                                              className:
                                                "mb-[0.5] text-[10px] text-white text-right",
                                              children: nb(
                                                v == null ? void 0 : v.createdAt
                                              ),
                                            }),
                                            E.jsx("div", {
                                              className:
                                                "py-1 px-3 text-white bg-[#f54a0045] rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words",
                                              children:
                                                v == null ? void 0 : v.text,
                                            }),
                                          ],
                                        }),
                                      }),
                                  },
                                  v == null ? void 0 : v._id
                                )
                              : E.jsx(
                                  "div",
                                  {
                                    className:
                                      "flex justify-normal text-[17px] mr-auto rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]",
                                    children:
                                      (v == null ? void 0 : v.text) &&
                                      E.jsxs("div", {
                                        className:
                                          "my-3 flex flex-row gap-3 items-center w-full",
                                        children: [
                                          E.jsxs("div", {
                                            className:
                                              "text-[18px] lg:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[45px] lg:w-[50px] flex items-center justify-center",
                                            children: [
                                              (_ =
                                                e == null
                                                  ? void 0
                                                  : e.firstName) == null
                                                ? void 0
                                                : _.slice(0, 1),
                                              (w =
                                                e == null
                                                  ? void 0
                                                  : e.lastName) == null
                                                ? void 0
                                                : w.slice(0, 1),
                                            ],
                                          }),
                                          E.jsxs("div", {
                                            className: "w-fit max-w-[100%]",
                                            children: [
                                              E.jsx("div", {
                                                className:
                                                  "mb-[0.5] text-[10px] text-white text-left",
                                                children: nb(
                                                  v == null
                                                    ? void 0
                                                    : v.createdAt
                                                ),
                                              }),
                                              E.jsx("div", {
                                                className:
                                                  "py-1 px-3 text-white bg-black rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words min-w-[20px] max-w-full",
                                                children:
                                                  v == null ? void 0 : v.text,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  },
                                  v == null ? void 0 : v._id
                                );
                          }),
                  }),
                }),
              }),
            }),
            E.jsx(s4, {}),
          ],
        })
      );
    },
    l4 = () =>
      E.jsxs("div", {
        className:
          "text-orange-600 absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]",
        children: [
          E.jsx("div", {
            className: "text-2xl lg:text-3xl xl:text-4xl",
            children: "Welcome to ChitChat",
          }),
          E.jsx("p", {
            className: "text-lg text-center",
            children: "Chat with your friends.",
          }),
        ],
      }),
    o4 = () => {};
  var ab = {};
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const IS = function (e) {
      const n = [];
      let a = 0;
      for (let s = 0; s < e.length; s++) {
        let o = e.charCodeAt(s);
        o < 128
          ? (n[a++] = o)
          : o < 2048
          ? ((n[a++] = (o >> 6) | 192), (n[a++] = (o & 63) | 128))
          : (o & 64512) === 55296 &&
            s + 1 < e.length &&
            (e.charCodeAt(s + 1) & 64512) === 56320
          ? ((o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++s) & 1023)),
            (n[a++] = (o >> 18) | 240),
            (n[a++] = ((o >> 12) & 63) | 128),
            (n[a++] = ((o >> 6) & 63) | 128),
            (n[a++] = (o & 63) | 128))
          : ((n[a++] = (o >> 12) | 224),
            (n[a++] = ((o >> 6) & 63) | 128),
            (n[a++] = (o & 63) | 128));
      }
      return n;
    },
    u4 = function (e) {
      const n = [];
      let a = 0,
        s = 0;
      for (; a < e.length; ) {
        const o = e[a++];
        if (o < 128) n[s++] = String.fromCharCode(o);
        else if (o > 191 && o < 224) {
          const c = e[a++];
          n[s++] = String.fromCharCode(((o & 31) << 6) | (c & 63));
        } else if (o > 239 && o < 365) {
          const c = e[a++],
            f = e[a++],
            p = e[a++],
            h =
              (((o & 7) << 18) |
                ((c & 63) << 12) |
                ((f & 63) << 6) |
                (p & 63)) -
              65536;
          (n[s++] = String.fromCharCode(55296 + (h >> 10))),
            (n[s++] = String.fromCharCode(56320 + (h & 1023)));
        } else {
          const c = e[a++],
            f = e[a++];
          n[s++] = String.fromCharCode(
            ((o & 15) << 12) | ((c & 63) << 6) | (f & 63)
          );
        }
      }
      return n.join("");
    },
    GS = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: typeof atob == "function",
      encodeByteArray(e, n) {
        if (!Array.isArray(e))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const a = n ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          s = [];
        for (let o = 0; o < e.length; o += 3) {
          const c = e[o],
            f = o + 1 < e.length,
            p = f ? e[o + 1] : 0,
            h = o + 2 < e.length,
            m = h ? e[o + 2] : 0,
            g = c >> 2,
            v = ((c & 3) << 4) | (p >> 4);
          let S = ((p & 15) << 2) | (m >> 6),
            _ = m & 63;
          h || ((_ = 64), f || (S = 64)), s.push(a[g], a[v], a[S], a[_]);
        }
        return s.join("");
      },
      encodeString(e, n) {
        return this.HAS_NATIVE_SUPPORT && !n
          ? btoa(e)
          : this.encodeByteArray(IS(e), n);
      },
      decodeString(e, n) {
        return this.HAS_NATIVE_SUPPORT && !n
          ? atob(e)
          : u4(this.decodeStringToByteArray(e, n));
      },
      decodeStringToByteArray(e, n) {
        this.init_();
        const a = n ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          s = [];
        for (let o = 0; o < e.length; ) {
          const c = a[e.charAt(o++)],
            p = o < e.length ? a[e.charAt(o)] : 0;
          ++o;
          const m = o < e.length ? a[e.charAt(o)] : 64;
          ++o;
          const v = o < e.length ? a[e.charAt(o)] : 64;
          if ((++o, c == null || p == null || m == null || v == null))
            throw new c4();
          const S = (c << 2) | (p >> 4);
          if ((s.push(S), m !== 64)) {
            const _ = ((p << 4) & 240) | (m >> 2);
            if ((s.push(_), v !== 64)) {
              const w = ((m << 6) & 192) | v;
              s.push(w);
            }
          }
        }
        return s;
      },
      init_() {
        if (!this.byteToCharMap_) {
          (this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {});
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] =
                this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
        }
      },
    };
  class c4 extends Error {
    constructor() {
      super(...arguments), (this.name = "DecodeBase64StringError");
    }
  }
  const f4 = function (e) {
      const n = IS(e);
      return GS.encodeByteArray(n, !0);
    },
    PS = function (e) {
      return f4(e).replace(/\./g, "");
    },
    d4 = function (e) {
      try {
        return GS.decodeString(e, !0);
      } catch (n) {
        console.error("base64Decode failed: ", n);
      }
      return null;
    };
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function h4() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.");
  }
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const p4 = () => h4().__FIREBASE_DEFAULTS__,
    m4 = () => {
      if (typeof process > "u" || typeof ab > "u") return;
      const e = ab.__FIREBASE_DEFAULTS__;
      if (e) return JSON.parse(e);
    },
    y4 = () => {
      if (typeof document > "u") return;
      let e;
      try {
        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
      } catch {
        return;
      }
      const n = e && d4(e[1]);
      return n && JSON.parse(n);
    },
    g4 = () => {
      try {
        return o4() || p4() || m4() || y4();
      } catch (e) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
      }
    },
    YS = () => {
      var e;
      return (e = g4()) === null || e === void 0 ? void 0 : e.config;
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class v4 {
    constructor() {
      (this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((n, a) => {
          (this.resolve = n), (this.reject = a);
        }));
    }
    wrapCallback(n) {
      return (a, s) => {
        a ? this.reject(a) : this.resolve(s),
          typeof n == "function" &&
            (this.promise.catch(() => {}), n.length === 1 ? n(a) : n(a, s));
      };
    }
  }
  function KS() {
    try {
      return typeof indexedDB == "object";
    } catch {
      return !1;
    }
  }
  function XS() {
    return new Promise((e, n) => {
      try {
        let a = !0;
        const s = "validate-browser-context-for-indexeddb-analytics-module",
          o = self.indexedDB.open(s);
        (o.onsuccess = () => {
          o.result.close(), a || self.indexedDB.deleteDatabase(s), e(!0);
        }),
          (o.onupgradeneeded = () => {
            a = !1;
          }),
          (o.onerror = () => {
            var c;
            n(
              ((c = o.error) === null || c === void 0 ? void 0 : c.message) ||
                ""
            );
          });
      } catch (a) {
        n(a);
      }
    });
  }
  function b4() {
    return !(typeof navigator > "u" || !navigator.cookieEnabled);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const S4 = "FirebaseError";
  class Hi extends Error {
    constructor(n, a, s) {
      super(a),
        (this.code = n),
        (this.customData = s),
        (this.name = S4),
        Object.setPrototypeOf(this, Hi.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, Gu.prototype.create);
    }
  }
  class Gu {
    constructor(n, a, s) {
      (this.service = n), (this.serviceName = a), (this.errors = s);
    }
    create(n, ...a) {
      const s = a[0] || {},
        o = `${this.service}/${n}`,
        c = this.errors[n],
        f = c ? E4(c, s) : "Error",
        p = `${this.serviceName}: ${f} (${o}).`;
      return new Hi(o, p, s);
    }
  }
  function E4(e, n) {
    return e.replace(w4, (a, s) => {
      const o = n[s];
      return o != null ? String(o) : `<${s}?>`;
    });
  }
  const w4 = /\{\$([^}]+)}/g;
  function Mh(e, n) {
    if (e === n) return !0;
    const a = Object.keys(e),
      s = Object.keys(n);
    for (const o of a) {
      if (!s.includes(o)) return !1;
      const c = e[o],
        f = n[o];
      if (ib(c) && ib(f)) {
        if (!Mh(c, f)) return !1;
      } else if (c !== f) return !1;
    }
    for (const o of s) if (!a.includes(o)) return !1;
    return !0;
  }
  function ib(e) {
    return e !== null && typeof e == "object";
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Tp(e) {
    return e && e._delegate ? e._delegate : e;
  }
  class Hr {
    constructor(n, a, s) {
      (this.name = n),
        (this.instanceFactory = a),
        (this.type = s),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    setInstantiationMode(n) {
      return (this.instantiationMode = n), this;
    }
    setMultipleInstances(n) {
      return (this.multipleInstances = n), this;
    }
    setServiceProps(n) {
      return (this.serviceProps = n), this;
    }
    setInstanceCreatedCallback(n) {
      return (this.onInstanceCreated = n), this;
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const ga = "[DEFAULT]";
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class x4 {
    constructor(n, a) {
      (this.name = n),
        (this.container = a),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map());
    }
    get(n) {
      const a = this.normalizeInstanceIdentifier(n);
      if (!this.instancesDeferred.has(a)) {
        const s = new v4();
        if (
          (this.instancesDeferred.set(a, s),
          this.isInitialized(a) || this.shouldAutoInitialize())
        )
          try {
            const o = this.getOrInitializeService({ instanceIdentifier: a });
            o && s.resolve(o);
          } catch {}
      }
      return this.instancesDeferred.get(a).promise;
    }
    getImmediate(n) {
      var a;
      const s = this.normalizeInstanceIdentifier(
          n == null ? void 0 : n.identifier
        ),
        o =
          (a = n == null ? void 0 : n.optional) !== null && a !== void 0
            ? a
            : !1;
      if (this.isInitialized(s) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: s });
        } catch (c) {
          if (o) return null;
          throw c;
        }
      else {
        if (o) return null;
        throw Error(`Service ${this.name} is not available`);
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(n) {
      if (n.name !== this.name)
        throw Error(
          `Mismatching Component ${n.name} for Provider ${this.name}.`
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = n), !!this.shouldAutoInitialize())) {
        if (T4(n))
          try {
            this.getOrInitializeService({ instanceIdentifier: ga });
          } catch {}
        for (const [a, s] of this.instancesDeferred.entries()) {
          const o = this.normalizeInstanceIdentifier(a);
          try {
            const c = this.getOrInitializeService({ instanceIdentifier: o });
            s.resolve(c);
          } catch {}
        }
      }
    }
    clearInstance(n = ga) {
      this.instancesDeferred.delete(n),
        this.instancesOptions.delete(n),
        this.instances.delete(n);
    }
    async delete() {
      const n = Array.from(this.instances.values());
      await Promise.all([
        ...n.filter((a) => "INTERNAL" in a).map((a) => a.INTERNAL.delete()),
        ...n.filter((a) => "_delete" in a).map((a) => a._delete()),
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(n = ga) {
      return this.instances.has(n);
    }
    getOptions(n = ga) {
      return this.instancesOptions.get(n) || {};
    }
    initialize(n = {}) {
      const { options: a = {} } = n,
        s = this.normalizeInstanceIdentifier(n.instanceIdentifier);
      if (this.isInitialized(s))
        throw Error(`${this.name}(${s}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      const o = this.getOrInitializeService({
        instanceIdentifier: s,
        options: a,
      });
      for (const [c, f] of this.instancesDeferred.entries()) {
        const p = this.normalizeInstanceIdentifier(c);
        s === p && f.resolve(o);
      }
      return o;
    }
    onInit(n, a) {
      var s;
      const o = this.normalizeInstanceIdentifier(a),
        c =
          (s = this.onInitCallbacks.get(o)) !== null && s !== void 0
            ? s
            : new Set();
      c.add(n), this.onInitCallbacks.set(o, c);
      const f = this.instances.get(o);
      return (
        f && n(f, o),
        () => {
          c.delete(n);
        }
      );
    }
    invokeOnInitCallbacks(n, a) {
      const s = this.onInitCallbacks.get(a);
      if (s)
        for (const o of s)
          try {
            o(n, a);
          } catch {}
    }
    getOrInitializeService({ instanceIdentifier: n, options: a = {} }) {
      let s = this.instances.get(n);
      if (
        !s &&
        this.component &&
        ((s = this.component.instanceFactory(this.container, {
          instanceIdentifier: _4(n),
          options: a,
        })),
        this.instances.set(n, s),
        this.instancesOptions.set(n, a),
        this.invokeOnInitCallbacks(s, n),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, n, s);
        } catch {}
      return s || null;
    }
    normalizeInstanceIdentifier(n = ga) {
      return this.component ? (this.component.multipleInstances ? n : ga) : n;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && this.component.instantiationMode !== "EXPLICIT"
      );
    }
  }
  function _4(e) {
    return e === ga ? void 0 : e;
  }
  function T4(e) {
    return e.instantiationMode === "EAGER";
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class A4 {
    constructor(n) {
      (this.name = n), (this.providers = new Map());
    }
    addComponent(n) {
      const a = this.getProvider(n.name);
      if (a.isComponentSet())
        throw new Error(
          `Component ${n.name} has already been registered with ${this.name}`
        );
      a.setComponent(n);
    }
    addOrOverwriteComponent(n) {
      this.getProvider(n.name).isComponentSet() &&
        this.providers.delete(n.name),
        this.addComponent(n);
    }
    getProvider(n) {
      if (this.providers.has(n)) return this.providers.get(n);
      const a = new x4(n, this);
      return this.providers.set(n, a), a;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var qe;
  (function (e) {
    (e[(e.DEBUG = 0)] = "DEBUG"),
      (e[(e.VERBOSE = 1)] = "VERBOSE"),
      (e[(e.INFO = 2)] = "INFO"),
      (e[(e.WARN = 3)] = "WARN"),
      (e[(e.ERROR = 4)] = "ERROR"),
      (e[(e.SILENT = 5)] = "SILENT");
  })(qe || (qe = {}));
  const O4 = {
      debug: qe.DEBUG,
      verbose: qe.VERBOSE,
      info: qe.INFO,
      warn: qe.WARN,
      error: qe.ERROR,
      silent: qe.SILENT,
    },
    R4 = qe.INFO,
    C4 = {
      [qe.DEBUG]: "log",
      [qe.VERBOSE]: "log",
      [qe.INFO]: "info",
      [qe.WARN]: "warn",
      [qe.ERROR]: "error",
    },
    D4 = (e, n, ...a) => {
      if (n < e.logLevel) return;
      const s = new Date().toISOString(),
        o = C4[n];
      if (o) console[o](`[${s}]  ${e.name}:`, ...a);
      else
        throw new Error(
          `Attempted to log a message with an invalid logType (value: ${n})`
        );
    };
  class N4 {
    constructor(n) {
      (this.name = n),
        (this._logLevel = R4),
        (this._logHandler = D4),
        (this._userLogHandler = null);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(n) {
      if (!(n in qe))
        throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);
      this._logLevel = n;
    }
    setLogLevel(n) {
      this._logLevel = typeof n == "string" ? O4[n] : n;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(n) {
      if (typeof n != "function")
        throw new TypeError(
          "Value assigned to `logHandler` must be a function"
        );
      this._logHandler = n;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(n) {
      this._userLogHandler = n;
    }
    debug(...n) {
      this._userLogHandler && this._userLogHandler(this, qe.DEBUG, ...n),
        this._logHandler(this, qe.DEBUG, ...n);
    }
    log(...n) {
      this._userLogHandler && this._userLogHandler(this, qe.VERBOSE, ...n),
        this._logHandler(this, qe.VERBOSE, ...n);
    }
    info(...n) {
      this._userLogHandler && this._userLogHandler(this, qe.INFO, ...n),
        this._logHandler(this, qe.INFO, ...n);
    }
    warn(...n) {
      this._userLogHandler && this._userLogHandler(this, qe.WARN, ...n),
        this._logHandler(this, qe.WARN, ...n);
    }
    error(...n) {
      this._userLogHandler && this._userLogHandler(this, qe.ERROR, ...n),
        this._logHandler(this, qe.ERROR, ...n);
    }
  }
  const M4 = (e, n) => n.some((a) => e instanceof a);
  let sb, lb;
  function j4() {
    return (
      sb ||
      (sb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function B4() {
    return (
      lb ||
      (lb = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  const QS = new WeakMap(),
    jh = new WeakMap(),
    ZS = new WeakMap(),
    kd = new WeakMap(),
    Ap = new WeakMap();
  function U4(e) {
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("success", c),
            e.removeEventListener("error", f);
        },
        c = () => {
          a(Br(e.result)), o();
        },
        f = () => {
          s(e.error), o();
        };
      e.addEventListener("success", c), e.addEventListener("error", f);
    });
    return (
      n
        .then((a) => {
          a instanceof IDBCursor && QS.set(a, e);
        })
        .catch(() => {}),
      Ap.set(n, e),
      n
    );
  }
  function L4(e) {
    if (jh.has(e)) return;
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("complete", c),
            e.removeEventListener("error", f),
            e.removeEventListener("abort", f);
        },
        c = () => {
          a(), o();
        },
        f = () => {
          s(e.error || new DOMException("AbortError", "AbortError")), o();
        };
      e.addEventListener("complete", c),
        e.addEventListener("error", f),
        e.addEventListener("abort", f);
    });
    jh.set(e, n);
  }
  let Bh = {
    get(e, n, a) {
      if (e instanceof IDBTransaction) {
        if (n === "done") return jh.get(e);
        if (n === "objectStoreNames") return e.objectStoreNames || ZS.get(e);
        if (n === "store")
          return a.objectStoreNames[1]
            ? void 0
            : a.objectStore(a.objectStoreNames[0]);
      }
      return Br(e[n]);
    },
    set(e, n, a) {
      return (e[n] = a), !0;
    },
    has(e, n) {
      return e instanceof IDBTransaction && (n === "done" || n === "store")
        ? !0
        : n in e;
    },
  };
  function k4(e) {
    Bh = e(Bh);
  }
  function z4(e) {
    return e === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
      ? function (n, ...a) {
          const s = e.call(zd(this), n, ...a);
          return ZS.set(s, n.sort ? n.sort() : [n]), Br(s);
        }
      : B4().includes(e)
      ? function (...n) {
          return e.apply(zd(this), n), Br(QS.get(this));
        }
      : function (...n) {
          return Br(e.apply(zd(this), n));
        };
  }
  function $4(e) {
    return typeof e == "function"
      ? z4(e)
      : (e instanceof IDBTransaction && L4(e),
        M4(e, j4()) ? new Proxy(e, Bh) : e);
  }
  function Br(e) {
    if (e instanceof IDBRequest) return U4(e);
    if (kd.has(e)) return kd.get(e);
    const n = $4(e);
    return n !== e && (kd.set(e, n), Ap.set(n, e)), n;
  }
  const zd = (e) => Ap.get(e);
  function q4(
    e,
    n,
    { blocked: a, upgrade: s, blocking: o, terminated: c } = {}
  ) {
    const f = indexedDB.open(e, n),
      p = Br(f);
    return (
      s &&
        f.addEventListener("upgradeneeded", (h) => {
          s(Br(f.result), h.oldVersion, h.newVersion, Br(f.transaction), h);
        }),
      a &&
        f.addEventListener("blocked", (h) => a(h.oldVersion, h.newVersion, h)),
      p
        .then((h) => {
          c && h.addEventListener("close", () => c()),
            o &&
              h.addEventListener("versionchange", (m) =>
                o(m.oldVersion, m.newVersion, m)
              );
        })
        .catch(() => {}),
      p
    );
  }
  const H4 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    F4 = ["put", "add", "delete", "clear"],
    $d = new Map();
  function ob(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == "string"))
      return;
    if ($d.get(n)) return $d.get(n);
    const a = n.replace(/FromIndex$/, ""),
      s = n !== a,
      o = F4.includes(a);
    if (
      !(a in (s ? IDBIndex : IDBObjectStore).prototype) ||
      !(o || H4.includes(a))
    )
      return;
    const c = async function (f, ...p) {
      const h = this.transaction(f, o ? "readwrite" : "readonly");
      let m = h.store;
      return (
        s && (m = m.index(p.shift())),
        (await Promise.all([m[a](...p), o && h.done]))[0]
      );
    };
    return $d.set(n, c), c;
  }
  k4((e) => ({
    ...e,
    get: (n, a, s) => ob(n, a) || e.get(n, a, s),
    has: (n, a) => !!ob(n, a) || e.has(n, a),
  }));
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class V4 {
    constructor(n) {
      this.container = n;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((a) => {
          if (I4(a)) {
            const s = a.getImmediate();
            return `${s.library}/${s.version}`;
          } else return null;
        })
        .filter((a) => a)
        .join(" ");
    }
  }
  function I4(e) {
    const n = e.getComponent();
    return (n == null ? void 0 : n.type) === "VERSION";
  }
  const Uh = "@firebase/app",
    ub = "0.11.4";
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const rr = new N4("@firebase/app"),
    G4 = "@firebase/app-compat",
    P4 = "@firebase/analytics-compat",
    Y4 = "@firebase/analytics",
    K4 = "@firebase/app-check-compat",
    X4 = "@firebase/app-check",
    Q4 = "@firebase/auth",
    Z4 = "@firebase/auth-compat",
    J4 = "@firebase/database",
    W4 = "@firebase/data-connect",
    e5 = "@firebase/database-compat",
    t5 = "@firebase/functions",
    n5 = "@firebase/functions-compat",
    r5 = "@firebase/installations",
    a5 = "@firebase/installations-compat",
    i5 = "@firebase/messaging",
    s5 = "@firebase/messaging-compat",
    l5 = "@firebase/performance",
    o5 = "@firebase/performance-compat",
    u5 = "@firebase/remote-config",
    c5 = "@firebase/remote-config-compat",
    f5 = "@firebase/storage",
    d5 = "@firebase/storage-compat",
    h5 = "@firebase/firestore",
    p5 = "@firebase/vertexai",
    m5 = "@firebase/firestore-compat",
    y5 = "firebase";
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Lh = "[DEFAULT]",
    g5 = {
      [Uh]: "fire-core",
      [G4]: "fire-core-compat",
      [Y4]: "fire-analytics",
      [P4]: "fire-analytics-compat",
      [X4]: "fire-app-check",
      [K4]: "fire-app-check-compat",
      [Q4]: "fire-auth",
      [Z4]: "fire-auth-compat",
      [J4]: "fire-rtdb",
      [W4]: "fire-data-connect",
      [e5]: "fire-rtdb-compat",
      [t5]: "fire-fn",
      [n5]: "fire-fn-compat",
      [r5]: "fire-iid",
      [a5]: "fire-iid-compat",
      [i5]: "fire-fcm",
      [s5]: "fire-fcm-compat",
      [l5]: "fire-perf",
      [o5]: "fire-perf-compat",
      [u5]: "fire-rc",
      [c5]: "fire-rc-compat",
      [f5]: "fire-gcs",
      [d5]: "fire-gcs-compat",
      [h5]: "fire-fst",
      [m5]: "fire-fst-compat",
      [p5]: "fire-vertex",
      "fire-js": "fire-js",
      [y5]: "fire-js-all",
    };
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const mu = new Map(),
    v5 = new Map(),
    kh = new Map();
  function cb(e, n) {
    try {
      e.container.addComponent(n);
    } catch (a) {
      rr.debug(
        `Component ${n.name} failed to register with FirebaseApp ${e.name}`,
        a
      );
    }
  }
  function Ca(e) {
    const n = e.name;
    if (kh.has(n))
      return (
        rr.debug(`There were multiple attempts to register component ${n}.`), !1
      );
    kh.set(n, e);
    for (const a of mu.values()) cb(a, e);
    for (const a of v5.values()) cb(a, e);
    return !0;
  }
  function Op(e, n) {
    const a = e.container
      .getProvider("heartbeat")
      .getImmediate({ optional: !0 });
    return a && a.triggerHeartbeat(), e.container.getProvider(n);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const b5 = {
      "no-app":
        "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}'",
      "duplicate-app":
        "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "server-app-deleted": "Firebase Server App has been deleted",
      "no-options":
        "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument":
        "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument":
        "First argument to `onLog` must be null or a function.",
      "idb-open":
        "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get":
        "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set":
        "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete":
        "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
      "finalization-registry-not-supported":
        "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
      "invalid-server-app-environment":
        "FirebaseServerApp is not for use in browser environments.",
    },
    Ur = new Gu("app", "Firebase", b5);
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class S5 {
    constructor(n, a, s) {
      (this._isDeleted = !1),
        (this._options = Object.assign({}, n)),
        (this._config = Object.assign({}, a)),
        (this._name = a.name),
        (this._automaticDataCollectionEnabled =
          a.automaticDataCollectionEnabled),
        (this._container = s),
        this.container.addComponent(new Hr("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(n) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = n);
    }
    get name() {
      return this.checkDestroyed(), this._name;
    }
    get options() {
      return this.checkDestroyed(), this._options;
    }
    get config() {
      return this.checkDestroyed(), this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(n) {
      this._isDeleted = n;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw Ur.create("app-deleted", { appName: this._name });
    }
  }
  function JS(e, n = {}) {
    let a = e;
    typeof n != "object" && (n = { name: n });
    const s = Object.assign(
        { name: Lh, automaticDataCollectionEnabled: !1 },
        n
      ),
      o = s.name;
    if (typeof o != "string" || !o)
      throw Ur.create("bad-app-name", { appName: String(o) });
    if ((a || (a = YS()), !a)) throw Ur.create("no-options");
    const c = mu.get(o);
    if (c) {
      if (Mh(a, c.options) && Mh(s, c.config)) return c;
      throw Ur.create("duplicate-app", { appName: o });
    }
    const f = new A4(o);
    for (const h of kh.values()) f.addComponent(h);
    const p = new S5(a, s, f);
    return mu.set(o, p), p;
  }
  function E5(e = Lh) {
    const n = mu.get(e);
    if (!n && e === Lh && YS()) return JS();
    if (!n) throw Ur.create("no-app", { appName: e });
    return n;
  }
  function Lr(e, n, a) {
    var s;
    let o = (s = g5[e]) !== null && s !== void 0 ? s : e;
    a && (o += `-${a}`);
    const c = o.match(/\s|\//),
      f = n.match(/\s|\//);
    if (c || f) {
      const p = [`Unable to register library "${o}" with version "${n}":`];
      c &&
        p.push(
          `library name "${o}" contains illegal characters (whitespace or "/")`
        ),
        c && f && p.push("and"),
        f &&
          p.push(
            `version name "${n}" contains illegal characters (whitespace or "/")`
          ),
        rr.warn(p.join(" "));
      return;
    }
    Ca(new Hr(`${o}-version`, () => ({ library: o, version: n }), "VERSION"));
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const w5 = "firebase-heartbeat-database",
    x5 = 1,
    cl = "firebase-heartbeat-store";
  let qd = null;
  function WS() {
    return (
      qd ||
        (qd = q4(w5, x5, {
          upgrade: (e, n) => {
            switch (n) {
              case 0:
                try {
                  e.createObjectStore(cl);
                } catch (a) {
                  console.warn(a);
                }
            }
          },
        }).catch((e) => {
          throw Ur.create("idb-open", { originalErrorMessage: e.message });
        })),
      qd
    );
  }
  async function _5(e) {
    try {
      const a = (await WS()).transaction(cl),
        s = await a.objectStore(cl).get(eE(e));
      return await a.done, s;
    } catch (n) {
      if (n instanceof Hi) rr.warn(n.message);
      else {
        const a = Ur.create("idb-get", {
          originalErrorMessage: n == null ? void 0 : n.message,
        });
        rr.warn(a.message);
      }
    }
  }
  async function fb(e, n) {
    try {
      const s = (await WS()).transaction(cl, "readwrite");
      await s.objectStore(cl).put(n, eE(e)), await s.done;
    } catch (a) {
      if (a instanceof Hi) rr.warn(a.message);
      else {
        const s = Ur.create("idb-set", {
          originalErrorMessage: a == null ? void 0 : a.message,
        });
        rr.warn(s.message);
      }
    }
  }
  function eE(e) {
    return `${e.name}!${e.options.appId}`;
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const T5 = 1024,
    A5 = 30;
  class O5 {
    constructor(n) {
      (this.container = n), (this._heartbeatsCache = null);
      const a = this.container.getProvider("app").getImmediate();
      (this._storage = new C5(a)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((s) => ((this._heartbeatsCache = s), s)));
    }
    async triggerHeartbeat() {
      var n, a;
      try {
        const o = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          c = db();
        if (
          (((n = this._heartbeatsCache) === null || n === void 0
            ? void 0
            : n.heartbeats) == null &&
            ((this._heartbeatsCache = await this._heartbeatsCachePromise),
            ((a = this._heartbeatsCache) === null || a === void 0
              ? void 0
              : a.heartbeats) == null)) ||
          this._heartbeatsCache.lastSentHeartbeatDate === c ||
          this._heartbeatsCache.heartbeats.some((f) => f.date === c)
        )
          return;
        if (
          (this._heartbeatsCache.heartbeats.push({ date: c, agent: o }),
          this._heartbeatsCache.heartbeats.length > A5)
        ) {
          const f = D5(this._heartbeatsCache.heartbeats);
          this._heartbeatsCache.heartbeats.splice(f, 1);
        }
        return this._storage.overwrite(this._heartbeatsCache);
      } catch (s) {
        rr.warn(s);
      }
    }
    async getHeartbeatsHeader() {
      var n;
      try {
        if (
          (this._heartbeatsCache === null &&
            (await this._heartbeatsCachePromise),
          ((n = this._heartbeatsCache) === null || n === void 0
            ? void 0
            : n.heartbeats) == null ||
            this._heartbeatsCache.heartbeats.length === 0)
        )
          return "";
        const a = db(),
          { heartbeatsToSend: s, unsentEntries: o } = R5(
            this._heartbeatsCache.heartbeats
          ),
          c = PS(JSON.stringify({ version: 2, heartbeats: s }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = a),
          o.length > 0
            ? ((this._heartbeatsCache.heartbeats = o),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          c
        );
      } catch (a) {
        return rr.warn(a), "";
      }
    }
  }
  function db() {
    return new Date().toISOString().substring(0, 10);
  }
  function R5(e, n = T5) {
    const a = [];
    let s = e.slice();
    for (const o of e) {
      const c = a.find((f) => f.agent === o.agent);
      if (c) {
        if ((c.dates.push(o.date), hb(a) > n)) {
          c.dates.pop();
          break;
        }
      } else if ((a.push({ agent: o.agent, dates: [o.date] }), hb(a) > n)) {
        a.pop();
        break;
      }
      s = s.slice(1);
    }
    return { heartbeatsToSend: a, unsentEntries: s };
  }
  class C5 {
    constructor(n) {
      (this.app = n),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
    }
    async runIndexedDBEnvironmentCheck() {
      return KS()
        ? XS()
            .then(() => !0)
            .catch(() => !1)
        : !1;
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        const a = await _5(this.app);
        return a != null && a.heartbeats ? a : { heartbeats: [] };
      } else return { heartbeats: [] };
    }
    async overwrite(n) {
      var a;
      if (await this._canUseIndexedDBPromise) {
        const o = await this.read();
        return fb(this.app, {
          lastSentHeartbeatDate:
            (a = n.lastSentHeartbeatDate) !== null && a !== void 0
              ? a
              : o.lastSentHeartbeatDate,
          heartbeats: n.heartbeats,
        });
      } else return;
    }
    async add(n) {
      var a;
      if (await this._canUseIndexedDBPromise) {
        const o = await this.read();
        return fb(this.app, {
          lastSentHeartbeatDate:
            (a = n.lastSentHeartbeatDate) !== null && a !== void 0
              ? a
              : o.lastSentHeartbeatDate,
          heartbeats: [...o.heartbeats, ...n.heartbeats],
        });
      } else return;
    }
  }
  function hb(e) {
    return PS(JSON.stringify({ version: 2, heartbeats: e })).length;
  }
  function D5(e) {
    if (e.length === 0) return -1;
    let n = 0,
      a = e[0].date;
    for (let s = 1; s < e.length; s++)
      e[s].date < a && ((a = e[s].date), (n = s));
    return n;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function N5(e) {
    Ca(new Hr("platform-logger", (n) => new V4(n), "PRIVATE")),
      Ca(new Hr("heartbeat", (n) => new O5(n), "PRIVATE")),
      Lr(Uh, ub, e),
      Lr(Uh, ub, "esm2017"),
      Lr("fire-js", "");
  }
  N5("");
  var M5 = "firebase",
    j5 = "11.6.0";
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ Lr(M5, j5, "app");
  const B5 = (e, n) => n.some((a) => e instanceof a);
  let pb, mb;
  function U5() {
    return (
      pb ||
      (pb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function L5() {
    return (
      mb ||
      (mb = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  const tE = new WeakMap(),
    zh = new WeakMap(),
    nE = new WeakMap(),
    Hd = new WeakMap(),
    Rp = new WeakMap();
  function k5(e) {
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("success", c),
            e.removeEventListener("error", f);
        },
        c = () => {
          a(kr(e.result)), o();
        },
        f = () => {
          s(e.error), o();
        };
      e.addEventListener("success", c), e.addEventListener("error", f);
    });
    return (
      n
        .then((a) => {
          a instanceof IDBCursor && tE.set(a, e);
        })
        .catch(() => {}),
      Rp.set(n, e),
      n
    );
  }
  function z5(e) {
    if (zh.has(e)) return;
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("complete", c),
            e.removeEventListener("error", f),
            e.removeEventListener("abort", f);
        },
        c = () => {
          a(), o();
        },
        f = () => {
          s(e.error || new DOMException("AbortError", "AbortError")), o();
        };
      e.addEventListener("complete", c),
        e.addEventListener("error", f),
        e.addEventListener("abort", f);
    });
    zh.set(e, n);
  }
  let $h = {
    get(e, n, a) {
      if (e instanceof IDBTransaction) {
        if (n === "done") return zh.get(e);
        if (n === "objectStoreNames") return e.objectStoreNames || nE.get(e);
        if (n === "store")
          return a.objectStoreNames[1]
            ? void 0
            : a.objectStore(a.objectStoreNames[0]);
      }
      return kr(e[n]);
    },
    set(e, n, a) {
      return (e[n] = a), !0;
    },
    has(e, n) {
      return e instanceof IDBTransaction && (n === "done" || n === "store")
        ? !0
        : n in e;
    },
  };
  function $5(e) {
    $h = e($h);
  }
  function q5(e) {
    return e === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
      ? function (n, ...a) {
          const s = e.call(Fd(this), n, ...a);
          return nE.set(s, n.sort ? n.sort() : [n]), kr(s);
        }
      : L5().includes(e)
      ? function (...n) {
          return e.apply(Fd(this), n), kr(tE.get(this));
        }
      : function (...n) {
          return kr(e.apply(Fd(this), n));
        };
  }
  function H5(e) {
    return typeof e == "function"
      ? q5(e)
      : (e instanceof IDBTransaction && z5(e),
        B5(e, U5()) ? new Proxy(e, $h) : e);
  }
  function kr(e) {
    if (e instanceof IDBRequest) return k5(e);
    if (Hd.has(e)) return Hd.get(e);
    const n = H5(e);
    return n !== e && (Hd.set(e, n), Rp.set(n, e)), n;
  }
  const Fd = (e) => Rp.get(e);
  function F5(
    e,
    n,
    { blocked: a, upgrade: s, blocking: o, terminated: c } = {}
  ) {
    const f = indexedDB.open(e, n),
      p = kr(f);
    return (
      s &&
        f.addEventListener("upgradeneeded", (h) => {
          s(kr(f.result), h.oldVersion, h.newVersion, kr(f.transaction), h);
        }),
      a &&
        f.addEventListener("blocked", (h) => a(h.oldVersion, h.newVersion, h)),
      p
        .then((h) => {
          c && h.addEventListener("close", () => c()),
            o &&
              h.addEventListener("versionchange", (m) =>
                o(m.oldVersion, m.newVersion, m)
              );
        })
        .catch(() => {}),
      p
    );
  }
  const V5 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    I5 = ["put", "add", "delete", "clear"],
    Vd = new Map();
  function yb(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == "string"))
      return;
    if (Vd.get(n)) return Vd.get(n);
    const a = n.replace(/FromIndex$/, ""),
      s = n !== a,
      o = I5.includes(a);
    if (
      !(a in (s ? IDBIndex : IDBObjectStore).prototype) ||
      !(o || V5.includes(a))
    )
      return;
    const c = async function (f, ...p) {
      const h = this.transaction(f, o ? "readwrite" : "readonly");
      let m = h.store;
      return (
        s && (m = m.index(p.shift())),
        (await Promise.all([m[a](...p), o && h.done]))[0]
      );
    };
    return Vd.set(n, c), c;
  }
  $5((e) => ({
    ...e,
    get: (n, a, s) => yb(n, a) || e.get(n, a, s),
    has: (n, a) => !!yb(n, a) || e.has(n, a),
  }));
  const rE = "@firebase/installations",
    Cp = "0.6.13";
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const aE = 1e4,
    iE = `w:${Cp}`,
    sE = "FIS_v2",
    G5 = "https://firebaseinstallations.googleapis.com/v1",
    P5 = 60 * 60 * 1e3,
    Y5 = "installations",
    K5 = "Installations";
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const X5 = {
      "missing-app-config-values":
        'Missing App configuration value: "{$valueName}"',
      "not-registered": "Firebase Installation is not registered.",
      "installation-not-found": "Firebase Installation not found.",
      "request-failed":
        '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
      "app-offline": "Could not process request. Application offline.",
      "delete-pending-registration":
        "Can't delete installation while there is a pending registration request.",
    },
    Da = new Gu(Y5, K5, X5);
  function lE(e) {
    return e instanceof Hi && e.code.includes("request-failed");
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function oE({ projectId: e }) {
    return `${G5}/projects/${e}/installations`;
  }
  function uE(e) {
    return {
      token: e.token,
      requestStatus: 2,
      expiresIn: Z5(e.expiresIn),
      creationTime: Date.now(),
    };
  }
  async function cE(e, n) {
    const s = (await n.json()).error;
    return Da.create("request-failed", {
      requestName: e,
      serverCode: s.code,
      serverMessage: s.message,
      serverStatus: s.status,
    });
  }
  function fE({ apiKey: e }) {
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": e,
    });
  }
  function Q5(e, { refreshToken: n }) {
    const a = fE(e);
    return a.append("Authorization", J5(n)), a;
  }
  async function dE(e) {
    const n = await e();
    return n.status >= 500 && n.status < 600 ? e() : n;
  }
  function Z5(e) {
    return Number(e.replace("s", "000"));
  }
  function J5(e) {
    return `${sE} ${e}`;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function W5(
    { appConfig: e, heartbeatServiceProvider: n },
    { fid: a }
  ) {
    const s = oE(e),
      o = fE(e),
      c = n.getImmediate({ optional: !0 });
    if (c) {
      const m = await c.getHeartbeatsHeader();
      m && o.append("x-firebase-client", m);
    }
    const f = { fid: a, authVersion: sE, appId: e.appId, sdkVersion: iE },
      p = { method: "POST", headers: o, body: JSON.stringify(f) },
      h = await dE(() => fetch(s, p));
    if (h.ok) {
      const m = await h.json();
      return {
        fid: m.fid || a,
        registrationStatus: 2,
        refreshToken: m.refreshToken,
        authToken: uE(m.authToken),
      };
    } else throw await cE("Create Installation", h);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function hE(e) {
    return new Promise((n) => {
      setTimeout(n, e);
    });
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function eM(e) {
    return btoa(String.fromCharCode(...e))
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const tM = /^[cdef][\w-]{21}$/,
    qh = "";
  function nM() {
    try {
      const e = new Uint8Array(17);
      (self.crypto || self.msCrypto).getRandomValues(e),
        (e[0] = 112 + (e[0] % 16));
      const a = rM(e);
      return tM.test(a) ? a : qh;
    } catch {
      return qh;
    }
  }
  function rM(e) {
    return eM(e).substr(0, 22);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Pu(e) {
    return `${e.appName}!${e.appId}`;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const pE = new Map();
  function mE(e, n) {
    const a = Pu(e);
    yE(a, n), aM(a, n);
  }
  function yE(e, n) {
    const a = pE.get(e);
    if (a) for (const s of a) s(n);
  }
  function aM(e, n) {
    const a = iM();
    a && a.postMessage({ key: e, fid: n }), sM();
  }
  let ba = null;
  function iM() {
    return (
      !ba &&
        "BroadcastChannel" in self &&
        ((ba = new BroadcastChannel("[Firebase] FID Change")),
        (ba.onmessage = (e) => {
          yE(e.data.key, e.data.fid);
        })),
      ba
    );
  }
  function sM() {
    pE.size === 0 && ba && (ba.close(), (ba = null));
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const lM = "firebase-installations-database",
    oM = 1,
    Na = "firebase-installations-store";
  let Id = null;
  function Dp() {
    return (
      Id ||
        (Id = F5(lM, oM, {
          upgrade: (e, n) => {
            switch (n) {
              case 0:
                e.createObjectStore(Na);
            }
          },
        })),
      Id
    );
  }
  async function yu(e, n) {
    const a = Pu(e),
      o = (await Dp()).transaction(Na, "readwrite"),
      c = o.objectStore(Na),
      f = await c.get(a);
    return (
      await c.put(n, a),
      await o.done,
      (!f || f.fid !== n.fid) && mE(e, n.fid),
      n
    );
  }
  async function gE(e) {
    const n = Pu(e),
      s = (await Dp()).transaction(Na, "readwrite");
    await s.objectStore(Na).delete(n), await s.done;
  }
  async function Yu(e, n) {
    const a = Pu(e),
      o = (await Dp()).transaction(Na, "readwrite"),
      c = o.objectStore(Na),
      f = await c.get(a),
      p = n(f);
    return (
      p === void 0 ? await c.delete(a) : await c.put(p, a),
      await o.done,
      p && (!f || f.fid !== p.fid) && mE(e, p.fid),
      p
    );
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function Np(e) {
    let n;
    const a = await Yu(e.appConfig, (s) => {
      const o = uM(s),
        c = cM(e, o);
      return (n = c.registrationPromise), c.installationEntry;
    });
    return a.fid === qh
      ? { installationEntry: await n }
      : { installationEntry: a, registrationPromise: n };
  }
  function uM(e) {
    const n = e || { fid: nM(), registrationStatus: 0 };
    return vE(n);
  }
  function cM(e, n) {
    if (n.registrationStatus === 0) {
      if (!navigator.onLine) {
        const o = Promise.reject(Da.create("app-offline"));
        return { installationEntry: n, registrationPromise: o };
      }
      const a = {
          fid: n.fid,
          registrationStatus: 1,
          registrationTime: Date.now(),
        },
        s = fM(e, a);
      return { installationEntry: a, registrationPromise: s };
    } else
      return n.registrationStatus === 1
        ? { installationEntry: n, registrationPromise: dM(e) }
        : { installationEntry: n };
  }
  async function fM(e, n) {
    try {
      const a = await W5(e, n);
      return yu(e.appConfig, a);
    } catch (a) {
      throw (
        (lE(a) && a.customData.serverCode === 409
          ? await gE(e.appConfig)
          : await yu(e.appConfig, { fid: n.fid, registrationStatus: 0 }),
        a)
      );
    }
  }
  async function dM(e) {
    let n = await gb(e.appConfig);
    for (; n.registrationStatus === 1; )
      await hE(100), (n = await gb(e.appConfig));
    if (n.registrationStatus === 0) {
      const { installationEntry: a, registrationPromise: s } = await Np(e);
      return s || a;
    }
    return n;
  }
  function gb(e) {
    return Yu(e, (n) => {
      if (!n) throw Da.create("installation-not-found");
      return vE(n);
    });
  }
  function vE(e) {
    return hM(e) ? { fid: e.fid, registrationStatus: 0 } : e;
  }
  function hM(e) {
    return e.registrationStatus === 1 && e.registrationTime + aE < Date.now();
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function pM({ appConfig: e, heartbeatServiceProvider: n }, a) {
    const s = mM(e, a),
      o = Q5(e, a),
      c = n.getImmediate({ optional: !0 });
    if (c) {
      const m = await c.getHeartbeatsHeader();
      m && o.append("x-firebase-client", m);
    }
    const f = { installation: { sdkVersion: iE, appId: e.appId } },
      p = { method: "POST", headers: o, body: JSON.stringify(f) },
      h = await dE(() => fetch(s, p));
    if (h.ok) {
      const m = await h.json();
      return uE(m);
    } else throw await cE("Generate Auth Token", h);
  }
  function mM(e, { fid: n }) {
    return `${oE(e)}/${n}/authTokens:generate`;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function Mp(e, n = !1) {
    let a;
    const s = await Yu(e.appConfig, (c) => {
      if (!bE(c)) throw Da.create("not-registered");
      const f = c.authToken;
      if (!n && vM(f)) return c;
      if (f.requestStatus === 1) return (a = yM(e, n)), c;
      {
        if (!navigator.onLine) throw Da.create("app-offline");
        const p = SM(c);
        return (a = gM(e, p)), p;
      }
    });
    return a ? await a : s.authToken;
  }
  async function yM(e, n) {
    let a = await vb(e.appConfig);
    for (; a.authToken.requestStatus === 1; )
      await hE(100), (a = await vb(e.appConfig));
    const s = a.authToken;
    return s.requestStatus === 0 ? Mp(e, n) : s;
  }
  function vb(e) {
    return Yu(e, (n) => {
      if (!bE(n)) throw Da.create("not-registered");
      const a = n.authToken;
      return EM(a)
        ? Object.assign(Object.assign({}, n), {
            authToken: { requestStatus: 0 },
          })
        : n;
    });
  }
  async function gM(e, n) {
    try {
      const a = await pM(e, n),
        s = Object.assign(Object.assign({}, n), { authToken: a });
      return await yu(e.appConfig, s), a;
    } catch (a) {
      if (
        lE(a) &&
        (a.customData.serverCode === 401 || a.customData.serverCode === 404)
      )
        await gE(e.appConfig);
      else {
        const s = Object.assign(Object.assign({}, n), {
          authToken: { requestStatus: 0 },
        });
        await yu(e.appConfig, s);
      }
      throw a;
    }
  }
  function bE(e) {
    return e !== void 0 && e.registrationStatus === 2;
  }
  function vM(e) {
    return e.requestStatus === 2 && !bM(e);
  }
  function bM(e) {
    const n = Date.now();
    return n < e.creationTime || e.creationTime + e.expiresIn < n + P5;
  }
  function SM(e) {
    const n = { requestStatus: 1, requestTime: Date.now() };
    return Object.assign(Object.assign({}, e), { authToken: n });
  }
  function EM(e) {
    return e.requestStatus === 1 && e.requestTime + aE < Date.now();
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function wM(e) {
    const n = e,
      { installationEntry: a, registrationPromise: s } = await Np(n);
    return s ? s.catch(console.error) : Mp(n).catch(console.error), a.fid;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function xM(e, n = !1) {
    const a = e;
    return await _M(a), (await Mp(a, n)).token;
  }
  async function _M(e) {
    const { registrationPromise: n } = await Np(e);
    n && (await n);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function TM(e) {
    if (!e || !e.options) throw Gd("App Configuration");
    if (!e.name) throw Gd("App Name");
    const n = ["projectId", "apiKey", "appId"];
    for (const a of n) if (!e.options[a]) throw Gd(a);
    return {
      appName: e.name,
      projectId: e.options.projectId,
      apiKey: e.options.apiKey,
      appId: e.options.appId,
    };
  }
  function Gd(e) {
    return Da.create("missing-app-config-values", { valueName: e });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const SE = "installations",
    AM = "installations-internal",
    OM = (e) => {
      const n = e.getProvider("app").getImmediate(),
        a = TM(n),
        s = Op(n, "heartbeat");
      return {
        app: n,
        appConfig: a,
        heartbeatServiceProvider: s,
        _delete: () => Promise.resolve(),
      };
    },
    RM = (e) => {
      const n = e.getProvider("app").getImmediate(),
        a = Op(n, SE).getImmediate();
      return { getId: () => wM(a), getToken: (o) => xM(a, o) };
    };
  function CM() {
    Ca(new Hr(SE, OM, "PUBLIC")), Ca(new Hr(AM, RM, "PRIVATE"));
  }
  CM();
  Lr(rE, Cp);
  Lr(rE, Cp, "esm2017");
  const DM = (e, n) => n.some((a) => e instanceof a);
  let bb, Sb;
  function NM() {
    return (
      bb ||
      (bb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
  }
  function MM() {
    return (
      Sb ||
      (Sb = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    );
  }
  const EE = new WeakMap(),
    Hh = new WeakMap(),
    wE = new WeakMap(),
    Pd = new WeakMap(),
    jp = new WeakMap();
  function jM(e) {
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("success", c),
            e.removeEventListener("error", f);
        },
        c = () => {
          a(tr(e.result)), o();
        },
        f = () => {
          s(e.error), o();
        };
      e.addEventListener("success", c), e.addEventListener("error", f);
    });
    return (
      n
        .then((a) => {
          a instanceof IDBCursor && EE.set(a, e);
        })
        .catch(() => {}),
      jp.set(n, e),
      n
    );
  }
  function BM(e) {
    if (Hh.has(e)) return;
    const n = new Promise((a, s) => {
      const o = () => {
          e.removeEventListener("complete", c),
            e.removeEventListener("error", f),
            e.removeEventListener("abort", f);
        },
        c = () => {
          a(), o();
        },
        f = () => {
          s(e.error || new DOMException("AbortError", "AbortError")), o();
        };
      e.addEventListener("complete", c),
        e.addEventListener("error", f),
        e.addEventListener("abort", f);
    });
    Hh.set(e, n);
  }
  let Fh = {
    get(e, n, a) {
      if (e instanceof IDBTransaction) {
        if (n === "done") return Hh.get(e);
        if (n === "objectStoreNames") return e.objectStoreNames || wE.get(e);
        if (n === "store")
          return a.objectStoreNames[1]
            ? void 0
            : a.objectStore(a.objectStoreNames[0]);
      }
      return tr(e[n]);
    },
    set(e, n, a) {
      return (e[n] = a), !0;
    },
    has(e, n) {
      return e instanceof IDBTransaction && (n === "done" || n === "store")
        ? !0
        : n in e;
    },
  };
  function UM(e) {
    Fh = e(Fh);
  }
  function LM(e) {
    return e === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
      ? function (n, ...a) {
          const s = e.call(Yd(this), n, ...a);
          return wE.set(s, n.sort ? n.sort() : [n]), tr(s);
        }
      : MM().includes(e)
      ? function (...n) {
          return e.apply(Yd(this), n), tr(EE.get(this));
        }
      : function (...n) {
          return tr(e.apply(Yd(this), n));
        };
  }
  function kM(e) {
    return typeof e == "function"
      ? LM(e)
      : (e instanceof IDBTransaction && BM(e),
        DM(e, NM()) ? new Proxy(e, Fh) : e);
  }
  function tr(e) {
    if (e instanceof IDBRequest) return jM(e);
    if (Pd.has(e)) return Pd.get(e);
    const n = kM(e);
    return n !== e && (Pd.set(e, n), jp.set(n, e)), n;
  }
  const Yd = (e) => jp.get(e);
  function xE(
    e,
    n,
    { blocked: a, upgrade: s, blocking: o, terminated: c } = {}
  ) {
    const f = indexedDB.open(e, n),
      p = tr(f);
    return (
      s &&
        f.addEventListener("upgradeneeded", (h) => {
          s(tr(f.result), h.oldVersion, h.newVersion, tr(f.transaction), h);
        }),
      a &&
        f.addEventListener("blocked", (h) => a(h.oldVersion, h.newVersion, h)),
      p
        .then((h) => {
          c && h.addEventListener("close", () => c()),
            o &&
              h.addEventListener("versionchange", (m) =>
                o(m.oldVersion, m.newVersion, m)
              );
        })
        .catch(() => {}),
      p
    );
  }
  function Kd(e, { blocked: n } = {}) {
    const a = indexedDB.deleteDatabase(e);
    return (
      n && a.addEventListener("blocked", (s) => n(s.oldVersion, s)),
      tr(a).then(() => {})
    );
  }
  const zM = ["get", "getKey", "getAll", "getAllKeys", "count"],
    $M = ["put", "add", "delete", "clear"],
    Xd = new Map();
  function Eb(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == "string"))
      return;
    if (Xd.get(n)) return Xd.get(n);
    const a = n.replace(/FromIndex$/, ""),
      s = n !== a,
      o = $M.includes(a);
    if (
      !(a in (s ? IDBIndex : IDBObjectStore).prototype) ||
      !(o || zM.includes(a))
    )
      return;
    const c = async function (f, ...p) {
      const h = this.transaction(f, o ? "readwrite" : "readonly");
      let m = h.store;
      return (
        s && (m = m.index(p.shift())),
        (await Promise.all([m[a](...p), o && h.done]))[0]
      );
    };
    return Xd.set(n, c), c;
  }
  UM((e) => ({
    ...e,
    get: (n, a, s) => Eb(n, a) || e.get(n, a, s),
    has: (n, a) => !!Eb(n, a) || e.has(n, a),
  }));
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const qM = "/firebase-messaging-sw.js",
    HM = "/firebase-cloud-messaging-push-scope",
    _E =
      "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
    FM = "https://fcmregistrations.googleapis.com/v1",
    TE = "google.c.a.c_id",
    VM = "google.c.a.c_l",
    IM = "google.c.a.ts",
    GM = "google.c.a.e",
    wb = 1e4;
  var xb;
  (function (e) {
    (e[(e.DATA_MESSAGE = 1)] = "DATA_MESSAGE"),
      (e[(e.DISPLAY_NOTIFICATION = 3)] = "DISPLAY_NOTIFICATION");
  })(xb || (xb = {}));
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
   * in compliance with the License. You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under the License
   * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
   * or implied. See the License for the specific language governing permissions and limitations under
   * the License.
   */ var fl;
  (function (e) {
    (e.PUSH_RECEIVED = "push-received"),
      (e.NOTIFICATION_CLICKED = "notification-clicked");
  })(fl || (fl = {}));
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Qn(e) {
    const n = new Uint8Array(e);
    return btoa(String.fromCharCode(...n))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }
  function PM(e) {
    const n = "=".repeat((4 - (e.length % 4)) % 4),
      a = (e + n).replace(/\-/g, "+").replace(/_/g, "/"),
      s = atob(a),
      o = new Uint8Array(s.length);
    for (let c = 0; c < s.length; ++c) o[c] = s.charCodeAt(c);
    return o;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Qd = "fcm_token_details_db",
    YM = 5,
    _b = "fcm_token_object_Store";
  async function KM(e) {
    if (
      "databases" in indexedDB &&
      !(await indexedDB.databases()).map((c) => c.name).includes(Qd)
    )
      return null;
    let n = null;
    return (
      (
        await xE(Qd, YM, {
          upgrade: async (s, o, c, f) => {
            var p;
            if (o < 2 || !s.objectStoreNames.contains(_b)) return;
            const h = f.objectStore(_b),
              m = await h.index("fcmSenderId").get(e);
            if ((await h.clear(), !!m)) {
              if (o === 2) {
                const g = m;
                if (!g.auth || !g.p256dh || !g.endpoint) return;
                n = {
                  token: g.fcmToken,
                  createTime:
                    (p = g.createTime) !== null && p !== void 0
                      ? p
                      : Date.now(),
                  subscriptionOptions: {
                    auth: g.auth,
                    p256dh: g.p256dh,
                    endpoint: g.endpoint,
                    swScope: g.swScope,
                    vapidKey:
                      typeof g.vapidKey == "string"
                        ? g.vapidKey
                        : Qn(g.vapidKey),
                  },
                };
              } else if (o === 3) {
                const g = m;
                n = {
                  token: g.fcmToken,
                  createTime: g.createTime,
                  subscriptionOptions: {
                    auth: Qn(g.auth),
                    p256dh: Qn(g.p256dh),
                    endpoint: g.endpoint,
                    swScope: g.swScope,
                    vapidKey: Qn(g.vapidKey),
                  },
                };
              } else if (o === 4) {
                const g = m;
                n = {
                  token: g.fcmToken,
                  createTime: g.createTime,
                  subscriptionOptions: {
                    auth: Qn(g.auth),
                    p256dh: Qn(g.p256dh),
                    endpoint: g.endpoint,
                    swScope: g.swScope,
                    vapidKey: Qn(g.vapidKey),
                  },
                };
              }
            }
          },
        })
      ).close(),
      await Kd(Qd),
      await Kd("fcm_vapid_details_db"),
      await Kd("undefined"),
      XM(n) ? n : null
    );
  }
  function XM(e) {
    if (!e || !e.subscriptionOptions) return !1;
    const { subscriptionOptions: n } = e;
    return (
      typeof e.createTime == "number" &&
      e.createTime > 0 &&
      typeof e.token == "string" &&
      e.token.length > 0 &&
      typeof n.auth == "string" &&
      n.auth.length > 0 &&
      typeof n.p256dh == "string" &&
      n.p256dh.length > 0 &&
      typeof n.endpoint == "string" &&
      n.endpoint.length > 0 &&
      typeof n.swScope == "string" &&
      n.swScope.length > 0 &&
      typeof n.vapidKey == "string" &&
      n.vapidKey.length > 0
    );
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const QM = "firebase-messaging-database",
    ZM = 1,
    dl = "firebase-messaging-store";
  let Zd = null;
  function AE() {
    return (
      Zd ||
        (Zd = xE(QM, ZM, {
          upgrade: (e, n) => {
            switch (n) {
              case 0:
                e.createObjectStore(dl);
            }
          },
        })),
      Zd
    );
  }
  async function JM(e) {
    const n = OE(e),
      s = await (await AE()).transaction(dl).objectStore(dl).get(n);
    if (s) return s;
    {
      const o = await KM(e.appConfig.senderId);
      if (o) return await Bp(e, o), o;
    }
  }
  async function Bp(e, n) {
    const a = OE(e),
      o = (await AE()).transaction(dl, "readwrite");
    return await o.objectStore(dl).put(n, a), await o.done, n;
  }
  function OE({ appConfig: e }) {
    return e.appId;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const WM = {
      "missing-app-config-values":
        'Missing App configuration value: "{$valueName}"',
      "only-available-in-window":
        "This method is available in a Window context.",
      "only-available-in-sw":
        "This method is available in a service worker context.",
      "permission-default":
        "The notification permission was not granted and dismissed instead.",
      "permission-blocked":
        "The notification permission was not granted and blocked instead.",
      "unsupported-browser":
        "This browser doesn't support the API's required to use the Firebase SDK.",
      "indexed-db-unsupported":
        "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
      "failed-service-worker-registration":
        "We are unable to register the default service worker. {$browserErrorMessage}",
      "token-subscribe-failed":
        "A problem occurred while subscribing the user to FCM: {$errorInfo}",
      "token-subscribe-no-token":
        "FCM returned no token when subscribing the user to push.",
      "token-unsubscribe-failed":
        "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
      "token-update-failed":
        "A problem occurred while updating the user from FCM: {$errorInfo}",
      "token-update-no-token":
        "FCM returned no token when updating the user to push.",
      "use-sw-after-get-token":
        "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
      "invalid-sw-registration":
        "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
      "invalid-bg-handler":
        "The input to setBackgroundMessageHandler() must be a function.",
      "invalid-vapid-key": "The public VAPID key must be a string.",
      "use-vapid-key-after-get-token":
        "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",
    },
    wt = new Gu("messaging", "Messaging", WM);
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function ej(e, n) {
    const a = await Lp(e),
      s = RE(n),
      o = { method: "POST", headers: a, body: JSON.stringify(s) };
    let c;
    try {
      c = await (await fetch(Up(e.appConfig), o)).json();
    } catch (f) {
      throw wt.create("token-subscribe-failed", {
        errorInfo: f == null ? void 0 : f.toString(),
      });
    }
    if (c.error) {
      const f = c.error.message;
      throw wt.create("token-subscribe-failed", { errorInfo: f });
    }
    if (!c.token) throw wt.create("token-subscribe-no-token");
    return c.token;
  }
  async function tj(e, n) {
    const a = await Lp(e),
      s = RE(n.subscriptionOptions),
      o = { method: "PATCH", headers: a, body: JSON.stringify(s) };
    let c;
    try {
      c = await (await fetch(`${Up(e.appConfig)}/${n.token}`, o)).json();
    } catch (f) {
      throw wt.create("token-update-failed", {
        errorInfo: f == null ? void 0 : f.toString(),
      });
    }
    if (c.error) {
      const f = c.error.message;
      throw wt.create("token-update-failed", { errorInfo: f });
    }
    if (!c.token) throw wt.create("token-update-no-token");
    return c.token;
  }
  async function nj(e, n) {
    const s = { method: "DELETE", headers: await Lp(e) };
    try {
      const c = await (await fetch(`${Up(e.appConfig)}/${n}`, s)).json();
      if (c.error) {
        const f = c.error.message;
        throw wt.create("token-unsubscribe-failed", { errorInfo: f });
      }
    } catch (o) {
      throw wt.create("token-unsubscribe-failed", {
        errorInfo: o == null ? void 0 : o.toString(),
      });
    }
  }
  function Up({ projectId: e }) {
    return `${FM}/projects/${e}/registrations`;
  }
  async function Lp({ appConfig: e, installations: n }) {
    const a = await n.getToken();
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": e.apiKey,
      "x-goog-firebase-installations-auth": `FIS ${a}`,
    });
  }
  function RE({ p256dh: e, auth: n, endpoint: a, vapidKey: s }) {
    const o = { web: { endpoint: a, auth: n, p256dh: e } };
    return s !== _E && (o.web.applicationPubKey = s), o;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const rj = 7 * 24 * 60 * 60 * 1e3;
  async function aj(e) {
    const n = await sj(e.swRegistration, e.vapidKey),
      a = {
        vapidKey: e.vapidKey,
        swScope: e.swRegistration.scope,
        endpoint: n.endpoint,
        auth: Qn(n.getKey("auth")),
        p256dh: Qn(n.getKey("p256dh")),
      },
      s = await JM(e.firebaseDependencies);
    if (s) {
      if (lj(s.subscriptionOptions, a))
        return Date.now() >= s.createTime + rj
          ? ij(e, {
              token: s.token,
              createTime: Date.now(),
              subscriptionOptions: a,
            })
          : s.token;
      try {
        await nj(e.firebaseDependencies, s.token);
      } catch (o) {
        console.warn(o);
      }
      return Tb(e.firebaseDependencies, a);
    } else return Tb(e.firebaseDependencies, a);
  }
  async function ij(e, n) {
    try {
      const a = await tj(e.firebaseDependencies, n),
        s = Object.assign(Object.assign({}, n), {
          token: a,
          createTime: Date.now(),
        });
      return await Bp(e.firebaseDependencies, s), a;
    } catch (a) {
      throw a;
    }
  }
  async function Tb(e, n) {
    const s = {
      token: await ej(e, n),
      createTime: Date.now(),
      subscriptionOptions: n,
    };
    return await Bp(e, s), s.token;
  }
  async function sj(e, n) {
    const a = await e.pushManager.getSubscription();
    return (
      a ||
      e.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: PM(n),
      })
    );
  }
  function lj(e, n) {
    const a = n.vapidKey === e.vapidKey,
      s = n.endpoint === e.endpoint,
      o = n.auth === e.auth,
      c = n.p256dh === e.p256dh;
    return a && s && o && c;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ab(e) {
    const n = {
      from: e.from,
      collapseKey: e.collapse_key,
      messageId: e.fcmMessageId,
    };
    return oj(n, e), uj(n, e), cj(n, e), n;
  }
  function oj(e, n) {
    if (!n.notification) return;
    e.notification = {};
    const a = n.notification.title;
    a && (e.notification.title = a);
    const s = n.notification.body;
    s && (e.notification.body = s);
    const o = n.notification.image;
    o && (e.notification.image = o);
    const c = n.notification.icon;
    c && (e.notification.icon = c);
  }
  function uj(e, n) {
    n.data && (e.data = n.data);
  }
  function cj(e, n) {
    var a, s, o, c, f;
    if (
      !n.fcmOptions &&
      !(!((a = n.notification) === null || a === void 0) && a.click_action)
    )
      return;
    e.fcmOptions = {};
    const p =
      (o = (s = n.fcmOptions) === null || s === void 0 ? void 0 : s.link) !==
        null && o !== void 0
        ? o
        : (c = n.notification) === null || c === void 0
        ? void 0
        : c.click_action;
    p && (e.fcmOptions.link = p);
    const h =
      (f = n.fcmOptions) === null || f === void 0 ? void 0 : f.analytics_label;
    h && (e.fcmOptions.analyticsLabel = h);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function fj(e) {
    return typeof e == "object" && !!e && TE in e;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function dj(e) {
    if (!e || !e.options) throw Jd("App Configuration Object");
    if (!e.name) throw Jd("App Name");
    const n = ["projectId", "apiKey", "appId", "messagingSenderId"],
      { options: a } = e;
    for (const s of n) if (!a[s]) throw Jd(s);
    return {
      appName: e.name,
      projectId: a.projectId,
      apiKey: a.apiKey,
      appId: a.appId,
      senderId: a.messagingSenderId,
    };
  }
  function Jd(e) {
    return wt.create("missing-app-config-values", { valueName: e });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class hj {
    constructor(n, a, s) {
      (this.deliveryMetricsExportedToBigQueryEnabled = !1),
        (this.onBackgroundMessageHandler = null),
        (this.onMessageHandler = null),
        (this.logEvents = []),
        (this.isLogServiceStarted = !1);
      const o = dj(n);
      this.firebaseDependencies = {
        app: n,
        appConfig: o,
        installations: a,
        analyticsProvider: s,
      };
    }
    _delete() {
      return Promise.resolve();
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function pj(e) {
    try {
      (e.swRegistration = await navigator.serviceWorker.register(qM, {
        scope: HM,
      })),
        e.swRegistration.update().catch(() => {}),
        await mj(e.swRegistration);
    } catch (n) {
      throw wt.create("failed-service-worker-registration", {
        browserErrorMessage: n == null ? void 0 : n.message,
      });
    }
  }
  async function mj(e) {
    return new Promise((n, a) => {
      const s = setTimeout(
          () => a(new Error(`Service worker not registered after ${wb} ms`)),
          wb
        ),
        o = e.installing || e.waiting;
      e.active
        ? (clearTimeout(s), n())
        : o
        ? (o.onstatechange = (c) => {
            var f;
            ((f = c.target) === null || f === void 0 ? void 0 : f.state) ===
              "activated" && ((o.onstatechange = null), clearTimeout(s), n());
          })
        : (clearTimeout(s), a(new Error("No incoming service worker found.")));
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function yj(e, n) {
    if ((!n && !e.swRegistration && (await pj(e)), !(!n && e.swRegistration))) {
      if (!(n instanceof ServiceWorkerRegistration))
        throw wt.create("invalid-sw-registration");
      e.swRegistration = n;
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function gj(e, n) {
    n ? (e.vapidKey = n) : e.vapidKey || (e.vapidKey = _E);
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function CE(e, n) {
    if (!navigator) throw wt.create("only-available-in-window");
    if (
      (Notification.permission === "default" &&
        (await Notification.requestPermission()),
      Notification.permission !== "granted")
    )
      throw wt.create("permission-blocked");
    return (
      await gj(e, n == null ? void 0 : n.vapidKey),
      await yj(e, n == null ? void 0 : n.serviceWorkerRegistration),
      aj(e)
    );
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function vj(e, n, a) {
    const s = bj(n);
    (await e.firebaseDependencies.analyticsProvider.get()).logEvent(s, {
      message_id: a[TE],
      message_name: a[VM],
      message_time: a[IM],
      message_device_time: Math.floor(Date.now() / 1e3),
    });
  }
  function bj(e) {
    switch (e) {
      case fl.NOTIFICATION_CLICKED:
        return "notification_open";
      case fl.PUSH_RECEIVED:
        return "notification_foreground";
      default:
        throw new Error();
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function Sj(e, n) {
    const a = n.data;
    if (!a.isFirebaseMessaging) return;
    e.onMessageHandler &&
      a.messageType === fl.PUSH_RECEIVED &&
      (typeof e.onMessageHandler == "function"
        ? e.onMessageHandler(Ab(a))
        : e.onMessageHandler.next(Ab(a)));
    const s = a.data;
    fj(s) && s[GM] === "1" && (await vj(e, a.messageType, s));
  }
  const Ob = "@firebase/messaging",
    Rb = "0.12.17";
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Ej = (e) => {
      const n = new hj(
        e.getProvider("app").getImmediate(),
        e.getProvider("installations-internal").getImmediate(),
        e.getProvider("analytics-internal")
      );
      return (
        navigator.serviceWorker.addEventListener("message", (a) => Sj(n, a)), n
      );
    },
    wj = (e) => {
      const n = e.getProvider("messaging").getImmediate();
      return { getToken: (s) => CE(n, s) };
    };
  function xj() {
    Ca(new Hr("messaging", Ej, "PUBLIC")),
      Ca(new Hr("messaging-internal", wj, "PRIVATE")),
      Lr(Ob, Rb),
      Lr(Ob, Rb, "esm2017");
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function _j() {
    try {
      await XS();
    } catch {
      return !1;
    }
    return (
      typeof window < "u" &&
      KS() &&
      b4() &&
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window &&
      "fetch" in window &&
      ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") &&
      PushSubscription.prototype.hasOwnProperty("getKey")
    );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Tj(e, n) {
    if (!navigator) throw wt.create("only-available-in-window");
    return (
      (e.onMessageHandler = n),
      () => {
        e.onMessageHandler = null;
      }
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Aj(e = E5()) {
    return (
      _j().then(
        (n) => {
          if (!n) throw wt.create("unsupported-browser");
        },
        (n) => {
          throw wt.create("indexed-db-unsupported");
        }
      ),
      Op(Tp(e), "messaging").getImmediate()
    );
  }
  async function Oj(e, n) {
    return (e = Tp(e)), CE(e, n);
  }
  function Rj(e, n) {
    return (e = Tp(e)), Tj(e, n);
  }
  xj();
  const Cj = {
      apiKey: "AIzaSyD9vmgYpua_RQN-gEuO1m3U9aZcwc49cyo",
      authDomain: "chat-app-845b3.firebaseapp.com",
      projectId: "chat-app-845b3",
      storageBucket: void 0,
      messagingSenderId: "335520506077",
      appId: "1:335520506077:web:c8ae9518e728bd932c7b34",
      measurementId: "G-S0ST66FLRF",
    },
    Dj = JS(Cj),
    DE = Aj(Dj);
  "serviceWorker" in navigator &&
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((e) => {
        console.log("✅ Service Worker registered:", e);
      })
      .catch((e) => {
        console.error("❌ Service Worker registration failed:", e);
      });
  const NE =
      "BDvEf-z89uoDGpWytDd9t3zfbaAHTXGJ5zHA287KtRWv8XR713X7EHt3wDUR05CWcFlcv3PdG9WnqkfpHN8oo".trim(),
    Nj = "http://localhost:1322/api";
  NE || console.error("❌ VAPID_KEY is missing! Check your .env file.");
  const Mj = async () => {
    if ((await Notification.requestPermission()) !== "granted") {
      console.warn("❌ Notification permission denied.");
      return;
    }
    try {
      const n = await Oj(DE, { vapidKey: NE });
      return console.log("✅ FCM Token:", n), n;
    } catch (n) {
      console.error("❌ Error getting FCM token:", n);
    }
  };
  Rj(DE, (e) => {
    if ((console.log("🔥 Foreground message received!", e), e.notification)) {
      const n = e.notification.title ?? "New Notification",
        a = e.notification.body ?? "You have a new message!",
        s = e.notification.icon ?? "/default-icon.png";
      console.log("🔔 Showing notification:", { title: n, body: a, icon: s }),
        new Notification(n, { body: a, icon: s });
    } else console.warn("⚠️ No notification payload found in message.");
  });
  console.log("Notification permission", Notification.permission);
  const jj = async (e, n, a) => {
      try {
        await _e.post(`${Nj}/send-notification`, {
          token: e,
          title: n,
          body: a,
        }),
          console.log("Notification sent!");
      } catch (s) {
        console.error("Error sending push notification:", s);
      }
    },
    Bj = () => {
      const [e, n] = R.useState(""),
        a = ft(),
        s = Iu(),
        o = xe((p) => {
          var h;
          return (h = p == null ? void 0 : p.auth) == null ? void 0 : h.socket;
        });
      R.useEffect(() => {
        if (o)
          return (
            o.on("getOnlineUsers", (p) => {
              a(MS(p));
            }),
            () => {
              o.off("getOnlineUsers");
            }
          );
      }, [a, o]);
      const c = async () => {
          const p = await Mj();
          console.log("token", p), p && n(p);
        },
        f = () => {
          if (!e) {
            alert("Get notification permission first!");
            return;
          }
          jj(e, "New Chat Message", "You have a new message!");
        };
      return E.jsxs(E.Fragment, {
        children: [
          E.jsxs("div", {
            className: "hidden md:flex h-[calc(100dvh-73px)]",
            children: [
              E.jsx(eb, {}),
              E.jsx("div", {
                className:
                  "w-[75%] bg-gray-800 relative min-h-full h-[calc(100dvh-73px)] overflow-x-auto",
                children: s ? E.jsx(rb, {}) : E.jsx(l4, {}),
              }),
            ],
          }),
          E.jsx("div", {
            className: "flex md:hidden h-[calc(100dvh-53px)]",
            children: E.jsx("div", {
              className:
                "w-full bg-gray-800 relative min-h-full h-[calc(100dvh-53px)] overflow-x-auto",
              children: s ? E.jsx(rb, {}) : E.jsx(eb, {}),
            }),
          }),
          E.jsxs("div", {
            style: { padding: "20px", textAlign: "center" },
            children: [
              E.jsx("h2", { children: "PWA Chat App 🚀" }),
              E.jsx("button", {
                onClick: c,
                style: { margin: "10px", padding: "10px" },
                children: "Enable Push Notifications",
              }),
              E.jsx("button", {
                onClick: f,
                style: { padding: "10px" },
                children: "Send Test Notification",
              }),
              e && E.jsxs("p", { children: ["FCM Token: ", e] }),
            ],
          }),
        ],
      });
    },
    Uj = { value: !1 },
    ME = ir({
      name: "menu",
      initialState: Uj,
      reducers: {
        openMenu: (e) => {
          e.value = !0;
        },
        closeMenu: (e) => {
          e.value = !1;
        },
      },
    }),
    { openMenu: Lj, closeMenu: Qs } = ME.actions,
    kj = ME.reducer,
    Cb = () => {
      const e = ft(),
        n = pl(),
        a = async () => {
          const s = await e(Wo()).unwrap();
          s != null &&
            s.success &&
            (e(Ri()),
            e(DS()),
            n("/login", { replace: !0 }),
            e(ku()),
            e(y6()),
            e(Qs()));
        };
      return E.jsx("button", {
        onClick: a,
        className:
          "cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm",
        children: E.jsx("span", {
          className: "text-lg text-orange-600 p-2",
          children: "Logout",
        }),
      });
    },
    kp = "http://localhost:1322/api",
    eu = Gt(
      "sendRequest",
      async (e) =>
        (
          await _e.post(
            `${kp}/sendRequest`,
            { recieverId: e },
            { withCredentials: !0 }
          )
        ).data
    ),
    _a = Gt(
      "getRequest",
      async () =>
        (await _e.get(`${kp}/getRequest`, { withCredentials: !0 })).data
    ),
    nl = Gt(
      "sentRequest",
      async () =>
        (await _e.get(`${kp}/sentRequest`, { withCredentials: !0 })).data
    ),
    zj = {
      data: null,
      loading: !1,
      getRequestLoading: !1,
      error: null,
      sendRequest: null,
      sentRequestLoading: !1,
    },
    $j = ir({
      name: "sendRequest  ",
      initialState: zj,
      reducers: {},
      extraReducers: (e) => {
        e.addCase(eu.pending, (n) => {
          n.loading = !0;
        })
          .addCase(eu.fulfilled, (n) => {
            n.loading = !1;
          })
          .addCase(eu.rejected, (n, a) => {
            (n.loading = !1),
              (n.error = a.error.message || "Something is wrong");
          })
          .addCase(_a.pending, (n) => {
            n.getRequestLoading = !0;
          })
          .addCase(_a.fulfilled, (n, a) => {
            (n.getRequestLoading = !1), (n.data = a.payload);
          })
          .addCase(_a.rejected, (n, a) => {
            (n.getRequestLoading = !1),
              (n.error = a.error.message || "Something is wrong");
          })
          .addCase(nl.pending, (n) => {
            n.sentRequestLoading = !0;
          })
          .addCase(nl.fulfilled, (n, a) => {
            (n.sentRequestLoading = !1), (n.sendRequest = a.payload);
          })
          .addCase(nl.rejected, (n, a) => {
            (n.sentRequestLoading = !1),
              (n.error = a.error.message || "Something is wrong");
          });
      },
    }),
    qj = $j.reducer,
    Db =
      "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23f54a00'%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2060%2060'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586%20L60,50.207V3.446C60,1.983,58.811,0.793,57.348,0.793z'/%3e%3cpath%20d='M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446%20C47,13.983,45.811,12.793,44.348,12.793z%20M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1%20S10.447,22.793,11,22.793z%20M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z%20M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z'/%3e%3c/g%3e%3c/svg%3e",
    Nb =
      "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23f54a00'%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20611.999%20611.999'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203%20C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578%20c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626%20h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856%20c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626%20C581.586,511.664,577.516,503.6,570.107,500.254z%20M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32%20c13.726-17.32,23.407-38.135,30.244-58.866H484.434z%20M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082%20c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z%20M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826%20c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z%20M306.001,577.485%20c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z'/%3e%3cpath%20d='M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258%20c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258%20C323.259,126.96,315.532,119.235,306.001,119.235z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
    Mb =
      "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20fill='white'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23f54a00;stroke-linejoin:round;stroke-width:2px;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20data-name='212-User'%20id='_212-User'%3e%3ccircle%20class='cls-1'%20cx='15'%20cy='8'%20r='7'/%3e%3cpath%20class='cls-1'%20d='M22.55,18A11,11,0,0,0,4,26v5H14'/%3e%3ccircle%20class='cls-1'%20cx='18'%20cy='24'%20r='4'/%3e%3cline%20class='cls-1'%20x1='21'%20x2='25'%20y1='27'%20y2='31'/%3e%3c/g%3e%3c/svg%3e",
    Hj =
      "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23f54a00'%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20471.2%20471.2'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5%20s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5%20S235.019,444.2,227.619,444.2z'/%3e%3cpath%20d='M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5%20s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8%20C455.319,239.9,455.319,231.3,450.019,226.1z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
    Fj =
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23f54a00'%3e%3cpath%20d='M12%203c5.514%200%2010%203.592%2010%208.007%200%204.917-5.145%207.961-9.91%207.961-1.937%200-3.383-.397-4.394-.644-1%20.613-1.595%201.037-4.272%201.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415%204.485-8.007%209.999-8.007zm0-2c-6.338%200-12%204.226-12%2010.007%200%202.05.738%204.063%202.047%205.625.055%201.83-1.023%204.456-1.993%206.368%202.602-.47%206.301-1.508%207.978-2.536%201.418.345%202.775.503%204.059.503%207.084%200%2011.91-4.837%2011.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm0%2014h-5v-1h5v1zm5-3h-10v-1h10v1zm0-3h-10v-1h10v1z'/%3e%3c/svg%3e",
    Vj = () =>
      xe((n) => {
        var a, s;
        return (
          ((s =
            (a = n == null ? void 0 : n.sendRequest) == null
              ? void 0
              : a.data) == null
            ? void 0
            : s.requests) || []
        );
      }),
    jE = () =>
      xe((n) => {
        var a;
        return (a = n == null ? void 0 : n.sendRequest) == null
          ? void 0
          : a.getRequestLoading;
      }),
    Ij = () => {
      var m, g, v, S;
      const e = ft(),
        n = qu(),
        a = jS(),
        s = jE();
      console.log("request loading", s);
      const o = () => {
          e(P6()), e(Ci());
        },
        c = Iu(),
        f = xe((_) => {
          var w, M;
          return (
            ((M =
              (w = _ == null ? void 0 : _.sendRequest) == null
                ? void 0
                : w.data) == null
              ? void 0
              : M.requests) || []
          );
        });
      R.useEffect(() => {
        e(_a());
      }, [e]);
      const p = () => {
          e(Lj()), e(_a());
        },
        h = xe((_) => {
          var w;
          return (w = _ == null ? void 0 : _.menu) == null ? void 0 : w.value;
        });
      return (
        (n == null ? void 0 : n.success) &&
        E.jsxs("header", {
          className:
            "bg-gray-900  p-3 px-5 md:p-5 relative border-b-[1px] border-white",
          children: [
            E.jsxs("nav", {
              className: "flex justify-between items-center ",
              children: [
                (n == null ? void 0 : n.success) &&
                  E.jsxs("div", {
                    className: "flex flex-row-reverse",
                    children: [
                      E.jsx(sn, {
                        to: "/",
                        className: "block md:hidden",
                        children: E.jsx("img", { src: Fj, alt: "logo" }),
                      }),
                      E.jsx("div", {
                        className: "hidden md:block",
                        children: E.jsx(Cb, {}),
                      }),
                      c !== null &&
                        E.jsx("button", {
                          className:
                            "text-orange-600  mr-5 rotate-270 lg:hidden",
                          onClick: o,
                          children: E.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "28px",
                            height: "28px",
                            viewBox: "0 0 24 24",
                            children: E.jsx("path", {
                              d: "M12 6V18M12 6L7 11M12 6L17 11",
                              stroke: "#f54a00",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                          }),
                        }),
                    ],
                  }),
                (n == null ? void 0 : n.success) &&
                  E.jsxs("div", {
                    className: "flex items-center gap-5",
                    children: [
                      E.jsxs("div", {
                        className: "hidden md:flex items-center gap-5 ",
                        children: [
                          E.jsx("div", {
                            className: "text-orange-600",
                            children: E.jsx(sn, {
                              to: "/",
                              className: "",
                              children: E.jsx("img", {
                                src: Db,
                                alt: "chat",
                                className: "w-[25px] h-[25px]",
                              }),
                            }),
                          }),
                          E.jsx("div", {
                            className: "text-orange-600",
                            children: E.jsx(sn, {
                              to: "/find-users",
                              className: "",
                              children: E.jsx("img", {
                                src: Mb,
                                alt: "searchUser",
                                className: "w-[25px] h-[25px]",
                              }),
                            }),
                          }),
                          E.jsx("div", {
                            className: "text-orange-600",
                            children: E.jsxs(sn, {
                              to: "/request",
                              className: "relative",
                              children: [
                                E.jsx("span", {
                                  className:
                                    "bg-white absolute top-[-7px] right-[-2px] w-[16px] h-[16px] text-[12px] rounded-full flex justify-center items-center font-bold",
                                  children: s
                                    ? E.jsx(Ni, {
                                        baseColor: "#39424e",
                                        highlightColor: "#f54a00",
                                        children: E.jsx(ct, {
                                          width: 15,
                                          height: 20,
                                          duration: 0.9,
                                        }),
                                      })
                                    : E.jsx(E.Fragment, {
                                        children:
                                          (f == null ? void 0 : f.length) > 0
                                            ? f == null
                                              ? void 0
                                              : f.length
                                            : 0,
                                      }),
                                }),
                                E.jsx("img", {
                                  src: Nb,
                                  alt: "request",
                                  className: "w-[25px] h-[25px]",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      E.jsx("div", {
                        className:
                          "text-orange-600 text-xl md:text-2xl hidden md:block",
                        children: a
                          ? E.jsx(Ni, {
                              baseColor: "#39424e",
                              highlightColor: "#f54a00",
                              children: E.jsx(ct, {
                                width: 150,
                                height: 30,
                                duration: 0.9,
                              }),
                            })
                          : E.jsxs(E.Fragment, {
                              children: [
                                (m = n == null ? void 0 : n.data) == null
                                  ? void 0
                                  : m.firstName,
                                " ",
                                (g = n == null ? void 0 : n.data) == null
                                  ? void 0
                                  : g.lastName,
                              ],
                            }),
                      }),
                      E.jsx("button", {
                        onClick: p,
                        className:
                          "text-orange-600 text-xl md:text-2xl block md:hidden",
                        children: a
                          ? E.jsx(Ni, {
                              baseColor: "#39424e",
                              highlightColor: "#f54a00",
                              children: E.jsx(ct, {
                                width: 120,
                                height: 25,
                                duration: 0.9,
                              }),
                            })
                          : E.jsxs(E.Fragment, {
                              children: [
                                (v = n == null ? void 0 : n.data) == null
                                  ? void 0
                                  : v.firstName,
                                " ",
                                (S = n == null ? void 0 : n.data) == null
                                  ? void 0
                                  : S.lastName,
                              ],
                            }),
                      }),
                    ],
                  }),
              ],
            }),
            E.jsxs("div", {
              className: `block md:hidden bg-black absolute top-0 left-0 z-20 h-[100dvh] w-[90%] sm:w-[400px] p-5 ${
                h ? "translate-x-0" : "translate-x-[-600px]"
              } ease-in-out duration-300`,
              children: [
                E.jsx("button", {
                  className: "my-5 text-xl text-orange-600 cursor-pointer",
                  onClick: () => e(Qs()),
                  children: "Close",
                }),
                E.jsxs("ul", {
                  className: "text-orange-600 text-xl",
                  children: [
                    E.jsx("li", {
                      className: "p-1 border-b-2 border-orange-600 mb-5",
                      children: E.jsxs(sn, {
                        to: "/",
                        onClick: () => e(Qs()),
                        className: "flex gap-7 items-center px-1",
                        children: [
                          E.jsx("div", {
                            className: "w-[30px]",
                            children: E.jsx("img", {
                              src: Db,
                              alt: "searchUser",
                              className: "w-[25px] h-[25px]",
                            }),
                          }),
                          E.jsx("span", {
                            className: "text-[18px]",
                            children: "Chat",
                          }),
                        ],
                      }),
                    }),
                    E.jsx("li", {
                      className: "p-1 border-b-2 border-orange-600 mb-5",
                      children: E.jsxs(sn, {
                        to: "/find-users",
                        onClick: () => e(Qs()),
                        className: "flex gap-7 items-center px-1",
                        children: [
                          E.jsx("div", {
                            className: "w-[30px]",
                            children: E.jsx("img", {
                              src: Mb,
                              alt: "searchUser",
                              className: "w-[25px] h-[25px]",
                            }),
                          }),
                          E.jsx("span", {
                            className: "text-[18px]",
                            children: "Find Users",
                          }),
                        ],
                      }),
                    }),
                    E.jsx("li", {
                      className: "p-1 border-b-2 border-orange-600 mb-5 px-1",
                      children: E.jsxs(sn, {
                        to: "/request",
                        onClick: () => e(Qs()),
                        className: "relative flex gap-7 items-center",
                        children: [
                          E.jsxs("div", {
                            className: "",
                            children: [
                              E.jsx("span", {
                                className:
                                  "bg-white absolute top-[-7px] left-[12px] w-[16px] h-[16px] text-[12px] rounded-full flex justify-center items-center font-bold",
                                children:
                                  (f == null ? void 0 : f.length) > 0
                                    ? f == null
                                      ? void 0
                                      : f.length
                                    : 0,
                              }),
                              E.jsx("div", {
                                className: "w-[30px]",
                                children: E.jsx("img", {
                                  src: Nb,
                                  alt: "request",
                                  className: "w-[25px] h-[25px]",
                                }),
                              }),
                            ],
                          }),
                          E.jsx("span", {
                            className: "text-[18px]",
                            children: "Request",
                          }),
                        ],
                      }),
                    }),
                    E.jsx("li", {
                      className:
                        "p-1 border-b-2 border-orange-600 mb-5 px-1 text-[18px]",
                      children: E.jsxs("div", {
                        className: "flex items-center gap-7",
                        children: [
                          E.jsx("div", {
                            className: "w-[30px]",
                            children: E.jsx("img", {
                              src: Hj,
                              alt: "request",
                              className: "w-[25px] h-[25px]",
                            }),
                          }),
                          E.jsx(Cb, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    },
    Gj = ({ children: e }) =>
      E.jsxs("div", {
        className: "",
        children: [E.jsx(Ij, {}), E.jsx("main", { children: e })],
      }),
    Pj = "http://localhost:1322/api",
    tu = Gt(
      "getAllUsers",
      async () =>
        (await _e.get(`${Pj}/message/all-users`, { withCredentials: !0 })).data
    ),
    Yj = { data: null, loading: !1, error: null },
    Kj = ir({
      name: "users",
      initialState: Yj,
      reducers: {},
      extraReducers: (e) => {
        e.addCase(tu.pending, (n) => {
          n.loading = !0;
        })
          .addCase(tu.fulfilled, (n, a) => {
            (n.loading = !1), (n.data = a.payload);
          })
          .addCase(tu.rejected, (n, a) => {
            (n.loading = !1),
              (n.error = a.error.message || "Something is wrong");
          });
      },
    }),
    Xj = Kj.reducer,
    BE = ({ title: e }) =>
      E.jsx("h2", {
        className:
          "text-white text-center text-xl md:text-2xl lg:md:text-3xl mb-5 pt-5",
        children: e,
      }),
    Qj = () =>
      xe((n) => {
        var a, s;
        return (
          ((s = (a = n == null ? void 0 : n.users) == null ? void 0 : a.data) ==
          null
            ? void 0
            : s.data) || []
        );
      }),
    Zj = () =>
      xe((n) => {
        var a;
        return (a = n == null ? void 0 : n.users) == null ? void 0 : a.loading;
      }),
    Jj = () =>
      xe((n) => {
        var a, s;
        return (s =
          (a = n == null ? void 0 : n.sendRequest) == null
            ? void 0
            : a.sendRequest) == null
          ? void 0
          : s.sentRequests;
      }),
    Wj = () =>
      xe((n) => {
        var a, s;
        return (s =
          (a = n == null ? void 0 : n.sendRequest) == null
            ? void 0
            : a.sendRequest) == null
          ? void 0
          : s.loading;
      }),
    e8 = ({ _id: e, firstName: n, lastName: a, handleUsers: s }) => {
      const o = Jj(),
        c = Wj();
      return E.jsxs(
        "div",
        {
          className: "flex justify-between items-center",
          children: [
            E.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                E.jsxs("div", {
                  className:
                    "text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center",
                  children: [
                    n == null ? void 0 : n.slice(0, 1),
                    a == null ? void 0 : a.slice(0, 1),
                  ],
                }),
                E.jsxs("div", {
                  className: "text-white text-[16px] sm:text-lg",
                  children: [n, " ", a],
                }),
              ],
            }),
            E.jsx("button", {
              onClick: () => s(e),
              className:
                "bg-orange-600 capitalize text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer ",
              children: c
                ? "Sending Request"
                : o != null &&
                  o.some((f) => (f == null ? void 0 : f.userId) === e)
                ? "Pending"
                : "Follow",
            }),
          ],
        },
        e
      );
    },
    t8 = () => {
      const e = ft(),
        n = Qj(),
        a = (o) => {
          e(eu(o)).then(() => e(nl()));
        },
        s = Zj();
      return E.jsx("div", {
        className:
          "bg-gray-700 p-2 md:p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto",
        children:
          (n == null ? void 0 : n.length) > 0
            ? s
              ? E.jsxs(Ni, {
                  baseColor: "#39424e",
                  highlightColor: "#f54a00",
                  children: [
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                  ],
                })
              : n == null
              ? void 0
              : n.map((o) =>
                  E.jsx(
                    e8,
                    {
                      _id: o == null ? void 0 : o._id,
                      firstName: o == null ? void 0 : o.firstName,
                      lastName: o == null ? void 0 : o.lastName,
                      handleUsers: a,
                    },
                    o == null ? void 0 : o._id
                  )
                )
            : E.jsx("div", {
                className: "text-orange-600 font-bold text-2xl text-center",
                children: "No User Found",
              }),
      });
    },
    n8 = () => {
      const e = ft();
      return (
        R.useEffect(() => {
          e(tu());
        }, [e]),
        R.useEffect(() => {
          e(nl());
        }, [e]),
        E.jsx("div", {
          className:
            "h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900",
          children: E.jsxs("div", {
            className: "w-full sm:w-[70%] md:w-[50%] mx-auto px-2",
            children: [E.jsx(BE, { title: "Find Users" }), E.jsx(t8, {})],
          }),
        })
      );
    },
    r8 = ({ senderId: e, firstName: n, lastName: a, handleAcceptRequest: s }) =>
      E.jsxs(
        "div",
        {
          className: "flex justify-between items-center",
          children: [
            E.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                E.jsxs("div", {
                  className:
                    "text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center",
                  children: [
                    n == null ? void 0 : n.slice(0, 1),
                    a == null ? void 0 : a.slice(0, 1),
                  ],
                }),
                E.jsxs("div", {
                  className: "text-white text-[16px] sm:text-lg",
                  children: [n, " ", a],
                }),
              ],
            }),
            E.jsx("button", {
              onClick: () => s(e),
              className:
                "bg-orange-600 text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer ",
              children: "Accept",
            }),
          ],
        },
        e
      ),
    a8 = "http://localhost:1322/api",
    nu = Gt(
      "acceptRequest",
      async (e) =>
        (
          await _e.post(
            `${a8}/acceptRequest`,
            { recieverId: e },
            { withCredentials: !0 }
          )
        ).data
    ),
    i8 = { data: null, loading: !1, error: null },
    s8 = ir({
      name: "sendRequest  ",
      initialState: i8,
      reducers: {},
      extraReducers: (e) => {
        e.addCase(nu.pending, (n) => {
          n.loading = !0;
        })
          .addCase(nu.fulfilled, (n, a) => {
            (n.loading = !1), (n.data = a.payload);
          })
          .addCase(nu.rejected, (n, a) => {
            (n.loading = !1),
              (n.error = a.error.message || "Something is wrong");
          });
      },
    }),
    l8 = s8.reducer,
    o8 = () => {
      const e = ft(),
        n = Vj(),
        a = (o) => {
          e(nu(o)).then(() => e(_a()));
        },
        s = jE();
      return E.jsx("div", {
        className:
          "bg-gray-700 p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto",
        children:
          (n == null ? void 0 : n.length) > 0
            ? s
              ? E.jsxs(Ni, {
                  baseColor: "#39424e",
                  highlightColor: "#f54a00",
                  children: [
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                    E.jsx("div", {
                      className: "my-2",
                      children: E.jsx(ct, { height: 60, duration: 0.9 }),
                    }),
                  ],
                })
              : n == null
              ? void 0
              : n.map((o) => {
                  var c, f, p;
                  return E.jsx(r8, {
                    senderId:
                      (c = o == null ? void 0 : o.senderId) == null
                        ? void 0
                        : c._id,
                    firstName:
                      (f = o == null ? void 0 : o.senderId) == null
                        ? void 0
                        : f.firstName,
                    lastName:
                      (p = o == null ? void 0 : o.senderId) == null
                        ? void 0
                        : p.lastName,
                    handleAcceptRequest: a,
                  });
                })
            : E.jsx("div", {
                className: "text-orange-600 font-bold text-2xl text-center",
                children: "No Request Found",
              }),
      });
    },
    u8 = () => {
      const e = ft();
      return (
        R.useEffect(() => {
          e(_a());
        }, [e]),
        E.jsx("div", {
          className:
            "h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900",
          children: E.jsxs("div", {
            className: "w-full sm:w-[70%] md:w-[50%] mx-auto px-2",
            children: [E.jsx(BE, { title: "Request" }), E.jsx(o8, {})],
          }),
        })
      );
    },
    UE = kC({
      reducer: {
        registration: UD,
        auth: g6,
        toast: vN,
        profile: x6,
        chat: Y6,
        users: Xj,
        sendRequest: qj,
        acceptRequest: l8,
        menu: kj,
      },
    }),
    c8 = () => {
      const e = ft(),
        n = qu();
      R.useEffect(() => {
        e(Ri());
      }, [e]);
      const a = R.useCallback(async () => {
        console.log("🌍 User is online. Syncing messages...");
        try {
          const s = await Vu();
          if (s.length === 0) {
            console.log("⚠️ No unsent messages to sync.");
            return;
          }
          console.log("📩 Found unsent messages:", s);
          const o = s.map(async (c) => {
            const f = {
              selectedUserId: c.recieverId,
              loggedinUserId: c.senderId,
              text: c.text,
            };
            return UE.dispatch(tl(f)).unwrap();
          });
          await Promise.all(o),
            console.log("🌍 User is online. Syncing complated..."),
            await kS(),
            console.log(
              "✅ All offline messages sent and cleared from IndexedDB."
            );
        } catch (s) {
          console.error("❌ Error syncing messages:", s);
        }
      }, []);
      return (
        R.useEffect(
          () => (
            window.addEventListener("online", a),
            () => {
              console.log("🛑 Cleaning up event listener."),
                window.removeEventListener("online", a);
            }
          ),
          [a]
        ),
        E.jsxs(Gj, {
          children: [
            E.jsx(BS, {}),
            E.jsxs(e_, {
              children: [
                E.jsx(xi, { path: "/register", element: E.jsx(bN, {}) }),
                E.jsx(xi, {
                  path: "/login",
                  element:
                    n != null && n.success
                      ? E.jsx(M0, { to: "/" })
                      : E.jsx(R6, {}),
                }),
                E.jsx(xi, {
                  path: "/",
                  element:
                    n != null && n.success
                      ? E.jsx(Bj, {})
                      : E.jsx(M0, { to: "/login" }),
                }),
                E.jsx(xi, { path: "/find-users", element: E.jsx(n8, {}) }),
                E.jsx(xi, { path: "/request", element: E.jsx(u8, {}) }),
              ],
            }),
          ],
        })
      );
    };
  cx.createRoot(document.getElementById("root")).render(
    E.jsx(R.StrictMode, {
      children: E.jsx(lC, {
        store: UE,
        children: E.jsx(__, { children: E.jsx(c8, {}) }),
      }),
    })
  );
  "serviceWorker" in navigator &&
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((e) => {
          console.log("Service Worker registered:", e);
        })
        .catch((e) => {
          console.error("Service Worker registration failed:", e);
        });
    });
  "serviceWorker" in navigator &&
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((e) => {
        console.log("✅Push notification Service Worker registered:", e);
      })
      .catch((e) => {
        console.error(
          "❌Push notification Service Worker registration failed:",
          e
        );
      });
});
export default f8();
