!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    var t = [],
        x = T.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        p = n.hasOwnProperty,
        s = p.toString,
        u = s.call(Object),
        m = {};
    function v(e, t) {
        var n = (t = t || x).createElement("script");
        (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    var c = "3.2.1",
        C = function (e, t) {
            return new C.fn.init(e, t);
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        d = /-([a-z])/g,
        y = function (e, t) {
            return t.toUpperCase();
        };
    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = C.type(e);
        return (
            "function" !== n &&
            !C.isWindow(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (C.fn = C.prototype =
        {
            jquery: c,
            constructor: C,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (e) {
                return null == e
                    ? a.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return C.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    C.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: l,
            sort: t.sort,
            splice: t.splice,
        }),
        (C.extend = C.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    o,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for (
                    "boolean" == typeof s &&
                        ((u = s), (s = arguments[a] || {}), a++),
                        "object" == typeof s || C.isFunction(s) || (s = {}),
                        a === l && ((s = this), a--);
                    a < l;
                    a++
                )
                    if (null != (e = arguments[a]))
                        for (t in e)
                            (n = s[t]),
                                s !== (i = e[t]) &&
                                    (u &&
                                    i &&
                                    (C.isPlainObject(i) ||
                                        (r = Array.isArray(i)))
                                        ? ((o = r
                                              ? ((r = !1),
                                                n && Array.isArray(n) ? n : [])
                                              : n && C.isPlainObject(n)
                                              ? n
                                              : {}),
                                          (s[t] = C.extend(u, o, i)))
                                        : void 0 !== i && (s[t] = i));
                return s;
            }),
        C.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === C.type(e);
            },
            isWindow: function (e) {
                return null != e && e === e.window;
            },
            isNumeric: function (e) {
                var t = C.type(e);
                return (
                    ("number" === t || "string" === t) &&
                    !isNaN(e - parseFloat(e))
                );
            },
            isPlainObject: function (e) {
                var t, n;
                return !(
                    !e ||
                    "[object Object]" !== o.call(e) ||
                    ((t = i(e)) &&
                        ("function" !=
                            typeof (n =
                                p.call(t, "constructor") && t.constructor) ||
                            s.call(n) !== u))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? n[o.call(e)] || "object"
                    : typeof e;
            },
            globalEval: function (e) {
                v(e);
            },
            camelCase: function (e) {
                return e.replace(h, "ms-").replace(d, y);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (_(e))
                    for (
                        n = e.length;
                        i < n && !1 !== t.call(e[i], i, e[i]);
                        i++
                    );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(f, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (_(Object(e))
                            ? C.merge(n, "string" == typeof e ? [e] : e)
                            : l.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : r.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                    !t(e[r], r) !== s && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (_(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return g.apply([], s);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    C.isFunction(e))
                )
                    return (
                        (i = a.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(
                                t || this,
                                i.concat(a.call(arguments))
                            );
                        }).guid = e.guid =
                            e.guid || C.guid++),
                        r
                    );
            },
            now: Date.now,
            support: m,
        }),
        "function" == typeof Symbol &&
            (C.fn[Symbol.iterator] = t[Symbol.iterator]),
        C.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var b = (function (n) {
        var e,
            d,
            b,
            o,
            r,
            p,
            f,
            g,
            w,
            l,
            u,
            E,
            T,
            s,
            x,
            m,
            a,
            c,
            v,
            C = "sizzle" + 1 * new Date(),
            y = n.document,
            S = 0,
            i = 0,
            h = se(),
            _ = se(),
            D = se(),
            A = function (e, t) {
                return e === t && (u = !0), 0;
            },
            N = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            k = t.push,
            O = t.push,
            L = t.slice,
            j = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            H =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q =
                "\\[" +
                P +
                "*(" +
                F +
                ")(?:" +
                P +
                "*([*^$|!~]?=)" +
                P +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                F +
                "))|)" +
                P +
                "*\\]",
            R =
                ":(" +
                F +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                q +
                ")*)|.*)\\)|)",
            M = new RegExp(P + "+", "g"),
            W = new RegExp(
                "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
                "g"
            ),
            B = new RegExp("^" + P + "*," + P + "*"),
            U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            K = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            $ = new RegExp(R),
            Q = new RegExp("^" + F + "$"),
            V = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        P +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        P +
                        "*(?:([+-]|)" +
                        P +
                        "*(\\d+)|))" +
                        P +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        P +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        P +
                        "*((?:-\\d)?\\d*)" +
                        P +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            z = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            X = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n
                    ? t
                    : i < 0
                    ? String.fromCharCode(i + 65536)
                    : String.fromCharCode(
                          (i >> 10) | 55296,
                          (1023 & i) | 56320
                      );
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t
                    ? "\0" === e
                        ? "�"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            ie = function () {
                E();
            },
            re = ye(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            O.apply((t = L.call(y.childNodes)), y.childNodes),
                t[y.childNodes.length].nodeType;
        } catch (e) {
            O = {
                apply: t.length
                    ? function (e, t) {
                          k.apply(e, L.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, n, i) {
            var r,
                o,
                s,
                a,
                l,
                u,
                c,
                f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
            )
                return n;
            if (
                !i &&
                ((t ? t.ownerDocument || t : y) !== T && E(t), (t = t || T), x)
            ) {
                if (11 !== h && (l = G.exec(e)))
                    if ((r = l[1])) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n;
                        } else if (
                            f &&
                            (s = f.getElementById(r)) &&
                            v(t, s) &&
                            s.id === r
                        )
                            return n.push(s), n;
                    } else {
                        if (l[2])
                            return O.apply(n, t.getElementsByTagName(e)), n;
                        if (
                            (r = l[3]) &&
                            d.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return O.apply(n, t.getElementsByClassName(r)), n;
                    }
                if (d.qsa && !D[e + " "] && (!m || !m.test(e))) {
                    if (1 !== h) (f = t), (c = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for (
                            (a = t.getAttribute("id"))
                                ? (a = a.replace(te, ne))
                                : t.setAttribute("id", (a = C)),
                                o = (u = p(e)).length;
                            o--;

                        )
                            u[o] = "#" + a + " " + ve(u[o]);
                        (c = u.join(",")),
                            (f = (J.test(e) && ge(t.parentNode)) || t);
                    }
                    if (c)
                        try {
                            return O.apply(n, f.querySelectorAll(c)), n;
                        } catch (e) {
                        } finally {
                            a === C && t.removeAttribute("id");
                        }
                }
            }
            return g(e.replace(W, "$1"), t, n, i);
        }
        function se() {
            var i = [];
            return function e(t, n) {
                return (
                    i.push(t + " ") > b.cacheLength && delete e[i.shift()],
                    (e[t + " "] = n)
                );
            };
        }
        function ae(e) {
            return (e[C] = !0), e;
        }
        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                b.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function de(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && re(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function pe(s) {
            return ae(function (o) {
                return (
                    (o = +o),
                    ae(function (e, t) {
                        for (var n, i = s([], e.length, o), r = i.length; r--; )
                            e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((d = oe.support = {}),
        (r = oe.isXML =
            function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
        (E = oe.setDocument =
            function (e) {
                var t,
                    n,
                    i = e ? e.ownerDocument || e : y;
                return (
                    i !== T &&
                        9 === i.nodeType &&
                        i.documentElement &&
                        ((s = (T = i).documentElement),
                        (x = !r(T)),
                        y !== T &&
                            (n = T.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                                ? n.addEventListener("unload", ie, !1)
                                : n.attachEvent &&
                                  n.attachEvent("onunload", ie)),
                        (d.attributes = le(function (e) {
                            return (
                                (e.className = "i"),
                                !e.getAttribute("className")
                            );
                        })),
                        (d.getElementsByTagName = le(function (e) {
                            return (
                                e.appendChild(T.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (d.getElementsByClassName = X.test(
                            T.getElementsByClassName
                        )),
                        (d.getById = le(function (e) {
                            return (
                                (s.appendChild(e).id = C),
                                !T.getElementsByName ||
                                    !T.getElementsByName(C).length
                            );
                        })),
                        d.getById
                            ? ((b.filter.ID = function (e) {
                                  var t = e.replace(Z, ee);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && x) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : [];
                                  }
                              }))
                            : ((b.filter.ID = function (e) {
                                  var n = e.replace(Z, ee);
                                  return function (e) {
                                      var t =
                                          void 0 !== e.getAttributeNode &&
                                          e.getAttributeNode("id");
                                      return t && t.value === n;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && x) {
                                      var n,
                                          i,
                                          r,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if (
                                              (n = o.getAttributeNode("id")) &&
                                              n.value === e
                                          )
                                              return [o];
                                          for (
                                              r = t.getElementsByName(e), i = 0;
                                              (o = r[i++]);

                                          )
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = d.getElementsByTagName
                            ? function (e, t) {
                                  return void 0 !== t.getElementsByTagName
                                      ? t.getElementsByTagName(e)
                                      : d.qsa
                                      ? t.querySelectorAll(e)
                                      : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      i = [],
                                      r = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" !== e) return o;
                                  for (; (n = o[r++]); )
                                      1 === n.nodeType && i.push(n);
                                  return i;
                              }),
                        (b.find.CLASS =
                            d.getElementsByClassName &&
                            function (e, t) {
                                if (void 0 !== t.getElementsByClassName && x)
                                    return t.getElementsByClassName(e);
                            }),
                        (a = []),
                        (m = []),
                        (d.qsa = X.test(T.querySelectorAll)) &&
                            (le(function (e) {
                                (s.appendChild(e).innerHTML =
                                    "<a id='" +
                                    C +
                                    "'></a><select id='" +
                                    C +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        m.push("[*^$]=" + P + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                        m.push(
                                            "\\[" + P + "*(?:value|" + H + ")"
                                        ),
                                    e.querySelectorAll("[id~=" + C + "-]")
                                        .length || m.push("~="),
                                    e.querySelectorAll(":checked").length ||
                                        m.push(":checked"),
                                    e.querySelectorAll("a#" + C + "+*")
                                        .length || m.push(".#.+[+~]");
                            }),
                            le(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = T.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                        m.push("name" + P + "*[*^$|!~]?="),
                                    2 !==
                                        e.querySelectorAll(":enabled").length &&
                                        m.push(":enabled", ":disabled"),
                                    (s.appendChild(e).disabled = !0),
                                    2 !==
                                        e.querySelectorAll(":disabled")
                                            .length &&
                                        m.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    m.push(",.*:");
                            })),
                        (d.matchesSelector = X.test(
                            (c =
                                s.matches ||
                                s.webkitMatchesSelector ||
                                s.mozMatchesSelector ||
                                s.oMatchesSelector ||
                                s.msMatchesSelector)
                        )) &&
                            le(function (e) {
                                (d.disconnectedMatch = c.call(e, "*")),
                                    c.call(e, "[s!='']:x"),
                                    a.push("!=", R);
                            }),
                        (m = m.length && new RegExp(m.join("|"))),
                        (a = a.length && new RegExp(a.join("|"))),
                        (t = X.test(s.compareDocumentPosition)),
                        (v =
                            t || X.test(s.contains)
                                ? function (e, t) {
                                      var n =
                                              9 === e.nodeType
                                                  ? e.documentElement
                                                  : e,
                                          i = t && t.parentNode;
                                      return (
                                          e === i ||
                                          !(
                                              !i ||
                                              1 !== i.nodeType ||
                                              !(n.contains
                                                  ? n.contains(i)
                                                  : e.compareDocumentPosition &&
                                                    16 &
                                                        e.compareDocumentPosition(
                                                            i
                                                        ))
                                          )
                                      );
                                  }
                                : function (e, t) {
                                      if (t)
                                          for (; (t = t.parentNode); )
                                              if (t === e) return !0;
                                      return !1;
                                  }),
                        (A = t
                            ? function (e, t) {
                                  if (e === t) return (u = !0), 0;
                                  var n =
                                      !e.compareDocumentPosition -
                                      !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 &
                                          (n =
                                              (e.ownerDocument || e) ===
                                              (t.ownerDocument || t)
                                                  ? e.compareDocumentPosition(t)
                                                  : 1) ||
                                      (!d.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e === T ||
                                            (e.ownerDocument === y && v(y, e))
                                              ? -1
                                              : t === T ||
                                                (t.ownerDocument === y &&
                                                    v(y, t))
                                              ? 1
                                              : l
                                              ? j(l, e) - j(l, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (u = !0), 0;
                                  var n,
                                      i = 0,
                                      r = e.parentNode,
                                      o = t.parentNode,
                                      s = [e],
                                      a = [t];
                                  if (!r || !o)
                                      return e === T
                                          ? -1
                                          : t === T
                                          ? 1
                                          : r
                                          ? -1
                                          : o
                                          ? 1
                                          : l
                                          ? j(l, e) - j(l, t)
                                          : 0;
                                  if (r === o) return ce(e, t);
                                  for (n = e; (n = n.parentNode); )
                                      s.unshift(n);
                                  for (n = t; (n = n.parentNode); )
                                      a.unshift(n);
                                  for (; s[i] === a[i]; ) i++;
                                  return i
                                      ? ce(s[i], a[i])
                                      : s[i] === y
                                      ? -1
                                      : a[i] === y
                                      ? 1
                                      : 0;
                              })),
                    T
                );
            }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if (
                ((e.ownerDocument || e) !== T && E(e),
                (t = t.replace(K, "='$1']")),
                d.matchesSelector &&
                    x &&
                    !D[t + " "] &&
                    (!a || !a.test(t)) &&
                    (!m || !m.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (
                        n ||
                        d.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {}
            return 0 < oe(t, T, null, [e]).length;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && E(e), v(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== T && E(e);
            var n = b.attrHandle[t.toLowerCase()],
                i =
                    n && N.call(b.attrHandle, t.toLowerCase())
                        ? n(e, t, !x)
                        : void 0;
            return void 0 !== i
                ? i
                : d.attributes || !x
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
        }),
        (oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                r = 0;
            if (
                ((u = !d.detectDuplicates),
                (l = !d.sortStable && e.slice(0)),
                e.sort(A),
                u)
            ) {
                for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (l = null), e;
        }),
        (o = oe.getText =
            function (e) {
                var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += o(t);
                return n;
            }),
        ((b = oe.selectors =
            {
                cacheLength: 50,
                createPseudo: ae,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(Z, ee)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                Z,
                                ee
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || oe.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    $.test(n) &&
                                    (t = p(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = h[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + P + ")" + e + "(" + P + "|$)"
                            )) &&
                                h(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            (void 0 !== e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, i, r) {
                        return function (e) {
                            var t = oe.attr(e, n);
                            return null == t
                                ? "!=" === i
                                : !i ||
                                      ((t += ""),
                                      "=" === i
                                          ? t === r
                                          : "!=" === i
                                          ? t !== r
                                          : "^=" === i
                                          ? r && 0 === t.indexOf(r)
                                          : "*=" === i
                                          ? r && -1 < t.indexOf(r)
                                          : "$=" === i
                                          ? r && t.slice(-r.length) === r
                                          : "~=" === i
                                          ? -1 <
                                            (
                                                " " +
                                                t.replace(M, " ") +
                                                " "
                                            ).indexOf(r)
                                          : "|=" === i &&
                                            (t === r ||
                                                t.slice(0, r.length + 1) ===
                                                    r + "-"));
                        };
                    },
                    CHILD: function (p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === e;
                        return 1 === g && 0 === m
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var i,
                                      r,
                                      o,
                                      s,
                                      a,
                                      l,
                                      u =
                                          v !== y
                                              ? "nextSibling"
                                              : "previousSibling",
                                      c = e.parentNode,
                                      f = _ && e.nodeName.toLowerCase(),
                                      h = !n && !_,
                                      d = !1;
                                  if (c) {
                                      if (v) {
                                          for (; u; ) {
                                              for (s = e; (s = s[u]); )
                                                  if (
                                                      _
                                                          ? s.nodeName.toLowerCase() ===
                                                            f
                                                          : 1 === s.nodeType
                                                  )
                                                      return !1;
                                              l = u =
                                                  "only" === p &&
                                                  !l &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((l = [
                                              y ? c.firstChild : c.lastChild,
                                          ]),
                                          y && h)
                                      ) {
                                          for (
                                              d =
                                                  (a =
                                                      (i =
                                                          (r =
                                                              (o =
                                                                  (s = c)[C] ||
                                                                  (s[C] = {}))[
                                                                  s.uniqueID
                                                              ] ||
                                                              (o[s.uniqueID] =
                                                                  {}))[p] ||
                                                          [])[0] === S &&
                                                      i[1]) && i[2],
                                                  s = a && c.childNodes[a];
                                              (s =
                                                  (++a && s && s[u]) ||
                                                  (d = a = 0) ||
                                                  l.pop());

                                          )
                                              if (
                                                  1 === s.nodeType &&
                                                  ++d &&
                                                  s === e
                                              ) {
                                                  r[p] = [S, a, d];
                                                  break;
                                              }
                                      } else if (
                                          (h &&
                                              (d = a =
                                                  (i =
                                                      (r =
                                                          (o =
                                                              (s = e)[C] ||
                                                              (s[C] = {}))[
                                                              s.uniqueID
                                                          ] ||
                                                          (o[s.uniqueID] = {}))[
                                                          p
                                                      ] || [])[0] === S &&
                                                  i[1]),
                                          !1 === d)
                                      )
                                          for (
                                              ;
                                              (s =
                                                  (++a && s && s[u]) ||
                                                  (d = a = 0) ||
                                                  l.pop()) &&
                                              ((_
                                                  ? s.nodeName.toLowerCase() !==
                                                    f
                                                  : 1 !== s.nodeType) ||
                                                  !++d ||
                                                  (h &&
                                                      ((r =
                                                          (o =
                                                              s[C] ||
                                                              (s[C] = {}))[
                                                              s.uniqueID
                                                          ] ||
                                                          (o[s.uniqueID] = {}))[
                                                          p
                                                      ] = [S, d]),
                                                  s !== e));

                                          );
                                      return (
                                          (d -= m) === g ||
                                          (d % g == 0 && 0 <= d / g)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            s =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                oe.error("unsupported pseudo: " + e);
                        return s[C]
                            ? s(o)
                            : 1 < s.length
                            ? ((t = [e, e, "", o]),
                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? ae(function (e, t) {
                                        for (
                                            var n, i = s(e, o), r = i.length;
                                            r--;

                                        )
                                            e[(n = j(e, i[r]))] = !(t[n] =
                                                i[r]);
                                    })
                                  : function (e) {
                                        return s(e, 0, t);
                                    })
                            : s;
                    },
                },
                pseudos: {
                    not: ae(function (e) {
                        var i = [],
                            r = [],
                            a = f(e.replace(W, "$1"));
                        return a[C]
                            ? ae(function (e, t, n, i) {
                                  for (
                                      var r,
                                          o = a(e, null, i, []),
                                          s = e.length;
                                      s--;

                                  )
                                      (r = o[s]) && (e[s] = !(t[s] = r));
                              })
                            : function (e, t, n) {
                                  return (
                                      (i[0] = e),
                                      a(i, null, n, r),
                                      (i[0] = null),
                                      !r.pop()
                                  );
                              };
                    }),
                    has: ae(function (t) {
                        return function (e) {
                            return 0 < oe(t, e).length;
                        };
                    }),
                    contains: ae(function (t) {
                        return (
                            (t = t.replace(Z, ee)),
                            function (e) {
                                return (
                                    -1 <
                                    (
                                        e.textContent ||
                                        e.innerText ||
                                        o(e)
                                    ).indexOf(t)
                                );
                            }
                        );
                    }),
                    lang: ae(function (n) {
                        return (
                            Q.test(n || "") ||
                                oe.error("unsupported lang: " + n),
                            (n = n.replace(Z, ee).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if (
                                        (t = x
                                            ? e.lang
                                            : e.getAttribute("xml:lang") ||
                                              e.getAttribute("lang"))
                                    )
                                        return (
                                            (t = t.toLowerCase()) === n ||
                                            0 === t.indexOf(n + "-")
                                        );
                                } while (
                                    (e = e.parentNode) &&
                                    1 === e.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === s;
                    },
                    focus: function (e) {
                        return (
                            e === T.activeElement &&
                            (!T.hasFocus || T.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return z.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: pe(function () {
                        return [0];
                    }),
                    last: pe(function (e, t) {
                        return [t - 1];
                    }),
                    eq: pe(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: pe(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: pe(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: pe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                        return e;
                    }),
                    gt: pe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                        return e;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = fe(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function ye(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                h = i++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[l]); )
                          if (1 === e.nodeType || f) return a(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var i,
                          r,
                          o,
                          s = [S, h];
                      if (n) {
                          for (; (e = e[l]); )
                              if ((1 === e.nodeType || f) && a(e, t, n))
                                  return !0;
                      } else
                          for (; (e = e[l]); )
                              if (1 === e.nodeType || f)
                                  if (
                                      ((r =
                                          (o = e[C] || (e[C] = {}))[
                                              e.uniqueID
                                          ] || (o[e.uniqueID] = {})),
                                      u && u === e.nodeName.toLowerCase())
                                  )
                                      e = e[l] || e;
                                  else {
                                      if (
                                          (i = r[c]) &&
                                          i[0] === S &&
                                          i[1] === h
                                      )
                                          return (s[2] = i[2]);
                                      if (((r[c] = s)[2] = a(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function _e(r) {
            return 1 < r.length
                ? function (e, t, n) {
                      for (var i = r.length; i--; )
                          if (!r[i](e, t, n)) return !1;
                      return !0;
                  }
                : r[0];
        }
        function be(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (o = e[a]) &&
                    ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
            return s;
        }
        function we(d, p, g, m, v, e) {
            return (
                m && !m[C] && (m = we(m)),
                v && !v[C] && (v = we(v, e)),
                ae(function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = [],
                        l = [],
                        u = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++)
                                    oe(e, t[i], n);
                                return n;
                            })(p || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && p) ? c : be(c, a, d, n, i),
                        h = g ? (v || (e ? d : u || m) ? [] : t) : f;
                    if ((g && g(f, h, n, i), m))
                        for (r = be(h, l), m(r, [], n, i), o = r.length; o--; )
                            (s = r[o]) && (h[l[o]] = !(f[l[o]] = s));
                    if (e) {
                        if (v || d) {
                            if (v) {
                                for (r = [], o = h.length; o--; )
                                    (s = h[o]) && r.push((f[o] = s));
                                v(null, (h = []), r, i);
                            }
                            for (o = h.length; o--; )
                                (s = h[o]) &&
                                    -1 < (r = v ? j(e, s) : a[o]) &&
                                    (e[r] = !(t[r] = s));
                        }
                    } else (h = be(h === t ? h.splice(u, h.length) : h)), v ? v(null, t, h, i) : O.apply(t, h);
                })
            );
        }
        function Ee(e) {
            for (
                var r,
                    t,
                    n,
                    i = e.length,
                    o = b.relative[e[0].type],
                    s = o || b.relative[" "],
                    a = o ? 1 : 0,
                    l = ye(
                        function (e) {
                            return e === r;
                        },
                        s,
                        !0
                    ),
                    u = ye(
                        function (e) {
                            return -1 < j(r, e);
                        },
                        s,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var i =
                                (!o && (n || t !== w)) ||
                                ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                            return (r = null), i;
                        },
                    ];
                a < i;
                a++
            )
                if ((t = b.relative[e[a].type])) c = [ye(_e(c), t)];
                else {
                    if (
                        (t = b.filter[e[a].type].apply(null, e[a].matches))[C]
                    ) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++);
                        return we(
                            1 < a && _e(c),
                            1 < a &&
                                ve(
                                    e
                                        .slice(0, a - 1)
                                        .concat({
                                            value:
                                                " " === e[a - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace(W, "$1"),
                            t,
                            a < n && Ee(e.slice(a, n)),
                            n < i && Ee((e = e.slice(n))),
                            n < i && ve(e)
                        );
                    }
                    c.push(t);
                }
            return _e(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (p = oe.tokenize =
                function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u = _[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, a = [], l = b.preFilter; s; ) {
                        for (o in ((n && !(i = B.exec(s))) ||
                            (i && (s = s.slice(i[0].length) || s),
                            a.push((r = []))),
                        (n = !1),
                        (i = U.exec(s)) &&
                            ((n = i.shift()),
                            r.push({ value: n, type: i[0].replace(W, " ") }),
                            (s = s.slice(n.length))),
                        b.filter))
                            !(i = V[o].exec(s)) ||
                                (l[o] && !(i = l[o](i))) ||
                                ((n = i.shift()),
                                r.push({ value: n, type: o, matches: i }),
                                (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? s.length : s ? oe.error(e) : _(e, a).slice(0);
                }),
            (f = oe.compile =
                function (e, t) {
                    var n,
                        m,
                        v,
                        y,
                        _,
                        i,
                        r = [],
                        o = [],
                        s = D[e + " "];
                    if (!s) {
                        for (t || (t = p(e)), n = t.length; n--; )
                            (s = Ee(t[n]))[C] ? r.push(s) : o.push(s);
                        (s = D(
                            e,
                            ((m = o),
                            (y = 0 < (v = r).length),
                            (_ = 0 < m.length),
                            (i = function (e, t, n, i, r) {
                                var o,
                                    s,
                                    a,
                                    l = 0,
                                    u = "0",
                                    c = e && [],
                                    f = [],
                                    h = w,
                                    d = e || (_ && b.find.TAG("*", r)),
                                    p = (S +=
                                        null == h ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (
                                    r && (w = t === T || t || r);
                                    u !== g && null != (o = d[u]);
                                    u++
                                ) {
                                    if (_ && o) {
                                        for (
                                            s = 0,
                                                t ||
                                                    o.ownerDocument === T ||
                                                    (E(o), (n = !x));
                                            (a = m[s++]);

                                        )
                                            if (a(o, t || T, n)) {
                                                i.push(o);
                                                break;
                                            }
                                        r && (S = p);
                                    }
                                    y && ((o = !a && o) && l--, e && c.push(o));
                                }
                                if (((l += u), y && u !== l)) {
                                    for (s = 0; (a = v[s++]); ) a(c, f, t, n);
                                    if (e) {
                                        if (0 < l)
                                            for (; u--; )
                                                c[u] ||
                                                    f[u] ||
                                                    (f[u] = I.call(i));
                                        f = be(f);
                                    }
                                    O.apply(i, f),
                                        r &&
                                            !e &&
                                            0 < f.length &&
                                            1 < l + v.length &&
                                            oe.uniqueSort(i);
                                }
                                return r && ((S = p), (w = h)), c;
                            }),
                            y ? ae(i) : i)
                        )).selector = e;
                    }
                    return s;
                }),
            (g = oe.select =
                function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u = "function" == typeof e && e,
                        c = !i && p((e = u.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if (
                            2 < (o = c[0] = c[0].slice(0)).length &&
                            "ID" === (s = o[0]).type &&
                            9 === t.nodeType &&
                            x &&
                            b.relative[o[1].type]
                        ) {
                            if (
                                !(t = (b.find.ID(
                                    s.matches[0].replace(Z, ee),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            u && (t = t.parentNode),
                                (e = e.slice(o.shift().value.length));
                        }
                        for (
                            r = V.needsContext.test(e) ? 0 : o.length;
                            r-- && ((s = o[r]), !b.relative[(a = s.type)]);

                        )
                            if (
                                (l = b.find[a]) &&
                                (i = l(
                                    s.matches[0].replace(Z, ee),
                                    (J.test(o[0].type) && ge(t.parentNode)) || t
                                ))
                            ) {
                                if ((o.splice(r, 1), !(e = i.length && ve(o))))
                                    return O.apply(n, i), n;
                                break;
                            }
                    }
                    return (
                        (u || f(e, c))(
                            i,
                            t,
                            !x,
                            n,
                            !t || (J.test(e) && ge(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (d.sortStable = C.split("").sort(A).join("") === C),
            (d.detectDuplicates = !!u),
            E(),
            (d.sortDetached = le(function (e) {
                return (
                    1 & e.compareDocumentPosition(T.createElement("fieldset"))
                );
            })),
            le(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                ue("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (d.attributes &&
                le(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                ue("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            le(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ue(H, function (e, t, n) {
                    var i;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (i = e.getAttributeNode(t)) && i.specified
                            ? i.value
                            : null;
                }),
            oe
        );
    })(T);
    (C.find = b),
        (C.expr = b.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = b.uniqueSort),
        (C.text = b.getText),
        (C.isXMLDoc = b.isXML),
        (C.contains = b.contains),
        (C.escapeSelector = b.escape);
    var w = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && C(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        E = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        S = C.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        N = /^.[^:#\[\.,]*$/;
    function I(e, n, i) {
        return C.isFunction(n)
            ? C.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? C.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? C.grep(e, function (e) {
                  return -1 < r.call(n, e) !== i;
              })
            : N.test(n)
            ? C.filter(n, e, i)
            : ((n = C.filter(n, e)),
              C.grep(e, function (e) {
                  return -1 < r.call(n, e) !== i && 1 === e.nodeType;
              }));
    }
    (C.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : C.find.matches(
                      e,
                      C.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        C.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        C(e).filter(function () {
                            for (t = 0; t < i; t++)
                                if (C.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                    C.find(e, r[t], n);
                return 1 < i ? C.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(I(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(I(this, e || [], !0));
            },
            is: function (e) {
                return !!I(
                    this,
                    "string" == typeof e && S.test(e) ? C(e) : e || [],
                    !1
                ).length;
            },
        });
    var k,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((C.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || k), "string" != typeof e))
            return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : C.isFunction(e)
                ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(C)
                : C.makeArray(e, this);
        if (
            !(i =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                    ? [null, e, null]
                    : O.exec(e)) ||
            (!i[1] && t)
        )
            return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
        if (i[1]) {
            if (
                ((t = t instanceof C ? t[0] : t),
                C.merge(
                    this,
                    C.parseHTML(
                        i[1],
                        t && t.nodeType ? t.ownerDocument || t : x,
                        !0
                    )
                ),
                A.test(i[1]) && C.isPlainObject(t))
            )
                for (i in t)
                    C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (
            (r = x.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
        );
    }).prototype = C.fn),
        (k = C(x));
    var L = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };
    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    C.fn.extend({
        has: function (e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && C(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (s
                                ? -1 < s.index(n)
                                : 1 === n.nodeType &&
                                  C.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? r.call(C(e), this[0])
                    : r.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        C.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return w(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return w(e, "parentNode", n);
                },
                next: function (e) {
                    return H(e, "nextSibling");
                },
                prev: function (e) {
                    return H(e, "previousSibling");
                },
                nextAll: function (e) {
                    return w(e, "nextSibling");
                },
                prevAll: function (e) {
                    return w(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return w(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return w(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return E(e.firstChild);
                },
                contents: function (e) {
                    return D(e, "iframe")
                        ? e.contentDocument
                        : (D(e, "template") && (e = e.content || e),
                          C.merge([], e.childNodes));
                },
            },
            function (i, r) {
                C.fn[i] = function (e, t) {
                    var n = C.map(this, r, e);
                    return (
                        "Until" !== i.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = C.filter(t, n)),
                        1 < this.length &&
                            (j[i] || C.uniqueSort(n), L.test(i) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function F(e) {
        return e;
    }
    function q(e) {
        throw e;
    }
    function R(e, t, n, i) {
        var r;
        try {
            e && C.isFunction((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && C.isFunction((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (C.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  C.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : C.extend({}, i);
        var r,
            t,
            o,
            s,
            a = [],
            l = [],
            u = -1,
            c = function () {
                for (s = s || i.once, o = r = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length; )
                        !1 === a[u].apply(t[0], t[1]) &&
                            i.stopOnFalse &&
                            ((u = a.length), (t = !1));
                i.memory || (t = !1), (r = !1), s && (a = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        a &&
                            (t && !r && ((u = a.length - 1), l.push(t)),
                            (function n(e) {
                                C.each(e, function (e, t) {
                                    C.isFunction(t)
                                        ? (i.unique && f.has(t)) || a.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== C.type(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !r && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        C.each(arguments, function (e, t) {
                            for (var n; -1 < (n = C.inArray(t, a, n)); )
                                a.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < C.inArray(e, a) : 0 < a.length;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (s = l = []), (a = t = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (s = l = []), t || r || (a = t = ""), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (e, t) {
                    return (
                        s ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            l.push(t),
                            r || c()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        C.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            C.Callbacks("memory"),
                            C.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            C.Callbacks("once memory"),
                            C.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            C.Callbacks("once memory"),
                            C.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var r = arguments;
                            return C.Deferred(function (i) {
                                C.each(o, function (e, t) {
                                    var n = C.isFunction(r[t[4]]) && r[t[4]];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(i.notify)
                                                  .done(i.resolve)
                                                  .fail(i.reject)
                                            : i[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function u(r, o, s, a) {
                                return function () {
                                    var n = this,
                                        i = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(r < l)) {
                                                if (
                                                    (e = s.apply(n, i)) ===
                                                    o.promise()
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (t =
                                                    e &&
                                                    ("object" == typeof e ||
                                                        "function" ==
                                                            typeof e) &&
                                                    e.then),
                                                    C.isFunction(t)
                                                        ? a
                                                            ? t.call(
                                                                  e,
                                                                  u(l, o, F, a),
                                                                  u(l, o, q, a)
                                                              )
                                                            : (l++,
                                                              t.call(
                                                                  e,
                                                                  u(l, o, F, a),
                                                                  u(l, o, q, a),
                                                                  u(
                                                                      l,
                                                                      o,
                                                                      F,
                                                                      o.notifyWith
                                                                  )
                                                              ))
                                                        : (s !== F &&
                                                              ((n = void 0),
                                                              (i = [e])),
                                                          (a || o.resolveWith)(
                                                              n,
                                                              i
                                                          ));
                                            }
                                        },
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      C.Deferred
                                                          .exceptionHook &&
                                                          C.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          l <= r + 1 &&
                                                              (s !== q &&
                                                                  ((n = void 0),
                                                                  (i = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  i
                                                              ));
                                                  }
                                              };
                                    r
                                        ? t()
                                        : (C.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  C.Deferred.getStackHook()),
                                          T.setTimeout(t));
                                };
                            }
                            return C.Deferred(function (e) {
                                o[0][3].add(
                                    u(
                                        0,
                                        e,
                                        C.isFunction(i) ? i : F,
                                        e.notifyWith
                                    )
                                ),
                                    o[1][3].add(
                                        u(0, e, C.isFunction(t) ? t : F)
                                    ),
                                    o[2][3].add(
                                        u(0, e, C.isFunction(n) ? n : q)
                                    );
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, s) : s;
                        },
                    },
                    a = {};
                return (
                    C.each(o, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (s[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        r = i;
                                    },
                                    o[3 - e][2].disable,
                                    o[0][2].lock
                                ),
                            n.add(t[3].fire),
                            (a[t[0]] = function () {
                                return (
                                    a[t[0] + "With"](
                                        this === a ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    i = Array(t),
                    r = a.call(arguments),
                    o = C.Deferred(),
                    s = function (t) {
                        return function (e) {
                            (i[t] = this),
                                (r[t] =
                                    1 < arguments.length
                                        ? a.call(arguments)
                                        : e),
                                --n || o.resolveWith(i, r);
                        };
                    };
                if (
                    n <= 1 &&
                    (R(e, o.done(s(t)).resolve, o.reject, !n),
                    "pending" === o.state() || C.isFunction(r[t] && r[t].then))
                )
                    return o.then();
                for (; t--; ) R(r[t], s(t), o.reject);
                return o.promise();
            },
        });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (C.Deferred.exceptionHook = function (e, t) {
        T.console &&
            T.console.warn &&
            e &&
            M.test(e.name) &&
            T.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
        (C.readyException = function (e) {
            T.setTimeout(function () {
                throw e;
            });
        });
    var W = C.Deferred();
    function B() {
        x.removeEventListener("DOMContentLoaded", B),
            T.removeEventListener("load", B),
            C.ready();
    }
    (C.fn.ready = function (e) {
        return (
            W.then(e).catch(function (e) {
                C.readyException(e);
            }),
            this
        );
    }),
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                    ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
                    W.resolveWith(x, [C]);
            },
        }),
        (C.ready.then = W.then),
        "complete" === x.readyState ||
        ("loading" !== x.readyState && !x.documentElement.doScroll)
            ? T.setTimeout(C.ready)
            : (x.addEventListener("DOMContentLoaded", B),
              T.addEventListener("load", B));
    var U = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === C.type(n))
                for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
            else if (
                void 0 !== i &&
                ((r = !0),
                C.isFunction(i) || (s = !0),
                u &&
                    (t = s
                        ? (t.call(e, i), null)
                        : ((u = t),
                          function (e, t, n) {
                              return u.call(C(e), n);
                          })),
                t)
            )
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    function $() {
        this.expando = C.expando + $.uid++;
    }
    ($.uid = 1),
        ($.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        K(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[C.camelCase(t)] = n;
                else for (i in t) r[C.camelCase(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][C.camelCase(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(C.camelCase)
                            : (t = C.camelCase(t)) in i
                            ? [t]
                            : t.match(P) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || C.isEmptyObject(i)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
            },
        });
    var Q = new $(),
        V = new $(),
        z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;
    function X(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(Y, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === (r = n) ||
                        ("false" !== r &&
                            ("null" === r
                                ? null
                                : r === +r + ""
                                ? +r
                                : z.test(r)
                                ? JSON.parse(r)
                                : r));
                } catch (e) {}
                V.set(e, t, n);
            } else n = void 0;
        return n;
    }
    C.extend({
        hasData: function (e) {
            return V.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
            return V.access(e, t, n);
        },
        removeData: function (e, t) {
            V.remove(e, t);
        },
        _data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
            Q.remove(e, t);
        },
    }),
        C.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              V.set(this, n);
                          })
                        : U(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e) {
                                      if (void 0 !== (t = V.get(o, n)))
                                          return t;
                                      if (void 0 !== (t = X(o, n))) return t;
                                  } else
                                      this.each(function () {
                                          V.set(this, n, e);
                                      });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (
                    this.length &&
                    ((r = V.get(o)),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
                ) {
                    for (t = s.length; t--; )
                        s[t] &&
                            0 === (i = s[t].name).indexOf("data-") &&
                            ((i = C.camelCase(i.slice(5))), X(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    V.remove(this, e);
                });
            },
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (i = Q.get(e, t)),
                        n &&
                            (!i || Array.isArray(n)
                                ? (i = Q.access(e, t, C.makeArray(n)))
                                : i.push(n)),
                        i || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                C.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Q.get(e, n) ||
                    Q.access(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                            Q.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? C.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = C.queue(this, t, n);
                              C._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      C.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    r = C.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    s--;

                )
                    (n = Q.get(o[s], e + "queueHooks")) &&
                        n.empty &&
                        (i++, n.empty.add(a));
                return a(), r.promise(t);
            },
        });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"],
        ee = function (e, t) {
            return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                    C.contains(e.ownerDocument, e) &&
                    "none" === C.css(e, "display"))
            );
        },
        te = function (e, t, n, i) {
            var r,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
            return r;
        };
    function ne(e, t, n, i) {
        var r,
            o = 1,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return C.css(e, t, "");
                  },
            l = a(),
            u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
            c = (C.cssNumber[t] || ("px" !== u && +l)) && J.exec(C.css(e, t));
        if (c && c[3] !== u)
            for (
                u = u || c[3], n = n || [], c = +l || 1;
                (c /= o = o || ".5"),
                    C.style(e, t, c + u),
                    o !== (o = a() / l) && 1 !== o && --s;

            );
        return (
            n &&
                ((c = +c || +l || 0),
                (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = u), (i.start = c), (i.end = r))),
            r
        );
    }
    var ie = {};
    function re(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
            (i = e[o]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n &&
                          ((r[o] = Q.get(i, "display") || null),
                          r[o] || (i.style.display = "")),
                      "" === i.style.display &&
                          ee(i) &&
                          (r[o] =
                              ((f = u = l = void 0),
                              (u = (a = i).ownerDocument),
                              (c = a.nodeName),
                              (f = ie[c]) ||
                                  ((l = u.body.appendChild(u.createElement(c))),
                                  (f = C.css(l, "display")),
                                  l.parentNode.removeChild(l),
                                  "none" === f && (f = "block"),
                                  (ie[c] = f)))))
                    : "none" !== n &&
                      ((r[o] = "none"), Q.set(i, "display", n)));
        var a, l, u, c, f;
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    C.fn.extend({
        show: function () {
            return re(this, !0);
        },
        hide: function () {
            return re(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ee(this) ? C(this).show() : C(this).hide();
                  });
        },
    });
    var oe = /^(?:checkbox|radio)$/i,
        se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function ue(e, t) {
        var n;
        return (
            (n =
                void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
            void 0 === t || (t && D(e, t)) ? C.merge([e], n) : n
        );
    }
    function ce(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (le.optgroup = le.option),
        (le.tbody = le.tfoot = le.colgroup = le.caption = le.thead),
        (le.th = le.td);
    var fe,
        he,
        de = /<|&#?\w+;/;
    function pe(e, t, n, i, r) {
        for (
            var o,
                s,
                a,
                l,
                u,
                c,
                f = t.createDocumentFragment(),
                h = [],
                d = 0,
                p = e.length;
            d < p;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === C.type(o)) C.merge(h, o.nodeType ? [o] : o);
                else if (de.test(o)) {
                    for (
                        s = s || f.appendChild(t.createElement("div")),
                            a = (se.exec(o) || ["", ""])[1].toLowerCase(),
                            l = le[a] || le._default,
                            s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                            c = l[0];
                        c--;

                    )
                        s = s.lastChild;
                    C.merge(h, s.childNodes),
                        ((s = f.firstChild).textContent = "");
                } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = h[d++]); )
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (
                ((u = C.contains(o.ownerDocument, o)),
                (s = ue(f.appendChild(o), "script")),
                u && ce(s),
                n)
            )
                for (c = 0; (o = s[c++]); ) ae.test(o.type || "") && n.push(o);
        return f;
    }
    (fe = x.createDocumentFragment().appendChild(x.createElement("div"))),
        (he = x.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue);
    var ge = x.documentElement,
        me = /^key/,
        ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ye = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0;
    }
    function be() {
        return !1;
    }
    function we() {
        try {
            return x.activeElement;
        } catch (e) {}
    }
    function Ee(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                Ee(e, a, n, i, t[a], o);
            return e;
        }
        if (
            (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                      ? ((r = i), (i = void 0))
                      : ((r = i), (i = n), (n = void 0))),
            !1 === r)
        )
            r = be;
        else if (!r) return e;
        return (
            1 === o &&
                ((s = r),
                ((r = function (e) {
                    return C().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = C.guid++))),
            e.each(function () {
                C.event.add(this, t, r, i, n);
            })
        );
    }
    (C.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                f,
                h,
                d,
                p,
                g,
                m = Q.get(t);
            if (m)
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && C.find.matchesSelector(ge, r),
                        n.guid || (n.guid = C.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (s = m.handle) ||
                            (s = m.handle =
                                function (e) {
                                    return void 0 !== C &&
                                        C.event.triggered !== e.type
                                        ? C.event.dispatch.apply(t, arguments)
                                        : void 0;
                                }),
                        u = (e = (e || "").match(P) || [""]).length;
                    u--;

                )
                    (d = g = (a = ye.exec(e[u]) || [])[1]),
                        (p = (a[2] || "").split(".").sort()),
                        d &&
                            ((f = C.event.special[d] || {}),
                            (d = (r ? f.delegateType : f.bindType) || d),
                            (f = C.event.special[d] || {}),
                            (c = C.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext:
                                        r && C.expr.match.needsContext.test(r),
                                    namespace: p.join("."),
                                },
                                o
                            )),
                            (h = l[d]) ||
                                (((h = l[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, i, p, s)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, s))),
                            f.add &&
                                (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                            (C.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                f,
                h,
                d,
                p,
                g,
                m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--; )
                    if (
                        ((d = g = (a = ye.exec(t[u]) || [])[1]),
                        (p = (a[2] || "").split(".").sort()),
                        d)
                    ) {
                        for (
                            f = C.event.special[d] || {},
                                h =
                                    l[
                                        (d =
                                            (i ? f.delegateType : f.bindType) ||
                                            d)
                                    ] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            p.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                s = o = h.length;
                            o--;

                        )
                            (c = h[o]),
                                (!r && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (a && !a.test(c.namespace)) ||
                                    (i &&
                                        i !== c.selector &&
                                        ("**" !== i || !c.selector)) ||
                                    (h.splice(o, 1),
                                    c.selector && h.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        s &&
                            !h.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, p, m.handle)) ||
                                C.removeEvent(e, d, m.handle),
                            delete l[d]);
                    } else for (d in l) C.event.remove(e, d + t[u], n, i, !0);
                C.isEmptyObject(l) && Q.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a = C.event.fix(e),
                l = new Array(arguments.length),
                u = (Q.get(this, "events") || {})[a.type] || [],
                c = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (
                ((a.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, a))
            ) {
                for (
                    s = C.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                            ((a.handleObj = o),
                            (a.data = o.data),
                            void 0 !==
                                (i = (
                                    (C.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(r.elem, l)) &&
                                !1 === (a.result = i) &&
                                (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (
                        1 === u.nodeType &&
                        ("click" !== e.type || !0 !== u.disabled)
                    ) {
                        for (o = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(r = (i = t[n]).selector + " ")] &&
                                (s[r] = i.needsContext
                                    ? -1 < C(r, this).index(u)
                                    : C.find(r, this, null, [u]).length),
                                s[r] && o.push(i);
                        o.length && a.push({ elem: u, handlers: o });
                    }
            return (
                (u = this),
                l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: C.isFunction(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[C.expando] ? e : new C.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== we() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === we() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        D(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function (e) {
                    return D(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
            return this instanceof C.Event
                ? (e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            (void 0 === e.defaultPrevented &&
                                !1 === e.returnValue)
                                ? _e
                                : be),
                        (this.target =
                            e.target && 3 === e.target.nodeType
                                ? e.target.parentNode
                                : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                      : (this.type = e),
                  t && C.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || C.now()),
                  void (this[C.expando] = !0))
                : new C.Event(e, t);
        }),
        (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: be,
            isPropagationStopped: be,
            isImmediatePropagationStopped: be,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = _e),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = _e),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = _e),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        C.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && me.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && ve.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                },
            },
            C.event.addProp
        ),
        C.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, r) {
                C.event.special[e] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (
                            (n && (n === this || C.contains(this, n))) ||
                                ((e.type = i.origType),
                                (t = i.handler.apply(this, arguments)),
                                (e.type = r)),
                            t
                        );
                    },
                };
            }
        ),
        C.fn.extend({
            on: function (e, t, n, i) {
                return Ee(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Ee(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        C(e.delegateTarget).off(
                            i.namespace
                                ? i.origType + "." + i.namespace
                                : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) ||
                            ((n = t), (t = void 0)),
                        !1 === n && (n = be),
                        this.each(function () {
                            C.event.remove(this, e, n, t);
                        })
                    );
                for (r in e) this.off(r, t, e[r]);
                return this;
            },
        });
    var Te =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        xe = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^true\/(.*)/,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ae(e, t) {
        return (
            (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(">tbody", e)[0]) ||
            e
        );
    }
    function Ne(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Ie(e) {
        var t = Se.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function ke(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (
                Q.hasData(e) &&
                ((o = Q.access(e)), (s = Q.set(t, o)), (u = o.events))
            )
                for (r in (delete s.handle, (s.events = {}), u))
                    for (n = 0, i = u[r].length; n < i; n++)
                        C.event.add(t, r, u[r][n]);
            V.hasData(e) &&
                ((a = V.access(e)), (l = C.extend({}, a)), V.set(t, l));
        }
    }
    function Oe(n, i, r, o) {
        i = g.apply([], i);
        var e,
            t,
            s,
            a,
            l,
            u,
            c = 0,
            f = n.length,
            h = f - 1,
            d = i[0],
            p = C.isFunction(d);
        if (p || (1 < f && "string" == typeof d && !m.checkClone && Ce.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                p && (i[0] = d.call(this, e, t.html())), Oe(t, i, r, o);
            });
        if (
            f &&
            ((t = (e = pe(i, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (a = (s = C.map(ue(e, "script"), Ne)).length; c < f; c++)
                (l = e),
                    c !== h &&
                        ((l = C.clone(l, !0, !0)),
                        a && C.merge(s, ue(l, "script"))),
                    r.call(n[c], l, c);
            if (a)
                for (
                    u = s[s.length - 1].ownerDocument, C.map(s, Ie), c = 0;
                    c < a;
                    c++
                )
                    (l = s[c]),
                        ae.test(l.type || "") &&
                            !Q.access(l, "globalEval") &&
                            C.contains(u, l) &&
                            (l.src
                                ? C._evalUrl && C._evalUrl(l.src)
                                : v(l.textContent.replace(De, ""), u));
        }
        return n;
    }
    function Le(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || C.cleanData(ue(i)),
                i.parentNode &&
                    (n && C.contains(i.ownerDocument, i) && ce(ue(i, "script")),
                    i.parentNode.removeChild(i));
        return e;
    }
    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(Te, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                u,
                c = e.cloneNode(!0),
                f = C.contains(e.ownerDocument, e);
            if (
                !(
                    m.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    C.isXMLDoc(e)
                )
            )
                for (s = ue(c), i = 0, r = (o = ue(e)).length; i < r; i++)
                    (a = o[i]),
                        (l = s[i]),
                        void 0,
                        "input" === (u = l.nodeName.toLowerCase()) &&
                        oe.test(a.type)
                            ? (l.checked = a.checked)
                            : ("input" !== u && "textarea" !== u) ||
                              (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ue(e), s = s || ue(c), i = 0, r = o.length;
                        i < r;
                        i++
                    )
                        ke(o[i], s[i]);
                else ke(e, c);
            return (
                0 < (s = ue(c, "script")).length &&
                    ce(s, !f && ue(e, "script")),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, i, r = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (K(n)) {
                    if ((t = n[Q.expando])) {
                        if (t.events)
                            for (i in t.events)
                                r[i]
                                    ? C.event.remove(n, i)
                                    : C.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0;
                    }
                    n[V.expando] && (n[V.expando] = void 0);
                }
        },
    }),
        C.fn.extend({
            detach: function (e) {
                return Le(this, e, !0);
            },
            remove: function (e) {
                return Le(this, e);
            },
            text: function (e) {
                return U(
                    this,
                    function (e) {
                        return void 0 === e
                            ? C.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Oe(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Ae(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Oe(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Ae(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (C.cleanData(ue(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return C.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return U(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !xe.test(e) &&
                            !le[(se.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (C.cleanData(ue(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Oe(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        C.inArray(this, n) < 0 &&
                            (C.cleanData(ue(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        C.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, s) {
                C.fn[e] = function (e) {
                    for (
                        var t, n = [], i = C(e), r = i.length - 1, o = 0;
                        o <= r;
                        o++
                    )
                        (t = o === r ? this : this.clone(!0)),
                            C(i[o])[s](t),
                            l.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var je = /^margin/,
        He = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        Pe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = T), t.getComputedStyle(e);
        };
    function Fe(e, t, n) {
        var i,
            r,
            o,
            s,
            a = e.style;
        return (
            (n = n || Pe(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                    C.contains(e.ownerDocument, e) ||
                    (s = C.style(e, t)),
                !m.pixelMarginRight() &&
                    He.test(s) &&
                    je.test(t) &&
                    ((i = a.width),
                    (r = a.minWidth),
                    (o = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = i),
                    (a.minWidth = r),
                    (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
        );
    }
    function qe(e, t) {
        return {
            get: function () {
                return e()
                    ? void delete this.get
                    : (this.get = t).apply(this, arguments);
            },
        };
    }
    !(function () {
        function e() {
            if (s) {
                (s.style.cssText =
                    "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (s.innerHTML = ""),
                    ge.appendChild(o);
                var e = T.getComputedStyle(s);
                (t = "1%" !== e.top),
                    (r = "2px" === e.marginLeft),
                    (n = "4px" === e.width),
                    (s.style.marginRight = "50%"),
                    (i = "4px" === e.marginRight),
                    ge.removeChild(o),
                    (s = null);
            }
        }
        var t,
            n,
            i,
            r,
            o = x.createElement("div"),
            s = x.createElement("div");
        s.style &&
            ((s.style.backgroundClip = "content-box"),
            (s.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === s.style.backgroundClip),
            (o.style.cssText =
                "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            o.appendChild(s),
            C.extend(m, {
                pixelPosition: function () {
                    return e(), t;
                },
                boxSizingReliable: function () {
                    return e(), n;
                },
                pixelMarginRight: function () {
                    return e(), i;
                },
                reliableMarginLeft: function () {
                    return e(), r;
                },
            }));
    })();
    var Re = /^(none|table(?!-c[ea]).+)/,
        Me = /^--/,
        We = { position: "absolute", visibility: "hidden", display: "block" },
        Be = { letterSpacing: "0", fontWeight: "400" },
        Ue = ["Webkit", "Moz", "ms"],
        Ke = x.createElement("div").style;
    function $e(e) {
        var t = C.cssProps[e];
        return (
            t ||
                (t = C.cssProps[e] =
                    (function (e) {
                        if (e in Ke) return e;
                        for (
                            var t = e[0].toUpperCase() + e.slice(1),
                                n = Ue.length;
                            n--;

                        )
                            if ((e = Ue[n] + t) in Ke) return e;
                    })(e) || e),
            t
        );
    }
    function Qe(e, t, n) {
        var i = J.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Ve(e, t, n, i, r) {
        var o,
            s = 0;
        for (
            o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
            o < 4;
            o += 2
        )
            "margin" === n && (s += C.css(e, n + Z[o], !0, r)),
                i
                    ? ("content" === n &&
                          (s -= C.css(e, "padding" + Z[o], !0, r)),
                      "margin" !== n &&
                          (s -= C.css(e, "border" + Z[o] + "Width", !0, r)))
                    : ((s += C.css(e, "padding" + Z[o], !0, r)),
                      "padding" !== n &&
                          (s += C.css(e, "border" + Z[o] + "Width", !0, r)));
        return s;
    }
    function ze(e, t, n) {
        var i,
            r = Pe(e),
            o = Fe(e, t, r),
            s = "border-box" === C.css(e, "boxSizing", !1, r);
        return He.test(o)
            ? o
            : ((i = s && (m.boxSizingReliable() || o === e.style[t])),
              "auto" === o &&
                  (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
              (o = parseFloat(o) || 0) +
                  Ve(e, t, n || (s ? "border" : "content"), i, r) +
                  "px");
    }
    function Ye(e, t, n, i, r) {
        return new Ye.prototype.init(e, t, n, i, r);
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    s,
                    a = C.camelCase(t),
                    l = Me.test(t),
                    u = e.style;
                return (
                    l || (t = $e(a)),
                    (s = C.cssHooks[t] || C.cssHooks[a]),
                    void 0 === n
                        ? s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                            ? r
                            : u[t]
                        : ("string" === (o = typeof n) &&
                              (r = J.exec(n)) &&
                              r[1] &&
                              ((n = ne(e, t, r)), (o = "number")),
                          void (
                              null != n &&
                              n == n &&
                              ("number" === o &&
                                  (n +=
                                      (r && r[3]) ||
                                      (C.cssNumber[a] ? "" : "px")),
                              m.clearCloneStyle ||
                                  "" !== n ||
                                  0 !== t.indexOf("background") ||
                                  (u[t] = "inherit"),
                              (s &&
                                  "set" in s &&
                                  void 0 === (n = s.set(e, n, i))) ||
                                  (l ? u.setProperty(t, n) : (u[t] = n)))
                          ))
                );
            }
        },
        css: function (e, t, n, i) {
            var r,
                o,
                s,
                a = C.camelCase(t);
            return (
                Me.test(t) || (t = $e(a)),
                (s = C.cssHooks[t] || C.cssHooks[a]) &&
                    "get" in s &&
                    (r = s.get(e, !0, n)),
                void 0 === r && (r = Fe(e, t, i)),
                "normal" === r && t in Be && (r = Be[t]),
                "" === n || n
                    ? ((o = parseFloat(r)),
                      !0 === n || isFinite(o) ? o || 0 : r)
                    : r
            );
        },
    }),
        C.each(["height", "width"], function (e, s) {
            C.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t)
                        return !Re.test(C.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? ze(e, s, n)
                            : te(e, We, function () {
                                  return ze(e, s, n);
                              });
                },
                set: function (e, t, n) {
                    var i,
                        r = n && Pe(e),
                        o =
                            n &&
                            Ve(
                                e,
                                s,
                                n,
                                "border-box" === C.css(e, "boxSizing", !1, r),
                                r
                            );
                    return (
                        o &&
                            (i = J.exec(t)) &&
                            "px" !== (i[3] || "px") &&
                            ((e.style[s] = t), (t = C.css(e, s))),
                        Qe(0, t, o)
                    );
                },
            };
        }),
        (C.cssHooks.marginLeft = qe(m.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            te(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (C.cssHooks[r + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            i = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[r + Z[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                je.test(r) || (C.cssHooks[r + o].set = Qe);
        }),
        C.fn.extend({
            css: function (e, t) {
                return U(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Pe(e), r = t.length; s < r; s++)
                                o[t[s]] = C.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((C.Tween = Ye).prototype = {
            constructor: Ye,
            init: function (e, t, n, i, r, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = r || C.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = o || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ye.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : Ye.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ye.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              C.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = Ye.prototype),
        ((Ye.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    C.fx.step[e.prop]
                        ? C.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (null == e.elem.style[C.cssProps[e.prop]] &&
                              !C.cssHooks[e.prop])
                        ? (e.elem[e.prop] = e.now)
                        : C.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = Ye.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (C.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (C.fx = Ye.prototype.init),
        (C.fx.step = {});
    var Xe,
        Ge,
        Je,
        Ze,
        et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;
    function nt() {
        Ge &&
            (!1 === x.hidden && T.requestAnimationFrame
                ? T.requestAnimationFrame(nt)
                : T.setTimeout(nt, C.fx.interval),
            C.fx.tick());
    }
    function it() {
        return (
            T.setTimeout(function () {
                Xe = void 0;
            }),
            (Xe = C.now())
        );
    }
    function rt(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = Z[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function ot(e, t, n) {
        for (
            var i,
                r = (st.tweeners[t] || []).concat(st.tweeners["*"]),
                o = 0,
                s = r.length;
            o < s;
            o++
        )
            if ((i = r[o].call(n, t, e))) return i;
    }
    function st(o, e, t) {
        var n,
            s,
            i = 0,
            r = st.prefilters.length,
            a = C.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (
                    var e = Xe || it(),
                        t = Math.max(0, u.startTime + u.duration - e),
                        n = 1 - (t / u.duration || 0),
                        i = 0,
                        r = u.tweens.length;
                    i < r;
                    i++
                )
                    u.tweens[i].run(n);
                return (
                    a.notifyWith(o, [u, n, t]),
                    n < 1 && r
                        ? t
                        : (r || a.notifyWith(o, [u, 1, 0]),
                          a.resolveWith(o, [u]),
                          !1)
                );
            },
            u = a.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(
                    !0,
                    { specialEasing: {}, easing: C.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: Xe || it(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = C.Tween(
                        o,
                        u.opts,
                        e,
                        t,
                        u.opts.specialEasing[e] || u.opts.easing
                    );
                    return u.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return (
                        e
                            ? (a.notifyWith(o, [u, 1, 0]),
                              a.resolveWith(o, [u, e]))
                            : a.rejectWith(o, [u, e]),
                        this
                    );
                },
            }),
            c = u.props;
        for (
            (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (
                        ((r = t[(i = C.camelCase(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                        n !== i && ((e[i] = o), delete e[n]),
                        (s = C.cssHooks[i]) && ("expand" in s))
                    )
                        for (n in ((o = s.expand(o)), delete e[i], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(c, u.opts.specialEasing);
            i < r;
            i++
        )
            if ((n = st.prefilters[i].call(u, o, c, u.opts)))
                return (
                    C.isFunction(n.stop) &&
                        (C._queueHooks(u.elem, u.opts.queue).stop = C.proxy(
                            n.stop,
                            n
                        )),
                    n
                );
        return (
            C.map(c, ot, u),
            C.isFunction(u.opts.start) && u.opts.start.call(o, u),
            u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
            C.fx.timer(C.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
            u
        );
    }
    (C.Animation = C.extend(st, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ne(n.elem, e, J.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (
                var n,
                    i = 0,
                    r = (e = C.isFunction(e) ? ((t = e), ["*"]) : e.match(P))
                        .length;
                i < r;
                i++
            )
                (n = e[i]),
                    (st.tweeners[n] = st.tweeners[n] || []),
                    st.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    f = "width" in t || "height" in t,
                    h = this,
                    d = {},
                    p = e.style,
                    g = e.nodeType && ee(e),
                    m = Q.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (s = C._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    h.always(function () {
                        h.always(function () {
                            s.unqueued--,
                                C.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[i]), et.test(r))) {
                        if (
                            (delete t[i],
                            (o = o || "toggle" === r),
                            r === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0;
                        }
                        d[i] = (m && m[i]) || C.style(e, i);
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                    for (i in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (u = m && m.display) &&
                            (u = Q.get(e, "display")),
                        "none" === (c = C.css(e, "display")) &&
                            (u
                                ? (c = u)
                                : (re([e], !0),
                                  (u = e.style.display || u),
                                  (c = C.css(e, "display")),
                                  re([e]))),
                        ("inline" === c ||
                            ("inline-block" === c && null != u)) &&
                            "none" === C.css(e, "float") &&
                            (l ||
                                (h.done(function () {
                                    p.display = u;
                                }),
                                null == u &&
                                    ((c = p.display),
                                    (u = "none" === c ? "" : c))),
                            (p.display = "inline-block"))),
                    n.overflow &&
                        ((p.overflow = "hidden"),
                        h.always(function () {
                            (p.overflow = n.overflow[0]),
                                (p.overflowX = n.overflow[1]),
                                (p.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    d))
                        l ||
                            (m
                                ? "hidden" in m && (g = m.hidden)
                                : (m = Q.access(e, "fxshow", { display: u })),
                            o && (m.hidden = !g),
                            g && re([e], !0),
                            h.done(function () {
                                for (i in (g || re([e]),
                                Q.remove(e, "fxshow"),
                                d))
                                    C.style(e, i, d[i]);
                            })),
                            (l = ot(g ? m[i] : 0, i, h)),
                            i in m ||
                                ((m[i] = l.start),
                                g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e);
        },
    })),
        (C.speed = function (e, t, n) {
            var i =
                e && "object" == typeof e
                    ? C.extend({}, e)
                    : {
                          complete: n || (!n && t) || (C.isFunction(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !C.isFunction(t) && t),
                      };
            return (
                C.fx.off
                    ? (i.duration = 0)
                    : "number" != typeof i.duration &&
                      (i.duration in C.fx.speeds
                          ? (i.duration = C.fx.speeds[i.duration])
                          : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    C.isFunction(i.old) && i.old.call(this),
                        i.queue && C.dequeue(this, i.queue);
                }),
                i
            );
        }),
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(ee)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                var r = C.isEmptyObject(t),
                    o = C.speed(e, n, i),
                    s = function () {
                        var e = st(this, C.extend({}, t), o);
                        (r || Q.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (s.finish = s),
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
            },
            stop: function (r, e, o) {
                var s = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && !1 !== r && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = C.timers,
                            i = Q.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i)
                                i[t] && i[t].stop && tt.test(t) && s(i[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != r && n[t].queue !== r) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || C.dequeue(this, r);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = Q.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = C.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                C.queue(this, s, []),
                                i && i.stop && i.stop.call(this, !0),
                                e = r.length;
                            e--;

                        )
                            r[e].elem === this &&
                                r[e].queue === s &&
                                (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
            var r = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? r.apply(this, arguments)
                    : this.animate(rt(i, !0), e, t, n);
            };
        }),
        C.each(
            {
                slideDown: rt("show"),
                slideUp: rt("hide"),
                slideToggle: rt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, i) {
                C.fn[e] = function (e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
            var e,
                t = 0,
                n = C.timers;
            for (Xe = C.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), (Xe = void 0);
        }),
        (C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
            Ge || ((Ge = !0), nt());
        }),
        (C.fx.stop = function () {
            Ge = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (i, e) {
            return (
                (i = (C.fx && C.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = T.setTimeout(e, i);
                    t.stop = function () {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (Je = x.createElement("input")),
        (Ze = x.createElement("select").appendChild(x.createElement("option"))),
        (Je.type = "checkbox"),
        (m.checkOn = "" !== Je.value),
        (m.optSelected = Ze.selected),
        ((Je = x.createElement("input")).value = "t"),
        (Je.type = "radio"),
        (m.radioValue = "t" === Je.value);
    var at,
        lt = C.expr.attrHandle;
    C.fn.extend({
        attr: function (e, t) {
            return U(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e);
            });
        },
    }),
        C.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? C.prop(e, t, n)
                        : ((1 === o && C.isXMLDoc(e)) ||
                              (r =
                                  C.attrHooks[t.toLowerCase()] ||
                                  (C.expr.match.bool.test(t) ? at : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void C.removeAttr(e, t)
                                  : r &&
                                    "set" in r &&
                                    void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : r && "get" in r && null !== (i = r.get(e, t))
                              ? i
                              : null == (i = C.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    r = t && t.match(P);
                if (r && 1 === e.nodeType)
                    for (; (n = r[i++]); ) e.removeAttribute(n);
            },
        }),
        (at = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = lt[t] || C.find.attr;
            lt[t] = function (e, t, n) {
                var i,
                    r,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((r = lt[o]),
                        (lt[o] = i),
                        (i = null != s(e, t, n) ? o : null),
                        (lt[o] = r)),
                    i
                );
            };
        });
    var ut = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    function ft(e) {
        return (e.match(P) || []).join(" ");
    }
    function ht(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    C.fn.extend({
        prop: function (e, t) {
            return U(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e];
            });
        },
    }),
        C.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && C.isXMLDoc(e)) ||
                            ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                        void 0 !== n
                            ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                ? i
                                : (e[t] = n)
                            : r && "get" in r && null !== (i = r.get(e, t))
                            ? i
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : ut.test(e.nodeName) ||
                              (ct.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
            (C.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        C.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                C.propFix[this.toLowerCase()] = this;
            }
        ),
        C.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (C.isFunction(t))
                    return this.each(function (e) {
                        C(this).addClass(t.call(this, e, ht(this)));
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; (n = this[l++]); )
                        if (
                            ((r = ht(n)),
                            (i = 1 === n.nodeType && " " + ft(r) + " "))
                        ) {
                            for (s = 0; (o = e[s++]); )
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = ft(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (C.isFunction(t))
                    return this.each(function (e) {
                        C(this).removeClass(t.call(this, e, ht(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; (n = this[l++]); )
                        if (
                            ((r = ht(n)),
                            (i = 1 === n.nodeType && " " + ft(r) + " "))
                        ) {
                            for (s = 0; (o = e[s++]); )
                                for (; -1 < i.indexOf(" " + o + " "); )
                                    i = i.replace(" " + o + " ", " ");
                            r !== (a = ft(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (r, t) {
                var o = typeof r;
                return "boolean" == typeof t && "string" === o
                    ? t
                        ? this.addClass(r)
                        : this.removeClass(r)
                    : C.isFunction(r)
                    ? this.each(function (e) {
                          C(this).toggleClass(r.call(this, e, ht(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, i;
                          if ("string" === o)
                              for (
                                  t = 0, n = C(this), i = r.match(P) || [];
                                  (e = i[t++]);

                              )
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          else
                              (void 0 !== r && "boolean" !== o) ||
                                  ((e = ht(this)) &&
                                      Q.set(this, "__className__", e),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          e || !1 === r
                                              ? ""
                                              : Q.get(this, "__className__") ||
                                                    ""
                                      ));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                    if (
                        1 === n.nodeType &&
                        -1 < (" " + ft(ht(n)) + " ").indexOf(t)
                    )
                        return !0;
                return !1;
            },
        });
    var dt = /\r/g;
    C.fn.extend({
        val: function (n) {
            var i,
                e,
                r,
                t = this[0];
            return arguments.length
                ? ((r = C.isFunction(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = r ? n.call(this, e, C(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = C.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((i =
                              C.valHooks[this.type] ||
                              C.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in i &&
                              void 0 !== i.set(this, t, "value")) ||
                              (this.value = t));
                  }))
                : t
                ? (i =
                      C.valHooks[t.type] ||
                      C.valHooks[t.nodeName.toLowerCase()]) &&
                  "get" in i &&
                  void 0 !== (e = i.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(dt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : ft(C.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            r = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (
                                ((n = r[i]).selected || i === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !D(n.parentNode, "optgroup"))
                            ) {
                                if (((t = C(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (
                            var n,
                                i,
                                r = e.options,
                                o = C.makeArray(t),
                                s = r.length;
                            s--;

                        )
                            ((i = r[s]).selected =
                                -1 < C.inArray(C.valHooks.option.get(i), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < C.inArray(C(e).val(), t));
                },
            }),
                m.checkOn ||
                    (C.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function (e, t, n, i) {
            var r,
                o,
                s,
                a,
                l,
                u,
                c,
                f = [n || x],
                h = p.call(e, "type") ? e.type : e,
                d = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = s = n = n || x),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !pt.test(h + C.event.triggered) &&
                    (-1 < h.indexOf(".") &&
                        ((h = (d = h.split(".")).shift()), d.sort()),
                    (l = h.indexOf(":") < 0 && "on" + h),
                    ((e = e[C.expando]
                        ? e
                        : new C.Event(h, "object" == typeof e && e)).isTrigger =
                        i ? 2 : 3),
                    (e.namespace = d.join(".")),
                    (e.rnamespace = e.namespace
                        ? new RegExp(
                              "(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : C.makeArray(t, [e])),
                    (c = C.event.special[h] || {}),
                    i || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!i && !c.noBubble && !C.isWindow(n)) {
                    for (
                        a = c.delegateType || h,
                            pt.test(a + h) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        f.push(o), (s = o);
                    s === (n.ownerDocument || x) &&
                        f.push(s.defaultView || s.parentWindow || T);
                }
                for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                    (e.type = 1 < r ? a : c.bindType || h),
                        (u =
                            (Q.get(o, "events") || {})[e.type] &&
                            Q.get(o, "handle")) && u.apply(o, t),
                        (u = l && o[l]) &&
                            u.apply &&
                            K(o) &&
                            ((e.result = u.apply(o, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = h),
                    i ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(f.pop(), t)) ||
                        !K(n) ||
                        (l &&
                            C.isFunction(n[h]) &&
                            !C.isWindow(n) &&
                            ((s = n[l]) && (n[l] = null),
                            n[(C.event.triggered = h)](),
                            (C.event.triggered = void 0),
                            s && (n[l] = s))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
            C.event.trigger(i, null, t);
        },
    }),
        C.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
            },
        }),
        C.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                C.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        ),
        C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        (m.focusin = "onfocusin" in T),
        m.focusin ||
            C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                var r = function (e) {
                    C.event.simulate(i, e.target, C.event.fix(e));
                };
                C.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = Q.access(e, i);
                        t || e.addEventListener(n, r, !0),
                            Q.access(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = Q.access(e, i) - 1;
                        t
                            ? Q.access(e, i, t)
                            : (e.removeEventListener(n, r, !0), Q.remove(e, i));
                    },
                };
            });
    var gt = T.location,
        mt = C.now(),
        vt = /\?/;
    C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (
            (t && !t.getElementsByTagName("parsererror").length) ||
                C.error("Invalid XML: " + e),
            t
        );
    };
    var yt = /\[\]$/,
        _t = /\r?\n/g,
        bt = /^(?:submit|button|image|reset|file)$/i,
        wt = /^(?:input|select|textarea|keygen)/i;
    function Et(n, e, i, r) {
        var t;
        if (Array.isArray(e))
            C.each(e, function (e, t) {
                i || yt.test(n)
                    ? r(n, t)
                    : Et(
                          n +
                              "[" +
                              ("object" == typeof t && null != t ? e : "") +
                              "]",
                          t,
                          i,
                          r
                      );
            });
        else if (i || "object" !== C.type(e)) r(n, e);
        else for (t in e) Et(n + "[" + t + "]", e[t], i, r);
    }
    (C.param = function (e, t) {
        var n,
            i = [],
            r = function (e, t) {
                var n = C.isFunction(t) ? t() : t;
                i[i.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
            C.each(e, function () {
                r(this.name, this.value);
            });
        else for (n in e) Et(n, e[n], t, r);
        return i.join("&");
    }),
        C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !C(this).is(":disabled") &&
                            wt.test(this.nodeName) &&
                            !bt.test(e) &&
                            (this.checked || !oe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = C(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? C.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(_t, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(_t, "\r\n") };
                    })
                    .get();
            },
        });
    var Tt = /%20/g,
        xt = /#.*$/,
        Ct = /([?&])_=[^&]*/,
        St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        At = /^\/\//,
        Nt = {},
        It = {},
        kt = "*/".concat("*"),
        Ot = x.createElement("a");
    function Lt(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(P) || [];
            if (C.isFunction(t))
                for (; (n = r[i++]); )
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function jt(t, r, o, s) {
        var a = {},
            l = t === It;
        function u(e) {
            var i;
            return (
                (a[e] = !0),
                C.each(t[e] || [], function (e, t) {
                    var n = t(r, o, s);
                    return "string" != typeof n || l || a[n]
                        ? l
                            ? !(i = n)
                            : void 0
                        : (r.dataTypes.unshift(n), u(n), !1);
                }),
                i
            );
        }
        return u(r.dataTypes[0]) || (!a["*"] && u("*"));
    }
    function Ht(e, t) {
        var n,
            i,
            r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e;
    }
    (Ot.href = gt.href),
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        gt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": kt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ht(Ht(e, C.ajaxSettings), t) : Ht(C.ajaxSettings, e);
            },
            ajaxPrefilter: Lt(Nt),
            ajaxTransport: Lt(It),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    h,
                    n,
                    d,
                    i,
                    p,
                    g,
                    r,
                    o,
                    m = C.ajaxSetup({}, t),
                    v = m.context || m,
                    y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                    _ = C.Deferred(),
                    b = C.Callbacks("once memory"),
                    w = m.statusCode || {},
                    s = {},
                    a = {},
                    l = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (p) {
                                if (!n)
                                    for (n = {}; (t = St.exec(h)); )
                                        n[t[1].toLowerCase()] = t[2];
                                t = n[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return p ? h : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == p &&
                                    ((e = a[e.toLowerCase()] =
                                        a[e.toLowerCase()] || e),
                                    (s[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == p && (m.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (p) E.always(e[E.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || l;
                            return c && c.abort(t), u(0, t), this;
                        },
                    };
                if (
                    (_.promise(E),
                    (m.url = ((e || m.url || gt.href) + "").replace(
                        At,
                        gt.protocol + "//"
                    )),
                    (m.type = t.method || t.type || m.method || m.type),
                    (m.dataTypes = (m.dataType || "*")
                        .toLowerCase()
                        .match(P) || [""]),
                    null == m.crossDomain)
                ) {
                    i = x.createElement("a");
                    try {
                        (i.href = m.url),
                            (i.href = i.href),
                            (m.crossDomain =
                                Ot.protocol + "//" + Ot.host !=
                                i.protocol + "//" + i.host);
                    } catch (e) {
                        m.crossDomain = !0;
                    }
                }
                if (
                    (m.data &&
                        m.processData &&
                        "string" != typeof m.data &&
                        (m.data = C.param(m.data, m.traditional)),
                    jt(Nt, m, t, E),
                    p)
                )
                    return E;
                for (r in ((g = C.event && m.global) &&
                    0 == C.active++ &&
                    C.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !Dt.test(m.type)),
                (f = m.url.replace(xt, "")),
                m.hasContent
                    ? m.data &&
                      m.processData &&
                      0 ===
                          (m.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (m.data = m.data.replace(Tt, "+"))
                    : ((o = m.url.slice(f.length)),
                      m.data &&
                          ((f += (vt.test(f) ? "&" : "?") + m.data),
                          delete m.data),
                      !1 === m.cache &&
                          ((f = f.replace(Ct, "$1")),
                          (o = (vt.test(f) ? "&" : "?") + "_=" + mt++ + o)),
                      (m.url = f + o)),
                m.ifModified &&
                    (C.lastModified[f] &&
                        E.setRequestHeader(
                            "If-Modified-Since",
                            C.lastModified[f]
                        ),
                    C.etag[f] &&
                        E.setRequestHeader("If-None-Match", C.etag[f])),
                ((m.data && m.hasContent && !1 !== m.contentType) ||
                    t.contentType) &&
                    E.setRequestHeader("Content-Type", m.contentType),
                E.setRequestHeader(
                    "Accept",
                    m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                        ? m.accepts[m.dataTypes[0]] +
                              ("*" !== m.dataTypes[0]
                                  ? ", " + kt + "; q=0.01"
                                  : "")
                        : m.accepts["*"]
                ),
                m.headers))
                    E.setRequestHeader(r, m.headers[r]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p))
                    return E.abort();
                if (
                    ((l = "abort"),
                    b.add(m.complete),
                    E.done(m.success),
                    E.fail(m.error),
                    (c = jt(It, m, t, E)))
                ) {
                    if (
                        ((E.readyState = 1),
                        g && y.trigger("ajaxSend", [E, m]),
                        p)
                    )
                        return E;
                    m.async &&
                        0 < m.timeout &&
                        (d = T.setTimeout(function () {
                            E.abort("timeout");
                        }, m.timeout));
                    try {
                        (p = !1), c.send(s, u);
                    } catch (e) {
                        if (p) throw e;
                        u(-1, e);
                    }
                } else u(-1, "No Transport");
                function u(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u = t;
                    p ||
                        ((p = !0),
                        d && T.clearTimeout(d),
                        (c = void 0),
                        (h = i || ""),
                        (E.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                        void 0 === i &&
                                            (i =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (
                                            !l[0] ||
                                            e.converters[r + " " + l[0]]
                                        ) {
                                            o = r;
                                            break;
                                        }
                                        s || (s = r);
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(m, E, n)),
                        (a = (function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters)
                                    u[s.toLowerCase()] = e.converters[s];
                            for (o = c.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !l &&
                                        i &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = o),
                                    (o = c.shift()))
                                )
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (
                                            !(s = u[l + " " + o] || u["* " + o])
                                        )
                                            for (r in u)
                                                if (
                                                    (a = r.split(" "))[1] ===
                                                        o &&
                                                    (s =
                                                        u[l + " " + a[0]] ||
                                                        u["* " + a[0]])
                                                ) {
                                                    !0 === s
                                                        ? (s = u[r])
                                                        : !0 !== u[r] &&
                                                          ((o = a[0]),
                                                          c.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s
                                                            ? e
                                                            : "No conversion from " +
                                                              l +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(m, a, E, r)),
                        r
                            ? (m.ifModified &&
                                  ((l = E.getResponseHeader("Last-Modified")) &&
                                      (C.lastModified[f] = l),
                                  (l = E.getResponseHeader("etag")) &&
                                      (C.etag[f] = l)),
                              204 === e || "HEAD" === m.type
                                  ? (u = "nocontent")
                                  : 304 === e
                                  ? (u = "notmodified")
                                  : ((u = a.state),
                                    (o = a.data),
                                    (r = !(s = a.error))))
                            : ((s = u),
                              (!e && u) || ((u = "error"), e < 0 && (e = 0))),
                        (E.status = e),
                        (E.statusText = (t || u) + ""),
                        r
                            ? _.resolveWith(v, [o, u, E])
                            : _.rejectWith(v, [E, u, s]),
                        E.statusCode(w),
                        (w = void 0),
                        g &&
                            y.trigger(r ? "ajaxSuccess" : "ajaxError", [
                                E,
                                m,
                                r ? o : s,
                            ]),
                        b.fireWith(v, [E, u]),
                        g &&
                            (y.trigger("ajaxComplete", [E, m]),
                            --C.active || C.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
            },
        }),
        C.each(["get", "post"], function (e, r) {
            C[r] = function (e, t, n, i) {
                return (
                    C.isFunction(t) && ((i = i || n), (n = t), (t = void 0)),
                    C.ajax(
                        C.extend(
                            {
                                url: e,
                                type: r,
                                dataType: i,
                                data: t,
                                success: n,
                            },
                            C.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (C._evalUrl = function (e) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        C.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (C.isFunction(e) && (e = e.call(this[0])),
                        (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return C.isFunction(n)
                    ? this.each(function (e) {
                          C(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = C(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = C.isFunction(t);
                return this.each(function (e) {
                    C(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            C(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (C.ajaxSettings.xhr = function () {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var Pt = { 0: 200, 1223: 204 },
        Ft = C.ajaxSettings.xhr();
    (m.cors = !!Ft && "withCredentials" in Ft),
        (m.ajax = Ft = !!Ft),
        C.ajaxTransport(function (r) {
            var o, s;
            if (m.cors || (Ft && !r.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            i = r.xhr();
                        if (
                            (i.open(
                                r.type,
                                r.url,
                                r.async,
                                r.username,
                                r.password
                            ),
                            r.xhrFields)
                        )
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in (r.mimeType &&
                            i.overrideMimeType &&
                            i.overrideMimeType(r.mimeType),
                        r.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            i.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        s =
                                        i.onload =
                                        i.onerror =
                                        i.onabort =
                                        i.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? i.abort()
                                        : "error" === e
                                        ? "number" != typeof i.status
                                            ? t(0, "error")
                                            : t(i.status, i.statusText)
                                        : t(
                                              Pt[i.status] || i.status,
                                              i.statusText,
                                              "text" !==
                                                  (i.responseType || "text") ||
                                                  "string" !=
                                                      typeof i.responseText
                                                  ? { binary: i.response }
                                                  : { text: i.responseText },
                                              i.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (i.onload = o()),
                            (s = i.onerror = o("error")),
                            void 0 !== i.onabort
                                ? (i.onabort = s)
                                : (i.onreadystatechange = function () {
                                      4 === i.readyState &&
                                          T.setTimeout(function () {
                                              o && s();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            i.send((r.hasContent && r.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        C.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e;
                },
            },
        }),
        C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (n) {
            var i, r;
            if (n.crossDomain)
                return {
                    send: function (e, t) {
                        (i = C("<script>")
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (r = function (e) {
                                    i.remove(),
                                        (r = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            x.head.appendChild(i[0]);
                    },
                    abort: function () {
                        r && r();
                    },
                };
        });
    var qt,
        Rt = [],
        Mt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Rt.pop() || C.expando + "_" + mt++;
            return (this[e] = !0), e;
        },
    }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                r,
                o,
                s =
                    !1 !== e.jsonp &&
                    (Mt.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Mt.test(e.data) &&
                          "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback =
                        C.isFunction(e.jsonpCallback)
                            ? e.jsonpCallback()
                            : e.jsonpCallback),
                    s
                        ? (e[s] = e[s].replace(Mt, "$1" + i))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                        return o || C.error(i + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = T[i]),
                    (T[i] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === r ? C(T).removeProp(i) : (T[i] = r),
                            e[i] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                Rt.push(i)),
                            o && C.isFunction(r) && r(o[0]),
                            (o = r = void 0);
                    }),
                    "script"
                );
        }),
        (m.createHTMLDocument =
            (((qt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === qt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                      (m.createHTMLDocument
                          ? (((i = (t =
                                x.implementation.createHTMLDocument(
                                    ""
                                )).createElement("base")).href =
                                x.location.href),
                            t.head.appendChild(i))
                          : (t = x)),
                  (o = !n && []),
                  (r = A.exec(e))
                      ? [t.createElement(r[1])]
                      : ((r = pe([e], t, o)),
                        o && o.length && C(o).remove(),
                        C.merge([], r.childNodes)));
            var i, r, o;
        }),
        (C.fn.load = function (e, t, n) {
            var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
            return (
                -1 < a && ((i = ft(e.slice(a))), (e = e.slice(0, a))),
                C.isFunction(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (r = "POST"),
                0 < s.length &&
                    C.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                s.html(
                                    i
                                        ? C("<div>")
                                              .append(C.parseHTML(e))
                                              .find(i)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        C.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                C.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (C.expr.pseudos.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (C.offset = {
            setOffset: function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u = C.css(e, "position"),
                    c = C(e),
                    f = {};
                "static" === u && (e.style.position = "relative"),
                    (a = c.offset()),
                    (o = C.css(e, "top")),
                    (l = C.css(e, "left")),
                    (r =
                        ("absolute" === u || "fixed" === u) &&
                        -1 < (o + l).indexOf("auto")
                            ? ((s = (i = c.position()).top), i.left)
                            : ((s = parseFloat(o) || 0), parseFloat(l) || 0)),
                    C.isFunction(t) && (t = t.call(e, n, C.extend({}, a))),
                    null != t.top && (f.top = t.top - a.top + s),
                    null != t.left && (f.left = t.left - a.left + r),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        C.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              C.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i,
                    r,
                    o = this[0];
                return o
                    ? o.getClientRects().length
                        ? ((i = o.getBoundingClientRect()),
                          (n = (e = o.ownerDocument).documentElement),
                          (r = e.defaultView),
                          {
                              top: i.top + r.pageYOffset - n.clientTop,
                              left: i.left + r.pageXOffset - n.clientLeft,
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        i = { top: 0, left: 0 };
                    return (
                        "fixed" === C.css(n, "position")
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                              (t = this.offset()),
                              D(e[0], "html") || (i = e.offset()),
                              (i = {
                                  top:
                                      i.top + C.css(e[0], "borderTopWidth", !0),
                                  left:
                                      i.left +
                                      C.css(e[0], "borderLeftWidth", !0),
                              })),
                        {
                            top: t.top - i.top - C.css(n, "marginTop", !0),
                            left: t.left - i.left - C.css(n, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent;
                        e && "static" === C.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || ge;
                });
            },
        }),
        C.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, r) {
                var o = "pageYOffset" === r;
                C.fn[t] = function (e) {
                    return U(
                        this,
                        function (e, t, n) {
                            var i;
                            return (
                                C.isWindow(e)
                                    ? (i = e)
                                    : 9 === e.nodeType && (i = e.defaultView),
                                void 0 === n
                                    ? i
                                        ? i[r]
                                        : e[t]
                                    : void (i
                                          ? i.scrollTo(
                                                o ? i.pageXOffset : n,
                                                o ? n : i.pageYOffset
                                            )
                                          : (e[t] = n))
                            );
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        C.each(["top", "left"], function (e, n) {
            C.cssHooks[n] = qe(m.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = Fe(e, n)),
                        He.test(t) ? C(e).position()[n] + "px" : t
                    );
            });
        }),
        C.each({ Height: "height", Width: "width" }, function (s, a) {
            C.each(
                { padding: "inner" + s, content: a, "": "outer" + s },
                function (i, o) {
                    C.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (i || "boolean" != typeof e),
                            r =
                                i ||
                                (!0 === e || !0 === t ? "margin" : "border");
                        return U(
                            this,
                            function (e, t, n) {
                                var i;
                                return C.isWindow(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + s]
                                        : e.document.documentElement[
                                              "client" + s
                                          ]
                                    : 9 === e.nodeType
                                    ? ((i = e.documentElement),
                                      Math.max(
                                          e.body["scroll" + s],
                                          i["scroll" + s],
                                          e.body["offset" + s],
                                          i["offset" + s],
                                          i["client" + s]
                                      ))
                                    : void 0 === n
                                    ? C.css(e, t, r)
                                    : C.style(e, t, n, r);
                            },
                            a,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        }),
        (C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = D),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return C;
            });
    var Wt = T.jQuery,
        Bt = T.$;
    return (
        (C.noConflict = function (e) {
            return (
                T.$ === C && (T.$ = Bt),
                e && T.jQuery === C && (T.jQuery = Wt),
                C
            );
        }),
        e || (T.jQuery = T.$ = C),
        C
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? t(exports, require("jquery"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery"], t)
            : t(((e = e || self).bootstrap = {}), e.jQuery);
    })(this, function (e, p) {
        "use strict";
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        function s(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
        }
        function l(r) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {},
                    t = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                        Object.getOwnPropertySymbols(o).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                                o,
                                e
                            ).enumerable;
                        })
                    )),
                    t.forEach(function (e) {
                        var t, n, i;
                        (t = r),
                            (i = o[(n = e)]),
                            n in t
                                ? Object.defineProperty(t, n, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[n] = i);
                    });
            }
            return r;
        }
        p = p && p.hasOwnProperty("default") ? p.default : p;
        var t = "transitionend";
        function n(e) {
            var t = this,
                n = !1;
            return (
                p(this).one(g.TRANSITION_END, function () {
                    n = !0;
                }),
                setTimeout(function () {
                    n || g.triggerTransitionEnd(t);
                }, e),
                this
            );
        }
        var g = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                for (
                    ;
                    (e += ~~(1e6 * Math.random())), document.getElementById(e);

                );
                return e;
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var t = p(e).css("transition-duration"),
                    n = p(e).css("transition-delay"),
                    i = parseFloat(t),
                    r = parseFloat(n);
                return i || r
                    ? ((t = t.split(",")[0]),
                      (n = n.split(",")[0]),
                      1e3 * (parseFloat(t) + parseFloat(n)))
                    : 0;
            },
            reflow: function (e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
                p(e).trigger(t);
            },
            supportsTransitionEnd: function () {
                return Boolean(t);
            },
            isElement: function (e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            s =
                                o && g.isElement(o)
                                    ? "element"
                                    : ((a = o),
                                      {}.toString
                                          .call(a)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase());
                        if (!new RegExp(r).test(s))
                            throw new Error(
                                e.toUpperCase() +
                                    ': Option "' +
                                    i +
                                    '" provided type "' +
                                    s +
                                    '" but expected type "' +
                                    r +
                                    '".'
                            );
                    }
                var a;
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode)
                    return e instanceof ShadowRoot
                        ? e
                        : e.parentNode
                        ? g.findShadowRoot(e.parentNode)
                        : null;
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            },
        };
        (p.fn.emulateTransitionEnd = n),
            (p.event.special[g.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (e) {
                    if (p(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments);
                },
            });
        var r = "alert",
            o = "bs.alert",
            a = "." + o,
            u = p.fn[r],
            c = {
                CLOSE: "close" + a,
                CLOSED: "closed" + a,
                CLICK_DATA_API: "click" + a + ".data-api",
            },
            f = "alert",
            h = "fade",
            d = "show",
            m = (function () {
                function i(e) {
                    this._element = e;
                }
                var e = i.prototype;
                return (
                    (e.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)),
                            this._triggerCloseEvent(t).isDefaultPrevented() ||
                                this._removeElement(t);
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, o), (this._element = null);
                    }),
                    (e._getRootElement = function (e) {
                        var t = g.getSelectorFromElement(e),
                            n = !1;
                        return (
                            t && (n = document.querySelector(t)),
                            n || (n = p(e).closest("." + f)[0]),
                            n
                        );
                    }),
                    (e._triggerCloseEvent = function (e) {
                        var t = p.Event(c.CLOSE);
                        return p(e).trigger(t), t;
                    }),
                    (e._removeElement = function (t) {
                        var n = this;
                        if ((p(t).removeClass(d), p(t).hasClass(h))) {
                            var e = g.getTransitionDurationFromElement(t);
                            p(t)
                                .one(g.TRANSITION_END, function (e) {
                                    return n._destroyElement(t, e);
                                })
                                .emulateTransitionEnd(e);
                        } else this._destroyElement(t);
                    }),
                    (e._destroyElement = function (e) {
                        p(e).detach().trigger(c.CLOSED).remove();
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = p(this),
                                t = e.data(o);
                            t || ((t = new i(this)), e.data(o, t)),
                                "close" === n && t[n](this);
                        });
                    }),
                    (i._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this);
                        };
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    i
                );
            })();
        p(document).on(
            c.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            m._handleDismiss(new m())
        ),
            (p.fn[r] = m._jQueryInterface),
            (p.fn[r].Constructor = m),
            (p.fn[r].noConflict = function () {
                return (p.fn[r] = u), m._jQueryInterface;
            });
        var v = "button",
            y = "bs.button",
            _ = "." + y,
            b = ".data-api",
            w = p.fn[v],
            E = "active",
            T = "btn",
            x = "focus",
            C = '[data-toggle^="button"]',
            S = '[data-toggle="buttons"]',
            D = 'input:not([type="hidden"])',
            A = ".active",
            N = ".btn",
            I = {
                CLICK_DATA_API: "click" + _ + b,
                FOCUS_BLUR_DATA_API: "focus" + _ + b + " blur" + _ + b,
            },
            k = (function () {
                function n(e) {
                    this._element = e;
                }
                var e = n.prototype;
                return (
                    (e.toggle = function () {
                        var e = !0,
                            t = !0,
                            n = p(this._element).closest(S)[0];
                        if (n) {
                            var i = this._element.querySelector(D);
                            if (i) {
                                if ("radio" === i.type)
                                    if (
                                        i.checked &&
                                        this._element.classList.contains(E)
                                    )
                                        e = !1;
                                    else {
                                        var r = n.querySelector(A);
                                        r && p(r).removeClass(E);
                                    }
                                if (e) {
                                    if (
                                        i.hasAttribute("disabled") ||
                                        n.hasAttribute("disabled") ||
                                        i.classList.contains("disabled") ||
                                        n.classList.contains("disabled")
                                    )
                                        return;
                                    (i.checked =
                                        !this._element.classList.contains(E)),
                                        p(i).trigger("change");
                                }
                                i.focus(), (t = !1);
                            }
                        }
                        t &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains(E)
                            ),
                            e && p(this._element).toggleClass(E);
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, y), (this._element = null);
                    }),
                    (n._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = p(this).data(y);
                            e || ((e = new n(this)), p(this).data(y, e)),
                                "toggle" === t && e[t]();
                        });
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    n
                );
            })();
        p(document)
            .on(I.CLICK_DATA_API, C, function (e) {
                e.preventDefault();
                var t = e.target;
                p(t).hasClass(T) || (t = p(t).closest(N)),
                    k._jQueryInterface.call(p(t), "toggle");
            })
            .on(I.FOCUS_BLUR_DATA_API, C, function (e) {
                var t = p(e.target).closest(N)[0];
                p(t).toggleClass(x, /^focus(in)?$/.test(e.type));
            }),
            (p.fn[v] = k._jQueryInterface),
            (p.fn[v].Constructor = k),
            (p.fn[v].noConflict = function () {
                return (p.fn[v] = w), k._jQueryInterface;
            });
        var O = "carousel",
            L = "bs.carousel",
            j = "." + L,
            H = ".data-api",
            P = p.fn[O],
            F = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0,
            },
            q = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean",
            },
            R = "next",
            M = "prev",
            W = "left",
            B = "right",
            U = {
                SLIDE: "slide" + j,
                SLID: "slid" + j,
                KEYDOWN: "keydown" + j,
                MOUSEENTER: "mouseenter" + j,
                MOUSELEAVE: "mouseleave" + j,
                TOUCHSTART: "touchstart" + j,
                TOUCHMOVE: "touchmove" + j,
                TOUCHEND: "touchend" + j,
                POINTERDOWN: "pointerdown" + j,
                POINTERUP: "pointerup" + j,
                DRAG_START: "dragstart" + j,
                LOAD_DATA_API: "load" + j + H,
                CLICK_DATA_API: "click" + j + H,
            },
            K = "carousel",
            $ = "active",
            Q = "slide",
            V = "carousel-item-right",
            z = "carousel-item-left",
            Y = "carousel-item-next",
            X = "carousel-item-prev",
            G = "pointer-event",
            J = ".active",
            Z = ".active.carousel-item",
            ee = ".carousel-item",
            te = ".carousel-item img",
            ne = ".carousel-item-next, .carousel-item-prev",
            ie = ".carousel-indicators",
            re = "[data-slide], [data-slide-to]",
            oe = '[data-ride="carousel"]',
            se = { TOUCH: "touch", PEN: "pen" },
            ae = (function () {
                function o(e, t) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._indicatorsElement =
                            this._element.querySelector(ie)),
                        (this._touchSupported =
                            "ontouchstart" in document.documentElement ||
                            0 < navigator.maxTouchPoints),
                        (this._pointerEvent = Boolean(
                            window.PointerEvent || window.MSPointerEvent
                        )),
                        this._addEventListeners();
                }
                var e = o.prototype;
                return (
                    (e.next = function () {
                        this._isSliding || this._slide(R);
                    }),
                    (e.nextWhenVisible = function () {
                        !document.hidden &&
                            p(this._element).is(":visible") &&
                            "hidden" !== p(this._element).css("visibility") &&
                            this.next();
                    }),
                    (e.prev = function () {
                        this._isSliding || this._slide(M);
                    }),
                    (e.pause = function (e) {
                        e || (this._isPaused = !0),
                            this._element.querySelector(ne) &&
                                (g.triggerTransitionEnd(this._element),
                                this.cycle(!0)),
                            clearInterval(this._interval),
                            (this._interval = null);
                    }),
                    (e.cycle = function (e) {
                        e || (this._isPaused = !1),
                            this._interval &&
                                (clearInterval(this._interval),
                                (this._interval = null)),
                            this._config.interval &&
                                !this._isPaused &&
                                (this._interval = setInterval(
                                    (document.visibilityState
                                        ? this.nextWhenVisible
                                        : this.next
                                    ).bind(this),
                                    this._config.interval
                                ));
                    }),
                    (e.to = function (e) {
                        var t = this;
                        this._activeElement = this._element.querySelector(Z);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                p(this._element).one(U.SLID, function () {
                                    return t.to(e);
                                });
                            else {
                                if (n === e)
                                    return this.pause(), void this.cycle();
                                var i = n < e ? R : M;
                                this._slide(i, this._items[e]);
                            }
                    }),
                    (e.dispose = function () {
                        p(this._element).off(j),
                            p.removeData(this._element, L),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (e._getConfig = function (e) {
                        return (e = l({}, F, e)), g.typeCheckConfig(O, e, q), e;
                    }),
                    (e._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            0 < t && this.prev(), t < 0 && this.next();
                        }
                    }),
                    (e._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard &&
                            p(this._element).on(U.KEYDOWN, function (e) {
                                return t._keydown(e);
                            }),
                            "hover" === this._config.pause &&
                                p(this._element)
                                    .on(U.MOUSEENTER, function (e) {
                                        return t.pause(e);
                                    })
                                    .on(U.MOUSELEAVE, function (e) {
                                        return t.cycle(e);
                                    }),
                            this._config.touch &&
                                this._addTouchEventListeners();
                    }),
                    (e._addTouchEventListeners = function () {
                        var n = this;
                        if (this._touchSupported) {
                            var t = function (e) {
                                    n._pointerEvent &&
                                    se[
                                        e.originalEvent.pointerType.toUpperCase()
                                    ]
                                        ? (n.touchStartX =
                                              e.originalEvent.clientX)
                                        : n._pointerEvent ||
                                          (n.touchStartX =
                                              e.originalEvent.touches[0].clientX);
                                },
                                i = function (e) {
                                    n._pointerEvent &&
                                        se[
                                            e.originalEvent.pointerType.toUpperCase()
                                        ] &&
                                        (n.touchDeltaX =
                                            e.originalEvent.clientX -
                                            n.touchStartX),
                                        n._handleSwipe(),
                                        "hover" === n._config.pause &&
                                            (n.pause(),
                                            n.touchTimeout &&
                                                clearTimeout(n.touchTimeout),
                                            (n.touchTimeout = setTimeout(
                                                function (e) {
                                                    return n.cycle(e);
                                                },
                                                500 + n._config.interval
                                            )));
                                };
                            p(this._element.querySelectorAll(te)).on(
                                U.DRAG_START,
                                function (e) {
                                    return e.preventDefault();
                                }
                            ),
                                this._pointerEvent
                                    ? (p(this._element).on(
                                          U.POINTERDOWN,
                                          function (e) {
                                              return t(e);
                                          }
                                      ),
                                      p(this._element).on(
                                          U.POINTERUP,
                                          function (e) {
                                              return i(e);
                                          }
                                      ),
                                      this._element.classList.add(G))
                                    : (p(this._element).on(
                                          U.TOUCHSTART,
                                          function (e) {
                                              return t(e);
                                          }
                                      ),
                                      p(this._element).on(
                                          U.TOUCHMOVE,
                                          function (e) {
                                              var t;
                                              (t = e).originalEvent.touches &&
                                              1 < t.originalEvent.touches.length
                                                  ? (n.touchDeltaX = 0)
                                                  : (n.touchDeltaX =
                                                        t.originalEvent
                                                            .touches[0]
                                                            .clientX -
                                                        n.touchStartX);
                                          }
                                      ),
                                      p(this._element).on(
                                          U.TOUCHEND,
                                          function (e) {
                                              return i(e);
                                          }
                                      ));
                        }
                    }),
                    (e._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next();
                            }
                    }),
                    (e._getItemIndex = function (e) {
                        return (
                            (this._items =
                                e && e.parentNode
                                    ? [].slice.call(
                                          e.parentNode.querySelectorAll(ee)
                                      )
                                    : []),
                            this._items.indexOf(e)
                        );
                    }),
                    (e._getItemByDirection = function (e, t) {
                        var n = e === R,
                            i = e === M,
                            r = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if (
                            ((i && 0 === r) || (n && r === o)) &&
                            !this._config.wrap
                        )
                            return t;
                        var s = (r + (e === M ? -1 : 1)) % this._items.length;
                        return -1 === s
                            ? this._items[this._items.length - 1]
                            : this._items[s];
                    }),
                    (e._triggerSlideEvent = function (e, t) {
                        var n = this._getItemIndex(e),
                            i = this._getItemIndex(
                                this._element.querySelector(Z)
                            ),
                            r = p.Event(U.SLIDE, {
                                relatedTarget: e,
                                direction: t,
                                from: i,
                                to: n,
                            });
                        return p(this._element).trigger(r), r;
                    }),
                    (e._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            var t = [].slice.call(
                                this._indicatorsElement.querySelectorAll(J)
                            );
                            p(t).removeClass($);
                            var n =
                                this._indicatorsElement.children[
                                    this._getItemIndex(e)
                                ];
                            n && p(n).addClass($);
                        }
                    }),
                    (e._slide = function (e, t) {
                        var n,
                            i,
                            r,
                            o = this,
                            s = this._element.querySelector(Z),
                            a = this._getItemIndex(s),
                            l = t || (s && this._getItemByDirection(e, s)),
                            u = this._getItemIndex(l),
                            c = Boolean(this._interval);
                        if (
                            ((r =
                                e === R
                                    ? ((n = z), (i = Y), W)
                                    : ((n = V), (i = X), B)),
                            l && p(l).hasClass($))
                        )
                            this._isSliding = !1;
                        else if (
                            !this._triggerSlideEvent(
                                l,
                                r
                            ).isDefaultPrevented() &&
                            s &&
                            l
                        ) {
                            (this._isSliding = !0),
                                c && this.pause(),
                                this._setActiveIndicatorElement(l);
                            var f = p.Event(U.SLID, {
                                relatedTarget: l,
                                direction: r,
                                from: a,
                                to: u,
                            });
                            if (p(this._element).hasClass(Q)) {
                                p(l).addClass(i),
                                    g.reflow(l),
                                    p(s).addClass(n),
                                    p(l).addClass(n);
                                var h = parseInt(
                                    l.getAttribute("data-interval"),
                                    10
                                );
                                h
                                    ? ((this._config.defaultInterval =
                                          this._config.defaultInterval ||
                                          this._config.interval),
                                      (this._config.interval = h))
                                    : (this._config.interval =
                                          this._config.defaultInterval ||
                                          this._config.interval);
                                var d = g.getTransitionDurationFromElement(s);
                                p(s)
                                    .one(g.TRANSITION_END, function () {
                                        p(l)
                                            .removeClass(n + " " + i)
                                            .addClass($),
                                            p(s).removeClass(
                                                $ + " " + i + " " + n
                                            ),
                                            (o._isSliding = !1),
                                            setTimeout(function () {
                                                return p(o._element).trigger(f);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(d);
                            } else
                                p(s).removeClass($),
                                    p(l).addClass($),
                                    (this._isSliding = !1),
                                    p(this._element).trigger(f);
                            c && this.cycle();
                        }
                    }),
                    (o._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = p(this).data(L),
                                t = l({}, F, p(this).data());
                            "object" == typeof i && (t = l({}, t, i));
                            var n = "string" == typeof i ? i : t.slide;
                            if (
                                (e ||
                                    ((e = new o(this, t)), p(this).data(L, e)),
                                "number" == typeof i)
                            )
                                e.to(i);
                            else if ("string" == typeof n) {
                                if (void 0 === e[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                e[n]();
                            } else
                                t.interval && t.ride && (e.pause(), e.cycle());
                        });
                    }),
                    (o._dataApiClickHandler = function (e) {
                        var t = g.getSelectorFromElement(this);
                        if (t) {
                            var n = p(t)[0];
                            if (n && p(n).hasClass(K)) {
                                var i = l({}, p(n).data(), p(this).data()),
                                    r = this.getAttribute("data-slide-to");
                                r && (i.interval = !1),
                                    o._jQueryInterface.call(p(n), i),
                                    r && p(n).data(L).to(r),
                                    e.preventDefault();
                            }
                        }
                    }),
                    s(o, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return F;
                            },
                        },
                    ]),
                    o
                );
            })();
        p(document).on(U.CLICK_DATA_API, re, ae._dataApiClickHandler),
            p(window).on(U.LOAD_DATA_API, function () {
                for (
                    var e = [].slice.call(document.querySelectorAll(oe)),
                        t = 0,
                        n = e.length;
                    t < n;
                    t++
                ) {
                    var i = p(e[t]);
                    ae._jQueryInterface.call(i, i.data());
                }
            }),
            (p.fn[O] = ae._jQueryInterface),
            (p.fn[O].Constructor = ae),
            (p.fn[O].noConflict = function () {
                return (p.fn[O] = P), ae._jQueryInterface;
            });
        var le = "collapse",
            ue = "bs.collapse",
            ce = "." + ue,
            fe = p.fn[le],
            he = { toggle: !0, parent: "" },
            de = { toggle: "boolean", parent: "(string|element)" },
            pe = {
                SHOW: "show" + ce,
                SHOWN: "shown" + ce,
                HIDE: "hide" + ce,
                HIDDEN: "hidden" + ce,
                CLICK_DATA_API: "click" + ce + ".data-api",
            },
            ge = "show",
            me = "collapse",
            ve = "collapsing",
            ye = "collapsed",
            _e = "width",
            be = "height",
            we = ".show, .collapsing",
            Ee = '[data-toggle="collapse"]',
            Te = (function () {
                function a(t, e) {
                    (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = [].slice.call(
                            document.querySelectorAll(
                                '[data-toggle="collapse"][href="#' +
                                    t.id +
                                    '"],[data-toggle="collapse"][data-target="#' +
                                    t.id +
                                    '"]'
                            )
                        ));
                    for (
                        var n = [].slice.call(document.querySelectorAll(Ee)),
                            i = 0,
                            r = n.length;
                        i < r;
                        i++
                    ) {
                        var o = n[i],
                            s = g.getSelectorFromElement(o),
                            a = [].slice
                                .call(document.querySelectorAll(s))
                                .filter(function (e) {
                                    return e === t;
                                });
                        null !== s &&
                            0 < a.length &&
                            ((this._selector = s), this._triggerArray.push(o));
                    }
                    (this._parent = this._config.parent
                        ? this._getParent()
                        : null),
                        this._config.parent ||
                            this._addAriaAndCollapsedClass(
                                this._element,
                                this._triggerArray
                            ),
                        this._config.toggle && this.toggle();
                }
                var e = a.prototype;
                return (
                    (e.toggle = function () {
                        p(this._element).hasClass(ge)
                            ? this.hide()
                            : this.show();
                    }),
                    (e.show = function () {
                        var e,
                            t,
                            n = this;
                        if (
                            !this._isTransitioning &&
                            !p(this._element).hasClass(ge) &&
                            (this._parent &&
                                0 ===
                                    (e = [].slice
                                        .call(this._parent.querySelectorAll(we))
                                        .filter(function (e) {
                                            return "string" ==
                                                typeof n._config.parent
                                                ? e.getAttribute(
                                                      "data-parent"
                                                  ) === n._config.parent
                                                : e.classList.contains(me);
                                        })).length &&
                                (e = null),
                            !(
                                e &&
                                (t = p(e).not(this._selector).data(ue)) &&
                                t._isTransitioning
                            ))
                        ) {
                            var i = p.Event(pe.SHOW);
                            if (
                                (p(this._element).trigger(i),
                                !i.isDefaultPrevented())
                            ) {
                                e &&
                                    (a._jQueryInterface.call(
                                        p(e).not(this._selector),
                                        "hide"
                                    ),
                                    t || p(e).data(ue, null));
                                var r = this._getDimension();
                                p(this._element).removeClass(me).addClass(ve),
                                    (this._element.style[r] = 0),
                                    this._triggerArray.length &&
                                        p(this._triggerArray)
                                            .removeClass(ye)
                                            .attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var o =
                                        "scroll" +
                                        (r[0].toUpperCase() + r.slice(1)),
                                    s = g.getTransitionDurationFromElement(
                                        this._element
                                    );
                                p(this._element)
                                    .one(g.TRANSITION_END, function () {
                                        p(n._element)
                                            .removeClass(ve)
                                            .addClass(me)
                                            .addClass(ge),
                                            (n._element.style[r] = ""),
                                            n.setTransitioning(!1),
                                            p(n._element).trigger(pe.SHOWN);
                                    })
                                    .emulateTransitionEnd(s),
                                    (this._element.style[r] =
                                        this._element[o] + "px");
                            }
                        }
                    }),
                    (e.hide = function () {
                        var e = this;
                        if (
                            !this._isTransitioning &&
                            p(this._element).hasClass(ge)
                        ) {
                            var t = p.Event(pe.HIDE);
                            if (
                                (p(this._element).trigger(t),
                                !t.isDefaultPrevented())
                            ) {
                                var n = this._getDimension();
                                (this._element.style[n] =
                                    this._element.getBoundingClientRect()[n] +
                                    "px"),
                                    g.reflow(this._element),
                                    p(this._element)
                                        .addClass(ve)
                                        .removeClass(me)
                                        .removeClass(ge);
                                var i = this._triggerArray.length;
                                if (0 < i)
                                    for (var r = 0; r < i; r++) {
                                        var o = this._triggerArray[r],
                                            s = g.getSelectorFromElement(o);
                                        if (null !== s)
                                            p(
                                                [].slice.call(
                                                    document.querySelectorAll(s)
                                                )
                                            ).hasClass(ge) ||
                                                p(o)
                                                    .addClass(ye)
                                                    .attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var a = g.getTransitionDurationFromElement(
                                    this._element
                                );
                                p(this._element)
                                    .one(g.TRANSITION_END, function () {
                                        e.setTransitioning(!1),
                                            p(e._element)
                                                .removeClass(ve)
                                                .addClass(me)
                                                .trigger(pe.HIDDEN);
                                    })
                                    .emulateTransitionEnd(a);
                            }
                        }
                    }),
                    (e.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, ue),
                            (this._config = null),
                            (this._parent = null),
                            (this._element = null),
                            (this._triggerArray = null),
                            (this._isTransitioning = null);
                    }),
                    (e._getConfig = function (e) {
                        return (
                            ((e = l({}, he, e)).toggle = Boolean(e.toggle)),
                            g.typeCheckConfig(le, e, de),
                            e
                        );
                    }),
                    (e._getDimension = function () {
                        return p(this._element).hasClass(_e) ? _e : be;
                    }),
                    (e._getParent = function () {
                        var e,
                            n = this;
                        g.isElement(this._config.parent)
                            ? ((e = this._config.parent),
                              void 0 !== this._config.parent.jquery &&
                                  (e = this._config.parent[0]))
                            : (e = document.querySelector(this._config.parent));
                        var t =
                                '[data-toggle="collapse"][data-parent="' +
                                this._config.parent +
                                '"]',
                            i = [].slice.call(e.querySelectorAll(t));
                        return (
                            p(i).each(function (e, t) {
                                n._addAriaAndCollapsedClass(
                                    a._getTargetFromElement(t),
                                    [t]
                                );
                            }),
                            e
                        );
                    }),
                    (e._addAriaAndCollapsedClass = function (e, t) {
                        var n = p(e).hasClass(ge);
                        t.length &&
                            p(t).toggleClass(ye, !n).attr("aria-expanded", n);
                    }),
                    (a._getTargetFromElement = function (e) {
                        var t = g.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null;
                    }),
                    (a._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = p(this),
                                t = e.data(ue),
                                n = l(
                                    {},
                                    he,
                                    e.data(),
                                    "object" == typeof i && i ? i : {}
                                );
                            if (
                                (!t &&
                                    n.toggle &&
                                    /show|hide/.test(i) &&
                                    (n.toggle = !1),
                                t || ((t = new a(this, n)), e.data(ue, t)),
                                "string" == typeof i)
                            ) {
                                if (void 0 === t[i])
                                    throw new TypeError(
                                        'No method named "' + i + '"'
                                    );
                                t[i]();
                            }
                        });
                    }),
                    s(a, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return he;
                            },
                        },
                    ]),
                    a
                );
            })();
        p(document).on(pe.CLICK_DATA_API, Ee, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = p(this),
                t = g.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            p(i).each(function () {
                var e = p(this),
                    t = e.data(ue) ? "toggle" : n.data();
                Te._jQueryInterface.call(e, t);
            });
        }),
            (p.fn[le] = Te._jQueryInterface),
            (p.fn[le].Constructor = Te),
            (p.fn[le].noConflict = function () {
                return (p.fn[le] = fe), Te._jQueryInterface;
            });
        for (
            var xe =
                    "undefined" != typeof window &&
                    "undefined" != typeof document,
                Ce = ["Edge", "Trident", "Firefox"],
                Se = 0,
                De = 0;
            De < Ce.length;
            De += 1
        )
            if (xe && 0 <= navigator.userAgent.indexOf(Ce[De])) {
                Se = 1;
                break;
            }
        var Ae =
            xe && window.Promise
                ? function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              window.Promise.resolve().then(function () {
                                  (t = !1), e();
                              }));
                      };
                  }
                : function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              setTimeout(function () {
                                  (t = !1), e();
                              }, Se));
                      };
                  };
        function Ne(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function Ie(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
        }
        function ke(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function Oe(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var t = Ie(e),
                n = t.overflow,
                i = t.overflowX,
                r = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? e : Oe(ke(e));
        }
        var Le =
                xe && !(!window.MSInputMethodContext || !document.documentMode),
            je = xe && /MSIE 10/.test(navigator.userAgent);
        function He(e) {
            return 11 === e ? Le : 10 === e ? je : Le || je;
        }
        function Pe(e) {
            if (!e) return document.documentElement;
            for (
                var t = He(10) ? document.body : null,
                    n = e.offsetParent || null;
                n === t && e.nextElementSibling;

            )
                n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i
                ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
                  "static" === Ie(n, "position")
                    ? Pe(n)
                    : n
                : e
                ? e.ownerDocument.documentElement
                : document.documentElement;
        }
        function Fe(e) {
            return null !== e.parentNode ? Fe(e.parentNode) : e;
        }
        function qe(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var n =
                    e.compareDocumentPosition(t) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var s,
                a,
                l = o.commonAncestorContainer;
            if ((e !== l && t !== l) || i.contains(r))
                return "BODY" === (a = (s = l).nodeName) ||
                    ("HTML" !== a && Pe(s.firstElementChild) !== s)
                    ? Pe(l)
                    : l;
            var u = Fe(e);
            return u.host ? qe(u.host, t) : qe(e, Fe(t).host);
        }
        function Re(e) {
            var t =
                    "top" ===
                    (1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : "top")
                        ? "scrollTop"
                        : "scrollLeft",
                n = e.nodeName;
            if ("BODY" !== n && "HTML" !== n) return e[t];
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t];
        }
        function Me(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return (
                parseFloat(e["border" + n + "Width"], 10) +
                parseFloat(e["border" + i + "Width"], 10)
            );
        }
        function We(e, t, n, i) {
            return Math.max(
                t["offset" + e],
                t["scroll" + e],
                n["client" + e],
                n["offset" + e],
                n["scroll" + e],
                He(10)
                    ? parseInt(n["offset" + e]) +
                          parseInt(
                              i["margin" + ("Height" === e ? "Top" : "Left")]
                          ) +
                          parseInt(
                              i[
                                  "margin" +
                                      ("Height" === e ? "Bottom" : "Right")
                              ]
                          )
                    : 0
            );
        }
        function Be(e) {
            var t = e.body,
                n = e.documentElement,
                i = He(10) && getComputedStyle(n);
            return {
                height: We("Height", t, n, i),
                width: We("Width", t, n, i),
            };
        }
        var Ue = (function () {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i);
                    }
                }
                return function (e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e;
                };
            })(),
            Ke = function (e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            },
            $e =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) &&
                                (e[i] = n[i]);
                    }
                    return e;
                };
        function Qe(e) {
            return $e({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height,
            });
        }
        function Ve(e) {
            var t = {};
            try {
                if (He(10)) {
                    t = e.getBoundingClientRect();
                    var n = Re(e, "top"),
                        i = Re(e, "left");
                    (t.top += n),
                        (t.left += i),
                        (t.bottom += n),
                        (t.right += i);
                } else t = e.getBoundingClientRect();
            } catch (e) {}
            var r = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                },
                o = "HTML" === e.nodeName ? Be(e.ownerDocument) : {},
                s = o.width || e.clientWidth || r.right - r.left,
                a = o.height || e.clientHeight || r.bottom - r.top,
                l = e.offsetWidth - s,
                u = e.offsetHeight - a;
            if (l || u) {
                var c = Ie(e);
                (l -= Me(c, "x")),
                    (u -= Me(c, "y")),
                    (r.width -= l),
                    (r.height -= u);
            }
            return Qe(r);
        }
        function ze(e, t) {
            var n =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                i = He(10),
                r = "HTML" === t.nodeName,
                o = Ve(e),
                s = Ve(t),
                a = Oe(e),
                l = Ie(t),
                u = parseFloat(l.borderTopWidth, 10),
                c = parseFloat(l.borderLeftWidth, 10);
            n &&
                r &&
                ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
            var f = Qe({
                top: o.top - s.top - u,
                left: o.left - s.left - c,
                width: o.width,
                height: o.height,
            });
            if (((f.marginTop = 0), (f.marginLeft = 0), !i && r)) {
                var h = parseFloat(l.marginTop, 10),
                    d = parseFloat(l.marginLeft, 10);
                (f.top -= u - h),
                    (f.bottom -= u - h),
                    (f.left -= c - d),
                    (f.right -= c - d),
                    (f.marginTop = h),
                    (f.marginLeft = d);
            }
            return (
                (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
                    (f = (function (e, t) {
                        var n =
                                2 < arguments.length &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                            i = Re(t, "top"),
                            r = Re(t, "left"),
                            o = n ? -1 : 1;
                        return (
                            (e.top += i * o),
                            (e.bottom += i * o),
                            (e.left += r * o),
                            (e.right += r * o),
                            e
                        );
                    })(f, t)),
                f
            );
        }
        function Ye(e) {
            if (!e || !e.parentElement || He()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === Ie(t, "transform"); )
                t = t.parentElement;
            return t || document.documentElement;
        }
        function Xe(e, t, n, i) {
            var r =
                    4 < arguments.length &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                o = { top: 0, left: 0 },
                s = r ? Ye(e) : qe(e, t);
            if ("viewport" === i)
                o = (function (e) {
                    var t =
                            1 < arguments.length &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = ze(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : Re(n),
                        a = t ? 0 : Re(n, "left");
                    return Qe({
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: r,
                        height: o,
                    });
                })(s, r);
            else {
                var a = void 0;
                "scrollParent" === i
                    ? "BODY" === (a = Oe(ke(t))).nodeName &&
                      (a = e.ownerDocument.documentElement)
                    : (a =
                          "window" === i ? e.ownerDocument.documentElement : i);
                var l = ze(a, s, r);
                if (
                    "HTML" !== a.nodeName ||
                    (function e(t) {
                        var n = t.nodeName;
                        if ("BODY" === n || "HTML" === n) return !1;
                        if ("fixed" === Ie(t, "position")) return !0;
                        var i = ke(t);
                        return !!i && e(i);
                    })(s)
                )
                    o = l;
                else {
                    var u = Be(e.ownerDocument),
                        c = u.height,
                        f = u.width;
                    (o.top += l.top - l.marginTop),
                        (o.bottom = c + l.top),
                        (o.left += l.left - l.marginLeft),
                        (o.right = f + l.left);
                }
            }
            var h = "number" == typeof (n = n || 0);
            return (
                (o.left += h ? n : n.left || 0),
                (o.top += h ? n : n.top || 0),
                (o.right -= h ? n : n.right || 0),
                (o.bottom -= h ? n : n.bottom || 0),
                o
            );
        }
        function Ge(e, t, i, n, r) {
            var o =
                5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = Xe(i, n, o, r),
                a = {
                    top: { width: s.width, height: t.top - s.top },
                    right: { width: s.right - t.right, height: s.height },
                    bottom: { width: s.width, height: s.bottom - t.bottom },
                    left: { width: t.left - s.left, height: s.height },
                },
                l = Object.keys(a)
                    .map(function (e) {
                        return $e({ key: e }, a[e], {
                            area: ((t = a[e]), t.width * t.height),
                        });
                        var t;
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                u = l.filter(function (e) {
                    var t = e.width,
                        n = e.height;
                    return t >= i.clientWidth && n >= i.clientHeight;
                }),
                c = 0 < u.length ? u[0].key : l[0].key,
                f = e.split("-")[1];
            return c + (f ? "-" + f : "");
        }
        function Je(e, t, n) {
            var i =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
            return ze(n, i ? Ye(t) : qe(t, n), i);
        }
        function Ze(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n =
                    parseFloat(t.marginTop || 0) +
                    parseFloat(t.marginBottom || 0),
                i =
                    parseFloat(t.marginLeft || 0) +
                    parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function et(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function tt(e, t, n) {
            n = n.split("-")[0];
            var i = Ze(e),
                r = { width: i.width, height: i.height },
                o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left",
                a = o ? "left" : "top",
                l = o ? "height" : "width",
                u = o ? "width" : "height";
            return (
                (r[s] = t[s] + t[l] / 2 - i[l] / 2),
                (r[a] = n === a ? t[a] - i[u] : t[et(a)]),
                r
            );
        }
        function nt(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function it(e, n, t) {
            return (
                (void 0 === t
                    ? e
                    : e.slice(
                          0,
                          (function (e, t, n) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e[t] === n;
                                  });
                              var i = nt(e, function (e) {
                                  return e[t] === n;
                              });
                              return e.indexOf(i);
                          })(e, "name", t)
                      )
                ).forEach(function (e) {
                    e.function &&
                        console.warn(
                            "`modifier.function` is deprecated, use `modifier.fn`!"
                        );
                    var t = e.function || e.fn;
                    e.enabled &&
                        Ne(t) &&
                        ((n.offsets.popper = Qe(n.offsets.popper)),
                        (n.offsets.reference = Qe(n.offsets.reference)),
                        (n = t(n, e)));
                }),
                n
            );
        }
        function rt(e, n) {
            return e.some(function (e) {
                var t = e.name;
                return e.enabled && t === n;
            });
        }
        function ot(e) {
            for (
                var t = [!1, "ms", "Webkit", "Moz", "O"],
                    n = e.charAt(0).toUpperCase() + e.slice(1),
                    i = 0;
                i < t.length;
                i++
            ) {
                var r = t[i],
                    o = r ? "" + r + n : e;
                if (void 0 !== document.body.style[o]) return o;
            }
            return null;
        }
        function st(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function at(e, t, n, i) {
            (n.updateBound = i),
                st(e).addEventListener("resize", n.updateBound, {
                    passive: !0,
                });
            var r = Oe(e);
            return (
                (function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName,
                        s = o ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, { passive: !0 }),
                        o || e(Oe(s.parentNode), n, i, r),
                        r.push(s);
                })(r, "scroll", n.updateBound, n.scrollParents),
                (n.scrollElement = r),
                (n.eventsEnabled = !0),
                n
            );
        }
        function lt() {
            var e, t;
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                    ((e = this.reference),
                    (t = this.state),
                    st(e).removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound);
                    }),
                    (t.updateBound = null),
                    (t.scrollParents = []),
                    (t.scrollElement = null),
                    (t.eventsEnabled = !1),
                    t)));
        }
        function ut(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function ct(n, i) {
            Object.keys(i).forEach(function (e) {
                var t = "";
                -1 !==
                    [
                        "width",
                        "height",
                        "top",
                        "right",
                        "bottom",
                        "left",
                    ].indexOf(e) &&
                    ut(i[e]) &&
                    (t = "px"),
                    (n.style[e] = i[e] + t);
            });
        }
        var ft = xe && /Firefox/i.test(navigator.userAgent);
        function ht(e, t, n) {
            var i = nt(e, function (e) {
                    return e.name === t;
                }),
                r =
                    !!i &&
                    e.some(function (e) {
                        return e.name === n && e.enabled && e.order < i.order;
                    });
            if (!r) {
                var o = "`" + t + "`",
                    s = "`" + n + "`";
                console.warn(
                    s +
                        " modifier is required by " +
                        o +
                        " modifier in order to work, be sure to include it before " +
                        o +
                        "!"
                );
            }
            return r;
        }
        var dt = [
                "auto-start",
                "auto",
                "auto-end",
                "top-start",
                "top",
                "top-end",
                "right-start",
                "right",
                "right-end",
                "bottom-end",
                "bottom",
                "bottom-start",
                "left-end",
                "left",
                "left-start",
            ],
            pt = dt.slice(3);
        function gt(e) {
            var t =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n = pt.indexOf(e),
                i = pt.slice(n + 1).concat(pt.slice(0, n));
            return t ? i.reverse() : i;
        }
        var mt = "flip",
            vt = "clockwise",
            yt = "counterclockwise";
        function _t(e, r, o, t) {
            var s = [0, 0],
                a = -1 !== ["right", "left"].indexOf(t),
                n = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim();
                }),
                i = n.indexOf(
                    nt(n, function (e) {
                        return -1 !== e.search(/,|\s/);
                    })
                );
            n[i] &&
                -1 === n[i].indexOf(",") &&
                console.warn(
                    "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                );
            var l = /\s*,\s*|\s+/,
                u =
                    -1 !== i
                        ? [
                              n.slice(0, i).concat([n[i].split(l)[0]]),
                              [n[i].split(l)[1]].concat(n.slice(i + 1)),
                          ]
                        : [n];
            return (
                (u = u.map(function (e, t) {
                    var n = (1 === t ? !a : a) ? "height" : "width",
                        i = !1;
                    return e
                        .reduce(function (e, t) {
                            return "" === e[e.length - 1] &&
                                -1 !== ["+", "-"].indexOf(t)
                                ? ((e[e.length - 1] = t), (i = !0), e)
                                : i
                                ? ((e[e.length - 1] += t), (i = !1), e)
                                : e.concat(t);
                        }, [])
                        .map(function (e) {
                            return (function (e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    s = r[2];
                                if (!o) return e;
                                if (0 !== s.indexOf("%"))
                                    return "vh" !== s && "vw" !== s
                                        ? o
                                        : (("vh" === s
                                              ? Math.max(
                                                    document.documentElement
                                                        .clientHeight,
                                                    window.innerHeight || 0
                                                )
                                              : Math.max(
                                                    document.documentElement
                                                        .clientWidth,
                                                    window.innerWidth || 0
                                                )) /
                                              100) *
                                              o;
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i;
                                }
                                return (Qe(a)[t] / 100) * o;
                            })(e, n, r, o);
                        });
                })).forEach(function (n, i) {
                    n.forEach(function (e, t) {
                        ut(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
                    });
                }),
                s
            );
        }
        var bt = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = t.split("-")[1];
                            if (i) {
                                var r = e.offsets,
                                    o = r.reference,
                                    s = r.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    l = a ? "left" : "top",
                                    u = a ? "width" : "height",
                                    c = {
                                        start: Ke({}, l, o[l]),
                                        end: Ke({}, l, o[l] + o[u] - s[u]),
                                    };
                                e.offsets.popper = $e({}, s, c[i]);
                            }
                            return e;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.offset,
                                i = e.placement,
                                r = e.offsets,
                                o = r.popper,
                                s = r.reference,
                                a = i.split("-")[0],
                                l = void 0;
                            return (
                                (l = ut(+n) ? [+n, 0] : _t(n, o, s, a)),
                                "left" === a
                                    ? ((o.top += l[0]), (o.left -= l[1]))
                                    : "right" === a
                                    ? ((o.top += l[0]), (o.left += l[1]))
                                    : "top" === a
                                    ? ((o.left += l[0]), (o.top -= l[1]))
                                    : "bottom" === a &&
                                      ((o.left += l[0]), (o.top += l[1])),
                                (e.popper = o),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, i) {
                            var t =
                                i.boundariesElement || Pe(e.instance.popper);
                            e.instance.reference === t && (t = Pe(t));
                            var n = ot("transform"),
                                r = e.instance.popper.style,
                                o = r.top,
                                s = r.left,
                                a = r[n];
                            (r.top = ""), (r.left = ""), (r[n] = "");
                            var l = Xe(
                                e.instance.popper,
                                e.instance.reference,
                                i.padding,
                                t,
                                e.positionFixed
                            );
                            (r.top = o),
                                (r.left = s),
                                (r[n] = a),
                                (i.boundaries = l);
                            var u = i.priority,
                                c = e.offsets.popper,
                                f = {
                                    primary: function (e) {
                                        var t = c[e];
                                        return (
                                            c[e] < l[e] &&
                                                !i.escapeWithReference &&
                                                (t = Math.max(c[e], l[e])),
                                            Ke({}, e, t)
                                        );
                                    },
                                    secondary: function (e) {
                                        var t = "right" === e ? "left" : "top",
                                            n = c[t];
                                        return (
                                            c[e] > l[e] &&
                                                !i.escapeWithReference &&
                                                (n = Math.min(
                                                    c[t],
                                                    l[e] -
                                                        ("right" === e
                                                            ? c.width
                                                            : c.height)
                                                )),
                                            Ke({}, t, n)
                                        );
                                    },
                                };
                            return (
                                u.forEach(function (e) {
                                    var t =
                                        -1 !== ["left", "top"].indexOf(e)
                                            ? "primary"
                                            : "secondary";
                                    c = $e({}, c, f[t](e));
                                }),
                                (e.offsets.popper = c),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                n = t.popper,
                                i = t.reference,
                                r = e.placement.split("-")[0],
                                o = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(r),
                                a = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                u = s ? "width" : "height";
                            return (
                                n[a] < o(i[l]) &&
                                    (e.offsets.popper[l] = o(i[l]) - n[u]),
                                n[l] > o(i[a]) &&
                                    (e.offsets.popper[l] = o(i[a])),
                                e
                            );
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var n;
                            if (
                                !ht(
                                    e.instance.modifiers,
                                    "arrow",
                                    "keepTogether"
                                )
                            )
                                return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i)))
                                    return e;
                            } else if (!e.instance.popper.contains(i))
                                return (
                                    console.warn(
                                        "WARNING: `arrow.element` must be child of its popper element!"
                                    ),
                                    e
                                );
                            var r = e.placement.split("-")[0],
                                o = e.offsets,
                                s = o.popper,
                                a = o.reference,
                                l = -1 !== ["left", "right"].indexOf(r),
                                u = l ? "height" : "width",
                                c = l ? "Top" : "Left",
                                f = c.toLowerCase(),
                                h = l ? "left" : "top",
                                d = l ? "bottom" : "right",
                                p = Ze(i)[u];
                            a[d] - p < s[f] &&
                                (e.offsets.popper[f] -= s[f] - (a[d] - p)),
                                a[f] + p > s[d] &&
                                    (e.offsets.popper[f] += a[f] + p - s[d]),
                                (e.offsets.popper = Qe(e.offsets.popper));
                            var g = a[f] + a[u] / 2 - p / 2,
                                m = Ie(e.instance.popper),
                                v = parseFloat(m["margin" + c], 10),
                                y = parseFloat(m["border" + c + "Width"], 10),
                                _ = g - e.offsets.popper[f] - v - y;
                            return (
                                (_ = Math.max(Math.min(s[u] - p, _), 0)),
                                (e.arrowElement = i),
                                (e.offsets.arrow =
                                    (Ke((n = {}), f, Math.round(_)),
                                    Ke(n, h, ""),
                                    n)),
                                e
                            );
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (p, g) {
                            if (rt(p.instance.modifiers, "inner")) return p;
                            if (
                                p.flipped &&
                                p.placement === p.originalPlacement
                            )
                                return p;
                            var m = Xe(
                                    p.instance.popper,
                                    p.instance.reference,
                                    g.padding,
                                    g.boundariesElement,
                                    p.positionFixed
                                ),
                                v = p.placement.split("-")[0],
                                y = et(v),
                                _ = p.placement.split("-")[1] || "",
                                b = [];
                            switch (g.behavior) {
                                case mt:
                                    b = [v, y];
                                    break;
                                case vt:
                                    b = gt(v);
                                    break;
                                case yt:
                                    b = gt(v, !0);
                                    break;
                                default:
                                    b = g.behavior;
                            }
                            return (
                                b.forEach(function (e, t) {
                                    if (v !== e || b.length === t + 1) return p;
                                    (v = p.placement.split("-")[0]),
                                        (y = et(v));
                                    var n,
                                        i = p.offsets.popper,
                                        r = p.offsets.reference,
                                        o = Math.floor,
                                        s =
                                            ("left" === v &&
                                                o(i.right) > o(r.left)) ||
                                            ("right" === v &&
                                                o(i.left) < o(r.right)) ||
                                            ("top" === v &&
                                                o(i.bottom) > o(r.top)) ||
                                            ("bottom" === v &&
                                                o(i.top) < o(r.bottom)),
                                        a = o(i.left) < o(m.left),
                                        l = o(i.right) > o(m.right),
                                        u = o(i.top) < o(m.top),
                                        c = o(i.bottom) > o(m.bottom),
                                        f =
                                            ("left" === v && a) ||
                                            ("right" === v && l) ||
                                            ("top" === v && u) ||
                                            ("bottom" === v && c),
                                        h = -1 !== ["top", "bottom"].indexOf(v),
                                        d =
                                            !!g.flipVariations &&
                                            ((h && "start" === _ && a) ||
                                                (h && "end" === _ && l) ||
                                                (!h && "start" === _ && u) ||
                                                (!h && "end" === _ && c));
                                    (s || f || d) &&
                                        ((p.flipped = !0),
                                        (s || f) && (v = b[t + 1]),
                                        d &&
                                            (_ =
                                                "end" === (n = _)
                                                    ? "start"
                                                    : "start" === n
                                                    ? "end"
                                                    : n),
                                        (p.placement = v + (_ ? "-" + _ : "")),
                                        (p.offsets.popper = $e(
                                            {},
                                            p.offsets.popper,
                                            tt(
                                                p.instance.popper,
                                                p.offsets.reference,
                                                p.placement
                                            )
                                        )),
                                        (p = it(
                                            p.instance.modifiers,
                                            p,
                                            "flip"
                                        )));
                                }),
                                p
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = e.offsets,
                                r = i.popper,
                                o = i.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return (
                                (r[s ? "left" : "top"] =
                                    o[n] - (a ? r[s ? "width" : "height"] : 0)),
                                (e.placement = et(t)),
                                (e.offsets.popper = Qe(r)),
                                e
                            );
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (
                                !ht(
                                    e.instance.modifiers,
                                    "hide",
                                    "preventOverflow"
                                )
                            )
                                return e;
                            var t = e.offsets.reference,
                                n = nt(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (
                                t.bottom < n.top ||
                                t.left > n.right ||
                                t.top > n.bottom ||
                                t.right < n.left
                            ) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0),
                                    (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1),
                                    (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.x,
                                i = t.y,
                                r = e.offsets.popper,
                                o = nt(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration;
                            void 0 !== o &&
                                console.warn(
                                    "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                                );
                            var s,
                                a,
                                l,
                                u,
                                c,
                                f,
                                h,
                                d,
                                p,
                                g,
                                m,
                                v,
                                y,
                                _,
                                b = void 0 !== o ? o : t.gpuAcceleration,
                                w = Pe(e.instance.popper),
                                E = Ve(w),
                                T = { position: r.position },
                                x =
                                    ((s = e),
                                    (a = window.devicePixelRatio < 2 || !ft),
                                    (l = s.offsets),
                                    (u = l.popper),
                                    (c = l.reference),
                                    (f = Math.round),
                                    (h = Math.floor),
                                    (d = function (e) {
                                        return e;
                                    }),
                                    (p = f(c.width)),
                                    (g = f(u.width)),
                                    (m =
                                        -1 !==
                                        ["left", "right"].indexOf(s.placement)),
                                    (v = -1 !== s.placement.indexOf("-")),
                                    (_ = a ? f : d),
                                    {
                                        left: (y = a
                                            ? m || v || p % 2 == g % 2
                                                ? f
                                                : h
                                            : d)(
                                            p % 2 == 1 && g % 2 == 1 && !v && a
                                                ? u.left - 1
                                                : u.left
                                        ),
                                        top: _(u.top),
                                        bottom: _(u.bottom),
                                        right: y(u.right),
                                    }),
                                C = "bottom" === n ? "top" : "bottom",
                                S = "right" === i ? "left" : "right",
                                D = ot("transform"),
                                A = void 0,
                                N = void 0;
                            if (
                                ((N =
                                    "bottom" === C
                                        ? "HTML" === w.nodeName
                                            ? -w.clientHeight + x.bottom
                                            : -E.height + x.bottom
                                        : x.top),
                                (A =
                                    "right" === S
                                        ? "HTML" === w.nodeName
                                            ? -w.clientWidth + x.right
                                            : -E.width + x.right
                                        : x.left),
                                b && D)
                            )
                                (T[D] =
                                    "translate3d(" + A + "px, " + N + "px, 0)"),
                                    (T[C] = 0),
                                    (T[S] = 0),
                                    (T.willChange = "transform");
                            else {
                                var I = "bottom" === C ? -1 : 1,
                                    k = "right" === S ? -1 : 1;
                                (T[C] = N * I),
                                    (T[S] = A * k),
                                    (T.willChange = C + ", " + S);
                            }
                            var O = { "x-placement": e.placement };
                            return (
                                (e.attributes = $e({}, O, e.attributes)),
                                (e.styles = $e({}, T, e.styles)),
                                (e.arrowStyles = $e(
                                    {},
                                    e.offsets.arrow,
                                    e.arrowStyles
                                )),
                                e
                            );
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, n;
                            return (
                                ct(e.instance.popper, e.styles),
                                (t = e.instance.popper),
                                (n = e.attributes),
                                Object.keys(n).forEach(function (e) {
                                    !1 !== n[e]
                                        ? t.setAttribute(e, n[e])
                                        : t.removeAttribute(e);
                                }),
                                e.arrowElement &&
                                    Object.keys(e.arrowStyles).length &&
                                    ct(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, n, i, r) {
                            var o = Je(r, t, e, n.positionFixed),
                                s = Ge(
                                    n.placement,
                                    o,
                                    t,
                                    e,
                                    n.modifiers.flip.boundariesElement,
                                    n.modifiers.flip.padding
                                );
                            return (
                                t.setAttribute("x-placement", s),
                                ct(t, {
                                    position: n.positionFixed
                                        ? "fixed"
                                        : "absolute",
                                }),
                                n
                            );
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            wt = (function () {
                function o(e, t) {
                    var n = this,
                        i =
                            2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                    !(function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, o),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(n.update);
                        }),
                        (this.update = Ae(this.update.bind(this))),
                        (this.options = $e({}, o.Defaults, i)),
                        (this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: [],
                        }),
                        (this.reference = e && e.jquery ? e[0] : e),
                        (this.popper = t && t.jquery ? t[0] : t),
                        (this.options.modifiers = {}),
                        Object.keys(
                            $e({}, o.Defaults.modifiers, i.modifiers)
                        ).forEach(function (e) {
                            n.options.modifiers[e] = $e(
                                {},
                                o.Defaults.modifiers[e] || {},
                                i.modifiers ? i.modifiers[e] : {}
                            );
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return $e({ name: e }, n.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (e) {
                            e.enabled &&
                                Ne(e.onLoad) &&
                                e.onLoad(
                                    n.reference,
                                    n.popper,
                                    n.options,
                                    e,
                                    n.state
                                );
                        }),
                        this.update();
                    var r = this.options.eventsEnabled;
                    r && this.enableEventListeners(),
                        (this.state.eventsEnabled = r);
                }
                return (
                    Ue(o, [
                        {
                            key: "update",
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var e = {
                                            instance: this,
                                            styles: {},
                                            arrowStyles: {},
                                            attributes: {},
                                            flipped: !1,
                                            offsets: {},
                                        };
                                        (e.offsets.reference = Je(
                                            this.state,
                                            this.popper,
                                            this.reference,
                                            this.options.positionFixed
                                        )),
                                            (e.placement = Ge(
                                                this.options.placement,
                                                e.offsets.reference,
                                                this.popper,
                                                this.reference,
                                                this.options.modifiers.flip
                                                    .boundariesElement,
                                                this.options.modifiers.flip
                                                    .padding
                                            )),
                                            (e.originalPlacement = e.placement),
                                            (e.positionFixed =
                                                this.options.positionFixed),
                                            (e.offsets.popper = tt(
                                                this.popper,
                                                e.offsets.reference,
                                                e.placement
                                            )),
                                            (e.offsets.popper.position = this
                                                .options.positionFixed
                                                ? "fixed"
                                                : "absolute"),
                                            (e = it(this.modifiers, e)),
                                            this.state.isCreated
                                                ? this.options.onUpdate(e)
                                                : ((this.state.isCreated = !0),
                                                  this.options.onCreate(e));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        rt(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute(
                                                "x-placement"
                                            ),
                                            (this.popper.style.position = ""),
                                            (this.popper.style.top = ""),
                                            (this.popper.style.left = ""),
                                            (this.popper.style.right = ""),
                                            (this.popper.style.bottom = ""),
                                            (this.popper.style.willChange = ""),
                                            (this.popper.style[
                                                ot("transform")
                                            ] = "")),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy &&
                                            this.popper.parentNode.removeChild(
                                                this.popper
                                            ),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return function () {
                                    this.state.eventsEnabled ||
                                        (this.state = at(
                                            this.reference,
                                            this.options,
                                            this.state,
                                            this.scheduleUpdate
                                        ));
                                }.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return lt.call(this);
                            },
                        },
                    ]),
                    o
                );
            })();
        (wt.Utils = (
            "undefined" != typeof window ? window : global
        ).PopperUtils),
            (wt.placements = dt),
            (wt.Defaults = bt);
        var Et = "dropdown",
            Tt = "bs.dropdown",
            xt = "." + Tt,
            Ct = ".data-api",
            St = p.fn[Et],
            Dt = new RegExp("38|40|27"),
            At = {
                HIDE: "hide" + xt,
                HIDDEN: "hidden" + xt,
                SHOW: "show" + xt,
                SHOWN: "shown" + xt,
                CLICK: "click" + xt,
                CLICK_DATA_API: "click" + xt + Ct,
                KEYDOWN_DATA_API: "keydown" + xt + Ct,
                KEYUP_DATA_API: "keyup" + xt + Ct,
            },
            Nt = "disabled",
            It = "show",
            kt = "dropup",
            Ot = "dropright",
            Lt = "dropleft",
            jt = "dropdown-menu-right",
            Ht = "position-static",
            Pt = '[data-toggle="dropdown"]',
            Ft = ".dropdown form",
            qt = ".dropdown-menu",
            Rt = ".navbar-nav",
            Mt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Wt = "top-start",
            Bt = "top-end",
            Ut = "bottom-start",
            Kt = "bottom-end",
            $t = "right-start",
            Qt = "left-start",
            Vt = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
            },
            zt = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
            },
            Yt = (function () {
                function u(e, t) {
                    (this._element = e),
                        (this._popper = null),
                        (this._config = this._getConfig(t)),
                        (this._menu = this._getMenuElement()),
                        (this._inNavbar = this._detectNavbar()),
                        this._addEventListeners();
                }
                var e = u.prototype;
                return (
                    (e.toggle = function () {
                        if (
                            !this._element.disabled &&
                            !p(this._element).hasClass(Nt)
                        ) {
                            var e = u._getParentFromElement(this._element),
                                t = p(this._menu).hasClass(It);
                            if ((u._clearMenus(), !t)) {
                                var n = { relatedTarget: this._element },
                                    i = p.Event(At.SHOW, n);
                                if (
                                    (p(e).trigger(i), !i.isDefaultPrevented())
                                ) {
                                    if (!this._inNavbar) {
                                        if (void 0 === wt)
                                            throw new TypeError(
                                                "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                            );
                                        var r = this._element;
                                        "parent" === this._config.reference
                                            ? (r = e)
                                            : g.isElement(
                                                  this._config.reference
                                              ) &&
                                              ((r = this._config.reference),
                                              void 0 !==
                                                  this._config.reference
                                                      .jquery &&
                                                  (r =
                                                      this._config
                                                          .reference[0])),
                                            "scrollParent" !==
                                                this._config.boundary &&
                                                p(e).addClass(Ht),
                                            (this._popper = new wt(
                                                r,
                                                this._menu,
                                                this._getPopperConfig()
                                            ));
                                    }
                                    "ontouchstart" in
                                        document.documentElement &&
                                        0 === p(e).closest(Rt).length &&
                                        p(document.body)
                                            .children()
                                            .on("mouseover", null, p.noop),
                                        this._element.focus(),
                                        this._element.setAttribute(
                                            "aria-expanded",
                                            !0
                                        ),
                                        p(this._menu).toggleClass(It),
                                        p(e)
                                            .toggleClass(It)
                                            .trigger(p.Event(At.SHOWN, n));
                                }
                            }
                        }
                    }),
                    (e.show = function () {
                        if (
                            !(
                                this._element.disabled ||
                                p(this._element).hasClass(Nt) ||
                                p(this._menu).hasClass(It)
                            )
                        ) {
                            var e = { relatedTarget: this._element },
                                t = p.Event(At.SHOW, e),
                                n = u._getParentFromElement(this._element);
                            p(n).trigger(t),
                                t.isDefaultPrevented() ||
                                    (p(this._menu).toggleClass(It),
                                    p(n)
                                        .toggleClass(It)
                                        .trigger(p.Event(At.SHOWN, e)));
                        }
                    }),
                    (e.hide = function () {
                        if (
                            !this._element.disabled &&
                            !p(this._element).hasClass(Nt) &&
                            p(this._menu).hasClass(It)
                        ) {
                            var e = { relatedTarget: this._element },
                                t = p.Event(At.HIDE, e),
                                n = u._getParentFromElement(this._element);
                            p(n).trigger(t),
                                t.isDefaultPrevented() ||
                                    (p(this._menu).toggleClass(It),
                                    p(n)
                                        .toggleClass(It)
                                        .trigger(p.Event(At.HIDDEN, e)));
                        }
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, Tt),
                            p(this._element).off(xt),
                            (this._element = null),
                            (this._menu = null) !== this._popper &&
                                (this._popper.destroy(), (this._popper = null));
                    }),
                    (e.update = function () {
                        (this._inNavbar = this._detectNavbar()),
                            null !== this._popper &&
                                this._popper.scheduleUpdate();
                    }),
                    (e._addEventListeners = function () {
                        var t = this;
                        p(this._element).on(At.CLICK, function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        });
                    }),
                    (e._getConfig = function (e) {
                        return (
                            (e = l(
                                {},
                                this.constructor.Default,
                                p(this._element).data(),
                                e
                            )),
                            g.typeCheckConfig(
                                Et,
                                e,
                                this.constructor.DefaultType
                            ),
                            e
                        );
                    }),
                    (e._getMenuElement = function () {
                        if (!this._menu) {
                            var e = u._getParentFromElement(this._element);
                            e && (this._menu = e.querySelector(qt));
                        }
                        return this._menu;
                    }),
                    (e._getPlacement = function () {
                        var e = p(this._element.parentNode),
                            t = Ut;
                        return (
                            e.hasClass(kt)
                                ? ((t = Wt),
                                  p(this._menu).hasClass(jt) && (t = Bt))
                                : e.hasClass(Ot)
                                ? (t = $t)
                                : e.hasClass(Lt)
                                ? (t = Qt)
                                : p(this._menu).hasClass(jt) && (t = Kt),
                            t
                        );
                    }),
                    (e._detectNavbar = function () {
                        return 0 < p(this._element).closest(".navbar").length;
                    }),
                    (e._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (e.fn = function (e) {
                                      return (
                                          (e.offsets = l(
                                              {},
                                              e.offsets,
                                              t._config.offset(
                                                  e.offsets,
                                                  t._element
                                              ) || {}
                                          )),
                                          e
                                      );
                                  })
                                : (e.offset = this._config.offset),
                            e
                        );
                    }),
                    (e._getPopperConfig = function () {
                        var e = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: { enabled: this._config.flip },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary,
                                },
                            },
                        };
                        return (
                            "static" === this._config.display &&
                                (e.modifiers.applyStyle = { enabled: !1 }),
                            e
                        );
                    }),
                    (u._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = p(this).data(Tt);
                            if (
                                (e ||
                                    ((e = new u(
                                        this,
                                        "object" == typeof t ? t : null
                                    )),
                                    p(this).data(Tt, e)),
                                "string" == typeof t)
                            ) {
                                if (void 0 === e[t])
                                    throw new TypeError(
                                        'No method named "' + t + '"'
                                    );
                                e[t]();
                            }
                        });
                    }),
                    (u._clearMenus = function (e) {
                        if (
                            !e ||
                            (3 !== e.which &&
                                ("keyup" !== e.type || 9 === e.which))
                        )
                            for (
                                var t = [].slice.call(
                                        document.querySelectorAll(Pt)
                                    ),
                                    n = 0,
                                    i = t.length;
                                n < i;
                                n++
                            ) {
                                var r = u._getParentFromElement(t[n]),
                                    o = p(t[n]).data(Tt),
                                    s = { relatedTarget: t[n] };
                                if (
                                    (e &&
                                        "click" === e.type &&
                                        (s.clickEvent = e),
                                    o)
                                ) {
                                    var a = o._menu;
                                    if (
                                        p(r).hasClass(It) &&
                                        !(
                                            e &&
                                            (("click" === e.type &&
                                                /input|textarea/i.test(
                                                    e.target.tagName
                                                )) ||
                                                ("keyup" === e.type &&
                                                    9 === e.which)) &&
                                            p.contains(r, e.target)
                                        )
                                    ) {
                                        var l = p.Event(At.HIDE, s);
                                        p(r).trigger(l),
                                            l.isDefaultPrevented() ||
                                                ("ontouchstart" in
                                                    document.documentElement &&
                                                    p(document.body)
                                                        .children()
                                                        .off(
                                                            "mouseover",
                                                            null,
                                                            p.noop
                                                        ),
                                                t[n].setAttribute(
                                                    "aria-expanded",
                                                    "false"
                                                ),
                                                p(a).removeClass(It),
                                                p(r)
                                                    .removeClass(It)
                                                    .trigger(
                                                        p.Event(At.HIDDEN, s)
                                                    ));
                                    }
                                }
                            }
                    }),
                    (u._getParentFromElement = function (e) {
                        var t,
                            n = g.getSelectorFromElement(e);
                        return (
                            n && (t = document.querySelector(n)),
                            t || e.parentNode
                        );
                    }),
                    (u._dataApiKeydownHandler = function (e) {
                        if (
                            (/input|textarea/i.test(e.target.tagName)
                                ? !(
                                      32 === e.which ||
                                      (27 !== e.which &&
                                          ((40 !== e.which && 38 !== e.which) ||
                                              p(e.target).closest(qt).length))
                                  )
                                : Dt.test(e.which)) &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            !this.disabled && !p(this).hasClass(Nt))
                        ) {
                            var t = u._getParentFromElement(this),
                                n = p(t).hasClass(It);
                            if (
                                n &&
                                (!n || (27 !== e.which && 32 !== e.which))
                            ) {
                                var i = [].slice.call(t.querySelectorAll(Mt));
                                if (0 !== i.length) {
                                    var r = i.indexOf(e.target);
                                    38 === e.which && 0 < r && r--,
                                        40 === e.which &&
                                            r < i.length - 1 &&
                                            r++,
                                        r < 0 && (r = 0),
                                        i[r].focus();
                                }
                            } else {
                                if (27 === e.which) {
                                    var o = t.querySelector(Pt);
                                    p(o).trigger("focus");
                                }
                                p(this).trigger("click");
                            }
                        }
                    }),
                    s(u, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Vt;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return zt;
                            },
                        },
                    ]),
                    u
                );
            })();
        p(document)
            .on(At.KEYDOWN_DATA_API, Pt, Yt._dataApiKeydownHandler)
            .on(At.KEYDOWN_DATA_API, qt, Yt._dataApiKeydownHandler)
            .on(At.CLICK_DATA_API + " " + At.KEYUP_DATA_API, Yt._clearMenus)
            .on(At.CLICK_DATA_API, Pt, function (e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    Yt._jQueryInterface.call(p(this), "toggle");
            })
            .on(At.CLICK_DATA_API, Ft, function (e) {
                e.stopPropagation();
            }),
            (p.fn[Et] = Yt._jQueryInterface),
            (p.fn[Et].Constructor = Yt),
            (p.fn[Et].noConflict = function () {
                return (p.fn[Et] = St), Yt._jQueryInterface;
            });
        var Xt = "modal",
            Gt = "bs.modal",
            Jt = "." + Gt,
            Zt = p.fn[Xt],
            en = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            tn = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean",
            },
            nn = {
                HIDE: "hide" + Jt,
                HIDDEN: "hidden" + Jt,
                SHOW: "show" + Jt,
                SHOWN: "shown" + Jt,
                FOCUSIN: "focusin" + Jt,
                RESIZE: "resize" + Jt,
                CLICK_DISMISS: "click.dismiss" + Jt,
                KEYDOWN_DISMISS: "keydown.dismiss" + Jt,
                MOUSEUP_DISMISS: "mouseup.dismiss" + Jt,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + Jt,
                CLICK_DATA_API: "click" + Jt + ".data-api",
            },
            rn = "modal-dialog-scrollable",
            on = "modal-scrollbar-measure",
            sn = "modal-backdrop",
            an = "modal-open",
            ln = "fade",
            un = "show",
            cn = ".modal-dialog",
            fn = ".modal-body",
            hn = '[data-toggle="modal"]',
            dn = '[data-dismiss="modal"]',
            pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            gn = ".sticky-top",
            mn = (function () {
                function r(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = e.querySelector(cn)),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var e = r.prototype;
                return (
                    (e.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (e.show = function (e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            p(this._element).hasClass(ln) &&
                                (this._isTransitioning = !0);
                            var n = p.Event(nn.SHOW, { relatedTarget: e });
                            p(this._element).trigger(n),
                                this._isShown ||
                                    n.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    p(this._element).on(
                                        nn.CLICK_DISMISS,
                                        dn,
                                        function (e) {
                                            return t.hide(e);
                                        }
                                    ),
                                    p(this._dialog).on(
                                        nn.MOUSEDOWN_DISMISS,
                                        function () {
                                            p(t._element).one(
                                                nn.MOUSEUP_DISMISS,
                                                function (e) {
                                                    p(e.target).is(
                                                        t._element
                                                    ) &&
                                                        (t._ignoreBackdropClick =
                                                            !0);
                                                }
                                            );
                                        }
                                    ),
                                    this._showBackdrop(function () {
                                        return t._showElement(e);
                                    }));
                        }
                    }),
                    (e.hide = function (e) {
                        var t = this;
                        if (
                            (e && e.preventDefault(),
                            this._isShown && !this._isTransitioning)
                        ) {
                            var n = p.Event(nn.HIDE);
                            if (
                                (p(this._element).trigger(n),
                                this._isShown && !n.isDefaultPrevented())
                            ) {
                                this._isShown = !1;
                                var i = p(this._element).hasClass(ln);
                                if (
                                    (i && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    p(document).off(nn.FOCUSIN),
                                    p(this._element).removeClass(un),
                                    p(this._element).off(nn.CLICK_DISMISS),
                                    p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                                    i)
                                ) {
                                    var r = g.getTransitionDurationFromElement(
                                        this._element
                                    );
                                    p(this._element)
                                        .one(g.TRANSITION_END, function (e) {
                                            return t._hideModal(e);
                                        })
                                        .emulateTransitionEnd(r);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (e.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (
                            e
                        ) {
                            return p(e).off(Jt);
                        }),
                            p(document).off(nn.FOCUSIN),
                            p.removeData(this._element, Gt),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (e.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (e._getConfig = function (e) {
                        return (
                            (e = l({}, en, e)), g.typeCheckConfig(Xt, e, tn), e
                        );
                    }),
                    (e._showElement = function (e) {
                        var t = this,
                            n = p(this._element).hasClass(ln);
                        (this._element.parentNode &&
                            this._element.parentNode.nodeType ===
                                Node.ELEMENT_NODE) ||
                            document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            p(this._dialog).hasClass(rn)
                                ? (this._dialog.querySelector(fn).scrollTop = 0)
                                : (this._element.scrollTop = 0),
                            n && g.reflow(this._element),
                            p(this._element).addClass(un),
                            this._config.focus && this._enforceFocus();
                        var i = p.Event(nn.SHOWN, { relatedTarget: e }),
                            r = function () {
                                t._config.focus && t._element.focus(),
                                    (t._isTransitioning = !1),
                                    p(t._element).trigger(i);
                            };
                        if (n) {
                            var o = g.getTransitionDurationFromElement(
                                this._dialog
                            );
                            p(this._dialog)
                                .one(g.TRANSITION_END, r)
                                .emulateTransitionEnd(o);
                        } else r();
                    }),
                    (e._enforceFocus = function () {
                        var t = this;
                        p(document)
                            .off(nn.FOCUSIN)
                            .on(nn.FOCUSIN, function (e) {
                                document !== e.target &&
                                    t._element !== e.target &&
                                    0 === p(t._element).has(e.target).length &&
                                    t._element.focus();
                            });
                    }),
                    (e._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard
                            ? p(this._element).on(
                                  nn.KEYDOWN_DISMISS,
                                  function (e) {
                                      27 === e.which &&
                                          (e.preventDefault(), t.hide());
                                  }
                              )
                            : this._isShown ||
                              p(this._element).off(nn.KEYDOWN_DISMISS);
                    }),
                    (e._setResizeEvent = function () {
                        var t = this;
                        this._isShown
                            ? p(window).on(nn.RESIZE, function (e) {
                                  return t.handleUpdate(e);
                              })
                            : p(window).off(nn.RESIZE);
                    }),
                    (e._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                p(document.body).removeClass(an),
                                    e._resetAdjustments(),
                                    e._resetScrollbar(),
                                    p(e._element).trigger(nn.HIDDEN);
                            });
                    }),
                    (e._removeBackdrop = function () {
                        this._backdrop &&
                            (p(this._backdrop).remove(),
                            (this._backdrop = null));
                    }),
                    (e._showBackdrop = function (e) {
                        var t = this,
                            n = p(this._element).hasClass(ln) ? ln : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop =
                                    document.createElement("div")),
                                (this._backdrop.className = sn),
                                n && this._backdrop.classList.add(n),
                                p(this._backdrop).appendTo(document.body),
                                p(this._element).on(
                                    nn.CLICK_DISMISS,
                                    function (e) {
                                        t._ignoreBackdropClick
                                            ? (t._ignoreBackdropClick = !1)
                                            : e.target === e.currentTarget &&
                                              ("static" === t._config.backdrop
                                                  ? t._element.focus()
                                                  : t.hide());
                                    }
                                ),
                                n && g.reflow(this._backdrop),
                                p(this._backdrop).addClass(un),
                                !e)
                            )
                                return;
                            if (!n) return void e();
                            var i = g.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            p(this._backdrop)
                                .one(g.TRANSITION_END, e)
                                .emulateTransitionEnd(i);
                        } else if (!this._isShown && this._backdrop) {
                            p(this._backdrop).removeClass(un);
                            var r = function () {
                                t._removeBackdrop(), e && e();
                            };
                            if (p(this._element).hasClass(ln)) {
                                var o = g.getTransitionDurationFromElement(
                                    this._backdrop
                                );
                                p(this._backdrop)
                                    .one(g.TRANSITION_END, r)
                                    .emulateTransitionEnd(o);
                            } else r();
                        } else e && e();
                    }),
                    (e._adjustDialog = function () {
                        var e =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        !this._isBodyOverflowing &&
                            e &&
                            (this._element.style.paddingLeft =
                                this._scrollbarWidth + "px"),
                            this._isBodyOverflowing &&
                                !e &&
                                (this._element.style.paddingRight =
                                    this._scrollbarWidth + "px");
                    }),
                    (e._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""),
                            (this._element.style.paddingRight = "");
                    }),
                    (e._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing =
                            e.left + e.right < window.innerWidth),
                            (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (e._setScrollbar = function () {
                        var r = this;
                        if (this._isBodyOverflowing) {
                            var e = [].slice.call(
                                    document.querySelectorAll(pn)
                                ),
                                t = [].slice.call(
                                    document.querySelectorAll(gn)
                                );
                            p(e).each(function (e, t) {
                                var n = t.style.paddingRight,
                                    i = p(t).css("padding-right");
                                p(t)
                                    .data("padding-right", n)
                                    .css(
                                        "padding-right",
                                        parseFloat(i) + r._scrollbarWidth + "px"
                                    );
                            }),
                                p(t).each(function (e, t) {
                                    var n = t.style.marginRight,
                                        i = p(t).css("margin-right");
                                    p(t)
                                        .data("margin-right", n)
                                        .css(
                                            "margin-right",
                                            parseFloat(i) -
                                                r._scrollbarWidth +
                                                "px"
                                        );
                                });
                            var n = document.body.style.paddingRight,
                                i = p(document.body).css("padding-right");
                            p(document.body)
                                .data("padding-right", n)
                                .css(
                                    "padding-right",
                                    parseFloat(i) + this._scrollbarWidth + "px"
                                );
                        }
                        p(document.body).addClass(an);
                    }),
                    (e._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(pn));
                        p(e).each(function (e, t) {
                            var n = p(t).data("padding-right");
                            p(t).removeData("padding-right"),
                                (t.style.paddingRight = n || "");
                        });
                        var t = [].slice.call(
                            document.querySelectorAll("" + gn)
                        );
                        p(t).each(function (e, t) {
                            var n = p(t).data("margin-right");
                            void 0 !== n &&
                                p(t)
                                    .css("margin-right", n)
                                    .removeData("margin-right");
                        });
                        var n = p(document.body).data("padding-right");
                        p(document.body).removeData("padding-right"),
                            (document.body.style.paddingRight = n || "");
                    }),
                    (e._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = on), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (r._jQueryInterface = function (n, i) {
                        return this.each(function () {
                            var e = p(this).data(Gt),
                                t = l(
                                    {},
                                    en,
                                    p(this).data(),
                                    "object" == typeof n && n ? n : {}
                                );
                            if (
                                (e ||
                                    ((e = new r(this, t)), p(this).data(Gt, e)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === e[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                e[n](i);
                            } else t.show && e.show(i);
                        });
                    }),
                    s(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return en;
                            },
                        },
                    ]),
                    r
                );
            })();
        p(document).on(nn.CLICK_DATA_API, hn, function (e) {
            var t,
                n = this,
                i = g.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = p(t).data(Gt)
                ? "toggle"
                : l({}, p(t).data(), p(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
                e.preventDefault();
            var o = p(t).one(nn.SHOW, function (e) {
                e.isDefaultPrevented() ||
                    o.one(nn.HIDDEN, function () {
                        p(n).is(":visible") && n.focus();
                    });
            });
            mn._jQueryInterface.call(p(t), r, this);
        }),
            (p.fn[Xt] = mn._jQueryInterface),
            (p.fn[Xt].Constructor = mn),
            (p.fn[Xt].noConflict = function () {
                return (p.fn[Xt] = Zt), mn._jQueryInterface;
            });
        var vn = [
                "background",
                "cite",
                "href",
                "itemtype",
                "longdesc",
                "poster",
                "src",
                "xlink:href",
            ],
            yn = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            _n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            bn =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function wn(e, s, t) {
            if (0 === e.length) return e;
            if (t && "function" == typeof t) return t(e);
            for (
                var n = new window.DOMParser().parseFromString(e, "text/html"),
                    a = Object.keys(s),
                    l = [].slice.call(n.body.querySelectorAll("*")),
                    i = function (e, t) {
                        var n = l[e],
                            i = n.nodeName.toLowerCase();
                        if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                            return n.parentNode.removeChild(n), "continue";
                        var r = [].slice.call(n.attributes),
                            o = [].concat(s["*"] || [], s[i] || []);
                        r.forEach(function (e) {
                            (function (e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n))
                                    return (
                                        -1 === vn.indexOf(n) ||
                                        Boolean(
                                            e.nodeValue.match(_n) ||
                                                e.nodeValue.match(bn)
                                        )
                                    );
                                for (
                                    var i = t.filter(function (e) {
                                            return e instanceof RegExp;
                                        }),
                                        r = 0,
                                        o = i.length;
                                    r < o;
                                    r++
                                )
                                    if (n.match(i[r])) return !0;
                                return !1;
                            })(e, o) || n.removeAttribute(e.nodeName);
                        });
                    },
                    r = 0,
                    o = l.length;
                r < o;
                r++
            )
                i(r);
            return n.body.innerHTML;
        }
        var En = "tooltip",
            Tn = "bs.tooltip",
            xn = "." + Tn,
            Cn = p.fn[En],
            Sn = "bs-tooltip",
            Dn = new RegExp("(^|\\s)" + Sn + "\\S+", "g"),
            An = ["sanitize", "whiteList", "sanitizeFn"],
            Nn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
            },
            In = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left",
            },
            kn = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: yn,
            },
            On = "show",
            Ln = "out",
            jn = {
                HIDE: "hide" + xn,
                HIDDEN: "hidden" + xn,
                SHOW: "show" + xn,
                SHOWN: "shown" + xn,
                INSERTED: "inserted" + xn,
                CLICK: "click" + xn,
                FOCUSIN: "focusin" + xn,
                FOCUSOUT: "focusout" + xn,
                MOUSEENTER: "mouseenter" + xn,
                MOUSELEAVE: "mouseleave" + xn,
            },
            Hn = "fade",
            Pn = "show",
            Fn = ".tooltip-inner",
            qn = ".arrow",
            Rn = "hover",
            Mn = "focus",
            Wn = "click",
            Bn = "manual",
            Un = (function () {
                function i(e, t) {
                    if (void 0 === wt)
                        throw new TypeError(
                            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                        );
                    (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._hoverState = ""),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this.element = e),
                        (this.config = this._getConfig(t)),
                        (this.tip = null),
                        this._setListeners();
                }
                var e = i.prototype;
                return (
                    (e.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (e.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (e.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (e.toggle = function (e) {
                        if (this._isEnabled)
                            if (e) {
                                var t = this.constructor.DATA_KEY,
                                    n = p(e.currentTarget).data(t);
                                n ||
                                    ((n = new this.constructor(
                                        e.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    p(e.currentTarget).data(t, n)),
                                    (n._activeTrigger.click =
                                        !n._activeTrigger.click),
                                    n._isWithActiveTrigger()
                                        ? n._enter(null, n)
                                        : n._leave(null, n);
                            } else {
                                if (p(this.getTipElement()).hasClass(Pn))
                                    return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (e.dispose = function () {
                        clearTimeout(this._timeout),
                            p.removeData(
                                this.element,
                                this.constructor.DATA_KEY
                            ),
                            p(this.element).off(this.constructor.EVENT_KEY),
                            p(this.element)
                                .closest(".modal")
                                .off("hide.bs.modal"),
                            this.tip && p(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null) !== this._popper &&
                                this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (e.show = function () {
                        var t = this;
                        if ("none" === p(this.element).css("display"))
                            throw new Error(
                                "Please use show on visible elements"
                            );
                        var e = p.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            p(this.element).trigger(e);
                            var n = g.findShadowRoot(this.element),
                                i = p.contains(
                                    null !== n
                                        ? n
                                        : this.element.ownerDocument
                                              .documentElement,
                                    this.element
                                );
                            if (e.isDefaultPrevented() || !i) return;
                            var r = this.getTipElement(),
                                o = g.getUID(this.constructor.NAME);
                            r.setAttribute("id", o),
                                this.element.setAttribute(
                                    "aria-describedby",
                                    o
                                ),
                                this.setContent(),
                                this.config.animation && p(r).addClass(Hn);
                            var s =
                                    "function" == typeof this.config.placement
                                        ? this.config.placement.call(
                                              this,
                                              r,
                                              this.element
                                          )
                                        : this.config.placement,
                                a = this._getAttachment(s);
                            this.addAttachmentClass(a);
                            var l = this._getContainer();
                            p(r).data(this.constructor.DATA_KEY, this),
                                p.contains(
                                    this.element.ownerDocument.documentElement,
                                    this.tip
                                ) || p(r).appendTo(l),
                                p(this.element).trigger(
                                    this.constructor.Event.INSERTED
                                ),
                                (this._popper = new wt(this.element, r, {
                                    placement: a,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior:
                                                this.config.fallbackPlacement,
                                        },
                                        arrow: { element: qn },
                                        preventOverflow: {
                                            boundariesElement:
                                                this.config.boundary,
                                        },
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement &&
                                            t._handlePopperPlacementChange(e);
                                    },
                                    onUpdate: function (e) {
                                        return t._handlePopperPlacementChange(
                                            e
                                        );
                                    },
                                })),
                                p(r).addClass(Pn),
                                "ontouchstart" in document.documentElement &&
                                    p(document.body)
                                        .children()
                                        .on("mouseover", null, p.noop);
                            var u = function () {
                                t.config.animation && t._fixTransition();
                                var e = t._hoverState;
                                (t._hoverState = null),
                                    p(t.element).trigger(
                                        t.constructor.Event.SHOWN
                                    ),
                                    e === Ln && t._leave(null, t);
                            };
                            if (p(this.tip).hasClass(Hn)) {
                                var c = g.getTransitionDurationFromElement(
                                    this.tip
                                );
                                p(this.tip)
                                    .one(g.TRANSITION_END, u)
                                    .emulateTransitionEnd(c);
                            } else u();
                        }
                    }),
                    (e.hide = function (e) {
                        var t = this,
                            n = this.getTipElement(),
                            i = p.Event(this.constructor.Event.HIDE),
                            r = function () {
                                t._hoverState !== On &&
                                    n.parentNode &&
                                    n.parentNode.removeChild(n),
                                    t._cleanTipClass(),
                                    t.element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    p(t.element).trigger(
                                        t.constructor.Event.HIDDEN
                                    ),
                                    null !== t._popper && t._popper.destroy(),
                                    e && e();
                            };
                        if (
                            (p(this.element).trigger(i),
                            !i.isDefaultPrevented())
                        ) {
                            if (
                                (p(n).removeClass(Pn),
                                "ontouchstart" in document.documentElement &&
                                    p(document.body)
                                        .children()
                                        .off("mouseover", null, p.noop),
                                (this._activeTrigger[Wn] = !1),
                                (this._activeTrigger[Mn] = !1),
                                (this._activeTrigger[Rn] = !1),
                                p(this.tip).hasClass(Hn))
                            ) {
                                var o = g.getTransitionDurationFromElement(n);
                                p(n)
                                    .one(g.TRANSITION_END, r)
                                    .emulateTransitionEnd(o);
                            } else r();
                            this._hoverState = "";
                        }
                    }),
                    (e.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (e.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (e.addAttachmentClass = function (e) {
                        p(this.getTipElement()).addClass(Sn + "-" + e);
                    }),
                    (e.getTipElement = function () {
                        return (
                            (this.tip = this.tip || p(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (e.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(
                            p(e.querySelectorAll(Fn)),
                            this.getTitle()
                        ),
                            p(e).removeClass(Hn + " " + Pn);
                    }),
                    (e.setElementContent = function (e, t) {
                        "object" != typeof t || (!t.nodeType && !t.jquery)
                            ? this.config.html
                                ? (this.config.sanitize &&
                                      (t = wn(
                                          t,
                                          this.config.whiteList,
                                          this.config.sanitizeFn
                                      )),
                                  e.html(t))
                                : e.text(t)
                            : this.config.html
                            ? p(t).parent().is(e) || e.empty().append(t)
                            : e.text(p(t).text());
                    }),
                    (e.getTitle = function () {
                        var e = this.element.getAttribute(
                            "data-original-title"
                        );
                        return (
                            e ||
                                (e =
                                    "function" == typeof this.config.title
                                        ? this.config.title.call(this.element)
                                        : this.config.title),
                            e
                        );
                    }),
                    (e._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (e.fn = function (e) {
                                      return (
                                          (e.offsets = l(
                                              {},
                                              e.offsets,
                                              t.config.offset(
                                                  e.offsets,
                                                  t.element
                                              ) || {}
                                          )),
                                          e
                                      );
                                  })
                                : (e.offset = this.config.offset),
                            e
                        );
                    }),
                    (e._getContainer = function () {
                        return !1 === this.config.container
                            ? document.body
                            : g.isElement(this.config.container)
                            ? p(this.config.container)
                            : p(document).find(this.config.container);
                    }),
                    (e._getAttachment = function (e) {
                        return In[e.toUpperCase()];
                    }),
                    (e._setListeners = function () {
                        var i = this;
                        this.config.trigger.split(" ").forEach(function (e) {
                            if ("click" === e)
                                p(i.element).on(
                                    i.constructor.Event.CLICK,
                                    i.config.selector,
                                    function (e) {
                                        return i.toggle(e);
                                    }
                                );
                            else if (e !== Bn) {
                                var t =
                                        e === Rn
                                            ? i.constructor.Event.MOUSEENTER
                                            : i.constructor.Event.FOCUSIN,
                                    n =
                                        e === Rn
                                            ? i.constructor.Event.MOUSELEAVE
                                            : i.constructor.Event.FOCUSOUT;
                                p(i.element)
                                    .on(t, i.config.selector, function (e) {
                                        return i._enter(e);
                                    })
                                    .on(n, i.config.selector, function (e) {
                                        return i._leave(e);
                                    });
                            }
                        }),
                            p(this.element)
                                .closest(".modal")
                                .on("hide.bs.modal", function () {
                                    i.element && i.hide();
                                }),
                            this.config.selector
                                ? (this.config = l({}, this.config, {
                                      trigger: "manual",
                                      selector: "",
                                  }))
                                : this._fixTitle();
                    }),
                    (e._fixTitle = function () {
                        var e = typeof this.element.getAttribute(
                            "data-original-title"
                        );
                        (this.element.getAttribute("title") ||
                            "string" !== e) &&
                            (this.element.setAttribute(
                                "data-original-title",
                                this.element.getAttribute("title") || ""
                            ),
                            this.element.setAttribute("title", ""));
                    }),
                    (e._enter = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || p(e.currentTarget).data(n)) ||
                            ((t = new this.constructor(
                                e.currentTarget,
                                this._getDelegateConfig()
                            )),
                            p(e.currentTarget).data(n, t)),
                            e &&
                                (t._activeTrigger[
                                    "focusin" === e.type ? Mn : Rn
                                ] = !0),
                            p(t.getTipElement()).hasClass(Pn) ||
                            t._hoverState === On
                                ? (t._hoverState = On)
                                : (clearTimeout(t._timeout),
                                  (t._hoverState = On),
                                  t.config.delay && t.config.delay.show
                                      ? (t._timeout = setTimeout(function () {
                                            t._hoverState === On && t.show();
                                        }, t.config.delay.show))
                                      : t.show());
                    }),
                    (e._leave = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || p(e.currentTarget).data(n)) ||
                            ((t = new this.constructor(
                                e.currentTarget,
                                this._getDelegateConfig()
                            )),
                            p(e.currentTarget).data(n, t)),
                            e &&
                                (t._activeTrigger[
                                    "focusout" === e.type ? Mn : Rn
                                ] = !1),
                            t._isWithActiveTrigger() ||
                                (clearTimeout(t._timeout),
                                (t._hoverState = Ln),
                                t.config.delay && t.config.delay.hide
                                    ? (t._timeout = setTimeout(function () {
                                          t._hoverState === Ln && t.hide();
                                      }, t.config.delay.hide))
                                    : t.hide());
                    }),
                    (e._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1;
                    }),
                    (e._getConfig = function (e) {
                        var t = p(this.element).data();
                        return (
                            Object.keys(t).forEach(function (e) {
                                -1 !== An.indexOf(e) && delete t[e];
                            }),
                            "number" ==
                                typeof (e = l(
                                    {},
                                    this.constructor.Default,
                                    t,
                                    "object" == typeof e && e ? e : {}
                                )).delay &&
                                (e.delay = { show: e.delay, hide: e.delay }),
                            "number" == typeof e.title &&
                                (e.title = e.title.toString()),
                            "number" == typeof e.content &&
                                (e.content = e.content.toString()),
                            g.typeCheckConfig(
                                En,
                                e,
                                this.constructor.DefaultType
                            ),
                            e.sanitize &&
                                (e.template = wn(
                                    e.template,
                                    e.whiteList,
                                    e.sanitizeFn
                                )),
                            e
                        );
                    }),
                    (e._getDelegateConfig = function () {
                        var e = {};
                        if (this.config)
                            for (var t in this.config)
                                this.constructor.Default[t] !==
                                    this.config[t] && (e[t] = this.config[t]);
                        return e;
                    }),
                    (e._cleanTipClass = function () {
                        var e = p(this.getTipElement()),
                            t = e.attr("class").match(Dn);
                        null !== t && t.length && e.removeClass(t.join(""));
                    }),
                    (e._handlePopperPlacementChange = function (e) {
                        var t = e.instance;
                        (this.tip = t.popper),
                            this._cleanTipClass(),
                            this.addAttachmentClass(
                                this._getAttachment(e.placement)
                            );
                    }),
                    (e._fixTransition = function () {
                        var e = this.getTipElement(),
                            t = this.config.animation;
                        null === e.getAttribute("x-placement") &&
                            (p(e).removeClass(Hn),
                            (this.config.animation = !1),
                            this.hide(),
                            this.show(),
                            (this.config.animation = t));
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = p(this).data(Tn),
                                t = "object" == typeof n && n;
                            if (
                                (e || !/dispose|hide/.test(n)) &&
                                (e ||
                                    ((e = new i(this, t)), p(this).data(Tn, e)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === e[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                e[n]();
                            }
                        });
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return kn;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return En;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Tn;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return jn;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return xn;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Nn;
                            },
                        },
                    ]),
                    i
                );
            })();
        (p.fn[En] = Un._jQueryInterface),
            (p.fn[En].Constructor = Un),
            (p.fn[En].noConflict = function () {
                return (p.fn[En] = Cn), Un._jQueryInterface;
            });
        var Kn = "popover",
            $n = "bs.popover",
            Qn = "." + $n,
            Vn = p.fn[Kn],
            zn = "bs-popover",
            Yn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
            Xn = l({}, Un.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }),
            Gn = l({}, Un.DefaultType, {
                content: "(string|element|function)",
            }),
            Jn = "fade",
            Zn = "show",
            ei = ".popover-header",
            ti = ".popover-body",
            ni = {
                HIDE: "hide" + Qn,
                HIDDEN: "hidden" + Qn,
                SHOW: "show" + Qn,
                SHOWN: "shown" + Qn,
                INSERTED: "inserted" + Qn,
                CLICK: "click" + Qn,
                FOCUSIN: "focusin" + Qn,
                FOCUSOUT: "focusout" + Qn,
                MOUSEENTER: "mouseenter" + Qn,
                MOUSELEAVE: "mouseleave" + Qn,
            },
            ii = (function (e) {
                var t, n;
                function i() {
                    return e.apply(this, arguments) || this;
                }
                (n = e),
                    ((t = i).prototype = Object.create(n.prototype)),
                    ((t.prototype.constructor = t).__proto__ = n);
                var r = i.prototype;
                return (
                    (r.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (r.addAttachmentClass = function (e) {
                        p(this.getTipElement()).addClass(zn + "-" + e);
                    }),
                    (r.getTipElement = function () {
                        return (
                            (this.tip = this.tip || p(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (r.setContent = function () {
                        var e = p(this.getTipElement());
                        this.setElementContent(e.find(ei), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)),
                            this.setElementContent(e.find(ti), t),
                            e.removeClass(Jn + " " + Zn);
                    }),
                    (r._getContent = function () {
                        return (
                            this.element.getAttribute("data-content") ||
                            this.config.content
                        );
                    }),
                    (r._cleanTipClass = function () {
                        var e = p(this.getTipElement()),
                            t = e.attr("class").match(Yn);
                        null !== t && 0 < t.length && e.removeClass(t.join(""));
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = p(this).data($n),
                                t = "object" == typeof n ? n : null;
                            if (
                                (e || !/dispose|hide/.test(n)) &&
                                (e ||
                                    ((e = new i(this, t)), p(this).data($n, e)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === e[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                e[n]();
                            }
                        });
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Xn;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Kn;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return $n;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return ni;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return Qn;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Gn;
                            },
                        },
                    ]),
                    i
                );
            })(Un);
        (p.fn[Kn] = ii._jQueryInterface),
            (p.fn[Kn].Constructor = ii),
            (p.fn[Kn].noConflict = function () {
                return (p.fn[Kn] = Vn), ii._jQueryInterface;
            });
        var ri = "scrollspy",
            oi = "bs.scrollspy",
            si = "." + oi,
            ai = p.fn[ri],
            li = { offset: 10, method: "auto", target: "" },
            ui = {
                offset: "number",
                method: "string",
                target: "(string|element)",
            },
            ci = {
                ACTIVATE: "activate" + si,
                SCROLL: "scroll" + si,
                LOAD_DATA_API: "load" + si + ".data-api",
            },
            fi = "dropdown-item",
            hi = "active",
            di = '[data-spy="scroll"]',
            pi = ".nav, .list-group",
            gi = ".nav-link",
            mi = ".nav-item",
            vi = ".list-group-item",
            yi = ".dropdown",
            _i = ".dropdown-item",
            bi = ".dropdown-toggle",
            wi = "offset",
            Ei = "position",
            Ti = (function () {
                function n(e, t) {
                    var n = this;
                    (this._element = e),
                        (this._scrollElement =
                            "BODY" === e.tagName ? window : e),
                        (this._config = this._getConfig(t)),
                        (this._selector =
                            this._config.target +
                            " " +
                            gi +
                            "," +
                            this._config.target +
                            " " +
                            vi +
                            "," +
                            this._config.target +
                            " " +
                            _i),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        p(this._scrollElement).on(ci.SCROLL, function (e) {
                            return n._process(e);
                        }),
                        this.refresh(),
                        this._process();
                }
                var e = n.prototype;
                return (
                    (e.refresh = function () {
                        var t = this,
                            e =
                                this._scrollElement ===
                                this._scrollElement.window
                                    ? wi
                                    : Ei,
                            r =
                                "auto" === this._config.method
                                    ? e
                                    : this._config.method,
                            o = r === Ei ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .map(function (e) {
                                    var t,
                                        n = g.getSelectorFromElement(e);
                                    if (
                                        (n && (t = document.querySelector(n)),
                                        t)
                                    ) {
                                        var i = t.getBoundingClientRect();
                                        if (i.width || i.height)
                                            return [p(t)[r]().top + o, n];
                                    }
                                    return null;
                                })
                                .filter(function (e) {
                                    return e;
                                })
                                .sort(function (e, t) {
                                    return e[0] - t[0];
                                })
                                .forEach(function (e) {
                                    t._offsets.push(e[0]),
                                        t._targets.push(e[1]);
                                });
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, oi),
                            p(this._scrollElement).off(si),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (e._getConfig = function (e) {
                        if (
                            "string" !=
                            typeof (e = l(
                                {},
                                li,
                                "object" == typeof e && e ? e : {}
                            )).target
                        ) {
                            var t = p(e.target).attr("id");
                            t ||
                                ((t = g.getUID(ri)), p(e.target).attr("id", t)),
                                (e.target = "#" + t);
                        }
                        return g.typeCheckConfig(ri, e, ui), e;
                    }),
                    (e._getScrollTop = function () {
                        return this._scrollElement === window
                            ? this._scrollElement.pageYOffset
                            : this._scrollElement.scrollTop;
                    }),
                    (e._getScrollHeight = function () {
                        return (
                            this._scrollElement.scrollHeight ||
                            Math.max(
                                document.body.scrollHeight,
                                document.documentElement.scrollHeight
                            )
                        );
                    }),
                    (e._getOffsetHeight = function () {
                        return this._scrollElement === window
                            ? window.innerHeight
                            : this._scrollElement.getBoundingClientRect()
                                  .height;
                    }),
                    (e._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n =
                                this._config.offset +
                                t -
                                this._getOffsetHeight();
                        if (
                            (this._scrollHeight !== t && this.refresh(), n <= e)
                        ) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (
                                this._activeTarget &&
                                e < this._offsets[0] &&
                                0 < this._offsets[0]
                            )
                                return (
                                    (this._activeTarget = null),
                                    void this._clear()
                                );
                            for (var r = this._offsets.length; r--; ) {
                                this._activeTarget !== this._targets[r] &&
                                    e >= this._offsets[r] &&
                                    (void 0 === this._offsets[r + 1] ||
                                        e < this._offsets[r + 1]) &&
                                    this._activate(this._targets[r]);
                            }
                        }
                    }),
                    (e._activate = function (t) {
                        (this._activeTarget = t), this._clear();
                        var e = this._selector.split(",").map(function (e) {
                                return (
                                    e +
                                    '[data-target="' +
                                    t +
                                    '"],' +
                                    e +
                                    '[href="' +
                                    t +
                                    '"]'
                                );
                            }),
                            n = p(
                                [].slice.call(
                                    document.querySelectorAll(e.join(","))
                                )
                            );
                        n.hasClass(fi)
                            ? (n.closest(yi).find(bi).addClass(hi),
                              n.addClass(hi))
                            : (n.addClass(hi),
                              n
                                  .parents(pi)
                                  .prev(gi + ", " + vi)
                                  .addClass(hi),
                              n.parents(pi).prev(mi).children(gi).addClass(hi)),
                            p(this._scrollElement).trigger(ci.ACTIVATE, {
                                relatedTarget: t,
                            });
                    }),
                    (e._clear = function () {
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .filter(function (e) {
                                return e.classList.contains(hi);
                            })
                            .forEach(function (e) {
                                return e.classList.remove(hi);
                            });
                    }),
                    (n._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = p(this).data(oi);
                            if (
                                (e ||
                                    ((e = new n(
                                        this,
                                        "object" == typeof t && t
                                    )),
                                    p(this).data(oi, e)),
                                "string" == typeof t)
                            ) {
                                if (void 0 === e[t])
                                    throw new TypeError(
                                        'No method named "' + t + '"'
                                    );
                                e[t]();
                            }
                        });
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return li;
                            },
                        },
                    ]),
                    n
                );
            })();
        p(window).on(ci.LOAD_DATA_API, function () {
            for (
                var e = [].slice.call(document.querySelectorAll(di)),
                    t = e.length;
                t--;

            ) {
                var n = p(e[t]);
                Ti._jQueryInterface.call(n, n.data());
            }
        }),
            (p.fn[ri] = Ti._jQueryInterface),
            (p.fn[ri].Constructor = Ti),
            (p.fn[ri].noConflict = function () {
                return (p.fn[ri] = ai), Ti._jQueryInterface;
            });
        var xi = "bs.tab",
            Ci = "." + xi,
            Si = p.fn.tab,
            Di = {
                HIDE: "hide" + Ci,
                HIDDEN: "hidden" + Ci,
                SHOW: "show" + Ci,
                SHOWN: "shown" + Ci,
                CLICK_DATA_API: "click" + Ci + ".data-api",
            },
            Ai = "dropdown-menu",
            Ni = "active",
            Ii = "disabled",
            ki = "fade",
            Oi = "show",
            Li = ".dropdown",
            ji = ".nav, .list-group",
            Hi = ".active",
            Pi = "> li > .active",
            Fi =
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            qi = ".dropdown-toggle",
            Ri = "> .dropdown-menu .active",
            Mi = (function () {
                function i(e) {
                    this._element = e;
                }
                var e = i.prototype;
                return (
                    (e.show = function () {
                        var n = this;
                        if (
                            !(
                                (this._element.parentNode &&
                                    this._element.parentNode.nodeType ===
                                        Node.ELEMENT_NODE &&
                                    p(this._element).hasClass(Ni)) ||
                                p(this._element).hasClass(Ii)
                            )
                        ) {
                            var e,
                                i,
                                t = p(this._element).closest(ji)[0],
                                r = g.getSelectorFromElement(this._element);
                            if (t) {
                                var o =
                                    "UL" === t.nodeName || "OL" === t.nodeName
                                        ? Pi
                                        : Hi;
                                i = (i = p.makeArray(p(t).find(o)))[
                                    i.length - 1
                                ];
                            }
                            var s = p.Event(Di.HIDE, {
                                    relatedTarget: this._element,
                                }),
                                a = p.Event(Di.SHOW, { relatedTarget: i });
                            if (
                                (i && p(i).trigger(s),
                                p(this._element).trigger(a),
                                !a.isDefaultPrevented() &&
                                    !s.isDefaultPrevented())
                            ) {
                                r && (e = document.querySelector(r)),
                                    this._activate(this._element, t);
                                var l = function () {
                                    var e = p.Event(Di.HIDDEN, {
                                            relatedTarget: n._element,
                                        }),
                                        t = p.Event(Di.SHOWN, {
                                            relatedTarget: i,
                                        });
                                    p(i).trigger(e), p(n._element).trigger(t);
                                };
                                e ? this._activate(e, e.parentNode, l) : l();
                            }
                        }
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, xi), (this._element = null);
                    }),
                    (e._activate = function (e, t, n) {
                        var i = this,
                            r = (
                                !t ||
                                ("UL" !== t.nodeName && "OL" !== t.nodeName)
                                    ? p(t).children(Hi)
                                    : p(t).find(Pi)
                            )[0],
                            o = n && r && p(r).hasClass(ki),
                            s = function () {
                                return i._transitionComplete(e, r, n);
                            };
                        if (r && o) {
                            var a = g.getTransitionDurationFromElement(r);
                            p(r)
                                .removeClass(Oi)
                                .one(g.TRANSITION_END, s)
                                .emulateTransitionEnd(a);
                        } else s();
                    }),
                    (e._transitionComplete = function (e, t, n) {
                        if (t) {
                            p(t).removeClass(Ni);
                            var i = p(t.parentNode).find(Ri)[0];
                            i && p(i).removeClass(Ni),
                                "tab" === t.getAttribute("role") &&
                                    t.setAttribute("aria-selected", !1);
                        }
                        if (
                            (p(e).addClass(Ni),
                            "tab" === e.getAttribute("role") &&
                                e.setAttribute("aria-selected", !0),
                            g.reflow(e),
                            e.classList.contains(ki) && e.classList.add(Oi),
                            e.parentNode && p(e.parentNode).hasClass(Ai))
                        ) {
                            var r = p(e).closest(Li)[0];
                            if (r) {
                                var o = [].slice.call(r.querySelectorAll(qi));
                                p(o).addClass(Ni);
                            }
                            e.setAttribute("aria-expanded", !0);
                        }
                        n && n();
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = p(this),
                                t = e.data(xi);
                            if (
                                (t || ((t = new i(this)), e.data(xi, t)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === t[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                t[n]();
                            }
                        });
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    i
                );
            })();
        p(document).on(Di.CLICK_DATA_API, Fi, function (e) {
            e.preventDefault(), Mi._jQueryInterface.call(p(this), "show");
        }),
            (p.fn.tab = Mi._jQueryInterface),
            (p.fn.tab.Constructor = Mi),
            (p.fn.tab.noConflict = function () {
                return (p.fn.tab = Si), Mi._jQueryInterface;
            });
        var Wi = "toast",
            Bi = "bs.toast",
            Ui = "." + Bi,
            Ki = p.fn[Wi],
            $i = {
                CLICK_DISMISS: "click.dismiss" + Ui,
                HIDE: "hide" + Ui,
                HIDDEN: "hidden" + Ui,
                SHOW: "show" + Ui,
                SHOWN: "shown" + Ui,
            },
            Qi = "fade",
            Vi = "hide",
            zi = "show",
            Yi = "showing",
            Xi = { animation: "boolean", autohide: "boolean", delay: "number" },
            Gi = { animation: !0, autohide: !0, delay: 500 },
            Ji = '[data-dismiss="toast"]',
            Zi = (function () {
                function i(e, t) {
                    (this._element = e),
                        (this._config = this._getConfig(t)),
                        (this._timeout = null),
                        this._setListeners();
                }
                var e = i.prototype;
                return (
                    (e.show = function () {
                        var e = this;
                        p(this._element).trigger($i.SHOW),
                            this._config.animation &&
                                this._element.classList.add(Qi);
                        var t = function () {
                            e._element.classList.remove(Yi),
                                e._element.classList.add(zi),
                                p(e._element).trigger($i.SHOWN),
                                e._config.autohide && e.hide();
                        };
                        if (
                            (this._element.classList.remove(Vi),
                            this._element.classList.add(Yi),
                            this._config.animation)
                        ) {
                            var n = g.getTransitionDurationFromElement(
                                this._element
                            );
                            p(this._element)
                                .one(g.TRANSITION_END, t)
                                .emulateTransitionEnd(n);
                        } else t();
                    }),
                    (e.hide = function (e) {
                        var t = this;
                        this._element.classList.contains(zi) &&
                            (p(this._element).trigger($i.HIDE),
                            e
                                ? this._close()
                                : (this._timeout = setTimeout(function () {
                                      t._close();
                                  }, this._config.delay)));
                    }),
                    (e.dispose = function () {
                        clearTimeout(this._timeout),
                            (this._timeout = null),
                            this._element.classList.contains(zi) &&
                                this._element.classList.remove(zi),
                            p(this._element).off($i.CLICK_DISMISS),
                            p.removeData(this._element, Bi),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (e._getConfig = function (e) {
                        return (
                            (e = l(
                                {},
                                Gi,
                                p(this._element).data(),
                                "object" == typeof e && e ? e : {}
                            )),
                            g.typeCheckConfig(
                                Wi,
                                e,
                                this.constructor.DefaultType
                            ),
                            e
                        );
                    }),
                    (e._setListeners = function () {
                        var e = this;
                        p(this._element).on($i.CLICK_DISMISS, Ji, function () {
                            return e.hide(!0);
                        });
                    }),
                    (e._close = function () {
                        var e = this,
                            t = function () {
                                e._element.classList.add(Vi),
                                    p(e._element).trigger($i.HIDDEN);
                            };
                        if (
                            (this._element.classList.remove(zi),
                            this._config.animation)
                        ) {
                            var n = g.getTransitionDurationFromElement(
                                this._element
                            );
                            p(this._element)
                                .one(g.TRANSITION_END, t)
                                .emulateTransitionEnd(n);
                        } else t();
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = p(this),
                                t = e.data(Bi);
                            if (
                                (t ||
                                    ((t = new i(
                                        this,
                                        "object" == typeof n && n
                                    )),
                                    e.data(Bi, t)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === t[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                t[n](this);
                            }
                        });
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Xi;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Gi;
                            },
                        },
                    ]),
                    i
                );
            })();
        (p.fn[Wi] = Zi._jQueryInterface),
            (p.fn[Wi].Constructor = Zi),
            (p.fn[Wi].noConflict = function () {
                return (p.fn[Wi] = Ki), Zi._jQueryInterface;
            }),
            (function () {
                if (void 0 === p)
                    throw new TypeError(
                        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                    );
                var e = p.fn.jquery.split(" ")[0].split(".");
                if (
                    (e[0] < 2 && e[1] < 9) ||
                    (1 === e[0] && 9 === e[1] && e[2] < 1) ||
                    4 <= e[0]
                )
                    throw new Error(
                        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                    );
            })(),
            (e.Util = g),
            (e.Alert = m),
            (e.Button = k),
            (e.Carousel = ae),
            (e.Collapse = Te),
            (e.Dropdown = Yt),
            (e.Modal = mn),
            (e.Popover = ii),
            (e.Scrollspy = Ti),
            (e.Tab = Mi),
            (e.Toast = Zi),
            (e.Tooltip = Un),
            Object.defineProperty(e, "__esModule", { value: !0 });
    });
